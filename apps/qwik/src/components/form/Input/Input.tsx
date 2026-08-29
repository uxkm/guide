import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
/**
 * Input 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import Icon from '../../basic/Icon/Icon.tsx';

const VALID_SIZES = new Set(['sm', 'md', 'lg']); // 지원하는 크기 이름입니다.

export const Input = component$(({
  size = 'md', // 입력 높이와 글자 크기입니다.
  disabled = false, // 입력을 비활성으로 만들어 조작을 막습니다.
  error = false, // 검증 오류 상태를 시각·접근성으로 표시합니다.
  placeholder, // 값이 없을 때 표시할 안내입니다.
  type = 'text', // 텍스트·이메일·비밀번호 등 네이티브 입력 타입입니다.
  block = false, // 부모 너비에 맞게 전체 너비로 확장합니다.
  clearable = false, // 값이 있을 때 지우기 버튼을 표시합니다.
  value, // 제어 컴포넌트의 현재 값입니다.
  defaultValue = '', // 비제어 컴포넌트의 초기 값입니다.
  prefix, // 입력 앞에 붙는 애드온 콘텐츠입니다.
  suffix, // 입력 뒤에 붙는 애드온 콘텐츠입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onChange, // 값 변경 콜백입니다.
  onPaste, // 붙여넣기 이벤트 콜백입니다.
  onClear, // 지우기 버튼 클릭 콜백입니다.
  readOnly, // 읽기 전용으로 만들어 편집을 막습니다.
  ...props // id, name, maxLength 등 나머지 네이티브 input 속성을 전달합니다.
}) {
  const inputRef = useSignal<HTMLElement | undefined>(undefined);

  // 크기와 제어 여부를 정규화하고 화면에 표시할 현재 값을 하나로 계산합니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'; // 지원 범위로 보정한 크기입니다.
  const controlled = value !== undefined; // 외부 value로 제어되는지 여부입니다.
  const innerValue = useSignal(() => value ?? defaultValue ?? '');
  const currentValue = controlled ? (value ?? '') : innerValue.value; // 화면에 표시할 최종 값입니다.
  const hasAddon = prefix != null || suffix != null; // InputGroup이 필요한지 여부입니다.

  useVisibleTask$(({ track, cleanup }) => {
    track(() => controlled);
    track(() => value);

    // 제어 컴포넌트의 외부 값이 바뀌면 내부 표시값도 동기화합니다.
    if (controlled) innerValue.value = value ?? '';
  
  });

  // 크기·너비·오류·마스킹 상태를 공통 input 클래스로 변환합니다.
  const inputClasses = [
        'input', // 입력 필드 필수 클래스입니다.
        resolvedSize === 'sm' && 'input_sm', // 작은 크기 변형입니다.
        resolvedSize === 'lg' && 'input_lg', // 큰 크기 변형입니다.
        block && 'input_block', // 전체 너비 변형입니다.
        error && 'is-error', // 오류 상태 클래스입니다.
        type === 'password' && String(currentValue).length > 0 && 'input_masked', // 비밀번호 마스킹 표시입니다.
        !hasAddon && !clearable && className, // 단독 입력일 때만 루트에 사용자 클래스를 붙입니다.
      ]
        .filter(Boolean)
        .join(' ');

  const numericOnly = props.inputMode === 'numeric' || props.inputmode === 'numeric'; // 숫자만 허용하는지 여부입니다.
  const maxLength = Number(props.maxLength ?? props.maxlength ?? 0); // 최대 입력 길이입니다.

  // 숫자 전용·number 입력은 키보드와 붙여넣기 모두 동일한 정제 규칙을 사용합니다.
  function sanitize(next) {
    if (numericOnly) {
      const digits = String(next).replace(/\D/g, '');
      return maxLength > 0 ? digits.slice(0, maxLength) : digits;
    }
    if (type === 'number') return String(next).replace(/[a-zA-ZeE+\-]/g, '');
    return next;
  }

  function applyValue(event, next) {
    // DOM 값, 비제어 상태, 외부 onChange를 한 순서로 갱신합니다.
    if (next !== event.target.value) event.target.value = next;
    if (!controlled) innerValue.value = next;
    onChange?.(event);
  }

  function handleChange(event) {
    applyValue(event, sanitize(event.target.value));
  }

  function handlePaste(event) {
    onPaste?.(event);
    if (event.defaultPrevented || !numericOnly) return;
    event.preventDefault();
    const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '');
    if (!pasted) return;
    const input = event.currentTarget;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    applyValue(event, sanitize(`${input.value.slice(0, start)}${pasted}${input.value.slice(end)}`));
  }

  function handleClear() {
    // 네이티브 setter와 input/change 이벤트를 사용해 폼 라이브러리에도 삭제를 알립니다.
    if (disabled || readOnly) return;
    const input = inputRef.value;
    const descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
    descriptor?.set?.call(input, '');
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    if (!controlled) innerValue.value = '';
    onClear?.();
    input.focus();
  }

  // 공통 네이티브 input을 한 곳에서 정의합니다.
  const input = (
    <input
      {...props}
      ref={inputRef}
      type={type}
      class={inputClasses}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      value={currentValue}
      aria-invalid={error ? 'true' : props['aria-invalid']}
      data-component="Input"
      onChange$={handleChange}
      onPaste={handlePaste}
    />
  );

  // 지우기 버튼이 있으면 입력과 버튼을 clearable 래퍼로 묶습니다.
  const control = clearable ? (
    <span
      class={[
        'input_clearable',
        String(currentValue).length > 0 && !disabled && !readOnly && 'is-filled',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {input}
      <button
        type="button"
        class="input_clear"
        data-ripple="surface"
        aria-label="입력 지우기"
        hidden={String(currentValue).length === 0 || disabled || readOnly}
        onClick$={handleClear}
      >
        <Icon name="close" />
      </button>
    </span>
  ) : (
    input
  );

  // 애드온이 없으면 clearable 래퍼 또는 단독 입력을 바로 반환합니다.
  if (!hasAddon)
    return clearable ? (
      <span
        class={[
          'input_clearable',
          String(currentValue).length > 0 && !disabled && !readOnly && 'is-filled',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {input}
        <button
          type="button"
          class="input_clear"
          data-ripple="surface"
          aria-label="입력 지우기"
          hidden={String(currentValue).length === 0 || disabled || readOnly}
          onClick$={handleClear}
        >
          <Icon name="close" />
        </button>
      </span>
    ) : (
      input
    );

  // prefix·suffix가 있으면 입력과 애드온을 하나의 InputGroup으로 묶습니다.
  return (
    <div
      class={['input_group', className].filter(Boolean).join(' ')}
      data-component="InputGroup"
    >
      {prefix != null && (
        <span class="input_group-addon" aria-hidden="true">
          {prefix}
        </span>
      )}
      {control}
      {suffix != null && <span class="input_group-addon">{suffix}</span>}
    </div>
  );
});

export default Input;
