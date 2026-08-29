import { Component, computed, input } from '@angular/core';

const VARIANTS = new Set(['default', 'bordered', 'elevated', 'ghost']);
const SIZES = new Set(['sm', 'md', 'lg']);

@Component({
  selector: 'Card',
  standalone: true,
  template: `
    <div
      [class]="classes()"
      data-component="Card"
      [attr.aria-label]="ariaLabel()"
      [attr.aria-labelledby]="ariaLabelledby()"
    >
      <ng-content />
    </div>
  `,
})
export class Card {
  readonly hostClass = input<string>('');
  readonly variant = input<string>('default');
  readonly size = input<string>('md');
  readonly hoverable = input<boolean>(false);
  readonly clickable = input<boolean>(false);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly ariaLabelledby = input<string | undefined>(undefined);

  readonly resolvedVariant = computed(() =>
    VARIANTS.has(this.variant()) ? this.variant() : 'default',
  );
  readonly resolvedSize = computed(() => (SIZES.has(this.size()) ? this.size() : 'md'));

  readonly classes = computed(() =>
    [
      'card',
      `card_${this.resolvedVariant()}`,
      this.resolvedSize() !== 'md' && `card_${this.resolvedSize()}`,
      this.hoverable() && 'card_hoverable',
      this.clickable() && 'card_clickable',
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}

export default Card;
