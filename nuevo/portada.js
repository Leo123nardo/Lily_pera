/* Interacciones de la portada romántica · Fase 1 */
(() => {
  "use strict";

  const START_DATE = "2024-12-19";

  function updateDaysTogether() {
    const counter = document.getElementById("days-counter");
    if (!counter) return;

    // Usar medianoche local evita desfases por zona horaria.
    const [year, month, day] = START_DATE.split("-").map(Number);
    const start = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const elapsed = Math.floor((today.getTime() - start.getTime()) / 86400000);
    counter.textContent = elapsed >= 0 ? elapsed.toLocaleString("es-MX") : "0";
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
    updateDaysTogether();
    setupMobileMenu();
    setupRevealAnimations();
  });
})();
