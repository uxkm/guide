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
  const rootRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';

  const [textValue, setTextValue] = useState(() => value ?? defaultValue ?? '');

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
      value: textValue,
    },
    createDemoSlots(),
    rootRef,
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
    setTextValue(event.target.value);
    onChange?.(event);
  }

  return (
    <textarea
      ref={rootRef}
      className={cn(rootClass, className)}
      rows={rows}
      placeholder={placeholder}
      disabled={disabled}
      value={textValue}
      aria-invalid={error ? 'true' : undefined}
      onChange={handleChange}
      {...domRest}
    />
  );
}
