import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./Progress.stories-DyMgxSkv.js";import{i as p,r as m}from"./react-DPG3xyh1.js";import{c as h,r as g,u as _}from"./blocks-BXsfpknd.js";import{i as v,n as y,r as b,t as x}from"./ComponentApiDocs-BKc5okVC.js";import{f as S,p as C,s as w}from"./feedbackDocumentationExamples-ZkYTdG9Z.js";var T,E,D;function O(){return(O=e((()=>{T=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],E=(e,t,n)=>({title:e,description:n,tables:[{columns:T,rows:t}]}),D=[E(`React · Next.js API`,[{name:`percent`,type:`number`,default:`0`,description:`0~100 진행률입니다.`},{name:`status`,type:`'' | 'success' | 'exception'`,default:`''`,description:`완료·예외 상태 색상입니다.`},{name:`size · color`,type:`string`,default:`'md' · 'primary'`,description:`크기와 의미 색상입니다.`},{name:`showInfo · label`,type:`boolean · string`,default:`false · —`,description:`상단 레이블과 값을 표시합니다.`},{name:`striped · animated · indeterminate · inside · block`,type:`boolean`,default:`false`,description:`패턴, 애니메이션, 불확정, 내부 값, 전체 너비 옵션입니다.`},{name:`ariaLabel`,type:`string`,default:`'진행률'`,description:`접근성 이름입니다.`}],`Next.js는 @uxkm/react/progress를 재사용합니다.`),E(`ProgressCircle API`,[{name:`percent · color · size · ariaLabel`,type:`number · string`,default:`0 · 'primary' · 'md' · '진행률'`,description:`원형 진행률 값과 표현 옵션입니다.`}]),E(`Vue · Nuxt API`,[{name:`percent · status · size · color`,type:`number · string`,default:`0 · '' · 'md' · 'primary'`,description:`진행률과 표현 상태입니다.`},{name:`show-info · striped · animated · indeterminate · inside · block`,type:`boolean`,default:`false`,description:`선형 진행률 표시 옵션입니다.`}],`Nuxt는 @uxkm/vue/progress를 재사용합니다.`),E(`HTML · Gulp`,[{name:`progress · progress_track · progress_bar`,type:`class`,default:`—`,description:`루트, 트랙, 채움 막대입니다.`},{name:`role · aria-valuenow/min/max`,type:`attribute`,default:`—`,description:`진행률 접근성 속성입니다.`}]),E(`디자인 토큰`,[{name:`--progress-height · --progress-max-width`,type:`length`,default:`8px · input-max-width`,description:`선형 진행률 높이와 최대 너비입니다.`},{name:`--progress-circle-size · --progress-circle-stroke`,type:`length · number`,default:`7.5rem · 6`,description:`원형 진행률 크기와 선 두께입니다.`}]),E(`WebSquare API · XML`,[{name:`w2:group.progress`,type:`XML element · class`,default:`role='progressbar'`,description:`진행률 루트입니다. aria-valuenow/min/max를 함께 사용합니다.`},{name:`progress_track · progress_bar · progress_circle`,type:`class`,default:`—`,description:`선형 트랙·채움 막대와 원형 진행률입니다.`},{name:`progress_striped · progress_animated · is-indeterminate`,type:`class`,default:`—`,description:`줄무늬, 애니메이션, 불확정 상태입니다.`},{name:`progress_fit · progress_block · progress_inside`,type:`class`,default:`—`,description:`너비와 바 안 텍스트 변형입니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function k(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...p(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h,{of:u}),`
`,(0,j.jsx)(t.h1,{id:`progress`,children:`Progress`}),`
`,(0,j.jsx)(t.p,{children:`작업의 진행 상태를 선형 또는 원형으로 표시합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,j.jsxs)(t.p,{children:[`확정 진행률은 `,(0,j.jsx)(t.code,{children:`aria-valuenow`}),`, `,(0,j.jsx)(t.code,{children:`aria-valuemin`}),`, `,(0,j.jsx)(t.code,{children:`aria-valuemax`}),`를 제공하고, 불확정 진행률은 `,(0,j.jsx)(t.code,{children:`aria-busy="true"`}),`를 사용합니다. 원형은 `,(0,j.jsx)(t.code,{children:`ProgressCircle`}),`로 제공합니다.`]}),`
`,(0,j.jsxs)(t.p,{children:[`WebSquare는 선형·원형 진행률을 `,(0,j.jsx)(t.code,{children:`w2:group.progress`}),`, 채움 막대를 `,(0,j.jsx)(t.code,{children:`progress_bar`}),`, 값을 `,(0,j.jsx)(t.code,{children:`w2:textbox`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,j.jsx)(t.code,{children:`w2`}),`, `,(0,j.jsx)(t.code,{children:`xf`}),`, `,(0,j.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,j.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Progress와 ProgressCircle의 실제 원본 구현입니다. React와 Vue는 진행률, 상태 색상, 줄무늬, 불확정, 내부 값 표시를 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`percent`}),`는 0~100으로 클램프합니다.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`striped`}),`·`,(0,j.jsx)(t.code,{children:`animated`}),`·`,(0,j.jsx)(t.code,{children:`indeterminate`}),`로 패턴과 불확정 상태를 표현합니다.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`inside`}),`는 바 안에 값을 표시하고 `,(0,j.jsx)(t.code,{children:`block`}),`은 전체 너비를 사용합니다.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`ProgressCircle`}),`은 원형 진행률 UI를 제공합니다.`]}),`
`]}),`
`,(0,j.jsx)(b,{examples:S,showFullCode:!0}),`
`,(0,j.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`w2:group`}),`에 `,(0,j.jsx)(t.code,{children:`progress`}),`와 `,(0,j.jsx)(t.code,{children:`role="progressbar"`}),`를 적용하고 `,(0,j.jsx)(t.code,{children:`aria-valuenow`}),`로 현재 값을 전달합니다. 채움 너비는 `,(0,j.jsx)(t.code,{children:`progress_bar`}),`의 `,(0,j.jsx)(t.code,{children:`style="width:…%"`}),`로 맞춥니다.`]}),`
`,(0,j.jsxs)(t.p,{children:[`불확정은 `,(0,j.jsx)(t.code,{children:`is-indeterminate`}),` 클래스를, 원형은 `,(0,j.jsx)(t.code,{children:`progress_circle`}),`을 사용합니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,j.jsx)(g,{of:d,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.basic}),`
`,(0,j.jsx)(t.h2,{id:`레이블--값`,children:`레이블 · 값`}),`
`,(0,j.jsx)(g,{of:c,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.label}),`
`,(0,j.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,j.jsx)(g,{of:l,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.color}),`
`,(0,j.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,j.jsx)(g,{of:r,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.size}),`
`,(0,j.jsx)(t.h2,{id:`줄무늬--애니메이션`,children:`줄무늬 · 애니메이션`}),`
`,(0,j.jsx)(g,{of:o,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.striped}),`
`,(0,j.jsx)(t.h2,{id:`불확정`,children:`불확정`}),`
`,(0,j.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.indeterminate}),`
`,(0,j.jsx)(t.h2,{id:`바-안-텍스트`,children:`바 안 텍스트`}),`
`,(0,j.jsx)(g,{of:n,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.inside}),`
`,(0,j.jsx)(t.h2,{id:`원형`,children:`원형`}),`
`,(0,j.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.circle}),`
`,(0,j.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,j.jsx)(g,{of:f,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.width}),`
`,(0,j.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,j.jsxs)(t.p,{children:[`확정 진행률은 `,(0,j.jsx)(t.code,{children:`aria-valuenow`}),`, `,(0,j.jsx)(t.code,{children:`aria-valuemin`}),`, `,(0,j.jsx)(t.code,{children:`aria-valuemax`}),`를 제공하고, 불확정 진행률은 `,(0,j.jsx)(t.code,{children:`aria-busy="true"`}),`를 사용합니다.`]}),`
`,(0,j.jsx)(x,{sections:D})]})}function A(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),m(),_(),v(),y(),w(),O(),i()})))()}M();export{A as default};