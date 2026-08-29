<!--
  Flex 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script>
// 속성을 계산된 Flex 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 방향, 줄바꿈, 크기, 간격과 정렬 방식을 prop으로 받습니다.
let {
  as = 'div',
  direction = 'row',
  directionMd = '',
  directionLg = '',
  wrap = false,
  cols,
  colsMd,
  colsLg,
  columns,
  columnsMd,
  columnsLg,
  gap = '',
  ratio = '',
  align = 'stretch',
  justify = '',
  itemSpan,
  itemSpanMd,
  itemSpanLg,
  equal = false,
  autoFit = false,
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
} = $props();

// 선언하지 않은 class와 HTML 속성을 수집합니다.


// 숫자와 문자열 prop이 지원 범위를 벗어나 CSS 클래스로 전달되지 않도록 검증합니다.
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';
const directions = new Set(['', 'row', 'col', 'column']); // 지원하는 배치 방향입니다.
const gaps = new Set(['', 'sm', 'lg', 'none']); // 지원하는 항목 간격입니다.
const ratios = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']); // 지원하는 항목 너비 비율입니다.
const aligns = new Set(['', 'start', 'center', 'end', 'stretch', 'baseline']); // 지원하는 교차축 정렬입니다.
const justifies = new Set(['', 'start', 'center', 'end', 'between', 'around', 'evenly']); // 지원하는 주축 정렬입니다.

// column 이름을 CSS 클래스에서 사용하는 col로 변환하고 반응형 접미사를 붙입니다.
const directionClass = (value, breakpoint = '') =>
  value && `flex_${value === 'column' ? 'col' : value}${breakpoint}`;

// columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
let resolvedCols = $derived(cols ?? columns); // 기본 구간의 최종 항목 수입니다.
let resolvedColsMd = $derived(colsMd ?? columnsMd); // md 구간의 최종 항목 수입니다.
let resolvedColsLg = $derived(colsLg ?? columnsLg); // lg 구간의 최종 항목 수입니다.

// 방향, 줄바꿈, 크기, 간격과 정렬 상태를 공통 CSS 클래스로 조합합니다.
let classes = $derived([
    'flex', // Flexbox 레이아웃을 활성화하는 필수 클래스입니다.
    directions.has(direction) && directionClass(direction), // 기본 배치 방향입니다.
    directions.has(directionMd) && directionClass(directionMd, '-md'), // md 이상 배치 방향입니다.
    directions.has(directionLg) && directionClass(directionLg, '-lg'), // lg 이상 배치 방향입니다.
    wrap && 'flex_wrap', // 여러 줄 배치를 허용합니다.

    gaps.has(gap) && gap && `flex_gap-${gap}`, // 검증된 항목 간격입니다.
    range(resolvedCols) && `flex_cols-${range(resolvedCols)}`, // 기본 균등 항목 수입니다.
    range(resolvedColsMd) && `flex_cols-md-${range(resolvedColsMd)}`, // md 이상 균등 항목 수입니다.
    range(resolvedColsLg) && `flex_cols-lg-${range(resolvedColsLg)}`, // lg 이상 균등 항목 수입니다.
    ratios.has(ratio) && ratio && `flex_ratio-${ratio}`, // 검증된 항목 너비 비율입니다.

    range(itemSpan) && `flex_items-span-${range(itemSpan)}`, // 모든 자식의 기본 span입니다.
    range(itemSpanMd) && `flex_items-span-md-${range(itemSpanMd)}`, // 모든 자식의 md span입니다.
    range(itemSpanLg) && `flex_items-span-lg-${range(itemSpanLg)}`, // 모든 자식의 lg span입니다.
    equal && 'flex_equal', // 모든 자식을 같은 너비로 확장합니다.
    autoFit && 'flex_auto-fit', // 최소 너비 기반 자동 배치를 적용합니다.

    aligns.has(align) && align && `flex_align-${align}`, // 검증된 교차축 정렬입니다.
    justifies.has(justify) && justify && `flex_justify-${justify}`, // 검증된 주축 정렬입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
); // false, 빈 문자열 등 적용되지 않는 항목을 제거합니다.
</script>

<!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <svelte:element this={as} {...rest} class={classes} data-component="Flex">
    <!-- 콘텐츠가 없을 때는 컴포넌트 식별을 위한 기본 텍스트를 표시합니다. -->
    {@render children?.()}
  </svelte:element>
