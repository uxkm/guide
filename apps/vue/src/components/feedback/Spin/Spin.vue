<script setup>
import { computed } from 'vue';
defineOptions({ name: 'UxkmSpin' });
const props = defineProps({ size: { type: String, default: 'md' }, tip: String, color: { type: String, default: 'primary' }, inline: Boolean, block: Boolean, overlay: Boolean, ariaLabel: { type: String, default: '로딩 중' } });
const classes = computed(() => ['spin', `color_${['primary', 'success', 'warning', 'danger'].includes(props.color) ? props.color : 'primary'}`, props.size !== 'md' && `spin_${props.size}`, props.inline && 'spin_inline', props.block && 'spin_block', props.overlay && 'spin_overlay'].filter(Boolean));
</script>

<template>
  <div :class="classes" data-component="Spin" role="status" aria-live="polite" aria-busy="true" :aria-label="ariaLabel"><span class="spin_indicator" aria-hidden="true" /><p v-if="tip" class="spin_tip">{{ tip }}</p><slot /></div>
</template>
