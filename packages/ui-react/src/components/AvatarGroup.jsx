import { useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('AvatarGroup', { selfClosing: false });

export default function AvatarGroup({ ariaLabel, children, className, ...rest }) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatCode,
    { ariaLabel },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const domRest = normalizeDomProps(rest);

  return (
    <div ref={rootRef} className={cn('avatar_group', className)} aria-label={ariaLabel} {...domRest}>
      {children}
    </div>
  );
}
