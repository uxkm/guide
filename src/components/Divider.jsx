import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('Divider', {
  booleanProps: new Set(['dashed', 'plain', 'vertical']),
});

export default function Divider({
  dashed,
  plain,
  vertical,
  orient = '',
  label,
  tag = 'auto',
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const props = { dashed, plain, vertical, orient, label, tag };
  const demoSlots = useMemo(() => createDemoSlots({ default: children ?? label }), [children, label]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const hasLabel = Boolean(label || children);
  const resolvedTag = tag !== 'auto' ? tag : vertical ? 'span' : hasLabel ? 'div' : 'hr';

  const rootClass = cn(
    'divider',
    dashed && 'divider_dashed',
    plain && 'divider_plain',
    vertical && 'divider_vertical',
    orient === 'left' && 'divider_orient-left',
    orient === 'right' && 'divider_orient-right',
    className,
  );

  const Tag = resolvedTag;

  return (
    <Tag ref={rootRef} className={rootClass} aria-hidden={vertical ? 'true' : undefined} {...rest}>
      {children ?? label}
    </Tag>
  );
}
