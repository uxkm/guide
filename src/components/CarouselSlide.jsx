import { useContext, useEffect } from 'react';
import { CarouselContext } from '@/components/Carousel.jsx';

/**
 * CarouselSlide — 캐러셀 단일 슬라이드
 *
 * Carousel 내부에서만 사용합니다.
 * 마운트 시 부모 컨텍스트에 등록해 데모 코드 생성 파리티를 맞춥니다
 * (실제 슬라이드 수는 Carousel이 children으로부터 계산합니다).
 */
export default function CarouselSlide({ children }) {
  const carousel = useContext(CarouselContext);

  useEffect(() => {
    carousel?.registerSlide?.();
    return () => {
      carousel?.unregisterSlide?.();
    };
  }, [carousel]);

  return <div className="swiper-slide">{children}</div>;
}
