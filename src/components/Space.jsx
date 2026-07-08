import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('Space', {
  defaults: { gap: 'md' },
  booleanProps: new Set(['vertical', 'wrap', 'block']),
});

export default function Space({
  vertical = false,
  wrap = false,
  block = false,
  gap = 'md',
  align,
  justify,
  children,
  className,
  ...rest
}) {
  const props = { vertical, wrap, block, gap, align, justify };
  const rootRef = useRef(null);
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'space',
    vertical && 'space_vertical',
    wrap && 'space_wrap',
    block && 'space_block',
    gap && gap !== 'md' && `space_gap-${gap}`,
    align && `space_align-${align}`,
    justify && `space_justify-${justify}`,
    className,
  );

  return (
    <div ref={rootRef} className={rootClass}>
      {children}
    </div>
  );
}
