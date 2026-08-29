import { Component, computed, effect, input, output, signal } from '@angular/core';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const clamp = (value: unknown, min: number, max: number) =>
  Math.min(max, Math.max(min, Number(value)));

@Component({
  selector: 'Slider',
  standalone: true,
  template: `
    <div
      [class]="classes()"
      data-component="Slider"
      [attr.data-ripple]="ripple() ? 'true' : 'false'"
      [style]="rootStyle()"
    >
      @if (label() || showValue()) {
        <div class="slider_header">
          @if (label()) {
            <label class="slider_label" [for]="inputId()">{{ label() }}</label>
          }
          @if (showValue()) {
            <output class="slider_value" [for]="inputId()">
              {{ currentValue() }}{{ valueSuffix() || dataSuffix() }}
            </output>
          }
        </div>
      }
      @if (stepper()) {
        <div class="slider_control">
          <button
            type="button"
            class="slider_step slider_step-decrease"
            data-ripple="true"
            [attr.aria-label]="decreaseLabel()"
            [disabled]="disabled() || currentValue() <= numericMin()"
            (click)="update(currentValue() - numericStep())"
          >
            <svg class="slider_step-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14" />
            </svg>
          </button>
          <input
            [id]="inputId()"
            type="range"
            class="slider_input"
            [min]="numericMin()"
            [max]="numericMax()"
            [step]="numericStep()"
            [value]="currentValue()"
            [disabled]="disabled()"
            [attr.aria-valuetext]="valueText() || null"
            (input)="handleInput($event)"
          />
          <button
            type="button"
            class="slider_step slider_step-increase"
            data-ripple="true"
            [attr.aria-label]="increaseLabel()"
            [disabled]="disabled() || currentValue() >= numericMax()"
            (click)="update(currentValue() + numericStep())"
          >
            <svg class="slider_step-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
        </div>
      } @else {
        <input
          [id]="inputId()"
          type="range"
          class="slider_input"
          [min]="numericMin()"
          [max]="numericMax()"
          [step]="numericStep()"
          [value]="currentValue()"
          [disabled]="disabled()"
          [attr.aria-valuetext]="valueText() || null"
          (input)="handleInput($event)"
        />
      }
      @if (hint()) {
        <p class="slider_hint">{{ hint() }}</p>
      }
      <ng-content />
    </div>
  `,
})
export class Slider {
  readonly hostClass = input<string>('');
  readonly min = input<number>(0);
  readonly max = input<number>(100);
  readonly value = input<number | undefined>(undefined);
  readonly step = input<number>(1);
  readonly disabled = input<boolean>(false);
  readonly vertical = input<boolean>(false);
  readonly label = input<string | undefined>(undefined);
  readonly showValue = input<boolean>(false);
  readonly stepper = input<boolean>(false);
  readonly stepperAlways = input<boolean>(false);
  readonly valueSuffix = input<string>('');
  readonly hint = input<string | undefined>(undefined);
  readonly decreaseLabel = input<string>('값 줄이기');
  readonly increaseLabel = input<string>('값 늘리기');
  readonly size = input<string>('md');
  readonly id = input<string | undefined>(undefined);
  readonly ripple = input<boolean>(true);
  readonly valueTextMap = input<string>('');
  readonly dataSuffix = input<string>('');
  readonly ariaValueText = input<string | undefined>(undefined);

  readonly valueChange = output<number>();

  private static idCounter = 0;
  readonly inputId = computed(() => this.id() || `slider-${++Slider.idCounter}`);

  readonly innerValue = signal(50);

  readonly numericMin = computed(() => Number(this.min()));
  readonly numericMax = computed(() => Number(this.max()));
  readonly numericStep = computed(() => Number(this.step() || 1));

  readonly currentValue = computed(() =>
    clamp(this.value() ?? this.innerValue(), this.numericMin(), this.numericMax()),
  );

  readonly resolvedSize = computed(() =>
    VALID_SIZES.has(this.size()) ? this.size() : 'md',
  );

  readonly progress = computed(() => {
    const min = this.numericMin();
    const max = this.numericMax();
    const val = this.currentValue();
    return max === min ? 0 : ((val - min) / (max - min)) * 100;
  });

  readonly rootStyle = computed(() => ({
    '--slider-progress': `${this.progress()}%`,
  }));

  readonly classes = computed(() =>
    [
      'slider',
      this.resolvedSize() === 'sm' && 'slider_sm',
      this.resolvedSize() === 'lg' && 'slider_lg',
      this.vertical() && 'slider_vertical',
      this.stepper() && 'slider_stepper',
      this.stepperAlways() && 'slider_stepper_always',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly valueText = computed(() => {
    const map = String(this.valueTextMap() ?? '')
      .split(',')
      .reduce<Record<string, string>>((acc, item) => {
        const sep = item.indexOf(':');
        if (sep > -1) acc[item.slice(0, sep)] = item.slice(sep + 1);
        return acc;
      }, {});
    return (
      map[String(this.currentValue())] ??
      (this.dataSuffix() ? `${this.currentValue()} ${this.dataSuffix()}` : this.ariaValueText())
    );
  });

  constructor() {
    effect(() => {
      const v = this.value();
      if (v !== undefined) {
        this.innerValue.set(clamp(v, this.numericMin(), this.numericMax()));
      }
    });
  }

  handleInput(event: Event) {
    this.update(Number((event.target as HTMLInputElement).value));
  }

  update(next: number) {
    const normalized = clamp(next, this.numericMin(), this.numericMax());
    this.innerValue.set(normalized);
    this.valueChange.emit(normalized);
  }
}

export default Slider;
