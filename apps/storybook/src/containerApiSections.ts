import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [
  { key: 'name', label: '이름' },
  { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' },
  { key: 'type', label: '타입' }
];

const sharedProps: ApiRow[] = [
  { name: 'size', type: "'' | 'sm' | 'md' | 'lg' | 'xl'", default: "''", description: 'Container의 최대 너비를 선택합니다. 빈 값은 기본 72rem을 사용합니다.' },
  { name: 'fluid', type: 'boolean', default: 'false', description: '최대 너비 제한을 없애고 부모 너비를 채웁니다.' },
  { name: 'as', type: 'string | component', default: "'div'", description: '루트 요소 또는 컴포넌트를 지정합니다.' }
];

const reactProps: ApiRow[] = [
  ...sharedProps,
  { name: 'children', type: 'ReactNode', default: "'Container'", description: 'Container 내부 콘텐츠입니다.' },
  { name: 'className', type: 'string', default: "''", description: '루트 요소에 추가할 클래스 이름입니다.' },
  { name: '...props', type: 'HTML attributes', default: '—', description: '선택한 루트 요소에 전달할 네이티브 속성입니다.' }
];

const vueProps: ApiRow[] = [
  ...sharedProps,
  { name: 'class', type: 'string | object | array', default: '—', description: '루트 요소에 추가할 Vue 클래스 바인딩입니다.' },
  { name: 'v-bind', type: 'HTML attributes', default: '—', description: '선택한 루트 요소에 전달할 네이티브 속성입니다.' }
];

const slots: ApiRow[] = [
  { name: 'default', type: 'slot', default: "'Container'", description: 'Container 내부 콘텐츠입니다.' }
];

const htmlRows: ApiRow[] = [
  { name: 'class', type: 'string', default: "'container'", description: 'container와 너비 변형 클래스를 마크업에 직접 조합합니다.' },
  { name: 'data-component', type: "'Container'", default: '—', description: '컴포넌트 식별이 필요할 때 사용하는 선택적 데이터 속성입니다.' },
  { name: 'div · main · section', type: 'element', default: 'div', description: '콘텐츠 구조에 알맞은 시맨틱 루트 요소를 선택합니다.' }
];

const classes: ApiRow[] = [
  { name: 'container', type: 'class', default: '—', description: '기본 72rem 최대 너비, 중앙 정렬, 좌우 패딩을 적용합니다.' },
  { name: 'container_sm', type: 'class', default: '—', description: '최대 너비를 36rem으로 제한합니다.' },
  { name: 'container_md', type: 'class', default: '—', description: '최대 너비를 48rem으로 제한합니다.' },
  { name: 'container_lg', type: 'class', default: '—', description: '최대 너비를 64rem으로 제한합니다.' },
  { name: 'container_xl', type: 'class', default: '—', description: '최대 너비를 80rem으로 제한합니다.' },
  { name: 'container_fluid', type: 'class', default: '—', description: 'max-width 제한을 해제합니다. size와 함께 쓰면 fluid가 우선합니다.' }
];

const tokens: ApiRow[] = [
  { name: '--container-padding-x', type: 'length', default: 'var(--space-xl)', description: 'Container의 좌우 내부 여백입니다.' },
  { name: '--container-max-width', type: 'length', default: '72rem', description: '기본 최대 너비입니다.' },
  { name: '--container-max-width-sm', type: 'length', default: '36rem', description: 'sm 최대 너비입니다.' },
  { name: '--container-max-width-md', type: 'length', default: '48rem', description: 'md 최대 너비입니다.' },
  { name: '--container-max-width-lg', type: 'length', default: '64rem', description: 'lg 최대 너비입니다.' },
  { name: '--container-max-width-xl', type: 'length', default: '80rem', description: 'xl 최대 너비입니다.' }
];

const webSquareRows: ApiRow[] = [
  { name: 'w2:group', type: 'component', default: '—', description: 'Container의 WebSquare 루트입니다. 상태와 데이터 바인딩 없이 레이아웃 그룹으로 사용합니다.' },
  { name: 'class', type: 'string', default: "'container'", description: 'container와 container_sm/md/lg/xl 또는 container_fluid 클래스를 조합합니다.' },
  { name: 'tagname', type: 'string', default: "'div'", description: 'main, section 등 문서 구조에 맞는 HTML 루트 태그를 지정합니다.' },
  { name: 'id', type: 'string', default: '—', description: 'WebSquare 화면 안에서 중복되지 않는 컴포넌트 ID를 지정합니다.' }
];

export const containerApiSections: ApiSectionData[] = [
  { title: 'React · Next.js API · Props', description: 'Next.js는 `@uxkm/react/container`를 재사용합니다.', tables: [{ columns, rows: reactProps }] },
  { title: 'Vue · Nuxt API · Props', description: 'Nuxt는 `@uxkm/vue/container`를 재사용합니다.', tables: [{ columns, rows: vueProps }] },
  { title: 'Vue · Nuxt API · Slots', tables: [{ columns, rows: slots }] },
  { title: 'HTML · Gulp API · Markup', description: 'HTML과 Gulp는 공통 OOCSS 클래스를 마크업에 직접 적용합니다.', tables: [{ columns, rows: htmlRows }] },
  { title: 'WebSquare API · XML', description: 'Container는 구조 전용 컴포넌트이므로 scwin 이벤트나 DataList 바인딩이 필요하지 않습니다.', tables: [{ columns, rows: webSquareRows }] },
  { title: '공통 API · 클래스', tables: [{ columns, rows: classes }] },
  { title: '공통 API · 디자인 토큰', tables: [{ columns, rows: tokens }] }
];
