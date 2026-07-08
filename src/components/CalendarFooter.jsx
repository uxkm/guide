import { useRef } from 'react';
import Button from '@/components/Button.jsx';
import { useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('CalendarFooter', { selfClosing: false });

export default function CalendarFooter({ children }) {
  const rootRef = useRef(null);

  useComponentDemoCode(formatCode, {}, { default: () => children }, rootRef, {});

  return (
    <div ref={rootRef} className="calendar_footer">
      <Button variant="text" color="primary" size="sm" label="오늘" />
      <div className="calendar_footer-actions">
        {children ?? (
          <>
            <Button variant="ghost" size="sm" label="초기화" />
            <Button variant="filled" color="primary" size="sm" label="확인" />
          </>
        )}
      </div>
    </div>
  );
}
