<script setup>
import { computed, ref, useId, watch } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';
const props = defineProps({ label: String, expanded: Boolean, submenuId: String });
const open = ref(Boolean(props.expanded));
watch(() => props.expanded, (value) => { open.value = Boolean(value); });
const generatedId = useId().replaceAll(':', '');
const id = computed(() => props.submenuId || `menu-sub-${generatedId}`);
</script>
<template><li class="menu_item menu_item-submenu" :aria-expanded="open"><Button variant="text" class="menu_link" :expanded="open" :aria-controls="id" @click="open = !open"><template v-if="$slots.icon" #icon-before><slot name="icon" /></template><span class="menu_label">{{ label }}</span><template #icon-after><Icon name="chevron-down" class="menu_arrow" /></template></Button><ul :id="id" class="menu_submenu"><slot /></ul></li></template>
