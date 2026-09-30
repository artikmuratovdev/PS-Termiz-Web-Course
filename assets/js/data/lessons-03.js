/* 41–60-darslar: Responsive, Git, Position, animatsiya, Sass */

L({
  n: 41, m: 5, title: "Responsive dizayn: @media",
  topics: ["Responsive", "@media", "max-width", "DevTools device mode"],
  lab: "responsive",
  goals: ["Responsive nima ekanini tushunadi", "@media (max-width) bilan telefon uchun alohida uslub yozadi", "DevTools'da telefon ko'rinishini tekshiradi"],
  concepts: [
    { t: "Nega kerak?", d: "Odamlarning ko'pchiligi saytni telefonda ochadi. Sahifa katta ekranda 3 ustun, planshetda 2, telefonda 1 ustun bo'lishi kerak. Laboratoriyada ekran kengligini o'zgartirib ko'ring.", lab: "responsive" },
    { t: "@media", d: "Shart: ekran kengligi berilgan qiymatdan kichik bo'lsa – ichidagi uslublar ishlaydi.", lang: "css", run: true,
      html: `<div class="cards"><div>1</div><div>2</div><div>3</div></div>\n<p>Brauzer oynasini toraytiring!</p>`,
      code: `.cards { display: flex; gap: 10px; }
.cards div { flex: 1; padding: 30px; background: #63e6be; font-size: 28px; text-align: center; }

@media (max-width: 600px) {
  .cards { flex-direction: column; }
  .cards div { background: #ffa94d; }
}` },
    { t: "Asosiy nuqtalar", d: "1250px – kichik noutbuk, 992px – planshet (gorizontal), 768px – planshet, 576px – telefon. DevTools → Ctrl+Shift+M – qurilma rejimi." }
  ],
  classwork: {
    t: "Strawberry fruit flex",
    d: "Qulupnay haqidagi sahifa: kompyuterda 2 ustun, telefonda 1 ustun.",
    steps: ["Hero: matn + rasm (flex)", "@media (max-width: 768px) – column", "Shrift o'lchamini kichraytiring", "DevTools'da 3 xil qurilmada tekshiring"]
  },
  homework: "Strawberry sahifasini to'liq responsive qiling va responsive haqidagi videoni ko'ring.",
  quiz: [
    ["Telefon uchun uslub:", ["@media (max-width: 576px)", "@phone", "@screen small", "media: phone"], 0],
    ["DevTools qurilma rejimi:", ["Ctrl+Shift+M", "Ctrl+M", "F5", "Alt+D"], 0],
    ["Responsive sahifa uchun head'da:", ["meta viewport", "meta charset", "title", "link icon"], 0]
  ],
  ai: { t: "Responsive tekshiruv", p: "Mana mening CSS kodim. Telefonda (375px) qaysi joylar buzilishi mumkin? @media bilan tuzatish yo'lini tushuntir:\n[kod]" }
});

L({
  n: 42, m: 5, title: "Responsive amaliyot: galereya va gap",
  topics: ["gap", "row-gap", "column-gap", "% o'lchamlar"],
  goals: ["Rasmlar galereyasini responsive qiladi", "row-gap va column-gap'ni alohida beradi", "max-width va % bilan moslashuvchan o'lcham beradi"],
  concepts: [
    { t: "Moslashuvchan galereya", d: "flex-basis va min-width bilan elementlar o'zi qatorga moslashadi.", lang: "css", run: true,
      html: `<div class="gal">\n  <img src="https://picsum.photos/id/10/300/200" alt="O'rmon">\n  <img src="https://picsum.photos/id/11/300/200" alt="Dala">\n  <img src="https://picsum.photos/id/12/300/200" alt="Qirg'oq">\n  <img src="https://picsum.photos/id/13/300/200" alt="Dengiz">\n</div>`,
      code: `.gal { display: flex; flex-wrap: wrap; row-gap: 10px; column-gap: 10px; }
.gal img { flex: 1 1 200px; max-width: 100%; border-radius: 10px; }` }
  ],
  classwork: {
    t: "Coast image",
    d: "Dengiz qirg'og'i mavzusidagi galereya sahifa.",
    steps: ["Hero – fon rasm", "8 ta rasmli galereya", "Katta ekranda 4, planshetda 2, telefonda 1 ustun", "Rasm hover'da kattalashadi"]
  },
  homework: "O'z shahringiz haqida responsive galereya.",
  quiz: [
    ["Qatorlar orasidagi masofa:", ["row-gap", "line-gap", "top-gap", "margin-row"], 0],
    ["flex: 1 1 200px'dagi 200px:", ["Boshlang'ich o'lcham", "Maksimal balandlik", "Padding", "Margin"], 0],
    ["Rasm konteynerdan chiqmasin:", ["max-width: 100%", "width: 200%", "float: left", "min-width: 900px"], 0]
  ],
  ai: { t: "Alt matnlar", p: "Galereyadagi 8 ta dengiz manzarasi rasmi uchun qisqa va aniq alt matnlar yozib ber." }
});

