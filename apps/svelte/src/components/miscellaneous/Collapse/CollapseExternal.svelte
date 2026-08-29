<!--
  CollapseExternal 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script>
import { onMount } from 'svelte';
import { setSlideRegionOpen } from '@uxkm/interactions/slide-region';
import Button from '../../basic/Button/Button.svelte';
import Icon from '../../basic/Icon/Icon.svelte';



let {
  triggerLabel = '',
  open = false,
  effect,
  boxed = true,
  ripple = true,
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

const panelId = `collapse-external-${crypto.randomUUID().replaceAll('-', '')}`;
let panelRef = $state(null);
let isOpen = $state(Boolean(open));
let slide = $derived(effect === 'slide');
let restAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
let firstSlideSync = true;

$effect(
  [isOpen, slide],
  ([open, hasSlide]) => {
    if (!hasSlide) return;
    setSlideRegionOpen(panelRef, open, !firstSlideSync);
    firstSlideSync = false;
  },
  { flush: 'post' },
);

onMount(() => {
  if (slide) {
    setSlideRegionOpen(panelRef, isOpen, false);
    firstSlideSync = false;
  }
});
</script>

<div {...restAttrs} class={attrs.class}>
    {#if lead}<div><slot name="lead" /></div>
    <Button
      variant="ghost"
      size="sm"
      expanded={isOpen}
      aria-controls={panelId}
      ripple={ripple}
      onclick={isOpen = !isOpen}
    >
      {{ triggerLabel }}
      <#icon-after><Icon name="chevron-down" size="sm" />
