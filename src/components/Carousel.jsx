import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { CarouselContext } from '@/components/context/CarouselContext';
import { cn } from '@/utils/cn';
import { useRipple } from '@/hooks/useRipple';
import { useCarouselDemoCode } from '@/hooks/useDemoCode';

export default function Carousel({
  ripple,
  ariaLabel,
  demo = true,
  multi,
  dotsOutside,
  autoplayToggle,
  effect,
  autoplay,
  delay = 4000,
  loop,
  slidesPerView = 1,
  spaceBetween = 0,
  centered,
  pagination = true,
  navigation = true,
  children,
  className,
  ...rest
}) {
  const props = {
    ripple,
    ariaLabel,
    demo,
    multi,
    dotsOutside,
    autoplayToggle,
    effect,
    autoplay,
    delay,
    loop,
    slidesPerView,
    spaceBetween,
    centered,
    pagination,
    navigation,
  };

  const { rippleAttrs, childRippleAttrs } = useRipple({ ripple }, { mode: 'container' });
  const rootRef = useRef(null);
  const swiperEl = useRef(null);
  const swiperInstance = useRef(null);
  const [isPlaying, setIsPlaying] = useState(Boolean(autoplay));
  const [slideCount, setSlideCount] = useState(0);

  const rootClass = cn(
    'carousel',
    demo && 'carousel_demo',
    multi && 'carousel_multi',
    dotsOutside && 'carousel_dots-outside',
    autoplayToggle && !isPlaying && 'is-autoplay-paused',
    className,
  );

  const showNavigation = navigation !== false;
  const showPagination = pagination !== false;
  const paginationType = pagination === 'fraction' ? 'fraction' : 'bullets';

  const registerSlide = useCallback(() => {
    setSlideCount((count) => count + 1);
  }, []);

  const unregisterSlide = useCallback(() => {
    setSlideCount((count) => Math.max(0, count - 1));
  }, []);

  const contextValue = useMemo(
    () => ({ registerSlide, unregisterSlide }),
    [registerSlide, unregisterSlide],
  );

  useCarouselDemoCode(props, slideCount, rootRef, { class: className, ...rest });

  useEffect(() => {
    if (!swiperEl.current || swiperInstance.current) return undefined;

    const paginationEl = rootRef.current?.querySelector('.swiper-pagination');
    const nextEl = rootRef.current?.querySelector('.swiper-button-next');
    const prevEl = rootRef.current?.querySelector('.swiper-button-prev');

    const config = {
      loop,
      slidesPerView,
      spaceBetween,
      centeredSlides: centered,
      grabCursor: true,
      keyboard: { enabled: true },
    };

    if (effect === 'fade') {
      config.effect = 'fade';
      config.fadeEffect = { crossFade: true };
    }

    if (autoplay) {
      config.autoplay = {
        delay,
        disableOnInteraction: false,
      };
    }

    if (showPagination && paginationEl) {
      config.pagination = {
        el: paginationEl,
        clickable: true,
        type: paginationType,
      };
    }

    if (showNavigation && nextEl && prevEl) {
      config.navigation = {
        nextEl,
        prevEl,
      };
    }

    swiperInstance.current = new Swiper(swiperEl.current, config);
    setIsPlaying(Boolean(autoplay));

    return () => {
      swiperInstance.current?.destroy(true, true);
      swiperInstance.current = null;
    };
  }, [
    loop,
    slidesPerView,
    spaceBetween,
    centered,
    effect,
    autoplay,
    delay,
    showPagination,
    paginationType,
    showNavigation,
  ]);

  function toggleAutoplay() {
    const swiper = swiperInstance.current;
    if (!swiper?.autoplay) return;

    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
      setIsPlaying(false);
    } else {
      swiper.autoplay.start();
      setIsPlaying(true);
    }
  }

  return (
    <CarouselContext.Provider value={contextValue}>
      <div ref={rootRef} className={rootClass} {...rest} {...rippleAttrs}>
        <div
          ref={swiperEl}
          className="swiper"
          role="region"
          aria-roledescription="carousel"
          aria-label={ariaLabel}
        >
          <div className="swiper-wrapper">{children}</div>
          {showNavigation ? (
            <>
              <div className="swiper-button-prev" aria-label="이전 슬라이드" />
              <div className="swiper-button-next" aria-label="다음 슬라이드" />
            </>
          ) : null}
          {showPagination ? <div className="swiper-pagination" /> : null}
        </div>
        {autoplayToggle ? (
          <button
            {...childRippleAttrs}
            type="button"
            className="carousel_toggle"
            data-carousel-autoplay-toggle
            aria-label={isPlaying ? '슬라이드 정지' : '슬라이드 재생'}
            aria-pressed={String(isPlaying)}
            onClick={toggleAutoplay}
          >
            <svg
              className="carousel_toggle-icon carousel_toggle-icon-pause"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
            <svg
              className="carousel_toggle-icon carousel_toggle-icon-play"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        ) : null}
      </div>
    </CarouselContext.Provider>
  );
}
