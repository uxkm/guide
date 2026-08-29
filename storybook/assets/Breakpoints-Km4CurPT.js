import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CJGa1lBW.js";import{c as i,u as a}from"./blocks-SMgDWto2.js";import{n as o,t as s}from"./DocsTable-CTByTzpS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Breakpoints`}),`
`,(0,u.jsx)(t.h1,{id:`breakpoints`,children:`Breakpoints`}),`
`,(0,u.jsx)(t.p,{children:`UXKM은 콘텐츠가 실제로 재배치되어야 하는 지점을 기준으로 두 개의 공통 중단점을 사용합니다. 특정 기기 이름보다 사용 가능한 너비와 콘텐츠 우선순위에 집중합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`공통-값`,children:`공통 값`}),`
`,(0,u.jsx)(s,{columns:[`이름`,`값`,`기본 용도`],rows:[[`Base`,`0–767px`,`단일 열, 모바일 우선 스타일`],[`$breakpoint-md`,`768px`,`태블릿·좁은 데스크톱 레이아웃`],[`$breakpoint-lg`,`1024px`,`사이드바와 다중 열 레이아웃`]],codeColumns:[0]}),`
`,(0,u.jsxs)(t.p,{children:[`중단점은 `,(0,u.jsx)(t.code,{children:`packages/styles/shared/_variables.scss`}),`의 SCSS 변수로 관리합니다. 런타임 테마 값이 아니므로 CSS 변수로 재정의하지 않습니다.`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-scss`,children:`.content-grid {
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: $breakpoint-lg) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`적용-원칙`,children:`적용 원칙`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`모바일 기본 스타일을 먼저 작성합니다.`}),`
`,(0,u.jsx)(t.li,{children:`단순히 화면 크기가 바뀌었다는 이유로 중단점을 추가하지 않습니다.`}),`
`,(0,u.jsxs)(t.li,{children:[`고정 너비 대신 `,(0,u.jsx)(t.code,{children:`minmax()`}),`, `,(0,u.jsx)(t.code,{children:`flex-wrap`}),`, 상대 단위를 우선합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`200% 확대와 긴 한국어·영문 텍스트에서도 가로 스크롤이 생기지 않는지 확인합니다.`}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};