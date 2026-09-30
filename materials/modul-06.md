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
