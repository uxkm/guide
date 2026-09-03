import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./BackTop.stories-DJpWJkNX.js";import{i as l,r as u}from"./react-DPG3xyh1.js";import{c as d,r as f,u as p}from"./blocks-BXsfpknd.js";import{i as m,n as h,r as g,t as _}from"./ComponentApiDocs-BKc5okVC.js";import{a as v,d as y,o as b}from"./miscellaneousDocumentationExamples-Ba9fQW5W.js";var x,S,C;function w(){return(w=e((()=>{x=[{key:`name`,label:`이름`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],S=(e,t,n)=>({title:e,description:n,tables:[{columns:x,rows:t}]}),C=[S(`BackTop API`,[{name:`target`,type:`string`,default:`window`,description:`스크롤 컨테이너 선택자입니다.`},{name:`visibilityHeight`,type:`number | string`,default:`400`,description:`버튼 표시 임계값(px)입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`버튼 크기입니다.`},{name:`color`,type:`'' | 'primary' | 'ghost'`,default:`''`,description:`버튼 스킨입니다.`},{name:`label`,type:`string`,default:`—`,description:`아이콘 옆 텍스트입니다.`},{name:`ariaLabel`,type:`string`,default:`'맨 위로'`,description:`버튼 접근성 이름입니다.`},{name:`interactive`,type:`boolean`,default:`true`,description:`스크롤 런타임 활성 여부입니다.`}]),S(`HTML · 상태`,[{name:`data-back-top`,type:`attribute`,default:`—`,description:`BackTop을 초기화합니다.`},{name:`data-target`,type:`attribute`,default:`window`,description:`스크롤 컨테이너를 연결합니다.`},{name:`data-visibility-height`,type:`attribute`,default:`400`,description:`표시 임계값을 설정합니다.`},{name:`is-visible`,type:`class`,default:`—`,description:`임계값을 넘으면 런타임이 적용합니다.`}]),S(`WebSquare API · XML`,[{name:`w2:group.back_top`,type:`XML element · class`,default:`—`,description:`BackTop 루트입니다. data-target과 data-visibility-height로 표시 조건을 설정합니다.`},{name:`xf:trigger.back_top_btn`,type:`XML element · class`,default:`—`,description:`맨 위로 이동 버튼입니다. aria-label로 동작을 설명합니다.`},{name:`back_top_sm · back_top_lg · back_top_primary`,type:`class`,default:`—`,description:`크기와 색상 변형입니다.`},{name:`is-visible`,type:`class`,default:`—`,description:`임계값을 넘으면 표시되는 상태입니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`상단 스크롤을 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function T(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(d,{of:c}),`
`,(0,D.jsx)(t.h1,{id:`backtop`,children:`BackTop`}),`
`,(0,D.jsx)(t.p,{children:`스크롤 후 페이지 또는 컨테이너 상단으로 부드럽게 이동하는 플로팅 버튼입니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,D.jsxs)(t.p,{children:[`아이콘만 사용하는 버튼에는 동작을 설명하는 `,(0,D.jsx)(t.code,{children:`aria-label`}),`이 필요합니다. 키보드로 버튼에 접근하고 실행할 수 있어야 합니다.`]}),`
`,(0,D.jsxs)(t.p,{children:[`WebSquare는 루트를 `,(0,D.jsx)(t.code,{children:`w2:group.back_top`}),`, 버튼을 `,(0,D.jsx)(t.code,{children:`xf:trigger.back_top_btn`}),`으로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,D.jsx)(t.code,{children:`w2`}),`, `,(0,D.jsx)(t.code,{children:`xf`}),`, `,(0,D.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,D.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,D.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 BackTop의 실제 원본 구현입니다. React와 Vue는 표시 임계값, 크기, 색상, 커스텀 콘텐츠와 스크롤 대상을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`visibilityHeight`}),`로 버튼 표시 임계값을 설정합니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`target`}),`으로 페이지 또는 컨테이너 스크롤을 지정합니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[`아이콘 전용 버튼은 `,(0,D.jsx)(t.code,{children:`aria-label`}),`로 동작을 설명합니다.`]}),`
`]}),`
`,(0,D.jsx)(g,{examples:v,showFullCode:!0}),`
`,(0,D.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.code,{children:`w2:group.back_top`}),`에 `,(0,D.jsx)(t.code,{children:`data-target`}),`과 `,(0,D.jsx)(t.code,{children:`data-visibility-height`}),`를 적용하고 버튼은 `,(0,D.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,D.jsx)(t.code,{children:`ev:onclick`}),`에서 상단으로 스크롤합니다. 아이콘만 사용할 때는 `,(0,D.jsx)(t.code,{children:`aria-label`}),`을 반드시 제공합니다.`]}),`
`,(0,D.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,D.jsx)(f,{of:i,sourceState:`none`}),`
`,(0,D.jsx)(g,{examples:b.basic}),`
`,(0,D.jsx)(t.h2,{id:`표시-임계값`,children:`표시 임계값`}),`
`,(0,D.jsx)(f,{of:n,sourceState:`none`}),`
`,(0,D.jsx)(g,{examples:b.visibility}),`
`,(0,D.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,D.jsx)(f,{of:r,sourceState:`none`}),`
`,(0,D.jsx)(g,{examples:b.size}),`
`,(0,D.jsx)(t.h2,{id:`커스텀-콘텐츠`,children:`커스텀 콘텐츠`}),`
`,(0,D.jsx)(f,{of:o,sourceState:`none`}),`
`,(0,D.jsx)(g,{examples:b.custom}),`
`,(0,D.jsx)(t.h2,{id:`페이지-스크롤`,children:`페이지 스크롤`}),`
`,(0,D.jsx)(f,{of:a,sourceState:`none`}),`
`,(0,D.jsx)(g,{examples:b.window}),`
`,(0,D.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,D.jsxs)(t.p,{children:[`아이콘만 사용하는 버튼에는 동작을 설명하는 `,(0,D.jsx)(t.code,{children:`aria-label`}),`이 필요합니다. 키보드로 버튼에 접근하고 실행할 수 있어야 합니다.`]}),`
`,(0,D.jsx)(_,{sections:C})]})}function E(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;function O(){return(O=e((()=>{D=t(),u(),p(),m(),h(),y(),w(),s()})))()}O();export{E as default};