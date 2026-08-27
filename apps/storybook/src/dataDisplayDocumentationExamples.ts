import type { FrameworkExample } from './FrameworkCode';
import { calendarFrameworkExamples as calendarBaseExamples } from './calendarFrameworkExamples';
import { listFrameworkExamples as listBaseExamples } from './listFrameworkExamples';
import { statFrameworkExamples as statBaseExamples } from './statFrameworkExamples';
import { tableFrameworkExamples as tableBaseExamples } from './tableFrameworkExamples';
import { timelineFrameworkExamples as timelineBaseExamples, treeFrameworkExamples as treeBaseExamples } from './timelineTreeFrameworkExamples';

import tableHtml from '../../html/src/components/data-display/Table/Table.html?raw';
import tableGulp from '../../gulp/src/components/data-display/Table/table.njk?raw';
import tableReact from '../../react/src/components/data-display/Table/Table.jsx?raw';
import tableVue from '../../vue/src/components/data-display/Table/Table.vue?raw';
import listHtml from '../../html/src/components/data-display/List/List.html?raw';
import listGulp from '../../gulp/src/components/data-display/List/list.njk?raw';
import listReact from '../../react/src/components/data-display/List/List.jsx?raw';
import listVue from '../../vue/src/components/data-display/List/List.vue?raw';
import listItemVue from '../../vue/src/components/data-display/List/ListItem.vue?raw';
import statHtml from '../../html/src/components/data-display/Stat/Stat.html?raw';
import statGulp from '../../gulp/src/components/data-display/Stat/stat.njk?raw';
import statReact from '../../react/src/components/data-display/Stat/Stat.jsx?raw';
import statVue from '../../vue/src/components/data-display/Stat/Stat.vue?raw';
import calendarHtml from '../../html/src/components/data-display/Calendar/Calendar.html?raw';
import calendarGulp from '../../gulp/src/components/data-display/Calendar/calendar.njk?raw';
import calendarReact from '../../react/src/components/data-display/Calendar/Calendar.jsx?raw';
import calendarVue from '../../vue/src/components/data-display/Calendar/Calendar.vue?raw';
import timelineHtml from '../../html/src/components/data-display/Timeline/Timeline.html?raw';
import timelineGulp from '../../gulp/src/components/data-display/Timeline/timeline.njk?raw';
import timelineReact from '../../react/src/components/data-display/Timeline/Timeline.jsx?raw';
import timelineVue from '../../vue/src/components/data-display/Timeline/Timeline.vue?raw';
import timelineItemVue from '../../vue/src/components/data-display/Timeline/TimelineItem.vue?raw';
import treeHtml from '../../html/src/components/data-display/Tree/Tree.html?raw';
import treeGulp from '../../gulp/src/components/data-display/Tree/tree.njk?raw';
import treeReact from '../../react/src/components/data-display/Tree/Tree.jsx?raw';
import treeVue from '../../vue/src/components/data-display/Tree/Tree.vue?raw';
import treeNodeVue from '../../vue/src/components/data-display/Tree/TreeNode.vue?raw';

type ExampleMap = Record<string, FrameworkExample[]>;

function componentExamples(
  component: string,
  slug: string,
  sources: { html: string; gulp: string; react: string; vue: string }
): FrameworkExample[] {
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/data-display/${component}/${component}.html`, code: sources.html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/data-display/${component}/${slug}.njk`, code: sources.gulp },
    { id: 'vue', label: 'Vue', fileName: `apps/vue/src/components/data-display/${component}/${component}*.vue`, code: sources.vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/${slug} → ${component}*.vue`, code: sources.vue },
    { id: 'react', label: 'React', fileName: `apps/react/src/components/data-display/${component}/${component}.jsx`, code: sources.react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/${slug} → ${component}.jsx`, code: sources.react }
  ];
}

