/**
 * GridCol 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// 개별 열의 span 값을 12열 범위로 제한합니다.
const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

export function GridCol({
  as: Root = 'div', // GridCol의 루트 요소 또는 컴포넌트를 지정합니다.

  span, // 기본 화면에서 차지할 열 수를 1~12로 지정합니다.
  spanMd, // md 이상에서 차지할 열 수입니다.
  spanLg, // lg 이상에서 차지할 열 수입니다.

  children, // GridCol 내부에 배치할 콘텐츠입니다.
  className = '', // span 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 기본·md·lg 구간의 개별 span 클래스와 사용자 클래스를 조합합니다.
  const classes = [
    range(span) && `grid_col-span-${range(span)}`, // 기본 구간에서 차지할 열 수입니다.
    range(spanMd) && `grid_col-span-md-${range(spanMd)}`, // md 이상에서 차지할 열 수입니다.
    range(spanLg) && `grid_col-span-lg-${range(spanLg)}`, // lg 이상에서 차지할 열 수입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return (
    <Root className={classes} data-component="GridCol" {...props}>
      {children}
    </Root>
  );
}

export default GridCol;
