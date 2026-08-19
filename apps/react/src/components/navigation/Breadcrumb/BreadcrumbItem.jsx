export function BreadcrumbItem({ label, href, current = false, disabled = false, icon = false, ariaLabel, children, className = '', onClick, ...props }) {
  const content = children ?? (icon && icon !== true ? <>{icon}{label}</> : label);
  const linkClasses = ['breadcrumb_link', icon && 'breadcrumb_link-icon', disabled && 'is-disabled'].filter(Boolean).join(' ');
  let inner = content;
  if (href && !current && !disabled) inner = <a className={linkClasses} href={href} aria-label={ariaLabel} onClick={onClick}>{content}</a>;
  else if (disabled) inner = <span className={linkClasses} aria-disabled="true">{content}</span>;
  else if (current) inner = <span className="breadcrumb_current">{content}</span>;
  return <li {...props} className={['breadcrumb_item', current && 'is-current', className].filter(Boolean).join(' ')} aria-current={current ? 'page' : undefined}>{inner}</li>;
}

export default BreadcrumbItem;
