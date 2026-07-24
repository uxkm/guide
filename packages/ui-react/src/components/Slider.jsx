import { useEffect, useId, useMemo, useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const formatCode = createComponentFormatter('Slider', {
  defaults: { min: 0, max: 100, value: 50, size: 'md' },
  booleanProps: new Set(['disabled', 'vertical', 'showValue', 'stepper', 'stepperAlways']),
  skipProps: ['modelValue'],
  selfClosing: true,
});

export default function Slider({
  ripple,
  min = 0,
  max = 100,
  value = 50,
  step,
  disabled,
  vertical,
  label,
  showValue,
  stepper,
  stepperAlways,
  valueSuffix,
  hint,
  decreaseLabel,
  increaseLabel,
  size = 'md',
  id,
  children,
  className,
  style,
  onChange,
  ...rest
}) {
  const rootRef = useRef(null);
  const { rippleAttrs, childRippleAttrs } = useRipple({ ripple }, { mode: 'container' });
  const generatedId = useId();
  const inputId = id || generatedId;
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedMin = Number(min);
  const resolvedMax = Number(max);

  const [internalValue, setInternalValue] = useState(() => Number(value));

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(Number(value));
    }
  }, [value]);

  const currentValue = internalValue;
  const displayValue = `${currentValue}${valueSuffix ?? ''}`;

  useComponentDemoCode(
    formatCode,
    {
      ripple,
      min: resolvedMin,
      max: resolvedMax,
      value: currentValue,
      step,
      disabled,
      vertical,
      label,
      showValue,
      stepper,
      stepperAlways,
      valueSuffix,
      hint,
      decreaseLabel,
      increaseLabel,
      size: resolvedSize,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, style, id, onChange, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['slider'];
    if (resolvedSize === 'sm') classes.push('slider_sm');
    if (resolvedSize === 'lg') classes.push('slider_lg');
    if (vertical) classes.push('slider_vertical');
    if (stepper) classes.push('slider_stepper');
    if (stepperAlways) classes.push('slider_stepper_always');
    return classes;
  }, [resolvedSize, vertical, stepper, stepperAlways]);

  const {
    class: _ignoredClass,
    id: _ignoredId,
    value: _ignoredValue,
    style: _ignoredStyle,
    onChange: _ignoredOnChange,
    onInput: _ignoredOnInput,
    ...restForDom
  } = rest;

  const domRest = normalizeDomProps(restForDom);

  function updateValue(next) {
    setInternalValue(next);
    onChange?.(next);
  }

  function handleInput(event) {
    updateValue(Number(event.target.value));
  }

  function adjustValue(delta) {
    const stepSize = step ?? 1;
    const next = Math.min(
      resolvedMax,
      Math.max(resolvedMin, currentValue + delta * stepSize),
    );
    updateValue(next);
  }

  const rangeInput = (
    <input
      id={inputId}
      type="range"
      className="slider_input"
      min={resolvedMin}
      max={resolvedMax}
      step={step}
      value={currentValue}
      disabled={disabled}
      {...domRest}
      onChange={handleInput}
    />
  );

  return (
    <div ref={rootRef} className={cn(rootClass, className)} style={style} {...rippleAttrs}>
      {label || showValue ? (
        <div className="slider_header">
          {label ? (
            <label className="slider_label" htmlFor={inputId}>
              {label}
            </label>
          ) : null}
          {showValue ? (
            <output className="slider_value" htmlFor={inputId}>
              {displayValue}
            </output>
          ) : null}
        </div>
      ) : null}
      {stepper ? (
        <div className="slider_control">
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            className="slider_step slider_step-decrease"
            ariaLabel={decreaseLabel || '값 줄이기'}
            disabled={disabled}
            iconBefore={<Icon name="minus" size="sm" className="slider_step-icon" />}
            onClick={() => adjustValue(-1)}
            {...childRippleAttrs}
          />
          {rangeInput}
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            className="slider_step slider_step-increase"
            ariaLabel={increaseLabel || '값 늘리기'}
            disabled={disabled}
            iconBefore={<Icon name="plus" size="sm" className="slider_step-icon" />}
            onClick={() => adjustValue(1)}
            {...childRippleAttrs}
          />
        </div>
      ) : (
        rangeInput
      )}
      {hint ? <p className="slider_hint">{hint}</p> : null}
      {children}
    </div>
  );
}
