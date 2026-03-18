(function () {
  var STORAGE_KEY = 'smts-language';

  function setLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      // Ignore storage errors in restricted browser modes.
    }
  }

  document.documentElement.setAttribute('lang', 'en');
  setLanguage('en');

  document.querySelectorAll('.lang-dropdown .dd-item').forEach(function (link) {
    var href = link.getAttribute('href') || '';
    var targetLanguage = href.indexOf('../') === 0 ? 'zh' : 'en';

    link.addEventListener('click', function () {
      setLanguage(targetLanguage);
    });
  });
})();
