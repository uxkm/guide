/**
 * Container 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// Container가 지원하는 최대 너비 값만 허용합니다.
const SIZES = new Set(['', 'sm', 'md', 'lg', 'xl']);

export function Container({
  as: Root = 'div', // Container의 루트 요소 또는 컴포넌트를 지정합니다.
  size = '', // 최대 너비 단계(sm · md · lg · xl)입니다.
  fluid = false, // 최대 너비 제한을 해제합니다.
  children = 'Container', // Container 내부에 배치할 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 잘못된 size 값은 기본 크기로 처리합니다.
  const resolvedSize = SIZES.has(size) ? size : '';

  // 기본 클래스에 size, fluid, 사용자 정의 클래스를 조건에 따라 조합합니다.
  const classes = [
    'container', // 최대 너비·중앙 정렬·좌우 여백을 적용하는 필수 클래스입니다.
    resolvedSize && `container_${resolvedSize}`, // 검증된 최대 너비 단계입니다.
    fluid && 'container_fluid', // 전체 너비 fluid 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return (
    <Root className={classes} data-component="Container" {...props}>
      {children}
    </Root>
  );
}

export default Container;
