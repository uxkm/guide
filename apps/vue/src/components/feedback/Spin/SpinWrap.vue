<script setup>
import { computed } from 'vue';
import Spin from './Spin.vue';
defineOptions({ name: 'UxkmSpinWrap' });
const props = defineProps({ loading: Boolean, block: Boolean, blur: Boolean, tip: String, ariaLabel: { type: String, default: '로딩 중' } });
const classes = computed(() => ['spin_wrap', props.block && 'spin_wrap-block', props.blur && 'spin_wrap-blur', props.loading && 'is-loading'].filter(Boolean));
</script>

<template>
  <div :class="classes" data-component="SpinWrap" :aria-busy="loading || undefined"><div class="spin_wrap-body"><slot /></div><Spin v-if="loading" overlay :tip="tip" :aria-label="ariaLabel" /></div>
</template>
