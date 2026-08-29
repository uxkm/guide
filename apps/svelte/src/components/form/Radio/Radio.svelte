<!--
  Radio 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script>
// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 그룹 이름, 제출 값, 선택 상태와 레이블 배치를 prop으로 받습니다.
let {
  label,
  name,
  value,
  checked = false,
  disabled = false,
  labelEnd = false,
  button = false,
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
} = $props();

// 선언하지 않은 class와 HTML 속성을 수집합니다.


let hasLabel = $derived(Boolean(label || default)); // 보이는 레이블이 있는지 여부입니다.

// 레이아웃·버튼 변형과 사용자 클래스를 조합합니다.
let rootClass = $derived([
    'radio', // 라디오 루트 필수 클래스입니다.
    labelEnd && 'radio_label-end', // 레이블 우선 배치 변형입니다.
    button && 'radio_button', // 버튼형 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 input으로 전달합니다.
let inputAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
</script>

<!-- 레이블이 없으면 접근 가능한 단독 컨트롤로 렌더합니다. -->
  {#if !hasLabel}<label
   
    class="radio_control"
    class={attrs.class}
    aria-label={ariaLabel}
    data-ripple={ripple ? 'true' : 'false'}
  >
    <input
      {...inputAttrs}
      type="radio"
      class="radio_input"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      data-component="Radio"
    />
    <span class="radio_box" aria-hidden="true" />
  </label>
  <!-- 레이블이 있으면 버튼형·기본형을 하나의 label로 구성합니다. -->
  {:else}<label class={rootClass} data-ripple={ripple ? 'true' : 'false'}>
    {#if button}<input
     
      {...inputAttrs}
      type="radio"
      class="radio_input"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      data-component="Radio"
    />
    {#if labelEnd && !button}<span class="radio_label"
      >{@render children?.() ?? label}</span
    >
    {#if !button}<span class="radio_control">
      <input
        {...inputAttrs}
        type="radio"
        class="radio_input"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        data-component="Radio"
      />
      <span class="radio_box" aria-hidden="true" />
    </span>
    {#if button || !labelEnd}<span class="radio_label"
      >{@render children?.() ?? label}</span
    >
  </label>
