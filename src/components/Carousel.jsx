import {
  Children,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { useRipple } from '@/hooks/useRipple';
import { useCarouselDemoCode } from '@/hooks/useDemoCode';
import { normalizeDomProps } from '@/utils/normalize-dom-props';
import { cn } from '@/utils/cn';

/**
 * Carousel — Swiper 기반 슬라이드 캐러셀
 *
 * CarouselSlide 자식을 children으로 받습니다.
 * role="region" + aria-roledescription="carousel" + aria-label(필수)로 영역을 표시합니다.
 *
 * Swiper는 마운트 후 초기화되며, 언마운트 시 destroy됩니다.
 */
export const CarouselContext = createContext(null);

/** rotate가 크면 측면 슬라이드 글자가 뒤집혀 보임 */
const coverflowTiltEffect = {
  rotate: 24,
  stretch: 0,
  depth: 140,
  modifier: 1,
  slideShadows: true,
};

/** 좌우 기울임 없이 축소 — depth·scale이 크면 카드가 작아지고 peek가 과다 노출됨 */
const coverflowRiseEffect = {
  rotate: 0,
  stretch: 0,
  depth: 28,
  scale: 0.92,
  modifier: 1,
  slideShadows: false,
};

function resolveCoverflowSides(raw) {
  if (raw === '1' || Number(raw) === 1) return 1;
  if (raw === '2' || Number(raw) === 2) return 2;
  // 1.5 · auto · 구 2.5 호환
  if (raw === 'auto' || raw === '1.5' || Number(raw) === 1.5) return 1.5;
  if (raw === '2.5' || Number(raw) === 2.5) return 2;
  return 1.5;
}

/** Coverflow loop 최소 슬라이드 수 (sides별) */
function coverflowLoopMinSlides(sides) {
  if (sides === 1) return 6;
  if (sides === 1.5) return 8;
  return 10;
}

/**
 * 탭 네비형 썸네일 스크롤 — 가능하면 활성 항목을 가운데, 양끝은 클램프(시작 좌측·끝 우측)
 */
function scrollActiveThumbIntoView(swiper, index) {
  if (!swiper || swiper.destroyed) return;

  swiper.updateSize?.();
  swiper.updateSlides?.();

  const total = swiper.slides?.length ?? 0;
  if (!total || !swiper.size) return;

  const i = Math.max(0, Math.min(index, total - 1));
  const slideEl = swiper.slides[i];
  if (!slideEl) return;

  let slideOffset = swiper.slidesGrid?.[i];
  let slideSize = swiper.slidesSizesGrid?.[i];

  if (slideOffset == null || slideSize == null) {
    slideOffset = slideEl.offsetLeft ?? 0;
    slideSize = slideEl.offsetWidth ?? 0;
  }

  let translate = -(slideOffset - swiper.size / 2 + slideSize / 2);
  const min = swiper.minTranslate();
  const max = swiper.maxTranslate();
  translate = Math.min(min, Math.max(max, translate));

  const current = typeof swiper.getTranslate === 'function' ? swiper.getTranslate() : 0;
  if (Math.abs(current - translate) < 0.5) return;

  swiper.setTransition(swiper.params.speed ?? 300);
  swiper.setTranslate(translate);
  swiper.updateProgress(translate);
  swiper.updateActiveIndex?.();
  swiper.updateSlidesClasses?.();
}

/** Thumbs 모듈 slideTo(좌측 정렬) 이후에 다시 가운데로 맞춤 */
function scheduleThumbScroll(swiper, index) {
  if (!swiper || swiper.destroyed) return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scrollActiveThumbIntoView(swiper, index);
    });
  });
}

