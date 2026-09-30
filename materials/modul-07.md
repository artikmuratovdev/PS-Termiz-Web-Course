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
