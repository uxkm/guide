import type { FrameworkExample } from './FrameworkCode';

const timelineImport = `{% from "components/data-display/Timeline/timeline.njk" import timeline, timelineItem %}`;
const treeImport = `{% from "components/data-display/Tree/tree.njk" import tree, treeNode %}`;

function tabs(component: 'Timeline' | 'Tree', slug: string, key: string, html: string, reactMarkup: string, vueMarkup: string): FrameworkExample[] {
  const child = component === 'Timeline' ? 'TimelineItem' : 'TreeNode';
  const react = `import { ${component}, ${child} } from '@uxkm/react/${slug}';\n\nexport function Example() {\n  return (\n${reactMarkup}\n  );\n}`;
  const vue = `<script setup>\nimport { ${component}, ${child} } from '@uxkm/vue/${slug}';\n</script>\n\n<template>\n${vueMarkup}\n</template>`;
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/data-display/${component}/${component}.html · ${key}`, code: html },
    {
      id: 'gulp',
      label: 'Gulp',
      fileName: `apps/gulp/src/components/data-display/${component}/${slug}.njk · ${key}`,
      code: component === 'Timeline'
        ? `${timelineImport}\n\n${timelineGulpExamples[key]}`
        : `${treeImport}\n\n${treeGulpExamples[key]}`
    },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/${slug} · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/${slug} · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/${slug} · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/${slug} · ${key}`, code: react }
  ];
}

const timeline = (key: string, rootClass: string, items: string, reactProps = '', vueProps = reactProps) => tabs(
  'Timeline', 'timeline', key,
  `<ol class="${rootClass}">\n${items}\n</ol>`,
  `    <Timeline${reactProps ? ` ${reactProps}` : ''}>\n${items.replace(/<li class="timeline_item">[\s\S]*?<p class="timeline_title">([^<]+)<\/p>[\s\S]*?<\/li>/g, '      <TimelineItem title="$1" />')}\n    </Timeline>`,
  `  <Timeline${vueProps ? ` ${vueProps}` : ''}>\n${items.replace(/<li class="timeline_item">[\s\S]*?<p class="timeline_title">([^<]+)<\/p>[\s\S]*?<\/li>/g, '    <TimelineItem title="$1" />')}\n  </Timeline>`
);
const item = (title: string, time = '', color = 'primary', extra = '') => `  <li class="timeline_item${extra.includes('active') ? ' is-active' : ''}${extra.includes('pending') ? ' is-pending' : ''}"><span class="timeline_dot${extra.includes('outline') ? ' timeline_dot-outline' : ''} color_${color}" aria-hidden="true"></span><div class="timeline_content">${time ? `<time class="timeline_time">${time}</time>` : ''}<p class="timeline_title">${title}</p></div></li>`;

