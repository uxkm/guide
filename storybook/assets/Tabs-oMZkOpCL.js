import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,g as o,h as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,t as g,u as _}from"./Tabs.stories-BQC4ksiQ.js";import{i as v,r as y}from"./react-CJGa1lBW.js";import{c as b,r as x,u as S}from"./blocks-SMgDWto2.js";import{i as C,n as w,r as T,t as E}from"./ComponentApiDocs-DtZNZjDp.js";import{a as D,h as O,m as k}from"./navigationDocumentationExamples-DpF3E8Gd.js";var A,j,M;function N(){return(N=e((()=>{A=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],j=(e,t,n)=>({title:e,description:n,tables:[{columns:A,rows:t}]}),M=[j(`Tabs API`,[{name:`mode`,type:`'panels' | 'dynamic'`,default:`'panels'`,description:`개별 패널 또는 단일 동적 패널 방식입니다.`},{name:`value · defaultValue · v-model`,type:`string | number`,default:`—`,description:`선택 탭 값입니다.`},{name:`variant`,type:`'line' | 'card' | 'pill'`,default:`'line'`,description:`탭 외형입니다.`},{name:`size · layout`,type:`'sm'|'md'|'lg' · 'auto'|'equal'|'scroll'`,default:`'md' · 'auto'`,description:`크기와 탭 바 배치입니다.`},{name:`vertical · scrollable`,type:`boolean`,default:`false`,description:`수직 방향과 기본 스크롤바입니다.`},{name:`indicator`,type:`'static' | 'slide'`,default:`'static'`,description:`선택 인디케이터 동작입니다.`},{name:`extra · #extra`,type:`ReactNode · slot`,default:`—`,description:`탭 바 우측 액션입니다.`}]),j(`TabPanel · TabMenu API`,[{name:`label · value`,type:`string · string|number`,default:`—`,description:`탭 이름과 선택 값입니다.`},{name:`active · disabled`,type:`boolean`,default:`false`,description:`초기 선택과 비활성 상태입니다.`},{name:`icon · #icon`,type:`ReactNode · slot`,default:`—`,description:`Icon 컴포넌트 영역입니다.`},{name:`badge · #badge`,type:`ReactNode · slot`,default:`—`,description:`Badge 컴포넌트 영역입니다.`},{name:`panel · #panel`,type:`function · slot`,default:`—`,description:`동적 모드의 단일 패널 콘텐츠입니다.`}]),j(`접근성 · 키보드`,[{name:`ArrowLeft/Right · ArrowUp/Down`,type:`key`,default:`—`,description:`방향에 따라 이전·다음 탭으로 이동합니다.`},{name:`Home · End`,type:`key`,default:`—`,description:`첫 번째·마지막 활성 탭으로 이동합니다.`},{name:`aria-selected · aria-controls`,type:`attribute`,default:`—`,description:`탭과 패널의 선택 및 연결 상태입니다.`}]),j(`디자인 토큰`,[{name:`--tabs-tab-padding-x · --tabs-panel-padding-y`,type:`length`,default:`1rem · space-lg`,description:`탭과 패널 여백입니다.`},{name:`--tabs-indicator-height · --tabs-icon-size`,type:`length`,default:`2px · 1rem`,description:`인디케이터와 아이콘 크기입니다.`}]),j(`WebSquare API · XML`,[{name:`w2:group.tabs`,type:`XML element · class`,default:`—`,description:`Tabs 루트입니다. tabs_card·tabs_pill·tabs_vertical 등을 조합합니다.`},{name:`tabs_list · xf:trigger.tabs_tab`,type:`class · XML`,default:`role='tablist'`,description:`탭 목록과 개별 탭 버튼입니다.`},{name:`tabs_panel · aria-selected · aria-controls`,type:`class · ARIA`,default:`—`,description:`패널과 탭-패널 연결입니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`탭 선택 시 패널 전환을 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function P(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...v(),...e.components};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(b,{of:u}),`
`,(0,I.jsx)(t.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,I.jsx)(t.p,{children:`관련 콘텐츠를 탭으로 분류하고 클릭 또는 키보드로 패널을 전환합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,I.jsxs)(t.p,{children:[`각 탭과 패널은 `,(0,I.jsx)(t.code,{children:`role`}),`, `,(0,I.jsx)(t.code,{children:`aria-selected`}),`, `,(0,I.jsx)(t.code,{children:`aria-controls`}),`, `,(0,I.jsx)(t.code,{children:`aria-labelledby`}),`로 연결됩니다. 방향키와 `,(0,I.jsx)(t.code,{children:`Home`}),`, `,(0,I.jsx)(t.code,{children:`End`}),` 키를 지원하며 비활성 탭은 탐색에서 제외합니다.`]}),`
`,(0,I.jsxs)(t.p,{children:[`WebSquare는 루트를 `,(0,I.jsx)(t.code,{children:`w2:group.tabs`}),`, 탭 버튼을 `,(0,I.jsx)(t.code,{children:`xf:trigger.tabs_tab`}),`, 패널을 `,(0,I.jsx)(t.code,{children:`w2:group.tabs_panel`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,I.jsx)(t.code,{children:`w2`}),`, `,(0,I.jsx)(t.code,{children:`xf`}),`, `,(0,I.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,I.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,I.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Tabs와 TabsTab·TabPanel·TabMenu의 실제 원본 구현입니다. React와 Vue는 라인·카드·필·수직 변형, 동적 패널, 스크롤과 키보드 탐색을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,I.jsxs)(t.ul,{children:[`
`,(0,I.jsxs)(t.li,{children:[(0,I.jsx)(t.code,{children:`variant`}),`는 line·card·pill 스타일을 전환합니다.`]}),`
`,(0,I.jsxs)(t.li,{children:[`탭과 패널은 `,(0,I.jsx)(t.code,{children:`aria-controls`}),`·`,(0,I.jsx)(t.code,{children:`aria-labelledby`}),`로 연결합니다.`]}),`
`,(0,I.jsx)(t.li,{children:`비활성 탭은 포커스 순서에서 제외합니다.`}),`
`]}),`
`,(0,I.jsx)(T,{examples:k,showFullCode:!0}),`
`,(0,I.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,I.jsxs)(t.p,{children:[(0,I.jsx)(t.code,{children:`w2:group.tabs`}),` 안에 `,(0,I.jsx)(t.code,{children:`tabs_list`}),`와 패널을 배치합니다. 탭 선택은 `,(0,I.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,I.jsx)(t.code,{children:`ev:onclick`}),`에서 `,(0,I.jsx)(t.code,{children:`aria-selected`}),`와 패널 표시를 동기화합니다.`]}),`
`,(0,I.jsx)(t.h2,{id:`기본-라인`,children:`기본 (라인)`}),`
`,(0,I.jsx)(x,{of:d,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.basic}),`
`,(0,I.jsx)(t.h2,{id:`동적-패널`,children:`동적 패널`}),`
`,(0,I.jsx)(x,{of:n,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.dynamic}),`
`,(0,I.jsx)(t.h2,{id:`슬라이드-인디케이터`,children:`슬라이드 인디케이터`}),`
`,(0,I.jsx)(x,{of:r,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.indicator}),`
`,(0,I.jsx)(t.h2,{id:`균등-분할`,children:`균등 분할`}),`
`,(0,I.jsx)(x,{of:l,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.equal}),`
`,(0,I.jsx)(t.h2,{id:`네비-스크롤`,children:`네비 스크롤`}),`
`,(0,I.jsx)(x,{of:_,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.layoutScroll}),`
`,(0,I.jsx)(t.h2,{id:`카드`,children:`카드`}),`
`,(0,I.jsx)(x,{of:m,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.card}),`
`,(0,I.jsx)(t.h2,{id:`필`,children:`필`}),`
`,(0,I.jsx)(x,{of:i,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.pill}),`
`,(0,I.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,I.jsx)(x,{of:p,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.size}),`
`,(0,I.jsx)(t.h2,{id:`아이콘`,children:`아이콘`}),`
`,(0,I.jsx)(x,{of:h,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.icon}),`
`,(0,I.jsx)(t.h2,{id:`배지`,children:`배지`}),`
`,(0,I.jsx)(x,{of:g,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.badge}),`
`,(0,I.jsx)(t.h2,{id:`추가-액션`,children:`추가 액션`}),`
`,(0,I.jsx)(x,{of:f,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.extra}),`
`,(0,I.jsx)(t.h2,{id:`스크롤바`,children:`스크롤바`}),`
`,(0,I.jsx)(x,{of:a,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.scroll}),`
`,(0,I.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,I.jsx)(x,{of:c,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.disabled}),`
`,(0,I.jsx)(t.h2,{id:`수직`,children:`수직`}),`
`,(0,I.jsx)(x,{of:s,sourceState:`none`}),`
`,(0,I.jsx)(T,{examples:O.vertical}),`
`,(0,I.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,I.jsxs)(t.p,{children:[`각 탭과 패널은 `,(0,I.jsx)(t.code,{children:`role`}),`, `,(0,I.jsx)(t.code,{children:`aria-selected`}),`, `,(0,I.jsx)(t.code,{children:`aria-controls`}),`, `,(0,I.jsx)(t.code,{children:`aria-labelledby`}),`로 연결됩니다. 방향키와 `,(0,I.jsx)(t.code,{children:`Home`}),`, `,(0,I.jsx)(t.code,{children:`End`}),` 키를 지원하며 비활성 탭은 탐색에서 제외합니다.`]}),`
`,(0,I.jsx)(E,{sections:M})]})}function F(e={}){let{wrapper:t}={...v(),...e.components};return t?(0,I.jsx)(t,{...e,children:(0,I.jsx)(P,{...e})}):P(e)}var I;function L(){return(L=e((()=>{I=t(),y(),S(),C(),w(),D(),N(),o()})))()}L();export{F as default};