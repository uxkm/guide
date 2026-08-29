<!--
  FormField 원본 구현.
  폼 값·검증·비활성 상태를 제어하고 레이블, 키보드 동작, 사용자 이벤트를 연결합니다.
-->
<script>
// 속성을 계산된 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 필드 루트, 레이블 연결, 필수 표시와 상태 메시지를 하나의 API로 제공합니다.
let {
  as = 'div',
  label = '',
  for = '',
  required = false,
  hint = '',
  error = '',
  success = '',
  fit = false,
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


// 개별 필드 너비 변형과 사용자가 전달한 클래스를 함께 유지합니다.
let classes = $derived([
    'form_field', // 필드 단위 레이아웃 클래스입니다.
    fit && 'form_field_fit', // 필드 너비 제한입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean),
);
</script>

<svelte:element this={as} {...rest} class={classes}>
    <!-- label과 for를 연결하고 필수 상태는 시각·보조기술 텍스트를 모두 제공합니다. -->
    {#if label}<label class="form_field-label" for={htmlFor}>
      {{ label }}
      {#if required}<span class="form_field-required">
        <span aria-hidden="true">*</span>
        <span class="form_field-required-text">필수 항목</span>
      </span>
    </label>
    <!-- 입력 컴포넌트 종류와 관계없이 동일한 control 영역에 배치합니다. -->
    <div class="form_field-control">
      {@render children?.()}
    </div>
    <!-- 오류는 도움말보다 우선하며 즉시 읽히도록 alert 역할을 사용합니다. -->
    {#if error}<p class="form_field-error" role="alert">{{ error }}</p>
    {:else if hint}<p class="form_field-hint">{{ hint }}</p>
    <!-- 성공 메시지는 도움말·오류와 독립적으로 필요한 경우 표시합니다. -->
    {#if success}<p class="form_field-success">{{ success }}</p>
  </svelte:element>
