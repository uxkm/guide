<script setup>
import {
  computed,
  isRef,
  provide,
  ref,
  toRef,
  unref,
  useAttrs,
  useId,
  useSlots,
  watch,
  watchEffect,
} from 'vue';
import { rippleProp, useRipple } from '@/composables/useRipple';
import { useTabsDemoCode } from '@/composables/useDemoCode';
import { useTabsIndicator } from '@/composables/useTabsIndicator';
import { useTabsScroll } from '@/composables/useTabsScroll';
import Button from '@/components/Button.vue';
import Icon from '@/components/Icon.vue';
import TabsTab from '@/components/TabsTab.vue';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  /** 클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본 */
  ripple: rippleProp,
  /** panels: 탭마다 패널 · dynamic: 단일 패널에 콘텐츠 전환 */
  mode: {
    type: String,
    default: 'panels',
    validator: (v) => ['panels', 'dynamic'].includes(v),
  },
  /** mode="dynamic"일 때 선택된 탭 key (v-model) */
  modelValue: {
    type: [String, Number],
    default: undefined,
  },
  variant: {
    type: String,
    default: 'line',
    validator: (v) => ['line', 'card', 'pill'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  /** auto: 콘텐츠 너비 · equal: 100% 균등 분할 · scroll: 넘침 시 좌우 네비 스크롤 */
  layout: {
    type: String,
    default: 'auto',
    validator: (v) => ['auto', 'equal', 'scroll'].includes(v),
  },
  vertical: Boolean,
  scrollable: Boolean,
  ariaLabel: String,
  items: Array,
  indicator: {
    type: String,
    default: 'static',
    validator: (v) => ['static', 'slide'].includes(v),
  },
});

const emit = defineEmits(['update:modelValue']);
const { rippleAttrs, childRippleAttrs } = useRipple(props, { mode: 'container' });


const slots = useSlots();
const attrs = useAttrs();
const rootRef = ref(null);
const listRef = ref(null);
const tabs = new Map();
const registeredTabs = ref([]);
const dynamicPanelId = useId().replace(/:/g, '');
const activeKey = ref(null);

useTabsDemoCode(props, rootRef, attrs);

const isDynamicMode = computed(() => props.mode === 'dynamic');
const isScrollNavLayout = computed(() => props.layout === 'scroll' && !props.vertical);
const isEqualLayout = computed(() => props.layout === 'equal');
const isLegacyScrollable = computed(() => props.scrollable && props.layout === 'auto');
const usesItems = computed(() => Boolean(props.items?.length));
const usesPanelItems = computed(() => usesItems.value && !isDynamicMode.value);

const tabListSize = computed(() => {
  if (usesItems.value) return props.items.length;
  return registeredTabs.value.length;
});

