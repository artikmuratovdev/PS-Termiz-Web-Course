/* Interaktiv laboratoriyalar: o'qituvchi tushunchani jonli ko'rsatadi, o'quvchi o'zi sinab ko'radi. */
(function () {
  let uid = 0;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const hexA = (hex, a) => {
    const h = hex.replace("#", "");
    const n = parseInt(h.length === 3 ? h.split("").map((x) => x + x).join("") : h, 16);
    return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
  };

  /* Laboratoriyalarning ichki uslublari (sahna – "brauzer oynasi", shuning uchun oq fon) */
  const css = `
  .lab .stage.pad{padding:20px;display:grid;place-items:center}
  .bm-m{background:repeating-linear-gradient(45deg,#ffd8a8 0 6px,#ffe8cc 6px 12px);position:relative}
  .bm-b{border-style:solid;border-color:#343a40;background:#b2f2bb;position:relative}
  .bm-c{background:#a5d8ff;display:grid;place-items:center;font:700 13px monospace;color:#1864ab;min-height:60px}
  .bm-tag{position:absolute;font:700 10px monospace;text-transform:uppercase;letter-spacing:.05em}
  .bm-legend{display:flex;gap:10px;flex-wrap:wrap;font:600 12px monospace;color:#495057;padding:8px 10px}
  .bm-legend i{display:inline-block;width:12px;height:12px;border-radius:3px;vertical-align:-2px;margin-right:4px}
  .fx-box{background:#e7f5ff;border:2px dashed #74c0fc;min-height:220px;margin:12px;transition:all .3s}
  .fx-item{background:#4263eb;color:#fff;font:800 20px/1 system-ui;display:grid;place-items:center;border-radius:8px;min-width:54px;padding:12px;transition:all .3s}
  .fx-item:nth-child(3n+2){background:#f76707;padding:22px 12px}
  .fx-item:nth-child(3n){background:#0ca678;padding:34px 12px}
  .tf-ghost{position:absolute;width:120px;height:120px;left:50%;top:50%;margin:-60px 0 0 -60px;border:2px dashed #adb5bd;border-radius:14px}
  .tf-el{position:absolute;width:120px;height:120px;left:50%;top:50%;margin:-60px 0 0 -60px;border-radius:14px;background:linear-gradient(135deg,#845ef7,#f06595);color:#fff;display:grid;place-items:center;font:800 18px system-ui;transition:transform .25s,opacity .25s}
  .ps-outer{transform:translateZ(0);height:280px;position:relative}
  .ps-scroll{height:100%;overflow:auto;padding:14px;font:14px/1.6 system-ui;color:#495057}
  .ps-parent{border:2px dashed #7950f2;background:#f3f0ff;height:360px;margin:12px 0;padding:10px;font:700 12px monospace;color:#7950f2}
  .ps-child{width:90px;height:60px;background:#fa5252;color:#fff;display:grid;place-items:center;font:800 13px system-ui;border-radius:8px;z-index:3}
  .ps-sib{width:90px;height:40px;background:#dee2e6;border-radius:8px;margin-top:8px;display:grid;place-items:center;font:600 12px system-ui;color:#495057}
  .an-el{width:90px;height:90px;border-radius:18px;background:linear-gradient(135deg,#ff922b,#f03e3e)}
  .rs-wrap{height:360px;overflow:hidden;position:relative;background:#f1f3f5}
  .rs-wrap iframe{border:0;background:#fff;transform-origin:0 0;position:absolute;left:0;top:0;height:360px}
  .rs-label{font:700 13px monospace;color:#495057;padding:6px 10px;display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}
  .hs{height:280px;display:grid;place-items:end center;padding-bottom:20px;background:#fff;transition:background .6s}
  .hs.css{background:linear-gradient(#bde0fe,#e7f5ff 70%,#b2f2bb 70%)}
  .hs.css.night{background:linear-gradient(#1b1f3b,#343a6b 70%,#2b8a3e 70%)}
  .h-house{width:220px;position:relative}
  .h-roof{width:0;height:0;margin:0 auto;border-left:130px solid transparent;border-right:130px solid transparent;border-bottom:80px solid #ced4da;margin-left:-20px;transition:.6s}
  .h-body{height:140px;border:2px solid #868e96;background:#fff;position:relative;transition:.6s}
  .h-win{position:absolute;top:24px;width:46px;height:40px;border:2px solid #868e96;background:#fff;transition:.4s}
  .h-win.l{left:24px}.h-win.r{right:24px}
  .h-door{position:absolute;bottom:0;left:50%;margin-left:-22px;width:44px;height:74px;border:2px solid #868e96;border-bottom:0;background:#fff;transition:.6s}
  .h-lbl{font:700 11px monospace;color:#868e96;position:absolute;left:4px;bottom:-18px}
  .hs.css .h-roof{border-bottom-color:#c92a2a}
  .hs.css .h-body{background:#ffe8a3;border-color:#e67700}
  .hs.css .h-win{background:#a5d8ff;border-color:#1864ab;border-radius:4px}
  .hs.css .h-door{background:#8d5524;border-color:#5c3310;border-radius:22px 22px 0 0}
  .hs.js .h-win,.hs.js .h-door{cursor:pointer}
  .hs.js .h-win.lit{background:#ffe066;box-shadow:0 0 22px 6px rgba(255,224,102,.8)}
  .hk-zone{padding:22px;text-align:center;outline:none}
  .hk-zone:focus{box-shadow:inset 0 0 0 3px #12b886}
  .hk-task{font:800 28px/1.2 system-ui;color:#212529;margin:6px 0}
  .hk-msg{font:700 16px system-ui;min-height:1.5em}
  .hk-tbl{width:100%;border-collapse:collapse;font-size:14px}
  .hk-tbl td{padding:5px 8px;border-bottom:1px solid #e9ecef}
  .ty-text{font:20px/1.7 ui-monospace,monospace;padding:18px;color:#adb5bd;word-break:break-word}
  .ty-text .ok{color:#2b8a3e}.ty-text .bad{color:#fff;background:#fa5252;border-radius:2px}.ty-text .cur{border-left:2px solid #1c7ed6}
  .ty-stats{display:flex;gap:18px;flex-wrap:wrap;font:700 14px system-ui;color:#495057;padding:0 18px 14px}
  .ty-stats b{font:800 26px system-ui;color:#212529;display:block}
  .gt-cols{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;padding:10px}
  .gt-col{background:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:8px;min-height:130px;font:12px system-ui;color:#212529;min-width:0}
  .gt-col h5{margin:0 0 6px;font:800 11px monospace;text-transform:uppercase;letter-spacing:.05em;color:#495057}
  .gt-file{background:#fff;border:1px solid #ced4da;border-radius:6px;padding:4px 6px;margin-bottom:4px;font:600 12px monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .gt-file.mod{border-color:#f59f00;background:#fff9db}.gt-file.st{border-color:#37b24d;background:#ebfbee}
  .gt-commit{background:#e7f5ff;border:1px solid #74c0fc;border-radius:6px;padding:4px 6px;margin-bottom:4px;font:600 11px monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .gt-term{background:#1d2530;color:#e3e9ef;font:13px/1.5 ui-monospace,monospace;padding:10px 12px;height:180px;overflow:auto;border-radius:0 0 8px 8px}
  .gt-term .c{color:#8fc5ff}.gt-term .e{color:#ff8a8a}.gt-term .g{color:#a8e29a}
  .gt-in{display:flex;background:#1d2530;border-top:1px solid #2f3a46;border-radius:0 0 8px 8px}
  .gt-in span{color:#a8e29a;font:13px ui-monospace,monospace;padding:9px 0 9px 12px}
  .gt-in input{flex:1;min-width:0;background:transparent;border:0;outline:0;color:#fff;font:13px ui-monospace,monospace;padding:9px 8px}
  .pr-meter{display:flex;gap:4px;margin:4px 0}
  .pr-meter i{flex:1;height:8px;border-radius:4px;background:#e9ecef}
  .pr-meter i.on{background:#12b886}
  .pr-tips{margin:0;padding-left:18px;font-size:13.5px;color:#495057}
  @media (max-width:700px){.gt-cols{grid-template-columns:repeat(2,minmax(0,1fr))}}
  `;
  function injectCss() {
    if (document.getElementById("lab-css")) return;
    const s = document.createElement("style");
    s.id = "lab-css";
    s.textContent = css;
    document.head.appendChild(s);
  }

  /* ---- Umumiy boshqaruv elementlari ---- */
  function controlHtml(c, id) {
    const lbl = `<span>${esc(c.label)}${c.type === "range" ? ` <output>${c.val}${c.unit || ""}</output>` : ""}</span>`;
    if (c.type === "range") return `<label class="ctl">${lbl}<input id="${id}" type="range" min="${c.min}" max="${c.max}" step="${c.step || 1}" value="${c.val}"></label>`;
    if (c.type === "select") return `<label class="ctl">${lbl}<select id="${id}">${c.opts.map((o) => `<option${o === c.val ? " selected" : ""}>${esc(o)}</option>`).join("")}</select></label>`;
    if (c.type === "color") return `<label class="ctl">${lbl}<input id="${id}" type="color" value="${c.val}"></label>`;
    if (c.type === "check") return `<label class="ctl" style="display:flex;gap:8px;align-items:center"><input id="${id}" type="checkbox"${c.val ? " checked" : ""}> <span style="display:inline">${esc(c.label)}</span></label>`;
    return "";
  }
  function specLab(def) {
    return function (body) {
      const base = "lab" + ++uid;
      body.innerHTML = `<div class="lab-grid">
        <div class="lab-controls">${def.spec.map((c) => controlHtml(c, base + c.k)).join("")}</div>
        <div class="lab-stage"><div class="stage${def.pad ? " pad" : ""}"></div><pre class="out"></pre></div></div>`;
      const stage = body.querySelector(".stage");
      const out = body.querySelector(".out");
      if (def.init) def.init(stage);
      const read = () => {
        const v = {};
        def.spec.forEach((c) => {
          const el = body.querySelector("#" + base + c.k);
          v[c.k] = c.type === "check" ? el.checked : c.type === "range" ? Number(el.value) : el.value;
          if (c.type === "range") el.previousElementSibling.querySelector("output").textContent = el.value + (c.unit || "");
        });
        return v;
      };
      const update = () => {
        const code = def.draw(read(), stage);
        out.innerHTML = window.hl ? window.hl(code, "css") : esc(code);
      };
      body.querySelector(".lab-controls").addEventListener("input", update);
      update();
    };
  }

  const LABS = {};

  LABS.flexbox = {
    title: "Flexbox o'yingohi", desc: "justify-content, align-items, direction, wrap va gap'ni jonli sinang.", lessons: [31, 32],
    render: specLab({
      spec: [
        { k: "dir", label: "flex-direction", type: "select", opts: ["row", "row-reverse", "column", "column-reverse"], val: "row" },
        { k: "jc", label: "justify-content", type: "select", opts: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"], val: "space-between" },
        { k: "ai", label: "align-items", type: "select", opts: ["stretch", "flex-start", "center", "flex-end", "baseline"], val: "center" },
        { k: "wrap", label: "flex-wrap", type: "select", opts: ["nowrap", "wrap"], val: "nowrap" },
        { k: "gap", label: "gap", type: "range", min: 0, max: 40, val: 10, unit: "px" },
        { k: "n", label: "Elementlar soni", type: "range", min: 1, max: 12, val: 4 }
      ],
      init(stage) { stage.innerHTML = `<div class="fx-box"></div>`; },
      draw(v, stage) {
        const box = stage.querySelector(".fx-box");
        box.style.cssText = `display:flex;flex-direction:${v.dir};justify-content:${v.jc};align-items:${v.ai};flex-wrap:${v.wrap};gap:${v.gap}px`;
        box.innerHTML = Array.from({ length: v.n }, (_, i) => `<div class="fx-item">${i + 1}</div>`).join("");
        return `.container {\n  display: flex;\n  flex-direction: ${v.dir};\n  justify-content: ${v.jc};\n  align-items: ${v.ai};\n  flex-wrap: ${v.wrap};\n  gap: ${v.gap}px;\n}`;
      }
    })
  };

  LABS.boxmodel = {
    title: "Box model", desc: "margin, border, padding va content qatlamlarini ko'ring.", lessons: [19, 28],
    render: specLab({
      pad: true,
      spec: [
        { k: "w", label: "width", type: "range", min: 60, max: 260, val: 160, unit: "px" },
        { k: "p", label: "padding", type: "range", min: 0, max: 50, val: 20, unit: "px" },
        { k: "b", label: "border", type: "range", min: 0, max: 20, val: 4, unit: "px" },
        { k: "m", label: "margin", type: "range", min: 0, max: 50, val: 20, unit: "px" },
        { k: "r", label: "border-radius", type: "range", min: 0, max: 60, val: 8, unit: "px" },
        { k: "bs", label: "box-sizing", type: "select", opts: ["content-box", "border-box"], val: "content-box" }
      ],
      draw(v, stage) {
        const inner = v.bs === "border-box" ? Math.max(0, v.w - 2 * v.p - 2 * v.b) : v.w;
        const total = v.bs === "border-box" ? v.w : v.w + 2 * v.p + 2 * v.b;
        stage.innerHTML = `<div><div class="bm-m" style="padding:${v.m}px;border-radius:${v.r + v.m / 2}px">
          <span class="bm-tag" style="top:2px;left:6px;color:#d9480f">margin</span>
          <div class="bm-b" style="border-width:${v.b}px;padding:${v.p}px;border-radius:${v.r}px">
            <span class="bm-tag" style="top:2px;left:6px;color:#2b8a3e">padding</span>
            <div class="bm-c" style="width:${inner}px">${inner}px</div>
          </div></div>
          <div class="bm-legend"><span><i style="background:#ffd8a8"></i>margin</span><span><i style="background:#343a40"></i>border</span><span><i style="background:#b2f2bb"></i>padding</span><span><i style="background:#a5d8ff"></i>content</span></div></div>`;
        return `.box {\n  box-sizing: ${v.bs};\n  width: ${v.w}px;\n  padding: ${v.p}px;\n  border: ${v.b}px solid #343a40;\n  border-radius: ${v.r}px;\n  margin: ${v.m}px;\n}\n/* Ko'rinadigan kenglik: ${total}px ${v.bs === "content-box" ? `= ${v.w} + 2×${v.p} + 2×${v.b}` : "(width ichiga hammasi kiradi)"} */`;
      }
    })
  };

  LABS.gradient = {
    title: "Gradient generator", desc: "linear, radial va conic gradientlar.", lessons: [22],
    render: specLab({
      spec: [
        { k: "type", label: "Turi", type: "select", opts: ["linear", "radial", "conic"], val: "linear" },
        { k: "a", label: "Burchak", type: "range", min: 0, max: 360, val: 90, unit: "deg" },
        { k: "c1", label: "1-rang", type: "color", val: "#ff9a3c" },
        { k: "c2", label: "2-rang", type: "color", val: "#ff4d6d" },
        { k: "c3", label: "3-rang", type: "color", val: "#7b2ff7" },
        { k: "p", label: "O'rta rang joyi", type: "range", min: 5, max: 95, val: 50, unit: "%" }
      ],
      draw(v, stage) {
        const stops = `${v.c1} 0%, ${v.c2} ${v.p}%, ${v.c3} 100%`;
        const g = v.type === "linear" ? `linear-gradient(${v.a}deg, ${stops})` : v.type === "radial" ? `radial-gradient(circle, ${stops})` : `conic-gradient(from ${v.a}deg, ${v.c1}, ${v.c2}, ${v.c3}, ${v.c1})`;
        stage.style.backgroundImage = g;
        return `.box {\n  background-image: ${g};\n}`;
      }
    })
  };

  LABS.shadow = {
    title: "Soya generatori", desc: "box-shadow va text-shadow parametrlari.", lessons: [23],
    render: specLab({
      pad: true,
      spec: [
        { k: "t", label: "Nimaga?", type: "select", opts: ["box-shadow", "text-shadow"], val: "box-shadow" },
        { k: "x", label: "x (o'ngga)", type: "range", min: -40, max: 40, val: 10, unit: "px" },
        { k: "y", label: "y (pastga)", type: "range", min: -40, max: 40, val: 12, unit: "px" },
        { k: "bl", label: "blur", type: "range", min: 0, max: 60, val: 24, unit: "px" },
        { k: "sp", label: "size (spread)", type: "range", min: -20, max: 30, val: 0, unit: "px" },
        { k: "c", label: "Rang", type: "color", val: "#1b1f3b" },
        { k: "o", label: "Shaffoflik", type: "range", min: 0, max: 1, step: 0.05, val: 0.35 },
        { k: "in", label: "inset (ichki)", type: "check", val: false }
      ],
      draw(v, stage) {
        const col = hexA(v.c, v.o);
        if (v.t === "text-shadow") {
          const s = `${v.x}px ${v.y}px ${v.bl}px ${col}`;
          stage.innerHTML = `<div style="font:900 64px system-ui;color:#4263eb;text-shadow:${s}">Termiz</div>`;
          return `h1 {\n  text-shadow: ${s};\n}\n/* text-shadow'da size va inset yo'q */`;
        }
        const s = `${v.in ? "inset " : ""}${v.x}px ${v.y}px ${v.bl}px ${v.sp}px ${col}`;
        stage.innerHTML = `<div style="width:170px;height:120px;border-radius:16px;background:#fff;border:1px solid #eee;box-shadow:${s};display:grid;place-items:center;font:700 15px system-ui;color:#495057">Karta</div>`;
        return `.card {\n  box-shadow: ${s};\n}`;
      }
    })
  };

  LABS.transform = {
    title: "Transform", desc: "rotate, scale, translate, skew va opacity.", lessons: [27],
    render: specLab({
      spec: [
        { k: "r", label: "rotate", type: "range", min: -180, max: 180, val: 15, unit: "deg" },
        { k: "s", label: "scale", type: "range", min: 0.2, max: 2, step: 0.05, val: 1 },
        { k: "tx", label: "translateX", type: "range", min: -120, max: 120, val: 0, unit: "px" },
        { k: "ty", label: "translateY", type: "range", min: -80, max: 80, val: 0, unit: "px" },
        { k: "sk", label: "skew", type: "range", min: -45, max: 45, val: 0, unit: "deg" },
        { k: "o", label: "opacity", type: "range", min: 0, max: 1, step: 0.05, val: 1 }
      ],
      init(stage) { stage.innerHTML = `<div class="tf-ghost"></div><div class="tf-el">CSS</div>`; },
      draw(v, stage) {
        const t = `translate(${v.tx}px, ${v.ty}px) rotate(${v.r}deg) scale(${v.s}) skew(${v.sk}deg)`;
        const el = stage.querySelector(".tf-el");
        el.style.transform = t;
        el.style.opacity = v.o;
        return `.box {\n  transform: ${t};\n  opacity: ${v.o};\n}`;
      }
    })
  };

  LABS.position = {
    title: "Position", desc: "static, relative, absolute, fixed va sticky – sahnani scroll qilib ko'ring.", lessons: [49, 50],
    render: specLab({
      spec: [
        { k: "pos", label: "Qizil blok: position", type: "select", opts: ["static", "relative", "absolute", "fixed", "sticky"], val: "absolute" },
        { k: "top", label: "top", type: "range", min: 0, max: 200, val: 20, unit: "px" },
        { k: "left", label: "left", type: "range", min: 0, max: 300, val: 40, unit: "px" },
        { k: "par", label: "Ota-ona: position: relative", type: "check", val: true }
      ],
      init(stage) {
        stage.innerHTML = `<div class="ps-outer"><div class="ps-scroll">
          <p>⬇ Bu oynani scroll qiling. Binafsha quti – ota-ona (.parent).</p>
          <div class="ps-parent">.parent<div class="ps-child">.child</div><div class="ps-sib">qo'shni</div></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptates. Termiz – quyoshli shahar.</p>
          <p style="height:260px">Pastda yana kontent...</p></div></div>`;
      },
      draw(v, stage) {
        stage.querySelector(".ps-parent").style.position = v.par ? "relative" : "static";
        const c = stage.querySelector(".ps-child");
        c.style.position = v.pos;
        c.style.top = v.top + "px";
        c.style.left = v.left + "px";
        const hints = {
          static: "/* static: top/left ishlamaydi – oddiy oqimda */",
          relative: "/* relative: o'z joyidan siljiydi, joyi bo'sh qoladi */",
          absolute: v.par ? "/* absolute: relative ota-onaga nisbatan */" : "/* absolute: relative ota-ona yo'q – yuqoriroq konteynerga nisbatan! */",
          fixed: "/* fixed: oynaga yopishadi, scroll'da qimirlamaydi */",
          sticky: "/* sticky: scroll'da top qiymatiga yetganda yopishadi */"
        };
        return `.parent {\n  position: ${v.par ? "relative" : "static"};\n}\n.child {\n  position: ${v.pos};\n  top: ${v.top}px;\n  left: ${v.left}px;\n}\n${hints[v.pos]}`;
      }
    })
  };

  const KF = {
    bounce: "0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-80px); }",
    spin: "from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }",
    pulse: "0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.4); }",
    shake: "0%, 100% { transform: translateX(0); }\n  25% { transform: translateX(-20px); }\n  75% { transform: translateX(20px); }",
    fade: "from { opacity: 0; }\n  to { opacity: 1; }",
    slide: "from { transform: translateX(-150px); }\n  to { transform: translateX(150px); }"
  };
  LABS.animation = {
    title: "Animatsiya", desc: "@keyframes va animation xususiyatlari.", lessons: [55, 56],
    render: specLab({
      pad: true,
      spec: [
        { k: "name", label: "@keyframes", type: "select", opts: Object.keys(KF), val: "bounce" },
        { k: "d", label: "duration", type: "range", min: 0.2, max: 4, step: 0.1, val: 1, unit: "s" },
        { k: "tf", label: "timing-function", type: "select", opts: ["ease", "linear", "ease-in", "ease-out", "ease-in-out", "steps(4)"], val: "ease-in-out" },
        { k: "it", label: "iteration-count", type: "select", opts: ["infinite", "1", "2", "3"], val: "infinite" },
        { k: "dir", label: "direction", type: "select", opts: ["normal", "alternate", "reverse"], val: "normal" },
        { k: "fill", label: "fill-mode", type: "select", opts: ["none", "forwards", "backwards", "both"], val: "none" }
      ],
      draw(v, stage) {
        const nm = "k" + uid + v.name;
        stage.innerHTML = `<style>@keyframes ${nm}{${KF[v.name].replace(/\n/g, "")}}</style><div class="an-el" title="Qayta boshlash uchun bosing"></div>`;
        const el = stage.querySelector(".an-el");
        const a = `${nm} ${v.d}s ${v.tf} ${v.it} ${v.dir} ${v.fill}`;
        el.style.animation = a;
        el.onclick = () => { el.style.animation = "none"; void el.offsetWidth; el.style.animation = a; };
        return `.box {\n  animation: ${v.name} ${v.d}s ${v.tf} ${v.it} ${v.dir} ${v.fill};\n}\n.box:hover { animation-play-state: paused; }\n\n@keyframes ${v.name} {\n  ${KF[v.name]}\n}`;
      }
    })
  };

  /* ---- Responsive ---- */
  const RS_CSS = `body{margin:0;font-family:system-ui,sans-serif}
header{display:flex;justify-content:space-between;align-items:center;padding:14px 20px;background:#1d3557;color:#fff}
nav{display:flex;gap:14px}
nav a{color:#fff;text-decoration:none}
.cards{display:flex;gap:14px;padding:20px}
.card{flex:1;background:#f1f3f5;border-radius:10px;padding:18px}
.card b{font-size:22px}

@media (max-width: 768px) {
  .cards{flex-wrap:wrap}
  .card{flex:1 1 40%}
}
@media (max-width: 480px) {
  header{flex-direction:column;gap:8px}
  .cards{flex-direction:column}
  body{font-size:15px}
}`;
  const RS_HTML = `<header><b>TERMIZ.UZ</b><nav><a href="#">Asosiy</a><a href="#">Yangilik</a><a href="#">Aloqa</a></nav></header>
<div class="cards"><div class="card"><b>Tarix</b><p>Qadimiy shahar</p></div><div class="card"><b>Tabiat</b><p>Amudaryo bo'yi</p></div><div class="card"><b>Taomlar</b><p>Surxon oshi</p></div></div>`;
  LABS.responsive = {
    title: "Responsive ekran", desc: "Ekran kengligini o'zgartiring – @media qanday ishlashini ko'ring.", lessons: [41, 42, 43],
    render(body) {
      body.innerHTML = `<div class="lab-grid"><div class="lab-controls">
        <label class="ctl"><span>Ekran kengligi <output>1024px</output></span><input type="range" min="320" max="1280" value="1024"></label>
        <div class="seg"><button data-w="375">📱 375</button><button data-w="768">▭ 768</button><button data-w="1280">🖥 1280</button></div>
        <p class="muted" style="font-size:13px;margin:0">Yashil rangli @media hozir ishlayapti.</p>
      </div><div class="lab-stage"><div class="stage"><div class="rs-label"><span class="dev"></span><span class="act"></span></div><div class="rs-wrap"><iframe title="Responsive namunasi" sandbox="allow-same-origin"></iframe></div></div><pre class="out"></pre></div></div>`;
      const r = body.querySelector("input");
      const f = body.querySelector("iframe");
      const wrap = body.querySelector(".rs-wrap");
      f.srcdoc = `<!doctype html><meta name="viewport" content="width=device-width"><style>${RS_CSS}</style>${RS_HTML}`;
      const up = () => {
        const w = +r.value;
        r.previousElementSibling.querySelector("output").textContent = w + "px";
        const sc = Math.min(1, (wrap.clientWidth || 600) / w);
        f.style.width = w + "px";
        f.style.height = 360 / sc + "px";
        f.style.transform = `scale(${sc})`;
        const dev = w <= 480 ? "📱 Telefon" : w <= 768 ? "▭ Planshet" : "🖥 Kompyuter";
        body.querySelector(".dev").textContent = dev + " · " + w + "px";
        body.querySelector(".act").textContent = w <= 480 ? "@media (max-width: 480px) + 768px" : w <= 768 ? "@media (max-width: 768px)" : "asosiy CSS";
        let code = window.hl ? window.hl(RS_CSS, "css") : esc(RS_CSS);
        code = code.split("\n").map((ln) => ln).join("\n");
        body.querySelector(".out").innerHTML = code;
        body.querySelectorAll(".out .token.atrule").forEach((a) => {
          const m = a.textContent.match(/max-width:\s*(\d+)/);
          if (m) a.style.background = w <= +m[1] ? "rgba(95,208,122,.35)" : "transparent";
        });
      };
      r.addEventListener("input", up);
      body.querySelectorAll(".seg button").forEach((b) => b.addEventListener("click", () => { r.value = b.dataset.w; up(); }));
      new ResizeObserver(up).observe(wrap);
      up();
    }
  };

  /* ---- Uy: HTML / CSS / JS ---- */
  LABS.house = {
    title: "Sayt – bu uy", desc: "HTML, CSS va JavaScript vazifasini uy misolida yoqib-o'chirib ko'ring.", lessons: [1],
    render(body) {
      const b = "lab" + ++uid;
      body.innerHTML = `<div class="lab-grid"><div class="lab-controls">
        <label class="ctl" style="display:flex;gap:8px"><input id="${b}h" type="checkbox" checked disabled> <b style="color:#d9480f">HTML</b> – devorlar (skelet)</label>
        <label class="ctl" style="display:flex;gap:8px"><input id="${b}c" type="checkbox"> <b style="color:#1c64d1">CSS</b> – bo'yoq va bezak</label>
        <label class="ctl" style="display:flex;gap:8px"><input id="${b}j" type="checkbox"> <b style="color:#b08900">JavaScript</b> – elektr (derazani bosing!)</label>
      </div><div class="lab-stage"><div class="stage"><div class="hs"><div class="h-house">
        <div class="h-roof"></div><div class="h-body"><div class="h-win l"></div><div class="h-win r"></div><div class="h-door"></div><span class="h-lbl">&lt;div class="uy"&gt;</span></div>
      </div></div></div><pre class="out"></pre></div></div>`;
      const hs = body.querySelector(".hs");
      const c = body.querySelector("#" + b + "c");
      const j = body.querySelector("#" + b + "j");
      const out = body.querySelector(".out");
      const up = () => {
        hs.classList.toggle("css", c.checked);
        hs.classList.toggle("js", j.checked);
        if (!j.checked) { hs.classList.remove("night"); body.querySelectorAll(".h-win").forEach((w) => w.classList.remove("lit")); }
        let code = `<!-- HTML -->\n<div class="uy">\n  <div class="deraza"></div>\n  <div class="eshik"></div>\n</div>`;
        if (c.checked) code += `\n\n/* CSS */\n.uy { background: #ffe8a3; }\n.deraza { background: #a5d8ff; }`;
        if (j.checked) code += `\n\n// JavaScript\nderaza.addEventListener('click', () => {\n  deraza.classList.toggle('chiroq');\n});`;
        out.textContent = code;
      };
      body.querySelectorAll(".h-win").forEach((w) => w.addEventListener("click", () => { if (j.checked) w.classList.toggle("lit"); }));
      body.querySelector(".h-door").addEventListener("click", () => { if (j.checked) hs.classList.toggle("night"); });
      c.addEventListener("change", up);
      j.addEventListener("change", up);
      up();
    }
  };

  /* ---- Tezkor tugmalar ---- */
  const HK = [
    { k: "c", t: "Nusxa olish (Copy)" }, { k: "v", t: "Qo'yish (Paste)" }, { k: "x", t: "Kesib olish (Cut)" },
    { k: "z", t: "Ortga qaytarish (Undo)" }, { k: "a", t: "Hammasini belgilash" }, { k: "s", t: "Saqlash (Save)" }, { k: "f", t: "Qidirish (Find)" }
  ];
  LABS.hotkeys = {
    title: "Tezkor tugmalar", desc: "Ctrl + … kombinatsiyalarini mashq qiling.", lessons: [2],
    render(body) {
      body.innerHTML = `<div class="lab-grid"><div class="lab-controls">
        <table class="hk-tbl"><tbody>
        ${HK.map((h) => `<tr><td><kbd>Ctrl</kbd>+<kbd>${h.k.toUpperCase()}</kbd></td><td>${h.t}</td></tr>`).join("")}
        <tr><td><kbd>Win</kbd>+<kbd>D</kbd></td><td>Ish stoli</td></tr>
        <tr><td><kbd>Win</kbd>+<kbd>E</kbd></td><td>Explorer (papkalar)</td></tr>
        <tr><td><kbd>Alt</kbd>+<kbd>Tab</kbd></td><td>Oynalar orasida</td></tr>
        <tr><td><kbd>Win</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd></td><td>Ekran rasmi</td></tr>
        </tbody></table></div>
        <div class="lab-stage"><div class="stage"><div class="hk-zone" tabindex="0">
          <div class="eyebrow" style="color:#868e96">Shu oynani bosing, keyin tugmalarni bosing</div>
          <div class="hk-task"></div><div class="hk-msg"></div>
          <div style="font:700 14px system-ui;color:#495057">Ball: <span class="hk-s">0</span> · Vaqt: <span class="hk-t">0</span> s</div>
          <div style="margin-top:12px;display:flex;gap:8px;justify-content:center"><button class="btn sm hk-hint">Yordam</button><button class="btn sm hk-new">Qaytadan</button></div>
        </div></div></div></div>`;
      const zone = body.querySelector(".hk-zone");
      const task = body.querySelector(".hk-task"), msg = body.querySelector(".hk-msg");
      let order = [], i = 0, score = 0, t0 = 0, timer = null;
      const reset = () => {
        order = HK.slice().sort(() => Math.random() - 0.5); i = 0; score = 0; t0 = 0;
        clearInterval(timer); timer = null;
        body.querySelector(".hk-s").textContent = 0; body.querySelector(".hk-t").textContent = 0;
        task.textContent = order[0].t; msg.textContent = "";
      };
      zone.addEventListener("keydown", (e) => {
        if (!(e.ctrlKey || e.metaKey) || ["Control", "Meta"].includes(e.key)) return;
        e.preventDefault();
        if (i >= order.length) return;
        if (!timer) { t0 = Date.now(); timer = setInterval(() => { body.querySelector(".hk-t").textContent = Math.round((Date.now() - t0) / 1000); }, 250); }
        if (e.key.toLowerCase() === order[i].k) {
          score++; i++;
          body.querySelector(".hk-s").textContent = score;
          msg.style.color = "#2b8a3e"; msg.textContent = "✓ To'g'ri!";
          if (i >= order.length) { clearInterval(timer); task.textContent = "🎉 Barakalla!"; msg.textContent = `${score} ta to'g'ri, ${Math.round((Date.now() - t0) / 1000)} soniyada`; }
          else task.textContent = order[i].t;
        } else { msg.style.color = "#c92a2a"; msg.textContent = `✗ Bu Ctrl+${e.key.toUpperCase()} edi. Yana urinib ko'ring`; }
      });
      body.querySelector(".hk-hint").addEventListener("click", () => { if (i < order.length) { msg.style.color = "#1c7ed6"; msg.textContent = `Ctrl + ${order[i].k.toUpperCase()}`; } zone.focus(); });
      body.querySelector(".hk-new").addEventListener("click", () => { reset(); zone.focus(); });
      reset();
    }
  };

  /* ---- Tez yozish ---- */
  const TEXTS = [
    "termiz quyoshli shahar. biz bu yerda veb sayt yasashni organamiz.",
    "html sahifaning skeleti, css uning kiyimi, javascript esa uning harakati.",
    "har kuni ozgina mashq qilsangiz, tez yozish sizga oson bo'ladi.",
    "dasturchi klaviaturaga qaramasdan yozadi va fikriga e'tibor beradi.",
    "amudaryo bo'yida qadimiy fayoztepa va kokildor ota maqbarasi bor."
  ];
  LABS.typing = {
    title: "Tez yozish trenajyori", desc: "So'z/daqiqa va aniqlikni o'lchang.", lessons: [3],
    render(body) {
      body.innerHTML = `<div class="stage"><div class="ty-text"></div>
        <div style="padding:0 18px 12px"><input class="ty-in" type="text" autocomplete="off" spellcheck="false" aria-label="Matnni shu yerga yozing" placeholder="Shu yerga yozing..." style="width:100%;padding:10px 12px;font:18px ui-monospace,monospace;border:2px solid #ced4da;border-radius:8px;background:#fff;color:#212529"></div>
        <div class="ty-stats"><div><b class="ty-w">0</b>so'z/daqiqa</div><div><b class="ty-a">100%</b>aniqlik</div><div><b class="ty-t">0</b>soniya</div><div style="margin-left:auto"><button class="btn sm ty-new">Yangi matn</button></div></div></div>`;
      const box = body.querySelector(".ty-text"), inp = body.querySelector(".ty-in");
      let text = "", t0 = 0, errors = 0, done = false, k = -1;
      const load = () => {
        k = (k + 1) % TEXTS.length; text = TEXTS[k]; inp.value = ""; t0 = 0; errors = 0; done = false; inp.disabled = false;
        render();
      };
      const render = () => {
        const v = inp.value;
        box.innerHTML = text.split("").map((ch, i) => {
          const cls = i < v.length ? (v[i] === ch ? "ok" : "bad") : i === v.length ? "cur" : "";
          return `<span class="${cls}">${ch === " " && cls === "bad" ? "·" : esc(ch)}</span>`;
        }).join("");
        const sec = t0 ? (Date.now() - t0) / 1000 : 0;
        const correct = v.split("").filter((c, i) => c === text[i]).length;
        body.querySelector(".ty-w").textContent = sec > 1 ? Math.round((correct / 5) / (sec / 60)) : 0;
        body.querySelector(".ty-a").textContent = v.length ? Math.max(0, Math.round(100 - (errors / Math.max(v.length, 1)) * 100)) + "%" : "100%";
        body.querySelector(".ty-t").textContent = Math.round(sec);
      };
      inp.addEventListener("input", (e) => {
        if (done) return;
        if (!t0) t0 = Date.now();
        const v = inp.value;
        if (e.inputType && e.inputType.startsWith("insert") && v[v.length - 1] !== text[v.length - 1]) errors++;
        render();
        if (v === text) { done = true; inp.disabled = true; render(); }
      });
      body.querySelector(".ty-new").addEventListener("click", load);
      load();
    }
  };

  /* ---- Prompt konstruktori ---- */
  const PR_EX = {
    role: "Sen mehribon veb dasturlash ustozisan",
    task: "Menga oddiy HTML sahifa yozib ber: sarlavha, Termiz haqida rasm va 'Batafsil' tugmasi bo'lsin",
    ctx: "Men 12 yoshdaman, HTML'ni endi o'rganyapman",
    rules: "Faqat HTML ishlat, CSS va JavaScript kerak emas",
    fmt: "Har bir qatorga o'zbekcha izoh yoz"
  };
  LABS.prompt = {
    title: "Prompt konstruktori", desc: "AI uchun aniq so'rov tuzing: Rol + Vazifa + Kontekst + Shart + Format.", lessons: [4, 73],
    render(body) {
      const b = "lab" + ++uid;
      const f = (k, l, ph, ta) => `<label class="ctl"><span>${l}</span>${ta ? `<textarea id="${b}${k}" rows="3" placeholder="${esc(ph)}"></textarea>` : `<input id="${b}${k}" type="text" placeholder="${esc(ph)}">`}</label>`;
      body.innerHTML = `<div class="lab-grid"><div class="lab-controls">
        ${f("role", "1. Rol – AI kim bo'lsin?", "Sen ... ustozisan")}
        ${f("task", "2. Vazifa – nima qilsin?", "Menga ... yozib ber", true)}
        ${f("ctx", "3. Kontekst – siz haqingizda", "Men ... yoshdaman, ... bilaman")}
        ${f("rules", "4. Shartlar – cheklovlar", "Faqat ..., ... ishlatma")}
        ${f("fmt", "5. Format – javob ko'rinishi", "Jadval / ro'yxat / izohlar bilan")}
        <div class="row"><button class="btn sm pr-ex">Namuna</button><button class="btn sm pr-clr">Tozalash</button></div>
      </div><div class="lab-stage"><div class="stage" style="padding:16px;min-height:0">
        <div style="font:700 12px monospace;color:#868e96;text-transform:uppercase">Prompt sifati</div>
        <div class="pr-meter">${"<i></i>".repeat(5)}</div>
        <ul class="pr-tips"></ul></div>
        <pre class="out" style="white-space:pre-wrap"></pre>
        <div class="row"><button class="btn primary sm pr-copy">Nusxa olish</button><span class="muted" style="font-size:13px">⚠️ Shaxsiy ma'lumot (ism-familiya, manzil, parol) yozmang!</span></div>
      </div></div>`;
      const keys = ["role", "task", "ctx", "rules", "fmt"];
      const get = (k) => body.querySelector("#" + b + k);
      const tipsText = { role: "Rol qo'shing: AI kim sifatida javob bersin?", task: "Vazifani aniqroq yozing (kamida 25 belgi)", ctx: "O'zingiz haqingizda kontekst bering (yosh, bilim)", rules: "Shart qo'shing: nima ishlatish mumkin/mumkin emas", fmt: "Javob formatini ayting" };
      const up = () => {
        const v = {}; keys.forEach((k) => (v[k] = get(k).value.trim()));
        const ok = { role: !!v.role, task: v.task.length >= 25, ctx: !!v.ctx, rules: !!v.rules, fmt: !!v.fmt };
        const n = Object.values(ok).filter(Boolean).length;
        body.querySelectorAll(".pr-meter i").forEach((el, i) => el.classList.toggle("on", i < n));
        const tips = keys.filter((k) => !ok[k]).map((k) => `<li>${tipsText[k]}</li>`).join("");
        body.querySelector(".pr-tips").innerHTML = tips || "<li style='color:#2b8a3e;font-weight:700'>Ajoyib prompt! Endi AI javobini tekshirishni unutmang.</li>";
        const parts = [v.role && v.role.replace(/\.?$/, "."), v.ctx && v.ctx.replace(/\.?$/, "."), v.task && v.task.replace(/\.?$/, "."), v.rules && v.rules.replace(/\.?$/, "."), v.fmt && v.fmt.replace(/\.?$/, ".")].filter(Boolean);
        body.querySelector(".out").textContent = parts.join(" ") || "Maydonlarni to'ldiring – prompt shu yerda paydo bo'ladi.";
      };
      body.querySelector(".lab-controls").addEventListener("input", up);
      body.querySelector(".pr-ex").addEventListener("click", () => { keys.forEach((k) => (get(k).value = PR_EX[k])); up(); });
      body.querySelector(".pr-clr").addEventListener("click", () => { keys.forEach((k) => (get(k).value = "")); up(); });
      body.querySelector(".pr-copy").addEventListener("click", () => window.copyText && window.copyText(body.querySelector(".out").textContent));
      get("task").value = "sayt qil";
      up();
    }
  };

  /* ---- Git simulyatori ---- */
  LABS.git = {
    title: "Git simulyatori", desc: "init → add → commit → push jarayonini xavfsiz mashq qiling.", lessons: [46, 47],
    render(body) {
      body.innerHTML = `<div class="stage" style="min-height:0">
        <div class="gt-cols">
          <div class="gt-col"><h5>📁 Ishchi papka</h5><div class="gt-wd"></div></div>
          <div class="gt-col"><h5>📦 Staging (add)</h5><div class="gt-st"></div></div>
          <div class="gt-col"><h5>💾 Local repo (commit)</h5><div class="gt-lc"></div></div>
          <div class="gt-col"><h5>☁️ GitHub (push)</h5><div class="gt-gh"></div></div>
        </div>
        <div style="padding:0 10px 8px;display:flex;gap:6px;flex-wrap:wrap"><button class="btn sm gt-edit">✏️ Faylni o'zgartirish</button><button class="btn sm gt-newf">➕ Yangi fayl</button><button class="btn sm gt-reset">↺ Boshidan</button></div>
        <div class="gt-term"></div>
        <div class="gt-in"><span>$</span><input type="text" aria-label="Git buyrug'i" placeholder="git init" autocomplete="off" spellcheck="false"></div>
      </div>`;
      let S;
      const reset = () => { S = { init: false, files: { "index.html": "mod", "style.css": "mod" }, commits: [], remote: "", pushed: 0, n: 3 }; term.innerHTML = ""; line("Buyruq yozing. Yordam uchun: help", "g"); draw(); };
      const term = body.querySelector(".gt-term"), inp = body.querySelector(".gt-in input");
      const line = (t, c) => { const d = document.createElement("div"); if (c) d.className = c; d.textContent = t; term.appendChild(d); term.scrollTop = term.scrollHeight; };
      const draw = () => {
        const f = Object.entries(S.files);
        body.querySelector(".gt-wd").innerHTML = f.map(([n, s]) => `<div class="gt-file ${s === "mod" ? "mod" : ""}">${n}${s === "mod" ? " ✎" : ""}</div>`).join("") || "<i>bo'sh</i>";
        body.querySelector(".gt-st").innerHTML = f.filter(([, s]) => s === "st").map(([n]) => `<div class="gt-file st">${n}</div>`).join("");
        body.querySelector(".gt-lc").innerHTML = S.init ? S.commits.slice().reverse().map((c) => `<div class="gt-commit">${c.id} ${esc(c.m)}</div>`).join("") || "<i>.git tayyor</i>" : "<i>git init qilinmagan</i>";
        body.querySelector(".gt-gh").innerHTML = S.remote ? S.commits.slice(0, S.pushed).reverse().map((c) => `<div class="gt-commit">${c.id} ${esc(c.m)}</div>`).join("") || "<i>repo bo'sh</i>" : "<i>remote ulanmagan</i>";
      };
      const run = (cmd) => {
        line("$ " + cmd, "c");
        const c = cmd.trim().replace(/\s+/g, " ");
        if (c === "help") return line("git --version | git init | git status | git add . | git commit -m \"xabar\" | git log | git remote add origin URL | git push -u origin main | clear");
        if (c === "clear") { term.innerHTML = ""; return; }
        if (c === "git --version") return line("git version 2.45.0");
        if (c.startsWith("git config")) return line("✓ sozlama saqlandi", "g");
        if (!c.startsWith("git ")) return line("Buyruq topilmadi. Git buyruqlari 'git' so'zi bilan boshlanadi.", "e");
        if (c === "git init") { if (S.init) return line("Reinitialized existing Git repository"); S.init = true; draw(); return line("Initialized empty Git repository in WebKurs/.git/", "g"); }
        if (!S.init) return line("fatal: not a git repository – avval 'git init' qiling", "e");
        if (c === "git status") {
          const f = Object.entries(S.files);
          const st = f.filter(([, s]) => s === "st"), md = f.filter(([, s]) => s === "mod");
          if (!st.length && !md.length) return line("nothing to commit, working tree clean", "g");
          if (st.length) line("Changes to be committed:\n  " + st.map(([n]) => n).join("\n  "), "g");
          if (md.length) line("Changes not staged (git add qiling):\n  " + md.map(([n]) => n).join("\n  "), "e");
          return;
        }
        if (c.startsWith("git add")) {
          const a = c.slice(8).trim();
          if (!a) return line("Nimani qo'shish kerak? Masalan: git add .", "e");
          let n = 0;
          Object.keys(S.files).forEach((f) => { if ((a === "." || a === f) && S.files[f] === "mod") { S.files[f] = "st"; n++; } });
          draw();
          return n ? line(`✓ ${n} ta fayl staging'ga qo'shildi`, "g") : line("Qo'shiladigan o'zgarish yo'q");
        }
        if (c.startsWith("git commit")) {
          const m = c.match(/-m ["'](.+)["']/);
          if (!m) return line('Xabar kerak: git commit -m "Birinchi commit"', "e");
          const st = Object.keys(S.files).filter((f) => S.files[f] === "st");
          if (!st.length) return line("nothing to commit (avval git add .)", "e");
          st.forEach((f) => (S.files[f] = "ok"));
          const id = Math.random().toString(16).slice(2, 9);
          S.commits.push({ id, m: m[1] }); draw();
          return line(`[main ${id}] ${m[1]}\n ${st.length} files changed`, "g");
        }
        if (c === "git log") return S.commits.length ? S.commits.slice().reverse().forEach((x) => line(`commit ${x.id}  ${x.m}`)) : line("Hali commit yo'q");
        if (c.startsWith("git remote add origin")) { S.remote = c.split(" ").pop(); draw(); return line("✓ origin ulandi: " + S.remote, "g"); }
        if (c.startsWith("git push")) {
          if (!S.remote) return line("fatal: 'origin' topilmadi – git remote add origin URL", "e");
          if (!S.commits.length) return line("error: src refspec main does not match any (avval commit qiling)", "e");
          S.pushed = S.commits.length; draw();
          return line("✓ GitHub'ga yuborildi: " + S.remote + "\n  main -> main", "g");
        }
        line("Bu buyruq simulyatorda yo'q. 'help' yozing.", "e");
      };
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter" && inp.value.trim()) { run(inp.value); inp.value = ""; } });
      body.querySelector(".gt-edit").addEventListener("click", () => { const fs = Object.keys(S.files); const f = fs[Math.floor(Math.random() * fs.length)]; S.files[f] = "mod"; draw(); line(`(${f} fayli o'zgartirildi)`); });
      body.querySelector(".gt-newf").addEventListener("click", () => { const f = `page-${S.n++}.html`; S.files[f] = "mod"; draw(); line(`(${f} yaratildi)`); });
      body.querySelector(".gt-reset").addEventListener("click", reset);
      reset();
    }
  };

  window.LABS = LABS;
  window.renderLab = function (key, el) {
    injectCss();
    const L = LABS[key];
    if (!L) return;
    el.classList.add("lab");
    el.innerHTML = `<div class="lab-h"><div><b>🔬 ${esc(L.title)}</b><div class="muted" style="font-size:13px">${esc(L.desc)}</div></div><button class="btn sm lab-reset" type="button">↺ Qayta</button></div><div class="lab-body"></div>`;
    const bodyEl = el.querySelector(".lab-body");
    L.render(bodyEl);
    el.querySelector(".lab-reset").addEventListener("click", () => { bodyEl.innerHTML = ""; L.render(bodyEl); });
  };
})();
