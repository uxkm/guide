import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { toCssSize } from '@/utils/table-column-sizing';
import { useDropdownDemoCode } from '@/hooks/useDemoCode';

export default function Dropdown({
  open,
  disabled,
  placement,
  fit,
  maxVisibleItems,
  menuWidth,
  menuMinWidth,
  trigger,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const props = { open, disabled, placement, fit, maxVisibleItems, menuWidth, menuMinWidth };
  const menuId = useMemo(
    () => `dropdown-menu-${Math.random().toString(36).slice(2, 9)}`,
    [],
  );

  useDropdownDemoCode(props, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'dropdown',
    open && 'is-open',
    disabled && 'is-disabled',
    placement === 'end' && 'dropdown_placement-end',
    placement === 'top' && 'dropdown_placement-top',
    fit && 'dropdown_fit',
    className,
  );

  const menuClass = cn(
    'dropdown_menu',
    maxVisibleItems != null && 'dropdown_menu-scrollable',
  );

  const menuStyle = {};
  if (maxVisibleItems != null) {
    menuStyle['--dropdown-max-visible-items'] = maxVisibleItems;
  }
  if (menuWidth != null) {
    menuStyle.width = toCssSize(menuWidth);
  }
  if (menuMinWidth != null) {
    menuStyle.minWidth = toCssSize(menuMinWidth);
  }

  return (
    <div ref={rootRef} className={rootClass} data-dropdown {...rest}>
      <div className="dropdown_trigger-host" data-demo-slot="trigger">
        {trigger}
      </div>
      <div
        id={menuId}
        className={menuClass}
        style={Object.keys(menuStyle).length ? menuStyle : undefined}
        role="menu"
        data-demo-slot="default"
      >
        {children}
      </div>
    </div>
  );
}
