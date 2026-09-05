import type { FrameworkExample } from './FrameworkCode';

type ExampleCode = { html: string; gulp: string; react: string; vue: string };

const listImport = `{% from "components/data-display/List/list.njk" import list, listItem %}`;
const avatarImport = `{% from "components/data-display/Avatar/avatar.njk" import avatar %}`;
const buttonImport = `{% from "components/basic/Button/button.njk" import button %}`;
const iconImport = `{% from "components/basic/Icon/icon.njk" import icon %}`;
const gulpExample = (body: string, imports: string[] = []) => `${[listImport, ...imports].join('\n')}\n\n${body}`;

function makeListExamples(key: string, code: ExampleCode): FrameworkExample[] {
  const react = `import { List, ListItem } from '@uxkm/react/list';
import { Avatar } from '@uxkm/react/avatar';
import Button from '@uxkm/react/button';
import Icon from '@uxkm/react/icon';

export function Example() {
  return (
${code.react}
  );
}`;
  const vue = `<script setup>
import { List, ListItem } from '@uxkm/vue/list';
import { Avatar } from '@uxkm/vue/avatar';
import Button from '@uxkm/vue/button';
import Icon from '@uxkm/vue/icon';
</script>

<template>
${code.vue}
</template>`;
  return [
    { id: 'html', label: 'HTML', fileName: `apps/html/src/components/data-display/List/List.html · ${key}`, code: code.html },
    { id: 'gulp', label: 'Gulp', fileName: `apps/gulp/src/components/data-display/List/list.njk · ${key}`, code: code.gulp },
    { id: 'vue', label: 'Vue', fileName: `@uxkm/vue/list · ${key}`, code: vue },
    { id: 'nuxt', label: 'Nuxt', fileName: `@uxkm/vue/list · ${key}`, code: vue },
    { id: 'react', label: 'React', fileName: `@uxkm/react/list · ${key}`, code: react },
    { id: 'next', label: 'Next', fileName: `@uxkm/react/list · ${key}`, code: react }
  ];
}

