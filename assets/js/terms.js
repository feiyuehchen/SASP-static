/* ============================================================
   DSP Quest — technical-term tooltip
   Any <span class="term" data-en="..." data-zh-def="..."
                        data-en-def="...">中文</span>
   gets a pixel-style tooltip on hover/focus.
   ============================================================ */

(function () {
  let tip;

  function ensureTip() {
    if (tip) return tip;
    tip = document.createElement('div');
    tip.id = 'term-tooltip';
    tip.setAttribute('role', 'tooltip');
    document.body.appendChild(tip);
    return tip;
  }

  function show(el) {
    const t = ensureTip();
    const en      = el.getAttribute('data-en')      || '';
    const zhDef   = el.getAttribute('data-zh-def')  || '';
    const enDef   = el.getAttribute('data-en-def')  || '';

    t.innerHTML = [
      en     ? `<div class="tt-en">${escapeHTML(en)}</div>`                                               : '',
      zhDef  ? `<div class="tt-line"><span class="tt-label">ZH</span>${escapeHTML(zhDef)}</div>`          : '',
      enDef  ? `<div class="tt-line"><span class="tt-label">EN</span>${escapeHTML(enDef)}</div>`          : '',
    ].join('');

    // position
    const r = el.getBoundingClientRect();
    const tw = Math.min(360, window.innerWidth - 20);
    t.style.maxWidth = tw + 'px';
    // Show temporarily to measure
    t.style.visibility = 'hidden';
    t.classList.add('visible');
    const th = t.getBoundingClientRect().height;
    let left = r.left + window.scrollX;
    let top  = r.bottom + window.scrollY + 6;
    if (left + tw > window.scrollX + window.innerWidth - 10) {
      left = window.scrollX + window.innerWidth - tw - 10;
    }
    if (top + th > window.scrollY + window.innerHeight - 10) {
      top = r.top + window.scrollY - th - 6;
    }
    t.style.left = left + 'px';
    t.style.top  = top + 'px';
    t.style.visibility = 'visible';
  }

  function hide() {
    if (tip) tip.classList.remove('visible');
  }

  function escapeHTML(s) {
    return s.replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }

  function bind() {
    document.querySelectorAll('.term').forEach(el => {
      if (el.dataset.bound) return;
      el.dataset.bound = '1';
      el.setAttribute('tabindex', '0');
      el.addEventListener('mouseenter', () => show(el));
      el.addEventListener('mouseleave', hide);
      el.addEventListener('focus',      () => show(el));
      el.addEventListener('blur',       hide);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
  // expose for dynamically injected terms
  window.Terms = { bind };
})();
