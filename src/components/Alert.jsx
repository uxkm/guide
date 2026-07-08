import { useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import DocIcon from '@/components/icons/DocIcon.jsx';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';
import { useAlertDemoCode } from '@/hooks/useDemoCode';

export default function Alert({
  ripple,
  color = 'info',
  title,
  description,
  closable,
  showIcon = true,
  size = 'md',
  role = 'alert',
  icon,
  actions,
  children,
  className,
  onClose,
  ...rest
}) {
  const rootRef = useRef(null);
  const props = { ripple, color, title, description, closable, showIcon, size, role };
  const { rippleAttrs } = useRipple(props);
  const [visible, setVisible] = useState(true);

  useAlertDemoCode(props, rootRef, { class: className, ...rest });

  if (!visible) return null;

  const colorClass = color === 'danger' ? 'color_error' : `color_${color}`;
  const rootClass = cn(
    'alert',
    colorClass,
    size === 'sm' && 'alert_sm',
    size === 'lg' && 'alert_lg',
    className,
  );

  const alertIconNames = {
    info: 'info',
    success: 'check-circle',
    warning: 'alert-triangle',
    danger: 'x-circle',
  };
  const alertIconName = alertIconNames[color] ?? 'info';

  const hasTitle = Boolean(title);
  const hasDescription = Boolean(description || children);

  function handleClose() {
    setVisible(false);
    onClose?.();
  }

  return (
    <div ref={rootRef} className={rootClass} role={role} {...rest}>
      {showIcon ? (
        <div data-demo-slot="icon">
          {icon ?? <DocIcon name={alertIconName} className="alert_icon" />}
        </div>
      ) : null}
      <div className="alert_body">
        {hasTitle ? <div className="alert_title">{title}</div> : null}
        {hasDescription ? (
          <p className="alert_desc">{children ?? description}</p>
        ) : null}
        {actions}
      </div>
      {closable ? (
        <Button
          variant="ghost"
          iconOnly
          className="alert_close"
          aria-label="알림 닫기"
          onClick={handleClose}
          {...rippleAttrs}
          iconBefore={<Icon name="close" size="sm" />}
        />
      ) : null}
    </div>
  );
}
