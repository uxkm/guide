export const typoTitlePropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const typoTitleProps = [
  {
    name: 'level',
    type: '1 | 2 | 3 | 4 | 5',
    default: '1',
    description: '제목 레벨. h1~h5 태그와 typo_title-* 클래스',
  },
  {
    name: 'color',
    type: 'string',
    default: '—',
    description: '공통 color_* 클래스',
  },
  {
    name: 'label',
    type: 'string',
    default: '—',
    description: '제목 텍스트. default 슬롯으로 대체 가능',
  },
];

export const typoTextPropColumns = [
  { key: 'name', label: 'Prop' },
  { key: 'type', label: '타입' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const typoTextProps = [
  {
    name: 'variant',
    type: `'text' | 'paragraph' | 'lead' | 'caption' | 'label' | 'overline' | 'code' | 'kbd' | 'pre' | 'strong' | 'italic' | 'underline' | 'delete' | 'mark' | 'sub' | 'sup' | 'small' | 'link' | 'blockquote'`,
    default: 'text',
    description: '텍스트 스타일·시맨틱 태그 매핑',
  },
  {
    name: 'tag',
    type: 'string',
    default: '—',
    description: '루트 HTML 태그 수동 지정 (variant 기본 태그 대체)',
  },
  {
    name: 'color',
    type: 'string',
    default: '—',
    description: '공통 color_* 클래스',
  },
  {
    name: 'size',
    type: `'xs' | 'sm' | 'lg' | 'xl'`,
    default: '—',
    description: '공통 size_* 클래스',
  },
  {
    name: 'ellipsis',
    type: '1 | 2 | 3',
    default: '—',
    description: '말줄임 줄 수. 미지정 시 말줄임 없음. 1~3은 text_ellipsis · text_ellipsis-2 · text_ellipsis-3',
  },
  {
    name: 'href',
    type: 'string',
    default: '—',
    description: 'variant="link"일 때 href',
  },
  {
    name: 'html-for',
    type: 'string',
    default: '—',
    description: 'variant="label"일 때 for 속성',
  },
  {
    name: 'cite',
    type: 'string',
    default: '—',
    description: 'variant="blockquote"일 때 cite 속성',
  },
  {
    name: 'label',
    type: 'string',
    default: '—',
    description: '텍스트 내용. default 슬롯으로 대체 가능',
  },
];

export const typoTitleSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const typoTitleSlots = [
  { name: 'default', description: '제목 텍스트 (label prop 대체)' },
];

export const typoTextSlotColumns = [
  { key: 'name', label: '슬롯' },
  { key: 'description', label: '설명' },
];

export const typoTextSlots = [
  { name: 'default', description: '텍스트 내용 (label prop 대체)' },
];

export const typographyClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const typographyClasses = [
  { name: 'typo_title-1 ~ typo_title-5', description: '제목 스케일' },
  { name: 'typo_paragraph · typo_lead · typo_caption · typo_label · typo_overline', description: '본문·보조 텍스트' },
  { name: 'typo_strong · typo_italic · typo_underline · typo_delete · typo_mark', description: '인라인 강조' },
  { name: 'typo_sub · typo_sup · typo_small', description: '아래첨자 · 위첨자 · 보조 소문자 (sub · sup · small 태그)' },
  { name: 'typo_link', description: '본문 안 인라인 링크' },
  { name: 'typo_code · typo_kbd · typo_pre', description: '코드·키보드·코드 블록' },
  { name: 'typo_blockquote', description: '인용 블록' },
  { name: 'typo_list · typo_list-ordered', description: '본문 prose 목록 (ul · ol + li). UI 목록은 List 컴포넌트' },
  { name: 'typo_stack · typo_stack-lg', description: '제목+본문 수직 간격' },
  { name: 'text_ellipsis · text_ellipsis-2 · text_ellipsis-3', description: '말줄임' },
  { name: 'size_xs · size_sm · size_lg · size_xl', description: '텍스트 크기' },
  { name: 'color_*', description: '공통 색상 유틸' },
];

export const typographyTokenColumns = [
  { key: 'name', label: '토큰' },
  { key: 'default', label: '기본값' },
  { key: 'description', label: '설명' },
];

export const typographyTokens = [
  { name: '--typo-title-*-size · weight · line-height', default: '—', description: '제목 레벨별 타이포' },
  { name: '--typo-text-size · --typo-text-line-height', default: 'var(--text-size-base) · 1.6', description: '기본 본문' },
  { name: '--typo-paragraph-gap', default: 'var(--space-md)', description: '단락 간격' },
  { name: '--typo-list-gap', default: 'var(--space-xs)', description: '목록 항목 간격' },
  { name: '--typo-lead-size · --typo-caption-size · --typo-label-size', default: '—', description: '리드·캡션·라벨 크기' },
  { name: '--typo-mark-bg', default: 'rgba(250, 219, 20, 0.35)', description: '형광펜 배경' },
  { name: '--typo-sub-sup-size · --typo-sub-offset · --typo-sup-offset', default: '0.75em · -0.25em · -0.5em', description: '아래·위첨자 크기·오프셋' },
  { name: '--typo-small-size', default: 'var(--text-size-sm)', description: 'small 태그 보조 텍스트 크기' },
  { name: '--typo-pre-padding · --typo-pre-radius', default: 'var(--space-md) · var(--radius-md)', description: '코드 블록' },
];

export const buttonMarkupExample = `<button class="btn btn_filled color_primary">
  <span class="btn_label">저장</span>
</button>`;
