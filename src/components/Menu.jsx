import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('Menu', {
  defaults: { mode: 'vertical' },
  booleanProps: new Set(['bordered', 'compact', 'dark']),
  selfClosing: false,
});

export default function Menu({
  mode = 'vertical',
  bordered,
  compact,
  dark,
  ariaLabel,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const props = { mode, bordered, compact, dark, ariaLabel };
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'menu',
    `menu_${mode}`,
    bordered && 'menu_bordered',
    compact && 'menu_compact',
    dark && 'menu_dark',
    className,
  );

  return (
    <nav ref={rootRef} className={rootClass} aria-label={ariaLabel} data-menu-selectable {...rest}>
      <ul className="menu_list">{children}</ul>
    </nav>
  );
}
