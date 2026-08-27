import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const paginationApiSections: ApiSectionData[] = [
  section('Pagination API', [{ name: 'current · v-model:current', type: 'number', default: '1', description: '현재 페이지입니다.' }, { name: 'total', type: 'number', default: '1', description: '전체 항목 수입니다.' }, { name: 'pageSize', type: 'number', default: '10', description: '페이지당 항목 수입니다.' }, { name: 'onChange · change', type: '(page) => void', default: '—', description: '페이지 변경 이벤트입니다.' }, { name: 'simple', type: 'boolean', default: 'false', description: '이전·다음과 현재/전체 페이지만 표시합니다.' }, { name: 'minimal', type: 'boolean', default: 'false', description: '테두리를 줄인 가벼운 스타일입니다.' }, { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '페이지 컨트롤 크기입니다.' }, { name: 'round', type: 'boolean', default: 'false', description: '컨트롤을 원형으로 표시합니다.' }, { name: 'ariaLabel', type: 'string', default: "'페이지 이동'", description: '페이지 내비게이션의 접근 가능한 이름입니다.' }]),
  section('HTML · Gulp', [{ name: 'data-pagination', type: 'attribute', default: '—', description: '페이지 이동 동작을 초기화합니다.' }, { name: 'data-current · data-total · data-page-size', type: 'number attribute', default: '1 · 1 · 10', description: '현재 페이지와 페이지 계산 데이터입니다.' }, { name: 'pagination:change', type: 'CustomEvent', default: '—', description: '변경된 current와 totalPages를 detail로 전달합니다.' }, { name: 'pagination_align-center · pagination_align-end', type: 'class', default: '—', description: '가운데 및 오른쪽 정렬 클래스입니다.' }]),
  section('디자인 토큰', [{ name: '--pagination-item-min-size', type: 'length', default: '2rem', description: '페이지 버튼의 최소 크기입니다.' }, { name: '--pagination-gap', type: 'length', default: '0.25rem', description: '페이지 버튼 간격입니다.' }, { name: '--pagination-bg-active · --pagination-color-active', type: 'color', default: 'accent · on-accent', description: '현재 페이지 배경과 텍스트 색상입니다.' }]),
  section(
    'WebSquare API · XML',
    [
      { name: 'w2:group.pagination', type: 'XML element · class', default: "role='navigation'", description: 'Pagination 루트입니다. pagination_simple·pagination_round 등을 조합합니다.' },
      { name: 'xf:trigger.pagination_item', type: 'XML element · class', default: '—', description: '페이지 번호와 이전·다음 버튼입니다.' },
      { name: 'aria-current="page"', type: 'ARIA', default: '—', description: '현재 페이지를 표시합니다.' },
      { name: 'ev:onclick', type: 'WebSquare event', default: '—', description: '페이지 이동을 화면 스크립트에 연결합니다.' },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
