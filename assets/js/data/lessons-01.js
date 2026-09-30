/* 1–20-darslar: Kirish, HTML asoslari, CSS boshlanishi */

L({
  n: 1, m: 1, title: "Veb sayt nima? HTML, CSS va JavaScript",
  topics: ["Veb sayt", "Brauzer", "HTML/CSS/JS", "Portfolio"],
  goals: [
    "Veb sayt, brauzer va server nima ekanini tushunadi",
    "HTML, CSS va JavaScript vazifasini uy misolida farqlaydi",
    "kun.uz, prezident.uz va portfolio saytlarini kuzatib, qismlarini ayta oladi"
  ],
  concepts: [
    { t: "Sayt – bu uy", d: "HTML – uyning g'isht va devorlari (skelet). CSS – bo'yoq, gilam va bezak (ko'rinish). JavaScript – elektr, chiroq va eshik qo'ng'irog'i (harakat). Uchalasi birga ishlaganda chiroyli va jonli sayt paydo bo'ladi.", lab: "house" },
    { t: "Faqat HTML", d: "Hech qanday bezaksiz sahifa shunday ko'rinadi. Bu – skelet.", lang: "html", run: true,
      code: `<h1>Salom, men Aziz!</h1>
<p>Men Termizda yashayman va dasturchi bo'lishni xohlayman.</p>
<button>Bos meni</button>` },
    { t: "HTML + CSS", d: "Endi xuddi shu sahifaga CSS bilan rang va shakl beramiz.", lang: "css", run: true,
      html: `<h1>Salom, men Aziz!</h1>
<p>Men Termizda yashayman va dasturchi bo'lishni xohlayman.</p>
<button>Bos meni</button>`,
      code: `body { font-family: sans-serif; background: #e8f6f1; text-align: center; }
h1 { color: #0f6b57; }
button { background: #ff7a45; color: white; border: 0; padding: 12px 24px; border-radius: 10px; font-size: 18px; }` },
    { t: "HTML + CSS + JavaScript", d: "JavaScript tugmani 'jonlantiradi' – bosganda matn o'zgaradi.", lang: "js", run: true,
      html: `<h1 id="t">Salom, men Aziz!</h1>
<button id="b">Bos meni</button>`,
      css: `body{font-family:sans-serif;text-align:center;background:#e8f6f1} button{background:#ff7a45;color:#fff;border:0;padding:12px 24px;border-radius:10px;font-size:18px}`,
      code: `document.querySelector('#b').onclick = function () {
  document.querySelector('#t').textContent = 'Siz tugmani bosdingiz! 🎉';
};` }
  ],
  classwork: {
    t: "Sayt detektivi",
    d: "Guruhlarga bo'linib, 3 ta saytni ko'zdan kechiring va jadval to'ldiring.",
    steps: [
      "kun.uz saytini oching: sarlavha, menyu, rasm, tugmalarni toping",
      "prezident.uz saytida qaysi ranglar ko'p ishlatilganini yozing",
      "Biror portfolio saytni ko'ring: u kim haqida, qanday bo'limlari bor?",
      "Har bir saytda nima HTML, nima CSS, nima JavaScript ekanini taxmin qiling"
    ]
  },
  homework: "O'zingiz yoqtirgan 2 ta saytni tanlang va daftarga chizib keling: qayerda sarlavha, menyu, rasm va tugma joylashgan.",
  quiz: [
    ["Saytning skeletini nima tashkil qiladi?", ["CSS", "HTML", "JavaScript", "Brauzer"], 1],
    ["Saytga rang va bezak nima orqali beriladi?", ["HTML", "Python", "CSS", "Word"], 2],
    ["Tugma bosilganda nimadir sodir bo'lishi uchun nima kerak?", ["JavaScript", "CSS", "Rasm", "Papka"], 0]
  ],
  ai: { t: "AI'dan tushuntirishni so'rash", p: "Men 11 yoshdaman. HTML, CSS va JavaScript nima ekanini uy qurish misolida 5 ta qisqa gap bilan tushuntirib ber." },
  links: [["kun.uz", "https://kun.uz"], ["prezident.uz", "https://prezident.uz"]],
  note: "Birinchi dars – qiziqish uyg'otish. Kodni ko'rsating, lekin yozdirmang. Oxirida 'Siz ham shunday sayt qura olasiz' degan motivatsiya bering."
});

L({
  n: 2, m: 1, title: "Kompyuter savodxonligi va tezkor tugmalar",
  topics: ["Papka va fayl", "Yuklab olish", "HotKeys"],
  goals: [
    "Papka yaratadi, nomini o'zgartiradi va fayllarni tartiblaydi",
    "Internetdan rasm va fayl yuklab olib, kerakli papkaga saqlaydi",
    "Asosiy tezkor tugmalardan foydalanadi"
  ],
  concepts: [
    { t: "Papka va fayl", d: "Papka – javon, fayl – javondagi kitob. Har bir loyiha uchun alohida papka oching: Ish stoli → 'WebKurs' → 'dars-01'. Fayl nomida bo'sh joy va o'zbekcha harflardan qoching: my-page.html, rasm-1.jpg." },
    { t: "Eng kerakli tezkor tugmalar", d: "Ctrl+C – nusxa olish, Ctrl+V – qo'yish, Ctrl+X – kesish, Ctrl+Z – ortga qaytarish, Ctrl+A – hammasini belgilash, Ctrl+S – saqlash, Win+D – ish stoli, Win+E – Explorer, Alt+Tab – oynalar orasida o'tish, PrtScr / Win+Shift+S – ekran rasmi.", lab: "hotkeys" },
    { t: "Internetdan yuklab olish", d: "Rasm ustida o'ng tugma → 'Rasmni boshqacha saqlash'. Faqat ishonchli saytlardan yuklang. .exe fayllarni o'qituvchi ruxsatisiz ochmang!" }
  ],
  classwork: {
    t: "Tezkor tugmalar musobaqasi",
    d: "Laboratoriyadagi trenajyor orqali tugmalarni mashq qiling, keyin amaliy topshiriqni bajaring.",
    steps: [
      "Ish stolida 'WebKurs' papkasini yarating",
      "Ichida 'rasmlar' va 'dars-02' papkalarini oching",
      "pexels.com saytidan 3 ta rasm yuklab, 'rasmlar' papkasiga saqlang",
      "Win+Shift+S bilan ekran rasmini olib, Telegram guruhga yuboring"
    ]
  },
  homework: "Uydagi kompyuterda (yoki telefonda) 10 ta tezkor tugmani 5 martadan mashq qiling. Ertaga kim tezroq ekanini tekshiramiz!",
  quiz: [
    ["Nusxa olish uchun qaysi tugmalar?", ["Ctrl+V", "Ctrl+C", "Ctrl+Z", "Alt+Tab"], 1],
    ["Oynalar orasida tez o'tish uchun:", ["Alt+Tab", "Win+D", "Ctrl+A", "Ctrl+S"], 0],
    ["Fayl nomi uchun eng yaxshi variant:", ["Mening sahifam.html", "my-page.html", "SAHIFA!!.html", "sahifa 1 yangi.html"], 1]
  ],
  ai: { t: "AI bilan qidirish", p: "Windows'da ekran rasmini olishning 3 xil usulini qadam-baqadam, bolalar tushunadigan tilda yozib ber." },
  links: [["Pexels – bepul rasmlar", "https://www.pexels.com"]],
  note: "Frontend Case videosini ko'rsatish mumkin. Tezkor tugmalar trenajyorini proyektorda musobaqa sifatida o'tkazing."
});

