(function () {
  'use strict';

  var FOOTER_BASE = (function () {
    var thisScript = document.currentScript;
    if (!thisScript) {
      var scripts = document.getElementsByTagName('script');
      for (var i = 0; i < scripts.length; i++) {
        if (/footer\.js(\?.*)?$/.test(scripts[i].src)) {
          thisScript = scripts[i];
          break;
        }
      }
    }
    return thisScript ? thisScript.src.replace(/footer\.js(\?.*)?$/, '') : '';
  })();

  function mountFooter() {
    var mount = document.getElementById('dpf-footer-mount');
    if (!mount) return;

    fetch(FOOTER_BASE + 'footer.html')
      .then(function (res) {
        if (!res.ok) throw new Error('footer fetch failed: ' + res.status);
        return res.text();
      })
      .then(function (html) {
        mount.innerHTML = html;
        var yearEls = mount.querySelectorAll('.dpf-shared-year');
        for (var i = 0; i < yearEls.length; i++) {
          yearEls[i].textContent = new Date().getFullYear();
        }
      })
      .catch(function (err) {
        if (window.console && console.warn) {
          console.warn('[dp-shared-footer] could not load shared footer:', err);
        }
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountFooter);
  } else {
    mountFooter();
  }
})();
