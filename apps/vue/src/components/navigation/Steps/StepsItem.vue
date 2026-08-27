<!--
  StepsItem 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, inject, onMounted, onUnmounted, useId, useSlots } from 'vue';
import Icon from '../../basic/Icon/Icon.vue';

defineOptions({ name: 'UxkmStepsItem' }); // 컴포넌트 표시 이름을 등록합니다.

// 제목, 설명, 상태, 번호, 마지막 여부를 prop으로 받습니다.
const props = defineProps({
  title: { type: String, required: true }, // 단계 제목 텍스트입니다.
  description: String, // 제목 아래 보조 설명입니다.
  status: String, // finished·active·wait·error 중 명시 상태입니다.
  index: Number, // 인디케이터에 표시할 단계 번호입니다.
  isLast: Boolean, // 마지막 단계여서 연결선을 숨길지 여부입니다.
});
const slots = useSlots(); // 아이콘·제목·설명 슬롯 존재 여부를 확인합니다.
const steps = inject('stepsContext', null); // 부모 Steps의 등록·상태 API입니다.
const id = useId().replaceAll(':', ''); // 등록에 쓰는 고유 id입니다.
onMounted(() => steps?.register(id)); // 마운트 시 부모에 등록합니다.
onUnmounted(() => steps?.unregister(id)); // 언마운트 시 등록을 해제합니다.
const stepIndex = computed(() => props.index ?? steps?.indexOf(id) ?? 0); // 최종 단계 번호입니다.
const resolvedStatus = computed(() => {
  const value = steps?.statusFor(stepIndex.value, props.status) ?? props.status ?? 'wait';
  return ['finished', 'active', 'wait', 'error'].includes(value) ? value : 'wait';
}); // 검증된 상태입니다.
const last = computed(() => props.isLast ?? steps?.isLast(id) ?? false); // 마지막 단계 여부입니다.
const navigable = computed(() => steps?.navigable?.value ?? false); // 클릭 탐색 가능 여부입니다.
function select() {
  steps?.select(stepIndex.value, resolvedStatus.value); // 부모에 단계 이동을 요청합니다.
}
</script>
<template>
  <!-- 탐색 가능하면 버튼, 아니면 정적 머리·본문을 렌더합니다. -->
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
