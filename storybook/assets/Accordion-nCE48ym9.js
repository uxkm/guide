import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./Accordion.stories-DT5e-vj9.js";import{i as p,r as m}from"./react-BBfuIdny.js";import{c as h,r as g,u as _}from"./blocks-DbhChoan.js";import{i as v,n as y,r as b,t as x}from"./ComponentApiDocs-arf-yre-.js";import{d as S,n as C,t as w}from"./miscellaneousDocumentationExamples-BTYYNuoc.js";var T,E,D;function O(){return(O=e((()=>{T=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],E=(e,t,n)=>({title:e,description:n,tables:[{columns:T,rows:t}]}),D=[E(`Accordion API`,[{name:`variant`,type:`'bordered' | 'flush' | 'card'`,default:`'bordered'`,description:`항목의 외형을 선택합니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`트리거와 본문 여백 크기입니다.`},{name:`multiple`,type:`boolean`,default:`false`,description:`여러 패널을 동시에 열 수 있습니다.`},{name:`effect`,type:`'slide'`,default:`—`,description:`높이 슬라이드 전환을 적용합니다.`}]),E(`AccordionItem API`,[{name:`label`,type:`string`,default:`''`,description:`기본 트리거 제목입니다.`},{name:`title · #title`,type:`ReactNode · slot`,default:`label`,description:`아이콘·배지 등 커스텀 제목 콘텐츠입니다.`},{name:`content · children · default slot`,type:`string · node`,default:`—`,description:`패널 본문입니다.`},{name:`open`,type:`boolean`,default:`false`,description:`초기 열림 상태입니다.`},{name:`disabled`,type:`boolean`,default:`false`,description:`항목을 비활성화하고 키보드 탐색에서 제외합니다.`},{name:`extra · #extra`,type:`ReactNode · slot`,default:`—`,description:`제목 오른쪽의 배지 또는 보조 정보입니다.`},{name:`headingLevel`,type:`number`,default:`3`,description:`헤딩의 aria-level입니다.`}]),E(`HTML 속성 · 키보드`,[{name:`data-accordion-multiple`,type:`attribute`,default:`—`,description:`HTML/Gulp에서 다중 열기 모드를 사용합니다.`},{name:`data-effect="slide"`,type:`attribute`,default:`—`,description:`HTML/Gulp에서 슬라이드 효과를 사용합니다.`},{name:`ArrowUp · ArrowDown`,type:`key`,default:`—`,description:`이전·다음 활성 트리거로 포커스를 이동합니다.`},{name:`Home · End`,type:`key`,default:`—`,description:`첫 번째·마지막 활성 트리거로 이동합니다.`},{name:`aria-expanded · aria-controls`,type:`attribute`,default:`—`,description:`트리거 상태와 연결 패널을 제공합니다.`}]),E(`디자인 토큰`,[{name:`--accordion-trigger-padding-y · --accordion-trigger-padding-x`,type:`length`,default:`0.875rem · space-lg`,description:`트리거 여백입니다.`},{name:`--accordion-content-padding-y · --accordion-content-padding-x`,type:`length`,default:`space-lg`,description:`패널 본문 여백입니다.`},{name:`--accordion-icon-size`,type:`length`,default:`1rem`,description:`펼침 아이콘 크기입니다.`},{name:`--accordion-slide-duration · --accordion-slide-easing`,type:`time · easing`,default:`0.28s · ease`,description:`슬라이드 전환 설정입니다.`}]),E(`WebSquare API · XML`,[{name:`w2:group.accordion`,type:`XML element · class`,default:`—`,description:`Accordion 루트입니다. accordion_card·accordion_flush·accordion_bordered를 조합합니다.`},{name:`accordion_item · accordion_trigger · accordion_panel`,type:`class`,default:`—`,description:`항목, 트리거, 패널 구조입니다.`},{name:`xf:trigger · aria-expanded · aria-controls`,type:`XML · ARIA`,default:`—`,description:`패널 토글과 트리거-패널 연결입니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`열기·닫기를 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function k(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...p(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h,{of:d}),`
`,(0,j.jsx)(t.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,j.jsx)(t.p,{children:`여러 섹션을 접었다 펼 수 있는 컴포넌트입니다. FAQ·설정·필터 패널 등에 사용하며 단일 또는 다중 열기와 키보드 탐색을 지원합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,j.jsxs)(t.p,{children:[`트리거와 패널은 `,(0,j.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,j.jsx)(t.code,{children:`aria-controls`}),`, `,(0,j.jsx)(t.code,{children:`aria-labelledby`}),`로 연결됩니다. `,(0,j.jsx)(t.code,{children:`ArrowUp`}),`, `,(0,j.jsx)(t.code,{children:`ArrowDown`}),`, `,(0,j.jsx)(t.code,{children:`Home`}),`, `,(0,j.jsx)(t.code,{children:`End`}),` 키로 활성 트리거 사이를 이동하며 비활성 항목은 건너뜁니다.`]}),`
`,(0,j.jsxs)(t.p,{children:[`WebSquare는 루트를 `,(0,j.jsx)(t.code,{children:`w2:group.accordion`}),`, 트리거를 `,(0,j.jsx)(t.code,{children:`xf:trigger`}),`, 패널을 `,(0,j.jsx)(t.code,{children:`w2:group.accordion_panel`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,j.jsx)(t.code,{children:`w2`}),`, `,(0,j.jsx)(t.code,{children:`xf`}),`, `,(0,j.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,j.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Accordion과 AccordionItem의 실제 원본 구현입니다. React와 Vue는 다중 열기, flush·bordered 변형, 크기, 슬라이드 효과와 키보드 탐색을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`multiple`}),`은 여러 패널을 동시에 열 수 있게 합니다.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`variant`}),`는 bordered·flush·card 외형을 전환합니다.`]}),`
`,(0,j.jsxs)(t.li,{children:[`트리거와 패널은 `,(0,j.jsx)(t.code,{children:`aria-expanded`}),`·`,(0,j.jsx)(t.code,{children:`aria-controls`}),`로 연결합니다.`]}),`
`]}),`
`,(0,j.jsx)(b,{examples:w,showFullCode:!0}),`
`,(0,j.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`w2:group.accordion`}),` 안에 항목을 배치하고 트리거는 `,(0,j.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,j.jsx)(t.code,{children:`ev:onclick`}),`에서 `,(0,j.jsx)(t.code,{children:`aria-expanded`}),`와 패널 표시를 동기화합니다. 다중 열기는 `,(0,j.jsx)(t.code,{children:`data-accordion-multiple`}),`로 표현합니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,j.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.basic}),`
`,(0,j.jsx)(t.h2,{id:`다중-열기`,children:`다중 열기`}),`
`,(0,j.jsx)(g,{of:r,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.multiple}),`
`,(0,j.jsx)(t.h2,{id:`플러시`,children:`플러시`}),`
`,(0,j.jsx)(g,{of:u,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.flush}),`
`,(0,j.jsx)(t.h2,{id:`보더`,children:`보더`}),`
`,(0,j.jsx)(g,{of:l,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.bordered}),`
`,(0,j.jsx)(t.h2,{id:`보조-정보`,children:`보조 정보`}),`
`,(0,j.jsx)(g,{of:c,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.extra}),`
`,(0,j.jsx)(t.h2,{id:`슬롯-커스텀`,children:`슬롯 커스텀`}),`
`,(0,j.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.custom}),`
`,(0,j.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,j.jsx)(g,{of:n,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.disabled}),`
`,(0,j.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,j.jsx)(g,{of:o,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.size}),`
`,(0,j.jsx)(t.h2,{id:`슬라이드`,children:`슬라이드`}),`
`,(0,j.jsx)(g,{of:f,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.slide}),`
`,(0,j.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,j.jsxs)(t.p,{children:[`트리거와 패널은 `,(0,j.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,j.jsx)(t.code,{children:`aria-controls`}),`, `,(0,j.jsx)(t.code,{children:`aria-labelledby`}),`로 연결됩니다. `,(0,j.jsx)(t.code,{children:`ArrowUp`}),`, `,(0,j.jsx)(t.code,{children:`ArrowDown`}),`, `,(0,j.jsx)(t.code,{children:`Home`}),`, `,(0,j.jsx)(t.code,{children:`End`}),` 키로 활성 트리거 사이를 이동하며 비활성 항목은 건너뜁니다.`]}),`
`,(0,j.jsx)(x,{sections:D})]})}function A(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),m(),_(),v(),y(),S(),O(),i()})))()}M();export{A as default};