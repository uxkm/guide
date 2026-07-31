'use client';

import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_GAPS = new Set(['xs', 'sm', 'md', 'lg', 'xl']);
const VALID_ALIGNMENTS = new Set(['start', 'center', 'end', 'baseline', 'stretch']);
const VALID_JUSTIFICATIONS = new Set(['start', 'center', 'end', 'between']);

const formatCode = createComponentFormatter('Space', {
  defaults: { gap: 'md', align: 'center', justify: 'start' },
  booleanProps: new Set(['vertical', 'wrap', 'block']),
});

export default function Space({
  vertical = false,
  wrap = false,
  block = false,
  gap = 'md',
  align = 'center',
  justify = 'start',
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedGap = VALID_GAPS.has(gap) ? gap : 'md';
  const resolvedAlign = VALID_ALIGNMENTS.has(align) ? align : 'center';
  const resolvedJustify = VALID_JUSTIFICATIONS.has(justify) ? justify : 'start';

  useComponentDemoCode(
    formatCode,
    {
      vertical,
      wrap,
      block,
      gap: resolvedGap,
      align: resolvedAlign,
      justify: resolvedJustify,
    },
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
    if (resolvedAlign !== 'center') classes.push(`space_align-${resolvedAlign}`);
    if (resolvedJustify !== 'start') classes.push(`space_justify-${resolvedJustify}`);
    return classes;
  }, [vertical, wrap, block, resolvedGap, resolvedAlign, resolvedJustify]);

  const domRest = normalizeDomProps(rest);

  return (
    <div ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {children}
    </div>
  );
}
