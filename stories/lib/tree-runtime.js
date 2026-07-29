/**
 * Tree 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
 */

/**
 * @param {ParentNode} root
 */
export function initTrees(root) {
  root
    .querySelectorAll('.tree_toggle:not(.tree_toggle_placeholder)')
    .forEach((btn) => {
      if (btn._sbTreeToggleInit) return;
      btn._sbTreeToggleInit = true;

      btn.addEventListener('click', () => {
        if (btn.disabled) return;

        const expanded = btn.getAttribute('aria-expanded') === 'true';
        const item = btn.closest('.tree_item');

        btn.setAttribute('aria-expanded', String(!expanded));
        if (item) {
          item.setAttribute('aria-expanded', String(!expanded));
        }
      });
    });

  root.querySelectorAll('.tree .tree_link').forEach((link) => {
    if (link._sbTreeLinkInit) return;
    link._sbTreeLinkInit = true;

    link.addEventListener('click', () => {
      const tree = link.closest('.tree');
      const row = link.closest('.tree_row');

      if (!tree || !row || row.classList.contains('is-disabled')) return;

      tree.querySelectorAll('.tree_row.is-selected').forEach((el) => {
        el.classList.remove('is-selected');
      });
      row.classList.add('is-selected');
    });
  });
}
