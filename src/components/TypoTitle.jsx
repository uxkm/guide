'use client';

import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_LEVELS = new Set([1, 2, 3, 4, 5, '1', '2', '3', '4', '5']);
const VALID_COLORS = new Set([
  '',
  'default',
  'muted',
  'primary',
  'success',
  'warning',
  'danger',
  'info',
  'error',
]);

const formatCode = createComponentFormatter('TypoTitle', {
  defaults: { level: 1 },
  selfClosing: false,
});

export default function TypoTitle({
  level = 1,
  color,
  label,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedLevel = VALID_LEVELS.has(level) ? Number(level) : 1;
  const resolvedColor = VALID_COLORS.has(color) ? color : '';
  const content = children ?? label;

  useComponentDemoCode(
    formatCode,
    { level: resolvedLevel, color: resolvedColor, label },
    createDemoSlots({ default: content }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = [`typo_title-${resolvedLevel}`];
    if (resolvedColor) classes.push(`color_${resolvedColor}`);
    return classes;
  }, [resolvedLevel, resolvedColor]);

  const Tag = `h${resolvedLevel}`;
  const domRest = normalizeDomProps(rest);

  return (
    <Tag ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {content}
    </Tag>
  );
}
