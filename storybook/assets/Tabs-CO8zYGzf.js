import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{d as n,i as r,l as i}from"./blocks-DKrjMPN_.js";import{n as a,t as o}from"./FrameworkTabs-duseEU1T.js";import{_ as s,a as c,c as l,d as u,f as d,g as f,h as p,i as m,l as h,m as g,n as _,o as v,p as y,r as b,s as x,t as S,u as C}from"./Tabs.stories-gPNcyWE1.js";import{i as w,r as T}from"./react-CQ14Jk9E.js";import{n as E,t as D}from"./ComponentApiDocs-C9VNL7Yh.js";import{a as O,h as k,m as A}from"./navigationDocumentationExamples-CUl3rOB8.js";var j,M,N;function P(){return(P=e((()=>{j=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],M=(e,t,n)=>({title:e,description:n,tables:[{columns:j,rows:t}]}),N=[M(`Tabs API`,[{name:`mode`,type:`'panels' | 'dynamic'`,default:`'panels'`,description:`개별 패널 또는 단일 동적 패널 방식입니다.`},{name:`value · defaultValue · v-model`,type:`string | number`,default:`—`,description:`선택 탭 값입니다.`},{name:`variant`,type:`'line' | 'card' | 'pill'`,default:`'line'`,description:`탭 외형입니다.`},{name:`size · layout`,type:`'sm'|'md'|'lg' · 'auto'|'equal'|'scroll'`,default:`'md' · 'auto'`,description:`크기와 탭 바 배치입니다.`},{name:`vertical · scrollable`,type:`boolean`,default:`false`,description:`수직 방향과 기본 스크롤바입니다.`},{name:`indicator`,type:`'static' | 'slide'`,default:`'static'`,description:`선택 인디케이터 동작입니다.`},{name:`closable · onClose · @close`,type:`boolean · (key) => void`,default:`false · —`,description:`닫기 버튼과 닫기 콜백입니다. 탭이 1개만 남으면 닫을 수 없습니다. 목록 갱신은 호출 측에서 처리합니다.`},{name:`extra · #extra`,type:`ReactNode · slot`,default:`—`,description:`탭 바 우측 액션입니다.`}]),M(`TabPanel · TabMenu API`,[{name:`label · value`,type:`string · string|number`,default:`—`,description:`탭 이름과 선택 값입니다.`},{name:`active · disabled`,type:`boolean`,default:`false`,description:`초기 선택과 비활성 상태입니다.`},{name:`closable · closeLabel`,type:`boolean · string`,default:`false · —`,description:`개별 탭 닫기와 닫기 버튼 접근성 이름입니다.`},{name:`icon · #icon`,type:`ReactNode · slot`,default:`—`,description:`Icon 컴포넌트 영역입니다.`},{name:`badge · #badge`,type:`ReactNode · slot`,default:`—`,description:`Badge 컴포넌트 영역입니다.`},{name:`panel · #panel`,type:`function · slot`,default:`—`,description:`동적 모드의 단일 패널 콘텐츠입니다.`}]),M(`접근성 · 키보드`,[{name:`ArrowLeft/Right · ArrowUp/Down`,type:`key`,default:`—`,description:`방향에 따라 이전·다음 탭으로 이동합니다.`},{name:`Home · End`,type:`key`,default:`—`,description:`첫 번째·마지막 활성 탭으로 이동합니다.`},{name:`Delete · Backspace`,type:`key`,default:`—`,description:`닫기 가능한 탭을 닫습니다.`},{name:`aria-selected · aria-controls`,type:`attribute`,default:`—`,description:`탭과 패널의 선택 및 연결 상태입니다.`}]),M(`디자인 토큰`,[{name:`--tabs-tab-padding-x · --tabs-panel-padding-y`,type:`length`,default:`1rem · space-lg`,description:`탭과 패널 여백입니다.`},{name:`--tabs-indicator-height · --tabs-icon-size`,type:`length`,default:`2px · 1rem`,description:`인디케이터와 아이콘 크기입니다.`}]),M(`WebSquare API · XML`,[{name:`w2:group.tabs`,type:`XML element · class`,default:`—`,description:`Tabs 루트입니다. tabs_card·tabs_pill·tabs_vertical 등을 조합합니다.`},{name:`tabs_list · xf:trigger.tabs_tab`,type:`class · XML`,default:`role='tablist'`,description:`탭 목록과 개별 탭 버튼입니다.`},{name:`tabs_panel · aria-selected · aria-controls`,type:`class · ARIA`,default:`—`,description:`패널과 탭-패널 연결입니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`탭 선택 시 패널 전환을 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function F(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...w(),...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(i,{of:p}),`
`,(0,L.jsx)(t.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,L.jsx)(t.p,{children:`관련 콘텐츠를 탭으로 분류하고 클릭 또는 키보드로 패널을 전환합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,L.jsxs)(t.p,{children:[`각 탭과 패널은 `,(0,L.jsx)(t.code,{children:`role`}),`, `,(0,L.jsx)(t.code,{children:`aria-selected`}),`, `,(0,L.jsx)(t.code,{children:`aria-controls`}),`, `,(0,L.jsx)(t.code,{children:`aria-labelledby`}),`로 연결됩니다. 방향키와 `,(0,L.jsx)(t.code,{children:`Home`}),`, `,(0,L.jsx)(t.code,{children:`End`}),` 키를 지원하며 비활성 탭은 탐색에서 제외합니다.`]}),`
`,(0,L.jsxs)(t.p,{children:[`WebSquare는 루트를 `,(0,L.jsx)(t.code,{children:`w2:group.tabs`}),`, 탭 버튼을 `,(0,L.jsx)(t.code,{children:`xf:trigger.tabs_tab`}),`, 패널을 `,(0,L.jsx)(t.code,{children:`w2:group.tabs_panel`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,L.jsx)(t.code,{children:`w2`}),`, `,(0,L.jsx)(t.code,{children:`xf`}),`, `,(0,L.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,L.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,L.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Tabs와 TabsTab·TabPanel·TabMenu의 실제 원본 구현입니다. React와 Vue는 라인·카드·필·수직 변형, 동적 패널, 스크롤과 키보드 탐색을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,L.jsxs)(t.ul,{children:[`
`,(0,L.jsxs)(t.li,{children:[(0,L.jsx)(t.code,{children:`variant`}),`는 line·card·pill 스타일을 전환합니다.`]}),`
`,(0,L.jsxs)(t.li,{children:[`탭과 패널은 `,(0,L.jsx)(t.code,{children:`aria-controls`}),`·`,(0,L.jsx)(t.code,{children:`aria-labelledby`}),`로 연결합니다.`]}),`
`,(0,L.jsx)(t.li,{children:`비활성 탭은 포커스 순서에서 제외합니다.`}),`
`]}),`
`,(0,L.jsx)(o,{examples:A,showFullCode:!0}),`
`,(0,L.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,L.jsxs)(t.p,{children:[(0,L.jsx)(t.code,{children:`w2:group.tabs`}),` 안에 `,(0,L.jsx)(t.code,{children:`tabs_list`}),`와 패널을 배치합니다. 탭 선택은 `,(0,L.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,L.jsx)(t.code,{children:`ev:onclick`}),`에서 `,(0,L.jsx)(t.code,{children:`aria-selected`}),`와 패널 표시를 동기화합니다.`]}),`
`,(0,L.jsx)(t.h2,{id:`기본-라인`,children:`기본 (라인)`}),`
`,(0,L.jsx)(r,{of:_,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.basic}),`
`,(0,L.jsx)(t.h2,{id:`동적-패널`,children:`동적 패널`}),`
`,(0,L.jsx)(r,{of:c,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.dynamic}),`
`,(0,L.jsx)(t.h2,{id:`슬라이드-인디케이터`,children:`슬라이드 인디케이터`}),`
`,(0,L.jsx)(r,{of:h,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.indicator}),`
`,(0,L.jsx)(t.h2,{id:`균등-분할`,children:`균등 분할`}),`
`,(0,L.jsx)(r,{of:C,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.equal}),`
`,(0,L.jsx)(t.h2,{id:`네비-스크롤`,children:`네비 스크롤`}),`
`,(0,L.jsx)(r,{of:u,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.layoutScroll}),`
`,(0,L.jsx)(t.h2,{id:`카드`,children:`카드`}),`
`,(0,L.jsx)(r,{of:b,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.card}),`
`,(0,L.jsx)(t.h2,{id:`필`,children:`필`}),`
`,(0,L.jsx)(r,{of:d,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.pill}),`
`,(0,L.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,L.jsx)(r,{of:g,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.size}),`
`,(0,L.jsx)(t.h2,{id:`아이콘`,children:`아이콘`}),`
`,(0,L.jsx)(r,{of:l,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.icon}),`
`,(0,L.jsx)(t.h2,{id:`배지`,children:`배지`}),`
`,(0,L.jsx)(r,{of:S,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.badge}),`
`,(0,L.jsx)(t.h2,{id:`추가-액션`,children:`추가 액션`}),`
`,(0,L.jsx)(r,{of:x,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.extra}),`
`,(0,L.jsx)(t.h2,{id:`스크롤바`,children:`스크롤바`}),`
`,(0,L.jsx)(r,{of:y,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.scroll}),`
`,(0,L.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,L.jsx)(r,{of:m,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.disabled}),`
`,(0,L.jsx)(t.h2,{id:`수직`,children:`수직`}),`
`,(0,L.jsx)(r,{of:f,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.vertical}),`
`,(0,L.jsx)(t.h2,{id:`조합-예시`,children:`조합 예시`}),`
`,(0,L.jsxs)(t.p,{children:[`왼쪽 `,(0,L.jsx)(t.strong,{children:`예시 추가`}),` 메뉴로 탭을 열고, 탭의 닫기로 이전 탭을 활성화합니다. 탭이 1개만 남으면 닫을 수 없습니다. `,(0,L.jsx)(t.strong,{children:`최대 탭 개수`}),`는 예시 패널 또는 Controls에서 조절하며, 한도를 넘기면 알림 Modal로 안내합니다. 우측 `,(0,L.jsx)(t.strong,{children:`좌·우`}),` 버튼은 이전·다음 탭을 선택하고, 더보기(목차)로 같은 목록을 고를 수 있습니다. 탭이 넘치면 `,(0,L.jsx)(t.code,{children:`layout="scroll"`}),`로 활성 탭이 보이도록 목록이 이동합니다.`]}),`
`,(0,L.jsx)(r,{of:v,sourceState:`none`}),`
`,(0,L.jsx)(o,{examples:k.example}),`
`,(0,L.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,L.jsxs)(t.p,{children:[`각 탭과 패널은 `,(0,L.jsx)(t.code,{children:`role`}),`, `,(0,L.jsx)(t.code,{children:`aria-selected`}),`, `,(0,L.jsx)(t.code,{children:`aria-controls`}),`, `,(0,L.jsx)(t.code,{children:`aria-labelledby`}),`로 연결됩니다. 방향키와 `,(0,L.jsx)(t.code,{children:`Home`}),`, `,(0,L.jsx)(t.code,{children:`End`}),` 키를 지원하며 비활성 탭은 탐색에서 제외합니다.`]}),`
`,(0,L.jsx)(D,{sections:N})]})}function I(e={}){let{wrapper:t}={...w(),...e.components};return t?(0,L.jsx)(t,{...e,children:(0,L.jsx)(F,{...e})}):F(e)}var L;function R(){return(R=e((()=>{L=t(),T(),n(),a(),E(),O(),P(),s()})))()}R();export{I as default};