import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('TagGroup', {
  booleanProps: new Set(['tight']),
  selfClosing: false,
});

export default function TagGroup({
  tight,
  ariaLabel,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatCode,
    { tight, ariaLabel },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['tag_group'];
    if (tight) classes.push('tag_group-tight');
    return classes;
  }, [tight]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div
      ref={rootRef}
      className={cn(rootClass, className)}
      aria-label={ariaLabel}
      role="group"
      {...domRest}
    >
      {children}
    </div>
  );
}
