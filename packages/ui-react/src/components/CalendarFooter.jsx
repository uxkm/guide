import { useRef } from 'react';
import Button from '@/components/Button.jsx';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('CalendarFooter', { selfClosing: false });

export default function CalendarFooter({ children, className, ...rest }) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatCode,
    {},
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div ref={rootRef} className={cn('calendar_footer', className)} {...domRest}>
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
