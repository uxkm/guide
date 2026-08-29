<!--
  Timeline 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
let {
  card = false,
  alternate = false,
  horizontal = false,
  labelCol = false,
  icon = false,
  iconSize = 'md',
  size = 'md',
  tag = 'ol',
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
} = $props();=> ['ol', 'ul'].includes(value) }, // ol · ul 루트 태그입니다.
});

// 방향·크기·도트·카드 변형을 timeline_* 공통 클래스로 변환합니다.
let classes = $derived([
    'timeline',
    card && 'timeline_card',
    alternate && 'timeline_alternate',
    horizontal && 'timeline_horizontal',
    labelCol && 'timeline_label-col',
    icon && 'timeline_icon',
    icon && iconSize === 'sm' && 'timeline_icon-sm',
    size === 'sm' && 'timeline_sm',
    size === 'lg' && 'timeline_lg',
    className,
  ].filter(Boolean),
);
let fallthroughAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
</script>

<!-- 공통 클래스와 slot으로 구조를 구성합니다. -->
  <svelte:element this={tag} {...fallthroughAttrs} class={classes} data-component="Timeline"
    >{@render children?.()}</svelte:element>
