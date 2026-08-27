import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const table = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
const props: ApiRow[] = [
  { name: 'label · children', type: 'string · ReactNode', default: '—', description: '레이블 텍스트 또는 사용자 정의 레이블 콘텐츠입니다.' },
  { name: 'checked · defaultChecked', type: 'boolean', default: 'false', description: '제어 및 비제어 체크 상태입니다.' },
  { name: 'disabled · indeterminate', type: 'boolean', default: 'false', description: '비활성 및 부분 선택 상태입니다.' },
  { name: 'labelEnd · button', type: 'boolean', default: 'false', description: '레이블 우선 배치 및 버튼형 변형입니다.' },
  { name: 'ripple', type: 'boolean', default: 'true', description: '전체 Checkbox 영역을 기준으로 클릭 파장 효과를 표시합니다.' },
  { name: 'ariaLabel', type: 'string', default: '—', description: '보이는 레이블이 없는 단독 체크박스의 접근 가능한 이름입니다.' },
  { name: 'className · ...props', type: 'string · input attributes', default: '—', description: '루트 클래스와 네이티브 checkbox 속성입니다.' }
];
export const checkboxApiSections: ApiSectionData[] = [
  table('React · Next.js API · Props', props, 'Next.js는 @uxkm/react/checkbox를 재사용합니다.'),
  table('React · Next.js API · Events', [{ name: 'onChange', type: '(event) => void', default: '—', description: '체크 상태 변경 콜백입니다.' }]),
  table('Vue · Nuxt API', [{ name: 'label · #default', type: 'string · slot', default: '—', description: '레이블 콘텐츠입니다.' }, ...props.slice(1, 5)], 'Nuxt는 @uxkm/vue/checkbox를 재사용합니다.'),
  table('HTML · Gulp · 클래스', [{ name: 'checkbox · checkbox_control · checkbox_input · checkbox_box', type: 'class', default: '—', description: '체크박스 루트와 입력·커스텀 박스입니다.' }, { name: 'checkbox_label · checkbox_content · checkbox_hint', type: 'class', default: '—', description: '레이블과 보조 설명입니다.' }, { name: 'checkbox_label-end · checkbox_button · checkbox_block', type: 'class', default: '—', description: '레이아웃·버튼·너비 변형입니다.' }, { name: 'checkbox_group · checkbox_card · checkbox_card-clickable', type: 'class', default: '—', description: '그룹과 카드형 조합입니다.' }]),
  table('디자인 토큰', [{ name: '--checkbox-size · --checkbox-size-sm · --checkbox-size-lg', type: 'length', default: '1rem · 0.875rem · 1.125rem', description: '체크박스 박스 크기입니다.' }, { name: '--checkbox-gap · --checkbox-radius', type: 'length', default: 'var(--space-sm) · 4px', description: '레이블 간격과 모서리입니다.' }, { name: '--checkbox-button-padding-y · --checkbox-button-padding-x', type: 'length', default: '0.35rem · 0.75rem', description: '버튼형 패딩입니다.' }]),
  table(
    'WebSquare API · XML',
    [
      {
        name: 'xf:checkbox',
        type: 'XML element',
        default: '—',
        description: '체크 입력 컴포넌트입니다. trueValue·falseValue·disabled·checked 속성을 조합합니다.',
      },
      {
        name: 'ref · data:*',
        type: 'DataCollection binding',
        default: '—',
        description: '체크 상태를 DataMap 경로에 양방향 바인딩합니다.',
      },
      {
        name: 'trueValue · falseValue',
        type: 'WebSquare property',
        default: 'Y · N',
        description: '선택·미선택 시 저장할 값을 정의합니다.',
      },
      {
        name: 'w2:group.checkbox · checkbox_group · checkbox_card',
        type: 'XML element · class',
        default: '—',
        description: '단일 체크박스, 그룹, 카드형 조합 구조를 만듭니다.',
      },
      {
        name: 'ev:onchange',
        type: 'WebSquare event',
        default: '—',
        description: '체크 상태 변경 후 연관 데이터 갱신이나 검증 함수를 실행합니다.',
      },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
