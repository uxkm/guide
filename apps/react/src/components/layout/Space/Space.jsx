const SIZES = new Set(['', 'xs', 'sm', 'md', 'lg', 'xl']);
const ALIGNS = new Set(['', 'start', 'center', 'end', 'baseline', 'stretch']);
const JUSTIFIES = new Set(['', 'start', 'center', 'end', 'between']);

export function Space({
  as: Root = 'div', gap, size = '', vertical = false, wrap = false, block = false,
  align = '', justify = '', children = 'Space', className = '', ...props
}) {
  const resolvedSize = (gap ?? size) || 'md';
  const classes = [
    'space', SIZES.has(resolvedSize) && resolvedSize !== 'md' && `space_gap-${resolvedSize}`,
    vertical && 'space_vertical', wrap && 'space_wrap', block && 'space_block',
    ALIGNS.has(align) && align && `space_align-${align}`,
    JUSTIFIES.has(justify) && justify && `space_justify-${justify}`, className
  ].filter(Boolean).join(' ');
  return <Root className={classes} data-component="Space" {...props}>{children}</Root>;
}

export default Space;
