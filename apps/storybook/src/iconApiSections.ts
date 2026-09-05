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

const gulpRows: ApiRow[] = [
  { name: 'icon', type: 'macro', default: '—', description: '`{% from "components/basic/Icon/icon.njk" import icon %}`로 import한 뒤 `{{ icon(...) }}` 또는 `{% call %}`로 인스턴스를 만듭니다.' },
  { name: 'name', type: 'string', default: "'plus'", description: '등록된 아이콘 이름입니다. `{% call %}` 본문이 있으면 커스텀 SVG가 우선합니다.' },
  { name: 'size · color', type: 'string', default: "'md' · ''", description: '크기·색상입니다. md는 크기 클래스를 생략합니다.' },
  { name: 'inline · spin', type: 'boolean', default: 'false', description: '텍스트 인라인 정렬과 회전 애니메이션입니다.' },
  { name: 'button · circle · square · pulse', type: 'boolean', default: 'false', description: '버튼·원형·사각 래퍼와 펄스입니다. pulse는 circle과 함께 씁니다.' },
  { name: 'ripple · ariaLabel · title · className', type: 'mixed', default: 'true · \'\' · \'\' · \'\'', description: '버튼 파장·접근성 이름·SVG title·추가 클래스입니다.' }
];

const webSquareRows: ApiRow[] = [
  { name: 'w2:image', type: 'component', default: '—', description: '프로젝트에 등록한 SVG·PNG 아이콘 파일을 표시합니다.' },
  { name: 'src', type: 'URL', default: '—', description: 'WebSquare 프로젝트의 정적 아이콘 리소스 경로입니다.' },
  { name: 'alt', type: 'string', default: "''", description: '장식용 아이콘은 빈 문자열, 의미 있는 이미지에는 대체 텍스트를 지정합니다.' },
  { name: 'class', type: 'styleclass', default: 'icon', description: '크기·색상·회전·인라인 정렬 클래스를 적용합니다.' },
  { name: 'w2:group', type: 'component', default: '—', description: '원형·사각형 배경과 여러 아이콘 묶음의 래퍼입니다.' },
  { name: 'xf:trigger', type: 'component', default: '—', description: '클릭 가능한 아이콘 버튼에 사용하며 배경 이미지와 ev:onclick을 연결합니다.' },
  { name: 'title · tooltip', type: 'string', default: '—', description: '텍스트가 없는 아이콘 버튼의 기능을 설명합니다.' },
  { name: 'w2:generator', type: 'component', default: '—', description: 'DataList 기반 아이콘 갤러리처럼 동일 구조를 반복할 때 선택적으로 사용합니다.' }
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
  { title: 'HTML API · Markup', description: 'HTML은 SVG와 래퍼에 네이티브 속성과 공통 클래스를 직접 적용합니다.', tables: [{ columns, rows: htmlAttributes }] },
  { title: 'Gulp API · Nunjucks', description: '`icon` macro를 import하고 `{{ icon(...) }}`로 조합합니다. 커스텀 path는 `{% call icon(...) %}` 본문에 둡니다.', tables: [{ columns, rows: gulpRows }] },
  { title: 'WebSquare API · XML', description: 'WebSquare에서는 w2:image로 프로젝트 정적 아이콘 리소스를 표시하고, 클릭 가능한 아이콘은 xf:trigger로 구성합니다.', tables: [{ columns, rows: webSquareRows }] },
  { title: '공통 API · 클래스', tables: [{ columns, rows: classes }] },
  { title: '공통 API · 디자인 토큰', tables: [{ columns, rows: tokens }] }
];
