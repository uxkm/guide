const SelectCaret = () => (
  <svg aria-hidden="true" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export function Button({
  children,
  label = 'Button',
  ripple = true,
  className = '',
  variant = 'filled',
  color = 'primary',
  size = 'md',
  iconBefore,
  iconAfter,
  iconOnly = false,
  vertical = false,
  round = false,
  block = false,
  grow = false,
  fit = false,
  loading = false,
  open = false,
  error = false,
  placeholder = false,
  selectText = false,
  selectCaret = false,
  disabled = false,
  ariaDisabled = false,
  ariaLabel,
  haspopup,
  expanded,
  invalid = false,
  tag: Tag = 'button',
  href,
  role,
  tabIndex,
  type = 'button',
  onClick,
  onKeyDown,
  ...props
}) {
  const inactive = disabled || ariaDisabled || loading;
  const isButton = Tag === 'button';
  const isLink = Tag === 'a';
  const needsButtonSemantics = Tag === 'div' || (isLink && !href);
  const classes = [
    'btn',
    variant === 'select' ? 'btn_select' : `btn_${variant}`,
    variant !== 'ghost' ? `color_${color}` : '',
    size !== 'md' ? `btn_${size}` : '',
    selectText ? 'btn_select-text' : '',
    placeholder ? 'btn_select-placeholder' : '',
    iconOnly ? 'btn_icon-only' : '',
    vertical ? 'btn_vertical' : '',
    round ? 'btn_round' : '',
    block ? 'btn_block' : '',
    grow === true ? 'btn_grow' : '',
    grow === '2' ? 'btn_grow-2' : '',
    fit ? 'btn_fit' : '',
    ariaDisabled ? 'is-disabled' : '',
    loading ? 'is-loading' : '',
    open ? 'is-open' : '',
    error ? 'is-error' : '',
    className
  ].filter(Boolean).join(' ');

  function handleClick(event) {
    if (inactive) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  }

  function handleKeyDown(event) {
    if (inactive) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (needsButtonSemantics && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      event.currentTarget.click();
    }
    onKeyDown?.(event);
  }

  return (
    <Tag
      {...props}
      aria-busy={loading || undefined}
      aria-disabled={ariaDisabled || (!isButton && disabled) || undefined}
      aria-expanded={expanded ?? (open || undefined)}
      aria-haspopup={haspopup}
      aria-invalid={invalid || error || undefined}
      aria-label={ariaLabel}
      className={classes}
      data-component="Button"
      data-ripple={ripple ? 'true' : 'false'}
      disabled={isButton ? disabled : undefined}
      href={isLink ? href : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={role ?? (needsButtonSemantics ? 'button' : undefined)}
      tabIndex={inactive && !isButton ? -1 : (tabIndex ?? (needsButtonSemantics ? 0 : undefined))}
      type={isButton ? type : undefined}
    >
      {loading ? <span aria-hidden="true" className="btn_spinner" /> : null}
      {iconBefore}
      {!iconOnly ? <span className="btn_label">{children ?? label}</span> : children}
      {iconAfter}
      {variant === 'select' || selectCaret ? <SelectCaret /> : null}
    </Tag>
  );
}

export default Button;
