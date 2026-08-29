import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./Badge.stories-BHs-XNEi.js";import{i as l,r as u}from"./react-CJGa1lBW.js";import{c as d,r as f,u as p}from"./blocks-SMgDWto2.js";import{i as m,n as h,r as g,t as _}from"./ComponentApiDocs-DtZNZjDp.js";import{n as v,r as y}from"./dataDisplayApiSections-C0EnwqfF.js";import{n as b,t as x}from"./dataDisplayFrameworkExamples-DxH6D_Y3.js";var S;function C(){return(C=e((()=>{S=`<!-- Badge 원본 구현: 데이터 표시 구조와 시각 상태를 공통 CSS 클래스 및 접근성 속성으로 표현합니다. -->
<!-- Badge 루트에 공통 클래스를 적용합니다. -->
<span class="badge color_primary" data-component="Badge">Primary</span>
<span class="badge badge_dot color_success" data-component="Badge">Active</span>
<span class="badge badge_count color_danger" data-component="Badge" aria-label="읽지 않은 알림 5건"
  >5</span
>
`})))()}var w;function T(){return(T=e((()=>{w=`{# Badge 원본 구현: 브라우저 DOM 이벤트와 상태 클래스를 연결하고 관련 접근성 속성을 동기화합니다. #}
<span class="badge color_primary" {# Badge 루트에 공통 클래스와 data-* 계약을 둡니다. #}
  data-component="Badge">
  {# 내부에 데이터 표시 콘텐츠를 배치합니다. #}Primary</span>
<span class="badge badge_dot color_success" data-component="Badge">Active</span>
<span class="badge badge_count color_danger" data-component="Badge" aria-label="읽지 않은 알림 5건"
  >5</span
>
`})))()}var E;function D(){return(D=e((()=>{E=`/**
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
`})))()}var O;function k(){return(k=e((()=>{O=`<!--
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
`})))()}var A;function j(){return(j=e((()=>{A=`<!--
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
`})))()}var M,N,P,F;function I(){return(I=e((()=>{b(),C(),T(),D(),k(),j(),M=`${O}\n\n<!-- BadgeWrap.vue -->\n${A}`,N=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Badge/Badge.html`,code:S},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Badge/badge.njk`,code:w},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/data-display/Badge/Badge.vue · BadgeWrap.vue`,code:M},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/badge → Badge.vue · BadgeWrap.vue`,code:M},{id:`react`,label:`React`,fileName:`apps/react/src/components/data-display/Badge/Badge.jsx`,code:E},{id:`next`,label:`Next`,fileName:`@uxkm/react/badge → Badge.jsx`,code:E}],P={basic:`<w2:group id="badgeBasicExample" class="icon_group">
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
</w2:group>`},F=Object.fromEntries(Object.entries(x).map(([e,t])=>[e,[...t,{id:`websquare`,label:`WebSquare`,fileName:`Badge.xml · ${e}`,code:P[e]}]]))})))()}function L(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(d,{of:c}),`
`,(0,z.jsx)(t.h1,{id:`badge`,children:`Badge`}),`
`,(0,z.jsx)(t.p,{children:`상태, 분류, 개수를 짧게 표시하는 컴포넌트입니다. 텍스트·상태 점·카운트·다른 요소 위의 겹침 배지를 지원합니다.`}),`
`,(0,z.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,z.jsx)(t.code,{children:`@uxkm/vue/badge`}),`, `,(0,z.jsx)(t.code,{children:`@uxkm/react/badge`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,z.jsxs)(t.p,{children:[`WebSquare는 `,(0,z.jsx)(t.code,{children:`w2:textbox`}),`에 공통 Badge 클래스를 적용하고, 다른 컨트롤 위에 겹칠 때는 `,(0,z.jsx)(t.code,{children:`w2:group.badge_wrap`}),`으로 기준 요소와 Badge를 감쌉니다. 각 WebSquare 탭의 코드는 화면 XML 루트에서 `,(0,z.jsx)(t.code,{children:`w2`}),`와 `,(0,z.jsx)(t.code,{children:`xf`}),`, `,(0,z.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,z.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,z.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,z.jsx)(t.code,{children:`Badge`}),`와 `,(0,z.jsx)(t.code,{children:`BadgeWrap`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 prop을 공통 클래스와 접근성 속성으로 변환하고, HTML과 Gulp는 같은 구조와 클래스를 마크업에 직접 적용합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.code,{children:`color`}),`·`,(0,z.jsx)(t.code,{children:`size`}),`는 `,(0,z.jsx)(t.code,{children:`color_*`}),`·`,(0,z.jsx)(t.code,{children:`badge_*`}),` 클래스로 변환되며 `,(0,z.jsx)(t.code,{children:`md`}),`는 기본 크기입니다.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.code,{children:`dot`}),`은 텍스트 앞 상태 점, `,(0,z.jsx)(t.code,{children:`count`}),`는 안정적인 숫자 폭, `,(0,z.jsx)(t.code,{children:`dotOnly`}),`는 텍스트 없는 상태 표시를 만듭니다.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.code,{children:`dotOnly`}),`는 `,(0,z.jsx)(t.code,{children:`role="status"`}),`를 사용하고 `,(0,z.jsx)(t.code,{children:`ariaLabel`}),`로 상태 의미를 제공합니다.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.code,{children:`BadgeWrap`}),`은 기준 요소와 겹침 Badge를 같은 좌표 컨텍스트에 배치합니다.`]}),`
`]}),`
`,(0,z.jsx)(g,{examples:N,showFullCode:!0}),`
`,(0,z.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,z.jsxs)(t.p,{children:[`일반·상태 점·카운트 Badge는 `,(0,z.jsx)(t.code,{children:`w2:textbox`}),`의 `,(0,z.jsx)(t.code,{children:`label`}),`과 `,(0,z.jsx)(t.code,{children:`badge`}),`, `,(0,z.jsx)(t.code,{children:`badge_dot`}),`, `,(0,z.jsx)(t.code,{children:`badge_count`}),`, `,(0,z.jsx)(t.code,{children:`color_*`}),` 클래스로 구성합니다. 텍스트 없는 상태 점은 `,(0,z.jsx)(t.code,{children:`w2:group.badge_dot-only`}),`에 `,(0,z.jsx)(t.code,{children:`role="status"`}),`와 접근성 이름을 지정합니다. 겹침 배지는 `,(0,z.jsx)(t.code,{children:`w2:group.badge_wrap`}),` 안에서 버튼·Avatar 등의 기준 요소 다음에 배치합니다.`]}),`
`,(0,z.jsxs)(t.p,{children:[`숫자나 상태가 화면 데이터에 따라 바뀌면 `,(0,z.jsx)(t.code,{children:`label`}),`과 접근성 이름을 함께 갱신합니다. 겹침 대상이 클릭 가능한 경우 Badge 자체에 별도 클릭 이벤트를 중복 연결하지 않습니다.`]}),`
`,(0,z.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,z.jsxs)(t.p,{children:[`공통 `,(0,z.jsx)(t.code,{children:`color_*`}),` 색상으로 배지의 의미를 구분합니다.`]}),`
`,(0,z.jsx)(f,{of:i,sourceState:`none`}),`
`,(0,z.jsx)(g,{examples:F.basic}),`
`,(0,z.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,z.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 제공합니다.`}),`
`,(0,z.jsx)(f,{of:a,sourceState:`none`}),`
`,(0,z.jsx)(g,{examples:F.sizes}),`
`,(0,z.jsx)(t.h2,{id:`상태-점`,children:`상태 점`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`dot`}),` 또는 `,(0,z.jsx)(t.code,{children:`badge_dot`}),`으로 텍스트 앞에 상태 점을 표시합니다.`]}),`
`,(0,z.jsx)(f,{of:r,sourceState:`none`}),`
`,(0,z.jsx)(g,{examples:F.dot}),`
`,(0,z.jsx)(t.h2,{id:`카운트`,children:`카운트`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`count`}),` 또는 `,(0,z.jsx)(t.code,{children:`badge_count`}),`로 숫자 폭과 정렬이 안정적인 카운트 배지를 만듭니다.`]}),`
`,(0,z.jsx)(f,{of:o,sourceState:`none`}),`
`,(0,z.jsx)(g,{examples:F.count}),`
`,(0,z.jsx)(t.h2,{id:`겹침`,children:`겹침`}),`
`,(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`BadgeWrap`}),` 안에 기준 요소와 Badge를 배치합니다. 점만 표시할 때도 의미를 알 수 있도록 접근성 이름을 지정합니다.`]}),`
`,(0,z.jsx)(f,{of:n,sourceState:`none`}),`
`,(0,z.jsx)(g,{examples:F.overlay}),`
`,(0,z.jsx)(_,{sections:v})]})}function R(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(L,{...e})}):L(e)}var z;function B(){return(B=e((()=>{z=t(),u(),p(),m(),h(),I(),y(),s()})))()}B();export{R as default};