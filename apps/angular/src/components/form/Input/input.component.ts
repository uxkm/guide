import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  contentChildren,
  effect,
  ElementRef,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import Icon from '../../basic/Icon/icon.component';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

@Component({
  selector: 'Input',
  standalone: true,
  imports: [Icon, NgTemplateOutlet],
  template: `
    @if (hasAddon()) {
      <div [class]="groupClasses()" data-component="InputGroup">
        @if (hasPrefix()) {
          <span class="input_group-addon" aria-hidden="true">
            <ng-content select="[prefix]" />
          </span>
        }
        @if (clearable()) {
          <span [class]="clearableClasses()">
            <ng-container *ngTemplateOutlet="inputTpl" />
            <button
              type="button"
              class="input_clear"
              data-ripple="surface"
              aria-label="입력 지우기"
              [hidden]="!showClear()"
              (click)="clear()"
            >
              <Icon name="close" />
            </button>
          </span>
        } @else {
          <ng-container *ngTemplateOutlet="inputTpl" />
        }
        @if (hasSuffix()) {
          <span class="input_group-addon">
            <ng-content select="[suffix]" />
          </span>
        }
      </div>
    } @else if (clearable()) {
      <span [class]="clearableClassesWithHost()">
        <ng-container *ngTemplateOutlet="inputTpl" />
        <button
          type="button"
          class="input_clear"
          data-ripple="surface"
          aria-label="입력 지우기"
          [hidden]="!showClear()"
          (click)="clear()"
        >
          <Icon name="close" />
        </button>
      </span>
    } @else {
      <ng-container *ngTemplateOutlet="inputTpl" />
    }

    <ng-template #inputTpl>
      <input
        #inputEl
        [type]="type()"
        [class]="inputClasses()"
        [placeholder]="placeholder()"
        [disabled]="disabled()"
        [readOnly]="readOnly()"
        [value]="currentValue()"
        [attr.aria-invalid]="error() ? 'true' : null"
        data-component="Input"
        (input)="handleInput($event)"
        (paste)="handlePaste($event)"
      />
    </ng-template>
  `,
})
export class Input {
  readonly hostClass = input<string>('');
  readonly size = input<string>('md');
  readonly disabled = input<boolean>(false);
  readonly error = input<boolean>(false);
  readonly placeholder = input<string | undefined>(undefined);
  readonly type = input<string>('text');
  readonly block = input<boolean>(false);
  readonly clearable = input<boolean>(false);
  readonly value = input<string>('');
  readonly readOnly = input<boolean>(false);
  readonly inputMode = input<string | undefined>(undefined);
  readonly maxLength = input<number | undefined>(undefined);

  readonly valueChange = output<string>();
  readonly change = output<Event>();
  readonly paste = output<ClipboardEvent>();
  readonly clearEvent = output<void>();

  private readonly inputEl = viewChild<ElementRef<HTMLInputElement>>('inputEl');
  private readonly prefixSlots = contentChildren('[prefix]');
  private readonly suffixSlots = contentChildren('[suffix]');

  readonly innerValue = signal('');

  readonly currentValue = computed(() => this.value() || this.innerValue());

  readonly resolvedSize = computed(() =>
    VALID_SIZES.has(this.size()) ? this.size() : 'md',
  );

  readonly hasPrefix = computed(() => this.prefixSlots().length > 0);
  readonly hasSuffix = computed(() => this.suffixSlots().length > 0);
  readonly hasAddon = computed(() => this.hasPrefix() || this.hasSuffix());

  readonly showClear = computed(
    () =>
      this.clearable() &&
      !this.disabled() &&
      !this.readOnly() &&
      String(this.currentValue()).length > 0,
  );

  readonly numericOnly = computed(
    () => this.inputMode() === 'numeric',
  );

  readonly inputClasses = computed(() =>
    [
      'input',
      this.resolvedSize() === 'sm' && 'input_sm',
      this.resolvedSize() === 'lg' && 'input_lg',
      this.block() && 'input_block',
      this.error() && 'is-error',
      this.type() === 'password' &&
        String(this.currentValue()).length > 0 &&
        'input_masked',
      !this.hasAddon() && !this.clearable() && this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly groupClasses = computed(() =>
    ['input_group', this.hostClass()].filter(Boolean).join(' '),
  );

  readonly clearableClasses = computed(() =>
    ['input_clearable', this.showClear() && 'is-filled'].filter(Boolean).join(' '),
  );

  readonly clearableClassesWithHost = computed(() =>
    [this.clearableClasses(), this.hostClass()].filter(Boolean).join(' '),
  );

  constructor() {
    effect(() => {
      this.innerValue.set(this.value() ?? '');
    });
  }

  sanitize(next: string): string {
    if (this.numericOnly()) {
      const digits = String(next).replace(/\D/g, '');
      const max = Number(this.maxLength() ?? 0);
      return max > 0 ? digits.slice(0, max) : digits;
    }
    if (this.type() === 'number') return String(next).replace(/[a-zA-ZeE+\-]/g, '');
    return next;
  }

  applyValue(event: Event, next: string) {
    const target = event.target as HTMLInputElement;
    if (next !== target.value) target.value = next;
    this.innerValue.set(next);
    this.valueChange.emit(next);
    this.change.emit(event);
  }

  handleInput(event: Event) {
    this.applyValue(event, this.sanitize((event.target as HTMLInputElement).value));
  }

  handlePaste(event: ClipboardEvent) {
    this.paste.emit(event);
    if (event.defaultPrevented || !this.numericOnly()) return;
    event.preventDefault();
    const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '');
    if (!pasted) return;
    const input = event.target as HTMLInputElement;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    this.applyValue(
      event,
      this.sanitize(`${input.value.slice(0, start)}${pasted}${input.value.slice(end)}`),
    );
  }

  clear() {
    if (this.disabled() || this.readOnly()) return;
    const input = this.inputEl()?.nativeElement;
    if (input) {
      input.value = '';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      input.focus();
    }
    this.innerValue.set('');
    this.valueChange.emit('');
    this.clearEvent.emit();
  }
}

export default Input;
