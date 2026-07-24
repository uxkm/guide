import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_MODES = new Set(['vertical', 'horizontal', 'inline']);

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
  const resolvedMode = VALID_MODES.has(mode) ? mode : 'vertical';

  useComponentDemoCode(
    formatCode,
    {
      mode: resolvedMode,
      bordered,
      compact,
      dark,
      ariaLabel,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['menu', `menu_${resolvedMode}`];
    if (bordered) classes.push('menu_bordered');
    if (compact) classes.push('menu_compact');
    if (dark) classes.push('menu_dark');
    return classes;
  }, [resolvedMode, bordered, compact, dark]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <nav
      ref={rootRef}
      className={cn(rootClass, className)}
      aria-label={ariaLabel}
      data-menu-selectable=""
      {...domRest}
    >
      <ul className="menu_list">{children}</ul>
    </nav>
  );
}
