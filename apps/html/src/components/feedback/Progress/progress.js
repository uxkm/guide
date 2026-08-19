export function initProgress(root = document) {
  const items = [...root.querySelectorAll('[data-component="Progress"]')];
  items.forEach((item) => {
    const value = Math.min(100, Math.max(0, Number(item.dataset.percent) || 0));
    const track = item.querySelector('.progress_track'); const bar = item.querySelector('.progress_bar');
    if (!item.classList.contains('is-indeterminate')) track?.setAttribute('aria-valuenow', String(value));
    if (bar) { bar.style.width = `${value}%`; if (item.classList.contains('progress_inside')) bar.textContent = `${value}%`; }
    item.style.setProperty('--progress-percent', String(value));
  });
  return items;
}
