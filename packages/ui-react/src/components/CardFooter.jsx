import { useMemo, useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('CardFooter', {
  booleanProps: new Set(['between']),
  selfClosing: false,
});

export default function CardFooter({ between, children, className, ...rest }) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatCode,
    { between },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const rootClass = useMemo(() => {
    const classes = ['card_footer'];
    if (between) classes.push('card_footer-between');
    return classes;
  }, [between]);

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div ref={rootRef} className={cn(rootClass, className)} {...domRest}>
      {children}
    </div>
  );
}
