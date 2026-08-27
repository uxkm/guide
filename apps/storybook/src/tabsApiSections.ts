import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const tabsApiSections: ApiSectionData[] = [
  section('Tabs API', [{ name: 'mode', type: "'panels' | 'dynamic'", default: "'panels'", description: '개별 패널 또는 단일 동적 패널 방식입니다.' }, { name: 'value · defaultValue · v-model', type: 'string | number', default: '—', description: '선택 탭 값입니다.' }, { name: 'variant', type: "'line' | 'card' | 'pill'", default: "'line'", description: '탭 외형입니다.' }, { name: 'size · layout', type: "'sm'|'md'|'lg' · 'auto'|'equal'|'scroll'", default: "'md' · 'auto'", description: '크기와 탭 바 배치입니다.' }, { name: 'vertical · scrollable', type: 'boolean', default: 'false', description: '수직 방향과 기본 스크롤바입니다.' }, { name: 'indicator', type: "'static' | 'slide'", default: "'static'", description: '선택 인디케이터 동작입니다.' }, { name: 'extra · #extra', type: 'ReactNode · slot', default: '—', description: '탭 바 우측 액션입니다.' }]),
  section('TabPanel · TabMenu API', [{ name: 'label · value', type: 'string · string|number', default: '—', description: '탭 이름과 선택 값입니다.' }, { name: 'active · disabled', type: 'boolean', default: 'false', description: '초기 선택과 비활성 상태입니다.' }, { name: 'icon · #icon', type: 'ReactNode · slot', default: '—', description: 'Icon 컴포넌트 영역입니다.' }, { name: 'badge · #badge', type: 'ReactNode · slot', default: '—', description: 'Badge 컴포넌트 영역입니다.' }, { name: 'panel · #panel', type: 'function · slot', default: '—', description: '동적 모드의 단일 패널 콘텐츠입니다.' }]),
  section('접근성 · 키보드', [{ name: 'ArrowLeft/Right · ArrowUp/Down', type: 'key', default: '—', description: '방향에 따라 이전·다음 탭으로 이동합니다.' }, { name: 'Home · End', type: 'key', default: '—', description: '첫 번째·마지막 활성 탭으로 이동합니다.' }, { name: 'aria-selected · aria-controls', type: 'attribute', default: '—', description: '탭과 패널의 선택 및 연결 상태입니다.' }]),
  section('디자인 토큰', [{ name: '--tabs-tab-padding-x · --tabs-panel-padding-y', type: 'length', default: '1rem · space-lg', description: '탭과 패널 여백입니다.' }, { name: '--tabs-indicator-height · --tabs-icon-size', type: 'length', default: '2px · 1rem', description: '인디케이터와 아이콘 크기입니다.' }]),
  section(
    'WebSquare API · XML',
    [
      { name: 'w2:group.tabs', type: 'XML element · class', default: '—', description: 'Tabs 루트입니다. tabs_card·tabs_pill·tabs_vertical 등을 조합합니다.' },
      { name: 'tabs_list · xf:trigger.tabs_tab', type: 'class · XML', default: "role='tablist'", description: '탭 목록과 개별 탭 버튼입니다.' },
      { name: 'tabs_panel · aria-selected · aria-controls', type: 'class · ARIA', default: '—', description: '패널과 탭-패널 연결입니다.' },
      { name: 'ev:onclick', type: 'WebSquare event', default: '—', description: '탭 선택 시 패널 전환을 화면 스크립트에 연결합니다.' },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
