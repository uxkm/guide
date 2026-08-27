/**
 * MenuItem 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function MenuItem({
  label,
  href,
  active = false,
  disabled = false,
  color,
  icon,
  extra,
  children,
  className = '',
  onClick,
  ...props
}) {
  const Tag = href && !disabled ? 'a' : disabled ? 'span' : 'button';
  const linkClasses = [
    'menu_link',
    active && 'is-active',
    disabled && 'is-disabled',
    color && `color_${color}`,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <li
      {...props}
      className={['menu_item', disabled && 'is-disabled', className].filter(Boolean).join(' ')}
    >
      <Tag
        className={linkClasses}
        href={Tag === 'a' ? href : undefined}
        type={Tag === 'button' ? 'button' : undefined}
        aria-current={active ? 'page' : undefined}
        aria-disabled={disabled || undefined}
        onClick={(event) => {
          if (Tag === 'a') event.preventDefault();
          if (!disabled) onClick?.(event);
        }}
      >
        {icon}
        {(children ?? label) != null && <span className="menu_label">{children ?? label}</span>}
        {extra != null && <span className="menu_extra">{extra}</span>}
      </Tag>
    </li>
  );
}
export default MenuItem;
