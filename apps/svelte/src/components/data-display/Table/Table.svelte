<!--
  Table 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
// class와 style을 표·wrapper 계산에 사용하고 나머지 속성만 최외곽 루트에 전달합니다.

let {
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
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge,
  class: className,
  ...rest
} = $props();=> [1, 2, 3, 4].includes(value) }, // 좌측 고정 열 개수(1~4)입니다.
  stickyLeftOffsets: { type: Object, default: () => ({}) }, // 고정 열별 left 오프셋 맵입니다.
  columns: { type: Array, default: () => [] }, // 열 너비·패딩 설정 배열입니다.
});

let hasColumns = $derived(props.columns.length > 0);
// 표 스킨과 sticky 상태를 table_* 공통 클래스로 변환합니다.
let tableClasses = $derived([
    'table',
    bordered && 'table_bordered',
    striped && 'table_striped',
    compact && 'table_compact',
    hover && 'table_hover',
    hasColumns && 'table_columns',
    stickyTop && 'table_sticky-top',
    stickyLeft && 'table_sticky-left',
    stickyLeft && `table_sticky-cols-${stickyCols}`,
  ].filter(Boolean),
);
// 열 패딩·줄바꿈과 sticky offset을 위치별 CSS 변수로 전달합니다.
let tableStyle = $derived({
  const style = {};
  props.columns.forEach((column, index) => {
    if (column.padding != null) style[`--table-col-${index + 1}-padding`] = column.padding;
    if (column.nowrap) style[`--table-col-${index + 1}-white-space`] = 'nowrap';
  });
  Object.entries(stickyLeftOffsets).forEach(([key, value]) => {
    if (value != null && value !== '') style[`--table-sticky-left-${key}`] = value;
  });
  return style;
});
let wrapStyle = $derived(({
  ...(typeof rest.style === 'object' ? rest.style : {}),
  ...(scrollMaxHeight ? { '--table-scroll-max-height': scrollMaxHeight } : {}),
}));
let fallthroughAttrs = $derived({
  const { class: _class, style: _style, ...rest } = rest;
  return rest;
});
const colStyle = (column) =>
  ['width', 'minWidth', 'maxWidth'].reduce((style, key) => {
    if (column[key] != null)
      style[key] = typeof column[key] === 'number' ? `${column[key]}rem` : column[key];
    return style;
  }, {});
</script>

<!-- 기본은 스크롤 wrapper를 두고 wrap=false일 때 시맨틱 table을 직접 반환합니다. -->
  {#if wrap}<div
   
    {...fallthroughAttrs}
    class="table_wrap"
    class={[scroll && 'table_wrap-scroll', attrs.class]}
    data-component="Table"
    style={wrapStyle}
  >
    <table class={tableClasses} style={tableStyle}>
      {#if hasColumns}<colgroup>
        <col {#each columns as column, index} key={index} style={colStyle(column)} />
      </colgroup>
      {@render children?.()}
    </table>
  </div>
  {:else}<table
   
    {...fallthroughAttrs}
    class={[...tableClasses, attrs.class]}
    data-component="Table"
    style={{ ...tableStyle, ...(typeof attrs.style === 'object' ? attrs.style : {}) }}
  >
    {#if hasColumns}<colgroup>
      <col {#each columns as column, index} key={index} style={colStyle(column)} />
    </colgroup>
    {@render children?.()}
  </table>
