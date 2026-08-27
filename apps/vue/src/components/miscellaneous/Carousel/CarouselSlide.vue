<!--
  CarouselSlide 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script setup>
defineOptions({ name: 'UxkmCarouselSlide' });
</script>

<template>
  <div class="swiper-slide"><slot /></div>
</template>
