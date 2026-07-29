/**
 * Rate 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
 */

function formatRateValue(value) {
  if (value === '' || value == null) return '';

  const num = Number(value);
  if (Number.isNaN(num)) return '';

  return `${num}점`;
}

function getRateValue(rate) {
  const checked = rate.querySelector('.rate_input:checked');
  return checked ? checked.value : '';
}

function updateRate(rate) {
  const value = getRateValue(rate);
  const output = rate.querySelector('[data-rate-output], .rate_value');

  if (output) {
    output.textContent = formatRateValue(value);
  }

  rate.classList.toggle('is-rated', Boolean(value));
}

function clearRate(rate) {
  rate.querySelectorAll('.rate_input').forEach((input) => {
    input.checked = false;
  });
  updateRate(rate);
}

function initRateHalfStar(rate) {
  rate.querySelectorAll('.rate_star').forEach((star) => {
    const halfInput = star.querySelector('.rate_input-half');
    const fullInput = star.querySelector('.rate_input:not(.rate_input-half)');
    const leftBtn = star.querySelector('.rate_star-half-left');
    const rightBtn = star.querySelector('.rate_star-half-right');

    if (!halfInput || !fullInput) return;

    if (leftBtn) {
      leftBtn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (halfInput.disabled) return;
        halfInput.checked = true;
        halfInput.dispatchEvent(new Event('change', { bubbles: true }));
      });
    }

    if (rightBtn) {
      rightBtn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (fullInput.disabled) return;
        fullInput.checked = true;
        fullInput.dispatchEvent(new Event('change', { bubbles: true }));
      });
    }
  });
}

function initRateClearable(rate) {
  const clearBtn = rate.querySelector('.rate_clear');

  rate.querySelectorAll('.rate_input').forEach((input) => {
    input.addEventListener('mousedown', () => {
      input._rateWasChecked = input.checked;
    });

    input.addEventListener('click', (event) => {
      if (!rate.classList.contains('rate_clearable')) return;

      if (input._rateWasChecked) {
        input.checked = false;
        input._rateWasChecked = false;
        event.preventDefault();
        updateRate(rate);
      }
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => clearRate(rate));
  }
}

function initRate(rate) {
  if (rate._sbRateInit) {
    updateRate(rate);
    return;
  }

  if (rate.classList.contains('is-readonly')) return;

  rate._sbRateInit = true;
  updateRate(rate);

  rate.querySelectorAll('.rate_input').forEach((input) => {
    input.addEventListener('change', () => updateRate(rate));
  });

  if (rate.classList.contains('rate_allow-half')) {
    initRateHalfStar(rate);
  }

  if (rate.classList.contains('rate_clearable')) {
    initRateClearable(rate);
  }
}

/**
 * @param {ParentNode} root
 */
export function initRates(root) {
  root.querySelectorAll('.rate').forEach(initRate);
}
