'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from '@/components/Icon.jsx';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg', 'xl']);

const formatCode = createComponentFormatter('Avatar', {
  defaults: { size: 'md' },
  booleanProps: new Set(['square', 'ariaHidden']),
  skipProps: ['badgeColor', 'badgeLabel'],
});

export default function Avatar({
  as,
  name,
  src,
  alt,
  initials,
  color,
  size = 'md',
  square,
  badgeColor,
  badgeLabel,
  ariaHidden,
  ariaLabel,
  icon,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const [imageError, setImageError] = useState(false);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const hasChildren = children != null && children !== false;
  const showImage = Boolean(src) && !imageError;
  const showInitials = !showImage && !hasChildren && !icon && !name && initials;

  useEffect(() => {
    setImageError(false);
  }, [src]);

  useComponentDemoCode(
    formatCode,
    {
      as: typeof as === 'string' ? as : undefined,
      name,
      src,
      alt,
      initials,
      color,
      size: resolvedSize,
      square,
      ariaHidden,
      ariaLabel,
    },
    createDemoSlots({
      default: hasChildren ? children : showInitials ? initials : undefined,
      icon,
    }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['avatar'];
    if (color) classes.push(`color_${color}`);
    if (resolvedSize === 'sm') classes.push('avatar_sm');
    if (resolvedSize === 'lg') classes.push('avatar_lg');
    if (resolvedSize === 'xl') classes.push('avatar_xl');
    if (square) classes.push('avatar_square');
    return classes;
  }, [color, resolvedSize, square]);

  const domRest = normalizeDomProps(rest);
  const Root = as || 'span';
  const isNativeButton = Root === 'button';
  const hasNativeSemantics = isNativeButton || Root === 'a';
  const resolvedSrc = typeof src === 'object' && src ? src.src : src;

  function handleImageError() {
    setImageError(true);
  }

  return (
    <Root
      ref={rootRef}
      className={cn(rootClass, className)}
      type={isNativeButton ? 'button' : undefined}
      role={!hasNativeSemantics && !ariaHidden && ariaLabel ? 'img' : undefined}
      aria-label={!ariaHidden ? ariaLabel : undefined}
      aria-hidden={ariaHidden ? 'true' : undefined}
      {...domRest}
    >
      {showImage ? (
        <img
          key={resolvedSrc}
          className="avatar_image"
          src={resolvedSrc}
          alt={alt || ''}
          onError={handleImageError}
        />
      ) : hasChildren ? (
        children
      ) : icon ? (
        icon
      ) : name ? (
        <Icon name={name} className="avatar_icon" />
      ) : showInitials ? (
        initials
      ) : null}
      {badgeColor ? (
        <span
          className={cn('avatar_badge', `color_${badgeColor}`)}
          aria-label={badgeLabel}
        />
      ) : null}
    </Root>
  );
}
