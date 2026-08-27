<!--
  Carousel 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useAttrs, watch } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

defineOptions({ name: 'UxkmCarousel', inheritAttrs: false });

const props = defineProps({
  ariaLabel: { type: String, default: '콘텐츠 슬라이드' }, // 캐러셀 영역의 접근성 이름입니다.
  size: { type: String, default: 'md' }, // sm · md · lg 크기입니다.
  multi: Boolean, // 다중 슬라이드 보기입니다.
  dotsOutside: Boolean, // 페이지네이션을 트랙 밖에 둡니다.
  autoplayToggle: Boolean, // 자동재생 토글 버튼을 표시합니다.
  effect: String, // fade · coverflow 등 Swiper 효과입니다.
  autoplay: Boolean, // 자동재생을 켭니다.
  delay: { type: Number, default: 4000 }, // 자동재생 간격(ms)입니다.
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
const emit = defineEmits(['swiper']);
const attrs = useAttrs();
const rootRef = ref(null);
const swiperRef = ref(null);
const instance = ref(null);
const isPlaying = ref(Boolean(props.autoplay));
let resizeObserver = null;
const isCoverflow = computed(() => props.effect === 'coverflow');
const isGrid = computed(() => props.gridRows > 1);
const coverflowSides = computed(() =>
  Number(props.coverflowSides) === 1
    ? 1
    : Number(props.coverflowSides) === 2 || Number(props.coverflowSides) === 2.5
      ? 2
      : 1.5,
);
const resolvedSlidesPerView = computed(() =>
  isCoverflow.value || props.multi || props.slidesPerView === 'auto' ? 'auto' : props.slidesPerView,
);
const canLoop = computed(() => {
  const count = swiperRef.value?.querySelectorAll('.swiper-slide').length ?? 0;
  if (!props.loop || isGrid.value || count < 2) return false;
  if (isCoverflow.value)
    return count >= (coverflowSides.value === 1 ? 6 : coverflowSides.value === 1.5 ? 8 : 10);
  if (resolvedSlidesPerView.value === 'auto') return count >= 4;
  return (
    count >=
    Math.max(2, Math.ceil(Number(resolvedSlidesPerView.value) || 1) + 1 + (props.centered ? 1 : 0))
  );
});
function normalizeInitialSlide(value, count, loop) {
  const index = Number.isFinite(Number(value)) ? Math.trunc(Number(value)) : 0;
  if (count < 1) return 0;
  return loop ? ((index % count) + count) % count : Math.min(Math.max(index, 0), count - 1);
}
function updateCoverflowLayout() {
  const root = rootRef.value;
  const element = swiperRef.value;
  if (!root || !element) return Number(props.spaceBetween) || 0;
  if (!isCoverflow.value) {
    root.style.removeProperty('--carousel-coverflow-gap');
    root.style.removeProperty('--carousel-coverflow-slide-width');
    return Number(props.spaceBetween) || 0;
  }
  const baseGap = Number(props.spaceBetween) || 0;
  const width = element.clientWidth || root.clientWidth;
  root.style.setProperty('--carousel-coverflow-gap', `${baseGap}px`);
  if (!width) return baseGap;
  const slideWidth = (width - baseGap * 2) / 3;
  const effectiveGap = (width - slideWidth) / (2 * coverflowSides.value) - slideWidth;
  root.style.setProperty(
    '--carousel-coverflow-slide-width',
    `${Math.round(slideWidth * 100) / 100}px`,
  );
  return Math.round(effectiveGap * 100) / 100;
}
const classes = computed(() =>
  [
    'carousel',
    'carousel_demo',
    props.multi && 'carousel_multi',
    props.dotsOutside && 'carousel_dots-outside',
    isCoverflow.value && 'carousel_coverflow',
    isCoverflow.value && props.coverflowStyle === 'rise' && 'carousel_coverflow-rise',
    isCoverflow.value &&
      `carousel_coverflow-sides-${coverflowSides.value === 1.5 ? '15' : coverflowSides.value}`,
    isGrid.value && 'carousel_grid',
    props.pagination === 'custom' && 'carousel_pagination-custom',
    props.pagination === 'progressbar' && 'carousel_pagination-progress',
    props.thumbsControl && 'carousel_thumbs',
    props.size !== 'md' && ['sm', 'lg'].includes(props.size) && `carousel_${props.size}`,
    (props.autoplay || props.autoplayToggle) && !isPlaying.value && 'is-autoplay-paused',
    attrs.class,
  ].filter(Boolean),
);
const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
const configKeys = computed(() => [
  props.autoplay,
  props.centered,
  props.coverflowEffect,
  props.coverflowSides,
  props.coverflowStyle,
  props.delay,
  props.effect,
  props.freeMode,
  props.gridFill,
  props.gridRows,
  props.initialSlide,
  props.loop,
  props.multi,
  props.navigation,
  props.pagination,
  props.slidesPerGroup,
  props.slidesPerView,
  props.spaceBetween,
  props.thumbs,
  props.thumbsControl,
  props.watchSlidesProgress,
]);

function destroy() {
  instance.value?.destroy(true, true);
  instance.value = null;
}

async function init() {
  await nextTick();
  const element = swiperRef.value;
  const count = element?.querySelectorAll('.swiper-slide').length ?? 0;
  if (!element || !count) return;
  destroy();
  const paginationEl =
    rootRef.value?.querySelector(':scope > .swiper-pagination') ??
    element.querySelector('.swiper-pagination');
  const startIndex = normalizeInitialSlide(props.initialSlide, count, canLoop.value);
  const resolvedSpaceBetween = updateCoverflowLayout();
  const config = {
    initialSlide: startIndex,
    slidesPerView: resolvedSlidesPerView.value,
    slidesPerGroup: props.slidesPerGroup,
    spaceBetween: resolvedSpaceBetween,
    centeredSlides: props.centered || isCoverflow.value,
    loop: canLoop.value,
    grabCursor: true,
    keyboard: { enabled: true },
    observer: true,
    observeParents: true,
    watchSlidesProgress: props.watchSlidesProgress || props.thumbsControl || isCoverflow.value,
  };
  if (props.navigation)
    config.navigation = {
      prevEl: element.querySelector('.swiper-button-prev'),
      nextEl: element.querySelector('.swiper-button-next'),
    };
  if (props.pagination)
    config.pagination = {
      el: paginationEl,
      clickable: true,
      type: ['fraction', 'progressbar'].includes(props.pagination) ? props.pagination : 'bullets',
      ...(props.pagination === 'custom'
        ? {
            renderBullet: (index, bulletClass) =>
              `<span class="${bulletClass}">${index + 1}</span>`,
          }
        : {}),
    };
  if (props.autoplay) config.autoplay = { delay: props.delay, disableOnInteraction: false };
  if (isGrid.value)
    config.grid = { rows: props.gridRows, fill: props.gridFill === 'column' ? 'column' : 'row' };
  if (props.freeMode) config.freeMode = true;
  if (props.thumbsControl) config.slideToClickedSlide = true;
  if (props.thumbs && !props.thumbs.destroyed) config.thumbs = { swiper: props.thumbs };
  if (props.effect === 'fade')
    Object.assign(config, { effect: 'fade', fadeEffect: { crossFade: true } });
  if (isCoverflow.value)
    Object.assign(config, {
      effect: 'coverflow',
      coverflowEffect: {
        ...(props.coverflowStyle === 'rise'
          ? { rotate: 0, stretch: 0, depth: 28, scale: 0.92, modifier: 1, slideShadows: false }
          : { rotate: 24, stretch: 0, depth: 140, modifier: 1, slideShadows: true }),
        ...props.coverflowEffect,
      },
    });
  if (isCoverflow.value && canLoop.value)
    Object.assign(config, { loopAdditionalSlides: 0, loopAddBlankSlides: false });
  instance.value = new Swiper(element, config);
  isPlaying.value = Boolean(props.autoplay);
  emit('swiper', instance.value);
  window.requestAnimationFrame(() => {
    const swiper = instance.value;
    if (!swiper || swiper.destroyed) return;
    swiper.update();
    if (canLoop.value && typeof swiper.slideToLoop === 'function')
      swiper.slideToLoop(startIndex, 0, false);
  });
}

function toggleAutoplay() {
  if (!instance.value?.autoplay) return;
  if (instance.value.autoplay.running) instance.value.autoplay.stop();
  else instance.value.autoplay.start();
  isPlaying.value = instance.value.autoplay.running;
}

watch(configKeys, init, { flush: 'post' });
onMounted(() => {
  init();
  if (typeof ResizeObserver !== 'undefined' && rootRef.value) {
    resizeObserver = new ResizeObserver(() => {
      const gap = updateCoverflowLayout();
      if (!instance.value || instance.value.destroyed) return;
      instance.value.params.spaceBetween = gap;
      instance.value.update();
    });
    resizeObserver.observe(rootRef.value);
  }
});
onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  destroy();
});
defineExpose({ swiper: instance });
</script>

