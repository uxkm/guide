import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BBfuIdny.js";import{c as i,u as a}from"./blocks-DbhChoan.js";import{n as o,t as s}from"./DocsTable-CTByTzpS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Error Handling`}),`
`,(0,u.jsx)(t.h1,{id:`error-handling`,children:`Error Handling`}),`
`,(0,u.jsx)(t.p,{children:`오류 메시지는 문제의 위치, 원인, 복구 방법을 함께 전달합니다. 기술적인 예외 문자열을 그대로 노출하지 않고 사용자가 취할 수 있는 행동을 중심으로 작성합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`오류-수준`,children:`오류 수준`}),`
`,(0,u.jsx)(s,{columns:[`수준`,`표현`,`예시`],rows:[[`필드`,`입력 바로 아래의 오류`,`필수값 누락, 형식 오류`],[`섹션`,`해당 영역의 Alert`,`일부 데이터 로드 실패`],[`페이지`,`주요 오류 화면`,`권한 없음, 페이지 로드 실패`],[`일시 알림`,`Snackbar`,`저장 실패 후 재시도 가능`],[`치명적 확인`,`Modal`,`진행 중인 작업을 계속할 수 없음`]]}),`
`,(0,u.jsx)(t.h2,{id:`처리-흐름`,children:`처리 흐름`}),`
`,(0,u.jsxs)(t.ol,{children:[`
`,(0,u.jsx)(t.li,{children:`사용자의 입력을 가능한 한 보존합니다.`}),`
`,(0,u.jsx)(t.li,{children:`문제가 발생한 위치 가까이에 메시지를 표시합니다.`}),`
`,(0,u.jsx)(t.li,{children:`오류 원인과 수정 방법을 구체적으로 설명합니다.`}),`
`,(0,u.jsx)(t.li,{children:`재시도, 수정, 돌아가기 중 하나의 명확한 다음 행동을 제공합니다.`}),`
`,(0,u.jsxs)(t.li,{children:[`복구되면 오래된 오류 상태와 `,(0,u.jsx)(t.code,{children:`aria-invalid`}),`를 제거합니다.`]}),`
`]}),`
`,(0,u.jsx)(t.p,{children:`네트워크 오류는 무한 재시도하지 않으며, 중복 제출을 막고 요청 상태를 사용자에게 알립니다. 개발 로그의 상세 정보와 사용자용 메시지를 분리합니다.`})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};