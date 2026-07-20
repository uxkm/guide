export const statPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const statProps = [
  { name: 'title', type: 'string', default: '—', description: '지표 라벨 (stat_label)' },
  { name: 'value', type: 'string', default: '—', description: '주요 수치 (stat_value)' },
  { name: 'prefix', type: 'string', default: '—', description: '값 앞 접두 (stat_prefix)' },
  { name: 'suffix', type: 'string', default: '—', description: '값 뒤 접미 (stat_suffix)' },
  { name: 'description', type: 'string', default: '—', description: '보조 설명 (stat_desc)' },
  { name: 'trend', type: 'string', default: '—', description: '증감 텍스트 (stat_trend)' },
  { name: 'trend-color', type: 'string', default: '—', description: 'trend·description 색상 color_*' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'stat_sm · stat_lg' },
  { name: 'card', type: 'boolean', default: 'false', description: '카드형 배경 (stat_card)' },
  { name: 'shadow', type: 'boolean', default: 'false', description: '그림자 (stat_shadow)' },
];

export const statSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const statSlots = [
  { name: 'value', description: '수치 커스텀 (value prop 대체)' },
  { name: 'trend-icon', description: '증감 아이콘' },
  { name: 'default', description: '추가 콘텐츠' },
];

export const statClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const statClasses = [
  { name: 'stat', description: '지표 루트' },
  { name: 'stat_sm · stat_lg', description: '크기 변형' },
  { name: 'stat_card · stat_shadow', description: '카드·그림자' },
  { name: 'stat_header · stat_label · stat_value-row', description: '레이아웃 파트' },
  { name: 'stat_value · stat_prefix · stat_suffix · stat_desc · stat_trend', description: '값·설명 파트' },
  { name: 'stat_group · stat_group-2 · stat_group-3 · stat_group-4', description: '지표 그리드' },
  { name: 'stat_horizontal', description: '아이콘+값 가로 배치' },
];

export const statTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const statTokens = [
  { name: '--stat-value-size · --stat-value-size-sm · --stat-value-size-lg', default: '1.75rem · 1.25rem · 2.25rem', description: '수치 크기' },
  { name: '--stat-label-size · --stat-desc-size', default: 'var(--text-size-sm)', description: '라벨·설명 크기' },
  { name: '--stat-group-gap · --stat-card-padding', default: 'var(--space-lg) · var(--space-lg)', description: '그룹 간격·카드 패딩' },
];
