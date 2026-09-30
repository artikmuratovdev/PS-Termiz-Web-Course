/* 21–40-darslar: CSS davomi, Flexbox va formalar */

L({
  n: 21, m: 3, title: "Tugmalar dizayni: Outline Buttons",
  topics: ["Tugma uslublari", "cursor", "Takrorlash"],
  goals: ["Turli uslubdagi tugmalar yasaydi (to'ldirilgan, outline, dumaloq)", "cursor: pointer ishlatadi", "Bitta asosiy va qo'shimcha class bilan ishlaydi"],
  concepts: [
    { t: "Outline tugma", d: "Ichi bo'sh, faqat ramkasi rangli tugma. Ikki class: .btn – umumiy, .btn-red – rang.", lang: "css", run: true,
      html: `<button class="btn">Oddiy</button>\n<button class="btn outline">Outline</button>\n<button class="btn outline red">Qizil</button>\n<button class="btn pill">Dumaloq</button>`,
      code: `.btn { padding: 10px 22px; font-size: 16px; border: 2px solid #1971c2;
  background: #1971c2; color: white; border-radius: 6px; cursor: pointer; margin: 6px; }
.outline { background: transparent; color: #1971c2; }
.red { border-color: #e03131; color: #e03131; }
.pill { border-radius: 40px; }` }
  ],
  classwork: {
    t: "Outline Buttons to'plami",
    d: "8 xil tugma yasang: 4 rang × 2 uslub (to'ldirilgan va outline).",
    steps: [".btn umumiy class", "4 ta rang classi", ".outline class", "Tugmalarni 2 qatorga joylang"],
    starter: { html: `<button class="btn">Saqlash</button>\n<button class="btn outline">Bekor</button>`, css: `.btn {\n  padding: 10px 22px;\n  border: 2px solid seagreen;\n  background: seagreen;\n  color: white;\n}\n.outline {\n  background: transparent;\n  color: seagreen;\n}` }
  },
  homework: "Simple HTML CSS: o'z sahifangizdagi barcha tugmalarni yangi uslubga o'tkazing.",
  quiz: [
    ["Sichqoncha 'qo'l' ko'rinishi:", ["cursor: pointer", "mouse: hand", "pointer: yes", "cursor: click"], 0],
    ["Shaffof fon:", ["background: transparent", "background: none-color", "opacity: fon", "color: 0"], 0],
    ["Elementga 2 ta class:", ["class='btn red'", "class='btn' class='red'", "class='btn,red'", "classes='btn red'"], 0]
  ],
  ai: { t: "Tugma variantlari", p: "Menga 3 xil zamonaviy CSS tugma uslubini yozib ber va har birini qachon ishlatishni tushuntir." }
});

L({
  n: 22, m: 3, title: "Gradientlar",
  topics: ["linear-gradient", "radial-gradient", "conic-gradient"],
  lab: "gradient",
  goals: ["3 xil gradient yaratadi", "Burchak (deg) va foizlarni boshqaradi", "Gradient generator saytlaridan foydalanadi"],
  concepts: [
    { t: "linear-gradient", d: "To'g'ri chiziq bo'ylab rang o'tishi: linear-gradient(burchak, rang1 foiz, rang2 foiz).", lang: "css", run: true,
      html: `<div class="box"></div>`,
      code: `.box { height: 160px; border-radius: 12px;
  background-image: linear-gradient(90deg, #ff9a3c 0%, #ff4d6d 50%, #7b2ff7 100%); }` },
    { t: "radial va conic", d: "radial – markazdan doira bo'ylab, conic – soat mili kabi aylana bo'ylab.", lang: "css", run: true,
      html: `<div class="r"></div><div class="c"></div>`,
      code: `div { width: 150px; height: 150px; display: inline-block; margin: 8px; border-radius: 50%; }
.r { background-image: radial-gradient(circle, yellow 10%, orange 40%, red 80%); }
.c { background-image: conic-gradient(from 180deg, red, yellow, lime, cyan, blue, magenta, red); }` },
    { t: "Gradient generator", d: "Laboratoriyadagi generatorda ranglarni tanlang – tayyor CSS kodini nusxalang.", lab: "gradient" }
  ],
  classwork: {
    t: "Quyosh botishi",
    d: "Gradientlar bilan quyosh botishi manzarasi.",
    steps: ["Osmon – linear-gradient (to'q ko'k → pushti → sariq)", "Quyosh – radial-gradient doira", "Rang g'ildiragi – conic-gradient", "Foizlarni o'zgartirib tajriba qiling"],
    starter: { html: `<div class="sky">\n  <div class="sun"></div>\n</div>`, css: `.sky {\n  height: 250px;\n  background-image: linear-gradient(180deg, #1b1f5e, #ff6f91, #ffc75f);\n  padding-top: 80px;\n}\n.sun {\n  width: 100px; height: 100px; margin: 0 auto; border-radius: 50%;\n  background-image: radial-gradient(circle, #fff6b0, #ffb300);\n}` }
  },
  homework: "O'z portfoliongiz fonini gradientga o'zgartiring va 3 xil gradientli tugma yasang.",
  quiz: [
    ["Aylana bo'ylab gradient:", ["linear", "radial", "conic", "circle"], 2],
    ["Chapdan o'ngga:", ["90deg", "0deg", "180deg", "360deg"], 0],
    ["Gradient qaysi xususiyatga yoziladi?", ["color", "background-image", "border", "font"], 1]
  ],
  ai: { t: "Gradient kodi", p: "'Surxondaryo quyoshi' mavzusida chiroyli CSS linear-gradient yozib ber va har bir rang nimani anglatishini ayt." },
  links: [["cssgradient.io", "https://cssgradient.io"]]
});

