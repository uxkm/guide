import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,n as a,o,r as s,s as c,t as l}from"./Breadcrumb.stories-DHj1JUkS.js";import{i as u,r as d}from"./react-CbOw9eUO.js";import{c as f,r as p,u as m}from"./blocks-BToPoJhg.js";import{i as h,n as g,r as _,t as v}from"./ComponentApiDocs-DfTaPA3Z.js";import{a as y,n as b,t as x}from"./navigationDocumentationExamples-DpF3E8Gd.js";var S,C,w;function T(){return(T=e((()=>{S=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],C=(e,t,n)=>({title:e,description:n,tables:[{columns:S,rows:t}]}),w=[C(`Breadcrumb API`,[{name:`items`,type:`BreadcrumbItemData[]`,default:`[]`,description:`데이터 기반 경로 항목입니다. 마지막 항목은 기본적으로 현재 위치가 됩니다.`},{name:`ariaLabel`,type:`string`,default:`'경로'`,description:`경로 내비게이션의 접근 가능한 이름입니다.`},{name:`separator`,type:`'chevron' | 'slash' | 'dot'`,default:`'chevron'`,description:`항목 사이 구분자입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`Breadcrumb 텍스트 크기입니다.`},{name:`children · default slot`,type:`ReactNode · slot`,default:`—`,description:`BreadcrumbItem을 직접 조합하는 영역입니다.`}]),C(`BreadcrumbItem API`,[{name:`label · children · default slot`,type:`string · ReactNode · slot`,default:`—`,description:`항목 텍스트 또는 아이콘을 포함한 커스텀 콘텐츠입니다.`},{name:`href`,type:`string`,default:`—`,description:`이전 경로의 링크입니다.`},{name:`current`,type:`boolean`,default:`false`,description:`현재 페이지이며 aria-current="page"를 적용합니다.`},{name:`disabled`,type:`boolean`,default:`false`,description:`이동할 수 없는 경로 상태입니다.`},{name:`icon`,type:`boolean · ReactNode`,default:`false`,description:`아이콘 전용 링크 스타일 또는 React 아이콘 콘텐츠입니다.`},{name:`ariaLabel`,type:`string`,default:`—`,description:`아이콘 전용 링크의 접근 가능한 이름입니다.`}]),C(`BreadcrumbEllipsis API`,[{name:`expanded`,type:`boolean`,default:`false`,description:`숨겨진 경로가 펼쳐졌는지 나타냅니다.`},{name:`label`,type:`string`,default:`'숨겨진 경로 보기'`,description:`생략 버튼의 접근 가능한 이름입니다.`},{name:`onClick · @click`,type:`handler`,default:`—`,description:`숨겨진 경로 표시 상태를 전환합니다.`}]),C(`HTML · Gulp`,[{name:`breadcrumb_list · breadcrumb_item`,type:`class`,default:`—`,description:`순서가 있는 경로 목록 구조입니다.`},{name:`breadcrumb_link · breadcrumb_current`,type:`class`,default:`—`,description:`이전 경로 링크와 현재 위치입니다.`},{name:`breadcrumb_ellipsis · data-breadcrumb-hidden`,type:`class · attribute`,default:`—`,description:`긴 경로의 생략 버튼과 숨김 항목입니다.`}]),C(`디자인 토큰`,[{name:`--breadcrumb-font-size`,type:`length`,default:`text-size-sm`,description:`기본 글자 크기입니다.`},{name:`--breadcrumb-gap · --breadcrumb-icon-gap`,type:`length`,default:`space-xs · 0.25rem`,description:`항목 및 아이콘 간격입니다.`},{name:`--breadcrumb-link-max-width`,type:`length`,default:`12rem`,description:`긴 항목이 말줄임되는 최대 너비입니다.`}]),C(`WebSquare API · XML`,[{name:`w2:group.breadcrumb`,type:`XML element · class`,default:`tagname='nav'`,description:`Breadcrumb 루트입니다. aria-label로 경로 이름을 제공합니다.`},{name:`breadcrumb_list · breadcrumb_item · breadcrumb_separator`,type:`class`,default:`—`,description:`경로 목록, 항목, 구분자입니다.`},{name:`xf:trigger.breadcrumb_ellipsis`,type:`XML element · class`,default:`—`,description:`중간 경로 생략 버튼입니다.`},{name:`aria-current="page"`,type:`ARIA`,default:`—`,description:`현재 위치 항목을 표시합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function E(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...u(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f,{of:a}),`
`,(0,O.jsx)(t.h1,{id:`breadcrumb`,children:`Breadcrumb`}),`
`,(0,O.jsx)(t.p,{children:`현재 페이지까지의 계층 경로를 링크, 현재 위치, 생략 상태로 표시합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,O.jsxs)(t.p,{children:[`경로 전체는 `,(0,O.jsx)(t.code,{children:`nav`}),`와 `,(0,O.jsx)(t.code,{children:`ol`}),`로 구성합니다. 현재 위치는 `,(0,O.jsx)(t.code,{children:`aria-current="page"`}),`, 비활성 항목은 `,(0,O.jsx)(t.code,{children:`aria-disabled="true"`}),`를 사용합니다. 아이콘 전용 링크와 생략 버튼에는 동작을 설명하는 이름을 제공합니다.`]}),`
`,(0,O.jsxs)(t.p,{children:[`WebSquare는 경로를 `,(0,O.jsx)(t.code,{children:`w2:group.breadcrumb`}),`, 항목·구분자를 `,(0,O.jsx)(t.code,{children:`w2:textbox`}),`, 생략을 `,(0,O.jsx)(t.code,{children:`xf:trigger.breadcrumb_ellipsis`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,O.jsx)(t.code,{children:`w2`}),`, `,(0,O.jsx)(t.code,{children:`xf`}),`, `,(0,O.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,O.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,O.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Breadcrumb와 BreadcrumbItem·BreadcrumbEllipsis의 실제 원본 구현입니다. React와 Vue는 구분자, 크기, 홈 아이콘, 경로 생략과 현재·비활성 상태를 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`현재 위치는 `,(0,O.jsx)(t.code,{children:`aria-current="page"`}),`와 `,(0,O.jsx)(t.code,{children:`is-current`}),`를 함께 사용합니다.`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`BreadcrumbEllipsis`}),`로 중간 경로를 접습니다.`]}),`
`,(0,O.jsx)(t.li,{children:`아이콘 전용 링크에는 접근 가능한 이름을 제공합니다.`}),`
`]}),`
`,(0,O.jsx)(_,{examples:x,showFullCode:!0}),`
`,(0,O.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(t.code,{children:`w2:group.breadcrumb`}),`에 `,(0,O.jsx)(t.code,{children:`tagname="nav"`}),`와 `,(0,O.jsx)(t.code,{children:`aria-label`}),`을 적용합니다. 현재 위치는 `,(0,O.jsx)(t.code,{children:`aria-current="page"`}),`로 표시하고, 생략은 `,(0,O.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,O.jsx)(t.code,{children:`ev:onclick`}),`에서 펼칩니다.`]}),`
`,(0,O.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,O.jsx)(p,{of:l,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.basic}),`
`,(0,O.jsx)(t.h2,{id:`구분자`,children:`구분자`}),`
`,(0,O.jsx)(p,{of:n,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.separator}),`
`,(0,O.jsx)(t.h2,{id:`홈-아이콘`,children:`홈 아이콘`}),`
`,(0,O.jsx)(p,{of:i,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.icon}),`
`,(0,O.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,O.jsx)(p,{of:o,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.size}),`
`,(0,O.jsx)(t.h2,{id:`경로-생략`,children:`경로 생략`}),`
`,(0,O.jsx)(p,{of:s,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.ellipsis}),`
`,(0,O.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,O.jsx)(p,{of:c,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.state}),`
`,(0,O.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,O.jsxs)(t.p,{children:[`경로 전체는 `,(0,O.jsx)(t.code,{children:`nav`}),`와 `,(0,O.jsx)(t.code,{children:`ol`}),`로 구성합니다. 현재 위치는 `,(0,O.jsx)(t.code,{children:`aria-current="page"`}),`, 비활성 항목은 `,(0,O.jsx)(t.code,{children:`aria-disabled="true"`}),`를 사용합니다. 아이콘 전용 링크와 생략 버튼에는 동작을 설명하는 이름을 제공합니다.`]}),`
`,(0,O.jsx)(v,{sections:w})]})}function D(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;function k(){return(k=e((()=>{O=t(),d(),m(),h(),g(),y(),T(),r()})))()}k();export{D as default};