<script setup>
import { computed, watch } from 'vue';
import Container from '@/components/Container.vue';
import FluidHintSnack from '@/storybook/FluidHintSnack.vue';
import { showFluidHint } from '@/storybook/fluid-hint-state.js';

const props = defineProps({
  fluid: Boolean,
  size: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'container',
  },
});

const emit = defineEmits(['update:fluid']);

const hasSize = computed(() => Boolean(props.size));

const containerProps = computed(() => ({
  fluid: hasSize.value && props.fluid,
  size: props.size || undefined,
}));

function blockFluidWithHint() {
  showFluidHint();
  if (props.fluid) emit('update:fluid', false);
}

watch(
  () => ({ fluid: props.fluid, size: props.size }),
  (current, previous) => {
    if (current.fluid && !current.size) {
      blockFluidWithHint();
      return;
    }
    if (!current.size && previous?.size && previous.fluid) {
      blockFluidWithHint();
    }
  },
  { immediate: true },
);
</script>

<template>
  <FluidHintSnack />
  <Container v-bind="containerProps">
    <div class="container_demo-fill">{{ label }}</div>
  </Container>
</template>
