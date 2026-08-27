import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const table = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
const props: ApiRow[] = [
  { name: 'label · children', type: 'string · ReactNode', default: '—', description: '레이블 텍스트 또는 사용자 정의 레이블 콘텐츠입니다.' },
  { name: 'name · value', type: 'string', default: '—', description: '라디오 그룹 이름과 제출 값입니다.' },
  { name: 'checked · defaultChecked', type: 'boolean', default: 'false', description: '제어 및 비제어 선택 상태입니다.' },
  { name: 'disabled · labelEnd · button', type: 'boolean', default: 'false', description: '비활성, 레이블 배치, 버튼형 변형입니다.' },
  { name: 'ripple', type: 'boolean', default: 'true', description: '전체 Radio 영역을 기준으로 클릭 파장 효과를 표시합니다.' },
  { name: 'ariaLabel', type: 'string', default: '—', description: '보이는 레이블이 없는 단독 라디오의 접근 가능한 이름입니다.' },
  { name: 'className · ...props', type: 'string · input attributes', default: '—', description: '루트 클래스와 네이티브 radio 속성입니다.' }
];
export const radioApiSections: ApiSectionData[] = [
  table('React · Next.js API · Props', props, 'Next.js는 @uxkm/react/radio를 재사용합니다.'),
  table('React · Next.js API · Events', [{ name: 'onChange', type: '(event) => void', default: '—', description: '선택 상태 변경 콜백입니다.' }]),
  table('Vue · Nuxt API', [{ name: 'label · #default', type: 'string · slot', default: '—', description: '레이블 콘텐츠입니다.' }, ...props.slice(1, 5)], 'Nuxt는 @uxkm/vue/radio를 재사용합니다.'),
  table('HTML · Gulp · 클래스', [{ name: 'radio · radio_control · radio_input · radio_box', type: 'class', default: '—', description: '라디오 루트와 입력·커스텀 원입니다.' }, { name: 'radio_label · radio_content · radio_hint', type: 'class', default: '—', description: '레이블과 보조 설명입니다.' }, { name: 'radio_label-end · radio_button · radio_block', type: 'class', default: '—', description: '레이아웃·버튼·너비 변형입니다.' }, { name: 'radio_group · radio_card · radio_card-clickable', type: 'class', default: '—', description: '그룹과 카드형 조합입니다.' }]),
  table('디자인 토큰', [{ name: '--radio-size · --radio-size-sm · --radio-size-lg', type: 'length', default: 'var(--checkbox-size) · … · …', description: '라디오 원 크기입니다.' }, { name: '--radio-gap · --radio-radius', type: 'length', default: 'var(--checkbox-gap) · 50%', description: '레이블 간격과 원형 모서리입니다.' }, { name: '--radio-button-padding-y · --radio-button-padding-x', type: 'length', default: 'var(--checkbox-button-padding-y) · var(--checkbox-button-padding-x)', description: '버튼형 패딩입니다.' }]),
  table(
    'WebSquare API · XML',
    [
      {
        name: 'xf:input[type=radio]',
        type: 'XML element',
        default: "type='radio'",
        description: '디자인 시스템 마크업을 유지한 개별 라디오 입력입니다. 같은 name으로 그룹을 만듭니다.',
      },
      {
        name: 'xf:select1',
        type: 'XML element',
        default: '—',
        description: '선택지 DataList를 바인딩하는 단일 선택 컴포넌트입니다. 라디오 UI가 필요하면 appearance를 조합합니다.',
      },
      {
        name: 'ref · name · value · data:*',
        type: 'DataCollection binding',
        default: '—',
        description: '선택값과 그룹 이름을 DataMap 경로에 바인딩합니다.',
      },
      {
        name: 'w2:group.radio · radio_group · radio_card',
        type: 'XML element · class',
        default: '—',
        description: '단일 라디오, 그룹, 카드형 조합 구조를 만듭니다.',
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
