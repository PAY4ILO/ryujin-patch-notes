// Pulls new patch posts from a Discord channel into data.js (English only, translated later by hand)
// and moves posts older than KEEP_DAYS out of the page into archive/<month>.json.
// Env: DISCORD_TOKEN (bot token), DISCORD_CHANNEL_ID. Run by .github/workflows/discord-sync.yml.
// `node sync/discord-sync.mjs --dry <messages.json>` parses saved messages instead of calling Discord.
import fs from "node:fs";

const root = new URL("../", import.meta.url);
const file = f => new URL(f, root);
const KEEP_DAYS = 15;
const TZ = "Europe/Moscow";
const DISCORD_EPOCH = 1420070400000n;

const statePath = file("sync/state.json");
const state = fs.existsSync(statePath) ? JSON.parse(fs.readFileSync(statePath)) : {};

// ---------- data.js read / write ----------
function loadPatches() {
  const src = fs.readFileSync(file("data.js"), "utf8");
  const head = src.slice(0, src.indexOf("window.PATCHES"));
  const window = {};
  new Function("window", src)(window);
  return { head, patches: window.PATCHES };
}
const q = JSON.stringify;
function serialize(p) {
  const items = (arr, ind) => arr.map(([e, r]) => `${ind}[${q(e)}, ${q(r)}]`).join(",\n");
  const lines = [`  id: ${q(p.id)}, d: ${q(p.d)}${p.kind ? `, kind: ${q(p.kind)}` : ""}${p.tr === false ? ", tr: false" : ""}`];
  if (p.approx) lines.push(`  approx: ${q(p.approx)}`);
  if (p.title) lines.push(`  title: ${q(p.title)}`);
  if (p.items) lines.push(`  items: [\n${items(p.items, "    ")}\n  ]`);
  if (p.sections) lines.push(`  sections: [\n${p.sections.map(s => `    { h: ${q(s.h)}, items: [\n${items(s.items, "      ")}\n    ]}`).join(",\n")}\n  ]`);
  if (p.note) lines.push(`  note: ${q(p.note)}`);
  return `{\n${lines.join(",\n")}\n}`;
}
function savePatches(head, patches) {
  patches.sort((a, b) => a.d.localeCompare(b.d));
  fs.writeFileSync(file("data.js"), head + "window.PATCHES = [\n" + patches.map(serialize).join(",\n") + "\n];\n");
}

