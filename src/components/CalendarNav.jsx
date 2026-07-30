import { useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('CalendarNav', { selfClosing: false });

export default function CalendarNav({
  label,
  prevLabel = '이전 주',
  nextLabel = '다음 주',
  className,
  ...rest
}) {
  const rootRef = useRef(null);

  useComponentDemoCode(
    formatCode,
    { label, prevLabel, nextLabel },
    createDemoSlots({}),
    rootRef,
    { className, ...rest },
  );

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div ref={rootRef} className={cn('calendar_nav', className)} {...domRest}>
      <Button
        variant="ghost"
        size="sm"
        iconOnly
        ariaLabel={prevLabel}
        iconBefore={<Icon name="chevron-left" size="sm" />}
      />
      <span className="calendar_nav-label">{label}</span>
      <Button
        variant="ghost"
        size="sm"
        iconOnly
        ariaLabel={nextLabel}
        iconBefore={<Icon name="chevron-right" size="sm" />}
      />
    </div>
  );
}
