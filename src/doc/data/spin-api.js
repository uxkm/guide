export const spinPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const spinProps = [
  {
    name: 'size',
    type: `'sm' | 'md' | 'lg'`,
    default: 'md',
    description: '스피너 크기. sm·lg는 spin_sm · spin_lg 클래스',
  },
  {
    name: 'color',
    type: `'primary' | 'success' | 'warning' | 'danger'`,
    default: 'primary',
    description: '공통 color_* 클래스로 스피너 색상 지정',
  },
  {
    name: 'tip',
    type: 'string',
    default: '—',
    description: '스피너 아래 설명 텍스트 (spin_tip)',
  },
  {
    name: 'inline',
    type: 'boolean',
    default: 'false',
    description: '스피너·텍스트 가로 배치 (spin_inline)',
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    description: '부모 너비 안 가운데 정렬 (spin_block)',
  },
  {
    name: 'overlay',
    type: 'boolean',
    default: 'false',
    description: '컨테이너 전체를 덮는 오버레이 레이어 (spin_overlay)',
  },
  {
    name: 'aria-label',
    type: 'string',
    default: '로딩 중',
    description: '스크린 리더용 로딩 설명',
  },
];

export const spinWrapPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const spinWrapProps = [
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'true일 때 is-loading + 오버레이 Spin 표시',
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    description: '데모·빈 상태용 최소 높이 (spin_wrap-block)',
  },
  {
    name: 'blur',
    type: 'boolean',
    default: 'false',
    description: '로딩 시 콘텐츠 블러 (spin_wrap-blur)',
  },
  {
    name: 'tip',
    type: 'string',
    default: '—',
    description: '오버레이 Spin에 전달할 설명 텍스트',
  },
  {
    name: 'aria-label',
    type: 'string',
    default: '로딩 중',
    description: '오버레이 Spin에 전달할 접근성 라벨',
  },
];

export const spinSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const spinSlots = [
  { name: 'default', description: 'tip 외 추가 콘텐츠 (선택)' },
];

export const spinWrapSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const spinWrapSlots = [
  { name: 'default', description: '오버레이 아래 실제 콘텐츠 (spin_wrap-body)' },
];

export const spinClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const spinClasses = [
  { name: 'spin', description: '루트 래퍼 (인라인 flex)' },
  { name: 'spin_indicator', description: '회전하는 원형 스피너' },
  { name: 'spin_tip', description: '스피너 아래 설명 텍스트 (선택)' },
  { name: 'spin_sm · spin_lg', description: '크기 변형' },
  { name: 'spin_inline', description: '스피너·텍스트 가로 배치' },
  { name: 'spin_block', description: '부모 너비 안 가운데 정렬' },
  { name: 'spin_wrap', description: '오버레이용 상대 위치 컨테이너' },
  { name: 'spin_wrap-body', description: '오버레이 아래 실제 콘텐츠' },
  { name: 'spin_overlay', description: '컨테이너 전체를 덮는 스피너 레이어' },
  { name: 'spin_wrap-block', description: '데모·빈 상태용 최소 높이' },
  { name: 'spin_wrap-blur', description: '로딩 시 콘텐츠 블러' },
  { name: 'is-loading', description: 'spin_wrap에 지정 — 오버레이 표시' },
  { name: 'color_primary · color_success · color_warning · color_danger', description: '공통 색상 변형' },
  { name: 'role="status"', description: '로딩 상태 시맨틱 (권장)' },
  { name: 'aria-busy="true"', description: '처리 중 표시' },
  { name: 'aria-live="polite"', description: '스크린 리더에 상태 변경 알림' },
  { name: 'aria-label', description: '접근 가능한 로딩 설명' },
];

export const spinTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const spinTokens = [
  { name: '--spin-size', default: '2rem', description: '스피너 지름' },
  { name: '--spin-size-sm · --spin-size-lg', default: '1.25rem · 3rem', description: '크기 변형별 지름' },
  { name: '--spin-border', default: '3px', description: '스피너 테두리 두께' },
  { name: '--spin-border-sm · --spin-border-lg', default: '2px · 4px', description: '크기 변형별 테두리' },
  { name: '--spin-duration', default: '0.8s', description: '회전 애니메이션 주기' },
  { name: '--spin-gap', default: 'var(--space-sm)', description: '스피너·텍스트 간격' },
  { name: '--spin-tip-size', default: 'var(--text-size-sm)', description: '설명 텍스트 크기' },
  { name: '--spin-overlay-bg', default: 'var(--color-overlay)', description: '오버레이 배경' },
  { name: '--spin-wrap-min-height', default: '8rem', description: 'spin_wrap-block 최소 높이' },
  { name: '--spin-wrap-content-opacity', default: '0.45', description: '로딩 시 콘텐츠 불투명도' },
];

export const markupCode = `<!-- 인라인 스피너 -->
<div class="spin color_primary" role="status"
  aria-live="polite" aria-busy="true" aria-label="로딩 중">
  <span class="spin_indicator" aria-hidden="true"></span>
  <span class="spin_tip">로딩 중…</span>
</div>

<!-- 컨테이너 오버레이 -->
<div class="spin_wrap is-loading">
  <div class="spin_wrap-body">
    <!-- 콘텐츠 -->
  </div>
  <div class="spin spin_overlay color_primary" role="status"
    aria-live="polite" aria-busy="true" aria-label="로딩 중">
    <span class="spin_indicator" aria-hidden="true"></span>
  </div>
</div>`;
