<script setup>
import { computed, ref, useAttrs } from 'vue';
import { useDropdownDemoCode } from '@/composables/useDemoCode';
import { toCssSize } from '@/utils/table-column-sizing';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  open: Boolean,
  disabled: Boolean,
  placement: String,
  fit: Boolean,
  /** 패널에 보이는 최대 항목 수. 초과 시 메뉴 목록이 스크롤됩니다. */
  maxVisibleItems: Number,
  /** 패널 가로 너비 (숫자는 rem, 문자열은 CSS 값) */
  menuWidth: [String, Number],
  /** 패널 최소 가로 너비 (숫자는 rem, 문자열은 CSS 값) */
  menuMinWidth: [String, Number],
});

const attrs = useAttrs();
const rootRef = ref(null);
const menuId = `dropdown-menu-${Math.random().toString(36).slice(2, 9)}`;

useDropdownDemoCode(props, rootRef, attrs);

const rootClass = computed(() => {
  const classes = ['dropdown'];
  if (props.open) classes.push('is-open');
  if (props.disabled) classes.push('is-disabled');
  if (props.placement === 'end') classes.push('dropdown_placement-end');
  if (props.placement === 'top') classes.push('dropdown_placement-top');
  if (props.fit) classes.push('dropdown_fit');
  if (attrs.class) classes.push(attrs.class);
  return classes;
});

const fallthroughAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

const menuClass = computed(() => {
  const classes = ['dropdown_menu'];
  if (props.maxVisibleItems != null) classes.push('dropdown_menu-scrollable');
  return classes;
});

const menuStyle = computed(() => {
  const style = {};

  if (props.maxVisibleItems != null) {
    style['--dropdown-max-visible-items'] = props.maxVisibleItems;
  }
  if (props.menuWidth != null) {
    style.width = toCssSize(props.menuWidth);
  }
  if (props.menuMinWidth != null) {
    style.minWidth = toCssSize(props.menuMinWidth);
  }

  return style;
});
</script>

<template>
  <div ref="rootRef" :class="rootClass" data-dropdown v-bind="fallthroughAttrs">
    <div data-demo-slot="trigger">
      <slot name="trigger" />
    </div>
    <div
      :id="menuId"
      :class="menuClass"
      :style="menuStyle"
      role="menu"
      data-demo-slot="default"
    >
      <slot />
    </div>
  </div>
</template>
