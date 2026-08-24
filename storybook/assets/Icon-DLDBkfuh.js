import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./Icon.stories-BuleXa7c.js";import{i as h,r as g}from"./react-DSvVgjCn.js";import{c as _,r as v,u as y}from"./blocks-CkHyEh4O.js";import{i as b,n as x,r as S,t as C}from"./ComponentApiDocs-D9Q6nkXJ.js";function w(e,t){if(t===`vue`)return e.includes(`iconNames.map`)?`<script setup>
import Icon from '@uxkm/vue/icon';

const iconNames = ['search', 'plus', 'download', 'trash', 'check', 'edit', 'settings', 'user', 'star'];
<\/script>

<template>
  <div class="icon_grid">
    <div v-for="name in iconNames" :key="name" class="icon_grid-item">
      <Icon :name="name" size="lg" />
      <span>{{ name }}</span>
    </div>
  </div>
</template>`:`<script setup>\nimport Icon from '@uxkm/vue/icon';\n<\/script>\n\n<template>\n${e.split(`
`).map(e=>`  ${e}`).join(`
`)}\n</template>`;let n=e.replace(/class=/g,`className=`).replace(/aria-label=/g,`ariaLabel=`).replace(/<Icon name=\{name\}/g,`<Icon name={name}`);return`import Icon${e.includes(`iconNames.map`)?`, { iconNames }`:``} from '@uxkm/react/icon';\n\nexport function Example() {\n  return (\n    <>\n${n.split(`
`).map(e=>`      ${e}`).join(`
`)}\n    </>\n  );\n}`}function T(e){let t={};return e.replace(/([\w-]+)(?:="([^"]*)")?/g,(e,n,r)=>(t[n]=r??!0,``)),t}function E(e){let t=T(e),n=String(t.name??`plus`),r=[`icon`,t.size&&t.size!==`md`&&`icon_${t.size}`,t.spin&&`icon_spin`],i=[t.color&&`color_${t.color}`,t.inline&&`icon_inline`],a=`<svg class="${r.filter(Boolean).join(` `)}" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${A[n]??A.plus}</svg>`;if(t.button)return`<button class="icon_button ${i.filter(Boolean).join(` `)}" type="button" aria-label="${t[`aria-label`]??n}">${a}</button>`;if(t.circle||t.square)return`<span class="${[t.circle?`icon_circle`:`icon_square`,...i,t.pulse&&`icon_pulse`,t.circle&&t.size===`sm`&&`icon_circle-sm`,t.circle&&t.size===`lg`&&`icon_circle-lg`].filter(Boolean).join(` `)}" aria-hidden="true">${a}</span>`;let o=t[`aria-label`],s=i.filter(Boolean).join(` `);return(s?a.replace(`class="`,`class="${s} `):a).replace(`aria-hidden="true"`,o?`role="img" aria-label="${o}"`:`aria-hidden="true"`)}function D(e,t){return e===`custom`?`<div class="icon_group">
  <svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
  <svg class="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z"></path>
  </svg>
