import { component$ } from '@builder.io/qwik';
/**
 * Space 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// 간격·정렬 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const SIZES = new Set(['', 'xs', 'sm', 'md', 'lg', 'xl']); // 지원하는 간격 크기입니다.
const ALIGNS = new Set(['', 'start', 'center', 'end', 'baseline', 'stretch']); // 지원하는 교차축 정렬입니다.
const JUSTIFIES = new Set(['', 'start', 'center', 'end', 'between']); // 지원하는 주축 정렬입니다.

export const Space = component$(({
  as: Root = 'div', // Space의 루트 요소 또는 컴포넌트를 지정합니다.

  gap, // 자식 사이 간격을 지정합니다.
  size = '', // gap의 이전 호환 이름입니다.
  vertical = false, // 자식을 세로로 배치합니다.
  wrap = false, // 자식 줄바꿈을 허용합니다.
  block = false, // 부모 너비를 채우는 block flex로 표시합니다.

  align = '', // 교차축에서 자식의 정렬 방식을 지정합니다.
  justify = '', // 주축에서 자식을 배치하는 방식을 지정합니다.

  children = 'Space', // Space 내부에 배치할 콘텐츠입니다.
  class: className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // gap이 있으면 우선하고, 없으면 size 별칭을 사용하며 최종 기본값은 md입니다.
  const resolvedSize = (gap ?? size) || 'md';

  // 간격·방향·줄바꿈·너비·정렬 상태를 공통 CSS 클래스로 조합합니다.
  const classes = [
    'space', // inline-flex 간격 컨테이너를 활성화하는 필수 클래스입니다.
    SIZES.has(resolvedSize) && resolvedSize !== 'md' && `space_gap-${resolvedSize}`, // md가 아닐 때만 간격 클래스를 붙입니다.
    vertical && 'space_vertical', // 세로 배치 변형입니다.
    wrap && 'space_wrap', // 줄바꿈 변형입니다.
    block && 'space_block', // 전체 너비 block flex 변형입니다.
    ALIGNS.has(align) && align && `space_align-${align}`, // 검증된 교차축 정렬입니다.
    JUSTIFIES.has(justify) && justify && `space_justify-${justify}`, // 검증된 주축 정렬입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return (
    <Root class={classes} data-component="Space" {...props}>
      {children}
    </Root>
  );
});

export default Space;
