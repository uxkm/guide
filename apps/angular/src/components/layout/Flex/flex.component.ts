import { Component, computed, input } from '@angular/core';

const range = (value: unknown) => {
  const n = Number(value);
  return Number.isInteger(n) && n >= 1 && n <= 12 ? n : '';
};

const DIRECTIONS = new Set(['', 'row', 'col', 'column']);
const GAPS = new Set(['', 'sm', 'lg', 'none']);
const RATIOS = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']);
const ALIGNS = new Set(['', 'start', 'center', 'end', 'stretch', 'baseline']);
const JUSTIFIES = new Set(['', 'start', 'center', 'end', 'between', 'around', 'evenly']);

@Component({
  selector: 'Flex',
  standalone: true,
  template: `
    <div [class]="classes()" data-component="Flex">
      <ng-content />
    </div>
  `,
})
export class Flex {
  readonly hostClass = input<string>('');
  readonly direction = input<string>('row');
  readonly directionMd = input<string>('');
  readonly directionLg = input<string>('');
  readonly wrap = input<boolean>(false);
  readonly cols = input<number | string | undefined>(undefined);
  readonly colsMd = input<number | string | undefined>(undefined);
  readonly colsLg = input<number | string | undefined>(undefined);
  readonly columns = input<number | string | undefined>(undefined);
  readonly columnsMd = input<number | string | undefined>(undefined);
  readonly columnsLg = input<number | string | undefined>(undefined);
  readonly gap = input<string>('');
  readonly ratio = input<string>('');
  readonly align = input<string>('stretch');
  readonly justify = input<string>('');
  readonly itemSpan = input<number | string | undefined>(undefined);
  readonly itemSpanMd = input<number | string | undefined>(undefined);
  readonly itemSpanLg = input<number | string | undefined>(undefined);
  readonly equal = input<boolean>(false);
  readonly autoFit = input<boolean>(false);

  readonly directionClass = (value: string, breakpoint = '') =>
    value ? `flex_${value === 'column' ? 'col' : value}${breakpoint}` : '';

  readonly classes = computed(() => {
    const resolvedCols = this.cols() ?? this.columns();
    const resolvedColsMd = this.colsMd() ?? this.columnsMd();
    const resolvedColsLg = this.colsLg() ?? this.columnsLg();
    const dir = this.direction();
    const dirMd = this.directionMd();
    const dirLg = this.directionLg();
    const gap = this.gap();
    const ratio = this.ratio();
    const align = this.align();
    const justify = this.justify();

    return [
      'flex',
      DIRECTIONS.has(dir) && this.directionClass(dir),
      DIRECTIONS.has(dirMd) && this.directionClass(dirMd, '-md'),
      DIRECTIONS.has(dirLg) && this.directionClass(dirLg, '-lg'),
      this.wrap() && 'flex_wrap',
      GAPS.has(gap) && gap && `flex_gap-${gap}`,
      range(resolvedCols) && `flex_cols-${range(resolvedCols)}`,
      range(resolvedColsMd) && `flex_cols-md-${range(resolvedColsMd)}`,
      range(resolvedColsLg) && `flex_cols-lg-${range(resolvedColsLg)}`,
      RATIOS.has(ratio) && ratio && `flex_ratio-${ratio}`,
      range(this.itemSpan()) && `flex_items-span-${range(this.itemSpan())}`,
      range(this.itemSpanMd()) && `flex_items-span-md-${range(this.itemSpanMd())}`,
      range(this.itemSpanLg()) && `flex_items-span-lg-${range(this.itemSpanLg())}`,
      this.equal() && 'flex_equal',
      this.autoFit() && 'flex_auto-fit',
      ALIGNS.has(align) && align && `flex_align-${align}`,
      JUSTIFIES.has(justify) && justify && `flex_justify-${justify}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' ');
  });
}

export default Flex;
