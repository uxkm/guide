<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useModalDemoCode } from '@/composables/useDemoCode';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  id: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'fullscreen'].includes(v),
  },
  scrollable: Boolean,
  /** 백드롭 표시. false 시 data-modal-backdrop="false" */
  backdrop: {
    type: Boolean,
    default: true,
  },
  title: String,
  open: Boolean,
});
const { rippleAttrs } = useRipple(props);


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const titleId = `${props.id}-title`;

useModalDemoCode(props, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['modal'];
  if (props.size === 'sm') classes.push('modal_sm');
  if (props.size === 'lg') classes.push('modal_lg');
  if (props.size === 'fullscreen') classes.push('modal_fullscreen');
  if (props.scrollable) classes.push('modal_scrollable');
  if (props.open) classes.push('is-open');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <div
    ref="rootRef"
    :id="id"
    :class="rootClass"
    data-modal
    :data-modal-backdrop="backdrop ? undefined : 'false'"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="titleId"
    tabindex="-1"
    :hidden="!open || undefined"
    v-bind="fallthroughAttrs"
  >
    <div class="modal_backdrop" data-modal-close aria-hidden="true" />
    <div class="modal_dialog">
      <div v-if="$slots.header || title" class="modal_header" data-demo-slot="header">
        <slot name="header">
          <h2 class="modal_title" :id="titleId">{{ title }}</h2>
        </slot>
        <Button
          variant="ghost"
          icon-only
          class="modal_close"
          data-modal-close
          aria-label="닫기"
          v-bind="rippleAttrs"
        >
          <template #icon-before>
            <Icon name="close" size="sm" class="modal_close-icon" />
          </template>
        </Button>
      </div>
      <div class="modal_body" data-demo-slot="default">
        <slot />
      </div>
      <div v-if="$slots.footer" class="modal_footer" data-demo-slot="footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
