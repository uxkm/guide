import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./Timeline.stories-J8AE16YX.js";import{i as m,r as h}from"./react-DSvVgjCn.js";import{c as g,r as _,u as v}from"./blocks-CkHyEh4O.js";import{i as y,n as b,r as x,t as S}from"./ComponentApiDocs-D9Q6nkXJ.js";import{a as C,i as w,n as T,t as E}from"./timelineTreeApiSections-DQLC7Fw2.js";function D(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...m(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(g,{of:i}),`
`,(0,k.jsx)(t.h1,{id:`timeline`,children:`Timeline`}),`
`,(0,k.jsxs)(t.p,{children:[`시간순 이벤트와 프로세스 흐름을 표시합니다. `,(0,k.jsx)(t.code,{children:`TimelineItem`}),`은 시간·제목·설명·상태·메타 정보를 일관되게 배치합니다.`]}),`
`,(0,k.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,k.jsx)(t.code,{children:`@uxkm/vue/timeline`}),`, `,(0,k.jsx)(t.code,{children:`@uxkm/react/timeline`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,k.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,k.jsx)(_,{of:c,sourceState:`none`}),`
`,(0,k.jsx)(x,{examples:C.basic}),`
`,(0,k.jsx)(t.h2,{id:`간단`,children:`간단`}),`
`,(0,k.jsx)(t.p,{children:`제목과 시간만 표시하는 간결한 타임라인입니다.`}),`
`,(0,k.jsx)(_,{of:r,sourceState:`none`}),`
`,(0,k.jsx)(x,{examples:C.simple}),`
`,(0,k.jsx)(t.h2,{id:`아웃라인-도트`,children:`아웃라인 도트`}),`
`,(0,k.jsx)(t.p,{children:`속이 빈 원형 마커로 밀도 높은 진행 목록을 표현합니다.`}),`
`,(0,k.jsx)(_,{of:d,sourceState:`none`}),`
`,(0,k.jsx)(x,{examples:C.outline}),`
`,(0,k.jsx)(t.h2,{id:`아이콘-도트`,children:`아이콘 도트`}),`
`,(0,k.jsx)(t.p,{children:`이벤트 유형을 아이콘 크기의 도트로 구분합니다.`}),`
`,(0,k.jsx)(_,{of:n,sourceState:`none`}),`
`,(0,k.jsx)(x,{examples:C.icon}),`
`,(0,k.jsx)(t.h2,{id:`카드형`,children:`카드형`}),`
`,(0,k.jsx)(t.p,{children:`콘텐츠 영역에 카드 스킨과 태그·메타 정보를 배치합니다.`}),`
`,(0,k.jsx)(_,{of:u,sourceState:`none`}),`
`,(0,k.jsx)(x,{examples:C.card}),`
`,(0,k.jsx)(t.h2,{id:`날짜-레이블`,children:`날짜 레이블`}),`
`,(0,k.jsx)(t.p,{children:`왼쪽에 기간·날짜 열을 분리합니다.`}),`
`,(0,k.jsx)(_,{of:l,sourceState:`none`}),`
`,(0,k.jsx)(x,{examples:C.label}),`
`,(0,k.jsx)(t.h2,{id:`좌우-교차`,children:`좌우 교차`}),`
`,(0,k.jsx)(t.p,{children:`넓은 화면에서 중앙 축을 기준으로 항목을 좌우로 교차 배치합니다.`}),`
`,(0,k.jsx)(_,{of:f,sourceState:`none`}),`
`,(0,k.jsx)(x,{examples:C.alternate}),`
`,(0,k.jsx)(t.h2,{id:`가로형`,children:`가로형`}),`
`,(0,k.jsx)(t.p,{children:`단계와 프로세스 흐름을 가로로 표시하며 작은 화면에서는 세로로 전환됩니다.`}),`
`,(0,k.jsx)(_,{of:o,sourceState:`none`}),`
`,(0,k.jsx)(x,{examples:C.horizontal}),`
`,(0,k.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,k.jsx)(t.p,{children:`small·large로 간격과 텍스트 크기를 조절합니다.`}),`
`,(0,k.jsx)(_,{of:s,sourceState:`none`}),`
`,(0,k.jsx)(x,{examples:C.size}),`
`,(0,k.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,k.jsx)(t.p,{children:`현재 진행 항목과 예정·미완료 항목을 구분합니다.`}),`
`,(0,k.jsx)(_,{of:p,sourceState:`none`}),`
`,(0,k.jsx)(x,{examples:C.state}),`
`,(0,k.jsx)(S,{sections:T})]})}function O(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;function A(){return(A=e((()=>{k=t(),h(),v(),y(),b(),w(),E(),a()})))()}A();export{O as default};