/**
 * Carousel — Swiper 초기화 (HTML 마크업용)
 * Vue packages/ui/src/legacy/carousel-init.js 동기화
 */
(function () {
  function getSwiper() {
    if (typeof Swiper !== 'undefined') {
      return Swiper;
    }

    if (typeof window !== 'undefined' && window.Swiper) {
      return window.Swiper;
    }

    return null;
  }

  var SELECTOR = '.carousel [data-swiper]';

  function getRoot(el) {
    return el.closest('.carousel');
  }

  function readNumber(value, fallback) {
    var parsed = parseInt(value, 10);

    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function readSlidesPerView(el) {
    var value =
      el.getAttribute('data-swiper-slides-per-view') ||
      el.getAttribute('data-swiper-slides');

    if (value === 'auto') {
      return 'auto';
    }

    return readNumber(value, 1);
  }

  function readSpaceBetween(el) {
    var value =
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
    var toggle =
      (rootEl && rootEl.querySelector('[data-carousel-autoplay-toggle]')) ||
      (rootEl && rootEl.querySelector('.carousel_toggle'));

    if (!toggle || !swiper.autoplay) {
      return;
    }

    updateToggle(rootEl, toggle, true);

    toggle.addEventListener('click', function () {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        updateToggle(rootEl, toggle, false);
      } else {
        swiper.autoplay.start();
        updateToggle(rootEl, toggle, true);
      }
    });
  }

  function scrollActiveThumbIntoView(instance, index) {
    if (!instance || instance.destroyed) {
      return;
    }

    if (typeof instance.updateSize === 'function') {
      instance.updateSize();
    }

    if (typeof instance.updateSlides === 'function') {
      instance.updateSlides();
    }

    var total = instance.slides ? instance.slides.length : 0;

    if (!total || !instance.size) {
      return;
    }

    var i = Math.max(0, Math.min(index, total - 1));
    var slideEl = instance.slides[i];

    if (!slideEl) {
      return;
    }

    var slideOffset = instance.slidesGrid ? instance.slidesGrid[i] : null;
    var slideSize = instance.slidesSizesGrid ? instance.slidesSizesGrid[i] : null;

    if (slideOffset == null || slideSize == null) {
      slideOffset = slideEl.offsetLeft || 0;
      slideSize = slideEl.offsetWidth || 0;
    }

    var translate = -(slideOffset - instance.size / 2 + slideSize / 2);
    var min = instance.minTranslate();
    var max = instance.maxTranslate();

    translate = Math.min(min, Math.max(max, translate));

    var current = typeof instance.getTranslate === 'function' ? instance.getTranslate() : 0;

    if (Math.abs(current - translate) < 0.5) {
      return;
    }

    instance.setTransition(instance.params.speed || 300);
    instance.setTranslate(translate);
    instance.updateProgress(translate);

    if (typeof instance.updateActiveIndex === 'function') {
      instance.updateActiveIndex();
    }

    if (typeof instance.updateSlidesClasses === 'function') {
      instance.updateSlidesClasses();
    }
  }

  function scheduleThumbScroll(instance, index) {
    if (!instance || instance.destroyed) {
      return;
    }

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        scrollActiveThumbIntoView(instance, index);
      });
    });
  }

  function resolveCoverflowSides(el) {
    var sidesRaw = el.getAttribute('data-swiper-coverflow-sides') || '1.5';
    var sides = sidesRaw === 'auto' ? 1.5 : Number(sidesRaw);

    if (sides === 2.5) {
      sides = 2;
    }

    if ([1, 1.5, 2].indexOf(sides) === -1) {
      sides = 1.5;
    }

    return sides;
  }

  function applyCoverflowSizing(rootEl, el, baseGap, sides) {
    if (!rootEl) {
      return null;
    }

    var containerW = el.clientWidth || rootEl.clientWidth;

    rootEl.style.setProperty('--carousel-coverflow-gap', baseGap + 'px');
    rootEl.classList.remove(
      'carousel_coverflow-sides-1',
      'carousel_coverflow-sides-15',
      'carousel_coverflow-sides-2',
      'carousel_coverflow-sides-auto'
    );

    if (sides === 1) {
      rootEl.classList.add('carousel_coverflow-sides-1');
    } else if (sides === 2) {
      rootEl.classList.add('carousel_coverflow-sides-2');
    } else {
      rootEl.classList.add('carousel_coverflow-sides-15');
    }

    if (!(containerW > 0)) {
      return null;
    }

    var slideW = (containerW - baseGap * 2) / 3;
    var gapEff = (containerW - slideW) / (2 * sides) - slideW;

    rootEl.style.setProperty(
      '--carousel-coverflow-slide-width',
      Math.round(slideW * 100) / 100 + 'px'
    );

    return Math.round(gapEff * 100) / 100;
  }

  function bindCoverflowResize(rootEl, el, swiper, baseGap, sides) {
    if (!rootEl || typeof ResizeObserver === 'undefined') {
      return;
    }

    var frame = 0;

    var observer = new ResizeObserver(function () {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(function () {
        frame = 0;

        if (swiper.destroyed) {
          return;
        }

        var gapEff = applyCoverflowSizing(rootEl, el, baseGap, sides);

        if (gapEff == null) {
          return;
        }

        swiper.params.spaceBetween = gapEff;
        swiper.update();
      });
    });

    observer.observe(rootEl);
  }

  function init(el) {
    var SwiperCtor = getSwiper();

    if (!SwiperCtor || el.dataset.swiperInit) {
      return;
    }

    el.dataset.swiperInit = '1';

    var rootEl = getRoot(el);
    var loop = el.hasAttribute('data-swiper-loop');
    var autoplay = el.hasAttribute('data-swiper-autoplay');
    var effect = el.getAttribute('data-swiper-effect');
    var centered = el.hasAttribute('data-swiper-centered');
    var thumbsControl = rootEl && rootEl.classList.contains('carousel_thumbs');
    var slidesPerView = readSlidesPerView(el);
    var spaceBetween = readSpaceBetween(el);
    var gridRows = readNumber(el.getAttribute('data-swiper-grid-rows'), 1);
    var slidesPerGroup = readNumber(el.getAttribute('data-swiper-slides-per-group'), 1);
    var paginationType = el.getAttribute('data-swiper-pagination') || 'bullets';
    // nav는 swiper 내부, pagination은 dots-outside 시 루트 직계에 둘 수 있음
    var nextEl = el.querySelector('.swiper-button-next');
    var prevEl = el.querySelector('.swiper-button-prev');
    var paginationEl =
      el.querySelector('.swiper-pagination') ||
      (rootEl ? rootEl.querySelector(':scope > .swiper-pagination') : null) ||
      (rootEl ? rootEl.querySelector('.swiper-pagination') : null);

    var config = {
      loop: loop && gridRows <= 1,
      initialSlide: readNumber(el.getAttribute('data-swiper-initial-slide'), 0),
      slidesPerView: slidesPerView,
      spaceBetween: spaceBetween,
      centeredSlides: centered || effect === 'coverflow',
      grabCursor: true,
      keyboard: { enabled: true },
      watchSlidesProgress:
        thumbsControl || el.hasAttribute('data-swiper-watch-slides-progress'),
      a11y: {
        enabled: true,
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        paginationBulletMessage: '{{index}}번 슬라이드',
      },
    };

    if (slidesPerGroup > 1) {
      config.slidesPerGroup = slidesPerGroup;
    }

    if (el.hasAttribute('data-swiper-free-mode')) {
      config.freeMode = true;
    }

    if (thumbsControl) {
      config.slideToClickedSlide = true;
    }

    if (effect === 'fade') {
      config.effect = 'fade';
      config.fadeEffect = { crossFade: true };
    }

    var coverflowSides = null;
    var coverflowBaseGap = spaceBetween;

    if (effect === 'coverflow') {
      var coverflowStyle = el.getAttribute('data-swiper-coverflow-style') || 'tilt';
      coverflowSides = resolveCoverflowSides(el);

      var slideEls = rootEl ? rootEl.querySelectorAll('.swiper-slide') : [];
      var count = slideEls.length;
      var enableLoop = loop && gridRows <= 1;
      var loopMin = coverflowSides === 1 ? 6 : coverflowSides === 1.5 ? 8 : 10;

      config.slidesPerView = 'auto';
      config.centeredSlides = true;
      config.watchOverflow = false;
      config.watchSlidesProgress = true;
      config.loop = enableLoop && count >= loopMin;

      if (config.loop) {
        config.loopAdditionalSlides = 0;
        config.loopAddBlankSlides = false;
      }

      var gapEff = applyCoverflowSizing(rootEl, el, coverflowBaseGap, coverflowSides);

      if (gapEff != null) {
        config.spaceBetween = gapEff;
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
      var pagination = {
        el: paginationEl,
        clickable: true,
        type:
          paginationType === 'fraction' || paginationType === 'progressbar'
            ? paginationType
            : 'bullets',
      };

      if (paginationType === 'custom') {
        pagination.renderBullet = function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        };
      }

      config.pagination = pagination;
    }

    if (nextEl && prevEl) {
      config.navigation = {
        nextEl: nextEl,
        prevEl: prevEl,
      };
    }

    var thumbsSelector = el.getAttribute('data-swiper-thumbs');
    var linkedThumbsSwiper = null;

    if (thumbsSelector) {
      var thumbsScope =
        (el.closest && el.closest('.sb-demo-layout')) ||
        (rootEl && rootEl.parentElement) ||
        document;
      var thumbsEl = null;

      try {
        thumbsEl = thumbsScope.querySelector(thumbsSelector);
      } catch (error) {
        thumbsEl = null;
      }

      if (!thumbsEl) {
        try {
          thumbsEl = document.querySelector(thumbsSelector);
        } catch (error) {
          thumbsEl = null;
        }
      }

      if (thumbsEl && thumbsEl.swiper) {
        linkedThumbsSwiper = thumbsEl.swiper;
        config.thumbs = { swiper: linkedThumbsSwiper, autoScrollOffset: 0 };
        config.watchSlidesProgress = true;
      }
    }

    var swiper;

    try {
      swiper = new SwiperCtor(el, config);
    } catch (error) {
      console.error('[carousel] Swiper 초기화 실패:', error);
      return;
    }

    if (effect === 'coverflow') {
      bindCoverflowResize(rootEl, el, swiper, coverflowBaseGap, coverflowSides);

      requestAnimationFrame(function () {
        if (swiper.destroyed) {
          return;
        }

        var nextGap = applyCoverflowSizing(rootEl, el, coverflowBaseGap, coverflowSides);

        if (nextGap != null) {
          swiper.params.spaceBetween = nextGap;
        }

        swiper.update();

        if (config.loop) {
          var index = readNumber(el.getAttribute('data-swiper-initial-slide'), 0);

          if (typeof swiper.slideToLoop === 'function') {
            swiper.slideToLoop(index, 0, false);
          }
        }
      });
    }

    if (thumbsControl) {
      var resolveThumbIndex = function () {
        var activeEl = Array.prototype.find.call(swiper.slides, function (slide) {
          return slide.classList && slide.classList.contains('swiper-slide-thumb-active');
        });

        if (activeEl) {
          return Array.prototype.indexOf.call(swiper.slides, activeEl);
        }

        return swiper.clickedIndex != null ? swiper.clickedIndex : swiper.activeIndex;
      };

      var syncThumbs = function () {
        scheduleThumbScroll(swiper, resolveThumbIndex());
      };

      swiper.on('click', function () {
        if (swiper.clickedIndex != null) {
          scheduleThumbScroll(swiper, swiper.clickedIndex);
        }
      });
      swiper.on('slideChange', syncThumbs);
      swiper.on('slideChangeTransitionEnd', syncThumbs);

      requestAnimationFrame(function () {
        if (swiper.destroyed) {
          return;
        }

        swiper.setTransition(0);
        swiper.setTranslate(0);
        swiper.updateProgress(0);
      });
    }

    if (linkedThumbsSwiper) {
      var syncMain = function () {
        var idx = swiper.realIndex != null ? swiper.realIndex : swiper.activeIndex || 0;

        scheduleThumbScroll(linkedThumbsSwiper, idx);
      };

      swiper.on('slideChange', syncMain);
      swiper.on('slideChangeTransitionStart', syncMain);
      swiper.on('slideChangeTransitionEnd', syncMain);
    }

    bindToggle(rootEl, swiper);
  }

  function boot(root) {
    if (!getSwiper()) {
      return;
    }

    var scope = root && root.querySelectorAll ? root : document;
    var els = Array.prototype.slice.call(scope.querySelectorAll(SELECTOR));
    // 썸네일(연결 대상)을 먼저 초기화한 뒤 메인(data-swiper-thumbs)을 연결
    var dependents = [];
    var independents = [];

    els.forEach(function (el) {
      if (el.hasAttribute('data-swiper-thumbs')) {
        dependents.push(el);
      } else {
        independents.push(el);
      }
    });

    independents.forEach(init);
    dependents.forEach(init);
  }

  if (typeof window !== 'undefined') {
    window.initGuideCarousels = boot;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      boot(document);
    });
  } else {
    boot(document);
  }
})();
