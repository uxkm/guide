/**
 * Menu 원본 구현.
 * 현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
 */
const modes = new Set(['vertical', 'horizontal', 'inline']); // 지원하는 메뉴 배치 모드입니다.

export function Menu({
  mode = 'vertical', // 메뉴의 배치 방향을 지정합니다.
  bordered = false, // 외곽 테두리를 표시할지 여부입니다.
  compact = false, // 항목 간격을 줄인 밀집 레이아웃인지 여부입니다.
  dark = false, // 어두운 배경 테마를 적용할지 여부입니다.
  ariaLabel, // 내비게이션의 접근 가능한 이름을 지정합니다.
  children, // MenuItem, MenuSubmenu 등 메뉴 자식입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onClick, // 메뉴 영역 클릭 시 추가로 호출할 콜백입니다.
  ...props // id, role 등 나머지 속성을 nav에 전달합니다.
}) {
  const resolvedMode = modes.has(mode) ? mode : 'vertical'; // 검증된 배치 모드입니다.

  // 모드와 시각 변형 클래스를 조합합니다.
  const classes = [
    'menu', // Menu 레이아웃을 활성화하는 필수 클래스입니다.
    `menu_${resolvedMode}`, // 세로·가로·인라인 배치 클래스입니다.
    bordered && 'menu_bordered', // 테두리 변형입니다.
    compact && 'menu_compact', // 밀집 간격 변형입니다.
    dark && 'menu_dark', // 어두운 테마 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 class 문자열로 만듭니다.

  // 비활성·서브메뉴가 아닌 링크 클릭 시 활성 상태를 단일 선택으로 갱신합니다.
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
      class={classes}
      data-component="Menu"
      data-menu-selectable
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      <ul class="menu_list">{children}</ul>
    </nav>
  );
}

export default Menu;
