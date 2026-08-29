<!--
  Link 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script>
let {
  as = 'a',
  ripple = true,
  color = 'primary',
  size = '',
  underline = false,
  noUnderline = false,
  standalone = false,
  nav = false,
  block = false,
  back = false,
  iconOnly = false,
  active = false,
  disabled = false,
  label,
  href,
  target,
  rel,
  ariaLabel,
  onClick,
  onclick,
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




const colors = new Set(['primary', 'muted', 'success', 'warning', 'danger', 'info']);
const sizes = new Set(['', 'sm', 'lg', 'xl']);
let resolvedColor = $derived((colors.has(color) ? color : 'primary'));
let resolvedSize = $derived((sizes.has(size) ? size : ''));
let rootTag = $derived(as || 'a');
let isAnchor = $derived(rootTag === 'a');
let isButton = $derived(rootTag === 'button');
let acceptsHref = $derived(isAnchor || typeof rootTag !== 'string');
let showLabel = $derived(!iconOnly && (Boolean(default) || Boolean(label)),
);
let classes = $derived([
    'link',
    `color_${resolvedColor}`,
    resolvedSize && `size_${resolvedSize}`,
    underline && 'link_underline',
    noUnderline && 'link_no-underline',
    standalone && 'link_standalone',
    nav && 'link_nav',
    block && 'link_block',
    back && 'link_back',
    iconOnly && 'link_icon-only',
    active && 'is-active',
    disabled && 'is-disabled',
    className,
  ].filter(Boolean),
);

function handleClick(event) {
  if (disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (!href || href === '#') event.preventDefault();
  onclick?.(event);
}
</script>

<svelte:element this={rootTag}
    {...rest}
    aria-current={active ? 'page' : undefined}
    aria-disabled={disabled || undefined}
    aria-label={ariaLabel || attrs['aria-label']}
    class={classes}
    data-component="Link"
    data-ripple={ripple ? 'true' : 'false'}
    disabled={isButton ? disabled : undefined}
    href={acceptsHref ? href || '#' : undefined}
    rel={acceptsHref ? rel : undefined}
    tabindex={disabled ? -1 : attrs.tabindex}
    target={acceptsHref ? target : undefined}
    type={isButton ? 'button' : undefined}
    onclick={handleClick}
  >
    {@render icon?.()}
    {#if showLabel}{@render children?.() ?? label}
    {@render iconAfter?.()}
  </svelte:element>
