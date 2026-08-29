import {
  afterNextRender,
  Component,
  computed,
  effect,
  ElementRef,
  HostListener,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];
const pad = (value: number) => String(value).padStart(2, '0');
const toValue = (date: Date | null) =>
  date ? `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` : '';
const parseValue = (value: string) =>
  /^\d{4}-\d{2}-\d{2}$/.test(value || '') ? new Date(`${value}T00:00:00`) : null;

function getCells(month: Date) {
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const start = new Date(month.getFullYear(), month.getMonth(), 1 - first.getDay());
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return { date, value: toValue(date), other: date.getMonth() !== month.getMonth() };
  });
}

@Component({
  selector: 'DatePicker',
  standalone: true,
  template: `
    <div
      #root
      [class]="classes()"
      data-component="DatePicker"
      (keydown)="handleKeydown($event)"
    >
      <div class="date_picker_trigger">
        <input
          [id]="inputId()"
          class="date_picker_input"
          role="combobox"
          [value]="displayValue()"
          [placeholder]="placeholder()"
          readonly
          [disabled]="disabled()"
          [attr.required]="required() || null"
          [attr.aria-label]="ariaLabel()"
          aria-haspopup="dialog"
          [attr.aria-expanded]="open()"
          [attr.aria-controls]="panelId()"
          [attr.aria-invalid]="error() || null"
          (click)="openPanel()"
        />
        @if (name()) {
          <input type="hidden" [name]="name()" [value]="selectedValue()" />
        }
        @if (clearable() && selectedValue() && !disabled()) {
          <button class="date_picker_clear" type="button" aria-label="날짜 지우기" (click)="commit('')">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        }
        <button
          class="date_picker_btn"
          type="button"
          [disabled]="disabled()"
          aria-label="달력 열기"
          [attr.aria-controls]="panelId()"
          [attr.aria-expanded]="open()"
          (click)="togglePanel()"
        >
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M16 3v4M8 3v4M3 10h18" />
          </svg>
        </button>
      </div>
      <div
        [id]="panelId()"
        [class]="panelClasses()"
        role="dialog"
        aria-modal="false"
        [attr.aria-label]="ariaLabel()"
        [hidden]="!open()"
      >
        <div class="calendar calendar_borderless">
          <div class="calendar_header">
            <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="이전 달" (click)="moveMonth(-1)">‹</button>
            <span class="calendar_title" aria-live="polite">{{ monthTitle() }}</span>
            <button type="button" class="btn btn_ghost btn_icon-only btn_sm" aria-label="다음 달" (click)="moveMonth(1)">›</button>
          </div>
          <div class="calendar_weekdays" aria-hidden="true">
            @for (day of weekdays; track day) {
              <span class="calendar_weekday">{{ day }}</span>
            }
          </div>
          <div class="calendar_grid">
            @for (cell of cells(); track cell.value) {
              <button
                type="button"
                [class]="cellClass(cell)"
                [disabled]="isUnavailable(cell.value)"
                [attr.aria-current]="cell.value === today ? 'date' : null"
                [attr.aria-pressed]="cell.value === selectedValue() || null"
                [attr.aria-label]="formatValue(cell.value)"
                (click)="select(cell.value)"
              >
                {{ cell.date.getDate() }}
              </button>
            }
          </div>
          <div class="calendar_footer">
            <button type="button" class="btn btn_text color_primary btn_sm" (click)="select(today)">오늘</button>
            @if (clearable()) {
              <div class="calendar_footer-actions">
                <button type="button" class="btn btn_ghost btn_sm" (click)="commit('')">초기화</button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DatePicker {
  readonly hostClass = input<string>('');
  readonly id = input<string | undefined>(undefined);
  readonly value = input<string>('');
  readonly placeholder = input<string>('날짜를 선택하세요');
  readonly locale = input<string>('ko-KR');
  readonly size = input<string>('md');
  readonly fit = input<boolean>(false);
  readonly block = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly error = input<boolean>(false);
  readonly success = input<boolean>(false);
  readonly clearable = input<boolean>(true);
  readonly min = input<string | undefined>(undefined);
  readonly max = input<string | undefined>(undefined);
  readonly name = input<string | undefined>(undefined);
  readonly required = input<boolean>(false);
  readonly panelAlign = input<string>('start');
  readonly ariaLabel = input<string>('날짜 선택');

  readonly valueChange = output<string>();

  readonly weekdays = WEEKDAYS;
  readonly today = toValue(new Date());

  private readonly root = viewChild<ElementRef<HTMLElement>>('root');
  private static idCounter = 0;

  readonly inputId = computed(() => this.id() || `date-picker-${++DatePicker.idCounter}`);
  readonly panelId = computed(() => `${this.inputId()}-panel`);

  readonly open = signal(false);
  readonly innerValue = signal('');
  readonly month = signal(new Date());

  readonly selectedValue = computed(() => this.value() || this.innerValue());

  readonly cells = computed(() => getCells(this.month()));

  readonly displayValue = computed(() => this.formatValue(this.selectedValue()));

  readonly classes = computed(() =>
    [
      'date_picker',
      this.size() !== 'md' && `date_picker_${this.size()}`,
      this.fit() && 'date_picker_fit',
      this.block() && 'date_picker_block',
      this.disabled() && 'is-disabled',
      this.error() && 'is-error',
      this.success() && 'is-success',
      this.open() && 'is-open',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly panelClasses = computed(() =>
    ['date_picker_panel', this.panelAlign() === 'end' && 'date_picker_panel-end']
      .filter(Boolean)
      .join(' '),
  );

  readonly monthTitle = computed(
    () => `${this.month().getFullYear()}년 ${this.month().getMonth() + 1}월`,
  );

  constructor() {
    effect(() => {
      const date = parseValue(this.selectedValue());
      if (date) this.month.set(date);
    });

    afterNextRender(() => {
      effect(() => {
        if (!this.open()) return;
        requestAnimationFrame(() => {
          this.root()
            ?.nativeElement.querySelector<HTMLElement>(
              '.calendar_day.is-selected:not(:disabled), .calendar_day:not(:disabled)',
            )
            ?.focus();
        });
      });
    });
  }

  formatValue(value: string): string {
    const date = parseValue(value);
    return date
      ? new Intl.DateTimeFormat(this.locale(), {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).format(date)
      : '';
  }

  cellClass(cell: { value: string; other: boolean }) {
    return [
      'calendar_day',
      cell.other && 'is-other-month',
      cell.value === this.today && 'is-today',
      cell.value === this.selectedValue() && 'is-selected',
    ]
      .filter(Boolean)
      .join(' ');
  }

  isUnavailable(value: string): boolean {
    const min = this.min();
    const max = this.max();
    return Boolean((min && value < min) || (max && value > max));
  }

  commit(next: string) {
    this.innerValue.set(next);
    this.valueChange.emit(next);
  }

  select(next: string) {
    this.commit(next);
    this.open.set(false);
    requestAnimationFrame(() =>
      this.root()?.nativeElement.querySelector<HTMLElement>('.date_picker_input')?.focus(),
    );
  }

  moveMonth(offset: number) {
    const current = this.month();
    this.month.set(new Date(current.getFullYear(), current.getMonth() + offset, 1));
  }

  openPanel() {
    if (!this.disabled()) this.open.set(true);
  }

  togglePanel() {
    if (!this.disabled()) this.open.update((v) => !v);
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') this.open.set(false);
  }

  @HostListener('document:pointerdown', ['$event'])
  onDocumentPointerDown(event: PointerEvent) {
    const root = this.root()?.nativeElement;
    if (root && !root.contains(event.target as Node)) this.open.set(false);
  }
}

export default DatePicker;
