import { useMemo, useRef } from 'react';
import { cn } from '@/utils/cn';
import { createComponentFormatter } from '@/utils/format-component-code';
import { createDemoSlots, useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('CardFooter', {
  booleanProps: new Set(['between']),
  selfClosing: false,
});

export default function CardFooter({ between, children, className, ...rest }) {
  const rootRef = useRef(null);
  const props = { between };
  const demoSlots = useMemo(() => createDemoSlots({ default: children }), [children]);

  useComponentDemoCode(formatCode, props, demoSlots, rootRef, { class: className, ...rest });

  return (
    <div ref={rootRef} className={cn('card_footer', between && 'card_footer-between', className)} {...rest}>
      {children}
    </div>
  );
}
