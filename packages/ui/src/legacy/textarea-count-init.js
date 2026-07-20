function formatTextareaCountVisual(current, max) {
  if (max > 0) {
    return `${current}/${max}`;
  }

  return String(current);
}

function formatTextareaCountAnnounce(current, max) {
  if (max > 0) {
    let message = `${current}자 입력, 최대 ${max}자`;

    if (current >= max) {
      message += ', 글자 수 제한에 도달했습니다';
    }

    return message;
  }

  return `${current}자 입력`;
}

function updateTextareaCount(wrap) {
  const textarea = wrap.querySelector('.textarea');
  const counter = wrap.querySelector('.textarea_count');
  const visual = counter ? counter.querySelector('.textarea_count_visual') : null;
  const announcer = counter ? counter.querySelector('.textarea_count_announcer') : null;

  if (!textarea || !counter) {
    return;
  }

  const current = textarea.value.length;
  const max = textarea.maxLength;
  const display = formatTextareaCountVisual(current, max);
  const announce = formatTextareaCountAnnounce(current, max);

  if (visual) {
    visual.textContent = display;
  } else {
    counter.textContent = display;
  }

  if (announcer) {
    announcer.textContent = announce;
  }

  counter.classList.toggle('is-limit', max > 0 && current >= max);
}

export function initTextareaCount(wrap) {
  if (wrap.dataset.textareaCountInit) {
    updateTextareaCount(wrap);
    return;
  }

  const textarea = wrap.querySelector('.textarea');

  if (!textarea) {
    return;
  }

  wrap.dataset.textareaCountInit = '1';
  updateTextareaCount(wrap);

  textarea.addEventListener('input', () => {
    updateTextareaCount(wrap);
  });
}

export function initTextareaCountAll(root = document) {
  if (!root?.querySelectorAll) return;

  root.querySelectorAll('.textarea_show-count').forEach(initTextareaCount);
}
