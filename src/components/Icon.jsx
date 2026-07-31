'use client';

import { useMemo, useRef } from 'react';
import { useRipple } from '@/hooks/useRipple';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { useIconDemoCode } from '@/hooks/useDemoCode';
import { commonIconPaths } from '@/data/common-icons';
import { renderIconElements } from '@/utils/renderIconElements';
import { cn } from '@/utils/cn';

export default function Icon({
  ripple,
  name,
  src,
  alt,
  as,
  color,
  size = 'md',
  inline,
  spin,
  button,
  circle,
  square,
  pulse,
  ariaLabel,
  children,
  className,
  ...rest
}) {
  useRipple({ ripple }, { defaultEnabled: false });

  const rootRef = useRef(null);
  const namedElements = useMemo(() => (name ? commonIconPaths[name] ?? [] : []), [name]);
  const useNamedPaths = Boolean(name) && !children;

  useIconDemoCode(
    {
      ripple,
      name,
      src,
      alt,
      as: typeof as === 'string' ? as : undefined,
      color,
      size,
      inline,
      spin,
      button,
      circle,
      square,
      pulse,
      ariaLabel,
    },
    rootRef,
    { className, ...rest },
  );

  const innerSvgClass = cn(
    'icon',
    !circle && size === 'sm' && 'icon_sm',
    !circle && size === 'lg' && 'icon_lg',
    !circle && size === 'xl' && 'icon_xl',
    spin && 'icon_spin',
  );

  const isImage = as === 'img' || (Boolean(src) && !as);
  const isCustom = Boolean(as) && as !== 'img';
  const isWrapped = button || circle || square;
  const rootClass = cn(
    innerSvgClass,
    !isWrapped && color && `color_${color}`,
    !isWrapped && inline && 'icon_inline',
    !isWrapped && className,
  );

  const buttonRippleAttrs =
    button && (ripple === false ? { 'data-ripple': 'false' } : { 'data-ripple': 'true' });
  const domRest = normalizeDomProps(rest);
  const resolvedSrc = typeof src === 'object' && src ? src.src : src;

  const svgContent = useNamedPaths ? renderIconElements(namedElements) : children;

  const svg = (
    <svg
      className={rootClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={!button && ariaLabel ? 'img' : undefined}
      aria-hidden={button || !ariaLabel ? 'true' : undefined}
      aria-label={!button ? ariaLabel : undefined}
      ref={isWrapped ? undefined : rootRef}
      {...(!isWrapped ? domRest : {})}
    >
      {svgContent}
    </svg>
  );

  const image = isImage ? (
    <img
      ref={isWrapped ? undefined : rootRef}
      className={rootClass}
      src={resolvedSrc}
      alt={alt ?? ''}
      aria-label={ariaLabel}
      aria-hidden={!alt && !ariaLabel ? 'true' : undefined}
      {...(!isWrapped ? domRest : {})}
    />
  ) : null;

  const content = isImage ? image : svg;

  if (button) {
    return (
      <button
        ref={rootRef}
        type="button"
        className={cn(
          'icon_button',
          color && `color_${color}`,
          inline && 'icon_inline',
          className,
        )}
        aria-label={ariaLabel}
        {...buttonRippleAttrs}
        {...domRest}
      >
        {content}
      </button>
    );
  }

  if (circle) {
    return (
      <span
        ref={rootRef}
        className={cn(
          'icon_circle',
          color && `color_${color}`,
          pulse && 'icon_pulse',
          size === 'lg' && 'icon_circle-lg',
          size === 'sm' && 'icon_circle-sm',
          inline && 'icon_inline',
          className,
        )}
        {...domRest}
      >
        {content}
      </span>
    );
  }

  if (square) {
    return (
      <span
        ref={rootRef}
        className={cn(
          'icon_square',
          color && `color_${color}`,
          inline && 'icon_inline',
          className,
        )}
        {...domRest}
      >
        {content}
      </span>
    );
  }

  if (isCustom) {
    const CustomElement = as;

    return (
      <CustomElement
        ref={rootRef}
        className={rootClass}
        role={ariaLabel ? 'img' : undefined}
        aria-hidden={ariaLabel ? undefined : 'true'}
        aria-label={ariaLabel}
        {...domRest}
      >
        {children}
      </CustomElement>
    );
  }

  return content;
}
