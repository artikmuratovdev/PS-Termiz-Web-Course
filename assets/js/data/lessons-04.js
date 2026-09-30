/* 61–80-darslar: JavaScript asoslari, AI bilan ishlash va yakuniy loyiha */

L({
  n: 61, m: 7, title: "JavaScript bilan tanishuv: console.log",
  topics: ["JavaScript", "script tegi", "console.log", "DevTools Console"],
  goals: ["JavaScript'ni sahifaga ulaydi", "console.log bilan xabar chiqaradi", "DevTools Console'dan foydalanadi"],
  concepts: [
    { t: "Ulash", d: "body oxirida script tegi: <script src='script.js'></script>. JavaScript sahifani 'jonlantiradi'.", lang: "html",
      code: `<body>
  <h1>Salom</h1>
  <script src="script.js"></script>
</body>` },
    { t: "console.log", d: "Dasturchining eng yaqin do'sti – natijani konsolga chiqaradi. Pastdagi 'Konsol' oynasiga qarang!", lang: "js", run: true,
      code: `console.log('Salom, dunyo!');
console.log(2 + 3);
console.log('Men', 12, 'yoshdaman');` },
    { t: "Izohlar", d: "// bir qatorli izoh, /* ko'p qatorli */. Izohni kompyuter o'qimaydi – u odamlar uchun." }
  ],
  classwork: {
    t: "Konsol kalkulyatori",
    d: "Konsolda turli hisob-kitoblarni bajaring.",
    steps: ["Tug'ilgan yilingizdan yoshingizni hisoblang", "1 yilda necha soat bor?", "Sinfdagi o'quvchilar sonini 3 guruhga bo'ling", "Har qatorga izoh yozing"],
    starter: { js: `// Yoshimni hisoblayman\nconsole.log(2026 - 2013);\n\n// 1 yilda necha soat?\nconsole.log(365 * 24);` }
  },
  homework: "Konsolga o'zingiz haqingizda 5 ta ma'lumot chiqaring (ism, yosh, sinf, sevimli fan, orzu).",
  quiz: [
    ["Konsolga chiqarish:", ["console.log()", "print()", "echo()", "write.console()"], 0],
    ["Bir qatorli izoh:", ["//", "<!-- -->", "#", "**"], 0],
    ["script tegi odatda qayerda?", ["body oxirida", "title ichida", "CSS faylda", "img ichida"], 0]
  ],
  ai: { t: "Tushuntirish", p: "JavaScript nima va u HTML hamda CSS'dan nimasi bilan farq qiladi? 12 yoshli bolaga 4 gap bilan tushuntir." }
});

L({
  n: 62, m: 7, title: "O'zgaruvchilar va ma'lumot turlari",
  topics: ["let", "const", "string", "number", "boolean"],
  goals: ["let va const bilan o'zgaruvchi yaratadi", "Ma'lumot turlarini farqlaydi", "typeof bilan turini tekshiradi"],
  concepts: [
    { t: "O'zgaruvchi – quti", d: "O'zgaruvchi – nomi yozilgan quti. let – qiymati o'zgarishi mumkin, const – o'zgarmas.", lang: "js", run: true,
      code: `let ism = 'Aziz';
const tugilganYil = 2013;
let ball = 85;

ball = ball + 10;   // ball o'zgardi

console.log(ism, tugilganYil, ball);` },
    { t: "Turlar", d: "string – matn ('...'), number – son, boolean – true/false.", lang: "js", run: true,
      code: `console.log(typeof 'Termiz');   // string
console.log(typeof 42);         // number
console.log(typeof true);       // boolean` }
  ],
  classwork: {
    t: "Mening pasportim",
    d: "O'zingiz haqingizda o'zgaruvchilar yarating va konsolga chiqaring.",
    steps: ["const ism, let yosh, let sinf", "let alochi = true/false", "Yoshni 1 ga oshiring", "typeof bilan turlarni tekshiring"],
    starter: { js: `const ism = 'Madina';\nlet yosh = 12;\n\nyosh = yosh + 1;\nconsole.log(ism, 'kelasi yil', yosh, 'yoshda bo\\'ladi');` }
  },
  homework: "5 ta o'zgaruvchi: sevimli taom, sport, raqam, ha/yo'q savol javobi va shahar.",
  quiz: [
    ["O'zgarmas qiymat:", ["const", "let", "var-fix", "stay"], 0],
    ["'42' qanday tur?", ["string", "number", "boolean", "hech qaysi"], 0],
    ["true / false – bu:", ["boolean", "string", "number", "array"], 0]
  ],
  ai: { t: "Nom tanlash", p: "JavaScript'da o'zgaruvchilarga yaxshi nom berish qoidalarini ayt va 5 ta yomon hamda yaxshi nom misolini keltir." }
});

L({
  n: 63, m: 7, title: "Operatorlar va shablon satrlar",
  topics: ["+ - * / %", "Satrlarni birlashtirish", "Template literal"],
  goals: ["Arifmetik operatorlarni ishlatadi", "Satrlarni birlashtiradi", "Backtick (`) bilan shablon satr yozadi"],
  concepts: [
    { t: "Hisob-kitob", d: "% – qoldiq (juft/toqni aniqlashda foydali).", lang: "js", run: true,
      code: `let a = 17, b = 5;
console.log(a + b, a - b, a * b, a / b);
console.log('Qoldiq:', a % b);` },
    { t: "Shablon satr", d: "Backtick (\`) ichida \${o'zgaruvchi} – matnga qiymat qo'yish.", lang: "js", run: true,
      code: `const ism = 'Aziz';
const yosh = 12;
console.log('Salom, ' + ism + '!');
console.log(\`\${ism} \${yosh} yoshda. 5 yildan so'ng \${yosh + 5} yoshda bo'ladi.\`);` }
  ],
  classwork: {
    t: "Do'kon cheki",
    d: "3 ta mahsulot narxi va soni bo'yicha chek chiqaring.",
    steps: ["narx va soni o'zgaruvchilari", "Har mahsulot jami", "Umumiy summa", "Shablon satr bilan chiroyli chek"],
    starter: { js: `const nonNarx = 4000, nonSoni = 3;\nconst sutNarx = 12000, sutSoni = 2;\n\nconst jami = nonNarx * nonSoni + sutNarx * sutSoni;\nconsole.log(\`Jami: \${jami} so'm\`);` }
  },
  homework: "Chekka 10% chegirma qo'shing va yakuniy summani chiqaring.",
  quiz: [
    ["17 % 5 = ?", ["2", "3", "3.4", "12"], 0],
    ["Shablon satr qaysi qavsda?", ["` `", "' '", "\" \"", "( )"], 0],
    ["'5' + 5 = ?", ["'55'", "10", "xato", "0"], 0]
  ],
  ai: { t: "Xatoni tushunish", p: "Nega JavaScript'da '5' + 5 natijasi '55', lekin '5' - 5 natijasi 0? Oddiy tushuntir." }
});

