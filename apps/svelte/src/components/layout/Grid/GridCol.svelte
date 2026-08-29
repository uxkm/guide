<!--
  GridCol 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script>
// 속성을 계산된 GridCol 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 루트 요소와 기본·md·lg 구간의 개별 span 값을 받습니다.
let {
  as = 'div',
  span,
  spanMd,
  spanLg,
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

// 선언하지 않은 class와 HTML 속성을 수집하고 span을 12열 범위로 제한합니다.

const range = (value) =>
  Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 12 ? Number(value) : '';

// 반응형 span 클래스와 사용자 정의 class를 조합합니다.
let classes = $derived([
    range(span) && `grid_col-span-${range(span)}`, // 기본 구간에서 차지할 열 수입니다.
    range(spanMd) && `grid_col-span-md-${range(spanMd)}`, // md 이상에서 차지할 열 수입니다.
    range(spanLg) && `grid_col-span-lg-${range(spanLg)}`, // lg 이상에서 차지할 열 수입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
); // 적용되지 않는 빈 항목을 제거합니다.
</script>

<!-- as로 루트 요소를 결정하고 속성, 클래스, 기본 slot을 전달합니다. -->
  <svelte:element this={as} {...rest} class={classes} data-component="GridCol">
    <!-- 호출 위치에서 전달한 GridCol 콘텐츠를 렌더링합니다. -->
    {@render children?.()}
  </svelte:element>
