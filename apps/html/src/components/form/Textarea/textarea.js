/**
 * Textarea 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
function updateCount(textarea) {
  const counter = textarea.closest('.textarea_show-count')?.querySelector('.textarea_count');
  if (!counter) return;
  const count = textarea.value.length;
  const limit = textarea.maxLength >= 0 ? textarea.maxLength : null;
  const visual = counter.querySelector('.textarea_count_visual');
  const announcer = counter.querySelector('.textarea_count_announcer');
  if (visual) visual.textContent = limit == null ? String(count) : `${count}/${limit}`;
  if (announcer)
    announcer.textContent = limit == null ? `${count}자 입력` : `${count}자 입력, 최대 ${limit}자`;
  counter.classList.toggle('is-limit', limit != null && count >= limit);
}

function initClearable(wrap) {
  const textarea = wrap.querySelector('.textarea');
  const button = wrap.querySelector('.textarea_clear');
  if (!textarea || !button) return;
  const update = () => {
    const visible = !textarea.disabled && !textarea.readOnly && textarea.value.length > 0;
    button.hidden = !visible;
    wrap.classList.toggle('is-filled', visible);
  };
  if (wrap.dataset.textareaClearInit) {
    update();
    return;
  }
  wrap.dataset.textareaClearInit = 'true';
  textarea.addEventListener('input', update);
  button.addEventListener('click', () => {
    if (textarea.disabled || textarea.readOnly) return;
    textarea.value = '';
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    textarea.dispatchEvent(new Event('change', { bubbles: true }));
    textarea.focus();
  });
  update();
}

export function initTextarea(root = document) {
  const textareas = root.querySelectorAll('[data-component="Textarea"]');
  textareas.forEach((textarea) => {
    if (!textarea.dataset.textareaInit) {
      textarea.dataset.textareaInit = 'true';
      textarea.addEventListener('input', () => updateCount(textarea));
    }
    updateCount(textarea);
  });
  root.querySelectorAll('.textarea_clearable').forEach(initClearable);
  return textareas;
}
