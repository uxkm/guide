/**
 * Collapse 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
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

function isCollapsePanelDisabled(panel) {
  const trigger = panel.querySelector('.collapse_trigger');

  return panel.classList.contains('is-disabled') || (trigger && trigger.disabled);
}

function setCollapseRegionOpen(region, open, slide, animate) {
  if (slide) {
    setSlideRegionOpen(region, open, animate);
    return;
  }

  region.classList.toggle('is-open', open);

  if (open) {
    region.removeAttribute('hidden');
    region.removeAttribute('aria-hidden');
    region.removeAttribute('inert');
  } else {
    region.setAttribute('hidden', '');
  }
}

function setCollapsePanelOpen(panel, open, slide, animate) {
  const trigger = panel.querySelector('.collapse_trigger');
  const bodyId = trigger ? trigger.getAttribute('aria-controls') : null;
  const body = bodyId
    ? resolveById(bodyId, panel)
    : panel.querySelector('.collapse_body');

  panel.classList.toggle('is-open', open);

  if (trigger) {
    trigger.setAttribute('aria-expanded', String(open));
  }

  if (body) {
    setCollapseRegionOpen(body, open, slide, animate);
  }
}

function initCollapseGroup(root) {
  if (root._sbCollapseGroupInit) return;
  root._sbCollapseGroupInit = true;

  const accordion = root.hasAttribute('data-collapse-accordion');
  const slide = usesSlideEffect(root);
  const panels = Array.from(root.querySelectorAll('.collapse_panel'));

  panels.forEach((panel) => {
    const trigger = panel.querySelector('.collapse_trigger');

    if (!trigger) {
      return;
    }

    const bodyId = trigger.getAttribute('aria-controls');
    const body = bodyId
      ? resolveById(bodyId, panel)
      : panel.querySelector('.collapse_body');

    if (!body) {
      return;
    }

    const isOpen =
      panel.classList.contains('is-open') ||
      trigger.getAttribute('aria-expanded') === 'true';

    setCollapsePanelOpen(panel, isOpen, slide, false);

    trigger.addEventListener('click', () => {
      if (isCollapsePanelDisabled(panel)) {
        return;
      }

      const currentlyOpen = trigger.getAttribute('aria-expanded') === 'true';

      if (accordion && !currentlyOpen) {
        panels.forEach((other) => {
          if (other === panel || isCollapsePanelDisabled(other)) {
            return;
          }

          const otherTrigger = other.querySelector('.collapse_trigger');
          const otherOpen =
            otherTrigger && otherTrigger.getAttribute('aria-expanded') === 'true';

          if (otherOpen) {
            setCollapsePanelOpen(other, false, slide, true);
          }
        });
      }

      setCollapsePanelOpen(panel, !currentlyOpen, slide, true);
    });
  });
}

function initCollapseTrigger(btn) {
  if (btn._sbCollapseTriggerInit) return;
  btn._sbCollapseTriggerInit = true;

  const targetId = btn.getAttribute('aria-controls');
  const target = resolveById(targetId, btn);

  if (!target || !target.classList.contains('collapse')) {
    return;
  }

  const slide = usesSlideEffect(target) || usesSlideEffect(btn);

  setCollapseRegionOpen(
    target,
    btn.getAttribute('aria-expanded') === 'true',
    slide,
    false,
  );

  btn.addEventListener('click', () => {
    // Docs 재렌더 후에도 같은 스토리 레이아웃 안의 타겟만 토글
    const liveTarget = resolveById(targetId, btn);

    if (!liveTarget || !liveTarget.classList.contains('collapse')) {
      return;
    }

    const open = btn.getAttribute('aria-expanded') === 'true';
    const nextOpen = !open;

    btn.setAttribute('aria-expanded', String(nextOpen));
    setCollapseRegionOpen(liveTarget, nextOpen, slide, true);
  });
}

/**
 * @param {ParentNode} [root=document]
 */
export function initCollapses(root = document) {
  root.querySelectorAll('[data-collapse]').forEach(initCollapseGroup);
  root.querySelectorAll('[data-collapse-trigger]').forEach(initCollapseTrigger);
}
