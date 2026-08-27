/**
 * NavbarItem 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
export function NavbarItem({
  label,
  href = '#',
  active = false,
  badge,
  children,
  className = '',
  onClick,
  ...props
}) {
  return (
    <li {...props} className={['navbar_item', className].filter(Boolean).join(' ')}>
      <a
        href={href}
        className={['navbar_link', active && 'is-active'].filter(Boolean).join(' ')}
        aria-current={active ? 'page' : undefined}
        onClick={(event) => {
          event.preventDefault();
          onClick?.(event);
        }}
      >
        {children ?? label}
        {badge}
      </a>
    </li>
  );
}
export default NavbarItem;
