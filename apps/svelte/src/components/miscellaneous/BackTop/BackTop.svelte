<!--
  BackTop 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script>
import { onMount, onDestroy } from 'svelte';
import { initBackTop } from '@uxkm/html/back-top';

let {
  target,
  visibilityHeight = 400,
  size = 'md',
  color = '',
  label,
  ariaLabel = '맨 위로',
  interactive = true,
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

let rootRef = $state(null);
let cleanup = null;
let classes = $derived([
    'back_top',
    size !== 'md' && ['sm', 'lg'].includes(size) && `back_top_${size}`,
    ['primary', 'ghost'].includes(color) && `back_top_${color}`,
    className,
  ].filter(Boolean),
);
let restAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
function init() {
  cleanup?.();
  cleanup = interactive && rootRef ? initBackTop(rootRef) : null;
}
onMount(init);
$effect(() => [interactive, target, visibilityHeight], init, { flush: 'post' });
onDestroy(() => cleanup?.());
</script>

<Teleport to="body" disabled={Boolean(target)}>
    <div
      bind:this={rootRef}
      {...restAttrs}
      class={classes}
      data-component="BackTop"
      data-back-top={interactive ? '' : undefined}
      data-target={target || undefined}
      data-visibility-height={Number(visibilityHeight) !== 400 ? visibilityHeight : undefined}
    >
      <button
        type="button"
        class="btn btn_ghost back_top_btn"
        aria-label={ariaLabel}
        data-ripple={ripple ? 'surface' : 'false'}
      >
        <slot
          ><svg
            class="back_top_icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="m6 15 6-6 6 6" /></svg
          >{#if label}<span class="back_top_label">{{ label }}</span></slot
        >
      </button>
    </div>
  </Teleport>
