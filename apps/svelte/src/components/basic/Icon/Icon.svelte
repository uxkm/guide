<!--
  Icon 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script>
// 속성을 최외곽 요소에 직접 전달하기 위해 자동 상속을 끕니다.


let {
  name = 'plus',
  color,
  size = 'md',
  inline = false,
  spin = false,
  button = false,
  circle = false,
  square = false,
  pulse = false,
  ripple = true,
  ariaLabel,
  title,
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
} = $props();=> ['sm', 'md', 'lg', 'xl'].includes(value),
  }, // sm · md · lg · xl 크기입니다.
  inline: Boolean, // 텍스트와 인라인 정렬합니다.
  spin: Boolean, // 회전 애니메이션입니다.
  button: Boolean, // button 래퍼로 감쌉니다.
  circle: Boolean, // 원형 배경 래퍼로 감쌉니다.
  square: Boolean, // 사각형 배경 래퍼로 감쌉니다.
  pulse: Boolean, // circle과 함께 펄스 효과를 켭니다.
  ripple: { type: Boolean, default: true }, // button일 때 리플 효과를 켭니다.
  ariaLabel: String, // 명시적 접근성 이름입니다.
  title: String, // SVG title과 접근성 이름 후보입니다.
});


let label = $derived(ariaLabel || rest['aria-label'] || title);
// 래퍼가 없을 때 SVG에 붙는 클래스입니다.
let svgClass = $derived([
    'icon',
    size !== 'md' && `icon_${size}`,
    spin && 'icon_spin',
    !button && !circle && !square && color && `color_${color}`,
    !button && !circle && !square && inline && 'icon_inline',
    !button && !circle && !square && className,
  ].filter(Boolean),
);
// button · circle · square 래퍼에 붙는 클래스입니다.
let wrapperClass = $derived([
    button ? 'icon_button' : circle ? 'icon_circle' : 'icon_square',
    color && `color_${color}`,
    inline && 'icon_inline',
    circle && pulse && 'icon_pulse',
    circle && size === 'sm' && 'icon_circle-sm',
    circle && size === 'lg' && 'icon_circle-lg',
    className,
  ].filter(Boolean),
);
let wrapperTag = $derived((button ? 'button' : 'span'));
</script>

<!-- button · circle · square는 래퍼를 두고 내부 SVG는 aria-hidden입니다. -->
  {#if button || circle || square}<component
   
    is={wrapperTag}
    {...rest}
    class={wrapperClass}
    type={button ? 'button' : undefined}
    data-ripple={button ? (ripple ? 'true' : 'false') : undefined}
    aria-label={label}
    aria-hidden={!button && !label ? 'true' : undefined}
    role={!button && label ? 'img' : undefined}
  >
    <svg
      class="icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      {@render children?.()}
    </svg>
  </svelte:element>

  {:else}<svg
   
    {...rest}
    class={svgClass}
    aria-hidden={label ? undefined : 'true'}
    aria-label={label}
    role={label ? 'img' : undefined}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    {#if title}<title>{{ title }}</title>
    {@render children?.()}
  </svg>