L({
  n: 23, m: 3, title: "Soyalar: box-shadow va text-shadow. Oy",
  topics: ["box-shadow", "text-shadow", "inset"],
  lab: "shadow",
  goals: ["box-shadow parametrlarini tushunadi: x, y, blur, size, rang", "text-shadow bilan matnga soya beradi", "inset soyadan foydalanib Oy yasaydi"],
  concepts: [
    { t: "box-shadow", d: "box-shadow: x y blur size rang. inset – soya ichkarida.", lang: "css", run: true,
      html: `<div class="card">Soyali karta</div>`,
      code: `.card { width: 200px; padding: 30px; margin: 30px auto; background: white;
  border-radius: 14px; text-align: center;
  box-shadow: 10px 10px 25px 0 rgba(0, 0, 0, 0.25); }` },
    { t: "text-shadow", d: "text-shadow: x y blur rang (size yo'q).", lang: "css", run: true,
      html: `<h1>NEON</h1>`,
      code: `body { background: #111; }
h1 { color: #fff; font-size: 64px; text-align: center; font-family: sans-serif;
  text-shadow: 0 0 10px #0ff, 0 0 30px #0ff; }` },
    { t: "Classwork: Oy", d: "Oy o'roqsimon ko'rinishi – inset soya bilan!", lang: "css", run: true,
      html: `<div class="moon"></div>`,
      code: `body { background: #0b1026; }
.moon { width: 150px; height: 150px; margin: 30px auto; border-radius: 50%;
  box-shadow: inset 30px -10px 0 0 #ffe066; }` }
  ],
  classwork: {
    t: "Tungi osmon",
    d: "Laboratoriyada soyani sozlang, keyin Oy va neon yozuvli tungi manzara yasang.",
    steps: ["Fon – to'q ko'k", "Oy – inset soya", "Sarlavha – neon text-shadow", "Yulduzlar – kichik oq doiralar box-shadow bilan"]
  },
  homework: "Flags: CSS bilan 3 ta bayroq (O'zbekiston, Yaponiya, Fransiya).",
  quiz: [
    ["Ichki soya:", ["inset", "inner", "inside", "in"], 0],
    ["text-shadow'da qaysi parametr yo'q?", ["x", "blur", "size", "rang"], 2],
    ["box-shadow: 0 0 20px lime — bu:", ["Atrofida yashil nur", "Yashil ramka", "Yashil fon", "Yashil matn"], 0]
  ],
  ai: { t: "Neon effekt", p: "CSS text-shadow bilan neon effektini qanday qilish mumkin? Qadamlarni tushuntir va 2 xil rang misolini yoz." }
});

L({
  n: 24, m: 3, title: "Bayroqlar amaliyoti",
  topics: ["Takrorlash", "div'lar bilan chizish", "Flags"],
  goals: ["div, rang va o'lcham yordamida bayroq chizadi", "O'zbekiston bayrog'i proporsiyalarini hisoblaydi"],
  concepts: [
    { t: "O'zbekiston bayrog'i", d: "Ko'k, oq, yashil yo'llar; ular orasida ingichka qizil chiziqlar. Oy va yulduzlar – keyingi bosqich.", lang: "css", run: true,
      html: `<div class="flag">\n  <div class="blue"></div><div class="red"></div>\n  <div class="white"></div><div class="red"></div>\n  <div class="green"></div>\n</div>`,
      code: `.flag { width: 300px; border: 1px solid #ccc; }
.blue  { height: 50px; background: #0099b5; }
.white { height: 50px; background: #fff; }
.green { height: 50px; background: #1eb53a; }
.red   { height: 4px;  background: #ce1126; }` },
    { t: "Yaponiya bayrog'i", d: "Oq to'rtburchak markazida qizil doira.", lang: "css", run: true,
      html: `<div class="jp"><div class="sun"></div></div>`,
      code: `.jp { width: 300px; height: 200px; background: white; border: 1px solid #ccc; padding-top: 40px; box-sizing: border-box; }
.sun { width: 120px; height: 120px; margin: 0 auto; border-radius: 50%; background: #bc002d; }` }
  ],
  classwork: {
    t: "Bayroqlar ko'rgazmasi",
    d: "5 ta bayroq chizing va ostiga davlat nomini yozing.",
    steps: ["O'zbekiston (Oyni inset soya bilan qo'shing)", "Yaponiya", "Fransiya / Italiya (3 ustun)", "O'zingiz tanlagan 2 ta davlat"]
  },
  homework: "Mahallangiz yoki maktabingiz uchun o'z bayrog'ingizni o'ylab topib CSS'da chizing.",
  quiz: [
    ["O'zbekiston bayrog'idagi ingichka chiziqlar rangi:", ["Qizil", "Sariq", "Qora", "Oq"], 0],
    ["Doira yasash:", ["border-radius: 50%", "shape: circle", "round: 1", "radius: full"], 0],
    ["div o'zi qanday balandlikda bo'ladi?", ["Kontentiga qarab", "Har doim 100px", "Ekran bo'yi", "0 dan katta bo'lmaydi"], 0]
  ],
  ai: { t: "Proporsiya", p: "O'zbekiston bayrog'ining rasmiy o'lcham nisbatlari qanday? CSS'da 300px kenglik uchun har bir yo'l balandligini hisoblab ber." }
});

