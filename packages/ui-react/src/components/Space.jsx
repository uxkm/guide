import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_GAPS = new Set(['xs', 'sm', 'md', 'lg', 'xl']);

const formatCode = createComponentFormatter('Space', {
  defaults: { gap: 'md' },
  booleanProps: new Set(['vertical', 'wrap', 'block']),
});

export default function Space({
  vertical = false,
  wrap = false,
  block = false,
  gap = 'md',
  align,
  justify,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedGap = VALID_GAPS.has(gap) ? gap : 'md';

  useComponentDemoCode(
    formatCode,
    { vertical, wrap, block, gap: resolvedGap, align, justify },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['space'];
    if (vertical) classes.push('space_vertical');
    if (wrap) classes.push('space_wrap');
    if (block) classes.push('space_block');
    if (resolvedGap && resolvedGap !== 'md') classes.push(`space_gap-${resolvedGap}`);
    if (align) classes.push(`space_align-${align}`);
    if (justify) classes.push(`space_justify-${justify}`);
    return classes;
  }, [vertical, wrap, block, resolvedGap, align, justify]);

  const domRest = normalizeDomProps(rest);

  return (
    <div ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {children}
    </div>
  );
}
