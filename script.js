document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryTitle = document.getElementById('category-title');
  const productTitle = document.getElementById('product-title');
  const productDetailTitle = document.getElementById('product-detail-title');

  if (categoryTitle) {
      const category = urlParams.get('category');
      const categories = {
          'metal-tile': 'Металочерепиця',
          'profile-sheet': 'Профнастил',
          'folding-roof': 'Фальцева покрівля',
          'gutter-system': 'Водостічні системи'
      };
      categoryTitle.textContent = categories[category] || 'Категорія';
  }

  if (productTitle) {
      const product = urlParams.get('product');
      const products = {
          'metal-tile-1': 'Металочерепиця 1',
          'metal-tile-2': 'Металочерепиця 2',
          'palette-line': 'Палетна лінія'
      };
      productTitle.textContent = products[product] || 'Товар';
  }

  if (productDetailTitle) {
      const product = urlParams.get('product');
      const products = {
          'palette-line': 'Палетна лінія'
      };
      productDetailTitle.textContent = products[product] || 'Деталі товару';
  }

  document.querySelectorAll('.nav-menu a, .shop-btn').forEach(link => {
      link.addEventListener('click', (e) => {
          if (link.classList.contains('shop-btn')) {
              alert('Перехід до магазину!');
          }
      });
  });

  const icons = ['icon-phone', 'icon-location', 'icon-check', 'icon-settings', 'icon-clock', 'icon-mail', 'icon-home', 'icon-wrench', 'icon-drafting'];
  icons.forEach(icon => {
      const elements = document.getElementsByClassName(icon);
      for (let elem of elements) {
          elem.innerHTML = '✓'; // Замените на реальные иконки (например, Font Awesome)
      }
  });
});