export const tableComponentExamples = componentExamples('Table', 'table', { html: tableHtml, gulp: tableGulp, react: tableReact, vue: tableVue });
export const listComponentExamples = componentExamples('List', 'list', { html: listHtml, gulp: listGulp, react: listReact, vue: `${listVue}\n\n<!-- ListItem.vue -->\n${listItemVue}` });
export const statComponentExamples = componentExamples('Stat', 'stat', { html: statHtml, gulp: statGulp, react: statReact, vue: statVue });
export const calendarComponentExamples = componentExamples('Calendar', 'calendar', { html: calendarHtml, gulp: calendarGulp, react: calendarReact, vue: calendarVue });
export const timelineComponentExamples = componentExamples('Timeline', 'timeline', { html: timelineHtml, gulp: timelineGulp, react: timelineReact, vue: `${timelineVue}\n\n<!-- TimelineItem.vue -->\n${timelineItemVue}` });
export const treeComponentExamples = componentExamples('Tree', 'tree', { html: treeHtml, gulp: treeGulp, react: treeReact, vue: `${treeVue}\n\n<!-- TreeNode.vue -->\n${treeNodeVue}` });

const idPart = (value: string) => value.replace(/[^a-zA-Z0-9]/g, '');
const labelByKey: Record<string, string> = {
  basic: '기본', striped: '줄무늬', bordered: '테두리', compact: '컴팩트', hover: '호버', combined: '스타일 조합',
  stickyTop: '상단 헤더 고정', stickyLeft: '왼쪽 열 고정', stickyColumns: '다중 열 고정', stickyBoth: '상단·왼쪽 고정',
  bullet: '불릿', bulletRich: '불릿 설명', bulletVariants: '불릿 변형', ordered: '번호 목록', orderedVariants: '번호 변형', hierarchical: '계층 번호',
  links: '링크 목록', buttons: '버튼 목록', actions: '액션 목록', definition: '정의 목록', definitionInline: '인라인 정의', definitionRight: '우측 정의',
  prefixSuffix: '접두·접미', trend: '추세', sizes: '크기', layouts: '레이아웃', icon: '아이콘', skins: '스킨', group: '그룹',
  noHeader: '헤더 없음', minimal: '날짜만', week: '주간', wheel: '휠', range: '범위 선택', event: '이벤트', skin: '스킨', size: '크기', footer: '푸터', dual: '이중 달력', agenda: '일정', state: '상태',
  simple: '간단', outline: '아웃라인', card: '카드형', label: '날짜 레이블', alternate: '좌우 교차', horizontal: '가로', lines: '연결선', plusToggle: '+/− 토글', checkbox: '체크박스', meta: '메타', disabled: '비활성', selectable: '선택 가능'
};

function tableWebSquare(key: string) {
  const classes: Record<string, string> = {
    basic: 'table table_columns', striped: 'table table_striped table_columns', bordered: 'table table_bordered', compact: 'table table_compact table_columns',
    hover: 'table table_hover table_columns', combined: 'table table_bordered table_compact table_hover', stickyTop: 'table table_sticky-top table_bordered table_compact',
    stickyLeft: 'table table_columns table_sticky-left table_sticky-cols-1', stickyColumns: 'table table_columns table_sticky-left table_sticky-cols-2',
    stickyBoth: 'table table_columns table_bordered table_compact table_sticky-top table_sticky-left table_sticky-cols-2'
  };
  const scroll = key.startsWith('sticky') ? ' table_scroll' : '';
  return `<!-- 실제 행은 DataList와 w2:generator로 반복하고 열 너비는 공통 table_columns 변수에 연결합니다. -->
<w2:group id="table${idPart(key)}Scroll" class="${scroll.trim() || 'table_container'}">
  <w2:group id="table${idPart(key)}" class="${classes[key]}" tagname="table" role="table" aria-label="${labelByKey[key]} 테이블">
    <w2:group id="table${idPart(key)}Header" tagname="thead" role="rowgroup">
      <w2:group id="table${idPart(key)}HeaderRow" tagname="tr" role="row">
        <w2:textbox id="table${idPart(key)}Name" tagname="th" role="columnheader" label="이름"></w2:textbox>
        <w2:textbox id="table${idPart(key)}Status" tagname="th" role="columnheader" label="상태"></w2:textbox>
      </w2:group>
    </w2:group>
    <w2:group id="table${idPart(key)}Body" tagname="tbody" role="rowgroup">
      <!-- generator 반복 행: 각 셀은 w2:textbox tagname="td" role="cell"로 구성합니다. -->
    </w2:group>
  </w2:group>
</w2:group>`;
}

