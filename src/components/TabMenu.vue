<script setup>
import { inject, onMounted, onUnmounted, ref, useAttrs, useId, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { formatComponentCode } from '@/utils/format-component-code';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  /** mode="dynamic"에서 v-model과 매칭되는 값 */
  value: String,
  active: Boolean,
  disabled: Boolean,
});

const tabs = inject('tabs', null);
const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

function formatSlotContent(slotFn) {
  const vnodes = slotFn?.();
  if (!vnodes?.length) return '';

  const vnode = vnodes[0];
  const componentName = vnode.type?.name || vnode.type?.__name;

  if (componentName === 'Icon' && vnode.props?.name) {
    return `<Icon name="${vnode.props.name}" />`;
  }

  if (componentName === 'Badge') {
    return formatComponentCode('Badge', vnode.props ?? {}, {}, vnode.props ?? {}, {
      defaults: { color: 'primary', variant: 'filled', size: 'md' },
      booleanProps: new Set(['round', 'checkable', 'add', 'closable', 'selected', 'disabled', 'count']),
      selfClosing: false,
    });
  }

  return '...';
}

function formatCode(props, slots, attrs) {
  const slotContent = {};

  if (slots.icon?.()) {
    slotContent.icon = formatSlotContent(slots.icon);
  }

  if (slots.badge?.()) {
    slotContent.badge = formatSlotContent(slots.badge);
  }

  return formatComponentCode('TabMenu', props, slots, attrs, {
    booleanProps: new Set(['active', 'disabled']),
    labelProp: 'label',
    selfClosing: true,
    slotContent,
  });
}

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const tabId = useId().replace(/:/g, '');

onMounted(() => {
  tabs?.registerTab({
    id: tabId,
    value: props.value ?? tabId,
    label: props.label,
    active: props.active,
    disabled: props.disabled,
    menuOnly: true,
    iconSlot: slots.icon ? () => slots.icon() : null,
    badgeSlot: slots.badge ? () => slots.badge() : null,
  });
});

onUnmounted(() => {
  tabs?.unregisterTab(tabId);
});
</script>

<template>
  <span ref="rootRef" hidden aria-hidden="true" />
</template>
