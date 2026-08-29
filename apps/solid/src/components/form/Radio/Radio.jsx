/**
 * Radio 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
export function Radio({
  label, // 보이는 레이블 텍스트입니다.
  name, // 같은 그룹으로 묶을 라디오 name입니다.
  value, // 폼 제출 시 전달할 값입니다.
  checked, // 제어 컴포넌트의 선택 상태입니다.
  defaultChecked, // 비제어 컴포넌트의 초기 선택 상태입니다.
  disabled = false, // 입력을 비활성으로 만들어 조작을 막습니다.
  labelEnd = false, // 레이블을 입력보다 앞에 배치합니다.
  button = false, // 버튼형 라디오 변형을 사용합니다.
  ripple = true, // 클릭 파장 효과를 표시할지 여부입니다.
  ariaLabel, // 보이는 레이블이 없을 때 접근 가능한 이름입니다.
  children, // label 대신 사용할 사용자 정의 레이블 콘텐츠입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onChange, // 선택 상태 변경 콜백입니다.
  id, // 네이티브 input에 연결할 id입니다.
  ...props // 나머지 네이티브 radio 속성을 입력에 전달합니다.
}) {
  // 표시 콘텐츠와 단독 여부, 변형 클래스를 계산합니다.
  const content = children ?? label; // 표시할 최종 레이블 콘텐츠입니다.
  const standalone = content == null || content === ''; // 레이블 없는 단독 라디오인지 여부입니다.
  const classes = [
    'radio', // 라디오 루트 필수 클래스입니다.
    labelEnd && 'radio_label-end', // 레이블 우선 배치 변형입니다.
    button && 'radio_button', // 버튼형 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 class 문자열로 만듭니다.

  // onChange 유무에 따라 제어·비제어 선택 props를 구성합니다.
  const checkedProps = onChange
    ? { checked: Boolean(checked), onChange }
    : checked != null
      ? { defaultChecked: Boolean(checked) }
      : { defaultChecked };

  // 공통 네이티브 radio 입력을 한 곳에서 정의합니다.
  const input = (
    <input
      {...props}
      id={id}
      type="radio"
      class="radio_input"
      name={name}
      value={value}
      disabled={disabled}
      {...checkedProps}
      data-component="Radio"
    />
  );
  const rippleAttrs = { 'data-ripple': ripple ? 'true' : 'false' }; // 파장 효과 데이터 속성입니다.

  // 레이블이 없으면 접근 가능한 단독 컨트롤로 렌더합니다.
  if (standalone)
    return (
      <label
        class={['radio_control', className].filter(Boolean).join(' ')}
        aria-label={ariaLabel}
        {...rippleAttrs}
      >
        {input}
        <span class="radio_box" aria-hidden="true" />
      </label>
    );

  // 버튼형은 입력과 레이블을 하나의 label로 감쌉니다.
  if (button)
    return (
      <label class={classes} {...rippleAttrs}>
        {input}
        <span class="radio_label">{content}</span>
      </label>
    );

  // 기본형은 컨트롤과 레이블을 배치 옵션에 맞게 나란히 둡니다.
  return (
    <label class={classes} {...rippleAttrs}>
      {labelEnd && <span class="radio_label">{content}</span>}
      <span class="radio_control">
        {input}
        <span class="radio_box" aria-hidden="true" />
      </span>
      {!labelEnd && <span class="radio_label">{content}</span>}
    </label>
  );
}

export default Radio;
