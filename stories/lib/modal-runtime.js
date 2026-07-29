/**
 * Modal 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
 */

/** @type {HTMLElement[]} */
let openModalStack = [];
let initialized = false;

function getModalTriggers(modal) {
  if (!modal.id) return [];
  return Array.from(
    document.querySelectorAll(
      `[data-modal-trigger][aria-controls="${modal.id}"]`,
    ),
  );
}

function setModalTriggersExpanded(modal, expanded) {
  getModalTriggers(modal).forEach((trigger) => {
    trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });
}

function updateBodyModalLock() {
  const hasOpen = document.querySelector(
    '[data-modal].is-open:not([data-modal-backdrop="false"])',
  );
  document.body.classList.toggle('is-modal-open', Boolean(hasOpen));
}

function openModal(modal, trigger) {
  if (!modal || modal.classList.contains('is-open')) return;

  modal.hidden = false;
  modal.classList.add('is-open');
  setModalTriggersExpanded(modal, true);

  if (trigger) {
    modal._modalReturnFocus = trigger;
  }

  openModalStack.push(modal);
  updateBodyModalLock();

  requestAnimationFrame(() => {
    const closeBtn = modal.querySelector('.modal_close');
    if (closeBtn) closeBtn.focus();
    else modal.focus();
  });
}

function closeModal(modal) {
  if (!modal || !modal.classList.contains('is-open')) return;

  modal.classList.remove('is-open');
  modal.hidden = true;
  setModalTriggersExpanded(modal, false);

  openModalStack = openModalStack.filter((item) => item !== modal);
  updateBodyModalLock();

  if (modal._modalReturnFocus) {
    modal._modalReturnFocus.focus();
    modal._modalReturnFocus = null;
  }
}

function resolveModalSelector(trigger) {
  return (
    trigger.getAttribute('data-modal-trigger') ||
    `#${trigger.getAttribute('aria-controls')}`
  );
}

/** Storybook에서 Modal 열기·닫기·Esc 동작을 활성화한다. */
export function initModalRuntime() {
  if (initialized) return;
  initialized = true;

  document.addEventListener('click', (event) => {
    const modalTrigger = event.target.closest('[data-modal-trigger]');

    if (modalTrigger) {
      const modalSelector = resolveModalSelector(modalTrigger);
      const modal = modalSelector
        ? document.querySelector(modalSelector)
        : null;

      if (modal) {
        if (modal.classList.contains('is-open')) {
          closeModal(modal);
        } else {
          openModal(modal, modalTrigger);
        }
      }
      return;
    }

    const modalCloseEl = event.target.closest('[data-modal-close]');
    if (modalCloseEl) {
      const modalRoot = modalCloseEl.closest('[data-modal]');
      if (modalRoot) closeModal(modalRoot);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && openModalStack.length) {
      closeModal(openModalStack[openModalStack.length - 1]);
    }
  });
}
