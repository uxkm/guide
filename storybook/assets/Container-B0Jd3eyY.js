import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./Container.stories-CuzxwZfL.js";import{i as c,r as l}from"./react-CbOw9eUO.js";import{c as u,r as d,u as f}from"./blocks-BToPoJhg.js";import{i as p,n as m,r as h,t as g}from"./ComponentApiDocs-DfTaPA3Z.js";var _;function v(){return(v=e((()=>{_=`<!-- Container 원본 구현: 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다. -->
<!-- container 클래스가 최대 너비, 중앙 정렬, 좌우 여백을 적용합니다. -->
<div class="container" data-component="Container">
  <!-- Container가 감쌀 콘텐츠를 배치합니다. -->
  <div class="container_demo-fill">기본 Container</div>
</div>
`})))()}var y;function b(){return(b=e((()=>{y=`{# Container 원본 구현: 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다. #}
{# container 클래스가 최대 너비, 중앙 정렬, 좌우 여백을 적용합니다. #}
<div class="container" data-component="Container">
  {# Container가 감쌀 콘텐츠를 배치합니다. #}
  <div class="container_demo-fill">기본 Container</div>
</div>
`})))()}var x;function S(){return(S=e((()=>{x=`/**
 * Container 원본 구현.
 * 레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
 */
// Container가 지원하는 최대 너비 값만 허용합니다.
const SIZES = new Set(['', 'sm', 'md', 'lg', 'xl']);

export function Container({
  as: Root = 'div', // Container의 루트 요소 또는 컴포넌트를 지정합니다.
  size = '', // 최대 너비 단계(sm · md · lg · xl)입니다.
  fluid = false, // 최대 너비 제한을 해제합니다.
  children = 'Container', // Container 내부에 배치할 콘텐츠입니다.
  className = '', // 공통 클래스와 함께 적용할 사용자 정의 클래스입니다.
  ...props // id, aria-* 등 나머지 속성을 루트 요소에 전달합니다.
}) {
  // 잘못된 size 값은 기본 크기로 처리합니다.
  const resolvedSize = SIZES.has(size) ? size : '';

  // 기본 클래스에 size, fluid, 사용자 정의 클래스를 조건에 따라 조합합니다.
  const classes = [
    'container', // 최대 너비·중앙 정렬·좌우 여백을 적용하는 필수 클래스입니다.
    resolvedSize && \`container_\${resolvedSize}\`, // 검증된 최대 너비 단계입니다.
    fluid && 'container_fluid', // 전체 너비 fluid 변형입니다.
    className, // 호출 위치에서 전달한 사용자 정의 클래스입니다.
  ]
    .filter(Boolean)
    .join(' '); // 미적용 항목을 제거한 뒤 className 문자열로 만듭니다.

  // as로 루트 요소를 바꾸고 나머지 속성과 children을 그대로 전달합니다.
  return (
    <Root className={classes} data-component="Container" {...props}>
      {children}
    </Root>
  );
}

export default Container;
`})))()}var C;function w(){return(w=e((()=>{C=`<!--
  Container 원본 구현.
  레이아웃 속성과 자식 콘텐츠를 공통 CSS 클래스 및 시맨틱 루트에 연결합니다.
-->
<script setup>
import { computed, useAttrs } from 'vue';

// 컴포넌트 이름을 지정하고 속성을 루트 요소에 직접 전달하기 위해 자동 상속을 끕니다.
defineOptions({ name: 'UxkmContainer', inheritAttrs: false });

// as는 루트 요소, size는 최대 너비, fluid는 최대 너비 제한 해제를 제어합니다.
const props = defineProps({
  as: { type: [String, Object, Function], default: 'div' }, // Container의 루트 요소 또는 컴포넌트를 지정합니다.
  size: { type: String, default: '' }, // 최대 너비 단계(sm · md · lg · xl)입니다.
  fluid: Boolean, // 최대 너비 제한을 해제합니다.
});

// 선언하지 않은 class와 HTML 속성을 수집합니다.
const attrs = useAttrs();

// 지원하지 않는 size 값이 CSS 클래스로 전달되지 않도록 검증합니다.
const sizes = new Set(['', 'sm', 'md', 'lg', 'xl']);
const resolvedSize = computed(() => (sizes.has(props.size) ? props.size : ''));

// 상태에 맞는 공통 클래스와 사용자 정의 class를 조합합니다.
const classes = computed(() =>
  [
    'container',
    resolvedSize.value && \`container_\${resolvedSize.value}\`,
    props.fluid && 'container_fluid',
    attrs.class,
  ].filter(Boolean),
);
<\/script>

<template>
  <!-- as로 루트 요소를 결정하고 나머지 속성 및 계산된 클래스를 전달합니다. -->
  <component :is="as" v-bind="attrs" :class="classes" data-component="Container">
    <!-- 호출 위치의 콘텐츠를 기본 slot으로 렌더링합니다. -->
    <slot>Container</slot>
  </component>
</template>
`})))()}function T(e){let t={};return e.replace(/([\w-]+)(?:="([^"]*)")?/g,(e,n,r)=>(t[n]=r??!0,``)),t}function E(e){let t=[],n=e.replace(/<Container([^>]*)>/g,(e,n)=>{let r=T(n),i=typeof r.as==`string`?r.as:`div`,a=[`container`,r.size&&`container_${r.size}`,r.fluid&&`container_fluid`].filter(Boolean).join(` `);return t.push(i),`<${i} class="${a}" data-component="Container">`}),r=t.length;return n.replace(/<\/Container>/g,()=>`</${t[--r]}>`)}function D(e){return`import Container from '@uxkm/react/container';\n\nexport function Example() {\n  return (\n${e.replace(/class=/g,`className=`).split(`
`).map(e=>`    ${e}`).join(`
`)}\n  );\n}`}function O(e){return`<script setup>\nimport Container from '@uxkm/vue/container';\n<\/script>\n\n<template>\n${e.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`}function k(e){let t=j[e],n=E(t),r=D(t),i=O(t);return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/layout/Container/Container.html · ${e}`,code:n},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/layout/Container/container.njk · ${e}`,code:`{# Container · ${e} #}\n${n}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/container → apps/vue/src/components/layout/Container/Container.vue · ${e}`,code:i},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/container → apps/vue/src/components/layout/Container/Container.vue · ${e}`,code:i},{id:`react`,label:`React`,fileName:`@uxkm/react/container → apps/react/src/components/layout/Container/Container.jsx · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/container → apps/react/src/components/layout/Container/Container.jsx · ${e}`,code:r},{id:`websquare`,label:`WebSquare`,fileName:`screen.xml · ${e}`,code:M[e]}]}var A,j,M,N;function P(){return(P=e((()=>{v(),b(),S(),w(),A=[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/layout/Container/Container.html`,code:_},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/layout/Container/container.njk`,code:y},{id:`vue`,label:`Vue`,fileName:`apps/vue/src/components/layout/Container/Container.vue`,code:C},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/container → Container.vue`,code:C},{id:`react`,label:`React`,fileName:`apps/react/src/components/layout/Container/Container.jsx`,code:x},{id:`next`,label:`Next`,fileName:`@uxkm/react/container → Container.jsx`,code:x}],j={basic:`<Container>
  <div class="container_demo-fill">기본 Container</div>
</Container>`,sizes:`<div class="container_demo-sizes">
  <Container size="sm"><div class="container_demo-fill">Small · 36rem</div></Container>
  <Container size="md"><div class="container_demo-fill">Medium · 48rem</div></Container>
  <Container size="lg"><div class="container_demo-fill">Large · 64rem</div></Container>
  <Container size="xl"><div class="container_demo-fill">Extra Large · 80rem</div></Container>
</div>`,fluid:`<Container fluid>
  <div class="container_demo-fill">Fluid · 최대 너비 제한 없음</div>
</Container>`,semantic:`<Container as="main" size="lg">
  <div class="container_demo-fill">main 요소로 렌더링</div>
</Container>`},M={basic:`<w2:group
  id="containerBasic"
  class="container">
  <w2:textbox id="containerBasicContent" class="container_demo-fill" label="기본 Container"></w2:textbox>
</w2:group>`,sizes:`<w2:group
  id="containerSizes"
  class="container_demo-sizes">
  <w2:group id="containerSmall" class="container container_sm">
    <w2:textbox id="containerSmallContent" class="container_demo-fill" label="Small · 36rem"></w2:textbox>
  </w2:group>
  <w2:group id="containerMedium" class="container container_md">
    <w2:textbox id="containerMediumContent" class="container_demo-fill" label="Medium · 48rem"></w2:textbox>
  </w2:group>
  <w2:group id="containerLarge" class="container container_lg">
    <w2:textbox id="containerLargeContent" class="container_demo-fill" label="Large · 64rem"></w2:textbox>
  </w2:group>
  <w2:group id="containerExtraLarge" class="container container_xl">
    <w2:textbox id="containerExtraLargeContent" class="container_demo-fill" label="Extra Large · 80rem"></w2:textbox>
  </w2:group>
</w2:group>`,fluid:`<w2:group
  id="containerFluid"
  class="container container_fluid">
  <w2:textbox id="containerFluidContent" class="container_demo-fill" label="Fluid · 최대 너비 제한 없음"></w2:textbox>
</w2:group>`,semantic:`<w2:group
  id="containerMain"
  tagname="main"
  class="container container_lg">
  <w2:textbox id="containerMainContent" class="container_demo-fill" label="main 요소로 렌더링"></w2:textbox>
</w2:group>`},N=Object.fromEntries(Object.keys(j).map(e=>[e,k(e)]))})))()}var F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{F=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],I=[{name:`size`,type:`'' | 'sm' | 'md' | 'lg' | 'xl'`,default:`''`,description:`Container의 최대 너비를 선택합니다. 빈 값은 기본 72rem을 사용합니다.`},{name:`fluid`,type:`boolean`,default:`false`,description:`최대 너비 제한을 없애고 부모 너비를 채웁니다.`},{name:`as`,type:`string | component`,default:`'div'`,description:`루트 요소 또는 컴포넌트를 지정합니다.`}],L=[...I,{name:`children`,type:`ReactNode`,default:`'Container'`,description:`Container 내부 콘텐츠입니다.`},{name:`className`,type:`string`,default:`''`,description:`루트 요소에 추가할 클래스 이름입니다.`},{name:`...props`,type:`HTML attributes`,default:`—`,description:`선택한 루트 요소에 전달할 네이티브 속성입니다.`}],R=[...I,{name:`class`,type:`string | object | array`,default:`—`,description:`루트 요소에 추가할 Vue 클래스 바인딩입니다.`},{name:`v-bind`,type:`HTML attributes`,default:`—`,description:`선택한 루트 요소에 전달할 네이티브 속성입니다.`}],z=[{name:`default`,type:`slot`,default:`'Container'`,description:`Container 내부 콘텐츠입니다.`}],B=[{name:`class`,type:`string`,default:`'container'`,description:`container와 너비 변형 클래스를 마크업에 직접 조합합니다.`},{name:`data-component`,type:`'Container'`,default:`—`,description:`컴포넌트 식별이 필요할 때 사용하는 선택적 데이터 속성입니다.`},{name:`div · main · section`,type:`element`,default:`div`,description:`콘텐츠 구조에 알맞은 시맨틱 루트 요소를 선택합니다.`}],V=[{name:`container`,type:`class`,default:`—`,description:`기본 72rem 최대 너비, 중앙 정렬, 좌우 패딩을 적용합니다.`},{name:`container_sm`,type:`class`,default:`—`,description:`최대 너비를 36rem으로 제한합니다.`},{name:`container_md`,type:`class`,default:`—`,description:`최대 너비를 48rem으로 제한합니다.`},{name:`container_lg`,type:`class`,default:`—`,description:`최대 너비를 64rem으로 제한합니다.`},{name:`container_xl`,type:`class`,default:`—`,description:`최대 너비를 80rem으로 제한합니다.`},{name:`container_fluid`,type:`class`,default:`—`,description:`max-width 제한을 해제합니다. size와 함께 쓰면 fluid가 우선합니다.`}],H=[{name:`--container-padding-x`,type:`length`,default:`var(--space-xl)`,description:`Container의 좌우 내부 여백입니다.`},{name:`--container-max-width`,type:`length`,default:`72rem`,description:`기본 최대 너비입니다.`},{name:`--container-max-width-sm`,type:`length`,default:`36rem`,description:`sm 최대 너비입니다.`},{name:`--container-max-width-md`,type:`length`,default:`48rem`,description:`md 최대 너비입니다.`},{name:`--container-max-width-lg`,type:`length`,default:`64rem`,description:`lg 최대 너비입니다.`},{name:`--container-max-width-xl`,type:`length`,default:`80rem`,description:`xl 최대 너비입니다.`}],U=[{name:`w2:group`,type:`component`,default:`—`,description:`Container의 WebSquare 루트입니다. 상태와 데이터 바인딩 없이 레이아웃 그룹으로 사용합니다.`},{name:`class`,type:`string`,default:`'container'`,description:`container와 container_sm/md/lg/xl 또는 container_fluid 클래스를 조합합니다.`},{name:`tagname`,type:`string`,default:`'div'`,description:`main, section 등 문서 구조에 맞는 HTML 루트 태그를 지정합니다.`},{name:`id`,type:`string`,default:`—`,description:`WebSquare 화면 안에서 중복되지 않는 컴포넌트 ID를 지정합니다.`}],W=[{title:`React · Next.js API · Props`,description:"Next.js는 `@uxkm/react/container`를 재사용합니다.",tables:[{columns:F,rows:L}]},{title:`Vue · Nuxt API · Props`,description:"Nuxt는 `@uxkm/vue/container`를 재사용합니다.",tables:[{columns:F,rows:R}]},{title:`Vue · Nuxt API · Slots`,tables:[{columns:F,rows:z}]},{title:`HTML · Gulp API · Markup`,description:`HTML과 Gulp는 공통 OOCSS 클래스를 마크업에 직접 적용합니다.`,tables:[{columns:F,rows:B}]},{title:`WebSquare API · XML`,description:`Container는 구조 전용 컴포넌트이므로 scwin 이벤트나 DataList 바인딩이 필요하지 않습니다.`,tables:[{columns:F,rows:U}]},{title:`공통 API · 클래스`,tables:[{columns:F,rows:V}]},{title:`공통 API · 디자인 토큰`,tables:[{columns:F,rows:H}]}]})))()}function K(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...c(),...e.components};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(u,{of:i}),`
`,(0,J.jsx)(t.h1,{id:`container`,children:`Container`}),`
`,(0,J.jsx)(t.p,{children:`콘텐츠의 최대 너비와 좌우 여백을 일관되게 유지하고, 화면 안에서 콘텐츠를 가운데 정렬하는 레이아웃 컴포넌트입니다.`}),`
`,(0,J.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,J.jsx)(t.code,{children:`@uxkm/vue/container`}),`, `,(0,J.jsx)(t.code,{children:`@uxkm/react/container`}),`로 제공합니다. Nuxt와 Next.js는 같은 구현을 재사용합니다. WebSquare는 `,(0,J.jsx)(t.code,{children:`w2:group`}),`에 공통 Container 클래스를 적용하며, 상태나 이벤트가 없는 구조 컴포넌트이므로 별도 `,(0,J.jsx)(t.code,{children:`scwin`}),` 로직이 필요하지 않습니다.`]}),`
`,(0,J.jsx)(t.h2,{id:`사용-기준`,children:`사용 기준`}),`
`,(0,J.jsxs)(t.ul,{children:[`
`,(0,J.jsx)(t.li,{children:`페이지나 큰 콘텐츠 구획의 수평 경계와 좌우 여백을 통일할 때 사용합니다.`}),`
`,(0,J.jsx)(t.li,{children:`카드나 개별 컴포넌트 내부 정렬에는 Container보다 Grid, Flex, Space 또는 해당 컴포넌트의 내부 레이아웃을 사용합니다.`}),`
`,(0,J.jsx)(t.li,{children:`Container를 중첩하면 좌우 패딩이 누적되므로 독립된 최대 너비가 꼭 필요한 경우가 아니면 중첩하지 않습니다.`}),`
`,(0,J.jsx)(t.li,{children:`배경은 화면 전체에 펼치고 콘텐츠만 제한하려면 전체 폭 section 안에 Container를 배치합니다.`}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`fluid`}),`는 최대 너비만 해제하며 좌우 패딩은 유지합니다. 패딩까지 없는 전체 폭 영역과 구분해 사용합니다.`]}),`
`]}),`
`,(0,J.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,J.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,J.jsx)(t.code,{children:`Container`}),` 컴포넌트 자체의 구현입니다. React와 Vue 구현은 전달받은 속성을 공통 CSS 클래스에 연결하고, HTML과 Gulp는 같은 클래스를 마크업에 직접 적용합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,J.jsxs)(t.p,{children:[`WebSquare에는 별도의 `,(0,J.jsx)(t.code,{children:`Container.xml`}),` 구현 파일이 없습니다. Container는 호출 지점의 콘텐츠를 감싸는 구조이므로 WFrame으로 별도 화면을 불러오지 않고, 실제 화면 XML에서 `,(0,J.jsx)(t.code,{children:`w2:group`}),`에 `,(0,J.jsx)(t.code,{children:`container`}),` 클래스를 직접 적용합니다. 따라서 WebSquare 코드는 아래 사용 예제의 `,(0,J.jsx)(t.code,{children:`screen.xml`}),` 탭에서 기존 화면 루트 안에 붙이는 fragment로 제공합니다. 네임스페이스는 화면 XML 최상위 루트에서 한 번만 선언하며, 같은 화면의 Container와 다른 컴포넌트에서는 반복하지 않습니다. 별도 화면이나 WFrame처럼 독립적으로 파싱되는 XML 파일만 각 파일의 루트에서 다시 선언합니다.`]}),`
`,(0,J.jsxs)(t.ul,{children:[`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`as`}),`는 기본 `,(0,J.jsx)(t.code,{children:`div`}),` 대신 `,(0,J.jsx)(t.code,{children:`main`}),`, `,(0,J.jsx)(t.code,{children:`section`}),` 같은 시맨틱 요소나 다른 컴포넌트를 루트로 렌더링합니다.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`size`}),`는 허용된 값만 받아 `,(0,J.jsx)(t.code,{children:`container_sm`}),`부터 `,(0,J.jsx)(t.code,{children:`container_xl`}),`까지의 최대 너비 클래스로 변환합니다.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`fluid`}),`가 참이면 `,(0,J.jsx)(t.code,{children:`container_fluid`}),`를 추가해 최대 너비 제한을 해제합니다.`]}),`
`,(0,J.jsxs)(t.li,{children:[(0,J.jsx)(t.code,{children:`className`}),` 또는 `,(0,J.jsx)(t.code,{children:`class`}),`와 나머지 속성은 루트 요소에 전달하며, 내부 콘텐츠는 React의 `,(0,J.jsx)(t.code,{children:`children`}),` 또는 Vue의 기본 slot으로 렌더링합니다.`]}),`
`,(0,J.jsxs)(t.li,{children:[`실제 너비, 중앙 정렬, 좌우 여백은 모든 프레임워크가 공유하는 `,(0,J.jsx)(t.code,{children:`.container`}),` 스타일에서 처리합니다.`]}),`
`]}),`
`,(0,J.jsx)(h,{examples:A,showFullCode:!0}),`
`,(0,J.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,J.jsx)(t.p,{children:`기본 Container는 부모 너비를 채우되 최대 72rem까지만 확장되며, 좌우에 공통 여백을 적용합니다.`}),`
`,(0,J.jsx)(d,{of:s,sourceState:`none`}),`
`,(0,J.jsx)(h,{examples:N.basic}),`
`,(0,J.jsx)(t.h2,{id:`최대-너비`,children:`최대 너비`}),`
`,(0,J.jsxs)(t.p,{children:[(0,J.jsx)(t.code,{children:`sm`}),`, `,(0,J.jsx)(t.code,{children:`md`}),`, `,(0,J.jsx)(t.code,{children:`lg`}),`, `,(0,J.jsx)(t.code,{children:`xl`}),` 크기로 콘텐츠의 최대 너비를 36rem, 48rem, 64rem, 80rem 중에서 선택합니다. 화면이 이보다 좁으면 부모 너비에 맞춰 줄어듭니다.`]}),`
`,(0,J.jsx)(d,{of:n,sourceState:`none`}),`
`,(0,J.jsx)(h,{examples:N.sizes}),`
`,(0,J.jsx)(t.h2,{id:`fluid`,children:`Fluid`}),`
`,(0,J.jsxs)(t.p,{children:[(0,J.jsx)(t.code,{children:`fluid`}),` 또는 `,(0,J.jsx)(t.code,{children:`container_fluid`}),`는 최대 너비 제한을 해제합니다. 좌우 패딩과 중앙 정렬 계약은 그대로 유지합니다.`]}),`
`,(0,J.jsx)(d,{of:o,sourceState:`none`}),`
`,(0,J.jsx)(h,{examples:N.fluid}),`
`,(0,J.jsx)(t.h2,{id:`시맨틱-루트`,children:`시맨틱 루트`}),`
`,(0,J.jsxs)(t.p,{children:[`페이지의 주요 콘텐츠에는 `,(0,J.jsx)(t.code,{children:`main`}),`, 독립된 구획에는 `,(0,J.jsx)(t.code,{children:`section`}),`처럼 문서 구조에 맞는 루트 요소를 선택할 수 있습니다.`]}),`
`,(0,J.jsx)(d,{of:r,sourceState:`none`}),`
`,(0,J.jsx)(h,{examples:N.semantic}),`
`,(0,J.jsx)(t.h2,{id:`반응형과-접근성`,children:`반응형과 접근성`}),`
`,(0,J.jsxs)(t.p,{children:[`Container는 `,(0,J.jsx)(t.code,{children:`width: 100%`}),`와 최대 너비를 함께 사용하므로 별도 브레이크포인트 없이 좁은 화면에 맞춰 줄어듭니다. 좌우 패딩은 `,(0,J.jsx)(t.code,{children:`--container-padding-x`}),` 토큰으로 일관되게 유지합니다.`]}),`
`,(0,J.jsxs)(t.p,{children:[`Container 자체에는 별도 ARIA role이나 접근 가능한 이름이 필요하지 않습니다. `,(0,J.jsx)(t.code,{children:`main`}),`은 페이지의 대표 본문에 한 번만 사용하고, 반복 가능한 콘텐츠 구획은 제목과 연결된 `,(0,J.jsx)(t.code,{children:`section`}),` 등 문서 구조에 맞는 요소를 선택합니다. WebSquare에서도 `,(0,J.jsx)(t.code,{children:`tagname`}),`을 지정할 때 같은 랜드마크 규칙을 적용합니다.`]}),`
`,(0,J.jsx)(g,{sections:W})]})}function q(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,J.jsx)(t,{...e,children:(0,J.jsx)(K,{...e})}):K(e)}var J;function Y(){return(Y=e((()=>{J=t(),l(),f(),p(),m(),P(),G(),a()})))()}Y();export{q as default};