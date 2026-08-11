const LAYOUTS = new Set(['vertical', 'horizontal', 'inline']);
const LABEL_WIDTHS = new Set(['', 'sm', 'lg']);

export function FormLayout({
  as: Root = 'form', layout = 'vertical', fit = false, compact = false,
  labelAlign = 'end', labelWidth = '', children, className = '', ...props
}) {
  const resolvedLayout = LAYOUTS.has(layout) ? layout : 'vertical';
  const classes = [
    'form', `form_${resolvedLayout}`, fit && 'form_fit', compact && 'form_compact',
    resolvedLayout === 'horizontal' && labelAlign === 'start' && 'form_label-align-start',
    resolvedLayout === 'horizontal' && LABEL_WIDTHS.has(labelWidth) && labelWidth && `form_label-width-${labelWidth}`,
    className
  ].filter(Boolean).join(' ');

  return <Root className={classes} data-component="FormLayout" {...props}>{children}</Root>;
}

export function FormField({
  as: Root = 'div', label, htmlFor, required = false, hint, error, success,
  fit = false, children, className = '', ...props
}) {
  const classes = ['form_field', fit && 'form_field_fit', className].filter(Boolean).join(' ');
  return (
    <Root className={classes} {...props}>
      {label != null && <label className="form_field-label" htmlFor={htmlFor}>{label}{required && <span className="form_field-required"><span aria-hidden="true">*</span><span className="form_field-required-text">필수 항목</span></span>}</label>}
      <div className="form_field-control">{children}</div>
      {error != null ? <p className="form_field-error" role="alert">{error}</p> : hint != null ? <p className="form_field-hint">{hint}</p> : null}
      {success != null && <p className="form_field-success">{success}</p>}
    </Root>
  );
}

export function FormActions({ as: Root = 'div', children, className = '', ...props }) {
  return <Root className={['form_actions', className].filter(Boolean).join(' ')} {...props}>{children}</Root>;
}

export default FormLayout;
