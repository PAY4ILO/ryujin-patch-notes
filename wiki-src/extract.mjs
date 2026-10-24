// board.json (public Trello export) -> cards.json + strings.json (unique lines to translate)
import fs from "node:fs";
const dir = new URL(".", import.meta.url);
const b = JSON.parse(fs.readFileSync(new URL("board.json", dir)));
const SKIP_LISTS = new Set(["Old Events", "General Info"]);
const lists = b.lists.filter(l => !l.closed && !SKIP_LISTS.has(l.name)).sort((a, c) => a.pos - c.pos);
const listIds = new Set(lists.map(l => l.id));
const byId = Object.fromEntries(b.cards.map(c => [c.id, c]));
const cards = b.cards
  .filter(c => !c.closed && listIds.has(c.idList) && c.name.trim() !== "---")
  .sort((a, c) => a.pos - c.pos);
const shortOk = new Set(cards.map(c => c.shortLink));

// Normalise one description: smart card links -> [[shortLink]], drop link titles.
function normalise(desc) {
  return desc
    .replace(/\[(https:\/\/trello\.com\/c\/([A-Za-z0-9]{8})[^\]]*)\]\(https:\/\/trello\.com\/c\/[^)]*\)/g, (m, u, s) => `[[${s}]]`)
    .replace(/\]\((\S+?)\s+"[^"]*"\)/g, "]($1)")
    .replace(/\r/g, "");
}
// A line's translation key: URLs replaced by §1, §2...
export function keyOf(line) {
  const urls = [];
  const key = line.replace(/\]\(([^)]+)\)/g, (m, u) => { urls.push(u); return `](§${urls.length})`; });
  return { key, urls };
}
const needs = l => {
  const t = l.trim();
  if (!t || /^-{3,}$/.test(t) || /^!\[[^\]]*\]\([^)]*\)$/.test(t)) return false;
  const bare = t.replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[\[[A-Za-z0-9]{8}\]\]/g, "").replace(/\]\([^)]*\)/g, "]");
  return /[A-Za-z]{2,}/.test(bare);
};

const strings = new Map();
const add = (s, where) => { if (!strings.has(s)) strings.set(s, where); };
lists.forEach(l => add(l.name, "list"));
const out = cards.map(c => {
  const desc = normalise(c.desc);
  add(c.name, "title");
  for (const line of desc.split("\n")) if (needs(line)) add(keyOf(line.trim()).key, c.shortLink);
  const atts = Object.fromEntries((c.attachments || []).map(a => {
    const prev = (a.previews || []).filter(p => p.width <= 900).sort((x, y) => y.width - x.width)[0];
    return [a.id, { name: a.name, mime: a.mimeType, url: a.url, preview: prev ? prev.url : null, w: prev?.width, h: prev?.height }];
  }));
  return { id: c.id, short: c.shortLink, list: c.idList, name: c.name, desc, cover: c.cover?.idAttachment || null, atts, updated: c.dateLastActivity };
});
fs.writeFileSync(new URL("cards.json", dir), JSON.stringify({ lists: lists.map(l => ({ id: l.id, name: l.name })), cards: out, exported: b.dateLastActivity }, null, 1));
fs.writeFileSync(new URL("strings.json", dir), JSON.stringify([...strings.keys()], null, 1));
const chars = [...strings.keys()].reduce((n, s) => n + s.length, 0);
console.log(`${lists.length} lists, ${out.length} cards, ${strings.size} strings, ${chars} chars; dangling card links:`,
  [...new Set([...out.map(c => c.desc).join("\n").matchAll(/\[\[([A-Za-z0-9]{8})\]\]/g)].map(m => m[1]).filter(s => !shortOk.has(s)))].length);
