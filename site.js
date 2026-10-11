// Mobile menu, header shadow, and form validation (no sending until the form action is connected).
(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  if (header && 'IntersectionObserver' in window) {
    var s = document.createElement('div');
    s.style.cssText = 'position:absolute;top:8px;height:1px;width:1px';
    document.body.prepend(s);
    new IntersectionObserver(function (e) { header.classList.toggle('is-scrolled', !e[0].isIntersecting); }).observe(s);
  }
  var form = document.querySelector('[data-form]');
  if (form) {
    form.addEventListener('submit', function (ev) {
      var ok = true;
      ['f-name', 'f-phone'].forEach(function (id) {
        var input = document.getElementById(id), field = input.closest('.field');
        var bad = !input.value.trim();
        field.classList.toggle('has-error', bad);
        if (bad) { input.setAttribute('aria-invalid', 'true'); input.setAttribute('aria-describedby', 'e-' + id.slice(2)); }
        else { input.removeAttribute('aria-invalid'); input.removeAttribute('aria-describedby'); }
        if (bad && ok) { input.focus(); ok = false; }
      });
      // Placeholder: while action="#", show the success message instead of sending.
      if (!ok || form.getAttribute('action') === '#') {
        ev.preventDefault();
        if (ok) form.querySelector('.form-success').classList.add('is-shown');
      }
    });
  }
})();
