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
