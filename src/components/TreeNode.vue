<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  label: String,
  expanded: Boolean,
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

const formatCode = createComponentFormatter('TreeNode', {
  booleanProps: new Set(['expanded', 'selected', 'disabled', 'expandable', 'plusToggle', 'link']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const hasChildren = computed(() => Boolean(slots.default));
const showToggle = computed(() => props.expandable || hasChildren.value);

const itemClass = computed(() => attrs.class);

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
    v-bind="rippleAttrs"
    class="tree_item"
    :class="itemClass"
    role="treeitem"
    :aria-expanded="showToggle ? (expanded ? 'true' : 'false') : undefined"
  >
    <div :class="rowClass">
      <button
        v-if="showToggle"
        v-bind="childRippleAttrs"
        type="button"
        :class="toggleClass"
        :aria-expanded="expanded ? 'true' : 'false'"
        :aria-label="toggleLabel"
        :disabled="disabled || undefined"
      />
      <span v-else class="tree_toggle tree_toggle_placeholder" aria-hidden="true" />

      <slot name="prefix" />

      <span v-if="$slots.icon" class="tree_icon" aria-hidden="true">
        <slot name="icon" />
      </span>

      <button v-if="link" v-bind="childRippleAttrs" type="button" class="tree_link">
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

    <ul v-if="hasChildren && expanded !== false" class="tree" role="group">
      <slot />
    </ul>
  </li>
</template>
