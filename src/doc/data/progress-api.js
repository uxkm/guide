export const progressPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const progressProps = [
  { name: 'percent', type: 'number', default: '0', description: '0–100 범위로 보정되는 진행률 (막대 width)' },
  { name: 'status', type: `'success' | 'exception'`, default: '—', description: '완료·오류 색상' },
  { name: 'color', type: `'primary' | 'success' | 'warning' | 'danger'`, default: 'primary', description: '막대 색상 color_*' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'progress_sm · progress_lg' },
  { name: 'label', type: 'string', default: '—', description: '헤더 라벨' },
  { name: 'showInfo', type: 'boolean', default: 'false', description: '퍼센트 값 표시' },
  { name: 'striped', type: 'boolean', default: 'false', description: '줄무늬 (progress_striped)' },
  { name: 'animated', type: 'boolean', default: 'false', description: '흐르는 애니메이션' },
  { name: 'indeterminate', type: 'boolean', default: 'false', description: '불확정 (is-indeterminate)' },
  { name: 'inside', type: 'boolean', default: 'false', description: '막대 안 퍼센트 텍스트' },
  { name: 'block', type: 'boolean', default: 'false', description: '전체 너비 (progress_block)' },
  { name: 'ariaLabel', type: 'string', default: '진행률', description: 'progressbar 라벨' },
  { name: 'className', type: 'string', default: '—', description: 'progress 루트에 추가 클래스' },
];

export const progressCirclePropColumns = progressPropColumns;
export const progressCircleProps = [
  { name: 'percent', type: 'number', default: '0', description: '0–100 범위로 보정되는 진행률 (--progress-percent)' },
  { name: 'color', type: `'primary' | 'success' | 'warning' | 'danger'`, default: 'primary', description: 'color_*' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'progress_sm · progress_lg' },
  { name: 'ariaLabel', type: 'string', default: '진행률', description: 'progressbar 라벨' },
  { name: 'className', type: 'string', default: '—', description: 'progress_circle 루트에 추가 클래스' },
];

export const progressChildColumns = [
  { key: 'name', label: 'Children' },
  { key: 'description', label: '설명' },
];

export const progressChildren = [
  { name: 'children', description: '지원하지 않음. label과 showInfo로 표시 콘텐츠를 구성' },
];

/** @deprecated 가이드·Storybook은 progressChildColumns · progressChildren 사용 */
export const progressSlotColumns = progressChildColumns;

/** @deprecated */
export const progressSlots = progressChildren;

export const progressClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const progressClasses = [
  { name: 'progress · progress_track · progress_bar', description: '선형 진행률' },
  { name: 'progress_circle · progress_circle-svg · progress_circle-value', description: '원형 진행률' },
  { name: 'progress_header · progress_label · progress_value', description: '헤더' },
  { name: 'progress_sm · progress_lg · progress_fit · progress_block', description: '크기·너비' },
  { name: 'progress_striped · progress_animated · progress_inside', description: '스타일' },
  { name: 'is-indeterminate', description: '불확정 상태' },
  { name: 'color_primary · color_success · color_warning · color_danger', description: '색상' },
];

export const progressTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const progressTokens = [
  { name: '--progress-height · --progress-height-sm · --progress-height-lg', default: '8px · 4px · 12px', description: '선형 트랙 높이' },
  { name: '--progress-max-width', default: 'var(--input-max-width)', description: 'progress_fit 최대 너비' },
  { name: '--progress-circle-size · --progress-circle-stroke', default: '7.5rem · 6', description: '원형 크기·stroke' },
];

export const markupCode = `<!-- 선형 기본 -->
<div class="progress progress_fit color_primary">
  <div class="progress_header">
    <span class="progress_label">업로드 중</span>
    <span class="progress_value">60%</span>
  </div>
  <div class="progress_track" role="progressbar"
    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
    aria-label="업로드 진행률">
    <span class="progress_bar" style="width: 60%"></span>
  </div>
</div>

<!-- 불확정 -->
<div class="progress progress_fit is-indeterminate color_primary">
  <div class="progress_track" role="progressbar"
    aria-valuemin="0" aria-valuemax="100" aria-label="처리 중" aria-busy="true">
    <span class="progress_bar"></span>
  </div>
</div>

<!-- 원형 -->
<div class="progress progress_circle color_primary" role="progressbar"
  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
  aria-label="진행률" style="--progress-percent: 75">
  <svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true">
    <circle class="progress_circle-track" cx="50" cy="50" r="45" />
    <circle class="progress_circle-bar" cx="50" cy="50" r="45" />
  </svg>
  <span class="progress_circle-value">75%</span>
</div>`;
