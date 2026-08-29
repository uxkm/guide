<!--
  TagGroup 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
let {
  tight = false,
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
} = $props();

// tight과 사용자 정의 class를 그룹 클래스에 합칩니다.
let classes = $derived(['tag_group', tight && 'tag_group-tight', className].filter(Boolean),
);
</script>

<!-- 관련 Tag를 하나의 접근 가능한 그룹으로 묶습니다. -->
  <div
    {...rest}
    class={classes}
    aria-label={ariaLabel}
    data-component="TagGroup"
    role="group"
  >
    {@render children?.()}
  </div>
