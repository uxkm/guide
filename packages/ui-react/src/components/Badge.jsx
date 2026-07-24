import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const formatCode = createComponentFormatter('Badge', {
  defaults: { color: 'primary', size: 'md' },
  booleanProps: new Set(['dot', 'count', 'dotOnly']),
  selfClosing: false,
});

export default function Badge({
  color = 'primary',
  size = 'md',
  dot,
  count,
  dotOnly,
  label,
  ariaLabel,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';

  useComponentDemoCode(
    formatCode,
    {
      color,
      size: resolvedSize,
      dot,
      count,
      dotOnly,
      label,
      ariaLabel,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    if (dotOnly) {
      return ['badge_dot-only', `color_${color}`];
    }
    const classes = ['badge', `color_${color}`];
    if (resolvedSize === 'sm') classes.push('badge_sm');
    if (resolvedSize === 'lg') classes.push('badge_lg');
    if (dot) classes.push('badge_dot');
    if (count) classes.push('badge_count');
    return classes;
  }, [dotOnly, color, resolvedSize, dot, count]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <span
      ref={rootRef}
      className={cn(rootClass, className)}
      aria-label={ariaLabel}
      role={dotOnly ? 'status' : undefined}
      {...domRest}
    >
      {children ?? label}
    </span>
  );
}
