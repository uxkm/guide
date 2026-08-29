import { Component, computed, input } from '@angular/core';

const VALID_STICKY_COLS = new Set([1, 2, 3, 4]);

export interface TableColumn {
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  padding?: string;
  nowrap?: boolean;
}

const toCssSize = (value: number | string) =>
  typeof value === 'number' ? `${value}rem` : value;

@Component({
  selector: 'Table',
  standalone: true,
  template: `
    @if (wrap()) {
      <div
        [class]="wrapClasses()"
        data-component="Table"
        [style]="wrapStyle()"
        [attr.tabindex]="scroll() ? 0 : null"
      >
        <table [class]="tableClasses()" [style]="tableStyle()">
          @if (hasColumns()) {
            <colgroup>
              @for (column of columns(); track $index) {
                <col [style]="colStyle(column)" />
              }
            </colgroup>
          }
          <ng-content />
        </table>
      </div>
    } @else {
      <table
        [class]="tableClassesWithHost()"
        data-component="Table"
        [style]="tableStyle()"
      >
        @if (hasColumns()) {
          <colgroup>
            @for (column of columns(); track $index) {
              <col [style]="colStyle(column)" />
            }
          </colgroup>
        }
        <ng-content />
      </table>
    }
  `,
})
export class Table {
  readonly hostClass = input<string>('');
  readonly bordered = input<boolean>(false);
  readonly striped = input<boolean>(false);
  readonly compact = input<boolean>(false);
  readonly hover = input<boolean>(false);
  readonly wrap = input<boolean>(true);
  readonly scroll = input<boolean>(false);
  readonly scrollMaxHeight = input<string | undefined>(undefined);
  readonly stickyTop = input<boolean>(false);
  readonly stickyLeft = input<boolean>(false);
  readonly stickyCols = input<number>(1);
  readonly stickyLeftOffsets = input<Record<string, string | number>>({});
  readonly columns = input<TableColumn[]>([]);

  readonly hasColumns = computed(() => this.columns().length > 0);

  readonly resolvedStickyCols = computed(() =>
    VALID_STICKY_COLS.has(this.stickyCols()) ? this.stickyCols() : 1,
  );

  readonly tableClasses = computed(() =>
    [
      'table',
      this.bordered() && 'table_bordered',
      this.striped() && 'table_striped',
      this.compact() && 'table_compact',
      this.hover() && 'table_hover',
      this.hasColumns() && 'table_columns',
      this.stickyTop() && 'table_sticky-top',
      this.stickyLeft() && 'table_sticky-left',
      this.stickyLeft() && `table_sticky-cols-${this.resolvedStickyCols()}`,
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly tableClassesWithHost = computed(() =>
    [this.tableClasses(), this.hostClass()].filter(Boolean).join(' '),
  );

  readonly wrapClasses = computed(() =>
    ['table_wrap', this.scroll() && 'table_wrap-scroll', this.hostClass()].filter(Boolean).join(' '),
  );

  readonly tableStyle = computed(() => {
    const style: Record<string, string> = {};
    this.columns().forEach((column, index) => {
      const position = index + 1;
      if (column.padding != null) style[`--table-col-${position}-padding`] = column.padding;
      if (column.nowrap) style[`--table-col-${position}-white-space`] = 'nowrap';
    });
    Object.entries(this.stickyLeftOffsets() ?? {}).forEach(([key, value]) => {
      if (value != null && value !== '') style[`--table-sticky-left-${key}`] = String(value);
    });
    return style;
  });

  readonly wrapStyle = computed(() => {
    const style: Record<string, string> = {};
    const maxHeight = this.scrollMaxHeight();
    if (maxHeight != null && maxHeight !== '') {
      style['--table-scroll-max-height'] = maxHeight;
    }
    return style;
  });

  colStyle(column: TableColumn): Record<string, string> {
    return (['width', 'minWidth', 'maxWidth'] as const).reduce<Record<string, string>>(
      (style, key) => {
        const val = column[key];
        if (val != null) style[key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)] = toCssSize(val);
        return style;
      },
      {},
    );
  }
}

export default Table;
