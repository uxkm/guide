<!--
  Collapse 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script>
import { setContext } from 'svelte';



let {
  variant = 'bordered',
  size = 'md',
  accordion = false,
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
const panels = new Map();
let effect = $derived(effect);
let classes = $derived([
    'collapse_group',
    `collapse_${['bordered', 'ghost', 'card'].includes(variant) ? variant : 'bordered'}`,
    size !== 'md' && ['sm', 'lg'].includes(size) && `collapse_${size}`,
    className,
  ].filter(Boolean),
);
let restAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});

function registerPanel(panel) {
  panels.set(panel.id, panel);
  return () => panels.delete(panel.id);
}

function togglePanel(id) {
  const panel = panels.get(id);
  if (!panel || panel.disabled) return;
  const willOpen = !panel.open;
  if (willOpen && accordion) {
    panels.forEach((other, otherId) => {
      if (otherId !== id && !other.disabled) other.open = false;
    });
  }
  panel.open = willOpen;
}

function focusAdjacent(id, key) {
  const enabled = [...panelss()].filter((panel) => !panel.disabled);
  const index = enabled.findIndex((panel) => panel.id === id);
  let nextIndex = null;
  if (key === 'ArrowDown') nextIndex = (index + 1) % enabled.length;
  else if (key === 'ArrowUp') nextIndex = (index - 1 + enabled.length) % enabled.length;
  else if (key === 'Home') nextIndex = 0;
  else if (key === 'End') nextIndex = enabled.length - 1;
  if (nextIndex == null || !enabled[nextIndex]) return false;
  rootRef?.querySelector(`#${CSS.escape(enabled[nextIndex].id)}`)?.focus();
  return true;
}

setContext('uxkmCollapse', { effect, focusAdjacent, registerPanel, togglePanel });
</script>

<div
    bind:this={rootRef}
    {...restAttrs}
    class={classes}
    data-component="Collapse"
    data-collapse
    data-collapse-accordion={accordion ? '' : undefined}
    data-effect={effect === 'slide' ? 'slide' : undefined}
  >
    {@render children?.()}
  </div>