<template>
  <div ref="rootRef" v-bind="restAttrs" :class="classes" data-component="Carousel">
    <div
      ref="swiperRef"
      class="swiper"
      role="region"
      aria-roledescription="carousel"
      :aria-label="ariaLabel"
      data-swiper
      :data-swiper-effect="effect || undefined"
      :data-swiper-space-between="spaceBetween || undefined"
    >
      <div class="swiper-wrapper"><slot /></div>
      <div
        v-if="navigation"
        class="swiper-button-prev"
        aria-label="이전 슬라이드"
        :data-ripple="ripple ? 'surface' : 'false'"
      />
      <div
        v-if="navigation"
        class="swiper-button-next"
        aria-label="다음 슬라이드"
        :data-ripple="ripple ? 'surface' : 'false'"
      />
      <div v-if="pagination && !dotsOutside" class="swiper-pagination" />
    </div>
    <div v-if="pagination && dotsOutside" class="swiper-pagination" />
    <button
      v-if="autoplay || autoplayToggle"
      type="button"
      class="carousel_toggle"
      data-carousel-autoplay-toggle
      :data-ripple="ripple ? 'surface' : 'false'"
      :aria-label="isPlaying ? '슬라이드 정지' : '슬라이드 재생'"
      :aria-pressed="isPlaying"
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
