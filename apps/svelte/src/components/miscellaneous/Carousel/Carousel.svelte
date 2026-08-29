<!--
  Carousel 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script>
import { tick, onMount, onDestroy } from 'svelte';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';



let {
  ariaLabel = '콘텐츠 슬라이드',
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
  thumbsControl = false,
  watchSlidesProgress = false,
  freeMode = false,
  ripple = true,
  onSwiper,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge,
  class: className,
  ...rest
} = $props();입니다.
  loop: Boolean, // 순환 재생입니다.
  initialSlide: { type: Number, default: 0 }, // 초기 슬라이드 인덱스입니다.
  slidesPerView: { type: [Number, String], default: 1 }, // 한 화면 슬라이드 수입니다.
  slidesPerGroup: { type: Number, default: 1 }, // 한 번에 넘길 슬라이드 수입니다.
  spaceBetween: { type: Number, default: 0 }, // 슬라이드 간격(px)입니다.
  centered: Boolean, // 활성 슬라이드 가운데 정렬입니다.
  pagination: { type: [Boolean, String], default: true }, // 페이지네이션 표시 여부·유형입니다.
  navigation: { type: Boolean, default: true }, // 이전·다음 버튼을 표시합니다.
  gridRows: { type: Number, default: 1 }, // 그리드 행 수입니다.
  gridFill: { type: String, default: 'row' }, // 그리드 채움 방향입니다.
  coverflowStyle: { type: String, default: 'tilt' }, // coverflow 시각 스타일입니다.
  coverflowSides: { type: [Number, String], default: 1.5 }, // coverflow 옆면 노출 수입니다.
  coverflowEffect: Object, // coverflowEffect Swiper 옵션을 덮어씁니다.
  thumbs: Object, // 썸네일 연동용 Swiper 인스턴스입니다.
  thumbsControl: Boolean, // 썸네일 클릭 이동 모드입니다.
  watchSlidesProgress: Boolean, // 슬라이드 진행도 감시입니다.
  freeMode: Boolean, // 자유 스크롤 모드입니다.
  ripple: { type: Boolean, default: true }, // 내비·토글 리플 효과입니다.
});


let rootRef = $state(null);
let swiperRef = $state(null);
let instance = $state(null);
let isPlaying = $state(Boolean(autoplay));
let resizeObserver = null;
let isCoverflow = $derived(effect === 'coverflow');
let isGrid = $derived(gridRows > 1);
let coverflowSides = $derived(Number(coverflowSides) === 1
    ? 1
    : Number(coverflowSides) === 2 || Number(coverflowSides) === 2.5
      ? 2
      : 1.5,
);
let resolvedSlidesPerView = $derived(isCoverflow || multi || slidesPerView === 'auto' ? 'auto' : slidesPerView,
);
let canLoop = $derived({
  const count = swiperRef?.querySelectorAll('.swiper-slide').length ?? 0;
  if (!loop || isGrid || count < 2) return false;
  if (isCoverflow)
    return count >= (coverflowSides === 1 ? 6 : coverflowSides === 1.5 ? 8 : 10);
  if (resolvedSlidesPerView === 'auto') return count >= 4;
  return (
    count >=
    Math.max(2, Math.ceil(Number(resolvedSlidesPerView) || 1) + 1 + (centered ? 1 : 0))
  );
});
function normalizeInitialSlide(value, count, loop) {
  const index = Number.isFinite(Number(value)) ? Math.trunc(Number(value)) : 0;
  if (count < 1) return 0;
  return loop ? ((index % count) + count) % count : Math.min(Math.max(index, 0), count - 1);
}
function updateCoverflowLayout() {
  const root = rootRef;
  const element = swiperRef;
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
  const effectiveGap = (width - slideWidth) / (2 * coverflowSides) - slideWidth;
  root.style.setProperty(
    '--carousel-coverflow-slide-width',
    `${Math.round(slideWidth * 100) / 100}px`,
  );
  return Math.round(effectiveGap * 100) / 100;
}
let classes = $derived([
    'carousel',
    'carousel_demo',
    multi && 'carousel_multi',
    dotsOutside && 'carousel_dots-outside',
    isCoverflow && 'carousel_coverflow',
    isCoverflow && coverflowStyle === 'rise' && 'carousel_coverflow-rise',
    isCoverflow &&
      `carousel_coverflow-sides-${coverflowSides === 1.5 ? '15' : coverflowSides}`,
    isGrid && 'carousel_grid',
    pagination === 'custom' && 'carousel_pagination-custom',
    pagination === 'progressbar' && 'carousel_pagination-progress',
    thumbsControl && 'carousel_thumbs',
    size !== 'md' && ['sm', 'lg'].includes(size) && `carousel_${size}`,
    (autoplay || autoplayToggle) && !isPlaying && 'is-autoplay-paused',
    className,
  ].filter(Boolean),
);
let restAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
let configKeys = $derived([
  autoplay,
  centered,
  coverflowEffect,
  coverflowSides,
  coverflowStyle,
  delay,
  effect,
  freeMode,
  gridFill,
  gridRows,
  initialSlide,
  loop,
  multi,
  navigation,
  pagination,
  slidesPerGroup,
  slidesPerView,
  spaceBetween,
  thumbs,
  thumbsControl,
  watchSlidesProgress,
]);

