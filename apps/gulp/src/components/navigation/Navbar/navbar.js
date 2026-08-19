export function initNavbar(root = document) {
  const navbars = [...root.querySelectorAll('[data-component="Navbar"]')];
  navbars.forEach((navbar) => {
    const toggle = navbar.querySelector('[data-navbar-toggle]');
    if (!toggle || toggle.dataset.navbarReady === 'true') return;
    toggle.dataset.navbarReady = 'true';
    toggle.addEventListener('click', () => {
      const open = !navbar.classList.contains('is-open');
      navbar.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
  });
  return navbars;
}
