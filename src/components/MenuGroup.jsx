import { useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('MenuGroup', { selfClosing: true });

export default function MenuGroup({ title, className, ...rest }) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatCode,
    { title },
    createDemoSlots({}),
    rootRef,
    { className, ...rest },
  );

  return (
    <li ref={rootRef} className={cn('menu_group', className)} role="presentation" {...rest}>
      <span className="menu_group-title">{title}</span>
    </li>
  );
}