L({
  n: 64, m: 7, title: "Shartlar: if, else if, else",
  topics: ["if / else", "Taqqoslash: > < === !==", "&& va ||"],
  goals: ["Shartga qarab turli kod bajaradi", "Taqqoslash va mantiqiy operatorlarni ishlatadi"],
  concepts: [
    { t: "Agar ... aks holda", d: "=== – teng, !== – teng emas, && – va, || – yoki.", lang: "js", run: true,
      code: `let ball = 78;

if (ball >= 86) {
  console.log('A\\'lo – 5');
} else if (ball >= 71) {
  console.log('Yaxshi – 4');
} else if (ball >= 56) {
  console.log('Qoniqarli – 3');
} else {
  console.log('Yana harakat qil!');
}` },
    { t: "Juft yoki toq", d: "% bilan tekshirish.", lang: "js", run: true,
      code: `const son = 7;
if (son % 2 === 0) {
  console.log(son + ' – juft');
} else {
  console.log(son + ' – toq');
}` }
  ],
  classwork: {
    t: "Ob-havo maslahatchisi",
    d: "Harorat va yomg'ir bo'yicha kiyim maslahati bering.",
    steps: ["let harorat, let yomgir = true/false", "harorat > 30 → 'Kepka kiying'", "harorat < 5 → 'Issiq kiyining'", "yomgir && ... → 'Soyabon oling'"],
    starter: { js: `let harorat = 38;\nlet yomgir = false;\n\nif (harorat > 30) {\n  console.log('Termizda issiq! Kepka kiying va suv iching.');\n}` }
  },
  homework: "Yoshga qarab chipta narxini aniqlovchi dastur (bola / o'quvchi / katta / nafaqaxo'r).",
  quiz: [
    ["Qat'iy tenglik:", ["===", "=", "=>", "=="], 0],
    ["Ikkala shart ham to'g'ri bo'lsa:", ["&&", "||", "!", "??"], 0],
    ["5 > 3 || 2 > 9 natijasi:", ["true", "false", "5", "xato"], 0]
  ],
  ai: { t: "Masala tuzish", p: "if/else o'rganayotgan bolalar uchun kundalik hayotdan 5 ta qiziqarli masala o'ylab top (javobsiz)." }
});

L({
  n: 65, m: 7, title: "Funksiyalar",
  topics: ["function", "parametr", "return", "arrow function"],
  goals: ["Funksiya yaratadi va chaqiradi", "Parametr va return'ni tushunadi"],
  concepts: [
    { t: "Funksiya – retsept", d: "Bir marta yoziladi, ko'p marta ishlatiladi. Parametr – ingredient, return – tayyor taom.", lang: "js", run: true,
      code: `function salomlash(ism) {
  return 'Salom, ' + ism + '!';
}

console.log(salomlash('Aziz'));
console.log(salomlash('Madina'));

const kvadrat = (x) => x * x;   // qisqa (arrow) funksiya
console.log(kvadrat(9));` }
  ],
  classwork: {
    t: "Funksiyalar to'plami",
    d: "Foydali kichik funksiyalar yozing.",
    steps: ["yuza(a, b) – to'rtburchak yuzasi", "juftmi(n) – true/false", "baho(ball) – 2..5", "Har birini 3 marta chaqiring"],
    starter: { js: `function yuza(a, b) {\n  return a * b;\n}\n\nconsole.log(yuza(5, 4));` }
  },
  homework: "Celsius → Fahrenheit va aksincha o'giruvchi 2 ta funksiya.",
  quiz: [
    ["Natijani qaytarish:", ["return", "give", "back", "output"], 0],
    ["function f(x) dagi x – bu:", ["parametr", "natija", "nom", "tur"], 0],
    ["Arrow funksiya belgisi:", ["=>", "->", "==>", "::"], 0]
  ],
  ai: { t: "Kod sharhi", p: "Mana mening funksiyam: function f(a){return a*a*a}. Unga yaxshiroq nom va izoh taklif qil, qanday ishlashini tushuntir." }
});

