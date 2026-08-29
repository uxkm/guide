import { component$ } from '@builder.io/qwik';
/**
 * CarouselSlide 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
export const CarouselSlide = component$(({
  children, // 슬라이드 내부 콘텐츠입니다.
  class: className = '', // swiper-slide과 함께 적용할 클래스입니다.
  ...props // 나머지 속성을 슬라이드 루트에 전달합니다.
}) {
  return (
    <div {...props} class={['swiper-slide', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
});

export default CarouselSlide;
