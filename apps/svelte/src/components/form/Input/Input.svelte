<!--
  Input 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script>
import Icon from '../../basic/Icon/Icon.svelte';

// 속성을 계산된 입력에 직접 전달하기 위해 자동 상속을 끕니다.


// 크기, 입력 타입, 상태, 지우기와 애드온 옵션을 하나의 Input API로 제공합니다.
let {
  size = 'md',
  disabled = false,
  error = false,
  placeholder,
  type = 'text',
  block = false,
  clearable = false,
  modelValue = '',
  onModelValue,
  onClear,
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
} = $props();=> ['sm', 'md', 'lg'].includes(value) }, // 입력 높이와 글자 크기입니다.
  disabled: Boolean, // 입력을 비활성으로 만들어 조작을 막습니다.
  error: Boolean, // 검증 오류 상태를 시각·접근성으로 표시합니다.
  placeholder: String, // 값이 없을 때 표시할 안내입니다.
  type: { type: String, default: 'text' }, // 텍스트·이메일·비밀번호 등 네이티브 입력 타입입니다.
  block: Boolean, // 부모 너비에 맞게 전체 너비로 확장합니다.
  clearable: Boolean, // 값이 있을 때 지우기 버튼을 표시합니다.
  modelValue: { type: [String, Number], default: '' }, // v-model 현재 값입니다.
});



let inputElement = $state(null);
let inputValue = $state(modelValue ?? '');

// 외부 v-model 값이 바뀌면 내부 표시값을 동기화합니다.
$effect(
  () => modelValue,
  (value) => {
    inputValue = value ?? '';
  },
);

let hasAddon = $derived(Boolean(prefix || suffix)); // InputGroup이 필요한지 여부입니다.

// readonly는 속성 표기 방식과 관계없이 동일한 boolean 상태로 계산합니다.
let readonly = $derived(('readonly' in rest || 'readOnly' in rest) && (rest.readonly ?? rest.readOnly) !== false,
);
let showClear = $derived(clearable && !disabled && !readonly && String(inputValue).length > 0,
); // 지우기 버튼을 보일지 여부입니다.

// 크기·너비·오류·마스킹 상태를 공통 input 클래스로 변환합니다.
let inputClasses = $derived([
    'input', // 입력 필드 필수 클래스입니다.
    size === 'sm' && 'input_sm', // 작은 크기 변형입니다.
    size === 'lg' && 'input_lg', // 큰 크기 변형입니다.
    block && 'input_block', // 전체 너비 변형입니다.
    error && 'is-error', // 오류 상태 클래스입니다.
    type === 'password' && String(inputValue).length > 0 && 'input_masked', // 비밀번호 마스킹 표시입니다.
    !hasAddon && !clearable && className, // 단독 입력일 때만 루트에 사용자 클래스를 붙입니다.
  ].filter(Boolean),
);

// class는 루트에만 두고 나머지 속성은 input으로 전달합니다.
let inputAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
let numericOnly = $derived(rest.inputmode === 'numeric' || rest.inputMode === 'numeric'); // 숫자만 허용하는지 여부입니다.

// 숫자 전용·number 입력은 키보드와 붙여넣기 모두 동일한 정제 규칙을 사용합니다.
function sanitize(value) {
  if (numericOnly) {
    const digits = String(value).replace(/\D/g, '');
    const max = Number(rest.maxlength ?? rest.maxLength ?? 0);
    return max > 0 ? digits.slice(0, max) : digits;
  }
  if (type === 'number') return String(value).replace(/[a-zA-ZeE+\-]/g, '');
  return value;
}
function applyValue(event, value) {
  if (value !== event.target) event.target = value;
  inputValue = value;
  onModelValue?.(value);
}
function handleInput(event) {
  applyValue(event, sanitize(event.target));
}
function handlePaste(event) {
  if (!numericOnly) return;
  event.preventDefault();
  const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '');
  if (!pasted) return;
  const start = event.target.selectionStart ?? event.target.length;
  const end = event.target.selectionEnd ?? event.target.length;
  applyValue(
    event,
    sanitize(`${event.target.slice(0, start)}${pasted}${event.target.slice(end)}`),
  );
}
function clear() {
  // 값을 비우고 clear 이벤트를 전달한 뒤 입력으로 포커스를 복원합니다.
  if (disabled || readonly) return;
  inputValue = '';
  onModelValue?.('');
  onClear?.();
  inputElement?.focus();
}
</script>

<!-- prefix·suffix가 있으면 입력과 애드온을 하나의 InputGroup으로 묶습니다. -->
  {#if hasAddon}<div class="input_group" class={attrs.class} data-component="InputGroup">
    {#if prefix}<span class="input_group-addon" aria-hidden="true">
      {@render prefix?.()}
    </span>
    {#if clearable}<span class="input_clearable" class={{ 'is-filled': showClear }}>
      <input
        bind:this={inputElement}
        {...inputAttrs}
        type={type}
        class={inputClasses}
        placeholder={placeholder}
        disabled={disabled}
        value={inputValue}
        aria-invalid={error ? 'true' : attrs['aria-invalid']}
        data-component="Input"
        oninput={handleInput}
        onpaste={handlePaste}
      />
      <button
        type="button"
        class="input_clear"
        data-ripple="surface"
        aria-label="입력 지우기"
        hidden={!showClear}
        onclick={clear}
      >
        <Icon name="close" />
      </button>
    </span>
    {:else}<input
     
      bind:this={inputElement}
      {...inputAttrs}
      type={type}
      class={inputClasses}
      placeholder={placeholder}
      disabled={disabled}
      value={inputValue}
      aria-invalid={error ? 'true' : attrs['aria-invalid']}
      data-component="Input"
      oninput={handleInput}
      onpaste={handlePaste}
    />
    {#if suffix}<span class="input_group-addon">
      {@render suffix?.()}
    </span>
  </div>
  <!-- 애드온이 없고 clearable이면 입력과 지우기 버튼만 동일한 wrapper에 둡니다. -->
  {:else if clearable}<span
   
    class="input_clearable"
    class={[attrs.class, { 'is-filled': showClear }]}
  >
    <input
      bind:this={inputElement}
      {...inputAttrs}
      type={type}
      class={inputClasses}
      placeholder={placeholder}
      disabled={disabled}
      value={inputValue}
      aria-invalid={error ? 'true' : attrs['aria-invalid']}
      data-component="Input"
      oninput={handleInput}
      onpaste={handlePaste}
    />
    <button
      type="button"
      class="input_clear"
      data-ripple="surface"
      aria-label="입력 지우기"
      hidden={!showClear}
      onclick={clear}
    >
      <Icon name="close" />
    </button>
  </span>
  {:else}<input
   
    bind:this={inputElement}
    {...inputAttrs}
    type={type}
    class={inputClasses}
    placeholder={placeholder}
    disabled={disabled}
    value={inputValue}
    aria-invalid={error ? 'true' : attrs['aria-invalid']}
    data-component="Input"
    oninput={handleInput}
    onpaste={handlePaste}
  />
