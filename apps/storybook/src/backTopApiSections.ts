import type { ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns = [{ key: 'name', label: '이름' }, { key: 'type', label: '타입' }, { key: 'default', label: '기본값' }, { key: 'description', label: '설명' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const backTopApiSections: ApiSectionData[] = [section('BackTop API', [
  { name: 'target', type: 'string', default: 'window', description: '스크롤 컨테이너 선택자입니다.' }, { name: 'visibilityHeight', type: 'number | string', default: '400', description: '버튼 표시 임계값(px)입니다.' }, { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '버튼 크기입니다.' }, { name: 'color', type: "'' | 'primary' | 'ghost'", default: "''", description: '버튼 스킨입니다.' }, { name: 'label', type: 'string', default: '—', description: '아이콘 옆 텍스트입니다.' }, { name: 'ariaLabel', type: 'string', default: "'맨 위로'", description: '버튼 접근성 이름입니다.' }, { name: 'interactive', type: 'boolean', default: 'true', description: '스크롤 런타임 활성 여부입니다.' },
]),
  section('HTML · 상태', [
    { name: 'data-back-top', type: 'attribute', default: '—', description: 'BackTop을 초기화합니다.' },
    { name: 'data-target', type: 'attribute', default: 'window', description: '스크롤 컨테이너를 연결합니다.' },
    { name: 'data-visibility-height', type: 'attribute', default: '400', description: '표시 임계값을 설정합니다.' },
    { name: 'is-visible', type: 'class', default: '—', description: '임계값을 넘으면 런타임이 적용합니다.' },
  ]),
  section(
    'WebSquare API · XML',
    [
      { name: 'w2:group.back_top', type: 'XML element · class', default: '—', description: 'BackTop 루트입니다. data-target과 data-visibility-height로 표시 조건을 설정합니다.' },
      { name: 'xf:trigger.back_top_btn', type: 'XML element · class', default: '—', description: '맨 위로 이동 버튼입니다. aria-label로 동작을 설명합니다.' },
      { name: 'back_top_sm · back_top_lg · back_top_primary', type: 'class', default: '—', description: '크기와 색상 변형입니다.' },
      { name: 'is-visible', type: 'class', default: '—', description: '임계값을 넘으면 표시되는 상태입니다.' },
      { name: 'ev:onclick', type: 'WebSquare event', default: '—', description: '상단 스크롤을 화면 스크립트에 연결합니다.' },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