L({
  n: 25, m: 3, title: "Hover, ikki class va transition",
  topics: [":hover", "dual class", "transition"],
  goals: [":hover bilan sichqoncha ustiga kelganda uslubni o'zgartiradi", "transition bilan silliq o'zgarish beradi", "Bitta elementga ikki class qo'llaydi"],
  concepts: [
    { t: ":hover", d: "Sichqoncha element ustiga kelganda ishlaydigan holat.", lang: "css", run: true,
      html: `<button class="btn">Ustimga kel</button>`,
      code: `.btn { padding: 14px 30px; font-size: 18px; border: 0; border-radius: 10px;
  background: #ff922b; color: white; cursor: pointer;
  transition: 0.4s; }
.btn:hover { background: #d9480f; transform: scale(1.1); }` },
    { t: "transition", d: "transition: xususiyat vaqt tezlik. Masalan: transition: background 0.3s ease;", lang: "css", run: true,
      html: `<div class="box">Hover</div>`,
      code: `.box { width: 120px; height: 120px; background: teal; color: white; display: grid; place-items: center;
  border-radius: 10px; transition: all 1s ease; }
.box:hover { width: 260px; background: crimson; border-radius: 60px; }` }
  ],
  classwork: {
    t: "Matrix va Command Buttons",
    d: "Qora fonda yashil matritsa uslubidagi tugmalar paneli.",
    steps: ["Fon – qora, matn – #00ff41", "6 ta tugma: outline yashil", "Hover'da fon yashil, matn qora", "transition: 0.3s"],
    starter: { html: `<div class="panel">\n  <button class="cmd">START</button>\n  <button class="cmd">STOP</button>\n</div>`, css: `body { background: black; }\n.cmd {\n  font-family: monospace;\n  color: #00ff41;\n  background: transparent;\n  border: 2px solid #00ff41;\n  padding: 12px 24px;\n}` }
  },
  homework: "Command Buttons: hover va transition'li 6 ta turli tugma.",
  quiz: [
    ["Sichqoncha ustida:", [":hover", ":mouse", ":over", ":active"], 0],
    ["Silliq o'zgarish:", ["transition", "animation-speed", "smooth", "delay"], 0],
    ["transition qayerga yoziladi?", ["Asosiy selektorga", "Faqat :hover'ga", "head'ga", "HTML'ga"], 0]
  ],
  ai: { t: "Effekt g'oyalari", p: "Tugma uchun 5 ta turli hover effekt g'oyasini CSS kodi bilan ber (rang, soya, kattalashish, chiziq, fon)." }
});

L({
  n: 26, m: 3, title: "Fon rasmi: background-image: url()",
  topics: ["background-image", "background-repeat", "background-size", "background-position"],
  goals: ["Elementga fon rasm qo'yadi", "cover va contain farqini biladi", "Gradient va rasmni birga ishlatadi (qoraytirish)"],
  concepts: [
    { t: "Fon rasm", d: "cover – butun qutini to'ldiradi (qirqilishi mumkin), contain – rasm to'liq ko'rinadi. cover bo'lsa repeat kerak emas.", lang: "css", run: true,
      html: `<div class="hero"><h1>Termizga xush kelibsiz</h1></div>`,
      code: `.hero { height: 240px; display: grid; place-items: center; color: white;
  background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),
                    url('https://picsum.photos/id/1040/900/500');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; }` },
    { t: "Ikki rasm bitta fonda", d: "Vergul bilan bir nechta fon rasm yoziladi.", lang: "css",
      code: `.imgbox {
  background-image: url('image1.jpg'), url('image2.jpg');
  background-repeat: no-repeat;
  background-size: 50%, 50%;
  background-position: left, right;
}` }
  ],
  classwork: {
    t: "Hover'da harakatlanuvchi fon",
    d: "Fon rasm hover'da background-position: top dan bottom ga siljiydi.",
    steps: ["Uzun (vertikal) rasm tanlang", "background-position: top", "hover'da bottom", "transition: 3s"],
    starter: { html: `<div class="scroll"></div>`, css: `.scroll {\n  width: 300px; height: 200px;\n  background-image: url('https://picsum.photos/id/1018/300/900');\n  background-size: cover;\n  background-position: top;\n  transition: 3s;\n}\n.scroll:hover {\n  background-position: bottom;\n}` }
  },
  homework: "Illustration card va havo sharlari (air balloons) sahifasi: fon rasm ustida matn.",
  quiz: [
    ["Butun qutini to'ldirish:", ["cover", "contain", "fill-all", "repeat"], 0],
    ["Rasm takrorlanmasin:", ["no-repeat", "repeat-none", "once", "single"], 0],
    ["Rasmni qoraytirish uchun ustiga:", ["linear-gradient(rgba(...))", "filter-dark", "opacity: fon", "black-mode"], 0]
  ],
  ai: { t: "Rasm tanlash", p: "Sayohat sayti bosh sahifasi uchun fon rasm tanlashda nimalarga e'tibor berish kerak? 5 ta maslahat." }
});

L({
  n: 27, m: 3, title: "Transform: rotate, scale, translate, skew",
  topics: ["transform", "opacity", ".btn:hover .box"],
  lab: "transform",
  goals: ["Elementni aylantiradi, kattalashtiradi, siljitadi va qiyshaytiradi", "opacity bilan shaffoflik beradi", "Bir elementga hover qilganda boshqasini o'zgartiradi"],
  concepts: [
    { t: "4 xil transform", d: "rotate(45deg) – aylantirish, scale(1.5) – kattalashtirish, translate(x, y) – siljitish, skew(20deg) – qiyshaytirish. Laboratoriyada sinab ko'ring!", lab: "transform" },
    { t: "Ota-ona hover", d: ".card:hover .img – karta ustiga kelganda ichidagi rasm o'zgaradi.", lang: "css", run: true,
      html: `<div class="card"><div class="icon">⭐</div><p>Ustimga kel</p></div>`,
      code: `.card { width: 180px; padding: 20px; text-align: center; background: #f1f3f5; border-radius: 12px; }
.icon { font-size: 50px; transition: 0.6s; }
.card:hover .icon { transform: rotate(360deg) scale(1.4); }
.card p { opacity: 0.4; transition: 0.6s; }
.card:hover p { opacity: 1; }` }
  ],
  classwork: {
    t: "Quyosh va Oy",
    d: "Hover'da quyosh botib, oy chiqadigan karta.",
    steps: ["Karta – osmon", "Quyosh (sariq doira) va Oy (kulrang doira)", "Hover'da quyosh translateY(200px)", "Oy teskari yo'nalishda chiqadi, fon qorayadi"]
  },
  homework: "McQueen: mashina rasmi hover'da o'ngga siljib (translate), g'ildiraklar aylansin (rotate).",
  quiz: [
    ["Aylantirish:", ["rotate", "turn", "spin", "round"], 0],
    ["Ikki baravar kattalashtirish:", ["scale(2)", "size(2)", "zoom: 2x", "grow(2)"], 0],
    ["Yarim shaffof:", ["opacity: 0.5", "opacity: 50", "visible: half", "alpha: 5"], 0]
  ],
  ai: { t: "Tushuntirish", p: "CSS transform: translate va margin bilan siljitish farqi nima? Oddiy misol bilan tushuntir." }
});

