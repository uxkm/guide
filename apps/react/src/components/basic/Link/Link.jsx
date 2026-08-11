const COLORS = new Set(['primary', 'muted', 'success', 'warning', 'danger', 'info']);
const SIZES = new Set(['', 'sm', 'lg', 'xl']);

export function Link({
  as: Root = 'a', ripple = true, color = 'primary', size = '', underline = false,
  noUnderline = false, standalone = false, nav = false, block = false, back = false,
  iconOnly = false, active = false, disabled = false, label, href, target, rel,
  ariaLabel, icon, iconAfter, children, className = '', onClick, ...props
}) {
  const resolvedColor = COLORS.has(color) ? color : 'primary';
  const resolvedSize = SIZES.has(size) ? size : '';
  const isAnchor = Root === 'a';
  const isButton = Root === 'button';
  const acceptsHref = isAnchor || typeof Root !== 'string';
  const content = children ?? label;
  const classes = [
    'link', `color_${resolvedColor}`, resolvedSize && `size_${resolvedSize}`,
    underline && 'link_underline', noUnderline && 'link_no-underline',
    standalone && 'link_standalone', nav && 'link_nav', block && 'link_block',
    back && 'link_back', iconOnly && 'link_icon-only', active && 'is-active',
    disabled && 'is-disabled', className
  ].filter(Boolean).join(' ');

  function handleClick(event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (!href || href === '#') event.preventDefault();
    onClick?.(event);
  }

  return (
    <Root
      {...props}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      aria-label={ariaLabel}
      className={classes}
      data-component="Link"
      data-ripple={ripple ? 'true' : 'false'}
      disabled={isButton ? disabled : undefined}
      href={acceptsHref ? (href || '#') : undefined}
      onClick={handleClick}
      rel={acceptsHref ? rel : undefined}
      tabIndex={disabled ? -1 : props.tabIndex}
      target={acceptsHref ? target : undefined}
      type={isButton ? 'button' : undefined}
    >
      {icon}
      {!iconOnly ? content : null}
      {iconAfter}
    </Root>
  );
}

export default Link;
