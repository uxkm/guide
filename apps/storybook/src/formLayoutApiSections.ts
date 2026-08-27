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
const vueRows = (rows: ApiRow[]) =>
  rows.map((row) => ({
    ...row,
    name: row.name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`),
  }));

const layoutProps: ApiRow[] = [
  {
    name: 'as',
    type: 'string | component',
    default: "'form'",
    description: '렌더링할 루트 요소 또는 컴포넌트입니다.',
  },
  {
    name: 'layout',
    type: "'vertical' | 'horizontal' | 'inline'",
    default: "'vertical'",
    description: '필드 배치 방향입니다.',
  },
  {
    name: 'fit',
    type: 'boolean',
    default: 'false',
    description: '입력 영역을 공통 최대 너비로 제한합니다.',
  },
  { name: 'compact', type: 'boolean', default: 'false', description: '필드 사이 간격을 줄입니다.' },
  {
    name: 'labelAlign',
    type: "'end' | 'start'",
    default: "'end'",
    description: '가로 레이아웃의 레이블 정렬입니다.',
  },
  {
    name: 'labelWidth',
    type: "'' | 'sm' | 'lg'",
    default: "''",
    description: '가로 레이아웃의 레이블 열 너비입니다.',
  },
];
const fieldProps: ApiRow[] = [
  {
    name: 'as',
    type: 'string | component',
    default: "'div'",
    description: 'FormField 루트 요소입니다.',
  },
  { name: 'label', type: 'ReactNode | string', default: '—', description: '필드 레이블입니다.' },
  {
    name: 'htmlFor / for',
    type: 'string',
    default: '—',
    description: '레이블과 컨트롤을 연결할 id입니다.',
  },
  {
    name: 'required',
    type: 'boolean',
    default: 'false',
    description:
      '시각적 별표와 스크린 리더용 “필수 항목” 텍스트를 추가합니다. 실제 컨트롤에도 required를 지정해야 합니다.',
  },
  {
    name: 'hint · error · success',
    type: 'ReactNode | string',
    default: '—',
    description: '도움말, 오류, 성공 메시지입니다. 오류는 도움말보다 우선합니다.',
  },
  { name: 'fit', type: 'boolean', default: 'false', description: '개별 필드 너비를 제한합니다.' },
];

export const formLayoutApiSections: ApiSectionData[] = [
  table(
    'React · Next.js API · FormLayout Props',
    [
      ...layoutProps,
      {
        name: 'children',
        type: 'ReactNode',
        default: '—',
        description: 'FormField와 FormActions 콘텐츠입니다.',
      },
      {
        name: 'className · ...props',
        type: 'string · form attributes',
        default: '—',
        description: '추가 클래스와 네이티브 form 속성입니다.',
      },
    ],
    'Next.js는 `@uxkm/react/form-layout`을 재사용합니다.',
  ),
  table('React · Next.js API · FormField / FormActions', [
    ...fieldProps,
    {
      name: 'FormActions.as · children',
      type: 'string · ReactNode',
      default: "'div' · —",
      description: '제출·취소 같은 폼 액션 영역입니다.',
    },
  ]),
  table(
    'Vue · Nuxt API · FormLayout Props',
    vueRows(layoutProps),
    'Nuxt는 `@uxkm/vue/form-layout`을 재사용합니다.',
  ),
  table('Vue · Nuxt API · FormField / FormActions', vueRows(fieldProps)),
  table('HTML · Gulp · 공통 클래스', [
    {
      name: 'form · form_vertical · form_horizontal · form_inline',
      type: 'class',
      default: '—',
      description: '폼 루트와 배치 방식입니다.',
    },
    {
      name: 'form_fit · form_compact',
      type: 'class',
      default: '—',
      description: '최대 너비와 조밀한 간격 변형입니다.',
    },
    {
      name: 'form_label-align-start · form_label-width-sm/lg',
      type: 'class',
      default: '—',
      description: '가로 레이블 정렬과 열 너비입니다.',
    },
    {
      name: 'form_field · form_field-label · form_field-control',
      type: 'class',
      default: '—',
      description: '필드, 레이블, 컨트롤 구조입니다.',
    },
    {
      name: 'form_field-required · form_field-required-text',
      type: 'class',
      default: '—',
      description: '시각적 별표와 보조기술용 필수 항목 텍스트입니다.',
    },
    {
      name: 'form_field-hint · form_field-error · form_field-success',
      type: 'class',
      default: '—',
      description: '도움말과 상태 메시지입니다.',
    },
    {
      name: 'form_actions',
      type: 'class',
      default: '—',
      description: '폼 하단 또는 인라인 액션 영역입니다.',
    },
  ]),
  table('공통 API · 디자인 토큰', [
    {
      name: '--form-label-width · --form-label-width-sm · --form-label-width-lg',
      type: 'length',
      default: '7.5rem · 5rem · 10rem',
      description: '가로 레이아웃 레이블 열 너비입니다.',
    },
    {
      name: '--form-field-gap',
      type: 'length',
      default: 'var(--space-lg)',
      description: '필드 사이 세로 간격입니다.',
    },
    {
      name: '--form-inline-field-min-width',
      type: 'length',
      default: '8rem',
      description: '인라인 입력의 최소 너비입니다.',
    },
    {
      name: '--form-actions-gap',
      type: 'length',
      default: 'var(--space-sm)',
      description: '액션 버튼 사이 간격입니다.',
    },
    {
      name: '--input-max-width',
      type: 'length',
      default: '320px',
      description: 'fit 변형에서 공유하는 입력 최대 너비입니다.',
    },
  ]),
  table(
    'WebSquare API · XML',
    [
      {
        name: 'w2:group.form',
        type: 'XML element · class',
        default: '—',
        description:
          'FormLayout 루트입니다. tagname="form"과 form_vertical/horizontal/inline 클래스를 조합합니다.',
      },
      {
        name: 'w2:group.form_field',
        type: 'XML element · class',
        default: '—',
        description: '레이블, 입력 컨트롤, 상태 메시지를 묶는 필드 블록입니다.',
      },
      {
        name: 'w2:group.form_field-label',
        type: 'XML element · for',
        default: '—',
        description: 'tagname="label"과 for로 입력 컴포넌트 id를 연결합니다.',
      },
      {
        name: 'w2:group.form_field-control',
        type: 'XML element · class',
        default: '—',
        description:
          'xf:input, xf:select1 등 실제 WebSquare 입력 컴포넌트를 배치하고 필수 입력에는 mandatory를 설정합니다.',
      },
      {
        name: 'w2:textbox.form_field-hint/error/success',
        type: 'XML element · class',
        default: '—',
        description:
          '도움말, 오류, 성공 상태 메시지를 표시합니다. 오류 메시지는 role="alert"를 함께 사용합니다.',
      },
      {
        name: 'w2:group.form_actions',
        type: 'XML element · class',
        default: '—',
        description: 'xf:trigger로 구성한 제출·취소 액션을 현재 폼 레이아웃에 맞춰 정렬합니다.',
      },
      {
        name: 'ev:onclick',
        type: 'WebSquare event',
        default: '—',
        description: '저장, 검색, 취소 같은 화면 스크립트 함수를 실행합니다.',
      },
      {
        name: 'data:* · ref',
        type: 'DataCollection binding',
        default: '—',
        description: '입력값을 DataMap 또는 DataList 경로에 바인딩합니다.',
      },
    ],
    'WebSquare는 화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment를 사용합니다.',
  ),
];
