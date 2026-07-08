import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('Timeline', {
  defaults: { size: 'md', tag: 'ol', iconSize: 'md' },
  booleanProps: new Set(['card', 'alternate', 'horizontal', 'labelCol', 'icon']),
  skipProps: ['tag'],
  selfClosing: false,
});

export default function Timeline({
  card = false,
  alternate = false,
  horizontal = false,
  labelCol = false,
  icon = false,
  iconSize = 'md',
  size = 'md',
  tag: Tag = 'ol',
  children,
  className,
  ...rest
}) {
  const props = { card, alternate, horizontal, labelCol, icon, iconSize, size, tag: Tag };
  const rootRef = useRef(null);
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'timeline',
    card && 'timeline_card',
    alternate && 'timeline_alternate',
    horizontal && 'timeline_horizontal',
    labelCol && 'timeline_label-col',
    icon && 'timeline_icon',
    icon && iconSize === 'sm' && 'timeline_icon-sm',
    size === 'sm' && 'timeline_sm',
    size === 'lg' && 'timeline_lg',
    className,
  );

  return (
    <Tag ref={rootRef} className={rootClass}>
      {children}
    </Tag>
  );
}
