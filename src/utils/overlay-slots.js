import { Children, Fragment, isValidElement } from 'react';

const TRIGGER_MODES = new Set(['click', 'hover']);

export function resolveOverlayTriggerProp(triggerProp, defaultMode = 'click') {
  if (TRIGGER_MODES.has(triggerProp)) {
    return { mode: triggerProp, slot: undefined };
  }

  if (triggerProp != null && triggerProp !== false) {
    return { mode: defaultMode, slot: triggerProp };
  }

  return { mode: defaultMode, slot: undefined };
}

export function resolvePopoverTriggerProp(triggerProp) {
  return resolveOverlayTriggerProp(triggerProp, 'click');
}

function flattenChildren(children) {
  const result = [];

  Children.forEach(children, (child) => {
    if (child == null || child === false) return;

    if (!isValidElement(child)) {
      const text = String(child).trim();
      if (text) result.push(child);
      return;
    }

    if (child.type === Fragment) {
      result.push(...flattenChildren(child.props.children));
      return;
    }

    result.push(child);
  });

  return result;
}

function classNameIncludes(value, token) {
  if (typeof value === 'string') return new RegExp(`\\b${token}\\b`).test(value);
  if (Array.isArray(value)) {
    return value.some((item) => classNameIncludes(item, token));
  }
  return false;
}

function hasTriggerClass(element, triggerClass) {
  return isValidElement(element) && classNameIncludes(element.props?.className, triggerClass);
}

function hasCloseAttr(element, closeAttr) {
  if (!isValidElement(element)) return false;
  const props = element.props ?? {};
  return props[closeAttr] != null;
}

function combineSlotItems(items) {
  if (!items.length) return null;
  if (items.length === 1) return items[0];
  return items;
}

export function partitionOverlayChildren(children, {
  explicitTrigger,
  explicitFooter = null,
  triggerClass,
  closeAttr,
} = {}) {
  const items = flattenChildren(children);
  const triggerItems = [];
  const footerItems = [];
  const bodyItems = [];

  if (explicitTrigger != null && explicitTrigger !== false) {
    triggerItems.push(explicitTrigger);
  }

  items.forEach((item) => {
    if (!explicitTrigger && triggerClass && hasTriggerClass(item, triggerClass)) {
      triggerItems.push(item);
      return;
    }

    if (explicitFooter == null && closeAttr && hasCloseAttr(item, closeAttr)) {
      footerItems.push(item);
      return;
    }

    bodyItems.push(item);
  });

  return {
    trigger: combineSlotItems(triggerItems),
    body: bodyItems.length ? bodyItems : null,
    footer: explicitFooter ?? combineSlotItems(footerItems),
  };
}

export function partitionPopoverSlots(children, explicitTrigger, explicitFooter) {
  return partitionOverlayChildren(children, {
    explicitTrigger,
    explicitFooter,
    triggerClass: 'popover_trigger',
    closeAttr: 'data-popover-close',
  });
}

export function partitionTooltipSlots(children, explicitTrigger) {
  const { trigger, body } = partitionOverlayChildren(children, {
    explicitTrigger,
    triggerClass: 'tooltip_trigger',
  });

  return { trigger, content: body };
}
