import { useRef } from 'react';
import { useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('CalendarGroup', { selfClosing: false });

export default function CalendarGroup({ children }) {
  const rootRef = useRef(null);

  useComponentDemoCode(formatCode, {}, { default: () => children }, rootRef, {});

  return (
    <div ref={rootRef} className="calendar_group">
      {children}
    </div>
  );
}
