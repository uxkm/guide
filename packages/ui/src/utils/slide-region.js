/**
 * Accordion / Collapse 높이 슬라이드 (data-effect="slide")
 * HTML demo.js setSlideRegionOpen 과 동일 동작
 */

function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getSlideDurationMs(region) {
  const styles = getComputedStyle(region);
  const raw =
    styles.getPropertyValue('--accordion-slide-duration').trim() ||
    styles.getPropertyValue('--collapse-slide-duration').trim() ||
    '0.28s';
  const value = parseFloat(raw);
  if (!Number.isFinite(value)) return 280;
  return /ms$/i.test(raw) ? value : value * 1000;
}

function getSlideTransition(region) {
  const styles = getComputedStyle(region);
  const duration =
    styles.getPropertyValue('--accordion-slide-duration').trim() ||
    styles.getPropertyValue('--collapse-slide-duration').trim() ||
    '0.28s';
  const easing =
    styles.getPropertyValue('--accordion-slide-easing').trim() ||
    styles.getPropertyValue('--collapse-slide-easing').trim() ||
    'ease';
  return `height ${duration} ${easing}`;
}

function clearSlideStyles(region) {
  region.classList.remove('is-sliding');
  region.style.height = '';
  region.style.overflow = '';
  region.style.transition = '';
}

function isSlideRegionOpen(region) {
  return !region.hasAttribute('hidden') && region.getAttribute('aria-hidden') !== 'true';
}

function runAfterSlide(region, onDone) {
  let finished = false;

  function finish() {
    if (finished) return;
    finished = true;
    if (region._slideCleanup) {
      region._slideCleanup();
      region._slideCleanup = null;
    }
    onDone();
  }

  function onEnd(event) {
    if (event.target !== region || event.propertyName !== 'height') return;
    finish();
  }

  region.addEventListener('transitionend', onEnd);
  const timer = window.setTimeout(finish, getSlideDurationMs(region) + 80);
  region._slideCleanup = () => {
    region.removeEventListener('transitionend', onEnd);
    window.clearTimeout(timer);
  };
}

/**
 * @param {HTMLElement | null | undefined} region
 * @param {boolean} open
 * @param {boolean} [animate=true]
 */
export function setSlideRegionOpen(region, open, animate = true) {
  if (!region) return;

  if (open === isSlideRegionOpen(region) && !region.classList.contains('is-sliding')) {
    region.classList.toggle('is-open', open);
    return;
  }

  if (region._slideCleanup) {
    region._slideCleanup();
    region._slideCleanup = null;
    if (region.getAttribute('aria-hidden') === 'true' && !open) {
      region.setAttribute('hidden', '');
      clearSlideStyles(region);
    } else {
      clearSlideStyles(region);
    }
  }

  const shouldAnimate = animate !== false && !prefersReducedMotion();

  if (!shouldAnimate) {
    clearSlideStyles(region);
    region.classList.toggle('is-open', open);
    if (open) {
      region.removeAttribute('hidden');
      region.removeAttribute('inert');
      region.setAttribute('aria-hidden', 'false');
    } else {
      region.setAttribute('hidden', '');
      region.setAttribute('inert', '');
      region.setAttribute('aria-hidden', 'true');
    }
    return;
  }

  if (open) {
    region.classList.add('is-open');
    region.removeAttribute('hidden');
    region.removeAttribute('inert');
    region.setAttribute('aria-hidden', 'false');
    region.style.overflow = 'hidden';
    region.style.transition = 'none';
    region.style.height = '0px';
    region.classList.add('is-sliding');
    void region.offsetHeight;
    region.style.transition = getSlideTransition(region);
    region.style.height = `${region.scrollHeight}px`;
    runAfterSlide(region, () => {
      clearSlideStyles(region);
    });
  } else {
    // is-open 유지한 채 높이 측정 → is-sliding 추가 후 is-open 제거
    // (is-open/is-sliding이 같은 노드일 때 display:none 선적용 방지)
    const fromHeight = region.scrollHeight;
    region.setAttribute('aria-hidden', 'true');
    region.setAttribute('inert', '');
    region.style.overflow = 'hidden';
    region.style.transition = 'none';
    region.style.height = `${fromHeight}px`;
    region.classList.add('is-sliding');
    region.classList.remove('is-open');
    void region.offsetHeight;

    if (fromHeight === 0) {
      region.setAttribute('hidden', '');
      clearSlideStyles(region);
      return;
    }

    region.style.transition = getSlideTransition(region);
    region.style.height = '0px';
    runAfterSlide(region, () => {
      region.setAttribute('hidden', '');
      clearSlideStyles(region);
    });
  }
}
