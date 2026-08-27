<!--
  Button 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script setup>
import { computed } from 'vue';

defineOptions({ name: 'UxkmButton' });

const props = defineProps({
  label: { type: String, default: 'Button' },
  ripple: { type: Boolean, default: true },
  color: { type: String, default: 'primary' },
  disabled: { type: Boolean, default: false },
  variant: { type: String, default: 'filled' },
  size: { type: String, default: 'md' },
  iconOnly: { type: Boolean, default: false },
  vertical: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  block: { type: Boolean, default: false },
  grow: { type: [Boolean, String], default: false },
  fit: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  open: { type: Boolean, default: false },
  error: { type: Boolean, default: false },
  placeholder: { type: Boolean, default: false },
  selectText: { type: Boolean, default: false },
  selectCaret: { type: Boolean, default: false },
  ariaDisabled: { type: Boolean, default: false },
  ariaLabel: { type: String, default: undefined },
  haspopup: { type: [Boolean, String], default: undefined },
  expanded: { type: Boolean, default: undefined },
  invalid: { type: Boolean, default: false },
  tag: { type: String, default: 'button' },
  href: { type: String, default: undefined },
  role: { type: String, default: undefined },
  tabindex: { type: [Number, String], default: undefined },
  type: { type: String, default: 'button' },
});

const emit = defineEmits(['click', 'keydown']);
const inactive = computed(() => props.disabled || props.ariaDisabled || props.loading);
const needsButtonSemantics = computed(
  () => props.tag === 'div' || (props.tag === 'a' && !props.href),
);
const classes = computed(() =>
  [
    'btn',
    props.variant === 'select' ? 'btn_select' : `btn_${props.variant}`,
    props.variant !== 'ghost' ? `color_${props.color}` : '',
    props.size !== 'md' ? `btn_${props.size}` : '',
    props.selectText ? 'btn_select-text' : '',
    props.placeholder ? 'btn_select-placeholder' : '',
    props.iconOnly ? 'btn_icon-only' : '',
    props.vertical ? 'btn_vertical' : '',
    props.round ? 'btn_round' : '',
    props.block ? 'btn_block' : '',
    props.grow === true ? 'btn_grow' : '',
    props.grow === '2' ? 'btn_grow-2' : '',
    props.fit ? 'btn_fit' : '',
    props.ariaDisabled ? 'is-disabled' : '',
    props.loading ? 'is-loading' : '',
    props.open ? 'is-open' : '',
    props.error ? 'is-error' : '',
  ].filter(Boolean),
);

function handleClick(event) {
  if (inactive.value) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  emit('click', event);
}

function handleKeydown(event) {
  if (inactive.value) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (needsButtonSemantics.value && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    event.currentTarget.click();
  }
  emit('keydown', event);
}
</script>

<template>
  <component
    :is="tag"
    :aria-busy="loading || undefined"
    :aria-disabled="ariaDisabled || (tag !== 'button' && disabled) || undefined"
    :aria-expanded="expanded ?? (open || undefined)"
    :aria-haspopup="haspopup"
    :aria-invalid="invalid || error || undefined"
    :aria-label="ariaLabel"
    :class="classes"
    data-component="Button"
    :data-ripple="ripple ? 'true' : 'false'"
    :disabled="tag === 'button' ? disabled : undefined"
    :href="tag === 'a' ? href : undefined"
    :role="role ?? (needsButtonSemantics ? 'button' : undefined)"
    :tabindex="
      inactive && tag !== 'button' ? -1 : (tabindex ?? (needsButtonSemantics ? 0 : undefined))
    "
    :type="tag === 'button' ? type : undefined"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <span v-if="loading" class="btn_spinner" aria-hidden="true" />
    <slot name="icon-before" />
    <template v-if="!iconOnly"
      ><span class="btn_label"
        ><slot>{{ label }}</slot></span
      ></template
    >
    <slot v-else />
    <slot name="icon-after" />
    <svg
      v-if="variant === 'select' || selectCaret"
      class="icon"
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.8"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  </component>
</template>