L({
  n: 28, m: 3, title: "Box-sizing va foydali qoidalar",
  topics: ["box-sizing", "* { margin: 0 }", "max-width", "Maslahatlar"],
  goals: ["box-sizing: border-box nima uchun kerakligini tushunadi", "Brauzer standart marginlarini tozalaydi", "Yaxshi amaliyot qoidalarini biladi"],
  concepts: [
    { t: "box-sizing", d: "Odatda width + padding + border = haqiqiy kenglik. border-box bo'lsa width ichiga hammasi kiradi – hisob-kitob oson.", lang: "css", run: true,
      html: `<div class="a">content-box: 300 + 100 + 4 = 404px</div>\n<div class="b">border-box: aniq 300px</div>`,
      code: `div { width: 300px; padding: 50px; border: 2px solid black; margin: 8px 0; background: lime; }
.b { box-sizing: border-box; background: gold; }` },
    { t: "Har sahifa boshida", d: "Barcha elementlarga umumiy sozlama.", lang: "css",
      code: `* {
  margin: 0;
  box-sizing: border-box;
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}` },
    { t: "Oltin maslahatlar", d: "1) Iloji boricha height bermang – kontent o'zi belgilaydi. 2) width o'rniga max-width. 3) a ichiga a yozmang. 4) span va a'ga o'lcham bermoqchi bo'lsangiz – display: inline-block. 5) img alt'iga ham uslub berish mumkin." }
  ],
  classwork: {
    t: "Xatolarni tuzat",
    d: "O'qituvchi bergan 'buzuq' sahifani DevTools yordamida tuzating.",
    steps: ["F12 → element ustida box modelni ko'ring", "* { box-sizing } qo'shing", "Qotib qolgan height'larni olib tashlang", "Rasmlarga max-width: 100%"],
    starter: { html: `<div class="box">\n  <img src="https://picsum.photos/id/1011/900/400" alt="Ko'l">\n  <p>Matn divdan chiqib ketmoqda...</p>\n</div>`, css: `.box {\n  width: 300px;\n  height: 100px;\n  padding: 20px;\n  border: 3px solid tomato;\n}` }
  },
  homework: "Oldingi 3 ta ishingizni yangi qoidalar bo'yicha qayta ko'rib chiqing.",
  quiz: [
    ["O'lcham to'g'ri hisoblanishi uchun:", ["box-sizing: border-box", "size: real", "width: auto", "display: box"], 0],
    ["Rasm divdan chiqmasligi uchun:", ["max-width: 100%", "width: 1000px", "height: 0", "overflow: rasm"], 0],
    ["a ichiga a yozish mumkinmi?", ["Ha", "Yo'q", "Faqat footer'da", "Faqat 2 marta"], 1]
  ],
  ai: { t: "Debug", p: "Mening rasmim div'dan chiqib ketyapti. CSS: .box{width:300px} img{width:900px}. Nega va qanday tuzataman?" }
});

L({
  n: 29, m: 3, title: "Inline-block va rasm xatolari",
  topics: ["display: inline-block", "vertical-align", "span, a, img xatolari"],
  goals: ["span va a'ga o'lcham berish uchun inline-block ishlatadi", "Rasm ostidagi bo'sh joyni vertical-align bilan yo'qotadi"],
  concepts: [
    { t: "inline-block", d: "button'ga width, height, margin yaxshi ishlaydi, span va a'ga esa ishlamaydi. Yechim – display: inline-block.", lang: "css", run: true,
      html: `<a href="#" class="x">oddiy a</a>\n<a href="#" class="y">inline-block a</a>`,
      code: `a { width: 160px; height: 60px; margin: 20px; background: #ffd43b; text-align: center; }
.y { display: inline-block; line-height: 60px; }` },
    { t: "Rasm ostidagi bo'sh joy", d: "img inline element bo'lgani uchun ostida kichik bo'shliq qoladi. vertical-align: middle uni yo'qotadi.", lang: "css", run: true,
      html: `<div class="b"><img src="https://picsum.photos/id/237/200/120" alt="Kuchukcha"></div>\n<div class="b ok"><img src="https://picsum.photos/id/237/200/120" alt="Kuchukcha"></div>`,
      code: `.b { background: crimson; display: inline-block; margin: 6px; }
.ok img { vertical-align: middle; }` }
  ],
  classwork: {
    t: "People list",
    d: "Rasm, ism va lavozimdan iborat xodimlar ro'yxati.",
    steps: ["Har bir odam – a (havola) karta", "a'ga display: inline-block, width, padding", "Rasm dumaloq va vertical-align: middle", "Hover'da soya"]
  },
  homework: "Company description: kompaniya haqida sahifa (logo, matn, jamoa ro'yxati).",
  quiz: [
    ["span'ga width ishlashi uchun:", ["display: inline-block", "display: none", "width: important", "float: none"], 0],
    ["Rasm ostidagi bo'shliq:", ["vertical-align: middle", "margin: -1", "padding: 0", "gap: 0"], 0],
    ["Qaysi biriga width yaxshi ishlaydi?", ["button", "span", "a", "b"], 0]
  ],
  ai: { t: "Taqqoslash jadvali", p: "display: block, inline va inline-block farqlarini jadval shaklida ko'rsat: width, height, margin, yangi qator." }
});

