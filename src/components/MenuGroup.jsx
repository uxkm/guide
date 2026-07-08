import { useRef } from 'react';
import { createComponentFormatter } from '@/utils/format-component-code';
import { useComponentDemoCode } from '@/hooks/useDemoCode';

const formatCode = createComponentFormatter('MenuGroup', { selfClosing: true });

export default function MenuGroup({ title }) {
  const rootRef = useRef(null);

  useComponentDemoCode(formatCode, { title }, {}, rootRef, {});

  return (
    <li ref={rootRef} className="menu_group" role="presentation">
      <span className="menu_group-title">{title}</span>
    </li>
  );
}
