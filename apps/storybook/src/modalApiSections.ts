import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const modalApiSections: ApiSectionData[] = [
  section('React · Next.js API', [
    { name: 'open · defaultOpen', type: 'boolean', default: '— · false', description: '제어·비제어 열림 상태입니다.' },
    { name: 'title · header · children · footer', type: 'ReactNode', default: '—', description: '헤더, 본문, 푸터 콘텐츠입니다.' },
    { name: 'size', type: "'sm' | 'md' | 'lg' | 'fullscreen'", default: "'md'", description: '대화상자 크기입니다.' },
    { name: 'scrollable · backdrop', type: 'boolean', default: 'false · true', description: '본문 스크롤과 백드롭 표시입니다.' },
    { name: 'footerAlign', type: "'start' | 'center' | 'end' | 'between' | 'even'", default: "'end'", description: '푸터 액션 정렬입니다.' },
    { name: 'footerRatio · footerNoPadBottom', type: 'string · boolean', default: "'1-1' · false", description: '균등 버튼 비율과 하단 패딩입니다.' },
    { name: 'onClose', type: '(reason, event) => void', default: '—', description: 'close · backdrop · escape 사유를 전달합니다.' },
  ], 'Next.js는 @uxkm/react/modal을 재사용합니다.'),
  section('Vue · Nuxt API', [
    { name: 'open · default-open · scrollable · backdrop', type: 'boolean', default: 'false · false · false · true', description: '표시 및 동작 옵션입니다.' },
    { name: 'title · size · footer-align · footer-ratio', type: 'string', default: "— · 'md' · 'end' · '1-1'", description: '콘텐츠와 레이아웃 옵션입니다.' },
    { name: 'header · default · footer', type: 'slot', default: '—', description: '헤더, 본문, 푸터 슬롯입니다.' },
    { name: '@close', type: 'event', default: '—', description: '닫기 사유와 원본 이벤트입니다.' },
  ], 'Nuxt는 @uxkm/vue/modal을 재사용합니다.'),
  section('HTML · Gulp', [
    { name: 'modal · modal_backdrop · modal_dialog', type: 'class', default: '—', description: '루트, 백드롭, 대화상자입니다.' },
    { name: 'modal_header · modal_body · modal_footer', type: 'class', default: '—', description: '구조 영역입니다.' },
    { name: 'modal_sm · modal_lg · modal_fullscreen · modal_scrollable', type: 'class', default: '—', description: '크기와 스크롤 변형입니다.' },
    { name: 'data-modal-trigger · data-modal-close', type: 'attribute', default: '—', description: '열기와 닫기 트리거입니다.' },
    { name: 'is-open · is-stack-covered', type: 'class', default: '—', description: '열림과 중첩 상태입니다.' },
  ]),
  section('디자인 토큰', [
    { name: '--modal-z-index · --modal-margin', type: 'number · length', default: '300 · space-md', description: '레이어와 화면 여백입니다.' },
    { name: '--modal-width · --modal-width-sm · --modal-width-lg', type: 'length', default: '32rem · 24rem · 48rem', description: '대화상자 너비입니다.' },
    { name: '--modal-bg · --modal-radius · --modal-shadow', type: 'color · length · shadow', default: '테마별 값', description: '표면, 모서리, 그림자입니다.' },
  ]),
  section(
    'WebSquare API · XML',
    [
      {
        name: 'w2:group.modal',
        type: 'XML element · class',
        default: "role='dialog'",
        description: 'Modal 루트입니다. is-open과 aria-modal, aria-labelledby를 함께 사용합니다.',
      },
      {
        name: 'modal_backdrop · modal_dialog · modal_header · modal_body · modal_footer',
        type: 'class',
        default: '—',
        description: '백드롭과 대화상자 구조 영역입니다.',
      },
      {
        name: 'modal_sm · modal_lg · modal_fullscreen · modal_scrollable',
        type: 'class',
        default: '—',
        description: '크기와 본문 스크롤 변형입니다.',
      },
      {
        name: 'xf:trigger.modal_close · modal_footer',
        type: 'XML element · class',
        default: '—',
        description: '닫기·확인·취소 액션을 구성합니다.',
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
