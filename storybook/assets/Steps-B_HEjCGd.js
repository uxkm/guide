import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./Steps.stories-CKxRhB_8.js";import{i as m,r as h}from"./react-BBfuIdny.js";import{c as g,r as _,u as v}from"./blocks-DbhChoan.js";import{i as y,n as b,r as x,t as S}from"./ComponentApiDocs-arf-yre-.js";import{a as C,f as w,p as T}from"./navigationDocumentationExamples-DpF3E8Gd.js";var E,D,O;function k(){return(k=e((()=>{E=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],D=(e,t,n)=>({title:e,description:n,tables:[{columns:E,rows:t}]}),O=[D(`Steps API`,[{name:`current · v-model:current`,type:`number`,default:`—`,description:`상태를 자동 계산할 때 사용하는 현재 단계입니다.`},{name:`direction`,type:`'horizontal' | 'vertical'`,default:`'horizontal'`,description:`단계 배치 방향입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`인디케이터와 텍스트 크기입니다.`},{name:`dot · iconStyle`,type:`boolean`,default:`false`,description:`도트 및 아이콘 인디케이터 변형입니다.`},{name:`navigable`,type:`boolean`,default:`false`,description:`완료된 단계를 클릭해 이전 단계로 이동합니다.`},{name:`align`,type:`'' | 'center'`,default:`''`,description:`가로 단계의 콘텐츠 정렬입니다.`},{name:`onChange · change`,type:`(step) => void`,default:`—`,description:`탐색 가능한 단계 변경 이벤트입니다.`},{name:`items · children · default slot`,type:`StepData[] · ReactNode · slot`,default:`[]`,description:`단계 항목입니다.`}]),D(`StepsItem API`,[{name:`title · #title`,type:`string · ReactNode · slot`,default:`—`,description:`단계 제목 콘텐츠입니다.`},{name:`description · #description`,type:`string · ReactNode · slot`,default:`—`,description:`보조 설명 콘텐츠입니다.`},{name:`status`,type:`'finished' | 'active' | 'wait' | 'error'`,default:`'wait'`,description:`단계의 진행 상태입니다.`},{name:`icon · #icon`,type:`ReactNode · slot`,default:`상태 아이콘/번호`,description:`사용자가 교체할 수 있는 인디케이터 콘텐츠입니다.`},{name:`completeIcon · errorIcon`,type:`ReactNode`,default:`Icon check · close`,description:`React 완료 및 오류 아이콘을 교체합니다.`}]),D(`HTML · Gulp`,[{name:`data-steps · data-step-index`,type:`attribute`,default:`—`,description:`탐색 가능한 단계 동작과 순서를 연결합니다.`},{name:`steps:change`,type:`CustomEvent`,default:`—`,description:`변경된 current를 detail로 전달합니다.`},{name:`is-finished · is-active · is-wait · is-error`,type:`class`,default:`—`,description:`완료, 현재, 대기, 오류 상태 클래스입니다.`}]),D(`디자인 토큰`,[{name:`--steps-indicator-size`,type:`length`,default:`2rem`,description:`인디케이터 크기입니다.`},{name:`--steps-gap · --steps-head-gap`,type:`length`,default:`space-md · space-sm`,description:`단계와 헤더 요소 간격입니다.`},{name:`--steps-title-size · --steps-desc-size`,type:`length`,default:`text-size-sm · text-size-xs`,description:`제목과 설명 크기입니다.`}]),D(`WebSquare API · XML`,[{name:`w2:group.steps`,type:`XML element · class`,default:`—`,description:`Steps 루트입니다. steps_vertical·steps_dot·steps_simple 등을 조합합니다.`},{name:`steps_item · steps_marker · steps_title`,type:`class`,default:`—`,description:`단계 항목과 인디케이터·제목입니다.`},{name:`is-done · is-current · is-wait · is-error`,type:`class`,default:`—`,description:`완료·현재·대기·오류 상태입니다.`},{name:`aria-current="step"`,type:`ARIA`,default:`—`,description:`현재 단계를 표시합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function A(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...m(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(g,{of:p}),`
`,(0,M.jsx)(t.h1,{id:`steps`,children:`Steps`}),`
`,(0,M.jsx)(t.p,{children:`여러 단계로 구성된 작업의 완료, 현재, 대기 및 오류 상태를 순서대로 표시합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,M.jsxs)(t.p,{children:[`현재 단계는 `,(0,M.jsx)(t.code,{children:`aria-current="step"`}),`으로 표시합니다. 탐색형에서 대기 단계는 비활성화하며 완료된 단계만 이전 단계로 이동할 수 있습니다. 애니메이션은 `,(0,M.jsx)(t.code,{children:`prefers-reduced-motion`}),` 환경에서 제거됩니다.`]}),`
`,(0,M.jsxs)(t.p,{children:[`WebSquare는 단계 목록을 `,(0,M.jsx)(t.code,{children:`w2:group.steps`}),`, 각 단계를 `,(0,M.jsx)(t.code,{children:`w2:group.steps_item`}),`, 마커·제목을 `,(0,M.jsx)(t.code,{children:`w2:textbox`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,M.jsx)(t.code,{children:`w2`}),`, `,(0,M.jsx)(t.code,{children:`xf`}),`, `,(0,M.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,M.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,M.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Steps와 StepsItem의 실제 원본 구현입니다. React와 Vue는 가로·세로, 도트·간단형, 아이콘, 탐색 가능과 오류 상태를 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`status`}),`는 done·current·wait·error를 `,(0,M.jsx)(t.code,{children:`is-*`}),` 클래스로 표현합니다.`]}),`
`,(0,M.jsxs)(t.li,{children:[`현재 단계는 `,(0,M.jsx)(t.code,{children:`aria-current="step"`}),`을 사용합니다.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`navigable`}),`은 완료된 단계만 클릭으로 이동합니다.`]}),`
`]}),`
`,(0,M.jsx)(x,{examples:w,showFullCode:!0}),`
`,(0,M.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`w2:group.steps`}),` 안에 `,(0,M.jsx)(t.code,{children:`steps_item`}),`을 배치하고 `,(0,M.jsx)(t.code,{children:`is-done`}),`·`,(0,M.jsx)(t.code,{children:`is-current`}),`·`,(0,M.jsx)(t.code,{children:`is-wait`}),`·`,(0,M.jsx)(t.code,{children:`is-error`}),`로 상태를 표시합니다. 현재 단계는 `,(0,M.jsx)(t.code,{children:`aria-current="step"`}),`을 적용합니다.`]}),`
`,(0,M.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,M.jsx)(_,{of:c,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.basic}),`
`,(0,M.jsx)(t.h2,{id:`간단`,children:`간단`}),`
`,(0,M.jsx)(_,{of:d,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.simple}),`
`,(0,M.jsx)(t.h2,{id:`세로형`,children:`세로형`}),`
`,(0,M.jsx)(_,{of:i,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.vertical}),`
`,(0,M.jsx)(t.h2,{id:`도트`,children:`도트`}),`
`,(0,M.jsx)(_,{of:u,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.dot}),`
`,(0,M.jsx)(t.h2,{id:`아이콘`,children:`아이콘`}),`
`,(0,M.jsx)(_,{of:n,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.icon}),`
`,(0,M.jsx)(t.h2,{id:`탐색-가능`,children:`탐색 가능`}),`
`,(0,M.jsx)(_,{of:l,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.navigable}),`
`,(0,M.jsx)(t.h2,{id:`오류`,children:`오류`}),`
`,(0,M.jsx)(_,{of:o,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.error}),`
`,(0,M.jsx)(t.h2,{id:`가운데-정렬`,children:`가운데 정렬`}),`
`,(0,M.jsx)(_,{of:f,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.align}),`
`,(0,M.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,M.jsx)(_,{of:r,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.size}),`
`,(0,M.jsx)(t.h2,{id:`상태-요약`,children:`상태 요약`}),`
`,(0,M.jsx)(_,{of:s,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.state}),`
`,(0,M.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,M.jsxs)(t.p,{children:[`현재 단계는 `,(0,M.jsx)(t.code,{children:`aria-current="step"`}),`으로 표시합니다. 탐색형에서 대기 단계는 비활성화하며 완료된 단계만 이전 단계로 이동할 수 있습니다. 애니메이션은 `,(0,M.jsx)(t.code,{children:`prefers-reduced-motion`}),` 환경에서 제거됩니다.`]}),`
`,(0,M.jsx)(S,{sections:O})]})}function j(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=t(),h(),v(),y(),b(),C(),k(),a()})))()}N();export{j as default};