const timelineGulpExamples: Record<string, string> = {
  basic: `{% set items = [
  { color: 'primary', time: '2024-06-01 10:00', title: '프로젝트 킥오프' },
  { color: 'success', time: '2024-06-10 14:30', title: '1차 릴리스 완료' },
  { color: 'warning', time: '2024-06-15 09:00', title: '성능 이슈 발견' },
  { color: 'danger', time: '2024-06-18 16:00', title: '긴급 패치 배포' }
] %}

{% call timeline() %}
  {% for item in items %}
    {{ timelineItem(color=item.color, time=item.time, title=item.title) }}
  {% endfor %}
{% endcall %}`,
  simple: `{% set items = [
  { color: 'primary', time: '오전 9:12', title: '주문 접수' },
  { color: 'primary', time: '오전 11:45', title: '배송 준비 중' },
  { color: 'success', time: '오후 2:30', title: '배송 완료' }
] %}

{% call timeline() %}
  {% for item in items %}
    {{ timelineItem(color=item.color, time=item.time, title=item.title) }}
  {% endfor %}
{% endcall %}`,
  outline: `{% set items = [
  { title: '기획 단계', active: false, pending: false },
  { title: '디자인 단계', active: false, pending: false },
  { title: '개발 단계', active: true, pending: false },
  { title: '배포 단계', active: false, pending: true }
] %}

{% call timeline() %}
  {% for item in items %}
    {{ timelineItem(
      title=item.title,
      outline=true,
      active=item.active,
      pending=item.pending
    ) }}
  {% endfor %}
{% endcall %}`,
  icon: `{% set items = [
  { color: 'primary', time: '2024-06-01', title: '팀원 합류' },
  { color: 'success', time: '2024-06-10', title: 'QA 통과' },
  { color: 'warning', time: '2024-06-15', title: '일정 지연 알림' },
  { color: 'danger', time: '2024-06-18', title: '배포 롤백' }
] %}

{% call timeline(icon=true, iconSize='sm') %}
  {% for item in items %}
    {{ timelineItem(color=item.color, time=item.time, title=item.title) }}
  {% endfor %}
{% endcall %}`,
  card: `{% from "components/data-display/Tag/tag.njk" import tag, tagGroup %}

{% set items = [
  { color: 'primary', time: '2024-06-20 09:00', title: '디자인 시스템 v2.0 릴리스', tags: ['Release', 'Design'] },
  { color: 'success', time: '2024-06-22 14:00', title: '접근성 감사 완료', tags: ['Passed', 'A11y'] },
  { color: 'info', time: '2024-06-25 11:30', title: '문서 업데이트 예정', tags: ['Docs'] }
] %}

{% call timeline(card=true) %}
  {% for item in items %}
    {% set meta %}
      {% call tagGroup() %}
        {% for label in item.tags %}
          {{ tag(color=item.color if loop.first else 'default', label=label) }}
        {% endfor %}
      {% endcall %}
    {% endset %}
    {{ timelineItem(
      color=item.color,
      time=item.time,
      title=item.title,
      meta=meta
    ) }}
  {% endfor %}
{% endcall %}`,
  label: `{% set items = [
  { label: '2024 Q1', datetime: '2024-01', color: 'primary', title: '알파 버전 출시' },
  { label: '2024 Q3', datetime: '2024-07', color: 'success', title: '정식 출시' }
] %}

{% call timeline(labelCol=true) %}
  {% for item in items %}
    {{ timelineItem(
      label=item.label,
      labelDatetime=item.datetime,
      color=item.color,
      title=item.title
    ) }}
  {% endfor %}
{% endcall %}`,
  alternate: `{% set items = [
  { color: 'primary', time: '2024년 3월', title: '회사 설립' },
  { color: 'primary', time: '2024년 6월', title: '컴포넌트 가이드 오픈' },
  { color: 'success', time: '2024년 9월', title: '1,000 스타 달성' },
  { color: 'info', time: '2025년 1월', title: 'v2 로드맵 공개' }
] %}

{% call timeline(alternate=true) %}
  {% for item in items %}
    {{ timelineItem(color=item.color, time=item.time, title=item.title) }}
  {% endfor %}
{% endcall %}`,
  horizontal: `{% set items = [
  { color: 'success', time: '6/20', title: '신청', active: false, pending: false },
  { color: 'success', time: '6/21', title: '심사', active: false, pending: false },
  { color: 'primary', time: '진행 중', title: '승인', active: true, pending: false },
  { color: 'primary', time: '예정', title: '완료', active: false, pending: true }
] %}

{% call timeline(horizontal=true) %}
  {% for item in items %}
    {{ timelineItem(
      color=item.color,
      time=item.time,
      title=item.title,
      active=item.active,
      pending=item.pending
    ) }}
  {% endfor %}
{% endcall %}`,
  size: `{% set groups = [
  { size: 'sm', title: '알림 발송', time: '10:30' },
  { size: 'lg', title: '연간 컨퍼런스', time: '2024-11-15' }
] %}

{% for group in groups %}
  {% call timeline(size=group.size) %}
    {{ timelineItem(title=group.title, time=group.time) }}
  {% endcall %}
{% endfor %}`,
  state: `{% set items = [
  { color: 'success', time: '완료', title: '계정 생성', active: false, pending: false },
  { color: 'success', time: '완료', title: '프로필 설정', active: false, pending: false },
  { color: 'primary', time: '진행 중', title: '팀 초대', active: true, pending: false },
  { color: 'primary', time: '대기', title: '첫 프로젝트 생성', active: false, pending: true }
] %}

{% call timeline() %}
  {% for item in items %}
    {{ timelineItem(
      color=item.color,
      time=item.time,
      title=item.title,
      active=item.active,
      pending=item.pending
    ) }}
  {% endfor %}
{% endcall %}`
};

