/* Interacciones de la portada romántica · Fase 1 */
(() => {
  "use strict";

  const START_DATE = "2024-12-19";

  function updateTimeTogether() {
    const [year, month, day] = START_DATE.split("-").map(Number);
    const start = new Date(year, month - 1, day).getTime();
    const now = Date.now();
    let remaining = Math.max(0, now - start);

    const totalDays = Math.floor(remaining / 86400000);
    remaining %= 86400000;
    const hours = Math.floor(remaining / 3600000);
    remaining %= 3600000;
    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    const values = {
      "days-counter": totalDays.toLocaleString("es-MX"),
      "hours-counter": String(hours).padStart(2, "0"),
      "minutes-counter": String(minutes).padStart(2, "0"),
      "seconds-counter": String(seconds).padStart(2, "0")
    };

    Object.entries(values).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    });
  }

  function setupMobileMenu() {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("show");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
      toggle.textContent = isOpen ? "×" : "☰";
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
        toggle.textContent = "☰";
      });
    });
  }

  function setupRevealAnimations() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateTimeTogether();
    window.setInterval(updateTimeTogether, 1000);
    setupMobileMenu();
    setupRevealAnimations();
  });
})();
