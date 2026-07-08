import { useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { navigateInternal } from '@/utils/navigate-internal';
import { useRipple } from '@/hooks/useRipple';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('MenuItem', {
  booleanProps: new Set(['active', 'disabled', 'ripple']),
  selfClosing: false,
});

export default function MenuItem({
  ripple,
  label,
  href,
  active = false,
  disabled = false,
  color,
  icon,
  extra,
  option = false,
  children,
  className,
  onClick,
  ...rest
}) {
  const navigate = useNavigate();
  const props = { ripple, label, href, active, disabled, color };
  const { rippleAttrs } = useRipple(props);
  const rootRef = useRef(null);
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children ?? label, icon, extra }),
    [children, label, icon, extra],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const tag = href && !disabled ? 'a' : disabled ? 'span' : 'button';
  const LinkTag = tag;

  const linkClass = cn(
    'menu_link',
    active && 'is-active',
    disabled && 'is-disabled',
    color && `color_${color}`,
  );

  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (tag === 'a') {
      if (!href || href === '#') {
        event.preventDefault();
        return;
      }

      if (href.startsWith('/') && !href.startsWith('//')) {
        event.preventDefault();
        navigateInternal(navigate, href);
      }
    }
  };

  const itemRole = option ? 'option' : 'menuitem';

  return (
    <li ref={rootRef} className={cn('menu_item', disabled && 'is-disabled')}>
      <LinkTag
        {...rippleAttrs}
        className={linkClass}
        href={tag === 'a' ? href || '#' : undefined}
        type={tag === 'button' ? 'button' : undefined}
        role={itemRole}
        aria-current={!option && active ? 'page' : undefined}
        aria-selected={option ? String(active) : undefined}
        aria-disabled={disabled ? 'true' : undefined}
        disabled={tag === 'button' ? disabled : undefined}
        tabIndex={disabled && tag === 'a' ? -1 : undefined}
        onClick={handleClick}
        {...rest}
      >
        {icon ?? (label && children ? children : null)}
        {(label || (!icon && children)) && (
          <span className="menu_label">{label ?? children}</span>
        )}
        {extra}
      </LinkTag>
    </li>
  );
}
