import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_SIZES = new Set(['', 'sm', 'md', 'lg', 'xl']);

const formatCode = createComponentFormatter('Container', {
  booleanProps: new Set(['fluid']),
});

export default function Container({
  fluid = false,
  size = '',
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const resolvedSize = VALID_SIZES.has(size) ? size : '';

  useComponentDemoCode(
    formatCode,
    { fluid, size: resolvedSize },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['container'];
    if (fluid) classes.push('container_fluid');
    if (resolvedSize) classes.push(`container_${resolvedSize}`);
    return classes;
  }, [fluid, resolvedSize]);

  const domRest = normalizeDomProps(rest);

  return (
    <div ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {children}
    </div>
  );
}
