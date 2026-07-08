import { useMemo, useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useComponentDemoCode } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const formatCode = createComponentFormatter('CalendarHeader', { selfClosing: false });

export default function CalendarHeader({
  title,
  prevLabel = '이전 달',
  nextLabel = '다음 달',
  showNav = true,
  showPrev,
  showNext,
  children,
}) {
  const rootRef = useRef(null);

  useComponentDemoCode(formatCode, { title, prevLabel, nextLabel, showNav, showPrev, showNext }, {}, rootRef, {});

  const prevVisible = useMemo(() => showPrev ?? showNav, [showPrev, showNav]);
  const nextVisible = useMemo(() => showNext ?? showNav, [showNext, showNav]);

  return (
    <div ref={rootRef} className="calendar_header">
      {prevVisible ? (
        <Button variant="ghost" size="sm" iconOnly aria-label={prevLabel} iconBefore={<Icon name="chevron-left" size="sm" />} />
      ) : null}
      <span className="calendar_title">{title}</span>
      {nextVisible ? (
        <Button variant="ghost" size="sm" iconOnly aria-label={nextLabel} iconBefore={<Icon name="chevron-right" size="sm" />} />
      ) : null}
      {children}
    </div>
  );
}
