<!--
  Tabs 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  useAttrs,
  useId,
  watch,
  watchEffect,
} from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';
defineOptions({ name: 'UxkmTabs', inheritAttrs: false });
const props = defineProps({
  mode: { type: String, default: 'panels' },
  modelValue: [String, Number],
  variant: { type: String, default: 'line' },
  size: { type: String, default: 'md' },
  layout: { type: String, default: 'auto' },
  vertical: Boolean,
  scrollable: Boolean,
  ariaLabel: String,
  items: { type: Array, default: () => [] },
  indicator: { type: String, default: 'static' },
});
const emit = defineEmits(['update:modelValue']);
const attrs = useAttrs();
const uid = useId().replaceAll(':', '');
const listRef = ref(null);
const indicatorStyle = ref(null);
const scrollState = ref({ overflow: false, prev: false, next: false });
const registered = ref([]);
const internal = ref(undefined);
const selected = computed(() => props.modelValue ?? internal.value);
const tabs = computed(() =>
  props.items.length
    ? props.items.map((item, index) => ({
        ...item,
        id: `${uid}-tab-${index}`,
        panelId: `${uid}-panel-${index}`,
        key: item.key ?? item.value ?? `tab-${index}`,
      }))
    : registered.value,
);
const scrollNav = computed(() => props.layout === 'scroll' && !props.vertical);
const classes = computed(() =>
  [
    'tabs',
    `tabs_${props.variant}`,
    props.size !== 'md' && `tabs_${props.size}`,
    props.vertical && 'tabs_vertical',
    props.layout === 'equal' && 'tabs_equal',
    scrollNav.value && 'tabs_scroll-nav',
    props.scrollable && props.layout === 'auto' && 'tabs_scrollable',
    props.mode === 'dynamic' && 'tabs_dynamic',
    props.indicator === 'slide' && 'tabs_indicator-slide',
  ].filter(Boolean),
);
const activeIndex = computed(() =>
  Math.max(
    0,
    tabs.value.findIndex((tab) => tab.key === selected.value),
  ),
);
function registerTab(tab) {
  registered.value = [...registered.value.filter((item) => item.id !== tab.id), tab];
}
function unregisterTab(id) {
  registered.value = registered.value.filter((item) => item.id !== id);
}
function scrollTabIntoView(key) {
  const list = listRef.value;
  const tab = tabs.value.find((item) => item.key === key);
  const element = tab ? document.getElementById(tab.id) : null;
  if (!scrollNav.value || !list || !element) return;
  const listRect = list.getBoundingClientRect();
  const tabRect = element.getBoundingClientRect();
  const tabLeft = tabRect.left - listRect.left + list.scrollLeft;
  const max = list.scrollWidth - list.clientWidth;
  list.scrollTo({
    left: Math.max(0, Math.min(tabLeft - (list.clientWidth - tabRect.width) / 2, max)),
    behavior: 'smooth',
  });
}
function select(key) {
  const tab = tabs.value.find((item) => item.key === key);
  if (!tab || tab.disabled) return;
  internal.value = key;
  emit('update:modelValue', key);
  nextTick(() =>
    requestAnimationFrame(() => {
      updateVisualState();
      scrollTabIntoView(key);
    }),
  );
}
function isActive(key) {
  return selected.value === key;
}
watchEffect(() => {
  if (!tabs.value.length) return;
  if (!tabs.value.some((tab) => tab.key === selected.value && !tab.disabled))
    internal.value =
      tabs.value.find((tab) => tab.active && !tab.disabled)?.key ??
      tabs.value.find((tab) => !tab.disabled)?.key;
});
function keydown(event, index) {
  const enabled = tabs.value
    .map((tab, itemIndex) => ({ ...tab, itemIndex }))
    .filter((tab) => !tab.disabled);
  const current = enabled.findIndex((tab) => tab.itemIndex === index);
  let next = current;
  if (event.key === (props.vertical ? 'ArrowDown' : 'ArrowRight'))
    next = (current + 1) % enabled.length;
  else if (event.key === (props.vertical ? 'ArrowUp' : 'ArrowLeft'))
    next = (current - 1 + enabled.length) % enabled.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = enabled.length - 1;
  else return;
  event.preventDefault();
  select(enabled[next].key);
  requestAnimationFrame(() => document.getElementById(enabled[next].id)?.focus());
}
function updateVisualState() {
  const list = listRef.value;
  if (!list) return;
  if (props.indicator === 'slide') {
    const activeTab = list.querySelector('.tabs_tab[aria-selected="true"]');
    if (activeTab) {
      const listRect = list.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      const left = tabRect.left - listRect.left + list.scrollLeft;
      const top = tabRect.top - listRect.top + list.scrollTop;
      const thickness = 2;
      indicatorStyle.value = props.vertical
        ? {
            width: `${thickness}px`,
            height: `${tabRect.height}px`,
            transform: `translate3d(${left + tabRect.width - thickness}px, ${top}px, 0)`,
          }
        : props.variant === 'pill'
          ? {
              width: `${tabRect.width}px`,
              height: `${tabRect.height}px`,
              transform: `translate3d(${left}px, ${top}px, 0)`,
            }
          : {
              width: `${tabRect.width}px`,
              height: `${thickness}px`,
              transform: `translate3d(${left}px, ${top + tabRect.height - thickness}px, 0)`,
            };
    }
  } else indicatorStyle.value = null;
  const max = list.scrollWidth - list.clientWidth;
  scrollState.value = {
    overflow: scrollNav.value && max > 1,
    prev: scrollNav.value && list.scrollLeft > 1,
    next: scrollNav.value && list.scrollLeft < max - 1,
  };
}
function scheduleVisualUpdate() {
  nextTick(() => requestAnimationFrame(updateVisualState));
}
function scrollBy(direction) {
  const list = listRef.value;
  list?.scrollBy({
    left: direction * Math.max((list?.clientWidth ?? 160) * 0.75, 120),
    behavior: 'smooth',
  });
}
let resizeObserver;
onMounted(() => {
  resizeObserver =
    typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(scheduleVisualUpdate);
  if (listRef.value) {
    resizeObserver?.observe(listRef.value);
    listRef.value.querySelectorAll('.tabs_tab').forEach((tab) => resizeObserver?.observe(tab));
  }
  scheduleVisualUpdate();
});
onBeforeUnmount(() => resizeObserver?.disconnect());
watch(
  [tabs, selected, () => props.indicator, () => props.variant, () => props.vertical, scrollNav],
  scheduleVisualUpdate,
  { flush: 'post' },
);
provide('tabsContext', { registerTab, unregisterTab, select, isActive });
const SlotRenderer = (slotProps) => slotProps.render?.();
SlotRenderer.props = ['render'];
</script>

