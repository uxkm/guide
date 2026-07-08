import { useRef } from 'react';
import { cn } from '@/utils/cn';
import { useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('TagGroup', {
  booleanProps: new Set(['tight']),
  selfClosing: false,
});

export default function TagGroup({ tight = false, ariaLabel, children }) {
  const rootRef = useRef(null);
  const props = { tight, ariaLabel };

  useComponentDemoCode(formatCode, props, {}, rootRef, {});

  return (
    <div
      ref={rootRef}
      className={cn('tag_group', tight && 'tag_group-tight')}
      aria-label={ariaLabel}
      role="group"
    >
      {children}
    </div>
  );
}
