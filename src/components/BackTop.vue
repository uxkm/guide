<script setup>
import { computed, onMounted, onUnmounted, ref, useAttrs, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { initBackTop } from '@/legacy/back-top-init';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  target: String,
  visibilityHeight: {
    type: [Number, String],
    default: 400,
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  color: {
    type: String,
    default: '',
    validator: (v) => ['', 'primary', 'ghost'].includes(v),
  },
  label: String,
  ariaLabel: {
    type: String,
    default: '맨 위로',
  },
  interactive: {
    type: Boolean,
    default: true,
  },
});
const { rippleAttrs } = useRipple(props);


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('BackTop', {
  defaults: { visibilityHeight: 400, size: 'md', ariaLabel: '맨 위로', interactive: true },
  booleanProps: new Set(['interactive', 'ripple']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['back_top'];
  if (props.size === 'sm') classes.push('back_top_sm');
  if (props.size === 'lg') classes.push('back_top_lg');
  if (props.color === 'primary') classes.push('back_top_primary');
  if (props.color === 'ghost') classes.push('back_top_ghost');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const rootAttrs = computed(() => {
  const result = {};
  if (props.interactive) result['data-back-top'] = '';
  if (props.target) result['data-target'] = props.target;
  if (props.visibilityHeight !== 400) {
    result['data-visibility-height'] = String(props.visibilityHeight);
  }
  return result;
});

let cleanupBackTop = null;

onMounted(() => {
  if (!props.interactive || !rootRef.value) return;
  cleanupBackTop = initBackTop(rootRef.value);
});

onUnmounted(() => {
  cleanupBackTop?.();
  cleanupBackTop = null;
});
</script>

<template>
  <div ref="rootRef" :class="rootClass" v-bind="rootAttrs">
    <Button variant="ghost" class="back_top_btn" :aria-label="ariaLabel" v-bind="rippleAttrs">
      <slot>
        <Icon name="arrow-up" class="back_top_icon" />
        <span v-if="label" class="back_top_label">{{ label }}</span>
      </slot>
    </Button>
  </div>
</template>
