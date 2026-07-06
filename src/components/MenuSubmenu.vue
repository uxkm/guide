<script setup>
import { computed, ref, useId } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  label: String,
  expanded: Boolean,
  submenuId: String,
});
const { rippleAttrs } = useRipple(props);


const rootRef = ref(null);
const generatedId = useId().replace(/:/g, '');
const submenuId = computed(() => props.submenuId || `menu-sub-${generatedId}`);

const formatCode = createComponentFormatter('MenuSubmenu', {
  booleanProps: new Set(['expanded']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, {}, rootRef, {});
</script>

<template>
  <li
    ref="rootRef"
    class="menu_item menu_item-submenu"
    :aria-expanded="expanded ? 'true' : 'false'"
  >
    <Button
      variant="text"
      class="menu_link"
      :aria-expanded="expanded ? 'true' : 'false'"
      :aria-controls="submenuId"
      v-bind="rippleAttrs"
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
