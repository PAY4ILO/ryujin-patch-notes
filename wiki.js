(() => {
  const W = window.WIKI;
  const PATCHES = window.PATCHES || [];

  const plural = (n, one, few, many) => {
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  };
  const exported = W.exported.slice(0, 10);
  const T = {
    ru: {
      h1: "вики", navNotes: "Патчноуты", navWiki: "Вики", sections: "Разделы",
      sub: "Актуальная информация с официального Trello Ryujin, переведённая на русский. Поиск ищет сразу на двух языках.",
      search: "Поиск по вики: скилл, NPC, предмет…", clear: "Сбросить",
      home: "Вики", homeTitle: "Разделы",
      stats: (c, l, d) => `${c} ${plural(c, "карточка", "карточки", "карточек")} · ${l} ${plural(l, "раздел", "раздела", "разделов")} · Trello от ${d}`,
      cards: n => `${n} ${plural(n, "карточка", "карточки", "карточек")}`,
      found: n => n ? `Найдено: ${n} ${plural(n, "карточка", "карточки", "карточек")}` : "Ничего не нашлось. Попробуй другое слово.",
      back: "← к результатам",
      related: "Связанные изменения из патчноутов", newer: "новее Trello", allNotes: "все в патчноутах",
      fixed: "Обновлено по патчноутам (в Trello ещё старое)",
      trello: "Открыть в Trello", updated: "карточка обновлена",
      footer: `Неофициальный перевод открытого Trello Ryujin (выгрузка ${exported}). Если в патчах что-то поменялось позже — смотри блок «Связанные изменения» в карточке.`,
      locale: "ru-RU"
    },
    en: {
      h1: "wiki", navNotes: "Patch notes", navWiki: "Wiki", sections: "Sections",
      sub: "Up-to-date info from the official Ryujin Trello board, translated into Russian. Search looks in both languages.",
      search: "Search the wiki: skill, NPC, item…", clear: "Clear",
      home: "Wiki", homeTitle: "Sections",
      stats: (c, l, d) => `${c} cards · ${l} sections · Trello as of ${d}`,
      cards: n => `${n} ${n === 1 ? "card" : "cards"}`,
      found: n => n ? `${n} ${n === 1 ? "card" : "cards"} found` : "Nothing found. Try another word.",
      back: "← back to results",
      related: "Related patch note changes", newer: "newer than Trello", allNotes: "all in patch notes",
      fixed: "Updated from patch notes (Trello still has the old info)",
      trello: "Open in Trello", updated: "card updated",
      footer: `Unofficial copy of the public Ryujin Trello board (exported ${exported}). If a patch changed something later, check the “Related changes” box on the card.`,
      locale: "en-GB"
    }
  };

  const norm = s => s.toLowerCase().replace(/ё/g, "е");
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const unesc = s => s.replace(/&(amp|lt|gt|quot|#39);/g, (m, e) => ({ amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'" }[e]));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} }
  };
  const $ = id => document.getElementById(id);

  const params = new URLSearchParams(location.search);
  const state = {
    lang: params.get("lang") || store.get("rpn-lang") || "en",
    q: params.get("q") || ""
  };
  if (!T[state.lang]) state.lang = "en";
  const li = () => (state.lang === "ru" ? 1 : 0);
  const input = $("q");
  input.value = state.q;

  const themes = ["auto", "light", "dark"];
  let theme = store.get("rpn-theme") || "auto";
  const applyTheme = () => theme === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", theme);
  applyTheme();
  $("theme").onclick = () => { theme = themes[(themes.indexOf(theme) + 1) % themes.length]; store.set("rpn-theme", theme); applyTheme(); };

  // Plain text of every card in both languages, built on first search.
  let texts = null;
  function searchIndex() {
    if (texts) return texts;
    texts = {};
    for (const [s, c] of Object.entries(W.cards)) {
      const t = c.h.map(h => unesc(h.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim());
      texts[s] = { t, hay: norm(c.n.join(" ") + " " + t.join(" ")), names: norm(c.n.join(" ")) };
    }
    return texts;
  }
  // Russian words change endings («стамина» / «стамины»), so long Cyrillic words are matched by their stem.
  const stem = t => /[а-я]/.test(t) && t.length >= 5 ? t.slice(0, t.length - (t.length >= 7 ? 2 : 1)) : t;
  const tokens = () => norm(state.q).split(/\s+/).filter(Boolean).map(stem);

  function highlight(text, toks) {
    let out = esc(text);
    if (!toks.length) return out;
    const n = norm(text), ranges = [];
    for (const t of toks) for (let i = n.indexOf(t); i !== -1; i = n.indexOf(t, i + t.length)) ranges.push([i, i + t.length]);
    if (!ranges.length) return out;
    ranges.sort((a, b) => a[0] - b[0]);
    const merged = [ranges[0].slice()];
    for (const r of ranges.slice(1)) {
      const last = merged[merged.length - 1];
      if (r[0] <= last[1]) last[1] = Math.max(last[1], r[1]); else merged.push(r.slice());
    }
    out = ""; let pos = 0;
    for (const [a, b] of merged) { out += esc(text.slice(pos, a)) + "<mark>" + esc(text.slice(a, b)) + "</mark>"; pos = b; }
    return out + esc(text.slice(pos));
  }

  // Highlights search words inside rendered card HTML without touching tags.
  function markIn(root, toks) {
    if (!toks.length) return null;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const n = norm(node.nodeValue);
      if (!toks.some(t => n.includes(t))) continue;
      const span = document.createElement("span");
      span.innerHTML = highlight(node.nodeValue, toks);
      node.replaceWith(...span.childNodes);
    }
    return root.querySelector("mark");
  }

  // Patch note items that mention a card by name.
  const STOP = new Set(["Index", "Links", "Map", "Phone", "Stats", "Faces", "Foods", "General", "Common", "Rare", "Uncommon",
    "Legendary", "Mythic", "Mythics", "Evolved", "Codes", "Keybinds", "Bundles", "Emotes", "Trainings", "Cards", "School",
    "Library", "Museum", "Prison", "Warehouse", "Infirmary", "Cuts", "Mounts", "Fame", "Bounty", "Raids", "Missions"]);
  const patchItems = PATCHES.filter(p => p.kind !== "milestone").flatMap(p =>
    (p.sections || [{ items: p.items || [] }]).flatMap(s => s.items.map(([en, ru]) => ({ en, ru, d: p.d, approx: p.approx, h: s.h }))));
  function keysFor(name) {
    return name.split("(")[0].split("/").map(s => s.trim().replace(/[’']s$/, "")).filter(k => k.length >= 4 && !STOP.has(k));
  }
  function relatedFor(card) {
    const keys = keysFor(card.n[0]);
    if (!keys.length) return { keys, items: [] };
    const res = keys.map(k => new RegExp("(^|[^A-Za-z])" + k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/[’']/g, "[’']") + "([^A-Za-z]|$)"));
    const seen = new Set();
    const items = patchItems.filter(it => res.some(r => r.test(it.en + " " + (it.h ? it.h[0] : ""))) && !seen.has(it.en) && seen.add(it.en));
    return { keys, items: items.sort((a, b) => b.d.localeCompare(a.d)) };
  }

  const listName = i => W.lists[i].n[li()];
  const cardName = s => W.cards[s].n[li()];

  function renderSide(curCard, curList) {
    const L = T[state.lang];
    $("side").innerHTML = `<div class="side-head"><span>${esc(L.sections)}</span><button class="icon-btn" id="sideClose">✕</button></div>` +
      W.lists.map((l, i) => {
        const open = i === curList || (curCard && W.cards[curCard].l === i);
        return `<details${open ? " open" : ""}><summary>${esc(l.n[li()])} <small>${l.cards.length}</small></summary><ul>` +
          l.cards.map(s => `<li><a href="#c-${s}"${s === curCard ? ' aria-current="page"' : ""}>${esc(cardName(s))}</a></li>`).join("") +
          `</ul></details>`;
      }).join("");
    $("sideClose").onclick = () => document.body.classList.remove("side-open");
    const cur = $("side").querySelector("[aria-current]");
    if (cur && window.innerWidth > 900) cur.scrollIntoView({ block: "nearest" });
  }

  function viewHome() {
    const L = T[state.lang];
    const nCards = Object.keys(W.cards).length;
    return `<h2 class="page-title">${esc(L.homeTitle)}</h2>
      <p class="page-sub">${esc(L.stats(nCards, W.lists.length, exported))}</p>
      <div class="tiles">${W.lists.map((l, i) => `<a class="tile" href="#s-${i}">
        <div class="count">${esc(L.cards(l.cards.length))}</div><b>${esc(l.n[li()])}</b>
        <span>${esc(l.cards.slice(0, 4).map(cardName).join(" · "))}${l.cards.length > 4 ? " …" : ""}</span></a>`).join("")}</div>`;
  }

  function viewSection(i) {
    const L = T[state.lang], l = W.lists[i];
    document.title = `${l.n[li()]} — Ryujin Wiki`;
    return `<div class="crumbs"><a href="#">${esc(L.home)}</a></div>
      <h2 class="page-title">${esc(l.n[li()])}</h2><p class="page-sub">${esc(L.cards(l.cards.length))}</p>
      <div class="cardgrid">${l.cards.map(s => {
        const c = W.cards[s];
        const thumb = c.c ? `<img src="${c.c}" alt="" loading="lazy">` : `<i>${esc(c.n[0][0])}</i>`;
        return `<a class="wcard" href="#c-${s}"><div class="thumb">${thumb}</div><b>${esc(cardName(s))}</b></a>`;
      }).join("")}</div>`;
  }

  function viewCard(s) {
    const L = T[state.lang], c = W.cards[s], l = W.lists[c.l];
    document.title = `${c.n[li()]} — Ryujin Wiki`;
    const html = c.h[li()];
    const cover = c.c && !html.includes(c.c) ? `<img class="cover" src="${c.c}" alt="">` : "";
    const other = c.n[1 - li()];
    const { keys, items } = relatedFor(c);
    const related = items.length ? `<section class="related"><h3>${esc(L.related)} <small>${items.length}</small></h3>
      <ul class="items">${items.map(it => {
        const t = state.lang === "ru" ? it.ru : it.en;
        const date = it.approx ? it.approx[li()] : new Date(it.d.replace(" ", "T")).toLocaleDateString(L.locale, { day: "numeric", month: "short" });
        const newer = it.d.slice(0, 10) > c.u ? ` <span class="tag">${esc(L.newer)}</span>` : "";
        return `<li><span class="dot" style="background:var(--accent)"></span><span>${esc(t).replace(/→/g, '<span class="arr">→</span>')}<span class="when">${esc(date)}</span>${newer}</span></li>`;
      }).join("")}</ul>
      <div class="meta"><a href="./?q=${encodeURIComponent(keys[0])}&lang=${state.lang}">${esc(L.allNotes)} →</a></div></section>` : "";
    const back = state.q.trim() ? `<a href="#" id="toResults">${esc(L.back)}</a> · ` : "";
    const fixed = c.x ? `<section class="fixbox"><h3>${esc(L.fixed)}</h3><ul>${c.x.map(([en, ru, d]) =>
      `<li>${esc(state.lang === "ru" ? ru : en)} <span class="when">${esc(new Date(d).toLocaleDateString(L.locale, { day: "numeric", month: "short" }))}</span></li>`).join("")}</ul></section>` : "";
    return `<div class="crumbs">${back}<a href="#">${esc(L.home)}</a> › <a href="#s-${c.l}">${esc(l.n[li()])}</a></div>
      <h2 class="page-title">${esc(c.n[li()])}</h2>
      ${other !== c.n[li()] ? `<p class="alt-name">${esc(other)}</p>` : ""}
      ${fixed}${cover}<article class="doc" id="doc">${html}</article>${related}
      <p class="meta"><a href="https://trello.com/c/${s}" target="_blank" rel="noopener">${esc(L.trello)} ↗</a> · ${esc(L.updated)} ${c.u}</p>`;
  }

  function viewResults() {
    const L = T[state.lang], toks = tokens(), idx = searchIndex();
    const res = [];
    for (const [s, x] of Object.entries(idx)) {
      if (!toks.every(t => x.hay.includes(t))) continue;
      let score = toks.reduce((n, t) => n + (x.names.includes(t) ? 100 : 0) + x.hay.split(t).length, 0);
      res.push([score, s]);
    }
    res.sort((a, b) => b[0] - a[0]);
    document.title = `${state.q} — Ryujin Wiki`;
    const items = res.slice(0, 120).map(([, s]) => {
      const c = W.cards[s], x = idx[s];
      let text = x.t[li()], pos = norm(text).indexOf(toks[0]);
      if (pos < 0) { text = x.t[1 - li()]; pos = norm(text).indexOf(toks[0]); }
      const start = Math.max(0, pos - 80);
      const snip = pos < 0 ? text.slice(0, 180) : (start ? "…" : "") + text.slice(start, start + 220) + "…";
      return `<li><a href="#c-${s}"><b>${highlight(cardName(s), toks)}</b><small>${esc(listName(c.l))}</small><p>${highlight(snip, toks)}</p></a></li>`;
    }).join("");
    return `<p class="page-sub">${esc(L.found(res.length))}</p><ul class="results">${items}</ul>`;
  }

  function render() {
    const L = T[state.lang];
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = L[el.dataset.i18n]; });
    document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === state.lang));
    input.placeholder = L.search;
    $("clear").textContent = L.clear;
    $("searchBox").classList.toggle("has", !!state.q);

    const h = location.hash;
    const card = h.startsWith("#c-") && W.cards[h.slice(3)] ? h.slice(3) : null;
    const sec = h.startsWith("#s-") && W.lists[+h.slice(3)] ? +h.slice(3) : null;
    document.title = "Ryujin Wiki";
    let html;
    if (card) html = viewCard(card);
    else if (state.q.trim()) html = viewResults();
    else if (sec !== null) html = viewSection(sec);
    else html = viewHome();
    $("view").innerHTML = html;
    renderSide(card, sec);

    if (card) {
      const first = markIn($("doc"), tokens());
      if (first) first.scrollIntoView({ block: "center" });
      const back = $("toResults");
      if (back) back.onclick = e => { e.preventDefault(); history.pushState(null, "", location.pathname + location.search); render(); };
    }

    const url = new URL(location.href);
    state.q ? url.searchParams.set("q", state.q) : url.searchParams.delete("q");
    url.searchParams.set("lang", state.lang);
    history.replaceState(null, "", url);
  }

  let timer;
  input.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      state.q = input.value;
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
      render(); scrollTo(0, 0);
    }, 120);
  });
  $("clear").onclick = () => { input.value = state.q = ""; render(); input.focus(); };
  document.querySelectorAll("[data-lang]").forEach(b => b.onclick = () => { state.lang = b.dataset.lang; store.set("rpn-lang", state.lang); render(); });
  window.addEventListener("hashchange", () => { document.body.classList.remove("side-open"); render(); if (!tokens().length || !location.hash.startsWith("#c-")) scrollTo(0, 0); });
  $("sideBtn").onclick = e => { e.stopPropagation(); document.body.classList.toggle("side-open"); };
  document.addEventListener("click", e => {
    if (document.body.classList.contains("side-open") && !$("side").contains(e.target)) document.body.classList.remove("side-open");
  });
  document.addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement !== input) { e.preventDefault(); input.focus(); input.select(); }
    else if (e.key === "Escape") { document.body.classList.remove("side-open"); if (document.activeElement === input) { $("clear").click(); input.blur(); } }
  });

  const toTop = document.getElementById("toTop");
  addEventListener("scroll", () => toTop.classList.toggle("show", scrollY > 600), { passive: true });
  toTop.onclick = () => scrollTo({ top: 0, behavior: "smooth" });

  render();
})();
