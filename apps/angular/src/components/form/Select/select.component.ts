import { Component, computed, input, output } from '@angular/core';

const VALID_SIZES = new Set(['sm', 'md', 'lg']);

@Component({
  selector: 'Select',
  standalone: true,
  template: `
    <select
      [class]="classes()"
      [size]="nativeSize() ?? null"
      [disabled]="disabled()"
      [value]="value()"
      [attr.aria-invalid]="error() ? 'true' : null"
      data-component="Select"
      (change)="handleChange($event)"
    >
      @if (placeholder() != null) {
        <option value="" disabled>{{ placeholder() }}</option>
      }
      <ng-content />
    </select>
  `,
})
export class Select {
  readonly hostClass = input<string>('');
  readonly size = input<string>('md');
  readonly nativeSize = input<number | undefined>(undefined);
  readonly disabled = input<boolean>(false);
  readonly error = input<boolean>(false);
  readonly fit = input<boolean>(false);
  readonly placeholder = input<string | undefined>(undefined);
  readonly value = input<string>('');

  readonly valueChange = output<string>();
  readonly change = output<Event>();

  readonly classes = computed(() => {
    const resolvedSize = VALID_SIZES.has(this.size()) ? this.size() : 'md';
    return [
      'input',
      resolvedSize === 'sm' && 'input_sm',
      resolvedSize === 'lg' && 'input_lg',
      this.fit() && 'input_fit',
      this.error() && 'is-error',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' ');
  });

  handleChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.valueChange.emit(target.value);
    this.change.emit(event);
  }
}

export default Select;
