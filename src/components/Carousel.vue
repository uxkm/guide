<script setup>
/**
 * Carousel — Swiper 기반 슬라이드 캐러셀
 *
 * CarouselSlide 자식을 슬롯으로 받습니다.
 * role="region" + aria-roledescription="carousel" + aria-label(필수)로 영역을 표시합니다.
 *
 * Swiper는 onMounted 후 초기화되며, 언마운트 시 destroy됩니다.
 */
import { computed, nextTick, onBeforeUnmount, onMounted, provide, ref, useAttrs, watch } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { useCarouselDemoCode } from '@/composables/useDemoCode';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  /** 캐러셀 접근성 라벨 (필수) */
  ariaLabel: {
    type: String,
    required: true,
  },
  /** carousel_demo 클래스 적용 */
  demo: {
    type: Boolean,
    default: true,
  },
  /** carousel_multi — slides per view auto 레이아웃 */
  multi: Boolean,
  /** carousel_dots-outside — 페이지네이션을 뷰포트 밖에 배치 */
  dotsOutside: Boolean,
  /** 자동 재생 재생·정지 버튼 표시 */
  autoplayToggle: Boolean,
  /** 전환 효과. 'fade' | 'coverflow'. 생략 시 슬라이드 */
  effect: String,
  /** 자동 재생 */
  autoplay: Boolean,
  /** 자동 재생 간격(ms) */
  delay: {
    type: Number,
    default: 4000,
  },
  /** 무한 루프 */
  loop: Boolean,
  /** 시작 슬라이드 인덱스 (0부터) */
  initialSlide: {
    type: Number,
    default: 0,
  },
  /** 동시 표시 슬라이드 수 (number | 'auto') */
  slidesPerView: {
    type: [Number, String],
    default: 1,
  },
  /** 한 번에 이동하는 슬라이드 수 */
  slidesPerGroup: {
    type: Number,
    default: 1,
  },
  /** 슬라이드 간격(px) */
  spaceBetween: {
    type: Number,
    default: 0,
  },
  /** 활성 슬라이드 중앙 정렬 */
  centered: Boolean,
  /** 페이지네이션 표시. false로 숨김, 'fraction' | 'progressbar' | 'custom' */
  pagination: {
    type: [Boolean, String],
    default: true,
  },
  /** 이전·다음 화살표 표시 */
  navigation: {
    type: Boolean,
    default: true,
  },
  /** Grid 행 수. 2 이상이면 Grid 모듈 활성화 */
  gridRows: {
    type: Number,
    default: 1,
  },
  /** Grid 채움 방향. 'row' | 'column' */
  gridFill: {
    type: String,
    default: 'row',
  },
  /** Coverflow 스타일. 'tilt'(좌우 기울임) | 'rise'(기울임 없이 측면 축소) */
  coverflowStyle: {
    type: String,
    default: 'tilt',
  },
/**
   * Coverflow 활성 기준 좌·우에 보이는 슬라이드 수
   * 1 → 좌우 1개 · 1.5|'auto' → 좌우 1.5개 · 2 → 좌우 2개
   * 슬라이드 크기는 항상 1 기준(동일 세로·가로). peek는 슬라이드 간격으로 조절
   */
  coverflowSides: {
    type: [Number, String],
    default: 1.5,
  },
  /** Coverflow 효과 옵션 (effect="coverflow"일 때). 지정 시 스타일 프리셋보다 우선 */
  coverflowEffect: {
    type: Object,
    default: null,
  },
  /** Thumbs로 연결할 Swiper 인스턴스 (메인 갤러리) */
  thumbs: {
    type: Object,
    default: null,
  },
  /** 썸네일 컨트롤 캐러셀 — 탭 네비형 스크롤(시작 좌측·중간 가운데·끝 우측) */
  thumbsControl: Boolean,
  /** 슬라이드 진행 상태 감시 (Thumbs 연동용) */
  watchSlidesProgress: Boolean,
  /** Free mode */
  freeMode: Boolean,
});

const emit = defineEmits(['swiper']);

const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });

const attrs = useAttrs();
const rootRef = ref(null);
const swiperEl = ref(null);
const swiperInstance = ref(null);
const isPlaying = ref(true);
const slideCount = ref(0);
let resizeObserver = null;

const swiperConfigKeys = computed(() => [
  props.loop,
  props.initialSlide,
  slideCount.value,
  props.multi,
  props.dotsOutside,
  props.slidesPerView,
  props.slidesPerGroup,
  props.spaceBetween,
  props.centered,
  props.effect,
  props.autoplay,
  props.delay,
  props.pagination,
  props.navigation,
  props.gridRows,
  props.gridFill,
  props.coverflowStyle,
  props.coverflowSides,
  props.coverflowEffect,
  props.thumbs,
  props.thumbsControl,
  props.watchSlidesProgress,
  props.freeMode,
]);