L({
  n: 43, m: 5, title: "Responsive sahifa: Truck",
  topics: ["Header responsive", "Burger menyu g'oyasi", "Ustunlarni almashish"],
  goals: ["Menyuni telefonda ustunga aylantiradi", "Bo'limlarni turli ekranlarga moslaydi"],
  concepts: [
    { t: "Telefonda menyu", d: "Katta ekranda gorizontal, kichikda vertikal.", lang: "css", run: true,
      html: `<header class="h">\n  <b>TRUCK</b>\n  <nav><a href="#">Xizmatlar</a><a href="#">Narxlar</a><a href="#">Aloqa</a></nav>\n</header>`,
      code: `.h { display: flex; justify-content: space-between; align-items: center; padding: 14px; background: #343a40; color: #fff; font-family: sans-serif; }
.h nav { display: flex; gap: 14px; }
.h a { color: #ffd43b; text-decoration: none; }
@media (max-width: 500px) {
  .h { flex-direction: column; gap: 10px; }
}` }
  ],
  classwork: {
    t: "Truck (yuk tashish) sahifasi",
    d: "Yuk tashish kompaniyasi landing sahifasi, to'liq responsive.",
    steps: ["Header", "Hero – mashina rasmi va matn", "Xizmatlar – 3 karta", "3 ta @media nuqtasi"]
  },
  homework: "Truck sahifasini tugating.",
  quiz: [
    ["Menyu telefonda ustun bo'lishi uchun:", ["flex-direction: column", "display: grid-only", "nav: vertical", "float: none"], 0],
    ["@media ichida nima yoziladi?", ["Oddiy CSS qoidalari", "HTML", "JavaScript", "Rasm"], 0],
    ["Nechta @media bo'lishi mumkin?", ["Istalgancha", "Faqat 1", "Faqat 2", "Faqat 3"], 0]
  ],
  ai: { t: "Burger menyu", p: "Burger menyu nima va u qanday ishlaydi? Hozircha JavaScript'siz, faqat g'oyasini bolalarga tushuntir." }
});

L({
  n: 44, m: 5, title: "Canvix va Organic footer",
  topics: ["Footer", "Ko'p ustunli bloklar", "Ikonlar"],
  goals: ["Ko'p ustunli footer yasaydi", "Footer'ni telefonda ustunlarga ajratadi"],
  concepts: [
    { t: "Footer tuzilmasi", d: "Logo + qisqa matn, havolalar ustunlari, ijtimoiy tarmoqlar, pastda © qator.", lang: "css", run: true,
      html: `<footer class="f">\n  <div><b>Organic</b><p>Toza mahsulotlar</p></div>\n  <div><b>Menyu</b><p>Asosiy<br>Do'kon<br>Aloqa</p></div>\n  <div><b>Aloqa</b><p>Termiz sh.<br>+998 90 000 00 00</p></div>\n</footer>`,
      code: `.f { display: flex; flex-wrap: wrap; gap: 30px; justify-content: space-between;
  padding: 30px; background: #2b8a3e; color: #ebfbee; font-family: sans-serif; }
.f div { flex: 1 1 150px; }
.f p { opacity: .85; line-height: 1.7; }` }
  ],
  classwork: {
    t: "Canvix sahifasi + Organic footer",
    d: "Canvix (dizayn studiyasi) sahifasi va organik do'kon footeri.",
    steps: ["Canvix hero va xizmatlar", "4 ustunli footer", "Font Awesome ikonlar", "Telefonda 1 ustun"]
  },
  homework: "O'z portfoliongizga responsive footer qo'shing.",
  quiz: [
    ["© belgisi HTML'da:", ["&copy;", "&c;", "(c)tag", "&copyright"], 0],
    ["Ustunlar teng bo'lishi uchun:", ["flex: 1", "width: auto", "float: all", "gap: 1"], 0],
    ["Footer semantik tegi:", ["footer", "bottom", "end", "foot"], 0]
  ],
  ai: { t: "Footer matni", p: "Organik mahsulotlar do'koni footer'i uchun bo'limlar va havolalar ro'yxatini tuzib ber." }
});

L({
  n: 45, m: 5, title: "Kun.uz sahifasini responsive yasash",
  topics: ["Real sayt klon", "Yangiliklar setkasi", "Responsive"],
  goals: ["Real sayt bosh sahifasini soddalashtirib takrorlaydi", "3 xil ekran uchun moslaydi"],
  concepts: [
    { t: "Yangilik kartasi", d: "Rasm, rubrika, sarlavha, vaqt.", lang: "css", run: true,
      html: `<article class="news">\n  <img src="https://picsum.photos/id/1067/400/220" alt="Shahar ko'chasi">\n  <span>O'zbekiston</span>\n  <h3>Termizda yangi ko'prik qurilmoqda</h3>\n  <time>14:20</time>\n</article>`,
      code: `.news { max-width: 300px; font-family: sans-serif; }
.news img { width: 100%; border-radius: 8px; vertical-align: middle; }
.news span { display: inline-block; margin-top: 8px; color: #1c7ed6; font-size: 13px; font-weight: bold; }
.news h3 { margin: 6px 0; font-size: 18px; }
.news time { color: #868e96; font-size: 13px; }` }
  ],
  classwork: {
    t: "Kun.uz page responsive",
    d: "Kun.uz bosh sahifasining soddalashtirilgan nusxasi.",
    steps: ["Header va rubrikalar menyusi", "Asosiy yangilik (katta) + yon ro'yxat", "Yangiliklar setkasi (4 → 2 → 1)", "Footer"]
  },
  homework: "Restaurant-Website (Figma): birinchi 2 bo'lim.",
  quiz: [
    ["Vaqt uchun semantik teg:", ["time", "clock", "date", "span-time"], 0],
    ["Yangilik uchun teg:", ["article", "news", "post", "div-news"], 0],
    ["4 → 2 → 1 ustun uchun nechta @media kerak?", ["2", "0", "5", "10"], 0]
  ],
  ai: { t: "Tahlil", p: "Yangiliklar sayti bosh sahifasi telefonda qanday tartibda ko'rsatilishi kerak? Eng muhimidan boshlab ro'yxat qil." },
  links: [["kun.uz", "https://kun.uz"]]
});

