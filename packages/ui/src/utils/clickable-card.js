/**
 * Checkbox · Radio 카드 전체 클릭 — clickable 카드
 * label은 phrasing content만 허용하므로 div + 클릭 위임으로 처리
 *
 * document 위임으로 Vue 라우트 등 동적 콘텐츠에도 동작합니다.
 */
function onCardClick(event) {
  const card = event.target.closest('.checkbox_card-clickable, .radio_card-clickable');
  if (!card) return;

  const input = card.querySelector('.checkbox_input, .radio_input');
  if (!input || input.disabled) return;

  if (event.target.closest('.checkbox_control, .radio_control')) return;

  input.click();
}

/**
 * span.checkbox_control · span.radio_control — 클릭을 input에 전달 (명시 label 분리 시)
 */
function onControlClick(event) {
  const control = event.target.closest('span.checkbox_control, span.radio_control');
  if (!control) return;

  // label 내부 암묵 연결(control/input이 label 안에 있을 때)은 네이티브 클릭에 맡긴다.
  if (control.closest('label.checkbox, label.radio, label.checkbox_control, label.radio_control')) {
    return;
  }

  const input = control.querySelector('.checkbox_input, .radio_input');
  if (!input || input.disabled || event.target === input) return;

  input.click();
}

export function initClickableCard() {
  if (typeof document === 'undefined' || window.__clickableCardInit) return;
  window.__clickableCardInit = true;

  document.addEventListener('click', onCardClick);
  document.addEventListener('click', onControlClick);
}
