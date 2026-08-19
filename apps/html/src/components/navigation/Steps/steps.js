export function initSteps(root = document) {
  const groups = [...root.querySelectorAll('[data-steps]')];
  groups.forEach((steps) => {
    if (steps.dataset.stepsReady === 'true') return;
    steps.dataset.stepsReady = 'true';
    if (!steps.classList.contains('steps_navigable')) return;
    const items = [...steps.querySelectorAll(':scope > .steps_item')];
    function select(index) {
      items.forEach((item, itemIndex) => {
        if (item.dataset.stepFixed === 'error') return;
        const status = itemIndex + 1 < index ? 'finished' : itemIndex + 1 === index ? 'active' : 'wait';
        item.classList.remove('is-finished', 'is-active', 'is-wait'); item.classList.add(`is-${status}`);
        const indicator = item.querySelector('.steps_indicator');
        if (indicator) indicator.innerHTML = status === 'finished' ? '<svg class="icon steps_icon" data-component="Icon" data-icon="check" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"></path></svg>' : `<span class="steps_index">${itemIndex + 1}</span>`;
        const trigger = item.querySelector('.steps_trigger');
        if (trigger) { trigger.disabled = status === 'wait'; if (status === 'active') trigger.setAttribute('aria-current', 'step'); else trigger.removeAttribute('aria-current'); }
      });
      steps.dispatchEvent(new CustomEvent('steps:change', { bubbles: true, detail: { current: index } }));
    }
    steps.addEventListener('click', (event) => { const trigger = event.target.closest('.steps_trigger'); const item = trigger?.closest('.steps_item'); if (!trigger || !item || trigger.disabled || item.classList.contains('is-active')) return; select(Number(item.dataset.stepIndex)); });
  });
  return groups;
}
