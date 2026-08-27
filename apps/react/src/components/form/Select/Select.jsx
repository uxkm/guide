/**
 * Select 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

export function Select({
  size = 'md',
  nativeSize,
  disabled = false,
  error = false,
  fit = false,
  placeholder,
  value,
  defaultValue,
  className = '',
  children,
  onChange,
  ...props
}) {
  // 크기·너비·오류 상태를 네이티브 select에 적용할 공통 클래스로 변환합니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const classes = [
    'input',
    resolvedSize === 'sm' && 'input_sm',
    resolvedSize === 'lg' && 'input_lg',
    fit && 'input_fit',
    error && 'is-error',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const valueProps =
    value !== undefined
      ? { value }
      : { defaultValue: defaultValue ?? (placeholder ? '' : undefined) };

  return (
    <select
      {...props}
      {...valueProps}
      className={classes}
      size={nativeSize}
      disabled={disabled}
      aria-invalid={error ? 'true' : props['aria-invalid']}
      data-component="Select"
      onChange={onChange}
    >
      {/* placeholder는 실제 값이 없는 비활성 option으로 제공합니다. */}
      {placeholder != null && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
}

export default Select;
