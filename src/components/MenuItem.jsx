'use client';

import { useContext, useId, useMemo, useRef } from 'react';
import { MenuContext } from '@/components/Menu.jsx';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('MenuItem', {
  booleanProps: new Set(['active', 'disabled', 'ripple']),
  selfClosing: false,
});

export default function MenuItem({
  ripple,
  label,
  href,
  active,
  disabled,
  color,
  icon,
  extra,
  as,
  children,
  className,
  onClick,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });
  const rootRef = useRef(null);
  const menu = useContext(MenuContext);
  const reactId = useId().replace(/:/g, '');
  const itemId = `menu-item-${reactId}`;
  const labelContent = children ?? label;
  const showLabel = labelContent != null && labelContent !== '';
  const isActive = menu?.selectedItemId
    ? menu.selectedItemId === itemId
    : Boolean(active);

  useComponentDemoCode(
    formatCode,
    {
      ripple,
      label,
      href,
      active,
      disabled,
      color,
      as: typeof as === 'string' ? as : undefined,
    },
    createDemoSlots({
      default: labelContent,
      icon,
      extra,
    }),
    rootRef,
    { className, onClick, ...rest },
  );

  const itemClass = useMemo(() => {
    const classes = ['menu_item'];
    if (disabled) classes.push('is-disabled');
    return classes;
  }, [disabled]);

  const linkClass = useMemo(() => {
    const classes = ['menu_link'];
    if (isActive) classes.push('is-active');
    if (disabled) classes.push('is-disabled');
    if (color) classes.push(`color_${color}`);
    return classes;
  }, [isActive, disabled, color]);

  const Root = disabled ? 'span' : as || (href ? 'a' : 'button');
  const acceptsHref = Root === 'a' || typeof Root !== 'string';

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    if ((!href || href === '#') && Root === 'a') {
      event.preventDefault();
    }
    menu?.selectItem(itemId);
    onClick?.(event);
  };

  return (
    <li ref={rootRef} className={cn(itemClass, className)} {...domRest}>
      <Root
        {...rippleAttrs}
        className={cn(linkClass)}
        href={acceptsHref ? href : undefined}
        type={Root === 'button' ? 'button' : undefined}
        aria-current={isActive ? 'page' : undefined}
        aria-disabled={disabled ? 'true' : undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={handleClick}
      >
        {icon}
        {showLabel ? <span className="menu_label">{labelContent}</span> : null}
        {extra}
      </Root>
    </li>
  );
}
