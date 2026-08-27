/**
 * Navbar 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
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
