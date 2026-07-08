import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('Rate', {
  defaults: { count: 5, size: 'md' },
  booleanProps: new Set(['allowHalf', 'clearable', 'readonly', 'disabled']),
  skipProps: ['modelValue', 'name'],
  selfClosing: true,
});

const STAR_PATH =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

function StarGraphic({ half = false }) {
  return (
    <span className="rate_star-graphic" aria-hidden="true">
      <svg className="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d={STAR_PATH} />
      </svg>
      <svg className="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor">
        <path d={STAR_PATH} />
      </svg>
      {half && (
        <span className="rate_star-icon-half">
          <svg className="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d={STAR_PATH} />
          </svg>
        </span>
      )}
    </span>
  );
}

export default function Rate({
  ripple,
  value,
  count = 5,
  allowHalf = false,
  clearable = false,
  readonly = false,
  disabled = false,
  size = 'md',
  legend,
  name,
  modelValue,
  onUpdateModelValue,
  className,
  ...rest
}) {
  const props = {
    ripple,
    value,
    count,
    allowHalf,
    clearable,
    readonly,
    disabled,
    size,
    legend,
    name,
    modelValue,
  };
  const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });
  const rootRef = useRef(null);
  const groupName = name || `rate-${Math.random().toString(36).slice(2, 9)}`;

  useComponentDemoCode(formatCode, props, {}, rootRef, { class: className, ...rest });

  const currentValue = modelValue ?? value;
  const stars = Array.from({ length: count }, (_, i) => i + 1);

  const rootClass = cn(
    'rate',
    size === 'sm' && 'rate_sm',
    size === 'lg' && 'rate_lg',
    allowHalf && 'rate_allow-half',
    clearable && 'rate_clearable',
    readonly && 'is-readonly',
    className,
  );

  const domRest = normalizeDomProps(rest);
  const onChange = (val) => onUpdateModelValue?.(val);
  const onClear = () => onUpdateModelValue?.(undefined);

  const readonlyStarClass = (star) => {
    const val = currentValue ?? 0;
    if (val >= star) return 'is-filled';
    if (allowHalf && val >= star - 0.5) return 'is-half';
    return '';
  };

  if (readonly) {
    const val = currentValue ?? 0;
    return (
      <div
        ref={rootRef}
        className={rootClass}
        role="img"
        aria-label={`${count}점 만점 중 ${val}점`}
      >
        <div className="rate_stars">
          {stars.map((star) => (
            <span
              key={star}
              className={cn('rate_star-readonly', readonlyStarClass(star))}
            >
              <StarGraphic half={readonlyStarClass(star) === 'is-half'} />
            </span>
          ))}
        </div>
        {currentValue && <span className="rate_value">{currentValue}</span>}
      </div>
    );
  }

  return (
    <fieldset ref={rootRef} {...rippleAttrs} className={rootClass} disabled={disabled} {...domRest}>
      {legend && <legend className="rate_legend">{legend}</legend>}
      <div className="rate_control">
        <div className="rate_stars">
          {stars.map((star) => (
            <label key={star} {...childRippleAttrs} className="rate_star">
              {allowHalf && (
                <input
                  type="radio"
                  className="rate_input rate_input-half"
                  name={groupName}
                  value={star - 0.5}
                  checked={currentValue === star - 0.5}
                  disabled={disabled}
                  onChange={() => onChange(star - 0.5)}
                />
              )}
              <input
                type="radio"
                className="rate_input"
                name={groupName}
                value={star}
                checked={currentValue === star}
                disabled={disabled}
                onChange={() => onChange(star)}
              />
              <StarGraphic half={allowHalf} />
              <span className="rate_star-label">{star}점</span>
            </label>
          ))}
        </div>
        {clearable && (
          <button
            {...childRippleAttrs}
            type="button"
            className="rate_clear"
            aria-label="별점 초기화"
            title="초기화"
            onClick={onClear}
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
        )}
        {currentValue && <output className="rate_value">{currentValue}점</output>}
      </div>
    </fieldset>
  );
}
