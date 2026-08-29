<!--
  Space 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script>
// 속성을 계산된 Space 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 간격, 방향, 줄바꿈, 너비와 정렬 방식을 prop으로 받습니다.
let {
  as = 'div',
  gap = undefined,
  size = '',
  vertical = false,
  wrap = false,
  block = false,
  align = '',
  justify = '',
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

// 선언하지 않은 class와 HTML 속성을 수집합니다.


// 간격·정렬 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const sizes = new Set(['', 'xs', 'sm', 'md', 'lg', 'xl']); // 지원하는 간격 크기입니다.
const aligns = new Set(['', 'start', 'center', 'end', 'baseline', 'stretch']); // 지원하는 교차축 정렬입니다.
const justifies = new Set(['', 'start', 'center', 'end', 'between']); // 지원하는 주축 정렬입니다.

// gap이 있으면 우선하고, 없으면 size 별칭을 사용하며 최종 기본값은 md입니다.
let resolvedSize = $derived((gap ?? size) || 'md');

// 간격·방향·줄바꿈·너비·정렬 상태와 사용자 정의 class를 조합합니다.
let classes = $derived([
    'space', // inline-flex 간격 컨테이너를 활성화하는 필수 클래스입니다.
    sizes.has(resolvedSize) &&
      resolvedSize !== 'md' &&
      `space_gap-${resolvedSize}`, // md가 아닐 때만 간격 클래스를 붙입니다.
    vertical && 'space_vertical', // 세로 배치 변형입니다.
    wrap && 'space_wrap', // 줄바꿈 변형입니다.
    block && 'space_block', // 전체 너비 block flex 변형입니다.
    aligns.has(align) && align && `space_align-${align}`, // 검증된 교차축 정렬입니다.
    justifies.has(justify) && justify && `space_justify-${justify}`, // 검증된 주축 정렬입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
); // 적용되지 않는 빈 항목을 제거합니다.
</script>

<!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <svelte:element this={as} {...rest} class={classes} data-component="Space">
    <!-- 콘텐츠가 없을 때는 컴포넌트 식별을 위한 기본 텍스트를 표시합니다. -->
    {@render children?.()}
  </svelte:element>
