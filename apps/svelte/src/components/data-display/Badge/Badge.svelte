<!--
  Badge 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
// class를 포함한 전달 속성을 최외곽 span에 직접 적용합니다.


// 텍스트, 크기, 상태 점, 카운트와 접근성 이름을 prop으로 받습니다.
let {
  label,
  color = 'primary',
  size = 'md',
  dot = false,
  count = false,
  dotOnly = false,
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
} = $props();=> ['sm', 'md', 'lg'].includes(value) }, // sm · md · lg 크기입니다.
  dot: Boolean, // 텍스트 옆 상태 점을 표시합니다.
  count: Boolean, // 카운트형 배지 스타일입니다.
  dotOnly: Boolean, // 텍스트 없는 독립 상태 점입니다.
  ariaLabel: String, // 접근성 이름입니다. 상태 점에 권장합니다.
});


// prop을 badge_*와 color_* 공통 클래스로 변환합니다.
let classes = $derived([
    dotOnly ? 'badge_dot-only' : 'badge',
    `color_${color}`,
    size !== 'md' && `badge_${size}`,
    !dotOnly && dot && 'badge_dot',
    !dotOnly && count && 'badge_count',
    className,
  ].filter(Boolean),
);
</script>

<!-- dotOnly는 빈 status 요소, 나머지는 slot 또는 label 텍스트를 렌더링합니다. -->
  <span
    {...rest}
    class={classes}
    aria-label={ariaLabel}
    role={dotOnly ? 'status' : undefined}
    data-component="Badge"
    >{#if !dotOnly}<>{@render children?.() ?? label}</template
    ></span
  >
