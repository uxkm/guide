const VALID_VARIANTS = new Set(['filled', 'solid', 'outline', 'borderless']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const CloseIcon = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export function Tag({
  children,
  label,
  icon,
  color = 'primary',
  variant = 'filled',
  size = 'md',
  round = false,
  checkable = false,
  add = false,
  closable = false,
  selected = false,
  disabled = false,
  ripple,
  href,
  closeLabel,
  className = '',
  onClick,
  onClose,
  ...props
}) {
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'filled';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const interactive = checkable || add || Boolean(href);
  const splitControl = closable && interactive;
  const classes = [
    'tag', `color_${color}`,
    resolvedVariant !== 'filled' && `tag_${resolvedVariant}`,
    resolvedSize !== 'md' && `tag_${resolvedSize}`,
    round && 'tag_round', checkable && 'tag_checkable', add && 'tag_add',
    selected && 'is-selected', disabled && 'is-disabled', className
  ].filter(Boolean).join(' ');
  const rippleProps = ripple === false
    ? { 'data-ripple': 'false' }
    : (ripple === true || interactive ? { 'data-ripple': 'true' } : {});
  const content = <>{icon ? <span className="tag_icon" aria-hidden="true">{icon}</span> : null}{children ?? label}</>;
  const closeButton = closable ? (
    <button
      className="tag_close"
      type="button"
      aria-label={closeLabel || (typeof (label ?? children) === 'string' ? `${label ?? children} 태그 제거` : '태그 제거')}
      disabled={disabled || undefined}
      onClick={(event) => { event.stopPropagation(); onClose?.(event); }}
    ><CloseIcon /></button>
  ) : null;

  function handleClick(event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  }

  if (splitControl) {
    const Control = checkable || add ? 'button' : 'a';
    return (
      <span {...props} className={classes} data-component="Tag" aria-disabled={disabled || undefined}>
        <Control
          className="tag_control"
          {...rippleProps}
          type={Control === 'button' ? 'button' : undefined}
          href={Control === 'a' && !disabled ? href : undefined}
          disabled={Control === 'button' ? disabled : undefined}
          aria-disabled={Control === 'a' && disabled ? true : undefined}
          aria-pressed={checkable ? selected : undefined}
          tabIndex={Control === 'a' && disabled ? -1 : undefined}
          onClick={handleClick}
        >{content}</Control>
        {closeButton}
      </span>
    );
  }

  const Root = checkable || add ? 'button' : href ? 'a' : 'span';
  return (
    <Root
      {...props}
      {...rippleProps}
      aria-disabled={Root !== 'button' && disabled ? true : undefined}
      aria-pressed={checkable ? selected : undefined}
      className={classes}
      data-component="Tag"
      disabled={Root === 'button' ? disabled : undefined}
      href={Root === 'a' && !disabled ? href : undefined}
      onClick={handleClick}
      tabIndex={Root === 'a' && disabled ? -1 : undefined}
      type={Root === 'button' ? 'button' : undefined}
    >{content}{closeButton}</Root>
  );
}

export function TagGroup({ children, tight = false, ariaLabel, className = '', ...props }) {
  const classes = ['tag_group', tight && 'tag_group-tight', className].filter(Boolean).join(' ');
  return <div {...props} aria-label={ariaLabel} className={classes} data-component="TagGroup" role="group">{children}</div>;
}

export default Tag;
