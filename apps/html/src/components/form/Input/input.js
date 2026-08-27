/**
 * Input 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
function sanitizeInput(input) {
  if (input.inputMode === 'numeric') {
    input.value = input.value
      .replace(/\D/g, '')
      .slice(0, input.maxLength > 0 ? input.maxLength : undefined);
  } else if (input.type === 'number') {
    input.value = input.value.replace(/[a-zA-ZeE+\-]/g, '');
  }
  input.classList.toggle('input_masked', input.type === 'password' && input.value.length > 0);
}

function initClearable(wrap) {
  const input = wrap.querySelector('.input');
  const button = wrap.querySelector('.input_clear');
  if (!input || !button) return;
  const update = () => {
    const visible = !input.disabled && !input.readOnly && input.value.length > 0;
    button.hidden = !visible;
    wrap.classList.toggle('is-filled', visible);
  };
  if (wrap.dataset.inputClearInit) {
    update();
    return;
  }
  wrap.dataset.inputClearInit = 'true';
  input.addEventListener('input', update);
  button.addEventListener('click', () => {
    if (input.disabled || input.readOnly) return;
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    input.focus();
  });
  update();
}

export function initInput(root = document) {
  const inputs = root.querySelectorAll('[data-component="Input"]');
  inputs.forEach((input) => {
    if (input.dataset.inputInit) {
      sanitizeInput(input);
      return;
    }
    input.dataset.inputInit = 'true';
    input.addEventListener('input', () => sanitizeInput(input));
    input.addEventListener('paste', () => queueMicrotask(() => sanitizeInput(input)));
    sanitizeInput(input);
  });
  root.querySelectorAll('.input_clearable').forEach(initClearable);
  return inputs;
}
