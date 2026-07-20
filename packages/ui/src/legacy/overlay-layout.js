import { getTriggerAxisPoint } from '@/utils/overlay-arrow-align';

function getPlacementSide(root, prefix) {
  if (root.classList.contains(`${prefix}_placement-left`)) return 'left';
  if (root.classList.contains(`${prefix}_placement-right`)) return 'right';
  if (
    root.classList.contains(`${prefix}_placement-top`) ||
    root.classList.contains(`${prefix}_placement-top-center`) ||
    root.classList.contains(`${prefix}_placement-top-start`) ||
    root.classList.contains(`${prefix}_placement-top-end`)
  ) {
    return 'top';
  }
  return 'bottom';
}

function getTriggerElement(root, panel, triggerSelector) {
  const matched = root.querySelector(triggerSelector);
  if (!matched || panel.contains(matched)) {
    return [...root.children].find((child) => child !== panel && child.nodeType === Node.ELEMENT_NODE);
  }

  const focusable = matched.querySelector(
    'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled)',
  );

  return focusable || matched;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function usesArrowJs(root, config) {
  return (
    root.classList.contains(config.anchorTargetClass) || root.classList.contains(config.anchorMixedClass)
  );
}

function usesPanelJs(root, config) {
  return root.classList.contains(config.anchorMixedClass);
}

function resetPanelInlineStyles(panel) {
  panel.style.left = '';
  panel.style.right = '';
  panel.style.top = '';
  panel.style.bottom = '';
  panel.style.transform = '';
}

function updatePanelPosition(root, config) {
  const { panelSelector, triggerSelector, prefix, anchorMixedClass, defaultPanelAlign = 'start' } = config;
  const panel = root.querySelector(panelSelector);
  if (!panel) return;

  if (!usesPanelJs(root, config)) {
    resetPanelInlineStyles(panel);
    return;
  }

  const trigger = getTriggerElement(root, panel, triggerSelector);
  if (!trigger) return;

  const panelAlign = root.getAttribute('data-panel-align') || defaultPanelAlign;
  const side = getPlacementSide(root, prefix);
  const triggerW = trigger.offsetWidth;
  const triggerH = trigger.offsetHeight;
  const panelW = panel.offsetWidth;
  const panelH = panel.offsetHeight;

  resetPanelInlineStyles(panel);

  if (side === 'bottom') {
    panel.style.top = `calc(100% + var(--${prefix}-offset-bottom))`;
    let left = 0;
    if (panelAlign === 'center') left = (triggerW - panelW) / 2;
    if (panelAlign === 'end') left = triggerW - panelW;
    panel.style.left = `${left}px`;
    return;
  }

  if (side === 'top') {
    panel.style.top = 'auto';
    panel.style.bottom = `calc(100% + var(--${prefix}-offset-top))`;
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
    panel.style.right = `calc(100% + var(--${prefix}-offset-left))`;
    let top = 0;
    if (panelAlign === 'center') top = (triggerH - panelH) / 2;
    if (panelAlign === 'end') top = triggerH - panelH;
    panel.style.top = `${top}px`;
    return;
  }

  if (side === 'right') {
    panel.style.top = 'auto';
    panel.style.bottom = 'auto';
    panel.style.left = `calc(100% + var(--${prefix}-offset-right))`;
    let top = 0;
    if (panelAlign === 'center') top = (triggerH - panelH) / 2;
    if (panelAlign === 'end') top = triggerH - panelH;
    panel.style.top = `${top}px`;
  }
}

function getArrowEdgeInset(panel, prefix, arrowSize) {
  const inset = parseFloat(getComputedStyle(panel).getPropertyValue(`--${prefix}-arrow-edge-inset`));
  if (Number.isFinite(inset) && inset > 0) return inset;
  return arrowSize / 2 + 4;
}

function updateArrowPosition(root, config) {
  const { panelSelector, arrowSelector, triggerSelector, cssVar, prefix, anchorTargetClass, anchorMixedClass } =
    config;

  const panel = root.querySelector(panelSelector);
  if (!panel) return;

  if (!usesArrowJs(root, config)) {
    panel.style.removeProperty(cssVar);
    return;
  }

  const arrow = panel.querySelector(arrowSelector);
  const trigger = getTriggerElement(root, panel, triggerSelector);
  const visible = root.classList.contains('is-open') || !panel.hasAttribute('hidden');

  if (!arrow || !trigger || !visible) return;

  const triggerRect = trigger.getBoundingClientRect();
  const panelRect = panel.getBoundingClientRect();
  const side = getPlacementSide(root, prefix);
  const align = root.getAttribute('data-arrow-target-align') || 'center';
  const arrowSize = parseFloat(getComputedStyle(arrow).width) || 8;
  const inset = getArrowEdgeInset(panel, prefix, arrowSize);
  let position;

  if (side === 'left' || side === 'right') {
    position = getTriggerAxisPoint(triggerRect, side, align) - panelRect.top;
    position = clamp(position, inset, panelRect.height - inset);
  } else {
    position = getTriggerAxisPoint(triggerRect, side, align) - panelRect.left;
    position = clamp(position, inset, panelRect.width - inset);
  }

  panel.style.setProperty(cssVar, `${position}px`);
}

export function updateOverlayLayout(root, config) {
  updatePanelPosition(root, config);
  updateArrowPosition(root, config);
}

const POPOVER_LAYOUT_CONFIG = {
  anchorTargetClass: 'popover_arrow-anchor-target',
  anchorMixedClass: 'popover_arrow-anchor-mixed',
  panelSelector: '.popover_panel',
  arrowSelector: '.popover_arrow',
  triggerSelector: '.popover_trigger',
  cssVar: '--popover-arrow-position',
  prefix: 'popover',
  defaultPanelAlign: 'start',
};

const TOOLTIP_LAYOUT_CONFIG = {
  anchorTargetClass: 'tooltip_arrow-anchor-target',
  anchorMixedClass: 'tooltip_arrow-anchor-mixed',
  panelSelector: '.tooltip_bubble',
  arrowSelector: '.tooltip_arrow',
  triggerSelector: '.tooltip_trigger',
  cssVar: '--tooltip-arrow-position',
  prefix: 'tooltip',
  defaultPanelAlign: 'center',
};

export function updatePopoverLayout(popover) {
  updateOverlayLayout(popover, POPOVER_LAYOUT_CONFIG);
}

export function updateTooltipLayout(tooltip) {
  updateOverlayLayout(tooltip, TOOLTIP_LAYOUT_CONFIG);
}

let layoutUpdateFrame = null;

export function scheduleOverlayLayoutUpdates() {
  if (layoutUpdateFrame) return;

  layoutUpdateFrame = requestAnimationFrame(() => {
    layoutUpdateFrame = null;

    document
      .querySelectorAll(
        `.popover.${POPOVER_LAYOUT_CONFIG.anchorTargetClass}.is-open, .popover.${POPOVER_LAYOUT_CONFIG.anchorMixedClass}.is-open`,
      )
      .forEach(updatePopoverLayout);

    document
      .querySelectorAll(
        `.tooltip.${TOOLTIP_LAYOUT_CONFIG.anchorTargetClass}.is-open, .tooltip.${TOOLTIP_LAYOUT_CONFIG.anchorMixedClass}.is-open`,
      )
      .forEach(updateTooltipLayout);
  });
}

// 하위 호환
export { updatePopoverLayout as updatePopoverArrow, updateTooltipLayout as updateTooltipArrow, scheduleOverlayLayoutUpdates as scheduleOverlayArrowUpdates };
