<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

defineOptions({ inheritAttrs: false });

const PARAGRAPH_WIDTHS = ['', 'skeleton_w-md', 'skeleton_w-sm'];

function resolveParagraphCount(paragraph) {
  if (paragraph === true) return 3;
  if (typeof paragraph !== 'number' || !Number.isFinite(paragraph)) return 0;
  return Math.max(0, Math.floor(paragraph));
}

const props = defineProps({
  active: {
    type: Boolean,
    default: true,
  },
  avatar: Boolean,
  paragraph: {
    type: [Boolean, Number],
    default: false,
  },
  round: Boolean,
  ariaLabel: {
    type: String,
    default: '콘텐츠 로딩 중',
  },
});

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

const formatCode = createComponentFormatter('Skeleton', {
  defaults: { active: true },
  booleanProps: new Set(['active', 'avatar', 'round']),
  selfClosing: false,
});

useComponentDemoCode(formatCode, props, slots, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['skeleton_group'];
  if (!props.active) classes.push('skeleton_static');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const skeletonBaseClass = computed(() => {
  const classes = ['skeleton'];
  if (!props.active) classes.push('skeleton_static');
  return classes;
});

const paragraphCount = computed(() => resolveParagraphCount(props.paragraph));
const defaultParagraphCount = computed(() =>
  props.paragraph === false ? 3 : paragraphCount.value
);

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div
    ref="rootRef"
    :class="rootClass"
    role="status"
    aria-live="polite"
    aria-busy="true"
    :aria-label="ariaLabel"
    v-bind="fallthroughAttrs"
  >
    <template v-if="avatar || round">
      <div v-if="avatar" class="skeleton_row">
        <span :class="[...skeletonBaseClass, 'skeleton_circle']" aria-hidden="true" />
        <div v-if="paragraphCount" class="skeleton_row-body">
          <span
            v-for="i in paragraphCount"
            :key="i"
            :class="[...skeletonBaseClass, 'skeleton_text', PARAGRAPH_WIDTHS[i - 1] || 'skeleton_w-lg']"
            aria-hidden="true"
          />
        </div>
      </div>
      <span v-else-if="round" :class="[...skeletonBaseClass, 'skeleton_circle']" aria-hidden="true" />
    </template>
    <template v-else>
      <template v-if="defaultParagraphCount">
        <span :class="[...skeletonBaseClass, 'skeleton_title']" aria-hidden="true" />
        <span
          v-for="i in defaultParagraphCount"
          :key="i"
          :class="[...skeletonBaseClass, 'skeleton_text', PARAGRAPH_WIDTHS[i - 1] || '']"
          aria-hidden="true"
        />
      </template>
    </template>
    <slot />
  </div>
</template>