L({
  n: 46, m: 5, title: "Git va GitHub",
  topics: ["Git", "GitHub", "init, add, commit, push"],
  lab: "git",
  goals: ["Git nima uchun kerakligini tushunadi (vaqt mashinasi)", "Asosiy buyruqlarni ketma-ket bajaradi", "Loyihani GitHub'ga yuklaydi"],
  concepts: [
    { t: "Git – vaqt mashinasi", d: "Git har bir 'commit'ni saqlab qo'yadi – xohlagan paytda eski holatga qaytish mumkin. GitHub – loyihalar saqlanadigan internetdagi joy. Laboratoriyadagi simulyatorda buyruqlarni sinab ko'ring.", lab: "git" },
    { t: "Buyruqlar", d: "Terminalda (VS Code → Ctrl+`) ketma-ket yoziladi.", lang: "bash",
      code: `git --version                      # versiyani bilish
git config --global user.name "github_login"
git config --global user.email "email@example.com"
git init                           # papkani git'ga ulash
git add .                          # hamma o'zgarishlarni tayyorlash
git commit -m "Birinchi commit"    # saqlash
git remote add origin https://github.com/login/repo.git
git push -u origin main            # GitHub'ga yuborish` }
  ],
  classwork: {
    t: "Birinchi repozitoriy",
    d: "Portfolio papkangizni GitHub'ga yuklang.",
    steps: ["github.com'da hisob oching (ota-ona roziligi bilan)", "Git o'rnating, git --version", "Laboratoriyada buyruqlarni mashq qiling", "Yangi repo → buyruqlar → push"]
  },
  homework: "Figma'dan qilgan ishingizni GitHub'ga yuklang.",
  quiz: [
    ["O'zgarishlarni saqlash:", ["git commit -m '...'", "git save", "git store", "git keep"], 0],
    ["GitHub'ga yuborish:", ["git push", "git send", "git upload", "git go"], 0],
    ["Papkani git'ga ulash:", ["git init", "git start", "git new", "git open"], 0]
  ],
  ai: { t: "Xato xabari", p: "git push qilganimda 'error: failed to push some refs' chiqdi. Bu nimani anglatadi va nima qilishim kerak? Oddiy tilda." },
  links: [["GitHub", "https://github.com"], ["Git", "https://git-scm.com"]]
});

L({
  n: 47, m: 5, title: "GitHub Pages: saytni internetga chiqarish",
  topics: ["GitHub Pages", "README", "Havola ulashish"],
  goals: ["Saytni GitHub Pages orqali bepul internetga chiqaradi", "README.md yozadi"],
  concepts: [
    { t: "GitHub Pages", d: "Repo → Settings → Pages → Branch: main → Save. 1–2 daqiqadan so'ng sayt login.github.io/repo manzilida ochiladi. Muhim: bosh fayl nomi index.html bo'lishi kerak!" },
    { t: "README.md", d: "Loyiha haqida ma'lumot. Markdown tilida yoziladi.", lang: "markdown",
      code: `# Mening portfoliom

HTML va CSS'da yozilgan shaxsiy sahifa.

## Ko'rish
https://login.github.io/portfolio

## Texnologiyalar
- HTML
- CSS` }
  ],
  classwork: {
    t: "Sayt jonli!",
    d: "Portfolio'ni GitHub Pages'ga chiqarib, havolani guruhga yuboring.",
    steps: ["Settings → Pages", "index.html borligini tekshiring", "README.md yozing", "Havolani telefonda oching"]
  },
  homework: "2 ta ishingizni GitHub Pages'ga chiqaring.",
  quiz: [
    ["Bosh fayl nomi:", ["index.html", "main.html", "home.html", "start.html"], 0],
    ["README qaysi tilda?", ["Markdown", "Python", "CSS", "Java"], 0],
    ["Pages sozlamasi qayerda?", ["Settings → Pages", "Code → Pages", "Issues", "Profile"], 0]
  ],
  ai: { t: "README yozish", p: "Mening portfolio loyiham uchun chiroyli README.md yozib ber: tavsif, texnologiyalar, qanday ochish. Loyiha: [qisqacha]" }
});

L({
  n: 48, m: 5, title: "Figma'dan loyiha: Restaurant Website",
  topics: ["Loyiha", "Responsive", "GitHub Pages"],
  goals: ["Figma maketidan to'liq responsive sahifa yozadi va internetga chiqaradi"],
  plan: [["0–5", "Maketni tahlil qilish"], ["5–38", "Mustaqil ish"], ["38–45", "GitHub'ga push va ko'rik"]],
  concepts: [
    { t: "Tekshiruv ro'yxati", d: "✓ semantik teglar ✓ alt matnlar ✓ .container ✓ 3 ta @media ✓ hover effektlar ✓ GitHub Pages havolasi." }
  ],
  classwork: {
    t: "Restaurant-Website",
    d: "Figma'dagi restoran maketini yakunlang.",
    steps: ["Qolgan bo'limlar", "Responsive", "git add / commit / push", "Pages havolasi"]
  },
  homework: "Loyihani tugatib havolani yuboring.",
  quiz: [
    ["Responsive tekshirish:", ["DevTools device mode", "Ctrl+P", "Word", "Paint"], 0],
    ["Saytni internetga chiqarish:", ["GitHub Pages", "Telegram", "Excel", "WinRAR"], 0],
    ["Rasmlar uchun majburiy:", ["alt", "id", "title", "name"], 0]
  ],
  ai: { t: "Yakuniy tekshiruv", p: "Sahifamdagi responsive xatolarni topish uchun menga tekshiruv ro'yxati (checklist) tuzib ber." },
  note: "Nazorat darsi (5-modul)."
});

