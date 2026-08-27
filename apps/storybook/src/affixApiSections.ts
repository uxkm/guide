import type { ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const columns = [{ key: 'name', label: '이름' }, { key: 'type', label: '타입' }, { key: 'default', label: '기본값' }, { key: 'description', label: '설명' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
export const affixApiSections: ApiSectionData[] = [
  section('Affix API', [
    { name: 'target', type: 'string', default: 'window', description: '스크롤 컨테이너 CSS 선택자입니다.' }, { name: 'offsetTop', type: 'number | string', default: '0', description: '상단 고정 간격(px)입니다.' }, { name: 'offsetBottom', type: 'number | string', default: '—', description: '지정하면 하단 고정 모드로 동작합니다.' }, { name: 'skin', type: "'' | 'bar' | 'anchor'", default: "''", description: '액션 바 또는 앵커 스킨입니다.' }, { name: 'interactive', type: 'boolean', default: 'true', description: 'Affix 런타임 활성 여부입니다.' },
  ]),
  section('HTML · 상태', [
    { name: 'data-affix', type: 'attribute', default: '—', description: 'Affix를 초기화합니다.' }, { name: 'data-target', type: 'attribute', default: 'window', description: '스크롤 컨테이너를 연결합니다.' }, { name: 'data-offset-top · data-offset-bottom', type: 'attribute', default: '—', description: '고정 방향과 간격을 설정합니다.' }, { name: 'is-affixed · is-fixed', type: 'class', default: '—', description: '런타임이 적용하는 고정 상태입니다.' },
  ]),
  section(
    'WebSquare API · XML',
    [
      { name: 'w2:group.affix', type: 'XML element · class', default: '—', description: 'Affix 루트입니다. data-target과 data-offset-top/bottom으로 고정 동작을 설정합니다.' },
      { name: 'affix_target · affix_bar · affix_anchor', type: 'class', default: '—', description: '고정 대상과 액션 바·앵커 스킨입니다.' },
      { name: 'is-affixed · is-fixed', type: 'class', default: '—', description: '런타임 고정 상태입니다.' },
      { name: 'xf:trigger', type: 'XML element', default: '—', description: '고정 바 안의 액션 버튼을 구성합니다.' },
    ],
    '화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.',
  ),
];
