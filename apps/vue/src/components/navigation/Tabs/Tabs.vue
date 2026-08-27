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

// 속성을 계산된 Tabs 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmTabs', inheritAttrs: false });

// 모드, 선택 값, 시각·레이아웃·인디케이터와 항목을 prop으로 받습니다.
const props = defineProps({
  mode: { type: String, default: 'panels' }, // 패널 고정 또는 동적 콘텐츠 모드를 선택합니다.
  modelValue: [String, Number], // 제어형으로 현재 선택된 탭 키입니다.
  variant: { type: String, default: 'line' }, // 탭의 시각 스타일을 지정합니다.
  size: { type: String, default: 'md' }, // 탭의 크기를 지정합니다.
  layout: { type: String, default: 'auto' }, // 탭 목록의 너비·스크롤 배치를 지정합니다.
  vertical: Boolean, // 세로 방향 탭 목록인지 여부입니다.
  scrollable: Boolean, // auto 레이아웃에서 가로 스크롤을 허용할지 여부입니다.
  ariaLabel: String, // 탭 목록의 접근 가능한 이름을 지정합니다.
  items: { type: Array, default: () => [] }, // 선언형으로 전달할 탭 항목 배열입니다.
  indicator: { type: String, default: 'static' }, // 활성 표시줄의 정적·슬라이드 동작을 선택합니다.
});
const emit = defineEmits(['update:modelValue']); // 선택 탭이 바뀔 때 부모로 전달합니다.

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const uid = useId().replaceAll(':', ''); // aria id 연결에 쓰는 안전한 접두사입니다.
const listRef = ref(null); // 탭 목록 DOM을 가리키는 참조입니다.
const indicatorStyle = ref(null); // 슬라이드 인디케이터의 위치·크기입니다.
const scrollState = ref({ overflow: false, prev: false, next: false }); // 스크롤 버튼 상태입니다.
const registered = ref([]); // TabPanel/TabMenu가 등록한 탭 목록입니다.
const internal = ref(undefined); // 비제어형 선택 상태입니다.
const selected = computed(() => props.modelValue ?? internal.value); // 제어·비제어를 합친 최종 선택 키입니다.

// items가 있으면 우선하고, 없으면 등록된 자식 탭을 사용합니다.
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
const scrollNav = computed(() => props.layout === 'scroll' && !props.vertical); // 가로 스크롤 내비게이션 사용 여부입니다.

// 변형·크기·방향·스크롤·모드·인디케이터 클래스를 조합합니다.
const classes = computed(() =>
  [
    'tabs', // Tabs 레이아웃을 활성화하는 필수 클래스입니다.
    `tabs_${props.variant}`, // line·card·pill 시각 변형입니다.
    props.size !== 'md' && `tabs_${props.size}`, // 기본 md가 아닐 때 크기 변형입니다.
    props.vertical && 'tabs_vertical', // 세로 방향 변형입니다.
    props.layout === 'equal' && 'tabs_equal', // 동일 너비 탭 변형입니다.
    scrollNav.value && 'tabs_scroll-nav', // 스크롤 내비게이션 변형입니다.
    props.scrollable && props.layout === 'auto' && 'tabs_scrollable', // auto에서 가로 스크롤 허용입니다.
    props.mode === 'dynamic' && 'tabs_dynamic', // 동적 패널 모드 변형입니다.
    props.indicator === 'slide' && 'tabs_indicator-slide', // 슬라이드 인디케이터 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

const activeIndex = computed(() =>
  Math.max(
    0,
    tabs.value.findIndex((tab) => tab.key === selected.value),
  ),
); // 현재 선택 탭의 인덱스입니다.

// 자식 탭을 등록하거나 동일 id를 갱신합니다.
function registerTab(tab) {
  registered.value = [...registered.value.filter((item) => item.id !== tab.id), tab];
}
// 언마운트된 자식 탭을 목록에서 제거합니다.
function unregisterTab(id) {
  registered.value = registered.value.filter((item) => item.id !== id);
}

// 선택된 탭이 스크롤 뷰포트 중앙 근처에 오도록 이동합니다.
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

// 비활성 탭이 아니면 선택 상태를 갱신하고 시각·스크롤을 맞춥니다.
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

// 현재 선택이 목록에서 사라지면 활성·첫 활성 가능 키로 되돌립니다.
watchEffect(() => {
  if (!tabs.value.length) return;
  if (!tabs.value.some((tab) => tab.key === selected.value && !tab.disabled))
    internal.value =
      tabs.value.find((tab) => tab.active && !tab.disabled)?.key ??
      tabs.value.find((tab) => !tab.disabled)?.key;
});

// 방향키·Home·End로 활성 가능 탭 사이를 이동합니다.
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

// 활성 탭 위치와 스크롤 가능 여부를 측정해 시각 상태를 갱신합니다.
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

// 스크롤 내비게이션 버튼을 눌러 목록을 좌우로 이동시킵니다.
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

// 선택·레이아웃 변화 후 인디케이터와 스크롤 상태를 다시 계산합니다.
watch(
  [tabs, selected, () => props.indicator, () => props.variant, () => props.vertical, scrollNav],
  scheduleVisualUpdate,
  { flush: 'post' },
);
provide('tabsContext', { registerTab, unregisterTab, select, isActive }); // 자식 탭이 등록·선택에 쓰입니다.

// 함수형 슬롯(아이콘·배지)을 렌더하기 위한 헬퍼입니다.
const SlotRenderer = (slotProps) => slotProps.render?.();
SlotRenderer.props = ['render'];
</script>

<template>
  <!-- 탭 바와 패널 영역을 루트에 연결합니다. -->
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
