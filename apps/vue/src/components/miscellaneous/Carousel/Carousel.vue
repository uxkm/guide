<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useAttrs, watch } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

defineOptions({ name: 'UxkmCarousel', inheritAttrs: false });

const props = defineProps({
  ariaLabel: { type: String, default: '콘텐츠 슬라이드' },
  size: { type: String, default: 'md' },
  multi: Boolean, dotsOutside: Boolean, autoplayToggle: Boolean, effect: String, autoplay: Boolean,
  delay: { type: Number, default: 4000 }, loop: Boolean,
  initialSlide: { type: Number, default: 0 }, slidesPerView: { type: [Number, String], default: 1 },
  slidesPerGroup: { type: Number, default: 1 }, spaceBetween: { type: Number, default: 0 }, centered: Boolean,
  pagination: { type: [Boolean, String], default: true }, navigation: { type: Boolean, default: true },
  gridRows: { type: Number, default: 1 }, gridFill: { type: String, default: 'row' },
  coverflowStyle: { type: String, default: 'tilt' }, coverflowSides: { type: [Number, String], default: 1.5 },
  coverflowEffect: Object, thumbs: Object, thumbsControl: Boolean, watchSlidesProgress: Boolean,
  freeMode: Boolean, ripple: { type: Boolean, default: true },
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
const coverflowSides = computed(() => Number(props.coverflowSides) === 1 ? 1 : (Number(props.coverflowSides) === 2 || Number(props.coverflowSides) === 2.5 ? 2 : 1.5));
const resolvedSlidesPerView = computed(() => isCoverflow.value || props.multi || props.slidesPerView === 'auto' ? 'auto' : props.slidesPerView);
const canLoop = computed(() => {
  const count = swiperRef.value?.querySelectorAll('.swiper-slide').length ?? 0;
  if (!props.loop || isGrid.value || count < 2) return false;
  if (isCoverflow.value) return count >= (coverflowSides.value === 1 ? 6 : coverflowSides.value === 1.5 ? 8 : 10);
  if (resolvedSlidesPerView.value === 'auto') return count >= 4;
  return count >= Math.max(2, Math.ceil(Number(resolvedSlidesPerView.value) || 1) + 1 + (props.centered ? 1 : 0));
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
  root.style.setProperty('--carousel-coverflow-slide-width', `${Math.round(slideWidth * 100) / 100}px`);
  return Math.round(effectiveGap * 100) / 100;
}
const classes = computed(() => [
  'carousel', 'carousel_demo', props.multi && 'carousel_multi', props.dotsOutside && 'carousel_dots-outside',
  isCoverflow.value && 'carousel_coverflow', isCoverflow.value && props.coverflowStyle === 'rise' && 'carousel_coverflow-rise',
  isCoverflow.value && `carousel_coverflow-sides-${coverflowSides.value === 1.5 ? '15' : coverflowSides.value}`,
  isGrid.value && 'carousel_grid', props.pagination === 'custom' && 'carousel_pagination-custom',
  props.pagination === 'progressbar' && 'carousel_pagination-progress', props.thumbsControl && 'carousel_thumbs',
  props.size !== 'md' && ['sm', 'lg'].includes(props.size) && `carousel_${props.size}`,
  (props.autoplay || props.autoplayToggle) && !isPlaying.value && 'is-autoplay-paused', attrs.class,
].filter(Boolean));
const restAttrs = computed(() => { const { class: _class, ...rest } = attrs; return rest; });
const configKeys = computed(() => [props.autoplay, props.centered, props.coverflowEffect, props.coverflowSides, props.coverflowStyle, props.delay, props.effect, props.freeMode, props.gridFill, props.gridRows, props.initialSlide, props.loop, props.multi, props.navigation, props.pagination, props.slidesPerGroup, props.slidesPerView, props.spaceBetween, props.thumbs, props.thumbsControl, props.watchSlidesProgress]);

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
  const paginationEl = rootRef.value?.querySelector(':scope > .swiper-pagination') ?? element.querySelector('.swiper-pagination');
  const startIndex = normalizeInitialSlide(props.initialSlide, count, canLoop.value);
  const resolvedSpaceBetween = updateCoverflowLayout();
  const config = {
    initialSlide: startIndex,
    slidesPerView: resolvedSlidesPerView.value,
    slidesPerGroup: props.slidesPerGroup, spaceBetween: resolvedSpaceBetween,
    centeredSlides: props.centered || isCoverflow.value,
    loop: canLoop.value,
    grabCursor: true, keyboard: { enabled: true }, observer: true, observeParents: true,
    watchSlidesProgress: props.watchSlidesProgress || props.thumbsControl || isCoverflow.value,
  };
  if (props.navigation) config.navigation = { prevEl: element.querySelector('.swiper-button-prev'), nextEl: element.querySelector('.swiper-button-next') };
  if (props.pagination) config.pagination = {
    el: paginationEl, clickable: true,
    type: ['fraction', 'progressbar'].includes(props.pagination) ? props.pagination : 'bullets',
    ...(props.pagination === 'custom' ? { renderBullet: (index, bulletClass) => `<span class="${bulletClass}">${index + 1}</span>` } : {}),
  };
  if (props.autoplay) config.autoplay = { delay: props.delay, disableOnInteraction: false };
  if (isGrid.value) config.grid = { rows: props.gridRows, fill: props.gridFill === 'column' ? 'column' : 'row' };
  if (props.freeMode) config.freeMode = true;
  if (props.thumbsControl) config.slideToClickedSlide = true;
  if (props.thumbs && !props.thumbs.destroyed) config.thumbs = { swiper: props.thumbs };
  if (props.effect === 'fade') Object.assign(config, { effect: 'fade', fadeEffect: { crossFade: true } });
  if (isCoverflow.value) Object.assign(config, { effect: 'coverflow', coverflowEffect: {
    ...(props.coverflowStyle === 'rise'
      ? { rotate: 0, stretch: 0, depth: 28, scale: 0.92, modifier: 1, slideShadows: false }
      : { rotate: 24, stretch: 0, depth: 140, modifier: 1, slideShadows: true }),
    ...props.coverflowEffect,
  } });
  if (isCoverflow.value && canLoop.value) Object.assign(config, { loopAdditionalSlides: 0, loopAddBlankSlides: false });
  instance.value = new Swiper(element, config);
  isPlaying.value = Boolean(props.autoplay);
  emit('swiper', instance.value);
  window.requestAnimationFrame(() => {
    const swiper = instance.value;
    if (!swiper || swiper.destroyed) return;
    swiper.update();
    if (canLoop.value && typeof swiper.slideToLoop === 'function') swiper.slideToLoop(startIndex, 0, false);
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
onBeforeUnmount(() => { resizeObserver?.disconnect(); destroy(); });
defineExpose({ swiper: instance });
</script>

<template>
  <div ref="rootRef" v-bind="restAttrs" :class="classes" data-component="Carousel">
    <div ref="swiperRef" class="swiper" role="region" aria-roledescription="carousel" :aria-label="ariaLabel" data-swiper :data-swiper-effect="effect || undefined" :data-swiper-space-between="spaceBetween || undefined">
      <div class="swiper-wrapper"><slot /></div>
      <div v-if="navigation" class="swiper-button-prev" aria-label="이전 슬라이드" :data-ripple="ripple ? 'surface' : 'false'" />
      <div v-if="navigation" class="swiper-button-next" aria-label="다음 슬라이드" :data-ripple="ripple ? 'surface' : 'false'" />
      <div v-if="pagination && !dotsOutside" class="swiper-pagination" />
    </div>
    <div v-if="pagination && dotsOutside" class="swiper-pagination" />
    <button v-if="autoplay || autoplayToggle" type="button" class="carousel_toggle" data-carousel-autoplay-toggle :data-ripple="ripple ? 'surface' : 'false'" :aria-label="isPlaying ? '슬라이드 정지' : '슬라이드 재생'" :aria-pressed="isPlaying" @click="toggleAutoplay">
      <svg class="carousel_toggle-icon carousel_toggle-icon-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
      <svg class="carousel_toggle-icon carousel_toggle-icon-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
    </button>
  </div>
</template>
