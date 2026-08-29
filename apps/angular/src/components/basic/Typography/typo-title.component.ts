import { Component, computed, input } from '@angular/core';

const TITLE_LEVELS = new Set([1, 2, 3, 4, 5, '1', '2', '3', '4', '5']);

@Component({
  selector: 'TypoTitle',
  standalone: true,
  template: `
    @switch (resolvedLevel()) {
      @case (1) { <h1 [class]="classes()" data-component="TypoTitle"><ng-content>{{ label() }}</ng-content></h1> }
      @case (2) { <h2 [class]="classes()" data-component="TypoTitle"><ng-content>{{ label() }}</ng-content></h2> }
      @case (3) { <h3 [class]="classes()" data-component="TypoTitle"><ng-content>{{ label() }}</ng-content></h3> }
      @case (4) { <h4 [class]="classes()" data-component="TypoTitle"><ng-content>{{ label() }}</ng-content></h4> }
      @default { <h5 [class]="classes()" data-component="TypoTitle"><ng-content>{{ label() }}</ng-content></h5> }
    }
  `,
})
export class TypoTitle {
  readonly hostClass = input<string>('');
  readonly level = input<number | string>(1);
  readonly color = input<string | undefined>(undefined);
  readonly label = input<string | undefined>(undefined);

  readonly resolvedLevel = computed(() =>
    TITLE_LEVELS.has(this.level()) ? Number(this.level()) : 1,
  );

  readonly classes = computed(() =>
    [
      `typo_title-${this.resolvedLevel()}`,
      this.color() && `color_${this.color()}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}

export default TypoTitle;
