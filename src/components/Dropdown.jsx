import { useId, useMemo, useRef } from 'react';
import { useDropdownDemoCode } from '@/hooks/useDemoCode';
import { toCssSize } from '@/utils/table-column-sizing';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_PLACEMENTS = new Set(['end', 'top']);

export default function Dropdown({
  open,
  disabled,
  placement,
  fit,
  maxVisibleItems,
  menuWidth,
  menuMinWidth,
  triggerContent,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const reactId = useId().replace(/:/g, '');
  const menuId = `dropdown-menu-${reactId}`;
  const resolvedPlacement = VALID_PLACEMENTS.has(placement) ? placement : undefined;

  useDropdownDemoCode(
    {
      open,
      disabled,
      placement: resolvedPlacement,
      fit,
      maxVisibleItems,
      menuWidth,
      menuMinWidth,
    },
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['dropdown'];
    if (open) classes.push('is-open');
    if (disabled) classes.push('is-disabled');
    if (resolvedPlacement === 'end') classes.push('dropdown_placement-end');
    if (resolvedPlacement === 'top') classes.push('dropdown_placement-top');
    if (fit) classes.push('dropdown_fit');
    return classes;
  }, [open, disabled, resolvedPlacement, fit]);

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

  return (
    <div ref={rootRef} className={cn(rootClass, className)} data-dropdown="" {...domRest}>
      <div data-demo-slot="trigger">{triggerContent}</div>
      <div
        id={menuId}
        className={cn(menuClass)}
        style={menuStyle}
        role="menu"
        data-demo-slot="default"
      >
        {children}
      </div>
    </div>
  );
}
