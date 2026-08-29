<!--
  CardHeader 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script>
let {
  title,
  subtitle,
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

// class를 제외한 전달 속성은 header 루트에 적용하고 사용자 class는 별도로 병합합니다.
let rootAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});
</script>

<!-- 공통 클래스와 slot으로 구조를 구성합니다. -->
  <div {...rootAttrs} class="card_header" class={attrs.class}>
    <div class="card_header-main">
      <slot
        >{#if title != null}<h3 class="card_title">{{ title }}</h3>
        {#if subtitle != null}<p class="card_subtitle">{{ subtitle }}</p></slot
      >
    </div>
    {#if extra}<div class="card_extra">{@render extra?.()}</div>
  </div>
