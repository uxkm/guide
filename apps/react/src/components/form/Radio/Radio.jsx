/**
 * Radio 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
export function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  labelEnd = false,
  button = false,
  ripple = true,
  ariaLabel,
  children,
  className = '',
  onChange,
  id,
  ...props
}) {
  const content = children ?? label;
  const standalone = content == null || content === '';
  const classes = ['radio', labelEnd && 'radio_label-end', button && 'radio_button', className]
    .filter(Boolean)
    .join(' ');
  const checkedProps = onChange
    ? { checked: Boolean(checked), onChange }
    : checked != null
      ? { defaultChecked: Boolean(checked) }
      : { defaultChecked };
  const input = (
    <input
      {...props}
      id={id}
      type="radio"
      className="radio_input"
      name={name}
      value={value}
      disabled={disabled}
      {...checkedProps}
      data-component="Radio"
    />
  );
  const rippleAttrs = { 'data-ripple': ripple ? 'true' : 'false' };
  if (standalone)
    return (
      <label
        className={['radio_control', className].filter(Boolean).join(' ')}
        aria-label={ariaLabel}
        {...rippleAttrs}
      >
        {input}
        <span className="radio_box" aria-hidden="true" />
      </label>
    );
  if (button)
    return (
      <label className={classes} {...rippleAttrs}>
        {input}
        <span className="radio_label">{content}</span>
      </label>
    );
  return (
    <label className={classes} {...rippleAttrs}>
      {labelEnd && <span className="radio_label">{content}</span>}
      <span className="radio_control">
        {input}
        <span className="radio_box" aria-hidden="true" />
      </span>
      {!labelEnd && <span className="radio_label">{content}</span>}
    </label>
  );
}

export default Radio;
