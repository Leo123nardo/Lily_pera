/* Navegación compartida en todas las páginas. */
(() => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;
  function setOpen(open) {
    menu.classList.toggle("show", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    toggle.textContent = open ? "×" : "☰";
  }
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia("(min-width: 1101px)").addEventListener("change", () => setOpen(false));
})();
