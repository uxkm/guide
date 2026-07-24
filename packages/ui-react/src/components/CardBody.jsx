import { useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('CardBody', {
  selfClosing: false,
});

export default function CardBody({ children, className, ...rest }) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatCode,
    {},
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div ref={rootRef} className={cn('card_body', className)} {...domRest}>
      {children}
    </div>
  );
}
