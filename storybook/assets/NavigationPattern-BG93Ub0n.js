import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-DSvVgjCn.js";import{c as i,u as a}from"./blocks-CkHyEh4O.js";import{n as o,t as s}from"./DocsTable-CTByTzpS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Navigation Pattern`}),`
`,(0,u.jsx)(t.h1,{id:`navigation-pattern`,children:`Navigation Pattern`}),`
`,(0,u.jsx)(t.p,{children:`내비게이션은 사용자가 현재 위치를 이해하고 원하는 영역으로 예측 가능하게 이동하도록 돕습니다. 정보 구조의 깊이와 이동 범위에 맞는 컴포넌트를 선택합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`유형-선택`,children:`유형 선택`}),`
`,(0,u.jsx)(s,{columns:[`유형`,`컴포넌트`,`사용처`],rows:[[`전역 이동`,`Navbar, Menu`,`제품의 주요 영역`],[`계층 위치`,`Breadcrumb`,`현재 페이지의 상위 경로`],[`같은 맥락 전환`,`Tabs`,`동일 페이지 안의 관련 보기`],[`순차 과정`,`Steps`,`가입·결제 같은 단계형 작업`],[`긴 목록 이동`,`Pagination`,`서버 기반 페이지 목록`],[`보조 명령`,`Dropdown`,`현재 대상과 관련된 액션`]]}),`
`,(0,u.jsx)(t.h2,{id:`원칙`,children:`원칙`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`현재 항목은 시각적 표시와 `,(0,u.jsx)(t.code,{children:`aria-current`}),` 등 의미 정보를 함께 제공합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`같은 목적지는 제품 전체에서 같은 이름과 위치를 유지합니다.`}),`
`,(0,u.jsx)(t.li,{children:`모바일에서 항목을 단순히 숨기지 말고 우선순위에 따라 재구성합니다.`}),`
`,(0,u.jsx)(t.li,{children:`탭, 페이지 이동, 펼침 메뉴의 동작을 서로 혼용하지 않습니다.`}),`
`,(0,u.jsx)(t.li,{children:`뒤로가기를 포함한 브라우저 탐색이 예측 가능해야 합니다.`}),`
`]}),`
`,(0,u.jsx)(t.p,{children:`메뉴 깊이는 가능한 한 얕게 유지하며, 사용자가 펼치지 않아도 주요 영역의 존재를 파악할 수 있게 합니다.`})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};