import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from '../../basic/Icon/Icon.jsx';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

export function Input({
  size = 'md', disabled = false, error = false, placeholder, type = 'text', block = false,
  clearable = false, value, defaultValue = '', prefix, suffix, className = '', onChange,
  onPaste, onClear, readOnly, ...props
}) {
  const inputRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const controlled = value !== undefined;
  const [innerValue, setInnerValue] = useState(() => value ?? defaultValue ?? '');
  const currentValue = controlled ? value ?? '' : innerValue;
  const hasAddon = prefix != null || suffix != null;

  useEffect(() => {
    if (controlled) setInnerValue(value ?? '');
  }, [controlled, value]);

  const inputClasses = useMemo(() => [
    'input', resolvedSize === 'sm' && 'input_sm', resolvedSize === 'lg' && 'input_lg',
    block && 'input_block', error && 'is-error', type === 'password' && String(currentValue).length > 0 && 'input_masked',
    !hasAddon && !clearable && className
  ].filter(Boolean).join(' '), [resolvedSize, block, error, type, currentValue, hasAddon, clearable, className]);

  const numericOnly = props.inputMode === 'numeric' || props.inputmode === 'numeric';
  const maxLength = Number(props.maxLength ?? props.maxlength ?? 0);

  function sanitize(next) {
    if (numericOnly) {
      const digits = String(next).replace(/\D/g, '');
      return maxLength > 0 ? digits.slice(0, maxLength) : digits;
    }
    if (type === 'number') return String(next).replace(/[a-zA-ZeE+\-]/g, '');
    return next;
  }

  function applyValue(event, next) {
    if (next !== event.target.value) event.target.value = next;
    if (!controlled) setInnerValue(next);
    onChange?.(event);
  }

  function handleChange(event) {
    applyValue(event, sanitize(event.target.value));
  }

  function handlePaste(event) {
    onPaste?.(event);
    if (event.defaultPrevented || !numericOnly) return;
    event.preventDefault();
    const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '');
    if (!pasted) return;
    const input = event.currentTarget;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    applyValue(event, sanitize(`${input.value.slice(0, start)}${pasted}${input.value.slice(end)}`));
  }

  function handleClear() {
    if (disabled || readOnly) return;
    const input = inputRef.current;
    const descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
    descriptor?.set?.call(input, '');
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    if (!controlled) setInnerValue('');
    onClear?.();
    input.focus();
  }

  const input = <input
    {...props}
    ref={inputRef}
    type={type}
    className={inputClasses}
    placeholder={placeholder}
    disabled={disabled}
    readOnly={readOnly}
    value={currentValue}
    aria-invalid={error ? 'true' : props['aria-invalid']}
    data-component="Input"
    onChange={handleChange}
    onPaste={handlePaste}
  />;

  const control = clearable ? <span className={['input_clearable', String(currentValue).length > 0 && !disabled && !readOnly && 'is-filled'].filter(Boolean).join(' ')}>
    {input}
    <button type="button" className="input_clear" data-ripple="surface" aria-label="입력 지우기" hidden={String(currentValue).length === 0 || disabled || readOnly} onClick={handleClear}><Icon name="close" /></button>
  </span> : input;

  if (!hasAddon) return clearable ? <span className={['input_clearable', String(currentValue).length > 0 && !disabled && !readOnly && 'is-filled', className].filter(Boolean).join(' ')}>{input}<button type="button" className="input_clear" data-ripple="surface" aria-label="입력 지우기" hidden={String(currentValue).length === 0 || disabled || readOnly} onClick={handleClear}><Icon name="close" /></button></span> : input;

  return <div className={['input_group', className].filter(Boolean).join(' ')} data-component="InputGroup">
    {prefix != null && <span className="input_group-addon" aria-hidden="true">{prefix}</span>}
    {control}
    {suffix != null && <span className="input_group-addon">{suffix}</span>}
  </div>;
}

export default Input;