L({
  n: 66, m: 7, title: "DOM: sahifani JavaScript bilan o'zgartirish",
  topics: ["document.querySelector", "textContent", "style", "innerHTML"],
  goals: ["querySelector bilan elementni topadi", "Matn va uslubni o'zgartiradi"],
  concepts: [
    { t: "DOM – sahifa daraxti", d: "Brauzer HTML'ni daraxt ko'rinishida saqlaydi. JavaScript istalgan shoxni topib o'zgartira oladi.", lang: "js", run: true,
      html: `<h1 id="sarlavha">Eski sarlavha</h1>\n<p class="matn">Oddiy matn</p>`,
      code: `const h1 = document.querySelector('#sarlavha');
h1.textContent = 'JavaScript meni o\\'zgartirdi!';
h1.style.color = 'crimson';

const p = document.querySelector('.matn');
p.style.background = 'gold';
p.style.padding = '10px';` }
  ],
  classwork: {
    t: "Sahifa sehrgari",
    d: "Tayyor sahifadagi 5 ta elementni JS bilan o'zgartiring.",
    steps: ["Sarlavha matni", "Rasm src'si (img.src = ...)", "Fon rangi (document.body.style)", "Ro'yxatga yangi li (innerHTML +=)"],
    starter: { html: `<h1 id="t">Mening sahifam</h1>\n<img id="r" src="https://picsum.photos/id/10/300/150" alt="Manzara">\n<ul id="l"><li>Birinchi</li></ul>`, js: `document.querySelector('#t').textContent = 'Yangi sarlavha';\ndocument.querySelector('#l').innerHTML += '<li>Ikkinchi</li>';` }
  },
  homework: "Portfolio'ingizdagi ismingizni JS yordamida katta harflarga o'giring (toUpperCase).",
  quiz: [
    ["id bo'yicha topish:", ["querySelector('#id')", "querySelector('.id')", "find(id)", "get#id"], 0],
    ["Matnni o'zgartirish:", ["textContent", "text-change", "value.text", "write"], 0],
    ["Fon rangi JS'da:", ["style.background", "style.bg-color", "css.fon", "color.back"], 0]
  ],
  ai: { t: "DOM tushunchasi", p: "DOM nima ekanini oila shajarasi (daraxti) misolida bolalarga tushuntir va 1 ta kod misol ber." }
});

L({
  n: 67, m: 7, title: "Hodisalar: click va addEventListener",
  topics: ["addEventListener", "click", "Hisoblagich"],
  goals: ["Tugma bosilishiga javob beradi", "Hisoblagich (counter) yasaydi"],
  concepts: [
    { t: "Hodisa", d: "Hodisa – foydalanuvchi harakati: bosish, yozish, sichqoncha. addEventListener('click', funksiya).", lang: "js", run: true,
      html: `<h1 id="son">0</h1>\n<button id="plus">+1</button>\n<button id="minus">−1</button>\n<button id="reset">0</button>`,
      css: `body{font-family:sans-serif;text-align:center} h1{font-size:64px;margin:10px} button{font-size:22px;padding:8px 18px;margin:4px}`,
      code: `let son = 0;
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
});` }
  ],
  classwork: {
    t: "Tasbeh / Hisoblagich",
    d: "Chiroyli dizaynli hisoblagich ilovasi.",
    steps: ["+1, −1, 0 tugmalari", "Son manfiy bo'lsa qizil rang", "10 ga yetganda 'Barakalla!' yozuvi", "CSS bilan bezang"]
  },
  homework: "Rasm galereyasi: 'Keyingi' tugmasi bosilganda rasm almashadi.",
  quiz: [
    ["Bosish hodisasi:", ["click", "press", "tap-event", "push"], 0],
    ["son++ nima qiladi?", ["1 ga oshiradi", "2 ga oshiradi", "Nolga tenglaydi", "Ikkiga ko'paytiradi"], 0],
    ["Hodisa qo'shish:", ["addEventListener", "onEvent", "listen()", "addClick"], 0]
  ],
  ai: { t: "Yangi g'oya", p: "Hisoblagich (counter) ilovasiga qo'shish mumkin bo'lgan 5 ta qiziqarli funksiya g'oyasini ber." }
});

L({
  n: 68, m: 7, title: "classList: tungi rejim tugmasi",
  topics: ["classList.add / remove / toggle", "CSS + JS birga"],
  goals: ["JS orqali class qo'shadi va olib tashlaydi", "Tungi rejim (dark mode) tugmasini yasaydi"],
  concepts: [
    { t: "toggle", d: "Class bor bo'lsa – olib tashlaydi, yo'q bo'lsa – qo'shadi. Uslub CSS'da, JS faqat class'ni almashtiradi.", lang: "js", run: true,
      html: `<h2>Tungi rejim</h2>\n<p>Tugmani bosing</p>\n<button id="b">🌙 / ☀️</button>`,
      css: `body{font-family:sans-serif;transition:.4s;padding:20px} body.dark{background:#1b1e2b;color:#e9ecef} button{font-size:20px;padding:8px 16px}`,
      code: `document.querySelector('#b').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});` }
  ],
  classwork: {
    t: "Tungi rejim + FAQ",
    d: "Portfolio'ga dark mode va ochilib-yopiladigan savol-javob bloki.",
    steps: ["body.dark uslublari", "Tugma bilan toggle", "FAQ: savol bosilganda javob .open bilan ochiladi", "Ikonka ham almashsin"]
  },
  homework: "Burger menyu: telefonda ☰ tugma bosilganda menyu ochilsin (classList.toggle).",
  quiz: [
    ["Class qo'shish yoki olib tashlash:", ["classList.toggle", "classList.switch", "class.change", "toggleClass()"], 0],
    ["Uslublar qayerda yoziladi?", ["CSS'da", "Faqat JS'da", "HTML title'da", "Konsolda"], 0],
    ["Class borligini tekshirish:", ["classList.contains", "classList.has", "class.is", "hasClass"], 0]
  ],
  ai: { t: "Kodni yaxshilash", p: "Tungi rejim tanlovini sahifa yangilanganda ham eslab qolish uchun nima qilish kerak? localStorage'ni oddiy tushuntir." }
});

