import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./Table.stories-ZPCSIMzu.js";import{i as m,r as h}from"./react-DSvVgjCn.js";import{c as g,r as _,u as v}from"./blocks-CkHyEh4O.js";import{i as y,n as b,r as x,t as S}from"./ComponentApiDocs-D9Q6nkXJ.js";import{i as C,t as w}from"./dataDisplayAdvancedApiSections-Bbj3q4fV.js";function T(e,t){let n=`import { Table } from '@uxkm/react/table';
import { Badge } from '@uxkm/react/badge';

${t.react}`,r=t.vue.replace(`<script setup>`,`<script setup>
import { Table } from '@uxkm/vue/table';
import { Badge } from '@uxkm/vue/badge';`);return[{id:`html`,label:`HTML`,fileName:`apps/html/src/components/data-display/Table/Table.html · ${e}`,code:t.html},{id:`gulp`,label:`Gulp`,fileName:`apps/gulp/src/components/data-display/Table/table.njk · ${e}`,code:`{# Table · ${e} #}\n${t.html}`},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/table · ${e}`,code:r},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/table · ${e}`,code:r},{id:`react`,label:`React`,fileName:`@uxkm/react/table · ${e}`,code:n},{id:`next`,label:`Next`,fileName:`@uxkm/react/table · ${e}`,code:n}]}function E(e,t={}){let n=t.wide?[`이름`,`부서`,`1월`,`2월`,`3월`]:[`이름`,`구분`,`상태`],r=[`table_wrap`,t.scroll&&`table_wrap-scroll`].filter(Boolean).join(` `),i=[t.maxHeight&&`--table-scroll-max-height: ${t.maxHeight}`,t.wide&&`min-width: 48rem`].filter(Boolean).join(`; `),a=t.columns?.flatMap((e,t)=>[e.padding&&`--table-col-${t+1}-padding: ${e.padding}`,e.nowrap&&`--table-col-${t+1}-white-space: nowrap`]).filter(Boolean).join(`; `);return`<div class="${r}"${i?` style="${i}"`:``}>
  <table class="${t.classes??`table`}"${a?` style="${a}"`:``}>
    ${I(t.columns)}<thead><tr>${n.map(e=>`<th scope="col">${e}</th>`).join(``)}</tr></thead>
    <tbody>
${L(e,t.badge)}
    </tbody>
  </table>
</div>`}function D(e,t,n,r=!1,i=!1){let a=R(e),o=JSON.stringify(N,null,2).replace(/^/gm,`  `),s=r?`{index === 2 ? <Badge color={cell === '활성' ? 'success' : 'warning'} label={cell} /> : cell}`:`{cell}`,c=r?`<Badge v-if="index === 2" :color="cell === '활성' ? 'success' : 'warning'" :label="cell" /><template v-else>{{ cell }}</template>`:`{{ cell }}`;return{react:`const data = ${a.trimStart()};${i?`\nconst columns = ${o.trimStart()};`:``}

export function Example() {
  return (
    <Table${t?` ${t}`:``}>
      <thead><tr><th scope="col">이름</th><th scope="col">구분</th><th scope="col">상태</th></tr></thead>
      <tbody>
        {data.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={cell}>${s}</td>)}</tr>)}
      </tbody>
    </Table>
  );
}`,vue:`<script setup>
const data = ${a.trimStart()};${i?`\nconst columns = ${o.trimStart()};`:``}
<\/script>

<template>
  <Table${n?` ${n}`:``}>
    <thead><tr><th scope="col">이름</th><th scope="col">구분</th><th scope="col">상태</th></tr></thead>
    <tbody>
      <tr v-for="row in data" :key="row[0]"><td v-for="(cell, index) in row" :key="cell">${c}</td></tr>
    </tbody>
  </Table>
</template>`}}function O(e,t){let n=R(M),r=JSON.stringify(P,null,2).replace(/^/gm,`  `);return{react:`const rows = ${n.trimStart()};
const columns = ${r.trimStart()};

export function Example() {
  return (
    <Table ${e} columns={columns} style={{ minWidth: '48rem' }}>
      <thead><tr><th>이름</th><th>부서</th><th>1월</th><th>2월</th><th>3월</th></tr></thead>
      <tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
    </Table>
  );
}`,vue:`<script setup>
const rows = ${n.trimStart()};
const columns = ${r.trimStart()};
<\/script>

<template>
  <Table ${t} :columns="columns" :style="{ minWidth: '48rem' }">
    <thead><tr><th>이름</th><th>부서</th><th>1월</th><th>2월</th><th>3월</th></tr></thead>
    <tbody><tr v-for="row in rows" :key="row[0]"><td v-for="cell in row" :key="cell">{{ cell }}</td></tr></tbody>
  </Table>