L({
  n: 49, m: 6, title: "position: relative va absolute, z-index",
  topics: ["position", "relative", "absolute", "top/left", "z-index"],
  lab: "position",
  goals: ["relative va absolute farqini tushunadi", "Elementni ota-onaga nisbatan joylaydi", "z-index bilan qatlamlarni boshqaradi"],
  concepts: [
    { t: "relative + absolute", d: "Ota-onaga relative, bolaga absolute – bola ota-ona ichida istalgan burchakka joylashadi. Laboratoriyada sinang!", lab: "position" },
    { t: "Badge (belgi)", d: "Rasm burchagidagi 'Yangi' yozuvi.", lang: "css", run: true,
      html: `<div class="card">\n  <img src="https://picsum.photos/id/96/260/160" alt="Mahsulot">\n  <span class="badge">YANGI</span>\n</div>`,
      code: `.card { position: relative; width: 260px; }
.card img { width: 100%; border-radius: 10px; vertical-align: middle; }
.badge { position: absolute; top: 10px; right: 10px; z-index: 2;
  background: #f03e3e; color: #fff; padding: 4px 10px; border-radius: 20px; font: bold 12px sans-serif; }` }
  ],
  classwork: {
    t: "Rasm ustidagi yozuvlar",
    d: "Mahsulot kartalari: chegirma belgisi, yurakcha tugmasi, pastki narx paneli.",
    steps: ["Karta – relative", "Chegirma – absolute, top-left", "Yurakcha – top-right", "Narx paneli – bottom: 0, width: 100%"]
  },
  homework: "Swiper ko'rinishidagi slayder kartasi (strelkalar absolute).",
  quiz: [
    ["absolute kimga nisbatan joylashadi?", ["Eng yaqin relative ota-onaga", "Doim ekranga", "Qo'shni elementga", "Rasmga"], 0],
    ["Ustma-ust qatlam tartibi:", ["z-index", "layer", "order", "top-index"], 0],
    ["relative element o'z joyidan...", ["Siljisa ham joyi saqlanadi", "Yo'qoladi", "Ekranga yopishadi", "Kattalashadi"], 0]
  ],
  ai: { t: "Tushuntirish", p: "position: relative va absolute'ni 'xona va xonadagi mebel' misolida tushuntir." }
});

L({
  n: 50, m: 6, title: "position: fixed va sticky",
  topics: ["fixed", "sticky", "Yuqoriga qaytish tugmasi"],
  lab: "position",
  goals: ["fixed element ekranga yopishishini tushunadi", "sticky menyu yasaydi"],
  concepts: [
    { t: "sticky header", d: "Scroll qilganda menyu yuqorida yopishib qoladi.", lang: "css", run: true,
      html: `<header>Sticky menyu</header>\n<p>Pastga scroll qiling...</p><p style="height:600px">Uzun kontent</p>`,
      code: `header { position: sticky; top: 0; padding: 14px; background: #4263eb; color: #fff; font-family: sans-serif; }` },
    { t: "fixed tugma", d: "Ekranning pastki o'ng burchagida doim turadigan tugma.", lang: "css", run: true,
      html: `<a class="up" href="#">↑</a><p style="height:500px">Kontent</p>`,
      code: `.up { position: fixed; right: 16px; bottom: 16px; width: 48px; height: 48px;
  display: grid; place-items: center; border-radius: 50%;
  background: #12b886; color: #fff; font-size: 22px; text-decoration: none; }` }
  ],
  classwork: {
    t: "Position Langs",
    d: "Til tanlash paneli: sticky header, bayroqli tillar ro'yxati absolute ochiladi, fixed chat tugmasi.",
    steps: ["Sticky header", "Til tugmasi hover'da ro'yxat ochiladi (absolute)", "Fixed 'Yordam' tugmasi", "z-index to'g'ri tartibda"]
  },
  homework: "Position: aylantirilgan so'z (rotated word) va yashirin forma (hover'da chiqadi).",
  quiz: [
    ["Scroll'da ham ekranda qoladi:", ["fixed", "static", "relative", "inline"], 0],
    ["Ma'lum joyga yetganda yopishadi:", ["sticky", "fixed", "absolute", "float"], 0],
    ["sticky ishlashi uchun kerak:", ["top: 0", "z-index: 0", "width: 100%", "display: none"], 0]
  ],
  ai: { t: "Qachon qaysi?", p: "static, relative, absolute, fixed, sticky – har biri qachon ishlatiladi? Real saytlardan misol keltir." }
});

