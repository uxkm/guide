import { useRef } from 'react';
import { createComponentFormatter } from '@/utils/format-component-code';
import { useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('MenuDivider', { selfClosing: true });

export default function MenuDivider() {
  const rootRef = useRef(null);

  useComponentDemoCode(formatCode, {}, {}, rootRef, {});

  return <li ref={rootRef} className="menu_divider" role="separator" />;
}