function listWebSquare(key: string) {
  const ordered = ['ordered', 'orderedVariants', 'hierarchical'].includes(key);
  const definition = key.startsWith('definition');
  const classes = ['list', key === 'bordered' && 'list_bordered', key === 'compact' && 'list_compact', key === 'bullet' && 'list_bullet', ordered && 'list_ordered', definition && 'list_definition'].filter(Boolean).join(' ');
  const tag = definition ? 'dl' : ordered ? 'ol' : 'ul';
  return `<!-- 반복 항목은 DataList와 w2:generator에 연결합니다. -->
<w2:group id="list${idPart(key)}" class="${classes}" tagname="${tag}" role="list" aria-label="${labelByKey[key]} 목록">
  <w2:group id="list${idPart(key)}Item1" class="list_item" tagname="${definition ? 'div' : 'li'}" role="listitem">
    <w2:textbox id="list${idPart(key)}Title1" tagname="span" class="list_title" label="첫 번째 항목"></w2:textbox>
    <w2:textbox id="list${idPart(key)}Description1" tagname="span" class="list_description" label="항목 설명"></w2:textbox>
  </w2:group>
  <w2:group id="list${idPart(key)}Item2" class="list_item" tagname="${definition ? 'div' : 'li'}" role="listitem">
    <w2:textbox id="list${idPart(key)}Title2" tagname="span" class="list_title" label="두 번째 항목"></w2:textbox>
  </w2:group>
</w2:group>`;
}

function statWebSquare(key: string) {
  const classes: Record<string, string> = { sizes: 'stat stat_lg', layouts: 'stat stat_horizontal', skins: 'stat stat_card stat_shadow', group: 'stat_group' };
  return `<w2:group id="stat${idPart(key)}" class="${classes[key] ?? 'stat'}" role="group" aria-label="${labelByKey[key]} 통계">
  <w2:textbox id="stat${idPart(key)}Label" tagname="span" class="stat_label" label="월간 활성 사용자"></w2:textbox>
  <w2:group id="stat${idPart(key)}ValueRow" class="stat_value-row">
    ${key === 'prefixSuffix' ? '<w2:textbox id="statPrefix" tagname="span" class="stat_prefix" label="₩"></w2:textbox>' : ''}
    <w2:textbox id="stat${idPart(key)}Value" tagname="strong" class="stat_value" label="24.5K"></w2:textbox>
    ${key === 'prefixSuffix' ? '<w2:textbox id="statSuffix" tagname="span" class="stat_suffix" label="명"></w2:textbox>' : ''}
  </w2:group>
  <w2:textbox id="stat${idPart(key)}Description" tagname="span" class="stat_desc color_success" label="+18.2%"></w2:textbox>
</w2:group>`;
}

function calendarWebSquare(key: string) {
  const classes: Record<string, string> = { noHeader: 'calendar calendar_no-header', minimal: 'calendar calendar_minimal calendar_compact calendar_borderless', week: 'calendar calendar_week calendar_shadow', wheel: 'calendar calendar_wheel calendar_shadow', skin: 'calendar calendar_shadow', size: 'calendar calendar_compact', agenda: 'calendar calendar_agenda calendar_shadow', state: 'calendar calendar_readonly' };
  return `<!-- 날짜 데이터는 DataList와 w2:generator로 반복하고 선택 상태를 is-* 클래스와 동기화합니다. -->
<w2:group id="calendar${idPart(key)}" class="${classes[key] ?? 'calendar'}" role="application" aria-label="${labelByKey[key]} 캘린더">
  <w2:group id="calendar${idPart(key)}Header" class="calendar_header">
    <xf:trigger id="calendar${idPart(key)}Previous" type="button" class="calendar_nav-prev" tooltip="이전" ev:onclick="scwin.calendarPrevious_onclick"><xf:label><![CDATA[‹]]></xf:label></xf:trigger>
    <w2:textbox id="calendar${idPart(key)}Title" tagname="strong" class="calendar_title" label="2024년 6월"></w2:textbox>
    <xf:trigger id="calendar${idPart(key)}Next" type="button" class="calendar_nav-next" tooltip="다음" ev:onclick="scwin.calendarNext_onclick"><xf:label><![CDATA[›]]></xf:label></xf:trigger>
  </w2:group>
  <w2:group id="calendar${idPart(key)}Grid" class="calendar_grid" role="grid">
    <!-- generator 날짜 셀: xf:trigger class="calendar_day"와 aria-selected를 날짜 데이터에 연결합니다. -->
  </w2:group>
</w2:group>`;
}

