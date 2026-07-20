/**
 * Ripple — 클릭 위치 파장 효과
 *
 * 대상 — data-ripple 속성 (권장·유일한 opt-in)
 * · data-ripple · data-ripple="true" — 활성 (Vue ripple prop 기본값)
 * · data-ripple="surface" — overflow 클리핑만 (절대 위치 보조 버튼, SCSS 참고)
 * · data-ripple="false" — 비활성
 * · data-no-ripple — 하위 전체 비활성
 *
 * SCSS: src/scss/_ripple.scss
 */

/** @type {const} ripple 대상 선택자 */
export const RIPPLE_SELECTOR = '[data-ripple]:not([data-ripple="false"])';

const RIPPLE_CLASS = 'ripple_wave';
const RIPPLE_DURATION_MS = 600;
const recentRipples = new WeakMap();

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isRippleDisabled(el) {
  if (!el || el.closest('[data-no-ripple]')) return true;
  if (el.getAttribute('data-ripple') === 'false') return true;
  if (el.disabled) return true;
  if (el.classList.contains('is-disabled')) return true;
  if (el.getAttribute('aria-disabled') === 'true') return true;
  if (el.closest('.is-disabled, [aria-disabled="true"]')) return true;
  return false;
}

function spawnRipple(target, clientX, clientY) {
  const rect = target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2;
  const x = clientX - rect.left - size / 2;
  const y = clientY - rect.top - size / 2;

  const ripple = document.createElement('span');
  ripple.className = RIPPLE_CLASS;
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  target.insertBefore(ripple, target.firstChild);
  recentRipples.set(target, Date.now());

  const cleanup = () => ripple.remove();
  ripple.addEventListener('animationend', cleanup, { once: true });
  window.setTimeout(cleanup, RIPPLE_DURATION_MS);
}

function resolveRippleTarget(event) {
  return event.target.closest(RIPPLE_SELECTOR);
}

function onPointerDown(event) {
  if (event.pointerType === 'mouse' && event.button !== 0) return;

  const target = resolveRippleTarget(event);
  if (!target || !target.isConnected || isRippleDisabled(target)) return;

  spawnRipple(target, event.clientX, event.clientY);
}

/** 키보드 활성화(Enter/Space) 시 중앙에서 파장 — pointerdown과 중복 방지 */
function onClick(event) {
  const target = resolveRippleTarget(event);
  if (!target || !target.isConnected || isRippleDisabled(target)) return;

  const lastAt = recentRipples.get(target);
  if (lastAt && Date.now() - lastAt < 500) return;

  const rect = target.getBoundingClientRect();
  spawnRipple(target, rect.left + rect.width / 2, rect.top + rect.height / 2);
}

export function initRipple() {
  if (typeof document === 'undefined' || window.__rippleInit) return;
  window.__rippleInit = true;

  if (prefersReducedMotion()) return;

  document.addEventListener('pointerdown', onPointerDown, { passive: true });
  document.addEventListener('click', onClick, { passive: true });
}
