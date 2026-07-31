import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_DIRECTIONS = new Set(['row', 'column']);
const VALID_GAPS = new Set(['', 'sm', 'lg', 'none']);
const VALID_ALIGNMENTS = new Set(['start', 'center', 'end', 'stretch', 'baseline']);
const VALID_JUSTIFICATIONS = new Set(['start', 'center', 'end', 'between', 'around', 'evenly']);

const formatCode = createComponentFormatter('Flex', {
  defaults: { direction: 'row', align: 'stretch' },
  booleanProps: new Set(['wrap', 'equal', 'autoFit']),
});

export default function Flex({
  direction = 'row',
  directionMd,
  directionLg,
  wrap = false,
  cols,
  colsMd,
  colsLg,
  ratio,
  itemSpan,
  itemSpanMd,
  itemSpanLg,
  gap = '',
  align = 'stretch',
  justify,
  equal = false,
  autoFit = false,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedDirection = VALID_DIRECTIONS.has(direction) ? direction : 'row';
  const resolvedDirectionMd = VALID_DIRECTIONS.has(directionMd) ? directionMd : undefined;
  const resolvedDirectionLg = VALID_DIRECTIONS.has(directionLg) ? directionLg : undefined;
  const resolvedGap = VALID_GAPS.has(gap) ? gap : '';
  const resolvedAlign = VALID_ALIGNMENTS.has(align) ? align : undefined;
  const resolvedJustify = VALID_JUSTIFICATIONS.has(justify) ? justify : undefined;

  useComponentDemoCode(
    formatCode,
    {
      direction: resolvedDirection,
      directionMd: resolvedDirectionMd,
      directionLg: resolvedDirectionLg,
      wrap,
      cols,
      colsMd,
      colsLg,
      ratio,
      itemSpan,
      itemSpanMd,
      itemSpanLg,
      gap: resolvedGap,
      align: resolvedAlign,
      justify: resolvedJustify,
      equal,
      autoFit,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['flex', `flex_${resolvedDirection === 'column' ? 'col' : 'row'}`];
    if (resolvedDirectionMd) classes.push(`flex_${resolvedDirectionMd === 'column' ? 'col' : 'row'}-md`);
    if (resolvedDirectionLg) classes.push(`flex_${resolvedDirectionLg === 'column' ? 'col' : 'row'}-lg`);
    if (wrap) classes.push('flex_wrap');
    if (cols) classes.push(`flex_cols-${cols}`);
    if (colsMd) classes.push(`flex_cols-md-${colsMd}`);
    if (colsLg) classes.push(`flex_cols-lg-${colsLg}`);
    if (ratio) classes.push(`flex_ratio-${ratio}`);
    if (itemSpan) classes.push(`flex_items-span-${itemSpan}`);
    if (itemSpanMd) classes.push(`flex_items-span-md-${itemSpanMd}`);
    if (itemSpanLg) classes.push(`flex_items-span-lg-${itemSpanLg}`);
    if (resolvedGap === 'sm') classes.push('flex_gap-sm');
    if (resolvedGap === 'lg') classes.push('flex_gap-lg');
    if (resolvedGap === 'none') classes.push('flex_gap-none');
    if (resolvedAlign) classes.push(`flex_align-${resolvedAlign}`);
    if (resolvedJustify) classes.push(`flex_justify-${resolvedJustify}`);
    if (equal) classes.push('flex_equal');
    if (autoFit) classes.push('flex_auto-fit');
    return classes;
  }, [
    resolvedDirection,
    resolvedDirectionMd,
    resolvedDirectionLg,
    wrap,
    cols,
    colsMd,
    colsLg,
    ratio,
    itemSpan,
    itemSpanMd,
    itemSpanLg,
    resolvedGap,
    resolvedAlign,
    resolvedJustify,
    equal,
    autoFit,
  ]);

  const domRest = normalizeDomProps(rest);

  return (
    <div ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {children}
    </div>
  );
}
