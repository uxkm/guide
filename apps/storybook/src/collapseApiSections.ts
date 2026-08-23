import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[]): ApiSectionData => ({ title, tables: [{ columns, rows }] });

export const collapseApiSections: ApiSectionData[] = [
  section('Collapse API', [
    { name: 'variant', type: "'bordered' | 'ghost' | 'card'", default: "'bordered'", description: '패널 그룹의 외형을 선택합니다.' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '트리거와 본문 여백 크기입니다.' },
    { name: 'accordion', type: 'boolean', default: 'false', description: '한 번에 하나의 패널만 열 수 있습니다.' },
    { name: 'effect', type: "'slide'", default: '—', description: '높이 슬라이드 전환을 적용합니다.' },
  ]),
  section('CollapsePanel API', [
    { name: 'label', type: 'string', default: "''", description: '기본 트리거 제목입니다.' },
    { name: 'title · #title', type: 'ReactNode · slot', default: 'label', description: '아이콘·배지 등 커스텀 제목 콘텐츠입니다.' },
    { name: 'content · children · default slot', type: 'string · node', default: '—', description: '패널 본문입니다.' },
    { name: 'open', type: 'boolean', default: 'false', description: '초기 열림 상태입니다.' },
    { name: 'disabled', type: 'boolean', default: 'false', description: '패널을 비활성화하고 키보드 탐색에서 제외합니다.' },
    { name: 'extra · #extra', type: 'ReactNode · slot', default: '—', description: '제목 오른쪽의 보조 정보입니다.' },
  ]),
  section('CollapseExternal API', [
    { name: 'triggerLabel', type: 'string', default: "''", description: '외부 트리거 버튼 텍스트입니다.' },
    { name: 'lead · #lead', type: 'ReactNode · slot', default: '—', description: '트리거 위 안내 콘텐츠입니다.' },
    { name: 'children · default slot', type: 'ReactNode', default: '—', description: '접히는 본문입니다.' },
    { name: 'open', type: 'boolean', default: 'false', description: '초기 열림 상태입니다.' },
    { name: 'boxed', type: 'boolean', default: 'true', description: '본문에 패딩·테두리·배경을 적용합니다.' },
    { name: 'effect', type: "'slide'", default: '—', description: '높이 슬라이드 전환을 적용합니다.' },
  ]),
  section('HTML 속성 · 키보드', [
    { name: 'data-collapse', type: 'attribute', default: '—', description: 'HTML/Gulp 패널 그룹을 초기화합니다.' },
    { name: 'data-collapse-trigger', type: 'attribute', default: '—', description: 'aria-controls 대상인 독립 접힘 영역을 제어합니다.' },
    { name: 'data-collapse-accordion', type: 'attribute', default: '—', description: 'HTML/Gulp에서 단일 열기 모드를 사용합니다.' },
    { name: 'ArrowUp · ArrowDown · Home · End', type: 'key', default: '—', description: '활성 패널 트리거 사이에서 포커스를 이동합니다.' },
    { name: 'aria-expanded · aria-controls', type: 'attribute', default: '—', description: '트리거 상태와 연결 패널을 제공합니다.' },
  ]),
  section('디자인 토큰', [
    { name: '--collapse-trigger-padding-y · --collapse-trigger-padding-x', type: 'length', default: '0.875rem · space-lg', description: '트리거 여백입니다.' },
    { name: '--collapse-content-padding-y · --collapse-content-padding-x', type: 'length', default: 'space-lg', description: '패널 본문 여백입니다.' },
    { name: '--collapse-icon-size', type: 'length', default: '1rem', description: '펼침 아이콘 크기입니다.' },
    { name: '--collapse-slide-duration · --collapse-slide-easing', type: 'time · easing', default: '0.28s · ease', description: '슬라이드 전환 설정입니다.' },
  ]),
];
