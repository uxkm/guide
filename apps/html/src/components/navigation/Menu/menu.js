/**
 * Menu 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
export function initMenu(root = document) {
  const menus = [...root.querySelectorAll('[data-component="Menu"]')];
  menus.forEach((menu) => {
    if (menu.dataset.menuReady === 'true') return;
    menu.dataset.menuReady = 'true';
    menu.addEventListener('click', (event) => {
      const toggle = event.target.closest('[data-menu-submenu-toggle]');
      if (toggle && menu.contains(toggle)) {
        const item = toggle.closest('.menu_item-submenu');
        const open = item.getAttribute('aria-expanded') !== 'true';
        item.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-expanded', String(open));
        return;
      }
      const link = event.target.closest('.menu_link');
      if (!link || link.classList.contains('is-disabled')) return;
      menu.querySelectorAll('.menu_link.is-active').forEach((active) => {
        active.classList.remove('is-active');
        active.removeAttribute('aria-current');
      });
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    });
  });
  return menus;
}