L({
  n: 30, m: 3, title: "CSS nazorat: Restoran menyusi",
  topics: ["Takrorlash", "Restaurant menu", "Nazorat"],
  goals: ["3-modul bilimlarini bitta sahifada qo'llaydi", "Dizayn namunasiga qarab ishlaydi"],
  plan: [["0–5", "Menyu namunalarini ko'rish"], ["5–35", "Mustaqil ish: Restoran menyusi"], ["35–42", "Mini test (10 savol)"], ["42–45", "Natijalar va uy vazifasi"]],
  concepts: [
    { t: "Menyu qatori", d: "Taom nomi, nuqtalar va narx – klassik menyu.", lang: "css", run: true,
      html: `<div class="menu">\n  <h2>Lazzat</h2>\n  <p class="row"><span>Osh</span><span>35 000</span></p>\n  <p class="row"><span>Somsa</span><span>8 000</span></p>\n  <p class="row"><span>Choy</span><span>3 000</span></p>\n</div>`,
      code: `.menu { max-width: 320px; margin: 20px auto; padding: 24px; font-family: Georgia, serif;
  background: #fff8e7; border: 2px dashed #b08968; border-radius: 12px; }
h2 { text-align: center; color: #7f5539; }
.row { border-bottom: 1px dotted #b08968; padding: 6px 0; }
.row span:last-child { float: right; font-weight: bold; }` }
  ],
  classwork: {
    t: "Restaurant menu",
    d: "Kamida 3 bo'lim (Birinchi taomlar, Ikkinchi, Ichimliklar) va 9 ta taomli menyu.",
    steps: ["Fon rasm + qoraytirish", "Har bo'lim – karta (soya, radius)", "Taomlar – nom va narx", "Hover'da qator rangi o'zgaradi"]
  },
  homework: "Lazzat food menu: rasmlari bilan to'liq menyu sahifa.",
  quiz: [
    ["Ichki oraliq:", ["padding", "margin", "gap", "border"], 0],
    ["Fon rasmini to'ldirish:", ["background-size: cover", "size: full", "image-fit", "cover: yes"], 0],
    ["Silliq hover uchun:", ["transition", "delay", "timer", "motion"], 0]
  ],
  ai: { t: "Menyu matni", p: "Surxondaryo milliy taomlari restorani uchun 9 ta taom nomi, qisqa tavsif va taxminiy narxni jadval qilib ber." },
  note: "Nazorat darsi. Baholash: tuzilma (2), ranglar va shrift (2), box model (2), hover/transition (2), tozalik (2)."
});

L({
  n: 31, m: 4, title: "display: flex bilan tanishuv",
  topics: ["display: flex", "justify-content", "kun.uz misoli"],
  lab: "flexbox",
  goals: ["Flex konteyner va flex elementlarni farqlaydi", "justify-content qiymatlarini biladi", "Menyuni bir qatorga teradi"],
  concepts: [
    { t: "Flex – javon", d: "Ota-onaga display: flex bersak, bolalari bir qatorga teriladi. justify-content – gorizontal joylash: flex-start, center, flex-end, space-between, space-around, space-evenly.", lab: "flexbox" },
    { t: "kun.uz menyusi", d: "Logo chapda, menyu o'ngda – space-between.", lang: "css", run: true,
      html: `<header class="top">\n  <b>KUN.UZ</b>\n  <nav><a href="#">O'zbekiston</a><a href="#">Jahon</a><a href="#">Sport</a></nav>\n</header>`,
      code: `.top { display: flex; justify-content: space-between; align-items: center;
  padding: 14px 20px; background: #1d3557; color: white; font-family: sans-serif; }
nav { display: flex; gap: 16px; }
nav a { color: white; text-decoration: none; }` }
  ],
  classwork: {
    t: "Flexible puppy",
    d: "Flexbox Froggy o'yinining 1–10 bosqichlari, keyin 3 ta kuchukcha kartasini flex bilan tering.",
    steps: ["flexboxfroggy.com – 10 bosqich", "3 ta karta – div.card", "Ota-onaga display: flex", "justify-content'ning 5 xil qiymatini sinang"],
    starter: { html: `<div class="wrap">\n  <div class="card">🐶</div>\n  <div class="card">🐕</div>\n  <div class="card">🐩</div>\n</div>`, css: `.wrap {\n  display: flex;\n  justify-content: space-around;\n  background: #eef;\n  padding: 20px;\n}\n.card {\n  font-size: 60px;\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n}` }
  },
  homework: "Apple Watch website: header (logo + menyu) va 3 ta mahsulot kartasi flex bilan.",
  quiz: [
    ["Flex qaysi elementga yoziladi?", ["Ota-onaga (konteyner)", "Har bir bolaga", "body'ga faqat", "img'ga"], 0],
    ["Chetlarga yopishtirib, orasini teng bo'lish:", ["space-between", "center", "flex-end", "stretch"], 0],
    ["Gorizontal joylash:", ["justify-content", "align-items", "flex-wrap", "text-align"], 0]
  ],
  ai: { t: "Flex o'yini", p: "Menga display:flex va justify-content'ni o'rganish uchun 5 ta kichik mashq topshirig'ini ber (javobsiz)." },
  links: [["Flexbox Froggy", "https://flexboxfroggy.com/#uz"]]
});

L({
  n: 32, m: 4, title: "align-items, flex-direction, flex-wrap, gap",
  topics: ["align-items", "flex-direction", "flex-wrap", "gap", "Flex xatolari"],
  lab: "flexbox",
  goals: ["Vertikal joylash (align-items) ni biladi", "flex-wrap bilan elementlarni keyingi qatorga o'tkazadi", "gap bilan oraliq beradi"],
  concepts: [
    { t: "Flex xatolari", d: "1) Flex ichida width yaxshi ishlamaydi – elementlar siqiladi. 2) Elementlar ko'payib ketsa konteynerdan chiqib ketadi. Yechim: flex-wrap: wrap va width'ni % da berish.", lang: "css", run: true,
      html: `<div class="row">\n  <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>\n</div>`,
      code: `.row { display: flex; flex-wrap: wrap; gap: 12px; background: #f1f3f5; padding: 12px; }
.row div { width: 30%; padding: 20px; background: #74c0fc; text-align: center; font-size: 24px; border-radius: 8px; }` },
    { t: "Markazga qo'yish (eng mashhur trik)", d: "justify-content: center + align-items: center = ideal markaz.", lang: "css", run: true,
      html: `<div class="center"><div class="ball"></div></div>`,
      code: `.center { display: flex; justify-content: center; align-items: center; height: 200px; background: #212529; }
.ball { width: 60px; height: 60px; border-radius: 50%; background: #fcc419; }` }
  ],
  classwork: {
    t: "Vegetable Cards",
    d: "8 ta sabzavot kartasi: rasm, nom, narx, tugma.",
    steps: ["Konteyner: flex, wrap, gap: 20px", "Karta: width 23% (4 tadan)", "Karta ichida ham flex-direction: column", "Rasm: max-width: 100%"]
  },
  homework: "Apple Watch website yoki Customer Cards sahifasini flex bilan tugating.",
  quiz: [
    ["Vertikal joylash:", ["align-items", "justify-content", "vertical", "flex-y"], 0],
    ["Keyingi qatorga o'tkazish:", ["flex-wrap: wrap", "flex-next", "overflow: line", "break: yes"], 0],
    ["Ustun ko'rinishida terish:", ["flex-direction: column", "flex: vertical", "direction: down", "column: 1"], 0]
  ],
  ai: { t: "Tushuntirish", p: "justify-content va align-items farqini flex-direction: row va column holatlarida chizma (ASCII) bilan tushuntir." }
});

