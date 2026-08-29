<!--
  Tree 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
let {
  bordered = false,
  lines = false,
  compact = false,
  ariaLabel,
  multiselectable = false,
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

// 트리 외형과 사용자 class를 tree_* 공통 클래스에 합칩니다.
let classes = $derived([
    'tree',
    bordered && 'tree_bordered',
    lines && 'tree_lines',
    compact && 'tree_compact',
    className,
  ].filter(Boolean),
);
let fallthroughAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
</script>

<!-- 공통 클래스와 slot으로 구조를 구성합니다. -->
  <ul
    {...fallthroughAttrs}
    class={classes}
    data-component="Tree"
    role="tree"
    aria-label={ariaLabel}
    aria-multiselectable={multiselectable || undefined}
  >
    {@render children?.()}
  </ul>
