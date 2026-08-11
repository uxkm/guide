import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [
  { key: 'name', label: '이름' }, { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }
];

const titleProps: ApiRow[] = [
  { name: 'level', type: '1 | 2 | 3 | 4 | 5', default: '1', description: '제목 레벨. h1~h5 태그와 typo_title-* 클래스를 함께 결정합니다.' },
  { name: 'color', type: 'string', default: '—', description: '공통 color_* 색상 클래스입니다.' },
  { name: 'label', type: 'string', default: '—', description: '제목 텍스트. children 또는 기본 슬롯으로 대체할 수 있습니다.' },
  { name: 'className', type: 'string', default: "''", description: 'React 제목 루트에 추가할 클래스입니다.' }
];

const textProps: ApiRow[] = [
  { name: 'variant', type: "'text' | 'paragraph' | 'lead' | 'caption' | 'label' | 'overline' | 'code' | 'kbd' | 'pre' | 'strong' | 'italic' | 'underline' | 'delete' | 'mark' | 'sub' | 'sup' | 'small' | 'link' | 'blockquote'", default: 'text', description: '텍스트 스타일과 기본 시맨틱 태그를 결정합니다.' },
  { name: 'tag', type: 'string', default: '—', description: 'variant의 기본 루트 HTML 태그를 대체합니다.' },
  { name: 'color', type: 'string', default: '—', description: '공통 color_* 색상 클래스입니다.' },
  { name: 'size', type: "'xs' | 'sm' | 'lg' | 'xl'", default: '—', description: '공통 size_* 크기 클래스입니다.' },
  { name: 'ellipsis', type: '1 | 2 | 3', default: '—', description: '말줄임 줄 수. text_ellipsis 계열 클래스를 적용합니다.' },
  { name: 'href', type: 'string', default: '—', description: 'link variant의 이동 경로입니다.' },
  { name: 'htmlFor', type: 'string', default: '—', description: 'label variant의 for 속성입니다.' },
  { name: 'cite', type: 'string', default: '—', description: 'blockquote variant의 출처 URL입니다.' },
  { name: 'label', type: 'string', default: '—', description: '텍스트 내용. children 또는 기본 슬롯으로 대체할 수 있습니다.' },
  { name: 'className', type: 'string', default: "''", description: 'React 텍스트 루트에 추가할 클래스입니다.' }
];

const vueTitleProps = titleProps.map((row) => row.name === 'className' ? { ...row, name: 'class', description: 'Vue 제목 루트에 추가할 클래스입니다.' } : row);
const vueTextProps = textProps.map((row) => row.name === 'htmlFor' ? { ...row, name: 'html-for' } : row.name === 'className' ? { ...row, name: 'class', description: 'Vue 텍스트 루트에 추가할 클래스입니다.' } : row);

const titleContent: ApiRow[] = [
  { name: 'children / default', type: 'ReactNode / slot', default: 'label', description: '제목 콘텐츠이며 label prop보다 우선합니다.' }
];
const textContent: ApiRow[] = [
  { name: 'children / default', type: 'ReactNode / slot', default: 'label', description: '텍스트 콘텐츠이며 중첩 TypoText 등 복합 인라인 마크업에 사용할 수 있습니다.' }
];

const htmlRows: ApiRow[] = [
  { name: 'h1~h5', type: 'element', default: '—', description: '문서 구조에 맞는 시맨틱 제목 태그에 동일 레벨 typo_title-*를 적용합니다.' },
  { name: 'p · strong · em · del · mark · sub · sup · small', type: 'element', default: '—', description: '표현 의도와 맞는 네이티브 태그를 사용합니다.' },
  { name: 'href · for · cite', type: 'attribute', default: '—', description: '링크·레이블·인용문에 대응하는 네이티브 속성입니다.' }
];

