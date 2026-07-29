/**
 * Affix 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
 */

function parseAffixOffset(value, fallback) {
  const parsed = parseInt(value, 10);

  return Number.isFinite(parsed) ? parsed : fallback;
}

/** position:fixed의 containing block (transform/filter 등) 보정 */
function getFixedContainingBlockRect(el) {
  let parent = el.parentElement;

  while (parent) {
    const style = getComputedStyle(parent);
    const transform = style.transform;
    const filter = style.filter;
    const backdropFilter = style.backdropFilter || style.webkitBackdropFilter;
    const perspective = style.perspective;
    const contain = style.contain;
    const willChange = style.willChange;
    const hasTransform = Boolean(transform && transform !== 'none');
    const hasFilter = Boolean(
      (filter && filter !== 'none') ||
        (backdropFilter && backdropFilter !== 'none'),
    );
    const hasPerspective = Boolean(perspective && perspective !== 'none');
    const hasContain = Boolean(
      contain && /paint|layout|strict|content/.test(contain),
    );
    const hasWillChange = Boolean(
      willChange && /transform|filter|perspective/.test(willChange),
    );

    if (
      hasTransform ||
      hasFilter ||
      hasPerspective ||
      hasContain ||
      hasWillChange
    ) {
      return parent.getBoundingClientRect();
    }

    if (parent === document.documentElement) {
      break;
    }

    parent = parent.parentElement;
  }

  return {
    left: 0,
    top: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function initAffixRoot(root) {
  if (root.dataset.affixInit) {
    return;
  }

  const targetSelector = root.getAttribute('data-target');
  let scrollContainer = null;

  if (targetSelector) {
    try {
      scrollContainer = document.querySelector(targetSelector);
    } catch {
      scrollContainer = null;
    }
  }

  const offsetTop = parseAffixOffset(root.getAttribute('data-offset-top'), 0);
  const useBottom = root.hasAttribute('data-offset-bottom');
  const offsetBottom = useBottom
    ? parseAffixOffset(root.getAttribute('data-offset-bottom'), 0)
    : 0;
  const affixEl = root.querySelector('.affix_target');

  if (!affixEl) {
    return;
  }

  root.dataset.affixInit = '1';

  let placeholder = root.querySelector('.affix_placeholder');

  if (!placeholder) {
    placeholder = document.createElement('div');
    placeholder.className = 'affix_placeholder';
    placeholder.setAttribute('aria-hidden', 'true');
    root.insertBefore(placeholder, affixEl);
  }

  let affixed = false;
  let ticking = false;

  function getTargetRect() {
    if (scrollContainer) {
      return scrollContainer.getBoundingClientRect();
    }

    return {
      top: 0,
      bottom: window.innerHeight,
      left: 0,
      right: window.innerWidth,
    };
  }

  function clearAffixStyles() {
    affixEl.style.position = '';
    affixEl.style.top = '';
    affixEl.style.bottom = '';
    affixEl.style.left = '';
    affixEl.style.width = '';
    affixEl.style.zIndex = '';
  }

  function applyAffixStyles(targetRect, width, left) {
    const cb = getFixedContainingBlockRect(affixEl);
    const viewportTop = useBottom
      ? targetRect.bottom - affixEl.offsetHeight - offsetBottom
      : targetRect.top + offsetTop;

    affixEl.style.position = 'fixed';
    affixEl.style.width = `${width}px`;
    affixEl.style.left = `${left - cb.left}px`;
    affixEl.style.top = `${viewportTop - cb.top}px`;
    affixEl.style.bottom = '';
    affixEl.style.zIndex =
      getComputedStyle(root).getPropertyValue('--affix-z-index').trim() || '10';
  }

  function setAffixed(next, metrics) {
    if (next === affixed) {
      if (next && metrics) {
        applyAffixStyles(metrics.targetRect, metrics.width, metrics.left);
      }

      return;
    }

    affixed = next;
    root.classList.toggle('is-affixed', affixed);
    affixEl.classList.toggle('is-fixed', affixed);

    if (affixed) {
      const height = affixEl.offsetHeight;
      placeholder.style.height = `${height}px`;
      placeholder.style.width = `${metrics.width}px`;
      placeholder.hidden = false;
      applyAffixStyles(metrics.targetRect, metrics.width, metrics.left);
    } else {
      placeholder.hidden = true;
      placeholder.style.height = '';
      placeholder.style.width = '';
      clearAffixStyles();
    }
  }

  function measure() {
    if (ticking) {
      return;
    }

    ticking = true;

    requestAnimationFrame(() => {
      ticking = false;

      const targetRect = getTargetRect();
      const rootRect = root.getBoundingClientRect();
      const referenceRect = affixed
        ? placeholder.getBoundingClientRect()
        : rootRect;
      const width = referenceRect.width || rootRect.width;
      const left = referenceRect.left;
      const metrics = { targetRect, width, left };
      let nextAffixed = affixed;

      if (useBottom) {
        const bottomGap = targetRect.bottom - referenceRect.bottom;
        nextAffixed = bottomGap <= offsetBottom;

        if (nextAffixed && scrollContainer) {
          const affixHeightBottom = affixEl.offsetHeight;
          const containerTopGap = referenceRect.bottom - targetRect.top;

          if (containerTopGap < affixHeightBottom + offsetBottom) {
            nextAffixed = false;
          }
        }
      } else {
        const topGap = referenceRect.top - targetRect.top;
        nextAffixed = topGap <= offsetTop;

        if (nextAffixed && scrollContainer) {
          const affixHeight = affixEl.offsetHeight;
          const containerBottomGap = targetRect.bottom - referenceRect.top;

          if (containerBottomGap < affixHeight + offsetTop) {
            nextAffixed = false;
          }
        }
      }

      setAffixed(nextAffixed, metrics);
    });
  }

  const scrollTarget = scrollContainer || window;

  scrollTarget.addEventListener('scroll', measure, { passive: true });

  if (scrollContainer) {
    window.addEventListener('scroll', measure, {
      passive: true,
      capture: true,
    });
  }

  window.addEventListener('resize', measure, { passive: true });
  measure();
}

/**
 * @param {ParentNode} [root=document]
 */
export function initAffixes(root = document) {
  root.querySelectorAll('[data-affix]').forEach(initAffixRoot);
}
