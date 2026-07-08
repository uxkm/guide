import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { useInputDemoCode } from '@/hooks/useDemoCode';

export default function Input({
  size = 'md',
  disabled,
  error,
  placeholder,
  type = 'text',
  block,
  value: valueProp,
  modelValue,
  defaultValue,
  prefix,
  suffix,
  readOnly,
  readonly,
  ariaLabel,
  className,
  onChange,
  onInput,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedValue = valueProp ?? modelValue;
  const props = { size, disabled, error, placeholder, type, block, modelValue: resolvedValue };
  const [inputValue, setInputValue] = useState(resolvedValue ?? defaultValue ?? '');

  useInputDemoCode(props, rootRef, { class: className, ...rest });

  useEffect(() => {
    if (resolvedValue !== undefined) {
      setInputValue(resolvedValue ?? '');
    }
  }, [resolvedValue]);

  const hasAddon = Boolean(prefix || suffix);

  const inputClass = cn(
    'input',
    size === 'sm' && 'input_sm',
    size === 'lg' && 'input_lg',
    block && 'input_block',
    error && 'is-error',
    type === 'password' && inputValue.length > 0 && 'input_masked',
  );

  const domRest = normalizeDomProps({ ...rest, ariaLabel });

  const isNumericOnly = domRest.inputMode === 'numeric';

  function getMaxLength() {
    const max = domRest.maxLength;
    return max ? Number(max) : 0;
  }

  function sanitizeValue(value) {
    if (isNumericOnly) {
      let next = value.replace(/\D/g, '');
      const maxLength = getMaxLength();
      if (maxLength > 0) next = next.slice(0, maxLength);
      return next;
    }

    if (type === 'number') {
      return value.replace(/[a-zA-ZeE+]/g, '');
    }

    return value;
  }

  function applyValue(event, value) {
    if (value !== event.target.value) {
      event.target.value = value;
    }
    setInputValue(value);
    onChange?.(event);
    onInput?.(event);
  }

  function handleChange(event) {
    applyValue(event, sanitizeValue(event.target.value));
  }

  function handlePaste(event) {
    if (!isNumericOnly) return;

    event.preventDefault();

    const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '');
    if (!pasted) return;

    const input = event.target;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    const merged = `${input.value.slice(0, start)}${pasted}${input.value.slice(end)}`;

    applyValue(event, sanitizeValue(merged));
  }

  const resolvedReadOnly = readOnly ?? readonly;

  const inputProps = {
    type,
    className: hasAddon ? inputClass : cn(inputClass, className),
    placeholder,
    disabled,
    readOnly: resolvedReadOnly,
    value: inputValue,
    onChange: handleChange,
    onInput: handleChange,
    onPaste: handlePaste,
    ...domRest,
    'aria-invalid': error ? 'true' : domRest['aria-invalid'],
  };

  if (hasAddon) {
    return (
      <div ref={rootRef} className={cn('input_group', className)}>
        {prefix ? (
          <span className="input_group-addon" aria-hidden="true" data-demo-slot="prefix">
            {prefix}
          </span>
        ) : null}
        <input {...inputProps} />
        {suffix ? (
          <span className="input_group-addon" data-demo-slot="suffix">
            {suffix}
          </span>
        ) : null}
      </div>
    );
  }

  return <input ref={rootRef} {...inputProps} />;
}
