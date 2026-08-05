<script setup>
import { computed, ref, useAttrs, useId, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  label: String,
  expanded: Boolean,
  submenuId: String,
});
const emit = defineEmits(['update:expanded', 'expanded-change']);
const { rippleAttrs } = useRipple(props);


const rootRef = ref(null);
const attrs = useAttrs();
const slots = useSlots();
const generatedId = useId().replace(/:/g, '');
const submenuId = computed(() => props.submenuId || `menu-sub-${generatedId}`);
const isExpanded = ref(Boolean(props.expanded));

const formatCode = createComponentFormatter('MenuSubmenu', {
  booleanProps: new Set(['expanded']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function toggleSubmenu() {
  isExpanded.value = !isExpanded.value;
  emit('update:expanded', isExpanded.value);
  emit('expanded-change', isExpanded.value);
}
</script>

<template>
  <li
    ref="rootRef"
    v-bind="rootAttrs"
    :class="['menu_item', 'menu_item-submenu', attrs.class]"
    :aria-expanded="isExpanded ? 'true' : 'false'"
  >
    <Button
      variant="text"
      class="menu_link"
      :expanded="isExpanded"
      :aria-controls="submenuId"
      v-bind="rippleAttrs"
      @click="toggleSubmenu"
    >
      <template v-if="$slots.icon" #icon-before>
        <slot name="icon" />
      </template>
      <span v-if="label" class="menu_label">{{ label }}</span>
      <template #icon-after>
        <Icon name="chevron-down" class="menu_arrow" />
      </template>
    </Button>
    <ul :id="submenuId" class="menu_submenu">
      <slot />
    </ul>
  </li>
</template>