L({
  n: 51, m: 6, title: "overflow, flex-grow va flex-shrink",
  topics: ["overflow", "flex-grow", "flex-shrink", "order"],
  goals: ["Sig'magan kontentni overflow bilan boshqaradi", "flex-grow/shrink bilan o'sish va qisqarishni sozlaydi", "order bilan tartibni o'zgartiradi"],
  concepts: [
    { t: "overflow", d: "visible – chiqib turadi, hidden – yashiradi, auto – kerak bo'lsa scroll.", lang: "css", run: true,
      html: `<div class="b h">hidden: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptates. Lorem ipsum dolor sit amet.</div>\n<div class="b a">auto: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptates. Lorem ipsum dolor sit amet.</div>`,
      code: `.b { width: 200px; height: 60px; border: 2px solid #495057; margin: 8px; display: inline-block; vertical-align: top; }
.h { overflow: hidden; }
.a { overflow: auto; }` },
    { t: "grow va order", d: "flex-grow: 2 – boshqalardan 2 baravar ko'p o'sadi. order: -1 – birinchiga chiqadi.", lang: "css", run: true,
      html: `<div class="r"><div>A</div><div class="g">B (grow 2)</div><div class="o">C (order -1)</div></div>`,
      code: `.r { display: flex; gap: 6px; }
.r div { flex-grow: 1; padding: 16px; background: #d0bfff; }
.r .g { flex-grow: 2; background: #b197fc; }
.r .o { order: -1; background: #ffc9c9; }` }
  ],
  classwork: {
    t: "Step by step hover",
    d: "Hover'da kengayadigan panellar (akkordeon rasm galereyasi).",
    steps: ["5 ta panel flex ichida", "Har biri flex-grow: 1", "Hover'da flex-grow: 4", "transition + overflow: hidden"]
  },
  homework: "Simpsons mediaplayer webpage: pleyer interfeysi (overflow bilan ro'yxat).",
  quiz: [
    ["Kerak bo'lsa scroll:", ["overflow: auto", "overflow: visible", "scroll: maybe", "overflow: show"], 0],
    ["Birinchiga chiqarish:", ["order: -1", "order: 100", "first: true", "z-index: -1"], 0],
    ["Ko'proq o'sish:", ["flex-grow: 3", "flex-shrink: 3", "grow: max", "width: grow"], 0]
  ],
  ai: { t: "Taqqoslash", p: "flex-grow, flex-shrink va flex-basis'ni pitsa bo'lishish misolida tushuntir." }
});

L({
  n: 52, m: 6, title: "::before va ::after",
  topics: ["Psevdo-elementlar", "content", "Bezak elementlar"],
  goals: ["::before va ::after bilan qo'shimcha HTML'siz bezak qo'shadi", "content xususiyatini ishlatadi"],
  concepts: [
    { t: "Psevdo-element", d: "HTML'ga teg qo'shmasdan element oldiga yoki orqasiga 'soxta' element qo'shish. content majburiy (bo'sh bo'lsa ham '').", lang: "css", run: true,
      html: `<h2 class="t">Sarlavha</h2>\n<p class="q">Bilim – kuch.</p>`,
      code: `.t::after { content: ''; display: block; width: 60px; height: 4px; margin-top: 6px; background: #f76707; border-radius: 4px; }
.q::before { content: '“'; font-size: 40px; color: #adb5bd; vertical-align: -12px; }
.q::after  { content: ' ✔'; color: #37b24d; }` },
    { t: "Hover chiziq", d: "Havola ostidan chiqadigan chiziq.", lang: "css", run: true,
      html: `<a class="lnk" href="#">Ustimga kel</a>`,
      code: `.lnk { position: relative; font: 22px sans-serif; color: #1c7ed6; text-decoration: none; }
.lnk::after { content: ''; position: absolute; left: 0; bottom: -4px; width: 0; height: 3px; background: currentColor; transition: .3s; }
.lnk:hover::after { width: 100%; }` }
  ],
  classwork: {
    t: "Shadow card",
    d: "::before bilan orqasida rangli 'soya-qatlam' bor kartalar.",
    steps: ["Karta – relative", "::before – absolute, inset: 0, gradient fon", "z-index: -1 va transform: rotate(-3deg)", "Hover'da rotate(3deg)"]
  },
  homework: "Shadowcard: 3 xil rangli kartalar.",
  quiz: [
    ["::after uchun majburiy:", ["content", "width", "color", "display"], 0],
    ["Psevdo-element HTML'da ko'rinadimi?", ["Yo'q, faqat CSS'da", "Ha", "Faqat head'da", "Faqat JS'da"], 0],
    ["currentColor – bu:", ["Elementning joriy matn rangi", "Qora", "Tasodifiy rang", "Fon rangi"], 0]
  ],
  ai: { t: "Effekt yaratish", p: "::before va ::after bilan tugma uchun 2 ta qiziqarli hover effekt yozib ber va har qatorni izohla." }
});

L({
  n: 53, m: 6, title: "Veb sahifada telefon: murakkab joylashuv",
  topics: ["position + flex", "Mockup", "object-fit"],
  goals: ["Telefon maketini CSS bilan chizadi", "object-fit bilan rasmni moslaydi"],
  concepts: [
    { t: "Telefon maketi", d: "Ramka, ekran, kamera – hammasi div va psevdo-elementlar.", lang: "css", run: true,
      html: `<div class="phone"><img src="https://picsum.photos/id/1036/300/600" alt="Qishki manzara"></div>`,
      code: `.phone { position: relative; width: 180px; height: 360px; margin: 10px auto; padding: 12px;
  background: #212529; border-radius: 32px; box-shadow: 0 20px 40px rgba(0,0,0,.35); }
.phone::before { content: ''; position: absolute; top: 18px; left: 50%; transform: translateX(-50%);
  width: 60px; height: 14px; background: #212529; border-radius: 10px; z-index: 1; }
.phone img { width: 100%; height: 100%; object-fit: cover; border-radius: 22px; }` }
  ],
  classwork: {
    t: "Phone in webpage",
    d: "Ilova reklamasi sahifasi: chapda matn, o'ngda telefon maketi.",
    steps: ["Telefon maketi", "Ekranda ilova rasmi (object-fit: cover)", "Chapda sarlavha va App Store/Play tugmalari", "Responsive"]
  },
  homework: "Telefon ichida kichik 'ilova' interfeysini HTML/CSS bilan chizing.",
  quiz: [
    ["Rasmni qirqib to'ldirish:", ["object-fit: cover", "object-fit: contain", "fit: cut", "background: fill"], 0],
    ["Markazlash trigi:", ["left: 50%; transform: translateX(-50%)", "center: all", "margin: 50%", "left: center"], 0],
    ["Telefon burchaklari:", ["border-radius", "corner", "round-edge", "radius-phone"], 0]
  ],
  ai: { t: "Ilova g'oyasi", p: "Maktab o'quvchilari uchun foydali mobil ilova g'oyasini o'ylab top: nomi, 3 ta asosiy funksiyasi va rang palitrasi." }
});

