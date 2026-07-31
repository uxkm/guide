'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useInputDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const SEGMENTED_INPUT_SELECTOR = '[data-input-split], [data-input-otp]';

function getSegmentedInputs(input) {
  const container = input.closest(SEGMENTED_INPUT_SELECTOR);
  if (!container) return null;

  return {
    container,
    inputs: Array.from(container.querySelectorAll('input:not(:disabled)')),
  };
}

function setNativeInputValue(input, nextValue) {
  const descriptor = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value',
  );

  if (descriptor?.set) {
    descriptor.set.call(input, nextValue);
  } else {
    input.value = nextValue;
  }
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

export default function Input({
  ref,
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
  onKeyDown,
  onPaste,
  ...rest
}) {
  const demoRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const hasAddon = prefix != null || suffix != null;

  const [inputValue, setInputValue] = useState(() => value ?? defaultValue ?? '');
  const currentValue = value !== undefined ? (value ?? '') : inputValue;

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
    demoRef,
    { className, ...rest },
  );

  const inputClass = useMemo(() => {
    const classes = ['input'];
    if (resolvedSize === 'sm') classes.push('input_sm');
    if (resolvedSize === 'lg') classes.push('input_lg');
    if (block) classes.push('input_block');
    if (error) classes.push('is-error');
    if (type === 'password' && String(currentValue).length > 0) {
      classes.push('input_masked');
    }
    return classes;
  }, [resolvedSize, block, error, type, currentValue]);

  const {
    class: _ignoredClassAttr,
    onChange: _ignoredOnChange,
    onKeyDown: _ignoredOnKeyDown,
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
    if (value === undefined) {
      setInputValue(next);
    }
    onChange?.(event);
  }

  function handleChange(event) {
    const next = sanitizeValue(event.target.value);
    applyValue(event, next);

    const segmented = getSegmentedInputs(event.currentTarget);
    const maxLength = event.currentTarget.maxLength;
    if (!segmented || maxLength <= 0 || String(next).length < maxLength) return;

    const index = segmented.inputs.indexOf(event.currentTarget);
    const nextInput = segmented.inputs[index + 1];
    if (nextInput) {
      nextInput.focus();
      nextInput.select();
    }
  }

  function handleKeyDown(event) {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;

    const segmented = getSegmentedInputs(event.currentTarget);
    if (!segmented) return;

    const index = segmented.inputs.indexOf(event.currentTarget);
    if (index < 0) return;

    if (event.key === 'Backspace' && !event.currentTarget.value && index > 0) {
      segmented.inputs[index - 1].focus();
      return;
    }

    if (!segmented.container.hasAttribute('data-input-otp')) return;

    if (event.key === 'ArrowLeft' && index > 0) {
      event.preventDefault();
      segmented.inputs[index - 1].focus();
    }

    if (event.key === 'ArrowRight' && index < segmented.inputs.length - 1) {
      event.preventDefault();
      segmented.inputs[index + 1].focus();
    }
  }

  function handlePaste(event) {
    onPaste?.(event);
    if (event.defaultPrevented) return;

    const rawPasted = event.clipboardData?.getData('text') ?? '';
    const segmented = getSegmentedInputs(event.currentTarget);

    if (segmented) {
      const numericOnly =
        isNumericOnly ||
        segmented.container.hasAttribute('data-input-numeric') ||
        segmented.container.hasAttribute('data-input-otp');
      const pasted = numericOnly ? rawPasted.replace(/\D/g, '') : rawPasted;
      if (!pasted) return;

      event.preventDefault();

      const startIndex = segmented.inputs.indexOf(event.currentTarget);
      let offset = 0;
      let lastFilledIndex = startIndex;

      for (
        let index = startIndex;
        index < segmented.inputs.length && offset < pasted.length;
        index += 1
      ) {
        const target = segmented.inputs[index];
        const limit = target.maxLength > 0 ? target.maxLength : 1;
        const chunk = pasted.slice(offset, offset + limit);
        setNativeInputValue(target, chunk);
        offset += chunk.length;
        lastFilledIndex = index;
      }

      const focusIndex =
        offset < pasted.length
          ? segmented.inputs.length - 1
          : Math.min(lastFilledIndex + 1, segmented.inputs.length - 1);
      segmented.inputs[focusIndex]?.focus();
      segmented.inputs[focusIndex]?.select();
      return;
    }

    if (!isNumericOnly) return;

    event.preventDefault();

    const pasted = rawPasted.replace(/\D/g, '');
    if (!pasted) return;

    const input = event.currentTarget;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    const merged = `${input.value.slice(0, start)}${pasted}${input.value.slice(end)}`;

    setNativeInputValue(input, sanitizeValue(merged));
  }

  function setInputRef(node) {
    if (!hasAddon) {
      demoRef.current = node;
    }

    if (typeof ref === 'function') ref(node);
    else if (ref && typeof ref === 'object') ref.current = node;
  }

  const inputEl = (
    <input
      ref={setInputRef}
      type={type}
      className={cn(inputClass, !hasAddon && className)}
      placeholder={placeholder}
      disabled={disabled}
      value={currentValue}
      aria-invalid={error ? 'true' : undefined}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      {...domRest}
    />
  );

  if (hasAddon) {
    return (
      <div ref={demoRef} className={cn('input_group', className)}>
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
