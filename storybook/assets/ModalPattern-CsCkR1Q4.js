import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-DSvVgjCn.js";import{c as i,u as a}from"./blocks-CkHyEh4O.js";import{n as o,t as s}from"./DocsTable-CTByTzpS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Modal Pattern`}),`
`,(0,u.jsx)(t.h1,{id:`modal-pattern`,children:`Modal Pattern`}),`
`,(0,u.jsx)(t.p,{children:`모달은 현재 흐름을 잠시 중단하고 사용자의 결정이나 짧은 작업이 반드시 필요할 때 사용합니다. 참고 정보나 긴 작업에는 일반 페이지 또는 Drawer가 더 적합합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`사용-기준`,children:`사용 기준`}),`
`,(0,u.jsx)(s,{columns:[`사용`,`피해야 하는 경우`],rows:[[`삭제·취소 같은 중요한 확인`,`단순 성공 메시지`],[`짧고 독립적인 입력`,`여러 단계의 복잡한 폼`],[`즉시 응답해야 하는 차단 상태`,`배경 콘텐츠와 비교해야 하는 작업`]]}),`
`,(0,u.jsx)(t.h2,{id:`상호작용`,children:`상호작용`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`열리면 제목 또는 첫 번째 의미 있는 컨트롤로 포커스를 이동합니다.`}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`Tab`}),` 포커스를 모달 내부에 유지합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`Escape`}),`, 닫기 버튼, 취소 동작을 일관되게 제공합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`닫힌 뒤 모달을 열었던 요소로 포커스를 되돌립니다.`}),`
`,(0,u.jsx)(t.li,{children:`파괴적 작업은 대상과 결과를 버튼 레이블에 구체적으로 표시합니다.`}),`
`]}),`
`,(0,u.jsxs)(t.p,{children:[`중첩 모달은 사용하지 않습니다. 처리 중에는 중복 제출을 막되 진행 상태를 표시하고, 실패하면 입력 내용을 유지합니다. 실제 속성과 예시는 `,(0,u.jsx)(t.strong,{children:`피드백 / Modal`}),` 문서를 참고합니다.`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};