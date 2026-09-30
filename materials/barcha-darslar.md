# PS Termiz Web Course: o'qituvchi qo'llanmasi

Bolalar uchun Web dasturlash asoslari va AI vositalar. 80 ta dars · haftasiga 2 dars · har biri 45 daqiqa.

> Bu fayl `node scripts/export-materials.js` orqali avtomatik yaratilgan. Darslarni o'zgartirish uchun `assets/js/data/` papkasidagi fayllarni tahrirlang.

## Mundarija

### 1-modul. Kompyuter, Internet va AI (1–4)
Veb sayt qanday ishlaydi, kompyuter savodxonligi, tez yozish va sun'iy intellekt bilan xavfsiz tanishuv.

- 1. Veb sayt nima? HTML, CSS va JavaScript
- 2. Kompyuter savodxonligi va tezkor tugmalar
- 3. Tez yozish va dasturlar bilan tanishuv
- 4. Sun'iy intellekt bilan tanishuv

### 2-modul. HTML asoslari (5–16)
Sahifa skeleti: teglar, matn, havola, rasm, ro'yxat, semantik teglar va media.

- 5. VS Code va birinchi HTML fayl
- 6. Sarlavhalar, tugma va toza kod
- 7. Paragraf, lorem va span. Sayt tahlili
- 8. Havolalar: a tegi
- 9. Rasmlar: img tegi
- 10. HTML skeleti: DOCTYPE, meta va viewport
- 11. Ro'yxatlar: ul, ol, li
- 12. Block va inline elementlar, div va DevTools
- 13. Semantik teglar: header, nav, main, footer
- 14. Havolaning imkoniyatlari va favicon
- 15. Audio, video va iframe
- 16. HTML loyiha: Portfolio (faqat HTML)

### 3-modul. CSS asoslari (17–30)
Rang, shrift, box model, gradient, soya, hover, transition va transform.

- 17. CSS bilan tanishuv: ulash usullari va class
- 18. Matn bilan ishlash
- 19. Box model: margin, padding, border
- 20. Takrorlash va narx kartasi (99/MONTH)
- 21. Tugmalar dizayni: Outline Buttons
- 22. Gradientlar
- 23. Soyalar: box-shadow va text-shadow. Oy
- 24. Bayroqlar amaliyoti
- 25. Hover, ikki class va transition
- 26. Fon rasmi: background-image: url()
- 27. Transform: rotate, scale, translate, skew
- 28. Box-sizing va foydali qoidalar
- 29. Inline-block va rasm xatolari
- 30. CSS nazorat: Restoran menyusi

### 4-modul. Flexbox va formalar (31–40)
Elementlarni qatorga terish, kartalar, menyu, ikonlar va formalar bilan ishlash.

