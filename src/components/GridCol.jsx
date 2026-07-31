import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('GridCol', {
  selfClosing: false,
});

export default function GridCol({
  as: Component = 'div',
  span,
  spanMd,
  spanLg,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(
    formatCode,
    { as: Component === 'div' ? undefined : Component, span, spanMd, spanLg },
    demoSlots,
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(
    () => [
      span != null && `grid_col-span-${span}`,
      spanMd != null && `grid_col-span-md-${spanMd}`,
      spanLg != null && `grid_col-span-lg-${spanLg}`,
    ],
    [span, spanMd, spanLg],
  );

  const domRest = normalizeDomProps(rest);

  return (
    <Component ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {children}
    </Component>
  );
}
