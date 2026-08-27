/**
 * Alert 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
export function initAlert(root = document) {
  const alerts = root.querySelectorAll('[data-component="Alert"]');

  alerts.forEach((alert) => {
    if (alert.dataset.alertReady) {
      return;
    }

    alert.dataset.alertReady = 'true';
    alert.querySelector('.alert_close')?.addEventListener('click', () => {
      alert.hidden = true;
      alert.dispatchEvent(new CustomEvent('close', { bubbles: true }));
    });
  });

  return alerts;
}
