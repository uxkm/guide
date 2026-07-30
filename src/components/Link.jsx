import { useMemo, useRef } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_COLORS = new Set(['primary', 'muted', 'success', 'warning', 'danger']);
const VALID_SIZES = new Set(['', 'sm', 'lg', 'xl']);

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
  const { rippleAttrs } = useRipple({ ripple });
  const rootRef = useRef(null);

  const resolvedColor = VALID_COLORS.has(color) ? color : 'primary';
  const resolvedSize = VALID_SIZES.has(size) ? size : '';
  const labelContent = children ?? label;
  const showLabel = !iconOnly && labelContent != null && labelContent !== '';

  useComponentDemoCode(
    formatCode,
    {
      ripple,
      color: resolvedColor,
      size: resolvedSize,
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
    },
    createDemoSlots({
      default: showLabel ? labelContent : children,
      icon,
    }),
    rootRef,
    { className, onClick, ...rest },
  );

  const { href: fallthroughHref, onClick: _ignoredClick, ...restForDom } = rest;

  const resolvedHref = useMemo(() => {
    const hrefValue = href ?? fallthroughHref;
    return hrefValue != null && hrefValue !== '' ? String(hrefValue) : '#';
  }, [href, fallthroughHref]);

  const rootClass = useMemo(() => {
    const classes = ['link', `color_${resolvedColor}`];
    if (resolvedSize === 'sm') classes.push('size_sm');
    if (resolvedSize === 'lg') classes.push('size_lg');
    if (resolvedSize === 'xl') classes.push('size_xl');
    if (underline) classes.push('link_underline');
    if (noUnderline) classes.push('link_no-underline');
    if (standalone) classes.push('link_standalone');
    if (nav) classes.push('link_nav');
    if (block) classes.push('link_block');
    if (back) classes.push('link_back');
    if (iconOnly) classes.push('link_icon-only');
    if (active) classes.push('is-active');
    if (disabled) classes.push('is-disabled');
    return classes;
  }, [
    resolvedColor,
    resolvedSize,
    underline,
    noUnderline,
    standalone,
    nav,
    block,
    back,
    iconOnly,
    active,
    disabled,
  ]);

  function handleClick(event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    const clickHref = href ?? fallthroughHref;
    if (!clickHref || clickHref === '#') {
      event.preventDefault();
    }

    onClick?.(event);
  }

  const domRest = normalizeDomProps(restForDom);

  return (
    <a
      ref={rootRef}
      className={cn(rootClass, className)}
      href={resolvedHref}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled ? 'true' : undefined}
      tabIndex={disabled ? -1 : undefined}
      onClick={handleClick}
      {...rippleAttrs}
      {...domRest}
    >
      {icon}
      {showLabel ? labelContent : null}
    </a>
  );
}
