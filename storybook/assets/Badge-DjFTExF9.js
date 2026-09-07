import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./Badge.stories-B2Vs27aF.js";import{i as l,r as u}from"./react-DL__92zz.js";import{c as d,r as f,u as p}from"./blocks-Cy0HofPr.js";import{i as m,n as h,r as g,t as _}from"./ComponentApiDocs-Ci2QMeRq.js";import{n as v,r as y}from"./dataDisplayApiSections-w1k9tZfi.js";var b;function x(){return(x=e((()=>{b=`<!-- Badge 원본 구현: 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다. -->
<!-- badge와 color_*를 조합합니다. -->
<span class="badge color_primary" data-component="Badge">Primary</span>

<!-- 상태 점 · 카운트 변형 -->
<span class="badge badge_dot color_success" data-component="Badge">Active</span>
<span class="badge badge_count color_danger" data-component="Badge" aria-label="읽지 않은 알림 5건">5</span>

<!-- 겹침: badge_wrap 안에 기준 요소와 Badge를 배치합니다. -->
<span class="badge_wrap" data-component="BadgeWrap">
  <button class="btn btn_filled color_primary" type="button">
    <span class="btn_label">알림</span>
  </button>
  <span class="badge badge_count color_danger" data-component="Badge" aria-label="읽지 않은 알림 5건">5</span>
</span>
<span class="badge_wrap" data-component="BadgeWrap">
  <span class="avatar color_primary" aria-hidden="true">홍</span>
  <span class="badge_dot-only color_success" data-component="Badge" role="status" aria-label="온라인"></span>
