function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function slideToken(region, suffix, fallback) {
  const styles = getComputedStyle(region);
  const prefix = region.matches('.collapse, .collapse_body') || region.closest('[data-collapse]')
    ? 'collapse'
    : 'accordion';
  return styles.getPropertyValue(`--${prefix}-slide-${suffix}`).trim() || fallback;
}

function transitionValue(region) {
  const duration = slideToken(region, 'duration', '0.28s');
  const easing = slideToken(region, 'easing', 'ease');
  return `height ${duration} ${easing}`;
}

function durationMs(region) {
  const raw = slideToken(region, 'duration', '0.28s');
  const value = Number.parseFloat(raw);
  if (!Number.isFinite(value)) return 280;
  return /ms$/i.test(raw) ? value : value * 1000;
}

function clearStyles(region) {
  region.classList.remove('is-sliding');
  region.style.height = '';
  region.style.overflow = '';
  region.style.transition = '';
}

/** 높이를 알 수 없는 패널을 열고 닫는 공통 슬라이드 동작입니다. */
export function setSlideRegionOpen(region, open, animate = true) {
  if (!region) return;

  region._uxkmSlideCleanup?.();
  region._uxkmSlideCleanup = null;
  clearStyles(region);

  if (!animate || prefersReducedMotion()) {
    region.hidden = !open;
    region.inert = !open;
    region.setAttribute('aria-hidden', String(!open));
    return;
  }

  let finished = false;
  let timer;
  const finish = () => {
    if (finished) return;
    finished = true;
    region.removeEventListener('transitionend', onEnd);
    window.clearTimeout(timer);
    if (!open) region.hidden = true;
    clearStyles(region);
    region._uxkmSlideCleanup = null;
  };
  const onEnd = (event) => {
    if (event.target === region && event.propertyName === 'height') finish();
  };

  region.hidden = false;
  region.inert = !open;
  region.setAttribute('aria-hidden', String(!open));
  region.style.overflow = 'hidden';
  region.style.transition = 'none';
  region.style.height = open ? '0px' : `${region.scrollHeight}px`;
  region.classList.add('is-sliding');
  void region.offsetHeight;
  region.style.transition = transitionValue(region);
  region.style.height = open ? `${region.scrollHeight}px` : '0px';
  region.addEventListener('transitionend', onEnd);
  timer = window.setTimeout(finish, durationMs(region) + 80);
  region._uxkmSlideCleanup = finish;
}
