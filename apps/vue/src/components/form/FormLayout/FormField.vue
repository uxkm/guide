<!--
  FormField 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmFormField', inheritAttrs: false });
// 필드 루트, 레이블 연결, 필수 표시와 상태 메시지를 하나의 API로 제공합니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' },
  label: { type: String, default: '' },
  for: { type: String, default: '' },
  required: Boolean,
  hint: { type: String, default: '' },
  error: { type: String, default: '' },
  success: { type: String, default: '' },
  fit: Boolean,
});
const attrs = useAttrs();
// 개별 필드 너비 변형과 사용자가 전달한 클래스를 함께 유지합니다.
const classes = computed(() =>
  ['form_field', props.fit && 'form_field_fit', attrs.class].filter(Boolean),
);
</script>

<template>
  <component :is="as" v-bind="attrs" :class="classes">
    <!-- label과 for를 연결하고 필수 상태는 시각·보조기술 텍스트를 모두 제공합니다. -->
    <label v-if="label" class="form_field-label" :for="props.for">
      {{ label }}
      <span v-if="required" class="form_field-required">
        <span aria-hidden="true">*</span>
        <span class="form_field-required-text">필수 항목</span>
      </span>
    </label>
    <!-- 입력 컴포넌트 종류와 관계없이 동일한 control 영역에 배치합니다. -->
    <div class="form_field-control">
      <slot />
    </div>
    <!-- 오류는 도움말보다 우선하며 즉시 읽히도록 alert 역할을 사용합니다. -->
    <p v-if="error" class="form_field-error" role="alert">{{ error }}</p>
    <p v-else-if="hint" class="form_field-hint">{{ hint }}</p>
    <!-- 성공 메시지는 도움말·오류와 독립적으로 필요한 경우 표시합니다. -->
    <p v-if="success" class="form_field-success">{{ success }}</p>
  </component>
</template>