function bindThumbsScroll(swiper) {
  if (!swiper || swiper.destroyed) return;

  const resolveThumbIndex = () => {
    const activeEl = Array.from(swiper.slides).find((slide) =>
      slide.classList?.contains('swiper-slide-thumb-active'),
    );
    if (activeEl) return swiper.slides.indexOf(activeEl);
    return swiper.clickedIndex ?? swiper.activeIndex;
  };

  const sync = () => {
    scheduleThumbScroll(swiper, resolveThumbIndex());
  };

  swiper.on('click', () => {
    if (swiper.clickedIndex != null) {
      scheduleThumbScroll(swiper, swiper.clickedIndex);
    }
  });
  // Thumbs/slideTo가 좌측 정렬로 끝낸 뒤 가운데로 재조정
  swiper.on('slideChange', sync);
  swiper.on('slideChangeTransitionEnd', sync);

  // 시작은 좌측 정렬(잘림 방지)
  requestAnimationFrame(() => {
    if (swiper.destroyed) return;
    swiper.setTransition(0);
    swiper.setTranslate(0);
    swiper.updateProgress(0);
  });
}

/** 메인 갤러리 → 썸네일 가운데 스크롤 동기화 (좌측 이동 시 잘림 방지) */
function bindMainThumbsSync(mainSwiper, thumbsSwiper) {
  if (!mainSwiper || mainSwiper.destroyed) return;
  if (!thumbsSwiper || thumbsSwiper.destroyed) return;

  const sync = () => {
    const index = mainSwiper.realIndex ?? mainSwiper.activeIndex ?? 0;
    scheduleThumbScroll(thumbsSwiper, index);
  };

  mainSwiper.on('slideChange', sync);
  mainSwiper.on('slideChangeTransitionStart', sync);
  mainSwiper.on('slideChangeTransitionEnd', sync);
}

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
  initialSlide = 0,
  slidesPerView = 1,
  slidesPerGroup = 1,
  spaceBetween = 0,
  centered,
  pagination = true,
  navigation = true,
  gridRows = 1,
  gridFill = 'row',
  coverflowStyle = 'tilt',
  coverflowSides = 1.5,
  coverflowEffect,
  thumbs = null,
  thumbsControl,
  watchSlidesProgress,
  freeMode,
  onSwiper,
  children,
  className,
  style,
  ...rest
}) {
  const rootRef = useRef(null);
  const swiperElRef = useRef(null);
  const swiperInstanceRef = useRef(null);
  const updateCoverflowSlideSizeRef = useRef(null);
  const coverflowEffectiveGapRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [coverflowSlideWidth, setCoverflowSlideWidth] = useState('');

  const { rippleAttrs, childRippleAttrs } = useRipple(
    { ripple },
    { mode: 'container' },
  );

  // Children.count로 슬라이드 수를 신뢰성 있게 계산 — CarouselSlide 마운트 순서에 의존하지 않음
  const slideCount = Children.count(children);
  const slideCountRef = useRef(slideCount);
  slideCountRef.current = slideCount;

  // CarouselSlide가 마운트 시 등록 호출 — 데모 코드 파리티용(실제 slideCount는 children 기준)
  const registerSlide = useCallback(() => {}, []);
  const unregisterSlide = useCallback(() => {}, []);
  const contextValue = useMemo(
    () => ({ registerSlide, unregisterSlide }),
    [registerSlide, unregisterSlide],
  );

  const showNavigation = navigation !== false;
  const showPagination = pagination !== false;
  const showAutoplayToggle = Boolean(autoplay || autoplayToggle);
  const isCoverflow = effect === 'coverflow';
  const isCoverflowRise = isCoverflow && coverflowStyle === 'rise';
  const isGrid = gridRows > 1;
  const isCustomPagination = pagination === 'custom';
  const isProgressPagination = pagination === 'progressbar';

  const resolvedCoverflowSides = resolveCoverflowSides(coverflowSides);

  // coverflow: CSS 최소너비 + 컨테이너 등분(max) → slidesPerView auto
  const resolvedSlidesPerView = isCoverflow
    ? 'auto'
    : multi || slidesPerView === 'auto'
      ? 'auto'
      : slidesPerView;

  const coverflowSidesClass = !isCoverflow
    ? null
    : resolvedCoverflowSides === 1
      ? 'carousel_coverflow-sides-1'
      : resolvedCoverflowSides === 2
        ? 'carousel_coverflow-sides-2'
        : 'carousel_coverflow-sides-15';

  const paginationType =
    pagination === 'fraction' ? 'fraction' : pagination === 'progressbar' ? 'progressbar' : 'bullets';

  /**
   * 슬라이드 크기 = 항상 sides=1 (컨테이너를 3등분).
   * coverflow-sides는 간격만 바꿔 좌우 peek 개수를 맞춤 (1.5·2는 음수 간격으로 겹침).
   */
  function updateCoverflowSlideSize() {
    if (!isCoverflow || !rootRef.current) {
      setCoverflowSlideWidth('');
      coverflowEffectiveGapRef.current = null;
      return;
    }

    const containerEl = swiperElRef.current || rootRef.current;
    const containerW = containerEl.clientWidth;
    if (!containerW) return;

    const sides = resolvedCoverflowSides;
    const baseGap = Number(spaceBetween) || 0;
    const slideW = (containerW - baseGap * 2) / 3;
    const gapEff = (containerW - slideW) / (2 * sides) - slideW;

    setCoverflowSlideWidth(`${Math.round(slideW * 100) / 100}px`);
    coverflowEffectiveGapRef.current = Math.round(gapEff * 100) / 100;

    const swiper = swiperInstanceRef.current;
    if (swiper && !swiper.destroyed) {
      swiper.params.spaceBetween = coverflowEffectiveGapRef.current;
    }
  }
  updateCoverflowSlideSizeRef.current = updateCoverflowSlideSize;

  function resolveThumbsSwiper() {
    if (!thumbs || thumbs.destroyed) return null;
    return thumbs;
  }

  function canEnableLoop() {
    if (!loop || slideCount < 2) return false;
    if (isGrid) return false;

    if (isCoverflow) {
      return slideCount >= coverflowLoopMinSlides(resolvedCoverflowSides);
    }

    if (resolvedSlidesPerView === 'auto' || multi || slidesPerView === 'auto') {
      return slideCount >= 4;
    }

    const view = typeof resolvedSlidesPerView === 'number' ? resolvedSlidesPerView : 1;
    const minSlides = view + 1 + (centered ? 1 : 0);

    return slideCount >= minSlides;
  }

  function buildSwiperConfig() {
    const root = rootRef.current;
    const paginationEl = root?.querySelector('.swiper-pagination');
    const nextEl = root?.querySelector('.swiper-button-next');
    const prevEl = root?.querySelector('.swiper-button-prev');

    const config = {
      loop: canEnableLoop(),
      initialSlide,
      slidesPerView: resolvedSlidesPerView,
      spaceBetween:
        isCoverflow && coverflowEffectiveGapRef.current != null
          ? coverflowEffectiveGapRef.current
          : spaceBetween,
      centeredSlides: Boolean(centered) || isCoverflow,
      grabCursor: true,
      keyboard: { enabled: true },
      observer: true,
      observeParents: true,
      watchOverflow: !isCoverflow,
      watchSlidesProgress: Boolean(watchSlidesProgress || thumbsControl || isCoverflow),
    };

    if (isCoverflow) {
      config.centeredSlides = true;
      if (config.loop) {
        // loopAdditionalSlides를 키우면 slides.length < slidesPerView+loopedSlides 로 loop가 꺼짐
        config.loopAdditionalSlides = 0;
        config.loopAddBlankSlides = false;
      }
    }

    if (slidesPerGroup > 1) {
      config.slidesPerGroup = slidesPerGroup;
    }

    if (freeMode) {
      config.freeMode = true;
    }

    if (thumbsControl) {
      // 탭 네비형: 기본 좌측 정렬. 활성 이동은 scrollActiveThumbIntoView로 처리
      config.slideToClickedSlide = true;
    }

    if (effect === 'fade') {
      config.effect = 'fade';
      config.fadeEffect = { crossFade: true };
    }

    if (isCoverflow) {
      config.effect = 'coverflow';
      config.coverflowEffect = isCoverflowRise
        ? { ...coverflowRiseEffect, ...(coverflowEffect || {}) }
        : { ...coverflowTiltEffect, ...(coverflowEffect || {}) };
    }

    if (isGrid) {
      config.grid = {
        rows: gridRows,
        fill: gridFill === 'column' ? 'column' : 'row',
      };
    }

    if (autoplay) {
      config.autoplay = {
        delay,
        disableOnInteraction: false,
      };
    }

    if (showPagination && paginationEl) {
      const paginationConfig = {
        el: paginationEl,
        clickable: true,
        type: paginationType,
      };

      if (isCustomPagination) {
        paginationConfig.renderBullet = (index, bulletClassName) =>
          `<span class="${bulletClassName}">${index + 1}</span>`;
      }

      config.pagination = paginationConfig;
    }

    if (showNavigation && nextEl && prevEl) {
      config.navigation = { nextEl, prevEl };
    }

    const thumbsSwiper = resolveThumbsSwiper();
    if (thumbsSwiper) {
      config.thumbs = {
        swiper: thumbsSwiper,
        // Thumbs 기본 slideTo는 부분 노출만으로 스크롤을 건너뛰어 좌측 잘림이 생김 → 직접 스크롤
        autoScrollOffset: 0,
      };
    }

    return config;
  }

  function destroySwiper() {
    swiperInstanceRef.current?.destroy(true, true);
    swiperInstanceRef.current = null;
  }

  /** DOM 마운트 후 Swiper 인스턴스 생성. pagination·navigation은 루트 내 셀렉터로 연결 */
  function initSwiper() {
    if (!swiperElRef.current || slideCountRef.current === 0) return;

    updateCoverflowSlideSize();
    destroySwiper();

    const instance = new Swiper(swiperElRef.current, buildSwiperConfig());
    swiperInstanceRef.current = instance;
    setIsPlaying(Boolean(autoplay));
    onSwiper?.(instance);

    const thumbsSwiper = resolveThumbsSwiper();
    if (thumbsControl) {
      bindThumbsScroll(instance);
    } else if (thumbsSwiper) {
      bindMainThumbsSync(instance, thumbsSwiper);
    }

    requestAnimationFrame(() => {
      const swiper = swiperInstanceRef.current;
      if (!swiper || swiper.destroyed) return;

      updateCoverflowSlideSize();
      swiper.update();

      // loop 생성 후 real index로만 맞춤
      if (isCoverflow && swiper.params.loop) {
        const index = initialSlide || 0;
        if (typeof swiper.slideToLoop === 'function') {
          swiper.slideToLoop(index, 0, false);
        }
      }

      if (!thumbsControl && thumbsSwiper) {
        const index = swiper.realIndex ?? 0;
        scheduleThumbScroll(thumbsSwiper, index);
      }
    });
  }

  function toggleAutoplay() {
    const swiper = swiperInstanceRef.current;
    if (!swiper?.autoplay) return;

    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
      setIsPlaying(false);
    } else {
      swiper.autoplay.start();
      setIsPlaying(true);
    }
  }

  useCarouselDemoCode(
    {
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
      initialSlide,
      slidesPerView,
      slidesPerGroup,
      spaceBetween,
      centered,
      pagination,
      navigation,
      gridRows,
      gridFill,
      coverflowStyle,
      coverflowSides,
      coverflowEffect,
      thumbs,
      thumbsControl,
      watchSlidesProgress,
      freeMode,
    },
    slideCountRef,
    rootRef,
    { className, style, ...rest },
  );

  // 재초기화 — Vue의 swiperConfigKeys watch(flush:'post')와 동일한 의존성
  useEffect(() => {
    if (slideCount === 0) return;
    initSwiper();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    loop,
    initialSlide,
    slideCount,
    multi,
    dotsOutside,
    slidesPerView,
    slidesPerGroup,
    spaceBetween,
    centered,
    effect,
    autoplay,
    delay,
    pagination,
    navigation,
    gridRows,
    gridFill,
    coverflowStyle,
    coverflowSides,
    coverflowEffect,
    thumbs,
    thumbsControl,
    watchSlidesProgress,
    freeMode,
  ]);

  useEffect(() => {
    const rootEl = rootRef.current;
    if (!rootEl || typeof ResizeObserver === 'undefined') return undefined;

    const observer = new ResizeObserver(() => {
      updateCoverflowSlideSizeRef.current?.();
      swiperInstanceRef.current?.update();
    });
    observer.observe(rootEl);

    return () => {
      observer.disconnect();
      destroySwiper();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rootClass = useMemo(() => {
    const classes = ['carousel'];
    if (demo) classes.push('carousel_demo');
    if (multi) classes.push('carousel_multi');
    if (dotsOutside) classes.push('carousel_dots-outside');
    if (isCoverflow) classes.push('carousel_coverflow');
    if (isCoverflowRise) classes.push('carousel_coverflow-rise');
    if (coverflowSidesClass) classes.push(coverflowSidesClass);
    if (isGrid) classes.push('carousel_grid');
    if (isCustomPagination) classes.push('carousel_pagination-custom');
    if (isProgressPagination) classes.push('carousel_pagination-progress');
    if (thumbsControl) classes.push('carousel_thumbs');
    if (showAutoplayToggle && !isPlaying) classes.push('is-autoplay-paused');
    return classes;
  }, [
    demo,
    multi,
    dotsOutside,
    isCoverflow,
    isCoverflowRise,
    coverflowSidesClass,
    isGrid,
    isCustomPagination,
    isProgressPagination,
    thumbsControl,
    showAutoplayToggle,
    isPlaying,
  ]);

  const coverflowCssVars = useMemo(() => {
    if (!isCoverflow) return undefined;
    const vars = {
      // 너비 계산 기준 간격(sides=1). peek용 유효 간격과 별개
      '--carousel-coverflow-gap': `${spaceBetween}px`,
    };
    if (coverflowSlideWidth) {
      vars['--carousel-coverflow-slide-width'] = coverflowSlideWidth;
    }
    return vars;
  }, [isCoverflow, spaceBetween, coverflowSlideWidth]);

  const rootStyle = coverflowCssVars || style ? { ...coverflowCssVars, ...style } : undefined;

  const domRest = normalizeDomProps(rest);

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        ref={rootRef}
        className={cn(rootClass, className)}
        style={rootStyle}
        {...rippleAttrs}
        {...domRest}
      >
        <div
          ref={swiperElRef}
          className="swiper"
          role="region"
          aria-roledescription="carousel"
          aria-label={ariaLabel}
          data-swiper-space-between={spaceBetween > 0 ? String(spaceBetween) : undefined}
          data-swiper-effect={effect || undefined}
          data-swiper-coverflow-style={
            isCoverflow && coverflowStyle !== 'tilt' ? coverflowStyle : undefined
          }
          data-swiper-coverflow-sides={isCoverflow ? String(resolvedCoverflowSides) : undefined}
          data-swiper-pagination={typeof pagination === 'string' ? pagination : undefined}
          data-swiper-grid-rows={gridRows > 1 ? String(gridRows) : undefined}
          data-swiper-slides-per-group={slidesPerGroup > 1 ? String(slidesPerGroup) : undefined}
          data-swiper-initial-slide={initialSlide > 0 ? String(initialSlide) : undefined}
        >
          <div className="swiper-wrapper">{children}</div>
          {showNavigation ? (
            <div className="swiper-button-prev" aria-label="이전 슬라이드" />
          ) : null}
          {showNavigation ? (
            <div className="swiper-button-next" aria-label="다음 슬라이드" />
          ) : null}
          {showPagination && !dotsOutside ? <div className="swiper-pagination" /> : null}
        </div>
        {showPagination && dotsOutside ? <div className="swiper-pagination" /> : null}
        {showAutoplayToggle ? (
          <button
            type="button"
            className="carousel_toggle"
            data-carousel-autoplay-toggle=""
            aria-label={isPlaying ? '슬라이드 정지' : '슬라이드 재생'}
            aria-pressed={String(isPlaying)}
            onClick={toggleAutoplay}
            {...childRippleAttrs}
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
