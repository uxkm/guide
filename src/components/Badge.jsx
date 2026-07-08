import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

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
  const props = { color, size, dot, count, dotOnly, label, ariaLabel };
  const demoSlots = useMemo(() => createDemoSlots({ default: children ?? label }), [children, label]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = dotOnly
    ? cn('badge_dot-only', `color_${color}`, className)
    : cn(
        'badge',
        `color_${color}`,
        size === 'sm' && 'badge_sm',
        size === 'lg' && 'badge_lg',
        dot && 'badge_dot',
        count && 'badge_count',
        className,
      );

  return (
    <span
      ref={rootRef}
      className={rootClass}
      aria-label={ariaLabel}
      role={dotOnly ? 'status' : undefined}
      {...rest}
    >
      {children ?? label}
    </span>
  );
}
