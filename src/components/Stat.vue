<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import Icon from '@/components/Icon.vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  title: String,
  value: String,
  prefix: String,
  suffix: String,
  description: String,
  trend: String,
  trendColor: String,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  card: Boolean,
  shadow: Boolean,
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Stat', {
  defaults: { size: 'md' },
  booleanProps: new Set(['card', 'shadow']),
  labelProp: 'title',
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['stat'];
  if (props.size === 'sm') classes.push('stat_sm');
  if (props.size === 'lg') classes.push('stat_lg');
  if (props.card) classes.push('stat_card');
  if (props.shadow) classes.push('stat_shadow');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const trendClass = computed(() => {
  const classes = ['stat_trend'];
  if (props.trendColor) classes.push(`color_${props.trendColor}`);
  return classes;
});

const descClass = computed(() => {
  const classes = ['stat_desc'];
  if (props.trendColor && props.description) classes.push(`color_${props.trendColor}`);
  return classes;
});

const showHeader = computed(() => Boolean(props.title && props.trend));
const showValueRow = computed(() => Boolean(props.prefix || props.suffix || slots.value));
</script>

<template>
  <div ref="rootRef" :class="rootClass">
    <div v-if="showHeader" class="stat_header">
      <span class="stat_label">{{ title }}</span>
      <span :class="trendClass">
        <slot name="trend-icon">
          <Icon name="chevron-up" />
        </slot>
        {{ trend }}
      </span>
    </div>
    <span v-else-if="title" class="stat_label">{{ title }}</span>

    <div v-if="showValueRow" class="stat_value-row">
      <span v-if="prefix" class="stat_prefix">{{ prefix }}</span>
      <span v-if="value || $slots.value" class="stat_value">
        <slot name="value">{{ value }}</slot>
      </span>
      <span v-if="suffix" class="stat_suffix">{{ suffix }}</span>
    </div>
    <span v-else-if="value || $slots.value" class="stat_value">
      <slot name="value">{{ value }}</slot>
    </span>

    <span v-if="description" :class="descClass">{{ description }}</span>
    <span v-else-if="trend && !showHeader" :class="trendClass">
      <slot name="trend-icon">
        <Icon name="chevron-up" />
      </slot>
      {{ trend }}
    </span>

    <slot />
  </div>
</template>