L({
  n: 69, m: 7, title: "Massivlar va sikllar",
  topics: ["Array", "for", "forEach", "push"],
  goals: ["Massiv yaratadi va element qo'shadi", "for va forEach bilan massivni aylanadi", "Massivdan HTML ro'yxat yaratadi"],
  concepts: [
    { t: "Massiv – ro'yxat", d: "Bir nechta qiymatni bitta o'zgaruvchida saqlash. Sanash 0 dan boshlanadi!", lang: "js", run: true,
      code: `const mevalar = ['olma', 'anor', 'uzum'];
mevalar.push('qovun');

console.log(mevalar[0]);        // olma
console.log(mevalar.length);    // 4

for (let i = 0; i < mevalar.length; i++) {
  console.log(i + 1 + '. ' + mevalar[i]);
}` },
    { t: "Massivdan sahifaga", d: "forEach bilan har bir element uchun li yaratamiz.", lang: "js", run: true,
      html: `<h3>Surxondaryo tumanlari</h3><ul id="l"></ul>`,
      code: `const tumanlar = ['Termiz', 'Angor', 'Denov', 'Sherobod', 'Boysun'];
const ul = document.querySelector('#l');
tumanlar.forEach((t) => {
  ul.innerHTML += \`<li>\${t}</li>\`;
});` }
  ],
  classwork: {
    t: "Sinf jurnali",
    d: "O'quvchilar ismlari massivi va ballar massivi bilan ishlash.",
    steps: ["ismlar massivi (8 ta)", "Sahifaga ro'yxat chiqaring", "O'rtacha ballni hisoblang (for)", "Eng yuqori ballni toping"]
  },
  homework: "Ko'paytirish jadvali: for sikli bilan 1 dan 10 gacha, sahifada jadval ko'rinishida.",
  quiz: [
    ["Birinchi element indeksi:", ["0", "1", "-1", "first"], 0],
    ["Oxiriga qo'shish:", ["push", "add", "append-last", "insert"], 0],
    ["Elementlar soni:", ["length", "size", "count", "total"], 0]
  ],
  ai: { t: "Mashq so'rash", p: "Massiv va for siklini mashq qilish uchun oson, o'rta va qiyin darajadagi 3 tadan masala tuz. Javoblarini alohida, oxirida yoz." }
});

L({
  n: 70, m: 7, title: "Input bilan ishlash: kalkulyator",
  topics: ["input.value", "Number()", "Kalkulyator"],
  goals: ["Foydalanuvchi kiritgan qiymatni o'qiydi", "Matnni songa o'giradi", "Oddiy kalkulyator yasaydi"],
  concepts: [
    { t: "value va Number", d: "input.value doim matn (string) qaytaradi. Hisoblash uchun Number() bilan songa o'giramiz.", lang: "js", run: true,
      html: `<input id="a" type="number" value="12"> +\n<input id="b" type="number" value="30">\n<button id="h">=</button>\n<b id="n"></b>`,
      css: `body{font:18px sans-serif;padding:14px} input{width:80px;font-size:18px;padding:6px} button{font-size:18px;padding:6px 14px}`,
      code: `document.querySelector('#h').addEventListener('click', () => {
  const a = Number(document.querySelector('#a').value);
  const b = Number(document.querySelector('#b').value);
  document.querySelector('#n').textContent = a + b;
});` }
  ],
  classwork: {
    t: "Kalkulyator yoki Tana vazni indeksi (BMI)",
    d: "4 amalli kalkulyator yoki BMI hisoblagich.",
    steps: ["2 ta input, 4 ta tugma (+ − × ÷)", "Nolga bo'lishni tekshiring (if)", "Natijani chiroyli ko'rsating", "Bo'sh input bo'lsa ogohlantirish"]
  },
  homework: "Valyuta kalkulyatori: so'm → dollar (kursni o'zgaruvchida saqlang).",
  quiz: [
    ["input qiymati:", ["value", "text", "content", "data"], 0],
    ["'12' ni songa o'girish:", ["Number('12')", "String(12)", "toNum('12')", "int('12')"], 0],
    ["Nolga bo'lish natijasi JS'da:", ["Infinity", "0", "xato", "null"], 0]
  ],
  ai: { t: "Debug", p: "Kalkulyatorim 2 + 3 ni '23' deb chiqaryapti. Kodim: a.value + b.value. Xato qayerda? Menga javobni emas, maslahat ber." }
});

L({
  n: 71, m: 7, title: "Mini o'yin: Sonni top!",
  topics: ["Math.random", "Math.floor", "O'yin mantig'i"],
  goals: ["Tasodifiy son yaratadi", "Shartlar va hodisalarni o'yinda birlashtiradi"],
  concepts: [
    { t: "Tasodifiy son", d: "Math.random() – 0 va 1 orasida. 1..100 uchun: Math.floor(Math.random() * 100) + 1.", lang: "js", run: true,
      html: `<h2>1 dan 100 gacha sonni top!</h2>\n<input id="i" type="number"> <button id="b">Tekshir</button>\n<p id="j"></p>`,
      css: `body{font-family:sans-serif;text-align:center} input{font-size:20px;width:90px;padding:6px} button{font-size:20px;padding:6px 16px} #j{font-size:22px;font-weight:bold}`,
      code: `const sirli = Math.floor(Math.random() * 100) + 1;
let urinish = 0;

document.querySelector('#b').addEventListener('click', () => {
  const s = Number(document.querySelector('#i').value);
  const j = document.querySelector('#j');
  urinish++;
  if (s === sirli) j.textContent = \`🎉 Topdingiz! \${urinish} ta urinishda\`;
  else if (s < sirli) j.textContent = '⬆️ Kattaroq son';
  else j.textContent = '⬇️ Kichikroq son';
});` }
  ],
  classwork: {
    t: "Sonni top o'yini",
    d: "O'yinni yaxshilang.",
    steps: ["Urinishlar soni", "10 urinishdan keyin 'Yutqazdingiz'", "'Qayta o'ynash' tugmasi", "Rangli javoblar"]
  },
  homework: "Tosh-Qaychi-Qog'oz o'yini (kompyuterga qarshi).",
  quiz: [
    ["Tasodifiy son:", ["Math.random()", "Math.rand()", "random.num()", "Math.chance()"], 0],
    ["Pastga yaxlitlash:", ["Math.floor", "Math.ceil", "Math.round-down", "Math.low"], 0],
    ["1..6 (kubik):", ["Math.floor(Math.random()*6)+1", "Math.random(6)", "Math.floor(6)", "random(1,6)"], 0]
  ],
  ai: { t: "O'yin g'oyasi", p: "Men HTML, CSS va oddiy JavaScript bilaman (if, funksiya, click, massiv). Men yasay oladigan 5 ta mini o'yin g'oyasini ber." }
});

