import { useRef } from 'react';
import { cn } from '@/utils/cn';
import { useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('ProgressCircle', {
  defaults: { percent: 0, color: 'primary', size: 'md' },
});

export default function ProgressCircle({
  percent = 0,
  color = 'primary',
  size = 'md',
  ariaLabel = '진행률',
  className,
  ...rest
}) {
  const props = { percent, color, size, ariaLabel };
  const rootRef = useRef(null);

  useComponentDemoCode(formatCode, props, {}, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'progress',
    'progress_circle',
    `color_${color}`,
    size === 'sm' && 'progress_sm',
    size === 'lg' && 'progress_lg',
    className,
  );

  return (
    <div
      ref={rootRef}
      className={rootClass}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
      style={{ '--progress-percent': percent }}
      {...rest}
    >
      <svg className="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
        <circle className="progress_circle-track" cx="50" cy="50" r="45" />
        <circle className="progress_circle-bar" cx="50" cy="50" r="45" />
      </svg>
      <span className="progress_circle-value">{percent}%</span>
    </div>
  );
}
