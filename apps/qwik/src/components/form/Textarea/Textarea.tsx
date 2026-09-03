import { component$, useId, useSignal } from '@builder.io/qwik';
/**
 * Textarea 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import Icon from '../../basic/Icon/Icon.tsx';

const VALID_SIZES = new Set(['sm', 'md', 'lg']); // 지원하는 크기 이름입니다.
const VALID_RESIZE = new Set(['none', 'vertical', 'horizontal', 'both']); // 지원하는 크기 조절 방향입니다.

export const Textarea = component$(({
  size = 'md', // 텍스트 영역 높이와 글자 크기입니다.
  resize = 'none', // 사용자가 조절할 수 있는 방향입니다.
  disabled = false, // 입력을 비활성으로 만들어 조작을 막습니다.
  error = false, // 검증 오류 상태를 시각·접근성으로 표시합니다.
  fit = false, // 공통 최대 너비로 너비를 제한합니다.
  showCount = false, // 글자 수 카운터를 표시합니다.
  clearable = false, // 값이 있을 때 지우기 버튼을 표시합니다.
  value, // 제어 컴포넌트의 현재 값입니다.
  defaultValue = '', // 비제어 컴포넌트의 초기 값입니다.
  class: className = '', // textarea에 적용할 사용자 정의 클래스입니다.
  wrapperClassName = '', // 카운터 래퍼에 적용할 사용자 정의 클래스입니다.
  onChange, // 값 변경 콜백입니다.
  onClear, // 지우기 버튼 클릭 콜백입니다.
  maxLength, // 최대 입력 글자 수입니다.
  readOnly, // 읽기 전용으로 만들어 편집을 막습니다.
  ...props // id, name, rows 등 나머지 네이티브 textarea 속성을 전달합니다.
}) {
  const textareaRef = useSignal();
  // 고유 카운터 id와 제어·비제어 현재 값을 계산합니다.
  const generatedId = useId().replace(/:/g, '');
  const controlled = value !== undefined; // 외부 value로 제어되는지 여부입니다.
  const innerValue = useSignal(() => value ?? defaultValue ?? '');
  const currentValue = controlled ? (value ?? '') : innerValue.value; // 화면에 표시할 최종 값입니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'; // 지원 범위로 보정한 크기입니다.
  const resolvedResize = VALID_RESIZE.has(resize) ? resize : 'none'; // 지원 범위로 보정한 resize입니다.
  const countId = `${props.id || `textarea-${generatedId}`}-count`; // 카운터 요소 id입니다.
  const describedBy =
    [props['aria-describedby'], showCount && countId].filter(Boolean).join(' ') || undefined; // 카운터를 보조 설명으로 연결합니다.
  const count = String(currentValue).length; // 현재 글자 수입니다.
  const resolvedMaxLength = Number(maxLength);
  const nativeMaxLength =
    Number.isFinite(resolvedMaxLength) && resolvedMaxLength > 0 ? resolvedMaxLength : undefined;
  const hasLimit = nativeMaxLength != null; // 최대 길이 제한이 있는지 여부입니다.
  const showClear = clearable && count > 0 && !disabled && !readOnly;

  // 크기, resize 방향, 제한 너비와 오류 상태를 공통 클래스로 변환합니다.
  const classes = [
        'textarea', // 텍스트 영역 필수 클래스입니다.
        resolvedSize === 'sm' && 'textarea_sm', // 작은 크기 변형입니다.
        resolvedSize === 'lg' && 'textarea_lg', // 큰 크기 변형입니다.
        `textarea_resize_${resolvedResize}`, // 크기 조절 방향 클래스입니다.
        !showCount && !clearable && fit && 'textarea_fit', // wrapper 없이 fit일 때 너비 제한입니다.
        error && 'is-error', // 오류 상태 클래스입니다.
        className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
      ]
        .filter(Boolean)
        .join(' ');

  function handleChange(event) {
    // 비제어 상태를 갱신한 뒤 외부 change 핸들러를 호출합니다.
    if (!controlled) innerValue.value = event.target.value;
    onChange?.(event);
  }

  function handleClear() {
    if (disabled || readOnly) return;
    const textarea = textareaRef.value;
    const descriptor = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      'value',
    );
    descriptor?.set?.call(textarea, '');
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    textarea.dispatchEvent(new Event('change', { bubbles: true }));
    if (!controlled) innerValue.value = '';
    onClear?.();
    textarea.focus();
  }

  // 공통 네이티브 textarea를 한 곳에서 정의합니다.
  const control = (
    <textarea
      {...props}
      ref={textareaRef}
      class={classes}
      disabled={disabled}
      readOnly={readOnly}
      maxLength={nativeMaxLength}
      value={currentValue}
      aria-invalid={error ? 'true' : props['aria-invalid']}
      aria-describedby={describedBy}
      data-component="Textarea"
      onChange$={handleChange}
    />
  );

  const clearButton = clearable ? (
    <button
      type="button"
      class="textarea_clear"
      data-ripple="surface"
      aria-label="입력 지우기"
      hidden={!showClear}
      onClick$={handleClear}
    >
      <Icon name="close" />
    </button>
  ) : null;

  // 카운터·지우기가 없으면 불필요한 wrapper 없이 textarea를 직접 반환합니다.
  if (!showCount && !clearable) return control;

  return (
    <div
      class={[
        'textarea_wrap', // 카운터·지우기와 함께 묶는 래퍼입니다.
        showCount && 'textarea_show-count', // 카운터 표시 모드입니다.
        clearable && 'textarea_clearable', // 지우기 버튼 모드입니다.
        showClear && 'is-filled', // 값이 있어 지우기 버튼을 표시합니다.
        fit && 'textarea_wrap_fit', // 래퍼 단위 너비 제한입니다.
        wrapperClassName, // 호출 위치에서 전달한 래퍼 클래스입니다.
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {control}
      {clearButton}
      {showCount ? (
        <span
          id={countId}
          class={['textarea_count', hasLimit && count >= nativeMaxLength && 'is-limit']
            .filter(Boolean)
            .join(' ')}
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <span class="textarea_count_visual" aria-hidden="true">
            {count}
            {hasLimit ? `/${nativeMaxLength}` : ''}
          </span>
          <span class="textarea_count_announcer">
            {count}자 입력{hasLimit ? `, 최대 ${nativeMaxLength}자` : ''}
          </span>
        </span>
      ) : null}
    </div>
  );
});

export default Textarea;
