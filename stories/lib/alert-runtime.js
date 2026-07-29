/**
 * Alert 닫기 — src/js/demo.js 로직을 Storybook에서 재현
 */

let initialized = false;

/** Storybook에서 `.alert_close` 클릭으로 Alert를 숨긴다. */
export function initAlertRuntime() {
  if (initialized) return;
  initialized = true;

  document.addEventListener('click', (event) => {
    const closeBtn = event.target.closest('.alert_close');
    if (!closeBtn) return;

    const alert = closeBtn.closest('.alert');
    if (alert) alert.hidden = true;
  });
}
