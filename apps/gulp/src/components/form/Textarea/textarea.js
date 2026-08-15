function updateCount(textarea) {
  const counter = textarea.closest('.textarea_show-count')?.querySelector('.textarea_count');
  if (!counter) return;
  const count = textarea.value.length;
  const limit = textarea.maxLength >= 0 ? textarea.maxLength : null;
  const visual = counter.querySelector('.textarea_count_visual');
  const announcer = counter.querySelector('.textarea_count_announcer');
  if (visual) visual.textContent = limit == null ? String(count) : `${count}/${limit}`;
  if (announcer) announcer.textContent = limit == null ? `${count}자 입력` : `${count}자 입력, 최대 ${limit}자`;
  counter.classList.toggle('is-limit', limit != null && count >= limit);
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
  return textareas;
}
