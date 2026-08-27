<!--
  Avatar 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, ref, useAttrs, watch } from 'vue';

// class를 포함한 전달 속성을 최외곽 span에 직접 적용합니다.
defineOptions({ name: 'UxkmAvatar', inheritAttrs: false });

// 이미지, fallback 이니셜, 크기·색상·상태 점을 공통 prop으로 받습니다.
const props = defineProps({
  src: String,
  alt: { type: String, default: '' },
  initials: String,
  color: String,
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  },
  square: Boolean,
  badgeColor: String,
  badgeLabel: String,
  ariaHidden: Boolean,
});

const attrs = useAttrs();
// 이미지 로드 실패 시 icon/default slot 또는 initials로 전환합니다.
const imageError = ref(false);
const showImage = computed(() => Boolean(props.src) && !imageError.value);
// prop과 사용자 class를 avatar_* · color_* 클래스에 연결합니다.
const classes = computed(() =>
  [
    'avatar',
    props.color && `color_${props.color}`,
    props.size !== 'md' && `avatar_${props.size}`,
    props.square && 'avatar_square',
    attrs.class,
  ].filter(Boolean),
);

// 새 이미지 주소는 이전 주소의 로드 오류 상태를 이어받지 않습니다.
watch(
  () => props.src,
  () => {
    imageError.value = false;
  },
);
</script>

<template>
  <!-- 이미지가 없거나 실패하면 slot과 initials를 사용하고 상태 점은 별도 접근성 이름을 가집니다. -->
  <span
    v-bind="attrs"
    :class="classes"
    :aria-hidden="ariaHidden || undefined"
    data-component="Avatar"
  >
    <img v-if="showImage" class="avatar_image" :src="src" :alt="alt" @error="imageError = true" />
    <slot v-else name="icon"
      ><slot>{{ initials }}</slot></slot
    >
    <span
      v-if="badgeColor"
      class="avatar_badge"
      :class="`color_${badgeColor}`"
      :aria-label="badgeLabel"
    />
  </span>
</template>
