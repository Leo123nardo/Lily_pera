/* Revela la galería de graduación al acercarse a ella. */
(() => {
  const gallery = document.querySelector(".graduation-gallery");
  if (!gallery) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) {
    gallery.classList.add("is-visible");
    return;
  }
  gallery.classList.add("will-reveal");
  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    gallery.classList.add("is-visible");
    observer.disconnect();
  }, { threshold: .12 });
  observer.observe(gallery);
})();