export function initSlider(root = document) {
  const sliders = root.querySelectorAll('.slider');
  sliders.forEach((slider) => {
    const input = slider.querySelector('.slider_input');
    if (!input || input.dataset.sliderReady) return;
    input.dataset.sliderReady = 'true';
    const output = slider.querySelector('.slider_value');
    const update = () => {
      const min = Number(input.min || 0);
      const max = Number(input.max || 100);
      const value = Number(input.value);
      slider.style.setProperty('--slider-progress', `${max === min ? 0 : ((value - min) / (max - min)) * 100}%`);
      if (output) output.value = `${value}${input.dataset.sliderSuffix || ''}`;
    };
    input.addEventListener('input', update);
    slider.querySelector('.slider_step-decrease')?.addEventListener('click', () => { input.stepDown(); input.dispatchEvent(new Event('input', { bubbles: true })); });
    slider.querySelector('.slider_step-increase')?.addEventListener('click', () => { input.stepUp(); input.dispatchEvent(new Event('input', { bubbles: true })); });
    update();
  });
  return sliders;
}
