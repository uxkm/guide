/**
 * Menu 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
 */

function initMenuSubmenu(btn) {
  if (btn._sbMenuSubmenuInit) return;
  btn._sbMenuSubmenuInit = true;

  btn.addEventListener('click', (event) => {
    if (
      btn.classList.contains('is-disabled') ||
      btn.getAttribute('aria-disabled') === 'true'
    ) {
      return;
    }

    event.preventDefault();

    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const item = btn.closest('.menu_item-submenu');

    btn.setAttribute('aria-expanded', String(!expanded));

    if (item) {
      item.setAttribute('aria-expanded', String(!expanded));
    }
  });
}

function initMenuSelectable(menu) {
  if (menu._sbMenuSelectableInit) return;
  menu._sbMenuSelectableInit = true;

  menu.addEventListener('click', (event) => {
    const link = event.target.closest('.menu_link');

    if (
      !link ||
      !menu.contains(link) ||
      link.classList.contains('is-disabled') ||
      link.getAttribute('aria-disabled') === 'true'
    ) {
      return;
    }

    if (link.matches('[aria-expanded]')) {
      return;
    }

    event.preventDefault();

    menu.querySelectorAll('.menu_link.is-active').forEach((el) => {
      el.classList.remove('is-active');
      el.removeAttribute('aria-current');
    });

    link.classList.add('is-active');
    link.setAttribute('aria-current', 'page');
  });
}

/**
 * @param {ParentNode} [root=document]
 */
export function initMenus(root = document) {
  root
    .querySelectorAll('.menu_item-submenu > .menu_link[aria-expanded]')
    .forEach(initMenuSubmenu);

  root.querySelectorAll('[data-menu-selectable]').forEach(initMenuSelectable);
}
