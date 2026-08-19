export function BreadcrumbEllipsis({ expanded = false, label = '숨겨진 경로 보기', className = '', children = '…', ...props }) {
  return <li className="breadcrumb_item"><button {...props} type="button" className={['breadcrumb_ellipsis', className].filter(Boolean).join(' ')} aria-label={label} aria-expanded={expanded} data-breadcrumb-ellipsis>{children}</button></li>;
}

export default BreadcrumbEllipsis;
