<!--
  Menu 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script>
// 속성을 계산된 Menu 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 배치 모드와 시각 변형, 접근성 이름을 prop으로 받습니다.
let {
  mode = 'vertical',
  bordered = false,
  compact = false,
  dark = false,
  ariaLabel,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge,
  class: className,
  ...rest
} = $props();=> ['vertical', 'horizontal', 'inline'].includes(value),
  }, // 메뉴의 배치 방향을 지정합니다.
  bordered: Boolean, // 외곽 테두리를 표시할지 여부입니다.
  compact: Boolean, // 항목 간격을 줄인 밀집 레이아웃인지 여부입니다.
  dark: Boolean, // 어두운 배경 테마를 적용할지 여부입니다.
  ariaLabel: String, // 내비게이션의 접근 가능한 이름을 지정합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.


// 모드와 시각 변형 클래스를 조합합니다.
let classes = $derived([
    'menu', // Menu 레이아웃을 활성화하는 필수 클래스입니다.
    `menu_${mode}`, // 세로·가로·인라인 배치 클래스입니다.
    bordered && 'menu_bordered', // 테두리 변형입니다.
    compact && 'menu_compact', // 밀집 간격 변형입니다.
    dark && 'menu_dark', // 어두운 테마 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

// 비활성·서브메뉴가 아닌 링크 클릭 시 활성 상태를 단일 선택으로 갱신합니다.
function selectItem(event) {
  const link = event.target.closest?.('.menu_link');
  if (
    !link ||
    link.classList.contains('is-disabled') ||
    link.parentElement?.classList.contains('menu_item-submenu')
  )
    return;
  event.currentTarget.querySelectorAll('.menu_link.is-active').forEach((item) => {
    item.classList.remove('is-active');
    item.removeAttribute('aria-current');
  });
  link.classList.add('is-active');
  link.setAttribute('aria-current', 'page');
}
</script>

<!-- 선택 가능 메뉴 루트에 속성과 클릭 처리를 연결합니다. -->
  <nav
    {...rest}
    class={classes}
    data-component="Menu"
    data-menu-selectable
    aria-label={ariaLabel}
    onclick={selectItem}
  >
    <ul class="menu_list">
      {@render children?.()}
    </ul>
  </nav>
