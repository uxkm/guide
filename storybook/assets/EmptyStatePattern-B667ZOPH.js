import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CJGa1lBW.js";import{c as i,u as a}from"./blocks-SMgDWto2.js";import{n as o,t as s}from"./DocsTable-CTByTzpS.js";function c(e){let t={h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Empty State Pattern`}),`
`,(0,u.jsx)(t.h1,{id:`empty-state-pattern`,children:`Empty State Pattern`}),`
`,(0,u.jsx)(t.p,{children:`빈 상태는 단순히 데이터가 없다는 사실보다 왜 비어 있는지와 다음에 무엇을 할 수 있는지를 알려야 합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`상태-구분`,children:`상태 구분`}),`
`,(0,u.jsx)(s,{columns:[`상황`,`메시지 방향`,`권장 액션`],rows:[[`최초 사용`,`아직 생성된 항목이 없음`,`첫 항목 만들기`],[`검색 결과 없음`,`조건에 맞는 결과가 없음`,`검색어·필터 초기화`],[`처리 완료`,`사용자가 모든 작업을 마침`,`다른 영역으로 이동`],[`권한 없음`,`볼 수 없는 이유가 있음`,`권한 요청 또는 이전으로`],[`로드 실패`,`데이터를 가져오지 못함`,`다시 시도`]]}),`
`,(0,u.jsx)(t.h2,{id:`구성`,children:`구성`}),`
`,(0,u.jsxs)(t.ol,{children:[`
`,(0,u.jsx)(t.li,{children:`선택적인 상태 아이콘 또는 이미지`}),`
`,(0,u.jsx)(t.li,{children:`상황을 한 문장으로 설명하는 제목`}),`
`,(0,u.jsx)(t.li,{children:`원인이나 해결 방법을 보충하는 설명`}),`
`,(0,u.jsx)(t.li,{children:`가장 가능성 높은 다음 행동 하나`}),`
`]}),`
`,(0,u.jsxs)(t.p,{children:[`빈 상태를 오류나 로딩 상태 대신 사용하지 않습니다. 데이터 요청 중에는 Skeleton 또는 Spin을, 실패한 경우에는 Alert와 재시도 액션을 사용합니다. 실제 표현 API는 `,(0,u.jsx)(t.strong,{children:`피드백 / Empty`}),` 문서를 참고합니다.`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};