// Think-Station.site — minimal vanilla JS for a11y, theme, observers

(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Current year in footer
  $('#year').textContent = new Date().getFullYear();

  // Theme toggle with persistence
  const themeToggle = $('#themeToggle');
  const root = document.documentElement;
  const stored = localStorage.getItem('ts-theme');
  if (stored) root.setAttribute('data-theme', stored);

  function setTheme(next) {
    root.setAttribute('data-theme', next);
    localStorage.setItem('ts-theme', next);
    themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
  }
  themeToggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'light';
    setTheme(current === 'light' ? 'dark' : 'light');
  });
  // Initialize aria-pressed accurately
  themeToggle?.setAttribute('aria-pressed', String((root.getAttribute('data-theme')||'light') === 'dark'));

  // Intersection Observer: reveal timeline + section active in nav
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          reveal.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });

    $$('#roadmap .reveal').forEach(el => reveal.observe(el));

    // Active section highlighting in nav
    const sections = ['home','features','showcase','roadmap','faq','contact']
      .map(id => ({ id, el: document.getElementById(id) }))
      .filter(s => s.el);

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const link = $(`.primary-nav a[href="#${id}"]`);
        if (entry.isIntersecting) {
          $$('.primary-nav a').forEach(a => a.classList.remove('active'));
          link?.classList.add('active');
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    sections.forEach(s => navObserver.observe(s.el));
  }

  // FAQ Accordion (ARIA)
  $$('.accordion-trigger').forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      button.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
    // Keyboard accessibility is automatic for <button>
  });

  // Back-to-top visibility + action
  const backToTop = $('#backToTop');
  function onScroll() {
    if (window.scrollY > 800) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' }));

  // Hash router: smooth focus on target for a11y
  function focusHash() {
    const id = location.hash.replace('#','');
    if (!id) return;
    const target = document.getElementById(id);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      setTimeout(() => target.removeAttribute('tabindex'), 500);
    }
  }
  window.addEventListener('hashchange', focusHash);
})();
