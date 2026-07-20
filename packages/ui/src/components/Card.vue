<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  variant: {
    type: String,
    default: 'bordered',
    validator: (v) => ['bordered', 'shadow', 'flat'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'compact'].includes(v),
  },
  hoverable: Boolean,
  title: String,
  subtitle: String,
  tag: {
    type: String,
    default: 'article',
  },
});
const { rippleAttrs } = useRipple(props, { defaultEnabled: false });


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Card', {
  defaults: { variant: 'bordered', size: 'md', tag: 'article' },
  booleanProps: new Set(['hoverable', 'ripple']),
  skipProps: ['tag'],
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['card'];
  if (props.variant === 'shadow') classes.push('card_shadow');
  if (props.variant === 'flat') classes.push('card_ghost');
  if (props.size === 'sm') classes.push('card_sm');
  if (props.size === 'lg') classes.push('card_lg');
  if (props.size === 'compact') classes.push('card_compact');
  if (props.hoverable) classes.push('card_hover');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const bindAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return { ...rest, ...rippleAttrs.value };
});

const hasBuiltInHeader = computed(
  () => Boolean(props.title || props.subtitle || slots.header || slots.extra)
);
</script>

<template>
  <component :is="tag" ref="rootRef" :class="rootClass" v-bind="bindAttrs">
    <slot name="media" />
    <div v-if="hasBuiltInHeader" class="card_header">
      <div class="card_header-main">
        <slot name="header">
          <h3 v-if="title" class="card_title">{{ title }}</h3>
          <p v-if="subtitle" class="card_subtitle">{{ subtitle }}</p>
        </slot>
      </div>
      <div v-if="$slots.extra" class="card_extra">
        <slot name="extra" />
      </div>
    </div>
    <slot />
  </component>
</template>
