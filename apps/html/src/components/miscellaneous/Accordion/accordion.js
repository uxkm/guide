import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';

function itemParts(item) {
  return {
    trigger: item.querySelector('.accordion_trigger'),
    panel: item.querySelector('.accordion_panel'),
  };
}

function isDisabled(item) {
  const { trigger } = itemParts(item);
  return item.classList.contains('is-disabled') || trigger?.disabled || trigger?.getAttribute('aria-disabled') === 'true';
}

function setItemOpen(item, open, slide, animate = true) {
  const { trigger, panel } = itemParts(item);
  item.classList.toggle('is-open', open);
  trigger?.setAttribute('aria-expanded', String(open));
  if (!panel) return;
  if (slide) setSlideRegionOpen(panel, open, animate);
  else panel.hidden = !open;
}

export function initAccordion(root = document) {
  const accordions = [...root.querySelectorAll('[data-accordion]')];

  accordions.forEach((accordion) => {
    if (accordion.dataset.accordionReady === 'true') return;
    accordion.dataset.accordionReady = 'true';

    const items = [...accordion.querySelectorAll(':scope > .accordion_item')];
    const slide = accordion.dataset.effect === 'slide';
    const multiple = accordion.hasAttribute('data-accordion-multiple');

    items.forEach((item) => {
      const { trigger } = itemParts(item);
      if (!trigger) return;
      setItemOpen(item, trigger.getAttribute('aria-expanded') === 'true', slide, false);

      trigger.addEventListener('click', () => {
        if (isDisabled(item)) return;
        const willOpen = trigger.getAttribute('aria-expanded') !== 'true';
        if (willOpen && !multiple) {
          items.forEach((other) => {
            const otherTrigger = itemParts(other).trigger;
            if (other !== item && !isDisabled(other) && otherTrigger?.getAttribute('aria-expanded') === 'true') {
              setItemOpen(other, false, slide);
            }
          });
        }
        setItemOpen(item, willOpen, slide);
        accordion.dispatchEvent(new CustomEvent('accordion:toggle', {
          bubbles: true,
          detail: { item, open: willOpen },
        }));
      });

      trigger.addEventListener('keydown', (event) => {
        const triggers = items.filter((entry) => !isDisabled(entry)).map((entry) => itemParts(entry).trigger);
        const index = triggers.indexOf(trigger);
        let next = null;
        if (event.key === 'ArrowDown') next = triggers[(index + 1) % triggers.length];
        else if (event.key === 'ArrowUp') next = triggers[(index - 1 + triggers.length) % triggers.length];
        else if (event.key === 'Home') next = triggers[0];
        else if (event.key === 'End') next = triggers.at(-1);
        if (next) {
          event.preventDefault();
          next.focus();
        }
      });
    });
  });

  return accordions;
}
