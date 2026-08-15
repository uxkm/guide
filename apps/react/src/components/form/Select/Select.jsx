const VALID_SIZES = new Set(['sm', 'md', 'lg']);

export function Select({
  size = 'md', nativeSize, disabled = false, error = false, fit = false, placeholder,
  value, defaultValue, className = '', children, onChange, ...props
}) {
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const classes = [
    'input', resolvedSize === 'sm' && 'input_sm', resolvedSize === 'lg' && 'input_lg',
    fit && 'input_fit', error && 'is-error', className
  ].filter(Boolean).join(' ');
  const valueProps = value !== undefined
    ? { value }
    : { defaultValue: defaultValue ?? (placeholder ? '' : undefined) };

  return <select
    {...props}
    {...valueProps}
    className={classes}
    size={nativeSize}
    disabled={disabled}
    aria-invalid={error ? 'true' : props['aria-invalid']}
    data-component="Select"
    onChange={onChange}
  >
    {placeholder != null && <option value="" disabled>{placeholder}</option>}
    {children}
  </select>;
}

export default Select;
