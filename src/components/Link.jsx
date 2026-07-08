import { useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { navigateInternal } from '@/utils/navigate-internal';
import { useRipple } from '@/hooks/useRipple';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('Link', {
  defaults: { color: 'primary' },
  booleanProps: new Set([
    'underline',
    'noUnderline',
    'standalone',
    'nav',
    'block',
    'back',
    'iconOnly',
    'active',
    'disabled',
    'ripple',
  ]),
});

export default function Link({
  ripple,
  color = 'primary',
  size = '',
  underline,
  noUnderline,
  standalone,
  nav,
  block,
  back,
  iconOnly,
  active,
  disabled,
  label,
  href,
  target,
  rel,
  ariaLabel,
  icon,
  children,
  className,
  onClick,
  ...rest
}) {
  const navigate = useNavigate();
  const rootRef = useRef(null);
  const props = {
    ripple,
    color,
    size,
    underline,
    noUnderline,
    standalone,
    nav,
    block,
    back,
    iconOnly,
    active,
    disabled,
    label,
    href,
    target,
    rel,
    ariaLabel,
  };
  const { rippleAttrs } = useRipple(props);
  const domRest = normalizeDomProps(rest);
  const demoSlots = useMemo(
    () => createDemoSlots({ default: children ?? label, icon }),
    [children, label, icon],
  );

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'link',
    `color_${color}`,
    size === 'sm' && 'size_sm',
    size === 'lg' && 'size_lg',
    size === 'xl' && 'size_xl',
    underline && 'link_underline',
    noUnderline && 'link_no-underline',
    standalone && 'link_standalone',
    nav && 'link_nav',
    block && 'link_block',
    back && 'link_back',
    iconOnly && 'link_icon-only',
    active && 'is-active',
    disabled && 'is-disabled',
    className,
  );

  const showLabel = !iconOnly && (label || children);

  function handleClick(event) {
    onClick?.(event);
    if (event.defaultPrevented || disabled) return;

    if (!href || href === '#') {
      event.preventDefault();
      return;
    }

    if (href.startsWith('/') && !href.startsWith('//')) {
      event.preventDefault();
      navigateInternal(navigate, href);
    }
  }

  return (
    <a
      ref={rootRef}
      {...rippleAttrs}
      className={rootClass}
      href={href || '#'}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled ? 'true' : undefined}
      tabIndex={disabled ? -1 : undefined}
      onClick={handleClick}
      {...domRest}
    >
      {icon}
      {showLabel ? children ?? label : null}
    </a>
  );
}
