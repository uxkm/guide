import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{d as n,i as r,l as i}from"./blocks-DKrjMPN_.js";import{n as a,t as o}from"./FrameworkTabs-duseEU1T.js";import{a as s,c,d as l,f as u,i as d,l as ee,m as te,n as ne,o as f,p,r as m,s as h,t as g,u as re}from"./Link.stories-D-k2PwEO.js";import{i as _,r as ie}from"./react-CQ14Jk9E.js";import{n as v,t as y}from"./ComponentApiDocs-C9VNL7Yh.js";var b;function x(){return(x=e((()=>{b=`<!-- Link 원본 구현: 시맨틱 마크업과 공통 CSS 클래스를 조합합니다. -->
<!-- link와 color_*를 조합합니다. 기본은 hover 시 밑줄입니다. -->
<a class="link color_primary" data-component="Link" data-ripple="true" href="#">더 보기</a>

<!-- 밑줄·내비게이션·블록·뒤로가기 변형을 클래스로 조합합니다. -->
<a class="link color_primary link_underline" data-component="Link" href="#">항상 밑줄</a>
<a class="link color_primary link_nav is-active" data-component="Link" href="#" aria-current="page">개요</a>
<a class="link color_muted link_back" data-component="Link" href="#">목록으로 돌아가기</a>

<!-- 아이콘 전용 링크는 link_icon-only와 aria-label을 함께 지정합니다. -->
<a class="link color_primary link_icon-only" data-component="Link" href="#" aria-label="검색">
  <svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <circle cx="11" cy="11" r="7"></circle>
    <path d="m20 20-4-4"></path>
  </svg>
</a>`})))()}var S;function C(){return(C=e((()=>{S=`{# Link 원본 구현: 시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다. #}
{# link macro로 색상·크기·밑줄·내비게이션·아이콘 변형을 조합합니다. #}
{% import "components/basic/Icon/icon.njk" as Icon %}

{% macro link(
  as = 'a',
  href = '#',
  color = 'primary',
  size = '',
  underline = false,
  noUnderline = false,
  standalone = false,
  nav = false,
  block = false,
  back = false,
  iconOnly = false,
  active = false,
  disabled = false,
  label = '',
  target = '',
  rel = '',
  ariaLabel = '',
  icon = '',
  iconAfter = '',
  ripple = true,
  className = ''
) %}
{%- if caller -%}
  {%- set content = caller() -%}
{%- else -%}
  {%- set content = label -%}
{%- endif -%}
{%- set root = as if as else 'a' -%}
{%- set isAnchor = root == 'a' -%}
{%- set isButton = root == 'button' -%}
{%- set resolvedColor = color if color in ['primary', 'muted', 'success', 'warning', 'danger', 'info'] else 'primary' -%}
{%- set resolvedSize = size if size in ['sm', 'lg', 'xl'] else '' -%}
{%- set classes =
  'link'
  + ' color_' + resolvedColor
  + ((' size_' + resolvedSize) if resolvedSize else '')
  + (' link_underline' if underline else '')
  + (' link_no-underline' if noUnderline else '')
  + (' link_standalone' if standalone else '')
  + (' link_nav' if nav else '')
  + (' link_block' if block else '')
  + (' link_back' if back else '')
  + (' link_icon-only' if iconOnly else '')
  + (' is-active' if active else '')
  + (' is-disabled' if disabled else '')
  + ((' ' + className) if className else '')
-%}
<{{ root }}
  class="{{ classes }}"
  data-component="Link"
  data-ripple="{{ 'true' if ripple else 'false' }}"
  {% if isAnchor %}href="{{ href if href else '#' }}"{% endif %}
  {% if isButton %}type="button"{% endif %}
  {% if isButton and disabled %}disabled{% endif %}
  {% if isAnchor and target %}target="{{ target }}"{% endif %}
  {% if isAnchor and rel %}rel="{{ rel }}"{% endif %}
  {% if ariaLabel %}aria-label="{{ ariaLabel }}"{% endif %}
  {% if active %}aria-current="page"{% endif %}
  {% if disabled %}aria-disabled="true" tabindex="-1"{% endif %}
>
  {%- if icon -%}
  {{ Icon.icon(name=icon, className='link_icon') }}
  {%- endif -%}
  {%- if not iconOnly -%}
  {{ content | safe }}
  {%- endif -%}
  {%- if iconAfter -%}
  {{ Icon.icon(name=iconAfter, className='link_icon') }}
  {%- endif -%}
</{{ root }}>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{{ link(label='더 보기') }}
{{ link(underline=true, label='항상 밑줄') }}
{{ link(nav=true, active=true, label='개요') }}
{{ link(color='muted', back=true, icon='arrow-left', label='목록으로 돌아가기') }}
{{ link(iconOnly=true, icon='search', ariaLabel='검색') }}
`})))()}var w;function T(){return(T=e((()=>{w=`/**
 * Link 원본 구현.
 * 시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
 */
// 색상·크기 prop이 지원하는 변형만 CSS 클래스로 전달합니다.
const COLORS = ['primary', 'muted', 'success', 'warning', 'danger', 'info'];
const SIZES = ['', 'sm', 'lg', 'xl'];

export function Link({
  as: Root = 'a', // 루트 요소 또는 컴포넌트입니다. 기본은 a입니다.
  ripple = true, // 클릭 리플 효과를 켭니다.
  color = 'primary', // color_* 공통 색상 클래스입니다.
  size = '', // sm · lg · xl 크기입니다. 빈 값은 기본 크기입니다.
  underline = false, // 항상 밑줄을 표시합니다.
  noUnderline = false, // 밑줄을 제거합니다.
  standalone = false, // 터치 영역을 확대합니다.
  nav = false, // 내비게이션 링크 스타일입니다.
  block = false, // 블록형 링크입니다.
  back = false, // 뒤로가기 링크 스타일입니다.
  iconOnly = false, // 텍스트 없이 아이콘만 표시합니다.
  active = false, // 현재 페이지 활성 상태입니다.
  disabled = false, // 비활성 상태입니다.
  label, // children이 없을 때 표시할 텍스트입니다.
  href, // a 또는 커스텀 루트에 전달할 주소입니다.
  target, // 링크 target입니다.
  rel, // 링크 rel입니다.
  ariaLabel, // 아이콘 전용 링크 등의 접근성 이름입니다.
  icon, // 텍스트 앞에 렌더링할 아이콘입니다.
  iconAfter, // 텍스트 뒤에 렌더링할 아이콘입니다.
  children, // 링크 콘텐츠입니다.
  className = '', // 추가 클래스입니다.
  onClick, // 클릭 핸들러입니다.
  ...props // 나머지 속성을 루트에 전달합니다.
}) {
  const resolvedColor = COLORS.includes(color) ? color : 'primary';
  const resolvedSize = SIZES.includes(size) ? size : '';
  const isAnchor = Root === 'a';
  const isButton = Root === 'button';
  // a이거나 컴포넌트 루트면 href를 전달합니다.
  const acceptsHref = isAnchor || typeof Root !== 'string';
  const content = children ?? label;
  const classes = [
    'link',
    \`color_\${resolvedColor}\`,
    resolvedSize && \`size_\${resolvedSize}\`,
    underline && 'link_underline',
    noUnderline && 'link_no-underline',
    standalone && 'link_standalone',
    nav && 'link_nav',
    block && 'link_block',
    back && 'link_back',
    iconOnly && 'link_icon-only',
    active && 'is-active',
    disabled && 'is-disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  function handleClick(event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    // href가 없거나 #이면 페이지 점프를 막고 onClick만 실행합니다.
    if (!href || href === '#') event.preventDefault();
    onClick?.(event);
  }

  return (
    <Root
      {...props}
      aria-current={active ? 'page' : undefined}
      aria-disabled={disabled || undefined}
      aria-label={ariaLabel}
      className={classes}
      data-component="Link"
      data-ripple={ripple ? 'true' : 'false'}
      disabled={isButton ? disabled : undefined}
      href={acceptsHref ? href || '#' : undefined}
      onClick={handleClick}
      rel={acceptsHref ? rel : undefined}
      tabIndex={disabled ? -1 : props.tabIndex}
      target={acceptsHref ? target : undefined}
      type={isButton ? 'button' : undefined}
    >
      {icon}
      {!iconOnly ? content : null}
      {iconAfter}
    </Root>
  );
}

export default Link;
`})))()}var E;function D(){return(D=e((()=>{E=`<!--
  Link 원본 구현.
  시맨틱 루트와 공통 CSS 클래스를 조합하고 전달 속성과 접근성 의미를 연결합니다.
-->
<script setup>
import { computed, useAttrs, useSlots } from 'vue';

defineOptions({ name: 'UxkmLink', inheritAttrs: false });

const props = defineProps({
  as: { type: [String, Object, Function], default: 'a' }, // 루트 요소 또는 컴포넌트입니다. 기본은 a입니다.
  ripple: { type: Boolean, default: true }, // 클릭 리플 효과를 켭니다.
  color: { type: String, default: 'primary' }, // color_* 공통 색상 클래스입니다.
  size: { type: String, default: '' }, // sm · lg · xl 크기입니다.
  underline: Boolean, // 항상 밑줄을 표시합니다.
  noUnderline: Boolean, // 밑줄을 제거합니다.
  standalone: Boolean, // 터치 영역을 확대합니다.
  nav: Boolean, // 내비게이션 링크 스타일입니다.
  block: Boolean, // 블록형 링크입니다.
  back: Boolean, // 뒤로가기 링크 스타일입니다.
  iconOnly: Boolean, // 텍스트 없이 아이콘만 표시합니다.
  active: Boolean, // 현재 페이지 활성 상태입니다.
  disabled: Boolean, // 비활성 상태입니다.
  label: String, // 기본 slot이 없을 때 표시할 텍스트입니다.
  href: String, // 링크 주소입니다.
  target: String, // 링크 target입니다.
  rel: String, // 링크 rel입니다.
  ariaLabel: String, // 접근성 이름입니다.
});

const emit = defineEmits(['click']);
const attrs = useAttrs();
const slots = useSlots();
const colors = new Set(['primary', 'muted', 'success', 'warning', 'danger', 'info']);
const sizes = new Set(['', 'sm', 'lg', 'xl']);
const resolvedColor = computed(() => (colors.has(props.color) ? props.color : 'primary'));
const resolvedSize = computed(() => (sizes.has(props.size) ? props.size : ''));
const rootTag = computed(() => props.as || 'a');
const isAnchor = computed(() => rootTag.value === 'a');
const isButton = computed(() => rootTag.value === 'button');
const acceptsHref = computed(() => isAnchor.value || typeof rootTag.value !== 'string');
const showLabel = computed(
  () => !props.iconOnly && (Boolean(slots.default) || Boolean(props.label)),
);
const classes = computed(() =>
  [
    'link',
    \`color_\${resolvedColor.value}\`,
    resolvedSize.value && \`size_\${resolvedSize.value}\`,
    props.underline && 'link_underline',
    props.noUnderline && 'link_no-underline',
    props.standalone && 'link_standalone',
    props.nav && 'link_nav',
    props.block && 'link_block',
    props.back && 'link_back',
    props.iconOnly && 'link_icon-only',
    props.active && 'is-active',
    props.disabled && 'is-disabled',
    attrs.class,
  ].filter(Boolean),
);

function handleClick(event) {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (!props.href || props.href === '#') event.preventDefault();
  emit('click', event);
}
<\/script>

<template>
  <component
    :is="rootTag"
    v-bind="attrs"
    :aria-current="active ? 'page' : undefined"
    :aria-disabled="disabled || undefined"
    :aria-label="ariaLabel || attrs['aria-label']"
    :class="classes"
    data-component="Link"
    :data-ripple="ripple ? 'true' : 'false'"
    :disabled="isButton ? disabled : undefined"
    :href="acceptsHref ? href || '#' : undefined"
    :rel="acceptsHref ? rel : undefined"
    :tabindex="disabled ? -1 : attrs.tabindex"
    :target="acceptsHref ? target : undefined"
    :type="isButton ? 'button' : undefined"
    @click="handleClick"
  >
    <slot name="icon" />
    <slot v-if="showLabel">{{ label }}</slot>
    <slot name="icon-after" />
  </component>
</template>
`})))()}function O(e){let t={};return e.replace(/([\w-]+)(?:="([^"]*)")?/g,(e,n,r)=>(t[n]=r??!0,``)),t}function k(e){return`<svg class="link_icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">${F[e]||F.external}</svg>`}function A(e){return[`link`,`color_${e.color||`primary`}`,e.size&&`size_${e.size}`,e.underline&&`link_underline`,e[`no-underline`]&&`link_no-underline`,e.standalone&&`link_standalone`,e.nav&&`link_nav`,e.block&&`link_block`,e.back&&`link_back`,e[`icon-only`]&&`link_icon-only`,e.active&&`is-active`,e.disabled&&`is-disabled`].filter(Boolean).join(` `)}function ae(e){let t=O(e),n=String(t.as||`a`),r=A(t),i=t[`icon-only`]?``:String(t.label||``),a=t.icon?k(String(t.icon)):``,o=t[`icon-after`]?k(String(t[`icon-after`])):``;return`<${n} ${[`class="${r}"`,`data-ripple="true"`,n===`a`?`href="${t.href||`#`}"`:`type="button"`,t.target?`target="${t.target}"`:``,t.rel?`rel="${t.rel}"`:``,t[`aria-label`]?`aria-label="${t[`aria-label`]}"`:``,t.active?`aria-current="page"`:``,t.disabled?`aria-disabled="true" tabindex="-1"`:``,n===`button`&&t.disabled?`disabled`:``].filter(Boolean).join(` `)}>${a}${i}${o}</${n}>`}function oe(e){return e.replace(/<Link\s+([^>]*?)\s*\/>/g,(e,t)=>ae(t))}function se(e){let t=[],n=/:([\w-]+)="([^"]*)"|([\w-]+)(?:="([^"]*)")?/g,r;for(;r=n.exec(e);){if(r[1]){let e=I[r[1]]??r[1];t.push(`${e}=${r[2]}`);continue}let e=r[3],n=r[4],i=I[e]??e;n==null?t.push(`${i}=true`):/^-?\d+(\.\d+)?$/.test(n)?t.push(`${i}=${n}`):t.push(`${i}='${n}'`)}return t.join(`, `)}function ce(e){let t=e.replace(/<Link\s+([^>]*?)\s*\/>/g,(e,t)=>{let n=se(t.trim());return n?`{{ link(${n}) }}`:`{{ link() }}`});return t=t.replace(/(<(?:div|nav|section|ul|ol|aside|header|main|footer)\b[^>]*)>\{\{/gi,`$1>
  {{`).replace(/\}\}\{\{/g,`}}
  {{`).replace(/\}\}\s*(<\/(?:div|nav|section|ul|ol|aside|header|main|footer)>)/gi,`}}
$1`).replace(/\n{3,}/g,`

`),`{% from "components/basic/Link/link.njk" import link %}\n\n${t.trim()}`}function le(e){return e.replace(/class=/g,`className=`).replace(/<Link\s+([^>]*?)\s*\/>/g,(e,t)=>{let n=O(t),r=Object.entries(n).filter(([e])=>e!==`icon`&&e!==`icon-after`).map(([e,t])=>{let n=e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase());return t===!0||P.has(e)&&t===`true`?n:`${n}="${t}"`});return n.icon&&r.push(`icon={<Icon className="link_icon" name="${n.icon}" />}`),n[`icon-after`]&&r.push(`iconAfter={<Icon className="link_icon" name="${n[`icon-after`]}" />}`),`<Link ${r.join(` `)} />`})}function ue(e){return e.replace(/<Link\s+([^>]*?)\s*\/>/g,(e,t)=>{let n=O(t),r=n.icon,i=n[`icon-after`],a=Object.entries(n).filter(([e])=>e!==`icon`&&e!==`icon-after`).map(([e,t])=>t===!0||P.has(e)&&t===`true`?e:`${e}="${t}"`).join(` `);return!r&&!i?`<Link ${a} />`:[`<Link ${a}>`,r?`  <template #icon><Icon class="link_icon" name="${r}" /></template>`:``,i?`  <template #icon-after><Icon class="link_icon" name="${i}" /></template>`:``,`</Link>`].filter(Boolean).join(`
`)})}function j(e,t){let n=`${t[0].toUpperCase()}${t.slice(1)}`,r=0,i=0,a=e.replace(/<Link\s+([^>]*?)\s*\/>/g,(e,t)=>{let i=O(t),a=`link${n}${++r}`,o=A(i),s=String(i.label??i[`aria-label`]??`링크`),c=i.icon??i[`icon-after`],l=c?`<!-- 아이콘 ${c}: 프로젝트 이미지 또는 CSS 리소스에 연결 -->\n`:``;if(i.as===`button`)return`${l}<xf:trigger\n  type="button"\n  id="${a}"\n  class="${o}"${i.disabled?`
  disabled="true"`:`
  ev:onclick="scwin.linkAction_onclick"`}>\n  <xf:label><![CDATA[${s}]]></xf:label>\n</xf:trigger>`;let u=[`id="${a}"`,`outerDiv="false"`,`href="${i.href||`#`}"`,i.target?`target="${i.target}"`:``,`class="${o}"`,i.disabled?`disabled="true"`:``,i[`aria-label`]?`title="${i[`aria-label`]}"`:``].filter(Boolean).join(`
  `);return`${l}${i.target===`_blank`&&i.rel?`<!-- 새 창 opener 정책은 WebSquare 프로젝트의 공통 보안 설정을 확인합니다. -->
`:``}<w2:anchor\n  ${u}>\n  <xf:label><![CDATA[${s}]]></xf:label>\n</w2:anchor>`});return a=a.replace(/<(\/)?div\b([^>]*)>/g,(e,t,r)=>{if(t)return`</w2:group>`;let a=r.match(/\sclass="([^"]*)"/)?.[1]??``;return`<w2:group\n  id="link${n}Group${++i}"${a?`\n  class="${a}"`:``}>`}),`<w2:group id="link${n}Example">
${a.split(`
`).map(e=>`  ${e}`).join(`
`)}
</w2:group>`}function de(e){let t=N[e],n=oe(t),r=ce(t),i=le(t),a=ue(t);return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/basic/Link/Link.html · ${e}`,code:n},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/basic/Link/link.njk · ${e}`,code:`{# Link · ${e} #}\n${r}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/link → apps/vue/src/components/basic/Link/Link.vue · ${e}`,code:`<script setup>\nimport Link from '@uxkm/vue/link';\nimport Icon from '@uxkm/vue/icon';\n<\/script>\n\n<template>\n${a.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/link → apps/vue/src/components/basic/Link/Link.vue · ${e}`,code:`<script setup>\nimport Link from '@uxkm/vue/link';\nimport Icon from '@uxkm/vue/icon';\n<\/script>\n\n<template>\n${a.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`},{id:`react`,label:`React`,fileName:`@uxkm/react/link → apps/react/src/components/basic/Link/Link.jsx · ${e}`,code:`import Link from '@uxkm/react/link';\nimport Icon from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n  <>\n${i.split(`
`).map(e=>e.trim()?`    ${e.trimStart()}`:``).join(`
`)}\n  </>\n  );\n}`},{id:`next`,label:`Next`,fileName:`@uxkm/react/link → apps/react/src/components/basic/Link/Link.jsx · ${e}`,code:`import Link from '@uxkm/react/link';\nimport Icon from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n  <>\n${i.split(`
`).map(e=>e.trim()?`    ${e.trimStart()}`:``).join(`
`)}\n  </>\n  );\n}`},{id:`websquare`,label:`WebSquare`,fileName:`Link.xml · ${e}`,code:j(t,e)}]}var M,N,P,F,I,L;function R(){return(R=e((()=>{x(),C(),T(),D(),M=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/basic/Link/Link.html`,code:b},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/basic/Link/link.njk`,code:S},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/basic/Link/Link.vue`,code:E},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/link → Link.vue`,code:E},{id:`react`,label:`React`,fileName:`apps/react/src/components/basic/Link/Link.jsx`,code:w},{id:`next`,label:`Next`,fileName:`@uxkm/react/link → Link.jsx`,code:w}],N={basic:`<div class="link_row">
  <Link label="더 보기" />
  <Link label="가이드 문서" />
  <Link underline label="항상 밑줄" />
</div>`,source:`<div class="link_row">
  <Link icon="user" label="프로필" />
  <a class="link color_primary" href="#">
    <img class="link_media" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20rx%3D%228%22%20fill%3D%22%236366f1%22%2F%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2212%22%20r%3D%225%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M7%2029a9%209%200%200%201%2018%200%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E" alt="" />
    사용자 정보
  </a>
  <Link as="button" icon="settings" label="설정 열기" />
</div>`,colors:`<div class="link_row">
  <Link color="primary" label="Primary" />
  <Link color="muted" label="Muted" />
  <Link color="success" label="Success" />
  <Link color="warning" label="Warning" />
  <Link color="danger" label="Danger" />
  <Link color="info" label="Info" />
</div>`,sizes:`<div class="link_row">
  <Link size="sm" label="Small" />
  <Link label="Base" />
  <Link size="lg" label="Large" />
  <Link size="xl" label="Extra Large" />
</div>`,styles:`<div class="link_row">
  <Link label="기본 (hover 밑줄)" />
  <Link underline label="항상 밑줄" />
  <Link no-underline label="밑줄 없음" />
  <Link standalone label="터치 영역 확대" />
</div>`,navigation:`<nav class="link_group-inline" aria-label="섹션 내비게이션">
  <Link nav active label="개요" />
  <Link nav label="컴포넌트" />
  <Link nav label="토큰" />
  <Link nav label="접근성" />
</nav>
<Link back icon="arrow-left" label="목록으로 돌아가기" />`,block:`<div class="link_group">
  <Link block icon="book" label="가이드 시작하기" />
  <Link block icon="download" label="파일 다운로드" />
  <Link block color="muted" icon="settings" label="환경 설정" />
</div>`,iconOnly:`<div class="link_row">
  <Link icon-only icon="search" aria-label="검색" />
  <Link icon-only icon="edit" aria-label="편집" />
  <Link icon-only color="muted" icon="settings" aria-label="더 보기" />
</div>`,icons:`<div class="link_row">
  <Link icon="download" label="다운로드" />
  <Link icon-after="external" label="외부 링크" />
  <Link back icon="arrow-left" label="이전 페이지" />
</div>`,external:`<Link href="https://example.com" target="_blank" rel="noopener noreferrer" icon-after="external" label="외부 사이트 열기 (새 창)" />`,disabled:`<div class="link_row">
  <Link disabled label="비활성 링크" />
  <Link as="button" disabled label="비활성 버튼형 링크" />
</div>`,context:`<div class="alert color_info" role="status">
  <strong>업데이트 안내</strong>
  <p>새 버전의 변경 사항을 확인하세요.</p>
  <Link size="sm" label="릴리스 노트 보기" />
</div>
<p>아직 계정이 없나요? <Link label="회원가입" /></p>`},P=new Set([`underline`,`no-underline`,`standalone`,`nav`,`block`,`back`,`icon-only`,`active`,`disabled`]),F={user:`<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>`,settings:`<circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 0 0-14 0 7 7 0 0 0 14 0Z"></path>`,"arrow-left":`<path d="M19 12H5m7 7-7-7 7-7"></path>`,book:`<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 0 0-5H20"></path>`,download:`<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"></path>`,search:`<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>`,edit:`<path d="M4 20h4L19 9l-4-4L4 16v4Z"></path>`,external:`<path d="M14 4h6v6M20 4l-9 9M18 13v7H4V6h7"></path>`},I={"no-underline":`noUnderline`,"icon-only":`iconOnly`,"icon-after":`iconAfter`,"aria-label":`ariaLabel`,class:`className`},L=Object.fromEntries(Object.keys(N).map(e=>[e,de(e)]))})))()}var z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{z=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],B=[{name:`as`,type:`ElementType`,default:`a`,description:`a, button 또는 커스텀 링크 컴포넌트로 루트를 변경합니다.`},{name:`color`,type:`'primary' | 'muted' | 'success' | 'warning' | 'danger' | 'info'`,default:`primary`,description:`공통 color_* 색상입니다.`},{name:`size`,type:`'sm' | 'lg' | 'xl'`,default:`—`,description:`공통 size_* 텍스트 크기입니다.`},{name:`underline`,type:`boolean`,default:`false`,description:`항상 밑줄을 표시합니다.`},{name:`noUnderline`,type:`boolean`,default:`false`,description:`hover 상태에서도 밑줄을 표시하지 않습니다.`},{name:`standalone`,type:`boolean`,default:`false`,description:`독립 링크의 터치 영역을 확장합니다.`},{name:`nav`,type:`boolean`,default:`false`,description:`내비게이션 링크 스타일을 적용합니다.`},{name:`block`,type:`boolean`,default:`false`,description:`부모 너비를 채우는 블록 링크입니다.`},{name:`back`,type:`boolean`,default:`false`,description:`뒤로가기 링크의 간격과 아이콘 크기를 적용합니다.`},{name:`iconOnly`,type:`boolean`,default:`false`,description:`텍스트 없이 아이콘만 표시합니다.`},{name:`active`,type:`boolean`,default:`false`,description:`is-active와 aria-current="page"를 적용합니다.`},{name:`disabled`,type:`boolean`,default:`false`,description:`비활성 스타일, aria-disabled, tabindex=-1과 클릭 차단을 적용합니다.`},{name:`label`,type:`string`,default:`—`,description:`링크 텍스트. children 또는 기본 슬롯으로 대체할 수 있습니다.`},{name:`href`,type:`string`,default:`#`,description:`이동 URL입니다.`},{name:`target`,type:`string`,default:`—`,description:`네이티브 target 속성입니다.`},{name:`rel`,type:`string`,default:`—`,description:`네이티브 rel 속성입니다.`},{name:`ariaLabel`,type:`string`,default:`—`,description:`아이콘 전용 링크 등의 접근성 이름입니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`클릭 파장 효과를 설정합니다.`},{name:`className`,type:`string`,default:`''`,description:`React 루트에 추가할 클래스입니다.`}],V=B.map(e=>e.name===`noUnderline`?{...e,name:`no-underline`}:e.name===`iconOnly`?{...e,name:`icon-only`}:e.name===`ariaLabel`?{...e,name:`aria-label`}:e.name===`className`?{...e,name:`class`,description:`Vue 루트에 추가할 클래스입니다.`}:e),H=[{name:`children`,type:`ReactNode`,default:`label`,description:`링크 텍스트·이미지·커스텀 콘텐츠입니다.`},{name:`icon`,type:`ReactNode`,default:`—`,description:`텍스트 앞 아이콘입니다. link_icon 클래스를 적용합니다.`},{name:`iconAfter`,type:`ReactNode`,default:`—`,description:`텍스트 뒤 아이콘입니다. link_icon 클래스를 적용합니다.`}],U=[{name:`default`,type:`slot`,default:`label`,description:`링크 텍스트·이미지·커스텀 콘텐츠입니다.`},{name:`icon`,type:`slot`,default:`—`,description:`텍스트 앞 아이콘 슬롯입니다.`},{name:`icon-after`,type:`slot`,default:`—`,description:`텍스트 뒤 아이콘 슬롯입니다.`}],W=[{name:`href`,type:`string`,default:`#`,description:`링크 이동 경로입니다.`},{name:`target="_blank" + rel="noopener noreferrer"`,type:`attribute`,default:`—`,description:`새 창 링크의 보안 속성 조합입니다.`},{name:`aria-current="page"`,type:`attribute`,default:`—`,description:`현재 내비게이션 항목을 표시합니다.`},{name:`aria-disabled="true" + tabindex="-1"`,type:`attribute`,default:`—`,description:`비활성 링크를 접근성 트리와 키보드 탐색에 반영합니다.`},{name:`aria-label`,type:`string`,default:`—`,description:`텍스트 없는 아이콘 링크의 접근성 이름입니다.`}],G=[{name:`link`,type:`macro`,default:`—`,description:'`{% from "components/basic/Link/link.njk" import link %}`로 import한 뒤 `{{ link(...) }}` 또는 `{% call %}`로 인스턴스를 만듭니다.'},{name:`as · href · target · rel`,type:`string`,default:`'a' · '#' · '' · ''`,description:`루트 태그와 a 전용 이동·창·rel 속성입니다. as가 button이면 type="button"을 씁니다.`},{name:`color · size`,type:`string`,default:`'primary' · ''`,description:`공통 color_* · size_* 클래스입니다.`},{name:`underline · noUnderline · standalone · nav · block · back · iconOnly`,type:`boolean`,default:`false`,description:`밑줄·터치·내비게이션·블록·뒤로가기·아이콘 전용 변형입니다.`},{name:`active · disabled`,type:`boolean`,default:`false`,description:`현재 페이지·비활성 상태입니다.`},{name:`label · icon · iconAfter · ariaLabel · ripple · className`,type:`mixed`,default:`—`,description:"텍스트·Icon 이름·접근성·파장·추가 클래스입니다. `{% call %}` 본문이 있으면 본문이 우선합니다."}],K=[{name:`w2:anchor`,type:`component`,default:`—`,description:`URL·페이지 위치 이동에 사용하는 WebSquare 링크 루트입니다.`},{name:`xf:label`,type:`child`,default:`—`,description:`Anchor에 표시할 링크 텍스트입니다. label 속성만으로는 화면에 표시되지 않습니다.`},{name:`href`,type:`URL`,default:`javascript:void(null)`,description:`상대 경로, 전체 URL, 페이지 내 앵커 등 이동 대상을 지정합니다.`},{name:`target`,type:`'_self' | '_blank' | '_parent' | '_top'`,default:`_self`,description:`링크가 열릴 브라우징 컨텍스트입니다.`},{name:`outerDiv`,type:`boolean`,default:`true`,description:`false이면 불필요한 외부 div 없이 링크 구조를 렌더링합니다.`},{name:`class`,type:`styleclass`,default:`link color_primary`,description:`공통 Link·색상·크기·상태 클래스를 적용합니다.`},{name:`disabled`,type:`boolean`,default:`false`,description:`링크 이동과 상호작용을 비활성화합니다.`},{name:`xf:trigger + ev:onclick`,type:`component / event`,default:`—`,description:`URL 이동이 아닌 버튼형 보조 액션에 사용합니다.`},{name:`setHref(href)`,type:`method`,default:`—`,description:`실행 중 Anchor 이동 경로를 변경합니다.`}],q=[{name:`link`,type:`class`,default:`—`,description:`하이퍼링크 루트`},{name:`link_underline · link_no-underline · link_standalone`,type:`class`,default:`—`,description:`밑줄과 터치 영역 변형`},{name:`link_nav · link_back · link_block · link_icon-only`,type:`class`,default:`—`,description:`용도별 변형`},{name:`link_icon · link_media`,type:`class`,default:`—`,description:`링크 내부 아이콘과 이미지`},{name:`link_row · link_group · link_group-inline`,type:`class`,default:`—`,description:`링크 묶음 레이아웃`},{name:`is-active · is-disabled`,type:`class`,default:`—`,description:`활성·비활성 상태`},{name:`color_* · size_*`,type:`class`,default:`—`,description:`공통 색상·크기 유틸리티`}],J=[{name:`--link-gap`,type:`length`,default:`var(--space-xs)`,description:`아이콘과 텍스트 간격`},{name:`--link-font-weight`,type:`font-weight`,default:`500`,description:`링크 글자 굵기`},{name:`--link-underline-offset`,type:`length`,default:`2px`,description:`밑줄 오프셋`},{name:`--link-nav-padding-y · --link-nav-padding-x`,type:`length`,default:`0.35rem · 0.5rem`,description:`내비게이션 링크 패딩`},{name:`--link-standalone-padding-y · --link-standalone-padding-x`,type:`length`,default:`0.25rem · 0.15rem`,description:`독립 링크 터치 영역`},{name:`--link-icon-only-size`,type:`length`,default:`2rem`,description:`아이콘 전용 링크 크기`}],Y=[{title:`React · Next.js API · Props`,description:"Next.js는 `@uxkm/react/link`을 재사용합니다.",tables:[{columns:z,rows:B}]},{title:`React · Next.js API · Children`,tables:[{columns:z,rows:H}]},{title:`Vue · Nuxt API · Props`,description:"Nuxt는 `@uxkm/vue/link`를 재사용합니다.",tables:[{columns:z,rows:V}]},{title:`Vue · Nuxt API · Slots`,tables:[{columns:z,rows:U}]},{title:`HTML API · Markup`,description:`HTML은 네이티브 링크 속성과 공통 클래스를 직접 적용합니다.`,tables:[{columns:z,rows:W}]},{title:`Gulp API · Nunjucks`,description:"`link` macro를 import하고 `{{ link(...) }}`로 조합합니다. 아이콘은 `icon` · `iconAfter` 이름 문자열로 Icon macro를 호출합니다.",tables:[{columns:z,rows:G}]},{title:`WebSquare API · XML`,description:`URL 이동은 w2:anchor, 화면 로직을 실행하는 버튼형 링크는 xf:trigger와 scwin 이벤트로 구분합니다.`,tables:[{columns:z,rows:K}]},{title:`공통 API · 클래스`,tables:[{columns:z,rows:q}]},{title:`공통 API · 디자인 토큰`,tables:[{columns:z,rows:J}]}]})))()}function Z(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,..._(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(i,{of:ee}),`
`,(0,Q.jsx)(t.h1,{id:`link`,children:`Link`}),`
`,(0,Q.jsxs)(t.p,{children:[`페이지 이동과 보조 액션에 사용하는 하이퍼링크 컴포넌트입니다. 본문 안 인라인 링크는 Typography의 `,(0,Q.jsx)(t.code,{children:`typo_link`}),`를 사용합니다.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,Q.jsx)(t.code,{children:`@uxkm/vue/link`}),`, `,(0,Q.jsx)(t.code,{children:`@uxkm/react/link`}),`로 제공합니다. Nuxt와 Next.js는 같은 구현을 재사용합니다.`]}),`
`,(0,Q.jsxs)(t.p,{children:[`WebSquare는 URL 이동에 `,(0,Q.jsx)(t.code,{children:`w2:anchor`}),`, 버튼형 보조 액션에 `,(0,Q.jsx)(t.code,{children:`xf:trigger`}),`를 사용합니다. Anchor의 표시 텍스트는 `,(0,Q.jsx)(t.code,{children:`label`}),` 속성이 아니라 자식 `,(0,Q.jsx)(t.code,{children:`xf:label`}),`에 작성하며, 각 예시의 WebSquare 탭은 화면 루트에서 `,(0,Q.jsx)(t.code,{children:`w2`}),`, `,(0,Q.jsx)(t.code,{children:`xf`}),`, `,(0,Q.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 XML 조각입니다.`]}),`
`,(0,Q.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,Q.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,Q.jsx)(t.code,{children:`Link`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 전달받은 prop을 공통 CSS 클래스와 접근성 속성으로 변환하고, HTML은 같은 클래스를 마크업에 직접 적용하며, Gulp는 `,(0,Q.jsx)(t.code,{children:`link`}),` Nunjucks macro로 동일한 계약을 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`color`}),`·`,(0,Q.jsx)(t.code,{children:`size`}),`는 허용된 값만 `,(0,Q.jsx)(t.code,{children:`color_*`}),`·`,(0,Q.jsx)(t.code,{children:`size_*`}),` 클래스로 변환됩니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`underline`}),`·`,(0,Q.jsx)(t.code,{children:`noUnderline`}),`·`,(0,Q.jsx)(t.code,{children:`standalone`}),`·`,(0,Q.jsx)(t.code,{children:`nav`}),`·`,(0,Q.jsx)(t.code,{children:`block`}),`·`,(0,Q.jsx)(t.code,{children:`back`}),`·`,(0,Q.jsx)(t.code,{children:`iconOnly`}),`는 대응 `,(0,Q.jsx)(t.code,{children:`link_*`}),` 클래스로 변환됩니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`active`}),`는 `,(0,Q.jsx)(t.code,{children:`is-active`}),`와 `,(0,Q.jsx)(t.code,{children:`aria-current="page"`}),`를, `,(0,Q.jsx)(t.code,{children:`disabled`}),`는 `,(0,Q.jsx)(t.code,{children:`is-disabled`}),`와 `,(0,Q.jsx)(t.code,{children:`tabIndex=-1`}),`을 설정합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[(0,Q.jsx)(t.code,{children:`as`}),`로 루트 요소를 바꿀 수 있습니다. `,(0,Q.jsx)(t.code,{children:`a`}),` 또는 컴포넌트 루트에는 `,(0,Q.jsx)(t.code,{children:`href`}),`를 전달하고, `,(0,Q.jsx)(t.code,{children:`button`}),`에는 `,(0,Q.jsx)(t.code,{children:`type="button"`}),`을 전달합니다.`]}),`
`,(0,Q.jsxs)(t.li,{children:[`React는 `,(0,Q.jsx)(t.code,{children:`icon`}),`·`,(0,Q.jsx)(t.code,{children:`iconAfter`}),`, Vue는 `,(0,Q.jsx)(t.code,{children:`icon`}),`·`,(0,Q.jsx)(t.code,{children:`icon-after`}),` 슬롯, Gulp는 `,(0,Q.jsx)(t.code,{children:`icon`}),`·`,(0,Q.jsx)(t.code,{children:`iconAfter`}),` 이름 문자열로 Icon macro를 호출합니다.`]}),`
`]}),`
`,(0,Q.jsx)(o,{examples:M,showFullCode:!0}),`
`,(0,Q.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`href`}),`가 있는 링크는 브라우저의 기본 이동 의미를 유지하고, 화면 상태 변경이나 팝업 실행은 `,(0,Q.jsx)(t.code,{children:`ev:onclick`}),`으로 `,(0,Q.jsx)(t.code,{children:`scwin`}),` 함수에 연결합니다. 새 창은 `,(0,Q.jsx)(t.code,{children:`target="_blank"`}),`를 사용하되 opener 제어 등 보안 정책은 WebSquare 프로젝트의 공통 창 열기 정책을 함께 확인합니다. 아이콘은 Icon과 동일하게 프로젝트 정적 리소스 또는 CSS 배경 이미지로 연결합니다.`]}),`
`,(0,Q.jsx)(t.pre,{children:(0,Q.jsx)(t.code,{className:`language-javascript`,children:`scwin.linkAction_onclick = function () {
  // 팝업 열기 또는 화면 상태 변경 로직을 호출합니다.
};
`})}),`
`,(0,Q.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,Q.jsx)(t.p,{children:`기본 색상은 primary이며 hover 시 밑줄이 표시됩니다.`}),`
`,(0,Q.jsx)(r,{of:g,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:L.basic}),`
`,(0,Q.jsx)(t.h2,{id:`이미지--아이콘--커스텀-요소`,children:`이미지 · 아이콘 · 커스텀 요소`}),`
`,(0,Q.jsxs)(t.p,{children:[`children 또는 기본 슬롯에 이미지·아이콘·컴포넌트를 조합할 수 있으며, `,(0,Q.jsx)(t.code,{children:`as`}),`로 루트 요소를 변경할 수 있습니다.`]}),`
`,(0,Q.jsx)(r,{of:s,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:L.source}),`
`,(0,Q.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,Q.jsxs)(t.p,{children:[`공통 `,(0,Q.jsx)(t.code,{children:`color_*`}),` 클래스를 조합합니다. 다른 컴포넌트와 동일한 색상 계약을 사용합니다.`]}),`
`,(0,Q.jsx)(r,{of:m,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:L.colors}),`
`,(0,Q.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,Q.jsxs)(t.p,{children:[`공통 `,(0,Q.jsx)(t.code,{children:`size_*`}),` 클래스로 텍스트 크기를 조절합니다.`]}),`
`,(0,Q.jsx)(r,{of:l,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:L.sizes}),`
`,(0,Q.jsx)(t.h2,{id:`스타일`,children:`스타일`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`underline`}),` · `,(0,Q.jsx)(t.code,{children:`noUnderline`}),` · `,(0,Q.jsx)(t.code,{children:`standalone`}),`으로 밑줄과 터치 영역을 조절합니다.`]}),`
`,(0,Q.jsx)(r,{of:u,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:L.styles}),`
`,(0,Q.jsx)(t.h2,{id:`내비게이션`,children:`내비게이션`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`nav`}),` · `,(0,Q.jsx)(t.code,{children:`active`}),`로 메뉴·탭 링크를 표현합니다. 현재 페이지에는 `,(0,Q.jsx)(t.code,{children:`aria-current="page"`}),`가 적용됩니다.`]}),`
`,(0,Q.jsx)(r,{of:re,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:L.navigation}),`
`,(0,Q.jsx)(t.h2,{id:`블록--그룹`,children:`블록 · 그룹`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`block`}),`과 `,(0,Q.jsx)(t.code,{children:`link_group`}),`으로 세로 링크 목록을 구성합니다.`]}),`
`,(0,Q.jsx)(r,{of:ne,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:L.block}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘-전용`,children:`아이콘 전용`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`iconOnly`}),`로 텍스트 없는 링크를 만듭니다. 접근성을 위해 `,(0,Q.jsx)(t.code,{children:`aria-label`}),`을 반드시 지정합니다.`]}),`
`,(0,Q.jsx)(r,{of:c,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:L.iconOnly}),`
`,(0,Q.jsx)(t.h2,{id:`아이콘`,children:`아이콘`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`icon`}),` · `,(0,Q.jsx)(t.code,{children:`iconAfter`}),` 또는 Vue의 `,(0,Q.jsx)(t.code,{children:`#icon`}),` · `,(0,Q.jsx)(t.code,{children:`#icon-after`}),` 슬롯으로 텍스트 앞뒤에 아이콘을 배치합니다. 장식용 아이콘은 접근성 트리에서 숨깁니다.`]}),`
`,(0,Q.jsx)(r,{of:p,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:L.icons}),`
`,(0,Q.jsx)(t.h2,{id:`새-창-열기`,children:`새 창 열기`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`target="_blank"`}),`와 `,(0,Q.jsx)(t.code,{children:`rel="noopener noreferrer"`}),`를 함께 지정합니다. 링크 텍스트에는 새 창 안내를 포함합니다.`]}),`
`,(0,Q.jsx)(r,{of:h,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:L.external}),`
`,(0,Q.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`disabled`}),`는 `,(0,Q.jsx)(t.code,{children:`is-disabled`}),`, `,(0,Q.jsx)(t.code,{children:`aria-disabled`}),`, `,(0,Q.jsx)(t.code,{children:`tabindex=-1`}),`을 적용하고 클릭을 차단합니다. HTML에서는 필요에 따라 `,(0,Q.jsx)(t.code,{children:`href`}),`를 제거하거나 `,(0,Q.jsx)(t.code,{children:`span`}),`으로 대체합니다.`]}),`
`,(0,Q.jsx)(r,{of:f,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:L.disabled}),`
`,(0,Q.jsx)(t.h2,{id:`문맥-속-사용`,children:`문맥 속 사용`}),`
`,(0,Q.jsx)(t.p,{children:`알림·카드·폼 등 다른 컴포넌트 안에서 보조 액션 링크로 활용합니다.`}),`
`,(0,Q.jsx)(r,{of:d,sourceState:`none`}),`
`,(0,Q.jsx)(o,{examples:L.context}),`
`,(0,Q.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.code,{children:`active`}),`는 `,(0,Q.jsx)(t.code,{children:`aria-current="page"`}),`를 적용합니다. `,(0,Q.jsx)(t.code,{children:`disabled`}),`는 `,(0,Q.jsx)(t.code,{children:`aria-disabled`}),`와 `,(0,Q.jsx)(t.code,{children:`tabindex=-1`}),`로 키보드·클릭을 차단합니다. `,(0,Q.jsx)(t.code,{children:`iconOnly`}),`와 텍스트 없는 링크는 `,(0,Q.jsx)(t.code,{children:`aria-label`}),`이 필요하며, 장식용 아이콘은 접근성 트리에서 숨깁니다.`]}),`
`,(0,Q.jsx)(y,{sections:Y})]})}function fe(e={}){let{wrapper:t}={..._(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=t(),ie(),n(),a(),v(),R(),X(),te()})))()}$();export{fe as default};