const classes: ApiRow[] = [
  { name: 'typo_title-1 ~ typo_title-5', type: 'class', default: '—', description: '제목 스케일' },
  { name: 'typo_paragraph · typo_lead · typo_caption · typo_label · typo_overline', type: 'class', default: '—', description: '본문·보조 텍스트' },
  { name: 'typo_strong · typo_italic · typo_underline · typo_delete · typo_mark', type: 'class', default: '—', description: '인라인 강조' },
  { name: 'typo_sub · typo_sup · typo_small', type: 'class', default: '—', description: '아래첨자·위첨자·보조 소문자' },
  { name: 'typo_link', type: 'class', default: '—', description: '본문 안 인라인 링크' },
  { name: 'typo_code · typo_kbd · typo_pre', type: 'class', default: '—', description: '인라인 코드·키보드 키·코드 블록' },
  { name: 'typo_blockquote', type: 'class', default: '—', description: '인용 블록' },
  { name: 'typo_list · typo_list-ordered', type: 'class', default: '—', description: '본문 prose 비순서·순서 목록' },
  { name: 'typo_stack · typo_stack-lg', type: 'class', default: '—', description: '제목과 본문의 수직 간격' },
  { name: 'text_ellipsis · text_ellipsis-2 · text_ellipsis-3', type: 'class', default: '—', description: '1~3줄 말줄임' },
  { name: 'size_xs · size_sm · size_lg · size_xl', type: 'class', default: '—', description: '텍스트 크기' },
  { name: 'color_*', type: 'class', default: '—', description: '공통 색상 유틸리티' }
];

const tokens: ApiRow[] = [
  { name: '--typo-title-1-size · … · --typo-title-5-size', type: 'length', default: '2.375rem · 1.875rem · 1.5rem · 1.25rem · 1rem', description: '제목 레벨별 크기' },
  { name: '--typo-title-1-weight · … · --typo-title-5-weight', type: 'font-weight', default: '700 · 700 · 600 · 600 · 600', description: '제목 레벨별 굵기' },
  { name: '--typo-title-1-line-height · … · --typo-title-5-line-height', type: 'number', default: '1.2 · 1.25 · 1.3 · 1.35 · 1.4', description: '제목 레벨별 줄높이' },
  { name: '--typo-text-line-height', type: 'number', default: '1.6', description: '단락·목록·인용문 줄높이' },
  { name: '--typo-paragraph-gap · --typo-list-gap', type: 'length', default: 'var(--space-md) · var(--space-xs)', description: '단락·목록 항목 간격' },
  { name: '--typo-mark-bg', type: 'color', default: 'rgba(250, 219, 20, 0.35)', description: '형광펜 배경' },
  { name: '--typo-sub-sup-size · --typo-sub-offset · --typo-sup-offset', type: 'length', default: '0.75em · -0.25em · -0.5em', description: '아래·위첨자 크기와 오프셋' },
  { name: '--typo-lead-size · --typo-caption-size · --typo-label-size', type: 'length', default: 'var(--text-size-lg) · var(--text-size-xs) · var(--text-size-sm)', description: '리드·캡션·레이블 크기' },
  { name: '--typo-kbd-padding-y · --typo-kbd-padding-x', type: 'length', default: '0.15em · 0.4em', description: '키보드 키 패딩' },
  { name: '--typo-pre-padding · --typo-pre-radius', type: 'length', default: 'var(--space-md) · var(--radius-md)', description: '코드 블록 패딩과 모서리' }
];

export const typographyApiSections: ApiSectionData[] = [
  { title: 'React · Next.js API · TypoTitle Props', description: 'Next.js는 `@uxkm/react/typography`를 재사용합니다.', tables: [{ columns, rows: titleProps }] },
  { title: 'React · Next.js API · TypoText Props', tables: [{ columns, rows: textProps }] },
  { title: 'React · Next.js API · Children', tables: [{ columns, rows: [...titleContent, ...textContent] }] },
  { title: 'Vue · Nuxt API · TypoTitle Props', description: 'Nuxt는 `@uxkm/vue/typography`를 재사용합니다.', tables: [{ columns, rows: vueTitleProps }] },
  { title: 'Vue · Nuxt API · TypoText Props', tables: [{ columns, rows: vueTextProps }] },
  { title: 'Vue · Nuxt API · Slots', tables: [{ columns, rows: [...titleContent, ...textContent] }] },
  { title: 'HTML · Gulp API · Markup', description: 'HTML과 Gulp는 시맨틱 태그에 공통 OOCSS 클래스를 직접 적용합니다.', tables: [{ columns, rows: htmlRows }] },
  { title: '공통 API · 클래스', tables: [{ columns, rows: classes }] },
  { title: '공통 API · 디자인 토큰', tables: [{ columns, rows: tokens }] }
];
