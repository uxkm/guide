<!--
  Dropdown 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script>
import { tick, onMount, onDestroy } from 'svelte';
import Button from '../../basic/Button/Button.svelte';
import Icon from '../../basic/Icon/Icon.svelte';

// 속성을 계산된 Dropdown 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 열림 상태, 배치, 너비, 트리거 레이블, 선택 후 닫힘을 prop으로 받습니다.
let {
  open = undefined,
  defaultOpen = false,
  disabled = false,
  placement = 'start',
  fit = false,
  maxVisibleItems,
  menuWidth,
  menuMinWidth,
  triggerLabel = '메뉴',
  closeOnSelect = true,
  onOpen,
  onOpenChange,
  onSelect,
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
} = $props();
 // 열림·선택 이벤트를 부모로 전달합니다.

// 선언하지 않은 class와 HTML 속성을 수집합니다.

let rootRef = $state(null); // 바깥 클릭 판별용 루트 참조입니다.
let internal = $state(defaultOpen); // 비제어형 열림 상태입니다.
const menuId = `dropdown-menu-${crypto.randomUUID().replaceAll('-', '')}`; // 메뉴와 트리거를 연결하는 id입니다.
let visible = $derived((open === undefined ? internal : open)); // 최종 표시 상태입니다.

// 열림·비활성·배치·맞춤 클래스를 조합합니다.
let classes = $derived([
    'dropdown', // Dropdown 루트를 활성화하는 필수 클래스입니다.
    visible && 'is-open', // 메뉴가 열린 상태입니다.
    disabled && 'is-disabled', // 비활성 상태입니다.
    placement === 'end' && 'dropdown_placement-end', // 끝쪽 배치 변형입니다.
    placement === 'top' && 'dropdown_placement-top', // 위쪽 배치 변형입니다.
    fit && 'dropdown_fit', // 트리거 너비에 맞추는 변형입니다.
  ].filter(Boolean),
); // false 등 적용되지 않는 항목을 제거합니다.

// 보이는 항목 수와 너비 관련 CSS 변수를 메뉴에 전달합니다.
let menuStyle = $derived(({
  ...(maxVisibleItems != null
    ? { '--dropdown-max-visible-items': maxVisibleItems }
    : {}),
  ...(menuWidth != null
    ? { width: typeof menuWidth === 'number' ? `${menuWidth}rem` : menuWidth }
    : {}),
  ...(menuMinWidth != null
    ? {
        minWidth:
          typeof menuMinWidth === 'number' ? `${menuMinWidth}rem` : menuMinWidth,
      }
    : {}),
}));

// 비활성 상태면 무시하고, 비제어형이면 내부 상태를 갱신한 뒤 이벤트를 보냅니다.
function setOpen(next) {
  if (disabled) return;
  if (open === undefined) internal = next;
  onOpen?.(next);
  onOpenChange?.(next);
}

// 활성 메뉴 항목 중 지정 위치로 포커스를 이동합니다.
function focusItem(position = 0) {
  tick(() =>
    requestAnimationFrame(() => {
      const items = [
        ...(rootRef?.querySelectorAll(
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
    if (!visible) setOpen(true);
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
  onSelect?.(item.dataset ?? item.textContent?.trim(), event);
  if (closeOnSelect) {
    setOpen(false);
    tick(() => rootRef?.querySelector('.dropdown_trigger')?.focus());
  }
}

// 메뉴가 열린 동안 바깥 클릭과 Escape로 닫습니다.
function outside(event) {
  if (visible && !rootRef?.contains(event.target)) setOpen(false);
}
function escape(event) {
  if (visible && event.key === 'Escape') {
    setOpen(false);
    rootRef?.querySelector('.dropdown_trigger')?.focus();
  }
}
onMount(() => {
  document.addEventListener('pointerdown', outside);
  document.addEventListener('keydown', escape);
});
onDestroy(() => {
  document.removeEventListener('pointerdown', outside);
  document.removeEventListener('keydown', escape);
});

// 기본 트리거와 슬롯 트리거가 공유하는 열림·키보드 props입니다.
let triggerProps = $derived(({
  class: 'dropdown_trigger',
  haspopup: 'menu',
  expanded: visible,
  'aria-controls': menuId,
  disabled: disabled,
  onClick: () => setOpen(!visible),
  onKeydown: triggerKeydown,
}));
</script>

<!-- 트리거와 메뉴를 루트에 연결하고 키보드·클릭 처리를 붙입니다. -->
  <div {...rest} bind:this={rootRef} class={classes} data-component="Dropdown" data-dropdown>
    <slot
      name="trigger"
      open={visible}
      toggle={() => setOpen(!visible)}
      trigger-props={triggerProps}
      ><Button {...triggerProps} variant="outline" label={triggerLabel}
        ><#icon-after><Icon name="chevron-down" />
