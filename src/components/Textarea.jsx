'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const formatCode = createComponentFormatter('Textarea', {
  defaults: { size: 'md', rows: 3 },
  booleanProps: new Set(['disabled', 'error', 'block']),
  skipProps: ['modelValue'],
  selfClosing: true,
});

export default function Textarea({
  ref,
  size = 'md',
  disabled,
  error,
  placeholder,
  block,
  rows = 3,
  value,
  defaultValue = '',
  className,
  onChange,
  ...rest
}) {
  const demoRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';

  const [textValue, setTextValue] = useState(() => value ?? defaultValue ?? '');
  const currentValue = value !== undefined ? (value ?? '') : textValue;

  useEffect(() => {
    if (value !== undefined) {
      setTextValue(value ?? '');
    }
  }, [value]);

  useComponentDemoCode(
    formatCode,
    {
      size: resolvedSize,
      disabled,
      error,
      placeholder,
      block,
      rows,
      value: currentValue,
    },
    createDemoSlots(),
    demoRef,
    { className, onChange, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['textarea'];
    if (resolvedSize === 'sm') classes.push('textarea_sm');
    if (resolvedSize === 'lg') classes.push('textarea_lg');
    if (block) classes.push('textarea_block');
    if (error) classes.push('is-error');
    return classes;
  }, [resolvedSize, block, error]);

  const {
    class: _ignoredClass,
    value: _ignoredValue,
    defaultValue: _ignoredDefaultValue,
    onChange: _ignoredOnChange,
    ...restForDom
  } = rest;

  const domRest = normalizeDomProps(restForDom);

  function handleChange(event) {
    if (value === undefined) {
      setTextValue(event.target.value);
    }
    onChange?.(event);
  }

  function setTextareaRef(node) {
    demoRef.current = node;

    if (typeof ref === 'function') ref(node);
    else if (ref && typeof ref === 'object') ref.current = node;
  }

  return (
    <textarea
      ref={setTextareaRef}
      className={cn(rootClass, className)}
      rows={rows}
      placeholder={placeholder}
      disabled={disabled}
      value={currentValue}
      aria-invalid={error ? 'true' : undefined}
      onChange={handleChange}
      {...domRest}
    />
  );
}
