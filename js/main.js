/* ============================================================
   Bike Pulse — interactions
   ============================================================ */
(function () {
  "use strict";

  /* Populate inline SVG icons from data-ic attribute (IC defined in components.js) */
  if (window.IC) {
    document.querySelectorAll("[data-ic]").forEach(el => {
      const k = el.dataset.ic;
      el.innerHTML = k === "stars5" ? IC.star.repeat(5) : (IC[k] || "");
    });
  }

  /* Header shrink on scroll */
  const header = document.getElementById("siteHeader");
  const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu toggle */
  const toggle = document.getElementById("navToggle");
  toggle && toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });

  /* Mobile dropdown accordions */
  document.querySelectorAll(".nav-item.has-dd > .nav-link").forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 980) {
        e.preventDefault();
        link.parentElement.classList.toggle("m-open");
      }
    });
  });

  /* Close mobile menu when a real link is tapped */
  document.querySelectorAll("#navMenu a:not(.nav-item.has-dd > .nav-link)").forEach(a => {
    a.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle && toggle.setAttribute("aria-expanded", "false");
    });
  });

  /* Scroll reveal */
  const reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("in"));
  }

  /* Animated counters */
  const counters = document.querySelectorAll("[data-count]");
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const dec = (el.dataset.count.split(".")[1] || "").length;
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    const dur = 1600; const start = performance.now();
    const fmt = (n) => prefix + n.toLocaleString("pt-PT", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(tick); else el.textContent = fmt(target);
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { animate(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.5 });
    counters.forEach(el => cio.observe(el));
  } else { counters.forEach(animate); }

  /* FAQ / accordion */
  document.querySelectorAll(".acc-q").forEach(q => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      const ans = item.querySelector(".acc-a");
      const isOpen = item.classList.contains("open");
      // close siblings within same accordion
      const group = item.closest(".accordion");
      if (group) group.querySelectorAll(".acc-item.open").forEach(o => {
        if (o !== item) { o.classList.remove("open"); o.querySelector(".acc-a").style.maxHeight = null; }
      });
      item.classList.toggle("open", !isOpen);
      ans.style.maxHeight = isOpen ? null : ans.scrollHeight + "px";
    });
  });

  /* Filter chips (visual only — prototype) */
  document.querySelectorAll("[data-filter-group]").forEach(group => {
    group.querySelectorAll(".chip").forEach(chip => {
      chip.addEventListener("click", () => {
        group.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const f = chip.dataset.filter;
        const target = document.querySelector(group.dataset.filterGroup);
        if (!target) return;
        target.querySelectorAll("[data-cat]").forEach(card => {
          const show = f === "all" || card.dataset.cat === f;
          card.style.display = show ? "" : "none";
        });
      });
    });
  });

  /* Demo form handling */
  document.querySelectorAll("form[data-demo]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const card = form.closest(".form-card") || form.parentElement;
      const success = card.querySelector(".form-success");
      const btn = form.querySelector("[type=submit]");
      if (btn) { btn.disabled = true; btn.textContent = "A enviar…"; }
      setTimeout(() => {
        form.style.display = "none";
        if (success) success.classList.add("show");
      }, 800);
    });
  });

  /* Active footer year (safety) */
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
})();
