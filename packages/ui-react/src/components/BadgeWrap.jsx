import { useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('BadgeWrap', { selfClosing: false });

export default function BadgeWrap({ ariaLabel, children, className, ...rest }) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatCode,
    { ariaLabel },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <span ref={rootRef} className={cn('badge_wrap', className)} aria-label={ariaLabel} {...domRest}>
      {children}
    </span>
  );
}
