'use client';

import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { formatTreeCode } from '@/utils/format-tree-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export default function Tree({
  bordered,
  lines,
  compact,
  ariaLabel,
  multiselectable,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatTreeCode,
    { bordered, lines, compact, ariaLabel, multiselectable },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['tree'];
    if (bordered) classes.push('tree_bordered');
    if (lines) classes.push('tree_lines');
    if (compact) classes.push('tree_compact');
    return classes;
  }, [bordered, lines, compact]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <ul
      ref={rootRef}
      className={cn(rootClass, className)}
      role="tree"
      aria-label={ariaLabel}
      aria-multiselectable={multiselectable ? 'true' : undefined}
      {...domRest}
    >
      {children}
    </ul>
  );
}
