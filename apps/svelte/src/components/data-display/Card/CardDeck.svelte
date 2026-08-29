<!--
  CardDeck 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
let {
  columns = undefined,
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
} = $props();입니다.
});

// columns는 지원하는 2·3열만 고정하고 나머지는 자동 반응형 그리드를 사용합니다.
let classes = $derived([
    'card_deck',
    [2, 3].includes(Number(columns)) && `card_deck-${Number(columns)}`,
    className,
  ].filter(Boolean),
);
let rootAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
</script>

<!-- 관련 Card 목록을 하나의 반응형 deck으로 묶습니다. -->
  <div {...rootAttrs} class={classes} data-component="CardDeck">{@render children?.()}</div>
