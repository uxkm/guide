<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ name: 'UxkmCardDeck', inheritAttrs: false });
const props = defineProps({ columns: { type: [String, Number], default: undefined } });
const attrs = useAttrs();
const classes = computed(() => ['card_deck', [2, 3].includes(Number(props.columns)) && `card_deck-${Number(props.columns)}`, attrs.class].filter(Boolean));
const rootAttrs = computed(() => { const { class: _class, ...rest } = attrs; return rest; });
</script>

<template>
  <div v-bind="rootAttrs" :class="classes" data-component="CardDeck"><slot /></div>
</template>
