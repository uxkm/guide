/**
 * Ripple — 클릭 위치 파장 효과
 *
 * 대상 — data-ripple 속성 (opt-in)
 * · data-ripple · data-ripple="true" — 활성
 * · data-ripple="surface" — overflow 클리핑만
 * · data-ripple="false" — 비활성
 * · data-no-ripple — 하위 전체 비활성
 *
 * 가이드 HTML 데모는 .btn · .link 등에 data-ripple을 자동 부여합니다.
 */
(function () {
  var RIPPLE_SELECTOR = '[data-ripple]:not([data-ripple="false"])';
  var RIPPLE_CLASS = 'ripple_wave';
  var RIPPLE_DURATION_MS = 600;
  var recentRipples = typeof WeakMap !== 'undefined' ? new WeakMap() : null;

  /** Vue와 동일 — 표면형 인터랙티브 요소에 기본 활성 */
  var AUTO_RIPPLE_SELECTOR = [
    '.btn',
    '.link',
    '.category_card',
    '.guide_nav-heading',
    '.guide_nav-link',
    '.demo_code-toggle',
    '.guide_header-menu-btn',
    '.guide_header-sidebar-btn',
    '.guide_header-theme-btn',
  ].join(', ');

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
    var rect = target.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height) * 2;
    var x = clientX - rect.left - size / 2;
    var y = clientY - rect.top - size / 2;

    var ripple = document.createElement('span');
    ripple.className = RIPPLE_CLASS;
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    target.insertBefore(ripple, target.firstChild);
    if (recentRipples) recentRipples.set(target, Date.now());

    var cleanup = function () {
      ripple.remove();
    };
    ripple.addEventListener('animationend', cleanup, { once: true });
    window.setTimeout(cleanup, RIPPLE_DURATION_MS);
  }

  function resolveRippleTarget(event) {
    return event.target.closest(RIPPLE_SELECTOR);
  }

  function onPointerDown(event) {
    if (event.pointerType === 'mouse' && event.button !== 0) return;

    var target = resolveRippleTarget(event);
    if (!target || !target.isConnected || isRippleDisabled(target)) return;

    spawnRipple(target, event.clientX, event.clientY);
  }

  function onClick(event) {
    var target = resolveRippleTarget(event);
    if (!target || !target.isConnected || isRippleDisabled(target)) return;

    if (recentRipples) {
      var lastAt = recentRipples.get(target);
      if (lastAt && Date.now() - lastAt < 500) return;
    }

    var rect = target.getBoundingClientRect();
    spawnRipple(target, rect.left + rect.width / 2, rect.top + rect.height / 2);
  }

  function markAutoRippleTargets(root) {
    var scope = root && root.querySelectorAll ? root : document;
    scope.querySelectorAll(AUTO_RIPPLE_SELECTOR).forEach(function (el) {
      if (el.hasAttribute('data-ripple') || el.hasAttribute('data-no-ripple')) return;
      if (el.closest('[data-no-ripple]')) return;
      el.setAttribute('data-ripple', 'true');
    });
  }

  function initRipple() {
    if (window.__rippleInit) return;
    window.__rippleInit = true;

    if (prefersReducedMotion()) return;

    markAutoRippleTargets(document);
    document.addEventListener('pointerdown', onPointerDown, { passive: true });
    document.addEventListener('click', onClick, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRipple);
  } else {
    initRipple();
  }

  window.initRipple = initRipple;
  window.markAutoRippleTargets = markAutoRippleTargets;
})();
