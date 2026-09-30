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
