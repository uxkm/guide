/**
 * Switch 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

export function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  labelEnd = false,
  size = 'md',
  ripple = true,
  ariaLabel,
  children,
  className = '',
  onChange,
  id,
  name,
  value,
  ...props
}) {
  const content = children ?? label;
  const hasLabel = content != null && content !== '';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const classes = [
    'switch',
    labelEnd && 'switch_label-end',
    resolvedSize === 'sm' && 'switch_sm',
    resolvedSize === 'lg' && 'switch_lg',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const checkedProps = onChange
    ? { checked: Boolean(checked), onChange }
    : checked != null
      ? { defaultChecked: Boolean(checked) }
      : { defaultChecked };
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
