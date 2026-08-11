const VALID_STICKY_COLS = new Set([1, 2, 3, 4]);
const toCssSize = (value) => typeof value === 'number' ? `${value}rem` : value;

function columnStyle(column = {}) {
  return ['width', 'minWidth', 'maxWidth'].reduce((style, key) => {
    if (column[key] != null) style[key] = toCssSize(column[key]);
    return style;
  }, {});
}

function columnVariables(columns) {
  return columns.reduce((style, column, index) => {
    const position = index + 1;
    if (column.padding != null) style[`--table-col-${position}-padding`] = column.padding;
    if (column.nowrap) style[`--table-col-${position}-white-space`] = 'nowrap';
    return style;
  }, {});
}

export function Table({
  children,
  bordered = false,
  striped = false,
  compact = false,
  hover = false,
  wrap = true,
  scroll = false,
  scrollMaxHeight,
  stickyTop = false,
  stickyLeft = false,
  stickyCols = 1,
  stickyLeftOffsets = {},
  columns = [],
  className = '',
  style,
  ...props
}) {
  const hasColumns = Array.isArray(columns) && columns.length > 0;
  const resolvedStickyCols = VALID_STICKY_COLS.has(stickyCols) ? stickyCols : 1;
  const tableClasses = [
    'table', bordered && 'table_bordered', striped && 'table_striped',
    compact && 'table_compact', hover && 'table_hover', hasColumns && 'table_columns',
    stickyTop && 'table_sticky-top', stickyLeft && 'table_sticky-left',
    stickyLeft && `table_sticky-cols-${resolvedStickyCols}`
  ].filter(Boolean).join(' ');
  const tableStyle = { ...columnVariables(hasColumns ? columns : []) };
  Object.entries(stickyLeftOffsets ?? {}).forEach(([key, value]) => {
    if (value != null && value !== '') tableStyle[`--table-sticky-left-${key}`] = value;
  });
  const colgroup = hasColumns ? <colgroup>{columns.map((column, index) => <col key={index} style={columnStyle(column)} />)}</colgroup> : null;

  if (!wrap) {
    return <table {...props} className={[tableClasses, className].filter(Boolean).join(' ')} data-component="Table" style={{ ...tableStyle, ...style }}>{colgroup}{children}</table>;
  }

  const wrapStyle = { ...style };
  if (scrollMaxHeight != null && scrollMaxHeight !== '') wrapStyle['--table-scroll-max-height'] = scrollMaxHeight;
  return (
    <div {...props} className={['table_wrap', scroll && 'table_wrap-scroll', className].filter(Boolean).join(' ')} data-component="Table" style={wrapStyle}>
      <table className={tableClasses} style={tableStyle}>{colgroup}{children}</table>
    </div>
  );
}

export default Table;
