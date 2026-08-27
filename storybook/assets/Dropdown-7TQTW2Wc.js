import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./Dropdown.stories-C9g282na.js";import{i as p,r as m}from"./react-BBfuIdny.js";import{c as h,r as g,u as _}from"./blocks-DbhChoan.js";import{i as v,n as y,r as b,t as x}from"./ComponentApiDocs-arf-yre-.js";import{a as S,i as C,r as w}from"./navigationDocumentationExamples-DpF3E8Gd.js";var T,E,D;function O(){return(O=e((()=>{T=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],E=(e,t,n)=>({title:e,description:n,tables:[{columns:T,rows:t}]}),D=[E(`Dropdown API`,[{name:`open · v-model:open`,type:`boolean`,default:`undefined`,description:`제어형 열린 상태입니다.`},{name:`defaultOpen`,type:`boolean`,default:`false`,description:`비제어형 초기 열린 상태입니다.`},{name:`disabled`,type:`boolean`,default:`false`,description:`드롭다운 전체를 비활성화합니다.`},{name:`placement`,type:`'start' | 'end' | 'top'`,default:`'start'`,description:`트리거를 기준으로 한 메뉴 배치입니다.`},{name:`fit`,type:`boolean`,default:`false`,description:`셀렉트형 트리거의 최소 너비를 적용합니다.`},{name:`maxVisibleItems`,type:`number`,default:`—`,description:`스크롤 전에 표시할 최대 메뉴 항목 수입니다.`},{name:`menuWidth · menuMinWidth`,type:`string | number`,default:`—`,description:`메뉴 너비와 최소 너비입니다. 숫자는 rem으로 처리합니다.`},{name:`triggerContent · #trigger`,type:`ReactNode · slot`,default:`기본 Button`,description:`Button 등 사용자 정의 트리거 영역입니다.`},{name:`children · default slot`,type:`ReactNode · slot`,default:`—`,description:`Menu 컴포넌트를 배치하는 영역입니다.`},{name:`closeOnSelect`,type:`boolean`,default:`true`,description:`메뉴 항목 선택 후 닫을지 설정합니다.`},{name:`onOpenChange · openChange`,type:`handler`,default:`—`,description:`열림 상태 변경 이벤트입니다.`},{name:`onSelect · select`,type:`handler`,default:`—`,description:`선택한 메뉴의 data-value 또는 텍스트를 전달합니다.`}]),E(`키보드 · 접근성`,[{name:`ArrowDown`,type:`key`,default:`—`,description:`메뉴를 열고 첫 항목으로 이동하거나 다음 항목에 초점을 둡니다.`},{name:`ArrowUp · Home · End`,type:`key`,default:`—`,description:`이전, 첫 번째, 마지막 메뉴 항목으로 이동합니다.`},{name:`Escape · Tab`,type:`key`,default:`—`,description:`메뉴를 닫고 Escape는 트리거로 초점을 돌립니다.`},{name:`aria-expanded · aria-controls`,type:`ARIA`,default:`자동`,description:`트리거와 메뉴의 상태 및 관계를 연결합니다.`}]),E(`HTML · Gulp`,[{name:`data-dropdown`,type:`attribute`,default:`—`,description:`열기, 외부 클릭, 키보드 동작을 초기화합니다.`},{name:`dropdown:select`,type:`CustomEvent`,default:`—`,description:`선택된 value를 detail로 전달합니다.`},{name:`is-open · is-disabled`,type:`class`,default:`—`,description:`열림 및 비활성 상태 클래스입니다.`}]),E(`디자인 토큰`,[{name:`--dropdown-min-width`,type:`length`,default:`10rem`,description:`메뉴 최소 너비입니다.`},{name:`--dropdown-offset · --dropdown-padding`,type:`length`,default:`space-xs`,description:`트리거 간격과 메뉴 내부 여백입니다.`},{name:`--z-dropdown`,type:`number`,default:`100`,description:`메뉴의 쌓임 순서입니다.`}]),E(`WebSquare API · XML`,[{name:`w2:group.dropdown`,type:`XML element · class`,default:`—`,description:`Dropdown 루트입니다. is-open으로 열린 상태를 표현합니다.`},{name:`xf:trigger.dropdown_trigger`,type:`XML element · class`,default:`—`,description:`메뉴를 여는 트리거 버튼입니다.`},{name:`dropdown_panel · menu_item`,type:`class`,default:`role='menu'`,description:`메뉴 패널과 항목입니다.`},{name:`aria-expanded · aria-controls · aria-haspopup`,type:`ARIA`,default:`—`,description:`트리거와 메뉴의 상태·관계입니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`열기·닫기·선택 동작을 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function k(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...p(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h,{of:l}),`
`,(0,j.jsx)(t.h1,{id:`dropdown`,children:`Dropdown`}),`
`,(0,j.jsx)(t.p,{children:`트리거를 눌러 작업, 선택 항목 또는 사용자 메뉴를 현재 화면 위에 표시합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,j.jsxs)(t.p,{children:[`트리거와 메뉴는 `,(0,j.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,j.jsx)(t.code,{children:`aria-controls`}),`, `,(0,j.jsx)(t.code,{children:`aria-haspopup`}),`으로 연결합니다. 방향키·Home·End로 항목을 이동하고 Escape, Tab, 외부 클릭으로 닫을 수 있습니다.`]}),`
`,(0,j.jsxs)(t.p,{children:[`WebSquare는 루트를 `,(0,j.jsx)(t.code,{children:`w2:group.dropdown`}),`, 트리거를 `,(0,j.jsx)(t.code,{children:`xf:trigger.dropdown_trigger`}),`, 패널·항목을 `,(0,j.jsx)(t.code,{children:`w2:group.dropdown_panel`}),`/`,(0,j.jsx)(t.code,{children:`menu_item`}),`으로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,j.jsx)(t.code,{children:`w2`}),`, `,(0,j.jsx)(t.code,{children:`xf`}),`, `,(0,j.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,j.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Dropdown의 실제 원본 구현입니다. React와 Vue는 열림 상태, 트리거 유형, 배치, 메뉴 구성, 스크롤과 비활성을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`is-open`}),`과 `,(0,j.jsx)(t.code,{children:`aria-expanded`}),`로 열린 상태를 동기화합니다.`]}),`
`,(0,j.jsxs)(t.li,{children:[`패널은 `,(0,j.jsx)(t.code,{children:`role="menu"`}),`, 항목은 `,(0,j.jsx)(t.code,{children:`role="menuitem"`}),`을 사용합니다.`]}),`
`,(0,j.jsx)(t.li,{children:`Esc·외부 클릭으로 닫은 뒤 트리거 포커스를 복원합니다.`}),`
`]}),`
`,(0,j.jsx)(b,{examples:w,showFullCode:!0}),`
`,(0,j.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`w2:group.dropdown`}),` 안에 트리거와 `,(0,j.jsx)(t.code,{children:`dropdown_panel`}),`을 배치하고 `,(0,j.jsx)(t.code,{children:`aria-expanded`}),`·`,(0,j.jsx)(t.code,{children:`aria-controls`}),`로 연결합니다. 열기·닫기는 `,(0,j.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,j.jsx)(t.code,{children:`ev:onclick`}),`에서 화면 스크립트로 처리합니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,j.jsx)(g,{of:d,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.basic}),`
`,(0,j.jsx)(t.h2,{id:`열린-상태`,children:`열린 상태`}),`
`,(0,j.jsx)(g,{of:c,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.open}),`
`,(0,j.jsx)(t.h2,{id:`트리거-유형`,children:`트리거 유형`}),`
`,(0,j.jsx)(g,{of:f,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.trigger}),`
`,(0,j.jsx)(t.h2,{id:`셀렉트-트리거`,children:`셀렉트 트리거`}),`
`,(0,j.jsx)(g,{of:o,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.select}),`
`,(0,j.jsx)(t.h2,{id:`정렬`,children:`정렬`}),`
`,(0,j.jsx)(g,{of:u,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.placement}),`
`,(0,j.jsx)(t.h2,{id:`메뉴-구성`,children:`메뉴 구성`}),`
`,(0,j.jsx)(g,{of:n,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.menu}),`
`,(0,j.jsx)(t.h2,{id:`스크롤--너비`,children:`스크롤 · 너비`}),`
`,(0,j.jsx)(g,{of:r,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.scroll}),`
`,(0,j.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,j.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.disabled}),`
`,(0,j.jsx)(t.h2,{id:`조합-예시`,children:`조합 예시`}),`
`,(0,j.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:C.example}),`
`,(0,j.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,j.jsxs)(t.p,{children:[`트리거와 메뉴는 `,(0,j.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,j.jsx)(t.code,{children:`aria-controls`}),`, `,(0,j.jsx)(t.code,{children:`aria-haspopup`}),`으로 연결합니다. 방향키·Home·End로 항목을 이동하고 Escape, Tab, 외부 클릭으로 닫을 수 있습니다.`]}),`
`,(0,j.jsx)(x,{sections:D})]})}function A(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),m(),_(),v(),y(),S(),O(),i()})))()}M();export{A as default};