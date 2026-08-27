import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const table = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const datePickerApiSections: ApiSectionData[] = [
  table('React · Next.js API · Props', [
    { name: 'value · defaultValue', type: 'YYYY-MM-DD string', default: "''", description: '제어 값과 비제어 초기 값입니다.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '트리거 높이와 글자 크기입니다.' },
    { name: 'min · max', type: 'YYYY-MM-DD string', default: '—', description: '선택할 수 있는 날짜 범위입니다.' },
    { name: 'fit · block', type: 'boolean', default: 'false', description: '제한 너비와 전체 너비 변형입니다.' },
    { name: 'disabled · error · success', type: 'boolean', default: 'false', description: '비활성 및 검증 상태입니다.' },
    { name: 'clearable', type: 'boolean', default: 'true', description: '선택한 날짜를 지우는 동작을 표시합니다.' },
    { name: 'panelAlign', type: "'start' | 'end'", default: "'start'", description: '달력 패널의 정렬 방향입니다.' },
    { name: 'onChange', type: '(value: string) => void', default: '—', description: 'YYYY-MM-DD 값이 바뀔 때 호출됩니다.' }
  ], 'Next.js는 @uxkm/react/date-picker를 재사용합니다.'),
  table('Vue · Nuxt API', [
    { name: 'v-model / model-value', type: 'YYYY-MM-DD string', default: "''", description: '선택 값과 update:modelValue 이벤트입니다.' },
    { name: 'size · min · max', type: 'string', default: "'md' · — · —", description: '크기와 선택 가능 범위입니다.' },
    { name: 'fit · block · disabled · error · success', type: 'boolean', default: 'false', description: '너비 및 상태입니다.' },
    { name: 'clearable', type: 'boolean', default: 'true', description: '초기화 버튼 표시 여부입니다.' },
    { name: '@change', type: '(value: string) => void', default: '—', description: '날짜 변경 이벤트입니다.' }
  ], 'Nuxt는 @uxkm/vue/date-picker를 재사용합니다.'),
  table('HTML · Gulp', [
    { name: 'data-value · data-min · data-max', type: 'YYYY-MM-DD', default: '—', description: '초기 값과 선택 범위입니다.' },
    { name: 'change', type: 'CustomEvent', default: '—', description: 'detail.value로 선택 값을 제공합니다.' },
    { name: 'date_picker_sm · date_picker_lg', type: 'class', default: '—', description: '크기 변형입니다.' },
    { name: 'date_picker_fit · date_picker_block', type: 'class', default: '—', description: '제한 너비와 전체 너비입니다.' },
    { name: 'is-error · is-success · is-disabled', type: 'class', default: '—', description: '상태 클래스입니다.' }
  ]),
  table('디자인 토큰', [
    { name: '--date-picker-input-padding-*', type: 'length', default: '크기별 값', description: '트리거 입력 영역의 안쪽 여백입니다.' },
    { name: '--date-picker-btn-size', type: 'length', default: '2.25rem', description: '달력 버튼 크기입니다.' },
    { name: '--date-picker-icon-size', type: 'length', default: '1rem', description: '달력 아이콘 크기입니다.' }
  ]),
  table(
    'WebSquare API · XML',
    [
      {
        name: 'w2:inputCalendar',
        type: 'XML element',
        default: '—',
        description: '날짜 입력·달력 컴포넌트입니다. placeholder, disabled, calendarValueType 속성을 조합합니다.',
      },
      {
        name: 'ref · data:*',
        type: 'DataCollection binding',
        default: '—',
        description: '선택 날짜를 DataMap 경로에 양방향 바인딩합니다.',
      },
      {
        name: 'calendarValueType · minYear · maxYear',
        type: 'WebSquare property',
        default: 'yearMonthDate',
        description: '값 형식과 선택 가능 연도 범위를 설정합니다.',
      },
      {
        name: 'w2:group.date_picker · date_picker_trigger',
        type: 'XML element · class',
        default: '—',
        description: '날짜 선택 트리거와 패널 래퍼 구조를 만듭니다.',
      },
      {
        name: 'ev:onchange',
        type: 'WebSquare event',
        default: '—',
        description: '날짜 변경 후 연관 데이터 갱신이나 검증 함수를 실행합니다.',
      },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
