(() => {
 const cards = Array.from(document.querySelectorAll('.scrapbook-card'));
 const controls = document.querySelector('.scrapbook-pagination');
 const previous = document.getElementById('album-prev');
 const next = document.getElementById('album-next');
 const label = document.getElementById('album-page');
 if (!cards.length || !controls) return;
 const perPage = 12, total = Math.ceil(cards.length / perPage);
 let page = 0;
 function render() {
   cards.forEach((card, i) => { card.hidden = i < page * perPage || i >= (page + 1) * perPage; });
   label.textContent = 'Página ' + (page + 1) + ' de ' + total;
   previous.disabled = page === 0;
   next.disabled = page === total - 1;
 }
 previous.addEventListener('click', () => { if (page > 0) { page--; render(); if(previous.disabled) next.focus(); } });
 next.addEventListener('click', () => { if (page < total - 1) { page++; render(); if(next.disabled) previous.focus(); } });
 render();
 controls.hidden = false;
})();