import { component$ } from '@builder.io/qwik';
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
export const Table = component$(({
  children, // thead · tbody 등 표 콘텐츠입니다.
  bordered = false, // 셀 테두리 표시 여부입니다.
  striped = false, // 줄무늬 행 변형 여부입니다.
  compact = false, // 조밀한 패딩입니다.
  hover = false, // 행 호버 강조입니다.
  wrap = true, // 스크롤용 wrapper로 감쌀지 여부입니다.
  scroll = false, // wrapper에 스크롤을 켤지 여부입니다.
  scrollMaxHeight, // 세로 스크롤 최대 높이입니다.
  stickyTop = false, // 헤더 행 고정 여부입니다.
  stickyLeft = false, // 왼쪽 열 고정 여부입니다.
  stickyCols = 1, // 좌측 고정 열 개수(1~4)입니다.
  stickyLeftOffsets = {}, // 고정 열별 left 오프셋 맵입니다.
  columns = [], // 열 너비·패딩 설정 배열입니다.
  class: className = '', // 추가 클래스입니다.
  style, // 인라인 스타일입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
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
        class={[tableClasses, className].filter(Boolean).join(' ')}
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
      class={['table_wrap', scroll && 'table_wrap-scroll', className].filter(Boolean).join(' ')}
      data-component="Table"
      style={wrapStyle}
      tabIndex={scroll ? 0 : props.tabIndex}
    >
      <table class={tableClasses} style={tableStyle}>
        {colgroup}
        {children}
      </table>
    </div>
  );
});

export default Table;
