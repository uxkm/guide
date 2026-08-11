const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

export function GridCol({ as: Root = 'div', span, spanMd, spanLg, children, className = '', ...props }) {
  const classes = [
    range(span) && `grid_col-span-${range(span)}`,
    range(spanMd) && `grid_col-span-md-${range(spanMd)}`,
    range(spanLg) && `grid_col-span-lg-${range(spanLg)}`,
    className
  ].filter(Boolean).join(' ');
  return <Root className={classes} data-component="GridCol" {...props}>{children}</Root>;
}

export default GridCol;
