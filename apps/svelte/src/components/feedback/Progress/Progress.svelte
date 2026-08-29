<!--
  Progress 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script>
// 진행률·상태·표현 옵션을 prop으로 받습니다.
let {
  percent = 0,
  status = '',
  size = 'md',
  showInfo = false,
  label,
  color = 'primary',
  striped = false,
  animated = false,
  indeterminate = false,
  inside = false,
  block = false,
  ariaLabel = '진행률',
  children,
  iconBefore,
  iconAfter,
  prefix,
  suffix,
  panel,
  extra,
  badge
} = $props();

// 진행률을 0~100 범위로 제한합니다.
let value = $derived(Math.min(100, Math.max(0, Number(percent) || 0)));
// status가 있으면 상태 색상을, 없으면 color prop을 사용합니다.
let colorClass = $derived(status === 'success'
    ? 'color_success'
    : status === 'exception'
      ? 'color_danger'
      : `color_${['primary', 'success', 'warning', 'danger'].includes(color) ? color : 'primary'}`,
);
// 상태·크기·패턴·레이아웃 클래스를 조합합니다.
let classes = $derived([
    'progress', // Progress 루트 클래스입니다.
    colorClass, // 의미·상태 색상 클래스입니다.
    block ? 'progress_block' : 'progress_fit', // 전체 너비 또는 콘텐츠 너비입니다.
    size !== 'md' && `progress_${size}`, // md가 아닐 때만 크기 변형입니다.
    striped && 'progress_striped', // 줄무늬 패턴입니다.
    animated && 'progress_animated', // 줄무늬 애니메이션입니다.
    indeterminate && 'is-indeterminate', // 불확정 진행 상태입니다.
    inside && 'progress_inside', // 바 안 텍스트 변형입니다.
  ].filter(Boolean),
); // 미적용 항목을 제거합니다.
</script>

<!-- 선형 진행률 루트입니다. -->
  <div class={classes} data-component="Progress">
    <!-- 레이블·값 헤더는 showInfo 또는 label이 있을 때만 렌더합니다. -->
    {#if showInfo || label}<div class="progress_header">
      {#if label}<span class="progress_label">{{ label }}</span
      >{#if showInfo}<span class="progress_value">{{ value }}%</span>
    </div>
    <!-- 트랙이 실제 progressbar 역할을 담당합니다. -->
    <div
      class="progress_track"
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label={ariaLabel}
      aria-busy={indeterminate || undefined}
      style={inside ? { background: 'var(--color-border-subtle)' } : undefined}
    >
      <!-- 채움 막대 너비는 진행률(%)과 같습니다. -->
      <span class="progress_bar" style={{ width: `${value}%` }}>{{
        inside ? `${value}%` : ''
      }}</span>
    </div>
  </div>
