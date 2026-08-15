import { useEffect, useId, useMemo, useState } from 'react';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const STAR_PATH = 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

function StarGraphic({ half = false }) {
  return <span className="rate_star-graphic" aria-hidden="true">
    <svg className="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d={STAR_PATH} /></svg>
    <svg className="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor"><path d={STAR_PATH} /></svg>
    {half && <span className="rate_star-icon-half"><svg className="rate_star-icon" viewBox="0 0 24 24" fill="currentColor"><path d={STAR_PATH} /></svg></span>}
  </span>;
}

export function Rate({
  value, defaultValue, count = 5, allowHalf = false, clearable = false,
  readOnly = false, readonly = false, disabled = false, size = 'md', legend,
  name, className = '', ripple = true, onChange, ...props
}) {
  const generatedName = useId();
  const groupName = name || generatedName;
  const resolvedCount = Number(count) > 0 ? Number(count) : 5;
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const isReadonly = readOnly || readonly;
  const [currentValue, setCurrentValue] = useState(value ?? defaultValue);
  const stars = useMemo(() => Array.from({ length: resolvedCount }, (_, index) => index + 1), [resolvedCount]);

  useEffect(() => { if (value !== undefined) setCurrentValue(value); }, [value]);

  const classes = ['rate', resolvedSize === 'sm' && 'rate_sm', resolvedSize === 'lg' && 'rate_lg', allowHalf && 'rate_allow-half', clearable && 'rate_clearable', isReadonly && 'is-readonly', className].filter(Boolean).join(' ');
  function update(next) { setCurrentValue(next); onChange?.(next); }

  if (isReadonly) return <div {...props} className={classes} data-component="Rate" role="img" aria-label={props['aria-label'] || `${resolvedCount}점 만점 중 ${currentValue ?? 0}점`}>
    <div className="rate_stars">{stars.map((star) => {
      const state = (currentValue ?? 0) >= star ? 'is-filled' : allowHalf && (currentValue ?? 0) >= star - 0.5 ? 'is-half' : '';
      return <span key={star} className={['rate_star-readonly', state].filter(Boolean).join(' ')}><StarGraphic half={state === 'is-half'} /></span>;
    })}</div>
    {currentValue != null && <span className="rate_value">{currentValue}</span>}
  </div>;

  return <fieldset {...props} className={classes} data-component="Rate" data-ripple={ripple ? 'true' : undefined} disabled={disabled}>
    {legend && <legend className="rate_legend">{legend}</legend>}
    <div className="rate_control">
      <div className="rate_stars">{stars.map((star) => <label key={star} className="rate_star" data-ripple={ripple ? 'true' : undefined}>
        {allowHalf && <input type="radio" className="rate_input rate_input-half" name={groupName} value={star - 0.5} checked={currentValue === star - 0.5} disabled={disabled} onChange={() => update(star - 0.5)} />}
        <input type="radio" className="rate_input" name={groupName} value={star} checked={currentValue === star} disabled={disabled} onChange={() => update(star)} />
        {allowHalf && <>
          <button type="button" className="rate_star-half rate_star-half-left" tabIndex={-1} aria-hidden="true" disabled={disabled} onClick={(event) => { event.preventDefault(); event.stopPropagation(); update(star - 0.5); }} />
          <button type="button" className="rate_star-half rate_star-half-right" tabIndex={-1} aria-hidden="true" disabled={disabled} onClick={(event) => { event.preventDefault(); event.stopPropagation(); update(star); }} />
        </>}
        <StarGraphic half={allowHalf} />
        <span className="rate_star-label">{star}점</span>
      </label>)}</div>
      {clearable && <button type="button" className="rate_clear" data-ripple={ripple ? 'true' : undefined} aria-label="별점 초기화" title="초기화" onClick={() => update(undefined)}><svg className="rate_clear-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" /></svg></button>}
      {currentValue != null && <output className="rate_value">{currentValue}점</output>}
    </div>
  </fieldset>;
}

export default Rate;
