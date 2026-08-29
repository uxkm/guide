<!--
  TreeNode 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
let {
  label,
  expanded = undefined,
  selected = false,
  disabled = false,
  expandable = false,
  plusToggle = false,
  toggleLabel,
  link = false,
  meta,
  onExpanded,
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();


// expanded prop과 내부 상태를 동기화해 제어·비제어 사용을 모두 지원합니다.
let isExpanded = $state(expanded !== false);
$effect(
  () => expanded,
  (value) => {
    if (value !== undefined) isExpanded = value !== false;
  },
);
let hasChildren = $derived(Boolean(default));
let showToggle = $derived(expandable || hasChildren);
// 비활성 노드는 유지하고 토글 시 update:expanded 이벤트를 같은 값으로 전달합니다.
const toggle = () => {
  if (!disabled) {
    isExpanded = !isExpanded;
    onExpanded?.(isExpanded);
  }
};
</script>

<li
    class="tree_item"
    data-component="TreeNode"
    role="treeitem"
    aria-expanded={showToggle ? isExpanded : undefined}
  >
    <div class={['tree_row', selected && 'is-selected', disabled && 'is-disabled']}>
      {#if showToggle}<button
       
        type="button"
        class={['tree_toggle', plusToggle && 'tree_toggle-plus']}
        aria-expanded={isExpanded}
        aria-label={toggleLabel}
        disabled={disabled || undefined}
        onclick={toggle}
      />{:else}<span class="tree_toggle tree_toggle_placeholder" aria-hidden="true" />{@render prefix?.()}{#if icon}<span class="tree_icon" aria-hidden="true">{@render icon?.()}</span
      >{#if link}<button type="button" class="tree_link" disabled={disabled || undefined}>
        <slot name="label"
          ><span class="tree_label">{{ label }}</span></slot
        ></button
      >{:else}<slot name="label"
        ><span class="tree_label">{{ label }}</span></slot
      >{#if meta || meta}<span class="tree_meta"
        ><slot name="meta">{{ meta }}</slot></span
      >
    </div>
    {#if hasChildren}<ul v-show="isExpanded" class="tree" role="group">
      {@render children?.()}
    </ul>
  </li>
