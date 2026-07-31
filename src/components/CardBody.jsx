'use client';

import { useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const VALID_LINE_CLAMPS = new Set([1, 2, 3]);

const formatCode = createComponentFormatter('CardBody', {
  selfClosing: false,
});

export default function CardBody({ lineClamp, children, className, ...rest }) {
  const rootRef = useRef(null);
  const numericLineClamp = Number(lineClamp);
  const resolvedLineClamp = VALID_LINE_CLAMPS.has(numericLineClamp)
    ? numericLineClamp
    : undefined;

  useComponentDemoCode(
    formatCode,
    { lineClamp: resolvedLineClamp },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div
      ref={rootRef}
      className={cn(
        'card_body',
        resolvedLineClamp && `card_body-clamp card_body-clamp-${resolvedLineClamp}`,
        className,
      )}
      {...domRest}
    >
      {children}
    </div>
  );
}
