import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const STAR_PATH =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

const formatCode = createComponentFormatter('Rate', {
  defaults: { count: 5, size: 'md' },
  booleanProps: new Set(['allowHalf', 'clearable', 'readonly', 'disabled']),
  skipProps: ['modelValue', 'name'],
  selfClosing: true,
});

function StarGraphic({ half }) {
  return (
    <span className="rate_star-graphic" aria-hidden="true">
      <svg className="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d={STAR_PATH} />
      </svg>
      <svg className="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor">
        <path d={STAR_PATH} />
      </svg>
      {half ? (
        <span className="rate_star-icon-half">
          <svg className="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d={STAR_PATH} />
          </svg>
        </span>
      ) : null}
    </span>
  );
}

function readonlyStarClass(star, value, allowHalf) {
  const val = value ?? 0;
  if (val >= star) return 'is-filled';
  if (allowHalf && val >= star - 0.5) return 'is-half';
  return '';
}

export default function Rate({
  ripple,
  value,
  count = 5,
  allowHalf,
  clearable,
  readonly,
  disabled,
  size = 'md',
  legend,
  name,
  className,
  onChange,
  ...rest
}) {
  const rootRef = useRef(null);
  const { rippleAttrs, childRippleAttrs } = useRipple({ ripple }, { mode: 'container' });
  const generatedName = useId();
  const groupName = name || generatedName;
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedCount = Number(count) > 0 ? Number(count) : 5;

  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const currentValue = internalValue;

  useComponentDemoCode(
    formatCode,
    {
      ripple,
      value: currentValue,
      count: resolvedCount,
      allowHalf,
      clearable,
      readonly,
      disabled,
      size: resolvedSize,
      legend,
      name,
    },
    createDemoSlots(),
    rootRef,
    { className, onChange, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['rate'];
    if (resolvedSize === 'sm') classes.push('rate_sm');
    if (resolvedSize === 'lg') classes.push('rate_lg');
    if (allowHalf) classes.push('rate_allow-half');
    if (clearable) classes.push('rate_clearable');
    if (readonly) classes.push('is-readonly');
    return classes;
  }, [resolvedSize, allowHalf, clearable, readonly]);

  const stars = useMemo(
    () => Array.from({ length: resolvedCount }, (_, i) => i + 1),
    [resolvedCount],
  );

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  function handleChange(next) {
    setInternalValue(next);
    onChange?.(next);
  }

  function handleClear(event) {
    event.preventDefault();
    setInternalValue(undefined);
    onChange?.(undefined);
  }

  if (readonly) {
    const ariaLabel = `${resolvedCount}점 만점 중 ${currentValue ?? 0}점`;
    return (
      <div
        ref={rootRef}
        className={cn(rootClass, className)}
        role="img"
        aria-label={ariaLabel}
        {...domRest}
      >
        <div className="rate_stars">
          {stars.map((star) => {
            const starClass = readonlyStarClass(star, currentValue, allowHalf);
            return (
              <span key={star} className={cn('rate_star-readonly', starClass)}>
                <StarGraphic half={starClass === 'is-half'} />
              </span>
            );
          })}
        </div>
        {currentValue ? <span className="rate_value">{currentValue}</span> : null}
      </div>
    );
  }

  return (
    <fieldset
      ref={rootRef}
      className={cn(rootClass, className)}
      disabled={disabled}
      {...rippleAttrs}
      {...domRest}
    >
      {legend ? <legend className="rate_legend">{legend}</legend> : null}
      <div className="rate_control">
        <div className="rate_stars">
          {stars.map((star) => (
            <label key={star} className="rate_star" {...childRippleAttrs}>
              {allowHalf ? (
                <input
                  type="radio"
                  className="rate_input rate_input-half"
                  name={groupName}
                  value={star - 0.5}
                  checked={currentValue === star - 0.5}
                  disabled={disabled}
                  onChange={() => handleChange(star - 0.5)}
                />
              ) : null}
              <input
                type="radio"
                className="rate_input"
                name={groupName}
                value={star}
                checked={currentValue === star}
                disabled={disabled}
                onChange={() => handleChange(star)}
              />
              <StarGraphic half={Boolean(allowHalf)} />
              <span className="rate_star-label">{star}점</span>
            </label>
          ))}
        </div>
        {clearable ? (
          <button
            type="button"
            className="rate_clear"
            aria-label="별점 초기화"
            title="초기화"
            onClick={handleClear}
            {...childRippleAttrs}
          >
            <svg
              className="rate_clear-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        ) : null}
        {currentValue ? <output className="rate_value">{currentValue}점</output> : null}
      </div>
    </fieldset>
  );
}
