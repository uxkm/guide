<script setup>
/**
 * Carousel — Swiper 기반 슬라이드 캐러셀
 *
 * CarouselSlide 자식을 슬롯으로 받습니다.
 * role="region" + aria-roledescription="carousel" + aria-label(필수)로 영역을 표시합니다.
 *
 * Swiper는 onMounted 후 초기화되며, 언마운트 시 destroy됩니다.
 */
import { computed, nextTick, onBeforeUnmount, onMounted, provide, ref, useAttrs } from 'vue';
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
  /** 전환 효과. 'fade' 지정 시 페이드, 생략 시 슬라이드 */
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
  /** 동시 표시 슬라이드 수 (number | 'auto') */
  slidesPerView: {
    type: [Number, String],
    default: 1,
  },
  /** 슬라이드 간격(px) */
  spaceBetween: {
    type: Number,
    default: 0,
  },
  /** 활성 슬라이드 중앙 정렬 */
  centered: Boolean,
  /** 페이지네이션 표시. false로 숨김, 'fraction'은 분수 형식 */
  pagination: {
    type: [Boolean, String],
    default: true,
  },
  /** 이전·다음 화살표 표시 */
  navigation: {
    type: Boolean,
    default: true,
  },
});
const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });


const attrs = useAttrs();
const rootRef = ref(null);
const swiperEl = ref(null);
const swiperInstance = ref(null);
const isPlaying = ref(true);
const slideCount = ref(0);

const rootClass = computed(() => [
  'carousel',
  props.demo ? 'carousel_demo' : null,
  props.multi ? 'carousel_multi' : null,
  props.dotsOutside ? 'carousel_dots-outside' : null,
  props.autoplayToggle && !isPlaying.value ? 'is-autoplay-paused' : null,
  attrs.class,
]);

const showNavigation = computed(() => props.navigation !== false);
const showPagination = computed(() => props.pagination !== false);

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return { ...rest, ...rippleAttrs.value };
});

const paginationType = computed(() => {
  if (props.pagination === 'fraction') return 'fraction';
  return 'bullets';
});

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

/** DOM 마운트 후 Swiper 인스턴스 생성. pagination·navigation은 루트 내 셀렉터로 연결 */
function initSwiper() {
  if (!swiperEl.value || swiperInstance.value) return;

  const paginationEl = rootRef.value?.querySelector('.swiper-pagination');
  const nextEl = rootRef.value?.querySelector('.swiper-button-next');
  const prevEl = rootRef.value?.querySelector('.swiper-button-prev');

  const config = {
    loop: props.loop,
    slidesPerView: props.slidesPerView,
    spaceBetween: props.spaceBetween,
    centeredSlides: props.centered,
    grabCursor: true,
    keyboard: { enabled: true },
  };

  if (props.effect === 'fade') {
    config.effect = 'fade';
    config.fadeEffect = { crossFade: true };
  }

  if (props.autoplay) {
    config.autoplay = {
      delay: props.delay,
      disableOnInteraction: false,
    };
  }

  if (showPagination.value && paginationEl) {
    config.pagination = {
      el: paginationEl,
      clickable: true,
      type: paginationType.value,
    };
  }

  if (showNavigation.value && nextEl && prevEl) {
    config.navigation = {
      nextEl,
      prevEl,
    };
  }

  swiperInstance.value = new Swiper(swiperEl.value, config);
  isPlaying.value = Boolean(props.autoplay);
}

provide('carousel', {
  registerSlide,
  unregisterSlide,
});

useCarouselDemoCode(props, slideCount, rootRef, attrs);

onMounted(async () => {
  await nextTick();
  initSwiper();
});

onBeforeUnmount(() => {
  swiperInstance.value?.destroy(true, true);
  swiperInstance.value = null;
});
</script>

<template>
  <div ref="rootRef" :class="rootClass" v-bind="fallthroughAttrs">
    <div
      ref="swiperEl"
      class="swiper"
      role="region"
      aria-roledescription="carousel"
      :aria-label="ariaLabel"
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
      <div v-if="showPagination" class="swiper-pagination" />
    </div>
    <button
      v-if="autoplayToggle"
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
