<script setup>
import { inject, onMounted, onUnmounted, useId, useSlots } from 'vue';
const props = defineProps({ label: { type: String, required: true }, value: [String, Number], active: Boolean, disabled: Boolean });
const slots = useSlots(); const tabs = inject('tabsContext', null); const localId = useId().replaceAll(':', ''); const id = `tab-${localId}`; const key = props.value ?? localId;
onMounted(() => tabs?.registerTab({ id, panelId: null, key, label: props.label, active: props.active, disabled: props.disabled, icon: slots.icon, badge: slots.badge, menuOnly: true }));
onUnmounted(() => tabs?.unregisterTab(id));
</script>
<template><span hidden><slot /></span></template>
