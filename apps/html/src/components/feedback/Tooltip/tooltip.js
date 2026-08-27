/**
 * Tooltip 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
export function initTooltip(root = document) {
  const tooltips = [...root.querySelectorAll('[data-tooltip], [data-component="Tooltip"]')];
  const topDocument = (() => {
    try {
      return window.top?.document?.body ? window.top.document : document;
    } catch {
      return document;
    }
  })();
  if (topDocument !== document) {
    const url = new URL('styles/uxkm.css', topDocument.baseURI);
    url.searchParams.set('v', 'tooltip-20260819');
    let link = topDocument.getElementById('uxkm-tooltip-portal-styles');
    if (!link) {
      link = topDocument.createElement('link');
      link.id = 'uxkm-tooltip-portal-styles';
      link.rel = 'stylesheet';
      topDocument.head.appendChild(link);
    }
    if (link.href !== url.href) link.href = url.href;
  }
  let portalRoot = topDocument.getElementById('uxkm-tooltip-portal-root');
  if (!portalRoot) {
    portalRoot = topDocument.createElement('div');
    portalRoot.id = 'uxkm-tooltip-portal-root';
    portalRoot.className = 'uxkm-tooltip-portal-root';
    topDocument.body.appendChild(portalRoot);
  }
  portalRoot.dataset.theme = document.documentElement.dataset.theme || 'light';

  const entries = tooltips
    .map((tooltip, index) => {
      if (tooltip.dataset.tooltipReady) return null;
      const trigger = tooltip.querySelector('.tooltip_trigger');
      const bubble = tooltip.querySelector('.tooltip_bubble');
      if (!trigger || !bubble) return null;
      tooltip.dataset.tooltipReady = 'true';
      const portal = topDocument.createElement('span');
      portal.className = [...tooltip.classList]
        .filter((name) => name !== 'is-open')
        .concat('tooltip_portal')
        .join(' ');
      portal.style.cssText = 'position:fixed;z-index:10020;pointer-events:none;';
      portal.hidden = true;
      portalRoot.appendChild(portal);
      portal.appendChild(bubble);
      bubble.hidden = false;
      bubble.style.zIndex = '10021';
      if (tooltip.dataset.tooltipTrigger === 'click') bubble.style.pointerEvents = 'auto';
      let timer;
      const update = () => {
        const selector =
          'button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link';
        const element = trigger.matches(selector)
          ? trigger
          : trigger.querySelector(selector) || trigger;
        const rect = element.getBoundingClientRect();
        let frame = { top: 0, left: 0 };
        try {
          if (trigger.ownerDocument !== window.top?.document)
            frame = window.frameElement?.getBoundingClientRect() || frame;
        } catch {
          /* 현재 좌표 */
        }
        portal.style.top = `${frame.top + rect.top}px`;
        portal.style.left = `${frame.left + rect.left}px`;
        portal.style.width = `${rect.width}px`;
        portal.style.height = `${rect.height}px`;
        if (portal.matches('.tooltip_arrow-anchor-target, .tooltip_arrow-anchor-mixed')) {
          const bubbleRect = bubble.getBoundingClientRect();
          const align = tooltip.dataset.arrowTargetAlign || 'center';
          const ratio = ['left', 'top'].includes(align)
            ? 0
            : ['right', 'bottom'].includes(align)
              ? 1
              : 0.5;
          const vertical = portal.matches('.tooltip_placement-left, .tooltip_placement-right');
          const value = vertical
            ? frame.top + rect.top + rect.height * ratio - bubbleRect.top
            : frame.left + rect.left + rect.width * ratio - bubbleRect.left;
          portal.style.setProperty('--tooltip-arrow-position', `${value}px`);
        }
      };
      const close = (reason = 'close') => {
        clearTimeout(timer);
        tooltip.classList.remove('is-open');
        portal.classList.remove('is-open');
        portal.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
        tooltip.dispatchEvent(
          new CustomEvent('openchange', { bubbles: true, detail: { open: false, reason } }),
        );
      };
      const open = (reason = 'trigger') => {
        if (tooltip.classList.contains('is-disabled')) return;
        update();
        tooltip.classList.add('is-open');
        portal.classList.add('is-open');
        portal.hidden = false;
        update();
        trigger.setAttribute('aria-expanded', 'true');
        tooltip.dispatchEvent(
          new CustomEvent('openchange', { bubbles: true, detail: { open: true, reason } }),
        );
      };
      const delayedClose = () => {
        clearTimeout(timer);
        timer = setTimeout(() => close('hover'), 100);
      };
      if (tooltip.dataset.tooltipTrigger === 'click')
        trigger.addEventListener('click', () =>
          portal.hidden ? open('trigger') : close('trigger'),
        );
      else {
        trigger.addEventListener('mouseenter', () => open('hover'));
        trigger.addEventListener('mouseleave', delayedClose);
        trigger.addEventListener('focusin', () => open('focus'));
        trigger.addEventListener('focusout', delayedClose);
        bubble.addEventListener('mouseenter', () => clearTimeout(timer));
        bubble.addEventListener('mouseleave', delayedClose);
      }
      bubble
        .querySelectorAll('[data-tooltip-close]')
        .forEach((button) => button.addEventListener('click', () => close('close')));
      window.addEventListener('resize', update);
      window.addEventListener('scroll', update, true);
      if (tooltip.classList.contains('is-open')) open('load');
      return { tooltip, trigger, bubble, portal, close };
    })
    .filter(Boolean);
  const outside = (event) =>
    entries.forEach((entry) => {
      if (!entry.tooltip.contains(event.target) && !entry.portal.contains(event.target))
        entry.close('outside');
    });
  root.addEventListener('pointerdown', outside);
  if (topDocument !== root) topDocument.addEventListener('pointerdown', outside);
  const escape = (event) => {
    if (event.key === 'Escape') entries.forEach((entry) => entry.close('escape'));
  };
  root.addEventListener('keydown', escape);
  if (topDocument !== root) topDocument.addEventListener('keydown', escape);
  return tooltips;
}
