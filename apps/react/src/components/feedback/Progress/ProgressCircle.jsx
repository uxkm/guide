/**
 * ProgressCircle 원본 구현.
 * 피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
 */
const sizes = new Set(['sm', 'md', 'lg']);
const colors = new Set(['primary', 'success', 'warning', 'danger']);
const normalizePercent = (value) => Math.min(100, Math.max(0, Number(value) || 0));

export function ProgressCircle({
  percent = 0,
  color = 'primary',
  size = 'md',
  ariaLabel = '진행률',
  className = '',
  style,
  ...props
}) {
  const value = normalizePercent(percent);
  const resolvedSize = sizes.has(size) ? size : 'md';
  const resolvedColor = colors.has(color) ? color : 'primary';
  const classes = [
    'progress',
    'progress_circle',
    `color_${resolvedColor}`,
    resolvedSize !== 'md' && `progress_${resolvedSize}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div
      {...props}
      className={classes}
      data-component="ProgressCircle"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
      style={{ '--progress-percent': value, ...style }}
    >
      <svg className="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
        <circle className="progress_circle-track" cx="50" cy="50" r="45" />
        <circle className="progress_circle-bar" cx="50" cy="50" r="45" />
      </svg>
      <span className="progress_circle-value">{value}%</span>
    </div>
  );
}

export default ProgressCircle;
