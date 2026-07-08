import { useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('CalendarNav', { selfClosing: false });

export default function CalendarNav({
  label,
  prevLabel = '이전 주',
  nextLabel = '다음 주',
}) {
  const rootRef = useRef(null);

  useComponentDemoCode(formatCode, { label, prevLabel, nextLabel }, {}, rootRef, {});

  return (
    <div ref={rootRef} className="calendar_nav">
      <Button
        variant="ghost"
        size="sm"
        iconOnly
        aria-label={prevLabel}
        iconBefore={<Icon name="chevron-left" size="sm" />}
      />
      <span className="calendar_nav-label">{label}</span>
      <Button
        variant="ghost"
        size="sm"
        iconOnly
        aria-label={nextLabel}
        iconBefore={<Icon name="chevron-right" size="sm" />}
      />
    </div>
  );
}
