import { useId, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('MenuSubmenu', {
  booleanProps: new Set(['expanded']),
  selfClosing: false,
});

export default function MenuSubmenu({
  ripple,
  label,
  expanded,
  submenuId: submenuIdProp,
  icon,
  children,
  className,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });
  const rootRef = useRef(null);
  const reactId = useId().replace(/:/g, '');
  const submenuId = submenuIdProp || `menu-sub-${reactId}`;

  useComponentDemoCode(
    formatCode,
    { ripple, label, expanded, submenuId: submenuIdProp },
    createDemoSlots({ default: children, icon }),
    rootRef,
    { className, ...rest },
  );

  return (
    <li
      ref={rootRef}
      className={cn('menu_item', 'menu_item-submenu', className)}
      aria-expanded={expanded ? 'true' : 'false'}
      {...rest}
    >
      <Button
        variant="text"
        className="menu_link"
        expanded={Boolean(expanded)}
        aria-controls={submenuId}
        iconBefore={icon}
        iconAfter={<Icon name="chevron-down" className="menu_arrow" />}
        {...rippleAttrs}
      >
        {label ? <span className="menu_label">{label}</span> : null}
      </Button>
      <ul id={submenuId} className="menu_submenu">
        {children}
      </ul>
    </li>
  );
}
