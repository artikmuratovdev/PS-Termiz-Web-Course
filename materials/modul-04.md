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
