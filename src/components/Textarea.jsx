import { useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('Textarea', {
  defaults: { size: 'md', rows: 3 },
  booleanProps: new Set(['disabled', 'error', 'block']),
  skipProps: ['modelValue'],
  selfClosing: true,
});

export default function Textarea({
  size = 'md',
  disabled = false,
  error = false,
  placeholder,
  block = false,
  rows = 3,
  modelValue,
  onUpdateModelValue,
  children,
  className,
  ...rest
}) {
  const props = { size, disabled, error, placeholder, block, rows, modelValue };
  const rootRef = useRef(null);
  const [textValue, setTextValue] = useState(modelValue ?? '');
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children ?? modelValue }),
    [children, modelValue],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  useEffect(() => {
    if (modelValue !== undefined) {
      setTextValue(modelValue ?? '');
    }
  }, [modelValue]);

  const rootClass = cn(
    'textarea',
    size === 'sm' && 'textarea_sm',
    size === 'lg' && 'textarea_lg',
    block && 'textarea_block',
    error && 'is-error',
    className,
  );

  function handleChange(event) {
    const next = event.target.value;
    setTextValue(next);
    onUpdateModelValue?.(next);
  }

  const domRest = normalizeDomProps(rest);

  return (
    <textarea
      ref={rootRef}
      className={rootClass}
      rows={rows}
      placeholder={placeholder}
      disabled={disabled}
      value={textValue}
      onChange={handleChange}
      {...domRest}
      aria-invalid={error ? 'true' : domRest['aria-invalid']}
    >
      {children}
    </textarea>
  );
}
