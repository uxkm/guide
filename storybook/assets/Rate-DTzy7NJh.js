import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./Rate.stories-DbgToeH4.js";import{i as h,r as g}from"./react-CbOw9eUO.js";import{c as _,r as v,u as y}from"./blocks-BToPoJhg.js";import{i as b,n as x,r as S,t as C}from"./ComponentApiDocs-DfTaPA3Z.js";import{a as w,d as T,u as E}from"./formControlDocumentationExamples-BWmHyzfQ.js";function D(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...h(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(_,{of:l}),`
`,(0,k.jsx)(t.h1,{id:`rate`,children:`Rate`}),`
`,(0,k.jsx)(t.p,{children:`별점과 만족도를 선택하거나 읽기 전용으로 표시하는 Rate 컴포넌트입니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,k.jsxs)(t.p,{children:[(0,k.jsx)(t.code,{children:`fieldset`}),`과 `,(0,k.jsx)(t.code,{children:`input type="radio"`}),`를 기반으로 반점 선택과 초기화를 지원합니다. 그룹 목적은 `,(0,k.jsx)(t.code,{children:`legend`}),`로 전달합니다.`]}),`
`,(0,k.jsxs)(t.p,{children:[`WebSquare는 별점 입력을 `,(0,k.jsx)(t.code,{children:`xf:input`}),`(type=`,(0,k.jsx)(t.code,{children:`radio`}),`), 초기화를 `,(0,k.jsx)(t.code,{children:`xf:trigger`}),`, 별·범례 영역을 `,(0,k.jsx)(t.code,{children:`w2:group`}),`과 `,(0,k.jsx)(t.code,{children:`w2:textbox`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,k.jsx)(t.code,{children:`w2`}),`, `,(0,k.jsx)(t.code,{children:`xf`}),`, `,(0,k.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,k.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,k.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Rate 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 별점, 반점, 초기화, 읽기 전용과 접근성 레이블을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsxs)(t.li,{children:[`지원하지 않는 크기는 `,(0,k.jsx)(t.code,{children:`md`}),`로 정규화하고 `,(0,k.jsx)(t.code,{children:`rate_sm`}),`·`,(0,k.jsx)(t.code,{children:`rate_lg`}),` 클래스로 변환합니다.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.code,{children:`allowHalf`}),`는 0.5점 단위 선택을, `,(0,k.jsx)(t.code,{children:`clearable`}),`은 선택 초기화를 제공합니다.`]}),`
`,(0,k.jsx)(t.li,{children:`읽기 전용은 상호작용을 막고 현재 별점만 표시합니다.`}),`
`,(0,k.jsx)(t.li,{children:`각 별은 radio 입력과 그래픽·숨김 레이블로 접근 가능한 이름을 제공합니다.`}),`
`]}),`
`,(0,k.jsx)(S,{examples:E,showFullCode:!0}),`
`,(0,k.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,k.jsxs)(t.p,{children:[`같은 `,(0,k.jsx)(t.code,{children:`name`}),`과 `,(0,k.jsx)(t.code,{children:`ref`}),`를 공유하는 `,(0,k.jsx)(t.code,{children:`xf:input type="radio"`}),`로 별점 그룹을 구성합니다. 선택값은 DataMap 경로에 바인딩하고 `,(0,k.jsx)(t.code,{children:`value`}),`는 정수(또는 반점 규칙에 맞는 값)로 저장합니다.`]}),`
`,(0,k.jsxs)(t.p,{children:[`초기화는 `,(0,k.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,k.jsx)(t.code,{children:`ev:onclick`}),`에서 값을 비웁니다. 선택 변경 후 연관 필드를 갱신할 때는 `,(0,k.jsx)(t.code,{children:`ev:onchange`}),`를 화면 스크립트에 연결합니다.`]}),`
`,(0,k.jsx)(t.h2,{id:`유형`,children:`유형`}),`
`,(0,k.jsx)(t.p,{children:`기본과 반점 변형을 한눈에 비교합니다.`}),`
`,(0,k.jsx)(v,{of:m,sourceState:`none`}),`
`,(0,k.jsx)(S,{examples:T.type}),`
`,(0,k.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,k.jsx)(t.p,{children:`범례와 별 선택이 포함된 기본 Rate입니다.`}),`
`,(0,k.jsx)(v,{of:p,sourceState:`none`}),`
`,(0,k.jsx)(S,{examples:T.basic}),`
`,(0,k.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,k.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 제공합니다.`}),`
`,(0,k.jsx)(v,{of:r,sourceState:`none`}),`
`,(0,k.jsx)(S,{examples:T.size}),`
`,(0,k.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,k.jsxs)(t.p,{children:[`semantic `,(0,k.jsx)(t.code,{children:`color_*`}),` 클래스로 선택 별 색을 바꿉니다.`]}),`
`,(0,k.jsx)(v,{of:d,sourceState:`none`}),`
`,(0,k.jsx)(S,{examples:T.color}),`
`,(0,k.jsx)(t.h2,{id:`반점`,children:`반점`}),`
`,(0,k.jsxs)(t.p,{children:[(0,k.jsx)(t.code,{children:`rate_allow-half`}),`로 0.5점 단위 선택을 허용합니다.`]}),`
`,(0,k.jsx)(v,{of:n,sourceState:`none`}),`
`,(0,k.jsx)(S,{examples:T.half}),`
`,(0,k.jsx)(t.h2,{id:`선택-해제--초기화`,children:`선택 해제 · 초기화`}),`
`,(0,k.jsxs)(t.p,{children:[(0,k.jsx)(t.code,{children:`clearable`}),`로 선택값을 초기화합니다.`]}),`
`,(0,k.jsx)(v,{of:c,sourceState:`none`}),`
`,(0,k.jsx)(S,{examples:T.clear}),`
`,(0,k.jsx)(t.h2,{id:`읽기-전용`,children:`읽기 전용`}),`
`,(0,k.jsx)(t.p,{children:`상호작용 없이 현재 별점만 표시합니다.`}),`
`,(0,k.jsx)(v,{of:f,sourceState:`none`}),`
`,(0,k.jsx)(S,{examples:T.readonly}),`
`,(0,k.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,k.jsx)(t.p,{children:`기본과 비활성 상태를 함께 제공합니다.`}),`
`,(0,k.jsx)(v,{of:s,sourceState:`none`}),`
`,(0,k.jsx)(S,{examples:T.state}),`
`,(0,k.jsx)(t.h2,{id:`폼-레이아웃`,children:`폼 레이아웃`}),`
`,(0,k.jsx)(t.p,{children:`FormLayout 안에서 Rate를 배치합니다.`}),`
`,(0,k.jsx)(v,{of:o,sourceState:`none`}),`
`,(0,k.jsx)(S,{examples:T.form}),`
`,(0,k.jsx)(C,{sections:u})]})}function O(e={}){let{wrapper:t}={...h(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;function A(){return(A=e((()=>{k=t(),g(),y(),b(),x(),w(),a(),i()})))()}A();export{O as default};