import { Component, computed, input } from '@angular/core';

const LAYOUTS = new Set(['vertical', 'horizontal', 'inline']);
const LABEL_WIDTHS = new Set(['', 'sm', 'lg']);

@Component({
  selector: 'FormLayout',
  standalone: true,
  template: `
    @switch (as()) {
      @case ('div') {
        <div [class]="classes()" data-component="FormLayout"><ng-content /></div>
      }
      @default {
        <form [class]="classes()" data-component="FormLayout"><ng-content /></form>
      }
    }
  `,
})
export class FormLayout {
  readonly hostClass = input<string>('');
  readonly as = input<string>('form');
  readonly layout = input<string>('vertical');
  readonly fit = input<boolean>(false);
  readonly compact = input<boolean>(false);
  readonly labelAlign = input<string>('end');
  readonly labelWidth = input<string>('');

  readonly resolvedLayout = computed(() =>
    LAYOUTS.has(this.layout()) ? this.layout() : 'vertical',
  );

  readonly classes = computed(() =>
    [
      'form',
      `form_${this.resolvedLayout()}`,
      this.fit() && 'form_fit',
      this.compact() && 'form_compact',
      this.resolvedLayout() === 'horizontal' &&
        this.labelAlign() === 'start' &&
        'form_label-align-start',
      this.resolvedLayout() === 'horizontal' &&
        LABEL_WIDTHS.has(this.labelWidth()) &&
        this.labelWidth() &&
        `form_label-width-${this.labelWidth()}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}

export default FormLayout;
