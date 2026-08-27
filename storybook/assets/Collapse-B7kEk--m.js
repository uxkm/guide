import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./Collapse.stories-DzPn03FO.js";import{i as f,r as p}from"./react-BBfuIdny.js";import{c as m,r as h,u as g}from"./blocks-DbhChoan.js";import{i as _,n as v,r as y,t as b}from"./ComponentApiDocs-arf-yre-.js";import{d as x,l as S,u as C}from"./miscellaneousDocumentationExamples-BTYYNuoc.js";var w,T,E;function D(){return(D=e((()=>{w=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],T=(e,t,n)=>({title:e,description:n,tables:[{columns:w,rows:t}]}),E=[T(`Collapse API`,[{name:`variant`,type:`'bordered' | 'ghost' | 'card'`,default:`'bordered'`,description:`패널 그룹의 외형을 선택합니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`트리거와 본문 여백 크기입니다.`},{name:`accordion`,type:`boolean`,default:`false`,description:`한 번에 하나의 패널만 열 수 있습니다.`},{name:`effect`,type:`'slide'`,default:`—`,description:`높이 슬라이드 전환을 적용합니다.`}]),T(`CollapsePanel API`,[{name:`label`,type:`string`,default:`''`,description:`기본 트리거 제목입니다.`},{name:`title · #title`,type:`ReactNode · slot`,default:`label`,description:`아이콘·배지 등 커스텀 제목 콘텐츠입니다.`},{name:`content · children · default slot`,type:`string · node`,default:`—`,description:`패널 본문입니다.`},{name:`open`,type:`boolean`,default:`false`,description:`초기 열림 상태입니다.`},{name:`disabled`,type:`boolean`,default:`false`,description:`패널을 비활성화하고 키보드 탐색에서 제외합니다.`},{name:`extra · #extra`,type:`ReactNode · slot`,default:`—`,description:`제목 오른쪽의 보조 정보입니다.`}]),T(`CollapseExternal API`,[{name:`triggerLabel`,type:`string`,default:`''`,description:`외부 트리거 버튼 텍스트입니다.`},{name:`lead · #lead`,type:`ReactNode · slot`,default:`—`,description:`트리거 위 안내 콘텐츠입니다.`},{name:`children · default slot`,type:`ReactNode`,default:`—`,description:`접히는 본문입니다.`},{name:`open`,type:`boolean`,default:`false`,description:`초기 열림 상태입니다.`},{name:`boxed`,type:`boolean`,default:`true`,description:`본문에 패딩·테두리·배경을 적용합니다.`},{name:`effect`,type:`'slide'`,default:`—`,description:`높이 슬라이드 전환을 적용합니다.`}]),T(`HTML 속성 · 키보드`,[{name:`data-collapse`,type:`attribute`,default:`—`,description:`HTML/Gulp 패널 그룹을 초기화합니다.`},{name:`data-collapse-trigger`,type:`attribute`,default:`—`,description:`aria-controls 대상인 독립 접힘 영역을 제어합니다.`},{name:`data-collapse-accordion`,type:`attribute`,default:`—`,description:`HTML/Gulp에서 단일 열기 모드를 사용합니다.`},{name:`ArrowUp · ArrowDown · Home · End`,type:`key`,default:`—`,description:`활성 패널 트리거 사이에서 포커스를 이동합니다.`},{name:`aria-expanded · aria-controls`,type:`attribute`,default:`—`,description:`트리거 상태와 연결 패널을 제공합니다.`}]),T(`디자인 토큰`,[{name:`--collapse-trigger-padding-y · --collapse-trigger-padding-x`,type:`length`,default:`0.875rem · space-lg`,description:`트리거 여백입니다.`},{name:`--collapse-content-padding-y · --collapse-content-padding-x`,type:`length`,default:`space-lg`,description:`패널 본문 여백입니다.`},{name:`--collapse-icon-size`,type:`length`,default:`1rem`,description:`펼침 아이콘 크기입니다.`},{name:`--collapse-slide-duration · --collapse-slide-easing`,type:`time · easing`,default:`0.28s · ease`,description:`슬라이드 전환 설정입니다.`}]),T(`WebSquare API · XML`,[{name:`w2:group.collapse_group`,type:`XML element · class`,default:`—`,description:`Collapse 패널 그룹 루트입니다. collapse_bordered·collapse_ghost 등을 조합합니다.`},{name:`collapse_panel · collapse_trigger · collapse_body`,type:`class`,default:`—`,description:`패널, 트리거, 본문 구조입니다.`},{name:`xf:trigger · aria-expanded · aria-controls`,type:`XML · ARIA`,default:`—`,description:`외부·내부 트리거와 패널 연결입니다.`},{name:`data-collapse-accordion`,type:`attribute`,default:`—`,description:`단일 열기 모드를 표현합니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`열기·닫기를 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function O(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...f(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m,{of:c}),`
`,(0,A.jsx)(t.h1,{id:`collapse`,children:`Collapse`}),`
`,(0,A.jsx)(t.p,{children:`콘텐츠 영역을 접었다 펼 수 있는 컴포넌트입니다. 외부 버튼으로 단일 영역을 제어하거나 패널 그룹으로 여러 섹션을 구성할 수 있습니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,A.jsxs)(t.p,{children:[`트리거와 패널은 `,(0,A.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,A.jsx)(t.code,{children:`aria-controls`}),`, `,(0,A.jsx)(t.code,{children:`aria-labelledby`}),`로 연결됩니다. 패널 그룹에서는 `,(0,A.jsx)(t.code,{children:`ArrowUp`}),`, `,(0,A.jsx)(t.code,{children:`ArrowDown`}),`, `,(0,A.jsx)(t.code,{children:`Home`}),`, `,(0,A.jsx)(t.code,{children:`End`}),` 키로 활성 트리거 사이를 이동합니다.`]}),`
`,(0,A.jsxs)(t.p,{children:[`WebSquare는 그룹을 `,(0,A.jsx)(t.code,{children:`w2:group.collapse_group`}),`, 외부 트리거를 `,(0,A.jsx)(t.code,{children:`xf:trigger`}),`, 본문을 `,(0,A.jsx)(t.code,{children:`w2:group.collapse_body`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,A.jsx)(t.code,{children:`w2`}),`, `,(0,A.jsx)(t.code,{children:`xf`}),`, `,(0,A.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,A.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,A.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Collapse와 CollapsePanel·CollapseExternal의 실제 원본 구현입니다. React와 Vue는 외부 트리거, 패널 그룹, 단일 열기, 스킨, 크기와 슬라이드 효과를 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.code,{children:`accordion`}),`은 한 번에 하나의 패널만 엽니다.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.code,{children:`CollapseExternal`}),`은 외부 버튼으로 단일 영역을 제어합니다.`]}),`
`,(0,A.jsxs)(t.li,{children:[`트리거와 패널은 `,(0,A.jsx)(t.code,{children:`aria-expanded`}),`·`,(0,A.jsx)(t.code,{children:`aria-controls`}),`로 연결합니다.`]}),`
`]}),`
`,(0,A.jsx)(y,{examples:S,showFullCode:!0}),`
`,(0,A.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`w2:group.collapse_group`}),`에 패널을 배치하거나 외부 `,(0,A.jsx)(t.code,{children:`xf:trigger`}),`로 본문을 제어합니다. 단일 열기는 `,(0,A.jsx)(t.code,{children:`data-collapse-accordion`}),`으로 표현하고, 토글은 `,(0,A.jsx)(t.code,{children:`ev:onclick`}),`에서 처리합니다.`]}),`
`,(0,A.jsx)(t.h2,{id:`외부-트리거`,children:`외부 트리거`}),`
`,(0,A.jsx)(h,{of:a,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.standalone}),`
`,(0,A.jsx)(t.h2,{id:`패널-그룹`,children:`패널 그룹`}),`
`,(0,A.jsx)(h,{of:o,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.basic}),`
`,(0,A.jsx)(t.h2,{id:`단일-열기`,children:`단일 열기`}),`
`,(0,A.jsx)(h,{of:u,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.accordion}),`
`,(0,A.jsx)(t.h2,{id:`스킨`,children:`스킨`}),`
`,(0,A.jsx)(h,{of:l,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.skin}),`
`,(0,A.jsx)(t.h2,{id:`보조-정보`,children:`보조 정보`}),`
`,(0,A.jsx)(h,{of:n,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.extra}),`
`,(0,A.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,A.jsx)(h,{of:i,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.disabled}),`
`,(0,A.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,A.jsx)(h,{of:s,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.size}),`
`,(0,A.jsx)(t.h2,{id:`슬라이드`,children:`슬라이드`}),`
`,(0,A.jsx)(h,{of:r,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:C.slide}),`
`,(0,A.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,A.jsxs)(t.p,{children:[`트리거와 패널은 `,(0,A.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,A.jsx)(t.code,{children:`aria-controls`}),`, `,(0,A.jsx)(t.code,{children:`aria-labelledby`}),`로 연결됩니다. 패널 그룹에서는 `,(0,A.jsx)(t.code,{children:`ArrowUp`}),`, `,(0,A.jsx)(t.code,{children:`ArrowDown`}),`, `,(0,A.jsx)(t.code,{children:`Home`}),`, `,(0,A.jsx)(t.code,{children:`End`}),` 키로 활성 트리거 사이를 이동합니다.`]}),`
`,(0,A.jsx)(b,{sections:E})]})}function k(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;function j(){return(j=e((()=>{A=t(),p(),g(),_(),v(),x(),D(),d()})))()}j();export{k as default};