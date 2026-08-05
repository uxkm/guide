<script setup>
import { computed, ref, useAttrs, useSlots, watch } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { formatTreeNodeCode } from '@/utils/format-tree-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  label: String,
  expanded: {
    type: Boolean,
    default: undefined,
  },
  selected: Boolean,
  disabled: Boolean,
  expandable: Boolean,
  plusToggle: Boolean,
  toggleLabel: String,
  link: Boolean,
  meta: String,
});
const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

useComponentDemoCode(formatTreeNodeCode, props, slots, rootRef, attrs);

const emit = defineEmits(['update:expanded']);

const hasChildren = computed(() => Boolean(slots.default));
const showToggle = computed(() => props.expandable || hasChildren.value);

const isExpanded = ref(props.expanded !== false);

watch(
  () => props.expanded,
  (value) => {
    if (value !== undefined) isExpanded.value = value !== false;
  },
);

function toggleExpand() {
  if (props.disabled) return;
  isExpanded.value = !isExpanded.value;
  emit('update:expanded', isExpanded.value);
}

const itemClass = computed(() => ['tree_item', attrs.class].filter(Boolean));

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

const rootAttrs = computed(() => ({
  ...rippleAttrs.value,
  ...fallthroughAttrs.value,
}));

const rowClass = computed(() => {
  const classes = ['tree_row'];
  if (props.selected) classes.push('is-selected');
  if (props.disabled) classes.push('is-disabled');
  return classes;
});

const toggleClass = computed(() => {
  const classes = ['tree_toggle'];
  if (props.plusToggle) classes.push('tree_toggle-plus');
  return classes;
});
</script>

<template>
  <li
    ref="rootRef"
    v-bind="rootAttrs"
    :class="itemClass"
    role="treeitem"
    :aria-expanded="showToggle ? (isExpanded ? 'true' : 'false') : undefined"
    :aria-selected="selected ? 'true' : undefined"
    :aria-disabled="disabled ? 'true' : undefined"
  >
    <div :class="rowClass">
      <button
        v-if="showToggle"
        v-bind="childRippleAttrs"
        type="button"
        :class="toggleClass"
        :aria-expanded="isExpanded ? 'true' : 'false'"
        :aria-label="toggleLabel"
        :disabled="disabled || undefined"
        @click="toggleExpand"
      />
      <span v-else class="tree_toggle tree_toggle_placeholder" aria-hidden="true" />

      <slot name="prefix" />

      <span v-if="$slots.icon" class="tree_icon" aria-hidden="true">
        <slot name="icon" />
      </span>

      <button
        v-if="link"
        v-bind="childRippleAttrs"
        type="button"
        class="tree_link"
        :disabled="disabled || undefined"
      >
        <slot name="label">
          <span class="tree_label">{{ label }}</span>
        </slot>
      </button>
      <slot v-else name="label">
        <span class="tree_label">{{ label }}</span>
      </slot>

      <span v-if="meta || $slots.meta" class="tree_meta">
        <slot name="meta">{{ meta }}</slot>
      </span>
    </div>

    <ul v-if="hasChildren && isExpanded" class="tree" role="group">
      <slot />
    </ul>
  </li>
</template>
