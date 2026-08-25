// FlexItem의 span과 표시 순서를 1~12 범위로 제한합니다.
const range = (value) => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 문자열 prop이 지원하는 개별 교차축 정렬만 CSS 클래스로 전달합니다.
const ALIGNS = new Set(['', 'auto', 'start', 'center', 'end', 'stretch', 'baseline']);

export function FlexItem({
  as: Root = 'div', // FlexItem의 루트 요소 또는 컴포넌트를 지정합니다.

  span, // 기본 화면에서 차지할 12단위 너비를 지정합니다.
  spanMd, // md 이상에서 차지할 12단위 너비입니다.
  spanLg, // lg 이상에서 차지할 12단위 너비입니다.

  grow = false, // 남는 공간을 채우도록 항목을 확장합니다.
  growFactor = 1, // grow 사용 시 1 또는 2의 확장 비율을 지정합니다.
  fit = false, // 콘텐츠 너비를 유지하고 불필요한 확장을 막습니다.
  align = '', // 이 항목만 적용할 교차축 정렬을 지정합니다.
  order, // 화면에 표시할 순서를 1~12로 지정합니다.

  children, // FlexItem 내부에 배치할 콘텐츠입니다.
  className = '', // 상태 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // grow가 켜진 경우 growFactor가 2일 때만 두 배 확장 클래스를 사용합니다.
  const resolvedGrow = grow && Number(growFactor) === 2 ? 'flex_grow-2' : grow ? 'flex_grow' : '';

  // 반응형 span, 크기, 정렬, 순서와 사용자 정의 클래스를 조합합니다.
  const classes = [
    range(span) && `flex_item-span-${range(span)}`, // 기본 구간에서 차지할 너비입니다.
    range(spanMd) && `flex_item-span-md-${range(spanMd)}`, // md 이상에서 차지할 너비입니다.
    range(spanLg) && `flex_item-span-lg-${range(spanLg)}`, // lg 이상에서 차지할 너비입니다.

    resolvedGrow, // 남는 공간을 1배 또는 2배 비율로 채웁니다.
    fit && 'flex_fit', // 콘텐츠 기준 너비를 유지합니다.
    ALIGNS.has(align) && align && `flex_self-${align}`, // 검증된 개별 교차축 정렬입니다.
    range(order) && `flex_order-${range(order)}`, // 검증된 화면 표시 순서입니다.
    className // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean).join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return <Root className={classes} data-component="FlexItem" {...props}>{children}</Root>;
}

export default FlexItem;
