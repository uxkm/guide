const VALID_SIZES = new Set(['sm', 'md', 'lg']);

export function Badge({
  children,
  label,
  color = 'primary',
  size = 'md',
  dot = false,
  count = false,
  dotOnly = false,
  ariaLabel,
  className = '',
  ...props
}) {
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const classes = [
    dotOnly ? 'badge_dot-only' : 'badge',
    `color_${color}`,
    resolvedSize !== 'md' && `badge_${resolvedSize}`,
    !dotOnly && dot && 'badge_dot',
    !dotOnly && count && 'badge_count',
    className
  ].filter(Boolean).join(' ');

  return (
    <span
      {...props}
      aria-label={ariaLabel}
      className={classes}
      data-component="Badge"
      role={dotOnly ? 'status' : undefined}
    >
      {dotOnly ? null : (children ?? label)}
    </span>
  );
}

export function BadgeWrap({ children, ariaLabel, className = '', ...props }) {
  const classes = ['badge_wrap', className].filter(Boolean).join(' ');
  return <span {...props} aria-label={ariaLabel} className={classes} data-component="BadgeWrap">{children}</span>;
}

export default Badge;