const showNavigation = computed(() => props.navigation !== false);
const showPagination = computed(() => props.pagination !== false);
const showAutoplayToggle = computed(() => props.autoplay || props.autoplayToggle);
const isCoverflow = computed(() => props.effect === 'coverflow');
const isCoverflowRise = computed(() => isCoverflow.value && props.coverflowStyle === 'rise');
const isGrid = computed(() => props.gridRows > 1);
const isCustomPagination = computed(() => props.pagination === 'custom');
const isProgressPagination = computed(() => props.pagination === 'progressbar');

const resolvedCoverflowSides = computed(() => {
  const raw = props.coverflowSides;
  if (raw === '1' || Number(raw) === 1) return 1;
  if (raw === '2' || Number(raw) === 2) return 2;
  // 1.5 · auto · 구 2.5 호환
  if (raw === 'auto' || raw === '1.5' || Number(raw) === 1.5) return 1.5;
  if (raw === '2.5' || Number(raw) === 2.5) return 2;
  return 1.5;
});

const resolvedSlidesPerView = computed(() => {
  // coverflow: CSS 최소너비 + 컨테이너 등분(max) → slidesPerView auto
  if (isCoverflow.value) return 'auto';
  if (props.multi || props.slidesPerView === 'auto') return 'auto';
  return props.slidesPerView;
});

const coverflowSidesClass = computed(() => {
  if (!isCoverflow.value) return null;
  const sides = resolvedCoverflowSides.value;
  if (sides === 1) return 'carousel_coverflow-sides-1';
  if (sides === 2) return 'carousel_coverflow-sides-2';
  return 'carousel_coverflow-sides-15';
});

/** coverflow 반응형: 슬라이드 너비(항상 sides=1 크기) + peek용 유효 간격 */
const coverflowSlideWidth = ref('');
const coverflowEffectiveGap = ref(null);

const coverflowCssVars = computed(() => {
  if (!isCoverflow.value) return undefined;
  const vars = {
    // 너비 계산 기준 간격(sides=1). peek용 유효 간격과 별개
    '--carousel-coverflow-gap': `${props.spaceBetween}px`,
  };
  if (coverflowSlideWidth.value) {
    vars['--carousel-coverflow-slide-width'] = coverflowSlideWidth.value;
  }
  return vars;
});

/**
 * 슬라이드 크기 = 항상 sides=1 (컨테이너를 3등분).
 * coverflow-sides는 간격만 바꿔 좌우 peek 개수를 맞춤 (1.5·2는 음수 간격으로 겹침).
 */
function updateCoverflowSlideSize() {
  if (!isCoverflow.value || !rootRef.value) {
    coverflowSlideWidth.value = '';
    coverflowEffectiveGap.value = null;
    return;
  }

  const containerEl = swiperEl.value || rootRef.value;
  const containerW = containerEl.clientWidth;
  if (!containerW) return;

  const sides = resolvedCoverflowSides.value;
  const baseGap = Number(props.spaceBetween) || 0;
  const slideW = (containerW - baseGap * 2) / 3;
  const gapEff = (containerW - slideW) / (2 * sides) - slideW;

  coverflowSlideWidth.value = `${Math.round(slideW * 100) / 100}px`;
  coverflowEffectiveGap.value = Math.round(gapEff * 100) / 100;

  const swiper = swiperInstance.value;
  if (swiper && !swiper.destroyed) {
    swiper.params.spaceBetween = coverflowEffectiveGap.value;
  }
}

const rootClass = computed(() => [
  'carousel',
  props.demo ? 'carousel_demo' : null,
  props.multi ? 'carousel_multi' : null,
  props.dotsOutside ? 'carousel_dots-outside' : null,
  isCoverflow.value ? 'carousel_coverflow' : null,
  isCoverflowRise.value ? 'carousel_coverflow-rise' : null,
  coverflowSidesClass.value,
  isGrid.value ? 'carousel_grid' : null,
  isCustomPagination.value ? 'carousel_pagination-custom' : null,
  isProgressPagination.value ? 'carousel_pagination-progress' : null,
  props.thumbsControl ? 'carousel_thumbs' : null,
  showAutoplayToggle.value && !isPlaying.value ? 'is-autoplay-paused' : null,
  attrs.class,
]);

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return { ...rest, ...rippleAttrs.value };
});