L({
  n: 72, m: 7, title: "To-do ro'yxat va localStorage",
  topics: ["To-do app", "createElement", "localStorage", "Nazorat"],
  goals: ["Vazifalar ro'yxati ilovasini yasaydi", "Ma'lumotni localStorage'da saqlaydi"],
  concepts: [
    { t: "To-do", d: "Input → 'Qo'shish' → ro'yxatga li. li bosilsa – bajarildi (chizilgan).", lang: "js", run: true,
      html: `<h2>Vazifalarim</h2>\n<input id="i" placeholder="Yangi vazifa"> <button id="b">Qo'shish</button>\n<ul id="l"></ul>`,
      css: `body{font-family:sans-serif;padding:10px} li{cursor:pointer;padding:6px} li.done{text-decoration:line-through;opacity:.5}`,
      code: `const input = document.querySelector('#i');
const ul = document.querySelector('#l');

document.querySelector('#b').addEventListener('click', () => {
  if (input.value.trim() === '') return;
  const li = document.createElement('li');
  li.textContent = input.value;
  li.addEventListener('click', () => li.classList.toggle('done'));
  ul.appendChild(li);
  input.value = '';
});` },
    { t: "localStorage", d: "Brauzer 'xotirasi' – sahifa yangilansa ham saqlanadi.", lang: "js",
      code: `localStorage.setItem('ism', 'Aziz');        // saqlash
const ism = localStorage.getItem('ism');      // o'qish
localStorage.removeItem('ism');               // o'chirish` }
  ],
  classwork: {
    t: "To-do app",
    d: "To'liq vazifalar ilovasi.",
    steps: ["Qo'shish", "Bajarildi (toggle)", "O'chirish tugmasi (✕)", "Bonus: localStorage'da saqlash"]
  },
  homework: "To-do ilovasini chiroyli dizayn bilan GitHub Pages'ga chiqaring (7-modul nazorati).",
  quiz: [
    ["Yangi element yaratish:", ["document.createElement('li')", "new li()", "html.add('li')", "create('li')"], 0],
    ["Sahifa yangilansa ham saqlash:", ["localStorage", "console", "let", "alert"], 0],
    ["Bo'sh joylarni olib tashlash:", ["trim()", "clean()", "strip-all", "cut()"], 0]
  ],
  ai: { t: "Kod tekshiruvi", p: "Mana mening To-do ilovam kodi. Xatolarni va yaxshilash mumkin bo'lgan 3 ta joyni ko'rsat, lekin tayyor kod yozma – men o'zim tuzataman:\n[kod]" },
  note: "Nazorat darsi (7-modul)."
});

L({
  n: 73, m: 8, title: "AI bilan kod yozish: aniq prompt",
  topics: ["Prompt muhandisligi", "Kontekst", "Bosqichma-bosqich so'rash"],
  lab: "prompt",
  goals: ["Kod uchun aniq va to'liq prompt yozadi", "Katta vazifani kichik qadamlarga bo'lib so'raydi", "AI yozgan kodni o'qib tushunadi"],
  concepts: [
    { t: "Yaxshi kod prompti", d: "1) Kontekst: 'Men boshlovchiman, HTML/CSS/JS bilaman'. 2) Aniq vazifa. 3) Cheklov: 'kutubxonasiz, bitta fayl'. 4) Format: 'har qatorga izoh'. 5) 'Tushuntirib ber' so'rovi.", lab: "prompt" },
    { t: "Bosqichma-bosqich", d: "Bir yo'la 'butun sayt qil' demang. Avval karkas, keyin dizayn, keyin JS. Har qadamni tushunib, keyin davom eting." },
    { t: "Qoida: tushunmagan kodni ishlatma", d: "AI bergan har bir qatorni tushuntira olishingiz kerak. Tushunmasangiz – 'shu qatorni tushuntir' deb so'rang." }
  ],
  classwork: {
    t: "AI bilan mini-ilova",
    d: "AI yordamida 'Kunlik suv ichish hisoblagichi' ilovasini qadamma-qadam yarating.",
    steps: ["Prompt 1: HTML karkas", "Prompt 2: CSS dizayn", "Prompt 3: JS logika", "Har qadamdan keyin kodni o'zingiz tushuntiring"]
  },
  homework: "AI bilan qilgan ishingizning 'prompt tarixi'ni yozib keling: qaysi prompt yaxshi ishladi va nega.",
  quiz: [
    ["Yaxshi prompt'da kontekst nima?", ["O'zingiz va vaziyat haqida ma'lumot", "Faqat so'z", "Smayliklar", "Parol"], 0],
    ["AI kodi tushunarsiz bo'lsa:", ["Tushuntirishni so'rash", "Ko'r-ko'rona nusxalash", "O'chirib tashlash", "Hech kimga aytmaslik"], 0],
    ["Katta vazifa uchun eng yaxshi usul:", ["Kichik qadamlarga bo'lish", "Bir yo'la so'rash", "So'ramaslik", "Tasodifiy so'rash"], 0]
  ],
  ai: { t: "Namuna prompt", p: "Men HTML, CSS va oddiy JavaScript biladigan boshlovchiman. Menga 'suv ichish hisoblagichi' uchun faqat HTML karkasini yoz: sarlavha, stakanlar soni, +1 tugmasi. Kutubxona ishlatma. Har qatorga o'zbekcha izoh yoz." }
});

