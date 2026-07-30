import { useMemo, useRef } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

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
  const { rippleAttrs } = useRipple({ ripple });
  const rootRef = useRef(null);
  const content = children ?? label;

  useComponentDemoCode(
    formatCode,
    { ripple, label, href, current, disabled, icon, ariaLabel },
    createDemoSlots({ default: content }),
    rootRef,
    { className, onClick, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['breadcrumb_item'];
    if (current) classes.push('is-current');
    return classes;
  }, [current]);

  const linkClass = useMemo(() => {
    const classes = ['breadcrumb_link'];
    if (icon) classes.push('breadcrumb_link-icon');
    if (disabled) classes.push('is-disabled');
    return classes;
  }, [icon, disabled]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  const handleLinkClick = (event) => {
    event.preventDefault();
    onClick?.(event);
  };

  let inner = null;
  if (href && !current && !disabled) {
    inner = (
      <a
        {...rippleAttrs}
        className={cn(linkClass)}
        href={href}
        aria-label={ariaLabel || undefined}
        onClick={handleLinkClick}
      >
        {content}
      </a>
    );
  } else if (disabled) {
    inner = (
      <span className={cn(linkClass)} aria-disabled="true">
        {content}
      </span>
    );
  } else if (current) {
    inner = <span className="breadcrumb_current">{content}</span>;
  } else {
    inner = content;
  }

  return (
    <li
      ref={rootRef}
      className={cn(rootClass, className)}
      aria-current={current ? 'page' : undefined}
      {...domRest}
    >
      {inner}
    </li>
  );
}
