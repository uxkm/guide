import { useMemo } from 'react';

const statuses = new Set(['', 'success', 'exception']);
const sizes = new Set(['sm', 'md', 'lg']);
const colors = new Set(['primary', 'success', 'warning', 'danger']);
const normalizePercent = (value) => Math.min(100, Math.max(0, Number(value) || 0));

export function Progress({ percent = 0, status = '', size = 'md', showInfo = false, label, color = 'primary', striped = false, animated = false, indeterminate = false, inside = false, block = false, ariaLabel = '진행률', className = '', ...props }) {
  const value = normalizePercent(percent);
  const resolvedStatus = statuses.has(status) ? status : '';
  const resolvedSize = sizes.has(size) ? size : 'md';
  const resolvedColor = colors.has(color) ? color : 'primary';
  const colorClass = resolvedStatus === 'success' ? 'color_success' : resolvedStatus === 'exception' ? 'color_danger' : `color_${resolvedColor}`;
  const classes = useMemo(() => ['progress', colorClass, block ? 'progress_block' : 'progress_fit', resolvedSize !== 'md' && `progress_${resolvedSize}`, striped && 'progress_striped', animated && 'progress_animated', indeterminate && 'is-indeterminate', inside && 'progress_inside', className].filter(Boolean).join(' '), [animated, block, className, colorClass, indeterminate, inside, resolvedSize, striped]);
  const displayValue = `${value}%`;
  return <div {...props} className={classes} data-component="Progress">{(showInfo || label) && <div className="progress_header">{label && <span className="progress_label">{label}</span>}{showInfo && <span className="progress_value">{displayValue}</span>}</div>}<div className="progress_track" role="progressbar" aria-valuenow={indeterminate ? undefined : value} aria-valuemin={0} aria-valuemax={100} aria-label={ariaLabel} aria-busy={indeterminate || undefined} style={inside ? { background: 'var(--color-border-subtle)' } : undefined}><span className="progress_bar" style={{ width: `${value}%` }}>{inside ? displayValue : null}</span></div></div>;
}

export default Progress;
