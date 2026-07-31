import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_ALIGNMENTS = new Set(['auto', 'start', 'center', 'end', 'stretch', 'baseline']);

const formatCode = createComponentFormatter('FlexItem', {
  booleanProps: new Set(['grow', 'fit']),
});

export default function FlexItem({
  as: Component = 'div',
  span,
  spanMd,
  spanLg,
  grow = false,
  fit = false,
  align,
  order,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedAlign = VALID_ALIGNMENTS.has(align) ? align : undefined;
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(
    formatCode,
    {
      as: Component === 'div' ? undefined : Component,
      span,
      spanMd,
      spanLg,
      grow,
      fit,
      align: resolvedAlign,
      order,
    },
    demoSlots,
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(
    () => [
      span != null && `flex_item-span-${span}`,
      spanMd != null && `flex_item-span-md-${spanMd}`,
      spanLg != null && `flex_item-span-lg-${spanLg}`,
      grow && 'flex_grow',
      fit && 'flex_fit',
      resolvedAlign && `flex_self-${resolvedAlign}`,
      order != null && `flex_order-${order}`,
    ],
    [span, spanMd, spanLg, grow, fit, resolvedAlign, order],
  );

  const domRest = normalizeDomProps(rest);

  return (
    <Component ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {children}
    </Component>
  );
}
