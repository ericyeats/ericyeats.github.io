document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-links .nav-item');

  // Intersection Observer for scroll-spy active state highlighting
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});