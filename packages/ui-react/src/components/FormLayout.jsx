import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_LAYOUTS = new Set(['vertical', 'horizontal', 'inline', '']);
const VALID_LABEL_WIDTHS = new Set(['', 'sm', 'lg']);

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
  const resolvedLayout = VALID_LAYOUTS.has(layout) ? layout : 'vertical';
  const resolvedLabelWidth = VALID_LABEL_WIDTHS.has(labelWidth) ? labelWidth : '';

  useComponentDemoCode(
    formatCode,
    {
      layout: resolvedLayout,
      fit,
      compact,
      labelAlignStart,
      labelWidth: resolvedLabelWidth,
      tag,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['form'];
    if (resolvedLayout === 'vertical') classes.push('form_vertical');
    if (resolvedLayout === 'horizontal') classes.push('form_horizontal');
    if (resolvedLayout === 'inline') classes.push('form_inline');
    if (fit) classes.push('form_fit');
    if (compact) classes.push('form_compact');
    if (labelAlignStart) classes.push('form_label-align-start');
    if (resolvedLabelWidth === 'sm') classes.push('form_label-width-sm');
    if (resolvedLabelWidth === 'lg') classes.push('form_label-width-lg');
    return classes;
  }, [resolvedLayout, fit, compact, labelAlignStart, resolvedLabelWidth]);

  const Tag = tag || 'form';
  const domRest = normalizeDomProps(rest);

  return (
    <Tag ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {children}
    </Tag>
  );
}
