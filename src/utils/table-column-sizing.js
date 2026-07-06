/** 테이블·ApiTable 공통 — 열 width · minWidth · maxWidth · padding · nowrap */

export function toCssSize(value) {
  return typeof value === 'number' ? `${value}rem` : value;
}

export function columnColStyle(column = {}) {
  const style = {};
  if (column.width != null) style.width = toCssSize(column.width);
  if (column.minWidth != null) style.minWidth = toCssSize(column.minWidth);
  if (column.maxWidth != null) style.maxWidth = toCssSize(column.maxWidth);
  return style;
}

export function columnCellStyle(column = {}) {
  const style = { ...columnColStyle(column) };
  if (column.padding != null) style.padding = column.padding;
  return style;
}

/** table_columns — nth-child 셀 패딩·줄바꿈용 CSS 변수 */
export function columnRootVars(columns = []) {
  const style = {};
  columns.forEach((col, index) => {
    const n = index + 1;
    if (col.padding != null) style[`--table-col-${n}-padding`] = col.padding;
    if (col.nowrap) style[`--table-col-${n}-white-space`] = 'nowrap';
  });
  return style;
}

export function columnCellClass(column, prefix = 'table') {
  const classes = [];
  if (column.nowrap) classes.push(`${prefix}_col-nowrap`);
  return classes;
}
