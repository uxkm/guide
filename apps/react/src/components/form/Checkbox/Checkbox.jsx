/**
 * Checkbox 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useRef } from 'react';

export function Checkbox({
  label, // 보이는 레이블 텍스트입니다.
  checked, // 제어 컴포넌트의 체크 상태입니다.
  defaultChecked, // 비제어 컴포넌트의 초기 체크 상태입니다.
  disabled = false, // 입력을 비활성으로 만들어 조작을 막습니다.
  indeterminate = false, // 부분 선택 상태를 네이티브 indeterminate로 반영합니다.
  labelEnd = false, // 레이블을 입력보다 앞에 배치합니다.
  button = false, // 버튼형 체크박스 변형을 사용합니다.
  ripple = true, // 클릭 파장 효과를 표시할지 여부입니다.
  ariaLabel, // 보이는 레이블이 없을 때 접근 가능한 이름입니다.
  children, // label 대신 사용할 사용자 정의 레이블 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  onChange, // 체크 상태 변경 콜백입니다.
  id, // 네이티브 input에 연결할 id입니다.
  ...props // 나머지 네이티브 checkbox 속성을 입력에 전달합니다.
}) {
  // 레이블 연결과 입력 참조에 필요한 식별자와 ref를 준비합니다.
  const generatedId = useId();
  const inputRef = useRef(null);
  const inputId = id ?? generatedId;
  const content = children ?? label; // 표시할 최종 레이블 콘텐츠입니다.
  const standalone = content == null || content === ''; // 레이블 없는 단독 체크박스인지 여부입니다.

  // 레이아웃·버튼 변형과 사용자 클래스를 조합합니다.
  const classes = [
    'checkbox', // 체크박스 루트 필수 클래스입니다.
    labelEnd && 'checkbox_label-end', // 레이블 우선 배치 변형입니다.
    button && 'checkbox_button', // 버튼형 변형입니다.
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

  // 공통 네이티브 checkbox 입력을 한 곳에서 정의합니다.
  const input = (
    <input
      {...props}
      ref={inputRef}
      id={standalone ? id : inputId}
      type="checkbox"
      className="checkbox_input"
      disabled={disabled}
      {...checkedProps}
      data-component="Checkbox"
    />
  );
  const rippleAttrs = { 'data-ripple': ripple ? 'true' : 'false' }; // 파장 효과 데이터 속성입니다.

  // indeterminate는 React prop이 아니므로 DOM에 직접 동기화합니다.
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = Boolean(indeterminate);
  }, [indeterminate]);

  // 레이블이 없으면 접근 가능한 단독 컨트롤로 렌더합니다.
  if (standalone)
    return (
      <label
        className={['checkbox_control', className].filter(Boolean).join(' ')}
        aria-label={ariaLabel}
        {...rippleAttrs}
      >
        {input}
        <span className="checkbox_box" aria-hidden="true" />
      </label>
    );

  // 버튼형은 입력과 레이블을 하나의 label로 감쌉니다.
  if (button)
    return (
      <label className={classes} {...rippleAttrs}>
        {input}
        <span className="checkbox_label">{content}</span>
      </label>
    );

  // 기본형은 컨트롤과 레이블을 배치 옵션에 맞게 나란히 둡니다.
  return (
    <div className={classes} {...rippleAttrs}>
      {labelEnd && (
        <label className="checkbox_label" htmlFor={inputId}>
          {content}
        </label>
      )}
      <span className="checkbox_control">
        {input}
        <span className="checkbox_box" aria-hidden="true" />
      </span>
      {!labelEnd && (
        <label className="checkbox_label" htmlFor={inputId}>
          {content}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
