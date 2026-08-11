const SIZES = new Set(['', 'sm', 'md', 'lg', 'xl']);

export function Container({
  as: Root = 'div', size = '', fluid = false, children = 'Container', className = '', ...props
}) {
  const resolvedSize = SIZES.has(size) ? size : '';
  const classes = [
    'container', resolvedSize && `container_${resolvedSize}`, fluid && 'container_fluid', className
  ].filter(Boolean).join(' ');

  return <Root className={classes} data-component="Container" {...props}>{children}</Root>;
}

export default Container;
