import type { ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
const section = (title: string, rows: ApiRow[]): ApiSectionData => ({ title, tables: [{ columns: [{ key: 'name', label: '이름' }, { key: 'type', label: '타입' }, { key: 'default', label: '기본값' }, { key: 'description', label: '설명' }], rows }] });
export const affixApiSections: ApiSectionData[] = [
  section('Affix API', [
    { name: 'target', type: 'string', default: 'window', description: '스크롤 컨테이너 CSS 선택자입니다.' }, { name: 'offsetTop', type: 'number | string', default: '0', description: '상단 고정 간격(px)입니다.' }, { name: 'offsetBottom', type: 'number | string', default: '—', description: '지정하면 하단 고정 모드로 동작합니다.' }, { name: 'skin', type: "'' | 'bar' | 'anchor'", default: "''", description: '액션 바 또는 앵커 스킨입니다.' }, { name: 'interactive', type: 'boolean', default: 'true', description: 'Affix 런타임 활성 여부입니다.' },
  ]),
  section('HTML · 상태', [
    { name: 'data-affix', type: 'attribute', default: '—', description: 'Affix를 초기화합니다.' }, { name: 'data-target', type: 'attribute', default: 'window', description: '스크롤 컨테이너를 연결합니다.' }, { name: 'data-offset-top · data-offset-bottom', type: 'attribute', default: '—', description: '고정 방향과 간격을 설정합니다.' }, { name: 'is-affixed · is-fixed', type: 'class', default: '—', description: '런타임이 적용하는 고정 상태입니다.' },
  ]),
];
