<script setup>
import { computed, provide, ref, useAttrs } from 'vue';
import StepsItem from './StepsItem.vue';
defineOptions({ name: 'UxkmSteps', inheritAttrs: false });
const props = defineProps({ current: Number, direction: { type: String, default: 'horizontal' }, size: { type: String, default: 'md' }, dot: Boolean, iconStyle: Boolean, navigable: Boolean, align: { type: String, default: '' }, ariaLabel: String, items: { type: Array, default: () => [] } });
const emit = defineEmits(['update:current', 'change']);
const attrs = useAttrs(); const registry = new Map(); const order = ref([]);
const direction = computed(() => ['horizontal', 'vertical'].includes(props.direction) ? props.direction : 'horizontal');
const size = computed(() => ['sm', 'md', 'lg'].includes(props.size) ? props.size : 'md');
const classes = computed(() => ['steps', direction.value === 'vertical' && 'steps_vertical', size.value !== 'md' && `steps_${size.value}`, props.dot && 'steps_dot', props.iconStyle && 'steps_icon-style', props.navigable && 'steps_navigable', props.align === 'center' && 'steps_align-center'].filter(Boolean));
function register(id) { if (!registry.has(id)) registry.set(id, true); order.value = [...registry.keys()]; }
function unregister(id) { registry.delete(id); order.value = [...registry.keys()]; }
function indexOf(id) { return order.value.indexOf(id) + 1; }
function statusFor(index, explicit) { return explicit ?? (props.current == null ? 'wait' : index < props.current ? 'finished' : index === props.current ? 'active' : 'wait'); }
function select(index, status) { if (!props.navigable || status === 'wait' || status === 'active') return; emit('update:current', index); emit('change', index); }
provide('stepsContext', { navigable: computed(() => props.navigable), register, unregister, indexOf, isLast: (id) => order.value.indexOf(id) === order.value.length - 1, statusFor, select });
</script>
<template><ol v-bind="attrs" :class="classes" :aria-label="ariaLabel" data-component="Steps" data-steps><template v-if="items.length"><StepsItem v-for="(item, index) in items" :key="item.key ?? item.title" v-bind="item" :index="item.index ?? index + 1" :is-last="index === items.length - 1" /></template><slot v-else /></ol></template>
