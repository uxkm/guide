import { useMemo, useRef, useState } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useRipple } from '@/hooks/useRipple';
import { useAlertDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_COLORS = new Set(['info', 'success', 'warning', 'danger']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const ALERT_ICONS = {
  info: 'info',
  success: 'check-circle',
  warning: 'alert-triangle',
  danger: 'x-circle',
};

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
  const { rippleAttrs } = useRipple({ ripple });
  const [visible, setVisible] = useState(true);
  const resolvedColor = VALID_COLORS.has(color) ? color : 'info';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';

  useAlertDemoCode(
    {
      ripple,
      color: resolvedColor,
      title,
      description,
      closable,
      showIcon,
      size: resolvedSize,
      role,
    },
    rootRef,
    { className, onClose, ...rest },
  );

  const colorClass = resolvedColor === 'danger' ? 'color_error' : `color_${resolvedColor}`;

  const rootClass = useMemo(() => {
    const classes = ['alert', colorClass];
    if (resolvedSize === 'sm') classes.push('alert_sm');
    if (resolvedSize === 'lg') classes.push('alert_lg');
    return classes;
  }, [colorClass, resolvedSize]);

  const hasTitle = Boolean(title);
  const descContent = children ?? description;
  const hasDescription = Boolean(descContent);

  const { class: _ignoredClass, role: _ignoredRole, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  function handleClose(event) {
    setVisible(false);
    onClose?.(event);
  }

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className={cn(rootClass, className)}
      role={role}
      {...domRest}
    >
      {showIcon ? (
        <div data-demo-slot="icon">
          {icon ?? <Icon name={ALERT_ICONS[resolvedColor] ?? 'info'} className="alert_icon" />}
        </div>
      ) : null}
      <div className="alert_body">
        {hasTitle ? <div className="alert_title">{title}</div> : null}
        {hasDescription ? <p className="alert_desc">{descContent}</p> : null}
        {actions}
      </div>
      {closable ? (
        <Button
          variant="ghost"
          iconOnly
          className="alert_close"
          ariaLabel="알림 닫기"
          iconBefore={<Icon name="close" size="sm" />}
          onClick={handleClose}
          {...rippleAttrs}
        />
      ) : null}
    </div>
  );
}
