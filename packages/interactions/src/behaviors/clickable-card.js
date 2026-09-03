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

  if (event.target.closest(CONTROL_SELECTOR)) return;
  input.click();
}

function onControlClick(event) {
  if (!(event.target instanceof Element)) return;
  const control = event.target.closest('span.checkbox_control, span.radio_control');
  if (!control) return;

  if (control.closest('label.checkbox, label.radio, label.checkbox_control, label.radio_control, .checkbox, .radio')) return;

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
