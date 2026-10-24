# Ryujin patch notes + wiki: handoff

Site: https://pay4ilo.github.io/ryujin-patch-notes/ (repo PAY4ILO/ryujin-patch-notes, Pages from main /root). See README.md for the structure and update steps.

## State (25.10.2026)
- Patch notes (`data.js`): only posts from 15.10 on, no author names, English by default, RU/EN toggle. Keep only the last ~2 weeks.
- Wiki (`wiki.html`): 365 Trello cards. The General Info list is removed. Translations are in `wiki-src/ru.json`. Corrections from patch notes newer than Trello are in `wiki-src/fixes.json` (23 cards; the card shows "Updated from patch notes").
- Discord auto-sync: `.github/workflows/discord-sync.yml` + `sync/discord-sync.mjs`. Every 2 h it adds new posts in English with `tr: false` and moves posts older than 15 days to `archive/<month>.json`. The job is skipped until the repo variable `DISCORD_CHANNEL_ID` is set.

## Waiting on the user
- The user is creating the Discord bot and adding secret `DISCORD_TOKEN` and variable `DISCORD_CHANNEL_ID` on GitHub. After that: run the workflow by hand (Actions → Discord sync → Run workflow) and check the result. Only a mocked run has been done, never against real Discord.

## On request
- "Translate": fill in the RU side of `[en, ru]` pairs for posts with `tr: false` and remove the flag.
- Every half month: fold changes from `archive/` and old posts into `wiki-src/fixes.json`, then `cd wiki-src && npm run build`.
- When translating Trello batches, check that each RU line has the same numbers as its EN line: a whole block once landed one line off.

## User preferences
- No author names anywhere. English by default. Phones matter. Reply in Russian, briefly.
