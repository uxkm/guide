import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_ORIENTS = new Set(['', 'left', 'right']);
const VALID_TAGS = new Set(['auto', 'hr', 'div', 'span']);

const formatCode = createComponentFormatter('Divider', {
  booleanProps: new Set(['dashed', 'plain', 'vertical']),
});

export default function Divider({
  dashed = false,
  plain = false,
  vertical = false,
  orient = '',
  label,
  tag = 'auto',
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedOrient = VALID_ORIENTS.has(orient) ? orient : '';
  const resolvedTagProp = VALID_TAGS.has(tag) ? tag : 'auto';
  const content = children ?? label;
  const hasLabel = Boolean(content);

  const resolvedTag = useMemo(() => {
    if (resolvedTagProp !== 'auto') return resolvedTagProp;
    if (vertical) return 'span';
    return hasLabel ? 'div' : 'hr';
  }, [resolvedTagProp, vertical, hasLabel]);

  useComponentDemoCode(
    formatCode,
    { dashed, plain, vertical, orient: resolvedOrient, label, tag: resolvedTagProp },
    createDemoSlots({ default: content }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['divider'];
    if (dashed) classes.push('divider_dashed');
    if (plain) classes.push('divider_plain');
    if (vertical) classes.push('divider_vertical');
    if (resolvedOrient === 'left') classes.push('divider_orient-left');
    if (resolvedOrient === 'right') classes.push('divider_orient-right');
    return classes;
  }, [dashed, plain, vertical, resolvedOrient]);

  const domRest = normalizeDomProps(rest);
  const Tag = resolvedTag;

  return (
    <Tag
      ref={rootRef}
      className={cn(rootClass, className)}
      aria-hidden={vertical ? 'true' : undefined}
      {...domRest}
    >
      {content}
    </Tag>
  );
}
