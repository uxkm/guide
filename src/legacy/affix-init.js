function parseAffixOffset(value, fallback) {
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function initAffix(root) {
  if (root.dataset.affixInit) return;

  const targetSelector = root.getAttribute('data-target');
  const scrollContainer = targetSelector ? document.querySelector(targetSelector) : null;
  const offsetTop = parseAffixOffset(root.getAttribute('data-offset-top'), 0);
  const useBottom = root.hasAttribute('data-offset-bottom');
  const offsetBottom = useBottom ? parseAffixOffset(root.getAttribute('data-offset-bottom'), 0) : 0;
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
    affixEl.style.position = 'fixed';
    affixEl.style.width = `${width}px`;
    affixEl.style.left = `${left}px`;
    affixEl.style.zIndex =
      getComputedStyle(root).getPropertyValue('--affix-z-index').trim() || '10';

    if (useBottom) {
      affixEl.style.bottom = '';
      affixEl.style.top = `${targetRect.bottom - affixEl.offsetHeight - offsetBottom}px`;
    } else {
      affixEl.style.bottom = '';
      affixEl.style.top = `${targetRect.top + offsetTop}px`;
    }
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
      placeholder.style.height = `${affixEl.offsetHeight}px`;
      placeholder.hidden = false;
      applyAffixStyles(metrics.targetRect, metrics.width, metrics.left);
    } else {
      placeholder.hidden = true;
      placeholder.style.height = '';
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
      const width = rootRect.width;
      const left = rootRect.left;
      const metrics = { targetRect, width, left };
      const referenceRect = affixed ? placeholder.getBoundingClientRect() : rootRect;
      let nextAffixed = affixed;

      if (useBottom) {
        const bottomGap = targetRect.bottom - rootRect.bottom;
        nextAffixed = bottomGap <= offsetBottom;

        if (affixed) {
          const placeholderBottomGap = targetRect.bottom - referenceRect.bottom;
          nextAffixed = placeholderBottomGap <= offsetBottom;
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
  window.addEventListener('resize', measure, { passive: true });
  measure();
}

export function initAffixAll(root = document) {
  root.querySelectorAll('[data-affix]').forEach(initAffix);
}