function timelineWebSquare(key: string) {
  const classes: Record<string, string> = { outline: 'timeline timeline_outline', icon: 'timeline timeline_icon timeline_icon-sm', card: 'timeline timeline_card', label: 'timeline timeline_label-col', alternate: 'timeline timeline_alternate', horizontal: 'timeline timeline_horizontal', size: 'timeline timeline_lg' };
  return `<!-- 반복 이벤트는 DataList와 w2:generator에 연결합니다. -->
<w2:group id="timeline${idPart(key)}" class="${classes[key] ?? 'timeline'}" tagname="ol" aria-label="${labelByKey[key]} 타임라인">
  <w2:group id="timeline${idPart(key)}Item" class="timeline_item" tagname="li">
    <w2:group id="timeline${idPart(key)}Dot" class="timeline_dot color_primary" aria-hidden="true"></w2:group>
    <w2:group id="timeline${idPart(key)}Content" class="timeline_content">
      <w2:textbox id="timeline${idPart(key)}Title" tagname="p" class="timeline_title" label="프로젝트 이벤트"></w2:textbox>
      <w2:textbox id="timeline${idPart(key)}Time" tagname="time" class="timeline_time" label="2024-06-01 10:00"></w2:textbox>
      <w2:textbox id="timeline${idPart(key)}Description" tagname="p" class="timeline_description" label="이벤트 상세 설명"></w2:textbox>
    </w2:group>
  </w2:group>
</w2:group>`;
}

function treeWebSquare(key: string) {
  const classes: Record<string, string> = { basic: 'tree tree_bordered', lines: 'tree tree_lines tree_bordered', compact: 'tree tree_compact tree_bordered', plusToggle: 'tree tree_bordered', checkbox: 'tree tree_bordered', meta: 'tree tree_bordered', disabled: 'tree tree_bordered', selectable: 'tree tree_bordered' };
  return `<!-- 계층 데이터는 DataList 또는 중첩 generator로 렌더링하고 expanded·selected 상태를 동기화합니다. -->
<w2:group id="tree${idPart(key)}" class="${classes[key] ?? 'tree'}" role="tree" aria-label="${labelByKey[key]} 트리">
  <w2:group id="tree${idPart(key)}Node" class="tree_item" role="treeitem" aria-expanded="true" aria-selected="false">
    <w2:group id="tree${idPart(key)}Row" class="tree_row">
      <xf:trigger id="tree${idPart(key)}Toggle" type="button" class="tree_toggle${key === 'plusToggle' ? ' tree_toggle-plus' : ''}" tooltip="하위 항목 접기" ev:onclick="scwin.treeToggle_onclick"><xf:label><![CDATA[−]]></xf:label></xf:trigger>
      ${key === 'checkbox' ? '<w2:checkbox id="treeCheckbox" class="tree_check" label=""></w2:checkbox>' : ''}
      <w2:textbox id="tree${idPart(key)}Label" tagname="span" class="tree_label" label="상위 항목"></w2:textbox>
      ${key === 'meta' ? '<w2:textbox id="treeMeta" tagname="span" class="tree_meta" label="3개"></w2:textbox>' : ''}
    </w2:group>
    <w2:group id="tree${idPart(key)}Children" class="tree_children" role="group"><!-- 하위 treeitem 반복 --></w2:group>
  </w2:group>
</w2:group>`;
}

function withWebSquare<T extends ExampleMap>(component: string, examples: T, code: (key: string) => string): T {
  return Object.fromEntries(Object.entries(examples).map(([key, values]) => [key, [
    ...values,
    { id: 'websquare', label: 'WebSquare', fileName: `${component}.xml · ${key}`, code: code(key) }
  ]])) as T;
}

export const tableFrameworkExamples = withWebSquare('Table', tableBaseExamples, tableWebSquare);
export const listFrameworkExamples = withWebSquare('List', listBaseExamples, listWebSquare);
export const statFrameworkExamples = withWebSquare('Stat', statBaseExamples, statWebSquare);
export const calendarFrameworkExamples = withWebSquare('Calendar', calendarBaseExamples, calendarWebSquare);
export const timelineFrameworkExamples = withWebSquare('Timeline', timelineBaseExamples, timelineWebSquare);
export const treeFrameworkExamples = withWebSquare('Tree', treeBaseExamples, treeWebSquare);
