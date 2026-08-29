<!--
  Spin 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script>
// 크기·색상·배치와 접근성 이름을 prop으로 받습니다.
let {
  size = 'md',
  tip,
  color = 'primary',
  inline = false,
  block = false,
  overlay = false,
  ariaLabel = '로딩 중',
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();

// 색상·크기·배치 클래스를 조합합니다.
let classes = $derived([
    'spin', // Spin 루트 클래스입니다.
    `color_${['primary', 'success', 'warning', 'danger'].includes(color) ? color : 'primary'}`, // 의미 색상입니다.
    size !== 'md' && `spin_${size}`, // md가 아닐 때만 크기 변형입니다.
    inline && 'spin_inline', // 인라인 배치입니다.
    block && 'spin_block', // 전체 너비 배치입니다.
    overlay && 'spin_overlay', // 오버레이 배치입니다.
  ].filter(Boolean),
); // 미적용 항목을 제거합니다.
</script>

<!-- 로딩 status 루트입니다. -->
  <div
    class={classes}
    data-component="Spin"
    role="status"
    aria-live="polite"
    aria-busy="true"
    aria-label={ariaLabel}
  >
    <!-- 회전하는 시각 표시기입니다. -->
    <span class="spin_indicator" aria-hidden="true" />
    {#if tip}<p class="spin_tip">{{ tip }}</p>
    {@render children?.()}
  </div>
