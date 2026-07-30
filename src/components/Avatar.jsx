import { useEffect, useMemo, useRef, useState } from 'react';
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
  src,
  alt,
  initials,
  color,
  size = 'md',
  square,
  badgeColor,
  badgeLabel,
  ariaHidden,
  icon,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const [imageError, setImageError] = useState(false);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const showImage = Boolean(src) && !imageError;
  const showInitials = !showImage && !icon && initials;

  useEffect(() => {
    setImageError(false);
  }, [src]);

  useComponentDemoCode(
    formatCode,
    {
      src,
      alt,
      initials,
      color,
      size: resolvedSize,
      square,
      ariaHidden,
    },
    createDemoSlots({
      default: showInitials ? initials : undefined,
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

  function handleImageError() {
    setImageError(true);
  }

  return (
    <span
      ref={rootRef}
      className={cn(rootClass, className)}
      aria-hidden={ariaHidden ? 'true' : undefined}
      {...domRest}
    >
      {showImage ? (
        <img
          key={src}
          className="avatar_image"
          src={src}
          alt={alt || ''}
          onError={handleImageError}
        />
      ) : icon ? (
        icon
      ) : showInitials ? (
        initials
      ) : null}
      {badgeColor ? (
        <span
          className={cn('avatar_badge', `color_${badgeColor}`)}
          aria-label={badgeLabel}
        />
      ) : null}
    </span>
  );
}
