import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CJGa1lBW.js";import{c as i,u as a}from"./blocks-SMgDWto2.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Accessibility`}),`
`,(0,c.jsx)(t.h1,{id:`accessibility`,children:`Accessibility`}),`
`,(0,c.jsx)(t.p,{children:`접근성은 별도의 옵션이 아니라 모든 UXKM 컴포넌트가 기본으로 지켜야 하는 품질 기준입니다. 시맨틱 HTML을 우선하고 키보드, 스크린 리더, 확대 화면에서도 같은 정보와 기능을 제공해야 합니다.`}),`
`,(0,c.jsx)(t.h2,{id:`기본-원칙`,children:`기본 원칙`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`기능에 맞는 네이티브 HTML 요소를 먼저 사용합니다.`}),`
`,(0,c.jsx)(t.li,{children:`모든 인터랙션은 키보드만으로 실행하고 종료할 수 있어야 합니다.`}),`
`,(0,c.jsx)(t.li,{children:`포커스 순서는 화면의 읽기 순서와 일치해야 합니다.`}),`
`,(0,c.jsx)(t.li,{children:`색상만으로 상태나 오류를 전달하지 않습니다.`}),`
`,(0,c.jsx)(t.li,{children:`아이콘만 있는 버튼에는 동작을 설명하는 접근 가능한 이름을 제공합니다.`}),`
`,(0,c.jsxs)(t.li,{children:[`애니메이션은 `,(0,c.jsx)(t.code,{children:`prefers-reduced-motion`}),` 설정을 존중합니다.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`키보드와-포커스`,children:`키보드와 포커스`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`Tab`}),`과 `,(0,c.jsx)(t.code,{children:`Shift + Tab`}),`으로 이동하고, 버튼은 `,(0,c.jsx)(t.code,{children:`Enter`}),` 또는 `,(0,c.jsx)(t.code,{children:`Space`}),`로 실행할 수 있어야 합니다. 모달·드로어 같은 오버레이는 열린 동안 포커스를 내부에 유지하고 닫힌 뒤 실행 요소로 되돌립니다. 보이는 포커스 링을 제거하지 않습니다.`]}),`
`,(0,c.jsx)(t.h2,{id:`이름과-상태`,children:`이름과 상태`}),`
`,(0,c.jsxs)(t.p,{children:[`레이블은 눈에 보이는 텍스트와 접근 가능한 이름이 가능한 한 일치해야 합니다. 펼침, 선택, 오류처럼 화면에서 변하는 상태는 `,(0,c.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,c.jsx)(t.code,{children:`aria-selected`}),`, `,(0,c.jsx)(t.code,{children:`aria-invalid`}),` 등 적절한 속성으로 함께 전달합니다.`]}),`
`,(0,c.jsx)(t.h2,{id:`대비-기준`,children:`대비 기준`}),`
`,(0,c.jsx)(t.p,{children:`일반 텍스트는 배경과 4.5:1, 큰 텍스트는 3:1 이상의 대비를 유지합니다. 컨트롤 경계와 포커스 표시처럼 기능을 구분하는 시각 정보도 인접 색상과 3:1 이상을 목표로 합니다.`}),`
`,(0,c.jsxs)(t.p,{children:[`구체적인 구현 및 검수 절차는 `,(0,c.jsx)(t.strong,{children:`가이드 / Accessibility Guide`}),`를 참고합니다.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};