import { useEffect, useMemo, useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const formatCode = createComponentFormatter('Select', {
  defaults: { size: 'md' },
  booleanProps: new Set(['disabled', 'error', 'open', 'block', 'custom', 'selectText']),
  skipProps: ['modelValue'],
  selfClosing: false,
});

export default function Select({
  ripple,
  size = 'md',
  disabled,
  error,
  placeholder,
  open,
  block,
  custom,
  selectText,
  listSize,
  value,
  defaultValue,
  children,
  className,
  onChange,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';

  const [internalValue, setInternalValue] = useState(
    () => value ?? defaultValue,
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const currentValue = value !== undefined ? value : internalValue;

  useComponentDemoCode(
    formatCode,
    {
      ripple,
      size: resolvedSize,
      disabled,
      error,
      placeholder,
      open,
      block,
      custom,
      selectText,
      listSize,
      value: currentValue,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, onChange, ...rest },
  );

  const inputClass = useMemo(() => {
    const classes = ['input'];
    if (resolvedSize === 'sm') classes.push('input_sm');
    if (resolvedSize === 'lg') classes.push('input_lg');
    if (block) classes.push('input_block');
    if (error) classes.push('is-error');
    return classes;
  }, [resolvedSize, block, error]);

  const {
    class: _ignoredClass,
    value: _ignoredValue,
    defaultValue: _ignoredDefaultValue,
    onChange: _ignoredOnChange,
    size: _ignoredSize,
    ...restForDom
  } = rest;

  const domRest = normalizeDomProps(restForDom);

  function handleChange(event) {
    setInternalValue(event.target.value);
    onChange?.(event);
  }

  if (custom) {
    const triggerLabel = children ?? currentValue ?? placeholder;
    return (
      <Button
        ref={rootRef}
        variant="select"
        className={className}
        size={resolvedSize}
        block={block}
        selectText={selectText}
        open={open}
        error={error}
        placeholder={!currentValue && Boolean(placeholder)}
        disabled={disabled}
        haspopup="listbox"
        expanded={open}
        invalid={error}
        ripple={ripple === false ? false : true}
        {...domRest}
      >
        {triggerLabel}
      </Button>
    );
  }

  const isControlled = value !== undefined || onChange != null;
  const valueProps = isControlled
    ? { value: currentValue ?? '' }
    : defaultValue !== undefined
      ? { defaultValue }
      : placeholder
        ? { defaultValue: '' }
        : {};

  return (
    <select
      ref={rootRef}
      className={cn(inputClass, className)}
      disabled={disabled}
      size={listSize}
      aria-invalid={error ? 'true' : undefined}
      {...valueProps}
      {...domRest}
      onChange={handleChange}
    >
      {placeholder ? (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      ) : null}
      {children}
    </select>
  );
}
