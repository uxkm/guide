<script setup>
import { computed, ref, useAttrs, useSlots } from 'vue';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useDatePickerDemoCode } from '@/composables/useDemoCode';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  disabled: Boolean,
  error: Boolean,
  success: Boolean,
  open: Boolean,
  placeholder: String,
  value: String,
  fit: Boolean,
  block: Boolean,
  inline: Boolean,
  clearable: Boolean,
  panelWide: Boolean,
  inputId: String,
  ariaLabel: String,
  ariaInvalid: [Boolean, String],
});
const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);

useDatePickerDemoCode(props, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['date_picker'];
  if (props.size === 'sm') classes.push('date_picker_sm');
  if (props.size === 'lg') classes.push('date_picker_lg');
  if (props.fit) classes.push('date_picker_fit');
  if (props.block) classes.push('date_picker_block');
  if (props.inline) classes.push('date_picker_inline');
  if (props.disabled) classes.push('is-disabled');
  if (props.error) classes.push('is-error');
  if (props.success) classes.push('is-success');
  if (props.open) classes.push('is-open');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const inputClass = computed(() => {
  const classes = ['date_picker_input'];
  if (!props.value && props.placeholder) classes.push('date_picker_placeholder');
  return classes;
});

const showTrigger = computed(() => !props.inline);
const isExpanded = computed(() => props.open);
const hasValue = computed(() => Boolean(props.value));
</script>

<template>
  <div ref="rootRef" :class="rootClass"
    v-bind="rippleAttrs"
  >
    <div v-if="showTrigger" class="date_picker_trigger">
      <input
        v-bind="childRippleAttrs"
        :id="inputId"
        type="text"
        :class="inputClass"
        :value="value"
        :placeholder="placeholder"
        readonly
        :disabled="disabled"
        aria-haspopup="dialog"
        :aria-expanded="isExpanded ? 'true' : 'false'"
        :aria-label="ariaLabel"
        :aria-invalid="ariaInvalid === true || ariaInvalid === 'true' ? 'true' : ariaInvalid === false || ariaInvalid === 'false' ? 'false' : undefined"
      />
      <button
        v-if="clearable && hasValue"
        type="button"
        class="date_picker_clear"
        data-ripple="surface"
        aria-label="날짜 지우기"
      >
        <Icon name="close" size="sm" />
      </button>
      <Button
        v-bind="childRippleAttrs"
        variant="ghost"
        icon-only
        class="date_picker_btn"
        :disabled="disabled"
        :aria-label="isExpanded ? '캘린더 닫기' : '캘린더 열기'"
        :expanded="isExpanded"
      >
        <template #icon-before>
          <Icon name="calendar" size="sm" />
        </template>
      </Button>
    </div>
    <div
      v-if="$slots.panel || inline"
      class="date_picker_panel"
      :class="{ 'date_picker_panel-wide': panelWide }"
      role="dialog"
      aria-label="날짜 선택"
      data-demo-slot="panel"
    >
      <slot name="panel" />
    </div>
  </div>
</template>
