import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./Navbar.stories-DeKlP4uf.js";import{i as m,r as h}from"./react-DPG3xyh1.js";import{c as g,r as _,u as v}from"./blocks-BXsfpknd.js";import{i as y,n as b,r as x,t as S}from"./ComponentApiDocs-BKc5okVC.js";import{a as C,c as w,l as T}from"./navigationDocumentationExamples-hdv7lNDf.js";var E,D,O;function k(){return(k=e((()=>{E=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],D=(e,t,n)=>({title:e,description:n,tables:[{columns:E,rows:t}]}),O=[D(`Navbar API`,[{name:`brand · brandContent · #brand`,type:`string · ReactNode · slot`,default:`—`,description:`브랜드 텍스트 또는 커스텀 콘텐츠입니다.`},{name:`brandSrc · brandAlt`,type:`string`,default:`—`,description:`로고 이미지 URL과 img alt 텍스트입니다.`},{name:`brandBackground`,type:`string`,default:`—`,description:`CSS background-image URL입니다. navbar_brand-bg 클래스와 --navbar-brand-bg-image 토큰을 사용합니다.`},{name:`brandIcon · #brand-icon`,type:`ReactNode · slot`,default:`—`,description:`브랜드 앞 Icon 영역입니다.`},{name:`items · #items`,type:`ReactNode · slot`,default:`—`,description:`NavbarList 메뉴 영역입니다.`},{name:`search · #search`,type:`ReactNode · slot`,default:`—`,description:`검색 Input 영역입니다.`},{name:`actions · #actions`,type:`ReactNode · slot`,default:`—`,description:`버튼 등 액션 영역입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`내비게이션 높이입니다.`},{name:`borderless · dark · sticky`,type:`boolean`,default:`false`,description:`테두리, 어두운 면, 상단 고정 변형입니다.`},{name:`responsive · collapseId`,type:`boolean · string`,default:`false · auto`,description:`모바일 접기 동작과 패널 ID입니다.`}]),D(`NavbarItem · NavbarList API`,[{name:`label · children`,type:`string · ReactNode`,default:`—`,description:`메뉴 항목 내용입니다.`},{name:`href · active`,type:`string · boolean`,default:`'#' · false`,description:`링크와 현재 페이지 상태입니다.`},{name:`badge · #badge`,type:`ReactNode · slot`,default:`—`,description:`메뉴 항목 Badge 영역입니다.`}]),D(`HTML · Gulp`,[{name:`navbar_container · navbar_collapse`,type:`class`,default:`—`,description:`Navbar 내부 레이아웃과 접이식 패널입니다.`},{name:`navbar_list · navbar_item · navbar_link`,type:`class`,default:`—`,description:`메뉴 목록 구조입니다.`},{name:`is-open · is-active`,type:`class`,default:`—`,description:`모바일 패널과 현재 메뉴 상태입니다.`}]),D(`디자인 토큰`,[{name:`--navbar-height · --navbar-padding-x`,type:`length`,default:`header-height · space-lg`,description:`높이와 좌우 여백입니다.`},{name:`--navbar-gap · --navbar-search-width`,type:`length`,default:`space-md · 12rem`,description:`요소 간격과 검색 너비입니다.`},{name:`--navbar-brand-image-height · --navbar-brand-image-max-width`,type:`length`,default:`2.9375rem · 6.875rem`,description:`브랜드 img 높이와 최대 너비입니다. Storybook 좌측 로고(110×47px) 기준입니다.`},{name:`--navbar-brand-image-filter`,type:`filter`,default:`invert(1)`,description:`밝은 Navbar에서 흰색 SVG 로고를 보이게 합니다. navbar_dark에서는 none으로 재정의됩니다.`},{name:`--navbar-brand-bg-image · --navbar-brand-bg-size`,type:`image · size`,default:`none · contain`,description:`background 로고 이미지와 크기 조절입니다.`}]),D(`WebSquare API · XML`,[{name:`w2:group.navbar`,type:`XML element · class`,default:`—`,description:`Navbar 루트입니다. brand·list·search·actions 영역을 포함합니다.`},{name:`navbar_list · navbar_link · is-active`,type:`class`,default:`—`,description:`메뉴 목록과 현재 페이지 상태입니다.`},{name:`xf:input.navbar_search · xf:trigger`,type:`XML element`,default:`—`,description:`검색 입력과 액션·토글 버튼을 구성합니다.`},{name:`aria-current · aria-expanded · aria-controls`,type:`ARIA`,default:`—`,description:`현재 메뉴와 반응형 패널 연결입니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function A(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...m(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(g,{of:d}),`
`,(0,M.jsx)(t.h1,{id:`navbar`,children:`Navbar`}),`
`,(0,M.jsx)(t.p,{children:`사이트와 앱의 브랜드, 주요 메뉴, 검색 및 액션을 상단 영역에 구성합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,M.jsxs)(t.p,{children:[`현재 메뉴는 `,(0,M.jsx)(t.code,{children:`aria-current="page"`}),`로 표시합니다. 반응형 토글은 `,(0,M.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,M.jsx)(t.code,{children:`aria-controls`}),`, 상태에 맞는 접근 가능한 이름을 제공하며 버튼 클릭으로 메뉴를 열고 닫습니다.`]}),`
`,(0,M.jsxs)(t.p,{children:[`WebSquare는 헤더를 `,(0,M.jsx)(t.code,{children:`w2:group.navbar`}),`, 메뉴·검색·액션을 `,(0,M.jsx)(t.code,{children:`w2:group`}),`/`,(0,M.jsx)(t.code,{children:`xf:input`}),`/`,(0,M.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,M.jsx)(t.code,{children:`w2`}),`, `,(0,M.jsx)(t.code,{children:`xf`}),`, `,(0,M.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,M.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,M.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Navbar와 NavbarList·NavbarItem의 실제 원본 구현입니다. React와 Vue는 브랜드, 메뉴, 검색, 액션, 크기·변형과 반응형 접기를 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`size`}),`는 `,(0,M.jsx)(t.code,{children:`navbar_sm`}),`·`,(0,M.jsx)(t.code,{children:`navbar_lg`}),` 클래스로 변환합니다.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`responsive`}),`는 접이식 패널과 토글 버튼의 접근성 속성을 연결합니다.`]}),`
`,(0,M.jsxs)(t.li,{children:[`현재 항목은 `,(0,M.jsx)(t.code,{children:`aria-current="page"`}),`와 `,(0,M.jsx)(t.code,{children:`is-active`}),`를 함께 사용합니다.`]}),`
`]}),`
`,(0,M.jsx)(x,{examples:w,showFullCode:!0}),`
`,(0,M.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`w2:group`}),`에 `,(0,M.jsx)(t.code,{children:`navbar`}),`를 적용하고 브랜드·목록·검색·액션 영역을 배치합니다. 현재 메뉴는 `,(0,M.jsx)(t.code,{children:`aria-current="page"`}),`로 표시하고, 반응형 토글은 `,(0,M.jsx)(t.code,{children:`aria-expanded`}),`·`,(0,M.jsx)(t.code,{children:`aria-controls`}),`를 화면 스크립트와 동기화합니다.`]}),`
`,(0,M.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,M.jsx)(_,{of:u,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.basic}),`
`,(0,M.jsx)(t.h2,{id:`브랜드`,children:`브랜드`}),`
`,(0,M.jsx)(t.p,{children:`텍스트와 Icon을 함께 표시하는 기본 형태입니다.`}),`
`,(0,M.jsx)(_,{of:o,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.brand}),`
`,(0,M.jsx)(t.h2,{id:`브랜드-이미지`,children:`브랜드 이미지`}),`
`,(0,M.jsxs)(t.p,{children:[`Storybook 좌측 상단과 동일한 UXKM 손글씨 로고(`,(0,M.jsx)(t.code,{children:`uxkm_logo_hand.svg`}),`)를 `,(0,M.jsx)(t.code,{children:`<img>`}),`(`,(0,M.jsx)(t.code,{children:`brandSrc`}),`)로 표시합니다. 흰색 SVG는 밝은 Navbar에서 `,(0,M.jsx)(t.code,{children:`--navbar-brand-image-filter: invert(1)`}),`로 반전되어 보입니다.`]}),`
`,(0,M.jsx)(_,{of:l,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.brandImage}),`
`,(0,M.jsx)(t.h2,{id:`브랜드-배경`,children:`브랜드 배경`}),`
`,(0,M.jsxs)(t.p,{children:[`동일한 로고를 CSS `,(0,M.jsx)(t.code,{children:`background-image`}),`(`,(0,M.jsx)(t.code,{children:`brandBackground`}),`)로 표시합니다.`]}),`
`,(0,M.jsx)(_,{of:n,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.brandBackground}),`
`,(0,M.jsx)(t.h2,{id:`액션-영역`,children:`액션 영역`}),`
`,(0,M.jsx)(_,{of:f,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.actions}),`
`,(0,M.jsx)(t.h2,{id:`검색`,children:`검색`}),`
`,(0,M.jsx)(_,{of:s,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.search}),`
`,(0,M.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,M.jsx)(_,{of:p,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.size}),`
`,(0,M.jsx)(t.h2,{id:`스타일-변형`,children:`스타일 변형`}),`
`,(0,M.jsx)(_,{of:i,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.variant}),`
`,(0,M.jsx)(t.h2,{id:`배지`,children:`배지`}),`
`,(0,M.jsx)(_,{of:c,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.badge}),`
`,(0,M.jsx)(t.h2,{id:`반응형`,children:`반응형`}),`
`,(0,M.jsx)(_,{of:r,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.responsive}),`
`,(0,M.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,M.jsxs)(t.p,{children:[`현재 메뉴는 `,(0,M.jsx)(t.code,{children:`aria-current="page"`}),`로 표시합니다. 반응형 토글은 `,(0,M.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,M.jsx)(t.code,{children:`aria-controls`}),`, 상태에 맞는 접근 가능한 이름을 제공하며 버튼 클릭으로 메뉴를 열고 닫습니다.`]}),`
`,(0,M.jsx)(S,{sections:O})]})}function j(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=t(),h(),v(),y(),b(),C(),k(),a()})))()}N();export{j as default};