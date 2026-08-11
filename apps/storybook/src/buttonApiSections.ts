import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const standardColumns: ApiColumn[] = [
  { key: 'name', label: '이름' },
  { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' },
  { key: 'type', label: '타입' },
];

type SharedProp = ApiRow & { vueName?: string };

const sharedProps: SharedProp[] = [
  { name: 'variant', type: "'filled' | 'outline' | 'ghost' | 'text' | 'select'", default: 'filled', description: '버튼 스킨. select는 셀렉트 박스형 트리거입니다.' },
  { name: 'color', type: "'primary' | 'default' | 'success' | 'warning' | 'danger' | 'muted'", default: 'primary', description: '색상 변형. text 스킨에서는 텍스트 톤으로 사용합니다.' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: 'md', description: '버튼 크기입니다.' },
  { name: 'label', type: 'string', default: 'Button', description: '버튼 텍스트. children 또는 default 슬롯이 있으면 해당 콘텐츠가 우선합니다.' },
  { name: 'ripple', type: 'boolean', default: 'true', description: '클릭 위치에서 시작하는 파장 효과를 활성화합니다. false이면 data-ripple="false"를 렌더링합니다.' },
  { name: 'round', type: 'boolean', default: 'false', description: 'pill(캡슐) 형태의 모서리를 적용합니다.' },
  { name: 'vertical', type: 'boolean', default: 'false', description: '아이콘 위·텍스트 아래의 세로 배치를 적용합니다.' },
  { name: 'iconOnly', vueName: 'icon-only', type: 'boolean', default: 'false', description: '아이콘만 표시합니다. aria-label을 함께 지정해야 합니다.' },
  { name: 'block', type: 'boolean', default: 'false', description: '부모 너비 100%로 확장합니다.' },
  { name: 'grow', type: "boolean | '2'", default: 'false', description: 'flex 비율로 분배합니다. 2는 다른 grow 버튼의 두 배 너비입니다.' },
  { name: 'fit', type: 'boolean', default: 'false', description: '콘텐츠 너비를 유지합니다.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '네이티브 disabled를 적용하거나 비활성 상호작용을 차단합니다.' },
  { name: 'ariaDisabled', vueName: 'aria-disabled', type: 'boolean', default: 'false', description: 'is-disabled와 aria-disabled를 적용하고 상호작용을 차단합니다.' },
  { name: 'loading', type: 'boolean', default: 'false', description: '스피너와 aria-busy를 표시하고 중복 상호작용을 차단합니다.' },
  { name: 'open', type: 'boolean', default: 'false', description: '셀렉트·팝오버 트리거의 열림 상태를 표시합니다.' },
  { name: 'error', type: 'boolean', default: 'false', description: '오류 상태 클래스와 aria-invalid를 적용합니다.' },
  { name: 'placeholder', type: 'boolean', default: 'false', description: '셀렉트 미선택 placeholder 스타일을 적용합니다.' },
  { name: 'selectText', vueName: 'select-text', type: 'boolean', default: 'false', description: '배경과 테두리가 없는 셀렉트 텍스트 형태를 사용합니다.' },
  { name: 'selectCaret', vueName: 'select-caret', type: 'boolean', default: 'false', description: 'select 이외의 스킨에도 드롭다운 캐럿을 표시합니다.' },
  { name: 'type', type: "'button' | 'submit' | 'reset'", default: 'button', description: 'button 루트의 네이티브 type 속성입니다.' },
  { name: 'tag', type: "'button' | 'a' | 'div'", default: 'button', description: '렌더링할 루트 HTML 태그입니다.' },
  { name: 'href', type: 'string', default: '—', description: 'tag가 a일 때 사용할 링크 주소입니다.' },
  { name: 'role', type: 'string', default: '자동', description: '루트의 접근성 역할. href 없는 a와 div에는 button이 자동 적용됩니다.' },
  { name: 'tabIndex', vueName: 'tabindex', type: 'number | string', default: '자동', description: '수동 Tab 순서. 비활성인 비-button 루트에는 -1이 적용됩니다.' },
  { name: 'ariaLabel', vueName: 'aria-label', type: 'string', default: '—', description: '접근성 라벨. iconOnly 사용 시 필수입니다.' },
  { name: 'haspopup', type: "boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'", default: '—', description: 'aria-haspopup으로 전달할 팝업 유형입니다.' },
  { name: 'expanded', type: 'boolean', default: 'open 값', description: 'aria-expanded를 직접 지정합니다. 생략하면 open 값을 사용합니다.' },
  { name: 'invalid', type: 'boolean', default: 'false', description: '폼 오류의 aria-invalid를 적용합니다.' },
];

const reactProps: ApiRow[] = [
  ...sharedProps.map(({ vueName: _vueName, ...prop }) => prop),
  { name: 'children', type: 'ReactNode', default: '—', description: 'label을 대체하는 콘텐츠. iconOnly일 때 아이콘 콘텐츠로도 사용합니다.' },
  { name: 'iconBefore', type: 'ReactNode', default: '—', description: '텍스트 앞에 렌더링할 아이콘입니다.' },
  { name: 'iconAfter', type: 'ReactNode', default: '—', description: '텍스트 뒤에 렌더링할 아이콘입니다.' },
  { name: 'className', type: 'string', default: "''", description: '루트 요소에 추가할 클래스 이름입니다.' },
  { name: 'onClick', type: '(event) => void', default: '—', description: '활성 상태에서 전달되는 클릭 이벤트 핸들러입니다.' },
  { name: 'onKeyDown', type: '(event) => void', default: '—', description: '활성 상태에서 전달되는 키보드 이벤트 핸들러입니다.' },
];

const vueProps: ApiRow[] = sharedProps.map(({ vueName, ...prop }) => ({
  ...prop,
  name: vueName ?? prop.name,
}));

const vueSlots: ApiRow[] = [
  { name: 'default', type: 'slot', default: 'label', description: 'label을 대체하는 콘텐츠. icon-only일 때 아이콘 콘텐츠로도 사용합니다.' },
  { name: 'icon-before', type: 'named slot', default: '—', description: '텍스트 앞에 렌더링할 아이콘입니다.' },
  { name: 'icon-after', type: 'named slot', default: '—', description: '텍스트 뒤에 렌더링할 아이콘입니다.' },
];

const vueEvents: ApiRow[] = [
  { name: 'click', type: 'MouseEvent', default: '—', description: '활성 상태에서 발생합니다.' },
  { name: 'keydown', type: 'KeyboardEvent', default: '—', description: '활성 상태에서 발생합니다. button 의미를 보완하는 루트에서는 Enter와 Space도 처리합니다.' },
];

const htmlAttributes: ApiRow[] = [
  { name: 'class', type: 'string', default: '—', description: 'btn과 스킨·색상·크기·상태 클래스를 직접 조합합니다.' },
  { name: 'data-ripple', type: "'true' | 'false'", default: 'true 권장', description: '클릭 파장 효과를 활성화하거나 비활성화합니다.' },
  { name: 'data-no-ripple', type: 'boolean attribute', default: '—', description: '지정한 컨테이너 아래의 ripple 효과를 모두 비활성화합니다.' },
  { name: 'type', type: "'button' | 'submit' | 'reset'", default: 'button 권장', description: 'button 요소의 동작을 지정합니다.' },
  { name: 'disabled', type: 'boolean attribute', default: '—', description: 'button 요소를 네이티브 방식으로 비활성화합니다.' },
  { name: 'href', type: 'URL', default: '—', description: 'a 요소를 버튼 스타일 링크로 사용할 때 지정합니다.' },
  { name: 'role', type: "'button' | 'link'", default: '네이티브 의미', description: 'div 또는 href 없는 a를 사용할 때 의미를 명시합니다.' },
  { name: 'tabindex', type: 'number', default: '네이티브 순서', description: '비네이티브 인터랙션 요소의 키보드 포커스를 관리합니다.' },
  { name: 'aria-label', type: 'string', default: '—', description: '아이콘만 있는 버튼의 접근 가능한 이름입니다.' },
  { name: 'aria-disabled', type: "'true' | 'false'", default: 'false', description: 'disabled를 사용할 수 없는 루트의 비활성 상태입니다. 이벤트 차단도 직접 구현해야 합니다.' },
  { name: 'aria-busy', type: "'true' | 'false'", default: 'false', description: '로딩 처리 중임을 보조 기술에 전달합니다.' },
  { name: 'aria-haspopup', type: "'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'", default: '—', description: '버튼이 여는 팝업 유형입니다.' },
  { name: 'aria-expanded', type: "'true' | 'false'", default: '—', description: '팝업의 열림 상태입니다.' },
  { name: 'aria-invalid', type: "'true' | 'false'", default: 'false', description: '폼 트리거의 오류 상태입니다.' },
];

const classRows: ApiRow[] = [
  { name: 'btn', description: '루트 구조 클래스' },
  { name: 'btn_filled · btn_outline · btn_ghost · btn_text', description: '버튼 스킨' },
  { name: 'btn_select · btn_select-text', description: '셀렉트 박스형·텍스트형 트리거' },
  { name: 'btn_sm · btn_lg', description: '크기 변형' },
  { name: 'btn_round · btn_vertical · btn_icon-only', description: '모양과 콘텐츠 배치' },
  { name: 'btn_block · btn_grow · btn_grow-2 · btn_fit', description: '너비 레이아웃' },
  { name: 'icon · btn_label · btn_spinner', description: '내부 파트' },
  { name: 'btn_row · btn_group · btn_stack', description: '버튼 묶음 컨테이너' },
  { name: 'is-disabled · is-loading · is-open · is-error', description: '상태 클래스' },
  { name: 'data-ripple · data-ripple="false" · data-no-ripple', description: '클릭 파장 활성·개별 비활성·하위 전체 비활성' },
  { name: 'color_primary · color_danger …', description: '스킨과 조합하는 색상 유틸리티' },
];

const tokenRows: ApiRow[] = [
  { name: '--btn-padding-y · --btn-padding-x · --btn-font-size', default: '0.5rem · 1rem · var(--text-size-base)', description: '기본(md) 패딩·타이포' },
  { name: '--btn-padding-y-sm · --btn-padding-x-sm · --btn-font-size-sm', default: '0.3rem · 0.75rem · var(--text-size-sm)', description: 'sm 크기' },
  { name: '--btn-padding-y-lg · --btn-padding-x-lg · --btn-font-size-lg', default: '0.65rem · 1.25rem · var(--text-size-lg)', description: 'lg 크기' },
  { name: '--btn-font-weight · --btn-line-height', default: '600 · 1.4', description: '타이포 두께·줄높이' },
  { name: '--btn-border-width · --btn-gap', default: '1px · var(--space-sm)', description: '테두리·내부 간격' },
  { name: '--btn-icon-size · --btn-icon-size-lg', default: '1em · 1.25em', description: '아이콘 크기' },
  { name: '--btn-icon-only-padding · --btn-icon-only-padding-sm · --btn-icon-only-padding-lg', default: '0.5rem · 0.35rem · 0.65rem', description: '아이콘 버튼 패딩' },
  { name: '--btn-vertical-min-width', default: '4.5rem', description: '세로 배치 최소 너비' },
  { name: '--btn-select-min-width · --btn-select-max-width', default: '10rem · 320px', description: '셀렉트 트리거 너비' },
  { name: '--btn-spinner-size · --btn-spinner-duration', default: '1em · 0.6s', description: '로딩 스피너' },
  { name: '--btn-group-overlap', default: '-1px', description: '그룹 버튼 테두리 겹침' },
];

export const buttonApiSections: ApiSectionData[] = [
  {
    title: 'React · Next.js API · Props',
    description: 'Next.js는 `@uxkm/react/button`을 재사용합니다. React JSX에서는 camelCase prop과 children을 사용합니다.',
    tables: [{ columns: standardColumns, rows: reactProps }],
  },
  {
    title: 'Vue · Nuxt API · Props',
    description: 'Nuxt는 `@uxkm/vue/button`을 재사용합니다. Vue 템플릿에서는 복합어 prop을 kebab-case로 작성합니다.',
    tables: [{ columns: standardColumns, rows: vueProps }],
  },
  {
    title: 'Vue · Nuxt API · Slots',
    tables: [{ columns: standardColumns, rows: vueSlots }],
  },
  {
    title: 'Vue · Nuxt API · Events',
    tables: [{ columns: standardColumns, rows: vueEvents }],
  },
  {
    title: 'HTML · Gulp API · Markup',
    description: 'HTML과 Gulp 템플릿은 별도 Button props API를 제공하지 않습니다. 아래 네이티브 속성과 공통 OOCSS 클래스를 마크업에 직접 적용하고, 비네이티브 루트의 키보드·비활성 동작은 사용하는 쪽에서 구현합니다.',
    tables: [{ columns: standardColumns, rows: htmlAttributes }],
  },
  {
    title: '공통 API · 클래스',
    description: '모든 프레임워크가 동일한 OOCSS 클래스 계약을 사용합니다.',
    tables: [{ columns: standardColumns, rows: classRows }],
  },
  {
    title: '공통 API · 디자인 토큰',
    description: '모든 프레임워크에서 같은 CSS 변수로 Button 스타일을 조정합니다.',
    tables: [{ columns: standardColumns, rows: tokenRows }],
  },
];
