import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [
  { key: 'name', label: '이름' },
  { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' },
  { key: 'type', label: '타입' },
];

const createTable = (
  title: string,
  rows: ApiRow[],
  description?: string,
): ApiSectionData => ({
  title,
  description,
  tables: [{ columns, rows }],
});

export const alertApiSections: ApiSectionData[] = [
  createTable(
    'React · Next.js API',
    [
      { name: 'color', type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", description: '의미 색상입니다. danger는 color_error를 사용합니다.' },
      { name: 'title · description', type: 'ReactNode', default: '—', description: '제목과 본문입니다.' },
      { name: 'closable · showIcon · banner', type: 'boolean', default: 'false · true · false', description: '닫기, 아이콘, 배너 변형입니다.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '알림 크기입니다.' },
      { name: 'icon · actions · children', type: 'ReactNode', default: '—', description: '커스텀 아이콘, 액션, 본문입니다.' },
      { name: 'onClose', type: 'event handler', default: '—', description: '닫기 버튼 클릭 시 호출됩니다.' },
    ],
    'Next.js는 @uxkm/react/alert를 재사용합니다.',
  ),
  createTable(
    'Vue · Nuxt API',
    [
      { name: 'color · size · role', type: 'string', default: "'info' · 'md' · 'alert'", description: '색상, 크기, 접근성 역할입니다.' },
      { name: 'closable · show-icon · banner', type: 'boolean', default: 'false · true · false', description: '표시 옵션입니다.' },
      { name: 'icon · actions · default', type: 'slot', default: '—', description: '커스텀 콘텐츠 슬롯입니다.' },
      { name: '@close', type: 'event', default: '—', description: '닫기 이벤트입니다.' },
    ],
    'Nuxt는 @uxkm/vue/alert를 재사용합니다.',
  ),
  createTable('HTML · Gulp', [
    { name: 'alert · alert_sm · alert_lg · alert_banner', type: 'class', default: '—', description: '루트, 크기, 배너 클래스입니다.' },
    { name: 'color_info · color_success · color_warning · color_error', type: 'class', default: '—', description: '의미 색상입니다.' },
    { name: 'alert_icon · alert_body · alert_title · alert_desc', type: 'class', default: '—', description: '구조 파트입니다.' },
    { name: 'close', type: 'CustomEvent', default: '—', description: '닫힌 뒤 발생합니다.' },
  ]),
  createTable('디자인 토큰', [
    { name: '--alert-padding-* · --alert-gap', type: 'length', default: '크기별 값', description: '패딩과 간격입니다.' },
    { name: '--alert-icon-size · --alert-close-size', type: 'length', default: '1.25rem', description: '아이콘과 닫기 버튼 크기입니다.' },
    { name: '--alert-title-weight · --alert-desc-opacity', type: 'number', default: '600 · 0.85', description: '제목과 설명 표현입니다.' },
  ]),
  createTable(
    'WebSquare API · XML',
    [
      {
        name: 'w2:group.alert',
        type: 'XML element · class',
        default: "role='alert'",
        description: '알림 루트입니다. color_info·color_success·color_warning·color_error와 함께 사용합니다.',
      },
      {
        name: 'w2:textbox.alert_title · alert_desc',
        type: 'XML element · class',
        default: '—',
        description: '제목과 본문 텍스트를 표시합니다.',
      },
      {
        name: 'alert_sm · alert_lg · alert_banner',
        type: 'class',
        default: '—',
        description: '크기와 배너 변형입니다.',
      },
      {
        name: 'xf:trigger.alert_close · alert_actions',
        type: 'XML element · class',
        default: '—',
        description: '닫기 버튼과 보조 액션 영역을 구성합니다.',
      },
      {
        name: 'ev:onclick',
        type: 'WebSquare event',
        default: '—',
        description: '닫기 또는 액션 버튼 클릭 시 화면 스크립트를 실행합니다.',
      },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