L({
  n: 33, m: 4, title: "Kvadrat ichida doira va Customer Cards",
  topics: ["Ichma-ich flex", "Markazlash", "Kartalar"],
  goals: ["Ichma-ich flex konteynerlardan foydalanadi", "Geometrik shakllarni markazlaydi"],
  concepts: [
    { t: "Circle in Square", d: "Kvadrat → ichida doira → ichida kichik kvadrat. Har biri flex bilan markazda.", lang: "css", run: true,
      html: `<div class="sq"><div class="ci"><div class="dot"></div></div></div>`,
      code: `.sq, .ci { display: flex; justify-content: center; align-items: center; }
.sq { width: 220px; height: 220px; background: #5f3dc4; margin: 10px auto; }
.ci { width: 160px; height: 160px; border-radius: 50%; background: #e599f7; }
.dot { width: 60px; height: 60px; background: #fff; transform: rotate(45deg); }` }
  ],
  classwork: {
    t: "Circle in Square + Customer Cards",
    d: "Avval shakllar, keyin mijozlar fikri kartalari.",
    steps: ["3 qatlamli shakl", "3 ta mijoz kartasi: rasm (doira), ism, fikr, yulduzlar", "Kartalar flex + gap", "Hover'da karta biroz ko'tariladi (translateY)"]
  },
  homework: "Customer Cards sahifasini ranglar va shriftlar bilan bezang.",
  quiz: [
    ["Ichma-ich flex mumkinmi?", ["Ha", "Yo'q", "Faqat 2 qavat", "Faqat JavaScript bilan"], 0],
    ["Karta ko'tarilishi:", ["transform: translateY(-10px)", "margin-top: up", "lift: 10", "top: -10"], 0],
    ["Olmos shakli:", ["rotate(45deg)", "skew(90deg)", "scale(-1)", "rotate(0)"], 0]
  ],
  ai: { t: "Dizayn g'oyasi", p: "Mijoz fikri (testimonial) kartasi uchun 3 xil zamonaviy dizayn g'oyasini tasvirla." }
});

L({
  n: 34, m: 4, title: "Company description sahifasi",
  topics: ["Header", "Hero", "Xizmatlar bloki", "Flex takrorlash"],
  goals: ["To'liq sahifani bloklarga ajratib quradi", "Har bir blokda mos flex joylashuvni tanlaydi"],
  concepts: [
    { t: "Sahifa bloklari", d: "Header → Hero (katta sarlavha + tugma + rasm) → Xizmatlar (3 karta) → Jamoa → Footer. Har biri alohida section va .container ichida.", lang: "css", run: true,
      html: `<section class="hero">\n  <div class="text">\n    <h1>Biz sayt quramiz</h1>\n    <p>PS Termiz jamoasi – tez va chiroyli.</p>\n    <button>Bog'lanish</button>\n  </div>\n  <img src="https://picsum.photos/id/180/300/220" alt="Noutbuk">\n</section>`,
      code: `.hero { display: flex; align-items: center; justify-content: space-between; gap: 20px;
  padding: 30px; background: #e7f5ff; font-family: sans-serif; flex-wrap: wrap; }
.hero h1 { font-size: 36px; color: #1864ab; }
.hero button { padding: 12px 28px; border: 0; border-radius: 8px; background: #1c7ed6; color: #fff; }
.hero img { max-width: 100%; border-radius: 12px; }` },
    { t: ".container", d: "Kontentni markazda ushlab turuvchi quti.", lang: "css",
      code: `.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}` }
  ],
  classwork: {
    t: "Company description",
    d: "Kompaniya haqida bir sahifali sayt.",
    steps: [".container yarating", "Header va Hero", "3 ta xizmat kartasi", "Footer: 3 ustun"]
  },
  homework: "Sahifani oxiriga yetkazing va 1 ta yangi bo'lim qo'shing (FAQ yoki Narxlar).",
  quiz: [
    [".container vazifasi:", ["Kontentni markazda ushlash", "Rang berish", "Animatsiya", "Havola"], 0],
    ["Hero bo'limi odatda:", ["Sahifa boshidagi katta blok", "Footer", "Menyu", "Forma"], 0],
    ["margin: 0 auto nima qiladi?", ["Gorizontal markazlaydi", "Vertikal markazlaydi", "O'chiradi", "Kattalashtiradi"], 0]
  ],
  ai: { t: "Matn yozdirish", p: "IT kompaniya sayti uchun Hero sarlavhasi (5 so'z), qisqa tavsif (15 so'z) va 3 ta xizmat nomini yozib ber." }
});

