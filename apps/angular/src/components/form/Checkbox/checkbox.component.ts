import {
  Component,
  computed,
  contentChildren,
  effect,
  ElementRef,
  input,
  output,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'Checkbox',
  standalone: true,
  template: `
    @if (standalone()) {
      <label
        class="checkbox_control"
        [class]="hostClass()"
        [attr.aria-label]="ariaLabel()"
        [attr.data-ripple]="ripple() ? 'true' : 'false'"
      >
        <input
          #inputEl
          type="checkbox"
          class="checkbox_input"
          [checked]="checked()"
          [disabled]="disabled()"
          data-component="Checkbox"
          (change)="handleChange($event)"
        />
        <span class="checkbox_box" aria-hidden="true"></span>
      </label>
    } @else if (button()) {
      <label [class]="rootClass()" [attr.data-ripple]="ripple() ? 'true' : 'false'">
        <input
          #inputEl
          [id]="inputId()"
          type="checkbox"
          class="checkbox_input"
          [checked]="checked()"
          [disabled]="disabled()"
          data-component="Checkbox"
          (change)="handleChange($event)"
        />
        <span class="checkbox_label"><ng-content>{{ label() }}</ng-content></span>
      </label>
    } @else {
      <div [class]="rootClass()" [attr.data-ripple]="ripple() ? 'true' : 'false'">
        @if (labelEnd()) {
          <label class="checkbox_label" [for]="inputId()">
            <ng-content>{{ label() }}</ng-content>
          </label>
        }
        <span class="checkbox_control">
          <input
            #inputEl
            [id]="inputId()"
            type="checkbox"
            class="checkbox_input"
            [checked]="checked()"
            [disabled]="disabled()"
            data-component="Checkbox"
            (change)="handleChange($event)"
          />
          <span class="checkbox_box" aria-hidden="true"></span>
        </span>
        @if (!labelEnd()) {
          <label class="checkbox_label" [for]="inputId()">
            <ng-content>{{ label() }}</ng-content>
          </label>
        }
      </div>
    }
  `,
})
export class Checkbox {
  readonly hostClass = input<string>('');
  readonly label = input<string | undefined>(undefined);
  readonly checked = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly indeterminate = input<boolean>(false);
  readonly labelEnd = input<boolean>(false);
  readonly button = input<boolean>(false);
  readonly ripple = input<boolean>(true);
  readonly ariaLabel = input<string | undefined>(undefined);

  readonly checkedChange = output<boolean>();
  readonly change = output<Event>();

  private readonly inputEl = viewChild<ElementRef<HTMLInputElement>>('inputEl');
  private readonly projected = contentChildren('*');

  private static idCounter = 0;
  readonly inputId = computed(() => `checkbox-${++Checkbox.idCounter}`);

  readonly hasLabel = computed(
    () => Boolean(this.label()) || this.projected().length > 0,
  );

  readonly standalone = computed(
    () => !this.hasLabel(),
  );

  readonly rootClass = computed(() =>
    [
      'checkbox',
      this.labelEnd() && 'checkbox_label-end',
      this.button() && 'checkbox_button',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );

  constructor() {
    effect(() => {
      const el = this.inputEl()?.nativeElement;
      if (el) el.indeterminate = this.indeterminate();
    });
  }

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checkedChange.emit(target.checked);
    this.change.emit(event);
  }
}

export default Checkbox;
