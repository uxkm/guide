/**
 * Snackbar 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
export function initSnackbar(root = document) {
  return root.querySelectorAll('[data-component="Snackbar"]');
}
