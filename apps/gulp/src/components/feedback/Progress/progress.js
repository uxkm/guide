/**
 * Progress 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
export function initProgress(root = document) {
  const items = [
    ...root.querySelectorAll('[data-component="Progress"], [data-component="ProgressCircle"]'),
  ];
  items.forEach((item) => {
    const value = Math.min(100, Math.max(0, Number(item.dataset.percent) || 0));
    const track = item.querySelector('.progress_track');
    const bar = item.querySelector('.progress_bar');
    if (!item.classList.contains('is-indeterminate'))
      track?.setAttribute('aria-valuenow', String(value));
    if (bar) {
      bar.style.width = `${value}%`;
      if (item.classList.contains('progress_inside')) bar.textContent = `${value}%`;
    }
    item.style.setProperty('--progress-percent', String(value));
  });
  return items;
}
