/**
 * Spin 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
export function initSpin(root = document) {
  const items = [...root.querySelectorAll('[data-component="Spin"], [data-component="SpinWrap"]')];
  items
    .filter((item) => item.matches('[data-component="SpinWrap"]'))
    .forEach((item) => item.classList.toggle('is-loading', item.dataset.loading !== 'false'));
  return items;
}
