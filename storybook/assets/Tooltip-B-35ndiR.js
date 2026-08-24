import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g}from"./Tooltip.stories-CHdrWqbv.js";import{i as _,r as v}from"./react-DSvVgjCn.js";import{c as y,r as b,u as x}from"./blocks-CkHyEh4O.js";import{i as S,n as C,r as w,t as T}from"./ComponentApiDocs-D9Q6nkXJ.js";function E(e){let t=j[e];return e===`slot`?`import Tooltip from '@uxkm/react/tooltip';
import Button from '@uxkm/react/button';

export function SlotExample() {
  return <Tooltip triggerContent={<Button variant="outline" label="슬롯 예시" />}>짧은 도움말 텍스트입니다.</Tooltip>;
}`:e===`inline`?`import Tooltip from '@uxkm/react/tooltip';\nimport Link from '@uxkm/react/link';\n\nexport function InlineExample() {\n  return <p>결제 시 <Tooltip content="${t.content}" triggerContent={<Link label="에스크로" />} /> 서비스를 이용할 수 있습니다.</p>;\n}`:e===`disabled`?`import Tooltip from '@uxkm/react/tooltip';\nimport Button from '@uxkm/react/button';\n\nexport function DisabledExample() {\n  return <Tooltip content="${t.content}" triggerContent={<span tabIndex={0}><Button label="제출 불가" disabled /></span>} />;\n}`:`import Tooltip from '@uxkm/react/tooltip';\nimport Button from '@uxkm/react/button';\n\nexport function ${e[0].toUpperCase()+e.slice(1)}Example() {\n  return <Tooltip ${t.props?`${t.props} `:``}content="${t.content}" triggerContent={<Button ${t.button||`variant="outline"`} label="${t.label}" />} />;\n}`}function D(e){let t=j[e],n=(t.props||``).replace(`arrowAnchor`,`arrow-anchor`).replace(`noArrow`,`no-arrow`);return e===`slot`?`<script setup>
import Tooltip from '@uxkm/vue/tooltip';
import Button from '@uxkm/vue/button';
<\/script>
<template><Tooltip><template #trigger><Button variant="outline" label="슬롯 예시" /></template>짧은 도움말 텍스트입니다.</Tooltip></template>`:e===`inline`?`<script setup>\nimport Tooltip from '@uxkm/vue/tooltip';\nimport Link from '@uxkm/vue/link';\n<\/script>\n<template><p>결제 시 <Tooltip content="${t.content}"><template #trigger><Link label="에스크로" /></template></Tooltip> 서비스를 이용할 수 있습니다.</p></template>`:e===`disabled`?`<script setup>\nimport Tooltip from '@uxkm/vue/tooltip';\nimport Button from '@uxkm/vue/button';\n<\/script>\n<template><Tooltip content="${t.content}"><template #trigger><span tabindex="0"><Button variant="filled" color="primary" label="제출 불가" disabled /></span></template></Tooltip></template>`:`<script setup>\nimport Tooltip from '@uxkm/vue/tooltip';\nimport Button from '@uxkm/vue/button';\n<\/script>\n<template><Tooltip ${n?`${n} `:``}content="${t.content}"><template #trigger><Button ${t.button||`variant="outline"`} label="${t.label}" /></template></Tooltip></template>`}function O(e){let t=j[e];return`<span class="${[`tooltip`,e===`open`&&`is-open`,e===`size`&&`tooltip_sm`,e===`offset`&&`tooltip_offset-lg`,e===`placement`&&`tooltip_placement-top`,e===`inverse`&&`tooltip_inverse`,e===`arrowAnchor`&&`tooltip_arrow-anchor-target`,e===`noArrow`&&`tooltip_no-arrow`].filter(Boolean).join(` `)}" data-tooltip${e===`click`?` data-tooltip-trigger="click"`:``}>\n  <button class="btn btn_outline tooltip_trigger" aria-describedby="tooltip-${e}">${t.label}</button>\n  <span class="tooltip_bubble" id="tooltip-${e}" role="tooltip" hidden>${e===`noArrow`?``:`<span class="tooltip_arrow" aria-hidden="true"></span>`}${t.content}</span>\n</span>`}function k(e){let t=O(e),n=D(e),r=E(e);return[{id:`html`,label:`HTML`,fileName:`Tooltip.html · ${e}`,code:t},{id:`gulp`,label:`Gulp`,fileName:`tooltip.njk · ${e}`,code:t},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/tooltip · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/tooltip · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/tooltip · ${e}`,code:r},{id:`next`,label:`Next`,fileName:`@uxkm/react/tooltip · ${e}`,code:r}]}var A,j,M;function N(){return(N=e((()=>{A=[`basic`,`slot`,`open`,`size`,`offset`,`inline`,`trigger`,`click`,`placement`,`inverse`,`disabled`,`arrowAnchor`,`noArrow`],j={basic:{label:`마우스 오버`,content:`짧은 도움말 텍스트입니다.`},slot:{label:`슬롯 예시`,content:`짧은 도움말 텍스트입니다.`},open:{label:`열림`,content:`정적 데모용 열린 상태입니다.`,props:`open`,button:`variant="filled" color="primary"`},size:{label:`Small`,content:`작은 말풍선`,props:`size="sm"`,button:`variant="ghost" size="sm"`},offset:{label:`lg`,content:`넓은 간격`,props:`offset="lg"`,button:`variant="ghost" size="sm"`},inline:{label:`에스크로`,content:`구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.`},trigger:{label:`Button`,content:`버튼 트리거 예시입니다.`,button:`variant="filled" color="primary"`},click:{label:`클릭하여 보기`,content:`클릭으로 열고 닫는 Tooltip입니다.`,props:`trigger="click"`},placement:{label:`위`,content:`트리거 위`,props:`placement="top"`,button:`size="sm"`},inverse:{label:`역색 Tooltip`,content:`어두운 배경의 말풍선입니다.`,props:`inverse`,button:`variant="ghost"`},disabled:{label:`제출 불가`,content:`필수 항목을 모두 입력해야 제출할 수 있습니다.`},arrowAnchor:{label:`S`,content:`화살표가 트리거 중앙을 가리킵니다.`,props:`arrowAnchor="target"`,button:`variant="ghost" size="sm"`},noArrow:{label:`화살표 없음`,content:`화살표가 표시되지 않는 말풍선입니다.`,props:`noArrow`,button:`variant="ghost"`}},M=Object.fromEntries(A.map(e=>[e,k(e)]))})))()}var P,F,I;function L(){return(L=e((()=>{P=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],F=(e,t,n)=>({title:e,description:n,tables:[{columns:P,rows:t}]}),I=[F(`React · Next.js API`,[{name:`content · children`,type:`ReactNode`,default:`—`,description:`말풍선 내용입니다.`},{name:`open · defaultOpen · onOpenChange`,type:`boolean · function`,default:`— · false · —`,description:`제어·비제어 열림 상태입니다.`},{name:`triggerContent · trigger`,type:`ReactNode · 'hover' | 'click'`,default:`— · 'hover'`,description:`트리거 콘텐츠와 작동 방식입니다.`},{name:`placement`,type:`'top' | 'top-start' | 'top-end' | 'left' | 'right' | 'start' | 'end'`,default:`아래 가운데`,description:`브라우저 뷰포트 기준 배치입니다.`},{name:`size · offset · offsetTop/Right/Bottom/Left`,type:`string`,default:`'md'`,description:`크기와 전체·방향별 간격입니다.`},{name:`arrowAnchor · panelAlign · arrowTargetAlign`,type:`string`,default:`'content' · 'center' · 'center'`,description:`말풍선과 화살표 정렬 기준입니다.`},{name:`inverse · noArrow · disabled · closable`,type:`boolean`,default:`false · false · false · 자동`,description:`역색, 화살표, 비활성, 닫기 버튼 옵션입니다.`}],`Next.js는 @uxkm/react/tooltip을 재사용합니다.`),F(`Vue · Nuxt API`,[{name:`content · open · default-open · trigger`,type:`string · boolean · string`,default:`— · — · false · 'hover'`,description:`내용, 열림 상태, 트리거 방식입니다.`},{name:`trigger · default`,type:`slot`,default:`—`,description:`트리거와 말풍선 슬롯입니다.`}],`Nuxt는 @uxkm/vue/tooltip을 재사용합니다.`),F(`HTML · Gulp`,[{name:`tooltip · tooltip_trigger · tooltip_bubble`,type:`class`,default:`—`,description:`루트, 트리거, 말풍선입니다.`},{name:`data-tooltip · data-tooltip-trigger · data-tooltip-close`,type:`attribute`,default:`—`,description:`호버·클릭·닫기 동작입니다.`}]),F(`디자인 토큰`,[{name:`--tooltip-max-width · --tooltip-offset`,type:`length`,default:`16rem · space-xs`,description:`말풍선 최대 너비와 간격입니다.`},{name:`--z-tooltip`,type:`number`,default:`120`,description:`레이어 순서입니다.`}])]})))()}function R(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,..._(),...e.components};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(y,{of:f}),`
`,(0,B.jsx)(t.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,B.jsx)(t.p,{children:`호버·포커스 또는 클릭으로 짧은 도움말을 표시합니다. 말풍선은 전체 브라우저 DOM에 렌더링되며 트리거 좌표를 유지합니다.`}),`
`,(0,B.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,B.jsx)(b,{of:u,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.basic}),`
`,(0,B.jsx)(t.h2,{id:`슬롯`,children:`슬롯`}),`
`,(0,B.jsx)(b,{of:a,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.slot}),`
`,(0,B.jsx)(t.h2,{id:`열린-상태`,children:`열린 상태`}),`
`,(0,B.jsx)(b,{of:c,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.open}),`
`,(0,B.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,B.jsx)(b,{of:i,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.size}),`
`,(0,B.jsx)(t.h2,{id:`간격`,children:`간격`}),`
`,(0,B.jsx)(b,{of:r,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.offset}),`
`,(0,B.jsx)(t.h2,{id:`인라인`,children:`인라인`}),`
`,(0,B.jsx)(b,{of:n,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.inline}),`
`,(0,B.jsx)(t.h2,{id:`트리거-유형`,children:`트리거 유형`}),`
`,(0,B.jsx)(b,{of:l,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.trigger}),`
`,(0,B.jsx)(t.h2,{id:`클릭-트리거`,children:`클릭 트리거`}),`
`,(0,B.jsx)(b,{of:p,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.click}),`
`,(0,B.jsx)(t.h2,{id:`배치`,children:`배치`}),`
`,(0,B.jsx)(b,{of:g,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.placement}),`
`,(0,B.jsx)(t.h2,{id:`역색`,children:`역색`}),`
`,(0,B.jsx)(b,{of:d,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.inverse}),`
`,(0,B.jsx)(t.h2,{id:`비활성-트리거`,children:`비활성 트리거`}),`
`,(0,B.jsx)(b,{of:s,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.disabled}),`
`,(0,B.jsx)(t.h2,{id:`화살표-기준`,children:`화살표 기준`}),`
`,(0,B.jsx)(b,{of:h,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.arrowAnchor}),`
`,(0,B.jsx)(t.h2,{id:`화살표-없음`,children:`화살표 없음`}),`
`,(0,B.jsx)(b,{of:m,sourceState:`none`}),`
`,(0,B.jsx)(w,{examples:M.noArrow}),`
`,(0,B.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,B.jsxs)(t.p,{children:[`트리거와 `,(0,B.jsx)(t.code,{children:`role="tooltip"`}),` 말풍선을 `,(0,B.jsx)(t.code,{children:`aria-describedby`}),`로 연결합니다. 포커스로 열 수 있고 Esc와 외부 클릭으로 닫을 수 있습니다.`]}),`
`,(0,B.jsx)(T,{sections:I})]})}function z(e={}){let{wrapper:t}={..._(),...e.components};return t?(0,B.jsx)(t,{...e,children:(0,B.jsx)(R,{...e})}):R(e)}var B;function V(){return(V=e((()=>{B=t(),v(),x(),S(),C(),N(),L(),o()})))()}V();export{z as default};