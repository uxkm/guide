function canShowClear(input) {
  return !input.disabled && !input.readOnly;
}

function applyClearButtonLayout(clearBtn) {
  clearBtn.style.position = 'absolute';
  clearBtn.style.top = '50%';
  clearBtn.style.right = 'var(--input-clear-offset, 0.5rem)';
  clearBtn.style.left = 'auto';
  clearBtn.style.bottom = 'auto';
  clearBtn.style.transform = 'translateY(-50%)';
  clearBtn.style.zIndex = '1';
}

function applyClearButtonA11y(clearBtn) {
  if (!clearBtn.getAttribute('aria-label')) {
    clearBtn.setAttribute('aria-label', '입력 지우기');
  }

  if (clearBtn.tagName === 'BUTTON') {
    if (!clearBtn.getAttribute('type')) {
      clearBtn.setAttribute('type', 'button');
    }
    return;
  }

  clearBtn.setAttribute('role', 'button');
  if (!clearBtn.hasAttribute('tabindex')) {
    clearBtn.setAttribute('tabindex', '0');
  }
}

function updateInputClear(wrap) {
  const input = wrap.querySelector('.input');
  const clearBtn = wrap.querySelector('.input_clear');

  if (!input || !clearBtn) {
    return;
  }

  const show = canShowClear(input) && input.value.length > 0;

  clearBtn.hidden = !show;
  wrap.classList.toggle('is-filled', show);
}

export function initInputClear(wrap) {
  if (wrap.dataset.inputClearInit) {
    updateInputClear(wrap);
    return;
  }

  const input = wrap.querySelector('.input');
  const clearBtn = wrap.querySelector('.input_clear');

  if (!input || !clearBtn) {
    return;
  }

  applyClearButtonLayout(clearBtn);
  applyClearButtonA11y(clearBtn);
  wrap.dataset.inputClearInit = '1';

  function onInput() {
    updateInputClear(wrap);
  }

  function onClear() {
    if (!canShowClear(input)) {
      return;
    }

    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    updateInputClear(wrap);
    input.focus();
  }

  function onClearKeydown(event) {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    onClear();
  }

  updateInputClear(wrap);
  input.addEventListener('input', onInput);
  clearBtn.addEventListener('click', onClear);
  clearBtn.addEventListener('keydown', onClearKeydown);
}

export function initInputClearAll(root = document) {
  if (!root?.querySelectorAll) return;

  root.querySelectorAll('.input_clearable').forEach(initInputClear);
}
