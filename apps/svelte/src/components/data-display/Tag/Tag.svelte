<!--
  Tag 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
// class를 포함한 전달 속성을 최외곽 요소에 직접 적용합니다.


// 외형, 상호작용, 상태와 접근성 값을 prop으로 받습니다.
let {
  label,
  color = 'primary',
  variant = 'filled',
  size = 'md',
  round = false,
  checkable = false,
  add = false,
  closable = false,
  selected = false,
  disabled = false,
  ripple = undefined,
  href,
  closeLabel,
  onClick,
  onclick,
  onClose,
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
} = $props();=> ['filled', 'solid', 'outline', 'borderless'].includes(value),
  }, // 텍스트 변형 키입니다. VARIANTS 맵을 사용합니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // sm · md · lg 크기입니다.
  round: Boolean, // 둥근 pill 형태입니다.
  checkable: Boolean, // 선택 가능한 태그입니다.
  add: Boolean, // 추가(+) 트리거 태그입니다.
  closable: Boolean, // 닫기 버튼을 표시합니다.
  selected: Boolean, // 선택된 상태입니다.
  disabled: Boolean, // 비활성 상태입니다.
  ripple: { type: Boolean, default: undefined }, // 리플 효과입니다. 상호작용 태그에서 기본 켜짐입니다.
  href: String, // 링크형 태그의 주소입니다.
  closeLabel: String, // 닫기 버튼 접근성 이름입니다.
});



// prop에 따라 루트 태그와 닫기 버튼 분리 여부를 계산합니다.
let interactive = $derived(checkable || add || Boolean(href));
let splitControl = $derived(closable && interactive);
let rootTag = $derived(splitControl ? 'span' : checkable || add ? 'button' : href ? 'a' : 'span',
);
let controlTag = $derived((checkable || add ? 'button' : 'a'));
// prop을 tag_* · color_* · is-* 공통 클래스로 변환합니다.
let classes = $derived([
    'tag',
    `color_${color}`,
    variant !== 'filled' && `tag_${variant}`,
    size !== 'md' && `tag_${size}`,
    round && 'tag_round',
    checkable && 'tag_checkable',
    add && 'tag_add',
    selected && 'is-selected',
    disabled && 'is-disabled',
    className,
  ].filter(Boolean),
);
// 클릭 가능한 Tag에만 기본 리플 효과를 적용합니다.
let rippleAttrs = $derived(ripple === false
    ? { 'data-ripple': 'false' }
    : ripple === true || interactive
      ? { 'data-ripple': 'true' }
      : {},
);
let rootAttrs = $derived(({ ...rest, ...(splitControl ? {} : rippleAttrs) }));

// 비활성 상태에서는 기본 동작과 사용자 이벤트를 차단합니다.
function handleClick(event) {
  if (disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  onclick?.(event);
}

// 닫기 이벤트는 Tag 본문 클릭으로 전파하지 않습니다.
function handleClose(event) {
  event.stopPropagation();
  onClose?.(event);
}
</script>

<!-- 정적·버튼·링크 의미에 맞는 동적 루트와 접근성 상태를 렌더링합니다. -->
  <svelte:element this={rootTag}
    {...rootAttrs}
    class={classes}
    data-component="Tag"
    type={rootTag === 'button' ? 'button' : undefined}
    href={rootTag === 'a' && !disabled ? href : undefined}
    disabled={rootTag === 'button' ? disabled : undefined}
    aria-disabled={rootTag !== 'button' && disabled ? 'true' : undefined}
    aria-pressed={checkable && !splitControl ? String(selected) : undefined}
    tabindex={rootTag === 'a' && disabled ? -1 : undefined}
    onclick={splitControl || handleClick($event)}
  >
    <!-- 닫기 가능한 인터랙티브 Tag는 본문 컨트롤과 닫기 버튼을 분리합니다. -->
    {#if splitControl}<svelte:element this={controlTag}
     
      class="tag_control"
      {...rippleAttrs}
      type={controlTag === 'button' ? 'button' : undefined}
      href={controlTag === 'a' && !disabled ? href : undefined}
      disabled={controlTag === 'button' ? disabled : undefined}
      aria-disabled={controlTag === 'a' && disabled ? 'true' : undefined}
      aria-pressed={checkable ? String(selected) : undefined}
      tabindex={controlTag === 'a' && disabled ? -1 : undefined}
      onclick={handleClick}
    >
      {#if icon}<span class="tag_icon" aria-hidden="true">{@render icon?.()}</span>
      {@render children?.() ?? label}
    </svelte:element>
    {:else}<template>
      {#if icon}<span class="tag_icon" aria-hidden="true">{@render icon?.()}</span>
      {@render children?.() ?? label}