L({
  n: 74, m: 8, title: "AI bilan xatolarni topish (debugging)",
  topics: ["Xato turlari", "Console xatolari", "AI'dan maslahat so'rash"],
  goals: ["Konsoldagi xato xabarini o'qiydi", "Xatoni AI'ga to'g'ri tasvirlab beradi", "Tuzatishni o'zi amalga oshiradi"],
  concepts: [
    { t: "Xatoni o'qish", d: "Konsolda qizil xabar: xato turi, xabar va qator raqami. Masalan: 'Uncaught TypeError: Cannot read properties of null' – element topilmadi (selector xato).", lang: "js", run: true,
      html: `<button id="btn">Bos</button>`,
      code: `// Xato: id noto'g'ri yozilgan
const tugma = document.querySelector('#buton');
console.log(tugma);   // null
tugma.addEventListener('click', () => console.log('bosildi'));` },
    { t: "AI'ga xatoni tasvirlash", d: "1) Nima qilmoqchi edim. 2) Nima bo'lyapti. 3) Xato xabari (to'liq). 4) Kodning tegishli qismi. 5) 'Javobni emas, yo'l-yo'riq ber'." }
  ],
  classwork: {
    t: "Xato ovchisi",
    d: "O'qituvchi tayyorlagan 5 ta 'buzuq' kodni tuzating: avval o'zingiz, qiyin bo'lsa AI bilan.",
    steps: ["Konsolni oching", "Xato xabarini o'qing", "Qator raqamiga boring", "AI'ga to'g'ri tasvirlab, maslahat oling", "Tuzatib, sababini daftarga yozing"],
    starter: { html: `<h1 id="t">0</h1>\n<button id="b">+1</button>`, js: `let son = 0\nconst t = document.querySelector('#title');\ndocument.querySelector('#b').addEventListener('click', () => {\n  son++;\n  t.textcontent = son;\n});` }
  },
  homework: "O'z loyihalaringizdan bitta xatoni topib, 'xato – sabab – yechim' jadvalini to'ldiring.",
  quiz: [
    ["null – bu odatda:", ["Element topilmadi", "Hammasi yaxshi", "Son", "Rang"], 0],
    ["textcontent va textContent:", ["Katta-kichik harf muhim", "Farqi yo'q", "Ikkisi ham xato", "Faqat CSS'da"], 0],
    ["AI'ga xato haqida nimani yuborish kerak?", ["Xato xabari va tegishli kod", "Faqat 'ishlamayapti'", "Parolni", "Hech narsa"], 0]
  ],
  ai: { t: "Debug prompti", p: "Men tugma bosilganda sonni oshirmoqchiman. Lekin konsolda 'Cannot set properties of null' chiqyapti. Kodim:\n[kod]\nXato qayerda ekanini topishim uchun yo'l-yo'riq ber, tayyor javob berma." }
});

L({
  n: 75, m: 8, title: "AI bilan dizayn: rang, rasm va matn",
  topics: ["Rang palitra", "Rasm generatsiyasi", "Mualliflik huquqi", "Etika"],
  goals: ["AI yordamida rang palitra va matn g'oyalari oladi", "Rasm generatorlaridan mas'uliyat bilan foydalanadi", "Mualliflik va halollik qoidalarini biladi"],
  concepts: [
    { t: "Dizayn yordamchisi", d: "AI'dan so'rash mumkin: rang palitrasi (hex kodlar bilan), shrift juftligi, sarlavha va tugma matnlari, bo'limlar tuzilishi. Lekin yakuniy qarorni siz qabul qilasiz!" },
    { t: "AI rasmlar", d: "Rasm generatorlari matndan rasm yaratadi. Qoidalar: real odamlarning soxta rasmini yaratmang; AI rasmini 'AI yordamida yaratilgan' deb belgilang; boshqalarning ishini o'ziniki qilib ko'rsatmang." },
    { t: "Palitrani CSS'ga", d: "AI bergan ranglarni CSS o'zgaruvchilarga yozamiz.", lang: "css", run: true,
      html: `<div class="c"><h2>Termiz Tour</h2><p>Qadimiy shaharni kashf eting</p><button>Sayohat</button></div>`,
      code: `:root { --qum: #f2d6a2; --loy: #b5651d; --osmon: #3a86ff; --tun: #1d2a3a; }
.c { background: var(--qum); color: var(--tun); padding: 24px; border-radius: 14px; font-family: sans-serif; }
.c h2 { color: var(--loy); margin: 0 0 6px; }
.c button { background: var(--osmon); color: #fff; border: 0; padding: 10px 20px; border-radius: 8px; }` }
  ],
  classwork: {
    t: "Brend yarating",
    d: "O'ylab topilgan biznes (masalan, 'Termiz Tour') uchun AI bilan mini-brend.",
    steps: ["AI'dan 3 ta nom g'oyasi", "Rang palitrasi (4 rang) → CSS o'zgaruvchilar", "Slogan va Hero matni", "Bitta bosh sahifa bloki"]
  },
  homework: "Yakuniy loyihangiz uchun g'oya va palitra tayyorlab keling.",
  quiz: [
    ["AI yaratgan rasmni ishlatganda:", ["'AI yordamida yaratilgan' deb belgilash", "O'zim chizdim deyish", "Yashirish", "Sotish"], 0],
    ["Real odamning soxta rasmini yaratish:", ["Mumkin emas", "Mumkin", "Faqat do'stga", "Faqat kechasi"], 0],
    ["Dizayn bo'yicha yakuniy qaror:", ["Men qabul qilaman", "Faqat AI", "Tasodif", "Qo'shnim"], 0]
  ],
  ai: { t: "Palitra prompti", p: "Men 'Termiz Tour' degan sayohat sayti qilyapman. Qadimiy Termiz, qum, loy va ko'k osmon ruhidagi 4 rangli palitra ber: nomi, hex kodi va qayerda ishlatish." }
});

