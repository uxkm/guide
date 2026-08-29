<!--
  List 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
import { setContext } from 'svelte';

// 목록 종류에 맞는 시맨틱 루트와 공통 변형 클래스를 선택합니다.

const VARIANT_TAG = { default: 'ul', bullet: 'ul', ordered: 'ol', definition: 'dl' };
const VARIANT_CLASS = {
  bullet: 'list_bullet',
  ordered: 'list_ordered',
  definition: 'list_definition',
};
let {
  bordered = false,
  split = false,
  block = false,
  size = 'md',
  variant = 'default',
  tag = undefined,
  layout = 'block',
  inlineLabelWidth,
  inlineGap,
  descAlign = 'left',
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
} = $props();=> ['md', 'compact'].includes(value) }, // compact면 조밀한 크기입니다.
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'bullet', 'ordered', 'definition'].includes(value),
  }, // default · bullet · ordered · definition 목록 변형입니다.
  tag: {
    type: String,
    default: undefined,
    validator: (value) => ['ul', 'ol', 'dl', 'div'].includes(value),
  }, // 명시적 루트 태그(ul · ol · dl · div)입니다.
  layout: {
    type: String,
    default: 'block',
    validator: (value) => ['block', 'inline'].includes(value),
  }, // block · inline 레이아웃입니다.
  inlineLabelWidth: String, // inline 레이아웃의 라벨 너비 CSS 값입니다.
  inlineGap: String, // inline 레이아웃의 간격 CSS 값입니다.
  descAlign: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  }, // 정의 목록 설명 정렬입니다.
});

let rootTag = $derived(tag ?? VARIANT_TAG[variant]);
// ListItem이 부모 목록 의미에 맞는 태그를 고르도록 context를 제공합니다.
setContext(
  'uxkmListContext',
  computed(() => ({ tag: rootTag, variant: variant })),
);
// 외형과 정의 목록 배치를 list_* 공통 클래스로 변환합니다.
let classes = $derived([
    'list',
    VARIANT_CLASS[variant],
    bordered && 'list_bordered',
    split && 'list_divider',
    block && 'list_block',
    size === 'compact' && 'list_compact',
    layout === 'inline' && 'list_inline',
    variant === 'definition' && descAlign === 'right' && 'list_desc-right',
    className,
  ].filter(Boolean),
);
let rootStyle = $derived(({
  ...(typeof rest.style === 'object' ? rest.style : {}),
  ...(layout === 'inline' && inlineLabelWidth
    ? { '--list-inline-label-width': inlineLabelWidth }
    : {}),
  ...(layout === 'inline' && inlineGap ? { '--list-inline-gap': inlineGap } : {}),
}));
let fallthroughAttrs = $derived({
  const { class: _class, style: _style, role: _role, ...rest } = rest;
  return rest;
});
</script>

<!-- ul·ol·dl·div 의미와 필요한 list role을 동적 루트에 적용합니다. -->
  <svelte:element this={rootTag}
    {...fallthroughAttrs}
    class={classes}
    data-component="List"
    role={attrs.role ?? (rootTag === 'div' ? 'list' : undefined)}
    style={rootStyle}
    >{@render children?.()}</svelte:element>
