<!--
  Checkbox 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script>
import { onMount } from 'svelte';

// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 체크 상태, 레이블 배치, 버튼형과 접근성 옵션을 prop으로 받습니다.
let {
  label,
  checked = false,
  disabled = false,
  indeterminate = false,
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


let inputRef = $state(null);
const inputId = crypto.randomUUID();
let hasLabel = $derived(Boolean(label || default)); // 보이는 레이블이 있는지 여부입니다.

// 레이아웃·버튼 변형과 사용자 클래스를 조합합니다.
let rootClass = $derived([
    'checkbox', // 체크박스 루트 필수 클래스입니다.
    labelEnd && 'checkbox_label-end', // 레이블 우선 배치 변형입니다.
    button && 'checkbox_button', // 버튼형 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 input으로 전달합니다.
let inputAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});

// indeterminate는 Vue prop이 아니므로 DOM에 직접 동기화합니다.
function syncIndeterminate() {
  if (inputRef) inputRef.indeterminate = indeterminate;
}
onMount(syncIndeterminate);
$effect(() => indeterminate, syncIndeterminate);
</script>

<!-- 레이블이 없으면 접근 가능한 단독 컨트롤로 렌더합니다. -->
  {#if !hasLabel}<label
   
    class="checkbox_control"
    class={attrs.class}
    aria-label={ariaLabel}
    data-ripple={ripple ? 'true' : 'false'}
  >
    <input
      bind:this={inputRef}
      {...inputAttrs}
      type="checkbox"
      class="checkbox_input"
      checked={checked}
      disabled={disabled}
      data-component="Checkbox"
    />
    <span class="checkbox_box" aria-hidden="true" />
  </label>
  <!-- 버튼형은 입력과 레이블을 하나의 label로 감쌉니다. -->
  {:else if button}<label class={rootClass} data-ripple={ripple ? 'true' : 'false'}>
    <input
      id={inputId}
      bind:this={inputRef}
      {...inputAttrs}
      type="checkbox"
      class="checkbox_input"
      checked={checked}
      disabled={disabled}
      data-component="Checkbox"
    />
    <span class="checkbox_label"
      >{@render children?.() ?? label}</span
    >
  </label>
  <!-- 기본형은 컨트롤과 레이블을 배치 옵션에 맞게 나란히 둡니다. -->
  {:else}<div class={rootClass} data-ripple={ripple ? 'true' : 'false'}>
    {#if labelEnd}<label class="checkbox_label" for={inputId}
      >{@render children?.() ?? label}</label
    >
    <span class="checkbox_control">
      <input
        id={inputId}
        bind:this={inputRef}
        {...inputAttrs}
        type="checkbox"
        class="checkbox_input"
        checked={checked}
        disabled={disabled}
        data-component="Checkbox"
      />
      <span class="checkbox_box" aria-hidden="true" />
    </span>
    {#if !labelEnd}<label class="checkbox_label" for={inputId}
      >{@render children?.() ?? label}</label
    >
  </div>
