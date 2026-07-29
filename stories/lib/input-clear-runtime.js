/**
 * Input 입력 삭제 — src/js/demo.js 로직을 Storybook에서 재현
 */

function canShowClear(input) {
  return !input.disabled && !input.readOnly;
}

function updateInputClear(wrap) {
  const input = wrap.querySelector('.input');
  const clearBtn = wrap.querySelector('.input_clear');
  if (!input || !clearBtn) return;

  const show = canShowClear(input) && input.value.length > 0;
  clearBtn.hidden = !show;
  wrap.classList.toggle('is-filled', show);
}

/**
 * @param {ParentNode} root
 */
export function initInputClears(root) {
  root.querySelectorAll('.input_clearable').forEach((wrap) => {
    if (wrap._sbInputClearInit) {
      updateInputClear(wrap);
      return;
    }

    const input = wrap.querySelector('.input');
    const clearBtn = wrap.querySelector('.input_clear');
    if (!input || !clearBtn) return;

    wrap._sbInputClearInit = true;
    updateInputClear(wrap);

    input.addEventListener('input', () => updateInputClear(wrap));

    clearBtn.addEventListener('click', () => {
      if (!canShowClear(input)) return;

      input.value = '';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      updateInputClear(wrap);
      input.focus();
    });
  });
}
