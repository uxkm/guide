import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CbOw9eUO.js";import{c as i,u as a}from"./blocks-BToPoJhg.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Form Validation`}),`
`,(0,c.jsx)(t.h1,{id:`form-validation`,children:`Form Validation`}),`
`,(0,c.jsx)(t.p,{children:`폼 검증은 오류를 예방하고 수정 비용을 줄이는 과정입니다. 입력을 방해할 정도로 빠르게 오류를 표시하지 않으며 제출 시에는 모든 문제를 빠짐없이 찾을 수 있게 합니다.`}),`
`,(0,c.jsx)(t.h2,{id:`검증-시점`,children:`검증 시점`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`입력 전: 형식과 필수 여부를 레이블·도움말로 안내합니다.`}),`
`,(0,c.jsx)(t.li,{children:`입력 중: 비밀번호 조건처럼 즉시 피드백이 유용한 경우에만 사용합니다.`}),`
`,(0,c.jsx)(t.li,{children:`포커스 이탈: 사용자가 해당 필드 작성을 마친 뒤 검증합니다.`}),`
`,(0,c.jsx)(t.li,{children:`제출: 전체 필드를 검증하고 첫 오류로 포커스를 이동합니다.`}),`
`,(0,c.jsx)(t.li,{children:`서버 응답: 중복 계정 등 클라이언트가 알 수 없는 오류를 해당 필드에 연결합니다.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`필드-구성`,children:`필드 구성`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`레이블 + 필수 여부
입력 컨트롤
도움말 또는 형식 예시
오류 메시지
`})}),`
`,(0,c.jsxs)(t.p,{children:[`오류가 발생하면 컨트롤에 `,(0,c.jsx)(t.code,{children:`aria-invalid="true"`}),`를 지정하고 `,(0,c.jsx)(t.code,{children:`aria-describedby`}),`로 오류 메시지를 연결합니다. 색상 외에 아이콘과 텍스트를 함께 사용합니다.`]}),`
`,(0,c.jsx)(t.p,{children:`제출 버튼은 검증 오류만을 이유로 미리 비활성화하지 않습니다. 사용자가 제출을 시도할 수 있어야 누락된 항목과 해결 방법을 전달할 수 있습니다.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};