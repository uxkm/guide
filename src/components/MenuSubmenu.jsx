import { useId, useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('MenuSubmenu', {
  booleanProps: new Set(['expanded']),
  selfClosing: false,
});

export default function MenuSubmenu({
  ripple,
  label,
  expanded = false,
  submenuId: submenuIdProp,
  icon,
  children,
}) {
  const props = { ripple, label, expanded, submenuId: submenuIdProp };
  const { rippleAttrs } = useRipple(props);
  const rootRef = useRef(null);
  const generatedId = useId().replace(/:/g, '');
  const submenuId = submenuIdProp || `menu-sub-${generatedId}`;
  const demoSlots = useMemo(() => createDemoSlots({ default: children, icon }), [children, icon]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, {});

  return (
    <li
      ref={rootRef}
      className="menu_item menu_item-submenu"
      aria-expanded={expanded ? 'true' : 'false'}
    >
      <Button
        variant="text"
        className="menu_link"
        aria-expanded={expanded ? 'true' : 'false'}
        aria-controls={submenuId}
        {...rippleAttrs}
        iconBefore={icon}
        iconAfter={<Icon name="chevron-down" className="menu_arrow" />}
      >
        {label && <span className="menu_label">{label}</span>}
      </Button>
      <ul id={submenuId} className="menu_submenu">
        {children}
      </ul>
    </li>
  );
}
