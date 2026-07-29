/**
 * Tooltip 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
 */

let documentListenersBound = false;
let tooltipLayoutUpdateFrame = null;

function getTooltipPlacementSide(root) {
  if (root.classList.contains('tooltip_placement-left')) return 'left';
  if (root.classList.contains('tooltip_placement-right')) return 'right';
  if (
    root.classList.contains('tooltip_placement-top') ||
    root.classList.contains('tooltip_placement-top-start') ||
    root.classList.contains('tooltip_placement-top-end')
  ) {
    return 'top';
  }
  return 'bottom';
}

function getTooltipTriggerElement(root, bubble) {
  const matched = root.querySelector('.tooltip_trigger');
  if (!matched || bubble.contains(matched)) {
    return Array.from(root.children).find(
      (child) => child !== bubble && child.nodeType === 1,
    );
  }

  const focusable = matched.querySelector(
    'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled)',
  );

  return focusable || matched;
}

function clampValue(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizeArrowAlign(align, side) {
  if (align === 'start') {
    return side === 'left' || side === 'right' ? 'top' : 'left';
  }
  if (align === 'end') {
    return side === 'left' || side === 'right' ? 'bottom' : 'right';
  }
  return align;
}

function getTriggerAxisPoint(triggerRect, side, align) {
  const point = normalizeArrowAlign(align, side);

  if (side === 'left' || side === 'right') {
    if (point === 'top') return triggerRect.top;
    if (point === 'bottom') return triggerRect.bottom;
    return triggerRect.top + triggerRect.height / 2;
  }

  if (point === 'left') return triggerRect.left;
  if (point === 'right') return triggerRect.right;
  return triggerRect.left + triggerRect.width / 2;
}

function usesTooltipArrowJs(root) {
  return (
    root.classList.contains('tooltip_arrow-anchor-target') ||
    root.classList.contains('tooltip_arrow-anchor-mixed')
  );
}

function usesTooltipPanelJs(root) {
  return root.classList.contains('tooltip_arrow-anchor-mixed');
}

function resetTooltipBubbleInlineStyles(bubble) {
  bubble.style.left = '';
  bubble.style.right = '';
  bubble.style.top = '';
  bubble.style.bottom = '';
  bubble.style.transform = '';
}

function updateTooltipPanelPosition(root) {
  const bubble = root.querySelector('.tooltip_bubble');
  if (!bubble) return;

  if (!usesTooltipPanelJs(root)) {
    resetTooltipBubbleInlineStyles(bubble);
    return;
  }

  const trigger = getTooltipTriggerElement(root, bubble);
  if (!trigger) return;

  const panelAlign = root.getAttribute('data-panel-align') || 'center';
  const side = getTooltipPlacementSide(root);
  const triggerW = trigger.offsetWidth;
  const triggerH = trigger.offsetHeight;
  const panelW = bubble.offsetWidth;
  const panelH = bubble.offsetHeight;

  resetTooltipBubbleInlineStyles(bubble);

  if (side === 'bottom') {
    bubble.style.top = 'calc(100% + var(--tooltip-offset-bottom))';
    let left = (triggerW - panelW) / 2;
    if (panelAlign === 'start') left = 0;
    if (panelAlign === 'end') left = triggerW - panelW;
    bubble.style.left = `${left}px`;
    return;
  }

  if (side === 'top') {
    bubble.style.top = 'auto';
    bubble.style.bottom = 'calc(100% + var(--tooltip-offset-top))';
    let left = (triggerW - panelW) / 2;
    if (panelAlign === 'start') left = 0;
    if (panelAlign === 'end') left = triggerW - panelW;
    bubble.style.left = `${left}px`;
    return;
  }

  if (side === 'left') {
    bubble.style.top = 'auto';
    bubble.style.bottom = 'auto';
    bubble.style.left = 'auto';
    bubble.style.right = 'calc(100% + var(--tooltip-offset-left))';
    let top = (triggerH - panelH) / 2;
    if (panelAlign === 'start') top = 0;
    if (panelAlign === 'end') top = triggerH - panelH;
    bubble.style.top = `${top}px`;
    return;
  }

  if (side === 'right') {
    bubble.style.top = 'auto';
    bubble.style.bottom = 'auto';
    bubble.style.left = 'calc(100% + var(--tooltip-offset-right))';
    let top = (triggerH - panelH) / 2;
    if (panelAlign === 'start') top = 0;
    if (panelAlign === 'end') top = triggerH - panelH;
    bubble.style.top = `${top}px`;
  }
}

function getTooltipArrowEdgeInset(bubble, arrowSize) {
  const inset = parseFloat(
    getComputedStyle(bubble).getPropertyValue('--tooltip-arrow-edge-inset'),
  );
  if (Number.isFinite(inset) && inset > 0) return inset;
  return arrowSize / 2 + 4;
}

function updateTooltipArrowPosition(root) {
  const bubble = root.querySelector('.tooltip_bubble');
  if (!bubble) return;

  if (!usesTooltipArrowJs(root)) {
    bubble.style.removeProperty('--tooltip-arrow-position');
    return;
  }

  const arrow = bubble.querySelector('.tooltip_arrow');
  const trigger = getTooltipTriggerElement(root, bubble);
  const visible =
    root.classList.contains('is-open') || !bubble.hasAttribute('hidden');

  if (!arrow || !trigger || !visible) return;

  const triggerRect = trigger.getBoundingClientRect();
  const panelRect = bubble.getBoundingClientRect();
  const side = getTooltipPlacementSide(root);
  const align = root.getAttribute('data-arrow-target-align') || 'center';
  const arrowSize = parseFloat(getComputedStyle(arrow).width) || 6;
  const inset = getTooltipArrowEdgeInset(bubble, arrowSize);
  let position;

  if (side === 'left' || side === 'right') {
    position = getTriggerAxisPoint(triggerRect, side, align) - panelRect.top;
    position = clampValue(position, inset, panelRect.height - inset);
  } else {
    position = getTriggerAxisPoint(triggerRect, side, align) - panelRect.left;
    position = clampValue(position, inset, panelRect.width - inset);
  }

  bubble.style.setProperty('--tooltip-arrow-position', `${position}px`);
}

function updateTooltipLayout(tooltip) {
  updateTooltipPanelPosition(tooltip);
  updateTooltipArrowPosition(tooltip);
}

function scheduleTooltipLayoutUpdates() {
  if (tooltipLayoutUpdateFrame) return;

  tooltipLayoutUpdateFrame = requestAnimationFrame(() => {
    tooltipLayoutUpdateFrame = null;
    document
      .querySelectorAll(
        '.tooltip.tooltip_arrow-anchor-target.is-open, .tooltip.tooltip_arrow-anchor-mixed.is-open',
      )
      .forEach(updateTooltipLayout);
  });
}

function focusTooltipTrigger(tooltip) {
  const triggerWrap = tooltip.querySelector('.tooltip_trigger');
  if (!triggerWrap) return;

  const focusable =
    triggerWrap.querySelector(
      'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',
    ) || (triggerWrap.tabIndex >= 0 ? triggerWrap : null);

  if (focusable) focusable.focus();
}

function setTooltipOpen(tooltip, open) {
  const trigger = tooltip.querySelector('.tooltip_trigger');
  const bubble = tooltip.querySelector('.tooltip_bubble');

  tooltip.classList.toggle('is-open', open);

  if (trigger && tooltip.getAttribute('data-tooltip-trigger') === 'click') {
    trigger.setAttribute('aria-expanded', String(open));
  }

  if (bubble) {
    if (open) {
      bubble.removeAttribute('hidden');
      requestAnimationFrame(() => {
        updateTooltipLayout(tooltip);
        requestAnimationFrame(() => {
          updateTooltipLayout(tooltip);
        });
      });
      if (tooltip.getAttribute('data-tooltip-trigger') === 'click') {
        const closeBtn = bubble.querySelector('.tooltip_close');
        if (closeBtn) {
          requestAnimationFrame(() => {
            closeBtn.focus();
          });
        }
      }
    } else {
      bubble.setAttribute('hidden', '');
      bubble.style.removeProperty('--tooltip-arrow-position');
      resetTooltipBubbleInlineStyles(bubble);
    }
  }
}

function closeAllTooltips(except) {
  document.querySelectorAll('[data-tooltip].is-open').forEach((tooltip) => {
    if (tooltip !== except) {
      setTooltipOpen(tooltip, false);
    }
  });
}

function initTooltip(tooltip) {
  if (tooltip._sbTooltipInit) return;
  tooltip._sbTooltipInit = true;

  const trigger = tooltip.querySelector('.tooltip_trigger');
  const bubble = tooltip.querySelector('.tooltip_bubble');

  if (!trigger || !bubble || tooltip.classList.contains('is-disabled')) {
    return;
  }

  const triggerMode = tooltip.getAttribute('data-tooltip-trigger') || 'hover';
  let hoverTimer = null;

  function clearHoverTimer() {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
  }

  function scheduleClose() {
    clearHoverTimer();
    hoverTimer = setTimeout(() => {
      setTooltipOpen(tooltip, false);
    }, 120);
  }

  if (triggerMode === 'click') {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const open = tooltip.classList.contains('is-open');

      if (open) {
        setTooltipOpen(tooltip, false);
      } else {
        closeAllTooltips(tooltip);
        setTooltipOpen(tooltip, true);
      }
    });

    tooltip.querySelectorAll('[data-tooltip-close]').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        setTooltipOpen(tooltip, false);
        focusTooltipTrigger(tooltip);
      });
    });
  } else {
    tooltip.addEventListener('mouseenter', () => {
      clearHoverTimer();
      setTooltipOpen(tooltip, true);
    });

    tooltip.addEventListener('mouseleave', scheduleClose);

    trigger.addEventListener('focus', () => {
      clearHoverTimer();
      setTooltipOpen(tooltip, true);
    });

    trigger.addEventListener('blur', scheduleClose);
  }

  if (tooltip.classList.contains('is-open')) {
    bubble.removeAttribute('hidden');
    updateTooltipLayout(tooltip);
  }
}

function bindDocumentListeners() {
  if (documentListenersBound) return;
  documentListenersBound = true;

  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-tooltip]')) {
      closeAllTooltips();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllTooltips();
    }
  });

  window.addEventListener('resize', scheduleTooltipLayoutUpdates);
}

/**
 * @param {ParentNode} [root=document]
 */
export function initTooltips(root = document) {
  bindDocumentListeners();
  root.querySelectorAll('[data-tooltip]').forEach(initTooltip);

  requestAnimationFrame(() => {
    root
      .querySelectorAll(
        '.tooltip.tooltip_arrow-anchor-target.is-open, .tooltip.tooltip_arrow-anchor-mixed.is-open',
      )
      .forEach(updateTooltipLayout);
  });
}
