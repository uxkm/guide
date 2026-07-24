import { useMemo } from 'react';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

export default function CalendarGrid({ week, children, className, ...rest }) {
  const gridClass = useMemo(
    () => ['calendar_grid', week && 'calendar_grid-week'],
    [week],
  );

  const { class: _ignoredClass, ...restForDom } = rest;
  const domRest = normalizeDomProps(restForDom);

  return (
    <div className={cn(gridClass, className)} role="grid" {...domRest}>
      {children}
    </div>
  );
}
