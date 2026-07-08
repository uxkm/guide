import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('FormLayout', {
  defaults: { layout: 'vertical', tag: 'form' },
  booleanProps: new Set(['fit', 'compact', 'labelAlignStart']),
  skipProps: ['tag'],
  selfClosing: false,
});

export default function FormLayout({
  layout = 'vertical',
  fit,
  compact,
  labelAlignStart,
  labelWidth = '',
  tag = 'form',
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const props = { layout, fit, compact, labelAlignStart, labelWidth, tag };
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'form',
    layout === 'vertical' && 'form_vertical',
    layout === 'horizontal' && 'form_horizontal',
    layout === 'inline' && 'form_inline',
    fit && 'form_fit',
    compact && 'form_compact',
    labelAlignStart && 'form_label-align-start',
    labelWidth === 'sm' && 'form_label-width-sm',
    labelWidth === 'lg' && 'form_label-width-lg',
    className,
  );

  const Tag = tag;
  const domRest = normalizeDomProps(rest);

  return (
    <Tag ref={rootRef} className={rootClass} {...domRest}>
      {children}
    </Tag>
  );
}
