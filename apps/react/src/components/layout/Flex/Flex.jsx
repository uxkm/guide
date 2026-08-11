const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const DIRECTIONS = new Set(['', 'row', 'col', 'column']);
const GAPS = new Set(['', 'sm', 'lg', 'none']);
const RATIOS = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']);
const ALIGNS = new Set(['', 'start', 'center', 'end', 'stretch', 'baseline']);
const JUSTIFIES = new Set(['', 'start', 'center', 'end', 'between', 'around', 'evenly']);

export function Flex({
  as: Root = 'div', direction = 'row', directionMd = '', directionLg = '', wrap = false,
  gap = '', cols, colsMd, colsLg, columns, columnsMd, columnsLg, ratio = '', itemSpan,
  itemSpanMd, itemSpanLg, equal = false, autoFit = false, align = 'stretch', justify = '',
  children = 'Flex', className = '', ...props
}) {
  const directionClass = (value, breakpoint = '') => value && `flex_${value === 'column' ? 'col' : value}${breakpoint}`;
  const resolvedCols = cols ?? columns;
  const resolvedColsMd = colsMd ?? columnsMd;
  const resolvedColsLg = colsLg ?? columnsLg;
  const classes = [
    'flex', DIRECTIONS.has(direction) && directionClass(direction),
    DIRECTIONS.has(directionMd) && directionClass(directionMd, '-md'),
    DIRECTIONS.has(directionLg) && directionClass(directionLg, '-lg'), wrap && 'flex_wrap',
    GAPS.has(gap) && gap && `flex_gap-${gap}`, range(resolvedCols) && `flex_cols-${range(resolvedCols)}`,
    range(resolvedColsMd) && `flex_cols-md-${range(resolvedColsMd)}`,
    range(resolvedColsLg) && `flex_cols-lg-${range(resolvedColsLg)}`,
    RATIOS.has(ratio) && ratio && `flex_ratio-${ratio}`, equal && 'flex_equal',
    range(itemSpan) && `flex_items-span-${range(itemSpan)}`,
    range(itemSpanMd) && `flex_items-span-md-${range(itemSpanMd)}`,
    range(itemSpanLg) && `flex_items-span-lg-${range(itemSpanLg)}`,
    autoFit && 'flex_auto-fit', ALIGNS.has(align) && align && `flex_align-${align}`,
    JUSTIFIES.has(justify) && justify && `flex_justify-${justify}`, className
  ].filter(Boolean).join(' ');
  return <Root className={classes} data-component="Flex" {...props}>{children}</Root>;
}

export default Flex;
