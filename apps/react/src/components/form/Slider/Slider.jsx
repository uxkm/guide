/**
 * Slider 원본 구현.
 * 폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
 */
import { useEffect, useId, useMemo, useState } from 'react';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value)));

function StepIcon({ increase }) {
  return (
    <svg
      className="slider_step-icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      {increase && <path d="M12 5v14" />}
    </svg>
  );
}

export function Slider({
  min = 0,
  max = 100,
  value,
  defaultValue = 50,
  step = 1,
  disabled = false,
  vertical = false,
  label,
  showValue = false,
  stepper = false,
  stepperAlways = false,
  valueSuffix = '',
  hint,
  decreaseLabel = '값 줄이기',
  increaseLabel = '값 늘리기',
  size = 'md',
  id,
  className = '',
  children,
  ripple = true,
  onChange,
  style,
  ...props
}) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const numericMin = Number(min);
  const numericMax = Number(max);
  const [innerValue, setInnerValue] = useState(() =>
    clamp(value ?? defaultValue, numericMin, numericMax),
  );
  const currentValue = clamp(innerValue, numericMin, numericMax);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const progress =
    numericMax === numericMin ? 0 : ((currentValue - numericMin) / (numericMax - numericMin)) * 100;

  useEffect(() => {
    if (value !== undefined) setInnerValue(clamp(value, numericMin, numericMax));
  }, [value, numericMin, numericMax]);

  const classes = useMemo(
    () =>
      [
        'slider',
        resolvedSize === 'sm' && 'slider_sm',
        resolvedSize === 'lg' && 'slider_lg',
        vertical && 'slider_vertical',
        stepper && 'slider_stepper',
        stepperAlways && 'slider_stepper_always',
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [resolvedSize, vertical, stepper, stepperAlways, className],
  );

  const valueMap = String(props['data-slider-valuetext-map'] ?? '')
    .split(',')
    .reduce((map, item) => {
      const separator = item.indexOf(':');
      if (separator > -1) map[item.slice(0, separator)] = item.slice(separator + 1);
      return map;
    }, {});
  const valueText =
    valueMap[String(currentValue)] ??
    (props['data-slider-valuetext-suffix']
      ? `${currentValue} ${props['data-slider-valuetext-suffix']}`
      : props['aria-valuetext']);

  function update(next) {
    const normalized = clamp(next, numericMin, numericMax);
    setInnerValue(normalized);
    onChange?.(normalized);
  }

  const input = (
    <input
      {...props}
      id={inputId}
      type="range"
      className="slider_input"
      min={numericMin}
      max={numericMax}
      step={step}
      value={currentValue}
      disabled={disabled}
      aria-valuetext={valueText || undefined}
      onChange={(event) => update(event.target.value)}
    />
  );

  return (
    <div
      className={classes}
      data-component="Slider"
      data-ripple={ripple ? 'true' : undefined}
      style={{ '--slider-progress': `${progress}%`, ...style }}
    >
      {(label || showValue) && (
        <div className="slider_header">
          {label && (
            <label className="slider_label" htmlFor={inputId}>
              {label}
            </label>
          )}
          {showValue && (
            <output className="slider_value" htmlFor={inputId}>
              {currentValue}
              {valueSuffix || props['data-slider-suffix'] || ''}
            </output>
          )}
        </div>
      )}
      {stepper ? (
        <div className="slider_control">
          <button
            type="button"
            className="slider_step slider_step-decrease"
            data-ripple="true"
            aria-label={decreaseLabel}
            disabled={disabled || currentValue <= numericMin}
            onClick={() => update(currentValue - Number(step || 1))}
          >
            <StepIcon />
          </button>
          {input}
          <button
            type="button"
            className="slider_step slider_step-increase"
            data-ripple="true"
            aria-label={increaseLabel}
            disabled={disabled || currentValue >= numericMax}
            onClick={() => update(currentValue + Number(step || 1))}
          >
            <StepIcon increase />
          </button>
        </div>
      ) : (
        input
      )}
      {hint && <p className="slider_hint">{hint}</p>}
      {children}
    </div>
  );
}

export default Slider;
