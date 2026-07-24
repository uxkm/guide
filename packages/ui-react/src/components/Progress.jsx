import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_STATUSES = new Set(['', 'success', 'exception']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_COLORS = new Set(['primary', 'success', 'warning', 'danger']);

const formatCode = createComponentFormatter('Progress', {
  defaults: { percent: 0, size: 'md', color: 'primary' },
  booleanProps: new Set(['showInfo', 'striped', 'animated', 'indeterminate', 'inside', 'block']),
  selfClosing: false,
});

export default function Progress({
  percent = 0,
  status = '',
  size = 'md',
  showInfo,
  label,
  color = 'primary',
  striped,
  animated,
  indeterminate,
  inside,
  block,
  ariaLabel = '진행률',
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedStatus = VALID_STATUSES.has(status) ? status : '';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedColor = VALID_COLORS.has(color) ? color : 'primary';

  useComponentDemoCode(
    formatCode,
    {
      percent,
      status: resolvedStatus || undefined,
      size: resolvedSize,
      showInfo,
      label,
      color: resolvedColor,
      striped,
      animated,
      indeterminate,
      inside,
      block,
      ariaLabel,
    },
    createDemoSlots({}),
    rootRef,
    { className, ...rest },
  );

  const statusColor = useMemo(() => {
    if (resolvedStatus === 'success') return 'color_success';
    if (resolvedStatus === 'exception') return 'color_danger';
    if (resolvedColor === 'danger') return 'color_danger';
    return `color_${resolvedColor}`;
  }, [resolvedStatus, resolvedColor]);

  const rootClass = useMemo(() => {
    const classes = ['progress', statusColor];
    if (block) classes.push('progress_block');
    else classes.push('progress_fit');
    if (resolvedSize === 'sm') classes.push('progress_sm');
    if (resolvedSize === 'lg') classes.push('progress_lg');
    if (striped) classes.push('progress_striped');
    if (animated) classes.push('progress_animated');
    if (indeterminate) classes.push('is-indeterminate');
    if (inside) classes.push('progress_inside');
    return classes;
  }, [statusColor, block, resolvedSize, striped, animated, indeterminate, inside]);

  const displayValue = `${percent}%`;
  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {showInfo || label ? (
        <div className="progress_header">
          {label ? <span className="progress_label">{label}</span> : null}
          {showInfo ? <span className="progress_value">{displayValue}</span> : null}
        </div>
      ) : null}
      <div
        className="progress_track"
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel}
        aria-busy={indeterminate ? 'true' : undefined}
      >
        <span className="progress_bar" style={{ width: `${percent}%` }}>
          {inside ? displayValue : ''}
        </span>
      </div>
    </div>
  );
}
