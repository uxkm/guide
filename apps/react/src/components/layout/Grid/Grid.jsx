const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const GAPS = new Set(['', 'sm', 'lg', 'none']);
const RATIOS = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']);
const ALIGNS = new Set(['', 'center', 'end']);

export function Grid({
  as: Root = 'div', cols, colsMd, colsLg, columns, columnsMd, columnsLg, gap = '', ratio = '', itemSpan,
  itemSpanMd, itemSpanLg, autoFit = false, autoFill = false, equalColumns = false,
  align = '', children = 'Grid', className = '', ...props
}) {
  const resolvedCols = cols ?? columns;
  const resolvedColsMd = colsMd ?? columnsMd;
  const resolvedColsLg = colsLg ?? columnsLg;
  const classes = [
    'grid', range(resolvedCols) && `grid_cols-${range(resolvedCols)}`,
    range(resolvedColsMd) && `grid_cols-md-${range(resolvedColsMd)}`,
    range(resolvedColsLg) && `grid_cols-lg-${range(resolvedColsLg)}`,
    GAPS.has(gap) && gap && `grid_gap-${gap}`, RATIOS.has(ratio) && ratio && `grid_ratio-${ratio}`,
    range(itemSpan) && `grid_item-span-${range(itemSpan)}`,
    range(itemSpanMd) && `grid_item-span-md-${range(itemSpanMd)}`,
    range(itemSpanLg) && `grid_item-span-lg-${range(itemSpanLg)}`,
    autoFit && 'grid_auto-fit', autoFill && 'grid_auto-fill', equalColumns && 'grid_equal-columns',
    ALIGNS.has(align) && align && `grid_align-${align}`, className
  ].filter(Boolean).join(' ');
  return <Root className={classes} data-component="Grid" {...props}>{children}</Root>;
}

export default Grid;
