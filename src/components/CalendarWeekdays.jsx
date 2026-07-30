import { useRef } from 'react';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { WEEKDAYS } from '@/data/calendar-demo';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('CalendarWeekdays', { selfClosing: false });

export default function CalendarWeekdays({
  labels = WEEKDAYS,
  className,
  ...rest
}) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatCode,
    { labels },
    createDemoSlots({}),
    rootRef,
    { className, ...rest },
  );

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div
      ref={rootRef}
      className={cn('calendar_weekdays', className)}
      aria-hidden="true"
      {...domRest}
    >
      {labels.map((label) => (
        <span key={label} className="calendar_weekday">
          {label}
        </span>
      ))}
    </div>
  );
}
