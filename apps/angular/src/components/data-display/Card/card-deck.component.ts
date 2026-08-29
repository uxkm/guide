import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'CardDeck',
  standalone: true,
  template: `
    <div [class]="classes()" data-component="CardDeck">
      <ng-content />
    </div>
  `,
})
export class CardDeck {
  readonly hostClass = input<string>('');
  readonly columns = input<number | undefined>(undefined);

  readonly classes = computed(() =>
    [
      'card_deck',
      this.columns() != null && `card_deck-cols-${this.columns()}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}

export default CardDeck;