</div>`:e===`gallery`?`<!-- common-icons 목록을 순회해 같은 구조를 반복합니다. -->\n<div class="icon_grid">\n  <div class="icon_grid-item">${E(`name="search" size="lg"`)}<span>search</span></div>\n  <!-- ... -->\n</div>`:t.replace(/<Icon\s+([^>]*?)\s*\/>/g,(e,t)=>E(t))}function O(e){let t=k[e],n=D(e,t),r=w(t,`react`),i=w(t,`vue`);return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/basic/Icon/Icon.html · ${e}`,code:n},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/basic/Icon/icon.njk · ${e}`,code:`{# Icon · ${e} #}\n${n}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/icon → apps/vue/src/components/basic/Icon/Icon.vue · ${e}`,code:i},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/icon → apps/vue/src/components/basic/Icon/Icon.vue · ${e}`,code:i},{id:`react`,label:`React`,fileName:`@uxkm/react/icon → apps/react/src/components/basic/Icon/Icon.jsx · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/icon → apps/react/src/components/basic/Icon/Icon.jsx · ${e}`,code:r}]}var k,A,j;function M(){return(M=e((()=>{k={basic:`<div class="icon_group">
  <Icon name="search" />
  <Icon name="edit" />
  <Icon name="trash" />
</div>`,custom:`<div class="icon_group">
  <Icon>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </Icon>
  <Icon>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z" />
  </Icon>
</div>`,sizes:`<div class="icon_group">
  <Icon name="plus" size="sm" />
  <Icon name="plus" />
  <Icon name="plus" size="lg" />
  <Icon name="plus" size="xl" />
</div>`,colors:`<div class="icon_group">
  <Icon name="star" color="default" />
  <Icon name="star" color="primary" />
  <Icon name="check-circle" color="success" />
  <Icon name="alert-triangle" color="warning" />
  <Icon name="x-circle" color="danger" />
</div>`,inline:`<p><Icon name="info" inline color="info" aria-label="안내" /> 변경 사항이 자동 저장됩니다.</p>
<p><Icon name="check-circle" inline color="success" aria-label="완료" /> 업로드가 완료되었습니다.</p>`,background:`<div class="icon_group">
  <Icon name="plus" circle color="primary" size="sm" />
  <Icon name="check-circle" circle color="success" size="sm" />
  <Icon name="trash" circle color="danger" size="lg" />
  <Icon name="edit" square color="primary" />
</div>`,button:`<div class="icon_group">
  <Icon name="search" button color="primary" aria-label="검색" />
  <Icon name="settings" button color="muted" aria-label="설정" />
  <Icon name="close" button color="danger" aria-label="삭제" />
</div>`,pulse:`<div class="icon_group">
  <Icon name="bell" circle pulse color="primary" size="sm" />
  <Icon circle pulse color="danger" size="sm"><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" /></Icon>
</div>`,group:`<div class="icon_group">
  <Icon name="upload" color="muted" />
  <Icon name="download" color="muted" />
  <Icon name="trash" color="muted" />
</div>
<p><Icon name="user" circle color="primary" size="sm" /> 홍길동님이 댓글을 남겼습니다.</p>`,spin:`<div class="icon_group">
  <Icon name="loader" spin color="primary" />
  <Icon name="loader" spin size="lg" color="muted" />
</div>`,gallery:`<div class="icon_grid">
  {iconNames.map((name) => (
    <div class="icon_grid-item" key={name}>
      <Icon name={name} size="lg" />
      <span>{name}</span>
    </div>
  ))}
</div>`},A={search:`<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>`,edit:`<path d="M4 20h4L19 9l-4-4L4 16v4Z"></path>`,trash:`<path d="M4 7h16M9 7V4h6v3m-9 0 1 14h10l1-14"></path>`,plus:`<path d="M12 5v14M5 12h14"></path>`,star:`<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path>`,"check-circle":`<circle cx="12" cy="12" r="9"></circle><path d="m8 12 3 3 5-6"></path>`,"alert-triangle":`<path d="M12 3 2.5 20h19L12 3Z"></path><path d="M12 9v4m0 3h.01"></path>`,"x-circle":`<circle cx="12" cy="12" r="9"></circle><path d="m9 9 6 6m0-6-6 6"></path>`,info:`<circle cx="12" cy="12" r="9"></circle><path d="M12 11v6m0-10h.01"></path>`,settings:`<circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 0 0-14 0 7 7 0 0 0 14 0Z"></path>`,close:`<path d="m6 6 12 12M18 6 6 18"></path>`,bell:`<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>`,upload:`<path d="M5 16v5h14v-5M12 17V3m0 0-4 4m4-4 4 4"></path>`,download:`<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"></path>`,user:`<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>`,loader:`<path d="M21 12a9 9 0 1 1-6.2-8.6"></path>`},j=Object.fromEntries(Object.keys(k).map(e=>[e,O(e)]))})))()}var N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{N=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],P=[{name:`name`,type:`string`,default:`plus`,description:`제공 아이콘 이름. 커스텀 SVG 자식이 있으면 자식이 우선합니다.`},{name:`size`,type:`'sm' | 'md' | 'lg' | 'xl'`,default:`md`,description:`아이콘 크기입니다.`},{name:`color`,type:`'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'muted'`,default:`—`,description:`currentColor에 적용할 공통 색상입니다.`},{name:`inline`,type:`boolean`,default:`false`,description:`텍스트 기준선에 맞춰 수직 정렬합니다.`},{name:`spin`,type:`boolean`,default:`false`,description:`회전 애니메이션을 적용합니다.`},{name:`button`,type:`boolean`,default:`false`,description:`button 루트의 클릭 가능한 아이콘으로 렌더합니다.`},{name:`circle`,type:`boolean`,default:`false`,description:`원형 배경 래퍼를 적용합니다.`},{name:`square`,type:`boolean`,default:`false`,description:`사각 배경 래퍼를 적용합니다.`},{name:`pulse`,type:`boolean`,default:`false`,description:`circle과 함께 펄스 강조 애니메이션을 적용합니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`button 유형의 클릭 파장 효과를 설정합니다.`},{name:`ariaLabel`,type:`string`,default:`—`,description:`React 접근성 이름. 의미 있는 아이콘과 아이콘 버튼에 지정합니다.`},{name:`title`,type:`string`,default:`—`,description:`React SVG title과 접근성 이름을 함께 제공합니다.`},{name:`className`,type:`string`,default:`''`,description:`React 루트에 추가할 클래스입니다.`}],F=P.map(e=>e.name===`ariaLabel`?{...e,name:`aria-label`,description:`Vue 접근성 이름. 의미 있는 아이콘과 아이콘 버튼에 지정합니다.`}:e.name===`className`?{...e,name:`class`,description:`Vue 루트에 추가할 클래스입니다.`}:e),I=[{name:`default`,type:`SVGElement`,default:`—`,description:`path, circle 등 커스텀 SVG 도형입니다. name보다 우선합니다.`}],L=[{name:`aria-hidden`,type:`'true'`,default:`—`,description:`장식용 SVG를 접근성 트리에서 숨깁니다.`},{name:`aria-label`,type:`string`,default:`—`,description:`의미 있는 SVG 또는 아이콘 버튼의 접근성 이름입니다.`},{name:`viewBox`,type:`string`,default:`0 0 24 24`,description:`공통 아이콘 좌표계입니다.`},{name:`stroke`,type:`string`,default:`currentColor`,description:`부모의 텍스트 색상을 상속합니다.`},{name:`data-ripple`,type:`'true' | 'false'`,default:`true`,description:`icon_button 클릭 파장 효과입니다.`}],R=[{name:`icon`,type:`class`,default:`—`,description:`SVG 루트 기본 구조와 중간 크기`},{name:`icon_sm · icon_lg · icon_xl`,type:`class`,default:`—`,description:`크기 변형`},{name:`icon_inline`,type:`class`,default:`—`,description:`텍스트 인라인 정렬`},{name:`icon_spin`,type:`class`,default:`—`,description:`회전 애니메이션`},{name:`icon_button`,type:`class`,default:`—`,description:`아이콘 버튼 래퍼`},{name:`icon_circle · icon_square`,type:`class`,default:`—`,description:`원형·사각형 배경 래퍼`},{name:`icon_circle-sm · icon_circle-lg`,type:`class`,default:`—`,description:`원형 배경 크기`},{name:`icon_pulse`,type:`class`,default:`—`,description:`펄스 강조 애니메이션`},{name:`icon_group`,type:`class`,default:`—`,description:`여러 아이콘을 가로로 배치하는 컨테이너`},{name:`icon_grid · icon_grid-item`,type:`class`,default:`—`,description:`아이콘 갤러리 그리드와 항목`},{name:`color_*`,type:`class`,default:`—`,description:`공통 색상 유틸리티`}],z=[{name:`--icon-size-sm · --icon-size · --icon-size-lg · --icon-size-xl`,type:`length`,default:`1rem · 1.25rem · 1.5rem · 2rem`,description:`아이콘 크기`},{name:`--icon-circle-size-sm · --icon-circle-size · --icon-circle-size-lg`,type:`length`,default:`1.75rem · 2.25rem · 2.75rem`,description:`배경형 아이콘 크기`},{name:`--icon-spin-duration`,type:`time`,default:`0.8s`,description:`회전 주기`},{name:`--icon-pulse-duration`,type:`time`,default:`1.5s`,description:`펄스 주기`}],B=[{title:`React · Next.js API · Props`,description:"Next.js는 `@uxkm/react/icon`을 재사용합니다.",tables:[{columns:N,rows:P}]},{title:`React · Next.js API · Children`,tables:[{columns:N,rows:[{name:`children`,type:`ReactNode`,default:`—`,description:`path, circle 등 커스텀 SVG 도형입니다. name보다 우선합니다.`}]}]},{title:`Vue · Nuxt API · Props`,description:"Nuxt는 `@uxkm/vue/icon`을 재사용합니다.",tables:[{columns:N,rows:F}]},{title:`Vue · Nuxt API · Slots`,tables:[{columns:N,rows:I}]},{title:`HTML · Gulp API · Markup`,description:`HTML과 Gulp는 SVG와 래퍼에 네이티브 속성과 공통 클래스를 직접 적용합니다.`,tables:[{columns:N,rows:L}]},{title:`공통 API · 클래스`,tables:[{columns:N,rows:R}]},{title:`공통 API · 디자인 토큰`,tables:[{columns:N,rows:z}]}]})))()}function H(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...h(),...e.components};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(_,{of:r}),`
`,(0,W.jsx)(t.h1,{id:`icon`,children:`Icon`}),`
`,(0,W.jsxs)(t.p,{children:[`SVG 아이콘의 이름·크기·색상·정렬·상태를 일관된 규칙으로 제공하는 기본 요소입니다. stroke 아이콘은 `,(0,W.jsx)(t.code,{children:`currentColor`}),`로 부모 색상을 상속합니다.`]}),`
`,(0,W.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,W.jsx)(t.code,{children:`@uxkm/vue/icon`}),`, `,(0,W.jsx)(t.code,{children:`@uxkm/react/icon`}),`으로 제공합니다. Nuxt와 Next.js 예시는 같은 구현을 재사용하므로 코드 탭의 경로도 실제 공통 소스를 가리킵니다.`]}),`
`,(0,W.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.code,{children:`name`}),`에 제공 아이콘 이름을 지정합니다. 별도 색상을 지정하지 않으면 주변 텍스트의 색상을 상속합니다.`]}),`
`,(0,W.jsx)(v,{of:c,sourceState:`none`}),`
`,(0,W.jsx)(S,{examples:j.basic}),`
`,(0,W.jsx)(t.h2,{id:`커스텀-svg`,children:`커스텀 SVG`}),`
`,(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.code,{children:`path`}),`, `,(0,W.jsx)(t.code,{children:`circle`}),` 등 SVG 도형을 자식으로 전달할 수 있습니다. 커스텀 도형은 `,(0,W.jsx)(t.code,{children:`name`}),`보다 우선합니다.`]}),`
`,(0,W.jsx)(v,{of:o,sourceState:`none`}),`
`,(0,W.jsx)(S,{examples:j.custom}),`
`,(0,W.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,W.jsxs)(t.p,{children:[`small, medium, large, extra large 네 가지 크기를 제공합니다. medium은 기본 `,(0,W.jsx)(t.code,{children:`icon`}),`, 나머지는 `,(0,W.jsx)(t.code,{children:`icon_sm`}),` · `,(0,W.jsx)(t.code,{children:`icon_lg`}),` · `,(0,W.jsx)(t.code,{children:`icon_xl`}),` 클래스를 사용합니다.`]}),`
`,(0,W.jsx)(v,{of:i,sourceState:`none`}),`
`,(0,W.jsx)(S,{examples:j.sizes}),`
`,(0,W.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,W.jsxs)(t.p,{children:[`공통 `,(0,W.jsx)(t.code,{children:`color_*`}),` 유틸리티로 default, primary, success, warning, danger, info, muted 색상을 적용합니다.`]}),`
`,(0,W.jsx)(v,{of:d,sourceState:`none`}),`
`,(0,W.jsx)(S,{examples:j.colors}),`
`,(0,W.jsx)(t.h2,{id:`텍스트-인라인`,children:`텍스트 인라인`}),`
`,(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.code,{children:`inline`}),` 또는 `,(0,W.jsx)(t.code,{children:`icon_inline`}),`으로 텍스트 기준선에 맞춥니다. 의미가 있는 아이콘에는 `,(0,W.jsx)(t.code,{children:`aria-label`}),`을 지정합니다.`]}),`
`,(0,W.jsx)(v,{of:s,sourceState:`none`}),`
`,(0,W.jsx)(S,{examples:j.inline}),`
`,(0,W.jsx)(t.h2,{id:`원형--사각형-배경`,children:`원형 · 사각형 배경`}),`
`,(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.code,{children:`circle`}),` · `,(0,W.jsx)(t.code,{children:`square`}),` 또는 `,(0,W.jsx)(t.code,{children:`icon_circle`}),` · `,(0,W.jsx)(t.code,{children:`icon_square`}),`로 배경형 아이콘을 만듭니다. circle은 small, medium, large 크기를 지원합니다.`]}),`
`,(0,W.jsx)(v,{of:p,sourceState:`none`}),`
`,(0,W.jsx)(S,{examples:j.background}),`
`,(0,W.jsx)(t.h2,{id:`아이콘-버튼`,children:`아이콘 버튼`}),`
`,(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.code,{children:`button`}),` 또는 `,(0,W.jsx)(t.code,{children:`icon_button`}),`으로 클릭 가능한 아이콘 버튼을 만듭니다. 접근성을 위해 `,(0,W.jsx)(t.code,{children:`aria-label`}),`을 반드시 지정합니다.`]}),`
`,(0,W.jsx)(v,{of:f,sourceState:`none`}),`
`,(0,W.jsx)(S,{examples:j.button}),`
`,(0,W.jsx)(t.h2,{id:`펄스`,children:`펄스`}),`
`,(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.code,{children:`circle`}),`과 `,(0,W.jsx)(t.code,{children:`pulse`}),`를 조합해 알림 등 주의가 필요한 상태를 반복 강조합니다.`]}),`
`,(0,W.jsx)(v,{of:m,sourceState:`none`}),`
`,(0,W.jsx)(S,{examples:j.pulse}),`
`,(0,W.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.code,{children:`icon_group`}),`으로 여러 아이콘을 같은 간격으로 나란히 배치합니다.`]}),`
`,(0,W.jsx)(v,{of:l,sourceState:`none`}),`
`,(0,W.jsx)(S,{examples:j.group}),`
`,(0,W.jsx)(t.h2,{id:`회전`,children:`회전`}),`
`,(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.code,{children:`spin`}),` 또는 `,(0,W.jsx)(t.code,{children:`icon_spin`}),`으로 회전 애니메이션을 적용합니다. 로딩 상태 표시에 사용합니다.`]}),`
`,(0,W.jsx)(v,{of:a,sourceState:`none`}),`
`,(0,W.jsx)(S,{examples:j.spin}),`
`,(0,W.jsx)(t.h2,{id:`아이콘-유형`,children:`아이콘 유형`}),`
`,(0,W.jsxs)(t.p,{children:[`현재 공통 구현에서 제공하는 stroke SVG 아이콘입니다. 기본 좌표계는 `,(0,W.jsx)(t.code,{children:`viewBox="0 0 24 24"`}),`, 선 굵기는 `,(0,W.jsx)(t.code,{children:`stroke-width="2"`}),`입니다.`]}),`
`,(0,W.jsx)(v,{of:n,sourceState:`none`}),`
`,(0,W.jsx)(S,{examples:j.gallery}),`
`,(0,W.jsx)(C,{sections:B})]})}function U(e={}){let{wrapper:t}={...h(),...e.components};return t?(0,W.jsx)(t,{...e,children:(0,W.jsx)(H,{...e})}):H(e)}var W;function G(){return(G=e((()=>{W=t(),g(),y(),b(),x(),M(),V(),u()})))()}G();export{U as default};