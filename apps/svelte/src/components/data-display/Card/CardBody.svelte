<!--
  CardBody 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
// class를 제외한 전달 속성은 body 루트에 적용하고 사용자 class는 별도로 병합합니다.
let rootAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
</script>

<!-- 공통 클래스와 slot으로 구조를 구성합니다. -->
  <div {...rootAttrs} class="card_body" class={attrs.class}>{@render children?.()}</div>
