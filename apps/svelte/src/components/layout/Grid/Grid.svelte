<!--
  Grid 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script>
// 속성을 계산된 Grid 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 열, 간격, 비율, span, 자동 배치와 정렬 방식을 prop으로 받습니다.
let {
  as = 'div',
  cols,
  colsMd,
  colsLg,
  columns,
  columnsMd,
  columnsLg,
  gap = '',
  ratio = '',
  align = '',
  itemSpan,
  itemSpanMd,
  itemSpanLg,
  autoFit = false,
  autoFill = false,
  equalColumns = false,
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
const gaps = new Set(['', 'sm', 'lg', 'none']); // 지원하는 간격 이름입니다.
const ratios = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']); // 지원하는 열 비율입니다.
const aligns = new Set(['', 'center', 'end']); // 기본 stretch 외에 선택할 수 있는 정렬입니다.

// columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
let resolvedCols = $derived(cols ?? columns); // 기본 구간의 최종 열 수입니다.
let resolvedColsMd = $derived(colsMd ?? columnsMd); // md 구간의 최종 열 수입니다.
let resolvedColsLg = $derived(colsLg ?? columnsLg); // lg 구간의 최종 열 수입니다.

// 상태에 맞는 기본·반응형 Grid 클래스와 사용자 정의 class를 조합합니다.
let classes = $derived([
    'grid', // CSS Grid 레이아웃을 활성화하는 필수 클래스입니다.
    range(resolvedCols) && `grid_cols-${range(resolvedCols)}`, // 기본 균등 열 수입니다.
    range(resolvedColsMd) && `grid_cols-md-${range(resolvedColsMd)}`, // md 이상 균등 열 수입니다.
    range(resolvedColsLg) && `grid_cols-lg-${range(resolvedColsLg)}`, // lg 이상 균등 열 수입니다.

    gaps.has(gap) && gap && `grid_gap-${gap}`, // 검증된 간격 클래스입니다.
    ratios.has(ratio) && ratio && `grid_ratio-${ratio}`, // 검증된 열 비율 클래스입니다.

    range(itemSpan) && `grid_item-span-${range(itemSpan)}`, // 모든 자식의 기본 span입니다.
    range(itemSpanMd) && `grid_item-span-md-${range(itemSpanMd)}`, // 모든 자식의 md span입니다.
    range(itemSpanLg) && `grid_item-span-lg-${range(itemSpanLg)}`, // 모든 자식의 lg span입니다.

    autoFit && 'grid_auto-fit', // 남는 빈 트랙을 접는 자동 열 모드입니다.
    autoFill && 'grid_auto-fill', // 남는 빈 트랙을 유지하는 자동 열 모드입니다.
    equalColumns && 'grid_equal-columns', // 자식 수 기준의 동일 너비 열 모드입니다.

    aligns.has(align) && align && `grid_align-${align}`, // 검증된 항목 정렬 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
); // false, 빈 문자열 등 적용되지 않는 항목을 제거합니다.
</script>

<!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <svelte:element this={as} {...rest} class={classes} data-component="Grid">
    <!-- 콘텐츠가 없을 때는 컴포넌트 식별을 위한 기본 텍스트를 표시합니다. -->
    {@render children?.()}
  </svelte:element>