<template>
  <div v-bind="attrs" :class="classes" data-component="Tabs" data-tabs>
    <div class="tabs_bar">
      <Button
        v-if="scrollState.overflow"
        variant="outline"
        color="default"
        size="sm"
        icon-only
        class="tabs_nav tabs_nav_prev"
        aria-label="이전 탭"
        :disabled="!scrollState.prev"
        @click="scrollBy(-1)"
        ><template #icon-before><Icon name="arrow-left" /></template
      ></Button>
      <div :class="['tabs_list-wrap', scrollNav && 'tabs_scroll-viewport']">
        <div
          ref="listRef"
          class="tabs_list"
          role="tablist"
          :aria-label="ariaLabel"
          :aria-orientation="vertical ? 'vertical' : 'horizontal'"
          @scroll.passive="updateVisualState"
        >
          <span
            v-if="indicator === 'slide' && indicatorStyle"
            class="tabs_indicator"
            aria-hidden="true"
            :style="indicatorStyle"
          /><Button
            v-for="(tab, index) in tabs"
            :id="tab.id"
            :key="tab.key"
            variant="text"
            color="default"
            fit
            :ripple="false"
            :class="[
              'tabs_tab',
              tab.key === selected && 'is-active',
              tab.disabled && 'is-disabled',
            ]"
            role="tab"
            :aria-selected="tab.key === selected"
            :aria-controls="mode === 'dynamic' ? `${uid}-panel-dynamic` : tab.panelId"
            :aria-disabled="tab.disabled || undefined"
            :disabled="tab.disabled || undefined"
            :tabindex="tab.key === selected ? 0 : -1"
            :label="tab.label || ''"
            @click="select(tab.key)"
            @keydown="keydown($event, index)"
            ><template v-if="tab.icon" #icon-before
              ><span class="tabs_icon"><SlotRenderer :render="tab.icon" /></span></template
            ><template v-if="tab.badge" #icon-after
              ><span class="tabs_badge"><SlotRenderer :render="tab.badge" /></span></template
          ></Button>
        </div>
      </div>
      <Button
        v-if="scrollState.overflow"
        variant="outline"
        color="default"
        size="sm"
        icon-only
        class="tabs_nav tabs_nav_next"
        aria-label="다음 탭"
        :disabled="!scrollState.next"
        @click="scrollBy(1)"
        ><template #icon-before><Icon name="chevron" /></template
      ></Button>
      <div v-if="$slots.extra" class="tabs_extra"><slot name="extra" /></div>
    </div>
    <div class="tabs_panels">
      <div
        v-if="mode === 'dynamic'"
        :id="`${uid}-panel-dynamic`"
        class="tabs_panel is-active"
        role="tabpanel"
        :aria-labelledby="`${uid}-tab-${activeIndex}`"
      >
        <slot name="panel" :item="tabs[activeIndex]" :value="selected">{{
          tabs[activeIndex]?.content
        }}</slot>
      </div>
      <slot v-else />
    </div>
  </div>
</template>
