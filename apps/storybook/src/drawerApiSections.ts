import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const drawerApiSections: ApiSectionData[] = [
  section('React · Next.js API', [
    { name: 'open · defaultOpen · openOnLoad', type: 'boolean', default: '— · false · false', description: '제어·비제어 및 로드 시 열림 상태입니다.' },
    { name: 'title · header · extra · children · footer', type: 'ReactNode', default: '—', description: '헤더, 추가 영역, 본문, 푸터 콘텐츠입니다.' },
    { name: 'placement', type: "'left' | 'right' | 'top' | 'bottom'", default: "'right'", description: '패널이 열리는 방향입니다.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '패널 크기입니다.' },
    { name: 'backdrop · noBackdrop · draggable', type: 'boolean', default: 'true · false · false', description: '백드롭과 하단 핸들 옵션입니다.' },
    { name: 'footerAlign · footerRatio · footerNoPadBottom', type: 'string · string · boolean', default: "'end' · '1-1' · false", description: '푸터 액션 배치입니다.' },
    { name: 'onClose', type: '(reason, event) => void', default: '—', description: 'close · backdrop · escape · drag 사유를 전달합니다.' },
  ], 'Next.js는 @uxkm/react/drawer를 재사용합니다.'),
  section('Vue · Nuxt API', [
    { name: 'open · default-open · open-on-load', type: 'boolean', default: 'false', description: '표시 상태입니다.' },
    { name: 'title · placement · size', type: 'string', default: "— · 'right' · 'md'", description: '콘텐츠와 패널 배치입니다.' },
    { name: 'header · extra · default · footer', type: 'slot', default: '—', description: 'Drawer 콘텐츠 슬롯입니다.' },
    { name: '@close', type: 'event', default: '—', description: '닫기 사유와 원본 이벤트입니다.' },
  ], 'Nuxt는 @uxkm/vue/drawer를 재사용합니다.'),
  section('HTML · Gulp', [
    { name: 'drawer · drawer_backdrop · drawer_panel', type: 'class', default: '—', description: '루트, 백드롭, 패널입니다.' },
    { name: 'drawer_header · drawer_body · drawer_footer', type: 'class', default: '—', description: '구조 영역입니다.' },
    { name: 'drawer_placement-* · drawer_sm · drawer_lg', type: 'class', default: '—', description: '방향과 크기 변형입니다.' },
    { name: 'data-drawer-trigger · data-drawer-close', type: 'attribute', default: '—', description: '열기와 닫기 트리거입니다.' },
  ]),
  section('디자인 토큰', [
    { name: '--drawer-z-index · --drawer-width · --drawer-height', type: 'number · length', default: '250 · 24rem · 18rem', description: '레이어와 패널 크기입니다.' },
    { name: '--drawer-bg · --drawer-shadow', type: 'color · shadow', default: '테마별 값', description: '패널 표면과 그림자입니다.' },
  ]),
  section(
    'WebSquare API · XML',
    [
      {
        name: 'w2:group.drawer',
        type: 'XML element · class',
        default: "role='dialog'",
        description: 'Drawer 루트입니다. drawer_placement-*와 is-open, aria-modal을 함께 사용합니다.',
      },
      {
        name: 'drawer_backdrop · drawer_panel · drawer_header · drawer_body · drawer_footer',
        type: 'class',
        default: '—',
        description: '백드롭과 패널 구조 영역입니다.',
      },
      {
        name: 'drawer_sm · drawer_lg · drawer_draggable · drawer_handle',
        type: 'class',
        default: '—',
        description: '크기와 하단 드래그 시트 변형입니다.',
      },
      {
        name: 'xf:trigger.drawer_close · drawer_footer',
        type: 'XML element · class',
        default: '—',
        description: '닫기·저장·취소 액션을 구성합니다.',
      },
      {
        name: 'ev:onclick',
        type: 'WebSquare event',
        default: '—',
        description: '열기·닫기·확인 동작을 화면 스크립트에 연결합니다.',
      },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
