<!--
  Navbar 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script>
import Button from '../../basic/Button/Button.svelte';
import Icon from '../../basic/Icon/Icon.svelte';

// 속성을 계산된 Navbar 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 브랜드, 크기, 테마, 고정, 반응형 접힘 설정을 prop으로 받습니다.
let {
  brand,
  size = 'md',
  borderless = false,
  dark = false,
  sticky = false,
  responsive = false,
  collapseId,
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
} = $props();=> ['sm', 'md', 'lg'].includes(value) }, // Navbar의 세로 크기를 지정합니다.
  borderless: Boolean, // 하단 테두리를 제거할지 여부입니다.
  dark: Boolean, // 어두운 배경 테마를 적용할지 여부입니다.
  sticky: Boolean, // 스크롤 시 상단에 고정할지 여부입니다.
  responsive: Boolean, // 좁은 화면에서 접힘 토글을 사용할지 여부입니다.
  collapseId: String, // 접힘 영역의 DOM id를 직접 지정합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.

let open = $state(false); // 반응형 메뉴의 열림 상태입니다.
const targetId = collapseId || `navbar-collapse-${Math.random().toString(36).slice(2, 9)}`; // 접힘 영역의 최종 id입니다.

// 크기, 테마, 고정, 열림 상태 클래스를 조합합니다.
let classes = $derived([
    'navbar', // Navbar 레이아웃을 활성화하는 필수 클래스입니다.
    size !== 'md' && `navbar_${size}`, // 기본 md가 아닐 때 크기 변형입니다.
    borderless && 'navbar_borderless', // 테두리 없는 변형입니다.
    dark && 'navbar_dark', // 어두운 테마 변형입니다.
    sticky && 'navbar_sticky', // 상단 고정 변형입니다.
    open && 'is-open', // 반응형 메뉴가 열린 상태입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.
</script>

<!-- 헤더 루트에 속성과 클래스를 연결하고 브랜드·토글·접힘 영역을 배치합니다. -->
  <header
    {...rest}
    class={classes}
    data-component="Navbar"
    data-navbar={responsive || undefined}
  >
    <div class="navbar_container">
      <!-- 브랜드 링크는 데모용으로 기본 이동을 막습니다. -->
      <a href="#" class="navbar_brand" @click.prevent
        ><slot name="brand"><slot name="brand-icon" />{{ brand }}</slot></a
      >
      {#if responsive}<Button
       
        variant="ghost"
        icon-only
        class="navbar_toggle"
        aria-expanded={open}
        aria-controls={targetId}
        aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        onclick={open = !open}
        ><#icon-before
          ><Icon name="menu" size="sm" class="navbar_toggle-icon-open" /><Icon
            name="close"
            size="sm"
            class="navbar_toggle-icon-close" /></template
      ></Button>
      <!-- 접힘 영역에 주요 메뉴, 검색, 액션을 배치합니다. -->
      <div id={targetId} class="navbar_collapse">
        <nav class="navbar_nav" aria-label="주요 메뉴">
          <slot name="items"
            >{#if children}<ul class="navbar_list">
              {@render children?.()}</ul
          ></slot>
        </nav>
        {#if search}<div class="navbar_search"><slot name="search" /></div>
        {#if actions}<div class="navbar_actions"><slot name="actions" /></div>
      </div>
    </div>
  </header>
