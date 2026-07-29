import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('GridCol', {
  selfClosing: false,
});

export default function GridCol({ span, children, className, ...rest }) {
  const rootRef = useRef(null);
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(
    formatCode,
    { span },
    demoSlots,
    rootRef,
    { className, ...rest },
  );

  const domRest = normalizeDomProps(rest);

  return (
    <div ref={rootRef} className={cn(span != null && `grid_col-span-${span}`, className)} {...domRest}>
      {children}
    </div>
  );
}
