# PS Termiz Web Course

Bolalar uchun **Web dasturlash asoslari va AI vositalardan unumli foydalanish** kursi: 80 ta amaliy dars va o'qituvchi dars o'tadigan interaktiv platforma.

- **Hajmi:** 80 dars · 8 modul · haftasiga 2 dars · har bir dars 45 daqiqa (~40 hafta, bitta o'quv yili)
- **Asos:** "Work Plan for FrontEnd Course" ish rejasi (1–45-darslar mavzulari), JavaScript asoslari va AI bilan ishlash modullari qo'shilgan
- **Texnologiya:** oddiy HTML/CSS/JavaScript, hech narsa o'rnatish shart emas

## Ishga tushirish

1. `index.html` faylini brauzerda oching. Yoki
2. Internetsiz ishlaydigan bitta faylli versiya: `dist/ps-termiz-web-course.html`. Uni flesh-diskda sinf kompyuteriga olib borsa bo'ladi. Yoki
3. GitHub Pages: repo → **Settings → Pages → Branch: main** → `https://<login>.github.io/<repo>/`

> Shriftlar va kod ranglash (Prism) CDN'dan yuklanadi. Internet bo'lmasa ham platforma ishlaydi, faqat shriftlar oddiyroq ko'rinadi.

## Platforma imkoniyatlari

| Bo'lim | Nima qiladi |
|---|---|
| **Darslar** | 8 modul, 80 dars, qidiruv, "o'tildi" belgisi, jadval bo'yicha har darsning sanasi |
| **Dars sahifasi** | Maqsadlar, 45 daqiqalik reja, jonli kod namunalari (kod + natija + konsol), laboratoriya, amaliy ish, AI yordamchi prompti, uy vazifasi, mini test, havolalar, o'qituvchi uchun eslatma |
| **Taqdimot rejimi** | Doska ko'rinishidagi slaydlar: to'liq ekran (F), dars taymeri va bosqichlar (T), ekranga qalamda chizish (P), test javobini ochish (R), ← → bilan o'tish |
| **Laboratoriya** | 13 ta vizual trenajyor: Flexbox, Box model, Gradient, Soya, Transform, Position, Animatsiya, Responsive ekran, "Sayt – bu uy", Tezkor tugmalar, Tez yozish, Prompt konstruktori, Git simulyatori |
| **Playground** | HTML/CSS/JS muharriri, jonli natija, konsol, 375/768 px ekran rejimi, `!`+Tab va `lorem`+Tab, tayyor namunalar |
| **O'qituvchi paneli** | 45 daqiqalik dars taymeri (bosqich signali bilan), tasodifiy o'quvchi tanlash, guruhlarga bo'lish, 80 darslik jadval (dars kunlari va bayramlar bilan), progress |

Progress, jadval, sinf ro'yxati va playground kodi faqat shu brauzerda (localStorage) saqlanadi.

## Kurs tuzilmasi

| Modul | Darslar | Mavzu |
|---|---|---|
| 1 | 1–4 | Kompyuter, Internet va AI: sayt nima, hotkeys, tez yozish, AI bilan xavfsiz tanishuv |
| 2 | 5–16 | HTML asoslari: teglar, havola, rasm, ro'yxat, semantika, media, portfolio loyihasi |
| 3 | 17–30 | CSS asoslari: ulash, matn, box model, gradient, soya, hover, fon, transform, box-sizing |
| 4 | 31–40 | Flexbox va formalar: flex, kartalar, Font Awesome, form, Figma |
| 5 | 41–48 | Responsive va Git: @media, real sayt klonlari, Git, GitHub Pages |
| 6 | 49–60 | Position, ::before/::after, animatsiya, AOS, custom checkbox, Sass |
| 7 | 61–72 | JavaScript: o'zgaruvchi, shart, funksiya, DOM, hodisalar, massiv, o'yin, To-do |
| 8 | 73–80 | AI bilan kod yozish va debugging, AI dizayn va etika, yakuniy loyiha va taqdimot |

Har 45 daqiqalik dars quyidagicha tuzilgan (nazorat darslarida alohida reja bor):

| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: taqdimot va laboratoriya |
| 15–35 | Amaliy ish |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

## Chop etiladigan materiallar

`materials/` papkasida har bir modul uchun Markdown qo'llanma bor (`modul-01.md` … `modul-08.md`) va hammasi bitta faylda: `barcha-darslar.md`. Ularda reja, kodlar, amaliy ish, AI prompt, uy vazifasi va test javoblari bor.

## Darslarni tahrirlash

Barcha dars mazmuni `assets/js/data/` papkasida:

```
modules.js       – modullar ro'yxati
lessons-01.js    – 1–20-darslar
lessons-02.js    – 21–40-darslar
lessons-03.js    – 41–60-darslar
lessons-04.js    – 61–80-darslar
```

Har bir dars `L({...})` ko'rinishida yozilgan:

```js
L({
  n: 12, m: 2, title: "Dars nomi",
  topics: ["mavzu 1", "mavzu 2"],
  lab: "flexbox",                         // ixtiyoriy: laboratoriya
  goals: ["..."],
  concepts: [
    { t: "Sarlavha", d: "Tushuntirish", lang: "css", run: true, html: "<div>...</div>", code: ".box { ... }" },
    { t: "Vizual", d: "...", lab: "boxmodel" }
  ],
  classwork: { t: "Amaliy ish", d: "...", steps: ["..."], starter: { html: "", css: "", js: "" } },
  homework: "...",
  quiz: [["Savol?", ["A", "B", "C", "D"], 0]],  // 0 – to'g'ri javob indeksi (ekranda aralashtiriladi)
  ai: { t: "Mavzu", p: "Namuna prompt" },
  plan: [["0–5", "..."]],                 // ixtiyoriy: o'z 45 daqiqalik rejasi
  links: [["Nomi", "https://..."]],
  note: "O'qituvchi uchun eslatma"
});
```

O'zgartirishdan keyin qayta yig'ish:

```bash
node scripts/export-materials.js   # materials/*.md
node scripts/build-single.js       # dist/ps-termiz-web-course.html
```

## AI bilan ishlash qoidalari (kurs bo'ylab)

1. Shaxsiy ma'lumot (ism-familiya, manzil, telefon, parol) AI'ga yozilmaydi.
2. AI javobi doim tekshiriladi (MDN, W3Schools, o'qituvchi).
3. Tushunilmagan kod ishlatilmaydi: "shu qatorni tushuntir" deb so'raladi.
4. Uy vazifasi AI'ga to'liq yozdirilmaydi. AI tushuntirish va maslahat uchun ishlatiladi.
5. AI yaratgan rasm va matn shunday deb belgilanadi.
6. Bolalar yoshiga mos xizmatlardan foydalaniladi, ro'yxatdan o'tish ota-ona roziligi bilan.
