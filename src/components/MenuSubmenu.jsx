'use client';

import { useId, useRef, useState } from 'react';
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
  onExpandedChange,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });
  const rootRef = useRef(null);
  const reactId = useId().replace(/:/g, '');
  const submenuId = submenuIdProp || `menu-sub-${reactId}`;
  const [isExpanded, setIsExpanded] = useState(() => Boolean(expanded));

  useComponentDemoCode(
    formatCode,
    { ripple, label, expanded, submenuId: submenuIdProp },
    createDemoSlots({ default: children, icon }),
    rootRef,
    { className, ...rest },
  );

  function toggleSubmenu() {
    setIsExpanded((current) => {
      const next = !current;
      onExpandedChange?.(next);
      return next;
    });
  }

  return (
    <li
      ref={rootRef}
      className={cn('menu_item', 'menu_item-submenu', className)}
      aria-expanded={isExpanded ? 'true' : 'false'}
      {...rest}
    >
      <Button
        variant="text"
        className="menu_link"
        expanded={isExpanded}
        aria-controls={submenuId}
        onClick={toggleSubmenu}
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
