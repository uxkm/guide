import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CJGa1lBW.js";import{c as i,u as a}from"./blocks-SMgDWto2.js";function o(e){let t={h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Accessibility Guide`}),`
`,(0,c.jsx)(t.h1,{id:`accessibility-guide`,children:`Accessibility Guide`}),`
`,(0,c.jsxs)(t.p,{children:[`이 문서는 컴포넌트 구현과 리뷰에서 사용하는 접근성 점검 절차입니다. 공통 원칙은 `,(0,c.jsx)(t.strong,{children:`파운데이션 / Accessibility`}),`를 참고합니다.`]}),`
`,(0,c.jsx)(t.h2,{id:`구현-체크리스트`,children:`구현 체크리스트`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`네이티브 요소로 해결할 수 있는지 먼저 확인합니다.`}),`
`,(0,c.jsx)(t.li,{children:`모든 입력에 프로그램 방식으로 연결된 레이블을 제공합니다.`}),`
`,(0,c.jsx)(t.li,{children:`아이콘 버튼과 이름 없는 영역에 접근 가능한 이름을 지정합니다.`}),`
`,(0,c.jsx)(t.li,{children:`상태 변화에 필요한 ARIA 속성을 실제 UI 상태와 동기화합니다.`}),`
`,(0,c.jsx)(t.li,{children:`DOM 순서와 키보드 포커스 순서를 일치시킵니다.`}),`
`,(0,c.jsx)(t.li,{children:`오류 메시지를 해당 입력과 연결하고 복구 방법을 설명합니다.`}),`
`,(0,c.jsx)(t.li,{children:`라이트·다크 테마에서 텍스트, 경계, 포커스 대비를 확인합니다.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`검수-순서`,children:`검수 순서`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`마우스 없이 모든 기능을 실행합니다.`}),`
`,(0,c.jsx)(t.li,{children:`200% 확대와 좁은 화면에서 콘텐츠 손실을 확인합니다.`}),`
`,(0,c.jsx)(t.li,{children:`브라우저 접근성 트리에서 이름·역할·상태를 확인합니다.`}),`
`,(0,c.jsx)(t.li,{children:`스크린 리더로 읽기 순서와 동적 알림을 확인합니다.`}),`
`,(0,c.jsx)(t.li,{children:`Storybook 접근성 검사 결과를 확인하고 수동 검수를 병행합니다.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`자동 검사는 누락된 이름과 일부 대비 문제를 찾는 보조 수단입니다. 키보드 흐름, 메시지의 이해 가능성, 올바른 포커스 복귀는 반드시 직접 확인합니다.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};