L({
  n: 35, m: 4, title: "Restoran menyusi flex bilan",
  topics: ["flex: 1", "Kartalar setkasi", "Rasm + matn"],
  goals: ["Taom kartalarini flex bilan setka qiladi", "Rasm va matnni yonma-yon joylaydi"],
  concepts: [
    { t: "Rasm yonida matn", d: "Kichik rasm chapda, nom va narx o'ngda.", lang: "css", run: true,
      html: `<div class="dish">\n  <img src="https://picsum.photos/id/292/120/120" alt="Taom">\n  <div class="info"><h4>Tandir go'sht</h4><p>Surxon uslubida</p></div>\n  <b>60 000</b>\n</div>`,
      code: `.dish { display: flex; align-items: center; gap: 14px; padding: 12px; border-bottom: 1px solid #ddd; font-family: sans-serif; }
.dish img { width: 70px; height: 70px; object-fit: cover; border-radius: 50%; }
.info { flex: 1; }
.info h4, .info p { margin: 0; }
b { color: #e8590c; }` }
  ],
  classwork: {
    t: "Restaurant menu (flex)",
    d: "30-darsdagi menyuni flex yordamida qayta quring.",
    steps: ["Har taom – .dish qatori", "Bo'limlar 2 ustunda (flex, wrap)", "flex: 1 bilan matnni cho'zing", "Narxni o'ngga suring"]
  },
  homework: "Lazzat food menu: kamida 12 taomli, rasmli menyu.",
  quiz: [
    ["Bo'sh joyni egallash:", ["flex: 1", "width: all", "grow: yes", "fill"], 0],
    ["Rasm qirqilib, cho'zilmasin:", ["object-fit: cover", "fit: yes", "image: crop", "resize"], 0],
    ["Elementlar orasidagi masofa:", ["gap", "space", "between", "margin-auto"], 0]
  ],
  ai: { t: "Kod sharhi", p: "Quyidagi CSS'da flex: 1 nima qilyapti, oddiy tilda tushuntir: .info { flex: 1; }" }
});

L({
  n: 36, m: 4, title: "Font Awesome ikonlari",
  topics: ["Font Awesome", "CDN", "Ijtimoiy tarmoq ikonlari"],
  goals: ["Font Awesome'ni CDN orqali ulaydi", "Ikonlarga rang va o'lcham beradi", "Ijtimoiy tarmoqlar panelini yasaydi"],
  concepts: [
    { t: "Ulash", d: "head ichiga CDN havolasini qo'yamiz. Keyin <i class='fa-solid fa-house'></i> ko'rinishida ishlatamiz.", lang: "html",
      code: `<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<i class="fa-solid fa-house"></i>
<i class="fa-brands fa-telegram"></i>
<i class="fa-brands fa-instagram"></i>` },
    { t: "Ikon – bu matn", d: "Ikonlar shrift sifatida ishlaydi, shuning uchun color va font-size bilan boshqariladi. Ikonlarni fontawesome.com saytidan qidiring." }
  ],
  classwork: {
    t: "Reabilitatsiya markazi sahifasi",
    d: "Ikonlar bilan xizmatlar bloki (namuna: chingizpro.github.io/himoyachi/help.html).",
    steps: ["Font Awesome ulang", "4 ta xizmat: ikon + sarlavha + matn", "Ikon – dumaloq fon ichida", "Footer'da ijtimoiy tarmoq ikonlari"]
  },
  homework: "Ikonlar bilan mustaqil dizayn: o'zingiz o'ylab topgan 'Xizmatlar' bo'limi.",
  quiz: [
    ["Ikon rangini o'zgartirish:", ["color", "background", "icon-color", "fill"], 0],
    ["Telegram ikoni qaysi to'plamda?", ["fa-brands", "fa-solid", "fa-regular", "fa-social"], 0],
    ["Ikon o'lchami:", ["font-size", "width", "icon-size", "scale-only"], 0]
  ],
  ai: { t: "Ikon tanlash", p: "Maktab sayti uchun 'Dars jadvali', 'O'qituvchilar', 'Yangiliklar', 'Aloqa' bo'limlariga mos Font Awesome ikon nomlarini tavsiya qil." },
  links: [["Font Awesome", "https://fontawesome.com/icons"], ["Namuna", "https://chingizpro.github.io/himoyachi/help.html"]]
});

L({
  n: 37, m: 4, title: "Formalar: form, label, input, button",
  topics: ["form", "label", "input", "for / id", "submit / reset"],
  goals: ["Forma yaratadi va ma'lumot yuboradi", "label'ni input bilan for/id orqali bog'laydi", "input turlarini biladi"],
  concepts: [
    { t: "Oddiy forma", d: "action – ma'lumot qayerga ketadi (mashq uchun echo.htmlacademy.ru). label bosilganda input faollashadi.", lang: "html", run: true,
      code: `<form action="https://echo.htmlacademy.ru" method="post">
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
</form>` },
    { t: "input turlari", d: "text, password, email, number, date, color, checkbox, radio, file, range. Har birini sinab ko'ring!", lang: "html", run: true,
      code: `<input type="color"> <input type="date"> <input type="range"> <input type="email" placeholder="email">` }
  ],
  classwork: {
    t: "Kursga yozilish formasi",
    d: "Ism, familiya, telefon, email, yosh va kurs tanlash formasi.",
    steps: ["Har input – label bilan", "required atributi", "Submit va reset tugmalari", "echo.htmlacademy.ru'ga yuborib, natijani ko'ring"]
  },
  homework: "9k developers: dasturchilar jamoasiga ariza formasi (dizayn bilan).",
  quiz: [
    ["label va input bog'lash:", ["for va id", "name va class", "href va src", "type va value"], 0],
    ["Majburiy maydon:", ["required", "must", "important", "need"], 0],
    ["Parol maydoni:", ["type='password'", "type='secret'", "type='hidden-text'", "type='pin'"], 0]
  ],
  ai: { t: "Forma rejasi", p: "Maktab kutubxonasiga kitob buyurtma qilish formasi uchun qaysi maydonlar kerak? Har biriga mos input turini ayt." },
  links: [["Echo server", "https://echo.htmlacademy.ru"]]
});

