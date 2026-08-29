import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./Table.stories-PdOImKGM.js";import{i as m,r as h}from"./react-CJGa1lBW.js";import{c as g,r as _,u as v}from"./blocks-SMgDWto2.js";import{i as y,n as b,r as x,t as S}from"./ComponentApiDocs-DtZNZjDp.js";import{a as C,g as w,h as T,n as E,u as D}from"./dataDisplayDocumentationApiSections-CHd0j5Jy.js";function O(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...m(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(g,{of:i}),`
`,(0,A.jsx)(t.h1,{id:`table`,children:`Table`}),`
`,(0,A.jsx)(t.p,{children:`행과 열로 구조화된 데이터를 표시합니다. 테두리·줄무늬·밀도·호버 상태와 열 크기, 가로·세로 스크롤, 상단·좌측 고정을 공통 API로 제공합니다.`}),`
`,(0,A.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,A.jsx)(t.code,{children:`@uxkm/vue/table`}),`, `,(0,A.jsx)(t.code,{children:`@uxkm/react/table`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,A.jsxs)(t.p,{children:[`WebSquare는 `,(0,A.jsx)(t.code,{children:`w2:group`}),`과 `,(0,A.jsx)(t.code,{children:`w2:textbox`}),`의 `,(0,A.jsx)(t.code,{children:`tagname`}),`으로 표 구조를 만들고 반복 행은 DataList와 `,(0,A.jsx)(t.code,{children:`w2:generator`}),`에 연결합니다.`]}),`
`,(0,A.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,A.jsx)(t.p,{children:`아래 코드는 Table의 실제 HTML·Gulp·Vue·React 원본 구현입니다. 열 설정, 스크롤 래퍼, 고정 행·열, 공통 클래스와 전달 속성이 어떻게 결합되는지 확인할 수 있습니다. Next.js는 React, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,A.jsx)(x,{examples:T,showFullCode:!0}),`
`,(0,A.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,A.jsxs)(t.p,{children:[`표·헤더·본문·행·셀 관계는 `,(0,A.jsx)(t.code,{children:`tagname="table|thead|tbody|tr|th|td"`}),`와 대응 role로 유지합니다. 행 데이터는 DataList와 generator로 반복하고, 열 너비와 sticky offset은 공통 CSS 변수에 연결합니다. 스크롤·고정 변형은 `,(0,A.jsx)(t.code,{children:`table_scroll`}),`과 `,(0,A.jsx)(t.code,{children:`table_sticky-*`}),` 클래스를 함께 적용합니다.`]}),`
`,(0,A.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`columns`}),`로 열 너비·최소 너비·패딩·줄바꿈을 지정하고 내부에는 시맨틱 `,(0,A.jsx)(t.code,{children:`thead`}),`·`,(0,A.jsx)(t.code,{children:`tbody`}),`를 작성합니다.`]}),`
`,(0,A.jsx)(_,{of:f,sourceState:`none`}),`
`,(0,A.jsx)(x,{examples:w.basic}),`
`,(0,A.jsx)(t.h2,{id:`줄무늬`,children:`줄무늬`}),`
`,(0,A.jsx)(_,{of:p,sourceState:`none`}),`
`,(0,A.jsx)(x,{examples:w.striped}),`
`,(0,A.jsx)(t.h2,{id:`테두리`,children:`테두리`}),`
`,(0,A.jsx)(_,{of:c,sourceState:`none`}),`
`,(0,A.jsx)(x,{examples:w.bordered}),`
`,(0,A.jsx)(t.h2,{id:`컴팩트`,children:`컴팩트`}),`
`,(0,A.jsx)(t.p,{children:`셀 패딩을 줄여 많은 데이터를 표시합니다.`}),`
`,(0,A.jsx)(_,{of:o,sourceState:`none`}),`
`,(0,A.jsx)(x,{examples:w.compact}),`
`,(0,A.jsx)(t.h2,{id:`호버`,children:`호버`}),`
`,(0,A.jsx)(t.p,{children:`포인터가 위치한 본문 행을 강조합니다.`}),`
`,(0,A.jsx)(_,{of:n,sourceState:`none`}),`
`,(0,A.jsx)(x,{examples:w.hover}),`
`,(0,A.jsx)(t.h2,{id:`스타일-조합`,children:`스타일 조합`}),`
`,(0,A.jsx)(t.p,{children:`테두리·컴팩트·호버 등의 변형을 함께 사용할 수 있습니다.`}),`
`,(0,A.jsx)(_,{of:u,sourceState:`none`}),`
`,(0,A.jsx)(x,{examples:w.combined}),`
`,(0,A.jsx)(t.h2,{id:`상단-헤더-고정`,children:`상단 헤더 고정`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`scroll`}),`과 `,(0,A.jsx)(t.code,{children:`stickyTop`}),`을 조합해 세로 스크롤 중 헤더를 고정합니다.`]}),`
`,(0,A.jsx)(_,{of:s,sourceState:`none`}),`
`,(0,A.jsx)(x,{examples:w.stickyTop}),`
`,(0,A.jsx)(t.h2,{id:`좌측-열-고정`,children:`좌측 열 고정`}),`
`,(0,A.jsx)(t.p,{children:`가로 스크롤 중 첫 번째 열을 고정합니다.`}),`
`,(0,A.jsx)(_,{of:r,sourceState:`none`}),`
`,(0,A.jsx)(x,{examples:w.stickyLeft}),`
`,(0,A.jsx)(t.h2,{id:`다중-열-고정`,children:`다중 열 고정`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`stickyCols`}),`와 `,(0,A.jsx)(t.code,{children:`stickyLeftOffsets`}),`로 최대 네 개 열을 고정할 수 있습니다.`]}),`
`,(0,A.jsx)(_,{of:d,sourceState:`none`}),`
`,(0,A.jsx)(x,{examples:w.stickyColumns}),`
`,(0,A.jsx)(t.h2,{id:`상단좌측-동시-고정`,children:`상단·좌측 동시 고정`}),`
`,(0,A.jsx)(t.p,{children:`큰 데이터 표에서 헤더와 식별 열을 동시에 유지합니다.`}),`
`,(0,A.jsx)(_,{of:l,sourceState:`none`}),`
`,(0,A.jsx)(x,{examples:w.stickyBoth}),`
`,(0,A.jsx)(S,{sections:C})]})}function k(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;function j(){return(j=e((()=>{A=t(),h(),v(),y(),b(),D(),E(),a()})))()}j();export{k as default};