- 31. display: flex bilan tanishuv
- 32. align-items, flex-direction, flex-wrap, gap
- 33. Kvadrat ichida doira va Customer Cards
- 34. Company description sahifasi
- 35. Restoran menyusi flex bilan
- 36. Font Awesome ikonlari
- 37. Formalar: form, label, input, button
- 38. Formalar 2: select, fieldset, radio va dizayn
- 39. Figma bilan tanishuv
- 40. Mini loyiha: Landing sahifa (Figma'dan)

### 5-modul. Responsive va Git (41–48)
Telefon va planshetga moslashuvchi sahifalar, Figma'dan kod, Git va GitHub Pages.

- 41. Responsive dizayn: @media
- 42. Responsive amaliyot: galereya va gap
- 43. Responsive sahifa: Truck
- 44. Canvix va Organic footer
- 45. Kun.uz sahifasini responsive yasash
- 46. Git va GitHub
- 47. GitHub Pages: saytni internetga chiqarish
- 48. Figma'dan loyiha: Restaurant Website

### 6-modul. Position, animatsiya va Sass (49–60)
position, z-index, ::before/::after, @keyframes, AOS va Sass.

- 49. position: relative va absolute, z-index
- 50. position: fixed va sticky
- 51. overflow, flex-grow va flex-shrink
- 52. ::before va ::after
- 53. Veb sahifada telefon: murakkab joylashuv
- 54. Creative link effects va :not()
- 55. CSS animatsiya: @keyframes
- 56. AOS kutubxonasi va animatsion to'p
- 57. Chiroyli checkbox: :checked va visually-hidden
- 58. Visa karta va murakkab kartalar
- 59. Sass (SCSS): o'zgaruvchi va nesting
- 60. Sass: mixin, include va import

### 7-modul. JavaScript asoslari (61–72)
O'zgaruvchi, shart, funksiya, DOM, hodisalar va kichik o'yinlar.

- 61. JavaScript bilan tanishuv: console.log
- 62. O'zgaruvchilar va ma'lumot turlari
- 63. Operatorlar va shablon satrlar
- 64. Shartlar: if, else if, else
- 65. Funksiyalar
- 66. DOM: sahifani JavaScript bilan o'zgartirish
- 67. Hodisalar: click va addEventListener
- 68. classList: tungi rejim tugmasi
- 69. Massivlar va sikllar
- 70. Input bilan ishlash: kalkulyator
- 71. Mini o'yin: Sonni top!
- 72. To-do ro'yxat va localStorage

### 8-modul. AI bilan loyiha (73–80)
AI yordamida kod yozish, xatolarni topish, dizayn va yakuniy loyiha taqdimoti.

- 73. AI bilan kod yozish: aniq prompt
- 74. AI bilan xatolarni topish (debugging)
- 75. AI bilan dizayn: rang, rasm va matn
- 76. AI javobini tekshirish va xavfsizlik
- 77. Yakuniy loyiha: g'oya va reja
- 78. Yakuniy loyiha: HTML va CSS
- 79. Yakuniy loyiha: JavaScript va internetga chiqarish
- 80. Taqdimot va bitiruv


# 1-modul. Kompyuter, Internet va AI

Veb sayt qanday ishlaydi, kompyuter savodxonligi, tez yozish va sun'iy intellekt bilan xavfsiz tanishuv.

## 1-dars. Veb sayt nima? HTML, CSS va JavaScript

**Modul:** 1. Kompyuter, Internet va AI · **Mavzular:** Veb sayt, Brauzer, HTML/CSS/JS, Portfolio

### Maqsadlar
- Veb sayt, brauzer va server nima ekanini tushunadi
- HTML, CSS va JavaScript vazifasini uy misolida farqlaydi
- kun.uz, prezident.uz va portfolio saytlarini kuzatib, qismlarini ayta oladi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Veb sayt, Brauzer, HTML/CSS/JS |
| 15–35 | Amaliy ish: Sayt detektivi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Sayt – bu uy.** HTML – uyning g'isht va devorlari (skelet). CSS – bo'yoq, gilam va bezak (ko'rinish). JavaScript – elektr, chiroq va eshik qo'ng'irog'i (harakat). Uchalasi birga ishlaganda chiroyli va jonli sayt paydo bo'ladi.

> 🔬 Platformadagi laboratoriya: *house*

**Faqat HTML.** Hech qanday bezaksiz sahifa shunday ko'rinadi. Bu – skelet.

```html
<h1>Salom, men Aziz!</h1>
<p>Men Termizda yashayman va dasturchi bo'lishni xohlayman.</p>
<button>Bos meni</button>
```

**HTML + CSS.** Endi xuddi shu sahifaga CSS bilan rang va shakl beramiz.

```html
<h1>Salom, men Aziz!</h1>
<p>Men Termizda yashayman va dasturchi bo'lishni xohlayman.</p>
<button>Bos meni</button>
```

```css
body { font-family: sans-serif; background: #e8f6f1; text-align: center; }
h1 { color: #0f6b57; }
button { background: #ff7a45; color: white; border: 0; padding: 12px 24px; border-radius: 10px; font-size: 18px; }
```

**HTML + CSS + JavaScript.** JavaScript tugmani 'jonlantiradi' – bosganda matn o'zgaradi.

```html
<h1 id="t">Salom, men Aziz!</h1>
<button id="b">Bos meni</button>
```

```javascript
document.querySelector('#b').onclick = function () {
  document.querySelector('#t').textContent = 'Siz tugmani bosdingiz! 🎉';
};
```

### Amaliy ish: Sayt detektivi
Guruhlarga bo'linib, 3 ta saytni ko'zdan kechiring va jadval to'ldiring.

1. kun.uz saytini oching: sarlavha, menyu, rasm, tugmalarni toping
2. prezident.uz saytida qaysi ranglar ko'p ishlatilganini yozing
3. Biror portfolio saytni ko'ring: u kim haqida, qanday bo'limlari bor?
4. Har bir saytda nima HTML, nima CSS, nima JavaScript ekanini taxmin qiling

### AI yordamchi: AI'dan tushuntirishni so'rash
> Men 11 yoshdaman. HTML, CSS va JavaScript nima ekanini uy qurish misolida 5 ta qisqa gap bilan tushuntirib ber.

### Uy vazifasi
O'zingiz yoqtirgan 2 ta saytni tanlang va daftarga chizib keling: qayerda sarlavha, menyu, rasm va tugma joylashgan.

### Mini test
1. Saytning skeletini nima tashkil qiladi?
   - CSS
   - **HTML** ✓
   - JavaScript
   - Brauzer
2. Saytga rang va bezak nima orqali beriladi?
   - HTML
   - Python
   - **CSS** ✓
   - Word
3. Tugma bosilganda nimadir sodir bo'lishi uchun nima kerak?
   - **JavaScript** ✓
   - CSS
   - Rasm
   - Papka

### Havolalar
- [kun.uz](https://kun.uz)
- [prezident.uz](https://prezident.uz)

### O'qituvchi uchun eslatma
Birinchi dars – qiziqish uyg'otish. Kodni ko'rsating, lekin yozdirmang. Oxirida 'Siz ham shunday sayt qura olasiz' degan motivatsiya bering.

---

## 2-dars. Kompyuter savodxonligi va tezkor tugmalar

**Modul:** 1. Kompyuter, Internet va AI · **Mavzular:** Papka va fayl, Yuklab olish, HotKeys

### Maqsadlar
- Papka yaratadi, nomini o'zgartiradi va fayllarni tartiblaydi
- Internetdan rasm va fayl yuklab olib, kerakli papkaga saqlaydi
- Asosiy tezkor tugmalardan foydalanadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Papka va fayl, Yuklab olish, HotKeys |
| 15–35 | Amaliy ish: Tezkor tugmalar musobaqasi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Papka va fayl.** Papka – javon, fayl – javondagi kitob. Har bir loyiha uchun alohida papka oching: Ish stoli → 'WebKurs' → 'dars-01'. Fayl nomida bo'sh joy va o'zbekcha harflardan qoching: my-page.html, rasm-1.jpg.

**Eng kerakli tezkor tugmalar.** Ctrl+C – nusxa olish, Ctrl+V – qo'yish, Ctrl+X – kesish, Ctrl+Z – ortga qaytarish, Ctrl+A – hammasini belgilash, Ctrl+S – saqlash, Win+D – ish stoli, Win+E – Explorer, Alt+Tab – oynalar orasida o'tish, PrtScr / Win+Shift+S – ekran rasmi.

> 🔬 Platformadagi laboratoriya: *hotkeys*

**Internetdan yuklab olish.** Rasm ustida o'ng tugma → 'Rasmni boshqacha saqlash'. Faqat ishonchli saytlardan yuklang. .exe fayllarni o'qituvchi ruxsatisiz ochmang!

### Amaliy ish: Tezkor tugmalar musobaqasi
Laboratoriyadagi trenajyor orqali tugmalarni mashq qiling, keyin amaliy topshiriqni bajaring.

1. Ish stolida 'WebKurs' papkasini yarating
2. Ichida 'rasmlar' va 'dars-02' papkalarini oching
3. pexels.com saytidan 3 ta rasm yuklab, 'rasmlar' papkasiga saqlang
4. Win+Shift+S bilan ekran rasmini olib, Telegram guruhga yuboring

### AI yordamchi: AI bilan qidirish
> Windows'da ekran rasmini olishning 3 xil usulini qadam-baqadam, bolalar tushunadigan tilda yozib ber.

### Uy vazifasi
Uydagi kompyuterda (yoki telefonda) 10 ta tezkor tugmani 5 martadan mashq qiling. Ertaga kim tezroq ekanini tekshiramiz!

### Mini test
1. Nusxa olish uchun qaysi tugmalar?
   - Ctrl+V
   - **Ctrl+C** ✓
   - Ctrl+Z
   - Alt+Tab
2. Oynalar orasida tez o'tish uchun:
   - **Alt+Tab** ✓
   - Win+D
   - Ctrl+A
   - Ctrl+S
3. Fayl nomi uchun eng yaxshi variant:
   - Mening sahifam.html
   - **my-page.html** ✓
   - SAHIFA!!.html
   - sahifa 1 yangi.html

### Havolalar
- [Pexels – bepul rasmlar](https://www.pexels.com)

### O'qituvchi uchun eslatma
Frontend Case videosini ko'rsatish mumkin. Tezkor tugmalar trenajyorini proyektorda musobaqa sifatida o'tkazing.

---

## 3-dars. Tez yozish va dasturlar bilan tanishuv

**Modul:** 1. Kompyuter, Internet va AI · **Mavzular:** Tez yozish, zty.pe, monkeytype, VS Code, Chrome

### Maqsadlar
- 10 barmoq bilan yozish qoidasini biladi
- Tez yozish trenajyorlarida o'z natijasini o'lchaydi
- VS Code, Chrome, WinRAR, Telegram dasturlarining vazifasini biladi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Tez yozish, zty.pe, monkeytype |
| 15–35 | Amaliy ish: Tezlik rekordi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Nega tez yozish kerak?.** Dasturchi kunda minglab belgilar yozadi. Klaviaturaga qaramasdan yozsangiz, fikringizga e'tibor berasiz. Ko'rsatkich barmoqlar F va J tugmalaridagi bo'rtiqlarda turadi.

> 🔬 Platformadagi laboratoriya: *typing*

**Dasturchi asboblari.** VS Code – kod yozish uchun muharrir. Chrome – saytni ko'rish va tekshirish (DevTools). WinRAR – arxivlarni ochish. Telegram – uy vazifalarini yuborish. Media Player – video darslarni ko'rish.

**VS Code kengaytmalari.** Live Server (Go Live) – saytni avtomatik yangilaydi. Prettier – kodni chiroyli tekislaydi. Material Icon Theme – fayllar uchun ikonlar.

### Amaliy ish: Tezlik rekordi
Laboratoriyadagi trenajyorda, keyin monkeytype.com saytida 3 marta yozib, eng yaxshi natijani daftarga yozing.

1. F va J tugmalarini toping
2. monkeytype.com – 30 soniya rejimi
3. zty.pe o'yinida 1-2 bosqichni o'ting
4. Natijani (so'z/daqiqa) guruh jadvaliga yozing

### AI yordamchi: Mashq rejasi
> Menga 2 haftalik tez yozish mashqi rejasini tuz. Har kuni 10 daqiqa, hozir 15 so'z/daqiqa yozaman.

### Uy vazifasi
Har kuni 10 daqiqa monkeytype.com yoki zty.pe'da mashq qiling. Keyingi darsda natijani solishtiramiz.

### Mini test
1. Kod yozish uchun qaysi dastur?
   - WinRAR
   - **VS Code** ✓
   - Paint
   - Telegram
2. Ko'rsatkich barmoqlar qaysi tugmalarda turadi?
   - A va L
   - **F va J** ✓
   - Q va P
   - Z va M
3. Saytni avtomatik yangilaydigan kengaytma:
   - **Live Server** ✓
   - Prettier
   - Icons
   - Git

### Havolalar
- [monkeytype](https://monkeytype.com)
- [ZType](https://zty.pe)
- [VS Code](https://code.visualstudio.com)

### O'qituvchi uchun eslatma
Agar kompyuterlarda VS Code o'rnatilmagan bo'lsa, shu darsda o'rnatib chiqing.

---

## 4-dars. Sun'iy intellekt bilan tanishuv

**Modul:** 1. Kompyuter, Internet va AI · **Mavzular:** AI nima, Chatbotlar, Prompt, Xavfsizlik

### Maqsadlar
- Sun'iy intellekt nima ekanini oddiy so'zlar bilan tushuntiradi
- Yaxshi prompt (so'rov) tuzish formulasini biladi: Rol + Vazifa + Shart + Format
- AI bilan ishlashda xavfsizlik va halollik qoidalarini biladi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: AI nima, Chatbotlar, Prompt |
| 15–35 | Amaliy ish: Prompt ustaxonasi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**AI – aqlli yordamchi.** AI (sun'iy intellekt) – ko'p matn va misollardan o'rgangan dastur. U tushuntiradi, kod yozadi, g'oya beradi. Lekin u ham xato qiladi! Shuning uchun AI javobini doim tekshiramiz. Mashhur yordamchilar: ChatGPT, Claude, Gemini, Copilot.

**Yaxshi prompt formulasi.** Yomon: 'sayt qil'. Yaxshi: 'Sen o'qituvchisan (rol). Menga oddiy HTML sahifa yozib ber (vazifa), unda sarlavha, rasm va tugma bo'lsin, faqat HTML ishlat (shart). Har bir qatorga izoh yoz (format).'

> 🔬 Platformadagi laboratoriya: *prompt*

**Xavfsizlik qoidalari.** 1) Ism-familiya, manzil, telefon, parolni AI'ga yozmang. 2) AI javobini tekshiring. 3) Uy vazifasini AI'ga to'liq yozdirmang – undan tushuntirish so'rang. 4) AI yaratgan rasm va matnni 'men qildim' demang.

### Amaliy ish: Prompt ustaxonasi
Laboratoriyadagi Prompt konstruktori bilan 3 ta prompt tuzing va o'qituvchi bilan birga AI'da sinab ko'ring.

1. Yomon promptni yozing va natijani ko'ring
2. Rol va shart qo'shing
3. Format qo'shing (jadval, ro'yxat)
4. Qaysi javob yaxshiroq ekanini muhokama qiling

### AI yordamchi: Birinchi suhbat
> Sen mehribon dasturlash ustozisan. Men 12 yoshdaman va veb dasturlashni o'rganmoqchiman. Menga 3 oylik o'qish rejasini oddiy tilda yozib ber.

### Uy vazifasi
O'zingizga qiziq mavzuda (futbol, kosmos, o'yinlar) 3 ta yaxshi prompt yozib keling. AI'dan olingan javobning 1 ta xatosini topishga harakat qiling.

### Mini test
1. AI'ga nimani yozish MUMKIN EMAS?
   - Savol
   - **Parolingizni** ✓
   - Kod
   - Mavzu nomini
2. Yaxshi prompt nimalardan iborat?
   - Faqat bitta so'z
   - **Rol, vazifa, shart, format** ✓
   - Faqat smayliklar
   - Uzun hikoya
3. AI javobi doim to'g'rimi?
   - Ha, har doim
   - **Yo'q, tekshirish kerak** ✓
   - Faqat kechasi
   - Faqat ingliz tilida

### O'qituvchi uchun eslatma
Bolalar yoshiga mos xizmatlardan foydalaning, ro'yxatdan o'tish ota-ona roziligi bilan bo'lsin. Namoyishni o'qituvchi hisobidan proyektorda qiling.

---

# 2-modul. HTML asoslari

Sahifa skeleti: teglar, matn, havola, rasm, ro'yxat, semantik teglar va media.

## 5-dars. VS Code va birinchi HTML fayl

**Modul:** 2. HTML asoslari · **Mavzular:** VS Code, index.html, head & body, title, Go Live

### Maqsadlar
- VS Code'da papka ochib, index.html fayl yaratadi
- '!' + Tab (Emmet) orqali HTML shablonini chiqaradi
- head va body farqini, title tegini biladi, Go Live bilan sahifani ochadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: VS Code, index.html, head & body |
| 15–35 | Amaliy ish: Salom, dunyo! |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Teg nima?.** Teg – burchak qavs ichidagi buyruq. Ko'pchilik teglar juft: ochiluvchi <p> va yopiluvchi </p>. Orasiga matn yoziladi.

```html
<h1>Bu sarlavha</h1>
<p>Bu oddiy matn (paragraf)</p>
```

**head va body.** head – sahifa haqidagi yashirin ma'lumot (title, sozlamalar). body – foydalanuvchi ko'radigan hamma narsa. title – brauzer tabida chiqadigan nom.

```html
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Mening birinchi saytim</title>
</head>
<body>
  <h1>Salom, dunyo!</h1>
</body>
</html>
```

**Go Live.** VS Code pastki o'ng burchagidagi 'Go Live' tugmasi saytni brauzerda ochadi. Faylni saqlasangiz (Ctrl+S), sahifa o'zi yangilanadi.

### Amaliy ish: Salom, dunyo!
Birinchi sahifangizni yarating.

1. WebKurs/dars-05 papkasini VS Code'da oching
2. index.html fayl yarating
3. ! yozib Tab bosing
4. title'ga ismingizni yozing
5. body ichiga h1 bilan salom yozing va Go Live bosing

Boshlang'ich kod (HTML):
```html
<h1>Salom, dunyo!</h1>
<p>Mening ismim ...</p>
```

### AI yordamchi: Xatoni tushuntirish
> Men HTML'da </h1> yopuvchi tegni yozishni unutdim. Nima bo'ladi? Oddiy misol bilan tushuntir.

### Uy vazifasi
O'zingiz haqingizda sahifa: title – ismingiz, body'da 1 ta sarlavha va 2 ta gap.

### Mini test
1. Brauzer tabidagi nom qaysi teg bilan yoziladi?
   - <h1>
   - **<title>** ✓
   - <body>
   - <p>
2. Foydalanuvchi ko'radigan qism:
   - head
   - **body** ✓
   - meta
   - DOCTYPE
3. HTML shablonini tez chiqarish:
   - **! + Tab** ✓
   - Ctrl+Z
   - Alt+F4
   - # + Enter

### O'qituvchi uchun eslatma
Kengaytmalar: Live Server o'rnatilganini tekshiring. Fayl kengaytmalari (.html) ko'rinib turishi uchun Explorer sozlamasini yoqing.

---

## 6-dars. Sarlavhalar, tugma va toza kod

**Modul:** 2. HTML asoslari · **Mavzular:** h1–h6, button, Clean Code

### Maqsadlar
- h1–h6 sarlavhalarni to'g'ri ishlatadi
- button tegini qo'shadi
- Kodni chiroyli tekislab (indent) yozadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: h1–h6, button, Clean Code |
| 15–35 | Amaliy ish: Maktab e'lonlar taxtasi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**6 xil sarlavha.** h1 – eng katta va muhim (sahifada bitta), h6 – eng kichik. Sarlavhalar kitob mundarijasiga o'xshaydi.

```html
<h1>Surxondaryo</h1>
<h2>Termiz shahri</h2>
<h3>Diqqatga sazovor joylar</h3>
<h4>Fayoztepa</h4>
<h5>Tarixi</h5>
<h6>Manbalar</h6>
```

**Tugma.** button – bosiladigan tugma. Hozircha u hech narsa qilmaydi, JavaScript o'rganganimizda jonlantiramiz.

```html
<button>Boshlash</button>
<button>Keyingi</button>
```

**Toza kod (Clean Code).** Ichma-ich teglar 2 bo'sh joy bilan suriladi. Shift+Alt+F – VS Code'da avtomatik tekislash. Toza kodni o'qish oson, xatoni topish tez.

```html
<!-- Yomon -->
<body><h1>Salom</h1><button>OK</button></body>

<!-- Yaxshi -->
<body>
  <h1>Salom</h1>
  <button>OK</button>
</body>
```

### Amaliy ish: Maktab e'lonlar taxtasi
Sarlavhalar va tugmalar yordamida e'lon sahifasini tuzing.

1. h1 – maktab nomi
2. h2 – 'E'lonlar'
3. 3 ta h3 – e'lon nomlari
4. Har e'lon ostida 'Batafsil' tugmasi

Boshlang'ich kod (HTML):
```html
<h1>21-maktab</h1>
<h2>E'lonlar</h2>
<h3>Futbol musobaqasi</h3>
<button>Batafsil</button>
```

### AI yordamchi: Kodni tekislash
> Mana mening HTML kodim: <body><h1>Salom</h1><button>OK</button></body>. Uni toza kod qoidalari bo'yicha tekislab ber va nima o'zgarganini tushuntir.

### Uy vazifasi
Sevimli kitobingiz mundarijasini h1–h4 bilan yozing.

### Mini test
1. Eng katta sarlavha:
   - h6
   - **h1** ✓
   - h3
   - title
2. Sahifada nechta h1 bo'lishi tavsiya etiladi?
   - **Bitta** ✓
   - Oltita
   - Istalgancha
   - Hech qancha
3. VS Code'da kodni tekislash:
   - Ctrl+C
   - **Shift+Alt+F** ✓
   - Win+D
   - Ctrl+P

---

## 7-dars. Paragraf, lorem va span. Sayt tahlili

**Modul:** 2. HTML asoslari · **Mavzular:** p, lorem, span, qalampir.uz tahlili

### Maqsadlar
- p tegi bilan matn yozadi
- lorem10 yordamida vaqtinchalik matn chiqaradi
- span bilan matnning bir qismini ajratadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: p, lorem, span |
| 15–35 | Amaliy ish: Yangilik sahifasi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Paragraf va lorem.** p – matn bo'lagi. VS Code'da 'lorem15' yozib Tab bossangiz 15 so'zli vaqtinchalik matn chiqadi – dizayn uchun qulay.

```html
<h2>Yangiliklar</h2>
<p>Termizda yangi IT markaz ochildi.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
```

**span – kichik quti.** span matn ichidagi so'zni ajratib olish uchun. Keyin CSS bilan uni bo'yash mumkin.

```html
<p>Bugun havo <span style="color: orange">+38°C</span> bo'ladi.</p>
```

**Sayt tahlili: qalampir.uz.** Saytdagi yangilik kartasini ko'ring: sarlavha (h2/h3), qisqa matn (p), sana (span), rasm (img). Har bir blokni HTML teg bilan nomlashga harakat qiling.

### Amaliy ish: Yangilik sahifasi
qalampir.uz'dagi bitta yangilikni o'zingiz HTML'da takrorlang.

1. h1 – yangilik sarlavhasi
2. Sana span ichida
3. 2 ta paragraf
4. Muhim so'zni span bilan ajrating

Boshlang'ich kod (HTML):
```html
<h1>Termizda yangi park ochildi</h1>
<p><span>12.09.2026</span></p>
<p>lorem...</p>
```

### AI yordamchi: Matn yaratish
> Menga Termiz haqida 3 ta qisqa paragraf yoz. Har biri 2 gapdan iborat bo'lsin, bolalar uchun.

### Uy vazifasi
O'tilgan teglarni takrorlang: o'z mahallangiz haqida 'yangilik' yozing (h1, 3 ta p, 2 ta span).

### Mini test
1. Vaqtinchalik matn chiqarish:
   - text10
   - **lorem10** ✓
   - p10
   - span10
2. Matn ichidagi so'zni ajratish uchun:
   - **span** ✓
   - h1
   - body
   - title
3. p tegi nima uchun?
   - Rasm
   - **Paragraf matn** ✓
   - Tugma
   - Havola

### Havolalar
- [qalampir.uz](https://qalampir.uz)

---

## 8-dars. Havolalar: a tegi

**Modul:** 2. HTML asoslari · **Mavzular:** a, href, target, #

### Maqsadlar
- a tegi bilan boshqa saytga havola qiladi
- target='_blank' ma'nosini biladi
- Bo'sh havola (#) nima ekanini tushunadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: a, href, target |
| 15–35 | Amaliy ish: Foydali saytlar menyusi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Havola.** a – anchor (langar). href – qayerga borishini ko'rsatadi.

```html
<a href="https://kun.uz">Kun.uz saytiga o'tish</a>
<br>
<a href="https://kun.uz" target="_blank">Yangi oynada ochish</a>
```

**Sahifalar orasida.** Bir papkadagi boshqa faylga: href='about.html'. Hali tayyor bo'lmagan havola uchun href='#' (deadlink) yoziladi.

```html
<a href="about.html">Men haqimda</a>
<a href="#">Tez orada...</a>
```

### Amaliy ish: Foydali saytlar menyusi
O'zingiz uchun 5 ta foydali sayt ro'yxatini tuzing.

1. h1 – 'Mening saytlarim'
2. 5 ta havola, har biri yangi oynada ochilsin
3. Har havoladan keyin qisqa izoh (p)
4. Bitta havola boshqa html faylingizga olib borsin

Boshlang'ich kod (HTML):
```html
<h1>Mening saytlarim</h1>
<a href="https://www.w3schools.com" target="_blank">W3Schools</a>
<p>HTML o'rganish uchun</p>
```

### AI yordamchi: Tushuntirish so'rash
> a tegidagi href va target atributlarini 3 ta misol bilan tushuntir. Javob qisqa bo'lsin.

### Uy vazifasi
2 ta sahifa yarating: index.html va about.html. Ular bir-biriga havola orqali bog'lansin.

### Mini test
1. Havola manzili qaysi atributda?
   - src
   - **href** ✓
   - alt
   - link
2. Yangi oynada ochish:
   - **target='_blank'** ✓
   - new='yes'
   - open
   - window
3. Hali tayyor bo'lmagan havola:
   - **href='#'** ✓
   - href=''
   - href='no'
   - a='#'

---

## 9-dars. Rasmlar: img tegi

**Modul:** 2. HTML asoslari · **Mavzular:** img, src, alt, width, pexels.com

### Maqsadlar
- img tegi bilan rasm qo'shadi
- alt nima uchun kerakligini tushunadi (ko'zi ojizlar uchun)
- width bilan rasm o'lchamini beradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: img, src, alt |
| 15–35 | Amaliy ish: Mening galereyam |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Rasm qo'shish.** img – yolg'iz teg (yopilmaydi). src – rasm manzili, alt – rasm tavsifi, width – kengligi.

```html
<img src="https://picsum.photos/id/1025/400/250" alt="Tog'dagi it" width="300">
<p>Bu rasm internetdan olingan.</p>
```

**alt – ko'zi ojizlar uchun.** Ko'zi ojiz odamlar ekran o'quvchi dasturlardan (TTS) foydalanadi. Dastur rasm o'rniga alt matnini ovoz chiqarib o'qiydi. Rasm yuklanmasa ham alt ko'rinadi.

```html
<img src="yoq-rasm.jpg" alt="Termizdagi Al-Hakim at-Termiziy majmuasi">
```

**Papkadagi rasm.** Rasm 'rasmlar' papkasida bo'lsa: src='rasmlar/it.jpg'. Pexels.com'dan yuklab olingan rasmlarni shu papkaga saqlang.

### Amaliy ish: Mening galereyam
3 ta rasmli 'hayvonlar galereyasi' tuzing.

1. pexels.com'dan 3 ta hayvon rasmini yuklang
2. Har biriga h3 sarlavha
3. img – width='250' va aniq alt
4. Rasm ostida hayvon haqida 1 gap

Boshlang'ich kod (HTML):
```html
<h1>Hayvonlar galereyasi</h1>
<h3>Ayiq</h3>
<img src="https://picsum.photos/id/1020/400/300" alt="Qo'ng'ir ayiq" width="250">
<p>Ayiq qishda uxlaydi.</p>
```

### AI yordamchi: alt matn yozish
> Menda Termiz bozori rasmi bor: odamlar, qovun va tarvuzlar, quyoshli kun. Unga ko'zi ojizlar uchun qisqa va aniq alt matni yozib ber.

### Uy vazifasi
O'zingiz haqingizdagi sahifaga rasm qo'shing (alt'ni to'g'ri yozing). O'tilganlarni takrorlang.

### Mini test
1. Rasm manzili qaysi atributda?
   - href
   - **src** ✓
   - alt
   - width
2. alt nima uchun kerak?
   - Rasmni kattalashtirish
   - **Ko'zi ojizlar va rasm yuklanmasa** ✓
   - Rang berish
   - Havola
3. img tegi yopiladimi?
   - Ha, </img>
   - **Yo'q, yolg'iz teg** ✓
   - Faqat body'da
   - Faqat head'da

### Havolalar
- [Pexels](https://www.pexels.com)

---

## 10-dars. HTML skeleti: DOCTYPE, meta va viewport

**Modul:** 2. HTML asoslari · **Mavzular:** DOCTYPE, lang, meta charset, viewport

### Maqsadlar
- Shablondagi har bir qator nima qilishini tushuntiradi
- lang='uz' qo'yadi
- UTF-8 va viewport ahamiyatini biladi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: DOCTYPE, lang, meta charset |
| 15–35 | Amaliy ish: Xotiradan shablon |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Shablon satrma-satr.** DOCTYPE – bu HTML5 hujjati. lang – sahifa tili. meta charset='UTF-8' – o', g', ş kabi harflar to'g'ri chiqishi uchun. viewport – telefonda to'g'ri ko'rinishi (responsive) uchun.

```html
<!DOCTYPE html>              <!-- HTML tilida yozilgan -->
<html lang="uz">             <!-- tili o'zbekcha -->
<head>
  <meta charset="UTF-8">     <!-- harflar standarti -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

**Savol-javob o'yini.** O'qituvchi qatorni ko'rsatadi – o'quvchi uning vazifasini aytadi. Keyin o'quvchilar shablonni xotiradan (Emmet'siz) yozib ko'rishadi.

### Amaliy ish: Xotiradan shablon
Yangi fayl yarating va shablonni Emmet'siz yozing, keyin taqqoslang.

1. Yangi fayl: skelet.html
2. Shablonni qo'lda yozing
3. ! + Tab bilan chiqqan shablon bilan solishtiring
4. lang='en' ni 'uz' ga o'zgartiring

### AI yordamchi: Izoh yozdirish
> HTML5 shablonining har bir qatoriga o'zbek tilida qisqa izoh yozib ber.

### Uy vazifasi
Shablonning har bir qatoriga izoh (<!-- -->) yozib keling.

### Mini test
1. O', g' harflari buzilmasligi uchun:
   - **meta charset='UTF-8'** ✓
   - lang='en'
   - title
   - DOCTYPE
2. viewport nima uchun?
   - Rang uchun
   - **Telefonda to'g'ri ko'rinish** ✓
   - Musiqa uchun
   - Rasm uchun
3. O'zbek tili kodi:
   - en
   - ru
   - **uz** ✓
   - tr

### Havolalar
- [freeCodeCamp](https://www.freecodecamp.org)
- [W3Schools](https://www.w3schools.com)
- [HTML Academy](https://htmlacademy.ru)

---

## 11-dars. Ro'yxatlar: ul, ol, li

**Modul:** 2. HTML asoslari · **Mavzular:** ul, ol, li, list-style-type

### Maqsadlar
- Belgili (ul) va raqamli (ol) ro'yxat tuzadi
- Ichma-ich ro'yxat yozadi
- list-style-type: none bilan belgini olib tashlaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: ul, ol, li |
| 15–35 | Amaliy ish: Mening kun tartibim |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**ul va ol.** ul – belgili ro'yxat (nuqtalar), ol – raqamli ro'yxat. Har bir element li ichida.

```html
<h3>Xarid ro'yxati</h3>
<ul>
  <li>Non</li>
  <li>Sut</li>
  <li>Olma</li>
</ul>
<h3>Choy damlash</h3>
<ol>
  <li>Suv qaynatish</li>
  <li>Choynakka choy solish</li>
  <li>5 daqiqa kutish</li>
</ol>
```

**Belgisiz ro'yxat (menyu).** Sayt menyulari aslida ul ro'yxat! Belgini CSS bilan olib tashlaymiz.

```html
<ul class="menu">
  <li><a href="#">Bosh sahifa</a></li>
  <li><a href="#">Yangiliklar</a></li>
  <li><a href="#">Aloqa</a></li>
</ul>
```

```css
.menu {
  list-style-type: none;
}
```

### Amaliy ish: Mening kun tartibim
Kun tartibi (ol) va sevimli narsalar (ul) sahifasi.

1. ol – ertalabdan kechgacha 6 ta ish
2. ul – 5 ta sevimli taom
3. Ichma-ich ro'yxat: 'Sport' ichida 3 ta sport turi
4. Menyu ro'yxati – havolalar bilan

Boshlang'ich kod (HTML):
```html
<h2>Kun tartibim</h2>
<ol>
  <li>07:00 – Uyg'onish</li>
</ol>
```

### AI yordamchi: Ro'yxat g'oyasi
> Menga 'Surxondaryo meva-sabzavotlari' mavzusida HTML ichma-ich ro'yxat yozib ber: meva va sabzavot alohida.

### Uy vazifasi
Sevimli filmlar (ol, top-5) va ichma-ich ro'yxat: 'Fanlar' → har fan ichida 2 ta mavzu.

### Mini test
1. Raqamli ro'yxat:
   - ul
   - **ol** ✓
   - li
   - list
2. Ro'yxat elementi:
   - **li** ✓
   - el
   - item
   - p
3. Belgini olib tashlash:
   - **list-style-type: none** ✓
   - color: none
   - ul: off
   - display: list

---

## 12-dars. Block va inline elementlar, div va DevTools

**Modul:** 2. HTML asoslari · **Mavzular:** block, inline, div, DevTools, ichma-ich teglar

### Maqsadlar
- Block va inline elementlarni farqlaydi
- div bilan elementlarni guruhlaydi
- Chrome DevTools (F12) ni ochib, elementlarni ko'radi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: block, inline, div |
| 15–35 | Amaliy ish: Faqat HTML: o'quvchi kartalari |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Block va inline.** Block elementlar (h1, p, div, ul) butun qatorni egallaydi va yangi qatordan boshlanadi. Inline elementlar (span, a, img, button) yonma-yon turadi.

```html
<div style="background: #cde">div – block</div>
<p style="background: #fdc">p – block</p>
<span style="background: #dfc">span – inline</span>
<a href="#" style="background: #fcd">a – inline</a>
<button>button – inline</button>
```

**div – konteyner.** div o'zi hech narsa ko'rsatmaydi, u qutiga o'xshaydi. Bir-biriga tegishli elementlarni bitta div'ga solamiz.

```html
<div class="card">
  <h3>Ali Valiyev</h3>
  <p>7-sinf o'quvchisi</p>
  <button>Profil</button>
</div>
```

**DevTools.** F12 yoki o'ng tugma → 'Inspect' (Tekshirish). Elements bo'limida sahifa kodini ko'rish, sichqonchani ustiga olib borib block/inline chegaralarini ko'rish mumkin. Tugmalarni tagma-tag qo'yish uchun ularni div ichiga olamiz.

### Amaliy ish: Faqat HTML: o'quvchi kartalari
3 ta o'quvchi kartasini div bilan yarating va DevTools'da tekshiring.

1. Har karta – div
2. Ichida img, h3, p, button
3. Tugmalarni tagma-tag qo'yish uchun har birini alohida div'ga oling
4. F12 bilan block/inline ekanini tekshiring

Boshlang'ich kod (HTML):
```html
<div>
  <img src="https://picsum.photos/id/64/120/120" alt="O'quvchi rasmi">
  <h3>Ali</h3>
  <p>7-sinf</p>
  <div><button>Profil</button></div>
  <div><button>Xabar</button></div>
</div>
```

### AI yordamchi: Farqni so'rash
> Block va inline elementlar farqini 'poyezd vagonlari' va 'bir qatordagi odamlar' misolida tushuntir.

### Uy vazifasi
FrontendCase (dars 2) dagi rasmlarni faqat HTML bilan takrorlang.

### Mini test
1. Qaysi biri inline?
   - div
   - p
   - **span** ✓
   - h1
2. DevTools ochish:
   - **F12** ✓
   - F5
   - Ctrl+S
   - Esc
3. div vazifasi:
   - Rasm chiqarish
   - **Elementlarni guruhlash** ✓
   - Havola
   - Sarlavha

---

## 13-dars. Semantik teglar: header, nav, main, footer

**Modul:** 2. HTML asoslari · **Mavzular:** header, nav, main, section, article, footer

### Maqsadlar
- Semantik teglar nima uchun kerakligini tushunadi
- Sahifani header / main / footer ga ajratadi
- kun.uz tuzilishini semantik teglar bilan tasvirlaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: header, nav, main |
| 15–35 | Amaliy ish: Sayt karkasi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Ma'noli teglar.** div hech narsa aytmaydi, header esa 'bu sahifa boshi' deydi. Semantik teglar Google va ekran o'quvchilarga sahifani tushunishga yordam beradi.

```html
<header>
  <h1>Termiz Yangiliklari</h1>
  <nav>
    <a href="#">Asosiy</a> |
    <a href="#">Sport</a> |
    <a href="#">Aloqa</a>
  </nav>
</header>
<main>
  <article>
    <h2>Yangi maktab qurildi</h2>
    <p>Angor tumanida 600 o'rinli maktab ochildi.</p>
  </article>
</main>
<footer>© 2026 PS Termiz</footer>
```

### Amaliy ish: Sayt karkasi
Yangiliklar sayti karkasini semantik teglar bilan yozing.

1. header – logo (h1) va nav
2. main – 3 ta article (sarlavha, rasm, matn)
3. aside – 'Ob-havo' bloki
4. footer – aloqa ma'lumotlari

Boshlang'ich kod (HTML):
```html
<header>
  <h1>Logo</h1>
  <nav></nav>
</header>
<main></main>
<footer></footer>
```

### AI yordamchi: Tuzilma tahlili
> Oddiy yangiliklar sayti uchun semantik HTML tuzilmasini yozib ber: header, nav, main, article, aside, footer. Faqat karkas, matnlar qisqa.

### Uy vazifasi
kun.uz bosh sahifasini qog'ozga chizing va har blok ustiga qaysi semantik teg ekanini yozing.

### Mini test
1. Sahifaning pastki qismi:
   - header
   - **footer** ✓
   - nav
   - main
2. Menyu uchun teg:
   - **nav** ✓
   - menu-bar
   - ul-nav
   - link
3. Asosiy kontent:
   - **main** ✓
   - body2
   - center
   - div

---

## 14-dars. Havolaning imkoniyatlari va favicon

**Modul:** 2. HTML asoslari · **Mavzular:** tel:, mailto:, sahifa ichida #id, favicon

### Maqsadlar
- Telefon va pochta havolasini yozadi
- Sahifa ichidagi bo'limga havola qiladi
- Saytga favicon qo'shadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: tel:, mailto:, sahifa ichida #id |
| 15–35 | Amaliy ish: Vizitka sahifa |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**tel: va mailto:.** Telefonda bosilsa qo'ng'iroq, pochta dasturi ochiladi.

```html
<a href="tel:+998901234567">📞 +998 90 123 45 67</a><br>
<a href="mailto:info@pstermiz.uz">✉️ info@pstermiz.uz</a>
```

**Sahifa ichida sakrash.** Bo'limga id beramiz va href='#id' yozamiz.

```html
<a href="#aloqa">Aloqa bo'limiga o'tish</a>
<p style="height:300px">Uzun matn...</p>
<h2 id="aloqa">Aloqa</h2>
```

**Favicon.** Brauzer tabidagi kichik ikonka. head ichiga qo'shiladi.

```html
<link rel="icon" href="favicon.png" type="image/png">
```

### Amaliy ish: Vizitka sahifa
O'quv markazi uchun aloqa sahifasini yarating.

1. Favicon qo'shing (favicon.io saytidan)
2. Telefon va pochta havolalari
3. Yuqorida 'Manzil', 'Aloqa' bo'limlariga havolalar
4. Har bo'limga id

### AI yordamchi: Favicon g'oyasi
> 'PS Termiz' o'quv markazi uchun oddiy favicon g'oyalarini 3 ta taklif qil: qaysi harf, rang va shakl.

### Uy vazifasi
O'zingiz haqingizdagi sahifaga favicon, telefon (soxta raqam) va sahifa ichidagi menyu qo'shing.

### Mini test
1. Qo'ng'iroq havolasi:
   - phone:
   - **tel:** ✓
   - call:
   - mob:
2. Bo'limga o'tish: href='...'
   - **#aloqa** ✓
   - aloqa.id
   - @aloqa
   - $aloqa
3. Favicon qayerga yoziladi?
   - body
   - **head** ✓
   - footer
   - title

### Havolalar
- [favicon.io](https://favicon.io)

---

## 15-dars. Audio, video va iframe

**Modul:** 2. HTML asoslari · **Mavzular:** audio, video, controls, iframe

### Maqsadlar
- Sahifaga audio va video qo'shadi
- controls atributi vazifasini biladi
- YouTube videoni iframe orqali joylaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: audio, video, controls |
| 15–35 | Amaliy ish: Media burchak |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Audio va video.** controls – play/pause tugmalarini ko'rsatadi. source ichida fayl manzili va turi.

```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
</audio>

<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
</video>
```

**iframe.** Boshqa sayt yoki YouTube videosini sahifaga joylash. YouTube'da 'Share → Embed' tugmasi kodni beradi.

```html
<iframe width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video" allowfullscreen></iframe>
```

### Amaliy ish: Media burchak
Sevimli qo'shiq va o'quv videosi joylangan sahifa.

1. div.audio – audio pleer
2. div.video – video pleer
3. YouTube'dan iframe
4. Har biriga sarlavha

### AI yordamchi: Xatoni topish
> Nega mening videom brauzerda o'ynamayapti? Kod: <video><source src='Video Darsim.MP4'></video>. Ehtimoliy sabablarni ayt.

### Uy vazifasi
O'zingizning 'Media' sahifangizni yarating: 1 audio, 1 video, 1 iframe.

### Mini test
1. Play tugmalarini chiqarish:
   - **controls** ✓
   - play
   - buttons
   - show
2. YouTube videoni joylash:
   - img
   - **iframe** ✓
   - a
   - audio
3. Video fayl turi:
   - **video/mp4** ✓
   - text/html
   - image/png
   - audio/mp3

---

## 16-dars. HTML loyiha: Portfolio (faqat HTML)

**Modul:** 2. HTML asoslari · **Mavzular:** Takrorlash, Portfolio, AI bilan tekshirish

### Maqsadlar
- O'tilgan barcha HTML teglaridan foydalanib portfolio sahifa yaratadi
- AI'dan kodini tekshirib berishni so'raydi va maslahatni tushunadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Portfolio namunalarini ko'rish |
| 5–10 | Reja: qaysi bo'limlar bo'ladi |
| 10–35 | Mustaqil ish: Portfolio |
| 35–42 | AI bilan kodni tekshirish |
| 42–45 | 2–3 o'quvchi ishini ko'rsatish |

### Tushunchalar
**Portfolio tuzilmasi.** header (ism, menyu) → 'Men haqimda' (rasm, matn) → 'Ko'nikmalar' (ul) → 'Ishlarim' (havolalar) → 'Aloqa' (tel, mailto) → footer.

```html
<header>
  <h1>Madina Karimova</h1>
  <nav><a href="#men">Men haqimda</a> | <a href="#aloqa">Aloqa</a></nav>
</header>
<main>
  <section id="men">
    <h2>Men haqimda</h2>
    <img src="https://picsum.photos/id/1005/200/200" alt="Madina rasmi" width="120">
    <p>Men 8-sinfda o'qiyman va veb dasturchi bo'lmoqchiman.</p>
  </section>
  <section>
    <h2>Ko'nikmalarim</h2>
    <ul><li>HTML</li><li>Tez yozish – 35 so'z/daq</li></ul>
  </section>
  <section id="aloqa">
    <h2>Aloqa</h2>
    <a href="mailto:madina@example.com">madina@example.com</a>
  </section>
</main>
<footer>© 2026</footer>
```

### Amaliy ish: Mening portfoliom
Faqat HTML bilan to'liq portfolio sahifa.

1. Semantik karkas
2. Rasm (alt bilan)
3. Kamida 2 ro'yxat
4. Sahifa ichidagi menyu
5. Kodni AI'ga tekshirtiring va 1 ta maslahatni qo'llang

### AI yordamchi: Kod tekshiruvi
> Sen HTML o'qituvchisisan. Mening kodimni tekshir: xatolarni, yopilmagan teglarni va alt yo'q rasmlarni ko'rsat. Tuzatilgan kodni emas, faqat maslahatlarni ber:
> [kodni shu yerga qo'ying]

### Uy vazifasi
Portfolioni tugatib, Telegram guruhga ekran rasmini yuboring.

### Mini test
1. Rasmga qaysi atribut majburiy?
   - **alt** ✓
   - title
   - href
   - id
2. Bo'limlarni ajratish uchun:
   - **section** ✓
   - span
   - br
   - b
3. AI kodimni tuzatib bersa, men...
   - Ko'r-ko'rona nusxalayman
   - **O'zgarishni tushunib olaman** ✓
   - Hech narsa qilmayman
   - Kodni o'chiraman

### O'qituvchi uchun eslatma
Nazorat darsi. Baholash: karkas (2), teglar (3), toza kod (2), alt va havolalar (2), AI bilan ishlash (1).

---

# 3-modul. CSS asoslari

Rang, shrift, box model, gradient, soya, hover, transition va transform.

## 17-dars. CSS bilan tanishuv: ulash usullari va class

**Modul:** 3. CSS asoslari · **Mavzular:** inline / internal / linked CSS, class, color, background-color, font-size

### Maqsadlar
- CSS ni 3 usulda ulay oladi
- class orqali elementga uslub beradi
- color, background-color, font-size xususiyatlarini ishlatadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: inline / internal / linked CSS, class, color |
| 15–35 | Amaliy ish: Portfolio'ni bo'yash |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**CSS qoidasi.** selektor { xususiyat: qiymat; }. Selektor – kimga, xususiyat – nimani, qiymat – qanday.

```html
<h1>Salom, CSS!</h1>
<p>Men rangli matnman.</p>
```

```css
h1 {
  color: tomato;
  font-size: 48px;
}
p {
  background-color: lightyellow;
}
```

**3 xil ulash.** 1) inline – teg ichida style='...'. 2) internal – head ichida <style>. 3) linked – alohida style.css fayl: <link rel='stylesheet' href='style.css'>. Eng yaxshisi – linked!

```html
<!-- head ichida -->
<link rel="stylesheet" href="style.css">
```

**class.** Bir xil uslubni bir nechta elementga berish uchun class ishlatiladi. CSS'da nuqta bilan yoziladi: .nomi

```html
<p class="muhim">Ertaga imtihon!</p>
<p>Oddiy matn</p>
<p class="muhim">Daftarni unutmang!</p>
```

```css
.muhim {
  color: white;
  background-color: crimson;
  font-size: 20px;
}
```

### Amaliy ish: Portfolio'ni bo'yash
16-darsdagi portfolioga style.css ulang.

1. style.css fayl yarating va link bilan ulang
2. body – fon rangi
3. h1 va h2 – rang, font-size
4. 2 ta class yarating: .muhim va .kichik

Boshlang'ich kod (HTML):
```html
<h1>Madina Karimova</h1>
<p class="muhim">Veb dasturchi</p>
<p>Men haqimda matn</p>
```

Boshlang'ich kod (CSS):
```css
body {
  background-color: #f0f7ff;
}
.muhim {
  color: royalblue;
}
```

### AI yordamchi: Rang palitrasi
> 'Dengiz' mavzusidagi sayt uchun 4 ta rangdan iborat palitra ber: fon, matn, tugma, sarlavha. Hex kodlarini yoz.

### Uy vazifasi
Takrorlash va FrontendCase'dagi rasmlar (dars 2) ni CSS bilan bo'yab keling.

### Mini test
1. class CSS'da qanday yoziladi?
   - #nom
   - **.nom** ✓
   - @nom
   - nom()
2. Fon rangi:
   - color
   - **background-color** ✓
   - font-color
   - bg
3. Eng yaxshi ulash usuli:
   - inline
   - **linked (style.css)** ✓
   - Word
   - rasm

### Havolalar
- [W3Schools CSS](https://www.w3schools.com/css/)

---

## 18-dars. Matn bilan ishlash

**Modul:** 3. CSS asoslari · **Mavzular:** text-decoration, font-weight, text-align, font-family, Google Fonts

### Maqsadlar
- Matn qalinligi, tekislanishi va chizig'ini boshqaradi
- Google Fonts'dan shrift ulaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: text-decoration, font-weight, text-align |
| 15–35 | Amaliy ish: freeCodeCamp mashqlari |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Matn xususiyatlari.** font-weight – qalinlik (400 oddiy, 700 qalin). text-align – tekislash. text-decoration – chiziq (havoladagi chiziqni olib tashlash uchun none).

```html
<h2>Termiz – quyoshli shahar</h2>
<p>Termiz O'zbekistonning eng janubiy shahri.</p>
<a href="#">Batafsil o'qish</a>
```

```css
h2 { text-align: center; font-weight: 800; }
p { text-align: justify; font-style: italic; }
a { text-decoration: none; color: darkorange; font-weight: bold; }
a:hover { text-decoration: underline; }
```

**Google Fonts.** fonts.google.com → shriftni tanlang → link'ni head'ga qo'ying → font-family bilan ishlating.

```html
<h1>Salom, dunyo!</h1><p>Bu matn Nunito shriftida.</p>
```

```css
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Nunito&display=swap');
h1 { font-family: 'Lobster', cursive; font-size: 44px; }
p  { font-family: 'Nunito', sans-serif; }
```

### Amaliy ish: freeCodeCamp mashqlari
freeCodeCamp 'Learn HTML by Building a Cat Photo App' kursining birinchi qadamlarini bajaring, keyin portfolioga Google Font ulang.

1. freecodecamp.org'da ro'yxatdan o'ting (o'qituvchi bilan)
2. 10 ta qadamni bajaring
3. Portfolioga 2 ta shrift ulang
4. Havolalardan chiziqni olib tashlang

### AI yordamchi: Shrift juftligi
> Bolalar o'quv markazi sayti uchun Google Fonts'dan 2 ta mos shrift juftligini tavsiya qil: sarlavha va matn uchun. Nega mosligini ham ayt.

### Uy vazifasi
'Developer Girl' kartasini (rasm, ism, kasb, 3 ta ko'nikma) HTML+CSS bilan yasang.

### Mini test
1. Matnni markazga:
   - **text-align: center** ✓
   - align: middle
   - center: true
   - font-align
2. Havola chizig'ini olib tashlash:
   - **text-decoration: none** ✓
   - line: 0
   - underline: off
   - border: none
3. Qalin matn:
   - **font-weight: 700** ✓
   - font-size: bold
   - text: bold
   - weight: big

### Havolalar
- [Google Fonts](https://fonts.google.com)
- [freeCodeCamp](https://www.freecodecamp.org)

---

## 19-dars. Box model: margin, padding, border

**Modul:** 3. CSS asoslari · **Mavzular:** margin, padding, border, border-radius

### Maqsadlar
- Har bir element quti ekanini tushunadi
- padding (ichki) va margin (tashqi) oraliqni farqlaydi
- border va border-radius bilan ramka va dumaloq burchak beradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: margin, padding, border |
| 15–35 | Amaliy ish: Developer Girl kartasi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Quti modeli.** Har bir element – sovg'a qutisi. Kontent – sovg'a, padding – ichidagi paxta, border – quti devori, margin – qutilar orasidagi masofa. Laboratoriyada slayderlarni suring!

> 🔬 Platformadagi laboratoriya: *boxmodel*

**Kodda.** Qiymatlar tartibi: yuqori, o'ng, past, chap (soat mili bo'yicha).

```html
<div class="card">Men kartaman</div>
<div class="card">Men ham</div>
```

```css
.card {
  background: #ffe8a3;
  padding: 20px;
  border: 3px solid #e0a100;
  border-radius: 16px;
  margin: 12px 0;
}
```

### Amaliy ish: Developer Girl kartasi
Laboratoriyada box modelni o'rganib, keyin kartani bezang.

1. Kartaga padding: 24px
2. border: 2px solid
3. border-radius: 20px
4. Rasmni dumaloq qiling: border-radius: 50%

Boshlang'ich kod (HTML):
```html
<div class="card">
  <img src="https://picsum.photos/id/1027/200/200" alt="Qiz rasmi">
  <h3>Dilnoza</h3>
  <p>Frontend dasturchi</p>
</div>
```

Boshlang'ich kod (CSS):
```css
.card {
  width: 240px;
  background: white;
  text-align: center;
}
img { width: 120px; }
```

### AI yordamchi: Tushunmagan joyni so'rash
> margin va padding farqini sovg'a qutisi misolida 4 gap bilan tushuntir va CSS misol ber.

### Uy vazifasi
Developer Girl kartasini oxiriga yetkazing (box model xususiyatlari bilan).

### Mini test
1. Ichki oraliq:
   - margin
   - **padding** ✓
   - border
   - gap
2. Dumaloq burchak:
   - **border-radius** ✓
   - corner
   - round
   - radius-box
3. Rasmni to'liq doira qilish:
   - **border-radius: 50%** ✓
   - circle: true
   - radius: 100px
   - shape: round

---

## 20-dars. Takrorlash va narx kartasi (99/MONTH)

**Modul:** 3. CSS asoslari · **Mavzular:** Takrorlash, text-align inline xatosi, Narx kartasi

### Maqsadlar
- O'tilgan CSS xususiyatlarini takrorlaydi
- text-align inline elementga emas, uning ota-onasiga berilishini tushunadi
- Narx kartasini dizayn bo'yicha yasaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Takrorlash, text-align inline xatosi, Narx kartasi |
| 15–35 | Amaliy ish: Classwork 1: HTML | CSS, Classwork 2: 99/MONTH |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**text-align xatosi.** text-align: center ni span yoki a'ning o'ziga bersak ishlamaydi – u ota-ona block elementga beriladi.

```html
<a class="xato" href="#">Men markazda emasman</a>
<div class="togri"><a href="#">Men markazdaman</a></div>
```

```css
.xato { text-align: center; }  /* ishlamaydi */
.togri { text-align: center; } /* ishlaydi */
```

**Narx kartasi.** Katta raqam, kichik birlik, ro'yxat va tugma – mashhur dizayn.

```html
<div class="price">
  <h3>PRO</h3>
  <p class="sum">$99<span>/MONTH</span></p>
  <ul><li>10 ta loyiha</li><li>AI yordamchi</li><li>24/7 yordam</li></ul>
  <button>Tanlash</button>
</div>
```

```css
.price { width: 240px; margin: 20px auto; padding: 24px; text-align: center;
  border: 2px solid #3b5bdb; border-radius: 16px; font-family: sans-serif; }
.sum { font-size: 48px; font-weight: 800; margin: 8px 0; }
.sum span { font-size: 14px; color: gray; }
ul { list-style-type: none; padding: 0; line-height: 2; }
button { background: #3b5bdb; color: white; border: 0; padding: 12px 32px; border-radius: 30px; font-size: 16px; }
```

### Amaliy ish: Classwork 1: HTML | CSS, Classwork 2: 99/MONTH
Avval namunadagi HTML|CSS belgisini, keyin narx kartasini yasang.

1. 'HTML | CSS' – ikki rangli yozuv (span bilan)
2. Narx kartasi – 3 xil tarif (BASIC, PRO, MAX)
3. Har biriga boshqa rang
4. O'rtadagisini kattaroq qiling

### AI yordamchi: Dizayn g'oyasi
> Uch xil tarifli narx kartalari uchun rang va matn g'oyalarini ber: 'Boshlang'ich', 'O'rta', 'Pro'. O'quv markazi kurslari uchun.

### Uy vazifasi
Lays Card: chips paketi ko'rinishidagi mahsulot kartasi (rasm, nom, narx, tugma).

### Mini test
1. text-align kimga beriladi?
   - Inline elementga
   - **Ota-ona block elementga** ✓
   - Faqat rasmga
   - head'ga
2. Blokni gorizontal markazlash:
   - **margin: 0 auto** ✓
   - align: center
   - padding: auto
   - center: 1
3. ul chap bo'sh joyini olib tashlash:
   - **padding: 0** ✓
   - margin: 100
   - border: 0
   - gap: 0

---

## 21-dars. Tugmalar dizayni: Outline Buttons

**Modul:** 3. CSS asoslari · **Mavzular:** Tugma uslublari, cursor, Takrorlash

### Maqsadlar
- Turli uslubdagi tugmalar yasaydi (to'ldirilgan, outline, dumaloq)
- cursor: pointer ishlatadi
- Bitta asosiy va qo'shimcha class bilan ishlaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Tugma uslublari, cursor, Takrorlash |
| 15–35 | Amaliy ish: Outline Buttons to'plami |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Outline tugma.** Ichi bo'sh, faqat ramkasi rangli tugma. Ikki class: .btn – umumiy, .btn-red – rang.

```html
<button class="btn">Oddiy</button>
<button class="btn outline">Outline</button>
<button class="btn outline red">Qizil</button>
<button class="btn pill">Dumaloq</button>
```

```css
.btn { padding: 10px 22px; font-size: 16px; border: 2px solid #1971c2;
  background: #1971c2; color: white; border-radius: 6px; cursor: pointer; margin: 6px; }
.outline { background: transparent; color: #1971c2; }
.red { border-color: #e03131; color: #e03131; }
.pill { border-radius: 40px; }
```

### Amaliy ish: Outline Buttons to'plami
8 xil tugma yasang: 4 rang × 2 uslub (to'ldirilgan va outline).

1. .btn umumiy class
2. 4 ta rang classi
3. .outline class
4. Tugmalarni 2 qatorga joylang

Boshlang'ich kod (HTML):
```html
<button class="btn">Saqlash</button>
<button class="btn outline">Bekor</button>
```

Boshlang'ich kod (CSS):
```css
.btn {
  padding: 10px 22px;
  border: 2px solid seagreen;
  background: seagreen;
  color: white;
}
.outline {
  background: transparent;
  color: seagreen;
}
```

### AI yordamchi: Tugma variantlari
> Menga 3 xil zamonaviy CSS tugma uslubini yozib ber va har birini qachon ishlatishni tushuntir.

### Uy vazifasi
Simple HTML CSS: o'z sahifangizdagi barcha tugmalarni yangi uslubga o'tkazing.

### Mini test
1. Sichqoncha 'qo'l' ko'rinishi:
   - **cursor: pointer** ✓
   - mouse: hand
   - pointer: yes
   - cursor: click
2. Shaffof fon:
   - **background: transparent** ✓
   - background: none-color
   - opacity: fon
   - color: 0
3. Elementga 2 ta class:
   - **class='btn red'** ✓
   - class='btn' class='red'
   - class='btn,red'
   - classes='btn red'

---

## 22-dars. Gradientlar

**Modul:** 3. CSS asoslari · **Mavzular:** linear-gradient, radial-gradient, conic-gradient

### Maqsadlar
- 3 xil gradient yaratadi
- Burchak (deg) va foizlarni boshqaradi
- Gradient generator saytlaridan foydalanadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: linear-gradient, radial-gradient, conic-gradient |
| 15–35 | Amaliy ish: Quyosh botishi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**linear-gradient.** To'g'ri chiziq bo'ylab rang o'tishi: linear-gradient(burchak, rang1 foiz, rang2 foiz).

```html
<div class="box"></div>
```

```css
.box { height: 160px; border-radius: 12px;
  background-image: linear-gradient(90deg, #ff9a3c 0%, #ff4d6d 50%, #7b2ff7 100%); }
```

**radial va conic.** radial – markazdan doira bo'ylab, conic – soat mili kabi aylana bo'ylab.

```html
<div class="r"></div><div class="c"></div>
```

```css
div { width: 150px; height: 150px; display: inline-block; margin: 8px; border-radius: 50%; }
.r { background-image: radial-gradient(circle, yellow 10%, orange 40%, red 80%); }
.c { background-image: conic-gradient(from 180deg, red, yellow, lime, cyan, blue, magenta, red); }
```

**Gradient generator.** Laboratoriyadagi generatorda ranglarni tanlang – tayyor CSS kodini nusxalang.

> 🔬 Platformadagi laboratoriya: *gradient*

### Amaliy ish: Quyosh botishi
Gradientlar bilan quyosh botishi manzarasi.

1. Osmon – linear-gradient (to'q ko'k → pushti → sariq)
2. Quyosh – radial-gradient doira
3. Rang g'ildiragi – conic-gradient
4. Foizlarni o'zgartirib tajriba qiling

Boshlang'ich kod (HTML):
```html
<div class="sky">
  <div class="sun"></div>
</div>
```

Boshlang'ich kod (CSS):
```css
.sky {
  height: 250px;
  background-image: linear-gradient(180deg, #1b1f5e, #ff6f91, #ffc75f);
  padding-top: 80px;
}
.sun {
  width: 100px; height: 100px; margin: 0 auto; border-radius: 50%;
  background-image: radial-gradient(circle, #fff6b0, #ffb300);
}
```

### AI yordamchi: Gradient kodi
> 'Surxondaryo quyoshi' mavzusida chiroyli CSS linear-gradient yozib ber va har bir rang nimani anglatishini ayt.

### Uy vazifasi
O'z portfoliongiz fonini gradientga o'zgartiring va 3 xil gradientli tugma yasang.

### Mini test
1. Aylana bo'ylab gradient:
   - linear
   - radial
   - **conic** ✓
   - circle
2. Chapdan o'ngga:
   - **90deg** ✓
   - 0deg
   - 180deg
   - 360deg
3. Gradient qaysi xususiyatga yoziladi?
   - color
   - **background-image** ✓
   - border
   - font

### Havolalar
- [cssgradient.io](https://cssgradient.io)

---

## 23-dars. Soyalar: box-shadow va text-shadow. Oy

**Modul:** 3. CSS asoslari · **Mavzular:** box-shadow, text-shadow, inset

### Maqsadlar
- box-shadow parametrlarini tushunadi: x, y, blur, size, rang
- text-shadow bilan matnga soya beradi
- inset soyadan foydalanib Oy yasaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: box-shadow, text-shadow, inset |
| 15–35 | Amaliy ish: Tungi osmon |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**box-shadow.** box-shadow: x y blur size rang. inset – soya ichkarida.

```html
<div class="card">Soyali karta</div>
```

```css
.card { width: 200px; padding: 30px; margin: 30px auto; background: white;
  border-radius: 14px; text-align: center;
  box-shadow: 10px 10px 25px 0 rgba(0, 0, 0, 0.25); }
```

**text-shadow.** text-shadow: x y blur rang (size yo'q).

```html
<h1>NEON</h1>
```

```css
body { background: #111; }
h1 { color: #fff; font-size: 64px; text-align: center; font-family: sans-serif;
  text-shadow: 0 0 10px #0ff, 0 0 30px #0ff; }
```

**Classwork: Oy.** Oy o'roqsimon ko'rinishi – inset soya bilan!

```html
<div class="moon"></div>
```

```css
body { background: #0b1026; }
.moon { width: 150px; height: 150px; margin: 30px auto; border-radius: 50%;
  box-shadow: inset 30px -10px 0 0 #ffe066; }
```

### Amaliy ish: Tungi osmon
Laboratoriyada soyani sozlang, keyin Oy va neon yozuvli tungi manzara yasang.

1. Fon – to'q ko'k
2. Oy – inset soya
3. Sarlavha – neon text-shadow
4. Yulduzlar – kichik oq doiralar box-shadow bilan

### AI yordamchi: Neon effekt
> CSS text-shadow bilan neon effektini qanday qilish mumkin? Qadamlarni tushuntir va 2 xil rang misolini yoz.

### Uy vazifasi
Flags: CSS bilan 3 ta bayroq (O'zbekiston, Yaponiya, Fransiya).

### Mini test
1. Ichki soya:
   - **inset** ✓
   - inner
   - inside
   - in
2. text-shadow'da qaysi parametr yo'q?
   - x
   - blur
   - **size** ✓
   - rang
3. box-shadow: 0 0 20px lime — bu:
   - **Atrofida yashil nur** ✓
   - Yashil ramka
   - Yashil fon
   - Yashil matn

---

## 24-dars. Bayroqlar amaliyoti

**Modul:** 3. CSS asoslari · **Mavzular:** Takrorlash, div'lar bilan chizish, Flags

### Maqsadlar
- div, rang va o'lcham yordamida bayroq chizadi
- O'zbekiston bayrog'i proporsiyalarini hisoblaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Takrorlash, div'lar bilan chizish, Flags |
| 15–35 | Amaliy ish: Bayroqlar ko'rgazmasi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**O'zbekiston bayrog'i.** Ko'k, oq, yashil yo'llar; ular orasida ingichka qizil chiziqlar. Oy va yulduzlar – keyingi bosqich.

```html
<div class="flag">
  <div class="blue"></div><div class="red"></div>
  <div class="white"></div><div class="red"></div>
  <div class="green"></div>
</div>
```

```css
.flag { width: 300px; border: 1px solid #ccc; }
.blue  { height: 50px; background: #0099b5; }
.white { height: 50px; background: #fff; }
.green { height: 50px; background: #1eb53a; }
.red   { height: 4px;  background: #ce1126; }
```

**Yaponiya bayrog'i.** Oq to'rtburchak markazida qizil doira.

```html
<div class="jp"><div class="sun"></div></div>
```

```css
.jp { width: 300px; height: 200px; background: white; border: 1px solid #ccc; padding-top: 40px; box-sizing: border-box; }
.sun { width: 120px; height: 120px; margin: 0 auto; border-radius: 50%; background: #bc002d; }
```

### Amaliy ish: Bayroqlar ko'rgazmasi
5 ta bayroq chizing va ostiga davlat nomini yozing.

1. O'zbekiston (Oyni inset soya bilan qo'shing)
2. Yaponiya
3. Fransiya / Italiya (3 ustun)
4. O'zingiz tanlagan 2 ta davlat

### AI yordamchi: Proporsiya
> O'zbekiston bayrog'ining rasmiy o'lcham nisbatlari qanday? CSS'da 300px kenglik uchun har bir yo'l balandligini hisoblab ber.

### Uy vazifasi
Mahallangiz yoki maktabingiz uchun o'z bayrog'ingizni o'ylab topib CSS'da chizing.

### Mini test
1. O'zbekiston bayrog'idagi ingichka chiziqlar rangi:
   - **Qizil** ✓
   - Sariq
   - Qora
   - Oq
2. Doira yasash:
   - **border-radius: 50%** ✓
   - shape: circle
   - round: 1
   - radius: full
3. div o'zi qanday balandlikda bo'ladi?
   - **Kontentiga qarab** ✓
   - Har doim 100px
   - Ekran bo'yi
   - 0 dan katta bo'lmaydi

---

## 25-dars. Hover, ikki class va transition

**Modul:** 3. CSS asoslari · **Mavzular:** :hover, dual class, transition

### Maqsadlar
- :hover bilan sichqoncha ustiga kelganda uslubni o'zgartiradi
- transition bilan silliq o'zgarish beradi
- Bitta elementga ikki class qo'llaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: :hover, dual class, transition |
| 15–35 | Amaliy ish: Matrix va Command Buttons |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**:hover.** Sichqoncha element ustiga kelganda ishlaydigan holat.

```html
<button class="btn">Ustimga kel</button>
```

```css
.btn { padding: 14px 30px; font-size: 18px; border: 0; border-radius: 10px;
  background: #ff922b; color: white; cursor: pointer;
  transition: 0.4s; }
.btn:hover { background: #d9480f; transform: scale(1.1); }
```

**transition.** transition: xususiyat vaqt tezlik. Masalan: transition: background 0.3s ease;

```html
<div class="box">Hover</div>
```

```css
.box { width: 120px; height: 120px; background: teal; color: white; display: grid; place-items: center;
  border-radius: 10px; transition: all 1s ease; }
.box:hover { width: 260px; background: crimson; border-radius: 60px; }
```

### Amaliy ish: Matrix va Command Buttons
Qora fonda yashil matritsa uslubidagi tugmalar paneli.

1. Fon – qora, matn – #00ff41
2. 6 ta tugma: outline yashil
3. Hover'da fon yashil, matn qora
4. transition: 0.3s

Boshlang'ich kod (HTML):
```html
<div class="panel">
  <button class="cmd">START</button>
  <button class="cmd">STOP</button>
</div>
```

Boshlang'ich kod (CSS):
```css
body { background: black; }
.cmd {
  font-family: monospace;
  color: #00ff41;
  background: transparent;
  border: 2px solid #00ff41;
  padding: 12px 24px;
}
```

### AI yordamchi: Effekt g'oyalari
> Tugma uchun 5 ta turli hover effekt g'oyasini CSS kodi bilan ber (rang, soya, kattalashish, chiziq, fon).

### Uy vazifasi
Command Buttons: hover va transition'li 6 ta turli tugma.

### Mini test
1. Sichqoncha ustida:
   - **:hover** ✓
   - :mouse
   - :over
   - :active
2. Silliq o'zgarish:
   - **transition** ✓
   - animation-speed
   - smooth
   - delay
3. transition qayerga yoziladi?
   - **Asosiy selektorga** ✓
   - Faqat :hover'ga
   - head'ga
   - HTML'ga

---

## 26-dars. Fon rasmi: background-image: url()

**Modul:** 3. CSS asoslari · **Mavzular:** background-image, background-repeat, background-size, background-position

### Maqsadlar
- Elementga fon rasm qo'yadi
- cover va contain farqini biladi
- Gradient va rasmni birga ishlatadi (qoraytirish)

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: background-image, background-repeat, background-size |
| 15–35 | Amaliy ish: Hover'da harakatlanuvchi fon |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Fon rasm.** cover – butun qutini to'ldiradi (qirqilishi mumkin), contain – rasm to'liq ko'rinadi. cover bo'lsa repeat kerak emas.

```html
<div class="hero"><h1>Termizga xush kelibsiz</h1></div>
```

```css
.hero { height: 240px; display: grid; place-items: center; color: white;
  background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),
                    url('https://picsum.photos/id/1040/900/500');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; }
```

**Ikki rasm bitta fonda.** Vergul bilan bir nechta fon rasm yoziladi.

```css
.imgbox {
  background-image: url('image1.jpg'), url('image2.jpg');
  background-repeat: no-repeat;
  background-size: 50%, 50%;
  background-position: left, right;
}
```

### Amaliy ish: Hover'da harakatlanuvchi fon
Fon rasm hover'da background-position: top dan bottom ga siljiydi.

1. Uzun (vertikal) rasm tanlang
2. background-position: top
3. hover'da bottom
4. transition: 3s

Boshlang'ich kod (HTML):
```html
<div class="scroll"></div>
```

Boshlang'ich kod (CSS):
```css
.scroll {
  width: 300px; height: 200px;
  background-image: url('https://picsum.photos/id/1018/300/900');
  background-size: cover;
  background-position: top;
  transition: 3s;
}
.scroll:hover {
  background-position: bottom;
}
```

### AI yordamchi: Rasm tanlash
> Sayohat sayti bosh sahifasi uchun fon rasm tanlashda nimalarga e'tibor berish kerak? 5 ta maslahat.

### Uy vazifasi
Illustration card va havo sharlari (air balloons) sahifasi: fon rasm ustida matn.

### Mini test
1. Butun qutini to'ldirish:
   - **cover** ✓
   - contain
   - fill-all
   - repeat
2. Rasm takrorlanmasin:
   - **no-repeat** ✓
   - repeat-none
   - once
   - single
3. Rasmni qoraytirish uchun ustiga:
   - **linear-gradient(rgba(...))** ✓
   - filter-dark
   - opacity: fon
   - black-mode

---

## 27-dars. Transform: rotate, scale, translate, skew

**Modul:** 3. CSS asoslari · **Mavzular:** transform, opacity, .btn:hover .box

### Maqsadlar
- Elementni aylantiradi, kattalashtiradi, siljitadi va qiyshaytiradi
- opacity bilan shaffoflik beradi
- Bir elementga hover qilganda boshqasini o'zgartiradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: transform, opacity, .btn:hover .box |
| 15–35 | Amaliy ish: Quyosh va Oy |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**4 xil transform.** rotate(45deg) – aylantirish, scale(1.5) – kattalashtirish, translate(x, y) – siljitish, skew(20deg) – qiyshaytirish. Laboratoriyada sinab ko'ring!

> 🔬 Platformadagi laboratoriya: *transform*

**Ota-ona hover.** .card:hover .img – karta ustiga kelganda ichidagi rasm o'zgaradi.

```html
<div class="card"><div class="icon">⭐</div><p>Ustimga kel</p></div>
```

```css
.card { width: 180px; padding: 20px; text-align: center; background: #f1f3f5; border-radius: 12px; }
.icon { font-size: 50px; transition: 0.6s; }
.card:hover .icon { transform: rotate(360deg) scale(1.4); }
.card p { opacity: 0.4; transition: 0.6s; }
.card:hover p { opacity: 1; }
```

### Amaliy ish: Quyosh va Oy
Hover'da quyosh botib, oy chiqadigan karta.

1. Karta – osmon
2. Quyosh (sariq doira) va Oy (kulrang doira)
3. Hover'da quyosh translateY(200px)
4. Oy teskari yo'nalishda chiqadi, fon qorayadi

### AI yordamchi: Tushuntirish
> CSS transform: translate va margin bilan siljitish farqi nima? Oddiy misol bilan tushuntir.

### Uy vazifasi
McQueen: mashina rasmi hover'da o'ngga siljib (translate), g'ildiraklar aylansin (rotate).

### Mini test
1. Aylantirish:
   - **rotate** ✓
   - turn
   - spin
   - round
2. Ikki baravar kattalashtirish:
   - **scale(2)** ✓
   - size(2)
   - zoom: 2x
   - grow(2)
3. Yarim shaffof:
   - **opacity: 0.5** ✓
   - opacity: 50
   - visible: half
   - alpha: 5

---

## 28-dars. Box-sizing va foydali qoidalar

**Modul:** 3. CSS asoslari · **Mavzular:** box-sizing, * { margin: 0 }, max-width, Maslahatlar

### Maqsadlar
- box-sizing: border-box nima uchun kerakligini tushunadi
- Brauzer standart marginlarini tozalaydi
- Yaxshi amaliyot qoidalarini biladi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: box-sizing, * { margin: 0 }, max-width |
| 15–35 | Amaliy ish: Xatolarni tuzat |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**box-sizing.** Odatda width + padding + border = haqiqiy kenglik. border-box bo'lsa width ichiga hammasi kiradi – hisob-kitob oson.

```html
<div class="a">content-box: 300 + 100 + 4 = 404px</div>
<div class="b">border-box: aniq 300px</div>
```

```css
div { width: 300px; padding: 50px; border: 2px solid black; margin: 8px 0; background: lime; }
.b { box-sizing: border-box; background: gold; }
```

**Har sahifa boshida.** Barcha elementlarga umumiy sozlama.

```css
* {
  margin: 0;
  box-sizing: border-box;
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
```

**Oltin maslahatlar.** 1) Iloji boricha height bermang – kontent o'zi belgilaydi. 2) width o'rniga max-width. 3) a ichiga a yozmang. 4) span va a'ga o'lcham bermoqchi bo'lsangiz – display: inline-block. 5) img alt'iga ham uslub berish mumkin.

### Amaliy ish: Xatolarni tuzat
O'qituvchi bergan 'buzuq' sahifani DevTools yordamida tuzating.

1. F12 → element ustida box modelni ko'ring
2. * { box-sizing } qo'shing
3. Qotib qolgan height'larni olib tashlang
4. Rasmlarga max-width: 100%

Boshlang'ich kod (HTML):
```html
<div class="box">
  <img src="https://picsum.photos/id/1011/900/400" alt="Ko'l">
  <p>Matn divdan chiqib ketmoqda...</p>
</div>
```

Boshlang'ich kod (CSS):
```css
.box {
  width: 300px;
  height: 100px;
  padding: 20px;
  border: 3px solid tomato;
}
```

### AI yordamchi: Debug
> Mening rasmim div'dan chiqib ketyapti. CSS: .box{width:300px} img{width:900px}. Nega va qanday tuzataman?

### Uy vazifasi
Oldingi 3 ta ishingizni yangi qoidalar bo'yicha qayta ko'rib chiqing.

### Mini test
1. O'lcham to'g'ri hisoblanishi uchun:
   - **box-sizing: border-box** ✓
   - size: real
   - width: auto
   - display: box
2. Rasm divdan chiqmasligi uchun:
   - **max-width: 100%** ✓
   - width: 1000px
   - height: 0
   - overflow: rasm
3. a ichiga a yozish mumkinmi?
   - Ha
   - **Yo'q** ✓
   - Faqat footer'da
   - Faqat 2 marta

---

## 29-dars. Inline-block va rasm xatolari

**Modul:** 3. CSS asoslari · **Mavzular:** display: inline-block, vertical-align, span, a, img xatolari

### Maqsadlar
- span va a'ga o'lcham berish uchun inline-block ishlatadi
- Rasm ostidagi bo'sh joyni vertical-align bilan yo'qotadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: display: inline-block, vertical-align, span, a, img xatolari |
| 15–35 | Amaliy ish: People list |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**inline-block.** button'ga width, height, margin yaxshi ishlaydi, span va a'ga esa ishlamaydi. Yechim – display: inline-block.

```html
<a href="#" class="x">oddiy a</a>
<a href="#" class="y">inline-block a</a>
```

```css
a { width: 160px; height: 60px; margin: 20px; background: #ffd43b; text-align: center; }
.y { display: inline-block; line-height: 60px; }
```

**Rasm ostidagi bo'sh joy.** img inline element bo'lgani uchun ostida kichik bo'shliq qoladi. vertical-align: middle uni yo'qotadi.

```html
<div class="b"><img src="https://picsum.photos/id/237/200/120" alt="Kuchukcha"></div>
<div class="b ok"><img src="https://picsum.photos/id/237/200/120" alt="Kuchukcha"></div>
```

```css
.b { background: crimson; display: inline-block; margin: 6px; }
.ok img { vertical-align: middle; }
```

### Amaliy ish: People list
Rasm, ism va lavozimdan iborat xodimlar ro'yxati.

1. Har bir odam – a (havola) karta
2. a'ga display: inline-block, width, padding
3. Rasm dumaloq va vertical-align: middle
4. Hover'da soya

### AI yordamchi: Taqqoslash jadvali
> display: block, inline va inline-block farqlarini jadval shaklida ko'rsat: width, height, margin, yangi qator.

### Uy vazifasi
Company description: kompaniya haqida sahifa (logo, matn, jamoa ro'yxati).

### Mini test
1. span'ga width ishlashi uchun:
   - **display: inline-block** ✓
   - display: none
   - width: important
   - float: none
2. Rasm ostidagi bo'shliq:
   - **vertical-align: middle** ✓
   - margin: -1
   - padding: 0
   - gap: 0
3. Qaysi biriga width yaxshi ishlaydi?
   - **button** ✓
   - span
   - a
   - b

---

## 30-dars. CSS nazorat: Restoran menyusi

**Modul:** 3. CSS asoslari · **Mavzular:** Takrorlash, Restaurant menu, Nazorat

### Maqsadlar
- 3-modul bilimlarini bitta sahifada qo'llaydi
- Dizayn namunasiga qarab ishlaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Menyu namunalarini ko'rish |
| 5–35 | Mustaqil ish: Restoran menyusi |
| 35–42 | Mini test (10 savol) |
| 42–45 | Natijalar va uy vazifasi |

### Tushunchalar
**Menyu qatori.** Taom nomi, nuqtalar va narx – klassik menyu.

```html
<div class="menu">
  <h2>Lazzat</h2>
  <p class="row"><span>Osh</span><span>35 000</span></p>
  <p class="row"><span>Somsa</span><span>8 000</span></p>
  <p class="row"><span>Choy</span><span>3 000</span></p>
</div>
```

```css
.menu { max-width: 320px; margin: 20px auto; padding: 24px; font-family: Georgia, serif;
  background: #fff8e7; border: 2px dashed #b08968; border-radius: 12px; }
h2 { text-align: center; color: #7f5539; }
.row { border-bottom: 1px dotted #b08968; padding: 6px 0; }
.row span:last-child { float: right; font-weight: bold; }
```

### Amaliy ish: Restaurant menu
Kamida 3 bo'lim (Birinchi taomlar, Ikkinchi, Ichimliklar) va 9 ta taomli menyu.

1. Fon rasm + qoraytirish
2. Har bo'lim – karta (soya, radius)
3. Taomlar – nom va narx
4. Hover'da qator rangi o'zgaradi

### AI yordamchi: Menyu matni
> Surxondaryo milliy taomlari restorani uchun 9 ta taom nomi, qisqa tavsif va taxminiy narxni jadval qilib ber.

### Uy vazifasi
Lazzat food menu: rasmlari bilan to'liq menyu sahifa.

### Mini test
1. Ichki oraliq:
   - **padding** ✓
   - margin
   - gap
   - border
2. Fon rasmini to'ldirish:
   - **background-size: cover** ✓
   - size: full
   - image-fit
   - cover: yes
3. Silliq hover uchun:
   - **transition** ✓
   - delay
   - timer
   - motion

### O'qituvchi uchun eslatma
Nazorat darsi. Baholash: tuzilma (2), ranglar va shrift (2), box model (2), hover/transition (2), tozalik (2).

---

# 4-modul. Flexbox va formalar

Elementlarni qatorga terish, kartalar, menyu, ikonlar va formalar bilan ishlash.

## 31-dars. display: flex bilan tanishuv

**Modul:** 4. Flexbox va formalar · **Mavzular:** display: flex, justify-content, kun.uz misoli

### Maqsadlar
- Flex konteyner va flex elementlarni farqlaydi
- justify-content qiymatlarini biladi
- Menyuni bir qatorga teradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: display: flex, justify-content, kun.uz misoli |
| 15–35 | Amaliy ish: Flexible puppy |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Flex – javon.** Ota-onaga display: flex bersak, bolalari bir qatorga teriladi. justify-content – gorizontal joylash: flex-start, center, flex-end, space-between, space-around, space-evenly.

> 🔬 Platformadagi laboratoriya: *flexbox*

**kun.uz menyusi.** Logo chapda, menyu o'ngda – space-between.

```html
<header class="top">
  <b>KUN.UZ</b>
  <nav><a href="#">O'zbekiston</a><a href="#">Jahon</a><a href="#">Sport</a></nav>
</header>
```

```css
.top { display: flex; justify-content: space-between; align-items: center;
  padding: 14px 20px; background: #1d3557; color: white; font-family: sans-serif; }
nav { display: flex; gap: 16px; }
nav a { color: white; text-decoration: none; }
```

### Amaliy ish: Flexible puppy
Flexbox Froggy o'yinining 1–10 bosqichlari, keyin 3 ta kuchukcha kartasini flex bilan tering.

1. flexboxfroggy.com – 10 bosqich
2. 3 ta karta – div.card
3. Ota-onaga display: flex
4. justify-content'ning 5 xil qiymatini sinang

Boshlang'ich kod (HTML):
```html
<div class="wrap">
  <div class="card">🐶</div>
  <div class="card">🐕</div>
  <div class="card">🐩</div>
</div>
```

Boshlang'ich kod (CSS):
```css
.wrap {
  display: flex;
  justify-content: space-around;
  background: #eef;
  padding: 20px;
}
.card {
  font-size: 60px;
  background: white;
  padding: 20px;
  border-radius: 12px;
}
```

### AI yordamchi: Flex o'yini
> Menga display:flex va justify-content'ni o'rganish uchun 5 ta kichik mashq topshirig'ini ber (javobsiz).

### Uy vazifasi
Apple Watch website: header (logo + menyu) va 3 ta mahsulot kartasi flex bilan.

### Mini test
1. Flex qaysi elementga yoziladi?
   - **Ota-onaga (konteyner)** ✓
   - Har bir bolaga
   - body'ga faqat
   - img'ga
2. Chetlarga yopishtirib, orasini teng bo'lish:
   - **space-between** ✓
   - center
   - flex-end
   - stretch
3. Gorizontal joylash:
   - **justify-content** ✓
   - align-items
   - flex-wrap
   - text-align

### Havolalar
- [Flexbox Froggy](https://flexboxfroggy.com/#uz)

---

## 32-dars. align-items, flex-direction, flex-wrap, gap

**Modul:** 4. Flexbox va formalar · **Mavzular:** align-items, flex-direction, flex-wrap, gap, Flex xatolari

### Maqsadlar
- Vertikal joylash (align-items) ni biladi
- flex-wrap bilan elementlarni keyingi qatorga o'tkazadi
- gap bilan oraliq beradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: align-items, flex-direction, flex-wrap |
| 15–35 | Amaliy ish: Vegetable Cards |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Flex xatolari.** 1) Flex ichida width yaxshi ishlamaydi – elementlar siqiladi. 2) Elementlar ko'payib ketsa konteynerdan chiqib ketadi. Yechim: flex-wrap: wrap va width'ni % da berish.

```html
<div class="row">
  <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>
</div>
```

```css
.row { display: flex; flex-wrap: wrap; gap: 12px; background: #f1f3f5; padding: 12px; }
.row div { width: 30%; padding: 20px; background: #74c0fc; text-align: center; font-size: 24px; border-radius: 8px; }
```

**Markazga qo'yish (eng mashhur trik).** justify-content: center + align-items: center = ideal markaz.

```html
<div class="center"><div class="ball"></div></div>
```

```css
.center { display: flex; justify-content: center; align-items: center; height: 200px; background: #212529; }
.ball { width: 60px; height: 60px; border-radius: 50%; background: #fcc419; }
```

### Amaliy ish: Vegetable Cards
8 ta sabzavot kartasi: rasm, nom, narx, tugma.

1. Konteyner: flex, wrap, gap: 20px
2. Karta: width 23% (4 tadan)
3. Karta ichida ham flex-direction: column
4. Rasm: max-width: 100%

### AI yordamchi: Tushuntirish
> justify-content va align-items farqini flex-direction: row va column holatlarida chizma (ASCII) bilan tushuntir.

### Uy vazifasi
Apple Watch website yoki Customer Cards sahifasini flex bilan tugating.

### Mini test
1. Vertikal joylash:
   - **align-items** ✓
   - justify-content
   - vertical
   - flex-y
2. Keyingi qatorga o'tkazish:
   - **flex-wrap: wrap** ✓
   - flex-next
   - overflow: line
   - break: yes
3. Ustun ko'rinishida terish:
   - **flex-direction: column** ✓
   - flex: vertical
   - direction: down
   - column: 1

---

## 33-dars. Kvadrat ichida doira va Customer Cards

**Modul:** 4. Flexbox va formalar · **Mavzular:** Ichma-ich flex, Markazlash, Kartalar

### Maqsadlar
- Ichma-ich flex konteynerlardan foydalanadi
- Geometrik shakllarni markazlaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Ichma-ich flex, Markazlash, Kartalar |
| 15–35 | Amaliy ish: Circle in Square + Customer Cards |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Circle in Square.** Kvadrat → ichida doira → ichida kichik kvadrat. Har biri flex bilan markazda.

```html
<div class="sq"><div class="ci"><div class="dot"></div></div></div>
```

```css
.sq, .ci { display: flex; justify-content: center; align-items: center; }
.sq { width: 220px; height: 220px; background: #5f3dc4; margin: 10px auto; }
.ci { width: 160px; height: 160px; border-radius: 50%; background: #e599f7; }
.dot { width: 60px; height: 60px; background: #fff; transform: rotate(45deg); }
```

### Amaliy ish: Circle in Square + Customer Cards
Avval shakllar, keyin mijozlar fikri kartalari.

1. 3 qatlamli shakl
2. 3 ta mijoz kartasi: rasm (doira), ism, fikr, yulduzlar
3. Kartalar flex + gap
4. Hover'da karta biroz ko'tariladi (translateY)

### AI yordamchi: Dizayn g'oyasi
> Mijoz fikri (testimonial) kartasi uchun 3 xil zamonaviy dizayn g'oyasini tasvirla.

### Uy vazifasi
Customer Cards sahifasini ranglar va shriftlar bilan bezang.

### Mini test
1. Ichma-ich flex mumkinmi?
   - **Ha** ✓
   - Yo'q
   - Faqat 2 qavat
   - Faqat JavaScript bilan
2. Karta ko'tarilishi:
   - **transform: translateY(-10px)** ✓
   - margin-top: up
   - lift: 10
   - top: -10
3. Olmos shakli:
   - **rotate(45deg)** ✓
   - skew(90deg)
   - scale(-1)
   - rotate(0)

---

## 34-dars. Company description sahifasi

**Modul:** 4. Flexbox va formalar · **Mavzular:** Header, Hero, Xizmatlar bloki, Flex takrorlash

### Maqsadlar
- To'liq sahifani bloklarga ajratib quradi
- Har bir blokda mos flex joylashuvni tanlaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Header, Hero, Xizmatlar bloki |
| 15–35 | Amaliy ish: Company description |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Sahifa bloklari.** Header → Hero (katta sarlavha + tugma + rasm) → Xizmatlar (3 karta) → Jamoa → Footer. Har biri alohida section va .container ichida.

```html
<section class="hero">
  <div class="text">
    <h1>Biz sayt quramiz</h1>
    <p>PS Termiz jamoasi – tez va chiroyli.</p>
    <button>Bog'lanish</button>
  </div>
  <img src="https://picsum.photos/id/180/300/220" alt="Noutbuk">
</section>
```

```css
.hero { display: flex; align-items: center; justify-content: space-between; gap: 20px;
  padding: 30px; background: #e7f5ff; font-family: sans-serif; flex-wrap: wrap; }
.hero h1 { font-size: 36px; color: #1864ab; }
.hero button { padding: 12px 28px; border: 0; border-radius: 8px; background: #1c7ed6; color: #fff; }
.hero img { max-width: 100%; border-radius: 12px; }
```

**.container.** Kontentni markazda ushlab turuvchi quti.

```css
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}
```

### Amaliy ish: Company description
Kompaniya haqida bir sahifali sayt.

1. .container yarating
2. Header va Hero
3. 3 ta xizmat kartasi
4. Footer: 3 ustun

### AI yordamchi: Matn yozdirish
> IT kompaniya sayti uchun Hero sarlavhasi (5 so'z), qisqa tavsif (15 so'z) va 3 ta xizmat nomini yozib ber.

### Uy vazifasi
Sahifani oxiriga yetkazing va 1 ta yangi bo'lim qo'shing (FAQ yoki Narxlar).

### Mini test
1. .container vazifasi:
   - **Kontentni markazda ushlash** ✓
   - Rang berish
   - Animatsiya
   - Havola
2. Hero bo'limi odatda:
   - **Sahifa boshidagi katta blok** ✓
   - Footer
   - Menyu
   - Forma
3. margin: 0 auto nima qiladi?
   - **Gorizontal markazlaydi** ✓
   - Vertikal markazlaydi
   - O'chiradi
   - Kattalashtiradi

---

## 35-dars. Restoran menyusi flex bilan

**Modul:** 4. Flexbox va formalar · **Mavzular:** flex: 1, Kartalar setkasi, Rasm + matn

### Maqsadlar
- Taom kartalarini flex bilan setka qiladi
- Rasm va matnni yonma-yon joylaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: flex: 1, Kartalar setkasi, Rasm + matn |
| 15–35 | Amaliy ish: Restaurant menu (flex) |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Rasm yonida matn.** Kichik rasm chapda, nom va narx o'ngda.

```html
<div class="dish">
  <img src="https://picsum.photos/id/292/120/120" alt="Taom">
  <div class="info"><h4>Tandir go'sht</h4><p>Surxon uslubida</p></div>
  <b>60 000</b>
</div>
```

```css
.dish { display: flex; align-items: center; gap: 14px; padding: 12px; border-bottom: 1px solid #ddd; font-family: sans-serif; }
.dish img { width: 70px; height: 70px; object-fit: cover; border-radius: 50%; }
.info { flex: 1; }
.info h4, .info p { margin: 0; }
b { color: #e8590c; }
```

### Amaliy ish: Restaurant menu (flex)
30-darsdagi menyuni flex yordamida qayta quring.

1. Har taom – .dish qatori
2. Bo'limlar 2 ustunda (flex, wrap)
3. flex: 1 bilan matnni cho'zing
4. Narxni o'ngga suring

### AI yordamchi: Kod sharhi
> Quyidagi CSS'da flex: 1 nima qilyapti, oddiy tilda tushuntir: .info { flex: 1; }

### Uy vazifasi
Lazzat food menu: kamida 12 taomli, rasmli menyu.

### Mini test
1. Bo'sh joyni egallash:
   - **flex: 1** ✓
   - width: all
   - grow: yes
   - fill
2. Rasm qirqilib, cho'zilmasin:
   - **object-fit: cover** ✓
   - fit: yes
   - image: crop
   - resize
3. Elementlar orasidagi masofa:
   - **gap** ✓
   - space
   - between
   - margin-auto

---

## 36-dars. Font Awesome ikonlari

**Modul:** 4. Flexbox va formalar · **Mavzular:** Font Awesome, CDN, Ijtimoiy tarmoq ikonlari

### Maqsadlar
- Font Awesome'ni CDN orqali ulaydi
- Ikonlarga rang va o'lcham beradi
- Ijtimoiy tarmoqlar panelini yasaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Font Awesome, CDN, Ijtimoiy tarmoq ikonlari |
| 15–35 | Amaliy ish: Reabilitatsiya markazi sahifasi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Ulash.** head ichiga CDN havolasini qo'yamiz. Keyin <i class='fa-solid fa-house'></i> ko'rinishida ishlatamiz.

```html
<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<i class="fa-solid fa-house"></i>
<i class="fa-brands fa-telegram"></i>
<i class="fa-brands fa-instagram"></i>
```

**Ikon – bu matn.** Ikonlar shrift sifatida ishlaydi, shuning uchun color va font-size bilan boshqariladi. Ikonlarni fontawesome.com saytidan qidiring.

### Amaliy ish: Reabilitatsiya markazi sahifasi
Ikonlar bilan xizmatlar bloki (namuna: chingizpro.github.io/himoyachi/help.html).

1. Font Awesome ulang
2. 4 ta xizmat: ikon + sarlavha + matn
3. Ikon – dumaloq fon ichida
4. Footer'da ijtimoiy tarmoq ikonlari

### AI yordamchi: Ikon tanlash
> Maktab sayti uchun 'Dars jadvali', 'O'qituvchilar', 'Yangiliklar', 'Aloqa' bo'limlariga mos Font Awesome ikon nomlarini tavsiya qil.

### Uy vazifasi
Ikonlar bilan mustaqil dizayn: o'zingiz o'ylab topgan 'Xizmatlar' bo'limi.

### Mini test
1. Ikon rangini o'zgartirish:
   - **color** ✓
   - background
   - icon-color
   - fill
2. Telegram ikoni qaysi to'plamda?
   - **fa-brands** ✓
   - fa-solid
   - fa-regular
   - fa-social
3. Ikon o'lchami:
   - **font-size** ✓
   - width
   - icon-size
   - scale-only

### Havolalar
- [Font Awesome](https://fontawesome.com/icons)
- [Namuna](https://chingizpro.github.io/himoyachi/help.html)

---

## 37-dars. Formalar: form, label, input, button

**Modul:** 4. Flexbox va formalar · **Mavzular:** form, label, input, for / id, submit / reset

### Maqsadlar
- Forma yaratadi va ma'lumot yuboradi
- label'ni input bilan for/id orqali bog'laydi
- input turlarini biladi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: form, label, input |
| 15–35 | Amaliy ish: Kursga yozilish formasi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Oddiy forma.** action – ma'lumot qayerga ketadi (mashq uchun echo.htmlacademy.ru). label bosilganda input faollashadi.

```html
<form action="https://echo.htmlacademy.ru" method="post">
  <label for="ism">Ismingiz:</label>
  <input id="ism" name="ism" type="text" placeholder="Ali" required>
  <br><br>
  <label for="yosh">Yoshingiz:</label>
  <input id="yosh" name="yosh" type="number" min="7" max="18">
  <br><br>
  <label><input type="checkbox" name="rozi"> Qoidalarga roziman</label>
  <br><br>
  <button type="submit">Yuborish</button>
  <button type="reset">Tozalash</button>
</form>
```

**input turlari.** text, password, email, number, date, color, checkbox, radio, file, range. Har birini sinab ko'ring!

```html
<input type="color"> <input type="date"> <input type="range"> <input type="email" placeholder="email">
```

### Amaliy ish: Kursga yozilish formasi
Ism, familiya, telefon, email, yosh va kurs tanlash formasi.

1. Har input – label bilan
2. required atributi
3. Submit va reset tugmalari
4. echo.htmlacademy.ru'ga yuborib, natijani ko'ring

### AI yordamchi: Forma rejasi
> Maktab kutubxonasiga kitob buyurtma qilish formasi uchun qaysi maydonlar kerak? Har biriga mos input turini ayt.

### Uy vazifasi
9k developers: dasturchilar jamoasiga ariza formasi (dizayn bilan).

### Mini test
1. label va input bog'lash:
   - **for va id** ✓
   - name va class
   - href va src
   - type va value
2. Majburiy maydon:
   - **required** ✓
   - must
   - important
   - need
3. Parol maydoni:
   - **type='password'** ✓
   - type='secret'
   - type='hidden-text'
   - type='pin'

### Havolalar
- [Echo server](https://echo.htmlacademy.ru)

---

## 38-dars. Formalar 2: select, fieldset, radio va dizayn

**Modul:** 4. Flexbox va formalar · **Mavzular:** select / option, fieldset / legend, radio, Login forma

### Maqsadlar
- Tanlanadigan ro'yxat va radio tugmalar qo'shadi
- Formani fieldset bilan guruhlaydi
- Login formani chiroyli bezaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: select / option, fieldset / legend, radio |
| 15–35 | Amaliy ish: Form Page |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**select, radio, fieldset.** fieldset – ramka, legend – ramka nomi, select – ochiladigan ro'yxat, radio – bittasini tanlash (name bir xil bo'lishi shart).

```html
<fieldset>
  <legend>Kurs tanlash</legend>
  <select name="kurs">
    <option>Frontend</option>
    <option>Python</option>
    <option>Grafik dizayn</option>
  </select>
  <p>Vaqt:</p>
  <label><input type="radio" name="vaqt"> Ertalab</label>
  <label><input type="radio" name="vaqt"> Kechqurun</label>
</fieldset>
```

**Login forma dizayni.** label xatosi: label inline bo'lgani uchun padding/width ishlamaydi – display: block yoki inline-block qiling.

```html
<form class="login">
  <h2>Kirish</h2>
  <label for="u">Login</label>
  <input id="u" type="text">
  <label for="p">Parol</label>
  <input id="p" type="password">
  <button>Kirish</button>
</form>
```

```css
.login { max-width: 300px; margin: 20px auto; padding: 24px; border-radius: 14px;
  box-shadow: 0 8px 30px rgba(0,0,0,.15); font-family: sans-serif; }
.login label { display: block; margin: 10px 0 4px; }
.login input { width: 100%; padding: 10px; border: 1px solid #ced4da; border-radius: 8px; box-sizing: border-box; }
.login button { width: 100%; margin-top: 16px; padding: 12px; border: 0; border-radius: 8px; background: #7048e8; color: #fff; }
```

### Amaliy ish: Form Page
Login (mohirdev namunasi) va ro'yxatdan o'tish formasini yasang.

1. Login forma
2. Ro'yxatdan o'tish: fieldset'lar bilan
3. select va radio
4. focus holatiga uslub: input:focus

### AI yordamchi: UX maslahat
> Bolalar uchun forma dizaynida qaysi 5 ta qoidaga amal qilish kerak? (katta tugmalar, aniq xatolar va h.k.)

### Uy vazifasi
Form Page'ni tugatib, rangli dizayn bering.

### Mini test
1. Radio tugmalar bitta guruh bo'lishi uchun:
   - **name bir xil** ✓
   - id bir xil
   - class bir xil
   - type har xil
2. Ramka nomi:
   - **legend** ✓
   - title
   - caption
   - label
3. Ochiladigan ro'yxat:
   - **select** ✓
   - list
   - dropdown
   - menu

---

## 39-dars. Figma bilan tanishuv

**Modul:** 4. Flexbox va formalar · **Mavzular:** Figma, Inspect, O'lchamlar, Ranglarni olish

### Maqsadlar
- Figma faylini ochib, elementlarni tanlaydi
- O'lcham, rang, shrift ma'lumotini oladi
- Rasmlarni eksport qiladi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Figma, Inspect, O'lchamlar |
| 15–35 | Amaliy ish: Chainsaw page |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Figma nima?.** Figma – dizaynerlar sayt maketini chizadigan dastur. Dasturchi esa maketdan o'lchamlarni olib kod yozadi. Elementni tanlang → o'ng panelda Dev Mode / Inspect: width, height, rang, shrift.

**Maketdan kodga.** 1) Umumiy ko'rish: nechta bo'lim bor. 2) Ranglar va shriftlarni yozib oling. 3) Rasmlarni Export (PNG/SVG). 4) Yuqoridan pastga bo'lim-bo'lim yozing.

```css
/* Figma'dan olingan qiymatlar */
:root {
  --asosiy: #FF6B00;
  --matn: #1E1E1E;
}
h1 { font-family: 'Poppins', sans-serif; font-size: 48px; color: var(--matn); }
```

### Amaliy ish: Chainsaw page
Figma'dagi 'Chainsaw' maketining birinchi ekranini (header + hero) yozing.

1. Figma havolasini oching
2. Ranglar va shriftlarni yozib oling
3. Rasmlarni eksport qiling
4. Header va hero'ni kodlang

### AI yordamchi: Maket tahlili
> Men sayt maketining ekran rasmini yuboraman. Undagi bo'limlarni sanab chiq va har biri uchun qaysi HTML teglarni ishlatishni tavsiya qil.

### Uy vazifasi
SpaceX maketi: header va birinchi ekran.

### Mini test
1. Figma nima uchun?
   - **Dizayn maket chizish** ✓
   - Kod yozish
   - Video montaj
   - O'yin
2. Rasmni saqlab olish:
   - **Export** ✓
   - Print
   - Copy link
   - Delete
3. CSS o'zgaruvchi:
   - **--asosiy** ✓
   - $asosiy
   - @asosiy
   - #asosiy

### Havolalar
- [Figma](https://www.figma.com)

---

## 40-dars. Mini loyiha: Landing sahifa (Figma'dan)

**Modul:** 4. Flexbox va formalar · **Mavzular:** Loyiha, Figma → kod, Flex takrorlash

### Maqsadlar
- Figma maketidan to'liq sahifa yozadi
- 4-modul bilimlarini birlashtiradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Reja va bo'limlarga ajratish |
| 5–38 | Mustaqil ish: sahifa |
| 38–45 | Ko'rik va baholash |

### Tushunchalar
**Ish tartibi.** 1) Karkas (HTML) → 2) Umumiy uslublar (* , body, .container) → 3) Bo'lim-bo'lim CSS → 4) Tekshirish (DevTools) → 5) AI'dan kod sharhini so'rash.

### Amaliy ish: SpaceX landing
Figma'dagi SpaceX maketini to'liq yakunlang.

1. Header va menyu
2. Hero – fon rasm
3. Ma'lumot bloklari – flex
4. Footer

### AI yordamchi: Kod sharhi (code review)
> Mana mening landing sahifam CSS kodi. Takrorlanayotgan qismlarni top va qanday qisqartirish mumkinligini tushuntir (kodni o'zim tuzataman):
> [kod]

### Uy vazifasi
Loyihani tugatib Telegram'ga yuboring. Keyingi darsdan responsive boshlanadi!

### Mini test
1. Ish tartibida birinchi:
   - **HTML karkas** ✓
   - Animatsiya
   - Rang
   - Git
2. Flex elementlar ko'payib chiqib ketsa:
   - **flex-wrap: wrap** ✓
   - overflow: flex
   - display: none
   - width: 0
3. Kontentni markazda ushlash:
   - **.container** ✓
   - .center-all
   - body-mid
   - .wrap-0

### O'qituvchi uchun eslatma
Nazorat darsi (4-modul).

---

# 5-modul. Responsive va Git

Telefon va planshetga moslashuvchi sahifalar, Figma'dan kod, Git va GitHub Pages.

## 41-dars. Responsive dizayn: @media

**Modul:** 5. Responsive va Git · **Mavzular:** Responsive, @media, max-width, DevTools device mode

### Maqsadlar
- Responsive nima ekanini tushunadi
- @media (max-width) bilan telefon uchun alohida uslub yozadi
- DevTools'da telefon ko'rinishini tekshiradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Responsive, @media, max-width |
| 15–35 | Amaliy ish: Strawberry fruit flex |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Nega kerak?.** Odamlarning ko'pchiligi saytni telefonda ochadi. Sahifa katta ekranda 3 ustun, planshetda 2, telefonda 1 ustun bo'lishi kerak. Laboratoriyada ekran kengligini o'zgartirib ko'ring.

> 🔬 Platformadagi laboratoriya: *responsive*

**@media.** Shart: ekran kengligi berilgan qiymatdan kichik bo'lsa – ichidagi uslublar ishlaydi.

```html
<div class="cards"><div>1</div><div>2</div><div>3</div></div>
<p>Brauzer oynasini toraytiring!</p>
```

```css
.cards { display: flex; gap: 10px; }
.cards div { flex: 1; padding: 30px; background: #63e6be; font-size: 28px; text-align: center; }

@media (max-width: 600px) {
  .cards { flex-direction: column; }
  .cards div { background: #ffa94d; }
}
```

**Asosiy nuqtalar.** 1250px – kichik noutbuk, 992px – planshet (gorizontal), 768px – planshet, 576px – telefon. DevTools → Ctrl+Shift+M – qurilma rejimi.

### Amaliy ish: Strawberry fruit flex
Qulupnay haqidagi sahifa: kompyuterda 2 ustun, telefonda 1 ustun.

1. Hero: matn + rasm (flex)
2. @media (max-width: 768px) – column
3. Shrift o'lchamini kichraytiring
4. DevTools'da 3 xil qurilmada tekshiring

### AI yordamchi: Responsive tekshiruv
> Mana mening CSS kodim. Telefonda (375px) qaysi joylar buzilishi mumkin? @media bilan tuzatish yo'lini tushuntir:
> [kod]

### Uy vazifasi
Strawberry sahifasini to'liq responsive qiling va responsive haqidagi videoni ko'ring.

### Mini test
1. Telefon uchun uslub:
   - **@media (max-width: 576px)** ✓
   - @phone
   - @screen small
   - media: phone
2. DevTools qurilma rejimi:
   - **Ctrl+Shift+M** ✓
   - Ctrl+M
   - F5
   - Alt+D
3. Responsive sahifa uchun head'da:
   - **meta viewport** ✓
   - meta charset
   - title
   - link icon

---

## 42-dars. Responsive amaliyot: galereya va gap

**Modul:** 5. Responsive va Git · **Mavzular:** gap, row-gap, column-gap, % o'lchamlar

### Maqsadlar
- Rasmlar galereyasini responsive qiladi
- row-gap va column-gap'ni alohida beradi
- max-width va % bilan moslashuvchan o'lcham beradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: gap, row-gap, column-gap |
| 15–35 | Amaliy ish: Coast image |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Moslashuvchan galereya.** flex-basis va min-width bilan elementlar o'zi qatorga moslashadi.

```html
<div class="gal">
  <img src="https://picsum.photos/id/10/300/200" alt="O'rmon">
  <img src="https://picsum.photos/id/11/300/200" alt="Dala">
  <img src="https://picsum.photos/id/12/300/200" alt="Qirg'oq">
  <img src="https://picsum.photos/id/13/300/200" alt="Dengiz">
</div>
```

```css
.gal { display: flex; flex-wrap: wrap; row-gap: 10px; column-gap: 10px; }
.gal img { flex: 1 1 200px; max-width: 100%; border-radius: 10px; }
```

### Amaliy ish: Coast image
Dengiz qirg'og'i mavzusidagi galereya sahifa.

1. Hero – fon rasm
2. 8 ta rasmli galereya
3. Katta ekranda 4, planshetda 2, telefonda 1 ustun
4. Rasm hover'da kattalashadi

### AI yordamchi: Alt matnlar
> Galereyadagi 8 ta dengiz manzarasi rasmi uchun qisqa va aniq alt matnlar yozib ber.

### Uy vazifasi
O'z shahringiz haqida responsive galereya.

### Mini test
1. Qatorlar orasidagi masofa:
   - **row-gap** ✓
   - line-gap
   - top-gap
   - margin-row
2. flex: 1 1 200px'dagi 200px:
   - **Boshlang'ich o'lcham** ✓
   - Maksimal balandlik
   - Padding
   - Margin
3. Rasm konteynerdan chiqmasin:
   - **max-width: 100%** ✓
   - width: 200%
   - float: left
   - min-width: 900px

---

## 43-dars. Responsive sahifa: Truck

**Modul:** 5. Responsive va Git · **Mavzular:** Header responsive, Burger menyu g'oyasi, Ustunlarni almashish

### Maqsadlar
- Menyuni telefonda ustunga aylantiradi
- Bo'limlarni turli ekranlarga moslaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Header responsive, Burger menyu g'oyasi, Ustunlarni almashish |
| 15–35 | Amaliy ish: Truck (yuk tashish) sahifasi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Telefonda menyu.** Katta ekranda gorizontal, kichikda vertikal.

```html
<header class="h">
  <b>TRUCK</b>
  <nav><a href="#">Xizmatlar</a><a href="#">Narxlar</a><a href="#">Aloqa</a></nav>
</header>
```

```css
.h { display: flex; justify-content: space-between; align-items: center; padding: 14px; background: #343a40; color: #fff; font-family: sans-serif; }
.h nav { display: flex; gap: 14px; }
.h a { color: #ffd43b; text-decoration: none; }
@media (max-width: 500px) {
  .h { flex-direction: column; gap: 10px; }
}
```

### Amaliy ish: Truck (yuk tashish) sahifasi
Yuk tashish kompaniyasi landing sahifasi, to'liq responsive.

1. Header
2. Hero – mashina rasmi va matn
3. Xizmatlar – 3 karta
4. 3 ta @media nuqtasi

### AI yordamchi: Burger menyu
> Burger menyu nima va u qanday ishlaydi? Hozircha JavaScript'siz, faqat g'oyasini bolalarga tushuntir.

### Uy vazifasi
Truck sahifasini tugating.

### Mini test
1. Menyu telefonda ustun bo'lishi uchun:
   - **flex-direction: column** ✓
   - display: grid-only
   - nav: vertical
   - float: none
2. @media ichida nima yoziladi?
   - **Oddiy CSS qoidalari** ✓
   - HTML
   - JavaScript
   - Rasm
3. Nechta @media bo'lishi mumkin?
   - **Istalgancha** ✓
   - Faqat 1
   - Faqat 2
   - Faqat 3

---

## 44-dars. Canvix va Organic footer

**Modul:** 5. Responsive va Git · **Mavzular:** Footer, Ko'p ustunli bloklar, Ikonlar

### Maqsadlar
- Ko'p ustunli footer yasaydi
- Footer'ni telefonda ustunlarga ajratadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Footer, Ko'p ustunli bloklar, Ikonlar |
| 15–35 | Amaliy ish: Canvix sahifasi + Organic footer |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Footer tuzilmasi.** Logo + qisqa matn, havolalar ustunlari, ijtimoiy tarmoqlar, pastda © qator.

```html
<footer class="f">
  <div><b>Organic</b><p>Toza mahsulotlar</p></div>
  <div><b>Menyu</b><p>Asosiy<br>Do'kon<br>Aloqa</p></div>
  <div><b>Aloqa</b><p>Termiz sh.<br>+998 90 000 00 00</p></div>
</footer>
```

```css
.f { display: flex; flex-wrap: wrap; gap: 30px; justify-content: space-between;
  padding: 30px; background: #2b8a3e; color: #ebfbee; font-family: sans-serif; }
.f div { flex: 1 1 150px; }
.f p { opacity: .85; line-height: 1.7; }
```

### Amaliy ish: Canvix sahifasi + Organic footer
Canvix (dizayn studiyasi) sahifasi va organik do'kon footeri.

1. Canvix hero va xizmatlar
2. 4 ustunli footer
3. Font Awesome ikonlar
4. Telefonda 1 ustun

### AI yordamchi: Footer matni
> Organik mahsulotlar do'koni footer'i uchun bo'limlar va havolalar ro'yxatini tuzib ber.

### Uy vazifasi
O'z portfoliongizga responsive footer qo'shing.

### Mini test
1. © belgisi HTML'da:
   - **&copy;** ✓
   - &c;
   - (c)tag
   - &copyright
2. Ustunlar teng bo'lishi uchun:
   - **flex: 1** ✓
   - width: auto
   - float: all
   - gap: 1
3. Footer semantik tegi:
   - **footer** ✓
   - bottom
   - end
   - foot

---

## 45-dars. Kun.uz sahifasini responsive yasash

**Modul:** 5. Responsive va Git · **Mavzular:** Real sayt klon, Yangiliklar setkasi, Responsive

### Maqsadlar
- Real sayt bosh sahifasini soddalashtirib takrorlaydi
- 3 xil ekran uchun moslaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Real sayt klon, Yangiliklar setkasi, Responsive |
| 15–35 | Amaliy ish: Kun.uz page responsive |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Yangilik kartasi.** Rasm, rubrika, sarlavha, vaqt.

```html
<article class="news">
  <img src="https://picsum.photos/id/1067/400/220" alt="Shahar ko'chasi">
  <span>O'zbekiston</span>
  <h3>Termizda yangi ko'prik qurilmoqda</h3>
  <time>14:20</time>
</article>
```

```css
.news { max-width: 300px; font-family: sans-serif; }
.news img { width: 100%; border-radius: 8px; vertical-align: middle; }
.news span { display: inline-block; margin-top: 8px; color: #1c7ed6; font-size: 13px; font-weight: bold; }
.news h3 { margin: 6px 0; font-size: 18px; }
.news time { color: #868e96; font-size: 13px; }
```

### Amaliy ish: Kun.uz page responsive
Kun.uz bosh sahifasining soddalashtirilgan nusxasi.

1. Header va rubrikalar menyusi
2. Asosiy yangilik (katta) + yon ro'yxat
3. Yangiliklar setkasi (4 → 2 → 1)
4. Footer

### AI yordamchi: Tahlil
> Yangiliklar sayti bosh sahifasi telefonda qanday tartibda ko'rsatilishi kerak? Eng muhimidan boshlab ro'yxat qil.

### Uy vazifasi
Restaurant-Website (Figma): birinchi 2 bo'lim.

### Mini test
1. Vaqt uchun semantik teg:
   - **time** ✓
   - clock
   - date
   - span-time
2. Yangilik uchun teg:
   - **article** ✓
   - news
   - post
   - div-news
3. 4 → 2 → 1 ustun uchun nechta @media kerak?
   - **2** ✓
   - 0
   - 5
   - 10

### Havolalar
- [kun.uz](https://kun.uz)

---

## 46-dars. Git va GitHub

**Modul:** 5. Responsive va Git · **Mavzular:** Git, GitHub, init, add, commit, push

### Maqsadlar
- Git nima uchun kerakligini tushunadi (vaqt mashinasi)
- Asosiy buyruqlarni ketma-ket bajaradi
- Loyihani GitHub'ga yuklaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Git, GitHub, init, add, commit, push |
| 15–35 | Amaliy ish: Birinchi repozitoriy |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Git – vaqt mashinasi.** Git har bir 'commit'ni saqlab qo'yadi – xohlagan paytda eski holatga qaytish mumkin. GitHub – loyihalar saqlanadigan internetdagi joy. Laboratoriyadagi simulyatorda buyruqlarni sinab ko'ring.

> 🔬 Platformadagi laboratoriya: *git*

**Buyruqlar.** Terminalda (VS Code → Ctrl+`) ketma-ket yoziladi.

```bash
git --version                      # versiyani bilish
git config --global user.name "github_login"
git config --global user.email "email@example.com"
git init                           # papkani git'ga ulash
git add .                          # hamma o'zgarishlarni tayyorlash
git commit -m "Birinchi commit"    # saqlash
git remote add origin https://github.com/login/repo.git
git push -u origin main            # GitHub'ga yuborish
```

### Amaliy ish: Birinchi repozitoriy
Portfolio papkangizni GitHub'ga yuklang.

1. github.com'da hisob oching (ota-ona roziligi bilan)
2. Git o'rnating, git --version
3. Laboratoriyada buyruqlarni mashq qiling
4. Yangi repo → buyruqlar → push

### AI yordamchi: Xato xabari
> git push qilganimda 'error: failed to push some refs' chiqdi. Bu nimani anglatadi va nima qilishim kerak? Oddiy tilda.

### Uy vazifasi
Figma'dan qilgan ishingizni GitHub'ga yuklang.

### Mini test
1. O'zgarishlarni saqlash:
   - **git commit -m '...'** ✓
   - git save
   - git store
   - git keep
2. GitHub'ga yuborish:
   - **git push** ✓
   - git send
   - git upload
   - git go
3. Papkani git'ga ulash:
   - **git init** ✓
   - git start
   - git new
   - git open

### Havolalar
- [GitHub](https://github.com)
- [Git](https://git-scm.com)

---

## 47-dars. GitHub Pages: saytni internetga chiqarish

**Modul:** 5. Responsive va Git · **Mavzular:** GitHub Pages, README, Havola ulashish

### Maqsadlar
- Saytni GitHub Pages orqali bepul internetga chiqaradi
- README.md yozadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: GitHub Pages, README, Havola ulashish |
| 15–35 | Amaliy ish: Sayt jonli! |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**GitHub Pages.** Repo → Settings → Pages → Branch: main → Save. 1–2 daqiqadan so'ng sayt login.github.io/repo manzilida ochiladi. Muhim: bosh fayl nomi index.html bo'lishi kerak!

**README.md.** Loyiha haqida ma'lumot. Markdown tilida yoziladi.

```markdown
# Mening portfoliom

HTML va CSS'da yozilgan shaxsiy sahifa.

## Ko'rish
https://login.github.io/portfolio

## Texnologiyalar
- HTML
- CSS
```

### Amaliy ish: Sayt jonli!
Portfolio'ni GitHub Pages'ga chiqarib, havolani guruhga yuboring.

1. Settings → Pages
2. index.html borligini tekshiring
3. README.md yozing
4. Havolani telefonda oching

### AI yordamchi: README yozish
> Mening portfolio loyiham uchun chiroyli README.md yozib ber: tavsif, texnologiyalar, qanday ochish. Loyiha: [qisqacha]

### Uy vazifasi
2 ta ishingizni GitHub Pages'ga chiqaring.

### Mini test
1. Bosh fayl nomi:
   - **index.html** ✓
   - main.html
   - home.html
   - start.html
2. README qaysi tilda?
   - **Markdown** ✓
   - Python
   - CSS
   - Java
3. Pages sozlamasi qayerda?
   - **Settings → Pages** ✓
   - Code → Pages
   - Issues
   - Profile

---

## 48-dars. Figma'dan loyiha: Restaurant Website

**Modul:** 5. Responsive va Git · **Mavzular:** Loyiha, Responsive, GitHub Pages

### Maqsadlar
- Figma maketidan to'liq responsive sahifa yozadi va internetga chiqaradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Maketni tahlil qilish |
| 5–38 | Mustaqil ish |
| 38–45 | GitHub'ga push va ko'rik |

### Tushunchalar
**Tekshiruv ro'yxati.** ✓ semantik teglar ✓ alt matnlar ✓ .container ✓ 3 ta @media ✓ hover effektlar ✓ GitHub Pages havolasi.

### Amaliy ish: Restaurant-Website
Figma'dagi restoran maketini yakunlang.

1. Qolgan bo'limlar
2. Responsive
3. git add / commit / push
4. Pages havolasi

### AI yordamchi: Yakuniy tekshiruv
> Sahifamdagi responsive xatolarni topish uchun menga tekshiruv ro'yxati (checklist) tuzib ber.

### Uy vazifasi
Loyihani tugatib havolani yuboring.

### Mini test
1. Responsive tekshirish:
   - **DevTools device mode** ✓
   - Ctrl+P
   - Word
   - Paint
2. Saytni internetga chiqarish:
   - **GitHub Pages** ✓
   - Telegram
   - Excel
   - WinRAR
3. Rasmlar uchun majburiy:
   - **alt** ✓
   - id
   - title
   - name

### O'qituvchi uchun eslatma
Nazorat darsi (5-modul).

---

# 6-modul. Position, animatsiya va Sass

position, z-index, ::before/::after, @keyframes, AOS va Sass.

## 49-dars. position: relative va absolute, z-index

**Modul:** 6. Position, animatsiya va Sass · **Mavzular:** position, relative, absolute, top/left, z-index

### Maqsadlar
- relative va absolute farqini tushunadi
- Elementni ota-onaga nisbatan joylaydi
- z-index bilan qatlamlarni boshqaradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: position, relative, absolute |
| 15–35 | Amaliy ish: Rasm ustidagi yozuvlar |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**relative + absolute.** Ota-onaga relative, bolaga absolute – bola ota-ona ichida istalgan burchakka joylashadi. Laboratoriyada sinang!

> 🔬 Platformadagi laboratoriya: *position*

**Badge (belgi).** Rasm burchagidagi 'Yangi' yozuvi.

```html
<div class="card">
  <img src="https://picsum.photos/id/96/260/160" alt="Mahsulot">
  <span class="badge">YANGI</span>
</div>
```

```css
.card { position: relative; width: 260px; }
.card img { width: 100%; border-radius: 10px; vertical-align: middle; }
.badge { position: absolute; top: 10px; right: 10px; z-index: 2;
  background: #f03e3e; color: #fff; padding: 4px 10px; border-radius: 20px; font: bold 12px sans-serif; }
```

### Amaliy ish: Rasm ustidagi yozuvlar
Mahsulot kartalari: chegirma belgisi, yurakcha tugmasi, pastki narx paneli.

1. Karta – relative
2. Chegirma – absolute, top-left
3. Yurakcha – top-right
4. Narx paneli – bottom: 0, width: 100%

### AI yordamchi: Tushuntirish
> position: relative va absolute'ni 'xona va xonadagi mebel' misolida tushuntir.

### Uy vazifasi
Swiper ko'rinishidagi slayder kartasi (strelkalar absolute).

### Mini test
1. absolute kimga nisbatan joylashadi?
   - **Eng yaqin relative ota-onaga** ✓
   - Doim ekranga
   - Qo'shni elementga
   - Rasmga
2. Ustma-ust qatlam tartibi:
   - **z-index** ✓
   - layer
   - order
   - top-index
3. relative element o'z joyidan...
   - **Siljisa ham joyi saqlanadi** ✓
   - Yo'qoladi
   - Ekranga yopishadi
   - Kattalashadi

---

## 50-dars. position: fixed va sticky

**Modul:** 6. Position, animatsiya va Sass · **Mavzular:** fixed, sticky, Yuqoriga qaytish tugmasi

### Maqsadlar
- fixed element ekranga yopishishini tushunadi
- sticky menyu yasaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: fixed, sticky, Yuqoriga qaytish tugmasi |
| 15–35 | Amaliy ish: Position Langs |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**sticky header.** Scroll qilganda menyu yuqorida yopishib qoladi.

```html
<header>Sticky menyu</header>
<p>Pastga scroll qiling...</p><p style="height:600px">Uzun kontent</p>
```

```css
header { position: sticky; top: 0; padding: 14px; background: #4263eb; color: #fff; font-family: sans-serif; }
```

**fixed tugma.** Ekranning pastki o'ng burchagida doim turadigan tugma.

```html
<a class="up" href="#">↑</a><p style="height:500px">Kontent</p>
```

```css
.up { position: fixed; right: 16px; bottom: 16px; width: 48px; height: 48px;
  display: grid; place-items: center; border-radius: 50%;
  background: #12b886; color: #fff; font-size: 22px; text-decoration: none; }
```

### Amaliy ish: Position Langs
Til tanlash paneli: sticky header, bayroqli tillar ro'yxati absolute ochiladi, fixed chat tugmasi.

1. Sticky header
2. Til tugmasi hover'da ro'yxat ochiladi (absolute)
3. Fixed 'Yordam' tugmasi
4. z-index to'g'ri tartibda

### AI yordamchi: Qachon qaysi?
> static, relative, absolute, fixed, sticky – har biri qachon ishlatiladi? Real saytlardan misol keltir.

### Uy vazifasi
Position: aylantirilgan so'z (rotated word) va yashirin forma (hover'da chiqadi).

### Mini test
1. Scroll'da ham ekranda qoladi:
   - **fixed** ✓
   - static
   - relative
   - inline
2. Ma'lum joyga yetganda yopishadi:
   - **sticky** ✓
   - fixed
   - absolute
   - float
3. sticky ishlashi uchun kerak:
   - **top: 0** ✓
   - z-index: 0
   - width: 100%
   - display: none

---

## 51-dars. overflow, flex-grow va flex-shrink

**Modul:** 6. Position, animatsiya va Sass · **Mavzular:** overflow, flex-grow, flex-shrink, order

### Maqsadlar
- Sig'magan kontentni overflow bilan boshqaradi
- flex-grow/shrink bilan o'sish va qisqarishni sozlaydi
- order bilan tartibni o'zgartiradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: overflow, flex-grow, flex-shrink |
| 15–35 | Amaliy ish: Step by step hover |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**overflow.** visible – chiqib turadi, hidden – yashiradi, auto – kerak bo'lsa scroll.

```html
<div class="b h">hidden: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptates. Lorem ipsum dolor sit amet.</div>
<div class="b a">auto: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptates. Lorem ipsum dolor sit amet.</div>
```

```css
.b { width: 200px; height: 60px; border: 2px solid #495057; margin: 8px; display: inline-block; vertical-align: top; }
.h { overflow: hidden; }
.a { overflow: auto; }
```

**grow va order.** flex-grow: 2 – boshqalardan 2 baravar ko'p o'sadi. order: -1 – birinchiga chiqadi.

```html
<div class="r"><div>A</div><div class="g">B (grow 2)</div><div class="o">C (order -1)</div></div>
```

```css
.r { display: flex; gap: 6px; }
.r div { flex-grow: 1; padding: 16px; background: #d0bfff; }
.r .g { flex-grow: 2; background: #b197fc; }
.r .o { order: -1; background: #ffc9c9; }
```

### Amaliy ish: Step by step hover
Hover'da kengayadigan panellar (akkordeon rasm galereyasi).

1. 5 ta panel flex ichida
2. Har biri flex-grow: 1
3. Hover'da flex-grow: 4
4. transition + overflow: hidden

### AI yordamchi: Taqqoslash
> flex-grow, flex-shrink va flex-basis'ni pitsa bo'lishish misolida tushuntir.

### Uy vazifasi
Simpsons mediaplayer webpage: pleyer interfeysi (overflow bilan ro'yxat).

### Mini test
1. Kerak bo'lsa scroll:
   - **overflow: auto** ✓
   - overflow: visible
   - scroll: maybe
   - overflow: show
2. Birinchiga chiqarish:
   - **order: -1** ✓
   - order: 100
   - first: true
   - z-index: -1
3. Ko'proq o'sish:
   - **flex-grow: 3** ✓
   - flex-shrink: 3
   - grow: max
   - width: grow

---

## 52-dars. ::before va ::after

**Modul:** 6. Position, animatsiya va Sass · **Mavzular:** Psevdo-elementlar, content, Bezak elementlar

### Maqsadlar
- ::before va ::after bilan qo'shimcha HTML'siz bezak qo'shadi
- content xususiyatini ishlatadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Psevdo-elementlar, content, Bezak elementlar |
| 15–35 | Amaliy ish: Shadow card |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Psevdo-element.** HTML'ga teg qo'shmasdan element oldiga yoki orqasiga 'soxta' element qo'shish. content majburiy (bo'sh bo'lsa ham '').

```html
<h2 class="t">Sarlavha</h2>
<p class="q">Bilim – kuch.</p>
```

```css
.t::after { content: ''; display: block; width: 60px; height: 4px; margin-top: 6px; background: #f76707; border-radius: 4px; }
.q::before { content: '“'; font-size: 40px; color: #adb5bd; vertical-align: -12px; }
.q::after  { content: ' ✔'; color: #37b24d; }
```

**Hover chiziq.** Havola ostidan chiqadigan chiziq.

```html
<a class="lnk" href="#">Ustimga kel</a>
```

```css
.lnk { position: relative; font: 22px sans-serif; color: #1c7ed6; text-decoration: none; }
.lnk::after { content: ''; position: absolute; left: 0; bottom: -4px; width: 0; height: 3px; background: currentColor; transition: .3s; }
.lnk:hover::after { width: 100%; }
```

### Amaliy ish: Shadow card
::before bilan orqasida rangli 'soya-qatlam' bor kartalar.

1. Karta – relative
2. ::before – absolute, inset: 0, gradient fon
3. z-index: -1 va transform: rotate(-3deg)
4. Hover'da rotate(3deg)

### AI yordamchi: Effekt yaratish
> ::before va ::after bilan tugma uchun 2 ta qiziqarli hover effekt yozib ber va har qatorni izohla.

### Uy vazifasi
Shadowcard: 3 xil rangli kartalar.

### Mini test
1. ::after uchun majburiy:
   - **content** ✓
   - width
   - color
   - display
2. Psevdo-element HTML'da ko'rinadimi?
   - **Yo'q, faqat CSS'da** ✓
   - Ha
   - Faqat head'da
   - Faqat JS'da
3. currentColor – bu:
   - **Elementning joriy matn rangi** ✓
   - Qora
   - Tasodifiy rang
   - Fon rangi

---

## 53-dars. Veb sahifada telefon: murakkab joylashuv

**Modul:** 6. Position, animatsiya va Sass · **Mavzular:** position + flex, Mockup, object-fit

### Maqsadlar
- Telefon maketini CSS bilan chizadi
- object-fit bilan rasmni moslaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: position + flex, Mockup, object-fit |
| 15–35 | Amaliy ish: Phone in webpage |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Telefon maketi.** Ramka, ekran, kamera – hammasi div va psevdo-elementlar.

```html
<div class="phone"><img src="https://picsum.photos/id/1036/300/600" alt="Qishki manzara"></div>
```

```css
.phone { position: relative; width: 180px; height: 360px; margin: 10px auto; padding: 12px;
  background: #212529; border-radius: 32px; box-shadow: 0 20px 40px rgba(0,0,0,.35); }
.phone::before { content: ''; position: absolute; top: 18px; left: 50%; transform: translateX(-50%);
  width: 60px; height: 14px; background: #212529; border-radius: 10px; z-index: 1; }
.phone img { width: 100%; height: 100%; object-fit: cover; border-radius: 22px; }
```

### Amaliy ish: Phone in webpage
Ilova reklamasi sahifasi: chapda matn, o'ngda telefon maketi.

1. Telefon maketi
2. Ekranda ilova rasmi (object-fit: cover)
3. Chapda sarlavha va App Store/Play tugmalari
4. Responsive

### AI yordamchi: Ilova g'oyasi
> Maktab o'quvchilari uchun foydali mobil ilova g'oyasini o'ylab top: nomi, 3 ta asosiy funksiyasi va rang palitrasi.

### Uy vazifasi
Telefon ichida kichik 'ilova' interfeysini HTML/CSS bilan chizing.

### Mini test
1. Rasmni qirqib to'ldirish:
   - **object-fit: cover** ✓
   - object-fit: contain
   - fit: cut
   - background: fill
2. Markazlash trigi:
   - **left: 50%; transform: translateX(-50%)** ✓
   - center: all
   - margin: 50%
   - left: center
3. Telefon burchaklari:
   - **border-radius** ✓
   - corner
   - round-edge
   - radius-phone

---

## 54-dars. Creative link effects va :not()

**Modul:** 6. Position, animatsiya va Sass · **Mavzular:** Havola effektlari, :not(:last-child), id.egov.uz tahlili

### Maqsadlar
- Turli havola effektlarini yasaydi
- :not() selektori bilan oxirgi elementdan tashqari hammasiga uslub beradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Havola effektlari, :not(:last-child), id.egov.uz tahlili |
| 15–35 | Amaliy ish: id.egov.uz sahifasi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**:not(:last-child).** Oxirgisidan boshqa hammasiga chiziq qo'yish – ro'yxat ajratgichlari uchun qulay.

```html
<ul class="l"><li>Pasport</li><li>Soliqlar</li><li>Ta'lim</li><li>Sog'liq</li></ul>
```

```css
.l { list-style: none; padding: 0; max-width: 260px; font-family: sans-serif; }
.l li { padding: 12px; }
.l li:not(:last-child) { border-bottom: 1px solid #dee2e6; }
```

**Effektlar to'plami.** tympanus.net CreativeLinkEffects sahifasidagi effektlarni ko'rib, 3 tasini takrorlang: chiziq, qavslar, fon to'ldirish.

### Amaliy ish: id.egov.uz sahifasi
Davlat xizmatlari portali kirish sahifasining soddalashtirilgan nusxasi.

1. Header va logo
2. Kirish usullari kartalari
3. Ro'yxatlarda :not(:last-child)
4. Havolalarga effekt

### AI yordamchi: Selektorlar
> CSS'dagi :first-child, :last-child, :nth-child(odd) va :not() selektorlarini misollar bilan tushuntir.

### Uy vazifasi
id.egov.uz'ning yana 1 sahifasini qiling va ular havola bilan bog'lansin.

### Mini test
1. Oxirgisidan tashqari:
   - **:not(:last-child)** ✓
   - :except(last)
   - :last-not
   - :first-child
2. Birinchi element:
   - **:first-child** ✓
   - :one
   - :start
   - :top
3. Juft elementlar:
   - **:nth-child(even)** ✓
   - :even
   - :two
   - :nth(2)

### Havolalar
- [Creative Link Effects](https://tympanus.net/Development/CreativeLinkEffects/)
- [id.egov.uz](https://id.egov.uz/oz)

---

## 55-dars. CSS animatsiya: @keyframes

**Modul:** 6. Position, animatsiya va Sass · **Mavzular:** @keyframes, animation, animation-play-state

### Maqsadlar
- @keyframes bilan animatsiya yaratadi
- animation xususiyatining qismlarini biladi
- Animatsiyani hover'da to'xtatadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: @keyframes, animation, animation-play-state |
| 15–35 | Amaliy ish: Animations |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**animation qismlari.** animation: shake 0.5s linear 3 alternate forwards; — nom, davomiylik, tezlik egri chizig'i, soni, yo'nalish, oxirgi holat.

> 🔬 Platformadagi laboratoriya: *animation*

**Sakrovchi to'p.** from/to yoki foizlar bilan.

```html
<div class="ball"></div>
```

```css
.ball { width: 60px; height: 60px; border-radius: 50%; background: #fa5252; margin: 20px auto;
  animation: jump 0.6s ease-in-out infinite alternate; }
.ball:hover { animation-play-state: paused; }
@keyframes jump {
  from { transform: translateY(0); }
  to   { transform: translateY(120px); background: #fab005; }
}
```

### Amaliy ish: Animations
5 xil animatsiya: aylanish, pulsatsiya, silkinish, rang almashish, paydo bo'lish.

1. rotate 360° cheksiz
2. scale pulsatsiya
3. shake – 3 marta
4. opacity 0 → 1 fade-in
5. hover'da pause

### AI yordamchi: Animatsiya g'oyasi
> Sayt yuklanayotganda ko'rsatiladigan 3 xil oddiy CSS loader animatsiyasi kodini yoz va har birini izohla.

### Uy vazifasi
Animations: yuklanish (loader) animatsiyasi va sakrovchi matn.

### Mini test
1. Cheksiz takrorlash:
   - **infinite** ✓
   - forever
   - loop
   - always
2. Borib-qaytish:
   - **alternate** ✓
   - reverse-back
   - return
   - yoyo
3. Animatsiyani to'xtatish:
   - **animation-play-state: paused** ✓
   - animation: stop
   - pause: yes
   - animation-off

---

## 56-dars. AOS kutubxonasi va animatsion to'p

**Modul:** 6. Position, animatsiya va Sass · **Mavzular:** AOS, Kutubxona ulash, Scroll animatsiya

### Maqsadlar
- Tashqi kutubxonani CDN orqali ulaydi
- Scroll qilganda paydo bo'ladigan animatsiyalar qo'shadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: AOS, Kutubxona ulash, Scroll animatsiya |
| 15–35 | Amaliy ish: AOS sahifasi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**AOS ulash.** AOS (Animate On Scroll) – element ekranga kirganda animatsiya qiladi.

```html
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css">
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

<div data-aos="fade-up">Pastdan chiqaman</div>
<div data-aos="zoom-in" data-aos-delay="300">Kattalashaman</div>

<script>AOS.init();</script>
```

### Amaliy ish: AOS sahifasi
Namuna: savitarn1.github.io/AOS. O'z portfolioingizga AOS qo'shing.

1. CDN ulash
2. Har bo'limga data-aos
3. delay va duration bilan tajriba
4. Animatsion to'p (keyframes) qo'shing

### AI yordamchi: Kutubxona tanlash
> Veb sahifada animatsiya uchun mashhur 3 ta kutubxonani solishtir: AOS, Animate.css, GSAP. Boshlovchi uchun qaysi biri oson?

### Uy vazifasi
AOS library bilan 1 ta to'liq sahifa.

### Mini test
1. AOS nima qiladi?
   - **Scroll'da animatsiya** ✓
   - Rang tanlaydi
   - Forma yuboradi
   - Rasm siqadi
2. AOS ishga tushirish:
   - **AOS.init()** ✓
   - AOS.start()
   - run(AOS)
   - aos()
3. Kechikish:
   - **data-aos-delay** ✓
   - data-wait
   - aos-time
   - delay-aos

### Havolalar
- [AOS](https://michalsnik.github.io/aos/)
- [Namuna](https://savitarn1.github.io/AOS/)

---

## 57-dars. Chiroyli checkbox: :checked va visually-hidden

**Modul:** 6. Position, animatsiya va Sass · **Mavzular:** :checked, ~ selektor, visually-hidden, Custom checkbox

### Maqsadlar
- Standart checkbox'ni yashirib, o'z dizaynini yasaydi
- visually-hidden klassi ahamiyatini (accessibility) tushunadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: :checked, ~ selektor, visually-hidden |
| 15–35 | Amaliy ish: Checked inputs |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Custom switch.** input yashiriladi (lekin ekran o'quvchilar uchun mavjud), yonidagi span esa chiroyli 'tumbler'.

```html
<label class="sw">
  <input class="visually-hidden" type="checkbox">
  <span class="fake"></span> Tungi rejim
</label>
```

```css
.visually-hidden { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; border: 0;
  white-space: nowrap; clip-path: inset(100%); clip: rect(0 0 0 0); overflow: hidden; }
.sw { font: 18px sans-serif; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; }
.fake { width: 52px; height: 28px; border-radius: 20px; background: #ced4da; position: relative; transition: .3s; }
.fake::after { content: ''; position: absolute; top: 3px; left: 3px; width: 22px; height: 22px; border-radius: 50%; background: #fff; transition: .3s; }
input:checked ~ .fake { background: #40c057; }
input:checked ~ .fake::after { left: 27px; }
```

### Amaliy ish: Checked inputs
Tumbler, yulduzcha reyting va rangli radio tugmalar.

1. .visually-hidden klassi
2. Tumbler (switch)
3. Radio – rangli doiralar
4. focus holati ham ko'rinsin

### AI yordamchi: Accessibility
> Veb saytni ko'zi ojiz va zaif ko'radigan odamlar uchun qulay qilishning 7 ta oddiy qoidasini ayt.

### Uy vazifasi
Checked inputs: sozlamalar sahifasi (5 ta tumbler).

### Mini test
1. Belgilangan checkbox:
   - **:checked** ✓
   - :active
   - :on
   - :selected
2. ~ selektori:
   - **Keyingi barcha qo'shnilar** ✓
   - Ota-ona
   - Birinchi bola
   - Hammasi
3. display: none o'rniga visually-hidden nega?
   - **Ekran o'quvchilar ko'ra olishi uchun** ✓
   - Tezroq ishlaydi
   - Rangli bo'ladi
   - Farqi yo'q

---

## 58-dars. Visa karta va murakkab kartalar

**Modul:** 6. Position, animatsiya va Sass · **Mavzular:** Gradient + position, Takrorlash, Karta dizayni

### Maqsadlar
- Bank kartasi dizaynini CSS bilan yasaydi
- O'tilgan position, gradient, shadow'ni birlashtiradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Gradient + position, Takrorlash, Karta dizayni |
| 15–35 | Amaliy ish: Visa card |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Bank kartasi.** 85.6 × 54 mm nisbatdagi karta: gradient fon, chip, raqam, ism.

```html
<div class="visa">
  <div class="chip"></div>
  <p class="num">4000 1234 5678 9010</p>
  <p class="name">ALI VALIYEV</p>
  <b class="logo">VISA</b>
</div>
```

```css
.visa { position: relative; width: 320px; aspect-ratio: 85.6 / 54; max-width: 100%; margin: 10px auto; padding: 22px; box-sizing: border-box;
  border-radius: 16px; color: #fff; font-family: monospace;
  background: linear-gradient(135deg, #1a1f71, #3b5bdb 60%, #74c0fc); box-shadow: 0 14px 30px rgba(26,31,113,.4); }
.chip { width: 44px; height: 32px; border-radius: 6px; background: linear-gradient(135deg, #ffe066, #f59f00); }
.num { font-size: 20px; letter-spacing: 2px; margin: 18px 0 8px; }
.name { margin: 0; opacity: .8; }
.logo { position: absolute; right: 20px; bottom: 16px; font: italic 900 26px sans-serif; }
```

### Amaliy ish: Visa card
Karta old va orqa tomoni; hover'da aylanadi (rotateY).

1. Old tomon
2. Orqa tomon (magnit chiziq, CVV)
3. Ota-ona: perspective
4. Hover: transform: rotateY(180deg)

### AI yordamchi: Xavfsizlik
> Nega haqiqiy bank karta raqamini hech qachon internetga, AI'ga yoki darsdagi loyihaga yozish mumkin emas? Bolalarga tushuntir.

### Uy vazifasi
Positivus (Figma) sahifasining birinchi 2 bo'limi.

### Mini test
1. Nisbatni saqlash:
   - **aspect-ratio** ✓
   - ratio
   - proportion
   - keep-size
2. Harflar orasidagi masofa:
   - **letter-spacing** ✓
   - word-gap
   - font-gap
   - spacing
3. 3D aylanish (Y o'qi):
   - **rotateY** ✓
   - rotate3
   - spinY
   - turnY

---

## 59-dars. Sass (SCSS): o'zgaruvchi va nesting

**Modul:** 6. Position, animatsiya va Sass · **Mavzular:** Sass, Live Sass Compiler, $o'zgaruvchi, nesting, &

### Maqsadlar
- Sass nima uchun kerakligini tushunadi
- Live Sass Compiler bilan .scss faylni ulaydi
- O'zgaruvchi va ichma-ich yozishdan foydalanadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Sass, Live Sass Compiler, $o'zgaruvchi |
| 15–35 | Amaliy ish: CSS'ni SCSS'ga o'tkazish |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Sass – kuchaytirilgan CSS.** SCSS faylga yozamiz → kengaytma avtomatik CSS'ga aylantiradi. HTML'ga esa .css fayl ulanadi. Faqat .scss faylni tahrirlaymiz!

**O'zgaruvchi va nesting.** $rang bir marta yoziladi, hamma joyda ishlatiladi. & – ota-ona selektori.

```scss
$rang: lime;

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
}
```

### Amaliy ish: CSS'ni SCSS'ga o'tkazish
Eski ishingizdagi CSS'ni SCSS ko'rinishiga o'tkazing.

1. Live Sass Compiler o'rnating
2. style.scss yarating, Watch Sass bosing
3. Ranglarni $o'zgaruvchilarga
4. Nesting va & ishlating

### AI yordamchi: Konvertatsiya
> Quyidagi CSS kodini SCSS'ga o'tkazib ber (o'zgaruvchi va nesting bilan), keyin nima o'zgarganini tushuntir:
> [CSS kod]

### Uy vazifasi
Barber (Figma) sahifasini SCSS bilan boshlang.

### Mini test
1. Sass o'zgaruvchisi:
   - **$rang** ✓
   - --rang
   - @rang
   - #rang
2. & belgisi nimani anglatadi?
   - **Ota-ona selektorini** ✓
   - Va
   - Yangi fayl
   - Izoh
3. HTML'ga qaysi fayl ulanadi?
   - **.css** ✓
   - .scss
   - .sass
   - .js

### Havolalar
- [Sass](https://sass-lang.com)

---

## 60-dars. Sass: mixin, include va import

**Modul:** 6. Position, animatsiya va Sass · **Mavzular:** @mixin, @include, @import / partials, Nazorat

### Maqsadlar
- Takrorlanuvchi kodni mixin'ga chiqaradi
- SCSS'ni bir nechta faylga bo'ladi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: @mixin, @include, @import / partials |
| 15–35 | Amaliy ish: Barber with SCSS |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Mixin.** Qayta ishlatiladigan kod bo'lagi – parametr bilan.

```scss
@mixin flex($x) {
  display: flex;
  flex-wrap: wrap;
  align-items: $x;
  justify-content: space-between;
}

.container {
  @include flex(center);
  column-gap: 15px;
}
```

**Fayllarga bo'lish.** _footer.scss – tag chiziq bilan boshlangan fayldan alohida CSS yaratilmaydi. Asosiy faylga @import 'footer' bilan ulanadi.

```scss
// style.scss
@import 'variables';
@import 'header';
@import 'footer';
```

### Amaliy ish: Barber with SCSS
Barber sahifasini _variables, _header, _footer fayllariga bo'lib yozing.

1. _variables.scss – ranglar va shriftlar
2. @mixin flex va @mixin button
3. Bo'limlarni partial fayllarga
4. Natijani tekshiring

### AI yordamchi: Mixin yaratish
> Tugmalar uchun $rang parametrli SCSS mixin yozib ber: fon, hover'da qorayish va dumaloq burchak.

### Uy vazifasi
Barber sahifasini tugating (6-modul nazorati).

### Mini test
1. Mixin'ni ishlatish:
   - **@include** ✓
   - @use-mixin
   - @call
   - @run
2. Alohida CSS yaratilmaydigan fayl:
   - **_footer.scss** ✓
   - footer.scss
   - footer.css
   - footer_.scss
3. Mixin nima uchun?
   - **Takrorlanuvchi kodni qisqartirish** ✓
   - Rasm qo'shish
   - Animatsiya
   - Git

### O'qituvchi uchun eslatma
Nazorat darsi (6-modul). Keyingi darsdan JavaScript boshlanadi – bolalarni ruhlantiring!

---

# 7-modul. JavaScript asoslari

O'zgaruvchi, shart, funksiya, DOM, hodisalar va kichik o'yinlar.

## 61-dars. JavaScript bilan tanishuv: console.log

**Modul:** 7. JavaScript asoslari · **Mavzular:** JavaScript, script tegi, console.log, DevTools Console

### Maqsadlar
- JavaScript'ni sahifaga ulaydi
- console.log bilan xabar chiqaradi
- DevTools Console'dan foydalanadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: JavaScript, script tegi, console.log |
| 15–35 | Amaliy ish: Konsol kalkulyatori |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Ulash.** body oxirida script tegi: <script src='script.js'></script>. JavaScript sahifani 'jonlantiradi'.

```html
<body>
  <h1>Salom</h1>
  <script src="script.js"></script>
</body>
```

**console.log.** Dasturchining eng yaqin do'sti – natijani konsolga chiqaradi. Pastdagi 'Konsol' oynasiga qarang!

```javascript
console.log('Salom, dunyo!');
console.log(2 + 3);
console.log('Men', 12, 'yoshdaman');
```

**Izohlar.** // bir qatorli izoh, /* ko'p qatorli */. Izohni kompyuter o'qimaydi – u odamlar uchun.

### Amaliy ish: Konsol kalkulyatori
Konsolda turli hisob-kitoblarni bajaring.

1. Tug'ilgan yilingizdan yoshingizni hisoblang
2. 1 yilda necha soat bor?
3. Sinfdagi o'quvchilar sonini 3 guruhga bo'ling
4. Har qatorga izoh yozing

Boshlang'ich kod (JS):
```javascript
// Yoshimni hisoblayman
console.log(2026 - 2013);

// 1 yilda necha soat?
console.log(365 * 24);
```

### AI yordamchi: Tushuntirish
> JavaScript nima va u HTML hamda CSS'dan nimasi bilan farq qiladi? 12 yoshli bolaga 4 gap bilan tushuntir.

### Uy vazifasi
Konsolga o'zingiz haqingizda 5 ta ma'lumot chiqaring (ism, yosh, sinf, sevimli fan, orzu).

### Mini test
1. Konsolga chiqarish:
   - **console.log()** ✓
   - print()
   - echo()
   - write.console()
2. Bir qatorli izoh:
   - **//** ✓
   - <!-- -->
   - #
   - **
3. script tegi odatda qayerda?
   - **body oxirida** ✓
   - title ichida
   - CSS faylda
   - img ichida

---

## 62-dars. O'zgaruvchilar va ma'lumot turlari

**Modul:** 7. JavaScript asoslari · **Mavzular:** let, const, string, number, boolean

### Maqsadlar
- let va const bilan o'zgaruvchi yaratadi
- Ma'lumot turlarini farqlaydi
- typeof bilan turini tekshiradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: let, const, string |
| 15–35 | Amaliy ish: Mening pasportim |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**O'zgaruvchi – quti.** O'zgaruvchi – nomi yozilgan quti. let – qiymati o'zgarishi mumkin, const – o'zgarmas.

```javascript
let ism = 'Aziz';
const tugilganYil = 2013;
let ball = 85;

ball = ball + 10;   // ball o'zgardi

console.log(ism, tugilganYil, ball);
```

**Turlar.** string – matn ('...'), number – son, boolean – true/false.

```javascript
console.log(typeof 'Termiz');   // string
console.log(typeof 42);         // number
console.log(typeof true);       // boolean
```

### Amaliy ish: Mening pasportim
O'zingiz haqingizda o'zgaruvchilar yarating va konsolga chiqaring.

1. const ism, let yosh, let sinf
2. let alochi = true/false
3. Yoshni 1 ga oshiring
4. typeof bilan turlarni tekshiring

Boshlang'ich kod (JS):
```javascript
const ism = 'Madina';
let yosh = 12;

yosh = yosh + 1;
console.log(ism, 'kelasi yil', yosh, 'yoshda bo\'ladi');
```

### AI yordamchi: Nom tanlash
> JavaScript'da o'zgaruvchilarga yaxshi nom berish qoidalarini ayt va 5 ta yomon hamda yaxshi nom misolini keltir.

### Uy vazifasi
5 ta o'zgaruvchi: sevimli taom, sport, raqam, ha/yo'q savol javobi va shahar.

### Mini test
1. O'zgarmas qiymat:
   - **const** ✓
   - let
   - var-fix
   - stay
2. '42' qanday tur?
   - **string** ✓
   - number
   - boolean
   - hech qaysi
3. true / false – bu:
   - **boolean** ✓
   - string
   - number
   - array

---

## 63-dars. Operatorlar va shablon satrlar

**Modul:** 7. JavaScript asoslari · **Mavzular:** + - * / %, Satrlarni birlashtirish, Template literal

### Maqsadlar
- Arifmetik operatorlarni ishlatadi
- Satrlarni birlashtiradi
- Backtick (`) bilan shablon satr yozadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: + - * / %, Satrlarni birlashtirish, Template literal |
| 15–35 | Amaliy ish: Do'kon cheki |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Hisob-kitob.** % – qoldiq (juft/toqni aniqlashda foydali).

```javascript
let a = 17, b = 5;
console.log(a + b, a - b, a * b, a / b);
console.log('Qoldiq:', a % b);
```

**Shablon satr.** Backtick (`) ichida ${o'zgaruvchi} – matnga qiymat qo'yish.

```javascript
const ism = 'Aziz';
const yosh = 12;
console.log('Salom, ' + ism + '!');
console.log(`${ism} ${yosh} yoshda. 5 yildan so'ng ${yosh + 5} yoshda bo'ladi.`);
```

### Amaliy ish: Do'kon cheki
3 ta mahsulot narxi va soni bo'yicha chek chiqaring.

1. narx va soni o'zgaruvchilari
2. Har mahsulot jami
3. Umumiy summa
4. Shablon satr bilan chiroyli chek

Boshlang'ich kod (JS):
```javascript
const nonNarx = 4000, nonSoni = 3;
const sutNarx = 12000, sutSoni = 2;

const jami = nonNarx * nonSoni + sutNarx * sutSoni;
console.log(`Jami: ${jami} so'm`);
```

### AI yordamchi: Xatoni tushunish
> Nega JavaScript'da '5' + 5 natijasi '55', lekin '5' - 5 natijasi 0? Oddiy tushuntir.

### Uy vazifasi
Chekka 10% chegirma qo'shing va yakuniy summani chiqaring.

### Mini test
1. 17 % 5 = ?
   - **2** ✓
   - 3
   - 3.4
   - 12
2. Shablon satr qaysi qavsda?
   - **` `** ✓
   - ' '
   - " "
   - ( )
3. '5' + 5 = ?
   - **'55'** ✓
   - 10
   - xato
   - 0

---

## 64-dars. Shartlar: if, else if, else

**Modul:** 7. JavaScript asoslari · **Mavzular:** if / else, Taqqoslash: > < === !==, && va ||

### Maqsadlar
- Shartga qarab turli kod bajaradi
- Taqqoslash va mantiqiy operatorlarni ishlatadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: if / else, Taqqoslash: > < === !==, && va || |
| 15–35 | Amaliy ish: Ob-havo maslahatchisi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Agar ... aks holda.** === – teng, !== – teng emas, && – va, || – yoki.

```javascript
let ball = 78;

if (ball >= 86) {
  console.log('A\'lo – 5');
} else if (ball >= 71) {
  console.log('Yaxshi – 4');
} else if (ball >= 56) {
  console.log('Qoniqarli – 3');
} else {
  console.log('Yana harakat qil!');
}
```

**Juft yoki toq.** % bilan tekshirish.

```javascript
const son = 7;
if (son % 2 === 0) {
  console.log(son + ' – juft');
} else {
  console.log(son + ' – toq');
}
```

### Amaliy ish: Ob-havo maslahatchisi
Harorat va yomg'ir bo'yicha kiyim maslahati bering.

1. let harorat, let yomgir = true/false
2. harorat > 30 → 'Kepka kiying'
3. harorat < 5 → 'Issiq kiyining'
4. yomgir && ... → 'Soyabon oling'

Boshlang'ich kod (JS):
```javascript
let harorat = 38;
let yomgir = false;

if (harorat > 30) {
  console.log('Termizda issiq! Kepka kiying va suv iching.');
}
```

### AI yordamchi: Masala tuzish
> if/else o'rganayotgan bolalar uchun kundalik hayotdan 5 ta qiziqarli masala o'ylab top (javobsiz).

### Uy vazifasi
Yoshga qarab chipta narxini aniqlovchi dastur (bola / o'quvchi / katta / nafaqaxo'r).

### Mini test
1. Qat'iy tenglik:
   - **===** ✓
   - =
   - =>
   - ==
2. Ikkala shart ham to'g'ri bo'lsa:
   - **&&** ✓
   - ||
   - !
   - ??
3. 5 > 3 || 2 > 9 natijasi:
   - **true** ✓
   - false
   - 5
   - xato

---

## 65-dars. Funksiyalar

**Modul:** 7. JavaScript asoslari · **Mavzular:** function, parametr, return, arrow function

### Maqsadlar
- Funksiya yaratadi va chaqiradi
- Parametr va return'ni tushunadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: function, parametr, return |
| 15–35 | Amaliy ish: Funksiyalar to'plami |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Funksiya – retsept.** Bir marta yoziladi, ko'p marta ishlatiladi. Parametr – ingredient, return – tayyor taom.

```javascript
function salomlash(ism) {
  return 'Salom, ' + ism + '!';
}

console.log(salomlash('Aziz'));
console.log(salomlash('Madina'));

const kvadrat = (x) => x * x;   // qisqa (arrow) funksiya
console.log(kvadrat(9));
```

### Amaliy ish: Funksiyalar to'plami
Foydali kichik funksiyalar yozing.

1. yuza(a, b) – to'rtburchak yuzasi
2. juftmi(n) – true/false
3. baho(ball) – 2..5
4. Har birini 3 marta chaqiring

Boshlang'ich kod (JS):
```javascript
function yuza(a, b) {
  return a * b;
}

console.log(yuza(5, 4));
```

### AI yordamchi: Kod sharhi
> Mana mening funksiyam: function f(a){return a*a*a}. Unga yaxshiroq nom va izoh taklif qil, qanday ishlashini tushuntir.

### Uy vazifasi
Celsius → Fahrenheit va aksincha o'giruvchi 2 ta funksiya.

### Mini test
1. Natijani qaytarish:
   - **return** ✓
   - give
   - back
   - output
2. function f(x) dagi x – bu:
   - **parametr** ✓
   - natija
   - nom
   - tur
3. Arrow funksiya belgisi:
   - **=>** ✓
   - ->
   - ==>
   - ::

---

## 66-dars. DOM: sahifani JavaScript bilan o'zgartirish

**Modul:** 7. JavaScript asoslari · **Mavzular:** document.querySelector, textContent, style, innerHTML

### Maqsadlar
- querySelector bilan elementni topadi
- Matn va uslubni o'zgartiradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: document.querySelector, textContent, style |
| 15–35 | Amaliy ish: Sahifa sehrgari |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**DOM – sahifa daraxti.** Brauzer HTML'ni daraxt ko'rinishida saqlaydi. JavaScript istalgan shoxni topib o'zgartira oladi.

```html
<h1 id="sarlavha">Eski sarlavha</h1>
<p class="matn">Oddiy matn</p>
```

```javascript
const h1 = document.querySelector('#sarlavha');
h1.textContent = 'JavaScript meni o\'zgartirdi!';
h1.style.color = 'crimson';

const p = document.querySelector('.matn');
p.style.background = 'gold';
p.style.padding = '10px';
```

### Amaliy ish: Sahifa sehrgari
Tayyor sahifadagi 5 ta elementni JS bilan o'zgartiring.

1. Sarlavha matni
2. Rasm src'si (img.src = ...)
3. Fon rangi (document.body.style)
4. Ro'yxatga yangi li (innerHTML +=)

Boshlang'ich kod (HTML):
```html
<h1 id="t">Mening sahifam</h1>
<img id="r" src="https://picsum.photos/id/10/300/150" alt="Manzara">
<ul id="l"><li>Birinchi</li></ul>
```

Boshlang'ich kod (JS):
```javascript
document.querySelector('#t').textContent = 'Yangi sarlavha';
document.querySelector('#l').innerHTML += '<li>Ikkinchi</li>';
```

### AI yordamchi: DOM tushunchasi
> DOM nima ekanini oila shajarasi (daraxti) misolida bolalarga tushuntir va 1 ta kod misol ber.

### Uy vazifasi
Portfolio'ingizdagi ismingizni JS yordamida katta harflarga o'giring (toUpperCase).

### Mini test
1. id bo'yicha topish:
   - **querySelector('#id')** ✓
   - querySelector('.id')
   - find(id)
   - get#id
2. Matnni o'zgartirish:
   - **textContent** ✓
   - text-change
   - value.text
   - write
3. Fon rangi JS'da:
   - **style.background** ✓
   - style.bg-color
   - css.fon
   - color.back

---

## 67-dars. Hodisalar: click va addEventListener

**Modul:** 7. JavaScript asoslari · **Mavzular:** addEventListener, click, Hisoblagich

### Maqsadlar
- Tugma bosilishiga javob beradi
- Hisoblagich (counter) yasaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: addEventListener, click, Hisoblagich |
| 15–35 | Amaliy ish: Tasbeh / Hisoblagich |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Hodisa.** Hodisa – foydalanuvchi harakati: bosish, yozish, sichqoncha. addEventListener('click', funksiya).

```html
<h1 id="son">0</h1>
<button id="plus">+1</button>
<button id="minus">−1</button>
<button id="reset">0</button>
```

```javascript
let son = 0;
const h1 = document.querySelector('#son');

document.querySelector('#plus').addEventListener('click', () => {
  son++;
  h1.textContent = son;
});
document.querySelector('#minus').addEventListener('click', () => {
  son--;
  h1.textContent = son;
});
document.querySelector('#reset').addEventListener('click', () => {
  son = 0;
  h1.textContent = son;
});
```

### Amaliy ish: Tasbeh / Hisoblagich
Chiroyli dizaynli hisoblagich ilovasi.

1. +1, −1, 0 tugmalari
2. Son manfiy bo'lsa qizil rang
3. 10 ga yetganda 'Barakalla!' yozuvi
4. CSS bilan bezang

### AI yordamchi: Yangi g'oya
> Hisoblagich (counter) ilovasiga qo'shish mumkin bo'lgan 5 ta qiziqarli funksiya g'oyasini ber.

### Uy vazifasi
Rasm galereyasi: 'Keyingi' tugmasi bosilganda rasm almashadi.

### Mini test
1. Bosish hodisasi:
   - **click** ✓
   - press
   - tap-event
   - push
2. son++ nima qiladi?
   - **1 ga oshiradi** ✓
   - 2 ga oshiradi
   - Nolga tenglaydi
   - Ikkiga ko'paytiradi
3. Hodisa qo'shish:
   - **addEventListener** ✓
   - onEvent
   - listen()
   - addClick

---

## 68-dars. classList: tungi rejim tugmasi

**Modul:** 7. JavaScript asoslari · **Mavzular:** classList.add / remove / toggle, CSS + JS birga

### Maqsadlar
- JS orqali class qo'shadi va olib tashlaydi
- Tungi rejim (dark mode) tugmasini yasaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: classList.add / remove / toggle, CSS + JS birga |
| 15–35 | Amaliy ish: Tungi rejim + FAQ |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**toggle.** Class bor bo'lsa – olib tashlaydi, yo'q bo'lsa – qo'shadi. Uslub CSS'da, JS faqat class'ni almashtiradi.

```html
<h2>Tungi rejim</h2>
<p>Tugmani bosing</p>
<button id="b">🌙 / ☀️</button>
```

```javascript
document.querySelector('#b').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

### Amaliy ish: Tungi rejim + FAQ
Portfolio'ga dark mode va ochilib-yopiladigan savol-javob bloki.

1. body.dark uslublari
2. Tugma bilan toggle
3. FAQ: savol bosilganda javob .open bilan ochiladi
4. Ikonka ham almashsin

### AI yordamchi: Kodni yaxshilash
> Tungi rejim tanlovini sahifa yangilanganda ham eslab qolish uchun nima qilish kerak? localStorage'ni oddiy tushuntir.

### Uy vazifasi
Burger menyu: telefonda ☰ tugma bosilganda menyu ochilsin (classList.toggle).

### Mini test
1. Class qo'shish yoki olib tashlash:
   - **classList.toggle** ✓
   - classList.switch
   - class.change
   - toggleClass()
2. Uslublar qayerda yoziladi?
   - **CSS'da** ✓
   - Faqat JS'da
   - HTML title'da
   - Konsolda
3. Class borligini tekshirish:
   - **classList.contains** ✓
   - classList.has
   - class.is
   - hasClass

---

## 69-dars. Massivlar va sikllar

**Modul:** 7. JavaScript asoslari · **Mavzular:** Array, for, forEach, push

### Maqsadlar
- Massiv yaratadi va element qo'shadi
- for va forEach bilan massivni aylanadi
- Massivdan HTML ro'yxat yaratadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Array, for, forEach |
| 15–35 | Amaliy ish: Sinf jurnali |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Massiv – ro'yxat.** Bir nechta qiymatni bitta o'zgaruvchida saqlash. Sanash 0 dan boshlanadi!

```javascript
const mevalar = ['olma', 'anor', 'uzum'];
mevalar.push('qovun');

console.log(mevalar[0]);        // olma
console.log(mevalar.length);    // 4

for (let i = 0; i < mevalar.length; i++) {
  console.log(i + 1 + '. ' + mevalar[i]);
}
```

**Massivdan sahifaga.** forEach bilan har bir element uchun li yaratamiz.

```html
<h3>Surxondaryo tumanlari</h3><ul id="l"></ul>
```

```javascript
const tumanlar = ['Termiz', 'Angor', 'Denov', 'Sherobod', 'Boysun'];
const ul = document.querySelector('#l');
tumanlar.forEach((t) => {
  ul.innerHTML += `<li>${t}</li>`;
});
```

### Amaliy ish: Sinf jurnali
O'quvchilar ismlari massivi va ballar massivi bilan ishlash.

1. ismlar massivi (8 ta)
2. Sahifaga ro'yxat chiqaring
3. O'rtacha ballni hisoblang (for)
4. Eng yuqori ballni toping

### AI yordamchi: Mashq so'rash
> Massiv va for siklini mashq qilish uchun oson, o'rta va qiyin darajadagi 3 tadan masala tuz. Javoblarini alohida, oxirida yoz.

### Uy vazifasi
Ko'paytirish jadvali: for sikli bilan 1 dan 10 gacha, sahifada jadval ko'rinishida.

### Mini test
1. Birinchi element indeksi:
   - **0** ✓
   - 1
   - -1
   - first
2. Oxiriga qo'shish:
   - **push** ✓
   - add
   - append-last
   - insert
3. Elementlar soni:
   - **length** ✓
   - size
   - count
   - total

---

## 70-dars. Input bilan ishlash: kalkulyator

**Modul:** 7. JavaScript asoslari · **Mavzular:** input.value, Number(), Kalkulyator

### Maqsadlar
- Foydalanuvchi kiritgan qiymatni o'qiydi
- Matnni songa o'giradi
- Oddiy kalkulyator yasaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: input.value, Number(), Kalkulyator |
| 15–35 | Amaliy ish: Kalkulyator yoki Tana vazni indeksi (BMI) |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**value va Number.** input.value doim matn (string) qaytaradi. Hisoblash uchun Number() bilan songa o'giramiz.

```html
<input id="a" type="number" value="12"> +
<input id="b" type="number" value="30">
<button id="h">=</button>
<b id="n"></b>
```

```javascript
document.querySelector('#h').addEventListener('click', () => {
  const a = Number(document.querySelector('#a').value);
  const b = Number(document.querySelector('#b').value);
  document.querySelector('#n').textContent = a + b;
});
```

### Amaliy ish: Kalkulyator yoki Tana vazni indeksi (BMI)
4 amalli kalkulyator yoki BMI hisoblagich.

1. 2 ta input, 4 ta tugma (+ − × ÷)
2. Nolga bo'lishni tekshiring (if)
3. Natijani chiroyli ko'rsating
4. Bo'sh input bo'lsa ogohlantirish

### AI yordamchi: Debug
> Kalkulyatorim 2 + 3 ni '23' deb chiqaryapti. Kodim: a.value + b.value. Xato qayerda? Menga javobni emas, maslahat ber.

### Uy vazifasi
Valyuta kalkulyatori: so'm → dollar (kursni o'zgaruvchida saqlang).

### Mini test
1. input qiymati:
   - **value** ✓
   - text
   - content
   - data
2. '12' ni songa o'girish:
   - **Number('12')** ✓
   - String(12)
   - toNum('12')
   - int('12')
3. Nolga bo'lish natijasi JS'da:
   - **Infinity** ✓
   - 0
   - xato
   - null

---

## 71-dars. Mini o'yin: Sonni top!

**Modul:** 7. JavaScript asoslari · **Mavzular:** Math.random, Math.floor, O'yin mantig'i

### Maqsadlar
- Tasodifiy son yaratadi
- Shartlar va hodisalarni o'yinda birlashtiradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Math.random, Math.floor, O'yin mantig'i |
| 15–35 | Amaliy ish: Sonni top o'yini |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Tasodifiy son.** Math.random() – 0 va 1 orasida. 1..100 uchun: Math.floor(Math.random() * 100) + 1.

```html
<h2>1 dan 100 gacha sonni top!</h2>
<input id="i" type="number"> <button id="b">Tekshir</button>
<p id="j"></p>
```

```javascript
const sirli = Math.floor(Math.random() * 100) + 1;
let urinish = 0;

document.querySelector('#b').addEventListener('click', () => {
  const s = Number(document.querySelector('#i').value);
  const j = document.querySelector('#j');
  urinish++;
  if (s === sirli) j.textContent = `🎉 Topdingiz! ${urinish} ta urinishda`;
  else if (s < sirli) j.textContent = '⬆️ Kattaroq son';
  else j.textContent = '⬇️ Kichikroq son';
});
```

### Amaliy ish: Sonni top o'yini
O'yinni yaxshilang.

1. Urinishlar soni
2. 10 urinishdan keyin 'Yutqazdingiz'
3. 'Qayta o'ynash' tugmasi
4. Rangli javoblar

### AI yordamchi: O'yin g'oyasi
> Men HTML, CSS va oddiy JavaScript bilaman (if, funksiya, click, massiv). Men yasay oladigan 5 ta mini o'yin g'oyasini ber.

### Uy vazifasi
Tosh-Qaychi-Qog'oz o'yini (kompyuterga qarshi).

### Mini test
1. Tasodifiy son:
   - **Math.random()** ✓
   - Math.rand()
   - random.num()
   - Math.chance()
2. Pastga yaxlitlash:
   - **Math.floor** ✓
   - Math.ceil
   - Math.round-down
   - Math.low
3. 1..6 (kubik):
   - **Math.floor(Math.random()*6)+1** ✓
   - Math.random(6)
   - Math.floor(6)
   - random(1,6)

---

## 72-dars. To-do ro'yxat va localStorage

**Modul:** 7. JavaScript asoslari · **Mavzular:** To-do app, createElement, localStorage, Nazorat

### Maqsadlar
- Vazifalar ro'yxati ilovasini yasaydi
- Ma'lumotni localStorage'da saqlaydi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: To-do app, createElement, localStorage |
| 15–35 | Amaliy ish: To-do app |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**To-do.** Input → 'Qo'shish' → ro'yxatga li. li bosilsa – bajarildi (chizilgan).

```html
<h2>Vazifalarim</h2>
<input id="i" placeholder="Yangi vazifa"> <button id="b">Qo'shish</button>
<ul id="l"></ul>
```

```javascript
const input = document.querySelector('#i');
const ul = document.querySelector('#l');

document.querySelector('#b').addEventListener('click', () => {
  if (input.value.trim() === '') return;
  const li = document.createElement('li');
  li.textContent = input.value;
  li.addEventListener('click', () => li.classList.toggle('done'));
  ul.appendChild(li);
  input.value = '';
});
```

**localStorage.** Brauzer 'xotirasi' – sahifa yangilansa ham saqlanadi.

```javascript
localStorage.setItem('ism', 'Aziz');        // saqlash
const ism = localStorage.getItem('ism');      // o'qish
localStorage.removeItem('ism');               // o'chirish
```

### Amaliy ish: To-do app
To'liq vazifalar ilovasi.

1. Qo'shish
2. Bajarildi (toggle)
3. O'chirish tugmasi (✕)
4. Bonus: localStorage'da saqlash

### AI yordamchi: Kod tekshiruvi
> Mana mening To-do ilovam kodi. Xatolarni va yaxshilash mumkin bo'lgan 3 ta joyni ko'rsat, lekin tayyor kod yozma – men o'zim tuzataman:
> [kod]

### Uy vazifasi
To-do ilovasini chiroyli dizayn bilan GitHub Pages'ga chiqaring (7-modul nazorati).

### Mini test
1. Yangi element yaratish:
   - **document.createElement('li')** ✓
   - new li()
   - html.add('li')
   - create('li')
2. Sahifa yangilansa ham saqlash:
   - **localStorage** ✓
   - console
   - let
   - alert
3. Bo'sh joylarni olib tashlash:
   - **trim()** ✓
   - clean()
   - strip-all
   - cut()

### O'qituvchi uchun eslatma
Nazorat darsi (7-modul).

---

# 8-modul. AI bilan loyiha

AI yordamida kod yozish, xatolarni topish, dizayn va yakuniy loyiha taqdimoti.

## 73-dars. AI bilan kod yozish: aniq prompt

**Modul:** 8. AI bilan loyiha · **Mavzular:** Prompt muhandisligi, Kontekst, Bosqichma-bosqich so'rash

### Maqsadlar
- Kod uchun aniq va to'liq prompt yozadi
- Katta vazifani kichik qadamlarga bo'lib so'raydi
- AI yozgan kodni o'qib tushunadi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Prompt muhandisligi, Kontekst, Bosqichma-bosqich so'rash |
| 15–35 | Amaliy ish: AI bilan mini-ilova |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Yaxshi kod prompti.** 1) Kontekst: 'Men boshlovchiman, HTML/CSS/JS bilaman'. 2) Aniq vazifa. 3) Cheklov: 'kutubxonasiz, bitta fayl'. 4) Format: 'har qatorga izoh'. 5) 'Tushuntirib ber' so'rovi.

> 🔬 Platformadagi laboratoriya: *prompt*

**Bosqichma-bosqich.** Bir yo'la 'butun sayt qil' demang. Avval karkas, keyin dizayn, keyin JS. Har qadamni tushunib, keyin davom eting.

**Qoida: tushunmagan kodni ishlatma.** AI bergan har bir qatorni tushuntira olishingiz kerak. Tushunmasangiz – 'shu qatorni tushuntir' deb so'rang.

### Amaliy ish: AI bilan mini-ilova
AI yordamida 'Kunlik suv ichish hisoblagichi' ilovasini qadamma-qadam yarating.

1. Prompt 1: HTML karkas
2. Prompt 2: CSS dizayn
3. Prompt 3: JS logika
4. Har qadamdan keyin kodni o'zingiz tushuntiring

### AI yordamchi: Namuna prompt
> Men HTML, CSS va oddiy JavaScript biladigan boshlovchiman. Menga 'suv ichish hisoblagichi' uchun faqat HTML karkasini yoz: sarlavha, stakanlar soni, +1 tugmasi. Kutubxona ishlatma. Har qatorga o'zbekcha izoh yoz.

### Uy vazifasi
AI bilan qilgan ishingizning 'prompt tarixi'ni yozib keling: qaysi prompt yaxshi ishladi va nega.

### Mini test
1. Yaxshi prompt'da kontekst nima?
   - **O'zingiz va vaziyat haqida ma'lumot** ✓
   - Faqat so'z
   - Smayliklar
   - Parol
2. AI kodi tushunarsiz bo'lsa:
   - **Tushuntirishni so'rash** ✓
   - Ko'r-ko'rona nusxalash
   - O'chirib tashlash
   - Hech kimga aytmaslik
3. Katta vazifa uchun eng yaxshi usul:
   - **Kichik qadamlarga bo'lish** ✓
   - Bir yo'la so'rash
   - So'ramaslik
   - Tasodifiy so'rash

---

## 74-dars. AI bilan xatolarni topish (debugging)

**Modul:** 8. AI bilan loyiha · **Mavzular:** Xato turlari, Console xatolari, AI'dan maslahat so'rash

### Maqsadlar
- Konsoldagi xato xabarini o'qiydi
- Xatoni AI'ga to'g'ri tasvirlab beradi
- Tuzatishni o'zi amalga oshiradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Xato turlari, Console xatolari, AI'dan maslahat so'rash |
| 15–35 | Amaliy ish: Xato ovchisi |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Xatoni o'qish.** Konsolda qizil xabar: xato turi, xabar va qator raqami. Masalan: 'Uncaught TypeError: Cannot read properties of null' – element topilmadi (selector xato).

```html
<button id="btn">Bos</button>
```

```javascript
// Xato: id noto'g'ri yozilgan
const tugma = document.querySelector('#buton');
console.log(tugma);   // null
tugma.addEventListener('click', () => console.log('bosildi'));
```

**AI'ga xatoni tasvirlash.** 1) Nima qilmoqchi edim. 2) Nima bo'lyapti. 3) Xato xabari (to'liq). 4) Kodning tegishli qismi. 5) 'Javobni emas, yo'l-yo'riq ber'.

### Amaliy ish: Xato ovchisi
O'qituvchi tayyorlagan 5 ta 'buzuq' kodni tuzating: avval o'zingiz, qiyin bo'lsa AI bilan.

1. Konsolni oching
2. Xato xabarini o'qing
3. Qator raqamiga boring
4. AI'ga to'g'ri tasvirlab, maslahat oling
5. Tuzatib, sababini daftarga yozing

Boshlang'ich kod (HTML):
```html
<h1 id="t">0</h1>
<button id="b">+1</button>
```

Boshlang'ich kod (JS):
```javascript
let son = 0
const t = document.querySelector('#title');
document.querySelector('#b').addEventListener('click', () => {
  son++;
  t.textcontent = son;
});
```

### AI yordamchi: Debug prompti
> Men tugma bosilganda sonni oshirmoqchiman. Lekin konsolda 'Cannot set properties of null' chiqyapti. Kodim:
> [kod]
> Xato qayerda ekanini topishim uchun yo'l-yo'riq ber, tayyor javob berma.

### Uy vazifasi
O'z loyihalaringizdan bitta xatoni topib, 'xato – sabab – yechim' jadvalini to'ldiring.

### Mini test
1. null – bu odatda:
   - **Element topilmadi** ✓
   - Hammasi yaxshi
   - Son
   - Rang
2. textcontent va textContent:
   - **Katta-kichik harf muhim** ✓
   - Farqi yo'q
   - Ikkisi ham xato
   - Faqat CSS'da
3. AI'ga xato haqida nimani yuborish kerak?
   - **Xato xabari va tegishli kod** ✓
   - Faqat 'ishlamayapti'
   - Parolni
   - Hech narsa

---

## 75-dars. AI bilan dizayn: rang, rasm va matn

**Modul:** 8. AI bilan loyiha · **Mavzular:** Rang palitra, Rasm generatsiyasi, Mualliflik huquqi, Etika

### Maqsadlar
- AI yordamida rang palitra va matn g'oyalari oladi
- Rasm generatorlaridan mas'uliyat bilan foydalanadi
- Mualliflik va halollik qoidalarini biladi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Rang palitra, Rasm generatsiyasi, Mualliflik huquqi |
| 15–35 | Amaliy ish: Brend yarating |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**Dizayn yordamchisi.** AI'dan so'rash mumkin: rang palitrasi (hex kodlar bilan), shrift juftligi, sarlavha va tugma matnlari, bo'limlar tuzilishi. Lekin yakuniy qarorni siz qabul qilasiz!

**AI rasmlar.** Rasm generatorlari matndan rasm yaratadi. Qoidalar: real odamlarning soxta rasmini yaratmang; AI rasmini 'AI yordamida yaratilgan' deb belgilang; boshqalarning ishini o'ziniki qilib ko'rsatmang.

**Palitrani CSS'ga.** AI bergan ranglarni CSS o'zgaruvchilarga yozamiz.

```html
<div class="c"><h2>Termiz Tour</h2><p>Qadimiy shaharni kashf eting</p><button>Sayohat</button></div>
```

```css
:root { --qum: #f2d6a2; --loy: #b5651d; --osmon: #3a86ff; --tun: #1d2a3a; }
.c { background: var(--qum); color: var(--tun); padding: 24px; border-radius: 14px; font-family: sans-serif; }
.c h2 { color: var(--loy); margin: 0 0 6px; }
.c button { background: var(--osmon); color: #fff; border: 0; padding: 10px 20px; border-radius: 8px; }
```

### Amaliy ish: Brend yarating
O'ylab topilgan biznes (masalan, 'Termiz Tour') uchun AI bilan mini-brend.

1. AI'dan 3 ta nom g'oyasi
2. Rang palitrasi (4 rang) → CSS o'zgaruvchilar
3. Slogan va Hero matni
4. Bitta bosh sahifa bloki

### AI yordamchi: Palitra prompti
> Men 'Termiz Tour' degan sayohat sayti qilyapman. Qadimiy Termiz, qum, loy va ko'k osmon ruhidagi 4 rangli palitra ber: nomi, hex kodi va qayerda ishlatish.

### Uy vazifasi
Yakuniy loyihangiz uchun g'oya va palitra tayyorlab keling.

### Mini test
1. AI yaratgan rasmni ishlatganda:
   - **'AI yordamida yaratilgan' deb belgilash** ✓
   - O'zim chizdim deyish
   - Yashirish
   - Sotish
2. Real odamning soxta rasmini yaratish:
   - **Mumkin emas** ✓
   - Mumkin
   - Faqat do'stga
   - Faqat kechasi
3. Dizayn bo'yicha yakuniy qaror:
   - **Men qabul qilaman** ✓
   - Faqat AI
   - Tasodif
   - Qo'shnim

---

## 76-dars. AI javobini tekshirish va xavfsizlik

**Modul:** 8. AI bilan loyiha · **Mavzular:** Gallyutsinatsiya, Manbani tekshirish, Maxfiylik, Akademik halollik

### Maqsadlar
- AI noto'g'ri ma'lumot berishi mumkinligini biladi
- Ma'lumotni ishonchli manbalardan tekshiradi
- Shaxsiy ma'lumotlarni himoya qiladi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Salomlashish va takrorlash (savol-javob) |
| 5–15 | Yangi mavzu: Gallyutsinatsiya, Manbani tekshirish, Maxfiylik |
| 15–35 | Amaliy ish: Faktlarni tekshir |
| 35–42 | AI yordamchi va mini test |
| 42–45 | Uy vazifasi va xulosa |

### Tushunchalar
**AI ham xato qiladi.** 'Gallyutsinatsiya' – AI ishonch bilan noto'g'ri narsa aytishi. Kod ishlamasligi, mavjud bo'lmagan CSS xususiyati yoki noto'g'ri sana bo'lishi mumkin. Tekshirish: MDN, W3Schools, kitob, o'qituvchi.

**Tekshiruv ro'yxati.** ✓ Kodni ishga tushirib ko'rdimmi? ✓ Har qatorni tushunamanmi? ✓ Rasmiy hujjatda bormi? ✓ Shaxsiy ma'lumot yozmadimmi? ✓ Ishimda AI'dan foydalanganimni aytdimmi?

**Mavjud bo'lmagan xususiyat.** AI ba'zan shunday 'kod' beradi. Sinab ko'ring – ishlamaydi!

```html
<p class="x">Men markazdamanmi?</p>
```

```css
/* AI "taklif qilgan" noto'g'ri kod */
.x { text-center: true; font-colour: red; }

/* To'g'risi */
/* .x { text-align: center; color: red; } */
```

### Amaliy ish: Faktlarni tekshir
AI'ga 5 ta savol bering (HTML/CSS va Termiz tarixi haqida), javoblarni manbalardan tekshiring.

1. 5 ta savol
2. Javoblarni yozib oling
3. MDN / W3Schools / kitobdan tekshiring
4. Nechta to'g'ri, nechta xato – jadval

### AI yordamchi: Tekshiruv prompti
> Sen menga bergan javobingizda ishonchingiz komil bo'lmagan joylarni belgilab ber va ularni qayerdan tekshirishim mumkinligini ayt.

### Uy vazifasi
Oila a'zolaringizga 'AI bilan xavfsiz ishlash' bo'yicha 5 ta qoidani tushuntiring.

### Mini test
1. Gallyutsinatsiya – bu:
   - **AI'ning ishonch bilan noto'g'ri javobi** ✓
   - Tez javob
   - Rasm
   - Virus
2. CSS xususiyatini tekshirish uchun:
   - **MDN / W3Schools** ✓
   - Faqat AI
   - Taxmin
   - Reklama
3. Uy vazifasini AI yozib bersa:
   - **O'qituvchiga aytaman va tushunib olaman** ✓
   - Yashiraman
   - O'zimniki deyman
   - Sotaman

### Havolalar
- [MDN Web Docs](https://developer.mozilla.org)

---

## 77-dars. Yakuniy loyiha: g'oya va reja

**Modul:** 8. AI bilan loyiha · **Mavzular:** G'oya, Wireframe, Reja, Jamoaviy ish

### Maqsadlar
- Loyiha g'oyasini tanlaydi va tavsiflaydi
- Qog'ozda yoki Figma'da wireframe chizadi
- Ishni qadamlarga bo'ladi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–10 | Loyiha namunalari va talablar |
| 10–25 | G'oya tanlash va tavsif |
| 25–40 | Wireframe chizish |
| 40–45 | Rejani taqdim etish |

### Tushunchalar
**Loyiha talablari.** Kamida 3 bo'lim, responsive, 1 ta JS funksiya (tugma, o'yin, forma, galereya), semantik HTML, GitHub Pages havolasi, README. AI'dan foydalanish ruxsat etiladi, lekin 'AI jurnali' yuritiladi.

**G'oyalar.** Portfolio + o'yin; Maktab sayti; Termiz sayyohlik sayti; Retseptlar kitobi; Kutubxona katalogi; Sport klubi sahifasi; Viktorina ilovasi.

### Amaliy ish: Loyiha pasporti
Loyiha pasportini to'ldiring.

1. Nomi va maqsadi (1 gap)
2. Kim uchun?
3. Bo'limlar ro'yxati
4. Wireframe (telefon va kompyuter)
5. 3 darslik reja

### AI yordamchi: G'oyani tekshirish
> Mening loyiha g'oyam: [g'oya]. Men HTML, CSS va oddiy JS bilaman, 3 ta dars (har biri 45 daqiqa) vaqtim bor. G'oya shu vaqtga mosmi? Qaysi qismini soddalashtirish kerak?

### Uy vazifasi
Rasmlar, matnlar va ranglarni tayyorlang, GitHub'da bo'sh repo oching.

### Mini test
1. Wireframe – bu:
   - **Sahifaning oddiy chizma rejasi** ✓
   - Tayyor dizayn
   - Kod
   - Server
2. AI jurnali nima uchun?
   - **Qayerda AI yordam berganini ko'rsatish** ✓
   - Parollar uchun
   - O'yin uchun
   - Keraksiz
3. Loyiha internetda qayerda bo'ladi?
   - **GitHub Pages** ✓
   - Word
   - Paint
   - USB

---

## 78-dars. Yakuniy loyiha: HTML va CSS

**Modul:** 8. AI bilan loyiha · **Mavzular:** Karkas, Dizayn, Responsive

### Maqsadlar
- Loyihaning HTML karkasini va asosiy dizaynini yozadi
- Responsive qiladi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Reja bilan tanishish |
| 5–40 | Mustaqil ish (o'qituvchi aylanib yordam beradi) |
| 40–45 | commit va push |

### Tushunchalar
**Ish tartibi.** HTML karkas → umumiy CSS (:root ranglar, *, body, .container) → bo'limlar → @media → git commit.

### Amaliy ish: Loyiha ustida ishlash
Wireframe asosida HTML va CSS.

1. Semantik karkas
2. :root ranglar
3. Bo'limlar dizayni
4. Telefon uchun @media
5. git commit -m 'HTML va CSS'

### AI yordamchi: Kod sharhi
> Loyiham CSS kodini ko'rib chiq: responsive muammolar va takrorlanayotgan kodni ko'rsat. Tuzatishni o'zim qilaman.

### Uy vazifasi
Dizaynni yakunlang, 1 ta do'stingizga ko'rsatib fikrini oling.

### Mini test
1. Ranglarni bir joyda saqlash:
   - **:root o'zgaruvchilari** ✓
   - Har elementda alohida
   - HTML'da
   - Rasmda
2. Har ish kuni oxirida:
   - **git commit va push** ✓
   - Hammasini o'chirish
   - Faylni qayta nomlash
   - Hech narsa
3. Telefon uchun:
   - **@media** ✓
   - @phone
   - @small
   - @mobile-only

---

## 79-dars. Yakuniy loyiha: JavaScript va internetga chiqarish

**Modul:** 8. AI bilan loyiha · **Mavzular:** JS funksiya, Tekshiruv, GitHub Pages, README

### Maqsadlar
- Loyihaga interaktivlik qo'shadi
- Loyihani tekshirib, internetga chiqaradi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Tekshiruv ro'yxati |
| 5–35 | JS qo'shish va tuzatish |
| 35–42 | GitHub Pages + README |
| 42–45 | Taqdimotga tayyorgarlik |

### Tushunchalar
**Yakuniy tekshiruv.** ✓ Barcha havolalar ishlaydi ✓ Rasmlarda alt ✓ Telefonda chiroyli ✓ Konsolda xato yo'q ✓ README ✓ AI jurnali ✓ Pages havolasi.

### Amaliy ish: Jonlantirish va nashr
Loyihaga JS qo'shing va internetga chiqaring.

1. Kamida 1 ta interaktiv funksiya
2. Konsolda xato yo'qligini tekshiring
3. README.md
4. GitHub Pages
5. Havolani guruhga yuboring

### AI yordamchi: Taqdimot rejasi
> Mening loyiham haqida 3 daqiqalik taqdimot rejasini tuz: kirish, demo, qiyinchiliklar, xulosa. Loyiha: [qisqacha tavsif]

### Uy vazifasi
3 daqiqalik taqdimot tayyorlang: g'oya, qanday qildim, qiyinchilik, AI qayerda yordam berdi.

### Mini test
1. Konsolda xato bo'lsa:
   - **Tuzatish kerak** ✓
   - E'tibor bermaslik
   - Konsolni yopish
   - Kompyuterni o'chirish
2. README'da nima bo'ladi?
   - **Loyiha tavsifi va havolasi** ✓
   - Parollar
   - Rasmlar faqat
   - Hech narsa
3. Taqdimot necha daqiqa?
   - **3 daqiqa** ✓
   - 30 daqiqa
   - 1 soat
   - 10 soniya

---

## 80-dars. Taqdimot va bitiruv

**Modul:** 8. AI bilan loyiha · **Mavzular:** Taqdimot, Baholash, Keyingi qadamlar

### Maqsadlar
- Loyihasini auditoriya oldida taqdim etadi
- Boshqalarning ishiga konstruktiv fikr bildiradi
- Keyingi o'qish yo'lini biladi

### 45 daqiqalik reja
| Daqiqa | Bosqich |
|---|---|
| 0–5 | Kirish va tartib |
| 5–38 | Taqdimotlar (har biri 3 daqiqa + 1 savol) |
| 38–43 | Mukofotlash va sertifikatlar |
| 43–45 | Keyingi qadamlar |

### Tushunchalar
**Baholash mezonlari.** G'oya va foydaliligi (2), dizayn (2), responsive (2), JavaScript (2), taqdimot va AI'dan halol foydalanish (2) = 10 ball.

**Keyingi qadamlar.** JavaScript chuqurroq (DOM, fetch API), Git'da jamoaviy ish, React, 3D va animatsiyalar (Three.js), portfolio'ni boyitish. freeCodeCamp sertifikatlari.

### Amaliy ish: Loyihalar ko'rgazmasi
Har bir o'quvchi loyihasini taqdim etadi.

1. Taqdimot: 3 daqiqa
2. Sinfdoshlardan 1 savol
3. Baholash varaqasi
4. Eng yaxshi loyihalar: 'Eng chiroyli', 'Eng foydali', 'Eng ijodiy'

### AI yordamchi: Keyingi yo'l
> Men HTML, CSS, Sass va JavaScript asoslarini o'rgandim. Keyingi 6 oy uchun o'qish rejasini tuz: har oy uchun mavzu va 1 ta loyiha g'oyasi.

### Uy vazifasi
Yozgi ta'til uchun: freeCodeCamp 'Responsive Web Design' sertifikatini olishga harakat qiling!

### Mini test
1. HTML vazifasi:
   - **Tuzilma (skelet)** ✓
   - Rang
   - Harakat
   - Server
2. CSS vazifasi:
   - **Ko'rinish** ✓
   - Tuzilma
   - Ma'lumotlar bazasi
   - Server
3. JavaScript vazifasi:
   - **Interaktivlik** ✓
   - Faqat rang
   - Faqat rasm
   - Arxivlash

### Havolalar
- [freeCodeCamp](https://www.freecodecamp.org)
- [MDN](https://developer.mozilla.org)

### O'qituvchi uchun eslatma
Ota-onalarni taqdimotga taklif qiling. Sertifikatlarni oldindan tayyorlang.

---

