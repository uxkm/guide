import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const table = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
const props: ApiRow[] = [
  { name: 'value · defaultValue', type: 'string | number', default: "— · ''", description: '제어 값과 비제어 초기 값입니다.' },
  { name: 'type', type: 'HTML input type', default: "'text'", description: '텍스트, 이메일, 비밀번호, 숫자, 검색 등의 입력 타입입니다.' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '입력 높이와 글자 크기입니다.' },
  { name: 'placeholder', type: 'string', default: '—', description: '값이 없을 때 표시할 안내입니다.' },
  { name: 'disabled · readOnly', type: 'boolean', default: 'false', description: '비활성 및 읽기 전용 상태입니다.' },
  { name: 'error', type: 'boolean', default: 'false', description: 'is-error와 aria-invalid를 적용합니다.' },
  { name: 'block', type: 'boolean', default: 'false', description: 'input_block 클래스를 적용합니다.' },
  { name: 'clearable', type: 'boolean', default: 'false', description: '값이 있을 때 접근 가능한 지우기 버튼을 표시합니다.' },
  { name: 'prefix · suffix', type: 'ReactNode', default: '—', description: '앞뒤 input_group-addon 콘텐츠입니다.' },
  { name: 'className · ...props', type: 'string · input attributes', default: '—', description: '추가 클래스와 네이티브 input 속성입니다.' }
];

export const inputApiSections: ApiSectionData[] = [
  table('React · Next.js API · Props', props, 'Next.js는 @uxkm/react/input을 재사용합니다.'),
  table('React · Next.js API · Events', [{ name: 'onChange · onPaste · onClear', type: 'event handler', default: '—', description: '값 변경, 붙여넣기, 지우기 콜백입니다.' }]),
  table('Vue · Nuxt API', [
    { name: 'v-model / model-value', type: 'string | number', default: "''", description: '입력 값과 update:modelValue 이벤트입니다.' },
    { name: 'size · type · placeholder', type: 'string', default: "'md' · 'text' · —", description: '크기, 타입, 안내 문구입니다.' },
    { name: 'disabled · error · block · clearable', type: 'boolean', default: 'false', description: '상태와 표시 옵션입니다.' },
    { name: '#prefix · #suffix', type: 'slot', default: '—', description: '앞뒤 애드온 슬롯입니다.' },
    { name: '@clear', type: 'event', default: '—', description: '지우기 버튼을 누를 때 발생합니다.' }
  ], 'Nuxt는 @uxkm/vue/input을 재사용합니다.'),
  table('HTML · Gulp · 클래스', [
    { name: 'input · input_sm · input_lg · input_fit', type: 'class', default: '—', description: '입력 루트, 크기, 최대 너비입니다.' },
    { name: 'display_contents · input_group-label_hidden', type: 'class', default: '—', description: '암묵적 label 래퍼와 화면에 숨긴 label 텍스트입니다.' },
    { name: 'input_group · input_group-addon', type: 'class', default: '—', description: '앞뒤 애드온 그룹입니다.' },
    { name: 'input_clearable · input_clear', type: 'class', default: '—', description: '입력 지우기 래퍼와 버튼입니다.' },
    { name: 'input_split · input_otp · input_row', type: 'class', default: '—', description: '분할 입력, OTP, 복합 행 패턴입니다.' },
    { name: 'is-error · is-success · input_masked', type: 'class', default: '—', description: '검증 및 마스킹 상태입니다.' }
  ]),
  table('디자인 토큰', [
    { name: '--input-max-width', type: 'length', default: '320px', description: 'fit 변형의 최대 너비입니다.' },
    { name: '--input-clear-size · --input-clear-offset', type: 'length', default: '1.25rem · .75rem', description: '지우기 버튼 크기와 위치입니다.' },
    { name: '--input-font-masked · --input-masked-letter-spacing', type: 'font · length', default: "'pass' · .08em", description: '비밀번호 마스킹 표시입니다.' }
  ])
];
