/* PS Termiz Web Course – platforma mantiqi (hash router, darslar, taqdimot, playground, o'qituvchi paneli) */
(function () {
  const C = window.COURSE;
  const LESSONS = C.lessons.slice().sort((a, b) => a.n - b.n);
  const TOTAL = LESSONS.length;
  const byN = (n) => LESSONS.find((l) => l.n === n);
  const modOf = (id) => C.modules.find((m) => m.id === id);
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const app = $("#app");

  /* ---------- Saqlash (brauzer xotirasi, bo'lmasa ham ishlaydi) ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem("pst:" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("pst:" + k, JSON.stringify(v)); } catch (e) { /* xotira yopiq */ } }
  };
  let done = new Set(store.get("done", []));
  const saveDone = () => store.set("done", Array.from(done));

  /* ---------- Yordamchilar ---------- */
  const PRISM_LANG = { html: "markup", css: "css", js: "javascript", scss: "scss", bash: "bash", markdown: "markdown" };
  window.hl = function (code, lang) {
    const P = window.Prism;
    const k = PRISM_LANG[lang] || lang;
    const g = P && P.languages && P.languages[k];
    try { return g ? P.highlight(code, g, k) : esc(code); } catch (e) { return esc(code); }
  };
  let toastT;
  function toast(msg) {
    let t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), 2200);
  }
  window.copyText = function (text) {
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      let ok = false; try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      ta.remove();
      toast(ok ? "Nusxa olindi" : "Nusxa olinmadi – matnni belgilab Ctrl+C bosing");
    };
    try {
      navigator.clipboard.writeText(text).then(() => toast("Nusxa olindi"), fallback);
    } catch (e) { fallback(); }
  };
  const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
  const mcStyle = (l) => `--mc:${modOf(l.m).color}`;

  /* ---------- Dars jadvali (sanalar) ---------- */
  const MONTHS = ["yan", "fev", "mar", "apr", "may", "iyun", "iyul", "avg", "sen", "okt", "noy", "dek"];
  const WD = ["Ya", "Du", "Se", "Ch", "Pa", "Ju", "Sh"];
  const WD_FULL = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const fmtDate = (d) => `${d.getDate()}-${MONTHS[d.getMonth()]}, ${WD[d.getDay()]}`;
  function schedSettings() { return store.get("sched", { start: iso(new Date()), days: [2, 4], skip: "" }); }
  function computeSchedule() {
    const s = schedSettings();
    const map = {};
    if (!s.days || !s.days.length || !s.start) return map;
    const skip = new Set((s.skip || "").split(/[\s,;]+/).filter(Boolean));
    const d = new Date(s.start + "T00:00:00");
    if (isNaN(d)) return map;
    let n = 1, guard = 0;
    while (n <= TOTAL && guard++ < 1500) {
      if (s.days.includes(d.getDay()) && !skip.has(iso(d))) map[n++] = new Date(d);
      d.setDate(d.getDate() + 1);
    }
    return map;
  }

  /* ---------- 45 daqiqalik reja ---------- */
  function planOf(l) {
    return l.plan || [
      ["0–5", "Salomlashish va takrorlash (savol-javob)"],
      ["5–15", "Yangi mavzu: " + l.topics.slice(0, 3).join(", ")],
      ["15–35", "Amaliy ish: " + l.classwork.t],
      ["35–42", "AI yordamchi va mini test"],
      ["42–45", "Uy vazifasi va xulosa"]
    ];
  }
  const phaseSpans = (plan) => plan.map(([r, t]) => { const [a, b] = r.split(/[–-]/).map(Number); return { a, b, t, r }; });

  /* ---------- Jonli ko'rinish (iframe) va konsol ---------- */
  let pvSeq = 0;
  const consoles = new Map();
  const frames = new Map();
  function hook(id) {
    var fmt = function (v) {
      if (v === undefined) return "undefined";
      if (typeof v === "string") return v;
      if (v && v.nodeType) return "<" + v.nodeName.toLowerCase() + (v.id ? "#" + v.id : "") + ">";
      try { return JSON.stringify(v); } catch (e) { return String(v); }
    };
    var send = function (t, a) { try { parent.postMessage({ pst: id, t: t, a: Array.prototype.map.call(a, fmt) }, "*"); } catch (e) {} };
    ["log", "info", "warn", "error"].forEach(function (k) {
      var o = console[k].bind(console);
      console[k] = function () { send(k, arguments); o.apply(null, arguments); };
    });
    window.alert = function (m) { send("alert", ["alert: " + fmt(m)]); };
    window.onerror = function (m, s, l) { send("error", [m + (l ? " (qator " + l + ")" : "")]); };
    var size = function () { try { parent.postMessage({ pst: id, t: "size", h: document.documentElement.scrollHeight }, "*"); } catch (e) {} };
    window.addEventListener("load", function () { size(); setTimeout(size, 400); });
  }
  function buildDoc(code, id) {
    const safe = (s) => String(s || "").replace(/<\/script/gi, "<\\/script");
    return "<!doctype html><html lang=\"uz\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">" +
      "<style>body{font-family:system-ui,-apple-system,'Segoe UI',sans-serif}</style>" +
      "<script>(" + hook.toString() + ")(" + JSON.stringify(id) + ")<\/script>" +
      "<style>" + (code.css || "") + "</style></head><body>" + (code.html || "") +
      "<script>" + safe(code.js) + "<\/script></body></html>";
  }
  window.addEventListener("message", (e) => {
    const d = e.data;
    if (!d || !d.pst) return;
    if (d.t === "size") {
      const f = frames.get(d.pst);
      if (f && f.isConnected && f.dataset.auto) f.style.height = Math.max(140, Math.min(+f.dataset.max || 480, d.h + 4)) + "px";
      return;
    }
    const el = consoles.get(d.pst);
    if (!el || !el.isConnected) return;
    const div = document.createElement("div");
    div.className = d.t;
    div.textContent = (d.t === "error" ? "✗ " : "› ") + d.a.join(" ");
    el.appendChild(div);
    el.scrollTop = el.scrollHeight;
  });
  function makePreview(code, opts = {}) {
    const wrap = document.createElement("div");
    wrap.className = "preview";
    wrap.innerHTML = `<div class="preview-bar"><i></i><i></i><i></i><span>${esc(opts.label || "Natija")}</span></div><iframe title="Kod natijasi" sandbox="allow-scripts allow-forms allow-popups allow-modals"></iframe><div class="console" aria-live="polite"></div>`;
    const f = $("iframe", wrap), con = $(".console", wrap);
    const run = (c) => {
      const id = "p" + ++pvSeq;
      con.innerHTML = "";
      consoles.set(id, con);
      frames.set(id, f);
      f.srcdoc = buildDoc(c, id);
    };
    if (opts.auto !== false) { f.dataset.auto = "1"; f.dataset.max = opts.max || 480; }
    run(code);
    wrap.run = run;
    return wrap;
  }
  function codeOf(c) {
    if (c.lang === "css") return { html: c.html || "", css: c.code, js: c.js || "" };
    if (c.lang === "js") return { html: c.html || "", css: c.css || "", js: c.code };
    return { html: c.code, css: c.css || "", js: c.js || "" };
  }
  function codeBox(code, lang) {
    const d = document.createElement("div");
    d.className = "codebox";
    d.innerHTML = `<span class="lang">${esc(lang)}</span><pre><code>${window.hl(code, lang)}</code></pre>`;
    return d;
  }
  function renderConcept(c, big) {
    const el = document.createElement("div");
    const runnable = c.code && c.run && ["html", "css", "js"].includes(c.lang);
    if (c.code) {
      const pair = document.createElement("div");
      pair.className = runnable ? "codepair" : "";
      pair.appendChild(codeBox(c.code, c.lang));
      if (runnable) pair.appendChild(makePreview(codeOf(c), { max: big ? 560 : 420 }));
      el.appendChild(pair);
      if (["html", "css", "js"].includes(c.lang)) {
        const b = document.createElement("div");
        b.className = "row";
        b.innerHTML = `<button class="btn sm" type="button">✎ Playgroundda ochish</button><button class="btn sm ghost" type="button">Kodni nusxalash</button>`;
        const [openB, copyB] = $$("button", b);
        openB.addEventListener("click", () => openInPlayground(codeOf(c)));
        copyB.addEventListener("click", () => window.copyText(c.code));
        el.appendChild(b);
      }
    }
    if (c.lab) {
      const lab = document.createElement("div");
      el.appendChild(lab);
      window.renderLab(c.lab, lab);
    }
    return el;
  }

  /* ---------- Test ---------- */
  function renderQuestion(q, idx, onAnswer) {
    const [text, opts, correct] = q;
    const box = document.createElement("div");
    box.className = "q";
    const order = shuffle(opts.map((_, i) => i));
    box.innerHTML = `<p>${idx + 1}. ${esc(text)}</p><div class="opts">${order.map((i) => `<button type="button" class="opt" data-i="${i}">${esc(opts[i])}</button>`).join("")}</div>`;
    let answered = false;
    $$(".opt", box).forEach((b) => b.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const i = +b.dataset.i;
      b.classList.add(i === correct ? "right" : "wrong");
      $$(".opt", box).find((x) => +x.dataset.i === correct).classList.add("right");
      onAnswer && onAnswer(i === correct);
    }));
    box.reveal = () => { if (!answered) { answered = true; $$(".opt", box).find((x) => +x.dataset.i === correct).classList.add("right"); } };
    return box;
  }
  function renderQuiz(quiz, el) {
    el.innerHTML = "";
    let score = 0, count = 0;
    const s = document.createElement("div");
    s.className = "row";
    s.innerHTML = `<span class="score">Natija: 0 / ${quiz.length}</span><button class="btn sm" type="button">↺ Qaytadan</button>`;
    quiz.forEach((q, i) => el.appendChild(renderQuestion(q, i, (ok) => {
      count++; if (ok) score++;
      $(".score", s).textContent = `Natija: ${score} / ${quiz.length}` + (count === quiz.length ? (score === quiz.length ? " – a'lo! 🎉" : " – yaxshi, xatolarni ko'rib chiqing") : "");
    })));
    el.appendChild(s);
    $("button", s).addEventListener("click", () => renderQuiz(quiz, el));
  }

  /* ---------- Dars taymeri (umumiy) ---------- */
  const timer = {
    n: 0, plan: [], total: 45 * 60 * 1000, elapsed: 0, startedAt: 0, running: false, subs: new Set(), lastPhase: -1, int: null,
    load(n) { if (this.n === n) return; this.n = n; this.plan = phaseSpans(planOf(byN(n))); this.reset(); },
    now() { return this.elapsed + (this.running ? Date.now() - this.startedAt : 0); },
    start() { if (this.running) return; this.running = true; this.startedAt = Date.now(); this.int = setInterval(() => this.tick(), 500); this.tick(); },
    pause() { if (!this.running) return; this.elapsed = this.now(); this.running = false; clearInterval(this.int); this.tick(); },
    toggle() { this.running ? this.pause() : this.start(); },
    reset() { this.running = false; clearInterval(this.int); this.elapsed = 0; this.lastPhase = -1; this.tick(); },
    phase() { const m = this.now() / 60000; const i = this.plan.findIndex((p) => m >= p.a && m < p.b); return i === -1 ? (m >= 45 ? this.plan.length - 1 : 0) : i; },
    label() {
      const left = this.total - this.now();
      const a = Math.abs(left);
      const t = `${String(Math.floor(a / 60000)).padStart(2, "0")}:${String(Math.floor((a % 60000) / 1000)).padStart(2, "0")}`;
      return left < 0 ? "+" + t : t;
    },
    tick() {
      const ph = this.phase();
      if (this.running && this.lastPhase !== -1 && ph !== this.lastPhase) beep();
      if (this.running) this.lastPhase = ph;
      this.subs.forEach((f) => f());
    }
  };
  let actx;
  function beep() {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const o = actx.createOscillator(), g = actx.createGain();
      o.frequency.value = 880; g.gain.value = 0.08;
      o.connect(g); g.connect(actx.destination); o.start(); o.stop(actx.currentTime + 0.25);
    } catch (e) { /* ovoz yo'q */ }
  }

  /* ---------- Router ---------- */
  function setNav(key) {
    $$(".nav a").forEach((a) => { if (a.dataset.nav === key) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  }
  let lastView = "";
  function route() {
    const h = decodeURIComponent(location.hash.slice(1)) || "home";
    closePresent(true);
    let m;
    if ((m = h.match(/^present-(\d+)$/)) && byN(+m[1])) {
      if (lastView !== "lesson-" + m[1]) renderLesson(+m[1]);
      lastView = "lesson-" + m[1];
      openPresent(+m[1]);
      return;
    }
    if ((m = h.match(/^lesson-(\d+)$/)) && byN(+m[1])) {
      const keep = lastView === h;
      lastView = h;
      if (!keep) { renderLesson(+m[1]); window.scrollTo(0, 0); }
      return;
    }
    lastView = h;
    window.scrollTo(0, 0);
    if (h === "playground") return renderPlayground();
    if (h === "teacher") return renderTeacher();
    if (h === "labs") return renderLabs("flexbox");
    if ((m = h.match(/^lab-([a-z]+)$/)) && window.LABS[m[1]]) return renderLabs(m[1]);
    renderHome();
  }

  /* ---------- Bosh sahifa ---------- */
  function renderHome() {
    setNav("home");
    document.title = "PS Termiz Web Course";
    const next = LESSONS.find((l) => !done.has(l.n)) || LESSONS[0];
    const sched = computeSchedule();
    const pct = Math.round((done.size / TOTAL) * 100);
    app.innerHTML = `
      <section class="hero">
        <div>
          <div class="eyebrow">PS Termiz · haftasiga 2 dars · 45 daqiqa</div>
          <h1>Web dasturlash va <em>AI</em> bilan 80 ta amaliy dars</h1>
          <p>${esc(C.subtitle)}. Har bir darsda: maqsadlar, 45 daqiqalik reja, jonli kod namunalari, laboratoriya, amaliy ish, AI yordamchi, uy vazifasi va mini test.</p>
          <div class="continue">
            <a class="btn primary" href="#lesson-${next.n}">▶ Davom etish: ${next.n}-dars</a>
            <a class="btn" href="#present-${next.n}">Taqdimotni boshlash</a>
            <a class="btn ghost" href="#playground">Playground</a>
          </div>
        </div>
        <div>
          <div class="stats">
            <div><b>${TOTAL}</b><span>dars</span></div>
            <div><b>${Math.ceil(TOTAL / C.perWeek)}</b><span>hafta</span></div>
            <div><b>${C.modules.length}</b><span>modul</span></div>
          </div>
          <div class="progressbar" aria-label="Kurs progressi"><i style="width:${pct}%"></i></div>
          <div class="muted" style="font-size:13px;margin-top:6px">${done.size} / ${TOTAL} dars o'tildi (${pct}%)</div>
        </div>
      </section>
      <div class="filterbar">
        <input id="q" type="search" placeholder="Mavzu qidirish: flex, img, AI, animatsiya..." aria-label="Darslarni qidirish">
        <a class="btn sm" href="#teacher">📅 Dars jadvalini sozlash</a>
      </div>
      <div id="mods">${C.modules.map((m) => {
        const ls = LESSONS.filter((l) => l.m === m.id);
        return `<section class="module" style="--mc:${m.color}" data-m="${m.id}">
          <div class="module-head"><div class="num">${String(m.id).padStart(2, "0")}</div><h2>${esc(m.title)}</h2><p>${esc(m.desc)}</p><div class="range">${ls[0].n}–${ls[ls.length - 1].n}-darslar · ${ls.length} dars</div></div>
          <div class="lessons">${ls.map((l) => `<a class="lesson-link${done.has(l.n) ? " is-done" : ""}${l.n === next.n ? " is-next" : ""}" href="#lesson-${l.n}" data-s="${esc((l.title + " " + l.topics.join(" ")).toLowerCase())}">
              <span class="n">${String(l.n).padStart(2, "0")}</span>
              <span><span class="t">${esc(l.title)}</span>${sched[l.n] ? `<span class="d">${fmtDate(sched[l.n])}</span>` : ""}</span>
              <span class="ck" aria-label="${done.has(l.n) ? "O'tildi" : "O'tilmagan"}">✓</span></a>`).join("")}</div>
        </section>`;
      }).join("")}</div>`;
    $("#q").addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      $$(".module").forEach((sec) => {
        let any = false;
        $$(".lesson-link", sec).forEach((a) => { const ok = !q || a.dataset.s.includes(q); a.hidden = !ok; any = any || ok; });
        sec.hidden = !any;
      });
    });
  }

  /* ---------- Dars sahifasi ---------- */
  function renderLesson(n) {
    setNav("home");
    const l = byN(n), m = modOf(l.m);
    const prev = byN(n - 1), next = byN(n + 1);
    const date = computeSchedule()[n];
    document.title = `${n}-dars: ${l.title}`;
    app.innerHTML = `<div style="${mcStyle(l)}">
      <div class="lesson-top">
        <div style="display:grid;gap:8px;min-width:0">
          <div class="row"><a class="chip mchip" href="#home">← ${m.id}-modul · ${esc(m.title)}</a>${date ? `<span class="chip">📅 ${fmtDate(date)}</span>` : ""}</div>
          <div class="big-n">${n}-dars / ${TOTAL}</div>
          <h1>${esc(l.title)}</h1>
          <div class="row">${l.topics.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        </div>
        <div class="row">
          <a class="btn primary" href="#present-${n}">▶ Taqdimot rejimi</a>
          <button class="btn ${done.has(n) ? "done" : ""}" id="doneBtn" type="button">${done.has(n) ? "✓ O'tildi" : "O'tildi deb belgilash"}</button>
          ${l.lab ? `<a class="btn" href="#lab-${l.lab}">🔬 Laboratoriya</a>` : ""}
        </div>
      </div>
      <div class="lesson-grid">
        <div class="lesson-main">
          <section class="sec"><h2>Dars maqsadlari <small>o'quvchi dars oxirida</small></h2><ul class="goals">${l.goals.map((g) => `<li>${esc(g)}</li>`).join("")}</ul></section>
          <section class="sec"><h2>Tushunchalar <small>${l.concepts.length} ta</small></h2><div id="concepts" style="display:grid;gap:16px"></div></section>
          <section class="sec"><h2>Amaliy ish <small>classwork</small></h2>
            <div class="panel"><h3 style="font-size:21px">${esc(l.classwork.t)}</h3><p class="muted" style="margin:6px 0 12px">${esc(l.classwork.d)}</p>
            <ol class="steps">${l.classwork.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
            <div class="row" style="margin-top:14px"><button class="btn" id="startCw" type="button">✎ Playgroundda boshlash</button></div></div>
          </section>
          <section class="sec"><h2>AI yordamchi <small>${esc(l.ai.t)}</small></h2>
            <div class="callout ai"><div class="muted" style="font-size:14px">Namuna prompt – AI chatbotga yozing (o'qituvchi bilan yoki uyda ota-ona ruxsati bilan):</div>
            <div class="prompt-text">${esc(l.ai.p)}</div>
            <div class="row"><button class="btn sm" id="copyAi" type="button">Promptni nusxalash</button><span class="muted" style="font-size:13px">AI javobini doim tekshiring · shaxsiy ma'lumot yozmang</span></div></div>
          </section>
          <section class="sec"><h2>Uy vazifasi</h2><div class="callout hw">${esc(l.homework)}</div></section>
          <section class="sec"><h2>Mini test <small>${l.quiz.length} savol</small></h2><div class="quiz" id="quiz"></div></section>
          ${l.links && l.links.length ? `<section class="sec"><h2>Foydali havolalar</h2><div class="links">${l.links.map(([t, u]) => `<a class="btn sm" href="${esc(u)}" target="_blank" rel="noopener">${esc(t)} ↗</a>`).join("")}</div></section>` : ""}
          <nav class="pager">${prev ? `<a class="btn" href="#lesson-${prev.n}">← ${prev.n}. ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a class="btn" href="#lesson-${next.n}">${next.n}. ${esc(next.title)} →</a>` : ""}</nav>
        </div>
        <aside class="aside">
          <div class="panel"><div class="eyebrow">45 daqiqalik reja</div>
            <div class="timeline" style="margin-top:8px">${planOf(l).map(([r, t]) => `<div class="ph"><b>${r}</b><span>${esc(t)}</span></div>`).join("")}</div>
            <div class="row" style="margin-top:12px"><a class="btn sm" href="#present-${n}">⏱ Taymer bilan boshlash</a></div>
          </div>
          ${l.note ? `<div class="callout note"><div class="eyebrow">O'qituvchi uchun</div><p style="margin:6px 0 0;font-size:14.5px">${esc(l.note)}</p></div>` : ""}
          <div class="panel"><div class="eyebrow">Tezkor o'tish</div>
            <div class="row" style="margin-top:8px"><a class="btn sm" href="#playground">Playground</a><a class="btn sm" href="#labs">Laboratoriya</a><a class="btn sm" href="#teacher">O'qituvchi paneli</a></div></div>
        </aside>
      </div></div>`;
    const cwrap = $("#concepts");
    l.concepts.forEach((c) => {
      const card = document.createElement("article");
      card.className = "concept";
      card.innerHTML = `<div class="concept-h"><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></div>`;
      if (c.code || c.lab) { const b = renderConcept(c); b.className = "concept-body"; card.appendChild(b); }
      cwrap.appendChild(card);
    });
    renderQuiz(l.quiz, $("#quiz"));
    $("#copyAi").addEventListener("click", () => window.copyText(l.ai.p));
    $("#startCw").addEventListener("click", () => openInPlayground(l.classwork.starter || { html: `<h1>${l.classwork.t}</h1>\n`, css: "", js: "" }));
    $("#doneBtn").addEventListener("click", (e) => {
      if (done.has(n)) done.delete(n); else done.add(n);
      saveDone();
      e.target.classList.toggle("done", done.has(n));
      e.target.textContent = done.has(n) ? "✓ O'tildi" : "O'tildi deb belgilash";
      toast(done.has(n) ? `${n}-dars o'tildi deb belgilandi` : "Belgi olib tashlandi");
    });
  }

  /* ---------- Taqdimot rejimi (doska) ---------- */
  let P = null;
  function buildSlides(l) {
    const m = modOf(l.m);
    const S = [];
    const date = computeSchedule()[l.n];
    S.push({ k: "title", r: (el) => {
      el.innerHTML = `<div class="kicker">${m.id}-modul · ${esc(m.title)}${date ? " · " + fmtDate(date) : ""}</div><h1>${l.n}-dars. ${esc(l.title)}</h1><div class="row">${l.topics.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>`;
    } });
    S.push({ k: "goals", r: (el) => {
      el.innerHTML = `<div class="codepair"><div><h2>Bugun o'rganamiz</h2><ul class="goals" style="margin-top:14px">${l.goals.map((g) => `<li>${esc(g)}</li>`).join("")}</ul></div>
        <div><h2>Dars rejasi</h2><div class="timeline" style="margin-top:14px">${planOf(l).map(([r, t]) => `<div class="ph"><b>${r}</b><span>${esc(t)}</span></div>`).join("")}</div></div></div>`;
    } });
    l.concepts.forEach((c, i) => S.push({ k: "concept", r: (el) => {
      el.innerHTML = `<div class="kicker">Tushuncha ${i + 1}/${l.concepts.length}</div><h2>${esc(c.t)}</h2><p>${esc(c.d)}</p>`;
      if (c.code || c.lab) el.appendChild(renderConcept(c, true));
    } }));
    S.push({ k: "cw", r: (el) => {
      el.innerHTML = `<div class="kicker">Amaliy ish · ~20 daqiqa</div><h2>${esc(l.classwork.t)}</h2><p>${esc(l.classwork.d)}</p><ol class="steps">${l.classwork.steps.map((s) => `<li style="font-size:clamp(17px,1.9vw,22px)">${esc(s)}</li>`).join("")}</ol>
        <div class="row"><button class="p-btn" type="button" id="pCw">✎ Playgroundda ochish</button></div>`;
      $("#pCw", el).addEventListener("click", () => { openInPlayground(l.classwork.starter || { html: `<h1>${l.classwork.t}</h1>\n` }); });
    } });
    l.quiz.forEach((q, i) => S.push({ k: "q", r: (el) => {
      el.innerHTML = `<div class="kicker">Mini test · ${i + 1}/${l.quiz.length} · javobni ochish: R</div>`;
      const qEl = renderQuestion(q, i);
      $("p", qEl).style.cssText = "font:800 clamp(26px,3.4vw,42px)/1.2 var(--f-display);color:#fff";
      el.appendChild(qEl);
      el.reveal = qEl.reveal;
    } }));
    S.push({ k: "ai", r: (el) => {
      el.innerHTML = `<div class="kicker">AI yordamchi</div><h2>${esc(l.ai.t)}</h2><div class="prompt-text">${esc(l.ai.p)}</div><p style="font-size:18px;color:var(--board-dim)">Qoidalar: shaxsiy ma'lumot yozmaymiz · javobni tekshiramiz · tushunmagan kodni ishlatmaymiz</p>
        <div class="row"><button class="p-btn" type="button" id="pAi">Promptni nusxalash</button></div>`;
      $("#pAi", el).addEventListener("click", () => window.copyText(l.ai.p));
    } });
    S.push({ k: "hw", r: (el) => {
      const nx = byN(l.n + 1);
      el.innerHTML = `<div class="kicker">Uy vazifasi</div><h2>Uyda bajaramiz</h2><p style="font-size:clamp(22px,2.6vw,32px)">${esc(l.homework)}</p>${nx ? `<p style="color:var(--board-dim)">Keyingi dars: <b style="color:#fff">${nx.n}. ${esc(nx.title)}</b></p>` : `<p style="color:var(--chalk-y)">🎓 Kurs yakunlandi – tabriklaymiz!</p>`}`;
    } });
    return S;
  }
  function openPresent(n) {
    const l = byN(n);
    timer.load(n);
    const slides = buildSlides(l);
    const ov = document.createElement("div");
    ov.className = "present";
    ov.setAttribute("role", "dialog");
    ov.setAttribute("aria-label", `${n}-dars taqdimoti`);
    ov.innerHTML = `
      <div class="p-bar">
        <button class="p-btn" data-a="close" type="button" title="Chiqish (Esc)">✕</button>
        <span class="ttl">${n}-dars · ${esc(l.title)}</span>
        <span class="p-phase"></span>
        <span class="p-timer" title="Qolgan vaqt">45:00</span>
        <button class="p-btn" data-a="timer" type="button" title="Taymer (T)">▶</button>
        <button class="p-btn" data-a="pen" type="button" title="Qalam (P)">✏️</button>
        <span class="p-colors" hidden>${["#ffe28a", "#ffffff", "#ffb3c7", "#9fd3ff"].map((c, i) => `<button type="button" data-c="${c}" style="background:${c}" class="${i === 0 ? "on" : ""}" aria-label="Rang ${i + 1}"></button>`).join("")}<button class="p-btn" data-a="clear" type="button" title="Tozalash">🧽</button></span>
        <button class="p-btn" data-a="fs" type="button" title="To'liq ekran (F)">⛶</button>
      </div>
      <div class="p-stage"><div class="slide"></div><canvas class="p-draw" hidden></canvas></div>
      <div class="p-foot">
        <button class="p-btn" data-a="prev" type="button">←</button>
        <div class="p-dots">${slides.map((s, i) => `<button type="button" data-i="${i}" class="${s.k === "q" ? "q" : ""}" aria-label="${i + 1}-slayd"></button>`).join("")}</div>
        <span class="p-keys">← → · F · P · T · R · Esc</span>
        <span class="p-count mono" style="font-size:14px"></span>
        <button class="p-btn" data-a="next" type="button">→</button>
      </div>`;
    document.body.appendChild(ov);
    document.body.style.overflow = "hidden";
    const slideEl = $(".slide", ov), stage = $(".p-stage", ov), cv = $("canvas", ov);
    const st = { i: 0, pen: false, color: "#ffe28a" };
    const show = (i) => {
      st.i = Math.max(0, Math.min(slides.length - 1, i));
      slideEl.innerHTML = "";
      slideEl.reveal = null;
      slides[st.i].r(slideEl);
      stage.scrollTop = 0;
      $$(".p-dots button", ov).forEach((b, j) => b.classList.toggle("on", j === st.i));
      $(".p-count", ov).textContent = `${st.i + 1}/${slides.length}`;
      clearCanvas();
    };
    const tick = () => {
      const t = $(".p-timer", ov);
      t.textContent = timer.label();
      t.classList.toggle("warn", timer.total - timer.now() < 5 * 60000);
      $("[data-a=timer]", ov).textContent = timer.running ? "⏸" : "▶";
      const ph = timer.plan[timer.phase()];
      $(".p-phase", ov).textContent = ph ? `${ph.r} · ${ph.t}` : "";
    };
    timer.subs.add(tick); tick();
    /* Qalam */
    let ctx, drawing = false;
    const sizeCanvas = () => {
      const r = stage.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
      cv.width = r.width * dpr; cv.height = r.height * dpr;
      cv.style.width = r.width + "px"; cv.style.height = r.height + "px";
      cv.style.top = stage.scrollTop + "px";
      ctx = cv.getContext("2d"); ctx.scale(dpr, dpr); ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.lineWidth = 4;
    };
    function clearCanvas() { if (ctx) ctx.clearRect(0, 0, cv.width, cv.height); }
    const setPen = (on) => {
      st.pen = on;
      cv.hidden = !on;
      $(".p-colors", ov).hidden = !on;
      $("[data-a=pen]", ov).classList.toggle("on", on);
      if (on) sizeCanvas();
    };
    const pt = (e) => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    cv.addEventListener("pointerdown", (e) => { drawing = true; cv.setPointerCapture(e.pointerId); ctx.strokeStyle = st.color; ctx.beginPath(); ctx.moveTo(...pt(e)); });
    cv.addEventListener("pointermove", (e) => { if (!drawing) return; ctx.lineTo(...pt(e)); ctx.stroke(); });
    cv.addEventListener("pointerup", () => (drawing = false));
    $$(".p-colors [data-c]", ov).forEach((b) => b.addEventListener("click", () => { st.color = b.dataset.c; $$(".p-colors [data-c]", ov).forEach((x) => x.classList.toggle("on", x === b)); }));
    const act = {
      close: () => { location.hash = "lesson-" + n; },
      prev: () => show(st.i - 1),
      next: () => show(st.i + 1),
      timer: () => timer.toggle(),
      pen: () => setPen(!st.pen),
      clear: () => clearCanvas(),
      fs: () => {
        try {
          if (document.fullscreenElement) document.exitFullscreen();
          else { const p = ov.requestFullscreen && ov.requestFullscreen(); if (p && p.catch) p.catch(() => toast("To'liq ekran bu yerda mavjud emas")); }
        } catch (e) { toast("To'liq ekran bu yerda mavjud emas"); }
      }
    };
    ov.addEventListener("click", (e) => {
      const a = e.target.closest("[data-a]");
      if (a && act[a.dataset.a]) act[a.dataset.a]();
      const d = e.target.closest(".p-dots [data-i]");
      if (d) show(+d.dataset.i);
    });
    const onKey = (e) => {
      if (e.target.closest("input, textarea, select, [contenteditable], .hk-zone")) return;
      const k = e.key;
      if (k === "ArrowRight" || k === "PageDown" || k === " ") { e.preventDefault(); act.next(); }
      else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); act.prev(); }
      else if (k === "Escape") { if (!document.fullscreenElement) act.close(); }
      else if (k === "f" || k === "F") act.fs();
      else if (k === "p" || k === "P") act.pen();
      else if (k === "t" || k === "T") act.timer();
      else if ((k === "r" || k === "R") && slideEl.reveal) slideEl.reveal();
      else if (k === "Home") show(0);
      else if (k === "End") show(slides.length - 1);
    };
    document.addEventListener("keydown", onKey);
    const onResize = () => { if (st.pen) sizeCanvas(); };
    window.addEventListener("resize", onResize);
    stage.addEventListener("scroll", () => { if (st.pen) cv.style.top = stage.scrollTop + "px"; });
    P = { ov, cleanup: () => { timer.subs.delete(tick); document.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); } };
    show(0);
    $("[data-a=next]", ov).focus();
  }
  function closePresent() {
    if (!P) return;
    P.cleanup();
    if (document.fullscreenElement) { try { document.exitFullscreen(); } catch (e) { /* */ } }
    P.ov.remove();
    P = null;
    document.body.style.overflow = "";
  }

  /* ---------- Playground ---------- */
  const TEMPLATES = {
    "Bo'sh sahifa": { html: "<h1>Salom, dunyo!</h1>\n<p>Kodni shu yerda yozing.</p>\n", css: "body {\n  font-family: sans-serif;\n}\n", js: "console.log('Salom!');\n" },
    "Portfolio karta": {
      html: `<div class="card">\n  <img src="https://picsum.photos/id/1005/200/200" alt="Rasm">\n  <h2>Aziz Karimov</h2>\n  <p>Frontend o'quvchisi · Termiz</p>\n  <button id="b">Obuna bo'lish</button>\n</div>\n`,
      css: `body { display: flex; justify-content: center; padding: 30px; background: #e7f5ff; font-family: sans-serif; }\n.card { width: 260px; padding: 24px; text-align: center; background: white; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,.1); }\n.card img { width: 110px; border-radius: 50%; }\n.card button { padding: 10px 22px; border: 0; border-radius: 30px; background: #1c7ed6; color: white; cursor: pointer; }\n`,
      js: `const b = document.querySelector('#b');\nb.addEventListener('click', () => {\n  b.textContent = 'Obuna bo\\'ldingiz ✓';\n});\n`
    },
    "Flex kartalar": {
      html: `<div class="wrap">\n  <div class="card">🍎 Olma</div>\n  <div class="card">🍇 Uzum</div>\n  <div class="card">🍉 Tarvuz</div>\n  <div class="card">🍑 Shaftoli</div>\n</div>\n`,
      css: `.wrap {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n}\n.card {\n  flex: 1 1 150px;\n  padding: 30px;\n  font: 700 20px sans-serif;\n  text-align: center;\n  background: #fff4e6;\n  border-radius: 12px;\n}\n@media (max-width: 500px) {\n  .wrap { flex-direction: column; }\n}\n`, js: ""
    },
    "Hisoblagich (JS)": {
      html: `<h1 id="son">0</h1>\n<button id="plus">+1</button>\n<button id="reset">0</button>\n`,
      css: `body { text-align: center; font-family: sans-serif; }\nh1 { font-size: 80px; margin: 20px; }\nbutton { font-size: 22px; padding: 8px 20px; }\n`,
      js: `let son = 0;\nconst h1 = document.querySelector('#son');\n\ndocument.querySelector('#plus').addEventListener('click', () => {\n  son++;\n  h1.textContent = son;\n  console.log('Son:', son);\n});\ndocument.querySelector('#reset').addEventListener('click', () => {\n  son = 0;\n  h1.textContent = son;\n});\n`
    },
    "Sonni top (o'yin)": {
      html: `<h2>1 dan 100 gacha sonni top!</h2>\n<input id="i" type="number">\n<button id="b">Tekshir</button>\n<p id="j"></p>\n`,
      css: `body { font-family: sans-serif; text-align: center; padding: 20px; }\ninput, button { font-size: 20px; padding: 6px 12px; }\n#j { font-size: 24px; font-weight: bold; }\n`,
      js: "const sirli = Math.floor(Math.random() * 100) + 1;\nlet urinish = 0;\n\ndocument.querySelector('#b').addEventListener('click', () => {\n  const s = Number(document.querySelector('#i').value);\n  urinish++;\n  const j = document.querySelector('#j');\n  if (s === sirli) j.textContent = '🎉 Topdingiz! ' + urinish + ' urinishda';\n  else if (s < sirli) j.textContent = '⬆️ Kattaroq';\n  else j.textContent = '⬇️ Kichikroq';\n});\n"
    }
  };
  const LOREM = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates atque dolorem.";
  const SKELETON = `<!DOCTYPE html>\n<html lang="uz">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>`;
  let pgPending = null;
  function openInPlayground(code) {
    pgPending = { html: code.html || "", css: code.css || "", js: code.js || "" };
    if (location.hash === "#playground") route(); else location.hash = "playground";
  }
  function renderPlayground() {
    setNav("playground");
    document.title = "Playground · PS Termiz";
    let code = pgPending || store.get("pg", TEMPLATES["Bo'sh sahifa"]);
    pgPending = null;
    store.set("pg", code);
    let tab = code.js && !code.css && !code.html ? "js" : "html";
    app.innerHTML = `
      <div class="row" style="justify-content:space-between;margin-bottom:14px">
        <div><div class="eyebrow">Kod muharriri</div><h1 style="font-size:34px">Playground</h1></div>
        <div class="row">
          <label class="field" style="grid-auto-flow:column;align-items:center;gap:8px"><span class="lbl">Namuna</span>
            <select id="tpl"><option value="">— tanlang —</option>${Object.keys(TEMPLATES).map((k) => `<option>${esc(k)}</option>`).join("")}</select></label>
          <button class="btn primary" id="run" type="button">▶ Ishga tushirish</button>
          <label class="row" style="gap:6px;font-size:14px;font-weight:700"><input id="auto" type="checkbox" checked> avtomatik</label>
        </div>
      </div>
      <div class="pg">
        <div class="pg-ed">
          <div class="pg-tabs" role="tablist">
            <button data-k="html" type="button" role="tab">index.html</button>
            <button data-k="css" type="button" role="tab">style.css</button>
            <button data-k="js" type="button" role="tab">script.js</button>
          </div>
          <textarea id="ed" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Kod muharriri"></textarea>
        </div>
        <div class="pg-out">
          <div class="preview-bar" style="justify-content:space-between;flex-wrap:wrap"><span style="margin:0">Natija</span>
            <div class="seg" id="w"><button data-w="100%" class="on" type="button">🖥 To'liq</button><button data-w="768px" type="button">▭ 768</button><button data-w="375px" type="button">📱 375</button></div></div>
          <div class="pg-frame"><iframe title="Natija" sandbox="allow-scripts allow-forms allow-popups allow-modals"></iframe></div>
          <div class="console" aria-live="polite"></div>
        </div>
      </div>
      <div class="row" style="margin-top:12px">
        <button class="btn sm" id="copyAll" type="button">📋 To'liq HTML faylni nusxalash</button>
        <button class="btn sm" id="clear" type="button">🗑 Tozalash</button>
      </div>
      <p class="pg-hint">Maslahat: HTML oynasida <kbd>!</kbd> yozib <kbd>Tab</kbd> bossangiz – HTML shabloni, <kbd>lorem</kbd> + <kbd>Tab</kbd> – vaqtinchalik matn. Kod brauzeringizda avtomatik saqlanadi.</p>`;
    const ed = $("#ed"), frame = $(".pg-frame iframe"), con = $(".pg-out .console");
    const setTab = (k) => {
      tab = k; ed.value = code[k];
      $$(".pg-tabs button").forEach((b) => { b.classList.toggle("on", b.dataset.k === k); b.setAttribute("aria-selected", b.dataset.k === k); });
    };
    const run = () => {
      const id = "p" + ++pvSeq;
      con.innerHTML = ""; consoles.set(id, con);
      let doc = code;
      if (/<!doctype|<html/i.test(code.html)) {
        const m = code.html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        doc = { html: m ? m[1] : code.html, css: code.css, js: code.js };
      }
      frame.srcdoc = buildDoc(doc, id);
    };
    let deb;
    ed.addEventListener("input", () => {
      code[tab] = ed.value; store.set("pg", code);
      if ($("#auto").checked) { clearTimeout(deb); deb = setTimeout(run, 500); }
    });
    ed.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;
      e.preventDefault();
      const s = ed.selectionStart, v = ed.value, before = v.slice(0, s);
      let ins = "  ", cut = 0;
      if (tab === "html" && /(^|\n)\s*!$/.test(before)) { ins = SKELETON; cut = 1; }
      else if (/lorem\d*$/.test(before)) { const m = before.match(/lorem(\d*)$/); cut = m[0].length; const n = +m[1] || 12; ins = LOREM.split(" ").concat(LOREM.split(" "), LOREM.split(" ")).slice(0, n).join(" "); }
      ed.value = v.slice(0, s - cut) + ins + v.slice(ed.selectionEnd);
      ed.selectionStart = ed.selectionEnd = s - cut + (ins === SKELETON ? ins.indexOf("<body>") + 9 : ins.length);
      ed.dispatchEvent(new Event("input"));
    });
    $$(".pg-tabs button").forEach((b) => b.addEventListener("click", () => setTab(b.dataset.k)));
    $("#run").addEventListener("click", run);
    $("#tpl").addEventListener("change", (e) => {
      if (!e.target.value) return;
      code = Object.assign({}, TEMPLATES[e.target.value]); store.set("pg", code); setTab("html"); run(); e.target.value = "";
    });
    $$("#w button").forEach((b) => b.addEventListener("click", () => {
      frame.style.width = b.dataset.w;
      $$("#w button").forEach((x) => x.classList.toggle("on", x === b));
    }));
    $("#copyAll").addEventListener("click", () => {
      const full = /<!doctype/i.test(code.html) ? code.html :
        `<!DOCTYPE html>\n<html lang="uz">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Mening sahifam</title>\n  <style>\n${code.css}\n  </style>\n</head>\n<body>\n${code.html}\n  <script>\n${code.js}\n  <\/script>\n</body>\n</html>\n`;
      window.copyText(full);
    });
    let armed = false;
    $("#clear").addEventListener("click", (e) => {
      if (!armed) { armed = true; e.target.textContent = "Rostdan tozalaysizmi? Yana bosing"; setTimeout(() => { armed = false; e.target.textContent = "🗑 Tozalash"; }, 3000); return; }
      code = { html: "", css: "", js: "" }; store.set("pg", code); setTab("html"); run(); armed = false; e.target.textContent = "🗑 Tozalash";
    });
    setTab(tab);
    run();
  }

  /* ---------- Laboratoriya ---------- */
  function renderLabs(key) {
    setNav("labs");
    document.title = "Laboratoriya · PS Termiz";
    const L = window.LABS;
    app.innerHTML = `<div><div class="eyebrow">Vizual trenajyorlar</div><h1 style="font-size:40px">Laboratoriya</h1>
      <p class="muted" style="max-width:65ch">O'qituvchi tushunchani proyektorda jonli ko'rsatadi, o'quvchilar slayderlarni surib natijani o'zlari ko'radi. Pastdagi kod – tayyor CSS, uni nusxalab ishlatish mumkin.</p></div>
      <div class="labs-index">${Object.keys(L).map((k) => `<a class="lab-card" href="#lab-${k}"${k === key ? ' aria-current="page"' : ""}><b>${esc(L[k].title)}</b><span>${esc(L[k].desc)}</span><small>${L[k].lessons.map((n) => n + "-dars").join(", ")}</small></a>`).join("")}</div>
      <div id="labHost"></div>
      <div class="row" style="margin-top:14px">${L[key].lessons.map((n) => `<a class="btn sm" href="#lesson-${n}">${n}-dars: ${esc(byN(n).title)} →</a>`).join("")}</div>`;
    window.renderLab(key, $("#labHost"));
  }

  /* ---------- O'qituvchi paneli ---------- */
  function renderTeacher() {
    setNav("teacher");
    document.title = "O'qituvchi paneli · PS Termiz";
    const s = schedSettings();
    const names = store.get("names", "Aziz\nMadina\nJasur\nDilnoza\nSardor\nMalika\nBekzod\nNilufar\nOtabek\nShahzoda");
    if (!timer.n) timer.load((LESSONS.find((l) => !done.has(l.n)) || LESSONS[0]).n);
    app.innerHTML = `<div style="margin-bottom:16px"><div class="eyebrow">Sinfni boshqarish</div><h1 style="font-size:40px">O'qituvchi paneli</h1></div>
      <div class="t-grid">
        <section class="panel wide">
          <div class="row" style="justify-content:space-between"><h2>⏱ Dars taymeri</h2>
            <label class="field" style="min-width:0;flex:1 1 260px;max-width:460px"><span class="lbl">Dars</span><select id="tl">${LESSONS.map((l) => `<option value="${l.n}"${l.n === timer.n ? " selected" : ""}>${l.n}. ${esc(l.title)}</option>`).join("")}</select></label></div>
          <div class="row" style="align-items:flex-end;justify-content:space-between;margin-top:8px">
            <div><div class="bigclock" id="clk">45:00</div><div id="phn" style="font-weight:800;font-size:18px"></div></div>
            <div class="row"><button class="btn primary" id="tgo" type="button">▶ Boshlash</button><button class="btn" id="trs" type="button">↺ Qayta</button><a class="btn" id="tpr" href="#present-${timer.n}">Taqdimot</a></div>
          </div>
          <div class="phasebar" id="pb"></div>
          <div class="row muted" id="pbl" style="font-size:12.5px;gap:14px"></div>
          <p class="muted" style="font-size:13px;margin:8px 0 0">Bosqich almashganda qisqa signal chalinadi. Taymer taqdimot rejimida ham ko'rinadi.</p>
        </section>
        <section class="panel">
          <h2>🎯 Tasodifiy o'quvchi</h2>
          <div class="field"><label for="names">Sinf ro'yxati (har qatorda bitta ism)</label><textarea id="names" rows="6">${esc(names)}</textarea></div>
          <div class="row" style="margin-top:10px"><button class="btn primary" id="pick" type="button">Tanlash</button><label class="row" style="gap:6px;font-size:14px;font-weight:700"><input type="checkbox" id="norep" checked> takrorlanmasin</label></div>
          <div class="picked" id="picked" aria-live="polite"></div>
        </section>
        <section class="panel">
          <h2>👥 Guruhlarga bo'lish</h2>
          <div class="row"><label class="field" style="width:120px"><span class="lbl">Guruhlar soni</span><input id="gn" type="number" min="2" max="10" value="3"></label><button class="btn primary" id="grp" type="button" style="align-self:flex-end">Bo'lish</button></div>
          <div class="groups" id="groups"></div>
        </section>
        <section class="panel wide">
          <h2>📅 Dars jadvali</h2>
          <div class="row" style="align-items:flex-end">
            <label class="field"><span class="lbl">Boshlanish sanasi</span><input id="sd" type="date" value="${esc(s.start)}"></label>
            <div class="field"><span class="lbl">Dars kunlari (haftasiga ${C.perWeek} ta)</span><div class="days">${[1, 2, 3, 4, 5, 6].map((d) => `<label><input type="checkbox" value="${d}"${s.days.includes(d) ? " checked" : ""}> ${WD_FULL[d]}</label>`).join("")}</div></div>
          </div>
          <label class="field" style="margin-top:10px"><span class="lbl">Dars bo'lmaydigan kunlar (bayram, ta'til): YYYY-MM-DD, vergul bilan</span><input id="skip" type="text" value="${esc(s.skip)}" placeholder="2026-10-01, 2026-12-31, 2027-01-01"></label>
          <div class="row" style="margin:10px 0" id="schedInfo"></div>
          <div class="tbl-wrap"><table class="sched"><thead><tr><th>#</th><th>Sana</th><th>Kun</th><th>Modul</th><th>Mavzu</th><th>Holat</th></tr></thead><tbody id="sbody"></tbody></table></div>
        </section>
        <section class="panel wide">
          <h2>📈 Kurs progressi</h2>
          <p style="margin:0 0 10px"><b id="pdone">${done.size}</b> / ${TOTAL} dars o'tildi deb belgilangan. Belgilar faqat shu brauzerda saqlanadi.</p>
          <div class="row"><button class="btn" id="resetP" type="button">Progressni tozalash</button></div>
        </section>
      </div>`;

    /* Taymer */
    const drawBar = () => {
      const cols = ["var(--m2)", "var(--m3)", "var(--m4)", "var(--m8)", "var(--m7)", "var(--m6)"];
      $("#pb").innerHTML = timer.plan.map((p, i) => `<i style="width:${((p.b - p.a) / 45) * 100}%;background:${cols[i % cols.length]};opacity:.55"></i>`).join("") + `<span class="cursor"></span>`;
      $("#pbl").innerHTML = timer.plan.map((p, i) => `<span><b style="color:${cols[i % cols.length]}">■</b> ${p.r}: ${esc(p.t)}</span>`).join("");
    };
    const tick = () => {
      if (!$("#clk")) { timer.subs.delete(tick); return; }
      $("#clk").textContent = timer.label();
      $("#clk").style.color = timer.total - timer.now() < 5 * 60000 ? "var(--bad)" : "";
      const ph = timer.plan[timer.phase()];
      $("#phn").textContent = ph ? `Hozir: ${ph.r} daq · ${ph.t}` : "";
      $("#tgo").textContent = timer.running ? "⏸ Pauza" : "▶ Boshlash";
      const c = $("#pb .cursor");
      if (c) c.style.left = Math.min(100, (timer.now() / timer.total) * 100) + "%";
    };
    timer.subs.add(tick);
    drawBar(); tick();
    $("#tl").addEventListener("change", (e) => { timer.load(+e.target.value); $("#tpr").href = "#present-" + timer.n; drawBar(); tick(); });
    $("#tgo").addEventListener("click", () => timer.toggle());
    $("#trs").addEventListener("click", () => timer.reset());

    /* Tasodifiy o'quvchi */
    let used = new Set();
    $("#names").addEventListener("input", (e) => { store.set("names", e.target.value); used = new Set(); });
    $("#pick").addEventListener("click", () => {
      const all = $("#names").value.split("\n").map((x) => x.trim()).filter(Boolean);
      if (!all.length) { $("#picked").textContent = "Ro'yxat bo'sh – ismlarni kiriting"; return; }
      let pool = $("#norep").checked ? all.filter((x) => !used.has(x)) : all;
      if (!pool.length) { used = new Set(); pool = all; }
      const win = pool[Math.floor(Math.random() * pool.length)];
      used.add(win);
      let k = 0;
      const el = $("#picked");
      const spin = setInterval(() => {
        el.textContent = all[Math.floor(Math.random() * all.length)];
        if (++k > 14) { clearInterval(spin); el.textContent = "👉 " + win; }
      }, 70);
    });
    $("#grp").addEventListener("click", () => {
      const all = shuffle($("#names").value.split("\n").map((x) => x.trim()).filter(Boolean));
      const g = Math.max(2, Math.min(10, +$("#gn").value || 3));
      const out = Array.from({ length: g }, () => []);
      all.forEach((nm, i) => out[i % g].push(nm));
      $("#groups").innerHTML = out.map((m, i) => `<div><b>${i + 1}-guruh</b>${m.map(esc).join("<br>") || "—"}</div>`).join("");
    });

    /* Jadval */
    const drawSched = () => {
      const map = computeSchedule();
      const today = iso(new Date());
      const keys = Object.keys(map);
      const last = keys.length ? map[TOTAL] : null;
      const nextN = keys.map(Number).find((n) => iso(map[n]) >= today);
      $("#schedInfo").innerHTML = keys.length
        ? `<span class="chip">Birinchi dars: ${fmtDate(map[1])}</span>${last ? `<span class="chip">Oxirgi (${TOTAL}-dars): ${fmtDate(last)} ${last.getFullYear()}</span>` : ""}${nextN ? `<a class="chip mchip" style="--mc:var(--accent)" href="#lesson-${nextN}">Navbatdagi: ${nextN}-dars, ${fmtDate(map[nextN])}</a>` : ""}`
        : `<span class="chip" style="color:var(--bad)">Kamida bitta dars kunini tanlang</span>`;
      $("#sbody").innerHTML = LESSONS.map((l) => {
        const d = map[l.n];
        return `<tr class="${d && iso(d) < today ? "past" : ""}"><td class="num">${l.n}</td><td class="num">${d ? `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()}` : "—"}</td><td>${d ? WD_FULL[d.getDay()] : ""}</td><td><span class="chip mchip" style="--mc:${modOf(l.m).color}">${esc(modOf(l.m).short)}</span></td><td><a href="#lesson-${l.n}">${esc(l.title)}</a></td><td>${done.has(l.n) ? "✓ o'tildi" : ""}</td></tr>`;
      }).join("");
    };
    const saveSched = () => {
      store.set("sched", { start: $("#sd").value, days: $$(".days input:checked").map((x) => +x.value), skip: $("#skip").value });
      drawSched();
    };
    $("#sd").addEventListener("change", saveSched);
    $("#skip").addEventListener("change", saveSched);
    $$(".days input").forEach((x) => x.addEventListener("change", saveSched));
    drawSched();

    let armed = false;
    $("#resetP").addEventListener("click", (e) => {
      if (!armed) { armed = true; e.target.textContent = "Rostdan tozalaysizmi? Yana bosing"; setTimeout(() => { armed = false; e.target.textContent = "Progressni tozalash"; }, 3000); return; }
      done = new Set(); saveDone(); $("#pdone").textContent = 0; drawSched();
      e.target.textContent = "Progressni tozalash"; armed = false; toast("Progress tozalandi");
    });
  }

  /* ---------- Mavzu (theme) ---------- */
  const themeBtn = $("#theme");
  const applyTheme = (t) => {
    if (t) document.documentElement.setAttribute("data-theme", t); else document.documentElement.removeAttribute("data-theme");
    const dark = t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    themeBtn.textContent = dark ? "☀" : "☾";
    themeBtn.setAttribute("aria-label", dark ? "Yorug' rejim" : "Tungi rejim");
  };
  applyTheme(store.get("theme", ""));
  themeBtn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const nx = cur === "dark" ? "light" : "dark";
    store.set("theme", nx); applyTheme(nx);
  });

  window.addEventListener("hashchange", route);
  route();
})();
