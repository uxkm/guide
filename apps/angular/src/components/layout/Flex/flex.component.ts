import { Component, computed, input } from '@angular/core';

const range = (value: unknown) => {
  const n = Number(value);
  return Number.isInteger(n) && n >= 1 && n <= 12 ? n : '';
};

const DIRECTIONS = ['', 'row', 'col', 'column'];
const GAPS = ['', 'sm', 'lg', 'none'];
const RATIOS = ['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1'];
const ALIGNS = ['', 'start', 'center', 'end', 'stretch', 'baseline'];
const JUSTIFIES = ['', 'start', 'center', 'end', 'between', 'around', 'evenly'];

/** 프리셋은 클래스, 숫자(rem)·CSS 길이는 --flex-current-gap으로 적용합니다. */
function resolveGap(gap: string | number | null | undefined): {
  className: string;
  style: Record<string, string> | undefined;
} {
  if (typeof gap === 'string' && GAPS.includes(gap)) {
    return { className: gap ? `flex_gap-${gap}` : '', style: undefined };
  }
  if (gap === '' || gap == null) return { className: '', style: undefined };
  const value =
    typeof gap === 'number' && Number.isFinite(gap) && gap >= 0 ? `${gap}rem` : String(gap).trim();
  if (!value) return { className: '', style: undefined };
  return { className: '', style: { '--flex-current-gap': value } };
}

@Component({
  selector: 'Flex',
  standalone: true,
  template: `
    <div [class]="classes()" [style]="rootStyle()" data-component="Flex">
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
  readonly gap = input<string | number>('');
  readonly ratio = input<string>('');
  readonly align = input<string>('stretch');
  readonly justify = input<string>('');
  readonly itemSpan = input<number | string | undefined>(undefined);
  readonly itemSpanMd = input<number | string | undefined>(undefined);
  readonly itemSpanLg = input<number | string | undefined>(undefined);
  readonly equal = input<boolean>(false);
  readonly autoFit = input<boolean>(false);
  readonly style = input<Record<string, string> | undefined>(undefined);

  readonly directionClass = (value: string, breakpoint = '') =>
    value ? `flex_${value === 'column' ? 'col' : value}${breakpoint}` : '';

  readonly resolvedGap = computed(() => resolveGap(this.gap()));

  readonly classes = computed(() => {
    const resolvedCols = this.cols() ?? this.columns();
    const resolvedColsMd = this.colsMd() ?? this.columnsMd();
    const resolvedColsLg = this.colsLg() ?? this.columnsLg();
    const dir = this.direction();
    const dirMd = this.directionMd();
    const dirLg = this.directionLg();
    const ratio = this.ratio();
    const align = this.align();
    const justify = this.justify();
    const gapClass = this.resolvedGap().className;

    return [
      'flex',
      DIRECTIONS.includes(dir) && this.directionClass(dir),
      DIRECTIONS.includes(dirMd) && this.directionClass(dirMd, '-md'),
      DIRECTIONS.includes(dirLg) && this.directionClass(dirLg, '-lg'),
      this.wrap() && 'flex_wrap',
      gapClass,
      range(resolvedCols) && `flex_cols-${range(resolvedCols)}`,
      range(resolvedColsMd) && `flex_cols-md-${range(resolvedColsMd)}`,
      range(resolvedColsLg) && `flex_cols-lg-${range(resolvedColsLg)}`,
      RATIOS.includes(ratio) && ratio && `flex_ratio-${ratio}`,
      range(this.itemSpan()) && `flex_items-span-${range(this.itemSpan())}`,
      range(this.itemSpanMd()) && `flex_items-span-md-${range(this.itemSpanMd())}`,
      range(this.itemSpanLg()) && `flex_items-span-lg-${range(this.itemSpanLg())}`,
      this.equal() && 'flex_equal',
      this.autoFit() && 'flex_auto-fit',
      ALIGNS.includes(align) && align && `flex_align-${align}`,
      JUSTIFIES.includes(justify) && justify && `flex_justify-${justify}`,
      this.hostClass(),
    ]
      .filter(Boolean)
      .join(' ');
  });

  readonly rootStyle = computed(() => {
    const gapStyle = this.resolvedGap().style;
    const style = this.style();
    if (!gapStyle && !style) return null;
    return { ...style, ...gapStyle };
  });
}

export default Flex;
