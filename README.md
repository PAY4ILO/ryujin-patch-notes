# Ryujin patch notes and wiki

Searchable Ryujin (Roblox) patch notes and a wiki built from the public Ryujin Trello board, in Russian and English.
Site: https://pay4ilo.github.io/ryujin-patch-notes/

- `index.html` + `app.js` + `data.js`: patch notes. To add a post, append an entry to `data.js` (format at the top of the file).
- `wiki.html` + `wiki.js`: the wiki. Its data, `wiki/data.js` and `wiki/img/`, is generated, so don't edit it by hand.
- `style.css`: shared styles.

## Updating the wiki from Trello

```bash
cd wiki-src
curl -L -o board.json https://trello.com/b/zIEiIixd/ryujin.json
npm install
npm run build          # extract cards, download new images, render wiki/data.js
node untranslated.mjs  # lines that still have no Russian translation
```

Translations live in `wiki-src/ru.json`, keyed by the original English line. In each line, `[[shortLink]]` is a link to another card and `§1` is a URL. Lines without a translation are shown in English.