L({
  n: 76, m: 8, title: "AI javobini tekshirish va xavfsizlik",
  topics: ["Gallyutsinatsiya", "Manbani tekshirish", "Maxfiylik", "Akademik halollik"],
  goals: ["AI noto'g'ri ma'lumot berishi mumkinligini biladi", "Ma'lumotni ishonchli manbalardan tekshiradi", "Shaxsiy ma'lumotlarni himoya qiladi"],
  concepts: [
    { t: "AI ham xato qiladi", d: "'Gallyutsinatsiya' – AI ishonch bilan noto'g'ri narsa aytishi. Kod ishlamasligi, mavjud bo'lmagan CSS xususiyati yoki noto'g'ri sana bo'lishi mumkin. Tekshirish: MDN, W3Schools, kitob, o'qituvchi." },
    { t: "Tekshiruv ro'yxati", d: "✓ Kodni ishga tushirib ko'rdimmi? ✓ Har qatorni tushunamanmi? ✓ Rasmiy hujjatda bormi? ✓ Shaxsiy ma'lumot yozmadimmi? ✓ Ishimda AI'dan foydalanganimni aytdimmi?" },
    { t: "Mavjud bo'lmagan xususiyat", d: "AI ba'zan shunday 'kod' beradi. Sinab ko'ring – ishlamaydi!", lang: "css", run: true,
      html: `<p class="x">Men markazdamanmi?</p>`,
      code: `/* AI "taklif qilgan" noto'g'ri kod */
.x { text-center: true; font-colour: red; }

/* To'g'risi */
/* .x { text-align: center; color: red; } */` }
  ],
  classwork: {
    t: "Faktlarni tekshir",
    d: "AI'ga 5 ta savol bering (HTML/CSS va Termiz tarixi haqida), javoblarni manbalardan tekshiring.",
    steps: ["5 ta savol", "Javoblarni yozib oling", "MDN / W3Schools / kitobdan tekshiring", "Nechta to'g'ri, nechta xato – jadval"]
  },
  homework: "Oila a'zolaringizga 'AI bilan xavfsiz ishlash' bo'yicha 5 ta qoidani tushuntiring.",
  quiz: [
    ["Gallyutsinatsiya – bu:", ["AI'ning ishonch bilan noto'g'ri javobi", "Tez javob", "Rasm", "Virus"], 0],
    ["CSS xususiyatini tekshirish uchun:", ["MDN / W3Schools", "Faqat AI", "Taxmin", "Reklama"], 0],
    ["Uy vazifasini AI yozib bersa:", ["O'qituvchiga aytaman va tushunib olaman", "Yashiraman", "O'zimniki deyman", "Sotaman"], 0]
  ],
  ai: { t: "Tekshiruv prompti", p: "Sen menga bergan javobingizda ishonchingiz komil bo'lmagan joylarni belgilab ber va ularni qayerdan tekshirishim mumkinligini ayt." },
  links: [["MDN Web Docs", "https://developer.mozilla.org"]]
});

L({
  n: 77, m: 8, title: "Yakuniy loyiha: g'oya va reja",
  topics: ["G'oya", "Wireframe", "Reja", "Jamoaviy ish"],
  goals: ["Loyiha g'oyasini tanlaydi va tavsiflaydi", "Qog'ozda yoki Figma'da wireframe chizadi", "Ishni qadamlarga bo'ladi"],
  plan: [["0–10", "Loyiha namunalari va talablar"], ["10–25", "G'oya tanlash va tavsif"], ["25–40", "Wireframe chizish"], ["40–45", "Rejani taqdim etish"]],
  concepts: [
    { t: "Loyiha talablari", d: "Kamida 3 bo'lim, responsive, 1 ta JS funksiya (tugma, o'yin, forma, galereya), semantik HTML, GitHub Pages havolasi, README. AI'dan foydalanish ruxsat etiladi, lekin 'AI jurnali' yuritiladi." },
    { t: "G'oyalar", d: "Portfolio + o'yin; Maktab sayti; Termiz sayyohlik sayti; Retseptlar kitobi; Kutubxona katalogi; Sport klubi sahifasi; Viktorina ilovasi." }
  ],
  classwork: {
    t: "Loyiha pasporti",
    d: "Loyiha pasportini to'ldiring.",
    steps: ["Nomi va maqsadi (1 gap)", "Kim uchun?", "Bo'limlar ro'yxati", "Wireframe (telefon va kompyuter)", "3 darslik reja"]
  },
  homework: "Rasmlar, matnlar va ranglarni tayyorlang, GitHub'da bo'sh repo oching.",
  quiz: [
    ["Wireframe – bu:", ["Sahifaning oddiy chizma rejasi", "Tayyor dizayn", "Kod", "Server"], 0],
    ["AI jurnali nima uchun?", ["Qayerda AI yordam berganini ko'rsatish", "Parollar uchun", "O'yin uchun", "Keraksiz"], 0],
    ["Loyiha internetda qayerda bo'ladi?", ["GitHub Pages", "Word", "Paint", "USB"], 0]
  ],
  ai: { t: "G'oyani tekshirish", p: "Mening loyiha g'oyam: [g'oya]. Men HTML, CSS va oddiy JS bilaman, 3 ta dars (har biri 45 daqiqa) vaqtim bor. G'oya shu vaqtga mosmi? Qaysi qismini soddalashtirish kerak?" }
});

