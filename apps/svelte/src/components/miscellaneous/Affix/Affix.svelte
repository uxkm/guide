<!--
  Affix 원본 구현.
  컴포넌트 상태와 사용자 상호작용을 관리하고 공통 CSS 및 접근성 계약을 적용합니다.
-->
<script>
import { onMount, onDestroy } from 'svelte';
import { initAffix } from '@uxkm/html/affix';


let {
  target,
  offsetTop = 0,
  offsetBottom,
  skin = '',
  interactive = true,
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
} = $props();입니다.
  offsetBottom: [Number, String], // 하단 고정 오프셋(px)입니다.
  skin: { type: String, default: '', validator: (value) => ['', 'bar', 'anchor'].includes(value) }, // bar · anchor 스킨입니다.
  interactive: { type: Boolean, default: true }, // 스크롤 고정을 활성화합니다.
});

let rootRef = $state(null);
let cleanup = null;
let classes = $derived(['affix', className].filter(Boolean));
let targetClasses = $derived(['affix_target', skin && `affix_${skin}`].filter(Boolean),
);
let restAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
let dataAttrs = $derived(({
  'data-affix': interactive ? '' : undefined,
  'data-target': target || undefined,
  'data-offset-top': Number(offsetTop) !== 0 ? String(offsetTop) : undefined,
  'data-offset-bottom':
    offsetBottom !== undefined && offsetBottom !== null && offsetBottom !== ''
      ? String(offsetBottom)
      : undefined,
}));
function init() {
  cleanup?.();
  cleanup = interactive && rootRef ? initAffix(rootRef) : null;
}
onMount(init);
$effect(() => [interactive, target, offsetTop, offsetBottom], init, {
  flush: 'post',
});
onDestroy(() => cleanup?.());
</script>

<div
    bind:this={rootRef}
    v-bind="{ ...restAttrs, ...dataAttrs }"
    class={classes}
    data-component="Affix"
  >
    <div class="affix_placeholder" aria-hidden="true" hidden />
    <div class={targetClasses}>{@render children?.()}</div>
  </div>
