import { useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('MenuDivider', { selfClosing: true });

export default function MenuDivider({ className, ...rest }) {
  const rootRef = useRef(null);

  useComponentDemoCode(formatCode, {}, createDemoSlots({}), rootRef, { className, ...rest });

  return (
    <li
      ref={rootRef}
      className={cn('menu_divider', className)}
      role="separator"
      {...rest}
    />
  );
}
