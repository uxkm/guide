'use client';

import { cloneElement, isValidElement, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useDropdownDemoCode } from '@/hooks/useDemoCode';
import { toCssSize } from '@/utils/table-column-sizing';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_PLACEMENTS = new Set(['end', 'top']);
const MENU_ITEM_SELECTOR =
  '.menu_link:not(.is-disabled):not([aria-disabled="true"]), [role="menuitem"]:not(.is-disabled):not([aria-disabled="true"]), [role="option"]:not(.is-disabled):not([aria-disabled="true"])';

export default function Dropdown({
  open,
  defaultOpen = false,
  onOpenChange,
  disabled,
  placement,
  fit,
  closeOnSelect = false,
  maxVisibleItems,
  menuWidth,
  menuMinWidth,
  triggerContent,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const reactId = useId().replace(/:/g, '');
  const menuId = `dropdown-menu-${reactId}`;
  const resolvedPlacement = VALID_PLACEMENTS.has(placement) ? placement : undefined;
  const controlled = open != null;
  const isOpen = controlled ? Boolean(open) : internalOpen;

  function setOpen(nextOpen) {
    if (disabled || nextOpen === isOpen) return;
    if (!controlled) {
      setInternalOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  }

  function focusMenuItem(position = 'active') {
    requestAnimationFrame(() => {
      const root = rootRef.current;
      if (!root) return;

      const items = Array.from(root.querySelectorAll(MENU_ITEM_SELECTOR));
      const active = items.find(
        (item) =>
          item.classList.contains('is-active') ||
          item.getAttribute('aria-selected') === 'true' ||
          item.getAttribute('aria-current') === 'page',
      );
      const target = position === 'last' ? items.at(-1) : active || items[0];
      target?.focus();
    });
  }

  function focusTrigger() {
    rootRef.current?.querySelector('.dropdown_trigger')?.focus();
  }

  useEffect(() => {
    if (!isOpen) return undefined;

    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen, controlled, disabled, onOpenChange]);

  useDropdownDemoCode(
    {
      open: isOpen,
      defaultOpen,
      disabled,
      placement: resolvedPlacement,
      fit,
      closeOnSelect,
      maxVisibleItems,
      menuWidth,
      menuMinWidth,
    },
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['dropdown'];
    if (isOpen) classes.push('is-open');
    if (disabled) classes.push('is-disabled');
    if (resolvedPlacement === 'end') classes.push('dropdown_placement-end');
    if (resolvedPlacement === 'top') classes.push('dropdown_placement-top');
    if (fit) classes.push('dropdown_fit');
    return classes;
  }, [isOpen, disabled, resolvedPlacement, fit]);

  const menuClass = useMemo(() => {
    const classes = ['dropdown_menu'];
    if (maxVisibleItems != null) classes.push('dropdown_menu-scrollable');
    return classes;
  }, [maxVisibleItems]);

  const menuStyle = useMemo(() => {
    const style = {};
    if (maxVisibleItems != null) {
      style['--dropdown-max-visible-items'] = maxVisibleItems;
    }
    if (menuWidth != null) {
      style.width = toCssSize(menuWidth);
    }
    if (menuMinWidth != null) {
      style.minWidth = toCssSize(menuMinWidth);
    }
    return style;
  }, [maxVisibleItems, menuWidth, menuMinWidth]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  function handleTriggerClick(event) {
    const trigger = event.currentTarget;
    if (disabled || trigger.disabled || trigger.getAttribute('aria-disabled') === 'true') {
      event.preventDefault();
      return;
    }

    setOpen(!isOpen);
  }

  function handleTriggerKeyDown(event) {
    if (disabled) return;

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!isOpen) setOpen(true);
      focusMenuItem(event.key === 'ArrowUp' ? 'last' : 'active');
    } else if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      setOpen(false);
    }
  }

  function handleMenuClick(event) {
    const item = event.target.closest(MENU_ITEM_SELECTOR);
    if (!item || !event.currentTarget.contains(item)) return;

    if (closeOnSelect) {
      setOpen(false);
      focusTrigger();
    }
  }

  function handleMenuKeyDown(event) {
    const items = Array.from(event.currentTarget.querySelectorAll(MENU_ITEM_SELECTOR));
    const currentIndex = items.indexOf(document.activeElement);
    let target = null;

    if (event.key === 'ArrowDown') {
      target = items[Math.min(currentIndex + 1, items.length - 1)] || items[0];
    } else if (event.key === 'ArrowUp') {
      target = items[Math.max(currentIndex - 1, 0)] || items.at(-1);
    } else if (event.key === 'Home') {
      target = items[0];
    } else if (event.key === 'End') {
      target = items.at(-1);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      focusTrigger();
      return;
    }

    if (target) {
      event.preventDefault();
      target.focus();
    }
  }

  const resolvedTrigger = isValidElement(triggerContent)
    ? cloneElement(triggerContent, {
        className: cn('dropdown_trigger', triggerContent.props.className),
        expanded: typeof triggerContent.type === 'string' ? undefined : isOpen,
        'aria-expanded': String(isOpen),
        'aria-controls': menuId,
        disabled: disabled || triggerContent.props.disabled,
        onClick(event) {
          triggerContent.props.onClick?.(event);
          if (!event.defaultPrevented) handleTriggerClick(event);
        },
        onKeyDown(event) {
          triggerContent.props.onKeyDown?.(event);
          if (!event.defaultPrevented) handleTriggerKeyDown(event);
        },
      })
    : triggerContent;

  return (
    <div
      ref={rootRef}
      className={cn(rootClass, className)}
      data-dropdown=""
      data-react-dropdown=""
      {...domRest}
    >
      <div data-demo-slot="trigger">{resolvedTrigger}</div>
      <div
        id={menuId}
        className={cn(menuClass)}
        style={menuStyle}
        role="menu"
        aria-hidden={!isOpen}
        onClick={handleMenuClick}
        onKeyDown={handleMenuKeyDown}
        data-demo-slot="default"
      >
        {children}
      </div>
    </div>
  );
}
