<!--
  MenuItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script>
// 레이블, 주소, 활성·비활성, 색상 상태를 prop으로 받습니다.
let {
  label,
  href,
  active = false,
  disabled = false,
  color,
  onClick,
  onclick,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();
 // 항목 클릭 시 부모로 전달하는 이벤트입니다.

// href·disabled 조합에 따라 앵커, span, button 중 하나를 선택합니다.
let tag = $derived(href && !disabled ? 'a' : disabled ? 'span' : 'button',
);

// 활성·비활성·색상 상태를 링크 클래스에 반영합니다.
let classes = $derived([
    'menu_link', // 메뉴 항목의 클릭 가능 영역 클래스입니다.
    active && 'is-active', // 현재 선택 상태입니다.
    disabled && 'is-disabled', // 비활성 상태입니다.
    color && `color_${color}`, // 색상 토큰 클래스입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.
</script>

<!-- 상태별 태그로 아이콘·레이블·보조 콘텐츠를 렌더합니다. -->
  <li class={['menu_item', disabled && 'is-disabled']}>
    <svelte:element this={tag}
      class={classes}
      href={tag === 'a' ? href : undefined}
      type={tag === 'button' ? 'button' : undefined}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      onclick={tag === 'a' ? $event.preventDefault() : undefined}
      >{@render icon?.()}{#if label || children}<span class="menu_label"
        >{@render children?.() ?? label}</span
      >{#if extra}<span class="menu_extra">{@render extra?.()}</span
    ></svelte:element>
  </li>
