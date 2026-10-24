(() => {
  const T = {
    ru: {
      h1: "патчноуты", navNotes: "Патчноуты", navWiki: "Вики",
      sub: "Все изменения от разработчиков Ryujin (Roblox) в одном месте. Поиск работает на обоих языках сразу.",
      search: "Поиск: скилл, предмет, тема…",
      clear: "Сбросить",
      all: "Все", fix: "Исправления", new: "Новое", change: "Изменения", balance: "Баланс", perf: "Оптимизация",
      posts: n => plural(n, "пост", "поста", "постов"), changes: n => plural(n, "изменение", "изменения", "изменений"),
      fixes: n => plural(n, "исправление", "исправления", "исправлений"), updated: () => "последний пост",
      found: (n, p) => `${n} ${plural(n, "изменение", "изменения", "изменений")} в ${p} ${plural(p, "посте", "постах", "постах")}`,
      newest: "Сначала новые", oldest: "Сначала старые",
      author: "Автор", anyone: "все",
      devs: "Разработчики",
      showAll: n => `Показать весь пост (${n})`, showLess: "Только совпадения",
      summary: "Сводка", balanceTag: "Баланс",
      empty: "Ничего не нашлось. Попробуй другое слово или сбрось фильтры.",
      notice: "По словам Arshy, 25 октября в 01:27 в игру выпущено всё, что было до этого момента. Изменения баланса опубликованы без даты, поэтому стоят последними.",
      footer: "Неофициальный перевод сообщений разработчиков (twusta, Arshy). Названия скиллов, стилей и предметов оставлены как в игре.",
      topics: { index: "Индекс", mobile: "Мобильные", gang: "Банды", boss: "Боссы и NPC", quest: "Квесты", settings: "Настройки", training: "Тренировки", grab: "Захваты", block: "Блок", macro: "Макрос", perf: "Производительность" },
      locale: "ru-RU"
    },
    en: {
      h1: "patch notes", navNotes: "Patch notes", navWiki: "Wiki",
      sub: "Every change from the Ryujin (Roblox) developers in one place. Search works across both languages.",
      search: "Search: skill, item, topic…",
      clear: "Clear",
      all: "All", fix: "Fixes", new: "New", change: "Changes", balance: "Balance", perf: "Optimisation",
      posts: () => "posts", changes: () => "changes", fixes: () => "fixes", updated: () => "latest post",
      found: (n, p) => `${n} ${n === 1 ? "change" : "changes"} in ${p} ${p === 1 ? "post" : "posts"}`,
      newest: "Newest first", oldest: "Oldest first",
      author: "Author", anyone: "everyone",
      devs: "Developers",
      showAll: n => `Show the whole post (${n})`, showLess: "Matches only",
      summary: "Summary", balanceTag: "Balance",
      empty: "Nothing found. Try another word or clear the filters.",
      notice: "According to Arshy, everything up to Oct 25, 01:27 has been published to the game. The balance changes were posted without a date, so they are listed last.",
      footer: "Unofficial collection of the developers' posts (twusta, Arshy). Skill, style and item names are kept as in the game.",
      topics: { index: "Index", mobile: "Mobile", gang: "Gangs", boss: "Bosses & NPCs", quest: "Quests", settings: "Settings", training: "Training", grab: "Grabs", block: "Block", macro: "Macro", perf: "Performance" },
      locale: "en-GB"
    }
  };

  const TOPICS = {
    index: /\bIndex\b/,
    mobile: /mobile|phone/i,
    gang: /gang|district/i,
    boss: /boss|NPC|trainer|Edward Wu|Raian|Pickle|Niko|Ohma|Rei and Gun/i,
    quest: /quest|achievement|mission|Fashion Icon|Slayer/i,
    settings: /setting|Disable |Hide Player Scars|Low Detail/i,
    training: /training|Kettlebell|Speedball|Crunch|Roadwork|Situp|Pullups|Rope:|Weight Twist|Treadmill|\bgym\b|stat gain/i,
    grab: /grab|throw|armbar|takedown|tackle|choke|suplex/i,
    block: /block|\bPB\b|guardbreak/i,
    macro: /macro/i,
    perf: /optimis|memory leak|loading|logging/i
  };
  const AUTHORS = { twusta: "#d93a2b", Arshy: "#3d7bd9" };

  const norm = s => s.toLowerCase().replace(/ё/g, "е");
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function plural(n, one, few, many) {
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  }
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} }
  };

  function typeOf(en, kind) {
    if (kind === "balance") return "balance";
    if (/^(Fixed|Fixes|Further fixes|Further gang|Applied|Achievement fixes)/.test(en)) return "fix";
    if (/^(Added|New\b|Re-added)/.test(en)) return "new";
    if (/^(Optimised|A bunch of .*optimisations|Removed some unnecessary)/.test(en)) return "perf";
    return "change";
  }

  const posts = window.PATCHES.map(p => {
    const secs = p.sections || [{ h: null, items: p.items || [] }];
    const sections = secs.map(s => ({
      h: s.h,
      items: s.items.map(([en, ru]) => {
        const ctx = `${en} ${s.h ? s.h[0] : ""}`;
        return {
          en, ru,
          type: typeOf(en, p.kind),
          topics: Object.keys(TOPICS).filter(k => TOPICS[k].test(ctx)),
          hay: norm(`${en} ${ru} ${s.h ? s.h.join(" ") : ""} ${p.title ? p.title.join(" ") : ""} ${p.a || ""}`)
        };
      })
    }));
    return { ...p, sections, total: sections.reduce((n, s) => n + s.items.length, 0) };
  });

  const params = new URLSearchParams(location.search);
  const state = {
    lang: params.get("lang") || store.get("rpn-lang") || ((navigator.language || "ru").startsWith("en") ? "en" : "ru"),
    q: params.get("q") || "",
    type: "all",
    topic: null,
    author: "all",
    sort: "new",
    open: new Set()
  };
  if (!T[state.lang]) state.lang = "ru";

  const $ = id => document.getElementById(id);
  const input = $("q");
  input.value = state.q;

  // Theme: auto -> light -> dark
  const themes = ["auto", "light", "dark"];
  let theme = store.get("rpn-theme") || "auto";
  const applyTheme = () => {
    if (theme === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", theme);
  };
  applyTheme();
  $("theme").onclick = () => {
    theme = themes[(themes.indexOf(theme) + 1) % themes.length];
    store.set("rpn-theme", theme);
    applyTheme();
  };

  // Russian words change endings («банды» / «банд»), so long Cyrillic words are matched by their stem.
  const stem = t => /[а-я]/.test(t) && t.length >= 5 ? t.slice(0, t.length - (t.length >= 7 ? 2 : 1)) : t;
  function tokens() { return norm(state.q).split(/\s+/).filter(Boolean).map(stem); }

  function highlight(text, toks) {
    let out = esc(text);
    if (toks.length) {
      const n = norm(text), ranges = [];
      for (const t of toks) {
        let i = n.indexOf(t);
        while (i !== -1) { ranges.push([i, i + t.length]); i = n.indexOf(t, i + t.length); }
      }
      if (ranges.length) {
        ranges.sort((a, b) => a[0] - b[0]);
        const merged = [ranges[0].slice()];
        for (const r of ranges.slice(1)) {
          const last = merged[merged.length - 1];
          if (r[0] <= last[1]) last[1] = Math.max(last[1], r[1]); else merged.push(r.slice());
        }
        out = ""; let pos = 0;
        for (const [a, b] of merged) {
          out += esc(text.slice(pos, a)) + "<mark>" + esc(text.slice(a, b)) + "</mark>";
          pos = b;
        }
        out += esc(text.slice(pos));
      }
    }
    return out.replace(/→/g, '<span class="arr">→</span>');
  }

  function itemMatch(it, toks, skip) {
    if (skip !== "type" && state.type !== "all" && it.type !== state.type) return false;
    if (skip !== "topic" && state.topic && !it.topics.includes(state.topic)) return false;
    return toks.every(t => it.hay.includes(t));
  }
  const postVisible = p => p.kind !== "milestone" && (state.author === "all" || p.a === state.author);
  const filtering = () => state.q.trim() || state.type !== "all" || state.topic;

  function fmtDay(p, L) {
    if (p.approx) return p.approx[L === T.ru ? 1 : 0];
    const d = new Date(p.d.replace(" ", "T"));
    return d.toLocaleDateString(L.locale, { weekday: "short", day: "numeric", month: "long" });
  }

  function renderChips(toks) {
    const L = T[state.lang];
    const count = (skip, pred) => {
      let n = 0;
      for (const p of posts) if (postVisible(p)) for (const s of p.sections) for (const it of s.items) if (itemMatch(it, toks, skip) && pred(it)) n++;
      return n;
    };
    const types = ["all", "fix", "new", "change", "balance", "perf"];
    $("types").innerHTML = types.map(k => {
      const n = count("type", it => k === "all" || it.type === k);
      const color = k === "all" ? "" : `style="--c:var(--${k})"`;
      return `<button class="chip${n ? "" : " zero"}" data-type="${k}" aria-pressed="${state.type === k}" ${color}>${k === "all" ? "" : `<i style="color:var(--${k})"></i>`}${L[k]} <small>${n}</small></button>`;
    }).join("");
    $("topics").innerHTML = Object.keys(TOPICS).map(k => {
      const n = count("topic", it => it.topics.includes(k));
      return n || state.topic === k ? `<button class="chip" data-topic="${k}" aria-pressed="${state.topic === k}"># ${L.topics[k]} <small>${n}</small></button>` : "";
    }).join("");
  }

  function render() {
    const L = T[state.lang];
    const toks = tokens();
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = L[el.dataset.i18n]; });
    document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === state.lang));
    input.placeholder = L.search;
    $("clear").textContent = L.clear;
    $("searchBox").classList.toggle("has", !!state.q);
    $("notice").textContent = L.notice;
    $("sortBtn").textContent = state.sort === "new" ? "↓ " + L.newest : "↑ " + L.oldest;
    $("authorBtn").textContent = `${L.author}: ${state.author === "all" ? L.anyone : state.author}`;

    const real = posts.filter(p => p.kind !== "milestone");
    const allItems = real.flatMap(p => p.sections.flatMap(s => s.items));
    const last = posts.filter(p => !p.approx).map(p => p.d).sort().pop();
    $("stats").innerHTML = [
      [allItems.length, L.changes],
      [allItems.filter(i => i.type === "fix").length, L.fixes],
      [real.length, L.posts],
      [new Date(last.replace(" ", "T")).toLocaleDateString(L.locale, { day: "numeric", month: "short" }), L.updated]
    ].map(([b, s]) => `<div class="stat"><b>${b}</b><span>${s(b)}</span></div>`).join("");

    renderChips(toks);

    const sorted = posts.slice().sort((a, b) => state.sort === "new" ? b.d.localeCompare(a.d) : a.d.localeCompare(b.d));
    const isFiltering = filtering();
    let html = "", lastKey = null, nItems = 0, nPosts = 0;

    for (const p of sorted) {
      if (p.kind === "milestone") {
        if (isFiltering || (state.author !== "all" && p.a !== state.author)) continue;
        const key = p.d.slice(0, 10);
        if (key !== lastKey) { html += `<div class="day"><h2>${fmtDay(p, L)}</h2></div>`; lastKey = key; }
        const it = p.sections[0].items[0];
        html += `<div class="milestone" id="${p.id}">✓ ${esc(state.lang === "ru" ? it.ru : it.en)} <span class="when">${p.a} · ${p.d.slice(11)}</span></div>`;
        continue;
      }
      if (!postVisible(p)) continue;
      const showAll = state.open.has(p.id);
      let matched = 0, body = "";
      for (const s of p.sections) {
        let lis = "";
        for (const it of s.items) {
          const m = itemMatch(it, toks);
          if (m) matched++;
          if (!m && !(showAll && isFiltering)) continue;
          const main = state.lang === "ru" ? it.ru : it.en, other = state.lang === "ru" ? it.en : it.ru;
          const has = s => toks.every(t => norm(s).includes(t));
          const alt = toks.length && m && !has(main) && has(other) ?`<span class="alt">${highlight(other, toks)}</span>` : "";
          lis += `<li class="t-${it.type}"><span class="dot" title="${L[it.type]}"></span><span>${highlight(main, toks)}${alt}</span></li>`;
        }
        if (lis) body += (s.h ? `<div class="sec-h">${esc(s.h[state.lang === "ru" ? 1 : 0])}</div>` : "") + `<ul class="items">${lis}</ul>`;
      }
      if (!matched) continue;
      nItems += matched; nPosts++;

      const key = p.approx ? "~" + p.id : p.d.slice(0, 10);
      if (key !== lastKey) { html += `<div class="day"><h2>${esc(fmtDay(p, L))}</h2></div>`; lastKey = key; }
      const name = p.a || L.devs;
      const ava = p.a ? `<span class="ava" style="background:${AUTHORS[p.a]}">${p.a[0].toUpperCase()}</span>` : `<span class="ava" style="background:var(--faint)">?</span>`;
      const tag = p.kind === "summary" ? `<span class="tag">${L.summary}</span>` : p.kind === "balance" ? `<span class="tag balance">${L.balanceTag}</span>` : "";
      const title = p.title ? `<h3 class="post-title">${highlight(p.title[state.lang === "ru" ? 1 : 0], toks)}</h3>` : "";
      const note = p.note && (!isFiltering || showAll) ? `<div class="note">${esc(p.note[state.lang === "ru" ? 1 : 0])}</div>` : "";
      const more = isFiltering && matched < p.total
        ? `<div class="more"><button class="linkbtn" data-open="${p.id}">${showAll ? L.showLess : L.showAll(p.total)}</button></div>` : "";
      html += `<article class="post ${p.kind || ""}" id="${p.id}">
        <div class="post-head">${ava}<span class="who">${esc(name)}</span><span class="when">${p.approx ? "" : p.d.slice(11)}</span>${tag}<a class="anchor" href="#${p.id}">#</a></div>
        ${title}<div class="post-body">${body}${note}${more}</div></article>`;
    }
    $("list").innerHTML = html || `<div class="empty">${L.empty}</div>`;
    $("found").textContent = L.found(nItems, nPosts);

    const url = new URL(location.href);
    state.q ? url.searchParams.set("q", state.q) : url.searchParams.delete("q");
    url.searchParams.set("lang", state.lang);
    history.replaceState(null, "", url);
  }

  let timer;
  input.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => { state.q = input.value; state.open.clear(); render(); }, 90);
  });
  $("clear").onclick = () => { input.value = state.q = ""; state.open.clear(); render(); input.focus(); };
  document.querySelectorAll("[data-lang]").forEach(b => b.onclick = () => {
    state.lang = b.dataset.lang; store.set("rpn-lang", state.lang); render();
  });
  $("types").onclick = e => { const b = e.target.closest("[data-type]"); if (!b) return; state.type = b.dataset.type; render(); };
  $("topics").onclick = e => {
    const b = e.target.closest("[data-topic]"); if (!b) return;
    state.topic = state.topic === b.dataset.topic ? null : b.dataset.topic; render();
  };
  $("sortBtn").onclick = () => { state.sort = state.sort === "new" ? "old" : "new"; render(); };
  $("authorBtn").onclick = () => {
    const order = ["all", "twusta", "Arshy"];
    state.author = order[(order.indexOf(state.author) + 1) % order.length]; render();
  };
  $("list").onclick = e => {
    const b = e.target.closest("[data-open]"); if (!b) return;
    const id = b.dataset.open;
    state.open.has(id) ? state.open.delete(id) : state.open.add(id);
    render();
  };
  document.addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement !== input) { e.preventDefault(); input.focus(); input.select(); }
    else if (e.key === "Escape" && document.activeElement === input) { $("clear").click(); input.blur(); }
  });

  render();
  if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
})();
