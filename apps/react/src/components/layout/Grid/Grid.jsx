/**
 * Grid 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// 12열 Grid에서 사용할 수 있도록 숫자를 1~12 범위로 제한합니다.
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 문자열 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const GAPS = new Set(['', 'sm', 'lg', 'none']); // 지원하는 간격 이름입니다.
const RATIOS = new Set(['', '1-1', '2-1', '1-2', '3-1', '1-1-1', '1-2-1']); // 지원하는 열 비율입니다.
const ALIGNS = new Set(['', 'center', 'end']); // 기본 stretch 외에 선택할 수 있는 정렬입니다.

export function Grid({
  as: Root = 'div', // Grid의 루트 요소 또는 컴포넌트를 지정합니다.

  cols, // 기본 화면의 균등 열 수를 1~12로 지정합니다.
  colsMd, // md 이상에서 적용할 균등 열 수입니다.
  colsLg, // lg 이상에서 적용할 균등 열 수입니다.
  columns, // cols의 이전 호환 이름입니다.
  columnsMd, // colsMd의 이전 호환 이름입니다.
  columnsLg, // colsLg의 이전 호환 이름입니다.

  gap = '', // Grid 항목 사이의 간격을 지정합니다.
  ratio = '', // 미리 정의된 열 너비 비율을 선택합니다.
  align = '', // 교차축에서 항목의 정렬 방식을 지정합니다.

  itemSpan, // 모든 직계 자식에 적용할 기본 12열 span입니다.
  itemSpanMd, // md 이상에서 모든 직계 자식에 적용할 span입니다.
  itemSpanLg, // lg 이상에서 모든 직계 자식에 적용할 span입니다.

  autoFit = false, // 빈 트랙을 접으며 가능한 수만큼 열을 자동 배치합니다.
  autoFill = false, // 빈 트랙을 유지하며 가능한 수만큼 열을 자동 생성합니다.
  equalColumns = false, // 자식 수만큼 동일한 너비의 열을 생성합니다.

  children = 'Grid', // Grid 내부에 배치할 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // columns는 cols의 이전 이름으로 유지하며 cols가 있으면 우선합니다.
  const resolvedCols = cols ?? columns; // 기본 구간의 최종 열 수입니다.
  const resolvedColsMd = colsMd ?? columnsMd; // md 구간의 최종 열 수입니다.
  const resolvedColsLg = colsLg ?? columnsLg; // lg 구간의 최종 열 수입니다.

  // 기본·반응형 열, 간격, 비율, span, 자동 배치, 정렬 클래스를 조합합니다.
  const classes = [
    'grid', // CSS Grid 레이아웃을 활성화하는 필수 클래스입니다.
    range(resolvedCols) && `grid_cols-${range(resolvedCols)}`, // 기본 균등 열 수입니다.
    range(resolvedColsMd) && `grid_cols-md-${range(resolvedColsMd)}`, // md 이상 균등 열 수입니다.
    range(resolvedColsLg) && `grid_cols-lg-${range(resolvedColsLg)}`, // lg 이상 균등 열 수입니다.

    GAPS.has(gap) && gap && `grid_gap-${gap}`, // 검증된 간격 클래스입니다.
    RATIOS.has(ratio) && ratio && `grid_ratio-${ratio}`, // 검증된 열 비율 클래스입니다.

    range(itemSpan) && `grid_item-span-${range(itemSpan)}`, // 모든 자식의 기본 span입니다.
    range(itemSpanMd) && `grid_item-span-md-${range(itemSpanMd)}`, // 모든 자식의 md span입니다.
    range(itemSpanLg) && `grid_item-span-lg-${range(itemSpanLg)}`, // 모든 자식의 lg span입니다.

    autoFit && 'grid_auto-fit', // 남는 빈 트랙을 접는 자동 열 모드입니다.
    autoFill && 'grid_auto-fill', // 남는 빈 트랙을 유지하는 자동 열 모드입니다.
    equalColumns && 'grid_equal-columns', // 자식 수 기준의 동일 너비 열 모드입니다.

    ALIGNS.has(align) && align && `grid_align-${align}`, // 검증된 항목 정렬 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return (
    <Root className={classes} data-component="Grid" {...props}>
      {children}
    </Root>
  );
}

export default Grid;
