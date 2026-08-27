/**
 * Select 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
const VALID_SIZES = new Set(['sm', 'md', 'lg']); // 지원하는 크기 이름입니다.

export function Select({
  size = 'md', // 선택 상자 높이와 글자 크기입니다.
  nativeSize, // 네이티브 select의 size 속성입니다.
  disabled = false, // 선택을 비활성으로 만들어 조작을 막습니다.
  error = false, // 검증 오류 상태를 시각·접근성으로 표시합니다.
  fit = false, // 공통 최대 너비로 너비를 제한합니다.
  placeholder, // 값이 없을 때 표시할 안내 option입니다.
  value, // 제어 컴포넌트의 선택 값입니다.
  defaultValue, // 비제어 컴포넌트의 초기 선택 값입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  children, // option 목록을 구성하는 자식입니다.
  onChange, // 선택 값 변경 콜백입니다.
  ...props // id, name 등 나머지 네이티브 select 속성을 전달합니다.
}) {
  // 크기·너비·오류 상태를 네이티브 select에 적용할 공통 클래스로 변환합니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'; // 지원 범위로 보정한 크기입니다.
  const classes = [
    'input', // Select도 Input과 동일한 입력 계열 클래스를 사용합니다.
    resolvedSize === 'sm' && 'input_sm', // 작은 크기 변형입니다.
    resolvedSize === 'lg' && 'input_lg', // 큰 크기 변형입니다.
    fit && 'input_fit', // 제한 너비 변형입니다.
    error && 'is-error', // 오류 상태 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // 제어 값이 없으면 placeholder를 위한 빈 기본값을 둡니다.
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
