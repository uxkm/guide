import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./Pagination.stories-CFh0VaaM.js";import{i as p,r as m}from"./react-CJGa1lBW.js";import{c as h,r as g,u as _}from"./blocks-SMgDWto2.js";import{i as v,n as y,r as b,t as x}from"./ComponentApiDocs-DtZNZjDp.js";import{a as S,d as C,u as w}from"./navigationDocumentationExamples-DpF3E8Gd.js";var T,E,D;function O(){return(O=e((()=>{T=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],E=(e,t,n)=>({title:e,description:n,tables:[{columns:T,rows:t}]}),D=[E(`Pagination API`,[{name:`current · v-model:current`,type:`number`,default:`1`,description:`현재 페이지입니다.`},{name:`total`,type:`number`,default:`1`,description:`전체 항목 수입니다.`},{name:`pageSize`,type:`number`,default:`10`,description:`페이지당 항목 수입니다.`},{name:`onChange · change`,type:`(page) => void`,default:`—`,description:`페이지 변경 이벤트입니다.`},{name:`simple`,type:`boolean`,default:`false`,description:`이전·다음과 현재/전체 페이지만 표시합니다.`},{name:`minimal`,type:`boolean`,default:`false`,description:`테두리를 줄인 가벼운 스타일입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`페이지 컨트롤 크기입니다.`},{name:`round`,type:`boolean`,default:`false`,description:`컨트롤을 원형으로 표시합니다.`},{name:`ariaLabel`,type:`string`,default:`'페이지 이동'`,description:`페이지 내비게이션의 접근 가능한 이름입니다.`}]),E(`HTML · Gulp`,[{name:`data-pagination`,type:`attribute`,default:`—`,description:`페이지 이동 동작을 초기화합니다.`},{name:`data-current · data-total · data-page-size`,type:`number attribute`,default:`1 · 1 · 10`,description:`현재 페이지와 페이지 계산 데이터입니다.`},{name:`pagination:change`,type:`CustomEvent`,default:`—`,description:`변경된 current와 totalPages를 detail로 전달합니다.`},{name:`pagination_align-center · pagination_align-end`,type:`class`,default:`—`,description:`가운데 및 오른쪽 정렬 클래스입니다.`}]),E(`디자인 토큰`,[{name:`--pagination-item-min-size`,type:`length`,default:`2rem`,description:`페이지 버튼의 최소 크기입니다.`},{name:`--pagination-gap`,type:`length`,default:`0.25rem`,description:`페이지 버튼 간격입니다.`},{name:`--pagination-bg-active · --pagination-color-active`,type:`color`,default:`accent · on-accent`,description:`현재 페이지 배경과 텍스트 색상입니다.`}]),E(`WebSquare API · XML`,[{name:`w2:group.pagination`,type:`XML element · class`,default:`role='navigation'`,description:`Pagination 루트입니다. pagination_simple·pagination_round 등을 조합합니다.`},{name:`xf:trigger.pagination_item`,type:`XML element · class`,default:`—`,description:`페이지 번호와 이전·다음 버튼입니다.`},{name:`aria-current="page"`,type:`ARIA`,default:`—`,description:`현재 페이지를 표시합니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`페이지 이동을 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function k(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...p(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h,{of:n}),`
`,(0,j.jsx)(t.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,j.jsx)(t.p,{children:`여러 페이지의 콘텐츠를 번호, 이전·다음 버튼 또는 간단한 현재/전체 표시로 탐색합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,j.jsxs)(t.p,{children:[`현재 페이지는 `,(0,j.jsx)(t.code,{children:`aria-current="page"`}),`, 처음과 마지막의 이동 버튼은 `,(0,j.jsx)(t.code,{children:`disabled`}),`로 표시합니다. 모든 페이지 번호와 아이콘 버튼에 구체적인 접근 가능한 이름을 제공합니다.`]}),`
`,(0,j.jsxs)(t.p,{children:[`WebSquare는 페이지 탐색을 `,(0,j.jsx)(t.code,{children:`w2:group.pagination`}),`, 번호·이전·다음을 `,(0,j.jsx)(t.code,{children:`xf:trigger.pagination_item`}),`으로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,j.jsx)(t.code,{children:`w2`}),`, `,(0,j.jsx)(t.code,{children:`xf`}),`, `,(0,j.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,j.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Pagination의 실제 원본 구현입니다. React와 Vue는 기본·미니멀·심플 변형, 크기, 둥근 스타일, 생략과 정렬을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`simple`}),`은 현재/전체와 이전·다음만 표시합니다.`]}),`
`,(0,j.jsxs)(t.li,{children:[`현재 페이지는 `,(0,j.jsx)(t.code,{children:`aria-current="page"`}),`와 `,(0,j.jsx)(t.code,{children:`is-active`}),`를 함께 사용합니다.`]}),`
`,(0,j.jsx)(t.li,{children:`경계에서는 이전·다음 버튼을 비활성화합니다.`}),`
`]}),`
`,(0,j.jsx)(b,{examples:w,showFullCode:!0}),`
`,(0,j.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`w2:group.pagination`}),`에 `,(0,j.jsx)(t.code,{children:`role="navigation"`}),`을 적용하고 페이지 버튼을 `,(0,j.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다. 이동은 `,(0,j.jsx)(t.code,{children:`ev:onclick`}),`에서 화면 스크립트에 연결합니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,j.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.basic}),`
`,(0,j.jsx)(t.h2,{id:`미니멀`,children:`미니멀`}),`
`,(0,j.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.minimal}),`
`,(0,j.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,j.jsx)(g,{of:r,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.size}),`
`,(0,j.jsx)(t.h2,{id:`둥근`,children:`둥근`}),`
`,(0,j.jsx)(g,{of:c,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.round}),`
`,(0,j.jsx)(t.h2,{id:`페이지-생략`,children:`페이지 생략`}),`
`,(0,j.jsx)(g,{of:l,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.ellipsis}),`
`,(0,j.jsx)(t.h2,{id:`심플`,children:`심플`}),`
`,(0,j.jsx)(g,{of:u,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.simple}),`
`,(0,j.jsx)(t.h2,{id:`툴바-조합`,children:`툴바 조합`}),`
`,(0,j.jsx)(g,{of:f,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.toolbar}),`
`,(0,j.jsx)(t.h2,{id:`정렬`,children:`정렬`}),`
`,(0,j.jsx)(g,{of:d,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.align}),`
`,(0,j.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,j.jsx)(g,{of:o,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.state}),`
`,(0,j.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,j.jsxs)(t.p,{children:[`현재 페이지는 `,(0,j.jsx)(t.code,{children:`aria-current="page"`}),`, 처음과 마지막의 이동 버튼은 `,(0,j.jsx)(t.code,{children:`disabled`}),`로 표시합니다. 모든 페이지 번호와 아이콘 버튼에 구체적인 접근 가능한 이름을 제공합니다.`]}),`
`,(0,j.jsx)(x,{sections:D})]})}function A(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),m(),_(),v(),y(),S(),O(),i()})))()}M();export{A as default};