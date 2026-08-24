import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./Grid.stories-Dvo8sAq0.js";import{i as g,r as _}from"./react-DSvVgjCn.js";import{c as v,r as y,u as b}from"./blocks-CkHyEh4O.js";import{i as x,n as S,r as C,t as w}from"./ComponentApiDocs-D9Q6nkXJ.js";import{c as T,i as E,l as D,r as O}from"./layoutApiSections-DtezYZld.js";function k(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...g(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v,{of:p}),`
`,(0,j.jsx)(t.h1,{id:`grid`,children:`Grid`}),`
`,(0,j.jsx)(t.p,{children:`12열 CSS Grid 기반 레이아웃 시스템입니다. 대부분의 배치는 부모 Grid에서 제어하고, 혼합 레이아웃만 GridCol로 개별 span을 지정합니다.`}),`
`,(0,j.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,j.jsx)(t.code,{children:`@uxkm/vue/grid`}),`, `,(0,j.jsx)(t.code,{children:`@uxkm/react/grid`}),`로 제공합니다. Nuxt와 Next.js는 같은 구현을 재사용합니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,j.jsx)(t.p,{children:`열 수, 간격, 자동 배치 prop을 Controls에서 조정할 수 있습니다.`}),`
`,(0,j.jsx)(y,{of:h,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.playground}),`
`,(0,j.jsx)(t.h2,{id:`기본-페이지-레이아웃`,children:`기본 페이지 레이아웃`}),`
`,(0,j.jsx)(t.p,{children:`헤더와 푸터는 12열을 사용하고, md 이상에서 사이드바 3열과 콘텐츠 9열로 나눕니다.`}),`
`,(0,j.jsx)(y,{of:l,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.basicLayout}),`
`,(0,j.jsx)(t.h2,{id:`콘텐츠가-있는-페이지-레이아웃`,children:`콘텐츠가 있는 페이지 레이아웃`}),`
`,(0,j.jsx)(t.p,{children:`Main content 안에 반응형 콘텐츠 섹션을 중첩한 활용 예시입니다.`}),`
`,(0,j.jsx)(y,{of:o,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.contentLayout}),`
`,(0,j.jsx)(t.h2,{id:`12열-전체-활용`,children:`12열 전체 활용`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`itemSpan={1}`}),`을 부모에 지정하여 12개 항목이 한 행을 채웁니다.`]}),`
`,(0,j.jsx)(y,{of:d,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.twelveColumns}),`
`,(0,j.jsx)(t.h2,{id:`부모-클래스로-제어`,children:`부모 클래스로 제어`}),`
`,(0,j.jsx)(t.p,{children:`열 수·간격·비율·자식 일괄 span은 부모에만 지정합니다. 자식에 Grid 클래스가 필요 없습니다.`}),`
`,(0,j.jsx)(y,{of:s,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.parent}),`
`,(0,j.jsx)(t.h2,{id:`균등-열`,children:`균등 열`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`cols`}),` 또는 `,(0,j.jsx)(t.code,{children:`grid_cols-*`}),`로 동일 너비 열을 지정합니다. 12열 span과 무관하게 fr 단위로 분할됩니다.`]}),`
`,(0,j.jsx)(y,{of:n,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.equal}),`
`,(0,j.jsx)(t.h2,{id:`비율-열`,children:`비율 열`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`ratio`}),` 또는 `,(0,j.jsx)(t.code,{children:`grid_ratio-*`}),`로 2~3열 비율 레이아웃을 부모에서 지정합니다.`]}),`
`,(0,j.jsx)(y,{of:i,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.ratio}),`
`,(0,j.jsx)(t.h2,{id:`자식-일괄-span`,children:`자식 일괄 span`}),`
`,(0,j.jsxs)(t.p,{children:[`모든 자식이 같은 12열 비율일 때 `,(0,j.jsx)(t.code,{children:`itemSpan`}),`을 사용합니다. 6이면 한 행에 2개, 3이면 4개씩 배치됩니다.`]}),`
`,(0,j.jsx)(y,{of:r,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.itemSpan}),`
`,(0,j.jsx)(t.h2,{id:`자식별-span`,children:`자식별 span`}),`
`,(0,j.jsxs)(t.p,{children:[`8+4, 4+4+4처럼 행마다 열 비율이 다를 때 GridCol의 `,(0,j.jsx)(t.code,{children:`span`}),`을 사용합니다.`]}),`
`,(0,j.jsx)(y,{of:f,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.child}),`
`,(0,j.jsx)(t.h2,{id:`간격`,children:`간격`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`gap`}),` 또는 `,(0,j.jsx)(t.code,{children:`grid_gap-sm`}),`·`,(0,j.jsx)(t.code,{children:`grid_gap-lg`}),`·`,(0,j.jsx)(t.code,{children:`grid_gap-none`}),`을 부모에 지정합니다.`]}),`
`,(0,j.jsx)(y,{of:u,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.gap}),`
`,(0,j.jsx)(t.h2,{id:`반응형`,children:`반응형`}),`
`,(0,j.jsx)(t.p,{children:`Grid와 GridCol의 md·lg prop으로 균등 열, 자식 일괄 span, 자식별 span을 반응형으로 제어합니다.`}),`
`,(0,j.jsx)(y,{of:a,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.responsive}),`
`,(0,j.jsx)(t.h2,{id:`자동-배치`,children:`자동 배치`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`autoFit`}),`과 `,(0,j.jsx)(t.code,{children:`autoFill`}),`은 `,(0,j.jsx)(t.code,{children:`--grid-auto-min`}),`을 최소 너비로 사용해 가능한 공간에 열을 자동 배치합니다.`]}),`
`,(0,j.jsx)(y,{of:m,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.auto}),`
`,(0,j.jsx)(w,{sections:O})]})}function A(e={}){let{wrapper:t}={...g(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),_(),b(),x(),S(),D(),E(),c()})))()}M();export{A as default};