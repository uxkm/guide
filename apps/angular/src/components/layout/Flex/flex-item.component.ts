import { Component, computed, input } from '@angular/core';

const range = (value: unknown) => {
  const n = Number(value);
  return Number.isInteger(n) && n >= 1 && n <= 12 ? n : '';
};

const ALIGNS = new Set(['', 'auto', 'start', 'center', 'end', 'stretch', 'baseline']);

@Component({
  selector: 'FlexItem',
  standalone: true,
  template: `
    <div [class]="classes()" data-component="FlexItem">
      <ng-content />
    </div>
  `,
})
export class FlexItem {
  readonly hostClass = input<string>('');
  readonly span = input<number | string | undefined>(undefined);
  readonly spanMd = input<number | string | undefined>(undefined);
  readonly spanLg = input<number | string | undefined>(undefined);
  readonly grow = input<boolean>(false);
  readonly growFactor = input<number>(1);
  readonly fit = input<boolean>(false);
  readonly align = input<string>('');
  readonly order = input<number | string | undefined>(undefined);

  readonly classes = computed(() => {
    const resolvedGrow =
      this.grow() && Number(this.growFactor()) === 2
        ? 'flex_grow-2'
        : this.grow()
          ? 'flex_grow'
          : '';
    const align = this.align();

    return [
      range(this.span()) && `flex_item-span-${range(this.span())}`,
      range(this.spanMd()) && `flex_item-span-md-${range(this.spanMd())}`,
      range(this.spanLg()) && `flex_item-span-lg-${range(this.spanLg())}`,
      resolvedGrow,
      this.fit() && 'flex_fit',
      ALIGNS.has(align) && align && `flex_self-${align}`,
      range(this.order()) && `flex_order-${range(this.order())}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' ');
  });
}

export default FlexItem;
