export function initSnackbar(root = document) {
  const snackbars = root.querySelectorAll('[data-component="Snackbar"]');

  snackbars.forEach((snackbar) => {
    if (snackbar.dataset.snackbarReady) return;
    snackbar.dataset.snackbarReady = 'true';
    const motion = snackbar.classList.contains('snackbar_motion-none') ? 'none' : 'animated';
    let timer;

    const finish = (reason, sourceEvent) => {
      snackbar.hidden = true;
      snackbar.dispatchEvent(new CustomEvent('close', { bubbles: true, detail: { reason, sourceEvent } }));
    };
    const close = (reason = 'close', sourceEvent) => {
      window.clearTimeout(timer);
      if (motion === 'none') finish(reason, sourceEvent);
      else {
        snackbar.classList.remove('is-entering', 'is-open');
        snackbar.classList.add('is-leaving');
        timer = window.setTimeout(() => finish(reason, sourceEvent), 250);
      }
    };

    snackbar.classList.add(motion === 'none' ? 'is-open' : 'is-entering');
    snackbar.addEventListener('animationend', () => {
      if (snackbar.classList.contains('is-entering')) {
        snackbar.classList.replace('is-entering', 'is-open');
      } else if (snackbar.classList.contains('is-leaving')) finish('close');
    });
    snackbar.querySelectorAll('[data-snackbar-close]').forEach((button) => button.addEventListener('click', (event) => close('close', event)));
    snackbar.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && snackbar.querySelector('[data-snackbar-close]')) close('close', event);
    });
    const duration = Math.max(0, Number(snackbar.dataset.snackbarDuration) || 0);
    if (duration) timer = window.setTimeout(() => close('timeout'), duration);
  });

  return snackbars;
}
