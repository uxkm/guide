<!--
  Dropdown 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useAttrs, useId } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';

// 속성을 계산된 Dropdown 루트에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmDropdown', inheritAttrs: false });

// 열림 상태, 배치, 너비, 트리거 레이블, 선택 후 닫힘을 prop으로 받습니다.
const props = defineProps({
  open: { type: Boolean, default: undefined }, // 제어형으로 메뉴 열림 상태입니다.
  defaultOpen: Boolean, // 비제어형 초기 열림 상태입니다.
  disabled: Boolean, // 트리거와 메뉴 상호작용을 막을지 여부입니다.
  placement: { type: String, default: 'start' }, // 메뉴가 트리거 기준으로 열리는 위치를 지정합니다.
  fit: Boolean, // 메뉴 너비를 트리거에 맞출지 여부입니다.
  maxVisibleItems: Number, // 스크롤 전에 보일 최대 항목 수입니다.
  menuWidth: [String, Number], // 메뉴의 고정 너비입니다.
  menuMinWidth: [String, Number], // 메뉴의 최소 너비입니다.
  triggerLabel: { type: String, default: '메뉴' }, // 기본 트리거 버튼에 표시할 텍스트입니다.
  closeOnSelect: { type: Boolean, default: true }, // 항목 선택 후 메뉴를 닫을지 여부입니다.
});
const emit = defineEmits(['update:open', 'openChange', 'select']); // 열림·선택 이벤트를 부모로 전달합니다.

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();
const rootRef = ref(null); // 바깥 클릭 판별용 루트 참조입니다.
const internal = ref(props.defaultOpen); // 비제어형 열림 상태입니다.
const menuId = `dropdown-menu-${useId().replaceAll(':', '')}`; // 메뉴와 트리거를 연결하는 id입니다.
const visible = computed(() => (props.open === undefined ? internal.value : props.open)); // 최종 표시 상태입니다.

// 열림·비활성·배치·맞춤 클래스를 조합합니다.
const classes = computed(() =>
  [
    'dropdown', // Dropdown 루트를 활성화하는 필수 클래스입니다.
    visible.value && 'is-open', // 메뉴가 열린 상태입니다.
    props.disabled && 'is-disabled', // 비활성 상태입니다.
    props.placement === 'end' && 'dropdown_placement-end', // 끝쪽 배치 변형입니다.
    props.placement === 'top' && 'dropdown_placement-top', // 위쪽 배치 변형입니다.
    props.fit && 'dropdown_fit', // 트리거 너비에 맞추는 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

// 보이는 항목 수와 너비 관련 CSS 변수를 메뉴에 전달합니다.
const menuStyle = computed(() => ({
  ...(props.maxVisibleItems != null
    ? { '--dropdown-max-visible-items': props.maxVisibleItems }
    : {}),
  ...(props.menuWidth != null
    ? { width: typeof props.menuWidth === 'number' ? `${props.menuWidth}rem` : props.menuWidth }
    : {}),
  ...(props.menuMinWidth != null
    ? {
        minWidth:
          typeof props.menuMinWidth === 'number' ? `${props.menuMinWidth}rem` : props.menuMinWidth,
      }
    : {}),
}));

// 비활성 상태면 무시하고, 비제어형이면 내부 상태를 갱신한 뒤 이벤트를 보냅니다.
function setOpen(next) {
  if (props.disabled) return;
  if (props.open === undefined) internal.value = next;
  emit('update:open', next);
  emit('openChange', next);
}

// 활성 메뉴 항목 중 지정 위치로 포커스를 이동합니다.
function focusItem(position = 0) {
  nextTick(() =>
    requestAnimationFrame(() => {
      const items = [
        ...(rootRef.value?.querySelectorAll(
          '.dropdown_menu .menu_link:not(.is-disabled):not([aria-disabled="true"])',
        ) ?? []),
      ];
      items.at(position)?.focus();
    }),
  );
}

// 아래 화살표로 메뉴를 열고 첫 항목에 포커스합니다.
function triggerKeydown(event) {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    if (!visible.value) setOpen(true);
    focusItem(0);
  }
}

// 화살표·Home·End·Tab으로 메뉴 항목 포커스를 이동하거나 닫습니다.
function menuKeydown(event) {
  const items = [
    ...event.currentTarget.querySelectorAll(
      '.menu_link:not(.is-disabled):not([aria-disabled="true"])',
    ),
  ];
  const current = items.indexOf(document.activeElement);
  let next = current;
  if (event.key === 'ArrowDown') next = (current + 1) % items.length;
  else if (event.key === 'ArrowUp') next = (current - 1 + items.length) % items.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = items.length - 1;
  else if (event.key === 'Tab') {
    setOpen(false);
    return;
  } else return;
  event.preventDefault();
  items[next]?.focus();
}

// 활성 메뉴 링크 클릭 시 선택 이벤트를 보내고 필요하면 닫습니다.
function menuClick(event) {
  const item = event.target.closest('.menu_link');
  if (
    !item ||
    item.classList.contains('is-disabled') ||
    item.getAttribute('aria-disabled') === 'true'
  )
    return;
  emit('select', item.dataset.value ?? item.textContent?.trim(), event);
  if (props.closeOnSelect) {
    setOpen(false);
    nextTick(() => rootRef.value?.querySelector('.dropdown_trigger')?.focus());
  }
}

// 메뉴가 열린 동안 바깥 클릭과 Escape로 닫습니다.
function outside(event) {
  if (visible.value && !rootRef.value?.contains(event.target)) setOpen(false);
}
function escape(event) {
  if (visible.value && event.key === 'Escape') {
    setOpen(false);
    rootRef.value?.querySelector('.dropdown_trigger')?.focus();
  }
}
onMounted(() => {
  document.addEventListener('pointerdown', outside);
  document.addEventListener('keydown', escape);
});
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', outside);
  document.removeEventListener('keydown', escape);
});

// 기본 트리거와 슬롯 트리거가 공유하는 열림·키보드 props입니다.
const triggerProps = computed(() => ({
  class: 'dropdown_trigger',
  haspopup: 'menu',
  expanded: visible.value,
  'aria-controls': menuId,
  disabled: props.disabled,
  onClick: () => setOpen(!visible.value),
  onKeydown: triggerKeydown,
}));
</script>
<template>
  <!-- 트리거와 메뉴를 루트에 연결하고 키보드·클릭 처리를 붙입니다. -->
  <div v-bind="attrs" ref="rootRef" :class="classes" data-component="Dropdown" data-dropdown>
    <slot
      name="trigger"
      :open="visible"
      :toggle="() => setOpen(!visible)"
      :trigger-props="triggerProps"
      ><Button v-bind="triggerProps" variant="outline" :label="triggerLabel"
        ><template #icon-after><Icon name="chevron-down" /></template></Button
    ></slot>
    <div
      :id="menuId"
      :class="['dropdown_menu', maxVisibleItems != null && 'dropdown_menu-scrollable']"
      :style="menuStyle"
      role="menu"
      :aria-hidden="!visible"
      @click="menuClick"
      @keydown="menuKeydown"
    >
      <slot />
    </div>
  </div>
</template>
