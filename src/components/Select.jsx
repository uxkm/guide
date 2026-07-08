import { useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import { cn } from '@/utils/cn';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('Select', {
  defaults: { size: 'md' },
  booleanProps: new Set(['disabled', 'error', 'open', 'block', 'custom', 'selectText']),
  skipProps: ['modelValue'],
  selfClosing: false,
});

export default function Select({
  ripple,
  size = 'md',
  disabled = false,
  error = false,
  placeholder,
  open = false,
  block = false,
  custom = false,
  selectText = false,
  modelValue,
  onUpdateModelValue,
  children,
  className,
  ...rest
}) {
  const props = {
    ripple,
    size,
    disabled,
    error,
    placeholder,
    open,
    block,
    custom,
    selectText,
    modelValue,
  };
  useRipple(props, { defaultEnabled: false });
  const rootRef = useRef(null);
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const triggerRippleAttrs =
    !custom
      ? {}
      : ripple === false
        ? { 'data-ripple': 'false' }
        : { 'data-ripple': 'true' };

  const inputClass = cn(
    'input',
    size === 'sm' && 'input_sm',
    size === 'lg' && 'input_lg',
    block && 'input_block',
    error && 'is-error',
  );

  const onChange = (event) => onUpdateModelValue?.(event.target.value);
  const domRest = normalizeDomProps(rest);

  if (custom) {
    return (
      <Button
        ref={rootRef}
        variant="select"
        className={className}
        size={size}
        block={block}
        selectText={selectText}
        open={open}
        error={error}
        placeholder={!modelValue && !!placeholder}
        disabled={disabled}
        haspopup="listbox"
        expanded={open}
        invalid={error}
        {...domRest}
        {...triggerRippleAttrs}
      >
        {modelValue || placeholder}
        {children}
      </Button>
    );
  }

  return (
    <select
      ref={rootRef}
      className={cn(inputClass, className)}
      disabled={disabled}
      {...(modelValue !== undefined ? { value: modelValue } : {})}
      aria-invalid={error ? 'true' : undefined}
      onChange={onChange}
      {...domRest}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
}
