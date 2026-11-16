(() => {
  const cards = document.querySelectorAll('.scrapbook-card');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window) || motion.matches) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('scrapbook-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  cards.forEach(card => observer.observe(card));
  motion.addEventListener('change', () => {
    if (motion.matches) {
      observer.disconnect();
      cards.forEach(card => card.classList.remove('scrapbook-revealed'));
    }
  });
})();