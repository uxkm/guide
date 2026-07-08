import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('Progress', {
  defaults: { percent: 0, size: 'md', color: 'primary' },
  booleanProps: new Set(['showInfo', 'striped', 'animated', 'indeterminate', 'inside', 'block']),
  selfClosing: false,
});

export default function Progress({
  percent = 0,
  status = '',
  size = 'md',
  showInfo = false,
  label,
  color = 'primary',
  striped = false,
  animated = false,
  indeterminate = false,
  inside = false,
  block = false,
  ariaLabel = '진행률',
  children,
  className,
  ...rest
}) {
  const props = {
    percent,
    status,
    size,
    showInfo,
    label,
    color,
    striped,
    animated,
    indeterminate,
    inside,
    block,
    ariaLabel,
  };
  const rootRef = useRef(null);
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const statusColor =
    status === 'success'
      ? 'color_success'
      : status === 'exception'
        ? 'color_danger'
        : color === 'danger'
          ? 'color_danger'
          : `color_${color}`;

  const rootClass = cn(
    'progress',
    statusColor,
    block ? 'progress_block' : 'progress_fit',
    size === 'sm' && 'progress_sm',
    size === 'lg' && 'progress_lg',
    striped && 'progress_striped',
    animated && 'progress_animated',
    indeterminate && 'is-indeterminate',
    inside && 'progress_inside',
    className,
  );

  const displayValue = `${percent}%`;

  return (
    <div ref={rootRef} className={rootClass}>
      {(showInfo || label) && (
        <div className="progress_header">
          {label && <span className="progress_label">{label}</span>}
          {showInfo && <span className="progress_value">{displayValue}</span>}
        </div>
      )}
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
      {children}
    </div>
  );
}
