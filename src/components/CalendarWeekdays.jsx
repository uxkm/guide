import { useRef } from 'react';
import { useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { WEEKDAYS } from '@/data/calendar-demo';

const formatCode = createComponentFormatter('CalendarWeekdays', { selfClosing: false });

export default function CalendarWeekdays({ labels = WEEKDAYS }) {
  const rootRef = useRef(null);

  useComponentDemoCode(formatCode, { labels }, {}, rootRef, {});

  return (
    <div ref={rootRef} className="calendar_weekdays" aria-hidden="true">
      {labels.map((label) => (
        <span key={label} className="calendar_weekday">
          {label}
        </span>
      ))}
    </div>
  );
}
