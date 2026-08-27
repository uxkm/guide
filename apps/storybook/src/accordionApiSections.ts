import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [
  { key: 'name', label: '이름' },
  { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' },
  { key: 'type', label: '타입' },
];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });

export const accordionApiSections: ApiSectionData[] = [
  section('Accordion API', [
    { name: 'variant', type: "'bordered' | 'flush' | 'card'", default: "'bordered'", description: '항목의 외형을 선택합니다.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '트리거와 본문 여백 크기입니다.' },
    { name: 'multiple', type: 'boolean', default: 'false', description: '여러 패널을 동시에 열 수 있습니다.' },
    { name: 'effect', type: "'slide'", default: '—', description: '높이 슬라이드 전환을 적용합니다.' },
  ]),
  section('AccordionItem API', [
    { name: 'label', type: 'string', default: "''", description: '기본 트리거 제목입니다.' },
    { name: 'title · #title', type: 'ReactNode · slot', default: 'label', description: '아이콘·배지 등 커스텀 제목 콘텐츠입니다.' },
    { name: 'content · children · default slot', type: 'string · node', default: '—', description: '패널 본문입니다.' },
    { name: 'open', type: 'boolean', default: 'false', description: '초기 열림 상태입니다.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: '항목을 비활성화하고 키보드 탐색에서 제외합니다.' },
    { name: 'extra · #extra', type: 'ReactNode · slot', default: '—', description: '제목 오른쪽의 배지 또는 보조 정보입니다.' },
    { name: 'headingLevel', type: 'number', default: '3', description: '헤딩의 aria-level입니다.' },
  ]),
  section('HTML 속성 · 키보드', [
    { name: 'data-accordion-multiple', type: 'attribute', default: '—', description: 'HTML/Gulp에서 다중 열기 모드를 사용합니다.' },
    { name: 'data-effect="slide"', type: 'attribute', default: '—', description: 'HTML/Gulp에서 슬라이드 효과를 사용합니다.' },
    { name: 'ArrowUp · ArrowDown', type: 'key', default: '—', description: '이전·다음 활성 트리거로 포커스를 이동합니다.' },
    { name: 'Home · End', type: 'key', default: '—', description: '첫 번째·마지막 활성 트리거로 이동합니다.' },
    { name: 'aria-expanded · aria-controls', type: 'attribute', default: '—', description: '트리거 상태와 연결 패널을 제공합니다.' },
  ]),
  section('디자인 토큰', [
    { name: '--accordion-trigger-padding-y · --accordion-trigger-padding-x', type: 'length', default: '0.875rem · space-lg', description: '트리거 여백입니다.' },
    { name: '--accordion-content-padding-y · --accordion-content-padding-x', type: 'length', default: 'space-lg', description: '패널 본문 여백입니다.' },
    { name: '--accordion-icon-size', type: 'length', default: '1rem', description: '펼침 아이콘 크기입니다.' },
    { name: '--accordion-slide-duration · --accordion-slide-easing', type: 'time · easing', default: '0.28s · ease', description: '슬라이드 전환 설정입니다.' },
  ]),
  section(
    'WebSquare API · XML',
    [
      { name: 'w2:group.accordion', type: 'XML element · class', default: '—', description: 'Accordion 루트입니다. accordion_card·accordion_flush·accordion_bordered를 조합합니다.' },
      { name: 'accordion_item · accordion_trigger · accordion_panel', type: 'class', default: '—', description: '항목, 트리거, 패널 구조입니다.' },
      { name: 'xf:trigger · aria-expanded · aria-controls', type: 'XML · ARIA', default: '—', description: '패널 토글과 트리거-패널 연결입니다.' },
      { name: 'ev:onclick', type: 'WebSquare event', default: '—', description: '열기·닫기를 화면 스크립트에 연결합니다.' },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
