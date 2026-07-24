import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_COLORS = new Set(['primary', 'success', 'warning', 'danger']);

const formatCode = createComponentFormatter('Spin', {
  defaults: { size: 'md', color: 'primary' },
  booleanProps: new Set(['inline', 'block', 'overlay']),
  selfClosing: false,
});

export default function Spin({
  size = 'md',
  tip,
  color = 'primary',
  inline,
  block,
  overlay,
  ariaLabel = '로딩 중',
  children,
  className,
  style,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const resolvedColor = VALID_COLORS.has(color) ? color : 'primary';

  useComponentDemoCode(
    formatCode,
    {
      size: resolvedSize,
      tip,
      color: resolvedColor,
      inline,
      block,
      overlay,
      ariaLabel,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, style, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['spin', `color_${resolvedColor}`];
    if (resolvedSize === 'sm') classes.push('spin_sm');
    if (resolvedSize === 'lg') classes.push('spin_lg');
    if (inline) classes.push('spin_inline');
    if (block) classes.push('spin_block');
    if (overlay) classes.push('spin_overlay');
    return classes;
  }, [resolvedColor, resolvedSize, inline, block, overlay]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div
      ref={rootRef}
      className={cn(rootClass, className)}
      style={style}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={ariaLabel}
      {...domRest}
    >
      <span className="spin_indicator" aria-hidden="true" />
      {tip ? <p className="spin_tip">{tip}</p> : null}
      {children}
    </div>
  );
}
