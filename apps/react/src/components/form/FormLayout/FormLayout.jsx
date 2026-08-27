/**
 * FormLayout 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
const LAYOUTS = new Set(['vertical', 'horizontal', 'inline']);
const LABEL_WIDTHS = new Set(['', 'sm', 'lg']);

export function FormLayout({
  as: Root = 'form',
  layout = 'vertical',
  fit = false,
  compact = false,
  labelAlign = 'end',
  labelWidth = '',
  children,
  className = '',
  ...props
}) {
  // 지원하지 않는 layout 값은 기본 세로 배치로 안전하게 되돌립니다.
  const resolvedLayout = LAYOUTS.has(layout) ? layout : 'vertical';
  // 폼 단위 옵션을 공통 form_* 변형 클래스로 변환합니다.
  const classes = [
    'form',
    `form_${resolvedLayout}`,
    fit && 'form_fit',
    compact && 'form_compact',
    resolvedLayout === 'horizontal' && labelAlign === 'start' && 'form_label-align-start',
    resolvedLayout === 'horizontal' &&
      LABEL_WIDTHS.has(labelWidth) &&
      labelWidth &&
      `form_label-width-${labelWidth}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Root className={classes} data-component="FormLayout" {...props}>
      {children}
    </Root>
  );
}

export function FormField({
  as: Root = 'div',
  label,
  htmlFor,
  required = false,
  hint,
  error,
  success,
  fit = false,
  children,
  className = '',
  ...props
}) {
  // 개별 필드는 너비 변형과 사용자가 전달한 클래스를 함께 유지합니다.
  const classes = ['form_field', fit && 'form_field_fit', className].filter(Boolean).join(' ');
  return (
    <Root className={classes} {...props}>
      {/* label과 htmlFor를 연결하고 필수 상태는 시각·보조기술 텍스트를 모두 제공합니다. */}
      {label != null && (
        <label className="form_field-label" htmlFor={htmlFor}>
          {label}
          {required && (
            <span className="form_field-required">
              <span aria-hidden="true">*</span>
              <span className="form_field-required-text">필수 항목</span>
            </span>
          )}
        </label>
      )}
      {/* 입력 컴포넌트 종류와 관계없이 동일한 control 영역에 배치합니다. */}
      <div className="form_field-control">{children}</div>
      {/* 오류는 도움말보다 우선하며 즉시 읽히도록 alert 역할을 사용합니다. */}
      {error != null ? (
        <p className="form_field-error" role="alert">
          {error}
        </p>
      ) : hint != null ? (
        <p className="form_field-hint">{hint}</p>
      ) : null}
      {/* 성공 메시지는 도움말·오류와 독립적으로 필요한 경우 표시합니다. */}
      {success != null && <p className="form_field-success">{success}</p>}
    </Root>
  );
}

export function FormActions({ as: Root = 'div', children, className = '', ...props }) {
  // 제출·취소 등 폼 액션을 레이아웃에 맞는 공통 영역으로 묶습니다.
  return (
    <Root className={['form_actions', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </Root>
  );
}

export default FormLayout;
