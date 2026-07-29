/**
 * Accordion 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
 */

/** Docs에서 동일 데모가 Primary·Stories에 중복 렌더될 때 id 충돌 방지 */
function resolveById(id, scopeEl) {
  if (!id) return null;

  const scope = scopeEl && scopeEl.closest('.sb-demo-layout');

  if (scope) {
    try {
      const local = scope.querySelector(`#${CSS.escape(id)}`);
      if (local) return local;
    } catch {
      /* ignore invalid selector */
    }
  }

  return document.getElementById(id);
}

function isAccordionItemDisabled(item) {
  const trigger = item.querySelector('.accordion_trigger');

  return item.classList.contains('is-disabled') || (trigger && trigger.disabled);
}

function getAccordionTriggers(root) {
  return Array.from(root.querySelectorAll('.accordion_trigger')).filter((trigger) => {
    const item = trigger.closest('.accordion_item');

    return item && !isAccordionItemDisabled(item);
  });
}

function usesSlideEffect(el) {
  return Boolean(el && el.getAttribute('data-effect') === 'slide');
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getSlideDurationMs(region) {
  const styles = getComputedStyle(region);
  const raw =
    styles.getPropertyValue('--accordion-slide-duration').trim() ||
    styles.getPropertyValue('--collapse-slide-duration').trim() ||
    '0.28s';
  const value = parseFloat(raw);

  if (!Number.isFinite(value)) {
    return 280;
  }

  return /ms$/i.test(raw) ? value : value * 1000;
}

function getSlideTransition(region) {
  const styles = getComputedStyle(region);
  const duration =
    styles.getPropertyValue('--accordion-slide-duration').trim() ||
    styles.getPropertyValue('--collapse-slide-duration').trim() ||
    '0.28s';
  const easing =
    styles.getPropertyValue('--accordion-slide-easing').trim() ||
    styles.getPropertyValue('--collapse-slide-easing').trim() ||
    'ease';

  return `height ${duration} ${easing}`;
}

function clearSlideStyles(region) {
  region.classList.remove('is-sliding');
  region.style.height = '';
  region.style.overflow = '';
  region.style.transition = '';
}

function isSlideRegionOpen(region) {
  return !region.hasAttribute('hidden') && region.getAttribute('aria-hidden') !== 'true';
}

function runAfterSlide(region, onDone) {
  let finished = false;

  function finish() {
    if (finished) {
      return;
    }

    finished = true;

    if (region._slideCleanup) {
      region._slideCleanup();
      region._slideCleanup = null;
    }

    onDone();
  }

  function onEnd(event) {
    if (event.target !== region || event.propertyName !== 'height') {
      return;
    }

    finish();
  }

  region.addEventListener('transitionend', onEnd);

  const timer = window.setTimeout(finish, getSlideDurationMs(region) + 80);

  region._slideCleanup = () => {
    region.removeEventListener('transitionend', onEnd);
    window.clearTimeout(timer);
  };
}

function setSlideRegionOpen(region, open, animate) {
  if (open === isSlideRegionOpen(region) && !region.classList.contains('is-sliding')) {
    region.classList.toggle('is-open', open);
    return;
  }

  region.classList.toggle('is-open', open);

  if (region._slideCleanup) {
    region._slideCleanup();
    region._slideCleanup = null;
    clearSlideStyles(region);
  }

  const shouldAnimate = animate !== false && !prefersReducedMotion();

  if (!shouldAnimate) {
    clearSlideStyles(region);

    if (open) {
      region.removeAttribute('hidden');
      region.removeAttribute('inert');
      region.setAttribute('aria-hidden', 'false');
    } else {
      region.setAttribute('hidden', '');
      region.setAttribute('inert', '');
      region.setAttribute('aria-hidden', 'true');
    }

    return;
  }

  if (open) {
    region.removeAttribute('hidden');
    region.removeAttribute('inert');
    region.setAttribute('aria-hidden', 'false');
    region.style.overflow = 'hidden';
    region.style.transition = 'none';
    region.style.height = '0px';
    region.classList.add('is-sliding');
    void region.offsetHeight;
    region.style.transition = getSlideTransition(region);
    region.style.height = `${region.scrollHeight}px`;

    runAfterSlide(region, () => {
      clearSlideStyles(region);
    });
  } else {
    const fromHeight = region.scrollHeight;

    region.setAttribute('aria-hidden', 'true');
    region.setAttribute('inert', '');
    region.style.overflow = 'hidden';
    region.style.transition = 'none';
    region.style.height = `${fromHeight}px`;
    region.classList.add('is-sliding');
    void region.offsetHeight;

    if (fromHeight === 0) {
      region.setAttribute('hidden', '');
      clearSlideStyles(region);
      return;
    }

    region.style.transition = getSlideTransition(region);
    region.style.height = '0px';

    runAfterSlide(region, () => {
      region.setAttribute('hidden', '');
      clearSlideStyles(region);
    });
  }
}

function setAccordionItemOpen(item, open, slide, animate) {
  const trigger = item.querySelector('.accordion_trigger');
  const panelId = trigger ? trigger.getAttribute('aria-controls') : null;
  const panel = panelId
    ? resolveById(panelId, item)
    : item.querySelector('.accordion_panel');

  item.classList.toggle('is-open', open);

  if (trigger) {
    trigger.setAttribute('aria-expanded', String(open));
  }

  if (!panel) {
    return;
  }

  if (slide) {
    setSlideRegionOpen(panel, open, animate);
    return;
  }

  if (open) {
    panel.removeAttribute('hidden');
    panel.removeAttribute('aria-hidden');
    panel.removeAttribute('inert');
  } else {
    panel.setAttribute('hidden', '');
  }
}

function initAccordionRoot(root) {
  if (root._sbAccordionInit) return;
  root._sbAccordionInit = true;

  const multiple = root.hasAttribute('data-accordion-multiple');
  const slide = usesSlideEffect(root);
  const items = Array.from(root.querySelectorAll('.accordion_item'));

  items.forEach((item) => {
    const trigger = item.querySelector('.accordion_trigger');

    if (!trigger) {
      return;
    }

    const panelId = trigger.getAttribute('aria-controls');
    const panel = panelId
      ? resolveById(panelId, item)
      : item.querySelector('.accordion_panel');

    if (!panel) {
      return;
    }

    setAccordionItemOpen(item, trigger.getAttribute('aria-expanded') === 'true', slide, false);

    trigger.addEventListener('click', () => {
      if (isAccordionItemDisabled(item)) {
        return;
      }

      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      if (!multiple && !isOpen) {
        items.forEach((other) => {
          if (other === item || isAccordionItemDisabled(other)) {
            return;
          }

          const otherTrigger = other.querySelector('.accordion_trigger');
          const otherOpen =
            otherTrigger && otherTrigger.getAttribute('aria-expanded') === 'true';

          if (otherOpen) {
            setAccordionItemOpen(other, false, slide, true);
          }
        });
      }

      setAccordionItemOpen(item, !isOpen, slide, true);
    });

    trigger.addEventListener('keydown', (event) => {
      const triggers = getAccordionTriggers(root);
      const index = triggers.indexOf(trigger);
      let nextTrigger = null;

      if (event.key === 'ArrowDown') {
        nextTrigger = triggers[(index + 1) % triggers.length];
      } else if (event.key === 'ArrowUp') {
        nextTrigger = triggers[(index - 1 + triggers.length) % triggers.length];
      } else if (event.key === 'Home') {
        nextTrigger = triggers[0] || null;
      } else if (event.key === 'End') {
        nextTrigger = triggers[triggers.length - 1] || null;
      }

      if (nextTrigger) {
        event.preventDefault();
        nextTrigger.focus();
      }
    });
  });
}

/**
 * @param {ParentNode} [root=document]
 */
export function initAccordions(root = document) {
  root.querySelectorAll('[data-accordion]').forEach(initAccordionRoot);
}
