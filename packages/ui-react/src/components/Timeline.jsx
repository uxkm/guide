import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_ICON_SIZES = new Set(['sm', 'md']);
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

const formatCode = createComponentFormatter('Timeline', {
  defaults: { size: 'md', tag: 'ol', iconSize: 'md' },
  booleanProps: new Set(['card', 'alternate', 'horizontal', 'labelCol', 'icon']),
  skipProps: ['tag'],
  selfClosing: false,
});

export default function Timeline({
  card,
  alternate,
  horizontal,
  labelCol,
  icon,
  iconSize = 'md',
  size = 'md',
  tag = 'ol',
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedIconSize = VALID_ICON_SIZES.has(iconSize) ? iconSize : 'md';
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';

  useComponentDemoCode(
    formatCode,
    {
      card,
      alternate,
      horizontal,
      labelCol,
      icon,
      iconSize: resolvedIconSize,
      size: resolvedSize,
      tag,
    },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['timeline'];
    if (card) classes.push('timeline_card');
    if (alternate) classes.push('timeline_alternate');
    if (horizontal) classes.push('timeline_horizontal');
    if (labelCol) classes.push('timeline_label-col');
    if (icon) classes.push('timeline_icon');
    if (icon && resolvedIconSize === 'sm') classes.push('timeline_icon-sm');
    if (resolvedSize === 'sm') classes.push('timeline_sm');
    if (resolvedSize === 'lg') classes.push('timeline_lg');
    return classes;
  }, [card, alternate, horizontal, labelCol, icon, resolvedIconSize, resolvedSize]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);
  const Tag = tag || 'ol';

  return (
    <Tag ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {children}
    </Tag>
  );
}
