import { cn } from '@/utils/cn';

export default function CalendarGrid({ week, children }) {
  return (
    <div className={cn('calendar_grid', week && 'calendar_grid-week')} role="grid">
      {children}
    </div>
  );
}
