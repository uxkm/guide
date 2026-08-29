/**
 * Flex 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// 12단위 Flex 너비와 순서에 사용할 숫자를 1~12 범위로 제한합니다.
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 문자열 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const DIRECTIONS = new Set(['', 'row', 'col', 'column']); // 지원하는 배치 방향입니다.
const GAPS = new Set(['', 'sm', 'lg', 'none']); // 지원하는 항목 간격입니다.
const RATIOS = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']); // 지원하는 항목 너비 비율입니다.
const ALIGNS = new Set(['', 'start', 'center', 'end', 'stretch', 'baseline']); // 지원하는 교차축 정렬입니다.
const JUSTIFIES = new Set(['', 'start', 'center', 'end', 'between', 'around', 'evenly']); // 지원하는 주축 정렬입니다.

export function Flex({
  as: Root = 'div', // Flex의 루트 요소 또는 컴포넌트를 지정합니다.

  direction = 'row', // 기본 화면의 배치 방향을 지정합니다.
  directionMd = '', // md 이상에서 적용할 배치 방향입니다.
  directionLg = '', // lg 이상에서 적용할 배치 방향입니다.
  wrap = false, // 항목이 한 줄을 넘으면 다음 줄로 배치합니다.

  cols, // 기본 화면에서 한 행에 배치할 균등 항목 수를 지정합니다.
  colsMd, // md 이상에서 적용할 균등 항목 수입니다.
  colsLg, // lg 이상에서 적용할 균등 항목 수입니다.
  columns, // cols의 이전 호환 이름입니다.
  columnsMd, // colsMd의 이전 호환 이름입니다.
  columnsLg, // colsLg의 이전 호환 이름입니다.

  gap = '', // Flex 항목 사이의 간격을 지정합니다.
  ratio = '', // 미리 정의된 항목 너비 비율을 선택합니다.
  align = 'stretch', // 교차축에서 항목의 정렬 방식을 지정합니다.
  justify = '', // 주축에서 항목을 배치하는 방식을 지정합니다.

  itemSpan, // 모든 직계 자식에 적용할 기본 12단위 span입니다.
  itemSpanMd, // md 이상에서 모든 직계 자식에 적용할 span입니다.
  itemSpanLg, // lg 이상에서 모든 직계 자식에 적용할 span입니다.

  equal = false, // 모든 직계 자식을 동일한 너비로 확장합니다.
  autoFit = false, // 최소 너비를 기준으로 가능한 수만큼 항목을 자동 배치합니다.

  children = 'Flex', // Flex 내부에 배치할 콘텐츠입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // column 이름을 CSS 클래스에서 사용하는 col로 변환하고 반응형 접미사를 붙입니다.
  const directionClass = (value, breakpoint = '') =>
    value && `flex_${value === 'column' ? 'col' : value}${breakpoint}`;

  // columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
  const resolvedCols = cols ?? columns; // 기본 구간의 최종 항목 수입니다.
  const resolvedColsMd = colsMd ?? columnsMd; // md 구간의 최종 항목 수입니다.
  const resolvedColsLg = colsLg ?? columnsLg; // lg 구간의 최종 항목 수입니다.

  // 방향, 줄바꿈, 크기, 간격과 정렬 상태를 공통 CSS 클래스로 조합합니다.
  const classes = [
    'flex', // Flexbox 레이아웃을 활성화하는 필수 클래스입니다.
    DIRECTIONS.has(direction) && directionClass(direction), // 기본 배치 방향입니다.
    DIRECTIONS.has(directionMd) && directionClass(directionMd, '-md'), // md 이상 배치 방향입니다.
    DIRECTIONS.has(directionLg) && directionClass(directionLg, '-lg'), // lg 이상 배치 방향입니다.
    wrap && 'flex_wrap', // 여러 줄 배치를 허용합니다.

    GAPS.has(gap) && gap && `flex_gap-${gap}`, // 검증된 항목 간격입니다.
    range(resolvedCols) && `flex_cols-${range(resolvedCols)}`, // 기본 균등 항목 수입니다.
    range(resolvedColsMd) && `flex_cols-md-${range(resolvedColsMd)}`, // md 이상 균등 항목 수입니다.
    range(resolvedColsLg) && `flex_cols-lg-${range(resolvedColsLg)}`, // lg 이상 균등 항목 수입니다.
    RATIOS.has(ratio) && ratio && `flex_ratio-${ratio}`, // 검증된 항목 너비 비율입니다.

    range(itemSpan) && `flex_items-span-${range(itemSpan)}`, // 모든 자식의 기본 span입니다.
    range(itemSpanMd) && `flex_items-span-md-${range(itemSpanMd)}`, // 모든 자식의 md span입니다.
    range(itemSpanLg) && `flex_items-span-lg-${range(itemSpanLg)}`, // 모든 자식의 lg span입니다.
    equal && 'flex_equal', // 모든 자식을 같은 너비로 확장합니다.
    autoFit && 'flex_auto-fit', // 최소 너비 기반 자동 배치를 적용합니다.

    ALIGNS.has(align) && align && `flex_align-${align}`, // 검증된 교차축 정렬입니다.
    JUSTIFIES.has(justify) && justify && `flex_justify-${justify}`, // 검증된 주축 정렬입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 class 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return (
    <Root class={classes} data-component="Flex" {...props}>
      {children}
    </Root>
  );
}

export default Flex;
