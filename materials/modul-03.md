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
