'use client';

import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_JUSTIFY = new Set(['start', 'center', 'end', 'between']);
const VALID_RATIOS = new Set(['1:1', '1:2', '2:1']);

const formatCode = createComponentFormatter('CardFooter', {
  defaults: { justify: 'start' },
  booleanProps: new Set(['between', 'flush', 'full']),
  selfClosing: false,
});

export default function CardFooter({
  between,
  justify = 'start',
  ratio,
  flush,
  full,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedJustify = between
    ? 'between'
    : VALID_JUSTIFY.has(justify)
      ? justify
      : 'start';
  const resolvedRatio = VALID_RATIOS.has(ratio) ? ratio : undefined;

  useComponentDemoCode(
    formatCode,
    {
      between,
      justify: between ? undefined : resolvedJustify,
      ratio: resolvedRatio,
      flush,
      full,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['card_footer', `card_footer-${resolvedJustify}`];
    if (resolvedRatio) {
      classes.push('card_footer-ratio', `card_footer-ratio-${resolvedRatio.replace(':', '-')}`);
    }
    if (flush) classes.push('card_footer-flush');
    if (full && !resolvedRatio) classes.push('card_footer-full');
    return classes;
  }, [resolvedJustify, resolvedRatio, flush, full]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {children}
    </div>
  );
}
