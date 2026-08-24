import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./Progress.stories-IcBG2y7L.js";import{i as p,r as m}from"./react-DSvVgjCn.js";import{c as h,r as g,u as _}from"./blocks-CkHyEh4O.js";import{i as v,n as y,r as b,t as x}from"./ComponentApiDocs-D9Q6nkXJ.js";function S(e){let t=(e,t=`progress_fit color_primary`,n=``,r=`진행률`)=>`<div class="progress ${t}" data-percent="${e}">${n}<div class="progress_track" role="progressbar"${t.includes(`is-indeterminate`)?` aria-busy="true"`:` aria-valuenow="${e}"`} aria-valuemin="0" aria-valuemax="100" aria-label="${r}"><span class="progress_bar" style="width: ${e}%">${t.includes(`progress_inside`)?`${e}%`:``}</span></div></div>`,n=(e,t)=>`<div class="progress_header"><span class="progress_label">${e}</span>${t===void 0?``:`<span class="progress_value">${t}%</span>`}</div>`,r=(e,t=`primary`,n=``)=>`<div class="progress progress_circle color_${t}${n?` progress_${n}`:``}" role="progressbar" aria-valuenow="${e}" aria-valuemin="0" aria-valuemax="100" aria-label="진행률" style="--progress-percent: ${e}"><svg class="progress_circle-svg" viewBox="0 0 100 100" aria-hidden="true"><circle class="progress_circle-track" cx="50" cy="50" r="45"></circle><circle class="progress_circle-bar" cx="50" cy="50" r="45"></circle></svg><span class="progress_circle-value">${e}%</span></div>`;return{basic:[t(0),t(30),t(60),t(100,`progress_fit color_success`)],label:[t(42,`progress_fit color_primary`,n(`파일 업로드`,42),`파일 업로드 진행률`),t(67,`progress_fit color_primary`,n(`데이터 동기화`,67),`데이터 동기화 진행률`)],color:[t(50,`progress_fit color_primary`,``,`Primary 진행률`),t(100,`progress_fit color_success`,``,`Success 진행률`),t(75,`progress_fit color_warning`,``,`Warning 진행률`),t(35,`progress_fit color_danger`,``,`Danger 진행률`)],size:[t(40,`progress_fit progress_sm color_primary`),t(55),t(70,`progress_fit progress_lg color_primary`)],striped:[t(45,`progress_fit progress_striped color_primary`,``,`줄무늬 진행률`),t(65,`progress_fit progress_striped progress_animated color_primary`,``,`애니메이션 진행률`)],indeterminate:[t(0,`progress_fit color_primary is-indeterminate`,``,`처리 중`),t(0,`progress_fit color_success is-indeterminate`,n(`동기화 중…`),`동기화 중`)],inside:[t(25,`progress_fit progress_inside color_primary`),t(80,`progress_fit progress_inside progress_lg color_success`)],circle:[r(25),r(68,`success`),r(50,`warning`,`sm`),r(90,`danger`,`lg`)],width:[t(50,`progress_fit color_primary`,n(`progress_fit`,50)),t(72,`progress_block color_primary`,n(`progress_block — 전체 너비`,72))]}[e].join(`

