/**
 * Table 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
// 고정 열 개수는 CSS에서 제공하는 1~4열 범위로 제한합니다.
const VALID_STICKY_COLS = new Set([1, 2, 3, 4]);
const toCssSize = (value) => (typeof value === 'number' ? `${value}rem` : value);

// 열별 너비 prop을 col 요소의 인라인 크기 스타일로 변환합니다.
function columnStyle(column = {}) {
  return ['width', 'minWidth', 'maxWidth'].reduce((style, key) => {
    if (column[key] != null) style[key] = toCssSize(column[key]);
    return style;
  }, {});
}

// 패딩과 줄바꿈 옵션은 열 위치별 CSS 변수로 전달합니다.
function columnVariables(columns) {
  return columns.reduce((style, column, index) => {
    const position = index + 1;
    if (column.padding != null) style[`--table-col-${position}-padding`] = column.padding;
    if (column.nowrap) style[`--table-col-${position}-white-space`] = 'nowrap';
    return style;
  }, {});
}

// 표 스킨, 스크롤, 고정 행·열과 열 설정을 하나의 Table API로 조합합니다.
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
  // 표 자체 변형과 wrapper 변형을 분리해 클래스와 스타일을 계산합니다.
  const tableClasses = [
    'table',
    bordered && 'table_bordered',
    striped && 'table_striped',
    compact && 'table_compact',
    hover && 'table_hover',
    hasColumns && 'table_columns',
    stickyTop && 'table_sticky-top',
    stickyLeft && 'table_sticky-left',
    stickyLeft && `table_sticky-cols-${resolvedStickyCols}`,
  ]
    .filter(Boolean)
    .join(' ');
  const tableStyle = { ...columnVariables(hasColumns ? columns : []) };
  Object.entries(stickyLeftOffsets ?? {}).forEach(([key, value]) => {
    if (value != null && value !== '') tableStyle[`--table-sticky-left-${key}`] = value;
  });
  const colgroup = hasColumns ? (
    <colgroup>
      {columns.map((column, index) => (
        <col key={index} style={columnStyle(column)} />
      ))}
    </colgroup>
  ) : null;

  // wrap=false면 시맨틱 table을 직접 반환하고, 기본값은 스크롤 가능한 wrapper를 둡니다.
  if (!wrap) {
    return (
      <table
        {...props}
        className={[tableClasses, className].filter(Boolean).join(' ')}
        data-component="Table"
        style={{ ...tableStyle, ...style }}
      >
        {colgroup}
        {children}
      </table>
    );
  }

  const wrapStyle = { ...style };
  if (scrollMaxHeight != null && scrollMaxHeight !== '')
    wrapStyle['--table-scroll-max-height'] = scrollMaxHeight;
  return (
    <div
      {...props}
      className={['table_wrap', scroll && 'table_wrap-scroll', className].filter(Boolean).join(' ')}
      data-component="Table"
      style={wrapStyle}
      tabIndex={scroll ? 0 : props.tabIndex}
    >
      <table className={tableClasses} style={tableStyle}>
        {colgroup}
        {children}
      </table>
    </div>
  );
}

export default Table;
