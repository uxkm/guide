import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [
  { key: 'name', label: '이름' }, { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' }, { key: 'type', label: '타입' },
];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });

export const snackbarApiSections: ApiSectionData[] = [
  section('React · Next.js API', [
    { name: 'message · children', type: 'ReactNode', default: "'Snackbar'", description: '메시지입니다. children이 message보다 우선합니다.' },
    { name: 'color', type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", description: '의미 색상입니다.' },
    { name: 'size · motion', type: "'sm' | 'md' | 'lg' · 'fade' | 'slide' | 'none'", default: "'md' · 'fade'", description: '크기와 등장·퇴장 효과입니다.' },
    { name: 'closable · showIcon · round', type: 'boolean', default: 'false · true · false', description: '닫기, 아이콘, 캡슐형 옵션입니다.' },
    { name: 'duration', type: 'number', default: '0', description: '자동 닫기 시간(ms)입니다. 호버·포커스 중에는 멈춥니다.' },
    { name: 'placement', type: 'SnackbarPlacement', default: "'bottom-center'", description: '위치 및 Slide 방향입니다.' },
    { name: 'icon · action', type: 'ReactNode | render function', default: '—', description: '커스텀 아이콘과 후속 액션입니다.' },
    { name: 'onClose', type: '(reason, event) => void', default: '—', description: "close · action · timeout 사유를 전달합니다." },
  ], 'Next.js는 @uxkm/react/snackbar를 재사용합니다.'),
  section('Vue · Nuxt API', [
    { name: 'message · color · size · motion · placement · role', type: 'string', default: "'Snackbar' · 'info' · 'md' · 'fade' · 'bottom-center' · 'status'", description: '콘텐츠와 표현 옵션입니다.' },
    { name: 'closable · show-icon · round', type: 'boolean', default: 'false · true · false', description: '표시 옵션입니다.' },
    { name: 'duration', type: 'number', default: '0', description: '자동 닫기 시간(ms)입니다.' },
    { name: 'default · icon · action', type: 'slot', default: '—', description: '메시지, 아이콘, 액션 슬롯입니다.' },
    { name: '@close', type: 'event', default: '—', description: '닫기 사유와 원본 이벤트를 전달합니다.' },
  ], 'Nuxt는 @uxkm/vue/snackbar를 재사용합니다.'),
  section('HTML · Gulp', [
    { name: 'snackbar · snackbar_message', type: 'class', default: '—', description: '루트와 메시지 영역입니다.' },
    { name: 'snackbar_sm · snackbar_lg · snackbar_round', type: 'class', default: '—', description: '크기와 형태입니다.' },
    { name: 'snackbar_motion-* · snackbar_placement-*', type: 'class', default: '—', description: '모션과 위치입니다.' },
    { name: 'data-snackbar-close · data-snackbar-duration', type: 'attribute', default: '— · 0', description: '닫기 트리거와 자동 닫기 시간입니다.' },
    { name: 'snackbar_region-{placement}', type: 'class', default: '—', description: '뷰포트 기준 8개 위치 영역입니다.' },
  ]),
  section('디자인 토큰', [
    { name: '--snackbar-min-width · --snackbar-max-width', type: 'length', default: '18rem · 36rem', description: '최소·최대 너비입니다.' },
    { name: '--snackbar-padding-* · --snackbar-gap', type: 'length', default: '크기별 값', description: '패딩과 내부 간격입니다.' },
    { name: '--snackbar-motion-duration · --snackbar-motion-distance', type: 'time · length', default: '200ms · 1rem', description: '모션 시간과 거리입니다.' },
    { name: '--snackbar-region-offset · --snackbar-region-gap · --snackbar-region-z-index', type: 'length · number', default: 'space-md · space-sm · 1200', description: '화면 여백, 스택 간격, 레이어입니다.' },
  ]),
  section(
    'WebSquare API · XML',
    [
      {
        name: 'w2:group.snackbar',
        type: 'XML element · class',
        default: "role='status'",
        description: 'Snackbar 루트입니다. color_*와 snackbar_sm·snackbar_lg·snackbar_round를 조합합니다.',
      },
      {
        name: 'w2:group.snackbar_region-*',
        type: 'XML element · class',
        default: '—',
        description: '뷰포트 기준 배치 영역입니다. 같은 위치의 Snackbar를 세로로 쌓습니다.',
      },
      {
        name: 'snackbar_motion-* · data-snackbar-duration',
        type: 'class · attribute',
        default: 'fade · 0',
        description: '등장·퇴장 모션과 자동 닫기 시간(ms)입니다.',
      },
      {
        name: 'xf:trigger.snackbar_close · snackbar_action',
        type: 'XML element · class',
        default: '—',
        description: '닫기 버튼과 후속 액션을 구성합니다.',
      },
      {
        name: 'ev:onclick',
        type: 'WebSquare event',
        default: '—',
        description: '닫기·액션 클릭 시 화면 스크립트를 실행합니다.',
      },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
