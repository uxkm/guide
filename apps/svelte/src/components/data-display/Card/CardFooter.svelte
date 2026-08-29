<!--
  CardFooter 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
let {
  between = false,
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

// between과 사용자 class를 푸터 변형 클래스에 합칩니다.
let classes = $derived(['card_footer', between && 'card_footer-between', className].filter(Boolean),
);
let rootAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
</script>

<!-- 공통 클래스와 slot으로 구조를 구성합니다. -->
  <div {...rootAttrs} class={classes}>{@render children?.()}</div>
