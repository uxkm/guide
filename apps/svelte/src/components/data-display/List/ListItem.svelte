<!--
  ListItem 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
import { getContext } from 'svelte';


let {
  title,
  description,
  meta,
  tag = 'auto',
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
} = $props();=> ['auto', 'li', 'dt', 'dd'].includes(value),
  }, // auto면 부모 목록에 맞는 태그(li · dt · dd)입니다.
});


const context = getContext(
  'uxkmListContext',
  computed(() => ({ tag: 'ul', variant: 'default' })),
);
// 정의 목록의 title+description 조합은 형제 dt·dd 쌍으로 렌더링합니다.
let definitionPair = $derived(tag === 'auto' && context.tag === 'dl' && Boolean(title && description),
);
// 명시적 태그가 없으면 부모 ul·ol·dl·div 의미에 맞춰 항목 루트를 선택합니다.
let rootTag = $derived({
  if (tag !== 'auto') return tag;
  if (context.tag === 'dl') return title ? 'dt' : 'dd';
  if (context.tag === 'div') return 'div';
  return 'li';
});
let hasContent = $derived(Boolean(title || description || meta || default),
);
let fallthroughAttrs = $derived({
  const { class: _class, role: _role, ...rest } = rest;
  return rest;
});
</script>

<!-- prefix·본문·extra·actions slot을 독립 영역으로 배치합니다. -->
  {#if definitionPair}<template>
    <dt {...fallthroughAttrs} class="list_title" class={attrs.class}>{{ title }}</dt>
    <dd class="list_desc">{{ description }}</dd>
