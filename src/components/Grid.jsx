import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

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
  autoFit,
  autoFill,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const props = { cols, colsMd, colsLg, ratio, itemSpan, itemSpanMd, itemSpanLg, gap, autoFit, autoFill };
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'grid',
    cols && `grid_cols-${cols}`,
    colsMd && `grid_cols-md-${colsMd}`,
    colsLg && `grid_cols-lg-${colsLg}`,
    ratio && `grid_ratio-${ratio}`,
    itemSpan && `grid_item-span-${itemSpan}`,
    itemSpanMd && `grid_item-span-md-${itemSpanMd}`,
    itemSpanLg && `grid_item-span-lg-${itemSpanLg}`,
    gap === 'sm' && 'grid_gap-sm',
    gap === 'lg' && 'grid_gap-lg',
    gap === 'none' && 'grid_gap-none',
    autoFit && 'grid_auto-fit',
    autoFill && 'grid_auto-fill',
    className,
  );

  return (
    <div ref={rootRef} className={rootClass} {...rest}>
      {children}
    </div>
  );
}
