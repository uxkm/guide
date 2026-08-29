<!--
  FlexItem 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script>
// 속성을 계산된 FlexItem 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 루트 요소, 반응형 너비, 확장, 정렬과 표시 순서를 prop으로 받습니다.
let {
  as = 'div',
  span,
  spanMd,
  spanLg,
  grow = false,
  growFactor = 1,
  fit = false,
  align = '',
  order,
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

// 선언하지 않은 속성을 수집하고 숫자 prop을 1~12 범위로 제한합니다.

const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 문자열 prop이 지원하는 개별 교차축 정렬만 CSS 클래스로 전달합니다.
const aligns = new Set(['', 'auto', 'start', 'center', 'end', 'stretch', 'baseline']);

// grow가 켜진 경우 growFactor가 2일 때만 두 배 확장 클래스를 사용합니다.
let resolvedGrow = $derived(grow && Number(growFactor) === 2 ? 'flex_grow-2' : grow ? 'flex_grow' : '',
);

// 반응형 span, 크기, 정렬, 순서와 사용자 정의 class를 조합합니다.
let classes = $derived([
    range(span) && `flex_item-span-${range(span)}`, // 기본 구간에서 차지할 너비입니다.
    range(spanMd) && `flex_item-span-md-${range(spanMd)}`, // md 이상에서 차지할 너비입니다.
    range(spanLg) && `flex_item-span-lg-${range(spanLg)}`, // lg 이상에서 차지할 너비입니다.

    resolvedGrow, // 남는 공간을 1배 또는 2배 비율로 채웁니다.
    fit && 'flex_fit', // 콘텐츠 기준 너비를 유지합니다.
    aligns.has(align) && align && `flex_self-${align}`, // 검증된 개별 교차축 정렬입니다.
    range(order) && `flex_order-${range(order)}`, // 검증된 화면 표시 순서입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
); // 적용되지 않는 빈 항목을 제거합니다.
</script>

<!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <svelte:element this={as} {...rest} class={classes} data-component="FlexItem">
    <!-- 호출 위치에서 전달한 FlexItem 콘텐츠를 렌더링합니다. -->
    {@render children?.()}
  </svelte:element>
