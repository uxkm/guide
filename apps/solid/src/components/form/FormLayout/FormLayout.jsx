/**
 * FormLayout 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
const LAYOUTS = new Set(['vertical', 'horizontal', 'inline']); // 지원하는 배치 방향입니다.
const LABEL_WIDTHS = new Set(['', 'sm', 'lg']); // 가로 레이아웃에서 허용하는 레이블 너비입니다.

export function FormLayout({
  as: Root = 'form', // FormLayout의 루트 요소 또는 컴포넌트를 지정합니다.
  layout = 'vertical', // 필드 배치 방향입니다.
  fit = false, // 입력 영역을 공통 최대 너비로 제한합니다.
  compact = false, // 필드 사이 간격을 줄입니다.
  labelAlign = 'end', // 가로 레이아웃의 레이블 정렬입니다.
  labelWidth = '', // 가로 레이아웃의 레이블 열 너비입니다.
  children, // 폼 필드와 액션 등 내부 콘텐츠입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, onSubmit 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 지원하지 않는 layout 값은 기본 세로 배치로 안전하게 되돌립니다.
  const resolvedLayout = LAYOUTS.has(layout) ? layout : 'vertical';

  // 폼 단위 옵션을 공통 form_* 변형 클래스로 변환합니다.
  const classes = [
    'form', // 폼 레이아웃을 활성화하는 필수 클래스입니다.
    `form_${resolvedLayout}`, // 세로·가로·인라인 배치 클래스입니다.
    fit && 'form_fit', // 입력 최대 너비 제한입니다.
    compact && 'form_compact', // 조밀한 간격 변형입니다.
    resolvedLayout === 'horizontal' && labelAlign === 'start' && 'form_label-align-start', // 가로 배치에서 레이블 시작 정렬입니다.
    resolvedLayout === 'horizontal' &&
      LABEL_WIDTHS.has(labelWidth) &&
      labelWidth &&
      `form_label-width-${labelWidth}`, // 검증된 레이블 열 너비입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 class 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return (
    <Root class={classes} data-component="FormLayout" {...props}>
      {children}
    </Root>
  );
}

export function FormField({
  as: Root = 'div', // FormField의 루트 요소 또는 컴포넌트를 지정합니다.
  label, // 필드 레이블입니다.
  htmlFor, // 레이블과 연결할 입력 id입니다.
  required = false, // 필수 항목 표시를 추가합니다.
  hint, // 오류가 없을 때 보여줄 보조 설명입니다.
  error, // 검증 오류 메시지입니다.
  success, // 성공 안내 메시지입니다.
  fit = false, // 필드 너비를 공통 최대 너비로 제한합니다.
  children, // 입력 컨트롤을 담는 콘텐츠입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 개별 필드는 너비 변형과 사용자가 전달한 클래스를 함께 유지합니다.
  const classes = [
    'form_field', // 필드 단위 레이아웃 클래스입니다.
    fit && 'form_field_fit', // 필드 너비 제한입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Root class={classes} {...props}>
      {/* label과 htmlFor를 연결하고 필수 상태는 시각·보조기술 텍스트를 모두 제공합니다. */}
      {label != null && (
        <label class="form_field-label" htmlFor={htmlFor}>
          {label}
          {required && (
            <span class="form_field-required">
              <span aria-hidden="true">*</span>
              <span class="form_field-required-text">필수 항목</span>
            </span>
          )}
        </label>
      )}
      {/* 입력 컴포넌트 종류와 관계없이 동일한 control 영역에 배치합니다. */}
      <div class="form_field-control">{children}</div>
      {/* 오류는 도움말보다 우선하며 즉시 읽히도록 alert 역할을 사용합니다. */}
      {error != null ? (
        <p class="form_field-error" role="alert">
          {error}
        </p>
      ) : hint != null ? (
        <p class="form_field-hint">{hint}</p>
      ) : null}
      {/* 성공 메시지는 도움말·오류와 독립적으로 필요한 경우 표시합니다. */}
      {success != null && <p class="form_field-success">{success}</p>}
    </Root>
  );
}

export function FormActions({
  as: Root = 'div', // FormActions의 루트 요소 또는 컴포넌트를 지정합니다.
  children, // 제출·취소 등 액션 버튼입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 제출·취소 등 폼 액션을 레이아웃에 맞는 공통 영역으로 묶습니다.
  return (
    <Root class={['form_actions', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </Root>
  );
}

export default FormLayout;
