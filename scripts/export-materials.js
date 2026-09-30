/* Dars ma'lumotlaridan o'qituvchi uchun chop etiladigan Markdown qo'llanma yaratadi.
   Ishga tushirish: node scripts/export-materials.js  →  materials/ papkasi */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
global.window = global;
require(path.join(root, "assets/js/data/modules.js"));
global.L = window.L;
["01", "02", "03", "04"].forEach((f) => require(path.join(root, `assets/js/data/lessons-${f}.js`)));

const C = window.COURSE;
const lessons = C.lessons.slice().sort((a, b) => a.n - b.n);
const planOf = (l) => l.plan || [
  ["0–5", "Salomlashish va takrorlash (savol-javob)"],
  ["5–15", "Yangi mavzu: " + l.topics.slice(0, 3).join(", ")],
  ["15–35", "Amaliy ish: " + l.classwork.t],
  ["35–42", "AI yordamchi va mini test"],
  ["42–45", "Uy vazifasi va xulosa"]
];
const fence = (lang, code) => "```" + (lang === "js" ? "javascript" : lang) + "\n" + code + "\n```";

function lessonMd(l) {
  const m = C.modules.find((x) => x.id === l.m);
  const out = [];
  out.push(`## ${l.n}-dars. ${l.title}`, "", `**Modul:** ${m.id}. ${m.title} · **Mavzular:** ${l.topics.join(", ")}`, "");
  out.push("### Maqsadlar", ...l.goals.map((g) => `- ${g}`), "");
  out.push("### 45 daqiqalik reja", "| Daqiqa | Bosqich |", "|---|---|", ...planOf(l).map(([r, t]) => `| ${r} | ${t} |`), "");
  out.push("### Tushunchalar");
  l.concepts.forEach((c) => {
    out.push(`**${c.t}.** ${c.d}`, "");
    if (c.lab) out.push(`> 🔬 Platformadagi laboratoriya: *${c.lab}*`, "");
    if (c.html && c.lang !== "html") out.push(fence("html", c.html), "");
    if (c.code) out.push(fence(c.lang, c.code), "");
  });
  out.push(`### Amaliy ish: ${l.classwork.t}`, l.classwork.d, "", ...l.classwork.steps.map((s, i) => `${i + 1}. ${s}`), "");
  if (l.classwork.starter) {
    const s = l.classwork.starter;
    if (s.html) out.push("Boshlang'ich kod (HTML):", fence("html", s.html), "");
    if (s.css) out.push("Boshlang'ich kod (CSS):", fence("css", s.css), "");
    if (s.js) out.push("Boshlang'ich kod (JS):", fence("js", s.js), "");
  }
  out.push(`### AI yordamchi: ${l.ai.t}`, "> " + l.ai.p.replace(/\n/g, "\n> "), "");
  out.push("### Uy vazifasi", l.homework, "");
  out.push("### Mini test");
  l.quiz.forEach(([q, opts, c], i) => {
    out.push(`${i + 1}. ${q}`, ...opts.map((o, j) => `   - ${j === c ? "**" + o + "** ✓" : o}`));
  });
  out.push("");
  if (l.links && l.links.length) out.push("### Havolalar", ...l.links.map(([t, u]) => `- [${t}](${u})`), "");
  if (l.note) out.push("### O'qituvchi uchun eslatma", l.note, "");
  out.push("---", "");
  return out.join("\n");
}

const dir = path.join(root, "materials");
fs.mkdirSync(dir, { recursive: true });

const toc = [
  `# ${C.title}: o'qituvchi qo'llanmasi`, "",
  `${C.subtitle}. ${lessons.length} ta dars · haftasiga ${C.perWeek} dars · har biri ${C.lessonMinutes} daqiqa.`, "",
  "> Bu fayl `node scripts/export-materials.js` orqali avtomatik yaratilgan. Darslarni o'zgartirish uchun `assets/js/data/` papkasidagi fayllarni tahrirlang.", "",
  "## Mundarija", ""
];
C.modules.forEach((m) => {
  const ls = lessons.filter((l) => l.m === m.id);
  toc.push(`### ${m.id}-modul. ${m.title} (${ls[0].n}–${ls[ls.length - 1].n})`, m.desc, "", ...ls.map((l) => `- ${l.n}. ${l.title}`), "");
});

let all = toc.join("\n") + "\n\n";
C.modules.forEach((m) => {
  const ls = lessons.filter((l) => l.m === m.id);
  const body = `# ${m.id}-modul. ${m.title}\n\n${m.desc}\n\n` + ls.map(lessonMd).join("\n");
  fs.writeFileSync(path.join(dir, `modul-${String(m.id).padStart(2, "0")}.md`), body);
  all += body + "\n";
});
fs.writeFileSync(path.join(dir, "barcha-darslar.md"), all);
console.log(`✓ materials/ papkasiga ${C.modules.length} ta modul fayli va barcha-darslar.md yozildi (${lessons.length} dars).`);
