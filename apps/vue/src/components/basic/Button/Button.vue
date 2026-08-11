<script setup>
defineOptions({ name: 'UxkmButton' });

defineProps({
  disabled: { type: Boolean, default: false },
  variant: { type: String, default: 'primary' }
});
</script>

<template>
  <button
    :class="['uxkm-button', `uxkm-button--${variant}`]"
    :disabled="disabled"
    data-component="Button"
    type="button"
  >
    <slot>Button</slot>
  </button>
</template>
