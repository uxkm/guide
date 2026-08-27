<!--
  TreeNode 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, ref, useSlots, watch } from 'vue';
defineOptions({ name: 'UxkmTreeNode' });
const props = defineProps({
  label: String,
  expanded: { type: Boolean, default: undefined },
  selected: Boolean,
  disabled: Boolean,
  expandable: Boolean,
  plusToggle: Boolean,
  toggleLabel: String,
  link: Boolean,
  meta: String,
});
const emit = defineEmits(['update:expanded']);
const slots = useSlots();
// expanded prop과 내부 상태를 동기화해 제어·비제어 사용을 모두 지원합니다.
const isExpanded = ref(props.expanded !== false);
watch(
  () => props.expanded,
  (value) => {
    if (value !== undefined) isExpanded.value = value !== false;
  },
);
const hasChildren = computed(() => Boolean(slots.default));
const showToggle = computed(() => props.expandable || hasChildren.value);
// 비활성 노드는 유지하고 토글 시 update:expanded 이벤트를 같은 값으로 전달합니다.
const toggle = () => {
  if (!props.disabled) {
    isExpanded.value = !isExpanded.value;
    emit('update:expanded', isExpanded.value);
  }
};
</script>
<!-- treeitem·group 관계와 aria-expanded를 실제 하위 목록 표시 상태에 맞춥니다. -->
<template>
  <li
    class="tree_item"
    data-component="TreeNode"
    role="treeitem"
    :aria-expanded="showToggle ? isExpanded : undefined"
  >
    <div :class="['tree_row', selected && 'is-selected', disabled && 'is-disabled']">
      <button
        v-if="showToggle"
        type="button"
        :class="['tree_toggle', plusToggle && 'tree_toggle-plus']"
        :aria-expanded="isExpanded"
        :aria-label="toggleLabel"
        :disabled="disabled || undefined"
        @click="toggle"
      /><span v-else class="tree_toggle tree_toggle_placeholder" aria-hidden="true" /><slot
        name="prefix"
      /><span v-if="$slots.icon" class="tree_icon" aria-hidden="true"><slot name="icon" /></span
      ><button v-if="link" type="button" class="tree_link" :disabled="disabled || undefined">
        <slot name="label"
          ><span class="tree_label">{{ label }}</span></slot
        ></button
      ><slot v-else name="label"
        ><span class="tree_label">{{ label }}</span></slot
      ><span v-if="meta || $slots.meta" class="tree_meta"
        ><slot name="meta">{{ meta }}</slot></span
      >
    </div>
    <ul v-if="hasChildren" v-show="isExpanded" class="tree" role="group">
      <slot />
    </ul>
  </li>
</template>