// ---------- message -> post ----------
const NOISE = /^(fixed!?|should be fixed|applied (a |another |yet another )?(potential )?fix( to)?|not published( yet)?|published|nothing published( yet)?|@update ping.*|new servers only\s*\^?|\^+)$/i;
function cleanLine(l) {
  return l
    .replace(/<a?:\w+:\d+>/g, "")                // custom emoji
    .replace(/<@[!&]?\d+>|<#\d+>|@everyone|@here/g, "")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/\s*\((edited|изменено)\)\s*$/i, "")
    .replace(/^\s*(?:[*•\-–]|\d+\.)\s+/, "")
    .replace(/^,\s*$/, "")
    .replace(/[,\s]+$/, "")
    .replace(/\*\*|__|`/g, "")
    .replace(/\s(?:->|=>|>)\s/g, " → ")
    .trim();
}
const isHeader = (l, next) => next && l.length <= 32 && !/[.:!?]$/.test(l) && !/\d/.test(l) &&
  !/^(fixed|fixes|added|removed|changed|reduced|increased|made|you|players?|now|the|all)\b/i.test(l) && l.split(/\s+/).length <= 4;
const fmtDate = ms => {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
    .formatToParts(new Date(ms)).map(x => [x.type, x.value]));
  return `${p.year}-${p.month}-${p.day} ${p.hour}:${p.minute}`;
};

export function toPost(m) {
  const text = [m.content || "", ...(m.embeds || []).flatMap(e => [e.title, e.description, ...(e.fields || []).map(f => `${f.name}\n${f.value}`)])]
    .filter(Boolean).join("\n");
  const lines = text.split("\n").map(cleanLine).filter(l => l && !NOISE.test(l));
  if (!lines.length) return null;
  const sections = [];
  let cur = { h: null, items: [] }, title = null;
  lines.forEach((l, i) => {
    if (isHeader(l, lines[i + 1])) {
      if (cur.items.length) sections.push(cur);
      else if (cur.h && !title && !sections.length) title = cur.h; // a lone first header ("Balance Patch") is the post title
      cur = { h: [l, l], items: [] };
    } else cur.items.push([l, l]);
  });
  sections.push(cur);
  const real = sections.filter(s => s.items.length);
  if (!real.length) return null;
  // A post that is a single short change with no detail ("Fixed", "Fixed This Bug") is not worth listing.
  const all = real.flatMap(s => s.items);
  if (all.length === 1 && all[0][0].split(/\s+/).length < 3) return null;
  const post = { id: "dc-" + m.id, d: fmtDate(Date.parse(m.timestamp)), tr: false };
  if (title) post.title = title;
  if (real.length === 1 && !real[0].h) post.items = real[0].items;
  else post.sections = real.map(s => ({ h: s.h || ["Changes", "Изменения"], items: s.items }));
  return post;
}

// ---------- Discord ----------
async function fetchSince(after) {
  const token = process.env.DISCORD_TOKEN, channel = process.env.DISCORD_CHANNEL_ID;
  if (!token || !channel) throw new Error("DISCORD_TOKEN and DISCORD_CHANNEL_ID must be set");
  const out = [];
  for (;;) {
    const r = await fetch(`https://discord.com/api/v10/channels/${channel}/messages?limit=100&after=${after}`, {
      headers: { Authorization: `Bot ${token}`, "User-Agent": "ryujin-patch-notes-sync (github actions, 1.0)" }
    });
    if (r.status === 429) {
      const wait = 1000 * ((await r.json()).retry_after || 2);
      await new Promise(res => setTimeout(res, wait));
      continue;
    }
    if (!r.ok) throw new Error(`Discord ${r.status}: ${await r.text()}`);
    const batch = await r.json();
    if (!batch.length) break;
    batch.sort((a, b) => (BigInt(a.id) < BigInt(b.id) ? -1 : 1));
    out.push(...batch);
    after = batch[batch.length - 1].id;
    if (batch.length < 100) break;
  }
  return out;
}

// ---------- main ----------
const dry = process.argv[2] === "--dry";
const { head, patches } = loadPatches();
let messages;
if (dry) messages = JSON.parse(fs.readFileSync(process.argv[3]));
else {
  // First run: start right after the newest post already on the site.
  const newest = patches.map(p => p.d).sort().pop() || "2026-10-25 00:00";
  const startMs = BigInt(Date.parse(newest.replace(" ", "T") + ":00+03:00"));
  const after = state.lastId || String((startMs - DISCORD_EPOCH) << 22n);
  messages = await fetchSince(after);
}

const have = new Set(patches.map(p => p.id));
let added = 0;
for (const m of messages) {
  const post = toPost(m);
  if (post && !have.has(post.id)) { patches.push(post); have.add(post.id); added++; }
  if (!dry) state.lastId = m.id;
}

// Move old posts to the archive so they can be folded into the wiki later.
const cutoff = fmtDate(Date.now() - KEEP_DAYS * 864e5);
const old = patches.filter(p => p.d < cutoff);
const keep = patches.filter(p => p.d >= cutoff);
if (!dry && old.length) {
  fs.mkdirSync(file("archive"), { recursive: true });
  for (const p of old) {
    const f = file(`archive/${p.d.slice(0, 7)}.json`);
    const arr = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f)) : [];
    if (!arr.some(x => x.id === p.id)) arr.push(p);
    fs.writeFileSync(f, JSON.stringify(arr, null, 1) + "\n");
  }
}

if (dry) {
  console.log(JSON.stringify(messages.map(toPost).filter(Boolean), null, 1));
} else {
  if (added || old.length) savePatches(head, keep);
  fs.mkdirSync(file("sync"), { recursive: true });
  fs.writeFileSync(statePath, JSON.stringify(state, null, 1) + "\n");
  console.log(`messages: ${messages.length}, new posts: ${added}, archived: ${old.length}`);
}