export const timelineFrameworkExamples = {
  basic: timeline('basic', 'timeline', [item('프로젝트 킥오프', '2024-06-01 10:00'), item('1차 릴리스 완료', '2024-06-10 14:30', 'success'), item('성능 이슈 발견', '2024-06-15 09:00', 'warning'), item('긴급 패치 배포', '2024-06-18 16:00', 'danger')].join('\n')),
  simple: timeline('simple', 'timeline', [item('주문 접수', '오전 9:12'), item('배송 준비 중', '오전 11:45'), item('배송 완료', '오후 2:30', 'success')].join('\n')),
  outline: timeline('outline', 'timeline', [item('기획 단계', '', 'primary', 'outline'), item('디자인 단계', '', 'primary', 'outline'), item('개발 단계', '', 'primary', 'outline active'), item('배포 단계', '', 'primary', 'outline pending')].join('\n')),
  icon: timeline('icon', 'timeline timeline_icon timeline_icon-sm', [item('팀원 합류', '2024-06-01'), item('QA 통과', '2024-06-10', 'success'), item('일정 지연 알림', '2024-06-15', 'warning'), item('배포 롤백', '2024-06-18', 'danger')].join('\n'), 'icon iconSize="sm"', 'icon icon-size="sm"'),
  card: timeline('card', 'timeline timeline_card', [item('디자인 시스템 v2.0 릴리스', '2024-06-20 09:00'), item('접근성 감사 완료', '2024-06-22 14:00', 'success'), item('문서 업데이트 예정', '2024-06-25 11:30', 'info')].join('\n'), 'card'),
  label: tabs('Timeline', 'timeline', 'label', `<ol class="timeline timeline_label-col"><li class="timeline_item"><time class="timeline_label">2024 Q1</time><span class="timeline_dot color_primary"></span><div class="timeline_content"><p class="timeline_title">알파 버전 출시</p></div></li><li class="timeline_item"><time class="timeline_label">2024 Q3</time><span class="timeline_dot color_success"></span><div class="timeline_content"><p class="timeline_title">정식 출시</p></div></li></ol>`, `    <Timeline labelCol><TimelineItem label="2024 Q1" title="알파 버전 출시" /><TimelineItem label="2024 Q3" color="success" title="정식 출시" /></Timeline>`, `  <Timeline label-col><TimelineItem label="2024 Q1" title="알파 버전 출시" /><TimelineItem label="2024 Q3" color="success" title="정식 출시" /></Timeline>`),
  alternate: timeline('alternate', 'timeline timeline_alternate', [item('회사 설립', '2024년 3월'), item('컴포넌트 가이드 오픈', '2024년 6월'), item('1,000 스타 달성', '2024년 9월', 'success'), item('v2 로드맵 공개', '2025년 1월', 'info')].join('\n'), 'alternate'),
  horizontal: timeline('horizontal', 'timeline timeline_horizontal', [item('신청', '6/20', 'success'), item('심사', '6/21', 'success'), item('승인', '진행 중', 'primary', 'active'), item('완료', '예정', 'primary', 'pending')].join('\n'), 'horizontal'),
  size: tabs('Timeline', 'timeline', 'size', `<ol class="timeline timeline_sm">${item('알림 발송', '10:30')}</ol>\n<ol class="timeline timeline_lg">${item('연간 컨퍼런스', '2024-11-15')}</ol>`, `    <><Timeline size="sm"><TimelineItem title="알림 발송" time="10:30" /></Timeline><Timeline size="lg"><TimelineItem title="연간 컨퍼런스" time="2024-11-15" /></Timeline></>`, `  <Timeline size="sm"><TimelineItem title="알림 발송" time="10:30" /></Timeline>\n  <Timeline size="lg"><TimelineItem title="연간 컨퍼런스" time="2024-11-15" /></Timeline>`),
  state: timeline('state', 'timeline', [item('계정 생성', '완료', 'success'), item('프로필 설정', '완료', 'success'), item('팀 초대', '진행 중', 'primary', 'active'), item('첫 프로젝트 생성', '대기', 'primary', 'pending')].join('\n'))
};

