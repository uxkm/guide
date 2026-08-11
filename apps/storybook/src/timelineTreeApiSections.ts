import type { ApiColumn, ApiRow, ApiSectionData } from './shared/ComponentApiDocs';

const columns: ApiColumn[] = [{ key: 'name', label: '이름' }, { key: 'description', label: '설명' }, { key: 'default', label: '기본값' }, { key: 'type', label: '타입' }];
const section = (title: string, rows: ApiRow[], description?: string): ApiSectionData => ({ title, description, tables: [{ columns, rows }] });
const vue = (rows: ApiRow[]) => rows.map((row) => ({ ...row, name: row.name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`) }));
const timelineProps: ApiRow[] = [
  { name: 'card', type: 'boolean', default: 'false', description: '콘텐츠 카드 스킨' }, { name: 'alternate', type: 'boolean', default: 'false', description: '좌우 교차 배치' },
  { name: 'horizontal', type: 'boolean', default: 'false', description: '가로 프로세스 배치' }, { name: 'labelCol', type: 'boolean', default: 'false', description: '왼쪽 날짜 레이블 열' },
  { name: 'icon', type: 'boolean', default: 'false', description: '아이콘 도트 레이아웃' }, { name: 'iconSize', type: "'sm' | 'md'", default: 'md', description: '아이콘 도트 크기' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: 'md', description: '간격과 텍스트 크기' }, { name: 'tag', type: "'ol' | 'ul'", default: 'ol', description: '시맨틱 루트' }
];
const timelineItemProps: ApiRow[] = [
  { name: 'color', type: 'string', default: 'primary', description: 'color_* 도트 색상' }, { name: 'title · description', type: 'string', default: '—', description: '제목과 설명' },
  { name: 'time · datetime', type: 'string', default: '—', description: '표시 시간과 datetime 값' }, { name: 'label · labelDatetime', type: 'string', default: '—', description: '왼쪽 레이블과 datetime 값' },
  { name: 'active · pending · outline', type: 'boolean', default: 'false', description: '진행·대기·아웃라인 상태' }, { name: 'dot · meta · children', type: 'ReactNode · slot', default: '—', description: '도트·메타·본문 커스텀 콘텐츠' }
];
export const timelineApiSections: ApiSectionData[] = [
  section('React · Next.js API · Timeline Props', timelineProps, 'Next.js는 `@uxkm/react/timeline`을 재사용합니다.'), section('React · Next.js API · TimelineItem Props', timelineItemProps),
  section('Vue · Nuxt API · Timeline Props', vue(timelineProps), 'Nuxt는 `@uxkm/vue/timeline`을 재사용합니다.'), section('Vue · Nuxt API · TimelineItem Props / Slots', vue(timelineItemProps)),
  section('HTML · Gulp · 공통 클래스', [{ name: 'timeline · timeline_item · timeline_dot · timeline_content', type: 'class', default: '—', description: '기본 구조' }, { name: 'timeline_card · timeline_alternate · timeline_horizontal · timeline_label-col', type: 'class', default: '—', description: '레이아웃 변형' }, { name: 'timeline_sm · timeline_lg · timeline_icon · timeline_icon-sm', type: 'class', default: '—', description: '크기와 아이콘 변형' }, { name: 'timeline_time · timeline_title · timeline_desc · timeline_meta · timeline_label', type: 'class', default: '—', description: '콘텐츠 파트' }]),
  section('공통 API · 디자인 토큰', [{ name: '--timeline-gap · --timeline-dot-size · --timeline-line-width', type: 'length', default: '—', description: '항목 간격과 축' }, { name: '--timeline-time-size · --timeline-title-size · --timeline-desc-size', type: 'length', default: '—', description: '타이포 크기' }, { name: '--timeline-label-width', type: 'length', default: '4.5rem', description: '날짜 레이블 열 너비' }])
];

const treeProps: ApiRow[] = [{ name: 'bordered', type: 'boolean', default: 'false', description: '테두리 스킨' }, { name: 'lines', type: 'boolean', default: 'false', description: '계층 연결선' }, { name: 'compact', type: 'boolean', default: 'false', description: '컴팩트 밀도' }, { name: 'ariaLabel', type: 'string', default: '—', description: '트리 접근성 이름' }, { name: 'multiselectable', type: 'boolean', default: 'false', description: '다중 선택 가능 상태' }];
const treeNodeProps: ApiRow[] = [{ name: 'label', type: 'string', default: '—', description: '노드 라벨' }, { name: 'expanded · selected · disabled · expandable', type: 'boolean', default: 'false', description: '확장·선택·비활성·확장 가능 상태' }, { name: 'plusToggle', type: 'boolean', default: 'false', description: '+/− 토글' }, { name: 'toggleLabel', type: 'string', default: '—', description: '토글 접근성 이름' }, { name: 'link', type: 'boolean', default: 'false', description: '클릭 가능한 라벨' }, { name: 'meta', type: 'string', default: '—', description: '우측 보조 정보' }, { name: 'prefix · icon · labelSlot · metaSlot · children', type: 'ReactNode · slot', default: '—', description: '노드 커스텀 영역과 자식 노드' }];
export const treeApiSections: ApiSectionData[] = [
  section('React · Next.js API · Tree Props', treeProps, 'Next.js는 `@uxkm/react/tree`를 재사용합니다.'), section('React · Next.js API · TreeNode Props', treeNodeProps),
  section('Vue · Nuxt API · Tree Props', vue(treeProps), 'Nuxt는 `@uxkm/vue/tree`를 재사용합니다.'), section('Vue · Nuxt API · TreeNode Props / Slots', vue(treeNodeProps)),
  section('HTML · Gulp · 공통 클래스', [{ name: 'tree · tree_item · tree_row · tree_label', type: 'class', default: '—', description: '기본 구조' }, { name: 'tree_bordered · tree_lines · tree_compact', type: 'class', default: '—', description: '스킨과 밀도' }, { name: 'tree_toggle · tree_toggle-plus · tree_toggle_placeholder', type: 'class', default: '—', description: '확장 토글' }, { name: 'tree_link · tree_icon · tree_meta · tree_check', type: 'class', default: '—', description: '인터랙션과 보조 파트' }, { name: 'is-selected · is-disabled', type: 'class', default: '—', description: '노드 상태' }]),
  section('공통 API · 디자인 토큰', [{ name: '--tree-indent · --tree-row-height · --tree-gap', type: 'length', default: '—', description: '계층 들여쓰기와 행 밀도' }, { name: '--tree-font-size · --tree-toggle-size', type: 'length', default: '—', description: '라벨과 토글 크기' }, { name: '--tree-line-color', type: 'color', default: 'var(--color-border)', description: '연결선 색상' }])
];
