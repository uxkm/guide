export function initTree(root = document) {
  const trees = root.querySelectorAll('[data-component="Tree"]');
  trees.forEach((tree) => tree.addEventListener('click', (event) => {
    const toggle = event.target.closest('.tree_toggle:not(.tree_toggle_placeholder)');
    if (!toggle || !tree.contains(toggle)) return;
    const item = toggle.closest('.tree_item');
    const expanded = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(expanded));
    item?.setAttribute('aria-expanded', String(expanded));
  }));
  return trees;
}
