/**
 * GasTrack public site: everything that moves. No frameworks.
 * Loaded after i18n.js, which owns `currentLang` and fires `gt:lang` whenever the texts change.
 */
(function () {
  "use strict";

  var $ = function (s, root) { return (root || document).querySelector(s); };
  var $$ = function (s, root) { return Array.prototype.slice.call((root || document).querySelectorAll(s)); };
  var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ——— Pump digits: the same seven bars as the app's radar signs and the launch film ——— */
  var W = 118, H = 208, DIGIT_GAP = 30, BAR_GAP = 4, SLANT = 0.1, THICK = 24, BARS = "abcdefg";
  var LIT = { 0: "abcdef", 1: "bc", 2: "abged", 3: "abgcd", 4: "fgbc", 5: "afgcd", 6: "afgedc", 7: "abc", 8: "abcdefg", 9: "abfgcd", " ": "" };

  function barsAt(th) {
    var g = BAR_GAP, m = H / 2;
    function across(y) {
      return [[th / 2 + g, y], [th + g, y - th / 2], [W - th - g, y - th / 2], [W - th / 2 - g, y], [W - th - g, y + th / 2], [th + g, y + th / 2]];
    }
    function down(x, a, b) {
      return [[x, a + g], [x + th / 2, a + th / 2 + g], [x + th / 2, b - th / 2 - g], [x, b - g], [x - th / 2, b - th / 2 - g], [x - th / 2, a + th / 2 + g]];
    }
    return {
      a: across(th / 2), g: across(m), d: across(H - th / 2),
      f: down(th / 2, th / 2, m), b: down(W - th / 2, th / 2, m),
      e: down(th / 2, m, H - th / 2), c: down(W - th / 2, m, H - th / 2),
    };
  }

  var BAR_SHAPES = barsAt(THICK);

  function shape(points, dx) {
    return "M" + points.map(function (p) {
      return (p[0] + dx + (H - p[1]) * SLANT).toFixed(1) + " " + p[1].toFixed(1);
    }).join("L") + "Z";
  }

  /** Digits, a comma or point, a space for an unlit digit, and ^ for a separator that takes room but shows nothing. */
  function glyphs(text) {
    var lit = "", unlit = "", cursor = 0;
    Array.prototype.forEach.call(text, function (ch) {
      var on = LIT[ch];
      if (on !== undefined) {
        BARS.split("").forEach(function (bar) {
          var path = shape(BAR_SHAPES[bar], cursor);
          if (on.indexOf(bar) >= 0) lit += path; else unlit += path;
        });
        cursor += W + DIGIT_GAP;
      } else if (ch === "," || ch === "." || ch === "^") {
        var size = Math.max(26, THICK * 1.1);
        var x = cursor - DIGIT_GAP + 8;
        if (ch !== "^") lit += "M" + x + " " + (H - size) + "h" + size + "v" + size + "h" + -size + "Z";
        if (ch === ",") lit += "M" + (x + size) + " " + H + "L" + (x + size * 0.4) + " " + H + "L" + (x - size * 0.15) + " " + (H + 24) + "L" + (x + size * 0.4) + " " + (H + 24) + "Z";
        cursor = x + size + 18;
      }
    });
    return { width: Math.max(0, cursor - DIGIT_GAP) + H * SLANT, lit: lit, unlit: unlit };
  }

  function drawSeg(el, text) {
    var svg = el.firstElementChild;
    if (!svg) {
      el.innerHTML = '<svg aria-hidden="true"><path class="off"/><path class="on"/></svg>';
      svg = el.firstElementChild;
    }
    var g = glyphs(text);
    svg.setAttribute("viewBox", "0 0 " + g.width.toFixed(1) + " " + H);
    svg.children[0].setAttribute("d", g.unlit);
    svg.children[1].setAttribute("d", g.lit);
  }

  /* ——— Numbers, written the way each language writes them ——— */
  var GROUP = { en: ",", it: ".", fr: " " };
  var GROUP_SEG = { en: ",", it: ".", fr: "^" };
  var DECIMAL = { en: ".", it: ",", fr: "," };

  function money(value) {
    var dec = value % 1 ? 2 : 0;
    var parts = value.toFixed(dec).split(".");
    var whole = parts[0].replace(/\B(?=(\d{3})+$)/g, GROUP[currentLang]);
    var n = whole + (dec ? DECIMAL[currentLang] + parts[1] : "");
    return currentLang === "en" ? "€" + n : n + " €";
  }

  /** Four cells, so nothing shifts while the count runs: 847 is " ^847" with the first digit dark. */
  function pumpText(value) {
    var n = Math.round(value), s = String(n);
    if (n >= 1000) return s.slice(0, -3) + GROUP_SEG[currentLang] + s.slice(-3);
    return " ^" + ("   " + s).slice(-3);
  }

  function drawStaticNumbers() {
    $$(".seg[data-num]").forEach(function (el) {
      var text = Number(el.getAttribute("data-num")).toFixed(Number(el.getAttribute("data-dec") || 0));
      drawSeg(el, text.replace(".", DECIMAL[currentLang]));
    });
    $$(".seg[data-text]").forEach(function (el) {
      drawSeg(el, el.getAttribute("data-text"));
    });
  }

  /* ——— The hero: the count stops at the fill-up, then starts again ——— */
  var COSTS = [1807, 765, 520, 28, 18.91];
  var TOTAL = COSTS.reduce(function (a, b) { return a + b; }, 0);
  var pumpDone = false;

  function drawPumpRows() {
    $$(".pump-rows li").forEach(function (row, i) {
      row.style.setProperty("--w", (COSTS[i] / TOTAL * 100).toFixed(2) + "%");
      $(".pump-amount", row).textContent = money(COSTS[i]);
    });
    var digits = $("#pump-digits");
    if (digits) {
      digits.setAttribute("aria-label", money(Math.round(TOTAL)));
      if (pumpDone) drawSeg(digits, pumpText(TOTAL));
    }
  }

  function finishPump() {
    pumpDone = true;
    $$(".pump-rows li").forEach(function (row) { row.classList.add("on"); });
    drawSeg($("#pump-digits"), pumpText(TOTAL));
  }

  function runPump() {
    var rows = $$(".pump-rows li");
    var digits = $("#pump-digits");
    var legs = [{ at: 0, take: 1300, from: 0, to: COSTS[0], row: 0 }];
    var at = 1650, sum = COSTS[0];
    for (var i = 1; i < COSTS.length; i++) {
      legs.push({ at: at, take: 320, from: sum, to: sum + COSTS[i], row: i });
      sum += COSTS[i];
      at += 430;
    }
    var start = null;
    function frame(now) {
      if (start === null) start = now;
      var t = now - start, shown = 0;
      legs.forEach(function (leg) {
        if (t < leg.at) return;
        rows[leg.row].classList.add("on");
        var p = Math.min(1, (t - leg.at) / leg.take);
        shown = leg.from + (leg.to - leg.from) * (1 - Math.pow(1 - p, 3));
      });
      drawSeg(digits, pumpText(shown));
      if (t < at + 60) requestAnimationFrame(frame); else finishPump();
    }
    requestAnimationFrame(frame);
  }

  function initPump() {
    var pump = $("#pump");
    if (!pump) return;
    if (calm || !("IntersectionObserver" in window)) { finishPump(); return; }
    drawSeg($("#pump-digits"), pumpText(0));
    var seen = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      seen.disconnect();
      runPump();
    }, { threshold: 0.45 });
    seen.observe(pump);
  }

  /* ——— The film: nothing downloads until someone presses play ——— */
  var portrait = window.matchMedia("(max-aspect-ratio: 1/1)");

  function filmBase() {
    return "/assets/media/film-" + currentLang + (portrait.matches ? "-tall" : "");
  }

  function resetFilm() {
    var video = $("#film-video"), play = $("#film-play");
    if (!video) return;
    video.pause();
    video.removeAttribute("src");
    video.controls = false;
    video.load();
    video.poster = filmBase() + ".webp";
    play.hidden = false;
  }

  function initFilm() {
    var video = $("#film-video"), play = $("#film-play");
    if (!video) return;
    play.addEventListener("click", function () {
      video.src = filmBase() + ".mp4";
      video.controls = true;
      play.hidden = true;
      video.play().catch(function () {});
    });
    video.addEventListener("ended", resetFilm);
    var onShape = function () { if (video.paused) resetFilm(); };
    if (portrait.addEventListener) portrait.addEventListener("change", onShape);
  }

  /* ——— Pictures that follow the language ——— */
  function drawPictures() {
    $$("img[data-shot]").forEach(function (img) {
      img.src = "/assets/shots/" + currentLang + "/" + img.getAttribute("data-shot") + ".webp";
    });
    $$("img[data-badge]").forEach(function (img) {
      img.src = "/assets/badges/app-store-" + currentLang + ".svg";
    });
  }

  /* ——— The tour: the phone shows whichever chapter is in the middle of the screen ——— */
  function initTour() {
    var steps = $$(".step[data-step]");
    var shots = $$(".tour-phone img[data-shot]");
    if (!steps.length || !shots.length || !("IntersectionObserver" in window)) return;
    var watch = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var name = entry.target.getAttribute("data-step");
        shots.forEach(function (img) { img.classList.toggle("on", img.getAttribute("data-shot") === name); });
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    steps.forEach(function (step) { watch.observe(step); });
  }

  /* ——— The ladder of ranks: lit from Bronze up to the example driver's rank ——— */
  function initLadder() {
    var ladder = $(".ladder");
    if (!ladder) return;
    if (calm || !("IntersectionObserver" in window)) { ladder.classList.add("go"); return; }
    var seen = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      seen.disconnect();
      ladder.classList.add("go");
    }, { threshold: 0.6 });
    seen.observe(ladder);
  }

  /* ——— Contents of the legal pages, rebuilt from their headings in each language ——— */
  var tocWatch = null;

  function buildToc() {
    var list = $(".toc ol");
    if (!list) return;
    var heads = $$(".legal h2");
    list.textContent = "";
    if (tocWatch) tocWatch.disconnect();
    var links = heads.map(function (h, i) {
      h.id = "section-" + (i + 1);
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      list.appendChild(li);
      return a;
    });
    if (!("IntersectionObserver" in window)) return;
    tocWatch = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var at = heads.indexOf(entry.target);
        links.forEach(function (a, i) { a.classList.toggle("active", i === at); });
      });
    }, { rootMargin: "-10% 0px -80% 0px" });
    heads.forEach(function (h) { tocWatch.observe(h); });
  }

  function initToc() {
    var details = $(".toc details");
    if (!details) return;
    var wide = window.matchMedia("(min-width: 941px)");
    var apply = function () { details.open = wide.matches; };
    apply();
    if (wide.addEventListener) wide.addEventListener("change", apply);
    $(".toc ol").addEventListener("click", function (e) {
      if (e.target.tagName === "A" && !wide.matches) details.open = false;
    });
  }

  /* ——— Each phone sees only what it can install; a computer sees both ——— */
  function initPlatform() {
    var ua = navigator.userAgent;
    var android = /android/i.test(ua);
    // An iPad reports itself as a Mac; only the touch screen gives it away.
    var ios = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    if (!android && !ios) return;
    if (android) $$("[data-get-app]").forEach(function (a) { a.href = "/beta-access.html"; });
    $$("[data-store]").forEach(function (store) {
      var iosLink = $("[data-ios]", store), androidLink = $("[data-android]", store);
      if (!iosLink || !androidLink) return;
      if (android) {
        androidLink.classList.remove("btn-secondary");
        androidLink.classList.add("btn-primary");
        iosLink.hidden = true;
      } else {
        androidLink.hidden = true;
      }
    });
  }

  function drawForLanguage() {
    drawStaticNumbers();
    drawPumpRows();
    drawPictures();
    resetFilm();
    buildToc();
  }

  document.addEventListener("gt:lang", drawForLanguage);
  drawForLanguage();
  initPump();
  initFilm();
  initTour();
  initLadder();
  initToc();
  initPlatform();
})();
