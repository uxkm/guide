<!--
  AccordionItem 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script>
import { getContext, onMount, onDestroy, tick } from 'svelte';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.svelte';
import Icon from '../../basic/Icon/Icon.svelte';

let {
  label = '',
  content,
  open = false,
  disabled = false,
  headingLevel = 3,
  ripple = true,
  title,
  extra,
  children,
  iconAfter,
} = $props();

const accordion = getContext('uxkmAccordion');
const uid = crypto.randomUUID().replaceAll('-', '');
const triggerId = `accordion-trigger-${uid}`;
const panelId = `accordion-panel-${uid}`;
let panelRef = $state(null);
let isOpen = $state(Boolean(open));
let slide = $derived(accordion?.effect === 'slide');
let classes = $derived(
  ['accordion_item', isOpen && 'is-open', disabled && 'is-disabled'].filter(Boolean),
);
let unregister;
let firstSlideSync = true;

function handleKeydown(event) {
  if (accordion?.focusAdjacent(triggerId, event.key)) event.preventDefault();
}

function handleToggle() {
  accordion?.toggleItem(triggerId);
}

$effect(() => {
  if (!slide) return;
  setSlideRegionOpen(panelRef, isOpen, !firstSlideSync);
  firstSlideSync = false;
});

onMount(() => {
  unregister = accordion?.registerItem({
    id: triggerId,
    open: isOpen,
    disabled: disabled,
  });
  if (slide) {
    setSlideRegionOpen(panelRef, isOpen, false);
    firstSlideSync = false;
  }
});
onDestroy(() => unregister?.());
</script>

<div class={classes}>
  <div class="accordion_heading" role="heading" aria-level={headingLevel}>
    <Button
      id={triggerId}
      variant="text"
      color="default"
      class="accordion_trigger"
      expanded={isOpen}
      aria-controls={panelId}
      disabled={disabled}
      ripple={ripple}
      onclick={handleToggle}
      onkeydown={handleKeydown}
    >
      {#snippet children()}
        <span class="accordion_label">{@render title?.() ?? label}</span>
        {#if extra}<span class="accordion_extra">{@render extra()}</span>{/if}
      {/snippet}
      {#snippet iconAfter()}
        <Icon name="chevron-down" class="accordion_icon" />
      {/snippet}
    </Button>
  </div>
  <div
    id={panelId}
    bind:this={panelRef}
    class="accordion_panel"
    role="region"
    aria-labelledby={triggerId}
    hidden={slide ? undefined : !isOpen}
  >
    <div class="accordion_content">
      {#if children}
        {@render children()}
      {:else if content}
        <p>{content}</p>
      {/if}
    </div>
  </div>
</div>
