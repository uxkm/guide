/**
 * Menu 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
const modes = new Set(['vertical', 'horizontal', 'inline']);

export function Menu({
  mode = 'vertical',
  bordered = false,
  compact = false,
  dark = false,
  ariaLabel,
  children,
  className = '',
  onClick,
  ...props
}) {
  const resolvedMode = modes.has(mode) ? mode : 'vertical';
  const classes = [
    'menu',
    `menu_${resolvedMode}`,
    bordered && 'menu_bordered',
    compact && 'menu_compact',
    dark && 'menu_dark',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  function handleClick(event) {
    const link = event.target.closest('.menu_link');
    if (
      link &&
      !link.classList.contains('is-disabled') &&
      !link.parentElement?.classList.contains('menu_item-submenu')
    ) {
      event.currentTarget.querySelectorAll('.menu_link.is-active').forEach((item) => {
        item.classList.remove('is-active');
        item.removeAttribute('aria-current');
      });
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
    onClick?.(event);
  }
  return (
    <nav
      {...props}
      className={classes}
      data-component="Menu"
      data-menu-selectable
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      <ul className="menu_list">{children}</ul>
    </nav>
  );
}

export default Menu;
