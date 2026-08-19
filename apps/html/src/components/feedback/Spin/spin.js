export function initSpin(root = document) {
  const items = [...root.querySelectorAll('[data-component="Spin"], [data-component="SpinWrap"]')];
  items.filter((item) => item.matches('[data-component="SpinWrap"]')).forEach((item) => item.classList.toggle('is-loading', item.dataset.loading !== 'false'));
  return items;
}