</span>
`})))()}var S;function C(){return(C=e((()=>{S=`{# Badge 원본 구현: 시맨틱 루트와 공통 CSS 클래스를 조합하고 접근성 의미를 연결합니다. #}
{# badge · badgeWrap macro로 텍스트·상태 점·카운트·겹침 래퍼를 조합합니다. #}

{% macro badge(
  color = 'primary',
  size = 'md',
  dot = false,
  count = false,
  dotOnly = false,
  label = '',
  ariaLabel = '',
  className = ''
) %}
{%- if caller -%}
  {%- set content = caller() -%}
{%- else -%}
  {%- set content = label -%}
{%- endif -%}
{%- set resolvedSize = size if size in ['sm', 'md', 'lg'] else 'md' -%}
{%- set classes =
  ('badge_dot-only' if dotOnly else 'badge')
  + ' color_' + color
  + ((' badge_' + resolvedSize) if resolvedSize != 'md' else '')
  + (' badge_dot' if not dotOnly and dot else '')
  + (' badge_count' if not dotOnly and count else '')
  + ((' ' + className) if className else '')
-%}
<span
  class="{{ classes }}"
  data-component="Badge"
  {% if ariaLabel %}aria-label="{{ ariaLabel }}"{% endif %}
  {% if dotOnly %}role="status"{% endif %}
>{%- if not dotOnly -%}{{ content | safe }}{%- endif -%}</span>
{% endmacro %}

{% macro badgeWrap(
  ariaLabel = '',
  className = ''
) %}
{%- set content = caller() if caller else '' -%}
{%- set classes =
  'badge_wrap'
  + ((' ' + className) if className else '')
-%}
<span
  class="{{ classes }}"
  data-component="BadgeWrap"
  {% if ariaLabel %}aria-label="{{ ariaLabel }}"{% endif %}
>
  {{ content | safe }}
</span>
{% endmacro %}

{# include 시 기본 데모 (from import 시에는 실행되지 않음) #}
{{ badge(color='primary', label='Primary') }}
{{ badge(dot=true, color='success', label='Active') }}
{{ badge(count=true, color='danger', label='5', ariaLabel='읽지 않은 알림 5건') }}
`})))()}var w;function T(){return(T=e((()=>{w=`/**
 * Badge 원본 구현.
 * 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
 */
// 지원하지 않는 크기 값은 기본 md로 정규화합니다.
const VALID_SIZES = new Set(['sm', 'md', 'lg']);

// 텍스트, 상태 점, 카운트 형태와 접근성 이름을 하나의 Badge API로 조합합니다.
export function Badge({
  children, // 배지 텍스트입니다. 없으면 label을 사용합니다.
  label, // children 대신 표시할 텍스트입니다.
  color = 'primary', // color_* 공통 색상 클래스입니다.
  size = 'md', // sm · md · lg 크기입니다.
  dot = false, // 텍스트 옆 상태 점 변형입니다.
  count = false, // 카운트형 배지 스타일입니다.
  dotOnly = false, // 텍스트 없는 독립 상태 점입니다.
  ariaLabel, // 접근성 이름입니다. 상태 점에 권장합니다.
  className = '', // 추가 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // dotOnly는 독립 상태 점, 나머지는 badge 루트와 형태 클래스를 사용합니다.
  const resolvedSize = VALID_SIZES.has(size) ? size : 'md';
  const classes = [
    dotOnly ? 'badge_dot-only' : 'badge',
    \`color_\${color}\`,
    resolvedSize !== 'md' && \`badge_\${resolvedSize}\`,
    !dotOnly && dot && 'badge_dot',
    !dotOnly && count && 'badge_count',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // 텍스트 없는 상태 점은 status 역할과 aria-label로 의미를 제공합니다.
  return (
    <span
      {...props}
      aria-label={ariaLabel}
      className={classes}
      data-component="Badge"
      role={dotOnly ? 'status' : undefined}
    >
      {dotOnly ? null : (children ?? label)}
    </span>
  );
}

export function BadgeWrap({
  children, // 기준 요소와 Badge 자식들입니다.
  ariaLabel, // 겹침 영역의 접근성 이름입니다.
  className = '', // 추가 클래스입니다.
  ...props // 나머지 속성을 래퍼에 전달합니다.
}) {
  // 기준 요소와 Badge를 같은 좌표 컨텍스트에 배치하는 겹침 래퍼입니다.
  const classes = ['badge_wrap', className].filter(Boolean).join(' ');
  return (
    <span {...props} aria-label={ariaLabel} className={classes} data-component="BadgeWrap">
      {children}
    </span>
  );
}

export default Badge;
`})))()}var E;function D(){return(D=e((()=>{E=`<!--
  Badge 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// class를 포함한 전달 속성을 최외곽 span에 직접 적용합니다.
defineOptions({ name: 'UxkmBadge', inheritAttrs: false });

// 텍스트, 크기, 상태 점, 카운트와 접근성 이름을 prop으로 받습니다.
const props = defineProps({
  label: String, // children 대신 표시할 텍스트입니다.
  color: { type: String, default: 'primary' }, // color_* 공통 색상 클래스입니다.
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) }, // sm · md · lg 크기입니다.
  dot: Boolean, // 텍스트 옆 상태 점을 표시합니다.
  count: Boolean, // 카운트형 배지 스타일입니다.
  dotOnly: Boolean, // 텍스트 없는 독립 상태 점입니다.
  ariaLabel: String, // 접근성 이름입니다. 상태 점에 권장합니다.
});

const attrs = useAttrs();
// prop을 badge_*와 color_* 공통 클래스로 변환합니다.
const classes = computed(() =>
  [
    props.dotOnly ? 'badge_dot-only' : 'badge',
    \`color_\${props.color}\`,
    props.size !== 'md' && \`badge_\${props.size}\`,
    !props.dotOnly && props.dot && 'badge_dot',
    !props.dotOnly && props.count && 'badge_count',
    attrs.class,
  ].filter(Boolean),
);
<\/script>

<template>
  <!-- dotOnly는 빈 status 요소, 나머지는 slot 또는 label 텍스트를 렌더링합니다. -->
  <span
    v-bind="attrs"
    :class="classes"
    :aria-label="ariaLabel"
    :role="dotOnly ? 'status' : undefined"
    data-component="Badge"
    ><template v-if="!dotOnly"
      ><slot>{{ label }}</slot></template
    ></span
  >
</template>
`})))()}var O;function k(){return(k=e((()=>{O=`<!--
  BadgeWrap 원본 구현.
  데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다.
-->
<script setup>
defineOptions({ name: 'UxkmBadgeWrap' });

defineProps({
  ariaLabel: String, // 겹침 영역의 접근성 이름입니다.
});
<\/script>

<template>
  <!-- 기준 요소와 겹침 Badge를 같은 좌표 컨텍스트에 배치합니다. -->
  <span class="badge_wrap" :aria-label="ariaLabel" data-component="BadgeWrap"><slot /></span>
</template>
`})))()}function A(e){let t={},n=/([\w-]+)(?:="([^"]*)")?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2]==null||r[2];return t}function j(e){let t=A(e),n=String(t.size||`md`),r=!!(t.dotOnly||t[`dot-only`]),i=[r?`badge_dot-only`:`badge`,`color_${t.color||`primary`}`,n!==`md`&&`badge_${n}`,!r&&t.dot&&`badge_dot`,!r&&t.count&&`badge_count`].filter(Boolean).join(` `),a=t.ariaLabel||t[`aria-label`];return`<span ${[`class="${i}"`,`data-component="Badge"`,a&&`aria-label="${a}"`,r&&`role="status"`].filter(Boolean).join(` `)}>${r?``:String(t.label||``)}</span>`}function M(e){return e.replace(/<BadgeWrap([^>]*)>/g,(e,t)=>{let n=A(t.trim()),r=n.ariaLabel||n[`aria-label`]||``;return`<span class="badge_wrap" data-component="BadgeWrap"${r?` aria-label="${r}"`:``}>`}).replace(/<\/BadgeWrap>/g,`</span>`).replace(/<Badge\s+([^>]*?)\s*\/>/g,(e,t)=>j(t)).replace(/className=/g,`class=`)}function N(e){let t=[],n=/([\w-]+)(?:="([^"]*)")?/g,r;for(;r=n.exec(e);){let e=r[1],n=r[2],i=H[e]??e;n==null?t.push(`${i}=true`):t.push(`${i}='${n}'`)}return t.join(`, `)}function P(e){let t=e.replace(/<BadgeWrap([^>]*)>/g,(e,t)=>{let n=N(t.trim());return n?`{% call badgeWrap(${n}) %}`:`{% call badgeWrap() %}`}).replace(/<\/BadgeWrap>/g,`{% endcall %}`).replace(/<Badge\s+([^>]*?)\s*\/>/g,(e,t)=>{let n=N(t.trim());return n?`{{ badge(${n}) }}`:`{{ badge() }}`}).replace(/className=/g,`class=`);return t=t.replace(/\{\%\s*call\s+badgeWrap\([^)]*\)\s*\%\}/g,e=>`${e}\n  `).replace(/\n\s*\n/g,`
`).replace(/>\{\{/g,`>
  {{`).replace(/\}\}</g,`}}
`).replace(/\}\}\s*\{\%\s*endcall\s*\%\}/g,`}}
{% endcall %}`).replace(/<\/button>\s*\{\{/g,`</button>
  {{`).replace(/<\/span>\s*\{\{/g,`</span>
  {{`).replace(/\}\}\s*<span/g,`}}
  <span`).replace(/(aria-hidden="true">홍<\/span>)\s*\{\{/g,`$1
  {{`),`{% from "components/data-display/Badge/badge.njk" import badge, badgeWrap %}\n\n${t.trim()}`}function F(e){return e.replace(/class=/g,`className=`).replace(/<Badge\s+([^>]*?)\s*\/>/g,(e,t)=>{let n=A(t);return`<Badge ${Object.entries(n).map(([e,t])=>{let n=e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase());return t===!0||V.has(e)&&t===`true`?n:`${n}="${t}"`}).join(` `)} />`})}function I(e){return e.replace(/ariaLabel=/g,`aria-label=`).replace(/dotOnly/g,`dot-only`).replace(/<Badge\s+([^>]*?)\s*\/>/g,(e,t)=>{let n=A(t.replace(/ariaLabel=/g,`aria-label=`).replace(/dotOnly/g,`dot-only`));return`<Badge ${Object.entries(n).map(([e,t])=>t===!0||V.has(e)&&t===`true`?e:`${e}="${t}"`).join(` `)} />`})}function L(e){let t=B[e],n=M(t),r=P(t),i=F(t),a=I(t);return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Badge/Badge.html · ${e}`,code:n},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Badge/badge.njk · ${e}`,code:r},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/badge → apps/vue/src/components/data-display/Badge/Badge.vue · ${e}`,code:`<script setup>\nimport { Badge, BadgeWrap } from '@uxkm/vue/badge';\n<\/script>\n\n<template>\n${a.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/badge → apps/vue/src/components/data-display/Badge/Badge.vue · ${e}`,code:`<script setup>\nimport { Badge, BadgeWrap } from '@uxkm/vue/badge';\n<\/script>\n\n<template>\n${a.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`},{id:`react`,label:`React`,fileName:`@uxkm/react/badge → apps/react/src/components/data-display/Badge/Badge.jsx · ${e}`,code:`import { Badge, BadgeWrap } from '@uxkm/react/badge';\n\nexport function Example() {\n  return (\n  <>\n${i.split(`
`).map(e=>e.trim()?`    ${e}`:``).join(`
`)}\n  </>\n  );\n}`},{id:`next`,label:`Next`,fileName:`@uxkm/react/badge → apps/react/src/components/data-display/Badge/Badge.jsx · ${e}`,code:`import { Badge, BadgeWrap } from '@uxkm/react/badge';\n\nexport function Example() {\n  return (\n  <>\n${i.split(`
`).map(e=>e.trim()?`    ${e}`:``).join(`
`)}\n  </>\n  );\n}`},{id:`websquare`,label:`WebSquare`,fileName:`Badge.xml · ${e}`,code:U[e]}]}var R,z,B,V,H,U,W;function G(){return(G=e((()=>{x(),C(),T(),D(),k(),R=`${E}\n\n<!-- BadgeWrap.vue -->\n${O}`,z=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Badge/Badge.html`,code:b},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Badge/badge.njk`,code:S},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/data-display/Badge/Badge.vue · BadgeWrap.vue`,code:R},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/badge → Badge.vue · BadgeWrap.vue`,code:R},{id:`react`,label:`React`,fileName:`apps/react/src/components/data-display/Badge/Badge.jsx`,code:w},{id:`next`,label:`Next`,fileName:`@uxkm/react/badge → Badge.jsx`,code:w}],B={basic:`<Badge color="default" label="Default" />
<Badge color="primary" label="Primary" />
<Badge color="success" label="Success" />
<Badge color="warning" label="Warning" />
<Badge color="danger" label="Danger" />`,sizes:`<Badge size="sm" label="Small" />
<Badge label="Medium" />
<Badge size="lg" label="Large" />`,dot:`<Badge dot color="success" label="Active" />
<Badge dot color="warning" label="Away" />
<Badge dot color="danger" label="Offline" />`,count:`<Badge count color="danger" label="3" ariaLabel="알림 3건" />
<Badge count label="12" ariaLabel="알림 12건" />
<Badge count color="success" label="99+" ariaLabel="알림 99건 이상" />`,overlay:`<BadgeWrap>
  <button class="btn btn_filled color_primary" type="button"><span class="btn_label">알림</span></button>
  <Badge count color="danger" ariaLabel="읽지 않은 알림 5건" label="5" />
</BadgeWrap>
<BadgeWrap>
  <span class="avatar color_primary" aria-hidden="true">홍</span>
  <Badge dotOnly color="success" ariaLabel="온라인" />
</BadgeWrap>`},V=new Set([`dot`,`count`,`dotOnly`,`dot-only`]),H={"aria-label":`ariaLabel`,"dot-only":`dotOnly`},U={basic:`<w2:group id="badgeBasicExample" class="icon_group">
  <w2:textbox id="badgeDefault" tagname="span" class="badge color_default" label="Default"></w2:textbox>
  <w2:textbox id="badgePrimary" tagname="span" class="badge color_primary" label="Primary"></w2:textbox>
  <w2:textbox id="badgeSuccess" tagname="span" class="badge color_success" label="Success"></w2:textbox>
  <w2:textbox id="badgeWarning" tagname="span" class="badge color_warning" label="Warning"></w2:textbox>
  <w2:textbox id="badgeDanger" tagname="span" class="badge color_danger" label="Danger"></w2:textbox>
</w2:group>`,sizes:`<w2:group id="badgeSizesExample" class="icon_group">
  <w2:textbox id="badgeSmall" tagname="span" class="badge badge_sm color_primary" label="Small"></w2:textbox>
  <w2:textbox id="badgeMedium" tagname="span" class="badge color_primary" label="Medium"></w2:textbox>
  <w2:textbox id="badgeLarge" tagname="span" class="badge badge_lg color_primary" label="Large"></w2:textbox>
</w2:group>`,dot:`<w2:group id="badgeDotExample" class="icon_group">
  <w2:textbox id="badgeActive" tagname="span" class="badge badge_dot color_success" label="Active"></w2:textbox>
  <w2:textbox id="badgeAway" tagname="span" class="badge badge_dot color_warning" label="Away"></w2:textbox>
  <w2:textbox id="badgeOffline" tagname="span" class="badge badge_dot color_danger" label="Offline"></w2:textbox>
</w2:group>`,count:`<w2:group id="badgeCountExample" class="icon_group">
  <w2:textbox id="badgeCount3" tagname="span" class="badge badge_count color_danger" label="3" aria-label="알림 3건"></w2:textbox>
  <w2:textbox id="badgeCount12" tagname="span" class="badge badge_count color_primary" label="12" aria-label="알림 12건"></w2:textbox>
  <w2:textbox id="badgeCount99" tagname="span" class="badge badge_count color_success" label="99+" aria-label="알림 99건 이상"></w2:textbox>
</w2:group>`,overlay:`<w2:group id="badgeOverlayExample" class="icon_group">
  <w2:group id="badgeNotificationWrap" class="badge_wrap">
    <xf:trigger id="badgeNotificationButton" type="button" class="btn btn_filled color_primary" ev:onclick="scwin.notification_onclick">
      <xf:label><![CDATA[알림]]></xf:label>
    </xf:trigger>
    <w2:textbox id="badgeNotificationCount" tagname="span" class="badge badge_count color_danger" label="5" aria-label="읽지 않은 알림 5건"></w2:textbox>
  </w2:group>
  <w2:group id="badgeAvatarWrap" class="badge_wrap">
    <w2:textbox id="badgeAvatar" tagname="span" class="avatar color_primary" label="홍" aria-hidden="true"></w2:textbox>
    <w2:group id="badgeOnlineStatus" class="badge_dot-only color_success" role="status" aria-label="온라인"></w2:group>
  </w2:group>
</w2:group>`},W=Object.fromEntries(Object.keys(B).map(e=>[e,L(e)]))})))()}function K(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(d,{of:c}),`
`,(0,J.jsx)(t.h1,{id:`badge`,children:`Badge`}),`
`,(0,J.jsx)(t.p,{children:`상태, 분류, 개수를 짧게 표시하는 컴포넌트입니다. 텍스트·상태 점·카운트·다른 요소 위의 겹침 배지를 지원합니다.`}),`
`,(0,J.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,J.jsx)(t.code,{children:`@uxkm/vue/badge`}),`, `,(0,J.jsx)(t.code,{children:`@uxkm/react/badge`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,J.jsxs)(t.p,{children:[`WebSquare는 `,(0,J.jsx)(t.code,{children:`w2:textbox`}),`에 공통 Badge 클래스를 적용하고, 다른 컨트롤 위에 겹칠 때는 `,(0,J.jsx)(t.code,{children:`w2:group.badge_wrap`}),`으로 기준 요소와 Badge를 감쌉니다. 각 WebSquare 탭의 코드는 화면 XML 루트에서 `,(0,J.jsx)(t.code,{children:`w2`}),`와 `,(0,J.jsx)(t.code,{children:`xf`}),`, `,(0,J.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,J.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,J.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,J.jsx)(t.code,{children:`Badge`}),`와 `,(0,J.jsx)(t.code,{children:`BadgeWrap`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 prop을 공통 클래스와 접근성 속성으로 변환하고, HTML은 같은 클래스를 마크업에 직접 적용하며, Gulp는 `,(0,J.jsx)(t.code,{children:`badge`}),` · `,(0,J.jsx)(t.code,{children:`badgeWrap`}),` Nunjucks macro로 동일한 계약을 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,J.jsxs)(t.ul,{children:[`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`color`}),`·`,(0,J.jsx)(t.code,{children:`size`}),`는 `,(0,J.jsx)(t.code,{children:`color_*`}),`·`,(0,J.jsx)(t.code,{children:`badge_*`}),` 클래스로 변환되며 `,(0,J.jsx)(t.code,{children:`md`}),`는 기본 크기입니다.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`dot`}),`은 텍스트 앞 상태 점, `,(0,J.jsx)(t.code,{children:`count`}),`는 안정적인 숫자 폭, `,(0,J.jsx)(t.code,{children:`dotOnly`}),`는 텍스트 없는 상태 표시를 만듭니다.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`dotOnly`}),`는 `,(0,J.jsx)(t.code,{children:`role="status"`}),`를 사용하고 `,(0,J.jsx)(t.code,{children:`ariaLabel`}),`로 상태 의미를 제공합니다.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`BadgeWrap`}),`은 기준 요소와 겹침 Badge를 같은 좌표 컨텍스트에 배치합니다.`]}),`
`]}),`
`,(0,J.jsx)(g,{examples:z,showFullCode:!0}),`
`,(0,J.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,J.jsxs)(t.p,{children:[`일반·상태 점·카운트 Badge는 `,(0,J.jsx)(t.code,{children:`w2:textbox`}),`의 `,(0,J.jsx)(t.code,{children:`label`}),`과 `,(0,J.jsx)(t.code,{children:`badge`}),`, `,(0,J.jsx)(t.code,{children:`badge_dot`}),`, `,(0,J.jsx)(t.code,{children:`badge_count`}),`, `,(0,J.jsx)(t.code,{children:`color_*`}),` 클래스로 구성합니다. 텍스트 없는 상태 점은 `,(0,J.jsx)(t.code,{children:`w2:group.badge_dot-only`}),`에 `,(0,J.jsx)(t.code,{children:`role="status"`}),`와 접근성 이름을 지정합니다. 겹침 배지는 `,(0,J.jsx)(t.code,{children:`w2:group.badge_wrap`}),` 안에서 버튼·Avatar 등의 기준 요소 다음에 배치합니다.`]}),`
`,(0,J.jsxs)(t.p,{children:[`숫자나 상태가 화면 데이터에 따라 바뀌면 `,(0,J.jsx)(t.code,{children:`label`}),`과 접근성 이름을 함께 갱신합니다. 겹침 대상이 클릭 가능한 경우 Badge 자체에 별도 클릭 이벤트를 중복 연결하지 않습니다.`]}),`
`,(0,J.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,J.jsxs)(t.p,{children:[`공통 `,(0,J.jsx)(t.code,{children:`color_*`}),` 색상으로 배지의 의미를 구분합니다.`]}),`
`,(0,J.jsx)(f,{of:i,sourceState:`none`}),`
`,(0,J.jsx)(g,{examples:W.basic}),`
`,(0,J.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,J.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 제공합니다.`}),`
`,(0,J.jsx)(f,{of:a,sourceState:`none`}),`
`,(0,J.jsx)(g,{examples:W.sizes}),`
`,(0,J.jsx)(t.h2,{id:`상태-점`,children:`상태 점`}),`
`,(0,J.jsxs)(t.p,{children:[(0,J.jsx)(t.code,{children:`dot`}),` 또는 `,(0,J.jsx)(t.code,{children:`badge_dot`}),`으로 텍스트 앞에 상태 점을 표시합니다.`]}),`
`,(0,J.jsx)(f,{of:r,sourceState:`none`}),`
`,(0,J.jsx)(g,{examples:W.dot}),`
`,(0,J.jsx)(t.h2,{id:`카운트`,children:`카운트`}),`
`,(0,J.jsxs)(t.p,{children:[(0,J.jsx)(t.code,{children:`count`}),` 또는 `,(0,J.jsx)(t.code,{children:`badge_count`}),`로 숫자 폭과 정렬이 안정적인 카운트 배지를 만듭니다.`]}),`
`,(0,J.jsx)(f,{of:o,sourceState:`none`}),`
`,(0,J.jsx)(g,{examples:W.count}),`
`,(0,J.jsx)(t.h2,{id:`겹침`,children:`겹침`}),`
`,(0,J.jsxs)(t.p,{children:[(0,J.jsx)(t.code,{children:`BadgeWrap`}),` 안에 기준 요소와 Badge를 배치합니다. 점만 표시할 때도 의미를 알 수 있도록 접근성 이름을 지정합니다.`]}),`
`,(0,J.jsx)(f,{of:n,sourceState:`none`}),`
`,(0,J.jsx)(g,{examples:W.overlay}),`
`,(0,J.jsx)(_,{sections:v})]})}function q(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,J.jsx)(t,{...e,children:(0,J.jsx)(K,{...e})}):K(e)}var J;function Y(){return(Y=e((()=>{J=t(),u(),p(),m(),h(),G(),y(),s()})))()}Y();export{q as default};