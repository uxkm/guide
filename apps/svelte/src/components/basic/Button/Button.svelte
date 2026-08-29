<!--
  Button 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script>
let {
  label = 'Button',
  ripple = true,
  color = 'primary',
  disabled = false,
  variant = 'filled',
  size = 'md',
  iconOnly = false,
  vertical = false,
  round = false,
  block = false,
  grow = false,
  fit = false,
  loading = false,
  open = false,
  error = false,
  placeholder = false,
  selectText = false,
  selectCaret = false,
  ariaDisabled = false,
  ariaLabel,
  haspopup,
  expanded,
  invalid = false,
  tag = 'button',
  href,
  role,
  tabindex,
  type = 'button',
  onclick,
  onkeydown,
  children,
  iconBefore,
  iconAfter,
} = $props();

let inactive = $derived(disabled || ariaDisabled || loading);
let needsButtonSemantics = $derived(tag === 'div' || (tag === 'a' && !href));
let classes = $derived(
  [
    'btn',
    variant === 'select' ? 'btn_select' : `btn_${variant}`,
    variant !== 'ghost' ? `color_${color}` : '',
    size !== 'md' ? `btn_${size}` : '',
    selectText ? 'btn_select-text' : '',
    placeholder ? 'btn_select-placeholder' : '',
    iconOnly ? 'btn_icon-only' : '',
    vertical ? 'btn_vertical' : '',
    round ? 'btn_round' : '',
    block ? 'btn_block' : '',
    grow === true ? 'btn_grow' : '',
    grow === '2' ? 'btn_grow-2' : '',
    fit ? 'btn_fit' : '',
    ariaDisabled ? 'is-disabled' : '',
    loading ? 'is-loading' : '',
    open ? 'is-open' : '',
    error ? 'is-error' : '',
  ].filter(Boolean),
);

function handleClick(event) {
  if (inactive) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  onclick?.(event);
}

function handleKeydown(event) {
  if (inactive) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (needsButtonSemantics && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    event.currentTarget.click();
  }
  onkeydown?.(event);
}
</script>

<svelte:element
  this={tag}
  aria-busy={loading || undefined}
  aria-disabled={ariaDisabled || (tag !== 'button' && disabled) || undefined}
  aria-expanded={expanded ?? (open || undefined)}
  aria-haspopup={haspopup}
  aria-invalid={invalid || error || undefined}
  aria-label={ariaLabel}
  class={classes}
  data-component="Button"
  data-ripple={ripple ? 'true' : 'false'}
  disabled={tag === 'button' ? disabled : undefined}
  href={tag === 'a' ? href : undefined}
  role={role ?? (needsButtonSemantics ? 'button' : undefined)}
  tabindex={inactive && tag !== 'button' ? -1 : (tabindex ?? (needsButtonSemantics ? 0 : undefined))}
  type={tag === 'button' ? type : undefined}
  onclick={handleClick}
  onkeydown={handleKeydown}
>
  {#if loading}<span class="btn_spinner" aria-hidden="true" />{/if}
  {@render iconBefore?.()}
  {#if !iconOnly}
    <span class="btn_label">{@render children?.() ?? label}</span>
  {:else}
    {@render children?.()}
  {/if}
  {@render iconAfter?.()}
  {#if variant === 'select' || selectCaret}
    <svg
      class="icon"
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.8"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  {/if}
</svelte:element>
