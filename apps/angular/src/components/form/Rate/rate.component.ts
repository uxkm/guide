import { Component, computed, effect, input, output, signal } from '@angular/core';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const STAR_PATH =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

@Component({
  selector: 'Rate',
  standalone: true,
  template: `
    @if (isReadonly()) {
      <div
        [class]="classes()"
        data-component="Rate"
        role="img"
        [attr.aria-label]="ariaLabel() || (resolvedCount() + '점 만점 중 ' + (currentValue() ?? 0) + '점')"
      >
        <div class="rate_stars">
          @for (star of stars(); track star) {
            <span [class]="starReadonlyClass(star)">
              <span class="rate_star-graphic" aria-hidden="true">
                <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path [attr.d]="starPath" />
                </svg>
                <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor">
                  <path [attr.d]="starPath" />
                </svg>
                @if (starState(star) === 'is-half') {
                  <span class="rate_star-icon-half">
                    <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path [attr.d]="starPath" />
                    </svg>
                  </span>
                }
              </span>
            </span>
          }
        </div>
        @if (currentValue() != null) {
          <span class="rate_value">{{ currentValue() }}</span>
        }
      </div>
    } @else {
      <fieldset
        [class]="classes()"
        data-component="Rate"
        [attr.data-ripple]="ripple() ? 'true' : null"
        [disabled]="disabled()"
      >
        @if (legend()) {
          <legend class="rate_legend">{{ legend() }}</legend>
        }
        <div class="rate_control">
          <div class="rate_stars">
            @for (star of stars(); track star) {
              <label class="rate_star" [attr.data-ripple]="ripple() ? 'true' : null">
                @if (allowHalf()) {
                  <input
                    type="radio"
                    class="rate_input rate_input-half"
                    [name]="groupName()"
                    [value]="star - 0.5"
                    [checked]="currentValue() === star - 0.5"
                    [disabled]="disabled()"
                    (change)="update(star - 0.5)"
                  />
                }
                <input
                  type="radio"
                  class="rate_input"
                  [name]="groupName()"
                  [value]="star"
                  [checked]="currentValue() === star"
                  [disabled]="disabled()"
                  (change)="update(star)"
                />
                @if (allowHalf()) {
                  <button
                    type="button"
                    class="rate_star-half rate_star-half-left"
                    tabindex="-1"
                    aria-hidden="true"
                    [disabled]="disabled()"
                    (click)="updateHalf($event, star - 0.5)"
                  ></button>
                  <button
                    type="button"
                    class="rate_star-half rate_star-half-right"
                    tabindex="-1"
                    aria-hidden="true"
                    [disabled]="disabled()"
                    (click)="updateHalf($event, star)"
                  ></button>
                }
                <span class="rate_star-graphic" aria-hidden="true">
                  <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path [attr.d]="starPath" />
                  </svg>
                  <svg class="rate_star-icon rate_star-icon-filled" viewBox="0 0 24 24" fill="currentColor">
                    <path [attr.d]="starPath" />
                  </svg>
                  @if (allowHalf()) {
                    <span class="rate_star-icon-half">
                      <svg class="rate_star-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path [attr.d]="starPath" />
                      </svg>
                    </span>
                  }
                </span>
                <span class="rate_star-label">{{ star }}점</span>
              </label>
            }
          </div>
          @if (clearable()) {
            <button
              type="button"
              class="rate_clear"
              [attr.data-ripple]="ripple() ? 'true' : null"
              aria-label="별점 초기화"
              title="초기화"
              (click)="update(undefined)"
            >
              <svg
                class="rate_clear-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          }
          @if (currentValue() != null) {
            <output class="rate_value">{{ currentValue() }}점</output>
          }
        </div>
      </fieldset>
    }
  `,
})
export class Rate {
  readonly hostClass = input<string>('');
  readonly value = input<number | undefined>(undefined);
  readonly count = input<number>(5);
  readonly allowHalf = input<boolean>(false);
  readonly clearable = input<boolean>(false);
  readonly readOnly = input<boolean>(false);
  readonly readonlyMode = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly size = input<string>('md');
  readonly legend = input<string | undefined>(undefined);
  readonly name = input<string | undefined>(undefined);
  readonly ripple = input<boolean>(true);
  readonly ariaLabel = input<string | undefined>(undefined);

  readonly valueChange = output<number | undefined>();

  readonly starPath = STAR_PATH;

  private static nameCounter = 0;
  readonly groupName = computed(
    () => this.name() || `rate-${++Rate.nameCounter}`,
  );

  readonly currentValue = signal<number | undefined>(undefined);

  readonly resolvedCount = computed(() => {
    const n = Number(this.count());
    return n > 0 ? n : 5;
  });

  readonly resolvedSize = computed(() =>
    VALID_SIZES.has(this.size()) ? this.size() : 'md',
  );

  readonly isReadonly = computed(() => this.readOnly() || this.readonlyMode());

  readonly stars = computed(() =>
    Array.from({ length: this.resolvedCount() }, (_, i) => i + 1),
  );

  readonly classes = computed(() =>
    [
      'rate',
      this.resolvedSize() === 'sm' && 'rate_sm',
      this.resolvedSize() === 'lg' && 'rate_lg',
      this.allowHalf() && 'rate_allow-half',
      this.clearable() && 'rate_clearable',
      this.isReadonly() && 'is-readonly',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  constructor() {
    effect(() => {
      const v = this.value();
      if (v !== undefined) this.currentValue.set(v);
    });
  }

  starState(star: number): string {
    const val = this.currentValue() ?? 0;
    if (val >= star) return 'is-filled';
    if (this.allowHalf() && val >= star - 0.5) return 'is-half';
    return '';
  }

  starReadonlyClass(star: number): string {
    return ['rate_star-readonly', this.starState(star)].filter(Boolean).join(' ');
  }

  update(next: number | undefined) {
    this.currentValue.set(next);
    this.valueChange.emit(next);
  }

  updateHalf(event: Event, value: number) {
    event.preventDefault();
    event.stopPropagation();
    this.update(value);
  }
}

export default Rate;
