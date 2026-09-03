import { Component, computed, effect, ElementRef, input, output, signal, viewChild } from '@angular/core';
import Icon from '../../basic/Icon/icon.component';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);
const VALID_RESIZE = new Set(['none', 'vertical', 'horizontal', 'both']);

@Component({
  selector: 'Textarea',
  standalone: true,
  imports: [Icon],
  template: `
    @if (showCount() || clearable()) {
      <div [class]="wrapClasses()">
        <textarea
          #textareaEl
          [class]="classes()"
          [disabled]="disabled()"
          [readOnly]="readOnly()"
          [attr.maxlength]="nativeMaxLength()"
          [value]="currentValue()"
          [attr.aria-invalid]="error() ? 'true' : null"
          [attr.aria-describedby]="describedBy()"
          data-component="Textarea"
          (input)="handleInput($event)"
        ></textarea>
        @if (clearable()) {
          <button
            type="button"
            class="textarea_clear"
            data-ripple="surface"
            aria-label="입력 지우기"
            [hidden]="!showClear()"
            (click)="clear()"
          >
            <Icon name="close" />
          </button>
        }
        @if (showCount()) {
          <span
            [id]="countId()"
            [class]="countClasses()"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span class="textarea_count_visual" aria-hidden="true">
              {{ count() }}{{ hasLimit() ? '/' + nativeMaxLength() : '' }}
            </span>
            <span class="textarea_count_announcer">
              {{ count() }}자 입력{{ hasLimit() ? ', 최대 ' + nativeMaxLength() + '자' : '' }}
            </span>
          </span>
        }
      </div>
    } @else {
      <textarea
        #textareaEl
        [class]="classes()"
        [disabled]="disabled()"
        [readOnly]="readOnly()"
        [attr.maxlength]="nativeMaxLength()"
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
  readonly clearable = input<boolean>(false);
  readonly value = input<string>('');
  readonly maxLength = input<number | undefined>(undefined);
  readonly readOnly = input<boolean>(false);
  readonly ariaDescribedby = input<string | undefined>(undefined);

  readonly valueChange = output<string>();
  readonly change = output<Event>();
  readonly clearEvent = output<void>();

  private static idCounter = 0;
  readonly countId = computed(() => `textarea-${++Textarea.idCounter}-count`);
  private readonly textareaEl = viewChild<ElementRef<HTMLTextAreaElement>>('textareaEl');

  readonly innerValue = signal('');

  readonly currentValue = computed(() => this.value() || this.innerValue());

  readonly resolvedSize = computed(() =>
    VALID_SIZES.has(this.size()) ? this.size() : 'md',
  );

  readonly resolvedResize = computed(() =>
    VALID_RESIZE.has(this.resize()) ? this.resize() : 'none',
  );

  readonly count = computed(() => String(this.currentValue()).length);

  readonly nativeMaxLength = computed(() => {
    const max = this.maxLength();
    return max != null && Number.isFinite(Number(max)) && Number(max) > 0 ? Number(max) : null;
  });

  readonly hasLimit = computed(() => this.nativeMaxLength() != null);

  readonly showClear = computed(
    () =>
      this.clearable() &&
      !this.disabled() &&
      !this.readOnly() &&
      String(this.currentValue()).length > 0,
  );

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
      !this.showCount() && !this.clearable() && this.fit() && 'textarea_fit',
      this.error() && 'is-error',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly wrapClasses = computed(() =>
    [
      'textarea_wrap',
      this.showCount() && 'textarea_show-count',
      this.clearable() && 'textarea_clearable',
      this.showClear() && 'is-filled',
      this.fit() && 'textarea_wrap_fit',
      this.wrapperClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly countClasses = computed(() =>
    [
      'textarea_count',
      this.hasLimit() && this.count() >= Number(this.nativeMaxLength()) && 'is-limit',
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

  clear() {
    if (this.disabled() || this.readOnly()) return;
    const textarea = this.textareaEl()?.nativeElement;
    if (textarea) {
      textarea.value = '';
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
      textarea.dispatchEvent(new Event('change', { bubbles: true }));
      textarea.focus();
    }
    this.innerValue.set('');
    this.valueChange.emit('');
    this.clearEvent.emit();
  }
}

export default Textarea;
