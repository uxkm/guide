/**
 * Checkbox · Radio 카드 전체 클릭 위임.
 * article을 label로 감쌀 수 없으므로 clickable 래퍼의 클릭을 내부 input에 전달합니다.
 */
const CLICKABLE_CARD_SELECTOR = '.checkbox_card-clickable, .radio_card-clickable';
const CONTROL_SELECTOR = '.checkbox_control, .radio_control';
const INPUT_SELECTOR = '.checkbox_input, .radio_input';

function onCardClick(event) {
  if (!(event.target instanceof Element)) return;
  const card = event.target.closest(CLICKABLE_CARD_SELECTOR);
  if (!card) return;

  const input = card.querySelector(INPUT_SELECTOR);
  if (!(input instanceof HTMLInputElement) || input.disabled) return;

  // 실제 control 클릭은 label/input의 네이티브 동작에 맡겨 중복 토글을 막습니다.
  if (event.target.closest(CONTROL_SELECTOR)) return;
  input.click();
}

function onControlClick(event) {
  if (!(event.target instanceof Element)) return;
  const control = event.target.closest('span.checkbox_control, span.radio_control');
  if (!control) return;

  // label 내부의 암묵 연결은 브라우저 기본 동작에 맡깁니다.
  if (control.closest('label.checkbox, label.radio, label.checkbox_control, label.radio_control')) return;

  const input = control.querySelector(INPUT_SELECTOR);
  if (!(input instanceof HTMLInputElement) || input.disabled || event.target === input) return;
  input.click();
}

export function initClickableCard() {
  if (typeof document === 'undefined' || globalThis.__uxkmClickableCardInitialized) return;
  globalThis.__uxkmClickableCardInitialized = true;
  document.addEventListener('click', onCardClick);
  document.addEventListener('click', onControlClick);
}
