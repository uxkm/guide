<!--
  ProgressCircle 원본 구현.
  피드백 상태와 노출 동작을 관리하고 필요한 접근성 역할과 사용자 이벤트를 연결합니다.
-->
<script>
// 원형 진행률 값과 표현 옵션을 prop으로 받습니다.
let {
  percent = 0,
  color = 'primary',
  size = 'md',
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
// 원형 Progress 클래스와 색상·크기를 조합합니다.
let classes = $derived([
    'progress', // Progress 공통 루트 클래스입니다.
    'progress_circle', // 원형 변형입니다.
    `color_${['primary', 'success', 'warning', 'danger'].includes(color) ? color : 'primary'}`, // 의미 색상입니다.
    size !== 'md' && `progress_${size}`, // md가 아닐 때만 크기 변형입니다.
  ].filter(Boolean),
); // 미적용 항목을 제거합니다.
</script>

<!-- CSS 변수 --progress-percent로 stroke를 제어합니다. -->
  <div
    class={classes}
    data-component="ProgressCircle"
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label={ariaLabel}
    style={{ '--progress-percent': value }}
  >
    <!-- 트랙·채움 원호를 그리는 SVG입니다. -->
    <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
      <circle class="progress_circle-track" cx="50" cy="50" r="45" />
      <circle class="progress_circle-bar" cx="50" cy="50" r="45" /></svg
    ><span class="progress_circle-value">{{ value }}%</span>
  </div>
