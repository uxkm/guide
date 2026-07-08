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
    { ripple, name, color, size, inline, spin, button, circle, square, pulse, ariaLabel },
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

  const svgClass = cn(innerSvgClass, color && `color_${color}`, inline && 'icon_inline', className);

  const buttonRippleAttrs =
    button && (ripple === false ? { 'data-ripple': 'false' } : { 'data-ripple': 'true' });
  const domRest = normalizeDomProps(rest);

  const svgContent = useNamedPaths ? renderIconElements(namedElements) : children;

  const svg = (
    <svg
      className={button || circle || square ? innerSvgClass : svgClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={button || ariaLabel ? undefined : 'true'}
      aria-label={!button ? ariaLabel : undefined}
      ref={button || circle || square ? undefined : rootRef}
    >
      {svgContent}
    </svg>
  );

  if (button) {
    return (
      <button
        ref={rootRef}
        type="button"
        className={cn('icon_button', color && `color_${color}`, inline && 'icon_inline')}
        aria-label={ariaLabel}
        {...buttonRippleAttrs}
        {...domRest}
      >
        {svg}
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
        )}
      >
        {svg}
      </span>
    );
  }

  if (square) {
    return (
      <span
        ref={rootRef}
        className={cn('icon_square', color && `color_${color}`, inline && 'icon_inline')}
      >
        {svg}
      </span>
    );
  }

  return svg;
}
