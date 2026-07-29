import { ripplePropSurface, rippleClassRows } from '@/doc/data/ripple-api';
export const collapsePropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const collapseProps = [
  {
    name: 'variant',
    type: `'bordered' | 'ghost' | 'card'`,
    default: 'bordered',
    description: '패널 그룹 스킨',
  },
  {
    name: 'size',
    type: `'sm' | 'md' | 'lg'`,
    default: 'md',
    description: '트리거·본문 패딩 크기',
  },
  {
    name: 'accordion',
    type: 'boolean',
    default: 'false',
    description: '한 번에 하나의 패널만 열기 (아코디언 모드)',
  },
  {
    name: 'effect',
    type: `'slide'`,
    default: '—',
    description: '펼침·접힘 높이 슬라이드 애니메이션 (data-effect="slide")',
  },
  {
    name: 'narrow',
    type: 'boolean',
    default: 'false',
    description: '데모용 최대 너비 제한 (collapse_demo-narrow)',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '—',
    description: 'CollapsePanel 나열',
  },
  {
    name: 'className',
    type: 'string',
    default: '—',
    description: '루트 요소 추가 클래스',
  },
];

export const collapsePanelPropColumns = collapsePropColumns;

export const collapsePanelProps = [
  {
    name: 'label',
    type: 'string',
    default: '—',
    description: '트리거에 표시할 제목',
  },
  {
    name: 'content',
    type: 'string',
    default: '—',
    description: '패널 본문 (p 태그로 렌더). children으로 대체 가능',
  },
  {
    name: 'open',
    type: 'boolean',
    default: 'false',
    description: '초기 열림 상태',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '비활성 패널 (is-disabled + trigger disabled)',
  },
  {
    name: 'extra',
    type: 'ReactNode',
    default: '—',
    description: '트리거 오른쪽 보조 정보',
  },
  {
    name: 'extraCode',
    type: 'string',
    default: '—',
    description: '코드 예시용 extra 슬롯 마크업 (데모 코드 생성)',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '—',
    description: '패널 본문 (content prop 대체)',
  },
  {
    name: 'className',
    type: 'string',
    default: '—',
    description: '루트 요소 추가 클래스',
  },
  ripplePropSurface,
];

export const collapseExternalPropColumns = collapsePropColumns;

export const collapseExternalProps = [
  {
    name: 'triggerLabel',
    type: 'string',
    default: '—',
    description: '외부 트리거 버튼 텍스트',
  },
  {
    name: 'narrow',
    type: 'boolean',
    default: 'false',
    description: '데모용 최대 너비 제한',
  },
  {
    name: 'boxed',
    type: 'boolean',
    default: 'true',
    description: '접힘 영역에 테두리·배경 스타일 적용',
  },
  {
    name: 'effect',
    type: `'slide'`,
    default: '—',
    description: '펼침·접힘 높이 슬라이드 애니메이션 (data-effect="slide")',
  },
  {
    name: 'open',
    type: 'boolean',
    default: 'false',
    description: '초기 열림 상태',
  },
  {
    name: 'lead',
    type: 'ReactNode',
    default: '—',
    description: '트리거 위 안내 텍스트',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '—',
    description: '접히는 본문 영역',
  },
  {
    name: 'className',
    type: 'string',
    default: '—',
    description: '루트 요소 추가 클래스',
  },
  ripplePropSurface,
];

export const collapseChildColumns = [
  { key: 'name', label: 'Prop / Children' },
  { key: 'description', label: '설명' },
];

export const collapseChildren = [
  { name: 'children', description: 'CollapsePanel 나열' },
];

export const collapsePanelChildColumns = collapseChildColumns;
export const collapsePanelChildren = [
  { name: 'children', description: '패널 본문 (content prop 대체)' },
  { name: 'extra', description: '트리거 오른쪽 보조 정보' },
];

export const collapseExternalChildColumns = collapseChildColumns;
export const collapseExternalChildren = [
  { name: 'lead', description: '트리거 위 안내 텍스트' },
  { name: 'children', description: '접히는 본문 영역' },
];

export const collapseClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const collapseClasses = [
  { name: 'collapse', description: '독립 접힘 영역 (외부 트리거 대상)' },
  { name: 'collapse_group', description: '패널 그룹 컨테이너' },
  { name: 'collapse_panel · collapse_trigger · collapse_body', description: '패널 그룹 내부 파트' },
  { name: 'collapse_label · collapse_extra · collapse_icon', description: '트리거 파트' },
  { name: 'collapse_content', description: '패널 본문 래퍼' },
  { name: 'collapse_bordered', description: '외곽 테두리 스킨 (기본)' },
  { name: 'collapse_ghost', description: '배경 강조 고스트 스킨' },
  { name: 'collapse_card', description: '패널별 카드 분리 스킨' },
  { name: 'collapse_sm · collapse_lg', description: '크기 변형' },
  { name: 'data-collapse', description: 'HTML 패널 그룹 JS 초기화' },
  { name: 'data-collapse-trigger', description: 'HTML 외부 트리거 JS 초기화' },
  { name: 'data-collapse-accordion', description: 'HTML 단일 패널만 열기' },
  { name: 'data-effect="slide"', description: '펼침·접힘 높이 슬라이드 애니메이션' },
  { name: 'is-open · is-disabled', description: '상태 클래스' },
  ...rippleClassRows,
];

export const collapseGroupPropColumns = collapsePropColumns;
export const collapseGroupProps = collapseProps;
