/* Kurs tuzilmasi: 8 modul, 80 dars (haftasiga 2 dars × 45 daqiqa ≈ 40 hafta) */
window.COURSE = {
  title: "PS Termiz Web Course",
  subtitle: "Bolalar uchun Web dasturlash asoslari va AI vositalar",
  lessonMinutes: 45,
  perWeek: 2,
  modules: [
    { id: 1, title: "Kompyuter, Internet va AI", short: "Kirish", color: "var(--m1)", desc: "Veb sayt qanday ishlaydi, kompyuter savodxonligi, tez yozish va sun'iy intellekt bilan xavfsiz tanishuv." },
    { id: 2, title: "HTML asoslari", short: "HTML", color: "var(--m2)", desc: "Sahifa skeleti: teglar, matn, havola, rasm, ro'yxat, semantik teglar va media." },
    { id: 3, title: "CSS asoslari", short: "CSS", color: "var(--m3)", desc: "Rang, shrift, box model, gradient, soya, hover, transition va transform." },
    { id: 4, title: "Flexbox va formalar", short: "Flexbox", color: "var(--m4)", desc: "Elementlarni qatorga terish, kartalar, menyu, ikonlar va formalar bilan ishlash." },
    { id: 5, title: "Responsive va Git", short: "Responsive", color: "var(--m5)", desc: "Telefon va planshetga moslashuvchi sahifalar, Figma'dan kod, Git va GitHub Pages." },
    { id: 6, title: "Position, animatsiya va Sass", short: "Animatsiya", color: "var(--m6)", desc: "position, z-index, ::before/::after, @keyframes, AOS va Sass." },
    { id: 7, title: "JavaScript asoslari", short: "JavaScript", color: "var(--m7)", desc: "O'zgaruvchi, shart, funksiya, DOM, hodisalar va kichik o'yinlar." },
    { id: 8, title: "AI bilan loyiha", short: "AI + Loyiha", color: "var(--m8)", desc: "AI yordamida kod yozish, xatolarni topish, dizayn va yakuniy loyiha taqdimoti." }
  ],
  lessons: []
};

/* Dars qo'shish yordamchisi */
window.L = function (o) { window.COURSE.lessons.push(o); };
