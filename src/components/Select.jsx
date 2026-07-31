'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const formatCode = createComponentFormatter('Select', {
  defaults: { size: 'md' },
  booleanProps: new Set([
    'disabled',
    'error',
    'open',
    'block',
    'custom',
    'selectText',
    'multiple',
  ]),
  skipProps: ['modelValue'],
  selfClosing: false,
});

export default function Select({
  ref,
  ripple,
  size = 'md',
  disabled,
  error,
  placeholder,
  open,
  block,
  custom,
  selectText,
  multiple,
  listSize,
  value,
  defaultValue,
  children,
  className,
  onChange,
  ...rest
}) {
  const demoRef = useRef(null);
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
      multiple,
      listSize,
      value: currentValue,
    },
    createDemoSlots({ default: children }),
    demoRef,
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
    if (value === undefined) {
      const nextValue = event.currentTarget.multiple
        ? Array.from(event.currentTarget.selectedOptions, (option) => option.value)
        : event.currentTarget.value;
      setInternalValue(nextValue);
    }
    onChange?.(event);
  }

  function setRootRef(node) {
    demoRef.current = node;

    if (typeof ref === 'function') ref(node);
    else if (ref && typeof ref === 'object') ref.current = node;
  }

  if (custom) {
    const triggerLabel = children ?? currentValue ?? placeholder;
    const isPlaceholder = currentValue == null || currentValue === '';
    return (
      <Button
        ref={setRootRef}
        variant="select"
        className={className}
        size={resolvedSize}
        block={block}
        selectText={selectText}
        open={open}
        error={error}
        placeholder={isPlaceholder && Boolean(placeholder)}
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

  const isControlled = value !== undefined;
  const valueProps = isControlled
    ? { value: currentValue ?? (multiple ? [] : '') }
    : defaultValue !== undefined
      ? { defaultValue }
      : placeholder
        ? { defaultValue: '' }
        : {};

  return (
    <select
      ref={setRootRef}
      className={cn(inputClass, className)}
      disabled={disabled}
      multiple={multiple}
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
