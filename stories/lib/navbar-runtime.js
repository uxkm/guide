/**
 * Navbar 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
 */

function initNavbarToggle(btn) {
  if (btn._sbNavbarToggleInit) return;
  btn._sbNavbarToggleInit = true;

  const navbar = btn.closest('[data-navbar]');
  const targetId = btn.getAttribute('aria-controls');
  const collapse = targetId
    ? document.getElementById(targetId)
    : btn.nextElementSibling;

  if (!navbar || !collapse) return;

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const nextExpanded = !expanded;

    btn.setAttribute('aria-expanded', String(nextExpanded));
    btn.setAttribute('aria-label', nextExpanded ? '메뉴 닫기' : '메뉴 열기');
    navbar.classList.toggle('is-open', nextExpanded);
    collapse.classList.toggle('is-open', nextExpanded);
  });
}

/**
 * @param {ParentNode} [root=document]
 */
export function initNavbars(root = document) {
  root.querySelectorAll('[data-navbar-toggle]').forEach(initNavbarToggle);
}
