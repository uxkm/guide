/**
 * Carousel 원본 구현.
 * 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다.
 */
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function numberAttr(element, name, fallback) {
  const value = Number.parseFloat(element.getAttribute(name) ?? '');
  return Number.isFinite(value) ? value : fallback;
}

function updateToggle(carousel, toggle, playing) {
  carousel.classList.toggle('is-autoplay-paused', !playing);
  toggle.setAttribute('aria-pressed', String(playing));
  toggle.setAttribute('aria-label', playing ? '슬라이드 정지' : '슬라이드 재생');
}

function normalizeInitialSlide(value, count, loop) {
  const index = Number.isFinite(Number(value)) ? Math.trunc(Number(value)) : 0;
  if (count < 1) return 0;
  return loop ? ((index % count) + count) % count : Math.min(Math.max(index, 0), count - 1);
}

function initElement(element, root) {
  if (element.dataset.swiperReady === 'true') return;
  const carousel = element.closest('.carousel');
  const slides = element.querySelectorAll('.swiper-slide');
  if (!carousel || slides.length === 0) return;

  const effect = element.dataset.swiperEffect;
  const gridRows = numberAttr(element, 'data-swiper-grid-rows', 1);
  const slidesPerViewValue = element.dataset.swiperSlidesPerView;
  const slidesPerView =
    slidesPerViewValue === 'auto' ? 'auto' : numberAttr(element, 'data-swiper-slides-per-view', 1);
  const paginationType = element.dataset.swiperPagination || 'bullets';
  const coverflowSides = Number(element.dataset.swiperCoverflowSides || 1.5);
  const wantsLoop = element.hasAttribute('data-swiper-loop') && gridRows <= 1;
  const canLoop =
    wantsLoop &&
    (effect === 'coverflow'
      ? slides.length >= (coverflowSides === 1 ? 6 : coverflowSides === 1.5 ? 8 : 10)
      : slidesPerView === 'auto'
        ? slides.length >= 4
        : slides.length >=
          Math.max(
            2,
            Math.ceil(Number(slidesPerView) || 1) +
              1 +
              (element.hasAttribute('data-swiper-centered') ? 1 : 0),
          ));
  const startIndex = normalizeInitialSlide(
    numberAttr(element, 'data-swiper-initial-slide', 0),
    slides.length,
    canLoop,
  );
  function updateCoverflowLayout() {
    const baseGap = numberAttr(element, 'data-swiper-space-between', 0);
    if (effect !== 'coverflow') return baseGap;
    const width = element.clientWidth || carousel.clientWidth;
    carousel.style.setProperty('--carousel-coverflow-gap', `${baseGap}px`);
    if (!width) return baseGap;
    const slideWidth = (width - baseGap * 2) / 3;
    const sides = coverflowSides === 1 || coverflowSides === 2 ? coverflowSides : 1.5;
    const effectiveGap = (width - slideWidth) / (2 * sides) - slideWidth;
    carousel.style.setProperty(
      '--carousel-coverflow-slide-width',
      `${Math.round(slideWidth * 100) / 100}px`,
    );
    return Math.round(effectiveGap * 100) / 100;
  }
  const resolvedSpaceBetween = updateCoverflowLayout();
  const paginationEl =
    element.querySelector('.swiper-pagination') ??
    carousel.querySelector(':scope > .swiper-pagination');
  const thumbsSelector = element.dataset.swiperThumbs;
  const thumbsElement = thumbsSelector
    ? (root.querySelector(thumbsSelector) ?? document.querySelector(thumbsSelector))
    : null;
  const config = {
    initialSlide: startIndex,
    slidesPerView: effect === 'coverflow' ? 'auto' : slidesPerView,
    slidesPerGroup: numberAttr(element, 'data-swiper-slides-per-group', 1),
    spaceBetween: resolvedSpaceBetween,
    centeredSlides: element.hasAttribute('data-swiper-centered') || effect === 'coverflow',
    loop: canLoop,
    grabCursor: true,
    keyboard: { enabled: true },
    watchSlidesProgress:
      element.hasAttribute('data-swiper-watch-slides-progress') ||
      carousel.classList.contains('carousel_thumbs'),
  };
  const prevEl = element.querySelector('.swiper-button-prev');
  const nextEl = element.querySelector('.swiper-button-next');
  if (prevEl && nextEl) config.navigation = { prevEl, nextEl };
  if (paginationEl)
    config.pagination = {
      el: paginationEl,
      clickable: true,
      type: ['fraction', 'progressbar'].includes(paginationType) ? paginationType : 'bullets',
      ...(paginationType === 'custom'
        ? { renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>` }
        : {}),
    };
  if (element.hasAttribute('data-swiper-autoplay'))
    config.autoplay = {
      delay: numberAttr(element, 'data-swiper-delay', 4000),
      disableOnInteraction: false,
    };
  if (gridRows > 1)
    config.grid = {
      rows: gridRows,
      fill: element.dataset.swiperGridFill === 'column' ? 'column' : 'row',
    };
  if (element.hasAttribute('data-swiper-free-mode')) config.freeMode = true;
  if (carousel.classList.contains('carousel_thumbs')) config.slideToClickedSlide = true;
  if (thumbsElement?.swiper) config.thumbs = { swiper: thumbsElement.swiper };
  if (effect === 'fade') Object.assign(config, { effect: 'fade', fadeEffect: { crossFade: true } });
  if (effect === 'coverflow')
    Object.assign(config, {
      effect: 'coverflow',
      coverflowEffect:
        element.dataset.swiperCoverflowStyle === 'rise'
          ? { rotate: 0, stretch: 0, depth: 28, scale: 0.92, modifier: 1, slideShadows: false }
          : { rotate: 24, stretch: 0, depth: 140, modifier: 1, slideShadows: true },
    });
  if (effect === 'coverflow' && canLoop)
    Object.assign(config, { loopAdditionalSlides: 0, loopAddBlankSlides: false });

  element.dataset.swiperReady = 'true';
  const swiper = new Swiper(element, config);
  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(() => {
      if (swiper.destroyed) return observer.disconnect();
      swiper.params.spaceBetween = updateCoverflowLayout();
      swiper.update();
    });
    observer.observe(carousel);
  }
  window.requestAnimationFrame(() => {
    if (swiper.destroyed) return;
    swiper.update();
    if (canLoop && typeof swiper.slideToLoop === 'function')
      swiper.slideToLoop(startIndex, 0, false);
  });
  const toggle = carousel.querySelector('[data-carousel-autoplay-toggle]');
  if (toggle && swiper.autoplay) {
    updateToggle(carousel, toggle, true);
    toggle.addEventListener('click', () => {
      if (swiper.autoplay.running) swiper.autoplay.stop();
      else swiper.autoplay.start();
      updateToggle(carousel, toggle, swiper.autoplay.running);
    });
  }
}

export function initCarousel(root = document) {
  const elements = [...root.querySelectorAll('.carousel [data-swiper]')];
  elements
    .filter((element) => !element.hasAttribute('data-swiper-thumbs'))
    .forEach((element) => initElement(element, root));
  elements
    .filter((element) => element.hasAttribute('data-swiper-thumbs'))
    .forEach((element) => initElement(element, root));
}
