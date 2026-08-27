import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const table = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
const props: ApiRow[] = [
  { name: 'value · defaultValue', type: 'number', default: '—', description: '현재 별점과 초기 별점입니다.' },
  { name: 'count', type: 'number', default: '5', description: '표시할 별의 개수입니다.' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: '별과 값 텍스트 크기입니다.' },
  { name: 'allowHalf · clearable', type: 'boolean', default: 'false', description: '0.5점 선택과 선택 초기화 기능입니다.' },
  { name: 'readonly · readOnly · disabled', type: 'boolean', default: 'false', description: '읽기 전용 표시와 비활성 상태입니다.' },
  { name: 'legend · name', type: 'string', default: '—', description: 'fieldset 범례와 radio 그룹 이름입니다.' },
  { name: 'ripple', type: 'boolean', default: 'true', description: '각 별과 초기화 버튼 영역을 기준으로 클릭 파장 효과를 표시합니다.' },
  { name: 'className · ...props', type: 'string · fieldset attributes', default: '—', description: '루트 클래스와 네이티브 속성입니다.' }
];

export const rateApiSections: ApiSectionData[] = [
  table('React · Next.js API · Props', props, 'Next.js는 @uxkm/react/rate를 재사용합니다.'),
  table('React · Next.js API · Events', [{ name: 'onChange', type: '(value?: number) => void', default: '—', description: '별점 선택 또는 초기화 콜백입니다.' }]),
  table('Vue · Nuxt API', [{ name: 'modelValue · update:modelValue', type: 'number · event', default: '—', description: 'v-model 별점과 변경 이벤트입니다.' }, ...props.slice(1, 7)], 'Nuxt는 @uxkm/vue/rate를 재사용합니다.'),
  table('HTML · Gulp · 클래스', [
    { name: 'rate · rate_control · rate_stars · rate_star', type: 'class', default: '—', description: '별점 루트와 별 선택 구조입니다.' },
    { name: 'rate_input · rate_star-graphic · rate_star-label', type: 'class', default: '—', description: 'radio 입력, 아이콘과 접근 가능한 레이블입니다.' },
    { name: 'rate_sm · rate_lg · rate_allow-half · rate_clearable', type: 'class', default: '—', description: '크기와 기능 변형입니다.' },
    { name: 'rate_value · rate_clear · is-readonly · is-filled · is-half', type: 'class', default: '—', description: '값, 초기화 및 읽기 전용 상태입니다.' }
  ]),
  table('디자인 토큰', [
    { name: '--rate-star-size · --rate-star-size-sm · --rate-star-size-lg', type: 'length', default: '1.25rem · 1rem · 1.5rem', description: '별 아이콘 크기입니다.' },
    { name: '--rate-star-gap · --rate-clear-size', type: 'length', default: '0.125rem · 1.5rem', description: '별 간격과 초기화 버튼 크기입니다.' },
    { name: '--rate-color-filled · --rate-color-empty', type: 'color', default: 'warning · border-subtle', description: '선택 및 미선택 별 색상입니다.' }
  ]),
  table(
    'WebSquare API · XML',
    [
      {
        name: 'xf:input[type=radio]',
        type: 'XML element',
        default: "type='radio'",
        description: '별점 선택용 라디오 입력입니다. 같은 name으로 그룹을 만듭니다.',
      },
      {
        name: 'ref · name · value · data:*',
        type: 'DataCollection binding',
        default: '—',
        description: '별점 값을 DataMap 경로에 바인딩합니다.',
      },
      {
        name: 'w2:group.rate · rate_stars · rate_star',
        type: 'XML element · class',
        default: '—',
        description: '별점 루트와 별 선택 구조를 만듭니다.',
      },
      {
        name: 'xf:trigger.rate_clear',
        type: 'XML element · event',
        default: '—',
        description: '선택한 별점을 초기화하는 동작을 실행합니다.',
      },
      {
        name: 'ev:onchange',
        type: 'WebSquare event',
        default: '—',
        description: '별점 변경 후 연관 데이터 갱신이나 검증 함수를 실행합니다.',
      },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
