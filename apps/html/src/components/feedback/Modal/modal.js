/**
 * Modal 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
export function initModal(root = document) {
  const modals = root.querySelectorAll('[data-modal], [data-component="Modal"]');
  const stack = [];

  const close = (modal, reason = 'close', sourceEvent) => {
    modal.classList.remove('is-open');
    modal.hidden = true;
    const index = stack.indexOf(modal);
    if (index >= 0) stack.splice(index, 1);
    stack.at(-1)?.classList.remove('is-stack-covered');
    if (!stack.length) document.body.classList.remove('is-modal-open');
    modal._modalTrigger?.setAttribute('aria-expanded', 'false');
    modal._modalTrigger?.focus();
    modal.dispatchEvent(
      new CustomEvent('close', { bubbles: true, detail: { reason, sourceEvent } }),
    );
  };
  const open = (modal, trigger) => {
    modal.hidden = false;
    modal.classList.add('is-open');
    modal._modalTrigger = trigger;
    trigger?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('is-modal-open');
    stack.at(-1)?.classList.add('is-stack-covered');
    stack.push(modal);
    modal.focus();
  };

  modals.forEach((modal) => {
    if (modal.dataset.modalReady) return;
    modal.dataset.modalReady = 'true';
    modal
      .querySelectorAll('[data-modal-close]')
      .forEach((button) =>
        button.addEventListener('click', (event) =>
          close(modal, button.classList.contains('modal_backdrop') ? 'backdrop' : 'close', event),
        ),
      );
  });
  root.querySelectorAll('[data-modal-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const modal = root.querySelector(trigger.dataset.modalTrigger);
      if (modal) open(modal, trigger);
    });
  });
  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && stack.length) close(stack.at(-1), 'escape', event);
  });
  return modals;
}
