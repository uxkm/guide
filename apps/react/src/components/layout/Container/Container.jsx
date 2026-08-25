// Container가 지원하는 최대 너비 값만 허용합니다.
const SIZES = new Set(['', 'sm', 'md', 'lg', 'xl']);

export function Container({
  as: Root = 'div', size = '', fluid = false, children = 'Container', className = '', ...props
}) {
  // 잘못된 size 값은 기본 크기로 처리합니다.
  const resolvedSize = SIZES.has(size) ? size : '';

  // 기본 클래스에 size, fluid, 사용자 정의 클래스를 조건에 따라 조합합니다.
  const classes = [
    'container', resolvedSize && `container_${resolvedSize}`, fluid && 'container_fluid', className
  ].filter(Boolean).join(' ');

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return <Root className={classes} data-component="Container" {...props}>{children}</Root>;
}

export default Container;
