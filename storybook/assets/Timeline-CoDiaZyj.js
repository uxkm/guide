import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{d as n,i as r,l as i}from"./blocks-DKrjMPN_.js";import{n as a,t as o}from"./FrameworkTabs-duseEU1T.js";import{a as s,c,d as l,f as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./Timeline.stories-EwvlHjPW.js";import{i as y,r as b}from"./react-CQ14Jk9E.js";import{n as x,t as S}from"./ComponentApiDocs-C9VNL7Yh.js";import{_ as C,n as w,o as T,u as E,v as D}from"./dataDisplayDocumentationApiSections-CN97v_dN.js";function O(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...y(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(i,{of:l}),`
`,(0,A.jsx)(t.h1,{id:`timeline`,children:`Timeline`}),`
`,(0,A.jsxs)(t.p,{children:[`시간순 이벤트와 프로세스 흐름을 표시합니다. `,(0,A.jsx)(t.code,{children:`TimelineItem`}),`은 시간·제목·설명·상태·메타 정보를 일관되게 배치합니다.`]}),`
`,(0,A.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,A.jsx)(t.code,{children:`@uxkm/vue/timeline`}),`, `,(0,A.jsx)(t.code,{children:`@uxkm/react/timeline`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,A.jsxs)(t.p,{children:[`WebSquare는 `,(0,A.jsx)(t.code,{children:`w2:group`}),`의 `,(0,A.jsx)(t.code,{children:`ol`}),`·`,(0,A.jsx)(t.code,{children:`li`}),`·`,(0,A.jsx)(t.code,{children:`time`}),` tagname으로 시간순 의미를 유지하고 이벤트 목록을 DataList와 `,(0,A.jsx)(t.code,{children:`w2:generator`}),`로 반복합니다.`]}),`
`,(0,A.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,A.jsx)(t.p,{children:`아래 코드는 Timeline과 TimelineItem의 실제 HTML·Gulp·Vue·React 원본 구현입니다. 방향·크기·도트·카드·상태 클래스와 시간·제목·설명 영역의 구성을 확인할 수 있습니다.`}),`
`,(0,A.jsx)(o,{examples:C,showFullCode:!0}),`
`,(0,A.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,A.jsxs)(t.p,{children:[`Timeline은 `,(0,A.jsx)(t.code,{children:`ol`}),`, 각 항목은 `,(0,A.jsx)(t.code,{children:`li`}),`, 시간 값은 `,(0,A.jsx)(t.code,{children:`time`}),` tagname을 사용합니다. 반복 이벤트는 DataList와 generator에 연결하며, 상태 색상은 dot 클래스와 텍스트 설명을 함께 제공해 의미를 보존합니다. 단순 표시 컴포넌트이므로 별도 이벤트는 필요하지 않습니다.`]}),`
`,(0,A.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,A.jsx)(r,{of:p,sourceState:`none`}),`
`,(0,A.jsx)(o,{examples:D.basic}),`
`,(0,A.jsx)(t.h2,{id:`간단`,children:`간단`}),`
`,(0,A.jsx)(t.p,{children:`제목과 시간만 표시하는 간결한 타임라인입니다.`}),`
`,(0,A.jsx)(r,{of:c,sourceState:`none`}),`
`,(0,A.jsx)(o,{examples:D.simple}),`
`,(0,A.jsx)(t.h2,{id:`아웃라인-도트`,children:`아웃라인 도트`}),`
`,(0,A.jsx)(t.p,{children:`속이 빈 원형 마커로 밀도 높은 진행 목록을 표현합니다.`}),`
`,(0,A.jsx)(r,{of:g,sourceState:`none`}),`
`,(0,A.jsx)(o,{examples:D.outline}),`
`,(0,A.jsx)(t.h2,{id:`아이콘-도트`,children:`아이콘 도트`}),`
`,(0,A.jsx)(t.p,{children:`이벤트 유형을 아이콘 크기의 도트로 구분합니다.`}),`
`,(0,A.jsx)(r,{of:s,sourceState:`none`}),`
`,(0,A.jsx)(o,{examples:D.icon}),`
`,(0,A.jsx)(t.h2,{id:`카드형`,children:`카드형`}),`
`,(0,A.jsx)(t.p,{children:`콘텐츠 영역에 카드 스킨과 태그·메타 정보를 배치합니다.`}),`
`,(0,A.jsx)(r,{of:h,sourceState:`none`}),`
`,(0,A.jsx)(o,{examples:D.card}),`
`,(0,A.jsx)(t.h2,{id:`날짜-레이블`,children:`날짜 레이블`}),`
`,(0,A.jsx)(t.p,{children:`왼쪽에 기간·날짜 열을 분리합니다.`}),`
`,(0,A.jsx)(r,{of:m,sourceState:`none`}),`
`,(0,A.jsx)(o,{examples:D.label}),`
`,(0,A.jsx)(t.h2,{id:`좌우-교차`,children:`좌우 교차`}),`
`,(0,A.jsx)(t.p,{children:`넓은 화면에서 중앙 축을 기준으로 항목을 좌우로 교차 배치합니다.`}),`
`,(0,A.jsx)(r,{of:_,sourceState:`none`}),`
`,(0,A.jsx)(o,{examples:D.alternate}),`
`,(0,A.jsx)(t.h2,{id:`가로형`,children:`가로형`}),`
`,(0,A.jsx)(t.p,{children:`단계와 프로세스 흐름을 가로로 표시하며 작은 화면에서는 세로로 전환됩니다.`}),`
`,(0,A.jsx)(r,{of:d,sourceState:`none`}),`
`,(0,A.jsx)(o,{examples:D.horizontal}),`
`,(0,A.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,A.jsx)(t.p,{children:`small·large로 간격과 텍스트 크기를 조절합니다.`}),`
`,(0,A.jsx)(r,{of:f,sourceState:`none`}),`
`,(0,A.jsx)(o,{examples:D.size}),`
`,(0,A.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,A.jsx)(t.p,{children:`현재 진행 항목과 예정·미완료 항목을 구분합니다.`}),`
`,(0,A.jsx)(r,{of:v,sourceState:`none`}),`
`,(0,A.jsx)(o,{examples:D.state}),`
`,(0,A.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,A.jsxs)(t.p,{children:[`Timeline은 순서 목록(`,(0,A.jsx)(t.code,{children:`ol`}),`), 항목은 `,(0,A.jsx)(t.code,{children:`li`}),`, 시각은 `,(0,A.jsx)(t.code,{children:`time`}),`으로 시간순 의미를 유지합니다. 상태 색상은 도트 클래스와 텍스트 설명을 함께 제공해 색상에만 의존하지 않습니다.`]}),`
`,(0,A.jsx)(S,{sections:T})]})}function k(e={}){let{wrapper:t}={...y(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;function j(){return(j=e((()=>{A=t(),b(),n(),a(),x(),E(),w(),u()})))()}j();export{k as default};