import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./Navbar.stories-DAHU2_bS.js";import{i as f,r as p}from"./react-BBfuIdny.js";import{c as m,r as h,u as g}from"./blocks-DbhChoan.js";import{i as _,n as v,r as y,t as b}from"./ComponentApiDocs-arf-yre-.js";import{a as x,c as S,l as C}from"./navigationDocumentationExamples-DpF3E8Gd.js";var w,T,E;function D(){return(D=e((()=>{w=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],T=(e,t,n)=>({title:e,description:n,tables:[{columns:w,rows:t}]}),E=[T(`Navbar API`,[{name:`brand · brandContent · #brand`,type:`string · ReactNode · slot`,default:`—`,description:`브랜드 텍스트 또는 커스텀 콘텐츠입니다.`},{name:`brandIcon · #brand-icon`,type:`ReactNode · slot`,default:`—`,description:`브랜드 앞 Icon 영역입니다.`},{name:`items · #items`,type:`ReactNode · slot`,default:`—`,description:`NavbarList 메뉴 영역입니다.`},{name:`search · #search`,type:`ReactNode · slot`,default:`—`,description:`검색 Input 영역입니다.`},{name:`actions · #actions`,type:`ReactNode · slot`,default:`—`,description:`버튼 등 액션 영역입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`내비게이션 높이입니다.`},{name:`borderless · dark · sticky`,type:`boolean`,default:`false`,description:`테두리, 어두운 면, 상단 고정 변형입니다.`},{name:`responsive · collapseId`,type:`boolean · string`,default:`false · auto`,description:`모바일 접기 동작과 패널 ID입니다.`}]),T(`NavbarItem · NavbarList API`,[{name:`label · children`,type:`string · ReactNode`,default:`—`,description:`메뉴 항목 내용입니다.`},{name:`href · active`,type:`string · boolean`,default:`'#' · false`,description:`링크와 현재 페이지 상태입니다.`},{name:`badge · #badge`,type:`ReactNode · slot`,default:`—`,description:`메뉴 항목 Badge 영역입니다.`}]),T(`HTML · Gulp`,[{name:`navbar_container · navbar_collapse`,type:`class`,default:`—`,description:`Navbar 내부 레이아웃과 접이식 패널입니다.`},{name:`navbar_list · navbar_item · navbar_link`,type:`class`,default:`—`,description:`메뉴 목록 구조입니다.`},{name:`is-open · is-active`,type:`class`,default:`—`,description:`모바일 패널과 현재 메뉴 상태입니다.`}]),T(`디자인 토큰`,[{name:`--navbar-height · --navbar-padding-x`,type:`length`,default:`header-height · space-lg`,description:`높이와 좌우 여백입니다.`},{name:`--navbar-gap · --navbar-search-width`,type:`length`,default:`space-md · 12rem`,description:`요소 간격과 검색 너비입니다.`}]),T(`WebSquare API · XML`,[{name:`w2:group.navbar`,type:`XML element · class`,default:`—`,description:`Navbar 루트입니다. brand·list·search·actions 영역을 포함합니다.`},{name:`navbar_list · navbar_link · is-active`,type:`class`,default:`—`,description:`메뉴 목록과 현재 페이지 상태입니다.`},{name:`xf:input.navbar_search · xf:trigger`,type:`XML element`,default:`—`,description:`검색 입력과 액션·토글 버튼을 구성합니다.`},{name:`aria-current · aria-expanded · aria-controls`,type:`ARIA`,default:`—`,description:`현재 메뉴와 반응형 패널 연결입니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function O(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...f(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m,{of:n}),`
`,(0,A.jsx)(t.h1,{id:`navbar`,children:`Navbar`}),`
`,(0,A.jsx)(t.p,{children:`사이트와 앱의 브랜드, 주요 메뉴, 검색 및 액션을 상단 영역에 구성합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,A.jsxs)(t.p,{children:[`현재 메뉴는 `,(0,A.jsx)(t.code,{children:`aria-current="page"`}),`로 표시합니다. 반응형 토글은 `,(0,A.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,A.jsx)(t.code,{children:`aria-controls`}),`, 상태에 맞는 접근 가능한 이름을 제공하며 버튼 클릭으로 메뉴를 열고 닫습니다.`]}),`
`,(0,A.jsxs)(t.p,{children:[`WebSquare는 헤더를 `,(0,A.jsx)(t.code,{children:`w2:group.navbar`}),`, 메뉴·검색·액션을 `,(0,A.jsx)(t.code,{children:`w2:group`}),`/`,(0,A.jsx)(t.code,{children:`xf:input`}),`/`,(0,A.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,A.jsx)(t.code,{children:`w2`}),`, `,(0,A.jsx)(t.code,{children:`xf`}),`, `,(0,A.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,A.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,A.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Navbar와 NavbarList·NavbarItem의 실제 원본 구현입니다. React와 Vue는 브랜드, 메뉴, 검색, 액션, 크기·변형과 반응형 접기를 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.code,{children:`size`}),`는 `,(0,A.jsx)(t.code,{children:`navbar_sm`}),`·`,(0,A.jsx)(t.code,{children:`navbar_lg`}),` 클래스로 변환합니다.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.code,{children:`responsive`}),`는 접이식 패널과 토글 버튼의 접근성 속성을 연결합니다.`]}),`
`,(0,A.jsxs)(t.li,{children:[`현재 항목은 `,(0,A.jsx)(t.code,{children:`aria-current="page"`}),`와 `,(0,A.jsx)(t.code,{children:`is-active`}),`를 함께 사용합니다.`]}),`
`]}),`
`,(0,A.jsx)(y,{examples:S,showFullCode:!0}),`
`,(0,A.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`w2:group`}),`에 `,(0,A.jsx)(t.code,{children:`navbar`}),`를 적용하고 브랜드·목록·검색·액션 영역을 배치합니다. 현재 메뉴는 `,(0,A.jsx)(t.code,{children:`aria-current="page"`}),`로 표시하고, 반응형 토글은 `,(0,A.jsx)(t.code,{children:`aria-expanded`}),`·`,(0,A.jsx)(t.code,{children:`aria-controls`}),`를 화면 스크립트와 동기화합니다.`]}),`
`,(0,A.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,A.jsx)(h,{of:c,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.basic}),`
`,(0,A.jsx)(t.h2,{id:`브랜드`,children:`브랜드`}),`
`,(0,A.jsx)(h,{of:i,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.brand}),`
`,(0,A.jsx)(t.h2,{id:`액션-영역`,children:`액션 영역`}),`
`,(0,A.jsx)(h,{of:u,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.actions}),`
`,(0,A.jsx)(t.h2,{id:`검색`,children:`검색`}),`
`,(0,A.jsx)(h,{of:l,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.search}),`
`,(0,A.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,A.jsx)(h,{of:r,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.size}),`
`,(0,A.jsx)(t.h2,{id:`스타일-변형`,children:`스타일 변형`}),`
`,(0,A.jsx)(h,{of:a,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.variant}),`
`,(0,A.jsx)(t.h2,{id:`배지`,children:`배지`}),`
`,(0,A.jsx)(h,{of:o,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.badge}),`
`,(0,A.jsx)(t.h2,{id:`반응형`,children:`반응형`}),`
`,(0,A.jsx)(h,{of:s,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.responsive}),`
`,(0,A.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,A.jsxs)(t.p,{children:[`현재 메뉴는 `,(0,A.jsx)(t.code,{children:`aria-current="page"`}),`로 표시합니다. 반응형 토글은 `,(0,A.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,A.jsx)(t.code,{children:`aria-controls`}),`, 상태에 맞는 접근 가능한 이름을 제공하며 버튼 클릭으로 메뉴를 열고 닫습니다.`]}),`
`,(0,A.jsx)(b,{sections:E})]})}function k(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;function j(){return(j=e((()=>{A=t(),p(),g(),_(),v(),x(),D(),d()})))()}j();export{k as default};