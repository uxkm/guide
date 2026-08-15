export function initRate(root = document) {
  const rates = root.querySelectorAll('.rate:not(.is-readonly)');
  rates.forEach((rate) => {
    if (rate.dataset.rateReady) return;
    rate.dataset.rateReady = 'true';
    const output = rate.querySelector('.rate_value');
    const update = () => {
      const value = rate.querySelector('.rate_input:checked')?.value;
      rate.classList.toggle('is-rated', value != null);
      if (output) output.textContent = value == null ? '' : `${Number(value)}점`;
    };
    rate.querySelectorAll('.rate_input').forEach((input) => input.addEventListener('change', update));
    rate.querySelectorAll('.rate_star').forEach((star) => {
      const half = star.querySelector('.rate_input-half');
      const full = star.querySelector('.rate_input:not(.rate_input-half)');
      star.querySelector('.rate_star-half-left')?.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); if (!half?.disabled) { half.checked = true; half.dispatchEvent(new Event('change', { bubbles: true })); } });
      star.querySelector('.rate_star-half-right')?.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); if (!full?.disabled) { full.checked = true; full.dispatchEvent(new Event('change', { bubbles: true })); } });
    });
    rate.querySelector('.rate_clear')?.addEventListener('click', () => {
      rate.querySelectorAll('.rate_input').forEach((input) => { input.checked = false; });
      update();
    });
    update();
  });
  return rates;
}
