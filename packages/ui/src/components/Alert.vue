<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useAlertDemoCode } from '@/composables/useDemoCode';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  color: {
    type: String,
    default: 'info',
    validator: (v) => ['info', 'success', 'warning', 'danger'].includes(v),
  },
  title: String,
  description: String,
  closable: Boolean,
  showIcon: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  role: {
    type: String,
    default: 'alert',
  },
});
const { rippleAttrs } = useRipple(props);


const emit = defineEmits(['close']);

const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const visible = ref(true);

useAlertDemoCode(props, rootRef, attrs);

const colorClass = computed(() => {
  if (props.color === 'danger') return 'color_error';
  return `color_${props.color}`;
});

const rootClass = computed(() => {
  const classes = ['alert', colorClass.value];
  if (props.size === 'sm') classes.push('alert_sm');
  if (props.size === 'lg') classes.push('alert_lg');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const hasTitle = computed(() => Boolean(props.title));
const hasDescription = computed(() => Boolean(props.description || slots.default));

const alertIconName = computed(() => {
  const names = {
    info: 'info',
    success: 'check-circle',
    warning: 'alert-triangle',
    danger: 'x-circle',
  };
  return names[props.color] ?? 'info';
});

function onClose() {
  visible.value = false;
  emit('close');
}
</script>

<template>
  <div
    v-if="visible"
    ref="rootRef"
    :class="rootClass"
    :role="role"
    v-bind="attrs"
  >
    <div v-if="showIcon" data-demo-slot="icon">
      <slot name="icon">
        <Icon :name="alertIconName" class="alert_icon" />
      </slot>
    </div>
    <div class="alert_body">
      <div v-if="hasTitle" class="alert_title">{{ title }}</div>
      <p v-if="hasDescription" class="alert_desc">
        <slot>{{ description }}</slot>
      </p>
      <slot name="actions" />
    </div>
    <Button
      v-if="closable"
      variant="ghost"
      icon-only
      class="alert_close"
      aria-label="알림 닫기"
      @click="onClose"
      v-bind="rippleAttrs"
    >
      <template #icon-before>
        <Icon name="close" size="sm" />
      </template>
    </Button>
  </div>
</template>
