import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./Tag.stories-BRIr6ExC.js";import{i as g,r as _}from"./react-DSvVgjCn.js";import{c as v,r as y,u as b}from"./blocks-CkHyEh4O.js";import{i as x,n as S,r as C,t as w}from"./ComponentApiDocs-D9Q6nkXJ.js";import{c as T,i as E,r as D,s as O}from"./dataDisplayApiSections-BfhLrRGN.js";function k(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...g(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v,{of:a}),`
`,(0,j.jsx)(t.h1,{id:`tag`,children:`Tag`}),`
`,(0,j.jsx)(t.p,{children:`카테고리, 필터, 선택 항목을 표시합니다. 스킨·크기·아이콘·닫기·선택·추가·링크·비활성 상태를 하나의 공통 API로 제공합니다.`}),`
`,(0,j.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,j.jsx)(t.code,{children:`@uxkm/vue/tag`}),`, `,(0,j.jsx)(t.code,{children:`@uxkm/react/tag`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`기본-filled`,children:`기본 (Filled)`}),`
`,(0,j.jsx)(t.p,{children:`연한 배경의 기본 태그입니다.`}),`
`,(0,j.jsx)(y,{of:l,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.basic}),`
`,(0,j.jsx)(t.h2,{id:`솔리드`,children:`솔리드`}),`
`,(0,j.jsx)(t.p,{children:`강조가 필요한 레이블에 대비가 높은 채움 스킨을 사용합니다.`}),`
`,(0,j.jsx)(y,{of:i,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.solid}),`
`,(0,j.jsx)(t.h2,{id:`아웃라인`,children:`아웃라인`}),`
`,(0,j.jsx)(t.p,{children:`배경 없이 테두리로 구분합니다.`}),`
`,(0,j.jsx)(y,{of:r,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.outline}),`
`,(0,j.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,j.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 모든 스킨에 적용할 수 있습니다.`}),`
`,(0,j.jsx)(y,{of:h,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.sizes}),`
`,(0,j.jsx)(t.h2,{id:`둥근`,children:`둥근`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`round`}),` 또는 `,(0,j.jsx)(t.code,{children:`tag_round`}),`로 pill 형태를 적용합니다.`]}),`
`,(0,j.jsx)(y,{of:s,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.round}),`
`,(0,j.jsx)(t.h2,{id:`아이콘`,children:`아이콘`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`icon`}),` prop 또는 슬롯과 `,(0,j.jsx)(t.code,{children:`tag_icon`}),`으로 앞 아이콘을 배치합니다.`]}),`
`,(0,j.jsx)(y,{of:d,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.icon}),`
`,(0,j.jsx)(t.h2,{id:`닫기-가능`,children:`닫기 가능`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`closable`}),`은 독립적인 닫기 버튼을 제공합니다. 선택·추가·링크와 조합할 때 인터랙티브 요소가 중첩되지 않도록 본문 컨트롤을 분리합니다.`]}),`
`,(0,j.jsx)(y,{of:o,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.closable}),`
`,(0,j.jsx)(t.h2,{id:`선택-가능`,children:`선택 가능`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`checkable`}),` 태그는 button과 `,(0,j.jsx)(t.code,{children:`aria-pressed`}),`로 현재 선택 상태를 전달합니다.`]}),`
`,(0,j.jsx)(y,{of:f,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.checkable}),`
`,(0,j.jsx)(t.h2,{id:`추가`,children:`추가`}),`
`,(0,j.jsx)(t.p,{children:`새 항목을 만드는 태그형 버튼입니다.`}),`
`,(0,j.jsx)(y,{of:m,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.add}),`
`,(0,j.jsx)(t.h2,{id:`링크`,children:`링크`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`href`}),`가 있으면 링크 의미와 키보드 동작을 유지합니다.`]}),`
`,(0,j.jsx)(y,{of:p,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.link}),`
`,(0,j.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,j.jsxs)(t.p,{children:[`button에는 네이티브 `,(0,j.jsx)(t.code,{children:`disabled`}),`, 링크·정적 요소에는 `,(0,j.jsx)(t.code,{children:`aria-disabled`}),`와 상태 클래스를 적용합니다.`]}),`
`,(0,j.jsx)(y,{of:n,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.disabled}),`
`,(0,j.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`TagGroup`}),`으로 관련 태그를 묶고 `,(0,j.jsx)(t.code,{children:`tight`}),`으로 간격을 줄입니다.`]}),`
`,(0,j.jsx)(y,{of:u,sourceState:`none`}),`
`,(0,j.jsx)(C,{examples:T.group}),`
`,(0,j.jsx)(w,{sections:E})]})}function A(e={}){let{wrapper:t}={...g(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),_(),b(),x(),S(),O(),D(),c()})))()}M();export{A as default};