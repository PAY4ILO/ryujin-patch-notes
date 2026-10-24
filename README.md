# Ryujin patch notes and wiki

Ryujin (Roblox) patch notes and a wiki built from the public Ryujin Trello board, in English and Russian, with search.
Site: https://pay4ilo.github.io/ryujin-patch-notes/ (English by default).

- `index.html` + `app.js` + `data.js`: patch notes. Only the latest two weeks are kept.
- `wiki.html` + `wiki.js`: the wiki. Its data, `wiki/data.js` and `wiki/img/`, is generated, so don't edit it by hand.
- `style.css`: shared styles.

## Every half month

1. Fold anything from patch notes older than two weeks that changes wiki facts into `wiki-src/fixes.json`. Each entry names a card (its Trello short link), replaces whole lines in English and Russian or appends text, and carries a short note. The wiki shows that note on the card as "Updated from patch notes".
2. Delete those old posts from `data.js`.
3. Rebuild the wiki (below). When Trello itself catches up, the build prints a warning for every fix whose old line is gone; delete those fixes.

## Rebuilding the wiki from Trello

```bash
cd wiki-src
curl -L -o board.json https://trello.com/b/zIEiIixd/ryujin.json
npm install
npm run build          # extract cards, download new images, apply fixes, render wiki/data.js
node untranslated.mjs  # lines that still have no Russian translation
```

Translations live in `wiki-src/ru.json`, keyed by the original English line. In each line, `[[shortLink]]` is a link to another card and `§1` is a URL. Lines without a translation are shown in English.
