import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('CardBody', { selfClosing: false });

export default function CardBody({ children, className, ...rest }) {
  const rootRef = useRef(null);
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, {}, demoSlots, rootRef, { class: className, ...rest });

  return (
    <div ref={rootRef} className={cn('card_body', className)} {...rest}>
      {children}
    </div>
  );
}
