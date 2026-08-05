<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const VALID_VARIANTS = new Set(['bordered', 'shadow', 'flat']);
const VALID_SIZES = new Set(['sm', 'md', 'lg', 'compact']);
const VALID_LAYOUTS = new Set(['default', 'webzine', 'news', 'product']);
const VALID_MEDIA_POSITIONS = new Set(['top', 'left', 'right']);

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 루트 HTML 태그 또는 커스텀 컴포넌트 */
  as: {
    type: [String, Object, Function],
    default: undefined,
  },
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
  layout: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'webzine', 'news', 'product'].includes(v),
  },
  mediaPosition: {
    type: String,
    default: undefined,
    validator: (v) => v === undefined || ['top', 'left', 'right'].includes(v),
  },
  mediaDivider: {
    type: Boolean,
    default: true,
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
  defaults: {
    as: 'article',
    variant: 'bordered',
    size: 'md',
    layout: 'default',
    mediaPosition: 'top',
    mediaDivider: true,
    tag: 'article',
  },
  booleanProps: new Set(['hoverable', 'ripple']),
  falseExplicitProps: new Set(['mediaDivider']),
  skipProps: ['tag'],
  selfClosing: false,
});

const resolvedAs = computed(() => props.as || props.tag || 'article');
const resolvedVariant = computed(() =>
  VALID_VARIANTS.has(props.variant) ? props.variant : 'bordered'
);
const resolvedSize = computed(() =>
  VALID_SIZES.has(props.size) ? props.size : 'md'
);
const resolvedLayout = computed(() =>
  VALID_LAYOUTS.has(props.layout) ? props.layout : 'default'
);
const resolvedMediaPosition = computed(() => {
  if (VALID_MEDIA_POSITIONS.has(props.mediaPosition)) return props.mediaPosition;
  return ['news', 'product'].includes(resolvedLayout.value) ? 'left' : 'top';
});

useComponentDemoCode(
  formatCode,
  () => ({
    ...props,
    as: typeof resolvedAs.value === 'string' ? resolvedAs.value : undefined,
    variant: resolvedVariant.value,
    size: resolvedSize.value,
    layout: resolvedLayout.value,
    mediaPosition: resolvedMediaPosition.value,
  }),
  slots,
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = ['card'];
  if (resolvedVariant.value === 'shadow') classes.push('card_shadow');
  if (resolvedVariant.value === 'flat') classes.push('card_ghost');
  if (resolvedSize.value === 'sm') classes.push('card_sm');
  if (resolvedSize.value === 'lg') classes.push('card_lg');
  if (resolvedSize.value === 'compact') classes.push('card_compact');
  if (resolvedLayout.value === 'webzine') classes.push('card_webzine');
  if (resolvedLayout.value === 'news') classes.push('card_news');
  if (resolvedLayout.value === 'product') classes.push('card_product');
  if (resolvedMediaPosition.value === 'left') classes.push('card_media-left');
  if (resolvedMediaPosition.value === 'right') classes.push('card_media-right');
  if (!props.mediaDivider) classes.push('card_media-no-divider');
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
const hasSideMedia = computed(
  () => Boolean(slots.media) && ['left', 'right'].includes(resolvedMediaPosition.value)
);
</script>

<template>
  <component :is="resolvedAs" ref="rootRef" :class="rootClass" v-bind="bindAttrs">
    <template v-if="hasSideMedia">
      <slot v-if="resolvedMediaPosition === 'left'" name="media" />
      <div class="card_inner">
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
      </div>
      <slot v-if="resolvedMediaPosition === 'right'" name="media" />
    </template>
    <template v-else>
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
    </template>
  </component>
</template>
