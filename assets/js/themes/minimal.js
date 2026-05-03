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

  // Sidebar toggle (mobile)
  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('menu-toggle');
    const navList = document.getElementById('sidebar-links');
    if (toggleBtn && navList) {
      toggleBtn.addEventListener('click', function () {
        navList.classList.toggle('visible');
      });
    }

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
