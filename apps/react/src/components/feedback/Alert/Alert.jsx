import { useState } from 'react';

const iconPaths = {
  info: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </>
  ),
  success: (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4 12 14.01l-3-3" />
    </>
  ),
  warning: (
    <>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  danger: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </>
  ),
};

export function Alert({
  color = 'info',
  title,
  description,
  closable = false,
  showIcon = true,
  size = 'md',
  banner = false,
  role = 'alert',
  icon,
  actions,
  children,
  className = '',
  closeLabel = '알림 닫기',
  onClose,
  ...props
}) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  const resolvedColor = ['info', 'success', 'warning', 'danger'].includes(color)
    ? color
    : 'info';
  const colorClass = resolvedColor === 'danger' ? 'color_error' : `color_${resolvedColor}`;
  const classes = [
    'alert',
    colorClass,
    size !== 'md' && `alert_${size}`,
    banner && 'alert_banner',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const content = children ?? description;

  const handleClose = (event) => {
    setVisible(false);
    onClose?.(event);
  };

  return (
    <div
      className={classes}
      data-component="Alert"
      role={role}
      {...props}
    >
      {showIcon && (
        icon ?? (
          <svg
            className="alert_icon"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {iconPaths[resolvedColor]}
          </svg>
        )
      )}

      <div className="alert_body">
        {title && <div className="alert_title">{title}</div>}
        {content && <p className="alert_desc">{content}</p>}
        {actions}
      </div>

      {closable && (
        <button
          type="button"
          className="alert_close"
          aria-label={closeLabel}
          onClick={handleClose}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Alert;
