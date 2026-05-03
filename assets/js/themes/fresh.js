// =====================================================
// Fresh theme — warm dark palette + sticky sidebar nav
// Consolidates the inline behavior from fresh-redesign:
//   * mobile nav drawer toggle
//   * scroll-reveal IntersectionObserver
//   * gallery lightbox with prev/next + keyboard nav
// All blocks use feature detection so they no-op on pages
// that don't have the markup.
// =====================================================
(function () {
  document.addEventListener('DOMContentLoaded', function () {

    // --- Mobile nav ---
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('siteNav');
    var backdrop = document.getElementById('navBackdrop');

    function openNav() {
      if (!nav || !backdrop || !toggle) return;
      nav.classList.add('open');
      backdrop.classList.add('on');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeNav() {
      if (!nav || !backdrop || !toggle) return;
      nav.classList.remove('open');
      backdrop.classList.remove('on');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        nav.classList.contains('open') ? closeNav() : openNav();
      });
    }
    if (backdrop) backdrop.addEventListener('click', closeNav);
    // Close the drawer when any nav link is tapped
    if (nav) {
      nav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', closeNav);
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav && nav.classList.contains('open')) closeNav();
    });

    // --- Scroll reveal ---
    var revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length && 'IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { obs.observe(el); });
    } else if (revealEls.length) {
      // No IO support — show everything
      revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    // --- Gallery lightbox ---
    var lightbox = document.getElementById('lightbox');
    var lbImg = document.getElementById('lightboxImg');
    var lbCaption = document.getElementById('lightboxCaption');
    var items = document.querySelectorAll('.gallery-item');
    var idx = 0;

    function showLB(i) {
      if (!lightbox || !lbImg || !items.length) return;
      idx = i;
      var img = items[i].querySelector('img');
      var cap = items[i].querySelector('.gallery-item__caption');
      if (img) {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
      }
      if (lbCaption) lbCaption.textContent = cap ? cap.textContent : '';
      lightbox.classList.add('on');
      document.body.style.overflow = 'hidden';
    }
    function hideLB() {
      if (!lightbox) return;
      lightbox.classList.remove('on');
      document.body.style.overflow = '';
    }
    function stepLB(d) {
      if (!items.length) return;
      idx = (idx + d + items.length) % items.length;
      var img = items[idx].querySelector('img');
      var cap = items[idx].querySelector('.gallery-item__caption');
      if (lbImg && img) {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
      }
      if (lbCaption) lbCaption.textContent = cap ? cap.textContent : '';
    }

    if (items.length && lightbox) {
      items.forEach(function (el, i) {
        el.addEventListener('click', function () { showLB(i); });
      });

      var closeBtn = document.getElementById('lightboxClose');
      var prevBtn = document.getElementById('lightboxPrev');
      var nextBtn = document.getElementById('lightboxNext');
      if (closeBtn) closeBtn.addEventListener('click', hideLB);
      if (prevBtn) prevBtn.addEventListener('click', function () { stepLB(-1); });
      if (nextBtn) nextBtn.addEventListener('click', function () { stepLB(1); });
      lightbox.addEventListener('click', function (e) { if (e.target === lightbox) hideLB(); });
      document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('on')) return;
        if (e.key === 'Escape') hideLB();
        if (e.key === 'ArrowLeft') stepLB(-1);
        if (e.key === 'ArrowRight') stepLB(1);
      });
    }
  });
})();
