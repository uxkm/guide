import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_GAPS = new Set(['', 'sm', 'lg', 'none']);

const formatCode = createComponentFormatter('Grid', {
  booleanProps: new Set(['autoFit', 'autoFill']),
});

export default function Grid({
  cols,
  colsMd,
  colsLg,
  ratio,
  itemSpan,
  itemSpanMd,
  itemSpanLg,
  gap = '',
  autoFit = false,
  autoFill = false,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedGap = VALID_GAPS.has(gap) ? gap : '';

  useComponentDemoCode(
    formatCode,
    {
      cols,
      colsMd,
      colsLg,
      ratio,
      itemSpan,
      itemSpanMd,
      itemSpanLg,
      gap: resolvedGap,
      autoFit,
      autoFill,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['grid'];
    if (cols) classes.push(`grid_cols-${cols}`);
    if (colsMd) classes.push(`grid_cols-md-${colsMd}`);
    if (colsLg) classes.push(`grid_cols-lg-${colsLg}`);
    if (ratio) classes.push(`grid_ratio-${ratio}`);
    if (itemSpan) classes.push(`grid_item-span-${itemSpan}`);
    if (itemSpanMd) classes.push(`grid_item-span-md-${itemSpanMd}`);
    if (itemSpanLg) classes.push(`grid_item-span-lg-${itemSpanLg}`);
    if (resolvedGap === 'sm') classes.push('grid_gap-sm');
    if (resolvedGap === 'lg') classes.push('grid_gap-lg');
    if (resolvedGap === 'none') classes.push('grid_gap-none');
    if (autoFit) classes.push('grid_auto-fit');
    if (autoFill) classes.push('grid_auto-fill');
    return classes;
  }, [cols, colsMd, colsLg, ratio, itemSpan, itemSpanMd, itemSpanLg, resolvedGap, autoFit, autoFill]);

  const domRest = normalizeDomProps(rest);

  return (
    <div ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {children}
    </div>
  );
}
