import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('Spin', {
  defaults: { size: 'md', color: 'primary' },
  booleanProps: new Set(['inline', 'block', 'overlay']),
  selfClosing: false,
});

export default function Spin({
  size = 'md',
  tip,
  color = 'primary',
  inline = false,
  block = false,
  overlay = false,
  ariaLabel = '로딩 중',
  children,
  className,
  ...rest
}) {
  const props = { size, tip, color, inline, block, overlay, ariaLabel };
  const rootRef = useRef(null);
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'spin',
    `color_${color}`,
    size === 'sm' && 'spin_sm',
    size === 'lg' && 'spin_lg',
    inline && 'spin_inline',
    block && 'spin_block',
    overlay && 'spin_overlay',
    className,
  );

  const Root = inline ? 'span' : 'div';

  return (
    <Root
      ref={rootRef}
      className={rootClass}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={ariaLabel}
    >
      <span className="spin_indicator" aria-hidden="true" />
      {tip && <span className="spin_tip">{tip}</span>}
      {children}
    </Root>
  );
}
