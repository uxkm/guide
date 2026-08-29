<!--
  Tabs 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script>
import { tick, onMount, onDestroy, setContext } from 'svelte';
import Button from '../../basic/Button/Button.svelte';
import Icon from '../../basic/Icon/Icon.svelte';

// 속성을 계산된 Tabs 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 모드, 선택 값, 시각·레이아웃·인디케이터와 항목을 prop으로 받습니다.
let {
  mode = 'panels',
  modelValue,
  variant = 'line',
  size = 'md',
  layout = 'auto',
  vertical = false,
  scrollable = false,
  ariaLabel,
  items = () => [],
  indicator = 'static',
  onModelValue,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge,
  class: className,
  ...rest
} = $props();=> [] }, // 선언형으로 전달할 탭 항목 배열입니다.
  indicator: { type: String, default: 'static' }, // 활성 표시줄의 정적·슬라이드 동작을 선택합니다.
});
 // 선택 탭이 바뀔 때 부모로 전달합니다.

// 선언하지 않은 class와 HTML 속성을 수집합니다.

const uid = crypto.randomUUID().replaceAll('-', ''); // aria id 연결에 쓰는 안전한 접두사입니다.
let listRef = $state(null); // 탭 목록 DOM을 가리키는 참조입니다.
let indicatorStyle = $state(null); // 슬라이드 인디케이터의 위치·크기입니다.
let scrollState = $state({ overflow: false, prev: false, next: false }); // 스크롤 버튼 상태입니다.
let registered = $state([]); // TabPanel/TabMenu가 등록한 탭 목록입니다.
let internal = $state(undefined); // 비제어형 선택 상태입니다.
let selected = $derived(modelValue ?? internal); // 제어·비제어를 합친 최종 선택 키입니다.

// items가 있으면 우선하고, 없으면 등록된 자식 탭을 사용합니다.
let tabs = $derived(items.length
    ? items.map((item, index) => ({
        ...item,
        id: `${uid}-tab-${index}`,
        panelId: `${uid}-panel-${index}`,
        key: item.key ?? item ?? `tab-${index}`,
      }))
    : registered,
);
let scrollNav = $derived(layout === 'scroll' && !vertical); // 가로 스크롤 내비게이션 사용 여부입니다.

