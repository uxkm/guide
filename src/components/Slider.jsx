import { useEffect, useMemo, useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { cn } from '@/utils/cn';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

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
  disabled = false,
  vertical = false,
  label,
  showValue = false,
  stepper = false,
  stepperAlways = false,
  valueSuffix,
  hint,
  decreaseLabel,
  increaseLabel,
  size = 'md',
  modelValue,
  onUpdateModelValue,
  children,
  className,
  ...rest
}) {
  const props = {
    ripple,
    min,
    max,
    value,
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
    size,
    modelValue,
  };
  const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });
  const rootRef = useRef(null);
  const inputId = useMemo(() => `slider-${Math.random().toString(36).slice(2, 9)}`, []);
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const currentValue = modelValue ?? value;
  const [rangeValue, setRangeValue] = useState(currentValue);

  useEffect(() => {
    setRangeValue(currentValue);
  }, [currentValue]);

  const displayValue = `${rangeValue}${valueSuffix ?? ''}`;

  const rootClass = cn(
    'slider',
    size === 'sm' && 'slider_sm',
    size === 'lg' && 'slider_lg',
    vertical && 'slider_vertical',
    stepper && 'slider_stepper',
    stepperAlways && 'slider_stepper_always',
    className,
  );

  const adjustValue = (delta) => {
    const stepVal = step ?? 1;
    const next = Math.min(max, Math.max(min, rangeValue + delta * stepVal));
    setRangeValue(next);
    onUpdateModelValue?.(next);
  };

  const handleRangeChange = (event) => {
    const next = Number(event.target.value);
    setRangeValue(next);
    onUpdateModelValue?.(next);
  };

  const domRest = normalizeDomProps(rest);

  const rangeInput = (
    <input
      id={inputId}
      type="range"
      className="slider_input"
      min={min}
      max={max}
      step={step}
      value={rangeValue}
      disabled={disabled}
      onChange={handleRangeChange}
      {...domRest}
    />
  );

  return (
    <div ref={rootRef} className={rootClass} {...rippleAttrs}>
      {(label || showValue) && (
        <div className="slider_header">
          {label && (
            <label className="slider_label" htmlFor={inputId}>
              {label}
            </label>
          )}
          {showValue && (
            <output className="slider_value" htmlFor={inputId}>
              {displayValue}
            </output>
          )}
        </div>
      )}
      {stepper ? (
        <div className="slider_control">
          <Button
            {...childRippleAttrs}
            variant="ghost"
            size="sm"
            iconOnly
            className="slider_step slider_step-decrease"
            aria-label={decreaseLabel || '값 줄이기'}
            disabled={disabled}
            onClick={() => adjustValue(-1)}
            iconBefore={<Icon name="minus" size="sm" className="slider_step-icon" />}
          />
          {rangeInput}
          <Button
            {...childRippleAttrs}
            variant="ghost"
            size="sm"
            iconOnly
            className="slider_step slider_step-increase"
            aria-label={increaseLabel || '값 늘리기'}
            disabled={disabled}
            onClick={() => adjustValue(1)}
            iconBefore={<Icon name="plus" size="sm" className="slider_step-icon" />}
          />
        </div>
      ) : (
        rangeInput
      )}
      {hint && <p className="slider_hint">{hint}</p>}
      {children}
    </div>
  );
}
