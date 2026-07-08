import { useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { navigateInternal } from '@/utils/navigate-internal';
import { useRipple } from '@/hooks/useRipple';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('BreadcrumbItem', {
  booleanProps: new Set(['current', 'disabled', 'icon', 'ripple']),
  labelProp: 'label',
  selfClosing: false,
});

export default function BreadcrumbItem({
  ripple,
  label,
  href,
  current,
  disabled,
  icon,
  ariaLabel,
  children,
  className,
  onClick,
  ...rest
}) {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const props = { ripple, label, href, current, disabled, icon, ariaLabel };
  const { rippleAttrs } = useRipple(props);
  const demoSlots = useMemo(() => createDemoSlots({ default: children ?? label }), [children, label]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const linkClass = cn(
    'breadcrumb_link',
    icon && 'breadcrumb_link-icon',
    disabled && 'is-disabled',
  );

  function handleLinkClick(event) {
    onClick?.(event);
    if (event.defaultPrevented || !href) return;

    if (href === '#') {
      event.preventDefault();
      return;
    }

    if (href.startsWith('/') && !href.startsWith('//')) {
      event.preventDefault();
      navigateInternal(navigate, href);
    }
  }

  return (
    <li
      ref={rootRef}
      className={cn('breadcrumb_item', current && 'is-current', className)}
      aria-current={current ? 'page' : undefined}
      {...rest}
    >
      {href && !current && !disabled ? (
        <a
          {...rippleAttrs}
          className={linkClass}
          href={href}
          aria-label={ariaLabel || undefined}
          onClick={handleLinkClick}
        >
          {children ?? label}
        </a>
      ) : disabled ? (
        <span className={linkClass} aria-disabled="true">
          {children ?? label}
        </span>
      ) : current ? (
        <span className="breadcrumb_current">{children ?? label}</span>
      ) : (
        children
      )}
    </li>
  );
}
