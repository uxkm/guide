import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_COLORS = new Set(['primary', 'success', 'warning', 'danger']);

const formatCode = createComponentFormatter('ProgressCircle', {
  defaults: { percent: 0, color: 'primary', size: 'md' },
});

export default function ProgressCircle({
  percent = 0,
  color = 'primary',
  size = 'md',
  ariaLabel = '진행률',
  className,
  style,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedColor = VALID_COLORS.has(color) ? color : 'primary';

  useComponentDemoCode(
    formatCode,
    {
      percent,
      color: resolvedColor,
      size: resolvedSize,
      ariaLabel,
    },
    createDemoSlots({}),
    rootRef,
    { className, style, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['progress', 'progress_circle', `color_${resolvedColor}`];
    if (resolvedSize === 'sm') classes.push('progress_sm');
    if (resolvedSize === 'lg') classes.push('progress_lg');
    return classes;
  }, [resolvedColor, resolvedSize]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div
      ref={rootRef}
      className={cn(rootClass, className)}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
      style={{ '--progress-percent': percent, ...style }}
      {...domRest}
    >
      <svg className="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
        <circle className="progress_circle-track" cx="50" cy="50" r="45" />
        <circle className="progress_circle-bar" cx="50" cy="50" r="45" />
      </svg>
      <span className="progress_circle-value">{percent}%</span>
    </div>
  );
}
