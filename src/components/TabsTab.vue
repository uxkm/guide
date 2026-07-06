<script setup>
import Button from '@/components/Button.vue';

defineOptions({ inheritAttrs: false });

defineProps({
  id: {
    type: String,
    required: true,
  },
  panelId: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  active: Boolean,
  disabled: Boolean,
  tabindex: {
    type: Number,
    default: -1,
  },
  iconSlot: Function,
  badgeSlot: Function,
});

const emit = defineEmits(['click']);
</script>

<template>
  <Button
    tag="button"
    role="tab"
    type="button"
    variant="text"
    fit
    class="tabs_tab"
    :class="{ 'is-active': active, 'is-disabled': disabled }"
    :id="id"
    :aria-selected="active ? 'true' : 'false'"
    :aria-controls="panelId"
    :tabindex="tabindex"
    :disabled="disabled"
    :aria-disabled="disabled || undefined"
    v-bind="$attrs"
    @click="emit('click', $event)"
  >
    <template v-if="iconSlot" #icon-before>
      <span class="tabs_icon">
        <component :is="{ render: iconSlot }" />
      </span>
    </template>
    <span class="tabs_label">{{ label }}</span>
    <template v-if="badgeSlot" #icon-after>
      <component :is="{ render: badgeSlot }" />
    </template>
  </Button>
</template>
