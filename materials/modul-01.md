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
