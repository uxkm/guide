import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CJGa1lBW.js";import{c as i,u as a}from"./blocks-SMgDWto2.js";import{n as o,t as s}from"./DocsTable-CTByTzpS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`State Convention`}),`
`,(0,u.jsx)(t.h1,{id:`state-convention`,children:`State Convention`}),`
`,(0,u.jsx)(t.p,{children:`상태는 사용자 입력, 시스템 처리, 유효성 결과를 구분해 표현합니다. 같은 상태는 모든 프레임워크와 컴포넌트에서 같은 의미를 가져야 합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`공통-상태`,children:`공통 상태`}),`
`,(0,u.jsx)(s,{columns:[`상태`,`의미`,`구현 기준`],rows:[[`hover`,`포인터가 상호작용 영역 위에 있음`,`기능의 존재를 보조`],[`focus`,`키보드·스크립트 포커스`,`항상 보이는 포커스 표시`],[`active`,`누르는 중 또는 현재 활성`,`선택 상태와 혼용하지 않음`],[`selected`,`목록·탭에서 선택됨`,`의미 속성과 함께 표현`],[`disabled`,`상호작용할 수 없음`,`네이티브 속성을 우선`],[`loading`,`작업이 처리 중`,`중복 실행 방지와 진행 안내`],[`error`,`입력·처리 실패`,`원인과 복구 방법 제공`],[`success`,`작업 또는 검증 성공`,`필요한 경우에만 지속 표시`]],codeColumns:[0]}),`
`,(0,u.jsx)(t.h2,{id:`작성-원칙`,children:`작성 원칙`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`상태 클래스는 `,(0,u.jsx)(t.code,{children:`is-loading`}),`, `,(0,u.jsx)(t.code,{children:`is-selected`}),`처럼 `,(0,u.jsx)(t.code,{children:`is-`}),` 접두어를 사용합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`상태를 색상 하나로만 표현하지 않습니다.`}),`
`,(0,u.jsx)(t.li,{children:`disabled와 readonly를 구분합니다. readonly 값은 읽고 포커스할 수 있습니다.`}),`
`,(0,u.jsx)(t.li,{children:`로딩 중 기존 레이블을 완전히 제거하지 않아 사용자가 어떤 작업인지 알 수 있게 합니다.`}),`
`,(0,u.jsx)(t.li,{children:`제어 상태와 비제어 상태를 동시에 사용하지 않습니다.`}),`
`]}),`
`,(0,u.jsx)(t.p,{children:`상태가 바뀌면 화면과 DOM의 속성, 접근성 정보가 같은 시점에 갱신되어야 합니다.`})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};