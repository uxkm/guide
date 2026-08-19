export function initBreadcrumb(root = document) {
  const groups = [...root.querySelectorAll('[data-component="Breadcrumb"]')];
  groups.forEach((breadcrumb) => {
    if (breadcrumb.dataset.breadcrumbReady === 'true') return;
    breadcrumb.dataset.breadcrumbReady = 'true';
    const toggle = breadcrumb.querySelector('[data-breadcrumb-ellipsis]');
    const hiddenItems = [...breadcrumb.querySelectorAll('[data-breadcrumb-hidden]')];
    toggle?.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(expanded));
      toggle.setAttribute('aria-label', expanded ? '숨겨진 경로 접기' : '숨겨진 경로 보기');
      hiddenItems.forEach((item) => { item.hidden = !expanded; });
    });
  });
  return groups;
}
