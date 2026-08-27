<!--
  TabPanel 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, inject, onMounted, onUnmounted, useId, useSlots } from 'vue';
const props = defineProps({
  label: { type: String, required: true },
  value: [String, Number],
  active: Boolean,
  disabled: Boolean,
});
const slots = useSlots();
const tabs = inject('tabsContext', null);
const localId = useId().replaceAll(':', '');
const tabId = `tab-${localId}`;
const panelId = `panel-${localId}`;
const key = props.value ?? localId;
const activeNow = computed(() => tabs?.isActive(key) ?? props.active);
onMounted(() =>
  tabs?.registerTab({
    id: tabId,
    panelId,
    key,
    label: props.label,
    active: props.active,
    disabled: props.disabled,
    icon: slots.icon,
    badge: slots.badge,
  }),
);
onUnmounted(() => tabs?.unregisterTab(tabId));
</script>
<template>
  <div
    :id="panelId"
    :class="['tabs_panel', activeNow && 'is-active']"
    role="tabpanel"
    :aria-labelledby="tabId"
    :hidden="!activeNow || undefined"
  >
    <slot />
  </div>
</template>
