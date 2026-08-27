import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const table = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
const props: ApiRow[] = [
  { name: 'label · children', type: 'string · ReactNode', default: '—', description: '레이블 텍스트 또는 사용자 정의 레이블 콘텐츠입니다.' },
  { name: 'checked · defaultChecked', type: 'boolean', default: 'false', description: '제어 및 비제어 켜짐 상태입니다.' },
  { name: 'disabled · labelEnd', type: 'boolean', default: 'false', description: '비활성 상태와 레이블 우선 배치입니다.' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '트랙과 레이블 크기입니다.' },
  { name: 'ripple', type: 'boolean', default: 'true', description: '전체 Switch 영역을 기준으로 클릭 파장 효과를 표시합니다.' },
  { name: 'ariaLabel', type: 'string', default: '—', description: '보이는 레이블이 없는 스위치의 접근 가능한 이름입니다.' },
  { name: 'name · value · className · ...props', type: 'input attributes', default: '—', description: '폼 값, 루트 클래스, 네이티브 checkbox 속성입니다.' }
];
export const switchApiSections: ApiSectionData[] = [
  table('React · Next.js API · Props', props, 'Next.js는 @uxkm/react/switch를 재사용합니다.'),
  table('React · Next.js API · Events', [{ name: 'onChange', type: '(event) => void', default: '—', description: '켜짐 상태 변경 콜백입니다.' }]),
  table('Vue · Nuxt API', [{ name: 'label · #default', type: 'string · slot', default: '—', description: '레이블 콘텐츠입니다.' }, ...props.slice(1, 5)], 'Nuxt는 @uxkm/vue/switch를 재사용합니다.'),
  table('HTML · Gulp · 클래스', [{ name: 'switch · switch_control · switch_input', type: 'class', default: '—', description: '스위치 루트와 checkbox 입력입니다.' }, { name: 'switch_track · switch_thumb', type: 'class', default: '—', description: '트랙과 이동 손잡이입니다.' }, { name: 'switch_sm · switch_lg · switch_label-end · switch_block', type: 'class', default: '—', description: '크기·레이아웃·너비 변형입니다.' }, { name: 'switch_group · switch_group_compact · switch_group_block', type: 'class', default: '—', description: '그룹 간격과 너비입니다.' }]),
  table('디자인 토큰', [{ name: '--switch-width · --switch-height', type: 'length', default: '2.75rem · 1.5rem', description: '기본 트랙 크기입니다.' }, { name: '--switch-width-sm · --switch-width-lg', type: 'length', default: '2.25rem · 3.25rem', description: '크기 변형의 트랙 너비입니다.' }, { name: '--switch-gap · --switch-radius', type: 'length', default: '—', description: '레이블 간격과 트랙 모서리입니다.' }]),
  table(
    'WebSquare API · XML',
    [
      {
        name: 'xf:checkbox',
        type: 'XML element',
        default: '—',
        description: '스위치 입력으로 사용하는 체크 컴포넌트입니다. role="switch"와 함께 사용합니다.',
      },
      {
        name: 'ref · data:*',
        type: 'DataCollection binding',
        default: '—',
        description: '켜짐 상태를 DataMap 경로에 양방향 바인딩합니다.',
      },
      {
        name: 'trueValue · falseValue · role',
        type: 'WebSquare property',
        default: "Y · N · 'switch'",
        description: '저장값과 스위치 역할을 정의합니다.',
      },
      {
        name: 'w2:group.switch · switch_track · switch_thumb',
        type: 'XML element · class',
        default: '—',
        description: '스위치 루트와 트랙·손잡이 시각 구조를 만듭니다.',
      },
      {
        name: 'ev:onchange',
        type: 'WebSquare event',
        default: '—',
        description: '켜짐 상태 변경 후 연관 설정 갱신이나 검증 함수를 실행합니다.',
      },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