L({
  n: 3, m: 1, title: "Tez yozish va dasturlar bilan tanishuv",
  topics: ["Tez yozish", "zty.pe", "monkeytype", "VS Code", "Chrome"],
  goals: [
    "10 barmoq bilan yozish qoidasini biladi",
    "Tez yozish trenajyorlarida o'z natijasini o'lchaydi",
    "VS Code, Chrome, WinRAR, Telegram dasturlarining vazifasini biladi"
  ],
  concepts: [
    { t: "Nega tez yozish kerak?", d: "Dasturchi kunda minglab belgilar yozadi. Klaviaturaga qaramasdan yozsangiz, fikringizga e'tibor berasiz. Ko'rsatkich barmoqlar F va J tugmalaridagi bo'rtiqlarda turadi.", lab: "typing" },
    { t: "Dasturchi asboblari", d: "VS Code – kod yozish uchun muharrir. Chrome – saytni ko'rish va tekshirish (DevTools). WinRAR – arxivlarni ochish. Telegram – uy vazifalarini yuborish. Media Player – video darslarni ko'rish." },
    { t: "VS Code kengaytmalari", d: "Live Server (Go Live) – saytni avtomatik yangilaydi. Prettier – kodni chiroyli tekislaydi. Material Icon Theme – fayllar uchun ikonlar." }
  ],
  classwork: {
    t: "Tezlik rekordi",
    d: "Laboratoriyadagi trenajyorda, keyin monkeytype.com saytida 3 marta yozib, eng yaxshi natijani daftarga yozing.",
    steps: ["F va J tugmalarini toping", "monkeytype.com – 30 soniya rejimi", "zty.pe o'yinida 1-2 bosqichni o'ting", "Natijani (so'z/daqiqa) guruh jadvaliga yozing"]
  },
  homework: "Har kuni 10 daqiqa monkeytype.com yoki zty.pe'da mashq qiling. Keyingi darsda natijani solishtiramiz.",
  quiz: [
    ["Kod yozish uchun qaysi dastur?", ["WinRAR", "VS Code", "Paint", "Telegram"], 1],
    ["Ko'rsatkich barmoqlar qaysi tugmalarda turadi?", ["A va L", "F va J", "Q va P", "Z va M"], 1],
    ["Saytni avtomatik yangilaydigan kengaytma:", ["Live Server", "Prettier", "Icons", "Git"], 0]
  ],
  ai: { t: "Mashq rejasi", p: "Menga 2 haftalik tez yozish mashqi rejasini tuz. Har kuni 10 daqiqa, hozir 15 so'z/daqiqa yozaman." },
  links: [["monkeytype", "https://monkeytype.com"], ["ZType", "https://zty.pe"], ["VS Code", "https://code.visualstudio.com"]],
  note: "Agar kompyuterlarda VS Code o'rnatilmagan bo'lsa, shu darsda o'rnatib chiqing."
});

L({
  n: 4, m: 1, title: "Sun'iy intellekt bilan tanishuv",
  topics: ["AI nima", "Chatbotlar", "Prompt", "Xavfsizlik"],
  goals: [
    "Sun'iy intellekt nima ekanini oddiy so'zlar bilan tushuntiradi",
    "Yaxshi prompt (so'rov) tuzish formulasini biladi: Rol + Vazifa + Shart + Format",
    "AI bilan ishlashda xavfsizlik va halollik qoidalarini biladi"
  ],
  concepts: [
    { t: "AI – aqlli yordamchi", d: "AI (sun'iy intellekt) – ko'p matn va misollardan o'rgangan dastur. U tushuntiradi, kod yozadi, g'oya beradi. Lekin u ham xato qiladi! Shuning uchun AI javobini doim tekshiramiz. Mashhur yordamchilar: ChatGPT, Claude, Gemini, Copilot." },
    { t: "Yaxshi prompt formulasi", d: "Yomon: 'sayt qil'. Yaxshi: 'Sen o'qituvchisan (rol). Menga oddiy HTML sahifa yozib ber (vazifa), unda sarlavha, rasm va tugma bo'lsin, faqat HTML ishlat (shart). Har bir qatorga izoh yoz (format).'", lab: "prompt" },
    { t: "Xavfsizlik qoidalari", d: "1) Ism-familiya, manzil, telefon, parolni AI'ga yozmang. 2) AI javobini tekshiring. 3) Uy vazifasini AI'ga to'liq yozdirmang – undan tushuntirish so'rang. 4) AI yaratgan rasm va matnni 'men qildim' demang." }
  ],
  classwork: {
    t: "Prompt ustaxonasi",
    d: "Laboratoriyadagi Prompt konstruktori bilan 3 ta prompt tuzing va o'qituvchi bilan birga AI'da sinab ko'ring.",
    steps: ["Yomon promptni yozing va natijani ko'ring", "Rol va shart qo'shing", "Format qo'shing (jadval, ro'yxat)", "Qaysi javob yaxshiroq ekanini muhokama qiling"]
  },
  homework: "O'zingizga qiziq mavzuda (futbol, kosmos, o'yinlar) 3 ta yaxshi prompt yozib keling. AI'dan olingan javobning 1 ta xatosini topishga harakat qiling.",
  quiz: [
    ["AI'ga nimani yozish MUMKIN EMAS?", ["Savol", "Parolingizni", "Kod", "Mavzu nomini"], 1],
    ["Yaxshi prompt nimalardan iborat?", ["Faqat bitta so'z", "Rol, vazifa, shart, format", "Faqat smayliklar", "Uzun hikoya"], 1],
    ["AI javobi doim to'g'rimi?", ["Ha, har doim", "Yo'q, tekshirish kerak", "Faqat kechasi", "Faqat ingliz tilida"], 1]
  ],
  ai: { t: "Birinchi suhbat", p: "Sen mehribon dasturlash ustozisan. Men 12 yoshdaman va veb dasturlashni o'rganmoqchiman. Menga 3 oylik o'qish rejasini oddiy tilda yozib ber." },
  note: "Bolalar yoshiga mos xizmatlardan foydalaning, ro'yxatdan o'tish ota-ona roziligi bilan bo'lsin. Namoyishni o'qituvchi hisobidan proyektorda qiling."
});

