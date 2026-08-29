import { Component, computed, input } from '@angular/core';

const range = (value: unknown) => {
  const n = Number(value);
  return Number.isInteger(n) && n >= 1 && n <= 12 ? n : '';
};

const GAPS = new Set(['', 'sm', 'lg', 'none']);
const RATIOS = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']);
const ALIGNS = new Set(['', 'center', 'end']);

@Component({
  selector: 'Grid',
  standalone: true,
  template: `
    <div [class]="classes()" data-component="Grid">
      <ng-content />
    </div>
  `,
})
export class Grid {
  readonly hostClass = input<string>('');
  readonly cols = input<number | string | undefined>(undefined);
  readonly colsMd = input<number | string | undefined>(undefined);
  readonly colsLg = input<number | string | undefined>(undefined);
  readonly columns = input<number | string | undefined>(undefined);
  readonly columnsMd = input<number | string | undefined>(undefined);
  readonly columnsLg = input<number | string | undefined>(undefined);
  readonly gap = input<string>('');
  readonly ratio = input<string>('');
  readonly align = input<string>('');
  readonly itemSpan = input<number | string | undefined>(undefined);
  readonly itemSpanMd = input<number | string | undefined>(undefined);
  readonly itemSpanLg = input<number | string | undefined>(undefined);
  readonly autoFit = input<boolean>(false);
  readonly autoFill = input<boolean>(false);
  readonly equalColumns = input<boolean>(false);

  readonly classes = computed(() => {
    const resolvedCols = this.cols() ?? this.columns();
    const resolvedColsMd = this.colsMd() ?? this.columnsMd();
    const resolvedColsLg = this.colsLg() ?? this.columnsLg();
    const gap = this.gap();
    const ratio = this.ratio();
    const align = this.align();

    return [
      'grid',
      range(resolvedCols) && `grid_cols-${range(resolvedCols)}`,
      range(resolvedColsMd) && `grid_cols-md-${range(resolvedColsMd)}`,
      range(resolvedColsLg) && `grid_cols-lg-${range(resolvedColsLg)}`,
      GAPS.has(gap) && gap && `grid_gap-${gap}`,
      RATIOS.has(ratio) && ratio && `grid_ratio-${ratio}`,
      range(this.itemSpan()) && `grid_item-span-${range(this.itemSpan())}`,
      range(this.itemSpanMd()) && `grid_item-span-md-${range(this.itemSpanMd())}`,
      range(this.itemSpanLg()) && `grid_item-span-lg-${range(this.itemSpanLg())}`,
      this.autoFit() && 'grid_auto-fit',
      this.autoFill() && 'grid_auto-fill',
      this.equalColumns() && 'grid_equal-columns',
      ALIGNS.has(align) && align && `grid_align-${align}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' ');
  });
}

export default Grid;
