/**
 * Affix 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
function offset(value, fallback = 0) {
  const parsed = Number.parseInt(value ?? '', 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function fixedContainingBlock(element) {
  let parent = element.parentElement;
  while (parent && parent !== document.documentElement) {
    const style = getComputedStyle(parent);
    if (
      (style.transform && style.transform !== 'none') ||
      (style.filter && style.filter !== 'none') ||
      (style.perspective && style.perspective !== 'none') ||
      /paint|layout|strict|content/.test(style.contain) ||
      /transform|filter|perspective/.test(style.willChange)
    )
      return parent.getBoundingClientRect();
    parent = parent.parentElement;
  }
  return { left: 0, top: 0 };
}

export function initAffix(element) {
  if (!element || element.dataset.affixInit === 'true') return () => {};
  let container = null;
  const selector = element.dataset.target;
  if (selector) {
    try {
      container = document.querySelector(selector);
    } catch {
      container = null;
    }
  }
  const target = element.querySelector('.affix_target');
  if (!target) return () => {};
  let placeholder = element.querySelector('.affix_placeholder');
  if (!placeholder) {
    placeholder = document.createElement('div');
    placeholder.className = 'affix_placeholder';
    placeholder.hidden = true;
    placeholder.setAttribute('aria-hidden', 'true');
    element.insertBefore(placeholder, target);
  }
  const top = offset(element.dataset.offsetTop);
  const bottomMode = element.hasAttribute('data-offset-bottom');
  const bottom = offset(element.dataset.offsetBottom);
  const scrollTarget = container || window;
  let affixed = false;
  let frame = 0;

  const containerRect = () =>
    container?.getBoundingClientRect() ?? { top: 0, bottom: window.innerHeight };
  const clear = () =>
    Object.assign(target.style, {
      position: '',
      top: '',
      bottom: '',
      left: '',
      width: '',
      zIndex: '',
    });
  function position(rect, reference) {
    const containing = fixedContainingBlock(target);
    const viewportTop = bottomMode ? rect.bottom - target.offsetHeight - bottom : rect.top + top;
    Object.assign(target.style, {
      position: 'fixed',
      top: `${viewportTop - containing.top}px`,
      bottom: '',
      left: `${reference.left - containing.left}px`,
      width: `${reference.width}px`,
      zIndex: getComputedStyle(element).getPropertyValue('--affix-z-index').trim() || '10',
    });
  }
  function set(next, rect, reference) {
    affixed = next;
    element.classList.toggle('is-affixed', next);
    target.classList.toggle('is-fixed', next);
    if (next) {
      placeholder.hidden = false;
      placeholder.style.height = `${target.offsetHeight}px`;
      placeholder.style.width = `${reference.width}px`;
      position(rect, reference);
    } else {
      placeholder.hidden = true;
      placeholder.style.height = '';
      placeholder.style.width = '';
      clear();
    }
  }
  function measure() {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const rect = containerRect();
      const rootRect = element.getBoundingClientRect();
      const reference = affixed ? placeholder.getBoundingClientRect() : rootRect;
      let next = bottomMode
        ? rect.bottom - reference.bottom <= bottom
        : reference.top - rect.top <= top;
      if (next && container)
        next = bottomMode
          ? reference.bottom - rect.top >= target.offsetHeight + bottom
          : rect.bottom - reference.top >= target.offsetHeight + top;
      set(next, rect, reference);
    });
  }

  element.dataset.affixInit = 'true';
  scrollTarget.addEventListener('scroll', measure, { passive: true });
  if (container) window.addEventListener('scroll', measure, { passive: true, capture: true });
  window.addEventListener('resize', measure, { passive: true });
  measure();
  return () => {
    cancelAnimationFrame(frame);
    scrollTarget.removeEventListener('scroll', measure);
    if (container) window.removeEventListener('scroll', measure, { capture: true });
    window.removeEventListener('resize', measure);
    delete element.dataset.affixInit;
    set(false, containerRect(), element.getBoundingClientRect());
  };
}

export function initAffixAll(root = document) {
  const cleanups = [...root.querySelectorAll('[data-affix]')].map(initAffix);
  return () => cleanups.forEach((cleanup) => cleanup());
}
