function parseBackTopOffset(value, fallback) {
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function initBackTop(root) {
  if (root.dataset.backTopInit) return () => {};

  const targetSelector = root.getAttribute('data-target');
  const scrollContainer = targetSelector ? document.querySelector(targetSelector) : null;
  const visibilityHeight = parseBackTopOffset(root.getAttribute('data-visibility-height'), 400);
  const btn = root.querySelector('.back_top_btn');

  if (!btn) {
    return () => {};
  }

  root.dataset.backTopInit = '1';

  function getScrollTop() {
    if (scrollContainer) {
      return scrollContainer.scrollTop;
    }

    return window.scrollY || document.documentElement.scrollTop;
  }

  function scrollToTop() {
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function updateVisibility() {
    root.classList.toggle('is-visible', getScrollTop() >= visibilityHeight);
  }

  btn.addEventListener('click', scrollToTop);

  const scrollTarget = scrollContainer || window;

  scrollTarget.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();

  return () => {
    btn.removeEventListener('click', scrollToTop);
    scrollTarget.removeEventListener('scroll', updateVisibility);
    delete root.dataset.backTopInit;
    root.classList.remove('is-visible');
  };
}

export function initBackTopAll(root = document) {
  const cleanups = [];

  root.querySelectorAll('[data-back-top]').forEach((el) => {
    const cleanup = initBackTop(el);
    if (cleanup) cleanups.push(cleanup);
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}
