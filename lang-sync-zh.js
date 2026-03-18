(function () {
  var STORAGE_KEY = 'smts-language';

  function setLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      // Ignore storage errors in restricted browser modes.
    }
  }

  document.documentElement.setAttribute('lang', 'zh-CN');
  setLanguage('zh');

  document.querySelectorAll('.lang-dropdown .dd-item').forEach(function (link) {
    var href = link.getAttribute('href') || '';
    var targetLanguage = href.indexOf('en/') === 0 ? 'en' : 'zh';

    link.addEventListener('click', function () {
      setLanguage(targetLanguage);
    });
  });
})();