export const listFrameworkExamples = {
  basic: makeListExamples('basic', {
    html: `<ul class="list">
  <li class="list_item">
    <span class="avatar color_primary" aria-hidden="true">홍</span>
    <div class="list_content"><span class="list_title">홍길동</span><span class="list_meta">프론트엔드 개발자</span></div>
  </li>
  <li class="list_item">
    <span class="avatar color_success" aria-hidden="true">김</span>
    <div class="list_content"><span class="list_title">김철수</span><span class="list_meta">백엔드 개발자</span></div>
  </li>
  <li class="list_item">
    <span class="avatar color_warning" aria-hidden="true">이</span>
    <div class="list_content"><span class="list_title">이영희</span><span class="list_meta">UI/UX 디자이너</span></div>
  </li>
</ul>`,
    gulp: gulpExample(`{% set users = [
  { name: '홍길동', role: '프론트엔드 개발자', initial: '홍', color: 'primary' },
  { name: '김철수', role: '백엔드 개발자', initial: '김', color: 'success' },
  { name: '이영희', role: 'UI/UX 디자이너', initial: '이', color: 'warning' }
] %}

{% call list() %}
  {% for user in users %}
    {{ listItem(title=user.name, meta=user.role, prefix=avatar(color=user.color, initials=user.initial, ariaHidden=true)) }}
  {% endfor %}
{% endcall %}`, [avatarImport]),
    react: `    <List>
      <ListItem title="홍길동" meta="프론트엔드 개발자" prefix={<Avatar color="primary" initials="홍" ariaHidden />} />
      <ListItem title="김철수" meta="백엔드 개발자" prefix={<Avatar color="success" initials="김" ariaHidden />} />
      <ListItem title="이영희" meta="UI/UX 디자이너" prefix={<Avatar color="warning" initials="이" ariaHidden />} />
    </List>`,
    vue: `  <List>
    <ListItem title="홍길동" meta="프론트엔드 개발자"><template #prefix><Avatar color="primary" initials="홍" aria-hidden /></template></ListItem>
    <ListItem title="김철수" meta="백엔드 개발자"><template #prefix><Avatar color="success" initials="김" aria-hidden /></template></ListItem>
    <ListItem title="이영희" meta="UI/UX 디자이너"><template #prefix><Avatar color="warning" initials="이" aria-hidden /></template></ListItem>
  </List>`
  }),
  bullet: makeListExamples('bullet', {
    html: `<ul class="list list_bullet">
  <li class="list_item">디자인 토큰 정의</li>
  <li class="list_item">컴포넌트 문서화</li>
  <li class="list_item">접근성 검토</li>
</ul>`,
    gulp: gulpExample(`{% set items = ['디자인 토큰 정의', '컴포넌트 문서화', '접근성 검토'] %}

{% call list(variant='bullet') %}
  {% for item in items %}
    {% call listItem() %}{{ item }}{% endcall %}
  {% endfor %}
{% endcall %}`),
    react: `    <List variant="bullet">
      <ListItem>디자인 토큰 정의</ListItem>
      <ListItem>컴포넌트 문서화</ListItem>
      <ListItem>접근성 검토</ListItem>
    </List>`,
    vue: `  <List variant="bullet">
    <ListItem>디자인 토큰 정의</ListItem>
    <ListItem>컴포넌트 문서화</ListItem>
    <ListItem>접근성 검토</ListItem>
  </List>`
  }),
  bulletRich: makeListExamples('bulletRich', {
    html: `<ul class="list list_bullet">
  <li class="list_item"><div class="list_content"><span class="list_title">HTML 마크업</span><span class="list_desc">시맨틱 태그와 ARIA 속성을 사용합니다.</span></div></li>
  <li class="list_item"><div class="list_content"><span class="list_title">SCSS 스타일</span><span class="list_desc">OOCSS 패턴으로 구조와 스킨을 분리합니다.</span></div></li>
  <li class="list_item"><div class="list_content"><span class="list_title">접근성</span><span class="list_desc">WCAG 2.2 AA 기준을 준수합니다.</span></div></li>
</ul>`,
    gulp: gulpExample(`{% set items = [
  { title: 'HTML 마크업', description: '시맨틱 태그와 ARIA 속성을 사용합니다.' },
  { title: 'SCSS 스타일', description: 'OOCSS 패턴으로 구조와 스킨을 분리합니다.' },
  { title: '접근성', description: 'WCAG 2.2 AA 기준을 준수합니다.' }
] %}

{% call list(variant='bullet') %}
  {% for item in items %}
    {{ listItem(title=item.title, description=item.description) }}
  {% endfor %}
{% endcall %}`),
    react: `    <List variant="bullet">
      <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
      <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
      <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
    </List>`,
    vue: `  <List variant="bullet">
    <ListItem title="HTML 마크업" description="시맨틱 태그와 ARIA 속성을 사용합니다." />
    <ListItem title="SCSS 스타일" description="OOCSS 패턴으로 구조와 스킨을 분리합니다." />
    <ListItem title="접근성" description="WCAG 2.2 AA 기준을 준수합니다." />
  </List>`
  }),
  bulletVariants: makeListExamples('bulletVariants', {
    html: `<ul class="list list_bullet list_bullet-circle">
  <li class="list_item">원형 마커 항목 A</li><li class="list_item">원형 마커 항목 B</li>
</ul>
<ul class="list list_bullet list_bullet-square">
  <li class="list_item">사각 마커 항목 A</li><li class="list_item">사각 마커 항목 B</li>
</ul>`,
    gulp: gulpExample(`{% set groups = [
  { className: 'list_bullet-circle', items: ['원형 마커 항목 A', '원형 마커 항목 B'] },
  { className: 'list_bullet-square', items: ['사각 마커 항목 A', '사각 마커 항목 B'] }
] %}

{% for group in groups %}
  {% call list(variant='bullet', className=group.className) %}
    {% for item in group.items %}
      {% call listItem() %}{{ item }}{% endcall %}
    {% endfor %}
  {% endcall %}
{% endfor %}`),
    react: `    <>
      <List variant="bullet" className="list_bullet-circle"><ListItem>원형 마커 항목 A</ListItem><ListItem>원형 마커 항목 B</ListItem></List>
      <List variant="bullet" className="list_bullet-square"><ListItem>사각 마커 항목 A</ListItem><ListItem>사각 마커 항목 B</ListItem></List>
    </>`,
    vue: `  <List variant="bullet" class="list_bullet-circle"><ListItem>원형 마커 항목 A</ListItem><ListItem>원형 마커 항목 B</ListItem></List>
  <List variant="bullet" class="list_bullet-square"><ListItem>사각 마커 항목 A</ListItem><ListItem>사각 마커 항목 B</ListItem></List>`
  }),
  ordered: makeListExamples('ordered', {
    html: `<ol class="list list_ordered">
  <li class="list_item">요구사항 분석</li><li class="list_item">와이어프레임 작성</li>
  <li class="list_item">프로토타입 검증</li><li class="list_item">개발 및 배포</li>
</ol>`,
    gulp: gulpExample(`{% set items = ['요구사항 분석', '와이어프레임 작성', '프로토타입 검증', '개발 및 배포'] %}

{% call list(variant='ordered') %}
  {% for item in items %}
    {% call listItem() %}{{ item }}{% endcall %}
  {% endfor %}
{% endcall %}`),
    react: `    <List variant="ordered">
      <ListItem>요구사항 분석</ListItem><ListItem>와이어프레임 작성</ListItem>
      <ListItem>프로토타입 검증</ListItem><ListItem>개발 및 배포</ListItem>
    </List>`,
    vue: `  <List variant="ordered">
    <ListItem>요구사항 분석</ListItem><ListItem>와이어프레임 작성</ListItem>
    <ListItem>프로토타입 검증</ListItem><ListItem>개발 및 배포</ListItem>
  </List>`
  }),
  orderedVariants: makeListExamples('orderedVariants', {
    html: `<ol class="list list_ordered list_ordered-alpha"><li class="list_item">첫 번째 옵션</li><li class="list_item">두 번째 옵션</li></ol>
<ol class="list list_ordered list_ordered-roman"><li class="list_item">서론</li><li class="list_item">본론</li><li class="list_item">결론</li></ol>`,
    gulp: gulpExample(`{% call list(variant='ordered', className='list_ordered-alpha') %}
  {% call listItem() %}첫 번째 옵션{% endcall %}
  {% call listItem() %}두 번째 옵션{% endcall %}
{% endcall %}

{% call list(variant='ordered', className='list_ordered-roman') %}
  {% call listItem() %}서론{% endcall %}
  {% call listItem() %}본론{% endcall %}
  {% call listItem() %}결론{% endcall %}
{% endcall %}`),
    react: `    <>
      <List variant="ordered" className="list_ordered-alpha"><ListItem>첫 번째 옵션</ListItem><ListItem>두 번째 옵션</ListItem></List>
      <List variant="ordered" className="list_ordered-roman"><ListItem>서론</ListItem><ListItem>본론</ListItem><ListItem>결론</ListItem></List>
    </>`,
    vue: `  <List variant="ordered" class="list_ordered-alpha"><ListItem>첫 번째 옵션</ListItem><ListItem>두 번째 옵션</ListItem></List>
  <List variant="ordered" class="list_ordered-roman"><ListItem>서론</ListItem><ListItem>본론</ListItem><ListItem>결론</ListItem></List>`
  }),
  hierarchical: makeListExamples('hierarchical', {
    html: `<ol class="list list_ordered list_ordered-outline">
  <li class="list_item">요구사항 정의</li>
  <li class="list_item">설계<ol class="list list_ordered list_ordered-outline"><li class="list_item">정보 구조</li><li class="list_item">UI 설계</li></ol></li>
  <li class="list_item">개발 및 배포</li>
</ol>`,
    gulp: gulpExample(`{% call list(variant='ordered', className='list_ordered-outline') %}
  {% call listItem() %}요구사항 정의{% endcall %}
  {% call listItem() %}
    설계
    {% call list(variant='ordered', className='list_ordered-outline') %}
      {% call listItem() %}정보 구조{% endcall %}
      {% call listItem() %}UI 설계{% endcall %}
    {% endcall %}
  {% endcall %}
  {% call listItem() %}개발 및 배포{% endcall %}
{% endcall %}`),
    react: `    <List variant="ordered" className="list_ordered-outline">
      <ListItem>요구사항 정의</ListItem>
      <ListItem>설계<List variant="ordered" className="list_ordered-outline"><ListItem>정보 구조</ListItem><ListItem>UI 설계</ListItem></List></ListItem>
      <ListItem>개발 및 배포</ListItem>
    </List>`,
    vue: `  <List variant="ordered" class="list_ordered-outline">
    <ListItem>요구사항 정의</ListItem>
    <ListItem>설계<List variant="ordered" class="list_ordered-outline"><ListItem>정보 구조</ListItem><ListItem>UI 설계</ListItem></List></ListItem>
    <ListItem>개발 및 배포</ListItem>
  </List>`
  }),
  bordered: makeListExamples('bordered', {
    html: `<ul class="list list_bordered">
  <li class="list_item"><div class="list_content"><span class="list_title">알림 설정</span><span class="list_desc">이메일 및 푸시 알림을 관리합니다.</span></div></li>
  <li class="list_item"><div class="list_content"><span class="list_title">프로필 편집</span><span class="list_desc">이름, 사진, 소개를 변경합니다.</span></div></li>
  <li class="list_item"><div class="list_content"><span class="list_title">보안</span><span class="list_desc">비밀번호 및 2단계 인증을 설정합니다.</span></div></li>
</ul>`,
    gulp: gulpExample(`{% set items = [
  { title: '알림 설정', description: '이메일 및 푸시 알림을 관리합니다.' },
  { title: '프로필 편집', description: '이름, 사진, 소개를 변경합니다.' },
  { title: '보안', description: '비밀번호 및 2단계 인증을 설정합니다.' }
] %}

{% call list(bordered=true) %}
  {% for item in items %}
    {{ listItem(title=item.title, description=item.description) }}
  {% endfor %}
{% endcall %}`),
    react: `    <List bordered>
      <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
      <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
      <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
    </List>`,
    vue: `  <List bordered>
    <ListItem title="알림 설정" description="이메일 및 푸시 알림을 관리합니다." />
    <ListItem title="프로필 편집" description="이름, 사진, 소개를 변경합니다." />
    <ListItem title="보안" description="비밀번호 및 2단계 인증을 설정합니다." />
  </List>`
  }),
  links: makeListExamples('links', {
    html: `<ul class="list list_divider">
  <li class="list_item"><a class="list_link" href="#" data-ripple="true"><span class="list_title">홈</span><svg class="icon list_action" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"></path></svg></a></li>
  <li class="list_item"><a class="list_link" href="#" data-ripple="true"><span class="list_title">프로젝트</span><svg class="icon list_action" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"></path></svg></a></li>
  <li class="list_item"><a class="list_link" href="#" data-ripple="true"><span class="list_title">설정</span><svg class="icon list_action" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"></path></svg></a></li>
</ul>`,
    gulp: gulpExample(`{% set labels = ['홈', '프로젝트', '설정'] %}

{% call list(split=true) %}
  {% for label in labels %}
    {% call listItem() %}
      <a class="list_link" href="#" data-ripple="true">
        <span class="list_title">{{ label }}</span>
        {{ icon(name='chevron', className='list_action') }}
      </a>
    {% endcall %}
  {% endfor %}
{% endcall %}`, [iconImport]),
    react: `    <List split>
      {['홈', '프로젝트', '설정'].map((label) => (
        <ListItem key={label}><a className="list_link" href="#" data-ripple="true"><span className="list_title">{label}</span><Icon className="list_action" name="chevron" /></a></ListItem>
      ))}
    </List>`,
    vue: `  <List split>
    <ListItem v-for="label in ['홈', '프로젝트', '설정']" :key="label"><a class="list_link" href="#" data-ripple="true"><span class="list_title">{{ label }}</span><Icon class="list_action" name="chevron" /></a></ListItem>
  </List>`
  }),
  buttons: makeListExamples('buttons', {
    html: `<ul class="list list_bordered">
  <li class="list_item"><button class="list_link" type="button" data-ripple="true"><span class="avatar color_primary" aria-hidden="true">홍</span><span class="list_content"><span class="list_title">홍길동</span><span class="list_meta">멤버 선택</span></span></button></li>
  <li class="list_item"><button class="list_link" type="button" data-ripple="true"><span class="avatar color_success" aria-hidden="true">김</span><span class="list_content"><span class="list_title">김철수</span><span class="list_meta">멤버 선택</span></span></button></li>
</ul>`,
    gulp: gulpExample(`{% set users = [
  { name: '홍길동', initial: '홍', color: 'primary' },
  { name: '김철수', initial: '김', color: 'success' }
] %}

{% call list(bordered=true) %}
  {% for user in users %}
    {% call listItem() %}
      <button class="list_link" type="button" data-ripple="true">
        {{ avatar(color=user.color, initials=user.initial, ariaHidden=true) }}
        <span class="list_content">
          <span class="list_title">{{ user.name }}</span>
          <span class="list_meta">멤버 선택</span>
        </span>
      </button>
    {% endcall %}
  {% endfor %}
{% endcall %}`, [avatarImport]),
    react: `    <List bordered>
      {['홍길동', '김철수'].map((name, index) => (
        <ListItem key={name}><button className="list_link" type="button" data-ripple="true"><Avatar color={index ? 'success' : 'primary'} initials={name[0]} ariaHidden /><span className="list_content"><span className="list_title">{name}</span><span className="list_meta">멤버 선택</span></span></button></ListItem>
      ))}
    </List>`,
    vue: `  <List bordered>
    <ListItem v-for="(name, index) in ['홍길동', '김철수']" :key="name"><button class="list_link" type="button" data-ripple="true"><Avatar :color="index ? 'success' : 'primary'" :initials="name[0]" aria-hidden /><span class="list_content"><span class="list_title">{{ name }}</span><span class="list_meta">멤버 선택</span></span></button></ListItem>
  </List>`
  }),
  actions: makeListExamples('actions', {
    html: `<ul class="list list_bordered">
  <li class="list_item"><div class="list_content"><span class="list_title">디자인 시스템</span><span class="list_desc">마지막 수정 2시간 전</span></div><span class="list_action"><button class="btn btn_text color_primary btn_sm" type="button"><span class="btn_label">열기</span></button></span></li>
  <li class="list_item"><div class="list_content"><span class="list_title">컴포넌트 가이드</span><span class="list_desc">마지막 수정 어제</span></div><span class="list_action"><button class="btn btn_text color_primary btn_sm" type="button"><span class="btn_label">열기</span></button></span></li>
</ul>`,
    gulp: gulpExample(`{% set items = [
  { title: '디자인 시스템', description: '마지막 수정 2시간 전' },
  { title: '컴포넌트 가이드', description: '마지막 수정 어제' }
] %}

{% call list(bordered=true) %}
  {% for item in items %}
    {% set action %}{{ button(variant='text', color='primary', size='sm', label='열기') }}{% endset %}
    {{ listItem(title=item.title, description=item.description, actions=action) }}
  {% endfor %}
{% endcall %}`, [buttonImport]),
    react: `    <List bordered>
      <ListItem title="디자인 시스템" description="마지막 수정 2시간 전" actions={<Button variant="text" size="sm" label="열기" />} />
      <ListItem title="컴포넌트 가이드" description="마지막 수정 어제" actions={<Button variant="text" size="sm" label="열기" />} />
    </List>`,
    vue: `  <List bordered>
    <ListItem title="디자인 시스템" description="마지막 수정 2시간 전"><template #actions><Button variant="text" size="sm" label="열기" /></template></ListItem>
    <ListItem title="컴포넌트 가이드" description="마지막 수정 어제"><template #actions><Button variant="text" size="sm" label="열기" /></template></ListItem>
  </List>`
  }),
  definition: makeListExamples('definition', {
    html: `<dl class="list list_definition" style="max-width: 34rem">
  <dt class="list_title">OOCSS</dt><dd class="list_desc">구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.</dd>
  <dt class="list_title">Design Token</dt><dd class="list_desc">색상·간격·타이포 값을 변수로 정의한 것입니다.</dd>
  <dt class="list_title">WCAG</dt><dd class="list_desc">웹 콘텐츠 접근성 지침입니다.</dd>
</dl>`,
    gulp: gulpExample(`{% set terms = [
  { title: 'OOCSS', description: '구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다.' },
  { title: 'Design Token', description: '색상·간격·타이포 값을 변수로 정의한 것입니다.' },
  { title: 'WCAG', description: '웹 콘텐츠 접근성 지침입니다.' }
] %}

{% call list(variant='definition', style='max-width: 34rem') %}
  {% for term in terms %}
    {{ listItem(title=term.title, description=term.description, definition=true) }}
  {% endfor %}
{% endcall %}`),
    react: `    <List variant="definition" style={{ maxWidth: '34rem' }}>
      <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
      <ListItem title="Design Token" description="색상·간격·타이포 값을 변수로 정의한 것입니다." />
      <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침입니다." />
    </List>`,
    vue: `  <List variant="definition" :style="{ maxWidth: '34rem' }">
    <ListItem title="OOCSS" description="구조와 스킨을 분리해 클래스를 조합하는 CSS 방법론입니다." />
    <ListItem title="Design Token" description="색상·간격·타이포 값을 변수로 정의한 것입니다." />
    <ListItem title="WCAG" description="웹 콘텐츠 접근성 지침입니다." />
  </List>`
  }),
  definitionInline: makeListExamples('definitionInline', {
    html: `<dl class="list list_definition list_inline" style="--list-inline-label-width: 8rem">
  <dt class="list_title">OOCSS</dt><dd class="list_desc">구조와 스킨 분리</dd>
  <dt class="list_title">Design Token</dt><dd class="list_desc">디자인 값 변수화</dd>
  <dt class="list_title">WCAG</dt><dd class="list_desc">웹 접근성 지침</dd>
</dl>`,
    gulp: gulpExample(`{% set terms = [
  { title: 'OOCSS', description: '구조와 스킨 분리' },
  { title: 'Design Token', description: '디자인 값 변수화' },
  { title: 'WCAG', description: '웹 접근성 지침' }
] %}

{% call list(variant='definition', layout='inline', inlineLabelWidth='8rem') %}
  {% for term in terms %}
    {{ listItem(title=term.title, description=term.description, definition=true) }}
  {% endfor %}
{% endcall %}`),
    react: `    <List variant="definition" layout="inline" inlineLabelWidth="8rem">
      <ListItem title="OOCSS" description="구조와 스킨 분리" />
      <ListItem title="Design Token" description="디자인 값 변수화" />
      <ListItem title="WCAG" description="웹 접근성 지침" />
    </List>`,
    vue: `  <List variant="definition" layout="inline" inline-label-width="8rem">
    <ListItem title="OOCSS" description="구조와 스킨 분리" />
    <ListItem title="Design Token" description="디자인 값 변수화" />
    <ListItem title="WCAG" description="웹 접근성 지침" />
  </List>`
  }),
  definitionRight: makeListExamples('definitionRight', {
    html: `<dl class="list list_definition list_inline list_desc-right list_block">
  <dt class="list_title">주문번호</dt><dd class="list_desc">ORD-2024-0815</dd>
  <dt class="list_title">결제금액</dt><dd class="list_desc">₩42,000</dd>
  <dt class="list_title">배송지</dt><dd class="list_desc">서울특별시 강남구</dd>
</dl>`,
    gulp: gulpExample(`{% set details = [
  { title: '주문번호', description: 'ORD-2024-0815' },
  { title: '결제금액', description: '₩42,000' },
  { title: '배송지', description: '서울특별시 강남구' }
] %}

{% call list(variant='definition', layout='inline', descAlign='right', block=true) %}
  {% for detail in details %}
    {{ listItem(title=detail.title, description=detail.description, definition=true) }}
  {% endfor %}
{% endcall %}`),
    react: `    <List variant="definition" layout="inline" descAlign="right" block>
      <ListItem title="주문번호" description="ORD-2024-0815" />
      <ListItem title="결제금액" description="₩42,000" />
      <ListItem title="배송지" description="서울특별시 강남구" />
    </List>`,
    vue: `  <List variant="definition" layout="inline" desc-align="right" block>
    <ListItem title="주문번호" description="ORD-2024-0815" />
    <ListItem title="결제금액" description="₩42,000" />
    <ListItem title="배송지" description="서울특별시 강남구" />
  </List>`
  })
};
