import { Component, computed, effect, input, output, signal } from '@angular/core';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_RESIZE = new Set(['none', 'vertical', 'horizontal', 'both']);

@Component({
  selector: 'Textarea',
  standalone: true,
  template: `
    @if (showCount()) {
      <div [class]="wrapClasses()">
        <textarea
          [class]="classes()"
          [disabled]="disabled()"
          [readOnly]="readOnly()"
          [attr.maxlength]="maxLength() ?? null"
          [value]="currentValue()"
          [attr.aria-invalid]="error() ? 'true' : null"
          [attr.aria-describedby]="describedBy()"
          data-component="Textarea"
          (input)="handleInput($event)"
        ></textarea>
        <span
          [id]="countId()"
          [class]="countClasses()"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <span class="textarea_count_visual" aria-hidden="true">
            {{ count() }}{{ hasLimit() ? '/' + maxLength() : '' }}
          </span>
          <span class="textarea_count_announcer">
            {{ count() }}자 입력{{ hasLimit() ? ', 최대 ' + maxLength() + '자' : '' }}
          </span>
        </span>
      </div>
    } @else {
      <textarea
        [class]="classes()"
        [disabled]="disabled()"
        [readOnly]="readOnly()"
        [attr.maxlength]="maxLength() ?? null"
        [value]="currentValue()"
        [attr.aria-invalid]="error() ? 'true' : null"
        data-component="Textarea"
        (input)="handleInput($event)"
      ></textarea>
    }
  `,
})
export class Textarea {
  readonly hostClass = input<string>('');
  readonly wrapperClass = input<string>('');
  readonly size = input<string>('md');
  readonly resize = input<string>('none');
  readonly disabled = input<boolean>(false);
  readonly error = input<boolean>(false);
  readonly fit = input<boolean>(false);
  readonly showCount = input<boolean>(false);
  readonly value = input<string>('');
  readonly maxLength = input<number | undefined>(undefined);
  readonly readOnly = input<boolean>(false);
  readonly ariaDescribedby = input<string | undefined>(undefined);

  readonly valueChange = output<string>();
  readonly change = output<Event>();

  private static idCounter = 0;
  readonly countId = computed(() => `textarea-${++Textarea.idCounter}-count`);

  readonly innerValue = signal('');

  readonly currentValue = computed(() => this.value() || this.innerValue());

  readonly resolvedSize = computed(() =>
    VALID_SIZES.has(this.size()) ? this.size() : 'md',
  );

  readonly resolvedResize = computed(() =>
    VALID_RESIZE.has(this.resize()) ? this.resize() : 'none',
  );

  readonly count = computed(() => String(this.currentValue()).length);

  readonly hasLimit = computed(() => {
    const max = this.maxLength();
    return max != null && Number.isFinite(Number(max)) && Number(max) >= 0;
  });

  readonly describedBy = computed(() => {
    const parts = [this.ariaDescribedby(), this.showCount() && this.countId()].filter(Boolean);
    return parts.length ? parts.join(' ') : null;
  });

  readonly classes = computed(() =>
    [
      'textarea',
      this.resolvedSize() === 'sm' && 'textarea_sm',
      this.resolvedSize() === 'lg' && 'textarea_lg',
      `textarea_resize_${this.resolvedResize()}`,
      !this.showCount() && this.fit() && 'textarea_fit',
      this.error() && 'is-error',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly wrapClasses = computed(() =>
    [
      'textarea_wrap',
      'textarea_show-count',
      this.fit() && 'textarea_wrap_fit',
      this.wrapperClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly countClasses = computed(() =>
    [
      'textarea_count',
      this.hasLimit() && this.count() >= Number(this.maxLength()) && 'is-limit',
    ]
      .filter(Boolean)
      .join(' '),
  );

  constructor() {
    effect(() => {
      this.innerValue.set(this.value() ?? '');
    });
  }

  handleInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.innerValue.set(target.value);
    this.valueChange.emit(target.value);
    this.change.emit(event);
  }
}

export default Textarea;
