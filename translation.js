// translation.js
document.addEventListener('DOMContentLoaded', () => {
  const btnLang = document.getElementById('btn-lang');
  let currentLang = 'es';

  function translatePage(lang) {
    const elements = document.querySelectorAll('[data-es]');
    elements.forEach(el => {
      el.textContent = lang === 'es' ? el.getAttribute('data-es') : el.getAttribute('data-fr');
    });
  }

  btnLang.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'fr' : 'es';
    translatePage(currentLang);
    btnLang.textContent = currentLang === 'es' ? 'Français' : 'Español';
  });

  // Inicializa en español
  translatePage(currentLang);
});
