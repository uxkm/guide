<script setup>
import { computed, useAttrs } from 'vue';
defineOptions({ name: 'UxkmMenu', inheritAttrs: false });
const props = defineProps({ mode: { type: String, default: 'vertical', validator: (value) => ['vertical', 'horizontal', 'inline'].includes(value) }, bordered: Boolean, compact: Boolean, dark: Boolean, ariaLabel: String });
const attrs = useAttrs();
const classes = computed(() => ['menu', `menu_${props.mode}`, props.bordered && 'menu_bordered', props.compact && 'menu_compact', props.dark && 'menu_dark'].filter(Boolean));
function selectItem(event) { const link = event.target.closest?.('.menu_link'); if (!link || link.classList.contains('is-disabled') || link.parentElement?.classList.contains('menu_item-submenu')) return; event.currentTarget.querySelectorAll('.menu_link.is-active').forEach((item) => { item.classList.remove('is-active'); item.removeAttribute('aria-current'); }); link.classList.add('is-active'); link.setAttribute('aria-current', 'page'); }
</script>

<template>
  <nav v-bind="attrs" :class="classes" data-component="Menu" data-menu-selectable :aria-label="ariaLabel" @click="selectItem"><ul class="menu_list"><slot /></ul></nav>
</template>