const tree = (key: string, classes: string, htmlNodes: string, reactNodes: string, vueNodes = reactNodes) => tabs('Tree', 'tree', key, `<ul class="${classes}" role="tree">${htmlNodes}</ul>`, `    <Tree${classes.includes('tree_bordered') ? ' bordered' : ''}${classes.includes('tree_lines') ? ' lines' : ''}${classes.includes('tree_compact') ? ' compact' : ''} ariaLabel="예시">${reactNodes}</Tree>`, `  <Tree${classes.includes('tree_bordered') ? ' bordered' : ''}${classes.includes('tree_lines') ? ' lines' : ''}${classes.includes('tree_compact') ? ' compact' : ''} aria-label="예시">${vueNodes}</Tree>`);
const node = (label: string, state = '') => `<li class="tree_item" role="treeitem"><div class="tree_row${state ? ` ${state}` : ''}"><span class="tree_toggle tree_toggle_placeholder"></span><span class="tree_label">${label}</span></div></li>`;

const treeGulpExamples: Record<string, string> = {
  basic: `{% call tree(bordered=true, ariaLabel='파일 탐색기') %}
  {% call treeNode(label='src', expanded=true) %}
    {% call treeNode(label='components', expanded=true) %}
      {{ treeNode(label='button.html', selected=true) }}
    {% endcall %}
  {% endcall %}
{% endcall %}`,
  simple: `{% call tree(ariaLabel='카테고리') %}
  {% call treeNode(label='전자기기', expanded=true) %}
    {{ treeNode(label='노트북') }}
    {{ treeNode(label='스마트폰') }}
  {% endcall %}
  {{ treeNode(label='의류') }}
{% endcall %}`,
  lines: `{% call tree(bordered=true, lines=true, ariaLabel='조직도') %}
  {% call treeNode(label='개발본부', expanded=true) %}
    {% call treeNode(label='프론트엔드팀', expanded=true) %}
      {{ treeNode(label='홍길동') }}
      {{ treeNode(label='김철수') }}
    {% endcall %}
  {% endcall %}
{% endcall %}`,
  compact: `{% call tree(bordered=true, compact=true, ariaLabel='권한 구조') %}
  {% call treeNode(label='관리자', expanded=true) %}
    {{ treeNode(label='사용자 관리') }}
    {{ treeNode(label='설정 변경') }}
  {% endcall %}
  {{ treeNode(label='뷰어') }}
{% endcall %}`,
  plusToggle: `{% call tree(bordered=true, ariaLabel='가이드') %}
  {% call treeNode(label='가이드', expanded=true, plusToggle=true) %}
    {{ treeNode(label='시작하기', plusToggle=true) }}
  {% endcall %}
{% endcall %}`,
  checkbox: `{% set checkbox %}
  <label class="tree_check">
    <input type="checkbox" checked aria-label="대시보드 선택">
  </label>
{% endset %}

{% call tree(bordered=true, multiselectable=true, ariaLabel='권한 선택') %}
  {{ treeNode(label='대시보드', prefix=checkbox) }}
{% endcall %}`,
  meta: `{% from "components/basic/Icon/icon.njk" import icon %}

{% call tree(bordered=true, ariaLabel='파일 정보') %}
  {{ treeNode(label='assets', meta='3개', icon=icon(name='grid')) }}
{% endcall %}`,
  disabled: `{% call tree(bordered=true, ariaLabel='기능 목록') %}
  {% call treeNode(label='기본 기능', expanded=true) %}
    {{ treeNode(label='대시보드') }}
    {{ treeNode(label='고급 분석 (Pro)', disabled=true) }}
    {{ treeNode(label='API 연동 (Enterprise)', disabled=true) }}
  {% endcall %}
{% endcall %}`,
  selectable: `{% call tree(bordered=true, ariaLabel='문서 탐색') %}
  {% call treeNode(label='문서', expanded=true, link=true) %}
    {{ treeNode(label='시작하기', selected=true, link=true) }}
    {{ treeNode(label='컴포넌트', link=true) }}
  {% endcall %}
{% endcall %}`
};

