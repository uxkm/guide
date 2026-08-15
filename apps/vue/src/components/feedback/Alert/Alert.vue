<script setup>
import { computed, ref, useAttrs } from 'vue';

defineOptions({
  name: 'UxkmAlert',
  inheritAttrs: false,
});

const props = defineProps({
  color: { type: String, default: 'info' },
  title: String,
  description: String,
  closable: Boolean,
  showIcon: { type: Boolean, default: true },
  size: { type: String, default: 'md' },
  banner: Boolean,
  role: { type: String, default: 'alert' },
  closeLabel: { type: String, default: '알림 닫기' },
});

const emit = defineEmits(['close']);
const attrs = useAttrs();
const visible = ref(true);

const resolvedColor = computed(() => (
  ['info', 'success', 'warning', 'danger'].includes(props.color) ? props.color : 'info'
));

const classes = computed(() => {
  const colorClass = resolvedColor.value === 'danger'
    ? 'color_error'
    : `color_${resolvedColor.value}`;

  return [
    'alert',
    colorClass,
    props.size !== 'md' && `alert_${props.size}`,
    props.banner && 'alert_banner',
    attrs.class,
  ].filter(Boolean);
});

const restAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function handleClose(event) {
  visible.value = false;
  emit('close', event);
}
</script>

<template>
  <div
    v-if="visible"
    v-bind="restAttrs"
    :class="classes"
    data-component="Alert"
    :role="role"
  >
    <slot v-if="showIcon" name="icon">
      <svg
        class="alert_icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <template v-if="resolvedColor === 'info'">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </template>
        <template v-else-if="resolvedColor === 'success'">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </template>
        <template v-else-if="resolvedColor === 'warning'">
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <path d="M12 9v4M12 17h.01" />
        </template>
        <template v-else>
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6M9 9l6 6" />
        </template>
      </svg>
    </slot>

    <div class="alert_body">
      <div v-if="title" class="alert_title">
        {{ title }}
      </div>
      <p v-if="$slots.default || description" class="alert_desc">
        <slot>{{ description }}</slot>
      </p>
      <slot name="actions" />
    </div>

    <button
      v-if="closable"
      type="button"
      class="alert_close"
      :aria-label="closeLabel"
      @click="handleClose"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>
