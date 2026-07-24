import { useRef } from 'react';
import Button from '@/components/Button.jsx';
import Icon from '@/components/Icon.jsx';
import { useComponentDemoCode, createDemoSlots } from '@/hooks/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

const formatCode = createComponentFormatter('CalendarHeader', { selfClosing: false });

export default function CalendarHeader({
  title,
  prevLabel = '이전 달',
  nextLabel = '다음 달',
  showNav = true,
  showPrev,
  showNext,
  children,
  className,
  ...rest
}) {
  const rootRef = useRef(null);
  const prevVisible = showPrev ?? showNav;
  const nextVisible = showNext ?? showNav;

  useComponentDemoCode(
    formatCode,
    { title, prevLabel, nextLabel, showNav, showPrev, showNext },
    createDemoSlots({ default: children }),
    rootRef,
    { className, ...rest },
  );

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div ref={rootRef} className={cn('calendar_header', className)} {...domRest}>
      {prevVisible ? (
        <Button
          variant="ghost"
          size="sm"
          iconOnly
          ariaLabel={prevLabel}
          iconBefore={<Icon name="chevron-left" size="sm" />}
        />
      ) : null}
      <span className="calendar_title">{title}</span>
      {nextVisible ? (
        <Button
          variant="ghost"
          size="sm"
          iconOnly
          ariaLabel={nextLabel}
          iconBefore={<Icon name="chevron-right" size="sm" />}
        />
      ) : null}
      {children}
    </div>
  );
}
