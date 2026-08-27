<!--
  FormActions 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmFormActions', inheritAttrs: false });
// 필요하면 div 대신 다른 시맨틱 루트로 액션 그룹을 렌더링할 수 있습니다.
const props = defineProps({ as: { type: [String, Object, Function], default: 'div' } });
const attrs = useAttrs();
// 폼 레이아웃이 인식하는 액션 클래스와 외부 클래스를 함께 적용합니다.
const classes = computed(() => ['form_actions', attrs.class].filter(Boolean));
</script>

<template>
  <!-- 제출·취소 등 폼 액션을 하나의 레이아웃 영역으로 묶습니다. -->
  <component :is="as" v-bind="attrs" :class="classes">
    <slot />
  </component>
</template>
