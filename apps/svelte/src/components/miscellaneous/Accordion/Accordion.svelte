<!--
  Accordion 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script>
import { setContext } from 'svelte';



let {
  variant = 'bordered',
  size = 'md',
  multiple = false,
  effect,
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

let rootRef = $state(null);
const items = new Map();
let effect = $derived(effect);
let classes = $derived([
    'accordion',
    `accordion_${['bordered', 'flush', 'card'].includes(variant) ? variant : 'bordered'}`,
    size !== 'md' && ['sm', 'lg'].includes(size) && `accordion_${size}`,
    className,
  ].filter(Boolean),
);
let restAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});

function registerItem(item) {
  items.set(item.id, item);
  return () => items.delete(item.id);
}

function toggleItem(id) {
  const item = items.get(id);
  if (!item || item.disabled) return;
  const willOpen = !item.open;
  if (willOpen && !multiple) {
    items.forEach((other, otherId) => {
      if (otherId !== id && !other.disabled) other.open = false;
    });
  }
  item.open = willOpen;
}

function focusAdjacent(id, key) {
  const enabled = [...itemss()].filter((item) => !item.disabled);
  const index = enabled.findIndex((item) => item.id === id);
  let nextIndex = null;
  if (key === 'ArrowDown') nextIndex = (index + 1) % enabled.length;
  else if (key === 'ArrowUp') nextIndex = (index - 1 + enabled.length) % enabled.length;
  else if (key === 'Home') nextIndex = 0;
  else if (key === 'End') nextIndex = enabled.length - 1;
  if (nextIndex == null || !enabled[nextIndex]) return false;
  rootRef?.querySelector(`#${CSS.escape(enabled[nextIndex].id)}`)?.focus();
  return true;
}

setContext('uxkmAccordion', { effect, focusAdjacent, registerItem, toggleItem });
</script>

<div
    bind:this={rootRef}
    {...restAttrs}
    class={classes}
    data-component="Accordion"
    data-accordion
    data-accordion-multiple={multiple ? '' : undefined}
    data-effect={effect === 'slide' ? 'slide' : undefined}
  >
    {@render children?.()}
  </div>
