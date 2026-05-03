// ==========================================================
// CEAMLS SAIRI -- Signal theme JavaScript
// Consolidated from signal-theme-draft assets/js/main.js
// ==========================================================
(function () {
  document.addEventListener('DOMContentLoaded', function () {

    // ---- Mobile Navigation ----
    var navToggle = document.getElementById('navToggle');
    var siteNav = document.getElementById('siteNav');
    var navOverlay = document.getElementById('navOverlay');

    function openNav() {
      if (!siteNav || !navOverlay || !navToggle) return;
      siteNav.classList.add('open');
      navOverlay.classList.add('active');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      if (!siteNav || !navOverlay || !navToggle) return;
      siteNav.classList.remove('open');
      navOverlay.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (navToggle && siteNav) {
      navToggle.addEventListener('click', function () {
        var isOpen = siteNav.classList.contains('open');
        if (isOpen) {
          closeNav();
        } else {
          openNav();
        }
      });
    }

    if (navOverlay) {
      navOverlay.addEventListener('click', closeNav);
    }

    // Close drawer when any nav link is tapped
    if (siteNav) {
      siteNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', closeNav);
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && siteNav && siteNav.classList.contains('open')) {
        closeNav();
      }
    });

    // ---- IntersectionObserver for entrance animations ----
    if ('IntersectionObserver' in window && document.querySelector('.animate-in')) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.animate-in').forEach(function (el) {
        observer.observe(el);
      });
    } else if (document.querySelector('.animate-in')) {
      // Fallback: just reveal everything immediately
      document.querySelectorAll('.animate-in').forEach(function (el) {
        el.classList.add('visible');
      });
    }

    // ---- Gallery Lightbox ----
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightboxImg');
    var lightboxCaption = document.getElementById('lightboxCaption');
    var galleryItems = document.querySelectorAll('.gallery-item');
    var currentLightboxIndex = 0;

    function openLightbox(index) {
      if (!lightbox || !galleryItems.length) return;
      currentLightboxIndex = index;
      var img = galleryItems[index].querySelector('img');
      var caption = galleryItems[index].querySelector('.gallery-caption');
      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
      if (lightboxCaption) {
        lightboxCaption.textContent = caption ? caption.textContent : '';
      }
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function navigateLightbox(direction) {
      if (!galleryItems.length) return;
      currentLightboxIndex = (currentLightboxIndex + direction + galleryItems.length) % galleryItems.length;
      var img = galleryItems[currentLightboxIndex].querySelector('img');
      var caption = galleryItems[currentLightboxIndex].querySelector('.gallery-caption');
      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
      if (lightboxCaption) {
        lightboxCaption.textContent = caption ? caption.textContent : '';
      }
    }

    if (galleryItems.length) {
      galleryItems.forEach(function (item, index) {
        item.addEventListener('click', function () {
          openLightbox(index);
        });
      });
    }

    var closeBtn = document.getElementById('lightboxClose');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeLightbox);
    }

    var prevBtn = document.getElementById('lightboxPrev');
    var nextBtn = document.getElementById('lightboxNext');
    if (prevBtn) prevBtn.addEventListener('click', function () { navigateLightbox(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { navigateLightbox(1); });

    if (lightbox) {
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (!lightbox || !lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    });

  });
})();
