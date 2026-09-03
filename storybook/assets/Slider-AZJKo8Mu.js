import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./Slider.stories-DhfaUD9G.js";import{i as g,r as _}from"./react-DPG3xyh1.js";import{c as v,r as y,u as b}from"./blocks-BXsfpknd.js";import{i as x,n as S,r as C,t as w}from"./ComponentApiDocs-BKc5okVC.js";import{a as T,h as E,m as D}from"./formControlDocumentationExamples-k4xWc8cj.js";function O(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...g(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(v,{of:u}),`
`,(0,A.jsx)(t.h1,{id:`slider`,children:`Slider`}),`
`,(0,A.jsx)(t.p,{children:`범위 값을 선택하는 Slider 컴포넌트입니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,A.jsxs)(t.p,{children:[`네이티브 `,(0,A.jsx)(t.code,{children:`input type="range"`}),`를 기반으로 하며 레이블, 현재 값, 눈금과 증감 버튼을 조합할 수 있습니다. 보이는 레이블은 `,(0,A.jsx)(t.code,{children:`label[for]`}),`와 `,(0,A.jsx)(t.code,{children:`id`}),`로 연결합니다.`]}),`
`,(0,A.jsxs)(t.p,{children:[`WebSquare는 범위 입력을 `,(0,A.jsx)(t.code,{children:`xf:input`}),`(type=`,(0,A.jsx)(t.code,{children:`range`}),`), 증감 동작을 `,(0,A.jsx)(t.code,{children:`xf:trigger`}),`, 레이블·값 영역을 `,(0,A.jsx)(t.code,{children:`w2:group`}),`과 `,(0,A.jsx)(t.code,{children:`w2:textbox`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,A.jsx)(t.code,{children:`w2`}),`, `,(0,A.jsx)(t.code,{children:`xf`}),`, `,(0,A.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,A.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,A.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Slider 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 값, 범위·간격, 크기, 스텝 버튼과 접근성 레이블을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[`지원하지 않는 크기는 `,(0,A.jsx)(t.code,{children:`md`}),`로 정규화하고 `,(0,A.jsx)(t.code,{children:`slider_sm`}),`·`,(0,A.jsx)(t.code,{children:`slider_lg`}),` 클래스로 변환합니다.`]}),`
`,(0,A.jsxs)(t.li,{children:[`값은 `,(0,A.jsx)(t.code,{children:`min`}),`·`,(0,A.jsx)(t.code,{children:`max`}),` 범위로 클램프하며 `,(0,A.jsx)(t.code,{children:`step`}),` 단위로 증감합니다.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.code,{children:`stepper`}),`는 모바일에서, `,(0,A.jsx)(t.code,{children:`stepperAlways`}),`는 항상 증감 버튼을 표시합니다.`]}),`
`,(0,A.jsxs)(t.li,{children:[`증감 버튼은 `,(0,A.jsx)(t.code,{children:`decreaseLabel`}),`·`,(0,A.jsx)(t.code,{children:`increaseLabel`}),`로 접근 가능한 이름을 제공합니다.`]}),`
`]}),`
`,(0,A.jsx)(C,{examples:D,showFullCode:!0}),`
`,(0,A.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`xf:input`}),`의 `,(0,A.jsx)(t.code,{children:`type="range"`}),`와 `,(0,A.jsx)(t.code,{children:`ref`}),`를 DataMap 경로에 연결하고 `,(0,A.jsx)(t.code,{children:`min`}),`·`,(0,A.jsx)(t.code,{children:`max`}),`·`,(0,A.jsx)(t.code,{children:`step`}),`·`,(0,A.jsx)(t.code,{children:`value`}),`로 값 계약을 정의합니다. 크기·너비는 공통 `,(0,A.jsx)(t.code,{children:`slider_*`}),` 클래스로 표현합니다.`]}),`
`,(0,A.jsxs)(t.p,{children:[`증감 버튼은 `,(0,A.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,A.jsx)(t.code,{children:`ev:onclick`}),`에서 값을 조정한 뒤 입력으로 포커스를 유지합니다. 값 표시 갱신과 연관 필드 반영은 `,(0,A.jsx)(t.code,{children:`ev:onchange`}),`를 화면 스크립트에 연결합니다.`]}),`
`,(0,A.jsx)(t.h2,{id:`유형`,children:`유형`}),`
`,(0,A.jsx)(t.p,{children:`기본 트랙과 스텝 버튼 변형을 한눈에 비교합니다.`}),`
`,(0,A.jsx)(y,{of:h,sourceState:`none`}),`
`,(0,A.jsx)(C,{examples:E.type}),`
`,(0,A.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,A.jsx)(t.p,{children:`레이블과 현재 값이 포함된 기본 슬라이더입니다.`}),`
`,(0,A.jsx)(y,{of:m,sourceState:`none`}),`
`,(0,A.jsx)(C,{examples:E.basic}),`
`,(0,A.jsx)(t.h2,{id:`레이블--값-표시`,children:`레이블 · 값 표시`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`slider_header`}),`로 레이블과 현재 값을 함께 표시합니다.`]}),`
`,(0,A.jsx)(y,{of:o,sourceState:`none`}),`
`,(0,A.jsx)(C,{examples:E.label}),`
`,(0,A.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,A.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 제공합니다.`}),`
`,(0,A.jsx)(y,{of:n,sourceState:`none`}),`
`,(0,A.jsx)(C,{examples:E.size}),`
`,(0,A.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`slider_fit`}),`은 최대 너비를 제한하고 `,(0,A.jsx)(t.code,{children:`slider_block`}),`은 부모 너비를 채웁니다.`]}),`
`,(0,A.jsx)(y,{of:i,sourceState:`none`}),`
`,(0,A.jsx)(C,{examples:E.width}),`
`,(0,A.jsx)(t.h2,{id:`간격--눈금`,children:`간격 · 눈금`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`step`}),`과 눈금으로 선택 단위를 안내합니다.`]}),`
`,(0,A.jsx)(y,{of:r,sourceState:`none`}),`
`,(0,A.jsx)(C,{examples:E.step}),`
`,(0,A.jsx)(t.h2,{id:`스텝-버튼`,children:`스텝 버튼`}),`
`,(0,A.jsx)(t.p,{children:`증감 버튼으로 값을 한 단계씩 조절합니다.`}),`
`,(0,A.jsx)(y,{of:s,sourceState:`none`}),`
`,(0,A.jsx)(C,{examples:E.stepper}),`
`,(0,A.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,A.jsxs)(t.p,{children:[`semantic `,(0,A.jsx)(t.code,{children:`color_*`}),` 클래스로 트랙 강조 색을 바꿉니다.`]}),`
`,(0,A.jsx)(y,{of:l,sourceState:`none`}),`
`,(0,A.jsx)(C,{examples:E.color}),`
`,(0,A.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,A.jsx)(t.p,{children:`기본과 비활성 상태를 함께 제공합니다.`}),`
`,(0,A.jsx)(y,{of:p,sourceState:`none`}),`
`,(0,A.jsx)(C,{examples:E.state}),`
`,(0,A.jsx)(t.h2,{id:`폼-레이아웃`,children:`폼 레이아웃`}),`
`,(0,A.jsx)(t.p,{children:`FormLayout 안에서 슬라이더를 배치합니다.`}),`
`,(0,A.jsx)(y,{of:f,sourceState:`none`}),`
`,(0,A.jsx)(C,{examples:E.form}),`
`,(0,A.jsx)(w,{sections:c})]})}function k(e={}){let{wrapper:t}={...g(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;function j(){return(j=e((()=>{A=t(),_(),b(),x(),S(),T(),d(),a()})))()}j();export{k as default};