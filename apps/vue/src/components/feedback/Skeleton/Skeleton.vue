<!--
  Skeleton 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmSkeleton', inheritAttrs: false });
const props = defineProps({
  active: { type: Boolean, default: true },
  avatar: Boolean,
  paragraph: { type: [Boolean, Number], default: false },
  round: Boolean,
  ariaLabel: { type: String, default: '콘텐츠 로딩 중' },
});
const attrs = useAttrs();
const count = computed(() =>
  props.paragraph === true
    ? 3
    : typeof props.paragraph === 'number'
      ? Math.max(0, props.paragraph)
      : 0,
);
const defaultCount = computed(() => (props.paragraph === false ? 3 : count.value));
const groupClass = computed(() =>
  ['skeleton_group', !props.active && 'skeleton_static'].filter(Boolean),
);
const itemClass = computed(() => ['skeleton', !props.active && 'skeleton_static'].filter(Boolean));
const widths = ['', 'skeleton_w-md', 'skeleton_w-sm'];
</script>

<template>
  <div
    v-bind="attrs"
    :class="groupClass"
    data-component="Skeleton"
    role="status"
    aria-live="polite"
    aria-busy="true"
    :aria-label="ariaLabel"
  >
    <div v-if="avatar" class="skeleton_row">
      <span :class="[...itemClass, 'skeleton_circle']" aria-hidden="true" />
      <div v-if="count" class="skeleton_row-body">
        <span
          v-for="index in count"
          :key="index"
          :class="[...itemClass, 'skeleton_text', widths[index - 1] || 'skeleton_w-lg']"
          aria-hidden="true"
        />
      </div>
    </div>
    <span v-else-if="round" :class="[...itemClass, 'skeleton_circle']" aria-hidden="true" />
    <template v-else>
      <span :class="[...itemClass, 'skeleton_title']" aria-hidden="true" />
      <span
        v-for="index in defaultCount"
        :key="index"
        :class="[...itemClass, 'skeleton_text', widths[index - 1]]"
        aria-hidden="true"
      />
    </template>
    <slot />
  </div>
</template>
