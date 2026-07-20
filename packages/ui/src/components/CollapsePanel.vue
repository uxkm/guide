<script setup>
/**
 * CollapsePanel — 접이식 패널 그룹 내 단일 패널
 *
 * Collapse 내부에서만 사용합니다. inject('collapse')으로 부모와 연동됩니다.
 *
 * 접근성: button 트리거 + role="region" 본문, aria-expanded · aria-controls.
 */
import { computed, inject, onMounted, onUnmounted, ref, useId, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  /** 트리거에 표시할 제목 */
  label: {
    type: String,
    required: true,
  },
  /** 패널 본문 (p 태그로 렌더). default 슬롯으로 대체 가능 */
  content: String,
  /** 초기 열림 상태 */
  open: Boolean,
  /** 비활성 패널 (is-disabled + trigger disabled) */
  disabled: Boolean,
  /** 코드 예시용 extra 슬롯 마크업 (데모 코드 생성) */
  extraCode: String,
});
const { rippleAttrs } = useRipple(props);


const slots = useSlots();
const group = inject('collapse', null);
const triggerId = useId().replace(/:/g, '');
const bodyId = useId().replace(/:/g, '');
const isOpen = ref(props.open);

const panelClass = computed(() => [
  'collapse_panel',
  { 'is-open': isOpen.value, 'is-disabled': props.disabled },
]);

function toggle() {
  if (props.disabled || !group) return;
  group.togglePanel(triggerId, isOpen);
}

onMounted(() => {
  if (!group) return;

  group.registerPanel({
    id: triggerId,
    label: props.label,
    content: props.content,
    open: props.open,
    disabled: props.disabled,
    hasExtra: Boolean(slots.extra),
    extraCode: props.extraCode,
    isOpen,
  });
});

onUnmounted(() => {
  group?.unregisterPanel(triggerId);
});
</script>

<template>
  <div :class="panelClass">
    <div class="collapse_header">
      <Button
        :id="triggerId"
        variant="text"
        class="collapse_trigger"
        :expanded="isOpen"
        :aria-controls="bodyId"
        :disabled="disabled"
        @click="toggle"
        v-bind="rippleAttrs"
      >
        <span class="collapse_label">{{ label }}</span>
        <span v-if="$slots.extra" class="collapse_extra">
          <slot name="extra" />
        </span>
        <template #icon-after>
          <Icon name="chevron-down" class="collapse_icon" />
        </template>
      </Button>
    </div>
    <div
      :id="bodyId"
      class="collapse_body"
      role="region"
      :aria-labelledby="triggerId"
      :hidden="!isOpen || undefined"
    >
      <div class="collapse_content">
        <slot>
          <p v-if="content">{{ content }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>