L({
  n: 38, m: 4, title: "Formalar 2: select, fieldset, radio va dizayn",
  topics: ["select / option", "fieldset / legend", "radio", "Login forma"],
  goals: ["Tanlanadigan ro'yxat va radio tugmalar qo'shadi", "Formani fieldset bilan guruhlaydi", "Login formani chiroyli bezaydi"],
  concepts: [
    { t: "select, radio, fieldset", d: "fieldset – ramka, legend – ramka nomi, select – ochiladigan ro'yxat, radio – bittasini tanlash (name bir xil bo'lishi shart).", lang: "html", run: true,
      code: `<fieldset>
  <legend>Kurs tanlash</legend>
  <select name="kurs">
    <option>Frontend</option>
    <option>Python</option>
    <option>Grafik dizayn</option>
  </select>
  <p>Vaqt:</p>
  <label><input type="radio" name="vaqt"> Ertalab</label>
  <label><input type="radio" name="vaqt"> Kechqurun</label>
</fieldset>` },
    { t: "Login forma dizayni", d: "label xatosi: label inline bo'lgani uchun padding/width ishlamaydi – display: block yoki inline-block qiling.", lang: "css", run: true,
      html: `<form class="login">\n  <h2>Kirish</h2>\n  <label for="u">Login</label>\n  <input id="u" type="text">\n  <label for="p">Parol</label>\n  <input id="p" type="password">\n  <button>Kirish</button>\n</form>`,
      code: `.login { max-width: 300px; margin: 20px auto; padding: 24px; border-radius: 14px;
  box-shadow: 0 8px 30px rgba(0,0,0,.15); font-family: sans-serif; }
.login label { display: block; margin: 10px 0 4px; }
.login input { width: 100%; padding: 10px; border: 1px solid #ced4da; border-radius: 8px; box-sizing: border-box; }
.login button { width: 100%; margin-top: 16px; padding: 12px; border: 0; border-radius: 8px; background: #7048e8; color: #fff; }` }
  ],
  classwork: {
    t: "Form Page",
    d: "Login (mohirdev namunasi) va ro'yxatdan o'tish formasini yasang.",
    steps: ["Login forma", "Ro'yxatdan o'tish: fieldset'lar bilan", "select va radio", "focus holatiga uslub: input:focus"]
  },
  homework: "Form Page'ni tugatib, rangli dizayn bering.",
  quiz: [
    ["Radio tugmalar bitta guruh bo'lishi uchun:", ["name bir xil", "id bir xil", "class bir xil", "type har xil"], 0],
    ["Ramka nomi:", ["legend", "title", "caption", "label"], 0],
    ["Ochiladigan ro'yxat:", ["select", "list", "dropdown", "menu"], 0]
  ],
  ai: { t: "UX maslahat", p: "Bolalar uchun forma dizaynida qaysi 5 ta qoidaga amal qilish kerak? (katta tugmalar, aniq xatolar va h.k.)" }
});

L({
  n: 39, m: 4, title: "Figma bilan tanishuv",
  topics: ["Figma", "Inspect", "O'lchamlar", "Ranglarni olish"],
  goals: ["Figma faylini ochib, elementlarni tanlaydi", "O'lcham, rang, shrift ma'lumotini oladi", "Rasmlarni eksport qiladi"],
  concepts: [
    { t: "Figma nima?", d: "Figma – dizaynerlar sayt maketini chizadigan dastur. Dasturchi esa maketdan o'lchamlarni olib kod yozadi. Elementni tanlang → o'ng panelda Dev Mode / Inspect: width, height, rang, shrift." },
    { t: "Maketdan kodga", d: "1) Umumiy ko'rish: nechta bo'lim bor. 2) Ranglar va shriftlarni yozib oling. 3) Rasmlarni Export (PNG/SVG). 4) Yuqoridan pastga bo'lim-bo'lim yozing.", lang: "css",
      code: `/* Figma'dan olingan qiymatlar */
:root {
  --asosiy: #FF6B00;
  --matn: #1E1E1E;
}
h1 { font-family: 'Poppins', sans-serif; font-size: 48px; color: var(--matn); }` }
  ],
  classwork: {
    t: "Chainsaw page",
    d: "Figma'dagi 'Chainsaw' maketining birinchi ekranini (header + hero) yozing.",
    steps: ["Figma havolasini oching", "Ranglar va shriftlarni yozib oling", "Rasmlarni eksport qiling", "Header va hero'ni kodlang"]
  },
  homework: "SpaceX maketi: header va birinchi ekran.",
  quiz: [
    ["Figma nima uchun?", ["Dizayn maket chizish", "Kod yozish", "Video montaj", "O'yin"], 0],
    ["Rasmni saqlab olish:", ["Export", "Print", "Copy link", "Delete"], 0],
    ["CSS o'zgaruvchi:", ["--asosiy", "$asosiy", "@asosiy", "#asosiy"], 0]
  ],
  ai: { t: "Maket tahlili", p: "Men sayt maketining ekran rasmini yuboraman. Undagi bo'limlarni sanab chiq va har biri uchun qaysi HTML teglarni ishlatishni tavsiya qil." },
  links: [["Figma", "https://www.figma.com"]]
});

L({
  n: 40, m: 4, title: "Mini loyiha: Landing sahifa (Figma'dan)",
  topics: ["Loyiha", "Figma → kod", "Flex takrorlash"],
  goals: ["Figma maketidan to'liq sahifa yozadi", "4-modul bilimlarini birlashtiradi"],
  plan: [["0–5", "Reja va bo'limlarga ajratish"], ["5–38", "Mustaqil ish: sahifa"], ["38–45", "Ko'rik va baholash"]],
  concepts: [
    { t: "Ish tartibi", d: "1) Karkas (HTML) → 2) Umumiy uslublar (* , body, .container) → 3) Bo'lim-bo'lim CSS → 4) Tekshirish (DevTools) → 5) AI'dan kod sharhini so'rash." }
  ],
  classwork: {
    t: "SpaceX landing",
    d: "Figma'dagi SpaceX maketini to'liq yakunlang.",
    steps: ["Header va menyu", "Hero – fon rasm", "Ma'lumot bloklari – flex", "Footer"]
  },
  homework: "Loyihani tugatib Telegram'ga yuboring. Keyingi darsdan responsive boshlanadi!",
  quiz: [
    ["Ish tartibida birinchi:", ["HTML karkas", "Animatsiya", "Rang", "Git"], 0],
    ["Flex elementlar ko'payib chiqib ketsa:", ["flex-wrap: wrap", "overflow: flex", "display: none", "width: 0"], 0],
    ["Kontentni markazda ushlash:", [".container", ".center-all", "body-mid", ".wrap-0"], 0]
  ],
  ai: { t: "Kod sharhi (code review)", p: "Mana mening landing sahifam CSS kodi. Takrorlanayotgan qismlarni top va qanday qisqartirish mumkinligini tushuntir (kodni o'zim tuzataman):\n[kod]" },
  note: "Nazorat darsi (4-modul)."
});
