<!--
  Stat 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
let {
  title,
  value,
  prefix,
  suffix,
  description,
  trend,
  trendColor,
  size = 'md',
  card = false,
  shadow = false,
  children,
  iconBefore,
  iconAfter,
  panel,
  extra,
  badge,
  class: className,
  ...rest
} = $props();=> ['sm', 'md', 'lg'].includes(value) }, // sm · md · lg 크기입니다.
  card: Boolean, // 카드형 외형입니다.
  shadow: Boolean, // 그림자 카드입니다.
});


// 크기·카드 스킨과 추세 색상을 각 영역의 공통 클래스로 변환합니다.
let classes = $derived([
    'stat',
    size !== 'md' && `stat_${size}`,
    card && 'stat_card',
    shadow && 'stat_shadow',
    className,
  ].filter(Boolean),
);
let trendClasses = $derived(['stat_trend', trendColor && `color_${trendColor}`].filter(Boolean),
);
let descriptionClasses = $derived(['stat_desc', description && trendColor && `color_${trendColor}`].filter(
    Boolean,
  ),
);
let showHeader = $derived(Boolean(title && trend));
let showValueRow = $derived(Boolean(prefix || suffix || slots));
let fallthroughAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
</script>

<!-- 접두·접미가 있으면 value-row를 만들고 추세는 라벨 옆 또는 설명 위치에 한 번만 표시합니다. -->
  <div {...fallthroughAttrs} class={classes} data-component="Stat">
    {#if showHeader}<div class="stat_header">
      <span class="stat_label">{{ title }}</span
      ><span class={trendClasses}
        ><slot name="trend-icon"
          ><svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="m6 15 6-6 6 6" /></svg></slot
        >{{ trend }}</span
      >
    </div>
    {:else if title}<span class="stat_label">{{ title }}</span>
    {#if showValueRow}<div class="stat_value-row">
      {#if prefix}<span class="stat_prefix">{{ prefix }}</span
      >{#if value != null || value}<span class="stat_value"
        ><slot name="value">{{ value }}</slot></span
      >{#if suffix}<span class="stat_suffix">{{ suffix }}</span>
    </div>
    {:else if value != null || value}<span class="stat_value"
      ><slot name="value">{{ value }}</slot></span
    >
    {#if description}<span class={descriptionClasses}>{{ description }}</span>
    {:else if trend && !showHeader}<span class={trendClasses}
      ><slot name="trend-icon"
        ><svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="m6 15 6-6 6 6" /></svg></slot
      >{{ trend }}</span
    >
    {@render children?.()}
  </div>
