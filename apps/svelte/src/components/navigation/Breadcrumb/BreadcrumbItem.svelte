<!--
  BreadcrumbItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script>
// 컴포넌트 표시 이름을 등록합니다.

// 레이블, 주소, 현재·비활성, 아이콘, 접근성 이름을 prop으로 받습니다.
let {
  label,
  href,
  current = false,
  disabled = false,
  icon = false,
  ariaLabel,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();

// 아이콘·비활성 상태를 링크 클래스에 반영합니다.
let linkClasses = $derived(['breadcrumb_link', icon && 'breadcrumb_link-icon', disabled && 'is-disabled'].filter(
    Boolean,
  ),
);
</script>

<!-- 현재·비활성·링크 여부에 따라 내부 요소를 선택합니다. -->
  <li
    class={['breadcrumb_item', current && 'is-current']}
    aria-current={current ? 'page' : undefined}
  >
    {#if href && !current && !disabled}<a
     
      class={linkClasses}
      href={href}
      aria-label={ariaLabel}
      >{@render children?.() ?? label}</a
    >{:else if disabled}<span class={linkClasses} aria-disabled="true"
      >{@render children?.() ?? label}</span
    >{:else if current}<span class="breadcrumb_current"
      >{@render children?.() ?? label}</span
    >{:else}{@render children?.() ?? label}
  </li>