`)}function C(e){let t=S(e),n=e===`circle`?`ProgressCircle`:`Progress`,r=`import { ${n} } from '@uxkm/react/progress';\n\nexport function Example() {\n  return <>${T[e]}</>;\n}`,i=`<script setup>\nimport { ${n} } from '@uxkm/vue/progress';\n<\/script>\n<template>\n${D[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Progress.html · ${e}`,code:t},{id:`gulp`,label:`Gulp`,fileName:`progress.njk · ${e}`,code:t},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/progress · ${e}`,code:i},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/progress · ${e}`,code:i},{id:`react`,label:`React`,fileName:`@uxkm/react/progress · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/progress · ${e}`,code:r}]}var w,T,E,D,O;function k(){return(k=e((()=>{w=[`basic`,`label`,`color`,`size`,`striped`,`indeterminate`,`inside`,`circle`,`width`],T={basic:`<Progress percent={0} />
<Progress percent={30} />
<Progress percent={60} />
<Progress percent={100} status="success" />`,label:`<Progress percent={42} showInfo label="파일 업로드" ariaLabel="파일 업로드 진행률" />
<Progress percent={67} showInfo label="데이터 동기화" ariaLabel="데이터 동기화 진행률" />`,color:`<Progress percent={50} color="primary" ariaLabel="Primary 진행률" />
<Progress percent={100} color="success" ariaLabel="Success 진행률" />
<Progress percent={75} color="warning" ariaLabel="Warning 진행률" />
<Progress percent={35} color="danger" ariaLabel="Danger 진행률" />`,size:`<Progress size="sm" percent={40} />
<Progress percent={55} />
<Progress size="lg" percent={70} />`,striped:`<Progress percent={45} striped color="primary" ariaLabel="줄무늬 진행률" />
<Progress percent={65} striped animated color="primary" ariaLabel="애니메이션 진행률" />`,indeterminate:`<Progress indeterminate color="primary" ariaLabel="처리 중" />
<Progress indeterminate label="동기화 중…" color="success" ariaLabel="동기화 중" />`,inside:`<Progress percent={25} inside />
<Progress percent={80} inside size="lg" color="success" />`,circle:`<ProgressCircle percent={25} />
<ProgressCircle percent={68} color="success" />
<ProgressCircle percent={50} size="sm" color="warning" />
<ProgressCircle percent={90} size="lg" color="danger" />`,width:`<Progress percent={50} showInfo label="progress_fit" />
<Progress percent={72} block showInfo label="progress_block — 전체 너비" />`},E={...T,inside:`${T.inside}\n<Progress percent={100} inside />`},D=Object.fromEntries(Object.entries(E).map(([e,t])=>[e,t.replaceAll(`percent={`,`:percent="`).replaceAll(`} `,`" `).replaceAll(`} />`,`" />`).replaceAll(`showInfo`,`show-info`).replaceAll(`ariaLabel`,`aria-label`)])),O=Object.fromEntries(w.map(e=>[e,C(e)]))})))()}var A,j,M;function N(){return(N=e((()=>{A=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],j=(e,t,n)=>({title:e,description:n,tables:[{columns:A,rows:t}]}),M=[j(`React · Next.js API`,[{name:`percent`,type:`number`,default:`0`,description:`0~100 진행률입니다.`},{name:`status`,type:`'' | 'success' | 'exception'`,default:`''`,description:`완료·예외 상태 색상입니다.`},{name:`size · color`,type:`string`,default:`'md' · 'primary'`,description:`크기와 의미 색상입니다.`},{name:`showInfo · label`,type:`boolean · string`,default:`false · —`,description:`상단 레이블과 값을 표시합니다.`},{name:`striped · animated · indeterminate · inside · block`,type:`boolean`,default:`false`,description:`패턴, 애니메이션, 불확정, 내부 값, 전체 너비 옵션입니다.`},{name:`ariaLabel`,type:`string`,default:`'진행률'`,description:`접근성 이름입니다.`}],`Next.js는 @uxkm/react/progress를 재사용합니다.`),j(`ProgressCircle API`,[{name:`percent · color · size · ariaLabel`,type:`number · string`,default:`0 · 'primary' · 'md' · '진행률'`,description:`원형 진행률 값과 표현 옵션입니다.`}]),j(`Vue · Nuxt API`,[{name:`percent · status · size · color`,type:`number · string`,default:`0 · '' · 'md' · 'primary'`,description:`진행률과 표현 상태입니다.`},{name:`show-info · striped · animated · indeterminate · inside · block`,type:`boolean`,default:`false`,description:`선형 진행률 표시 옵션입니다.`}],`Nuxt는 @uxkm/vue/progress를 재사용합니다.`),j(`HTML · Gulp`,[{name:`progress · progress_track · progress_bar`,type:`class`,default:`—`,description:`루트, 트랙, 채움 막대입니다.`},{name:`role · aria-valuenow/min/max`,type:`attribute`,default:`—`,description:`진행률 접근성 속성입니다.`}]),j(`디자인 토큰`,[{name:`--progress-height · --progress-max-width`,type:`length`,default:`8px · input-max-width`,description:`선형 진행률 높이와 최대 너비입니다.`},{name:`--progress-circle-size · --progress-circle-stroke`,type:`length · number`,default:`7.5rem · 6`,description:`원형 진행률 크기와 선 두께입니다.`}])]})))()}function P(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...p(),...e.components};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(h,{of:u}),`
`,(0,I.jsx)(t.h1,{id:`progress`,children:`Progress`}),`
`,(0,I.jsx)(t.p,{children:`작업의 진행 상태를 선형 또는 원형으로 표시합니다.`}),`
`,(0,I.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,I.jsx)(g,{of:d,sourceState:`none`}),`
`,(0,I.jsx)(b,{examples:O.basic}),`
`,(0,I.jsx)(t.h2,{id:`레이블--값`,children:`레이블 · 값`}),`
`,(0,I.jsx)(g,{of:c,sourceState:`none`}),`
`,(0,I.jsx)(b,{examples:O.label}),`
`,(0,I.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,I.jsx)(g,{of:l,sourceState:`none`}),`
`,(0,I.jsx)(b,{examples:O.color}),`
`,(0,I.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,I.jsx)(g,{of:r,sourceState:`none`}),`
`,(0,I.jsx)(b,{examples:O.size}),`
`,(0,I.jsx)(t.h2,{id:`줄무늬--애니메이션`,children:`줄무늬 · 애니메이션`}),`
`,(0,I.jsx)(g,{of:o,sourceState:`none`}),`
`,(0,I.jsx)(b,{examples:O.striped}),`
`,(0,I.jsx)(t.h2,{id:`불확정`,children:`불확정`}),`
`,(0,I.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,I.jsx)(b,{examples:O.indeterminate}),`
`,(0,I.jsx)(t.h2,{id:`바-안-텍스트`,children:`바 안 텍스트`}),`
`,(0,I.jsx)(g,{of:n,sourceState:`none`}),`
`,(0,I.jsx)(b,{examples:O.inside}),`
`,(0,I.jsx)(t.h2,{id:`원형`,children:`원형`}),`
`,(0,I.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,I.jsx)(b,{examples:O.circle}),`
`,(0,I.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,I.jsx)(g,{of:f,sourceState:`none`}),`
`,(0,I.jsx)(b,{examples:O.width}),`
`,(0,I.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,I.jsxs)(t.p,{children:[`확정 진행률은 `,(0,I.jsx)(t.code,{children:`aria-valuenow`}),`, `,(0,I.jsx)(t.code,{children:`aria-valuemin`}),`, `,(0,I.jsx)(t.code,{children:`aria-valuemax`}),`를 제공하고, 불확정 진행률은 `,(0,I.jsx)(t.code,{children:`aria-busy="true"`}),`를 사용합니다.`]}),`
`,(0,I.jsx)(x,{sections:M})]})}function F(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,I.jsx)(t,{...e,children:(0,I.jsx)(P,{...e})}):P(e)}var I;function L(){return(L=e((()=>{I=t(),m(),_(),v(),y(),k(),N(),i()})))()}L();export{F as default};