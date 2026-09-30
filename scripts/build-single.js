/* Butun platformani bitta HTML faylga yig'adi (internetsiz ham ochiladi, faqat shriftlar va kod ranglash CDN'dan).
   Ishga tushirish: node scripts/build-single.js  →  dist/ps-termiz-web-course.html */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const safeJs = (s) => s.replace(/<\/script/gi, "<\\/script");

let html = read("index.html");
html = html.replace(/<link rel="stylesheet" href="assets\/css\/style.css">/, () => `<style>\n${read("assets/css/style.css")}\n</style>`);
html = html.replace(/<script src="(assets\/[^"]+)"><\/script>/g, (_, src) => `<script>\n${safeJs(read(src))}\n</script>`);

const out = path.join(root, "dist");
fs.mkdirSync(out, { recursive: true });
const file = path.join(out, "ps-termiz-web-course.html");
fs.writeFileSync(file, html);
console.log(`✓ ${path.relative(root, file)} (${Math.round(html.length / 1024)} KB)`);

/* --artifact: <html>/<head>/<body> teglarisiz variant (tashqi skelet ichiga joylash uchun) */
const i = process.argv.indexOf("--artifact");
if (i !== -1 && process.argv[i + 1]) {
  const head = html.match(/<head>([\s\S]*?)<\/head>/)[1].replace(/<meta charset[^>]*>|<meta name="viewport"[^>]*>/g, "");
  const body = html.match(/<body>([\s\S]*)<\/body>/)[1];
  fs.writeFileSync(process.argv[i + 1], head.trim() + "\n" + body.trim() + "\n");
  console.log(`✓ artifact varianti: ${process.argv[i + 1]}`);
}
