import { useEffect, useState } from 'react';

const VALID_SIZES = new Set(['sm', 'md', 'lg', 'xl']);

export function Avatar({
  src,
  alt = '',
  initials,
  icon,
  children,
  color,
  size = 'md',
  square = false,
  badgeColor,
  badgeLabel,
  ariaHidden = false,
  className = '',
  ...props
}) {
  const [imageError, setImageError] = useState(false);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const showImage = Boolean(src) && !imageError;
  const fallback = icon ?? children ?? initials;
  const classes = [
    'avatar',
    color && `color_${color}`,
    resolvedSize !== 'md' && `avatar_${resolvedSize}`,
    square && 'avatar_square',
    className
  ].filter(Boolean).join(' ');

  useEffect(() => setImageError(false), [src]);

  return (
    <span
      {...props}
      aria-hidden={ariaHidden || undefined}
      className={classes}
      data-component="Avatar"
    >
      {showImage ? (
        <img className="avatar_image" src={src} alt={alt} onError={() => setImageError(true)} />
      ) : fallback}
      {badgeColor ? (
        <span className={`avatar_badge color_${badgeColor}`} aria-label={badgeLabel} />
      ) : null}
    </span>
  );
}

export function AvatarGroup({ children, ariaLabel, className = '', ...props }) {
  const classes = ['avatar_group', className].filter(Boolean).join(' ');
  return <div {...props} aria-label={ariaLabel} className={classes} data-component="AvatarGroup">{children}</div>;
}

export default Avatar;
