/**
 * Tree 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
export function initTree(root = document) {
  const trees = root.querySelectorAll('[data-component="Tree"]');
  trees.forEach((tree) =>
    tree.addEventListener('click', (event) => {
      const toggle = event.target.closest('.tree_toggle:not(.tree_toggle_placeholder)');
      if (!toggle || !tree.contains(toggle)) return;
      const item = toggle.closest('.tree_item');
      const expanded = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(expanded));
      item?.setAttribute('aria-expanded', String(expanded));
    }),
  );
  return trees;
}
