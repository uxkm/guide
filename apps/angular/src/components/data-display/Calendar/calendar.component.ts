import { Component, computed, input } from '@angular/core';

interface CalendarCell {
  day: number;
  otherMonth?: boolean;
  today?: boolean;
  selected?: boolean;
  rangeStart?: boolean;
  rangeEnd?: boolean;
  inRange?: boolean;
  event?: boolean;
}

function monthDays(options: {
  partial?: number;
  selected?: number;
  today?: number;
  events?: number[];
  rangeStart?: number;
  rangeEnd?: number;
} = {}): CalendarCell[] {
  const {
    partial,
    selected = 15,
    today = 12,
    events = [],
    rangeStart,
    rangeEnd,
  } = options;
  const cells: CalendarCell[] = [];
  if (!partial) [26, 27, 28, 29, 30, 31].forEach((day) => cells.push({ day, otherMonth: true }));
  const count = partial || 30;
  for (let day = 1; day <= count; day += 1) {
    cells.push({
      day,
      today: day === today,
      selected: day === selected || day === rangeStart || day === rangeEnd,
      rangeStart: day === rangeStart,
      rangeEnd: day === rangeEnd,
      inRange:
        rangeStart != null && rangeEnd != null && day > rangeStart && day < rangeEnd,
      event: events.includes(day),
    });
  }
  if (!partial) [1, 2, 3, 4, 5, 6].forEach((day) => cells.push({ day, otherMonth: true }));
  return cells;
}

@Component({
  selector: 'Calendar',
  standalone: true,
  template: `
    <div
      [class]="classes()"
      data-component="Calendar"
      [attr.role]="resolvedRole()"
      [attr.aria-label]="ariaLabel()"
      [attr.aria-disabled]="disabled() || null"
    >
      @if (header()) {
        <ng-container>{{ header() }}</ng-container>
      } @else if (title() && !noHeader() && !minimal()) {
        <div class="calendar_header">
          <span class="calendar_title">{{ title() }}</span>
        </div>
      }
      @if (weekdays()) {
        <ng-container>{{ weekdays() }}</ng-container>
      }
      <ng-content />
      @if (footer()) {
        <ng-container>{{ footer() }}</ng-container>
      }
    </div>
  `,
})
export class Calendar {
  readonly hostClass = input<string>('');
  readonly title = input<string | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly header = input<unknown>(undefined);
  readonly weekdays = input<unknown>(undefined);
  readonly footer = input<unknown>(undefined);
  readonly noHeader = input<boolean>(false);
  readonly minimal = input<boolean>(false);
  readonly compact = input<boolean>(false);
  readonly borderless = input<boolean>(false);
  readonly shadow = input<boolean>(false);
  readonly ghost = input<boolean>(false);
  readonly week = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly weekends = input<boolean>(false);
  readonly agenda = input<boolean>(false);
  readonly wheel = input<boolean>(false);
  readonly size = input<string>('');
  readonly role = input<string>('application');
  readonly partial = input<number | undefined>(undefined);
  readonly selected = input<number>(15);
  readonly today = input<number>(12);
  readonly events = input<number[]>([]);
  readonly rangeStart = input<number | undefined>(undefined);
  readonly rangeEnd = input<number | undefined>(undefined);

  readonly resolvedRole = computed(() => (this.role() === 'feed' ? 'region' : this.role()));

  readonly classes = computed(() =>
    [
      'calendar',
      this.noHeader() && 'calendar_no-header',
      this.minimal() && 'calendar_minimal',
      this.compact() && 'calendar_compact',
      this.borderless() && 'calendar_borderless',
      this.shadow() && 'calendar_shadow',
      this.ghost() && 'calendar_ghost',
      this.week() && 'calendar_week',
      this.readonly() && 'calendar_readonly',
      this.disabled() && 'is-disabled',
      this.weekends() && 'calendar_weekends',
      this.agenda() && 'calendar_agenda',
      this.wheel() && 'calendar_wheel',
      this.size() === 'sm' && 'calendar_sm',
      this.size() === 'lg' && 'calendar_lg',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly cells = computed(() =>
    monthDays({
      partial: this.partial(),
      selected: this.selected(),
      today: this.today(),
      events: this.events(),
      rangeStart: this.rangeStart(),
      rangeEnd: this.rangeEnd(),
    }),
  );
}

export default Calendar;
