/**
 * Carousel — Swiper 초기화
 * https://swiperjs.com/demos
 */
(function () {
  if (typeof Swiper === 'undefined') {
    return;
  }

  var SELECTOR = '.carousel [data-swiper]';

  function getRoot(el) {
    return el.closest('.carousel');
  }

  function readNumber(value, fallback) {
    var parsed = parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function updateToggle(root, toggle, isPlaying) {
    if (root) {
      root.classList.toggle('is-autoplay-paused', !isPlaying);
    }

    toggle.setAttribute('aria-pressed', String(isPlaying));
    toggle.setAttribute('aria-label', isPlaying ? '슬라이드 정지' : '슬라이드 재생');
  }

  function bindToggle(el, swiper) {
    var root = getRoot(el);
    var toggle = root ? root.querySelector('.carousel_toggle') : null;

    if (!toggle || !swiper.autoplay) {
      return;
    }

    updateToggle(root, toggle, true);

    toggle.addEventListener('click', function () {
      if (swiper.autoplay.running) {
        if (root) {
          root.classList.add('is-autoplay-paused');
        }

        swiper.autoplay.stop();
        updateToggle(root, toggle, false);
      } else {
        if (root) {
          root.classList.remove('is-autoplay-paused');
        }

        swiper.autoplay.start();
        updateToggle(root, toggle, true);
      }
    });

    swiper.on('autoplayStart', function () {
      if (root) {
        root.classList.remove('is-autoplay-paused');
      }

      updateToggle(root, toggle, true);
    });

    swiper.on('autoplayStop', function () {
      if (root && root.classList.contains('is-autoplay-paused')) {
        updateToggle(root, toggle, false);
      }
    });
  }

  function buildConfig(el) {
    var nextEl = el.querySelector('.swiper-button-next');
    var prevEl = el.querySelector('.swiper-button-prev');
    var paginationEl = el.querySelector('.swiper-pagination');
    var slidesPerViewAttr = el.getAttribute('data-swiper-slides-per-view');
    var paginationType = el.getAttribute('data-swiper-pagination');
    var loop = el.hasAttribute('data-swiper-loop');
    var effect = el.getAttribute('data-swiper-effect');
    var config = {
      slidesPerView: 1,
      spaceBetween: readNumber(el.getAttribute('data-swiper-space-between'), 0),
      loop: loop,
      centeredSlides: el.hasAttribute('data-swiper-centered'),
      grabCursor: true,
      speed: 400,
      watchOverflow: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      a11y: {
        enabled: true,
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        paginationBulletMessage: '{{index}}번 슬라이드'
      }
    };

    if (slidesPerViewAttr === 'auto') {
      config.slidesPerView = 'auto';
    } else if (slidesPerViewAttr) {
      config.slidesPerView = parseFloat(slidesPerViewAttr);
    }

    if (effect === 'fade') {
      config.effect = 'fade';
      config.fadeEffect = { crossFade: true };
    }

    if (el.hasAttribute('data-swiper-autoplay')) {
      var delay = readNumber(el.getAttribute('data-swiper-delay'), 5000);

      config.autoplay = {
        delay: delay >= 1000 ? delay : 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      };
    }

    if (nextEl && prevEl) {
      config.navigation = {
        nextEl: nextEl,
        prevEl: prevEl
      };
    }

    if (paginationEl) {
      config.pagination = {
        el: paginationEl,
        clickable: paginationType !== 'fraction',
        type: paginationType === 'fraction' ? 'fraction' : 'bullets'
      };
    }

    return config;
  }

  function init(el) {
    if (el.swiper) {
      return;
    }

    try {
      var swiper = new Swiper(el, buildConfig(el));

      bindToggle(el, swiper);
    } catch (error) {
      console.error('[carousel] Swiper 초기화 실패:', error);
    }
  }

  function boot() {
    document.querySelectorAll(SELECTOR).forEach(init);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
