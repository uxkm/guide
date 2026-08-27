<!--
  Skeleton 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 선언하지 않은 속성을 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmSkeleton', inheritAttrs: false });

// 애니메이션·형태·줄 수·접근성 이름을 prop으로 받습니다.
const props = defineProps({
  active: { type: Boolean, default: true }, // 쉬머 애니메이션 활성 여부입니다.
  avatar: Boolean, // 아바타 행 레이아웃 표시 여부입니다.
  paragraph: { type: [Boolean, Number], default: false }, // 본문 줄 수입니다. true면 3줄입니다.
  round: Boolean, // 원형 플레이스홀더만 표시합니다.
  ariaLabel: { type: String, default: '콘텐츠 로딩 중' }, // 로딩 영역의 접근성 이름입니다.
});

const attrs = useAttrs(); // 선언하지 않은 HTML 속성입니다.

// paragraph prop을 실제 줄 수로 변환합니다.
const count = computed(() =>
  props.paragraph === true
    ? 3
    : typeof props.paragraph === 'number'
      ? Math.max(0, props.paragraph)
      : 0,
);
// 기본 형태에서 paragraph가 false여도 제목+3줄을 보여 줍니다.
const defaultCount = computed(() => (props.paragraph === false ? 3 : count.value));
// 그룹 루트 클래스와 정적(비활성) 상태를 조합합니다.
const groupClass = computed(() =>
  ['skeleton_group', !props.active && 'skeleton_static'].filter(Boolean),
);
// 개별 플레이스홀더 항목 클래스입니다.
const itemClass = computed(() => ['skeleton', !props.active && 'skeleton_static'].filter(Boolean));
// 문단 줄별 기본 너비 변형 클래스입니다.
const widths = ['', 'skeleton_w-md', 'skeleton_w-sm'];
</script>

<template>
  <!-- Skeleton 그룹 루트입니다. -->
  <div
    v-bind="attrs"
    :class="groupClass"
    data-component="Skeleton"
    role="status"
    aria-live="polite"
    aria-busy="true"
    :aria-label="ariaLabel"
  >
    <!-- 아바타(원) + 본문 줄 행 레이아웃입니다. -->
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
    <!-- 원형 플레이스홀더만 표시합니다. -->
    <span v-else-if="round" :class="[...itemClass, 'skeleton_circle']" aria-hidden="true" />
    <!-- 제목 + 본문 줄 기본 형태입니다. -->
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
