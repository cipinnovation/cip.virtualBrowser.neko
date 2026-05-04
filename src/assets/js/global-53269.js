(function() {
  const init = () => {
    document.querySelectorAll('.nt-menu-toggle').forEach((button) => {
      const nav = button.closest('nav');
      const menu = nav ? nav.querySelector('.nt-mobile-menu') : null;
      if (!menu) return;
      button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    });

    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.16 });

      revealItems.forEach((item, index) => {
        item.classList.add('translate-y-6');
        item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
        observer.observe(item);
      });
    } else {
      revealItems.forEach((item) => {
        item.classList.remove('opacity-0');
      });
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();