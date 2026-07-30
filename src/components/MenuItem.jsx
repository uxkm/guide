import { useMemo, useRef } from 'react';
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
  children,
  className,
  onClick,
  ...rest
}) {
  const { rippleAttrs } = useRipple({ ripple });
  const rootRef = useRef(null);
  const labelContent = children ?? label;
  const showLabel = labelContent != null && labelContent !== '';

  useComponentDemoCode(
    formatCode,
    { ripple, label, href, active, disabled, color },
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
    if (active) classes.push('is-active');
    if (disabled) classes.push('is-disabled');
    if (color) classes.push(`color_${color}`);
    return classes;
  }, [active, disabled, color]);

  const Tag = href && !disabled ? 'a' : disabled ? 'span' : 'button';

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const handleClick = (event) => {
    if (Tag === 'a') event.preventDefault();
    onClick?.(event);
  };

  return (
    <li ref={rootRef} className={cn(itemClass, className)} {...domRest}>
      <Tag
        {...rippleAttrs}
        className={cn(linkClass)}
        href={Tag === 'a' ? href || '#' : undefined}
        type={Tag === 'button' ? 'button' : undefined}
        aria-current={active ? 'page' : undefined}
        aria-disabled={disabled ? 'true' : undefined}
        disabled={Tag === 'button' ? disabled : undefined}
        tabIndex={disabled && Tag === 'a' ? -1 : undefined}
        onClick={handleClick}
      >
        {icon}
        {showLabel ? <span className="menu_label">{labelContent}</span> : null}
        {extra}
      </Tag>
    </li>
  );
}
