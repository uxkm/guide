<!--
  Alert 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script>
// 선언하지 않은 속성을 루트에 직접 전달하기 위해 자동 상속을 끕니다.


// 색상·콘텐츠·표시 옵션을 prop으로 받습니다.
let {
  color = 'info',
  title,
  description,
  closable = false,
  showIcon = true,
  size = 'md',
  banner = false,
  role = 'alert',
  closeLabel = '알림 닫기',
  onClose,
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
} = $props();변형입니다.
  role: { type: String, default: 'alert' }, // 접근성 역할입니다.
  closeLabel: { type: String, default: '알림 닫기' }, // 닫기 버튼의 접근성 이름입니다.
});

 // 닫기 이벤트입니다.
 // 선언하지 않은 HTML 속성입니다.
let visible = $state(true); // 닫기 전까지 알림을 화면에 유지합니다.

// 지원하지 않는 색상은 info로 되돌립니다.
let resolvedColor = $derived(['info', 'success', 'warning', 'danger'].includes(color) ? color : 'info',
);

// 루트·색상·크기·배너·사용자 클래스를 조합합니다.
let classes = $derived({
  const colorClass =
    resolvedColor === 'danger' ? 'color_error' : `color_${resolvedColor}`;

  return [
    'alert', // Alert 루트 클래스입니다.
    colorClass, // 의미 색상 클래스입니다.
    size !== 'md' && `alert_${size}`, // md가 아닐 때만 크기 변형입니다.
    banner && 'alert_banner', // 배너형 레이아웃입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ].filter(Boolean);
});

// class는 classes에 합쳤으므로 나머지 속성만 바인딩합니다.
let restAttrs = $derived({
  const { class: _class, ...rest } = rest;
  return rest;
});

// 내부 표시 상태를 끄고 close 이벤트를 알립니다.
function handleClose(event) {
  visible = false;
  onClose?.(event);
}
</script>

<!-- 닫힌 뒤에는 DOM에서 제거합니다. -->
  {#if visible}<div {...restAttrs} class={classes} data-component="Alert" role={role}>
    <!-- 아이콘 슬롯: 없으면 색상별 기본 SVG를 사용합니다. -->
    {#if showIcon}<slot name="icon">
      <svg
        class="alert_icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        {#if resolvedColor === 'info'}<template>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
