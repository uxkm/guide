<!--
  Card 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
// class와 클릭 핸들러를 분리해 최외곽 동적 루트에 직접 전달합니다.

// 루트 의미, 내부 영역, 외형과 상호작용 상태를 prop으로 받습니다.
let {
  as,
  tag,
  title,
  subtitle,
  href,
  size = 'md',
  variant = 'bordered',
  horizontal = false,
  compact = false,
  hoverable = false,
  accent = false,
  color,
  disabled = false,
  ripple = undefined,
  onClick,
  onclick,
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
} = $props();=> ['sm', 'md', 'lg', 'compact'].includes(value),
  }, // gap의 이전 호환 이름입니다.
  variant: { // 카드 스킨 변형입니다.
    type: String,
    default: 'bordered',
    validator: (value) =>
      ['bordered', 'default', 'shadow', 'flat', 'borderless', 'elevated', 'ghost'].includes(value),
  }, // 텍스트 변형 키입니다. VARIANTS 맵을 사용합니다.
  horizontal: Boolean, // 가로 레이아웃입니다.
  compact: Boolean, // 조밀한 패딩입니다.
  hoverable: Boolean, // 호버 강조 스타일입니다.
  accent: Boolean, // 액센트 강조 스타일입니다.
  color: String, // color_* 공통 색상 클래스입니다.
  disabled: Boolean, // 비활성 상태입니다.
  ripple: { type: Boolean, default: undefined }, // 클릭 리플 효과입니다.
});


const instance = getCurrentInstance();

// href는 링크, click listener는 버튼, 나머지는 기본 article 루트를 선택합니다.
let interactive = $derived(Boolean(href || instance?.vnode.props?.onClick));
let rootTag = $derived(as || tag || (href ? 'a' : interactive ? 'button' : 'article'),
);
let variantClass = $derived(variant === 'flat'
    ? 'card_ghost'
    : ['default', 'bordered'].includes(variant)
      ? ''
      : `card_${variant}`,
);
// prop을 card_* · color_* · is-* 공통 클래스로 변환합니다.
let classes = $derived([
    'card',
    variantClass,
    size !== 'md' && `card_${size}`,
    horizontal && 'card_horizontal',
    compact && 'card_compact',
    hoverable && 'card_hover',
    accent && 'card_accent',
    color && `color_${color}`,
    interactive && 'card_clickable',
    disabled && 'is-disabled',
    className,
  ].filter(Boolean),
);
// class와 onClick은 중복 전달하지 않고 계산된 class와 emit 처리에 연결합니다.
let rootAttrs = $derived({
  const { class: _class, onClick: _onClick, ...rest } = rest;
  return rest;
});
let hasBuiltInHeader = $derived(title != null || subtitle != null || header || extra,
);
// 비활성 Card는 링크 이동과 사용자 클릭 이벤트를 모두 차단합니다.
function handleClick(event) {
  if (disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  onclick?.(event);
}
</script>

<!-- 루트 종류에 맞춰 href · disabled · aria-disabled · tabindex를 구분해 전달합니다. -->
  <svelte:element this={rootTag}
    {...rootAttrs}
    class={classes}
    data-component="Card"
    data-ripple={ripple == null ? undefined : String(ripple)}
    type={rootTag === 'button' ? 'button' : undefined}
    disabled={rootTag === 'button' ? disabled : undefined}
    href={rootTag === 'a' && !disabled ? href : undefined}
    aria-disabled={interactive && disabled ? 'true' : undefined}
    tabindex={interactive && disabled ? -1 : undefined}
    onclick={interactive ? handleClick($event) : undefined}
  >
    <!-- media와 내장 header는 값이나 slot이 있을 때만 필요한 구조를 렌더링합니다. -->
    <slot name="media" />
    {#if hasBuiltInHeader}<div class="card_header">
      <div class="card_header-main">
        <slot name="header"
          >{#if title != null}<h3 class="card_title">{{ title }}</h3>
          {#if subtitle != null}<p class="card_subtitle">{{ subtitle }}</p></slot
        >
      </div>
      {#if extra}<div class="card_extra">{@render extra?.()}</div>
    </div>
    {@render children?.()}
  </svelte:element>
