import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u}from"./Space.stories-BlslGdjM.js";import{i as d,r as f}from"./react-DSvVgjCn.js";import{c as p,r as m,u as h}from"./blocks-CkHyEh4O.js";import{i as g,n as _,r as v,t as y}from"./ComponentApiDocs-D9Q6nkXJ.js";import{a as b,i as x,l as S,u as C}from"./layoutApiSections-DtezYZld.js";function w(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...d(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p,{of:s}),`
`,(0,E.jsx)(t.h1,{id:`space`,children:`Space`}),`
`,(0,E.jsx)(t.p,{children:`자식 요소 사이 간격을 일관되게 맞추는 flex 기반 레이아웃 컴포넌트입니다. 간격·방향·정렬·줄바꿈을 조합합니다.`}),`
`,(0,E.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,E.jsx)(t.code,{children:`@uxkm/vue/space`}),`, `,(0,E.jsx)(t.code,{children:`@uxkm/react/space`}),`로 제공합니다. Nuxt와 Next.js는 같은 구현을 재사용합니다.`]}),`
`,(0,E.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,E.jsx)(t.p,{children:`방향, 줄바꿈, block 너비, 간격과 정렬을 Controls에서 조정할 수 있습니다.`}),`
`,(0,E.jsx)(m,{of:n,sourceState:`none`}),`
`,(0,E.jsx)(v,{examples:C.playground}),`
`,(0,E.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,E.jsxs)(t.p,{children:[`Space는 가로 inline-flex이며 기본 간격은 `,(0,E.jsx)(t.code,{children:`--space-gap`}),`에 정의된 md입니다.`]}),`
`,(0,E.jsx)(m,{of:o,sourceState:`none`}),`
`,(0,E.jsx)(v,{examples:C.basic}),`
`,(0,E.jsx)(t.h2,{id:`세로`,children:`세로`}),`
`,(0,E.jsxs)(t.p,{children:[(0,E.jsx)(t.code,{children:`vertical`}),` 또는 `,(0,E.jsx)(t.code,{children:`space_vertical`}),`로 자식을 위에서 아래로 배치합니다.`]}),`
`,(0,E.jsx)(m,{of:l,sourceState:`none`}),`
`,(0,E.jsx)(v,{examples:C.vertical}),`
`,(0,E.jsx)(t.h2,{id:`간격`,children:`간격`}),`
`,(0,E.jsxs)(t.p,{children:[(0,E.jsx)(t.code,{children:`gap`}),` 또는 `,(0,E.jsx)(t.code,{children:`space_gap-xs`}),`·`,(0,E.jsx)(t.code,{children:`space_gap-sm`}),`·`,(0,E.jsx)(t.code,{children:`space_gap-lg`}),`·`,(0,E.jsx)(t.code,{children:`space_gap-xl`}),`로 간격 크기를 변경합니다.`]}),`
`,(0,E.jsx)(m,{of:i,sourceState:`none`}),`
`,(0,E.jsx)(v,{examples:C.gap}),`
`,(0,E.jsx)(t.h2,{id:`줄바꿈`,children:`줄바꿈`}),`
`,(0,E.jsxs)(t.p,{children:[(0,E.jsx)(t.code,{children:`wrap`}),`과 `,(0,E.jsx)(t.code,{children:`block`}),`을 함께 사용하면 너비가 부족할 때 자식이 다음 줄로 넘어갑니다.`]}),`
`,(0,E.jsx)(m,{of:r,sourceState:`none`}),`
`,(0,E.jsx)(v,{examples:C.wrap}),`
`,(0,E.jsx)(t.h2,{id:`정렬`,children:`정렬`}),`
`,(0,E.jsxs)(t.p,{children:[(0,E.jsx)(t.code,{children:`align`}),`과 `,(0,E.jsx)(t.code,{children:`justify`}),`로 교차축·주축 정렬을 지정합니다.`]}),`
`,(0,E.jsx)(m,{of:u,sourceState:`none`}),`
`,(0,E.jsx)(v,{examples:C.align}),`
`,(0,E.jsx)(t.h2,{id:`조합-예시`,children:`조합 예시`}),`
`,(0,E.jsx)(t.p,{children:`버튼과 세로 Divider 등 실제 컴포넌트와 함께 사용하는 패턴입니다.`}),`
`,(0,E.jsx)(m,{of:c,sourceState:`none`}),`
`,(0,E.jsx)(v,{examples:C.combo}),`
`,(0,E.jsx)(y,{sections:b})]})}function T(e={}){let{wrapper:t}={...d(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;function D(){return(D=e((()=>{E=t(),f(),h(),g(),_(),S(),x(),a()})))()}D();export{T as default};