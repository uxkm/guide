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
    // size 다음 fluid — SCSS에서 &_fluid가 size보다 뒤에 있어 조합 시 max-width 해제
    if (resolvedSize) classes.push(`container_${resolvedSize}`);
    if (fluid) classes.push('container_fluid');
    return classes;
  }, [fluid, resolvedSize]);

  const domRest = normalizeDomProps(rest);

  return (
    <div ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {children}
    </div>
  );
}
