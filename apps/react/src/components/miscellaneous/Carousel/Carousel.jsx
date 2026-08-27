/**
 * Carousel 원본 구현.
 * 컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
 */
import { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const CarouselContext = createContext(null);

function resolveCoverflowSides(value) {
  if (Number(value) === 1) return 1;
  if (Number(value) === 2 || Number(value) === 2.5) return 2;
  return 1.5;
}

function coverflowLoopMinSlides(sides) {
  if (sides === 1) return 6;
  if (sides === 1.5) return 8;
  return 10;
}

export function normalizeInitialSlide(value, count, loop) {
  const index = Number.isFinite(Number(value)) ? Math.trunc(Number(value)) : 0;
  if (count < 1) return 0;
  return loop ? ((index % count) + count) % count : Math.min(Math.max(index, 0), count - 1);
}

export function updateCoverflowStyles(
  root,
  element,
  isCoverflow,
  spaceBetween,
  coverflowSideCount,
) {
  if (!root || !element) return Number(spaceBetween) || 0;
  if (!isCoverflow) {
    root.style.removeProperty('--carousel-coverflow-gap');
    root.style.removeProperty('--carousel-coverflow-slide-width');
    return Number(spaceBetween) || 0;
  }
  const baseGap = Number(spaceBetween) || 0;
  const width = element.clientWidth || root.clientWidth;
  root.style.setProperty('--carousel-coverflow-gap', `${baseGap}px`);
  if (!width) return baseGap;
  const slideWidth = (width - baseGap * 2) / 3;
  const effectiveGap = (width - slideWidth) / (2 * coverflowSideCount) - slideWidth;
  root.style.setProperty(
    '--carousel-coverflow-slide-width',
    `${Math.round(slideWidth * 100) / 100}px`,
  );
  return Math.round(effectiveGap * 100) / 100;
}

export function Carousel({
  ariaLabel = '콘텐츠 슬라이드',
  children,
  className = '',
  style,
  size = 'md',
  multi = false,
  dotsOutside = false,
  autoplayToggle = false,
  effect,
  autoplay = false,
  delay = 4000,
  loop = false,
  initialSlide = 0,
  slidesPerView = 1,
  slidesPerGroup = 1,
  spaceBetween = 0,
  centered = false,
  pagination = true,
  navigation = true,
  gridRows = 1,
  gridFill = 'row',
  coverflowStyle = 'tilt',
  coverflowSides = 1.5,
  coverflowEffect,
  thumbs = null,
  thumbsControl = false,
  watchSlidesProgress = false,
  freeMode = false,
  onSwiper,
  ripple = true,
  ...props
}) {
  const rootRef = useRef(null);
  const swiperRef = useRef(null);
  const instanceRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(Boolean(autoplay));
  const isCoverflow = effect === 'coverflow';
  const isGrid = gridRows > 1;
  const coverflowSideCount = resolveCoverflowSides(coverflowSides);
  const resolvedSlidesPerView =
    isCoverflow || multi || slidesPerView === 'auto' ? 'auto' : slidesPerView;
  const showPagination = pagination !== false;
  const showNavigation = navigation !== false;
  const updateCoverflowLayout = useCallback(
    () =>
      updateCoverflowStyles(
        rootRef.current,
        swiperRef.current,
        isCoverflow,
        spaceBetween,
        coverflowSideCount,
      ),
    [coverflowSideCount, isCoverflow, spaceBetween],
  );

  useEffect(() => {
    if (swiperRef.current) {
      const slideCount = swiperRef.current.querySelectorAll(
        ':scope > .swiper-wrapper > .swiper-slide',
      ).length;
      if (slideCount === 0) return undefined;
      const canLoop = (() => {
        if (!loop || isGrid || slideCount < 2) return false;
        if (isCoverflow) return slideCount >= coverflowLoopMinSlides(coverflowSideCount);
        if (resolvedSlidesPerView === 'auto') return slideCount >= 4;
        return (
          slideCount >=
          Math.max(2, Math.ceil(Number(resolvedSlidesPerView) || 1) + 1 + (centered ? 1 : 0))
        );
      })();
      const startIndex = normalizeInitialSlide(initialSlide, slideCount, canLoop);
      instanceRef.current?.destroy(true, true);
      const paginationEl =
        rootRef.current?.querySelector(':scope > .swiper-pagination') ??
        swiperRef.current.querySelector('.swiper-pagination');
      const resolvedSpaceBetween = updateCoverflowLayout();
      const config = {
        initialSlide: startIndex,
        slidesPerView: resolvedSlidesPerView,
        slidesPerGroup,
        spaceBetween: resolvedSpaceBetween,
        centeredSlides: centered || isCoverflow,
        loop: canLoop,
        grabCursor: true,
        keyboard: { enabled: true },
        observer: true,
        observeParents: true,
        watchSlidesProgress: Boolean(watchSlidesProgress || thumbsControl || isCoverflow),
      };
      if (showNavigation)
        config.navigation = {
          prevEl: swiperRef.current.querySelector('.swiper-button-prev'),
          nextEl: swiperRef.current.querySelector('.swiper-button-next'),
        };
      if (showPagination)
        config.pagination = {
          el: paginationEl,
          clickable: true,
          type: pagination === 'fraction' || pagination === 'progressbar' ? pagination : 'bullets',
          ...(pagination === 'custom'
            ? {
                renderBullet: (index, bulletClass) =>
                  `<span class="${bulletClass}">${index + 1}</span>`,
              }
            : {}),
        };
      if (autoplay) config.autoplay = { delay, disableOnInteraction: false };
      if (isGrid) config.grid = { rows: gridRows, fill: gridFill === 'column' ? 'column' : 'row' };
      if (freeMode) config.freeMode = true;
      if (thumbsControl) config.slideToClickedSlide = true;
      if (thumbs && !thumbs.destroyed) config.thumbs = { swiper: thumbs };
      if (effect === 'fade')
        Object.assign(config, { effect: 'fade', fadeEffect: { crossFade: true } });
      if (isCoverflow)
        Object.assign(config, {
          effect: 'coverflow',
          coverflowEffect: {
            ...(coverflowStyle === 'rise'
              ? { rotate: 0, stretch: 0, depth: 28, scale: 0.92, modifier: 1, slideShadows: false }
              : { rotate: 24, stretch: 0, depth: 140, modifier: 1, slideShadows: true }),
            ...coverflowEffect,
          },
        });
      if (isCoverflow && canLoop)
        Object.assign(config, { loopAdditionalSlides: 0, loopAddBlankSlides: false });
      const instance = new Swiper(swiperRef.current, config);
      instanceRef.current = instance;
      setIsPlaying(Boolean(autoplay));
      onSwiper?.(instance);
      const frame = window.requestAnimationFrame(() => {
        if (instance.destroyed) return;
        instance.update();
        if (canLoop && typeof instance.slideToLoop === 'function')
          instance.slideToLoop(startIndex, 0, false);
      });
      return () => {
        window.cancelAnimationFrame(frame);
        instance.destroy(true, true);
        if (instanceRef.current === instance) instanceRef.current = null;
      };
    }
  }, [
    autoplay,
    centered,
    coverflowEffect,
    coverflowSideCount,
    coverflowStyle,
    delay,
    effect,
    freeMode,
    gridFill,
    gridRows,
    initialSlide,
    isCoverflow,
    isGrid,
    loop,
    navigation,
    onSwiper,
    pagination,
    resolvedSlidesPerView,
    showNavigation,
    showPagination,
    slidesPerGroup,
    thumbs,
    thumbsControl,
    updateCoverflowLayout,
    watchSlidesProgress,
  ]);

  useEffect(() => {
    if (rootRef.current && typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(() => {
        const gap = updateCoverflowLayout();
        const swiper = instanceRef.current;
        if (!swiper || swiper.destroyed) return;
        swiper.params.spaceBetween = gap;
        swiper.update();
      });
      observer.observe(rootRef.current);
      return () => observer.disconnect();
    }
  }, [updateCoverflowLayout]);

  function toggleAutoplay() {
    const autoplayApi = instanceRef.current?.autoplay;
    if (!autoplayApi) return;
    if (autoplayApi.running) autoplayApi.stop();
    else autoplayApi.start();
    setIsPlaying(autoplayApi.running);
  }

  const classes = [
    'carousel',
    'carousel_demo',
    multi && 'carousel_multi',
    dotsOutside && 'carousel_dots-outside',
    isCoverflow && 'carousel_coverflow',
    isCoverflow && coverflowStyle === 'rise' && 'carousel_coverflow-rise',
    isCoverflow &&
      `carousel_coverflow-sides-${coverflowSideCount === 1.5 ? '15' : coverflowSideCount}`,
    isGrid && 'carousel_grid',
    pagination === 'custom' && 'carousel_pagination-custom',
    pagination === 'progressbar' && 'carousel_pagination-progress',
    thumbsControl && 'carousel_thumbs',
    size !== 'md' && ['sm', 'lg'].includes(size) && `carousel_${size}`,
    (autoplay || autoplayToggle) && !isPlaying && 'is-autoplay-paused',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const context = useMemo(() => ({}), []);

  return (
    <CarouselContext.Provider value={context}>
      <div {...props} ref={rootRef} className={classes} style={style} data-component="Carousel">
        <div
          ref={swiperRef}
          className="swiper"
          role="region"
          aria-roledescription="carousel"
          aria-label={ariaLabel}
          data-swiper=""
          data-swiper-effect={effect || undefined}
          data-swiper-space-between={spaceBetween || undefined}
        >
          <div className="swiper-wrapper">{children}</div>
          {showNavigation ? (
            <div
              className="swiper-button-prev"
              aria-label="이전 슬라이드"
              data-ripple={ripple ? 'surface' : 'false'}
            />
          ) : null}
          {showNavigation ? (
            <div
              className="swiper-button-next"
              aria-label="다음 슬라이드"
              data-ripple={ripple ? 'surface' : 'false'}
            />
          ) : null}
          {showPagination && !dotsOutside ? <div className="swiper-pagination" /> : null}
        </div>
        {showPagination && dotsOutside ? <div className="swiper-pagination" /> : null}
        {autoplay || autoplayToggle ? (
          <button
            type="button"
            className="carousel_toggle"
            data-carousel-autoplay-toggle=""
            data-ripple={ripple ? 'surface' : 'false'}
            aria-label={isPlaying ? '슬라이드 정지' : '슬라이드 재생'}
            aria-pressed={isPlaying}
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

export default Carousel;
