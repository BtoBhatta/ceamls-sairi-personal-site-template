(function () {
  // Fade-slide-up animation on scroll
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });
    document.querySelectorAll('.fade-slide-up').forEach(el => observer.observe(el));
  }

  // Mobile sidebar drawer
  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('navBackdrop');

    function openDrawer() {
      if (!sidebar || !toggleBtn) return;
      sidebar.classList.add('open');
      if (backdrop) backdrop.classList.add('on');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeDrawer() {
      if (!sidebar || !toggleBtn) return;
      sidebar.classList.remove('open');
      if (backdrop) backdrop.classList.remove('on');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', function () {
        sidebar.classList.contains('open') ? closeDrawer() : openDrawer();
      });
    }
    if (backdrop) backdrop.addEventListener('click', closeDrawer);
    if (sidebar) {
      sidebar.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', closeDrawer);
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) closeDrawer();
    });

    // Mentor tabs
    const tabButtons = document.querySelectorAll('[data-mentor-tab]');
    if (tabButtons.length) {
      tabButtons.forEach(btn => {
        btn.addEventListener('click', function () {
          const target = this.dataset.mentorTab;
          document.querySelectorAll('.mentor-tab-content').forEach(t => t.style.display = 'none');
          document.querySelectorAll('.tab-link').forEach(b => b.classList.remove('active'));
          const tabEl = document.getElementById(target);
          if (tabEl) tabEl.style.display = 'block';
          this.classList.add('active');
        });
      });
    }

    // Gallery slideshow + modal
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (slides.length) {
      let current = 0;
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
          if (dots[i]) dots[i].classList.toggle('active', i === index);
        });
        current = index;
      }
      dots.forEach(dot => {
        dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.slideIndex, 10)));
      });
      setInterval(() => showSlide((current + 1) % slides.length), 4000);
    }

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCap = document.getElementById('modalCaption');
    const modalClose = document.getElementById('modalClose');
    if (modal && modalImg && modalCap) {
      document.querySelectorAll('[data-modal-src]').forEach(img => {
        img.addEventListener('click', function () {
          modal.style.display = 'block';
          modalImg.src = this.dataset.modalSrc;
          modalCap.innerText = this.dataset.modalCaption || '';
        });
      });
      if (modalClose) {
        modalClose.addEventListener('click', () => { modal.style.display = 'none'; });
      }
      window.addEventListener('click', e => {
        if (e.target === modal) modal.style.display = 'none';
      });
    }
  });
})();