L({
  n: 54, m: 6, title: "Creative link effects va :not()",
  topics: ["Havola effektlari", ":not(:last-child)", "id.egov.uz tahlili"],
  goals: ["Turli havola effektlarini yasaydi", ":not() selektori bilan oxirgi elementdan tashqari hammasiga uslub beradi"],
  concepts: [
    { t: ":not(:last-child)", d: "Oxirgisidan boshqa hammasiga chiziq qo'yish – ro'yxat ajratgichlari uchun qulay.", lang: "css", run: true,
      html: `<ul class="l"><li>Pasport</li><li>Soliqlar</li><li>Ta'lim</li><li>Sog'liq</li></ul>`,
      code: `.l { list-style: none; padding: 0; max-width: 260px; font-family: sans-serif; }
.l li { padding: 12px; }
.l li:not(:last-child) { border-bottom: 1px solid #dee2e6; }` },
    { t: "Effektlar to'plami", d: "tympanus.net CreativeLinkEffects sahifasidagi effektlarni ko'rib, 3 tasini takrorlang: chiziq, qavslar, fon to'ldirish." }
  ],
  classwork: {
    t: "id.egov.uz sahifasi",
    d: "Davlat xizmatlari portali kirish sahifasining soddalashtirilgan nusxasi.",
    steps: ["Header va logo", "Kirish usullari kartalari", "Ro'yxatlarda :not(:last-child)", "Havolalarga effekt"]
  },
  homework: "id.egov.uz'ning yana 1 sahifasini qiling va ular havola bilan bog'lansin.",
  quiz: [
    ["Oxirgisidan tashqari:", [":not(:last-child)", ":except(last)", ":last-not", ":first-child"], 0],
    ["Birinchi element:", [":first-child", ":one", ":start", ":top"], 0],
    ["Juft elementlar:", [":nth-child(even)", ":even", ":two", ":nth(2)"], 0]
  ],
  ai: { t: "Selektorlar", p: "CSS'dagi :first-child, :last-child, :nth-child(odd) va :not() selektorlarini misollar bilan tushuntir." },
  links: [["Creative Link Effects", "https://tympanus.net/Development/CreativeLinkEffects/"], ["id.egov.uz", "https://id.egov.uz/oz"]]
});

L({
  n: 55, m: 6, title: "CSS animatsiya: @keyframes",
  topics: ["@keyframes", "animation", "animation-play-state"],
  lab: "animation",
  goals: ["@keyframes bilan animatsiya yaratadi", "animation xususiyatining qismlarini biladi", "Animatsiyani hover'da to'xtatadi"],
  concepts: [
    { t: "animation qismlari", d: "animation: shake 0.5s linear 3 alternate forwards; — nom, davomiylik, tezlik egri chizig'i, soni, yo'nalish, oxirgi holat.", lab: "animation" },
    { t: "Sakrovchi to'p", d: "from/to yoki foizlar bilan.", lang: "css", run: true,
      html: `<div class="ball"></div>`,
      code: `.ball { width: 60px; height: 60px; border-radius: 50%; background: #fa5252; margin: 20px auto;
  animation: jump 0.6s ease-in-out infinite alternate; }
.ball:hover { animation-play-state: paused; }
@keyframes jump {
  from { transform: translateY(0); }
  to   { transform: translateY(120px); background: #fab005; }
}` }
  ],
  classwork: {
    t: "Animations",
    d: "5 xil animatsiya: aylanish, pulsatsiya, silkinish, rang almashish, paydo bo'lish.",
    steps: ["rotate 360° cheksiz", "scale pulsatsiya", "shake – 3 marta", "opacity 0 → 1 fade-in", "hover'da pause"]
  },
  homework: "Animations: yuklanish (loader) animatsiyasi va sakrovchi matn.",
  quiz: [
    ["Cheksiz takrorlash:", ["infinite", "forever", "loop", "always"], 0],
    ["Borib-qaytish:", ["alternate", "reverse-back", "return", "yoyo"], 0],
    ["Animatsiyani to'xtatish:", ["animation-play-state: paused", "animation: stop", "pause: yes", "animation-off"], 0]
  ],
  ai: { t: "Animatsiya g'oyasi", p: "Sayt yuklanayotganda ko'rsatiladigan 3 xil oddiy CSS loader animatsiyasi kodini yoz va har birini izohla." }
});

