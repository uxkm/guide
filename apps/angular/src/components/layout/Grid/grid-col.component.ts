import { Component, computed, input } from '@angular/core';

const range = (value: unknown) => {
  const n = Number(value);
  return Number.isInteger(n) && n >= 1 && n <= 12 ? n : '';
};

@Component({
  selector: 'GridCol',
  standalone: true,
  template: `
    <div [class]="classes()" data-component="GridCol">
      <ng-content />
    </div>
  `,
})
export class GridCol {
  readonly hostClass = input<string>('');
  readonly span = input<number | string | undefined>(undefined);
  readonly spanMd = input<number | string | undefined>(undefined);
  readonly spanLg = input<number | string | undefined>(undefined);

  readonly classes = computed(() =>
    [
      range(this.span()) && `grid_col-span-${range(this.span())}`,
      range(this.spanMd()) && `grid_col-span-md-${range(this.spanMd())}`,
      range(this.spanLg()) && `grid_col-span-lg-${range(this.spanLg())}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}

export default GridCol;
