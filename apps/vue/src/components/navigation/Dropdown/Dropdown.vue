<!--
  Dropdown 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useAttrs, useId } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';
defineOptions({ name: 'UxkmDropdown', inheritAttrs: false });
const props = defineProps({
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  disabled: Boolean,
  placement: { type: String, default: 'start' },
  fit: Boolean,
  maxVisibleItems: Number,
  menuWidth: [String, Number],
  menuMinWidth: [String, Number],
  triggerLabel: { type: String, default: '메뉴' },
  closeOnSelect: { type: Boolean, default: true },
});
const emit = defineEmits(['update:open', 'openChange', 'select']);
const attrs = useAttrs();
const rootRef = ref(null);
const internal = ref(props.defaultOpen);
const menuId = `dropdown-menu-${useId().replaceAll(':', '')}`;
const visible = computed(() => (props.open === undefined ? internal.value : props.open));
const classes = computed(() =>
  [
    'dropdown',
    visible.value && 'is-open',
    props.disabled && 'is-disabled',
    props.placement === 'end' && 'dropdown_placement-end',
    props.placement === 'top' && 'dropdown_placement-top',
    props.fit && 'dropdown_fit',
  ].filter(Boolean),
);
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
function setOpen(next) {
  if (props.disabled) return;
  if (props.open === undefined) internal.value = next;
  emit('update:open', next);
  emit('openChange', next);
}
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
function triggerKeydown(event) {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    if (!visible.value) setOpen(true);
    focusItem(0);
  }
}
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
