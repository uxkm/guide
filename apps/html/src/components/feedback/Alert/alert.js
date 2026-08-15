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