export const treeFrameworkExamples = {
  basic: tree('basic', 'tree tree_bordered', node('src') + node('components') + node('button.html', 'is-selected'), '<TreeNode label="src" expanded><TreeNode label="components" expanded><TreeNode label="button.html" selected /></TreeNode></TreeNode>'),
  simple: tree('simple', 'tree', node('전자기기') + node('노트북') + node('스마트폰') + node('의류'), '<TreeNode label="전자기기" expanded><TreeNode label="노트북" /><TreeNode label="스마트폰" /></TreeNode><TreeNode label="의류" />'),
  lines: tree('lines', 'tree tree_lines tree_bordered', node('개발본부') + node('프론트엔드팀') + node('홍길동') + node('김철수'), '<TreeNode label="개발본부" expanded><TreeNode label="프론트엔드팀" expanded><TreeNode label="홍길동" /><TreeNode label="김철수" /></TreeNode></TreeNode>'),
  compact: tree('compact', 'tree tree_compact tree_bordered', node('관리자') + node('사용자 관리') + node('설정 변경') + node('뷰어'), '<TreeNode label="관리자" expanded><TreeNode label="사용자 관리" /><TreeNode label="설정 변경" /></TreeNode><TreeNode label="뷰어" />'),
  plusToggle: tree('plusToggle', 'tree tree_bordered', `<li class="tree_item"><div class="tree_row"><button class="tree_toggle tree_toggle-plus" aria-expanded="true"></button><span class="tree_label">가이드</span></div></li>`, '<TreeNode label="가이드" expanded plusToggle><TreeNode label="시작하기" plusToggle /></TreeNode>', '<TreeNode label="가이드" expanded plus-toggle><TreeNode label="시작하기" plus-toggle /></TreeNode>'),
  checkbox: tabs('Tree', 'tree', 'checkbox', `<ul class="tree tree_bordered" role="tree" aria-multiselectable="true"><li class="tree_item"><div class="tree_row"><label class="tree_check"><input type="checkbox" checked /></label><span class="tree_label">대시보드</span></div></li></ul>`, `    <Tree bordered multiselectable ariaLabel="권한 선택"><TreeNode label="대시보드" prefix={<label className="tree_check"><input type="checkbox" defaultChecked /></label>} /></Tree>`, `  <Tree bordered multiselectable aria-label="권한 선택"><TreeNode label="대시보드"><template #prefix><label class="tree_check"><input type="checkbox" checked /></label></template></TreeNode></Tree>`),
  meta: tree('meta', 'tree tree_bordered', `<li class="tree_item"><div class="tree_row"><span class="tree_icon">▣</span><span class="tree_label">assets</span><span class="tree_meta">3개</span></div></li>`, '<TreeNode label="assets" meta="3개" icon={<span>▣</span>} />', '<TreeNode label="assets" meta="3개"><template #icon>▣</template></TreeNode>'),
  disabled: tree('disabled', 'tree tree_bordered', node('대시보드') + node('고급 분석 (Pro)', 'is-disabled') + node('API 연동 (Enterprise)', 'is-disabled'), '<TreeNode label="기본 기능" expanded><TreeNode label="대시보드" /><TreeNode label="고급 분석 (Pro)" disabled /></TreeNode>'),
  selectable: tree('selectable', 'tree tree_bordered', node('문서') + node('시작하기', 'is-selected') + node('컴포넌트'), '<TreeNode label="문서" expanded link><TreeNode label="시작하기" selected link /><TreeNode label="컴포넌트" link /></TreeNode>')
};