L({
  n: 5, m: 2, title: "VS Code va birinchi HTML fayl",
  topics: ["VS Code", "index.html", "head & body", "title", "Go Live"],
  goals: [
    "VS Code'da papka ochib, index.html fayl yaratadi",
    "'!' + Tab (Emmet) orqali HTML shablonini chiqaradi",
    "head va body farqini, title tegini biladi, Go Live bilan sahifani ochadi"
  ],
  concepts: [
    { t: "Teg nima?", d: "Teg – burchak qavs ichidagi buyruq. Ko'pchilik teglar juft: ochiluvchi <p> va yopiluvchi </p>. Orasiga matn yoziladi.", lang: "html", run: true,
      code: `<h1>Bu sarlavha</h1>
<p>Bu oddiy matn (paragraf)</p>` },
    { t: "head va body", d: "head – sahifa haqidagi yashirin ma'lumot (title, sozlamalar). body – foydalanuvchi ko'radigan hamma narsa. title – brauzer tabida chiqadigan nom.", lang: "html",
      code: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Mening birinchi saytim</title>
</head>
<body>
  <h1>Salom, dunyo!</h1>
</body>
</html>` },
    { t: "Go Live", d: "VS Code pastki o'ng burchagidagi 'Go Live' tugmasi saytni brauzerda ochadi. Faylni saqlasangiz (Ctrl+S), sahifa o'zi yangilanadi." }
  ],
  classwork: {
    t: "Salom, dunyo!",
    d: "Birinchi sahifangizni yarating.",
    steps: ["WebKurs/dars-05 papkasini VS Code'da oching", "index.html fayl yarating", "! yozib Tab bosing", "title'ga ismingizni yozing", "body ichiga h1 bilan salom yozing va Go Live bosing"],
    starter: { html: `<h1>Salom, dunyo!</h1>\n<p>Mening ismim ...</p>` }
  },
  homework: "O'zingiz haqingizda sahifa: title – ismingiz, body'da 1 ta sarlavha va 2 ta gap.",
  quiz: [
    ["Brauzer tabidagi nom qaysi teg bilan yoziladi?", ["<h1>", "<title>", "<body>", "<p>"], 1],
    ["Foydalanuvchi ko'radigan qism:", ["head", "body", "meta", "DOCTYPE"], 1],
    ["HTML shablonini tez chiqarish:", ["! + Tab", "Ctrl+Z", "Alt+F4", "# + Enter"], 0]
  ],
  ai: { t: "Xatoni tushuntirish", p: "Men HTML'da </h1> yopuvchi tegni yozishni unutdim. Nima bo'ladi? Oddiy misol bilan tushuntir." },
  note: "Kengaytmalar: Live Server o'rnatilganini tekshiring. Fayl kengaytmalari (.html) ko'rinib turishi uchun Explorer sozlamasini yoqing."
});

L({
  n: 6, m: 2, title: "Sarlavhalar, tugma va toza kod",
  topics: ["h1–h6", "button", "Clean Code"],
  goals: ["h1–h6 sarlavhalarni to'g'ri ishlatadi", "button tegini qo'shadi", "Kodni chiroyli tekislab (indent) yozadi"],
  concepts: [
    { t: "6 xil sarlavha", d: "h1 – eng katta va muhim (sahifada bitta), h6 – eng kichik. Sarlavhalar kitob mundarijasiga o'xshaydi.", lang: "html", run: true,
      code: `<h1>Surxondaryo</h1>
<h2>Termiz shahri</h2>
<h3>Diqqatga sazovor joylar</h3>
<h4>Fayoztepa</h4>
<h5>Tarixi</h5>
<h6>Manbalar</h6>` },
    { t: "Tugma", d: "button – bosiladigan tugma. Hozircha u hech narsa qilmaydi, JavaScript o'rganganimizda jonlantiramiz.", lang: "html", run: true,
      code: `<button>Boshlash</button>
<button>Keyingi</button>` },
    { t: "Toza kod (Clean Code)", d: "Ichma-ich teglar 2 bo'sh joy bilan suriladi. Shift+Alt+F – VS Code'da avtomatik tekislash. Toza kodni o'qish oson, xatoni topish tez.", lang: "html",
      code: `<!-- Yomon -->
<body><h1>Salom</h1><button>OK</button></body>

<!-- Yaxshi -->
<body>
  <h1>Salom</h1>
  <button>OK</button>
</body>` }
  ],
  classwork: {
    t: "Maktab e'lonlar taxtasi",
    d: "Sarlavhalar va tugmalar yordamida e'lon sahifasini tuzing.",
    steps: ["h1 – maktab nomi", "h2 – 'E'lonlar'", "3 ta h3 – e'lon nomlari", "Har e'lon ostida 'Batafsil' tugmasi"],
    starter: { html: `<h1>21-maktab</h1>\n<h2>E'lonlar</h2>\n<h3>Futbol musobaqasi</h3>\n<button>Batafsil</button>` }
  },
  homework: "Sevimli kitobingiz mundarijasini h1–h4 bilan yozing.",
  quiz: [
    ["Eng katta sarlavha:", ["h6", "h1", "h3", "title"], 1],
    ["Sahifada nechta h1 bo'lishi tavsiya etiladi?", ["Bitta", "Oltita", "Istalgancha", "Hech qancha"], 0],
    ["VS Code'da kodni tekislash:", ["Ctrl+C", "Shift+Alt+F", "Win+D", "Ctrl+P"], 1]
  ],
  ai: { t: "Kodni tekislash", p: "Mana mening HTML kodim: <body><h1>Salom</h1><button>OK</button></body>. Uni toza kod qoidalari bo'yicha tekislab ber va nima o'zgarganini tushuntir." }
});

L({
  n: 7, m: 2, title: "Paragraf, lorem va span. Sayt tahlili",
  topics: ["p", "lorem", "span", "qalampir.uz tahlili"],
  goals: ["p tegi bilan matn yozadi", "lorem10 yordamida vaqtinchalik matn chiqaradi", "span bilan matnning bir qismini ajratadi"],
  concepts: [
    { t: "Paragraf va lorem", d: "p – matn bo'lagi. VS Code'da 'lorem15' yozib Tab bossangiz 15 so'zli vaqtinchalik matn chiqadi – dizayn uchun qulay.", lang: "html", run: true,
      code: `<h2>Yangiliklar</h2>
<p>Termizda yangi IT markaz ochildi.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>` },
    { t: "span – kichik quti", d: "span matn ichidagi so'zni ajratib olish uchun. Keyin CSS bilan uni bo'yash mumkin.", lang: "html", run: true,
      code: `<p>Bugun havo <span style="color: orange">+38°C</span> bo'ladi.</p>` },
    { t: "Sayt tahlili: qalampir.uz", d: "Saytdagi yangilik kartasini ko'ring: sarlavha (h2/h3), qisqa matn (p), sana (span), rasm (img). Har bir blokni HTML teg bilan nomlashga harakat qiling." }
  ],
  classwork: {
    t: "Yangilik sahifasi",
    d: "qalampir.uz'dagi bitta yangilikni o'zingiz HTML'da takrorlang.",
    steps: ["h1 – yangilik sarlavhasi", "Sana span ichida", "2 ta paragraf", "Muhim so'zni span bilan ajrating"],
    starter: { html: `<h1>Termizda yangi park ochildi</h1>\n<p><span>12.09.2026</span></p>\n<p>lorem...</p>` }
  },
  homework: "O'tilgan teglarni takrorlang: o'z mahallangiz haqida 'yangilik' yozing (h1, 3 ta p, 2 ta span).",
  quiz: [
    ["Vaqtinchalik matn chiqarish:", ["text10", "lorem10", "p10", "span10"], 1],
    ["Matn ichidagi so'zni ajratish uchun:", ["span", "h1", "body", "title"], 0],
    ["p tegi nima uchun?", ["Rasm", "Paragraf matn", "Tugma", "Havola"], 1]
  ],
  ai: { t: "Matn yaratish", p: "Menga Termiz haqida 3 ta qisqa paragraf yoz. Har biri 2 gapdan iborat bo'lsin, bolalar uchun." },
  links: [["qalampir.uz", "https://qalampir.uz"]]
});

L({
  n: 8, m: 2, title: "Havolalar: a tegi",
  topics: ["a", "href", "target", "#"],
  goals: ["a tegi bilan boshqa saytga havola qiladi", "target='_blank' ma'nosini biladi", "Bo'sh havola (#) nima ekanini tushunadi"],
  concepts: [
    { t: "Havola", d: "a – anchor (langar). href – qayerga borishini ko'rsatadi.", lang: "html", run: true,
      code: `<a href="https://kun.uz">Kun.uz saytiga o'tish</a>
<br>
<a href="https://kun.uz" target="_blank">Yangi oynada ochish</a>` },
    { t: "Sahifalar orasida", d: "Bir papkadagi boshqa faylga: href='about.html'. Hali tayyor bo'lmagan havola uchun href='#' (deadlink) yoziladi.", lang: "html",
      code: `<a href="about.html">Men haqimda</a>
<a href="#">Tez orada...</a>` }
  ],
  classwork: {
    t: "Foydali saytlar menyusi",
    d: "O'zingiz uchun 5 ta foydali sayt ro'yxatini tuzing.",
    steps: ["h1 – 'Mening saytlarim'", "5 ta havola, har biri yangi oynada ochilsin", "Har havoladan keyin qisqa izoh (p)", "Bitta havola boshqa html faylingizga olib borsin"],
    starter: { html: `<h1>Mening saytlarim</h1>\n<a href="https://www.w3schools.com" target="_blank">W3Schools</a>\n<p>HTML o'rganish uchun</p>` }
  },
  homework: "2 ta sahifa yarating: index.html va about.html. Ular bir-biriga havola orqali bog'lansin.",
  quiz: [
    ["Havola manzili qaysi atributda?", ["src", "href", "alt", "link"], 1],
    ["Yangi oynada ochish:", ["target='_blank'", "new='yes'", "open", "window"], 0],
    ["Hali tayyor bo'lmagan havola:", ["href='#'", "href=''", "href='no'", "a='#'"], 0]
  ],
  ai: { t: "Tushuntirish so'rash", p: "a tegidagi href va target atributlarini 3 ta misol bilan tushuntir. Javob qisqa bo'lsin." }
});

L({
  n: 9, m: 2, title: "Rasmlar: img tegi",
  topics: ["img", "src", "alt", "width", "pexels.com"],
  goals: ["img tegi bilan rasm qo'shadi", "alt nima uchun kerakligini tushunadi (ko'zi ojizlar uchun)", "width bilan rasm o'lchamini beradi"],
  concepts: [
    { t: "Rasm qo'shish", d: "img – yolg'iz teg (yopilmaydi). src – rasm manzili, alt – rasm tavsifi, width – kengligi.", lang: "html", run: true,
      code: `<img src="https://picsum.photos/id/1025/400/250" alt="Tog'dagi it" width="300">
<p>Bu rasm internetdan olingan.</p>` },
    { t: "alt – ko'zi ojizlar uchun", d: "Ko'zi ojiz odamlar ekran o'quvchi dasturlardan (TTS) foydalanadi. Dastur rasm o'rniga alt matnini ovoz chiqarib o'qiydi. Rasm yuklanmasa ham alt ko'rinadi.", lang: "html", run: true,
      code: `<img src="yoq-rasm.jpg" alt="Termizdagi Al-Hakim at-Termiziy majmuasi">` },
    { t: "Papkadagi rasm", d: "Rasm 'rasmlar' papkasida bo'lsa: src='rasmlar/it.jpg'. Pexels.com'dan yuklab olingan rasmlarni shu papkaga saqlang." }
  ],
  classwork: {
    t: "Mening galereyam",
    d: "3 ta rasmli 'hayvonlar galereyasi' tuzing.",
    steps: ["pexels.com'dan 3 ta hayvon rasmini yuklang", "Har biriga h3 sarlavha", "img – width='250' va aniq alt", "Rasm ostida hayvon haqida 1 gap"],
    starter: { html: `<h1>Hayvonlar galereyasi</h1>\n<h3>Ayiq</h3>\n<img src="https://picsum.photos/id/1020/400/300" alt="Qo'ng'ir ayiq" width="250">\n<p>Ayiq qishda uxlaydi.</p>` }
  },
  homework: "O'zingiz haqingizdagi sahifaga rasm qo'shing (alt'ni to'g'ri yozing). O'tilganlarni takrorlang.",
  quiz: [
    ["Rasm manzili qaysi atributda?", ["href", "src", "alt", "width"], 1],
    ["alt nima uchun kerak?", ["Rasmni kattalashtirish", "Ko'zi ojizlar va rasm yuklanmasa", "Rang berish", "Havola"], 1],
    ["img tegi yopiladimi?", ["Ha, </img>", "Yo'q, yolg'iz teg", "Faqat body'da", "Faqat head'da"], 1]
  ],
  ai: { t: "alt matn yozish", p: "Menda Termiz bozori rasmi bor: odamlar, qovun va tarvuzlar, quyoshli kun. Unga ko'zi ojizlar uchun qisqa va aniq alt matni yozib ber." },
  links: [["Pexels", "https://www.pexels.com"]]
});

L({
  n: 10, m: 2, title: "HTML skeleti: DOCTYPE, meta va viewport",
  topics: ["DOCTYPE", "lang", "meta charset", "viewport"],
  goals: ["Shablondagi har bir qator nima qilishini tushuntiradi", "lang='uz' qo'yadi", "UTF-8 va viewport ahamiyatini biladi"],
  concepts: [
    { t: "Shablon satrma-satr", d: "DOCTYPE – bu HTML5 hujjati. lang – sahifa tili. meta charset='UTF-8' – o', g', ş kabi harflar to'g'ri chiqishi uchun. viewport – telefonda to'g'ri ko'rinishi (responsive) uchun.", lang: "html",
      code: `<!DOCTYPE html>              <!-- HTML tilida yozilgan -->
<html lang="uz">             <!-- tili o'zbekcha -->
<head>
  <meta charset="UTF-8">     <!-- harflar standarti -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>` },
    { t: "Savol-javob o'yini", d: "O'qituvchi qatorni ko'rsatadi – o'quvchi uning vazifasini aytadi. Keyin o'quvchilar shablonni xotiradan (Emmet'siz) yozib ko'rishadi." }
  ],
  classwork: {
    t: "Xotiradan shablon",
    d: "Yangi fayl yarating va shablonni Emmet'siz yozing, keyin taqqoslang.",
    steps: ["Yangi fayl: skelet.html", "Shablonni qo'lda yozing", "! + Tab bilan chiqqan shablon bilan solishtiring", "lang='en' ni 'uz' ga o'zgartiring"]
  },
  homework: "Shablonning har bir qatoriga izoh (<!-- -->) yozib keling.",
  quiz: [
    ["O', g' harflari buzilmasligi uchun:", ["meta charset='UTF-8'", "lang='en'", "title", "DOCTYPE"], 0],
    ["viewport nima uchun?", ["Rang uchun", "Telefonda to'g'ri ko'rinish", "Musiqa uchun", "Rasm uchun"], 1],
    ["O'zbek tili kodi:", ["en", "ru", "uz", "tr"], 2]
  ],
  ai: { t: "Izoh yozdirish", p: "HTML5 shablonining har bir qatoriga o'zbek tilida qisqa izoh yozib ber." },
  links: [["freeCodeCamp", "https://www.freecodecamp.org"], ["W3Schools", "https://www.w3schools.com"], ["HTML Academy", "https://htmlacademy.ru"]]
});

L({
  n: 11, m: 2, title: "Ro'yxatlar: ul, ol, li",
  topics: ["ul", "ol", "li", "list-style-type"],
  goals: ["Belgili (ul) va raqamli (ol) ro'yxat tuzadi", "Ichma-ich ro'yxat yozadi", "list-style-type: none bilan belgini olib tashlaydi"],
  concepts: [
    { t: "ul va ol", d: "ul – belgili ro'yxat (nuqtalar), ol – raqamli ro'yxat. Har bir element li ichida.", lang: "html", run: true,
      code: `<h3>Xarid ro'yxati</h3>
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
</ol>` },
    { t: "Belgisiz ro'yxat (menyu)", d: "Sayt menyulari aslida ul ro'yxat! Belgini CSS bilan olib tashlaymiz.", lang: "css", run: true,
      html: `<ul class="menu">
  <li><a href="#">Bosh sahifa</a></li>
  <li><a href="#">Yangiliklar</a></li>
  <li><a href="#">Aloqa</a></li>
</ul>`,
      code: `.menu {
  list-style-type: none;
}` }
  ],
  classwork: {
    t: "Mening kun tartibim",
    d: "Kun tartibi (ol) va sevimli narsalar (ul) sahifasi.",
    steps: ["ol – ertalabdan kechgacha 6 ta ish", "ul – 5 ta sevimli taom", "Ichma-ich ro'yxat: 'Sport' ichida 3 ta sport turi", "Menyu ro'yxati – havolalar bilan"],
    starter: { html: `<h2>Kun tartibim</h2>\n<ol>\n  <li>07:00 – Uyg'onish</li>\n</ol>` }
  },
  homework: "Sevimli filmlar (ol, top-5) va ichma-ich ro'yxat: 'Fanlar' → har fan ichida 2 ta mavzu.",
  quiz: [
    ["Raqamli ro'yxat:", ["ul", "ol", "li", "list"], 1],
    ["Ro'yxat elementi:", ["li", "el", "item", "p"], 0],
    ["Belgini olib tashlash:", ["list-style-type: none", "color: none", "ul: off", "display: list"], 0]
  ],
  ai: { t: "Ro'yxat g'oyasi", p: "Menga 'Surxondaryo meva-sabzavotlari' mavzusida HTML ichma-ich ro'yxat yozib ber: meva va sabzavot alohida." }
});

L({
  n: 12, m: 2, title: "Block va inline elementlar, div va DevTools",
  topics: ["block", "inline", "div", "DevTools", "ichma-ich teglar"],
  goals: ["Block va inline elementlarni farqlaydi", "div bilan elementlarni guruhlaydi", "Chrome DevTools (F12) ni ochib, elementlarni ko'radi"],
  concepts: [
    { t: "Block va inline", d: "Block elementlar (h1, p, div, ul) butun qatorni egallaydi va yangi qatordan boshlanadi. Inline elementlar (span, a, img, button) yonma-yon turadi.", lang: "html", run: true,
      code: `<div style="background: #cde">div – block</div>
<p style="background: #fdc">p – block</p>
<span style="background: #dfc">span – inline</span>
<a href="#" style="background: #fcd">a – inline</a>
<button>button – inline</button>` },
    { t: "div – konteyner", d: "div o'zi hech narsa ko'rsatmaydi, u qutiga o'xshaydi. Bir-biriga tegishli elementlarni bitta div'ga solamiz.", lang: "html", run: true,
      code: `<div class="card">
  <h3>Ali Valiyev</h3>
  <p>7-sinf o'quvchisi</p>
  <button>Profil</button>
</div>` },
    { t: "DevTools", d: "F12 yoki o'ng tugma → 'Inspect' (Tekshirish). Elements bo'limida sahifa kodini ko'rish, sichqonchani ustiga olib borib block/inline chegaralarini ko'rish mumkin. Tugmalarni tagma-tag qo'yish uchun ularni div ichiga olamiz." }
  ],
  classwork: {
    t: "Faqat HTML: o'quvchi kartalari",
    d: "3 ta o'quvchi kartasini div bilan yarating va DevTools'da tekshiring.",
    steps: ["Har karta – div", "Ichida img, h3, p, button", "Tugmalarni tagma-tag qo'yish uchun har birini alohida div'ga oling", "F12 bilan block/inline ekanini tekshiring"],
    starter: { html: `<div>\n  <img src="https://picsum.photos/id/64/120/120" alt="O'quvchi rasmi">\n  <h3>Ali</h3>\n  <p>7-sinf</p>\n  <div><button>Profil</button></div>\n  <div><button>Xabar</button></div>\n</div>` }
  },
  homework: "FrontendCase (dars 2) dagi rasmlarni faqat HTML bilan takrorlang.",
  quiz: [
    ["Qaysi biri inline?", ["div", "p", "span", "h1"], 2],
    ["DevTools ochish:", ["F12", "F5", "Ctrl+S", "Esc"], 0],
    ["div vazifasi:", ["Rasm chiqarish", "Elementlarni guruhlash", "Havola", "Sarlavha"], 1]
  ],
  ai: { t: "Farqni so'rash", p: "Block va inline elementlar farqini 'poyezd vagonlari' va 'bir qatordagi odamlar' misolida tushuntir." }
});

L({
  n: 13, m: 2, title: "Semantik teglar: header, nav, main, footer",
  topics: ["header", "nav", "main", "section", "article", "footer"],
  goals: ["Semantik teglar nima uchun kerakligini tushunadi", "Sahifani header / main / footer ga ajratadi", "kun.uz tuzilishini semantik teglar bilan tasvirlaydi"],
  concepts: [
    { t: "Ma'noli teglar", d: "div hech narsa aytmaydi, header esa 'bu sahifa boshi' deydi. Semantik teglar Google va ekran o'quvchilarga sahifani tushunishga yordam beradi.", lang: "html", run: true,
      code: `<header>
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
<footer>© 2026 PS Termiz</footer>` }
  ],
  classwork: {
    t: "Sayt karkasi",
    d: "Yangiliklar sayti karkasini semantik teglar bilan yozing.",
    steps: ["header – logo (h1) va nav", "main – 3 ta article (sarlavha, rasm, matn)", "aside – 'Ob-havo' bloki", "footer – aloqa ma'lumotlari"],
    starter: { html: `<header>\n  <h1>Logo</h1>\n  <nav></nav>\n</header>\n<main></main>\n<footer></footer>` }
  },
  homework: "kun.uz bosh sahifasini qog'ozga chizing va har blok ustiga qaysi semantik teg ekanini yozing.",
  quiz: [
    ["Sahifaning pastki qismi:", ["header", "footer", "nav", "main"], 1],
    ["Menyu uchun teg:", ["nav", "menu-bar", "ul-nav", "link"], 0],
    ["Asosiy kontent:", ["main", "body2", "center", "div"], 0]
  ],
  ai: { t: "Tuzilma tahlili", p: "Oddiy yangiliklar sayti uchun semantik HTML tuzilmasini yozib ber: header, nav, main, article, aside, footer. Faqat karkas, matnlar qisqa." }
});

L({
  n: 14, m: 2, title: "Havolaning imkoniyatlari va favicon",
  topics: ["tel:", "mailto:", "sahifa ichida #id", "favicon"],
  goals: ["Telefon va pochta havolasini yozadi", "Sahifa ichidagi bo'limga havola qiladi", "Saytga favicon qo'shadi"],
  concepts: [
    { t: "tel: va mailto:", d: "Telefonda bosilsa qo'ng'iroq, pochta dasturi ochiladi.", lang: "html", run: true,
      code: `<a href="tel:+998901234567">📞 +998 90 123 45 67</a><br>
<a href="mailto:info@pstermiz.uz">✉️ info@pstermiz.uz</a>` },
    { t: "Sahifa ichida sakrash", d: "Bo'limga id beramiz va href='#id' yozamiz.", lang: "html", run: true,
      code: `<a href="#aloqa">Aloqa bo'limiga o'tish</a>
<p style="height:300px">Uzun matn...</p>
<h2 id="aloqa">Aloqa</h2>` },
    { t: "Favicon", d: "Brauzer tabidagi kichik ikonka. head ichiga qo'shiladi.", lang: "html",
      code: `<link rel="icon" href="favicon.png" type="image/png">` }
  ],
  classwork: {
    t: "Vizitka sahifa",
    d: "O'quv markazi uchun aloqa sahifasini yarating.",
    steps: ["Favicon qo'shing (favicon.io saytidan)", "Telefon va pochta havolalari", "Yuqorida 'Manzil', 'Aloqa' bo'limlariga havolalar", "Har bo'limga id"]
  },
  homework: "O'zingiz haqingizdagi sahifaga favicon, telefon (soxta raqam) va sahifa ichidagi menyu qo'shing.",
  quiz: [
    ["Qo'ng'iroq havolasi:", ["phone:", "tel:", "call:", "mob:"], 1],
    ["Bo'limga o'tish: href='...'", ["#aloqa", "aloqa.id", "@aloqa", "$aloqa"], 0],
    ["Favicon qayerga yoziladi?", ["body", "head", "footer", "title"], 1]
  ],
  ai: { t: "Favicon g'oyasi", p: "'PS Termiz' o'quv markazi uchun oddiy favicon g'oyalarini 3 ta taklif qil: qaysi harf, rang va shakl." },
  links: [["favicon.io", "https://favicon.io"]]
});

L({
  n: 15, m: 2, title: "Audio, video va iframe",
  topics: ["audio", "video", "controls", "iframe"],
  goals: ["Sahifaga audio va video qo'shadi", "controls atributi vazifasini biladi", "YouTube videoni iframe orqali joylaydi"],
  concepts: [
    { t: "Audio va video", d: "controls – play/pause tugmalarini ko'rsatadi. source ichida fayl manzili va turi.", lang: "html",
      code: `<audio controls>
  <source src="audio.mp3" type="audio/mp3">
</audio>

<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
</video>` },
    { t: "iframe", d: "Boshqa sayt yoki YouTube videosini sahifaga joylash. YouTube'da 'Share → Embed' tugmasi kodni beradi.", lang: "html",
      code: `<iframe width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video" allowfullscreen></iframe>` }
  ],
  classwork: {
    t: "Media burchak",
    d: "Sevimli qo'shiq va o'quv videosi joylangan sahifa.",
    steps: ["div.audio – audio pleer", "div.video – video pleer", "YouTube'dan iframe", "Har biriga sarlavha"]
  },
  homework: "O'zingizning 'Media' sahifangizni yarating: 1 audio, 1 video, 1 iframe.",
  quiz: [
    ["Play tugmalarini chiqarish:", ["controls", "play", "buttons", "show"], 0],
    ["YouTube videoni joylash:", ["img", "iframe", "a", "audio"], 1],
    ["Video fayl turi:", ["video/mp4", "text/html", "image/png", "audio/mp3"], 0]
  ],
  ai: { t: "Xatoni topish", p: "Nega mening videom brauzerda o'ynamayapti? Kod: <video><source src='Video Darsim.MP4'></video>. Ehtimoliy sabablarni ayt." }
});

L({
  n: 16, m: 2, title: "HTML loyiha: Portfolio (faqat HTML)",
  topics: ["Takrorlash", "Portfolio", "AI bilan tekshirish"],
  goals: ["O'tilgan barcha HTML teglaridan foydalanib portfolio sahifa yaratadi", "AI'dan kodini tekshirib berishni so'raydi va maslahatni tushunadi"],
  plan: [["0–5", "Portfolio namunalarini ko'rish"], ["5–10", "Reja: qaysi bo'limlar bo'ladi"], ["10–35", "Mustaqil ish: Portfolio"], ["35–42", "AI bilan kodni tekshirish"], ["42–45", "2–3 o'quvchi ishini ko'rsatish"]],
  concepts: [
    { t: "Portfolio tuzilmasi", d: "header (ism, menyu) → 'Men haqimda' (rasm, matn) → 'Ko'nikmalar' (ul) → 'Ishlarim' (havolalar) → 'Aloqa' (tel, mailto) → footer.", lang: "html", run: true,
      code: `<header>
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
<footer>© 2026</footer>` }
  ],
  classwork: {
    t: "Mening portfoliom",
    d: "Faqat HTML bilan to'liq portfolio sahifa.",
    steps: ["Semantik karkas", "Rasm (alt bilan)", "Kamida 2 ro'yxat", "Sahifa ichidagi menyu", "Kodni AI'ga tekshirtiring va 1 ta maslahatni qo'llang"]
  },
  homework: "Portfolioni tugatib, Telegram guruhga ekran rasmini yuboring.",
  quiz: [
    ["Rasmga qaysi atribut majburiy?", ["alt", "title", "href", "id"], 0],
    ["Bo'limlarni ajratish uchun:", ["section", "span", "br", "b"], 0],
    ["AI kodimni tuzatib bersa, men...", ["Ko'r-ko'rona nusxalayman", "O'zgarishni tushunib olaman", "Hech narsa qilmayman", "Kodni o'chiraman"], 1]
  ],
  ai: { t: "Kod tekshiruvi", p: "Sen HTML o'qituvchisisan. Mening kodimni tekshir: xatolarni, yopilmagan teglarni va alt yo'q rasmlarni ko'rsat. Tuzatilgan kodni emas, faqat maslahatlarni ber:\n[kodni shu yerga qo'ying]" },
  note: "Nazorat darsi. Baholash: karkas (2), teglar (3), toza kod (2), alt va havolalar (2), AI bilan ishlash (1)."
});

L({
  n: 17, m: 3, title: "CSS bilan tanishuv: ulash usullari va class",
  topics: ["inline / internal / linked CSS", "class", "color", "background-color", "font-size"],
  goals: ["CSS ni 3 usulda ulay oladi", "class orqali elementga uslub beradi", "color, background-color, font-size xususiyatlarini ishlatadi"],
  concepts: [
    { t: "CSS qoidasi", d: "selektor { xususiyat: qiymat; }. Selektor – kimga, xususiyat – nimani, qiymat – qanday.", lang: "css", run: true,
      html: `<h1>Salom, CSS!</h1>\n<p>Men rangli matnman.</p>`,
      code: `h1 {
  color: tomato;
  font-size: 48px;
}
p {
  background-color: lightyellow;
}` },
    { t: "3 xil ulash", d: "1) inline – teg ichida style='...'. 2) internal – head ichida <style>. 3) linked – alohida style.css fayl: <link rel='stylesheet' href='style.css'>. Eng yaxshisi – linked!", lang: "html",
      code: `<!-- head ichida -->
<link rel="stylesheet" href="style.css">` },
    { t: "class", d: "Bir xil uslubni bir nechta elementga berish uchun class ishlatiladi. CSS'da nuqta bilan yoziladi: .nomi", lang: "css", run: true,
      html: `<p class="muhim">Ertaga imtihon!</p>\n<p>Oddiy matn</p>\n<p class="muhim">Daftarni unutmang!</p>`,
      code: `.muhim {
  color: white;
  background-color: crimson;
  font-size: 20px;
}` }
  ],
  classwork: {
    t: "Portfolio'ni bo'yash",
    d: "16-darsdagi portfolioga style.css ulang.",
    steps: ["style.css fayl yarating va link bilan ulang", "body – fon rangi", "h1 va h2 – rang, font-size", "2 ta class yarating: .muhim va .kichik"],
    starter: { html: `<h1>Madina Karimova</h1>\n<p class="muhim">Veb dasturchi</p>\n<p>Men haqimda matn</p>`, css: `body {\n  background-color: #f0f7ff;\n}\n.muhim {\n  color: royalblue;\n}` }
  },
  homework: "Takrorlash va FrontendCase'dagi rasmlar (dars 2) ni CSS bilan bo'yab keling.",
  quiz: [
    ["class CSS'da qanday yoziladi?", ["#nom", ".nom", "@nom", "nom()"], 1],
    ["Fon rangi:", ["color", "background-color", "font-color", "bg"], 1],
    ["Eng yaxshi ulash usuli:", ["inline", "linked (style.css)", "Word", "rasm"], 1]
  ],
  ai: { t: "Rang palitrasi", p: "'Dengiz' mavzusidagi sayt uchun 4 ta rangdan iborat palitra ber: fon, matn, tugma, sarlavha. Hex kodlarini yoz." },
  links: [["W3Schools CSS", "https://www.w3schools.com/css/"]]
});

L({
  n: 18, m: 3, title: "Matn bilan ishlash",
  topics: ["text-decoration", "font-weight", "text-align", "font-family", "Google Fonts"],
  goals: ["Matn qalinligi, tekislanishi va chizig'ini boshqaradi", "Google Fonts'dan shrift ulaydi"],
  concepts: [
    { t: "Matn xususiyatlari", d: "font-weight – qalinlik (400 oddiy, 700 qalin). text-align – tekislash. text-decoration – chiziq (havoladagi chiziqni olib tashlash uchun none).", lang: "css", run: true,
      html: `<h2>Termiz – quyoshli shahar</h2>\n<p>Termiz O'zbekistonning eng janubiy shahri.</p>\n<a href="#">Batafsil o'qish</a>`,
      code: `h2 { text-align: center; font-weight: 800; }
p { text-align: justify; font-style: italic; }
a { text-decoration: none; color: darkorange; font-weight: bold; }
a:hover { text-decoration: underline; }` },
    { t: "Google Fonts", d: "fonts.google.com → shriftni tanlang → link'ni head'ga qo'ying → font-family bilan ishlating.", lang: "css", run: true,
      html: `<h1>Salom, dunyo!</h1><p>Bu matn Nunito shriftida.</p>`,
      code: `@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Nunito&display=swap');
h1 { font-family: 'Lobster', cursive; font-size: 44px; }
p  { font-family: 'Nunito', sans-serif; }` }
  ],
  classwork: {
    t: "freeCodeCamp mashqlari",
    d: "freeCodeCamp 'Learn HTML by Building a Cat Photo App' kursining birinchi qadamlarini bajaring, keyin portfolioga Google Font ulang.",
    steps: ["freecodecamp.org'da ro'yxatdan o'ting (o'qituvchi bilan)", "10 ta qadamni bajaring", "Portfolioga 2 ta shrift ulang", "Havolalardan chiziqni olib tashlang"]
  },
  homework: "'Developer Girl' kartasini (rasm, ism, kasb, 3 ta ko'nikma) HTML+CSS bilan yasang.",
  quiz: [
    ["Matnni markazga:", ["text-align: center", "align: middle", "center: true", "font-align"], 0],
    ["Havola chizig'ini olib tashlash:", ["text-decoration: none", "line: 0", "underline: off", "border: none"], 0],
    ["Qalin matn:", ["font-weight: 700", "font-size: bold", "text: bold", "weight: big"], 0]
  ],
  ai: { t: "Shrift juftligi", p: "Bolalar o'quv markazi sayti uchun Google Fonts'dan 2 ta mos shrift juftligini tavsiya qil: sarlavha va matn uchun. Nega mosligini ham ayt." },
  links: [["Google Fonts", "https://fonts.google.com"], ["freeCodeCamp", "https://www.freecodecamp.org"]]
});

L({
  n: 19, m: 3, title: "Box model: margin, padding, border",
  topics: ["margin", "padding", "border", "border-radius"],
  lab: "boxmodel",
  goals: ["Har bir element quti ekanini tushunadi", "padding (ichki) va margin (tashqi) oraliqni farqlaydi", "border va border-radius bilan ramka va dumaloq burchak beradi"],
  concepts: [
    { t: "Quti modeli", d: "Har bir element – sovg'a qutisi. Kontent – sovg'a, padding – ichidagi paxta, border – quti devori, margin – qutilar orasidagi masofa. Laboratoriyada slayderlarni suring!", lab: "boxmodel" },
    { t: "Kodda", d: "Qiymatlar tartibi: yuqori, o'ng, past, chap (soat mili bo'yicha).", lang: "css", run: true,
      html: `<div class="card">Men kartaman</div>\n<div class="card">Men ham</div>`,
      code: `.card {
  background: #ffe8a3;
  padding: 20px;
  border: 3px solid #e0a100;
  border-radius: 16px;
  margin: 12px 0;
}` }
  ],
  classwork: {
    t: "Developer Girl kartasi",
    d: "Laboratoriyada box modelni o'rganib, keyin kartani bezang.",
    steps: ["Kartaga padding: 24px", "border: 2px solid", "border-radius: 20px", "Rasmni dumaloq qiling: border-radius: 50%"],
    starter: { html: `<div class="card">\n  <img src="https://picsum.photos/id/1027/200/200" alt="Qiz rasmi">\n  <h3>Dilnoza</h3>\n  <p>Frontend dasturchi</p>\n</div>`, css: `.card {\n  width: 240px;\n  background: white;\n  text-align: center;\n}\nimg { width: 120px; }` }
  },
  homework: "Developer Girl kartasini oxiriga yetkazing (box model xususiyatlari bilan).",
  quiz: [
    ["Ichki oraliq:", ["margin", "padding", "border", "gap"], 1],
    ["Dumaloq burchak:", ["border-radius", "corner", "round", "radius-box"], 0],
    ["Rasmni to'liq doira qilish:", ["border-radius: 50%", "circle: true", "radius: 100px", "shape: round"], 0]
  ],
  ai: { t: "Tushunmagan joyni so'rash", p: "margin va padding farqini sovg'a qutisi misolida 4 gap bilan tushuntir va CSS misol ber." }
});

L({
  n: 20, m: 3, title: "Takrorlash va narx kartasi (99/MONTH)",
  topics: ["Takrorlash", "text-align inline xatosi", "Narx kartasi"],
  goals: ["O'tilgan CSS xususiyatlarini takrorlaydi", "text-align inline elementga emas, uning ota-onasiga berilishini tushunadi", "Narx kartasini dizayn bo'yicha yasaydi"],
  concepts: [
    { t: "text-align xatosi", d: "text-align: center ni span yoki a'ning o'ziga bersak ishlamaydi – u ota-ona block elementga beriladi.", lang: "css", run: true,
      html: `<a class="xato" href="#">Men markazda emasman</a>\n<div class="togri"><a href="#">Men markazdaman</a></div>`,
      code: `.xato { text-align: center; }  /* ishlamaydi */
.togri { text-align: center; } /* ishlaydi */` },
    { t: "Narx kartasi", d: "Katta raqam, kichik birlik, ro'yxat va tugma – mashhur dizayn.", lang: "css", run: true,
      html: `<div class="price">\n  <h3>PRO</h3>\n  <p class="sum">$99<span>/MONTH</span></p>\n  <ul><li>10 ta loyiha</li><li>AI yordamchi</li><li>24/7 yordam</li></ul>\n  <button>Tanlash</button>\n</div>`,
      code: `.price { width: 240px; margin: 20px auto; padding: 24px; text-align: center;
  border: 2px solid #3b5bdb; border-radius: 16px; font-family: sans-serif; }
.sum { font-size: 48px; font-weight: 800; margin: 8px 0; }
.sum span { font-size: 14px; color: gray; }
ul { list-style-type: none; padding: 0; line-height: 2; }
button { background: #3b5bdb; color: white; border: 0; padding: 12px 32px; border-radius: 30px; font-size: 16px; }` }
  ],
  classwork: {
    t: "Classwork 1: HTML | CSS, Classwork 2: 99/MONTH",
    d: "Avval namunadagi HTML|CSS belgisini, keyin narx kartasini yasang.",
    steps: ["'HTML | CSS' – ikki rangli yozuv (span bilan)", "Narx kartasi – 3 xil tarif (BASIC, PRO, MAX)", "Har biriga boshqa rang", "O'rtadagisini kattaroq qiling"]
  },
  homework: "Lays Card: chips paketi ko'rinishidagi mahsulot kartasi (rasm, nom, narx, tugma).",
  quiz: [
    ["text-align kimga beriladi?", ["Inline elementga", "Ota-ona block elementga", "Faqat rasmga", "head'ga"], 1],
    ["Blokni gorizontal markazlash:", ["margin: 0 auto", "align: center", "padding: auto", "center: 1"], 0],
    ["ul chap bo'sh joyini olib tashlash:", ["padding: 0", "margin: 100", "border: 0", "gap: 0"], 0]
  ],
  ai: { t: "Dizayn g'oyasi", p: "Uch xil tarifli narx kartalari uchun rang va matn g'oyalarini ber: 'Boshlang'ich', 'O'rta', 'Pro'. O'quv markazi kurslari uchun." }
});
