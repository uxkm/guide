import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u}from"./Spin.stories-DaJDYn-g.js";import{i as d,r as f}from"./react-DSvVgjCn.js";import{c as p,r as m,u as h}from"./blocks-CkHyEh4O.js";import{i as g,n as _,r as v,t as y}from"./ComponentApiDocs-D9Q6nkXJ.js";function b(e=`color_primary`,t=``,n=`로딩 중`){return`<div class="spin ${e}" role="status" aria-live="polite" aria-busy="true" aria-label="${n}"><span class="spin_indicator" aria-hidden="true"></span>${t?`<p class="spin_tip">${t}</p>`:``}</div>`}function x(e){return{basic:[b()],size:[b(`spin_sm color_primary`),b(),b(`spin_lg color_primary`)],color:[b(`color_primary`,``,`Primary 로딩`),b(`color_success`,``,`Success 로딩`),b(`color_warning`,``,`Warning 로딩`),b(`color_danger`,``,`Danger 로딩`)],tip:[b(`color_primary`,`데이터를 불러오는 중…`,`데이터를 불러오는 중`),b(`spin_lg color_primary`,`파일 업로드 중…`,`파일 업로드 중`)],inline:[b(`spin_sm spin_inline color_primary`,`저장 중…`,`저장 중`),`<button class="btn btn_filled color_primary is-loading" disabled aria-busy="true">제출 중…</button>`],block:[b(`spin_block color_primary`,`잠시만 기다려 주세요…`)],overlay:[`<div class="spin_wrap spin_wrap-block is-loading" aria-busy="true"><div class="spin_wrap-body"><div class="card card_shadow"><div class="card_header"><h3 class="card_title">대시보드</h3></div><div class="card_body"><p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p></div></div></div>${b(`spin_overlay color_primary`,`데이터 로딩 중…`,`데이터 로딩 중`)}</div>`,`<div class="spin_wrap spin_wrap-block spin_wrap-blur is-loading" aria-busy="true"><div class="spin_wrap-body"><div class="card card_shadow"><div class="card_header"><h3 class="card_title">블러 효과</h3></div><div class="card_body"><p><code>spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p></div></div></div>${b(`spin_overlay color_primary`,``,`처리 중`)}</div>`]}[e].join(`

`)}function S(e){let t=x(e),n=e===`overlay`?`SpinWrap`:`Spin`,r=`import { ${n} } from '@uxkm/react/spin';${e===`inline`?`
import Button from '@uxkm/react/button';`:``}`,i=`import { ${n} } from '@uxkm/vue/spin';${e===`inline`?`
import Button from '@uxkm/vue/button';`:``}`,a=`${r}\n\nexport function Example() { return <>${w[e]}</>; }`,o=`<script setup>\n${i}\n<\/script>\n<template>\n${T[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Spin.html · ${e}`,code:t},{id:`gulp`,label:`Gulp`,fileName:`spin.njk · ${e}`,code:t},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/spin · ${e}`,code:o},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/spin · ${e}`,code:o},{id:`react`,label:`React`,fileName:`@uxkm/react/spin · ${e}`,code:a},{id:`next`,label:`Next`,fileName:`@uxkm/react/spin · ${e}`,code:a}]}var C,w,T,E;function D(){return(D=e((()=>{C=[`basic`,`size`,`color`,`tip`,`inline`,`block`,`overlay`],w={basic:`<Spin />`,size:`<Spin size="sm" />
<Spin />
<Spin size="lg" />`,color:`<Spin color="primary" ariaLabel="Primary 로딩" />
<Spin color="success" ariaLabel="Success 로딩" />
<Spin color="warning" ariaLabel="Warning 로딩" />
<Spin color="danger" ariaLabel="Danger 로딩" />`,tip:`<Spin tip="데이터를 불러오는 중…" ariaLabel="데이터를 불러오는 중" />
<Spin size="lg" tip="파일 업로드 중…" ariaLabel="파일 업로드 중" />`,inline:`<p><Spin size="sm" inline color="primary" tip="저장 중…" ariaLabel="저장 중" /></p>
<Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />`,block:`<Spin block color="primary" tip="잠시만 기다려 주세요…" ariaLabel="로딩 중" />`,overlay:`<SpinWrap block loading tip="데이터 로딩 중…" ariaLabel="데이터 로딩 중"><div className="card card_shadow"><div className="card_header"><h3 className="card_title">대시보드</h3></div><div className="card_body"><p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p></div></div></SpinWrap>
<SpinWrap block blur loading ariaLabel="처리 중"><div className="card card_shadow"><div className="card_header"><h3 className="card_title">블러 효과</h3></div><div className="card_body"><p><code className="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.</p></div></div></SpinWrap>`},T=Object.fromEntries(Object.entries(w).map(([e,t])=>[e,t.replaceAll(`ariaLabel`,`aria-label`).replaceAll(`className=`,`class=`)])),E=Object.fromEntries(C.map(e=>[e,S(e)]))})))()}var O,k,A;function j(){return(j=e((()=>{O=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],k=(e,t,n)=>({title:e,description:n,tables:[{columns:O,rows:t}]}),A=[k(`Spin API`,[{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`스피너 크기입니다.`},{name:`tip · color`,type:`string`,default:`— · 'primary'`,description:`설명 문구와 의미 색상입니다.`},{name:`inline · block · overlay`,type:`boolean`,default:`false`,description:`인라인, 전체 너비, 오버레이 배치입니다.`},{name:`ariaLabel`,type:`string`,default:`'로딩 중'`,description:`상태 접근성 이름입니다.`}]),k(`SpinWrap API`,[{name:`loading · block · blur`,type:`boolean`,default:`false`,description:`로딩 표시, 최소 높이, 블러 효과입니다.`},{name:`tip · ariaLabel · children`,type:`string · ReactNode`,default:`—`,description:`오버레이 문구와 대상 콘텐츠입니다.`}]),k(`HTML · Gulp`,[{name:`spin · spin_indicator · spin_tip`,type:`class`,default:`—`,description:`스피너 루트, 표시기, 문구입니다.`},{name:`spin_wrap · spin_wrap-body · is-loading`,type:`class`,default:`—`,description:`컨테이너 오버레이 구조와 상태입니다.`}]),k(`디자인 토큰`,[{name:`--spin-size · --spin-duration`,type:`length · time`,default:`2rem · 0.8s`,description:`표시기 크기와 회전 시간입니다.`},{name:`--spin-overlay-bg · --spin-wrap-content-opacity`,type:`color · number`,default:`rgba(15,20,25,.72) · .45`,description:`오버레이 배경과 콘텐츠 투명도입니다.`}])]})))()}function M(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...d(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(p,{of:l}),`
`,(0,P.jsx)(t.h1,{id:`spin`,children:`Spin`}),`
`,(0,P.jsx)(t.p,{children:`작업이 진행 중임을 회전 표시기 또는 콘텐츠 오버레이로 안내합니다.`}),`
`,(0,P.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,P.jsx)(m,{of:u,sourceState:`none`}),`
`,(0,P.jsx)(v,{examples:E.basic}),`
`,(0,P.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,P.jsx)(m,{of:s,sourceState:`none`}),`
`,(0,P.jsx)(v,{examples:E.size}),`
`,(0,P.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,P.jsx)(m,{of:c,sourceState:`none`}),`
`,(0,P.jsx)(v,{examples:E.color}),`
`,(0,P.jsx)(t.h2,{id:`설명-텍스트`,children:`설명 텍스트`}),`
`,(0,P.jsx)(m,{of:r,sourceState:`none`}),`
`,(0,P.jsx)(v,{examples:E.tip}),`
`,(0,P.jsx)(t.h2,{id:`인라인`,children:`인라인`}),`
`,(0,P.jsx)(m,{of:i,sourceState:`none`}),`
`,(0,P.jsx)(v,{examples:E.inline}),`
`,(0,P.jsx)(t.h2,{id:`블록-정렬`,children:`블록 정렬`}),`
`,(0,P.jsx)(m,{of:o,sourceState:`none`}),`
`,(0,P.jsx)(v,{examples:E.block}),`
`,(0,P.jsx)(t.h2,{id:`컨테이너-오버레이`,children:`컨테이너 오버레이`}),`
`,(0,P.jsx)(m,{of:n,sourceState:`none`}),`
`,(0,P.jsx)(v,{examples:E.overlay}),`
`,(0,P.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,P.jsxs)(t.p,{children:[`Spin은 `,(0,P.jsx)(t.code,{children:`role="status"`}),`, `,(0,P.jsx)(t.code,{children:`aria-live="polite"`}),`, `,(0,P.jsx)(t.code,{children:`aria-busy="true"`}),`를 제공하며 장식용 표시기는 보조 기술에서 제외합니다.`]}),`
`,(0,P.jsx)(y,{sections:A})]})}function N(e={}){let{wrapper:t}={...d(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=t(),f(),h(),g(),_(),D(),j(),a()})))()}F();export{N as default};