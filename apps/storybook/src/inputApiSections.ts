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
const props: ApiRow[] = [
  {
    name: 'value · defaultValue',
    type: 'string | number',
    default: "— · ''",
    description: '제어 값과 비제어 초기 값입니다.',
  },
  {
    name: 'type',
    type: 'HTML input type',
    default: "'text'",
    description: '텍스트, 이메일, 비밀번호, 숫자, 검색 등의 입력 타입입니다.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    description: '입력 높이와 글자 크기입니다.',
  },
  {
    name: 'placeholder',
    type: 'string',
    default: '—',
    description: '값이 없을 때 표시할 안내입니다.',
  },
  {
    name: 'disabled · readOnly',
    type: 'boolean',
    default: 'false',
    description: '비활성 및 읽기 전용 상태입니다.',
  },
  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    description: 'is-error와 aria-invalid를 적용합니다.',
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    description: 'input_block 클래스를 적용합니다.',
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: 'false',
    description: '값이 있을 때 접근 가능한 지우기 버튼을 표시합니다.',
  },
  {
    name: 'prefix · suffix',
    type: 'ReactNode',
    default: '—',
    description: '앞뒤 input_group-addon 콘텐츠입니다.',
  },
  {
    name: 'className · ...props',
    type: 'string · input attributes',
    default: '—',
    description: '추가 클래스와 네이티브 input 속성입니다.',
  },
];

export const inputApiSections: ApiSectionData[] = [
  table('React · Next.js API · Props', props, 'Next.js는 @uxkm/react/input을 재사용합니다.'),
  table('React · Next.js API · Events', [
    {
      name: 'onChange · onPaste · onClear',
      type: 'event handler',
      default: '—',
      description: '값 변경, 붙여넣기, 지우기 콜백입니다.',
    },
  ]),
  table(
    'Vue · Nuxt API',
    [
      {
        name: 'v-model / model-value',
        type: 'string | number',
        default: "''",
        description: '입력 값과 update:modelValue 이벤트입니다.',
      },
      {
        name: 'size · type · placeholder',
        type: 'string',
        default: "'md' · 'text' · —",
        description: '크기, 타입, 안내 문구입니다.',
      },
      {
        name: 'disabled · error · block · clearable',
        type: 'boolean',
        default: 'false',
        description: '상태와 표시 옵션입니다.',
      },
      {
        name: '#prefix · #suffix',
        type: 'slot',
        default: '—',
        description: '앞뒤 애드온 슬롯입니다.',
      },
      {
        name: '@clear',
        type: 'event',
        default: '—',
        description: '지우기 버튼을 누를 때 발생합니다.',
      },
    ],
    'Nuxt는 @uxkm/vue/input을 재사용합니다.',
  ),
  table('HTML · Gulp · 클래스', [
    {
      name: 'input · input_sm · input_lg · input_fit',
      type: 'class',
      default: '—',
      description: '입력 루트, 크기, 최대 너비입니다.',
    },
    {
      name: 'display_contents · input_group-label_hidden',
      type: 'class',
      default: '—',
      description: '암묵적 label 래퍼와 화면에 숨긴 label 텍스트입니다.',
    },
    {
      name: 'input_group · input_group-addon',
      type: 'class',
      default: '—',
      description: '앞뒤 애드온 그룹입니다.',
    },
    {
      name: 'input_clearable · input_clear',
      type: 'class',
      default: '—',
      description: '입력 지우기 래퍼와 버튼입니다.',
    },
    {
      name: 'input_split · input_otp · input_row',
      type: 'class',
      default: '—',
      description: '분할 입력, OTP, 복합 행 패턴입니다.',
    },
    {
      name: 'is-error · is-success · input_masked',
      type: 'class',
      default: '—',
      description: '검증 및 마스킹 상태입니다.',
    },
  ]),
  table('디자인 토큰', [
    {
      name: '--input-max-width',
      type: 'length',
      default: '320px',
      description: 'fit 변형의 최대 너비입니다.',
    },
    {
      name: '--input-clear-size · --input-clear-offset',
      type: 'length',
      default: '1.25rem · .75rem',
      description: '지우기 버튼 크기와 위치입니다.',
    },
    {
      name: '--input-font-masked · --input-masked-letter-spacing',
      type: 'font · length',
      default: "'pass' · .08em",
      description: '비밀번호 마스킹 표시입니다.',
    },
  ]),
  table(
    'WebSquare API · XML',
    [
      {
        name: 'xf:input',
        type: 'XML element',
        default: "type='text'",
        description:
          '한 줄 입력 컴포넌트입니다. type, placeholder, disabled, readonly 속성을 조합합니다.',
      },
      {
        name: 'ref · data:*',
        type: 'DataCollection binding',
        default: '—',
        description: '입력값을 DataMap 또는 DataList 경로에 양방향 바인딩합니다.',
      },
      {
        name: 'mandatory · displayFormat · maxlength',
        type: 'WebSquare property',
        default: '—',
        description: '필수 검증, 표시 형식, 최대 입력 길이를 설정합니다.',
      },
      {
        name: 'w2:group.input_group · input_clearable',
        type: 'XML element · class',
        default: '—',
        description: '접두·접미 애드온 또는 지우기 버튼이 있는 입력 구조를 만듭니다.',
      },
      {
        name: 'xf:trigger.input_clear',
        type: 'XML element · event',
        default: '—',
        description: '입력값을 비우고 입력 컴포넌트로 포커스를 되돌리는 동작을 실행합니다.',
      },
      {
        name: 'ev:onchange · ev:oninput',
        type: 'WebSquare event',
        default: '—',
        description: '값 변경과 실시간 입력 처리를 화면 스크립트에 연결합니다.',
      },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