// 변형·크기·방향·스크롤·모드·인디케이터 클래스를 조합합니다.
let classes = $derived([
    'tabs', // Tabs 레이아웃을 활성화하는 필수 클래스입니다.
    `tabs_${variant}`, // line·card·pill 시각 변형입니다.
    size !== 'md' && `tabs_${size}`, // 기본 md가 아닐 때 크기 변형입니다.
    vertical && 'tabs_vertical', // 세로 방향 변형입니다.
    layout === 'equal' && 'tabs_equal', // 동일 너비 탭 변형입니다.
    scrollNav && 'tabs_scroll-nav', // 스크롤 내비게이션 변형입니다.
    scrollable && layout === 'auto' && 'tabs_scrollable', // auto에서 가로 스크롤 허용입니다.
    mode === 'dynamic' && 'tabs_dynamic', // 동적 패널 모드 변형입니다.
    indicator === 'slide' && 'tabs_indicator-slide', // 슬라이드 인디케이터 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

let activeIndex = $derived(Math.max(
    0,
    tabs.findIndex((tab) => tab.key === selected),
  ),
); // 현재 선택 탭의 인덱스입니다.

// 자식 탭을 등록하거나 동일 id를 갱신합니다.
function registerTab(tab) {
  registered = [...registered.filter((item) => item.id !== tab.id), tab];
}
// 언마운트된 자식 탭을 목록에서 제거합니다.
function unregisterTab(id) {
  registered = registered.filter((item) => item.id !== id);
}

// 선택된 탭이 스크롤 뷰포트 중앙 근처에 오도록 이동합니다.
function scrollTabIntoView(key) {
  const list = listRef;
  const tab = tabs.find((item) => item.key === key);
  const element = tab ? document.getElementById(tab.id) : null;
  if (!scrollNav || !list || !element) return;
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
  const tab = tabs.find((item) => item.key === key);
  if (!tab || tab.disabled) return;
  internal = key;
  onModelValue?.(key);
  tick(() =>
    requestAnimationFrame(() => {
      updateVisualState();
      scrollTabIntoView(key);
    }),
  );
}
function isActive(key) {
  return selected === key;
}

// 현재 선택이 목록에서 사라지면 활성·첫 활성 가능 키로 되돌립니다.
$effect(() => {
  if (!tabs.length) return;
  if (!tabs.some((tab) => tab.key === selected && !tab.disabled))
    internal =
      tabs.find((tab) => tab.active && !tab.disabled)?.key ??
      tabs.find((tab) => !tab.disabled)?.key;
});

// 방향키·Home·End로 활성 가능 탭 사이를 이동합니다.
function keydown(event, index) {
  const enabled = tabs
    .map((tab, itemIndex) => ({ ...tab, itemIndex }))
    .filter((tab) => !tab.disabled);
  const current = enabled.findIndex((tab) => tab.itemIndex === index);
  let next = current;
  if (event.key === (vertical ? 'ArrowDown' : 'ArrowRight'))
    next = (current + 1) % enabled.length;
  else if (event.key === (vertical ? 'ArrowUp' : 'ArrowLeft'))
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
  const list = listRef;
  if (!list) return;
  if (indicator === 'slide') {
    const activeTab = list.querySelector('.tabs_tab[aria-selected="true"]');
    if (activeTab) {
      const listRect = list.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      const left = tabRect.left - listRect.left + list.scrollLeft;
      const top = tabRect.top - listRect.top + list.scrollTop;
      const thickness = 2;
      indicatorStyle = vertical
        ? {
            width: `${thickness}px`,
            height: `${tabRect.height}px`,
            transform: `translate3d(${left + tabRect.width - thickness}px, ${top}px, 0)`,
          }
        : variant === 'pill'
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
  } else indicatorStyle = null;
  const max = list.scrollWidth - list.clientWidth;
  scrollState = {
    overflow: scrollNav && max > 1,
    prev: scrollNav && list.scrollLeft > 1,
    next: scrollNav && list.scrollLeft < max - 1,
  };
}
function scheduleVisualUpdate() {
  tick(() => requestAnimationFrame(updateVisualState));
}

// 스크롤 내비게이션 버튼을 눌러 목록을 좌우로 이동시킵니다.
function scrollBy(direction) {
  const list = listRef;
  list?.scrollBy({
    left: direction * Math.max((list?.clientWidth ?? 160) * 0.75, 120),
    behavior: 'smooth',
  });
}

let resizeObserver;
onMount(() => {
  resizeObserver =
    typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(scheduleVisualUpdate);
  if (listRef) {
    resizeObserver?.observe(listRef);
    listRef.querySelectorAll('.tabs_tab').forEach((tab) => resizeObserver?.observe(tab));
  }
  scheduleVisualUpdate();
});
onDestroy(() => resizeObserver?.disconnect());

// 선택·레이아웃 변화 후 인디케이터와 스크롤 상태를 다시 계산합니다.
$effect(
  [tabs, selected, () => indicator, () => variant, () => vertical, scrollNav],
  scheduleVisualUpdate,
  { flush: 'post' },
);
setContext('tabsContext', { registerTab, unregisterTab, select, isActive }); // 자식 탭이 등록·선택에 쓰입니다.

// 함수형 슬롯(아이콘·배지)을 렌더하기 위한 헬퍼입니다.
</script>

<!-- 탭 바와 패널 영역을 루트에 연결합니다. -->
  <div {...rest} class={classes} data-component="Tabs" data-tabs>
    <div class="tabs_bar">
      {#if scrollState.overflow}<Button
       
        variant="outline"
        color="default"
        size="sm"
        icon-only
        class="tabs_nav tabs_nav_prev"
        aria-label="이전 탭"
        disabled={!scrollState.prev}
        onclick={scrollBy(-1)}
        ><#icon-before><Icon name="arrow-left" /></template
      ></Button>
      <div class={['tabs_list-wrap', scrollNav && 'tabs_scroll-viewport']}>
        <div
          bind:this={listRef}
          class="tabs_list"
          role="tablist"
          aria-label={ariaLabel}
          aria-orientation={vertical ? 'vertical' : 'horizontal'}
          onscroll={updateVisualState}
        >
          {#if indicator === 'slide' && indicatorStyle}<span
           
            class="tabs_indicator"
            aria-hidden="true"
            style={indicatorStyle}
          /><Button
            {#each tabs as tab, index}
            id={tab.id}
            key={tab.key}
            variant="text"
            color="default"
            fit
            ripple={false}
            class={[
              'tabs_tab',
              tab.key === selected && 'is-active',
              tab.disabled && 'is-disabled',
            ]}
            role="tab"
            aria-selected={tab.key === selected}
            aria-controls={mode === 'dynamic' ? `${uid}-panel-dynamic` : tab.panelId}
            aria-disabled={tab.disabled || undefined}
            disabled={tab.disabled || undefined}
            tabindex={tab.key === selected ? 0 : -1}
            label={tab.label || ''}
            onclick={select(tab.key)}
            onkeydown={keydown($event, index)}
            >{#if tab.icon}<#icon-before
              ><span class="tabs_icon"><SlotRenderer render={tab.icon} /></span></template
            >{#if tab.badge}<#icon-after
              ><span class="tabs_badge"><SlotRenderer render={tab.badge} /></span></template
          ></Button>
        </div>
      </div>
      {#if scrollState.overflow}<Button
       
        variant="outline"
        color="default"
        size="sm"
        icon-only
        class="tabs_nav tabs_nav_next"
        aria-label="다음 탭"
        disabled={!scrollState.next}
        onclick={scrollBy(1)}
        ><#icon-before><Icon name="chevron" /></template
      ></Button>
      {#if extra}<div class="tabs_extra">{@render extra?.()}</div>
    </div>
    <div class="tabs_panels">
      {#if mode === 'dynamic'}<div
       
        id={`${uid}-panel-dynamic`}
        class="tabs_panel is-active"
        role="tabpanel"
        aria-labelledby={`${uid}-tab-${activeIndex}`}
      >
        {@render panel?.()}
      </div>
      {:else}{@render children?.()}
    </div>
  </div>
