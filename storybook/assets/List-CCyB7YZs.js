import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,g as o,h as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,t as g,u as _}from"./List.stories-BvJEeZ0W.js";import{i as v,r as y}from"./react-CbOw9eUO.js";import{c as b,r as x,u as S}from"./blocks-BToPoJhg.js";import{i as C,n as w,r as T,t as E}from"./ComponentApiDocs-DfTaPA3Z.js";import{d as D,f as O,n as k,r as A,u as j}from"./dataDisplayDocumentationApiSections-CHd0j5Jy.js";function M(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...v(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(b,{of:p}),`
`,(0,P.jsx)(t.h1,{id:`list`,children:`List`}),`
`,(0,P.jsxs)(t.p,{children:[`사람·설정·작업·정의 등 반복 항목을 시맨틱 목록으로 표현합니다. `,(0,P.jsx)(t.code,{children:`ListItem`}),`은 제목·설명·메타·앞 콘텐츠·보조 영역·액션을 일관되게 배치합니다.`]}),`
`,(0,P.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,P.jsx)(t.code,{children:`@uxkm/vue/list`}),`, `,(0,P.jsx)(t.code,{children:`@uxkm/react/list`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,P.jsxs)(t.p,{children:[`WebSquare는 목록 종류에 따라 `,(0,P.jsx)(t.code,{children:`w2:group`}),`의 `,(0,P.jsx)(t.code,{children:`tagname`}),`을 `,(0,P.jsx)(t.code,{children:`ul`}),`, `,(0,P.jsx)(t.code,{children:`ol`}),`, `,(0,P.jsx)(t.code,{children:`dl`}),`, `,(0,P.jsx)(t.code,{children:`li`}),`로 구분하고 항목 텍스트를 `,(0,P.jsx)(t.code,{children:`w2:textbox`}),`로 구성합니다.`]}),`
`,(0,P.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,P.jsx)(t.p,{children:`아래 코드는 List와 ListItem의 실제 HTML·Gulp·Vue·React 원본 구현입니다. 목록 의미, 항목 영역, 링크·버튼 루트, 공통 클래스와 접근성 상태를 확인할 수 있습니다.`}),`
`,(0,P.jsx)(T,{examples:D,showFullCode:!0}),`
`,(0,P.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,P.jsxs)(t.p,{children:[`불릿·번호·정의 목록은 문서 의미에 맞는 `,(0,P.jsx)(t.code,{children:`tagname`}),`을 사용합니다. 반복 항목은 DataList와 generator에 연결하고, 링크 항목은 `,(0,P.jsx)(t.code,{children:`w2:anchor`}),`, 화면 액션 항목은 `,(0,P.jsx)(t.code,{children:`xf:trigger`}),`로 구분합니다. 선택·비활성 상태와 접근성 속성은 항목 데이터와 함께 갱신합니다.`]}),`
`,(0,P.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,P.jsx)(x,{of:d,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.basic}),`
`,(0,P.jsx)(t.h2,{id:`불릿`,children:`불릿`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`variant="bullet"`}),`은 시맨틱 `,(0,P.jsx)(t.code,{children:`ul`}),`과 불릿 스킨을 함께 적용합니다.`]}),`
`,(0,P.jsx)(x,{of:c,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.bullet}),`
`,(0,P.jsx)(t.h2,{id:`불릿--설명`,children:`불릿 · 설명`}),`
`,(0,P.jsx)(x,{of:n,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.bulletRich}),`
`,(0,P.jsx)(t.h2,{id:`불릿-변형`,children:`불릿 변형`}),`
`,(0,P.jsx)(t.p,{children:`원형·사각형 마커와 중첩 목록을 클래스 조합으로 표현합니다.`}),`
`,(0,P.jsx)(x,{of:f,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.bulletVariants}),`
`,(0,P.jsx)(t.h2,{id:`번호-목록`,children:`번호 목록`}),`
`,(0,P.jsx)(x,{of:u,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.ordered}),`
`,(0,P.jsx)(t.h2,{id:`번호-변형`,children:`번호 변형`}),`
`,(0,P.jsx)(t.p,{children:`알파벳·로마 숫자·대문자 번호 형식을 제공합니다.`}),`
`,(0,P.jsx)(x,{of:s,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.orderedVariants}),`
`,(0,P.jsx)(t.h2,{id:`계층-번호`,children:`계층 번호`}),`
`,(0,P.jsx)(t.p,{children:`중첩 단계에 1.1 또는 1-1 형식의 계층 번호를 적용합니다.`}),`
`,(0,P.jsx)(x,{of:i,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.hierarchical}),`
`,(0,P.jsx)(t.h2,{id:`테두리`,children:`테두리`}),`
`,(0,P.jsx)(x,{of:m,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.bordered}),`
`,(0,P.jsx)(t.h2,{id:`링크-항목`,children:`링크 항목`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`li`}),`는 구조를 유지하고 실제 인터랙션은 내부 `,(0,P.jsx)(t.code,{children:`a.list_link`}),`가 담당합니다.`]}),`
`,(0,P.jsx)(x,{of:a,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.links}),`
`,(0,P.jsx)(t.h2,{id:`버튼-항목`,children:`버튼 항목`}),`
`,(0,P.jsxs)(t.p,{children:[`선택·실행 항목은 내부 `,(0,P.jsx)(t.code,{children:`button.list_link`}),`를 사용합니다.`]}),`
`,(0,P.jsx)(x,{of:h,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.buttons}),`
`,(0,P.jsx)(t.h2,{id:`우측-액션`,children:`우측 액션`}),`
`,(0,P.jsx)(x,{of:g,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.actions}),`
`,(0,P.jsx)(t.h2,{id:`정의-목록`,children:`정의 목록`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`variant="definition"`}),`은 `,(0,P.jsx)(t.code,{children:`dl`}),`, `,(0,P.jsx)(t.code,{children:`ListItem`}),`의 제목·설명은 `,(0,P.jsx)(t.code,{children:`dt`}),`·`,(0,P.jsx)(t.code,{children:`dd`}),`로 렌더링합니다.`]}),`
`,(0,P.jsx)(x,{of:r,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.definition}),`
`,(0,P.jsx)(t.h2,{id:`정의-목록--인라인`,children:`정의 목록 · 인라인`}),`
`,(0,P.jsx)(x,{of:l,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.definitionInline}),`
`,(0,P.jsx)(t.h2,{id:`정의-목록--우측-정렬`,children:`정의 목록 · 우측 정렬`}),`
`,(0,P.jsxs)(t.p,{children:[`주문 요약처럼 값 정렬이 필요한 경우 `,(0,P.jsx)(t.code,{children:`descAlign="right"`}),`를 사용합니다.`]}),`
`,(0,P.jsx)(x,{of:_,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:O.definitionRight}),`
`,(0,P.jsx)(E,{sections:A})]})}function N(e={}){let{wrapper:t}={...v(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=t(),y(),S(),C(),w(),j(),k(),o()})))()}F();export{N as default};