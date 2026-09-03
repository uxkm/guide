import { Component, computed, input } from '@angular/core';

const range = (value: unknown) => {
  const n = Number(value);
  return Number.isInteger(n) && n >= 1 && n <= 12 ? n : '';
};

const GAPS = ['', 'sm', 'lg', 'none'];
const RATIOS = ['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1'];
const ALIGNS = ['', 'center', 'end'];

/** 프리셋은 클래스, 숫자(rem)·CSS 길이는 --grid-current-gap으로 적용합니다. */
function resolveGap(gap: string | number | null | undefined): {
  className: string;
  style: Record<string, string> | undefined;
} {
  if (typeof gap === 'string' && GAPS.includes(gap)) {
    return { className: gap ? `grid_gap-${gap}` : '', style: undefined };
  }
  if (gap === '' || gap == null) return { className: '', style: undefined };
  const value =
    typeof gap === 'number' && Number.isFinite(gap) && gap >= 0 ? `${gap}rem` : String(gap).trim();
  if (!value) return { className: '', style: undefined };
  return { className: '', style: { '--grid-current-gap': value } };
}

@Component({
  selector: 'Grid',
  standalone: true,
  template: `
    <div [class]="classes()" [style]="rootStyle()" data-component="Grid">
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
  readonly gap = input<string | number>('');
  readonly ratio = input<string>('');
  readonly align = input<string>('');
  readonly itemSpan = input<number | string | undefined>(undefined);
  readonly itemSpanMd = input<number | string | undefined>(undefined);
  readonly itemSpanLg = input<number | string | undefined>(undefined);
  readonly autoFit = input<boolean>(false);
  readonly autoFill = input<boolean>(false);
  readonly equalColumns = input<boolean>(false);
  readonly style = input<Record<string, string> | undefined>(undefined);

  readonly resolvedGap = computed(() => resolveGap(this.gap()));

  readonly classes = computed(() => {
    const resolvedCols = this.cols() ?? this.columns();
    const resolvedColsMd = this.colsMd() ?? this.columnsMd();
    const resolvedColsLg = this.colsLg() ?? this.columnsLg();
    const ratio = this.ratio();
    const align = this.align();
    const gapClass = this.resolvedGap().className;

    return [
      'grid',
      range(resolvedCols) && `grid_cols-${range(resolvedCols)}`,
      range(resolvedColsMd) && `grid_cols-md-${range(resolvedColsMd)}`,
      range(resolvedColsLg) && `grid_cols-lg-${range(resolvedColsLg)}`,
      gapClass,
      RATIOS.includes(ratio) && ratio && `grid_ratio-${ratio}`,
      range(this.itemSpan()) && `grid_item-span-${range(this.itemSpan())}`,
      range(this.itemSpanMd()) && `grid_item-span-md-${range(this.itemSpanMd())}`,
      range(this.itemSpanLg()) && `grid_item-span-lg-${range(this.itemSpanLg())}`,
      this.autoFit() && 'grid_auto-fit',
      this.autoFill() && 'grid_auto-fill',
      this.equalColumns() && 'grid_equal-columns',
      ALIGNS.includes(align) && align && `grid_align-${align}`,
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

export default Grid;
