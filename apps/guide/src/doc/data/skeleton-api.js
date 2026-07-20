export const skeletonPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const skeletonProps = [
  { name: 'active', type: 'boolean', default: 'true', description: '쉬머 애니메이션. false면 skeleton_static' },
  { name: 'avatar', type: 'boolean', default: 'false', description: '아바타 + 본문 행 레이아웃' },
  { name: 'paragraph', type: 'boolean | number', default: 'false', description: '본문 줄 수. true면 3줄' },
  { name: 'round', type: 'boolean', default: 'false', description: '원형만 표시' },
  { name: 'aria-label', type: 'string', default: '콘텐츠 로딩 중', description: 'role=status 라벨' },
];

export const skeletonSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const skeletonSlots = [
  { name: 'default', description: '커스텀 skeleton 막대 추가' },
];

export const skeletonClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const skeletonClasses = [
  { name: 'skeleton · skeleton_text · skeleton_title · skeleton_circle', description: '막대·제목·원형' },
  { name: 'skeleton_button · skeleton_image · skeleton_block', description: '버튼·이미지·블록 형태' },
  { name: 'skeleton_w-sm · skeleton_w-md · skeleton_w-lg', description: '줄 너비' },
  { name: 'skeleton_group · skeleton_row · skeleton_row-body', description: '레이아웃' },
  { name: 'skeleton_static · skeleton_sm · skeleton_lg', description: '애니메이션·크기' },
];

export const skeletonTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const skeletonTokens = [
  { name: '--skeleton-bg · --skeleton-shine', default: '—', description: '배경·쉬머' },
  { name: '--skeleton-text-height · --skeleton-title-height', default: '0.875rem · 1.125rem', description: '줄 높이' },
  { name: '--skeleton-avatar-size · --skeleton-gap · --skeleton-duration', default: '—', description: '아바타·간격·주기' },
];

export const markupCode = `<!-- 문단 -->
<div class="skeleton_group" role="status"
  aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중">
  <span class="skeleton skeleton_title" aria-hidden="true"></span>
  <span class="skeleton skeleton_text" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-md" aria-hidden="true"></span>
</div>

<!-- 아바타 + 텍스트 행 -->
<div class="skeleton_row">
  <span class="skeleton skeleton_circle" aria-hidden="true"></span>
  <div class="skeleton_row-body">
    <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true"></span>
    <span class="skeleton skeleton_text skeleton_w-sm" aria-hidden="true"></span>
  </div>
</div>`;
