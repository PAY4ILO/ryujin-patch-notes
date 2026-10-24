// Downloads every Trello-hosted image the wiki uses (previews, webp) into ../wiki/img/<attachmentId>.webp.
// Already downloaded files are skipped, so re-running after a Trello update only fetches new ones.
import fs from "node:fs";
const dir = new URL(".", import.meta.url);
const out = new URL("../wiki/img/", dir);
fs.mkdirSync(out, { recursive: true });
const { cards } = JSON.parse(fs.readFileSync(new URL("cards.json", dir)));
const att = Object.assign({}, ...cards.map(c => c.atts));
const ids = new Set();
for (const c of cards) {
  if (c.cover && att[c.cover]) ids.add(c.cover);
  for (const m of c.desc.matchAll(/!\[[^\]]*\]\(https:\/\/trello\.com\/1\/cards\/[0-9a-f]+\/attachments\/([0-9a-f]{24})/g))
    if (att[m[1]]) ids.add(m[1]);
}
const todo = [...ids].filter(id => !fs.existsSync(new URL(id + ".webp", out)));
console.log(`${ids.size} images, ${todo.length} to fetch`);
let done = 0, failed = [];
async function one(id) {
  const url = att[id].preview || att[id].url;
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { redirect: "follow" });
      if (!r.ok) throw new Error(r.status);
      fs.writeFileSync(new URL(id + ".webp", out), Buffer.from(await r.arrayBuffer()));
      return;
    } catch (e) { if (i === 2) failed.push(id + " " + e.message); }
  }
}
const queue = todo.slice();
await Promise.all(Array.from({ length: 8 }, async () => {
  while (queue.length) { await one(queue.shift()); if (++done % 100 === 0) console.log(done); }
}));
console.log("done", done, "failed", failed.length, failed.slice(0, 5));
