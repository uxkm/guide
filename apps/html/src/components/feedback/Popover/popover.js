/**
 * Popover 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
export function initPopover(root = document) {
  const popovers = [...root.querySelectorAll('[data-popover], [data-component="Popover"]')];
  const close = (popover, reason = 'close') => {
    popover.classList.remove('is-open');
    const panel = popover.querySelector('.popover_panel');
    if (panel) panel.hidden = true;
    popover.querySelector('.popover_trigger')?.setAttribute('aria-expanded', 'false');
    popover.dispatchEvent(
      new CustomEvent('openchange', { bubbles: true, detail: { open: false, reason } }),
    );
  };
  const open = (popover, reason = 'trigger') => {
    popovers.forEach((item) => item !== popover && close(item, 'other'));
    popover.classList.add('is-open');
    const panel = popover.querySelector('.popover_panel');
    if (panel) panel.hidden = false;
    popover.querySelector('.popover_trigger')?.setAttribute('aria-expanded', 'true');
    popover.dispatchEvent(
      new CustomEvent('openchange', { bubbles: true, detail: { open: true, reason } }),
    );
  };
  popovers.forEach((popover) => {
    const trigger = popover.querySelector('.popover_trigger');
    if (!trigger || popover.dataset.popoverReady) return;
    popover.dataset.popoverReady = 'true';
    if (popover.dataset.popoverTrigger === 'hover') {
      popover.addEventListener('mouseenter', () => open(popover, 'hover'));
      popover.addEventListener('mouseleave', () => close(popover, 'hover'));
      popover.addEventListener('focusin', () => open(popover, 'focus'));
    } else
      trigger.addEventListener('click', () =>
        popover.classList.contains('is-open')
          ? close(popover, 'trigger')
          : open(popover, 'trigger'),
      );
    popover
      .querySelectorAll('[data-popover-close]')
      .forEach((button) => button.addEventListener('click', () => close(popover, 'close')));
    if (popover.classList.contains('is-open')) open(popover, 'load');
  });
  root.addEventListener('pointerdown', (event) =>
    popovers.forEach((popover) => {
      if (!popover.contains(event.target)) close(popover, 'outside');
    }),
  );
  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') popovers.forEach((popover) => close(popover, 'escape'));
  });
  return popovers;
}
