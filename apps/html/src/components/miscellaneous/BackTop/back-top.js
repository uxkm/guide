function number(value, fallback) { const parsed = Number.parseInt(value ?? '', 10); return Number.isFinite(parsed) ? parsed : fallback; }
export function initBackTop(element) {
  if (!element || element.dataset.backTopInit === 'true') return () => {};
  let container = null;
  if (element.dataset.target) { try { container = document.querySelector(element.dataset.target); } catch { container = null; } }
  const button = element.querySelector('.back_top_btn');
  if (!button) return () => {};
  const threshold = number(element.dataset.visibilityHeight, 400);
  const scrollTarget = container || window;
  const getTop = () => container ? container.scrollTop : window.scrollY || document.documentElement.scrollTop;
  const update = () => element.classList.toggle('is-visible', getTop() >= threshold);
  const goTop = () => (container || window).scrollTo({ top: 0, behavior: 'smooth' });
  element.dataset.backTopInit = 'true';
  button.addEventListener('click', goTop);
  scrollTarget.addEventListener('scroll', update, { passive: true });
  update();
  return () => { button.removeEventListener('click', goTop); scrollTarget.removeEventListener('scroll', update); delete element.dataset.backTopInit; element.classList.remove('is-visible'); };
}
export function initBackTopAll(root = document) { const cleanups = [...root.querySelectorAll('[data-back-top]')].map(initBackTop); return () => cleanups.forEach((cleanup) => cleanup()); }
