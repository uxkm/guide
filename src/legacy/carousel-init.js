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
    const slidesPerView = readSlidesPerView(el);
    const spaceBetween = readSpaceBetween(el);
    const paginationType = el.getAttribute('data-swiper-pagination') || 'bullets';
    const paginationEl = rootEl?.querySelector('.swiper-pagination');
    const nextEl = rootEl?.querySelector('.swiper-button-next');
    const prevEl = rootEl?.querySelector('.swiper-button-prev');

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
        delay: readAutoplayDelay(el),
        disableOnInteraction: false,
      };
    }

    if (paginationEl) {
      config.pagination = {
        el: paginationEl,
        clickable: true,
        type: paginationType === 'fraction' ? 'fraction' : 'bullets',
      };
    }

    if (nextEl && prevEl) {
      config.navigation = {
        nextEl,
        prevEl,
      };
    }

    const swiper = new SwiperCtor(el, config);

    bindToggle(rootEl, swiper);
  }

  root.querySelectorAll(SELECTOR).forEach(init);
}
