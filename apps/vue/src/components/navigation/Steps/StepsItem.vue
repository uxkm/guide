<!--
  StepsItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, inject, onMounted, onUnmounted, useId, useSlots } from 'vue';
import Icon from '../../basic/Icon/Icon.vue';
defineOptions({ name: 'UxkmStepsItem' });
const props = defineProps({
  title: { type: String, required: true },
  description: String,
  status: String,
  index: Number,
  isLast: Boolean,
});
const slots = useSlots();
const steps = inject('stepsContext', null);
const id = useId().replaceAll(':', '');
onMounted(() => steps?.register(id));
onUnmounted(() => steps?.unregister(id));
const stepIndex = computed(() => props.index ?? steps?.indexOf(id) ?? 0);
const resolvedStatus = computed(() => {
  const value = steps?.statusFor(stepIndex.value, props.status) ?? props.status ?? 'wait';
  return ['finished', 'active', 'wait', 'error'].includes(value) ? value : 'wait';
});
const last = computed(() => props.isLast ?? steps?.isLast(id) ?? false);
const navigable = computed(() => steps?.navigable?.value ?? false);
function select() {
  steps?.select(stepIndex.value, resolvedStatus.value);
}
</script>
<template>
  <li
    :class="['steps_item', `is-${resolvedStatus}`]"
    :aria-current="!navigable && resolvedStatus === 'active' ? 'step' : undefined"
  >
    <button
      v-if="navigable"
      type="button"
      class="steps_trigger"
      :disabled="resolvedStatus === 'wait'"
      :aria-current="resolvedStatus === 'active' ? 'step' : undefined"
      @click="select"
    >
      <span class="steps_head"
        ><span class="steps_indicator" aria-hidden="true"
          ><slot name="icon"
            ><Icon v-if="resolvedStatus === 'finished'" name="check" class="steps_icon" /><Icon
              v-else-if="resolvedStatus === 'error'"
              name="close"
              class="steps_icon"
            /><span v-else class="steps_index">{{ stepIndex }}</span></slot
          ></span
        ><span v-if="!last" class="steps_tail" aria-hidden="true" /></span
      ><span class="steps_content"
        ><span class="steps_title"
          ><slot name="title">{{ title }}</slot></span
        ><span v-if="description || slots.description" class="steps_desc"
          ><slot name="description">{{ description }}</slot></span
        ></span
      ></button
    ><slot v-else
      ><div class="steps_head">
        <span class="steps_indicator" aria-hidden="true"
          ><slot name="icon"
            ><Icon v-if="resolvedStatus === 'finished'" name="check" class="steps_icon" /><Icon
              v-else-if="resolvedStatus === 'error'"
              name="close"
              class="steps_icon"
            /><span v-else class="steps_index">{{ stepIndex }}</span></slot
          ></span
        ><span v-if="!last" class="steps_tail" aria-hidden="true" />
      </div>
      <div class="steps_content">
        <p class="steps_title">
          <slot name="title">{{ title }}</slot>
        </p>
        <p v-if="description || slots.description" class="steps_desc">
          <slot name="description">{{ description }}</slot>
        </p>
      </div></slot
    >
  </li>
</template>