L({
  n: 56, m: 6, title: "AOS kutubxonasi va animatsion to'p",
  topics: ["AOS", "Kutubxona ulash", "Scroll animatsiya"],
  goals: ["Tashqi kutubxonani CDN orqali ulaydi", "Scroll qilganda paydo bo'ladigan animatsiyalar qo'shadi"],
  concepts: [
    { t: "AOS ulash", d: "AOS (Animate On Scroll) – element ekranga kirganda animatsiya qiladi.", lang: "html",
      code: `<link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css">
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

<div data-aos="fade-up">Pastdan chiqaman</div>
<div data-aos="zoom-in" data-aos-delay="300">Kattalashaman</div>

<script>AOS.init();</script>` }
  ],
  classwork: {
    t: "AOS sahifasi",
    d: "Namuna: savitarn1.github.io/AOS. O'z portfolioingizga AOS qo'shing.",
    steps: ["CDN ulash", "Har bo'limga data-aos", "delay va duration bilan tajriba", "Animatsion to'p (keyframes) qo'shing"]
  },
  homework: "AOS library bilan 1 ta to'liq sahifa.",
  quiz: [
    ["AOS nima qiladi?", ["Scroll'da animatsiya", "Rang tanlaydi", "Forma yuboradi", "Rasm siqadi"], 0],
    ["AOS ishga tushirish:", ["AOS.init()", "AOS.start()", "run(AOS)", "aos()"], 0],
    ["Kechikish:", ["data-aos-delay", "data-wait", "aos-time", "delay-aos"], 0]
  ],
  ai: { t: "Kutubxona tanlash", p: "Veb sahifada animatsiya uchun mashhur 3 ta kutubxonani solishtir: AOS, Animate.css, GSAP. Boshlovchi uchun qaysi biri oson?" },
  links: [["AOS", "https://michalsnik.github.io/aos/"], ["Namuna", "https://savitarn1.github.io/AOS/"]]
});

L({
  n: 57, m: 6, title: "Chiroyli checkbox: :checked va visually-hidden",
  topics: [":checked", "~ selektor", "visually-hidden", "Custom checkbox"],
  goals: ["Standart checkbox'ni yashirib, o'z dizaynini yasaydi", "visually-hidden klassi ahamiyatini (accessibility) tushunadi"],
  concepts: [
    { t: "Custom switch", d: "input yashiriladi (lekin ekran o'quvchilar uchun mavjud), yonidagi span esa chiroyli 'tumbler'.", lang: "css", run: true,
      html: `<label class="sw">\n  <input class="visually-hidden" type="checkbox">\n  <span class="fake"></span> Tungi rejim\n</label>`,
      code: `.visually-hidden { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; border: 0;
  white-space: nowrap; clip-path: inset(100%); clip: rect(0 0 0 0); overflow: hidden; }
.sw { font: 18px sans-serif; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; }
.fake { width: 52px; height: 28px; border-radius: 20px; background: #ced4da; position: relative; transition: .3s; }
.fake::after { content: ''; position: absolute; top: 3px; left: 3px; width: 22px; height: 22px; border-radius: 50%; background: #fff; transition: .3s; }
input:checked ~ .fake { background: #40c057; }
input:checked ~ .fake::after { left: 27px; }` }
  ],
  classwork: {
    t: "Checked inputs",
    d: "Tumbler, yulduzcha reyting va rangli radio tugmalar.",
    steps: [".visually-hidden klassi", "Tumbler (switch)", "Radio – rangli doiralar", "focus holati ham ko'rinsin"]
  },
  homework: "Checked inputs: sozlamalar sahifasi (5 ta tumbler).",
  quiz: [
    ["Belgilangan checkbox:", [":checked", ":active", ":on", ":selected"], 0],
    ["~ selektori:", ["Keyingi barcha qo'shnilar", "Ota-ona", "Birinchi bola", "Hammasi"], 0],
    ["display: none o'rniga visually-hidden nega?", ["Ekran o'quvchilar ko'ra olishi uchun", "Tezroq ishlaydi", "Rangli bo'ladi", "Farqi yo'q"], 0]
  ],
  ai: { t: "Accessibility", p: "Veb saytni ko'zi ojiz va zaif ko'radigan odamlar uchun qulay qilishning 7 ta oddiy qoidasini ayt." }
});

L({
  n: 58, m: 6, title: "Visa karta va murakkab kartalar",
  topics: ["Gradient + position", "Takrorlash", "Karta dizayni"],
  goals: ["Bank kartasi dizaynini CSS bilan yasaydi", "O'tilgan position, gradient, shadow'ni birlashtiradi"],
  concepts: [
    { t: "Bank kartasi", d: "85.6 × 54 mm nisbatdagi karta: gradient fon, chip, raqam, ism.", lang: "css", run: true,
      html: `<div class="visa">\n  <div class="chip"></div>\n  <p class="num">4000 1234 5678 9010</p>\n  <p class="name">ALI VALIYEV</p>\n  <b class="logo">VISA</b>\n</div>`,
      code: `.visa { position: relative; width: 320px; aspect-ratio: 85.6 / 54; max-width: 100%; margin: 10px auto; padding: 22px; box-sizing: border-box;
  border-radius: 16px; color: #fff; font-family: monospace;
  background: linear-gradient(135deg, #1a1f71, #3b5bdb 60%, #74c0fc); box-shadow: 0 14px 30px rgba(26,31,113,.4); }
.chip { width: 44px; height: 32px; border-radius: 6px; background: linear-gradient(135deg, #ffe066, #f59f00); }
.num { font-size: 20px; letter-spacing: 2px; margin: 18px 0 8px; }
.name { margin: 0; opacity: .8; }
.logo { position: absolute; right: 20px; bottom: 16px; font: italic 900 26px sans-serif; }` }
  ],
  classwork: {
    t: "Visa card",
    d: "Karta old va orqa tomoni; hover'da aylanadi (rotateY).",
    steps: ["Old tomon", "Orqa tomon (magnit chiziq, CVV)", "Ota-ona: perspective", "Hover: transform: rotateY(180deg)"]
  },
  homework: "Positivus (Figma) sahifasining birinchi 2 bo'limi.",
  quiz: [
    ["Nisbatni saqlash:", ["aspect-ratio", "ratio", "proportion", "keep-size"], 0],
    ["Harflar orasidagi masofa:", ["letter-spacing", "word-gap", "font-gap", "spacing"], 0],
    ["3D aylanish (Y o'qi):", ["rotateY", "rotate3", "spinY", "turnY"], 0]
  ],
  ai: { t: "Xavfsizlik", p: "Nega haqiqiy bank karta raqamini hech qachon internetga, AI'ga yoki darsdagi loyihaga yozish mumkin emas? Bolalarga tushuntir." }
});