const rootClass = computed(() => {
  const classes = ['tabs', `tabs_${props.variant}`];
  if (props.size === 'sm') classes.push('tabs_sm');
  if (props.size === 'lg') classes.push('tabs_lg');
  if (props.vertical) classes.push('tabs_vertical');
  if (isEqualLayout.value) classes.push('tabs_equal');
  if (isScrollNavLayout.value) classes.push('tabs_scroll-nav');
  if (isLegacyScrollable.value) classes.push('tabs_scrollable');
  if (isDynamicMode.value) classes.push('tabs_dynamic');
  if (props.indicator === 'slide') classes.push('tabs_indicator-slide');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const slideIndicatorEnabled = computed(() => props.indicator === 'slide');

const { indicatorStyle, updateIndicator } = useTabsIndicator({
  listRef,
  enabled: slideIndicatorEnabled,
  vertical: toRef(props, 'vertical'),
  variant: toRef(props, 'variant'),
  onTabsChange: () => tabListSize.value,
});

const {
  canScrollPrev,
  canScrollNext,
  hasOverflow,
  scrollPrev,
  scrollNext,
  updateScrollState,
} = useTabsScroll({
  listRef,
  enabled: isScrollNavLayout,
  onTabsChange: () => tabListSize.value,
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

function resolveItemKey(item, index) {
  return item.key ?? item.value ?? index;
}

function registerTab(tab) {
  if (isDynamicMode.value || tab.menuOnly) {
    tab.panelId = dynamicPanelId;
  }
  tabs.set(tab.id, tab);
  registeredTabs.value = [...tabs.values()];
}

function unregisterTab(id) {
  tabs.delete(id);
  registeredTabs.value = [...tabs.values()];
}

function getTabActive(tab) {
  if (isDynamicMode.value) {
    return (tab.value ?? tab.id) === activeKey.value;
  }
  return unref(tab.isActive);
}

function setTabActive(tab, value) {
  if (isRef(tab.isActive)) {
    tab.isActive.value = value;
    return;
  }

  tab.isActive = value;
}

function selectDynamicKey(key) {
  activeKey.value = key;
  emit('update:modelValue', key);
  updateIndicator();
  updateScrollState();
}

function selectTab(id) {
  if (isDynamicMode.value) {
    if (usesItems.value) {
      const tab = dynamicItemTabs.value.find((item) => item.id === id);
      if (tab && !tab.disabled) {
        selectDynamicKey(tab.key);
      }
      return;
    }

    const tab = registeredTabs.value.find((item) => item.id === id);
    if (tab && !tab.disabled) {
      selectDynamicKey(tab.value ?? tab.id);
    }
    return;
  }

  registeredTabs.value.forEach((tab) => {
    if (!tab.disabled) {
      setTabActive(tab, tab.id === id);
    }
  });
  updateIndicator();
  updateScrollState();
}

provide('tabs', { registerTab, unregisterTab, selectTab });

watch(
  () => props.modelValue,
  (value) => {
    if (isDynamicMode.value && value != null && value !== '') {
      activeKey.value = value;
    }
  },
);

watchEffect(() => {
  if (isDynamicMode.value) {
    if (props.modelValue != null && props.modelValue !== '') {
      activeKey.value = props.modelValue;
      return;
    }

    if (usesItems.value) {
      const activeItem = props.items.find((item, index) => item.active);
      if (activeItem) {
        activeKey.value = resolveItemKey(activeItem, props.items.indexOf(activeItem));
        return;
      }
      const first = props.items.find((item) => !item.disabled);
      if (first) {
        activeKey.value = resolveItemKey(first, props.items.indexOf(first));
      }
      return;
    }

    if (!registeredTabs.value.length) return;
    const preset = registeredTabs.value.find((tab) => tab.active);
    const first = registeredTabs.value.find((tab) => !tab.disabled);
    const tab = preset || first;
    if (tab) {
      activeKey.value = tab.value ?? tab.id;
    }
    return;
  }

  if (usesPanelItems.value) {
    const hasActive = props.items.some((item) => item.active);
    props.items.forEach((item, index) => {
      if (!hasActive && index === 0) item.active = true;
    });
    return;
  }

  if (!registeredTabs.value.length) return;
  const hasActive = registeredTabs.value.some((t) => getTabActive(t));
  if (!hasActive) {
    const first = registeredTabs.value.find((t) => !t.disabled);
    if (first) {
      setTabActive(first, true);
    }
  }
});

const dynamicItemTabs = computed(() => {
  if (!isDynamicMode.value || !usesItems.value) return [];
  return props.items.map((item, index) => {
    const key = resolveItemKey(item, index);
    return {
      id: `item-tab-${index}`,
      key,
      panelId: dynamicPanelId,
      label: item.label,
      disabled: item.disabled,
      isActive: activeKey.value === key,
      raw: item,
    };
  });
});

const activeDynamicItem = computed(() => {
  if (!isDynamicMode.value) return null;

  if (usesItems.value) {
    return dynamicItemTabs.value.find((tab) => tab.isActive)?.raw ?? null;
  }

  const tab = registeredTabs.value.find((item) => (item.value ?? item.id) === activeKey.value);
  if (!tab) return null;

  return {
    key: tab.value ?? tab.id,
    label: tab.label,
  };
});

const activeTabId = computed(() => {
  if (!isDynamicMode.value) return '';

  if (usesItems.value) {
    return dynamicItemTabs.value.find((tab) => tab.isActive)?.id ?? '';
  }

  return registeredTabs.value.find((tab) => (tab.value ?? tab.id) === activeKey.value)?.id ?? '';
});

const itemTabs = computed(() => {
  if (!usesPanelItems.value) return [];
  const hasActive = props.items.some((item) => item.active);
  return props.items.map((item, index) => ({
    id: `item-tab-${index}`,
    panelId: `item-panel-${index}`,
    label: item.label,
    content: item.content,
    disabled: item.disabled,
    isActive: item.active || (!hasActive && index === 0),
  }));
});

const barTabs = computed(() => {
  if (isDynamicMode.value && usesItems.value) {
    return dynamicItemTabs.value.map((tab) => ({
      id: tab.id,
      panelId: tab.panelId,
      label: tab.label,
      disabled: Boolean(tab.disabled),
      active: tab.isActive,
      iconSlot: null,
      badgeSlot: null,
    }));
  }

  if (usesPanelItems.value) {
    return itemTabs.value.map((tab) => ({
      id: tab.id,
      panelId: tab.panelId,
      label: tab.label,
      disabled: Boolean(tab.disabled),
      active: tab.isActive,
      iconSlot: null,
      badgeSlot: null,
    }));
  }

  return registeredTabs.value.map((tab) => ({
    id: tab.id,
    panelId: tab.panelId,
    label: tab.label,
    disabled: Boolean(tab.disabled),
    active: getTabActive(tab),
    iconSlot: tab.iconSlot ?? null,
    badgeSlot: tab.badgeSlot ?? null,
  }));
});
</script>

<template>
  <div ref="rootRef" :class="rootClass" data-tabs v-bind="{ ...fallthroughAttrs, ...rippleAttrs }">
    <div class="tabs_bar">
      <Button
        v-if="isScrollNavLayout && hasOverflow"
        class="tabs_nav tabs_nav_prev"
        variant="outline"
        color="default"
        size="sm"
        icon-only
        :ripple="false"
        aria-label="이전 탭"
        :disabled="!canScrollPrev"
        @click="scrollPrev"
      >
        <template #icon-before>
          <Icon name="chevron-left" size="sm" />
        </template>
      </Button>

      <div class="tabs_list-wrap" :class="{ 'tabs_scroll-viewport': isScrollNavLayout }">
        <div ref="listRef" class="tabs_list" role="tablist" :aria-label="ariaLabel">
          <span
            v-if="indicator === 'slide'"
            v-show="indicatorStyle"
            class="tabs_indicator"
            aria-hidden="true"
            :style="indicatorStyle"
          />
          <TabsTab
            v-for="tab in barTabs"
            :key="tab.id"
            v-bind="childRippleAttrs"
            :id="tab.id"
            :panel-id="tab.panelId"
            :label="tab.label"
            :active="tab.active"
            :disabled="tab.disabled"
            :tabindex="tab.active ? 0 : -1"
            :icon-slot="tab.iconSlot"
            :badge-slot="tab.badgeSlot"
            @click="selectTab(tab.id)"
          />
          <slot name="tabs" />
        </div>
      </div>

      <Button
        v-if="isScrollNavLayout && hasOverflow"
        class="tabs_nav tabs_nav_next"
        variant="outline"
        color="default"
        size="sm"
        icon-only
        :ripple="false"
        aria-label="다음 탭"
        :disabled="!canScrollNext"
        @click="scrollNext"
      >
        <template #icon-before>
          <Icon name="chevron-right" size="sm" />
        </template>
      </Button>

      <div v-if="$slots.extra" class="tabs_extra" data-demo-slot="extra">
        <slot name="extra" />
      </div>
    </div>
    <div class="tabs_panels" data-demo-slot="default">
      <template v-if="isDynamicMode">
        <div
          :id="dynamicPanelId"
          class="tabs_panel is-active"
          role="tabpanel"
          :aria-labelledby="activeTabId"
        >
          <slot
            name="panel"
            :item="activeDynamicItem"
            :value="activeKey"
            :active="true"
          />
        </div>
        <slot />
      </template>
      <template v-else-if="usesPanelItems">
        <div
          v-for="tab in itemTabs"
          :key="tab.panelId"
          :id="tab.panelId"
          class="tabs_panel"
          :class="{ 'is-active': tab.isActive }"
          role="tabpanel"
          :aria-labelledby="tab.id"
          :hidden="!tab.isActive || undefined"
        >
          <p>{{ tab.content }}</p>
        </div>
      </template>
      <slot v-else />
    </div>
  </div>
</template>
