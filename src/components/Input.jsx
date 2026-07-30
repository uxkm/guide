import { useEffect, useMemo, useRef, useState } from 'react';
import { useInputDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

export default function Input({
  size = 'md',
  disabled,
  error,
  placeholder,
  type = 'text',
  block,
  value,
  defaultValue = '',
  prefix,
  suffix,
  className,
  onChange,
  onPaste,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const hasAddon = prefix != null || suffix != null;

  const [inputValue, setInputValue] = useState(() => value ?? defaultValue ?? '');

  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value ?? '');
    }
  }, [value]);

  useInputDemoCode(
    {
      size: resolvedSize,
      disabled,
      error,
      placeholder,
      type,
      block,
    },
    rootRef,
    { className, ...rest },
  );

  const inputClass = useMemo(() => {
    const classes = ['input'];
    if (resolvedSize === 'sm') classes.push('input_sm');
    if (resolvedSize === 'lg') classes.push('input_lg');
    if (block) classes.push('input_block');
    if (error) classes.push('is-error');
    if (type === 'password' && String(inputValue).length > 0) {
      classes.push('input_masked');
    }
    return classes;
  }, [resolvedSize, block, error, type, inputValue]);

  const {
    class: _ignoredClassAttr,
    onChange: _ignoredOnChange,
    onPaste: _ignoredOnPaste,
    value: _ignoredValue,
    defaultValue: _ignoredDefaultValue,
    ...restForDom
  } = rest;

  const domRest = normalizeDomProps(restForDom);
  const inputMode = domRest.inputMode ?? domRest.inputmode;
  const isNumericOnly = inputMode === 'numeric';

  function getMaxLength() {
    const max = domRest.maxLength ?? domRest.maxlength;
    return max ? Number(max) : 0;
  }

  function sanitizeValue(next) {
    if (isNumericOnly) {
      let sanitized = String(next).replace(/\D/g, '');
      const maxLength = getMaxLength();
      if (maxLength > 0) sanitized = sanitized.slice(0, maxLength);
      return sanitized;
    }

    if (type === 'number') {
      return String(next).replace(/[a-zA-ZeE+-]/g, '');
    }

    return next;
  }

  function applyValue(event, next) {
    if (next !== event.target.value) {
      event.target.value = next;
    }
    setInputValue(next);
    onChange?.(event);
  }

  function handleChange(event) {
    applyValue(event, sanitizeValue(event.target.value));
  }

  function handlePaste(event) {
    onPaste?.(event);
    if (event.defaultPrevented || !isNumericOnly) return;

    event.preventDefault();

    const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '');
    if (!pasted) return;

    const input = event.target;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    const merged = `${input.value.slice(0, start)}${pasted}${input.value.slice(end)}`;

    applyValue(event, sanitizeValue(merged));
  }

  const inputEl = (
    <input
      ref={hasAddon ? undefined : rootRef}
      type={type}
      className={cn(inputClass, className)}
      placeholder={placeholder}
      disabled={disabled}
      value={inputValue}
      aria-invalid={error ? 'true' : undefined}
      onChange={handleChange}
      onPaste={handlePaste}
      {...domRest}
    />
  );

  if (hasAddon) {
    return (
      <div ref={rootRef} className={cn('input_group', className)}>
        {prefix != null ? (
          <span className="input_group-addon" aria-hidden="true" data-demo-slot="prefix">
            {prefix}
          </span>
        ) : null}
        {inputEl}
        {suffix != null ? (
          <span className="input_group-addon" data-demo-slot="suffix">
            {suffix}
          </span>
        ) : null}
      </div>
    );
  }

  return inputEl;
}
