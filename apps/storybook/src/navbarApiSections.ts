import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const navbarApiSections: ApiSectionData[] = [
  section('Navbar API', [{ name: 'brand · brandContent · #brand', type: 'string · ReactNode · slot', default: '—', description: '브랜드 텍스트 또는 커스텀 콘텐츠입니다.' }, { name: 'brandIcon · #brand-icon', type: 'ReactNode · slot', default: '—', description: '브랜드 앞 Icon 영역입니다.' }, { name: 'items · #items', type: 'ReactNode · slot', default: '—', description: 'NavbarList 메뉴 영역입니다.' }, { name: 'search · #search', type: 'ReactNode · slot', default: '—', description: '검색 Input 영역입니다.' }, { name: 'actions · #actions', type: 'ReactNode · slot', default: '—', description: '버튼 등 액션 영역입니다.' }, { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '내비게이션 높이입니다.' }, { name: 'borderless · dark · sticky', type: 'boolean', default: 'false', description: '테두리, 어두운 면, 상단 고정 변형입니다.' }, { name: 'responsive · collapseId', type: 'boolean · string', default: 'false · auto', description: '모바일 접기 동작과 패널 ID입니다.' }]),
  section('NavbarItem · NavbarList API', [{ name: 'label · children', type: 'string · ReactNode', default: '—', description: '메뉴 항목 내용입니다.' }, { name: 'href · active', type: 'string · boolean', default: "'#' · false", description: '링크와 현재 페이지 상태입니다.' }, { name: 'badge · #badge', type: 'ReactNode · slot', default: '—', description: '메뉴 항목 Badge 영역입니다.' }]),
  section('HTML · Gulp', [{ name: 'navbar_container · navbar_collapse', type: 'class', default: '—', description: 'Navbar 내부 레이아웃과 접이식 패널입니다.' }, { name: 'navbar_list · navbar_item · navbar_link', type: 'class', default: '—', description: '메뉴 목록 구조입니다.' }, { name: 'is-open · is-active', type: 'class', default: '—', description: '모바일 패널과 현재 메뉴 상태입니다.' }]),
  section('디자인 토큰', [{ name: '--navbar-height · --navbar-padding-x', type: 'length', default: 'header-height · space-lg', description: '높이와 좌우 여백입니다.' }, { name: '--navbar-gap · --navbar-search-width', type: 'length', default: 'space-md · 12rem', description: '요소 간격과 검색 너비입니다.' }]),
  section(
    'WebSquare API · XML',
    [
      { name: 'w2:group.navbar', type: 'XML element · class', default: '—', description: 'Navbar 루트입니다. brand·list·search·actions 영역을 포함합니다.' },
      { name: 'navbar_list · navbar_link · is-active', type: 'class', default: '—', description: '메뉴 목록과 현재 페이지 상태입니다.' },
      { name: 'xf:input.navbar_search · xf:trigger', type: 'XML element', default: '—', description: '검색 입력과 액션·토글 버튼을 구성합니다.' },
      { name: 'aria-current · aria-expanded · aria-controls', type: 'ARIA', default: '—', description: '현재 메뉴와 반응형 패널 연결입니다.' },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
