'use client';

import { Children, cloneElement, useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn.js';
import { rippleSurfaceAttrs } from '@/hooks/useRipple.js';

function ClearIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function getInitialValue({ value, modelValue, defaultValue }) {
  return value ?? modelValue ?? defaultValue ?? '';
}

function findInputElement(wrap, id) {
  if (id) {
    const byId = document.getElementById(id);
    if (byId instanceof HTMLInputElement) return byId;
  }

  const fromWrap = wrap?.querySelector('.input');
  return fromWrap instanceof HTMLInputElement ? fromWrap : null;
}

function clearInputValue(input) {
  const descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
  if (descriptor?.set) {
    descriptor.set.call(input, '');
  } else {
    input.value = '';
  }
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.dispatchEvent(new Event('change', { bubbles: true }));
}

export default function InputClearable({ as: Tag = 'div', className, children, ...rest }) {
  const wrapRef = useRef(null);
  const child = Children.only(children);
  const childProps = child.props ?? {};
  const {
    disabled,
    readOnly,
    readonly,
    modelValue,
    value: valueProp,
    defaultValue,
    onChange,
    onInput,
    id,
  } = childProps;

  const resolvedReadOnly = readOnly ?? readonly;
  const externalValue = valueProp ?? modelValue;
  const isExternallyControlled = externalValue !== undefined;

  const [value, setValue] = useState(() => getInitialValue(childProps));

  useEffect(() => {
    if (isExternallyControlled) {
      setValue(externalValue ?? '');
    }
  }, [externalValue, isExternallyControlled]);

  const showClear = !disabled && !resolvedReadOnly && String(value).length > 0;

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value);
      onChange?.(event);
      onInput?.(event);
    },
    [onChange, onInput],
  );

  const handleClear = useCallback(() => {
    if (disabled || resolvedReadOnly) return;

    const input = findInputElement(wrapRef.current, id);
    if (input) {
      clearInputValue(input);
      input.focus();
    }

    setValue('');
  }, [disabled, resolvedReadOnly, id]);

  const inputElement = cloneElement(child, {
    onChange: handleChange,
  });

  return (
    <Tag
      ref={wrapRef}
      className={cn('input_clearable', showClear && 'is-filled', className)}
      {...rest}
    >
      {inputElement}
      <button
        type="button"
        className="input_clear"
        {...rippleSurfaceAttrs}
        aria-label="입력 지우기"
        hidden={!showClear}
        onClick={handleClear}
      >
        <ClearIcon />
      </button>
    </Tag>
  );
}
