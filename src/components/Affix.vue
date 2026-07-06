<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  target: String,
  offsetTop: {
    type: [Number, String],
    default: 0,
  },
  offsetBottom: [Number, String],
  skin: {
    type: String,
    default: '',
    validator: (v) => ['', 'bar', 'anchor'].includes(v),
  },
  interactive: {
    type: Boolean,
    default: true,
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Affix', {
  defaults: { offsetTop: 0, interactive: true },
  booleanProps: new Set(['interactive']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['affix'];
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const targetClass = computed(() => {
  const classes = ['affix_target'];
  if (props.skin === 'bar') classes.push('affix_bar');
  if (props.skin === 'anchor') classes.push('affix_anchor');
  return classes;
});

const rootAttrs = computed(() => {
  const result = {};
  if (props.interactive) result['data-affix'] = '';
  if (props.target) result['data-target'] = props.target;
  if (props.offsetTop && Number(props.offsetTop) !== 0) {
    result['data-offset-top'] = String(props.offsetTop);
  }
  if (props.offsetBottom !== undefined && props.offsetBottom !== null && props.offsetBottom !== '') {
    result['data-offset-bottom'] = String(props.offsetBottom);
  }
  return result;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div ref="rootRef" :class="rootClass" v-bind="{ ...fallthroughAttrs, ...rootAttrs }">
    <div class="affix_placeholder" aria-hidden="true" hidden />
    <div :class="targetClass">
      <slot />
    </div>
  </div>
</template>
