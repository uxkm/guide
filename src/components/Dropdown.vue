<script setup>
import { Comment, cloneVNode, computed, ref, useAttrs, useId, useSlots, watch } from 'vue';
import { useDropdownDemoCode } from '@/composables/useDemoCode';
import { toCssSize } from '@/utils/table-column-sizing';

defineOptions({ inheritAttrs: false });

const VALID_PLACEMENTS = new Set(['end', 'top']);
const MENU_ITEM_SELECTOR =
  '.menu_link:not(.is-disabled):not([aria-disabled="true"]), [role="menuitem"]:not(.is-disabled):not([aria-disabled="true"]), [role="option"]:not(.is-disabled):not([aria-disabled="true"])';

const props = defineProps({
  open: {
    type: Boolean,
    default: undefined,
  },
  defaultOpen: Boolean,
  disabled: Boolean,
  placement: String,
  fit: Boolean,
  closeOnSelect: Boolean,
  /** 패널에 보이는 최대 항목 수. 초과 시 메뉴 목록이 스크롤됩니다. */
  maxVisibleItems: Number,
  /** 패널 가로 너비 (숫자는 rem, 문자열은 CSS 값) */
  menuWidth: [String, Number],
  /** 패널 최소 가로 너비 (숫자는 rem, 문자열은 CSS 값) */
  menuMinWidth: [String, Number],
});

const emit = defineEmits(['update:open', 'open-change']);

const attrs = useAttrs();
const slots = useSlots();
const rootRef = ref(null);
const internalOpen = ref(props.defaultOpen);
const generatedId = useId().replace(/:/g, '');
const menuId = `dropdown-menu-${generatedId}`;
const resolvedPlacement = computed(() =>
  VALID_PLACEMENTS.has(props.placement) ? props.placement : undefined
);
const controlled = computed(() => props.open != null);
const isOpen = computed(() =>
  controlled.value ? Boolean(props.open) : internalOpen.value
);

useDropdownDemoCode(
  () => ({
    ...props,
    open: isOpen.value,
    placement: resolvedPlacement.value,
  }),
  rootRef,
  attrs
);

const rootClass = computed(() => {
  const classes = ['dropdown'];
  if (isOpen.value) classes.push('is-open');
  if (props.disabled) classes.push('is-disabled');
  if (resolvedPlacement.value === 'end') classes.push('dropdown_placement-end');
  if (resolvedPlacement.value === 'top') classes.push('dropdown_placement-top');
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

function setOpen(nextOpen) {
  if (props.disabled || nextOpen === isOpen.value) return;

  if (!controlled.value) {
    internalOpen.value = nextOpen;
  }
  emit('update:open', nextOpen);
  emit('open-change', nextOpen);
}

function focusMenuItem(position = 'active') {
  requestAnimationFrame(() => {
    const items = Array.from(rootRef.value?.querySelectorAll(MENU_ITEM_SELECTOR) ?? []);
    const active = items.find(
      (item) =>
        item.classList.contains('is-active') ||
        item.getAttribute('aria-selected') === 'true' ||
        item.getAttribute('aria-current') === 'page'
    );
    const target = position === 'last' ? items.at(-1) : active || items[0];
    target?.focus();
  });
}

function focusTrigger() {
  rootRef.value?.querySelector('.dropdown_trigger')?.focus();
}

function onTriggerClick(event) {
  const trigger = event.currentTarget;
  if (
    event.defaultPrevented ||
    props.disabled ||
    trigger.disabled ||
    trigger.getAttribute('aria-disabled') === 'true'
  ) {
    if (props.disabled) event.preventDefault();
    return;
  }

  setOpen(!isOpen.value);
}

function onTriggerKeydown(event) {
  if (event.defaultPrevented || props.disabled) return;

  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    if (!isOpen.value) setOpen(true);
    focusMenuItem(event.key === 'ArrowUp' ? 'last' : 'active');
  } else if (event.key === 'Escape' && isOpen.value) {
    event.preventDefault();
    setOpen(false);
  }
}

function onMenuClick(event) {
  const item = event.target instanceof Element
    ? event.target.closest(MENU_ITEM_SELECTOR)
    : null;
  if (!item || !event.currentTarget.contains(item)) return;

  if (props.closeOnSelect) {
    setOpen(false);
    focusTrigger();
  }
}

function onMenuKeydown(event) {
  const items = Array.from(event.currentTarget.querySelectorAll(MENU_ITEM_SELECTOR));
  const currentIndex = items.indexOf(document.activeElement);
  let target = null;

  if (event.key === 'ArrowDown') {
    target = items[Math.min(currentIndex + 1, items.length - 1)] || items[0];
  } else if (event.key === 'ArrowUp') {
    target = items[Math.max(currentIndex - 1, 0)] || items.at(-1);
  } else if (event.key === 'Home') {
    target = items[0];
  } else if (event.key === 'End') {
    target = items.at(-1);
  } else if (event.key === 'Escape') {
    event.preventDefault();
    setOpen(false);
    focusTrigger();
    return;
  }

  if (target) {
    event.preventDefault();
    target.focus();
  }
}

const TriggerSlot = () => {
  const nodes = slots.trigger?.({
    open: isOpen.value,
    menuId,
    disabled: props.disabled,
  }) ?? [];
  let triggerResolved = false;

  return nodes.map((node) => {
    if (triggerResolved || node.type === Comment) return node;
    triggerResolved = true;

    const triggerDisabled = props.disabled || Boolean(node.props?.disabled);
    return cloneVNode(
      node,
      {
        class: 'dropdown_trigger',
        expanded: typeof node.type === 'string' ? undefined : isOpen.value,
        'aria-expanded': String(isOpen.value),
        'aria-controls': menuId,
        disabled: triggerDisabled,
        onClick: onTriggerClick,
        onKeydown: onTriggerKeydown,
      },
      true
    );
  });
};

watch(
  isOpen,
  (open, _previousOpen, onCleanup) => {
    if (!open || typeof document === 'undefined') return;

    const onPointerdown = (event) => {
      if (!rootRef.value?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', onPointerdown);
    onCleanup(() => document.removeEventListener('pointerdown', onPointerdown));
  },
  { immediate: true }
);
</script>

<template>
  <div ref="rootRef" :class="rootClass" data-dropdown v-bind="fallthroughAttrs">
    <div data-demo-slot="trigger">
      <TriggerSlot />
    </div>
    <div
      :id="menuId"
      :class="menuClass"
      :style="menuStyle"
      role="menu"
      :aria-hidden="!isOpen"
      data-demo-slot="default"
      @click="onMenuClick"
      @keydown="onMenuKeydown"
    >
      <slot />
    </div>
  </div>
</template>
