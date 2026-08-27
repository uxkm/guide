import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [
  { key: 'name', label: '이름' },
  { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' },
  { key: 'type', label: '타입' },
];
const table = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({
  title,
  description,
  tables: [{ columns, rows }],
});

export const selectApiSections: ApiSectionData[] = [
  table(
    'React · Next.js API · Props',
    [
      {
        name: 'value · defaultValue',
        type: 'string | number | string[]',
        default: '—',
        description: '제어 값과 비제어 초기 값입니다.',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: '선택 필드의 높이와 글자 크기입니다.',
      },
      {
        name: 'placeholder',
        type: 'string',
        default: '—',
        description: '빈 값의 비활성 안내 option을 만듭니다.',
      },
      {
        name: 'nativeSize',
        type: 'number',
        default: '—',
        description: '한 번에 보이는 네이티브 option 개수입니다.',
      },
      {
        name: 'fit',
        type: 'boolean',
        default: 'false',
        description: '최대 너비를 320px로 제한합니다.',
      },
      {
        name: 'disabled · error',
        type: 'boolean',
        default: 'false',
        description: '비활성 및 오류 상태입니다.',
      },
      {
        name: 'multiple · required · ...props',
        type: 'select attributes',
        default: '—',
        description: '네이티브 select 속성을 전달합니다.',
      },
      {
        name: 'children',
        type: 'ReactNode',
        default: '—',
        description: 'option 또는 optgroup 요소입니다.',
      },
    ],
    'Next.js는 @uxkm/react/select를 재사용합니다.',
  ),
  table('React · Next.js API · Events', [
    {
      name: 'onChange',
      type: 'ChangeEvent handler',
      default: '—',
      description: '선택 값이 바뀔 때 호출됩니다.',
    },
  ]),
  table(
    'Vue · Nuxt API',
    [
      {
        name: 'v-model / model-value',
        type: 'string | number | array',
        default: '—',
        description: '선택 값과 update:modelValue 이벤트입니다.',
      },
      {
        name: 'size · placeholder · native-size',
        type: 'string | number',
        default: "'md' · — · —",
        description: '시각적 크기, 빈 값 안내, 표시 option 개수입니다.',
      },
      {
        name: 'fit · disabled · error · multiple',
        type: 'boolean',
        default: 'false',
        description: '너비, 상태, 다중 선택 옵션입니다.',
      },
      {
        name: 'default slot',
        type: 'slot',
        default: '—',
        description: 'option 또는 optgroup 요소입니다.',
      },
      {
        name: '@change',
        type: 'event',
        default: '—',
        description: '네이티브 change 이벤트입니다.',
      },
    ],
    'Nuxt는 @uxkm/vue/select를 재사용합니다.',
  ),
  table('HTML · Gulp · 클래스', [
    {
      name: 'input · input_sm · input_lg · input_fit',
      type: 'class',
      default: '—',
      description: '네이티브 select의 루트, 크기, 제한 너비입니다.',
    },
    {
      name: 'display_contents · input_group-label_hidden',
      type: 'class',
      default: '—',
      description: '암묵적 label 래퍼와 화면에 숨긴 label 텍스트입니다.',
    },
    { name: 'is-error · is-success', type: 'class', default: '—', description: '검증 상태입니다.' },
  ]),
  table('디자인 토큰', [
    {
      name: '--select-bg · --select-option-bg',
      type: 'color',
      default: 'surface',
      description: '선택 필드와 option 목록의 테마별 배경입니다.',
    },
    {
      name: '--select-text · --select-placeholder',
      type: 'color',
      default: 'text · text-muted',
      description: '선택 값과 placeholder의 대비 보장 색상입니다.',
    },
    {
      name: '--select-padding-right-*',
      type: 'length',
      default: '크기별 값',
      description: '선택 화살표를 위한 우측 여백입니다.',
    },
    {
      name: '--select-caret-offset-*',
      type: 'length',
      default: '크기별 값',
      description: '선택 화살표의 우측 위치입니다.',
    },
    {
      name: '--select-caret-size-*',
      type: 'length',
      default: '크기별 값',
      description: '선택 화살표 크기입니다.',
    },
    {
      name: '--input-max-width',
      type: 'length',
      default: '320px',
      description: 'fit 변형의 최대 너비입니다.',
    },
  ]),
  table(
    'WebSquare API · XML',
    [
      {
        name: 'xf:select1',
        type: 'XML element',
        default: '—',
        description:
          '단일 선택 컴포넌트입니다. 다중 선택이 필요한 경우 프로젝트 WebSquare 버전의 지원 컴포넌트를 사용합니다.',
      },
      {
        name: 'w2:itemset · w2:label · w2:value',
        type: 'XML element',
        default: '—',
        description: 'DataList의 표시 레이블과 실제 값을 선택 항목에 연결합니다.',
      },
      {
        name: 'ref · nodeset · data:*',
        type: 'DataCollection binding',
        default: '—',
        description: '선택값과 선택지 목록을 DataMap·DataList 경로에 바인딩합니다.',
      },
      {
        name: 'chooseOption · mandatory',
        type: 'WebSquare property',
        default: 'false',
        description: '빈 선택 안내와 필수 선택 검증을 설정합니다.',
      },
      {
        name: 'disabled · appearance',
        type: 'WebSquare property',
        default: '—',
        description: '비활성 상태와 선택 UI 표현 방식을 설정합니다.',
      },
      {
        name: 'ev:onchange',
        type: 'WebSquare event',
        default: '—',
        description: '선택값 변경 후 연관 데이터 갱신이나 검증 함수를 실행합니다.',
      },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
