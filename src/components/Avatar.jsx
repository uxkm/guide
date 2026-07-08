import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

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
  const props = { src, alt, initials, color, size, square, badgeColor, badgeLabel, ariaHidden };
  const demoSlots = useMemo(() => createDemoSlots({ icon }), [icon]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'avatar',
    color && `color_${color}`,
    size === 'sm' && 'avatar_sm',
    size === 'lg' && 'avatar_lg',
    size === 'xl' && 'avatar_xl',
    square && 'avatar_square',
    className,
  );

  const showInitials = !src && !icon && initials;

  return (
    <span ref={rootRef} className={rootClass} aria-hidden={ariaHidden ? 'true' : undefined} {...rest}>
      {src ? (
        <img className="avatar_image" src={src} alt={alt || ''} />
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
