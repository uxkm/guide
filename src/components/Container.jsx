import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('Container', {
  booleanProps: new Set(['fluid']),
});

export default function Container({ fluid, size = '', children, className, ...rest }) {
  const rootRef = useRef(null);
  const props = { fluid, size };
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  const rootClass = cn(
    'container',
    fluid && 'container_fluid',
    size && `container_${size}`,
    className,
  );

  return (
    <div ref={rootRef} className={rootClass} {...rest}>
      {children}
    </div>
  );
}
