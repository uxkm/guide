<!--
  Switch 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script>
// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 켜짐 상태, 크기, 레이블 배치와 접근성 옵션을 prop으로 받습니다.
let {
  label,
  checked = false,
  disabled = false,
  labelEnd = false,
  size = 'md',
  ripple = true,
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
} = $props();=> ['sm', 'md', 'lg'].includes(value) }, // 트랙과 레이블 크기입니다.
  ripple: { type: Boolean, default: true }, // 클릭 파장 효과를 표시할지 여부입니다.
  ariaLabel: String, // 보이는 레이블이 없을 때 접근 가능한 이름입니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.


let hasLabel = $derived(Boolean(label || default)); // 보이는 레이블이 있는지 여부입니다.

// 크기·레이블 배치와 사용자 클래스를 조합합니다.
let rootClass = $derived([
    'switch', // 스위치 루트 필수 클래스입니다.
    labelEnd && 'switch_label-end', // 레이블 우선 배치 변형입니다.
    size === 'sm' && 'switch_sm', // 작은 크기 변형입니다.
    size === 'lg' && 'switch_lg', // 큰 크기 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 input으로 전달합니다.
let inputAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
</script>

<!-- 레이블·트랙·손잡이를 하나의 label로 묶어 스위치 UI를 구성합니다. -->
  <label
    class={rootClass}
    aria-label={!hasLabel ? ariaLabel : undefined}
    data-ripple={ripple ? 'true' : 'false'}
  >
    {#if hasLabel && labelEnd}<span class="switch_label"
      >{@render children?.() ?? label}</span
    >
    <span class="switch_control">
      <input
        {...inputAttrs}
        type="checkbox"
        class="switch_input"
        role="switch"
        checked={checked}
        disabled={disabled}
        aria-label={!hasLabel ? ariaLabel : undefined}
        data-component="Switch"
      />
      <span class="switch_track" aria-hidden="true"><span class="switch_thumb" /></span>
    </span>
    {#if hasLabel && !labelEnd}<span class="switch_label"
      >{@render children?.() ?? label}</span
    >
  </label>