</template>`}}var k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{k=[[`홍길동`,`Frontend`,`활성`],[`김철수`,`Backend`,`활성`],[`이영희`,`Design`,`휴가`]],A=[[`Basic`,`₩12,000`,`120`],[`Pro`,`₩29,000`,`84`],[`Enterprise`,`문의`,`12`]],j=Array.from({length:12},(e,t)=>[`사용자 ${t+1}`,t%2?`Design`:`Development`,t%3?`활성`:`대기`]),M=j.slice(0,6).map((e,t)=>[e[0],e[1],String(120+t),String(132+t),String(145+t)]),N=[{width:`9rem`,nowrap:!0},{minWidth:`10rem`},{width:`7rem`,nowrap:!0}],P=[{width:`8rem`,nowrap:!0},{width:`10rem`,nowrap:!0},{width:`10rem`},{width:`10rem`},{width:`10rem`}],F=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),I=e=>e?.length?`<colgroup>${e.map(e=>{let t=[e.width&&`width: ${e.width}`,e.minWidth&&`min-width: ${e.minWidth}`,e.maxWidth&&`max-width: ${e.maxWidth}`].filter(Boolean).join(`; `);return`<col${t?` style="${t}"`:``}>`}).join(``)}</colgroup>\n    `:``,L=(e,t=!1)=>e.map(e=>`      <tr>${e.map((e,n)=>t&&n===2?`<td><span class="badge color_${e===`활성`?`success`:`warning`}">${F(e)}</span></td>`:`<td>${F(e)}</td>`).join(``)}</tr>`).join(`
`),R=e=>JSON.stringify(e,null,2).replace(/^/gm,`  `),z=(e,t,n)=>{let r=D(t,n.props??``,n.vueProps??n.props??``,n.badge,n.columns);return T(e,{html:E(t,{classes:n.classes,badge:n.badge,columns:n.columns?N:void 0,scroll:n.scroll,maxHeight:n.maxHeight}),...r})},B={basic:z(`basic`,k,{props:`columns={columns}`,vueProps:`:columns="columns"`,classes:`table table_columns`,badge:!0,columns:!0}),striped:z(`striped`,A,{props:`striped columns={columns}`,vueProps:`striped :columns="columns"`,classes:`table table_striped table_columns`,columns:!0}),bordered:z(`bordered`,k,{props:`bordered`,classes:`table table_bordered`}),compact:z(`compact`,A,{props:`compact columns={columns}`,vueProps:`compact :columns="columns"`,classes:`table table_compact table_columns`,columns:!0}),hover:z(`hover`,k,{props:`hover columns={columns}`,vueProps:`hover :columns="columns"`,classes:`table table_hover table_columns`,badge:!0,columns:!0}),combined:z(`combined`,k,{props:`bordered compact hover`,classes:`table table_bordered table_compact table_hover`}),stickyTop:z(`stickyTop`,j,{props:`scroll scrollMaxHeight="14rem" stickyTop bordered compact`,vueProps:`scroll scroll-max-height="14rem" sticky-top bordered compact`,classes:`table table_sticky-top table_bordered table_compact`,scroll:!0,maxHeight:`14rem`}),stickyLeft:(()=>{let e=O(`scroll stickyLeft`,`scroll sticky-left`);return T(`stickyLeft`,{html:E(M,{classes:`table table_columns table_sticky-left table_sticky-cols-1`,columns:P,scroll:!0,wide:!0}),...e})})(),stickyColumns:(()=>{let e=O(`scroll stickyLeft stickyCols={2} stickyLeftOffsets={{ 2: '8rem' }}`,`scroll sticky-left :sticky-cols="2" :sticky-left-offsets="{ 2: '8rem' }"`);return T(`stickyColumns`,{html:E(M,{classes:`table table_columns table_sticky-left table_sticky-cols-2`,columns:P,scroll:!0,wide:!0}).replace(`style="`,`style="--table-sticky-left-2: 8rem; `),...e})})(),stickyBoth:(()=>{let e=O(`scroll scrollMaxHeight="14rem" stickyTop stickyLeft stickyCols={2} stickyLeftOffsets={{ 2: '8rem' }} bordered compact`,`scroll scroll-max-height="14rem" sticky-top sticky-left :sticky-cols="2" :sticky-left-offsets="{ 2: '8rem' }" bordered compact`);return T(`stickyBoth`,{html:E(M,{classes:`table table_columns table_bordered table_compact table_sticky-top table_sticky-left table_sticky-cols-2`,columns:P,scroll:!0,maxHeight:`14rem`,wide:!0}).replace(`style="`,`style="--table-sticky-left-2: 8rem; `),...e})})()}})))()}function H(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...m(),...e.components};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(g,{of:i}),`
`,(0,W.jsx)(t.h1,{id:`table`,children:`Table`}),`
`,(0,W.jsx)(t.p,{children:`행과 열로 구조화된 데이터를 표시합니다. 테두리·줄무늬·밀도·호버 상태와 열 크기, 가로·세로 스크롤, 상단·좌측 고정을 공통 API로 제공합니다.`}),`
`,(0,W.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,W.jsx)(t.code,{children:`@uxkm/vue/table`}),`, `,(0,W.jsx)(t.code,{children:`@uxkm/react/table`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,W.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.code,{children:`columns`}),`로 열 너비·최소 너비·패딩·줄바꿈을 지정하고 내부에는 시맨틱 `,(0,W.jsx)(t.code,{children:`thead`}),`·`,(0,W.jsx)(t.code,{children:`tbody`}),`를 작성합니다.`]}),`
`,(0,W.jsx)(_,{of:f,sourceState:`none`}),`
`,(0,W.jsx)(x,{examples:B.basic}),`
`,(0,W.jsx)(t.h2,{id:`줄무늬`,children:`줄무늬`}),`
`,(0,W.jsx)(_,{of:p,sourceState:`none`}),`
`,(0,W.jsx)(x,{examples:B.striped}),`
`,(0,W.jsx)(t.h2,{id:`테두리`,children:`테두리`}),`
`,(0,W.jsx)(_,{of:c,sourceState:`none`}),`
`,(0,W.jsx)(x,{examples:B.bordered}),`
`,(0,W.jsx)(t.h2,{id:`컴팩트`,children:`컴팩트`}),`
`,(0,W.jsx)(t.p,{children:`셀 패딩을 줄여 많은 데이터를 표시합니다.`}),`
`,(0,W.jsx)(_,{of:o,sourceState:`none`}),`
`,(0,W.jsx)(x,{examples:B.compact}),`
`,(0,W.jsx)(t.h2,{id:`호버`,children:`호버`}),`
`,(0,W.jsx)(t.p,{children:`포인터가 위치한 본문 행을 강조합니다.`}),`
`,(0,W.jsx)(_,{of:n,sourceState:`none`}),`
`,(0,W.jsx)(x,{examples:B.hover}),`
`,(0,W.jsx)(t.h2,{id:`스타일-조합`,children:`스타일 조합`}),`
`,(0,W.jsx)(t.p,{children:`테두리·컴팩트·호버 등의 변형을 함께 사용할 수 있습니다.`}),`
`,(0,W.jsx)(_,{of:u,sourceState:`none`}),`
`,(0,W.jsx)(x,{examples:B.combined}),`
`,(0,W.jsx)(t.h2,{id:`상단-헤더-고정`,children:`상단 헤더 고정`}),`
`,(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.code,{children:`scroll`}),`과 `,(0,W.jsx)(t.code,{children:`stickyTop`}),`을 조합해 세로 스크롤 중 헤더를 고정합니다.`]}),`
`,(0,W.jsx)(_,{of:s,sourceState:`none`}),`
`,(0,W.jsx)(x,{examples:B.stickyTop}),`
`,(0,W.jsx)(t.h2,{id:`좌측-열-고정`,children:`좌측 열 고정`}),`
`,(0,W.jsx)(t.p,{children:`가로 스크롤 중 첫 번째 열을 고정합니다.`}),`
`,(0,W.jsx)(_,{of:r,sourceState:`none`}),`
`,(0,W.jsx)(x,{examples:B.stickyLeft}),`
`,(0,W.jsx)(t.h2,{id:`다중-열-고정`,children:`다중 열 고정`}),`
`,(0,W.jsxs)(t.p,{children:[(0,W.jsx)(t.code,{children:`stickyCols`}),`와 `,(0,W.jsx)(t.code,{children:`stickyLeftOffsets`}),`로 최대 네 개 열을 고정할 수 있습니다.`]}),`
`,(0,W.jsx)(_,{of:d,sourceState:`none`}),`
`,(0,W.jsx)(x,{examples:B.stickyColumns}),`
`,(0,W.jsx)(t.h2,{id:`상단좌측-동시-고정`,children:`상단·좌측 동시 고정`}),`
`,(0,W.jsx)(t.p,{children:`큰 데이터 표에서 헤더와 식별 열을 동시에 유지합니다.`}),`
`,(0,W.jsx)(_,{of:l,sourceState:`none`}),`
`,(0,W.jsx)(x,{examples:B.stickyBoth}),`
`,(0,W.jsx)(S,{sections:C})]})}function U(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,W.jsx)(t,{...e,children:(0,W.jsx)(H,{...e})}):H(e)}var W;function G(){return(G=e((()=>{W=t(),h(),v(),y(),b(),V(),w(),a()})))()}G();export{U as default};