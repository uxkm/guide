<!--
  FormActions 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script>
// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 필요하면 div 대신 다른 시맨틱 루트로 액션 그룹을 렌더링할 수 있습니다.
let {
  as = 'div',
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


// 폼 레이아웃이 인식하는 액션 클래스와 외부 클래스를 함께 적용합니다.
let classes = $derived([
    'form_actions', // 제출·취소 등 액션 영역 클래스입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);
</script>

<!-- 제출·취소 등 폼 액션을 하나의 레이아웃 영역으로 묶습니다. -->
  <svelte:element this={as} {...rest} class={classes}>
    {@render children?.()}
  </svelte:element>
