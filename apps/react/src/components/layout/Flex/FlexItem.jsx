const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const ALIGNS = new Set(['', 'auto', 'start', 'center', 'end', 'stretch', 'baseline']);

export function FlexItem({
  as: Root = 'div', span, spanMd, spanLg, grow = false, growFactor = 1, fit = false,
  align = '', order, children, className = '', ...props
}) {
  const resolvedGrow = grow && Number(growFactor) === 2 ? 'flex_grow-2' : grow ? 'flex_grow' : '';
  const classes = [
    range(span) && `flex_item-span-${range(span)}`,
    range(spanMd) && `flex_item-span-md-${range(spanMd)}`,
    range(spanLg) && `flex_item-span-lg-${range(spanLg)}`,
    resolvedGrow, fit && 'flex_fit', ALIGNS.has(align) && align && `flex_self-${align}`,
    range(order) && `flex_order-${range(order)}`, className
  ].filter(Boolean).join(' ');
  return <Root className={classes} data-component="FlexItem" {...props}>{children}</Root>;
}

export default FlexItem;
