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
    type: `'default' | 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'error'`,
    default: '—',
    description: '공통 color_* 클래스',
  },
  {
    name: 'label',
    type: 'ReactNode',
    default: '—',
    description: '제목 텍스트. children으로 대체 가능',
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
    type: `'p' | 'span' | 'div' | 'label' | 'code' | 'kbd' | 'pre' | 'strong' | 'em' | 'del' | 'mark' | 'sub' | 'sup' | 'small' | 'a' | 'blockquote' | …`,
    default: '—',
    description: '루트 HTML 태그 수동 지정 (variant 기본 태그 대체)',
  },
  {
    name: 'color',
    type: `'default' | 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'error'`,
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
    description: 'a 태그로 렌더링될 때 링크 목적지',
  },
  {
    name: 'htmlFor',
    type: 'string',
    default: '—',
    description: 'label 태그로 렌더링될 때 연결할 폼 컨트롤 id',
  },
  {
    name: 'cite',
    type: 'string',
    default: '—',
    description: 'blockquote 태그로 렌더링될 때 인용 출처 URL',
  },
  {
    name: 'label',
    type: 'ReactNode',
    default: '—',
    description: '텍스트 내용. children으로 대체 가능',
  },
];

export const typoTitleSlotColumns = [
  { key: 'name', label: 'Children / Prop' },
  { key: 'description', label: '설명' },
];

export const typoTitleSlots = [
  { name: 'label', description: '제목 ReactNode. children으로 대체 가능' },
  { name: 'children', description: '제목 콘텐츠. label prop보다 우선' },
];

export const typoTextSlotColumns = [
  { key: 'name', label: 'Children / Prop' },
  { key: 'description', label: '설명' },
];

export const typoTextSlots = [
  { name: 'label', description: '텍스트 ReactNode. children으로 대체 가능' },
  {
    name: 'children',
    description:
      '텍스트 콘텐츠. label prop보다 우선하며 중첩 TypoText 등 복합 마크업에 사용',
  },
];

export const typographyClassColumns = [
  { key: 'name', label: '클래스' },
  { key: 'description', label: '설명' },
];

export const typographyClasses = [
  { name: 'typo_title-1 ~ typo_title-5', description: '제목 스케일' },
  { name: 'typo_paragraph · typo_lead · typo_caption · typo_label · typo_overline', description: '본문·보조 텍스트' },
  { name: 'typo_strong · typo_italic · typo_underline · typo_delete · typo_mark', description: 'strong · em · span · del · mark 기반 인라인 강조' },
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
  { name: '--typo-title-1-size · … · --typo-title-5-size', default: '2.375rem · 1.875rem · 1.5rem · 1.25rem · 1rem', description: '제목 레벨별 크기' },
  { name: '--typo-title-1-weight · … · --typo-title-5-weight', default: '700 · 700 · 600 · 600 · 600', description: '제목 레벨별 굵기' },
  { name: '--typo-title-1-line-height · … · --typo-title-5-line-height', default: '1.2 · 1.25 · 1.3 · 1.35 · 1.4', description: '제목 레벨별 줄높이' },
  { name: '--typo-title-1-letter-spacing · --typo-title-2-letter-spacing · --typo-title-3-letter-spacing', default: '-0.02em · -0.015em · -0.01em', description: 'h1~h3 자간' },
  { name: '--typo-text-line-height', default: '1.6', description: '단락·목록·인용문 줄높이' },
  { name: '--typo-paragraph-gap · --typo-list-gap', default: 'var(--space-md) · var(--space-xs)', description: '단락·목록 항목 간격' },
  { name: '--typo-mark-bg', default: 'rgba(250, 219, 20, 0.35)', description: '형광펜 배경' },
  { name: '--typo-code-padding-y · --typo-code-padding-x · --typo-code-radius', default: '0.1em · 0.35em · 4px', description: '인라인 코드·mark 패딩과 모서리' },
  { name: '--typo-blockquote-border-width', default: '3px', description: '인용문 왼쪽 테두리' },
  { name: '--typo-sub-sup-size · --typo-sub-offset · --typo-sup-offset', default: '0.75em · -0.25em · -0.5em', description: '아래·위첨자 크기·오프셋' },
  { name: '--typo-small-size', default: 'var(--text-size-sm)', description: 'small 태그 보조 텍스트 크기' },
  { name: '--typo-lead-size · --typo-lead-line-height', default: 'var(--text-size-lg) · 1.6', description: '리드 텍스트' },
  { name: '--typo-caption-size · --typo-label-size · --typo-label-weight', default: 'var(--text-size-xs) · var(--text-size-sm) · 600', description: '캡션·레이블' },
  { name: '--typo-overline-size · --typo-overline-weight · --typo-overline-spacing', default: 'var(--text-size-xs) · 600 · 0.06em', description: '오버라인 텍스트' },
  { name: '--typo-kbd-padding-y · --typo-kbd-padding-x', default: '0.15em · 0.4em', description: '키보드 키 패딩' },
  { name: '--typo-pre-padding · --typo-pre-radius', default: 'var(--space-md) · var(--radius-md)', description: '코드 블록' },
];

export const buttonMarkupExample = `<button class="btn btn_filled color_primary">
  <span class="btn_label">저장</span>
</button>`;
