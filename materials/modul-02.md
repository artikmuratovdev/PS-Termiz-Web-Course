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
