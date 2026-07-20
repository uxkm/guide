/**
 * Carousel — Swiper 초기화 (HTML 마크업용)
 */
export function initCarousel(root, SwiperCtor) {
  if (!root || typeof SwiperCtor === 'undefined') {
    return;
  }

  const SELECTOR = '.carousel [data-swiper]';

  function getRoot(el) {
    return el.closest('.carousel');
  }

  function readNumber(value, fallback) {
    const parsed = parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function readSlidesPerView(el) {
    const value =
      el.getAttribute('data-swiper-slides-per-view') ||
      el.getAttribute('data-swiper-slides');

    if (value === 'auto') return 'auto';
    return readNumber(value, 1);
  }

  function readSpaceBetween(el) {
    const value =
      el.getAttribute('data-swiper-space-between') || el.getAttribute('data-swiper-gap');

    return readNumber(value, 0);
  }

  function readAutoplayDelay(el) {
    return readNumber(
      el.getAttribute('data-swiper-delay') || el.getAttribute('data-swiper-autoplay-delay'),
      5000
    );
  }

  function updateToggle(rootEl, toggle, isPlaying) {
    if (rootEl) {
      rootEl.classList.toggle('is-autoplay-paused', !isPlaying);
    }

    toggle.setAttribute('aria-pressed', String(isPlaying));
    toggle.setAttribute('aria-label', isPlaying ? '슬라이드 정지' : '슬라이드 재생');
  }

  function bindToggle(rootEl, swiper) {
    const toggle =
      rootEl?.querySelector('[data-carousel-autoplay-toggle]') ||
      rootEl?.querySelector('.carousel_toggle');

    if (!toggle) return;

    toggle.addEventListener('click', () => {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        updateToggle(rootEl, toggle, false);
      } else {
        swiper.autoplay.start();
        updateToggle(rootEl, toggle, true);
      }
    });
  }

  function init(el) {
    if (el.dataset.swiperInit) return;
    el.dataset.swiperInit = '1';

    const rootEl = getRoot(el);
    const loop = el.hasAttribute('data-swiper-loop');
    const autoplay = el.hasAttribute('data-swiper-autoplay');
    const effect = el.getAttribute('data-swiper-effect');
    const centered = el.hasAttribute('data-swiper-centered');
    const thumbsControl = rootEl?.classList.contains('carousel_thumbs');
    const slidesPerView = readSlidesPerView(el);
    const spaceBetween = readSpaceBetween(el);
    const gridRows = readNumber(el.getAttribute('data-swiper-grid-rows'), 1);
    const slidesPerGroup = readNumber(el.getAttribute('data-swiper-slides-per-group'), 1);
    const paginationType = el.getAttribute('data-swiper-pagination') || 'bullets';
    const paginationEl = rootEl?.querySelector('.swiper-pagination');
    const nextEl = rootEl?.querySelector('.swiper-button-next');
    const prevEl = rootEl?.querySelector('.swiper-button-prev');

    const config = {
      loop: loop && gridRows <= 1,
      initialSlide: readNumber(el.getAttribute('data-swiper-initial-slide'), 0),
      slidesPerView,
      spaceBetween,
      centeredSlides: centered || effect === 'coverflow',
      grabCursor: true,
      keyboard: { enabled: true },
      watchSlidesProgress: thumbsControl || el.hasAttribute('data-swiper-watch-slides-progress'),
    };

    if (slidesPerGroup > 1) {
      config.slidesPerGroup = slidesPerGroup;
    }

    if (el.hasAttribute('data-swiper-free-mode')) {
      config.freeMode = true;
    }

    if (thumbsControl) {
      // 탭 네비형: 기본 좌측 정렬. 활성 이동은 아래 스크롤 헬퍼로 처리
      config.slideToClickedSlide = true;
    }

    if (effect === 'fade') {
      config.effect = 'fade';
      config.fadeEffect = { crossFade: true };
    }

    if (effect === 'coverflow') {
      const coverflowStyle = el.getAttribute('data-swiper-coverflow-style') || 'tilt';
      const sidesRaw = el.getAttribute('data-swiper-coverflow-sides') || '1.5';
      let sides = sidesRaw === 'auto' ? 1.5 : Number(sidesRaw);
      if (sides === 2.5) sides = 2;
      if (![1, 1.5, 2].includes(sides)) sides = 1.5;
      const slideEls = rootEl?.querySelectorAll('.swiper-slide') ?? [];
      const count = slideEls.length;
      const enableLoop = loop && gridRows <= 1;
      const loopMin = sides === 1 ? 6 : sides === 1.5 ? 8 : 10;

      // 슬라이드 크기 고정(3등분) + peek는 spaceBetween으로 조절
      config.slidesPerView = 'auto';
      config.centeredSlides = true;
      config.watchOverflow = false;
      config.watchSlidesProgress = true;
      config.loop = enableLoop && count >= loopMin;

      if (config.loop) {
        config.loopAdditionalSlides = 0;
        config.loopAddBlankSlides = false;
      }

      if (rootEl) {
        // 슬라이드 크기 = 항상 sides=1(3등분). peek는 spaceBetween으로 조절
        const baseGap = spaceBetween;
        const containerW = el.clientWidth || rootEl.clientWidth;
        if (containerW > 0) {
          const slideW = (containerW - baseGap * 2) / 3;
          const gapEff = (containerW - slideW) / (2 * sides) - slideW;
          rootEl.style.setProperty('--carousel-coverflow-slide-width', `${Math.round(slideW * 100) / 100}px`);
          config.spaceBetween = Math.round(gapEff * 100) / 100;
        }
        rootEl.style.setProperty('--carousel-coverflow-gap', `${baseGap}px`);
        rootEl.classList.remove(
          'carousel_coverflow-sides-1',
          'carousel_coverflow-sides-15',
          'carousel_coverflow-sides-2',
          'carousel_coverflow-sides-auto',
        );
        if (sides === 1) rootEl.classList.add('carousel_coverflow-sides-1');
        else if (sides === 2) rootEl.classList.add('carousel_coverflow-sides-2');
        else rootEl.classList.add('carousel_coverflow-sides-15');
      }

      if (coverflowStyle === 'rise') {
        config.effect = 'coverflow';
        config.coverflowEffect = {
          rotate: 0,
          stretch: 0,
          depth: 28,
          scale: 0.92,
          modifier: 1,
          slideShadows: false,
        };
      } else {
        config.effect = 'coverflow';
        config.coverflowEffect = {
          rotate: 24,
          stretch: 0,
          depth: 140,
          modifier: 1,
          slideShadows: true,
        };
      }
    }

    if (gridRows > 1) {
      config.grid = {
        rows: gridRows,
        fill: el.getAttribute('data-swiper-grid-fill') === 'column' ? 'column' : 'row',
      };
    }

    if (autoplay) {
      config.autoplay = {
        delay: readAutoplayDelay(el),
        disableOnInteraction: false,
      };
    }

    if (paginationEl) {
      const pagination = {
        el: paginationEl,
        clickable: true,
        type:
          paginationType === 'fraction' || paginationType === 'progressbar'
            ? paginationType
            : 'bullets',
      };

      if (paginationType === 'custom') {
        pagination.renderBullet = (index, className) =>
          `<span class="${className}">${index + 1}</span>`;
      }

      config.pagination = pagination;
    }

    if (nextEl && prevEl) {
      config.navigation = {
        nextEl,
        prevEl,
      };
    }

    const thumbsSelector = el.getAttribute('data-swiper-thumbs');
    let linkedThumbsSwiper = null;
    if (thumbsSelector) {
      const thumbsEl = root.querySelector(thumbsSelector);
      if (thumbsEl?.swiper) {
        linkedThumbsSwiper = thumbsEl.swiper;
        config.thumbs = { swiper: linkedThumbsSwiper, autoScrollOffset: 0 };
      }
    }

    const swiper = new SwiperCtor(el, config);

    if (effect === 'coverflow' && config.loop) {
      const index = readNumber(el.getAttribute('data-swiper-initial-slide'), 0);
      requestAnimationFrame(() => {
        if (swiper.destroyed) return;
        if (typeof swiper.slideToLoop === 'function') {
          swiper.slideToLoop(index, 0, false);
        }
      });
    }

    function scrollActiveThumbIntoView(instance, index) {
      if (!instance || instance.destroyed) return;
      instance.updateSize?.();
      instance.updateSlides?.();

      const total = instance.slides?.length ?? 0;
      if (!total || !instance.size) return;

      const i = Math.max(0, Math.min(index, total - 1));
      const slideEl = instance.slides[i];
      if (!slideEl) return;

      let slideOffset = instance.slidesGrid?.[i];
      let slideSize = instance.slidesSizesGrid?.[i];
      if (slideOffset == null || slideSize == null) {
        slideOffset = slideEl.offsetLeft ?? 0;
        slideSize = slideEl.offsetWidth ?? 0;
      }

      let translate = -(slideOffset - instance.size / 2 + slideSize / 2);
      const min = instance.minTranslate();
      const max = instance.maxTranslate();
      translate = Math.min(min, Math.max(max, translate));

      const current = typeof instance.getTranslate === 'function' ? instance.getTranslate() : 0;
      if (Math.abs(current - translate) < 0.5) return;

      instance.setTransition(instance.params.speed ?? 300);
      instance.setTranslate(translate);
      instance.updateProgress(translate);
      instance.updateActiveIndex?.();
      instance.updateSlidesClasses?.();
    }

    function scheduleThumbScroll(instance, index) {
      if (!instance || instance.destroyed) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollActiveThumbIntoView(instance, index);
        });
      });
    }

    if (thumbsControl) {
      const resolveThumbIndex = () => {
        const activeEl = Array.from(swiper.slides).find((slide) =>
          slide.classList?.contains('swiper-slide-thumb-active'),
        );
        if (activeEl) return swiper.slides.indexOf(activeEl);
        return swiper.clickedIndex ?? swiper.activeIndex;
      };

      const sync = () => scheduleThumbScroll(swiper, resolveThumbIndex());

      swiper.on('click', () => {
        if (swiper.clickedIndex != null) {
          scheduleThumbScroll(swiper, swiper.clickedIndex);
        }
      });
      swiper.on('slideChange', sync);
      swiper.on('slideChangeTransitionEnd', sync);

      requestAnimationFrame(() => {
        if (swiper.destroyed) return;
        swiper.setTransition(0);
        swiper.setTranslate(0);
        swiper.updateProgress(0);
      });
    }

    if (linkedThumbsSwiper) {
      const sync = () => {
        const index = swiper.realIndex ?? swiper.activeIndex ?? 0;
        scheduleThumbScroll(linkedThumbsSwiper, index);
      };
      swiper.on('slideChange', sync);
      swiper.on('slideChangeTransitionStart', sync);
      swiper.on('slideChangeTransitionEnd', sync);
    }

    bindToggle(rootEl, swiper);
  }

  root.querySelectorAll(SELECTOR).forEach(init);
}
