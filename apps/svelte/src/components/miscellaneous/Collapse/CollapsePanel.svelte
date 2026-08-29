<!--
  CollapsePanel 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script>
import { getContext, onMount, onDestroy } from 'svelte';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.svelte';
import Icon from '../../basic/Icon/Icon.svelte';



let {
  label = '',
  content,
  open = false,
  disabled = false,
  ripple = true,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();
const collapse = getContext('uxkmCollapse', null);
const uid = crypto.randomUUID().replaceAll('-', '');
const triggerId = `collapse-trigger-${uid}`;
const bodyId = `collapse-body-${uid}`;
let bodyRef = $state(null);
let isOpen = $state(Boolean(open));
let disabled = $derived(disabled);
let slide = $derived(collapse?.effect === 'slide');
let classes = $derived(['collapse_panel', isOpen && 'is-open', disabled && 'is-disabled'].filter(Boolean),
);
let unregister;
let firstSlideSync = true;

function handleKeydown(event) {
  if (collapse?.focusAdjacent(triggerId, event.key)) event.preventDefault();
}

$effect(
  [isOpen, slide],
  ([open, hasSlide]) => {
    if (!hasSlide) return;
    setSlideRegionOpen(bodyRef, open, !firstSlideSync);
    firstSlideSync = false;
  },
  { flush: 'post' },
);

onMount(() => {
  unregister = collapse?.registerPanel({ id: triggerId, open: isOpen, disabled });
  if (slide) {
    setSlideRegionOpen(bodyRef, isOpen, false);
    firstSlideSync = false;
  }
});
onDestroy(() => unregister?.());
</script>

<div class={classes}>
    <div class="collapse_header">
      <Button
        id={triggerId}
        variant="text"
        color="default"
        class="collapse_trigger"
        expanded={isOpen}
        aria-controls={bodyId}
        disabled={disabled}
        ripple={ripple}
        onclick={collapse?.togglePanel(triggerId)}
        onkeydown={handleKeydown}
      >
        <span class="collapse_label"
          ><slot name="title">{{ label }}</slot></span
        >
        {#if extra}<span class="collapse_extra">{@render extra?.()}</span>
        <#icon-after><Icon name="chevron-down" class="collapse_icon" />
