/**
 * BackTop 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
 */

function parseBackTopOffset(value, fallback) {
  const parsed = parseInt(value, 10);

  return Number.isFinite(parsed) ? parsed : fallback;
}

function initBackTopRoot(root) {
  if (root.dataset.backTopInit) {
    return;
  }

  const targetSelector = root.getAttribute('data-target');
  let scrollContainer = null;

  if (targetSelector) {
    try {
      scrollContainer = document.querySelector(targetSelector);
    } catch {
      scrollContainer = null;
    }
  }

  const visibilityHeight = parseBackTopOffset(
    root.getAttribute('data-visibility-height'),
    400,
  );
  const btn = root.querySelector('.back_top_btn');

  if (!btn) {
    return;
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
}

/**
 * @param {ParentNode} [root=document]
 */
export function initBackTops(root = document) {
  root.querySelectorAll('[data-back-top]').forEach(initBackTopRoot);
}
