import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [
  { key: 'name', label: '이름' },
  { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' },
  { key: 'type', label: '타입' }
];

const sharedProps: ApiRow[] = [
  { name: 'name', type: 'string', default: 'plus', description: '제공 아이콘 이름. 커스텀 SVG 자식이 있으면 자식이 우선합니다.' },
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: 'md', description: '아이콘 크기입니다.' },
  { name: 'color', type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'muted'", default: '—', description: 'currentColor에 적용할 공통 색상입니다.' },
  { name: 'inline', type: 'boolean', default: 'false', description: '텍스트 기준선에 맞춰 수직 정렬합니다.' },
  { name: 'spin', type: 'boolean', default: 'false', description: '회전 애니메이션을 적용합니다.' },
  { name: 'button', type: 'boolean', default: 'false', description: 'button 루트의 클릭 가능한 아이콘으로 렌더합니다.' },
  { name: 'circle', type: 'boolean', default: 'false', description: '원형 배경 래퍼를 적용합니다.' },
  { name: 'square', type: 'boolean', default: 'false', description: '사각 배경 래퍼를 적용합니다.' },
  { name: 'pulse', type: 'boolean', default: 'false', description: 'circle과 함께 펄스 강조 애니메이션을 적용합니다.' },
  { name: 'ripple', type: 'boolean', default: 'true', description: 'button 유형의 클릭 파장 효과를 설정합니다.' },
  { name: 'ariaLabel', type: 'string', default: '—', description: 'React 접근성 이름. 의미 있는 아이콘과 아이콘 버튼에 지정합니다.' },
  { name: 'title', type: 'string', default: '—', description: 'React SVG title과 접근성 이름을 함께 제공합니다.' },
  { name: 'className', type: 'string', default: "''", description: 'React 루트에 추가할 클래스입니다.' }
];

const vueProps = sharedProps.map((row) => {
  if (row.name === 'ariaLabel') return { ...row, name: 'aria-label', description: 'Vue 접근성 이름. 의미 있는 아이콘과 아이콘 버튼에 지정합니다.' };
  if (row.name === 'className') return { ...row, name: 'class', description: 'Vue 루트에 추가할 클래스입니다.' };
  return row;
});

const vueSlots: ApiRow[] = [
  { name: 'default', type: 'SVGElement', default: '—', description: 'path, circle 등 커스텀 SVG 도형입니다. name보다 우선합니다.' }
];

const htmlAttributes: ApiRow[] = [
  { name: 'aria-hidden', type: "'true'", default: '—', description: '장식용 SVG를 접근성 트리에서 숨깁니다.' },
  { name: 'aria-label', type: 'string', default: '—', description: '의미 있는 SVG 또는 아이콘 버튼의 접근성 이름입니다.' },
  { name: 'viewBox', type: 'string', default: '0 0 24 24', description: '공통 아이콘 좌표계입니다.' },
  { name: 'stroke', type: 'string', default: 'currentColor', description: '부모의 텍스트 색상을 상속합니다.' },
  { name: 'data-ripple', type: "'true' | 'false'", default: 'true', description: 'icon_button 클릭 파장 효과입니다.' }
];

const classes: ApiRow[] = [
  { name: 'icon', type: 'class', default: '—', description: 'SVG 루트 기본 구조와 중간 크기' },
  { name: 'icon_sm · icon_lg · icon_xl', type: 'class', default: '—', description: '크기 변형' },
  { name: 'icon_inline', type: 'class', default: '—', description: '텍스트 인라인 정렬' },
  { name: 'icon_spin', type: 'class', default: '—', description: '회전 애니메이션' },
  { name: 'icon_button', type: 'class', default: '—', description: '아이콘 버튼 래퍼' },
  { name: 'icon_circle · icon_square', type: 'class', default: '—', description: '원형·사각형 배경 래퍼' },
  { name: 'icon_circle-sm · icon_circle-lg', type: 'class', default: '—', description: '원형 배경 크기' },
  { name: 'icon_pulse', type: 'class', default: '—', description: '펄스 강조 애니메이션' },
  { name: 'icon_group', type: 'class', default: '—', description: '여러 아이콘을 가로로 배치하는 컨테이너' },
  { name: 'icon_grid · icon_grid-item', type: 'class', default: '—', description: '아이콘 갤러리 그리드와 항목' },
  { name: 'color_*', type: 'class', default: '—', description: '공통 색상 유틸리티' }
];

const tokens: ApiRow[] = [
  { name: '--icon-size-sm · --icon-size · --icon-size-lg · --icon-size-xl', type: 'length', default: '1rem · 1.25rem · 1.5rem · 2rem', description: '아이콘 크기' },
  { name: '--icon-circle-size-sm · --icon-circle-size · --icon-circle-size-lg', type: 'length', default: '1.75rem · 2.25rem · 2.75rem', description: '배경형 아이콘 크기' },
  { name: '--icon-spin-duration', type: 'time', default: '0.8s', description: '회전 주기' },
  { name: '--icon-pulse-duration', type: 'time', default: '1.5s', description: '펄스 주기' }
];

export const iconApiSections: ApiSectionData[] = [
  { title: 'React · Next.js API · Props', description: 'Next.js는 `@uxkm/react/icon`을 재사용합니다.', tables: [{ columns, rows: sharedProps }] },
  { title: 'React · Next.js API · Children', tables: [{ columns, rows: [{ name: 'children', type: 'ReactNode', default: '—', description: 'path, circle 등 커스텀 SVG 도형입니다. name보다 우선합니다.' }] }] },
  { title: 'Vue · Nuxt API · Props', description: 'Nuxt는 `@uxkm/vue/icon`을 재사용합니다.', tables: [{ columns, rows: vueProps }] },
  { title: 'Vue · Nuxt API · Slots', tables: [{ columns, rows: vueSlots }] },
  { title: 'HTML · Gulp API · Markup', description: 'HTML과 Gulp는 SVG와 래퍼에 네이티브 속성과 공통 클래스를 직접 적용합니다.', tables: [{ columns, rows: htmlAttributes }] },
  { title: '공통 API · 클래스', tables: [{ columns, rows: classes }] },
  { title: '공통 API · 디자인 토큰', tables: [{ columns, rows: tokens }] }
];
