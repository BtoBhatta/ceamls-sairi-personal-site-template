// =====================================================
// Premium theme — Instrument Serif + DM Sans, warm whites, dot pattern
// Consolidates inline scripts from premium-light's _layouts.
// All page-specific blocks use feature detection so they no-op on
// pages where the relevant DOM is absent.
// =====================================================
(function () {
  document.addEventListener('DOMContentLoaded', function () {

    // --- Mobile nav (slide-in drawer from the left) ---
    var toggle = document.getElementById('navToggle');
    var drawer = document.getElementById('siteNav');
    var overlay = document.getElementById('navOverlay');

    function openNav() {
      if (!drawer || !toggle) return;
      drawer.classList.add('open');
      if (overlay) overlay.classList.add('on');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeNav() {
      if (!drawer || !toggle) return;
      drawer.classList.remove('open');
      if (overlay) overlay.classList.remove('on');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (toggle && drawer) {
      toggle.addEventListener('click', function () {
        drawer.classList.contains('open') ? closeNav() : openNav();
      });
      if (overlay) overlay.addEventListener('click', closeNav);
      drawer.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', closeNav);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer.classList.contains('open')) closeNav();
      });
    }

    // --- Scroll reveal (any page with .reveal) ---
    var els = document.querySelectorAll('.reveal');
    if (els.length && 'IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
      els.forEach(function (el) { obs.observe(el); });
    } else if (els.length) {
      // Fallback: just reveal everything if IntersectionObserver missing.
      els.forEach(function (el) { el.classList.add('visible'); });
    }

    // --- Gallery lightbox (about.html) ---
    var lb = document.getElementById('lightbox');
    var lbImg = document.getElementById('lbImg');
    var lbCap = document.getElementById('lbCap');
    var figs = document.querySelectorAll('.gallery__fig');
    var idx = 0;

    function showLB(i) {
      if (!lb) return;
      idx = i;
      var img = figs[i].querySelector('img');
      var cap = figs[i].querySelector('figcaption');
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = cap ? cap.textContent : '';
      lb.classList.add('on');
      document.body.style.overflow = 'hidden';
    }
    function hideLB() {
      if (!lb) return;
      lb.classList.remove('on');
      document.body.style.overflow = '';
    }
    function stepLB(d) {
      if (!figs.length) return;
      idx = (idx + d + figs.length) % figs.length;
      var img = figs[idx].querySelector('img');
      var cap = figs[idx].querySelector('figcaption');
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = cap ? cap.textContent : '';
    }

    if (lb && lbImg && figs.length) {
      figs.forEach(function (f, i) {
        f.addEventListener('click', function () { showLB(i); });
      });
      var cb = document.getElementById('lbClose');
      var pb = document.getElementById('lbPrev');
      var nb = document.getElementById('lbNext');
      if (cb) cb.addEventListener('click', hideLB);
      if (pb) pb.addEventListener('click', function () { stepLB(-1); });
      if (nb) nb.addEventListener('click', function () { stepLB(1); });
      lb.addEventListener('click', function (e) { if (e.target === lb) hideLB(); });
      document.addEventListener('keydown', function (e) {
        if (!lb.classList.contains('on')) return;
        if (e.key === 'Escape') hideLB();
        if (e.key === 'ArrowLeft') stepLB(-1);
        if (e.key === 'ArrowRight') stepLB(1);
      });
    }
  });
})();