function destroy() {
  instance?.destroy(true, true);
  instance = null;
}

async function init() {
  await tick();
  const element = swiperRef;
  const count = element?.querySelectorAll('.swiper-slide').length ?? 0;
  if (!element || !count) return;
  destroy();
  const paginationEl =
    rootRef?.querySelector(':scope > .swiper-pagination') ??
    element.querySelector('.swiper-pagination');
  const startIndex = normalizeInitialSlide(initialSlide, count, canLoop);
  const resolvedSpaceBetween = updateCoverflowLayout();
  const config = {
    initialSlide: startIndex,
    slidesPerView: resolvedSlidesPerView,
    slidesPerGroup: slidesPerGroup,
    spaceBetween: resolvedSpaceBetween,
    centeredSlides: centered || isCoverflow,
    loop: canLoop,
    grabCursor: true,
    keyboard: { enabled: true },
    observer: true,
    observeParents: true,
    watchSlidesProgress: watchSlidesProgress || thumbsControl || isCoverflow,
  };
  if (navigation)
    config.navigation = {
      prevEl: element.querySelector('.swiper-button-prev'),
      nextEl: element.querySelector('.swiper-button-next'),
    };
  if (pagination)
    config.pagination = {
      el: paginationEl,
      clickable: true,
      type: ['fraction', 'progressbar'].includes(pagination) ? pagination : 'bullets',
      ...(pagination === 'custom'
        ? {
            renderBullet: (index, bulletClass) =>
              `<span class="${bulletClass}">${index + 1}</span>`,
          }
        : {}),
    };
  if (autoplay) config.autoplay = { delay: delay, disableOnInteraction: false };
  if (isGrid)
    config.grid = { rows: gridRows, fill: gridFill === 'column' ? 'column' : 'row' };
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
  instance = new Swiper(element, config);
  isPlaying = Boolean(autoplay);
  onSwiper?.(instance);
  window.requestAnimationFrame(() => {
    const swiper = instance;
    if (!swiper || swiper.destroyed) return;
    swiper.update();
    if (canLoop && typeof swiper.slideToLoop === 'function')
      swiper.slideToLoop(startIndex, 0, false);
  });
}

function toggleAutoplay() {
  if (!instance?.autoplay) return;
  if (instance.autoplay.running) instance.autoplay.stop();
  else instance.autoplay.start();
  isPlaying = instance.autoplay.running;
}

$effect(configKeys, init, { flush: 'post' });
onMount(() => {
  init();
  if (typeof ResizeObserver !== 'undefined' && rootRef) {
    resizeObserver = new ResizeObserver(() => {
      const gap = updateCoverflowLayout();
      if (!instance || instance.destroyed) return;
      instance.params.spaceBetween = gap;
      instance.update();
    });
    resizeObserver.observe(rootRef);
  }
});
onDestroy(() => {
  resizeObserver?.disconnect();
  destroy();
});
defineExpose({ swiper: instance });
</script>

<div bind:this={rootRef} {...restAttrs} class={classes} data-component="Carousel">
    <div
      bind:this={swiperRef}
      class="swiper"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      data-swiper
      data-swiper-effect={effect || undefined}
      data-swiper-space-between={spaceBetween || undefined}
    >
      <div class="swiper-wrapper">{@render children?.()}</div>
      {#if navigation}<div
       
        class="swiper-button-prev"
        aria-label="이전 슬라이드"
        data-ripple={ripple ? 'surface' : 'false'}
      />
      {#if navigation}<div
       
        class="swiper-button-next"
        aria-label="다음 슬라이드"
        data-ripple={ripple ? 'surface' : 'false'}
      />
      {#if pagination && !dotsOutside}<div class="swiper-pagination" />
    </div>
    {#if pagination && dotsOutside}<div class="swiper-pagination" />
    {#if autoplay || autoplayToggle}<button
     
      type="button"
      class="carousel_toggle"
      data-carousel-autoplay-toggle
      data-ripple={ripple ? 'surface' : 'false'}
      aria-label={isPlaying ? '슬라이드 정지' : '슬라이드 재생'}
      aria-pressed={isPlaying}
      onclick={toggleAutoplay}
    >
      <svg
        class="carousel_toggle-icon carousel_toggle-icon-pause"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect x="6" y="5" width="4" height="14" rx="1" />
        <rect x="14" y="5" width="4" height="14" rx="1" />
      </svg>
      <svg
        class="carousel_toggle-icon carousel_toggle-icon-play"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  </div>
