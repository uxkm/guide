import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';
import { calendarApiSections as calendarBaseSections } from './calendarApiSections';
import { listApiSections as listBaseSections, statApiSections as statBaseSections, tableApiSections as tableBaseSections } from './dataDisplayAdvancedApiSections';
import { timelineApiSections as timelineBaseSections, treeApiSections as treeBaseSections } from './timelineTreeApiSections';

const columns: ApiColumn[] = [
  { key: 'name', label: '이름' }, { key: 'description', label: '설명' },
  { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }
];

function appendWebSquare(sections: ApiSectionData[], description: string, rows: ApiRow[]): ApiSectionData[] {
  return [...sections, { title: 'WebSquare API · XML', description, tables: [{ columns, rows }] }];
}

const commonRows: ApiRow[] = [
  { name: 'w2:group · w2:textbox', type: 'component', default: '—', description: '구조 영역과 텍스트를 공통 CSS 클래스에 연결합니다.' },
  { name: 'class', type: 'string', default: '—', description: '컴포넌트·변형·상태 공통 클래스를 조합합니다.' },
  { name: 'role · aria-*', type: 'state', default: '—', description: '구조, 선택, 확장, 비활성 상태의 접근성 의미를 지정합니다.' },
  { name: 'DataList · w2:generator', type: 'binding', default: '선택', description: '반복 데이터를 화면 컴포넌트와 상태 클래스에 연결합니다.' }
];

export const tableApiSections = appendWebSquare(tableBaseSections, 'Table은 group과 textbox로 시맨틱 표 구조를 구성하고 반복 행을 DataList에 연결합니다.', [
  ...commonRows,
  { name: 'tagname="table|thead|tbody|tr|th|td"', type: 'semantic', default: '—', description: '표의 행·열 관계를 시맨틱 요소로 유지합니다.' },
  { name: 'table_scroll · table_sticky-*', type: 'class', default: '—', description: '스크롤 컨테이너와 고정 행·열 상태를 적용합니다.' }
]);
export const listApiSections = appendWebSquare(listBaseSections, 'List는 목록 종류에 맞는 tagname과 반복 item 구조를 사용합니다.', [
  ...commonRows,
  { name: 'tagname="ul|ol|dl|li"', type: 'semantic', default: '—', description: '불릿·번호·정의 목록의 의미를 유지합니다.' },
  { name: 'xf:trigger · w2:anchor', type: 'component', default: '—', description: '버튼형·링크형 ListItem을 구성합니다.' }
]);
export const statApiSections = appendWebSquare(statBaseSections, 'Stat은 label·value·description 영역을 화면 데이터와 연결합니다.', [
  ...commonRows,
  { name: 'label', type: 'string · binding', default: '—', description: '라벨, 값, 접두·접미, 추세 설명을 지정합니다.' },
  { name: 'stat_* · color_*', type: 'class', default: '—', description: '크기·배치·카드 스킨·추세 색상을 적용합니다.' }
]);
export const calendarApiSections = appendWebSquare(calendarBaseSections, 'Calendar는 날짜 DataList, generator 셀, 탐색 Trigger를 함께 사용합니다.', [
  ...commonRows,
  { name: 'xf:trigger', type: 'component', default: '—', description: '이전·다음 탐색과 선택 가능한 날짜 셀을 구성합니다.' },
  { name: 'ev:onclick', type: 'event', default: '—', description: '월·주 이동과 날짜 선택을 scwin 함수에 연결합니다.' },
  { name: 'aria-selected · is-*', type: 'state', default: '—', description: '선택·범위·오늘·비활성 날짜 상태를 동기화합니다.' }
]);
export const timelineApiSections = appendWebSquare(timelineBaseSections, 'Timeline은 순서 목록과 반복 item을 시간순 데이터에 연결합니다.', [
  ...commonRows,
  { name: 'tagname="ol|li|time"', type: 'semantic', default: '—', description: '순서가 있는 이벤트와 시간 의미를 유지합니다.' },
  { name: 'timeline_* · color_*', type: 'class', default: '—', description: '도트·방향·크기·상태 변형을 적용합니다.' }
]);
export const treeApiSections = appendWebSquare(treeBaseSections, 'Tree는 중첩 node 데이터와 확장·선택 상태를 동기화합니다.', [
  ...commonRows,
  { name: 'xf:trigger · w2:checkbox', type: 'component', default: '—', description: '노드 토글과 다중 선택 컨트롤을 구성합니다.' },
  { name: 'role="tree|treeitem|group"', type: 'semantic', default: '—', description: '트리와 노드의 계층 관계를 제공합니다.' },
  { name: 'aria-expanded · aria-selected', type: 'state', default: 'false', description: '노드 확장·선택 상태를 화면 데이터와 동기화합니다.' }
]);
