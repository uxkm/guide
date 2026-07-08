import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('GridCol', { selfClosing: false });

export default function GridCol({ span, children, className, ...rest }) {
  const rootRef = useRef(null);
  const props = { span };
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  return (
    <div ref={rootRef} className={cn(`grid_col-span-${span}`, className)} {...rest}>
      {children}
    </div>
  );
}