L({
  n: 59, m: 6, title: "Sass (SCSS): o'zgaruvchi va nesting",
  topics: ["Sass", "Live Sass Compiler", "$o'zgaruvchi", "nesting", "&"],
  goals: ["Sass nima uchun kerakligini tushunadi", "Live Sass Compiler bilan .scss faylni ulaydi", "O'zgaruvchi va ichma-ich yozishdan foydalanadi"],
  concepts: [
    { t: "Sass – kuchaytirilgan CSS", d: "SCSS faylga yozamiz → kengaytma avtomatik CSS'ga aylantiradi. HTML'ga esa .css fayl ulanadi. Faqat .scss faylni tahrirlaymiz!" },
    { t: "O'zgaruvchi va nesting", d: "$rang bir marta yoziladi, hamma joyda ishlatiladi. & – ota-ona selektori.", lang: "scss",
      code: `$rang: lime;

.container {
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  box-shadow: 0 0 20px $rang;
  padding: 15px;

  &__img {
    max-width: 300px;
    border: 5px solid $rang;
    transition: 0.3s all linear;

    &:hover {
      transform: rotate(-30deg);
    }
  }

  &__title {
    width: 48%;
  }
}` }
  ],
  classwork: {
    t: "CSS'ni SCSS'ga o'tkazish",
    d: "Eski ishingizdagi CSS'ni SCSS ko'rinishiga o'tkazing.",
    steps: ["Live Sass Compiler o'rnating", "style.scss yarating, Watch Sass bosing", "Ranglarni $o'zgaruvchilarga", "Nesting va & ishlating"]
  },
  homework: "Barber (Figma) sahifasini SCSS bilan boshlang.",
  quiz: [
    ["Sass o'zgaruvchisi:", ["$rang", "--rang", "@rang", "#rang"], 0],
    ["& belgisi nimani anglatadi?", ["Ota-ona selektorini", "Va", "Yangi fayl", "Izoh"], 0],
    ["HTML'ga qaysi fayl ulanadi?", [".css", ".scss", ".sass", ".js"], 0]
  ],
  ai: { t: "Konvertatsiya", p: "Quyidagi CSS kodini SCSS'ga o'tkazib ber (o'zgaruvchi va nesting bilan), keyin nima o'zgarganini tushuntir:\n[CSS kod]" },
  links: [["Sass", "https://sass-lang.com"]]
});

L({
  n: 60, m: 6, title: "Sass: mixin, include va import",
  topics: ["@mixin", "@include", "@import / partials", "Nazorat"],
  goals: ["Takrorlanuvchi kodni mixin'ga chiqaradi", "SCSS'ni bir nechta faylga bo'ladi"],
  concepts: [
    { t: "Mixin", d: "Qayta ishlatiladigan kod bo'lagi – parametr bilan.", lang: "scss",
      code: `@mixin flex($x) {
  display: flex;
  flex-wrap: wrap;
  align-items: $x;
  justify-content: space-between;
}

.container {
  @include flex(center);
  column-gap: 15px;
}` },
    { t: "Fayllarga bo'lish", d: "_footer.scss – tag chiziq bilan boshlangan fayldan alohida CSS yaratilmaydi. Asosiy faylga @import 'footer' bilan ulanadi.", lang: "scss",
      code: `// style.scss
@import 'variables';
@import 'header';
@import 'footer';` }
  ],
  classwork: {
    t: "Barber with SCSS",
    d: "Barber sahifasini _variables, _header, _footer fayllariga bo'lib yozing.",
    steps: ["_variables.scss – ranglar va shriftlar", "@mixin flex va @mixin button", "Bo'limlarni partial fayllarga", "Natijani tekshiring"]
  },
  homework: "Barber sahifasini tugating (6-modul nazorati).",
  quiz: [
    ["Mixin'ni ishlatish:", ["@include", "@use-mixin", "@call", "@run"], 0],
    ["Alohida CSS yaratilmaydigan fayl:", ["_footer.scss", "footer.scss", "footer.css", "footer_.scss"], 0],
    ["Mixin nima uchun?", ["Takrorlanuvchi kodni qisqartirish", "Rasm qo'shish", "Animatsiya", "Git"], 0]
  ],
  ai: { t: "Mixin yaratish", p: "Tugmalar uchun $rang parametrli SCSS mixin yozib ber: fon, hover'da qorayish va dumaloq burchak." },
  note: "Nazorat darsi (6-modul). Keyingi darsdan JavaScript boshlanadi – bolalarni ruhlantiring!"
});
