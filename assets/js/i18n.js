/* ============================================================
   DSP Quest — language toggle
   Usage: put <span lang="en">English text</span><span lang="zh">中文</span>
   Set body class to `lang-en` or `lang-zh`. CSS hides the other.
   ============================================================ */

const I18N = (() => {
  const KEY = 'dsp.lang';
  function get() { return localStorage.getItem(KEY) || 'en'; }
  function set(lang) {
    if (lang !== 'en' && lang !== 'zh') return;
    localStorage.setItem(KEY, lang);
    apply(lang);
  }
  function apply(lang) {
    document.body.classList.remove('lang-en', 'lang-zh');
    document.body.classList.add('lang-' + lang);
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-lang-btn') === lang);
    });
  }
  function init() {
    apply(get());
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.addEventListener('click', () => set(b.getAttribute('data-lang-btn')));
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  return { get, set, apply };
})();