L({
  n: 78, m: 8, title: "Yakuniy loyiha: HTML va CSS",
  topics: ["Karkas", "Dizayn", "Responsive"],
  goals: ["Loyihaning HTML karkasini va asosiy dizaynini yozadi", "Responsive qiladi"],
  plan: [["0–5", "Reja bilan tanishish"], ["5–40", "Mustaqil ish (o'qituvchi aylanib yordam beradi)"], ["40–45", "commit va push"]],
  concepts: [
    { t: "Ish tartibi", d: "HTML karkas → umumiy CSS (:root ranglar, *, body, .container) → bo'limlar → @media → git commit." }
  ],
  classwork: {
    t: "Loyiha ustida ishlash",
    d: "Wireframe asosida HTML va CSS.",
    steps: ["Semantik karkas", ":root ranglar", "Bo'limlar dizayni", "Telefon uchun @media", "git commit -m 'HTML va CSS'"]
  },
  homework: "Dizaynni yakunlang, 1 ta do'stingizga ko'rsatib fikrini oling.",
  quiz: [
    ["Ranglarni bir joyda saqlash:", [":root o'zgaruvchilari", "Har elementda alohida", "HTML'da", "Rasmda"], 0],
    ["Har ish kuni oxirida:", ["git commit va push", "Hammasini o'chirish", "Faylni qayta nomlash", "Hech narsa"], 0],
    ["Telefon uchun:", ["@media", "@phone", "@small", "@mobile-only"], 0]
  ],
  ai: { t: "Kod sharhi", p: "Loyiham CSS kodini ko'rib chiq: responsive muammolar va takrorlanayotgan kodni ko'rsat. Tuzatishni o'zim qilaman." }
});

L({
  n: 79, m: 8, title: "Yakuniy loyiha: JavaScript va internetga chiqarish",
  topics: ["JS funksiya", "Tekshiruv", "GitHub Pages", "README"],
  goals: ["Loyihaga interaktivlik qo'shadi", "Loyihani tekshirib, internetga chiqaradi"],
  plan: [["0–5", "Tekshiruv ro'yxati"], ["5–35", "JS qo'shish va tuzatish"], ["35–42", "GitHub Pages + README"], ["42–45", "Taqdimotga tayyorgarlik"]],
  concepts: [
    { t: "Yakuniy tekshiruv", d: "✓ Barcha havolalar ishlaydi ✓ Rasmlarda alt ✓ Telefonda chiroyli ✓ Konsolda xato yo'q ✓ README ✓ AI jurnali ✓ Pages havolasi." }
  ],
  classwork: {
    t: "Jonlantirish va nashr",
    d: "Loyihaga JS qo'shing va internetga chiqaring.",
    steps: ["Kamida 1 ta interaktiv funksiya", "Konsolda xato yo'qligini tekshiring", "README.md", "GitHub Pages", "Havolani guruhga yuboring"]
  },
  homework: "3 daqiqalik taqdimot tayyorlang: g'oya, qanday qildim, qiyinchilik, AI qayerda yordam berdi.",
  quiz: [
    ["Konsolda xato bo'lsa:", ["Tuzatish kerak", "E'tibor bermaslik", "Konsolni yopish", "Kompyuterni o'chirish"], 0],
    ["README'da nima bo'ladi?", ["Loyiha tavsifi va havolasi", "Parollar", "Rasmlar faqat", "Hech narsa"], 0],
    ["Taqdimot necha daqiqa?", ["3 daqiqa", "30 daqiqa", "1 soat", "10 soniya"], 0]
  ],
  ai: { t: "Taqdimot rejasi", p: "Mening loyiham haqida 3 daqiqalik taqdimot rejasini tuz: kirish, demo, qiyinchiliklar, xulosa. Loyiha: [qisqacha tavsif]" }
});

L({
  n: 80, m: 8, title: "Taqdimot va bitiruv",
  topics: ["Taqdimot", "Baholash", "Keyingi qadamlar"],
  goals: ["Loyihasini auditoriya oldida taqdim etadi", "Boshqalarning ishiga konstruktiv fikr bildiradi", "Keyingi o'qish yo'lini biladi"],
  plan: [["0–5", "Kirish va tartib"], ["5–38", "Taqdimotlar (har biri 3 daqiqa + 1 savol)"], ["38–43", "Mukofotlash va sertifikatlar"], ["43–45", "Keyingi qadamlar"]],
  concepts: [
    { t: "Baholash mezonlari", d: "G'oya va foydaliligi (2), dizayn (2), responsive (2), JavaScript (2), taqdimot va AI'dan halol foydalanish (2) = 10 ball." },
    { t: "Keyingi qadamlar", d: "JavaScript chuqurroq (DOM, fetch API), Git'da jamoaviy ish, React, 3D va animatsiyalar (Three.js), portfolio'ni boyitish. freeCodeCamp sertifikatlari." }
  ],
  classwork: {
    t: "Loyihalar ko'rgazmasi",
    d: "Har bir o'quvchi loyihasini taqdim etadi.",
    steps: ["Taqdimot: 3 daqiqa", "Sinfdoshlardan 1 savol", "Baholash varaqasi", "Eng yaxshi loyihalar: 'Eng chiroyli', 'Eng foydali', 'Eng ijodiy'"]
  },
  homework: "Yozgi ta'til uchun: freeCodeCamp 'Responsive Web Design' sertifikatini olishga harakat qiling!",
  quiz: [
    ["HTML vazifasi:", ["Tuzilma (skelet)", "Rang", "Harakat", "Server"], 0],
    ["CSS vazifasi:", ["Ko'rinish", "Tuzilma", "Ma'lumotlar bazasi", "Server"], 0],
    ["JavaScript vazifasi:", ["Interaktivlik", "Faqat rang", "Faqat rasm", "Arxivlash"], 0]
  ],
  ai: { t: "Keyingi yo'l", p: "Men HTML, CSS, Sass va JavaScript asoslarini o'rgandim. Keyingi 6 oy uchun o'qish rejasini tuz: har oy uchun mavzu va 1 ta loyiha g'oyasi." },
  links: [["freeCodeCamp", "https://www.freecodecamp.org"], ["MDN", "https://developer.mozilla.org"]],
  note: "Ota-onalarni taqdimotga taklif qiling. Sertifikatlarni oldindan tayyorlang."
});
