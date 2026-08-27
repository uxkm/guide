/**
 * Switch 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
const VALID_SIZES = new Set(['sm', 'md', 'lg']); // 지원하는 크기 이름입니다.

export function Switch({
  label, // 보이는 레이블 텍스트입니다.
  checked, // 제어 컴포넌트의 켜짐 상태입니다.
  defaultChecked, // 비제어 컴포넌트의 초기 켜짐 상태입니다.
  disabled = false, // 입력을 비활성으로 만들어 조작을 막습니다.
  labelEnd = false, // 레이블을 스위치보다 앞에 배치합니다.
  size = 'md', // 트랙과 레이블 크기입니다.
  ripple = true, // 클릭 파장 효과를 표시할지 여부입니다.
  ariaLabel, // 보이는 레이블이 없을 때 접근 가능한 이름입니다.
  children, // label 대신 사용할 사용자 정의 레이블 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onChange, // 켜짐 상태 변경 콜백입니다.
  id, // 네이티브 input에 연결할 id입니다.
  name, // 폼 제출에 사용할 name입니다.
  value, // 폼 제출에 사용할 value입니다.
  ...props // 나머지 네이티브 checkbox 속성을 입력에 전달합니다.
}) {
  // 레이블 유무와 크기를 정규화한 뒤 공통 클래스를 조합합니다.
  const content = children ?? label; // 표시할 최종 레이블 콘텐츠입니다.
  const hasLabel = content != null && content !== ''; // 보이는 레이블이 있는지 여부입니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md'; // 지원 범위로 보정한 크기입니다.
  const classes = [
    'switch', // 스위치 루트 필수 클래스입니다.
    labelEnd && 'switch_label-end', // 레이블 우선 배치 변형입니다.
    resolvedSize === 'sm' && 'switch_sm', // 작은 크기 변형입니다.
    resolvedSize === 'lg' && 'switch_lg', // 큰 크기 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // onChange 유무에 따라 제어·비제어 체크 props를 구성합니다.
  const checkedProps = onChange
    ? { checked: Boolean(checked), onChange }
    : checked != null
      ? { defaultChecked: Boolean(checked) }
      : { defaultChecked };

  // 레이블·트랙·손잡이를 하나의 label로 묶어 스위치 UI를 구성합니다.
  return (
    <label
      className={classes}
      aria-label={!hasLabel ? ariaLabel : undefined}
      data-ripple={ripple ? 'true' : 'false'}
    >
      {hasLabel && labelEnd && <span className="switch_label">{content}</span>}
      <span className="switch_control">
        <input
          {...props}
          id={id}
          type="checkbox"
          className="switch_input"
          role="switch"
          name={name}
          value={value}
          disabled={disabled}
          aria-label={!hasLabel ? ariaLabel : undefined}
          {...checkedProps}
          data-component="Switch"
        />
        <span className="switch_track" aria-hidden="true">
          <span className="switch_thumb" />
        </span>
      </span>
      {hasLabel && !labelEnd && <span className="switch_label">{content}</span>}
    </label>
  );
}

export default Switch;
