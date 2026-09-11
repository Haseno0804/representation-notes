document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.school-filter-button');
  const cards = document.querySelectorAll('.school-index-card');
  const empty = document.querySelector('.school-index-empty');

  if (!buttons.length || !cards.length) return;

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const filter = this.dataset.filter;
      let visibleCount = 0;

      buttons.forEach(function (btn) {
        btn.classList.remove('active');
      });

      this.classList.add('active');

      cards.forEach(function (card) {
        const tags = (card.dataset.tags || '').split(' ');

        const show =
          filter === 'all' ||
          tags.includes(filter);

        if (show) {
          card.classList.remove('is-hidden');
          visibleCount++;
        } else {
          card.classList.add('is-hidden');
        }
      });

      if (empty) {
        empty.style.display =
          visibleCount === 0 ? 'block' : 'none';
      }
    });
  });
});