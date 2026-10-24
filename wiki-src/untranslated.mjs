// Prints strings that have no Russian translation yet (mostly item and skill names, which stay English on purpose).
import fs from "node:fs";
const dir = new URL(".", import.meta.url);
const strings = JSON.parse(fs.readFileSync(new URL("strings.json", dir)));
const ru = JSON.parse(fs.readFileSync(new URL("ru.json", dir)));
const left = strings.filter(s => !(s in ru));
const wordy = left.filter(s => (s.match(/\b[a-z]{3,}\b/g) || []).length >= 3);
console.log(`${left.length} untranslated, ${wordy.length} look like sentences:`);
for (const s of wordy) console.log("  " + s);
