import { useEffect, useRef } from 'react';
import { useCarousel } from '@/components/context/CarouselContext';

export default function CarouselSlide({ children }) {
  const carousel = useCarousel();
  const registerSlideRef = useRef(carousel?.registerSlide);
  const unregisterSlideRef = useRef(carousel?.unregisterSlide);
  registerSlideRef.current = carousel?.registerSlide;
  unregisterSlideRef.current = carousel?.unregisterSlide;

  useEffect(() => {
    registerSlideRef.current?.();
    return () => unregisterSlideRef.current?.();
  }, []);

  return <div className="swiper-slide">{children}</div>;
}
