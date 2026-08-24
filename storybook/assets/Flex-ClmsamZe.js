import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g}from"./Flex.stories-x5V6igY7.js";import{i as _,r as v}from"./react-DSvVgjCn.js";import{c as y,r as b,u as x}from"./blocks-CkHyEh4O.js";import{i as S,n as C,r as w,t as T}from"./ComponentApiDocs-D9Q6nkXJ.js";import{i as E,l as D,n as O,s as k}from"./layoutApiSections-DtezYZld.js";function A(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,..._(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(y,{of:d}),`
`,(0,M.jsx)(t.h1,{id:`flex`,children:`Flex`}),`
`,(0,M.jsx)(t.p,{children:`CSS Flexbox 기반으로 방향·간격·정렬·반응형 항목 크기를 제어하는 레이아웃 컴포넌트입니다. 혼합 배치는 FlexItem으로 개별 자식을 제어합니다.`}),`
`,(0,M.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,M.jsx)(t.code,{children:`@uxkm/vue/flex`}),`, `,(0,M.jsx)(t.code,{children:`@uxkm/react/flex`}),`로 제공합니다. Nuxt와 Next.js는 같은 구현을 재사용합니다.`]}),`
`,(0,M.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,M.jsx)(t.p,{children:`방향, 열 수, 간격, 정렬, 줄바꿈을 Controls에서 조정할 수 있습니다.`}),`
`,(0,M.jsx)(b,{of:i,sourceState:`none`}),`
`,(0,M.jsx)(w,{examples:k.playground}),`
`,(0,M.jsx)(t.h2,{id:`기본-페이지-레이아웃`,children:`기본 페이지 레이아웃`}),`
`,(0,M.jsx)(t.p,{children:`작은 화면에서는 한 열로 쌓고, md 이상에서 사이드바 3/12와 본문 9/12로 나눕니다.`}),`
`,(0,M.jsx)(b,{of:c,sourceState:`none`}),`
`,(0,M.jsx)(w,{examples:k.pageLayout}),`
`,(0,M.jsx)(t.h2,{id:`콘텐츠가-있는-페이지-레이아웃`,children:`콘텐츠가 있는 페이지 레이아웃`}),`
`,(0,M.jsx)(t.p,{children:`Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다.`}),`
`,(0,M.jsx)(b,{of:s,sourceState:`none`}),`
`,(0,M.jsx)(w,{examples:k.contentLayout}),`
`,(0,M.jsx)(t.h2,{id:`부모-클래스로-제어`,children:`부모 클래스로 제어`}),`
`,(0,M.jsx)(t.p,{children:`균등 항목 수·비율·자식 일괄 span을 부모 Flex에 지정합니다.`}),`
`,(0,M.jsx)(b,{of:g,sourceState:`none`}),`
`,(0,M.jsx)(w,{examples:k.parent}),`
`,(0,M.jsx)(t.h2,{id:`12열-전체-활용`,children:`12열 전체 활용`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`itemSpan={1}`}),`로 12개 항목이 한 행을 채웁니다.`]}),`
`,(0,M.jsx)(b,{of:l,sourceState:`none`}),`
`,(0,M.jsx)(w,{examples:k.twelveColumns}),`
`,(0,M.jsx)(t.h2,{id:`균등-항목`,children:`균등 항목`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`cols`}),`로 한 행에 들어갈 동일 너비 항목 수를 지정합니다.`]}),`
`,(0,M.jsx)(b,{of:n,sourceState:`none`}),`
`,(0,M.jsx)(w,{examples:k.equal}),`
`,(0,M.jsx)(t.h2,{id:`비율-항목`,children:`비율 항목`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`ratio`}),`로 1-2, 1-2-1 등 자주 쓰는 항목 비율을 지정합니다.`]}),`
`,(0,M.jsx)(b,{of:a,sourceState:`none`}),`
`,(0,M.jsx)(w,{examples:k.ratio}),`
`,(0,M.jsx)(t.h2,{id:`자식-일괄-span`,children:`자식 일괄 span`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`itemSpan`}),`으로 모든 직계 자식의 12단위 너비를 한 번에 지정합니다.`]}),`
`,(0,M.jsx)(b,{of:r,sourceState:`none`}),`
`,(0,M.jsx)(w,{examples:k.itemSpan}),`
`,(0,M.jsx)(t.h2,{id:`자식별-span`,children:`자식별 span`}),`
`,(0,M.jsxs)(t.p,{children:[`혼합 레이아웃에서는 FlexItem의 `,(0,M.jsx)(t.code,{children:`span`}),`을 사용해 각 항목 너비를 지정합니다.`]}),`
`,(0,M.jsx)(b,{of:p,sourceState:`none`}),`
`,(0,M.jsx)(w,{examples:k.childSpan}),`
`,(0,M.jsx)(t.h2,{id:`간격`,children:`간격`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`gap`}),` 또는 `,(0,M.jsx)(t.code,{children:`flex_gap-sm`}),`·`,(0,M.jsx)(t.code,{children:`flex_gap-lg`}),`·`,(0,M.jsx)(t.code,{children:`flex_gap-none`}),`을 부모에 지정합니다.`]}),`
`,(0,M.jsx)(b,{of:m,sourceState:`none`}),`
`,(0,M.jsx)(w,{examples:k.gap}),`
`,(0,M.jsx)(t.h2,{id:`반응형`,children:`반응형`}),`
`,(0,M.jsx)(t.p,{children:`Flex와 FlexItem의 md·lg prop으로 반응형 배치를 제어합니다.`}),`
`,(0,M.jsx)(b,{of:f,sourceState:`none`}),`
`,(0,M.jsx)(w,{examples:k.responsive}),`
`,(0,M.jsx)(t.h2,{id:`자동-배치`,children:`자동 배치`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`autoFit`}),`은 `,(0,M.jsx)(t.code,{children:`--flex-auto-min`}),`을 기준으로 줄바꿈하고 남는 공간을 채웁니다.`]}),`
`,(0,M.jsx)(b,{of:u,sourceState:`none`}),`
`,(0,M.jsx)(w,{examples:k.auto}),`
`,(0,M.jsx)(t.h2,{id:`정렬과-비율`,children:`정렬과 비율`}),`
`,(0,M.jsx)(t.p,{children:`주축 정렬과 항목 비율을 각각 또는 함께 조합할 수 있습니다.`}),`
`,(0,M.jsx)(b,{of:h,sourceState:`none`}),`
`,(0,M.jsx)(w,{examples:k.alignmentAndRatio}),`
`,(0,M.jsx)(T,{sections:O})]})}function j(e={}){let{wrapper:t}={..._(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=t(),v(),x(),S(),C(),D(),E(),o()})))()}N();export{j as default};