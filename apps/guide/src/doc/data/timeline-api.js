export const timelinePropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const timelineProps = [
  { name: 'card', type: 'boolean', default: 'false', description: '카드형 콘텐츠 (timeline_card)' },
  { name: 'alternate', type: 'boolean', default: 'false', description: '좌우 교차 배치 (timeline_alternate)' },
  { name: 'horizontal', type: 'boolean', default: 'false', description: '가로 타임라인 (timeline_horizontal)' },
  { name: 'labelCol', type: 'boolean', default: 'false', description: '좌측 라벨 열 (timeline_label-col)' },
  { name: 'icon', type: 'boolean', default: 'false', description: '아이콘 점 모드 (timeline_icon)' },
  { name: 'iconSize', type: `'sm' | 'md'`, default: 'md', description: 'icon 모드 점 크기 (timeline_icon-sm)' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: 'timeline_sm · timeline_lg' },
  { name: 'tag', type: `'ol' | 'ul'`, default: 'ol', description: '루트 태그' },
  { name: 'className', type: 'string', default: '—', description: 'timeline 루트에 추가 클래스' },
];

export const timelineItemPropColumns = timelinePropColumns;
export const timelineItemProps = [
  { name: 'color', type: 'string', default: 'primary', description: '점 색상 color_*' },
  { name: 'title', type: 'string', default: '—', description: '이벤트 제목 (timeline_title)' },
  { name: 'description', type: 'string', default: '—', description: '설명 (timeline_desc)' },
  { name: 'time', type: 'string', default: '—', description: '시간 텍스트 (timeline_time)' },
  { name: 'datetime', type: 'string', default: '—', description: 'time 요소 datetime 속성' },
  { name: 'label', type: 'string', default: '—', description: '좌측 라벨 (timeline_label)' },
  { name: 'labelDatetime', type: 'string', default: '—', description: '라벨 datetime 속성' },
  { name: 'active', type: 'boolean', default: 'false', description: '진행 중 (is-active)' },
  { name: 'pending', type: 'boolean', default: 'false', description: '대기·미완료 (is-pending)' },
  { name: 'outline', type: 'boolean', default: 'false', description: '테두리 점 (timeline_dot-outline)' },
  { name: 'className', type: 'string', default: '—', description: 'timeline_item에 추가 클래스' },
];

export const timelineSlotColumns = [
  { key: 'name', label: 'Children' },
  { key: 'description', label: '설명' },
];

export const timelineSlots = [
  { name: 'children', description: 'TimelineItem 자식 (Vue default 슬롯 대응)' },
];

export const timelineItemSlotColumns = [
  { key: 'name', label: 'Children / Prop' },
  { key: 'description', label: '설명' },
];

export const timelineItemSlots = [
  { name: 'title', description: '이벤트 제목 (timeline_title)' },
  { name: 'description', description: '설명 (timeline_desc)' },
  { name: 'time', description: '시간 텍스트 (timeline_time)' },
  { name: 'children', description: '콘텐츠 (title·description 대체, Vue default 슬롯 대응)' },
  { name: 'dot', description: '커스텀 점·아이콘 (Vue #dot 슬롯 대응)' },
  { name: 'meta', description: '하단 메타 (Vue #meta 슬롯 대응, timeline_meta)' },
];

export const timelineClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const timelineClasses = [
  { name: 'timeline', description: '타임라인 루트' },
  { name: 'timeline_card · timeline_alternate · timeline_horizontal', description: '레이아웃 변형' },
  { name: 'timeline_label-col · timeline_icon · timeline_icon-sm', description: '라벨 열·아이콘 모드' },
  { name: 'timeline_sm · timeline_lg', description: '크기' },
  { name: 'timeline_item · timeline_dot · timeline_content', description: '항목 구조' },
  { name: 'timeline_label · timeline_time · timeline_title · timeline_desc', description: '텍스트 파트' },
  { name: 'is-active · is-pending', description: '상태' },
];

export const timelineTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const timelineTokens = [
  { name: '--timeline-gap', default: 'var(--space-lg)', description: '항목 간격' },
  { name: '--timeline-dot-size · --timeline-line-width', default: '10px · 2px', description: '점·연결선' },
  { name: '--timeline-label-width', default: '4.5rem', description: '라벨 열 너비' },
  { name: '--timeline-title-size · --timeline-desc-size', default: '—', description: '제목·설명 크기' },
];