const paginationType = computed(() => {
  if (props.pagination === 'fraction') return 'fraction';
  if (props.pagination === 'progressbar') return 'progressbar';
  return 'bullets';
});

const coverflowTiltEffect = {
  // rotate가 크면 측면 슬라이드 글자가 뒤집혀 보임
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

function registerSlide() {
  slideCount.value += 1;
}

function unregisterSlide() {
  slideCount.value = Math.max(0, slideCount.value - 1);
}

function toggleAutoplay() {
  const swiper = swiperInstance.value;
  if (!swiper?.autoplay) return;

  if (swiper.autoplay.running) {
    swiper.autoplay.stop();
    isPlaying.value = false;
  } else {
    swiper.autoplay.start();
    isPlaying.value = true;
  }
}

function destroySwiper() {
  swiperInstance.value?.destroy(true, true);
  swiperInstance.value = null;
}

/** Coverflow loop 최소 슬라이드 수 (sides별) */
function coverflowLoopMinSlides() {
  const sides = resolvedCoverflowSides.value;
  if (sides === 1) return 6;
  if (sides === 1.5) return 8;
  return 10;
}

function canEnableLoop() {
  if (!props.loop || slideCount.value < 2) return false;
  if (isGrid.value) return false;

  const slidesPerView = resolvedSlidesPerView.value;

  if (isCoverflow.value) {
    return slideCount.value >= coverflowLoopMinSlides();
  }

  if (slidesPerView === 'auto' || props.multi || props.slidesPerView === 'auto') {
    return slideCount.value >= 4;
  }

  const view = typeof slidesPerView === 'number' ? slidesPerView : 1;
  const minSlides = view + 1 + (props.centered ? 1 : 0);

  return slideCount.value >= minSlides;
}

function resolveThumbsSwiper() {
  const thumbs = props.thumbs;
  if (!thumbs || thumbs.destroyed) return null;
  return thumbs;
}

function buildSwiperConfig() {
  const paginationEl = rootRef.value?.querySelector('.swiper-pagination');
  const nextEl = rootRef.value?.querySelector('.swiper-button-next');
  const prevEl = rootRef.value?.querySelector('.swiper-button-prev');

  const config = {
    loop: canEnableLoop(),
    initialSlide: props.initialSlide,
    slidesPerView: resolvedSlidesPerView.value,
    spaceBetween:
      isCoverflow.value && coverflowEffectiveGap.value != null
        ? coverflowEffectiveGap.value
        : props.spaceBetween,
    centeredSlides: props.centered || isCoverflow.value,
    grabCursor: true,
    keyboard: { enabled: true },
    observer: true,
    observeParents: true,
    watchOverflow: !isCoverflow.value,
    watchSlidesProgress: props.watchSlidesProgress || props.thumbsControl || isCoverflow.value,
  };

  if (isCoverflow.value) {
    config.centeredSlides = true;
    if (config.loop) {
      // loopAdditionalSlides를 키우면 slides.length < slidesPerView+loopedSlides 로 loop가 꺼짐
      config.loopAdditionalSlides = 0;
      config.loopAddBlankSlides = false;
    }
  }

  if (props.slidesPerGroup > 1) {
    config.slidesPerGroup = props.slidesPerGroup;
  }

  if (props.freeMode) {
    config.freeMode = true;
  }

  if (props.thumbsControl) {
    // 탭 네비형: 기본 좌측 정렬. 활성 이동은 scrollActiveThumbIntoView로 처리
    config.slideToClickedSlide = true;
  }

  if (props.effect === 'fade') {
    config.effect = 'fade';
    config.fadeEffect = { crossFade: true };
  }

  if (isCoverflow.value) {
    config.effect = 'coverflow';
    config.coverflowEffect = isCoverflowRise.value
      ? { ...coverflowRiseEffect, ...(props.coverflowEffect || {}) }
      : { ...coverflowTiltEffect, ...(props.coverflowEffect || {}) };
  }

  if (isGrid.value) {
    config.grid = {
      rows: props.gridRows,
      fill: props.gridFill === 'column' ? 'column' : 'row',
    };
  }

  if (props.autoplay) {
    config.autoplay = {
      delay: props.delay,
      disableOnInteraction: false,
    };
  }

  if (showPagination.value && paginationEl) {
    const pagination = {
      el: paginationEl,
      clickable: true,
      type: paginationType.value,
    };

    if (isCustomPagination.value) {
      pagination.renderBullet = (index, className) =>
        `<span class="${className}">${index + 1}</span>`;
    }

    config.pagination = pagination;
  }

  if (showNavigation.value && nextEl && prevEl) {
    config.navigation = {
      nextEl,
      prevEl,
    };
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
function bindMainThumbsSync(mainSwiper) {
  if (!mainSwiper || mainSwiper.destroyed) return;
  const thumbs = resolveThumbsSwiper();
  if (!thumbs || thumbs.destroyed) return;

  const sync = () => {
    const index = mainSwiper.realIndex ?? mainSwiper.activeIndex ?? 0;
    scheduleThumbScroll(thumbs, index);
  };

  mainSwiper.on('slideChange', sync);
  mainSwiper.on('slideChangeTransitionStart', sync);
  mainSwiper.on('slideChangeTransitionEnd', sync);
}

/** DOM 마운트 후 Swiper 인스턴스 생성. pagination·navigation은 루트 내 셀렉터로 연결 */
async function initSwiper() {
  if (!swiperEl.value || slideCount.value === 0) return;

  updateCoverflowSlideSize();
  await nextTick();

  destroySwiper();
  swiperInstance.value = new Swiper(swiperEl.value, buildSwiperConfig());
  isPlaying.value = Boolean(props.autoplay);
  emit('swiper', swiperInstance.value);

  if (props.thumbsControl) {
    bindThumbsScroll(swiperInstance.value);
  } else if (resolveThumbsSwiper()) {
    bindMainThumbsSync(swiperInstance.value);
  }

  await nextTick();
  requestAnimationFrame(() => {
    const swiper = swiperInstance.value;
    if (!swiper || swiper.destroyed) return;

    updateCoverflowSlideSize();
    swiper.update();

    // loop 생성 후 real index로만 맞춤
    if (isCoverflow.value && swiper.params.loop) {
      const index = props.initialSlide || 0;
      if (typeof swiper.slideToLoop === 'function') {
        swiper.slideToLoop(index, 0, false);
      }
    }

    if (!props.thumbsControl && resolveThumbsSwiper()) {
      const index = swiper.realIndex ?? 0;
      scheduleThumbScroll(resolveThumbsSwiper(), index);
    }
  });
}

provide('carousel', {
  registerSlide,
  unregisterSlide,
});

defineExpose({
  swiper: swiperInstance,
});

useCarouselDemoCode(props, slideCount, rootRef, attrs);

watch(
  swiperConfigKeys,
  async () => {
    if (slideCount.value === 0) return;
    await nextTick();
    initSwiper();
  },
  { flush: 'post' },
);

onMounted(async () => {
  await nextTick();
  updateCoverflowSlideSize();
  initSwiper();

  if (rootRef.value && typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(() => {
      updateCoverflowSlideSize();
      swiperInstance.value?.update();
    });
    resizeObserver.observe(rootRef.value);
  }
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  resizeObserver = null;
  destroySwiper();
});
</script>

<template>
  <div ref="rootRef" :class="rootClass" :style="coverflowCssVars" v-bind="fallthroughAttrs">
    <div
      ref="swiperEl"
      class="swiper"
      role="region"
      aria-roledescription="carousel"
      :aria-label="ariaLabel"
      :data-swiper-space-between="spaceBetween > 0 ? String(spaceBetween) : undefined"
      :data-swiper-effect="effect || undefined"
      :data-swiper-coverflow-style="isCoverflow && coverflowStyle !== 'tilt' ? coverflowStyle : undefined"
      :data-swiper-coverflow-sides="isCoverflow ? String(resolvedCoverflowSides) : undefined"
      :data-swiper-pagination="typeof pagination === 'string' ? pagination : undefined"
      :data-swiper-grid-rows="gridRows > 1 ? String(gridRows) : undefined"
      :data-swiper-slides-per-group="slidesPerGroup > 1 ? String(slidesPerGroup) : undefined"
      :data-swiper-initial-slide="initialSlide > 0 ? String(initialSlide) : undefined"
    >
      <div class="swiper-wrapper">
        <slot />
      </div>
      <div
        v-if="showNavigation"
        class="swiper-button-prev"
        aria-label="이전 슬라이드"
      />
      <div
        v-if="showNavigation"
        class="swiper-button-next"
        aria-label="다음 슬라이드"
      />
      <div v-if="showPagination && !dotsOutside" class="swiper-pagination" />
    </div>
    <div v-if="showPagination && dotsOutside" class="swiper-pagination" />
    <button
      v-if="showAutoplayToggle"
      v-bind="childRippleAttrs"
      type="button"
      class="carousel_toggle"
      data-carousel-autoplay-toggle
      :aria-label="isPlaying ? '슬라이드 정지' : '슬라이드 재생'"
      :aria-pressed="String(isPlaying)"
      @click="toggleAutoplay"
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
</template>
