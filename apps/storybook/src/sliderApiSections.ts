import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [
  { key: 'name', label: '이름' }, { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }
];
const table = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
const props: ApiRow[] = [
  { name: 'value · defaultValue', type: 'number', default: '50', description: '현재 값과 초기값입니다.' },
  { name: 'min · max · step', type: 'number', default: '0 · 100 · 1', description: '값의 범위와 증감 단위입니다.' },
  { name: 'size', type: `'sm' | 'md' | 'lg'`, default: 'md', description: '트랙·썸·값 텍스트 크기입니다.' },
  { name: 'disabled · vertical', type: 'boolean', default: 'false', description: '비활성 상태와 방향입니다.' },
  { name: 'label · showValue · valueSuffix · hint', type: 'string · boolean', default: '—', description: '레이블, 현재 값, 단위 및 보조 설명입니다.' },
  { name: 'stepper · stepperAlways', type: 'boolean', default: 'false', description: '증감 버튼을 모바일 또는 항상 표시합니다.' },
  { name: 'decreaseLabel · increaseLabel', type: 'string', default: '값 줄이기 · 값 늘리기', description: '증감 버튼의 접근 가능한 이름입니다.' },
  { name: 'ripple', type: 'boolean', default: 'true', description: 'Slider 영역과 증감 버튼에 클릭 파장 효과를 표시합니다.' },
  { name: 'className · ...props', type: 'string · range attributes', default: '—', description: '루트 클래스와 네이티브 range 속성입니다.' }
];

export const sliderApiSections: ApiSectionData[] = [
  table('React · Next.js API · Props', props, 'Next.js는 @uxkm/react/slider를 재사용합니다.'),
  table('React · Next.js API · Events', [{ name: 'onChange', type: '(value: number) => void', default: '—', description: '값 변경 콜백입니다.' }]),
  table('Vue · Nuxt API', [{ name: 'modelValue · update:modelValue', type: 'number · event', default: '50', description: 'v-model 값과 변경 이벤트입니다.' }, ...props.slice(1, 8)], 'Nuxt는 @uxkm/vue/slider를 재사용합니다.'),
  table('HTML · Gulp · 클래스', [
    { name: 'slider · slider_input', type: 'class', default: '—', description: '슬라이더 루트와 네이티브 range입니다.' },
    { name: 'slider_header · slider_label · slider_value · slider_hint', type: 'class', default: '—', description: '레이블, 값 및 설명입니다.' },
    { name: 'slider_sm · slider_lg · slider_fit · slider_block', type: 'class', default: '—', description: '크기와 너비 변형입니다.' },
    { name: 'slider_control · slider_stepper · slider_stepper_always · slider_step', type: 'class', default: '—', description: '증감 버튼 구조와 표시 방식입니다.' },
    { name: 'slider_ticks · slider_tick', type: 'class', default: '—', description: '눈금 구조입니다.' }
  ]),
  table('디자인 토큰', [
    { name: '--slider-track-height · --slider-thumb-size', type: 'length', default: '4px · 14px', description: '기본 트랙과 썸 크기입니다.' },
    { name: '--slider-max-width', type: 'length', default: 'var(--input-max-width)', description: 'slider_fit의 최대 너비입니다.' },
    { name: '--slider-step-size · --slider-step-gap', type: 'length', default: '2.25rem · var(--space-sm)', description: '증감 버튼 크기와 간격입니다.' }
  ]),
  table(
    'WebSquare API · XML',
    [
      {
        name: 'xf:input[type=range]',
        type: 'XML element',
        default: "type='range'",
        description: '범위 입력 컴포넌트입니다. min, max, step, value, disabled 속성을 조합합니다.',
      },
      {
        name: 'ref · data:*',
        type: 'DataCollection binding',
        default: '—',
        description: '슬라이더 값을 DataMap 경로에 양방향 바인딩합니다.',
      },
      {
        name: 'w2:group.slider · slider_control · slider_stepper',
        type: 'XML element · class',
        default: '—',
        description: '슬라이더 루트와 증감 버튼 구조를 만듭니다.',
      },
      {
        name: 'xf:trigger.slider_step',
        type: 'XML element · event',
        default: '—',
        description: '값을 한 단계 줄이거나 늘리는 동작을 실행합니다.',
      },
      {
        name: 'ev:onchange',
        type: 'WebSquare event',
        default: '—',
        description: '값 변경 후 표시 갱신이나 연관 검증 함수를 실행합니다.',
      },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
