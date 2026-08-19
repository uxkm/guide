export function initEmpty(root = document) {
  return [...root.querySelectorAll('[data-component="Empty"]')];
}
