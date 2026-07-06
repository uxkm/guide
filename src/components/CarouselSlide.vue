<script setup>
/**
 * CarouselSlide — 캐러셀 단일 슬라이드
 *
 * Carousel 내부에서만 사용합니다.
 * 마운트 시 부모에 슬라이드 수를 등록해 데모 코드 생성에 활용합니다.
 */
import { inject, onMounted, onUnmounted } from 'vue';

const carousel = inject('carousel', null);

onMounted(() => {
  carousel?.registerSlide?.();
});

onUnmounted(() => {
  carousel?.unregisterSlide?.();
});
</script>

<template>
  <div class="swiper-slide">
    <slot />
  </div>
</template>
