/**
 * Popover 인터랙션 — src/js/demo.js 로직을 Storybook에서 재현
 */

let documentListenersBound = false;
let popoverLayoutUpdateFrame = null;

function getPopoverPlacementSide(root) {
  if (root.classList.contains('popover_placement-left')) return 'left';
  if (root.classList.contains('popover_placement-right')) return 'right';
  if (
    root.classList.contains('popover_placement-top') ||
    root.classList.contains('popover_placement-top-center')
  ) {
    return 'top';
  }
  return 'bottom';
}

function getPopoverTriggerElement(root, panel) {
  const matched = root.querySelector('.popover_trigger');
  if (!matched || panel.contains(matched)) {
    return Array.from(root.children).find(
      (child) => child !== panel && child.nodeType === 1,
    );
  }

  const focusable = matched.querySelector(
    'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled)',
  );

  return focusable || matched;
}

function clampPopoverValue(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizePopoverArrowAlign(align, side) {
  if (align === 'start') {
    return side === 'left' || side === 'right' ? 'top' : 'left';
  }
  if (align === 'end') {
    return side === 'left' || side === 'right' ? 'bottom' : 'right';
  }
  return align;
}

function getPopoverTriggerAxisPoint(triggerRect, side, align) {
  const point = normalizePopoverArrowAlign(align, side);

  if (side === 'left' || side === 'right') {
    if (point === 'top') return triggerRect.top;
    if (point === 'bottom') return triggerRect.bottom;
    return triggerRect.top + triggerRect.height / 2;
  }

  if (point === 'left') return triggerRect.left;
  if (point === 'right') return triggerRect.right;
  return triggerRect.left + triggerRect.width / 2;
}

function usesPopoverArrowJs(root) {
  return (
    root.classList.contains('popover_arrow-anchor-target') ||
    root.classList.contains('popover_arrow-anchor-mixed')
  );
}

function usesPopoverPanelJs(root) {
  return root.classList.contains('popover_arrow-anchor-mixed');
}

function resetPopoverPanelInlineStyles(panel) {
  panel.style.left = '';
  panel.style.right = '';
  panel.style.top = '';
  panel.style.bottom = '';
  panel.style.transform = '';
}

function updatePopoverPanelPosition(root) {
  const panel = root.querySelector('.popover_panel');
  if (!panel) return;

  if (!usesPopoverPanelJs(root)) {
    resetPopoverPanelInlineStyles(panel);
    return;
  }

  const trigger = getPopoverTriggerElement(root, panel);
  if (!trigger) return;

  const panelAlign = root.getAttribute('data-panel-align') || 'start';
  const side = getPopoverPlacementSide(root);
  const triggerW = trigger.offsetWidth;
  const triggerH = trigger.offsetHeight;
  const panelW = panel.offsetWidth;
  const panelH = panel.offsetHeight;

  resetPopoverPanelInlineStyles(panel);

  if (side === 'bottom') {
    panel.style.top = 'calc(100% + var(--popover-offset-bottom))';
    let left = 0;
    if (panelAlign === 'center') left = (triggerW - panelW) / 2;
    if (panelAlign === 'end') left = triggerW - panelW;
    panel.style.left = `${left}px`;
    return;
  }

  if (side === 'top') {
    panel.style.top = 'auto';
    panel.style.bottom = 'calc(100% + var(--popover-offset-top))';
    let left = 0;
    if (panelAlign === 'center') left = (triggerW - panelW) / 2;
    if (panelAlign === 'end') left = triggerW - panelW;
    panel.style.left = `${left}px`;
    return;
  }

  if (side === 'left') {
    panel.style.top = 'auto';
    panel.style.bottom = 'auto';
    panel.style.left = 'auto';
    panel.style.right = 'calc(100% + var(--popover-offset-left))';
    let top = 0;
    if (panelAlign === 'center') top = (triggerH - panelH) / 2;
    if (panelAlign === 'end') top = triggerH - panelH;
    panel.style.top = `${top}px`;
    return;
  }

  if (side === 'right') {
    panel.style.top = 'auto';
    panel.style.bottom = 'auto';
    panel.style.left = 'calc(100% + var(--popover-offset-right))';
    let top = 0;
    if (panelAlign === 'center') top = (triggerH - panelH) / 2;
    if (panelAlign === 'end') top = triggerH - panelH;
    panel.style.top = `${top}px`;
  }
}

function getPopoverArrowEdgeInset(panel, arrowSize) {
  const inset = parseFloat(
    getComputedStyle(panel).getPropertyValue('--popover-arrow-edge-inset'),
  );
  if (Number.isFinite(inset) && inset > 0) return inset;
  return arrowSize / 2 + 4;
}

function updatePopoverArrowPosition(root) {
  const panel = root.querySelector('.popover_panel');
  if (!panel) return;

  if (!usesPopoverArrowJs(root)) {
    panel.style.removeProperty('--popover-arrow-position');
    return;
  }

  const arrow = panel.querySelector('.popover_arrow');
  const trigger = getPopoverTriggerElement(root, panel);
  const visible =
    root.classList.contains('is-open') || !panel.hasAttribute('hidden');

  if (!arrow || !trigger || !visible) return;

  const triggerRect = trigger.getBoundingClientRect();
  const panelRect = panel.getBoundingClientRect();
  const side = getPopoverPlacementSide(root);
  const align = root.getAttribute('data-arrow-target-align') || 'center';
  const arrowSize = parseFloat(getComputedStyle(arrow).width) || 8;
  const inset = getPopoverArrowEdgeInset(panel, arrowSize);
  let position;

  if (side === 'left' || side === 'right') {
    position =
      getPopoverTriggerAxisPoint(triggerRect, side, align) - panelRect.top;
    position = clampPopoverValue(position, inset, panelRect.height - inset);
  } else {
    position =
      getPopoverTriggerAxisPoint(triggerRect, side, align) - panelRect.left;
    position = clampPopoverValue(position, inset, panelRect.width - inset);
  }

  panel.style.setProperty('--popover-arrow-position', `${position}px`);
}

function updatePopoverLayout(popover) {
  updatePopoverPanelPosition(popover);
  updatePopoverArrowPosition(popover);
}

function schedulePopoverLayoutUpdates() {
  if (popoverLayoutUpdateFrame) return;

  popoverLayoutUpdateFrame = requestAnimationFrame(() => {
    popoverLayoutUpdateFrame = null;
    document
      .querySelectorAll(
        '.popover.popover_arrow-anchor-target.is-open, .popover.popover_arrow-anchor-mixed.is-open',
      )
      .forEach(updatePopoverLayout);
  });
}

function setPopoverOpen(popover, open) {
  const trigger = popover.querySelector('.popover_trigger');
  const panel = popover.querySelector('.popover_panel');

  popover.classList.toggle('is-open', open);

  if (trigger) {
    trigger.setAttribute('aria-expanded', String(open));
  }

  if (panel) {
    if (open) {
      panel.removeAttribute('hidden');
      // display·레이아웃 반영 후 측정 (arrow-anchor target/mixed)
      requestAnimationFrame(() => {
        updatePopoverLayout(popover);
        requestAnimationFrame(() => {
          updatePopoverLayout(popover);
        });
      });
      if (popover.getAttribute('data-popover-trigger') !== 'hover') {
        const closeBtn = panel.querySelector('.popover_close');
        if (closeBtn) {
          requestAnimationFrame(() => {
            closeBtn.focus();
          });
        }
      }
    } else {
      panel.setAttribute('hidden', '');
      panel.style.removeProperty('--popover-arrow-position');
      resetPopoverPanelInlineStyles(panel);
    }
  }
}

function closeAllPopovers(except) {
  document.querySelectorAll('[data-popover].is-open').forEach((popover) => {
    if (popover !== except) {
      setPopoverOpen(popover, false);
    }
  });
}

function initPopover(popover) {
  if (popover._sbPopoverInit) return;
  popover._sbPopoverInit = true;

  const trigger = popover.querySelector('.popover_trigger');
  const panel = popover.querySelector('.popover_panel');

  if (
    !trigger ||
    !panel ||
    popover.classList.contains('is-disabled') ||
    trigger.disabled
  ) {
    return;
  }

  const triggerMode = popover.getAttribute('data-popover-trigger') || 'click';
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
      setPopoverOpen(popover, false);
    }, 120);
  }

  if (triggerMode === 'hover') {
    popover.addEventListener('mouseenter', () => {
      clearHoverTimer();
      setPopoverOpen(popover, true);
    });

    popover.addEventListener('mouseleave', scheduleClose);

    trigger.addEventListener('focus', () => {
      clearHoverTimer();
      setPopoverOpen(popover, true);
    });

    trigger.addEventListener('blur', () => {
      scheduleClose();
    });
  } else {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const open = popover.classList.contains('is-open');

      if (open) {
        setPopoverOpen(popover, false);
      } else {
        closeAllPopovers(popover);
        setPopoverOpen(popover, true);
      }
    });
  }

  popover.querySelectorAll('[data-popover-close]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      setPopoverOpen(popover, false);
      trigger.focus();
    });
  });

  if (popover.classList.contains('is-open')) {
    const openPanel = popover.querySelector('.popover_panel');
    if (openPanel) {
      openPanel.removeAttribute('hidden');
    }
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'true');
    }
    updatePopoverLayout(popover);
  }
}

function bindDocumentListeners() {
  if (documentListenersBound) return;
  documentListenersBound = true;

  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-popover]')) {
      closeAllPopovers();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllPopovers();
    }
  });

  window.addEventListener('resize', schedulePopoverLayoutUpdates);
}

/**
 * @param {ParentNode} [root=document]
 */
export function initPopovers(root = document) {
  bindDocumentListeners();
  root.querySelectorAll('[data-popover]').forEach(initPopover);

  // Docs·Canvas 마운트 직후 이미 열린(arrow-anchor) 패널 레이아웃 보정
  requestAnimationFrame(() => {
    root
      .querySelectorAll(
        '.popover.popover_arrow-anchor-target.is-open, .popover.popover_arrow-anchor-mixed.is-open',
      )
      .forEach(updatePopoverLayout);
  });
}
