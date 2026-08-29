<!--
  Avatar 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
// class를 포함한 전달 속성을 최외곽 span에 직접 적용합니다.


// 이미지, fallback 이니셜, 크기·색상·상태 점을 공통 prop으로 받습니다.
let {
  src,
  alt = '',
  initials,
  color,
  size = 'md',
  square = false,
  badgeColor,
  badgeLabel,
  ariaHidden = false,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  class: className,
  ...rest
} = $props();=> ['sm', 'md', 'lg', 'xl'].includes(value),
  }, // gap의 이전 호환 이름입니다.
  square: Boolean, // 사각형 아바타로 표시합니다.
  badgeColor: String, // 상태 점 색상입니다.
  badgeLabel: String, // 상태 점의 접근성 이름입니다.
  ariaHidden: Boolean, // 장식용으로 숨길 때 true입니다.
});


// 이미지 로드 실패 시 icon/default slot 또는 initials로 전환합니다.
let imageError = $state(false);
let showImage = $derived(Boolean(src) && !imageError);
// prop과 사용자 class를 avatar_* · color_* 클래스에 연결합니다.
let classes = $derived([
    'avatar',
    color && `color_${color}`,
    size !== 'md' && `avatar_${size}`,
    square && 'avatar_square',
    className,
  ].filter(Boolean),
);

// 새 이미지 주소는 이전 주소의 로드 오류 상태를 이어받지 않습니다.
$effect(
  () => src,
  () => {
    imageError = false;
  },
);
</script>

<!-- 이미지가 없거나 실패하면 slot과 initials를 사용하고 상태 점은 별도 접근성 이름을 가집니다. -->
  <span
    {...rest}
    class={classes}
    aria-hidden={ariaHidden || undefined}
    data-component="Avatar"
  >
    {#if showImage}<img class="avatar_image" src={src} alt={alt} @error="imageError = true" />
    {:else}<slot name="icon"
      >{@render children?.() ?? initials}</slot
    >
    {#if badgeColor}<span
     
      class="avatar_badge"
      class={`color_${badgeColor}`}
      aria-label={badgeLabel}
    />
  </span>
