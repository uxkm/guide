import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const menuApiSections: ApiSectionData[] = [
  section('Menu API', [{ name: 'mode', type: "'vertical' | 'horizontal' | 'inline'", default: "'vertical'", description: '메뉴 배치 방향입니다.' }, { name: 'bordered · compact · dark', type: 'boolean', default: 'false', description: '테두리, 밀도, 어두운 면 변형입니다.' }, { name: 'ariaLabel', type: 'string', default: '—', description: '내비게이션 영역의 접근 가능한 이름입니다.' }]),
  section('MenuItem API', [{ name: 'label · children', type: 'string · ReactNode', default: '—', description: '항목 텍스트 또는 커스텀 콘텐츠입니다.' }, { name: 'active · disabled', type: 'boolean', default: 'false', description: '현재 항목과 비활성 상태입니다.' }, { name: 'icon · #icon', type: 'ReactNode · slot', default: '—', description: 'Icon 컴포넌트 영역입니다.' }, { name: 'extra · #extra', type: 'ReactNode · slot', default: '—', description: 'Badge 등 우측 보조 영역입니다.' }]),
  section('MenuSubmenu · Group API', [{ name: 'expanded · submenuId', type: 'boolean · string', default: 'false · auto', description: '서브메뉴 초기 상태와 패널 ID입니다.' }, { name: 'MenuGroup title', type: 'string', default: '—', description: '메뉴 섹션 제목입니다.' }, { name: 'MenuDivider', type: 'component', default: '—', description: '메뉴 그룹 구분선입니다.' }]),
  section('HTML · Gulp', [{ name: 'menu_list · menu_item · menu_link', type: 'class', default: '—', description: '목록과 메뉴 항목 구조입니다.' }, { name: 'menu_submenu · data-menu-submenu-toggle', type: 'class · attribute', default: '—', description: '상호작용 가능한 중첩 메뉴입니다.' }, { name: 'is-active · is-disabled', type: 'class', default: '—', description: '선택과 비활성 상태입니다.' }]),
  section('디자인 토큰', [{ name: '--menu-width · --menu-item-padding-x', type: 'length', default: '16rem · .75rem', description: '메뉴 너비와 항목 여백입니다.' }, { name: '--menu-icon-size · --menu-submenu-indent', type: 'length', default: '1rem · 1.75rem', description: '아이콘 크기와 중첩 들여쓰기입니다.' }]),
  section(
    'WebSquare API · XML',
    [
      { name: 'w2:group.menu', type: 'XML element · class', default: "role='menu'", description: 'Menu 루트입니다. menu_horizontal 등으로 배치를 바꿉니다.' },
      { name: 'menu_item · menu_submenu · menu_divider', type: 'class', default: '—', description: '항목, 서브메뉴, 구분선 구조입니다.' },
      { name: 'xf:trigger · aria-expanded · aria-controls', type: 'XML · ARIA', default: '—', description: '서브메뉴 토글과 패널 연결입니다.' },
      { name: 'is-active · is-disabled', type: 'class', default: '—', description: '현재·비활성 상태입니다.' },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
