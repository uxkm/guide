const VALID_SIZES = new Set(['sm', 'md', 'lg', 'compact']);
const VALID_VARIANTS = new Set(['bordered', 'default', 'shadow', 'flat', 'borderless', 'elevated', 'ghost']);

export function Card({
  as,
  tag,
  children,
  title,
  subtitle,
  header,
  extra,
  media,
  href,
  size = 'md',
  variant = 'bordered',
  horizontal = false,
  compact = false,
  hoverable = false,
  accent = false,
  color,
  disabled = false,
  ripple,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedVariant = VALID_VARIANTS.has(variant) ? variant : 'bordered';
  const interactive = Boolean(href || onClick);
  const Root = as || tag || (href ? 'a' : onClick ? 'button' : 'article');
  const variantClass = resolvedVariant === 'flat' ? 'card_ghost' : ['default', 'bordered'].includes(resolvedVariant) ? '' : `card_${resolvedVariant}`;
  const classes = [
    'card', variantClass,
    resolvedSize !== 'md' && `card_${resolvedSize}`,
    horizontal && 'card_horizontal', compact && 'card_compact', hoverable && 'card_hover',
    accent && 'card_accent', color && `color_${color}`, interactive && 'card_clickable',
    disabled && 'is-disabled', className
  ].filter(Boolean).join(' ');
  const hasBuiltInHeader = title != null || subtitle != null || header != null || extra != null;

  function handleClick(event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  }

  return (
    <Root
      {...props}
      className={classes}
      data-component="Card"
      data-ripple={ripple == null ? undefined : String(ripple)}
      disabled={Root === 'button' ? disabled : undefined}
      href={Root === 'a' && !disabled ? href : undefined}
      aria-disabled={interactive && disabled ? true : undefined}
      tabIndex={interactive && disabled ? -1 : props.tabIndex}
      onClick={interactive ? handleClick : undefined}
      type={Root === 'button' ? type : undefined}
    >
      {media}
      {hasBuiltInHeader ? (
        <div className="card_header">
          <div className="card_header-main">
            {header ?? <>{title != null ? <h3 className="card_title">{title}</h3> : null}{subtitle != null ? <p className="card_subtitle">{subtitle}</p> : null}</>}
          </div>
          {extra != null ? <div className="card_extra">{extra}</div> : null}
        </div>
      ) : null}
      {children}
    </Root>
  );
}

export function CardHeader({ children, title, subtitle, extra, className = '', ...props }) {
  const classes = ['card_header', className].filter(Boolean).join(' ');
  return <div {...props} className={classes}><div className="card_header-main">{children ?? <>{title != null ? <h3 className="card_title">{title}</h3> : null}{subtitle != null ? <p className="card_subtitle">{subtitle}</p> : null}</>}</div>{extra != null ? <div className="card_extra">{extra}</div> : null}</div>;
}

export function CardBody({ children, className = '', ...props }) {
  const classes = ['card_body', className].filter(Boolean).join(' ');
  return <div {...props} className={classes}>{children}</div>;
}

export function CardFooter({ children, between = false, className = '', ...props }) {
  const classes = ['card_footer', between && 'card_footer-between', className].filter(Boolean).join(' ');
  return <div {...props} className={classes}>{children}</div>;
}

export function CardDeck({ children, columns, className = '', ...props }) {
  const resolvedColumns = [2, 3].includes(Number(columns)) ? Number(columns) : null;
  const classes = ['card_deck', resolvedColumns && `card_deck-${resolvedColumns}`, className].filter(Boolean).join(' ');
  return <div {...props} className={classes} data-component="CardDeck">{children}</div>;
}

export default Card;
