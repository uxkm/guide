import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./Menu.stories-CLWgHTi6.js";import{i as m,r as h}from"./react-DPG3xyh1.js";import{c as g,r as _,u as v}from"./blocks-BXsfpknd.js";import{i as y,n as b,r as x,t as S}from"./ComponentApiDocs-BKc5okVC.js";import{a as C,o as w,s as T}from"./navigationDocumentationExamples-hdv7lNDf.js";var E,D,O;function k(){return(k=e((()=>{E=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],D=(e,t,n)=>({title:e,description:n,tables:[{columns:E,rows:t}]}),O=[D(`Menu API`,[{name:`mode`,type:`'vertical' | 'horizontal' | 'inline'`,default:`'vertical'`,description:`메뉴 배치 방향입니다.`},{name:`bordered · compact · dark`,type:`boolean`,default:`false`,description:`테두리, 밀도, 어두운 면 변형입니다.`},{name:`ariaLabel`,type:`string`,default:`—`,description:`내비게이션 영역의 접근 가능한 이름입니다.`}]),D(`MenuItem API`,[{name:`label · children`,type:`string · ReactNode`,default:`—`,description:`항목 텍스트 또는 커스텀 콘텐츠입니다.`},{name:`active · disabled`,type:`boolean`,default:`false`,description:`현재 항목과 비활성 상태입니다.`},{name:`icon · #icon`,type:`ReactNode · slot`,default:`—`,description:`Icon 컴포넌트 영역입니다.`},{name:`extra · #extra`,type:`ReactNode · slot`,default:`—`,description:`Badge 등 우측 보조 영역입니다.`}]),D(`MenuSubmenu · Group API`,[{name:`expanded · submenuId`,type:`boolean · string`,default:`false · auto`,description:`서브메뉴 초기 상태와 패널 ID입니다.`},{name:`MenuGroup title`,type:`string`,default:`—`,description:`메뉴 섹션 제목입니다.`},{name:`MenuDivider`,type:`component`,default:`—`,description:`메뉴 그룹 구분선입니다.`}]),D(`HTML · Gulp`,[{name:`menu_list · menu_item · menu_link`,type:`class`,default:`—`,description:`목록과 메뉴 항목 구조입니다.`},{name:`menu_submenu · data-menu-submenu-toggle`,type:`class · attribute`,default:`—`,description:`상호작용 가능한 중첩 메뉴입니다.`},{name:`is-active · is-disabled`,type:`class`,default:`—`,description:`선택과 비활성 상태입니다.`}]),D(`디자인 토큰`,[{name:`--menu-width · --menu-item-padding-x`,type:`length`,default:`16rem · .75rem`,description:`메뉴 너비와 항목 여백입니다.`},{name:`--menu-icon-size · --menu-submenu-indent`,type:`length`,default:`1rem · 1.75rem`,description:`아이콘 크기와 중첩 들여쓰기입니다.`}]),D(`WebSquare API · XML`,[{name:`w2:group.menu`,type:`XML element · class`,default:`role='menu'`,description:`Menu 루트입니다. menu_horizontal 등으로 배치를 바꿉니다.`},{name:`menu_item · menu_submenu · menu_divider`,type:`class`,default:`—`,description:`항목, 서브메뉴, 구분선 구조입니다.`},{name:`xf:trigger · aria-expanded · aria-controls`,type:`XML · ARIA`,default:`—`,description:`서브메뉴 토글과 패널 연결입니다.`},{name:`is-active · is-disabled`,type:`class`,default:`—`,description:`현재·비활성 상태입니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function A(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...m(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(g,{of:s}),`
`,(0,M.jsx)(t.h1,{id:`menu`,children:`Menu`}),`
`,(0,M.jsx)(t.p,{children:`내비게이션, 사이드바와 드롭다운에서 계층적인 이동 항목을 제공합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,M.jsxs)(t.p,{children:[`현재 항목은 `,(0,M.jsx)(t.code,{children:`aria-current="page"`}),`, 비활성 항목은 `,(0,M.jsx)(t.code,{children:`aria-disabled="true"`}),`를 사용합니다. 서브메뉴 버튼은 `,(0,M.jsx)(t.code,{children:`aria-expanded`}),`와 `,(0,M.jsx)(t.code,{children:`aria-controls`}),`를 상태에 맞춰 동기화합니다.`]}),`
`,(0,M.jsxs)(t.p,{children:[`WebSquare는 메뉴 루트를 `,(0,M.jsx)(t.code,{children:`w2:group.menu`}),`, 항목을 `,(0,M.jsx)(t.code,{children:`w2:textbox`}),`/`,(0,M.jsx)(t.code,{children:`xf:trigger`}),`, 서브메뉴 패널을 `,(0,M.jsx)(t.code,{children:`w2:group.menu_submenu-panel`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,M.jsx)(t.code,{children:`w2`}),`, `,(0,M.jsx)(t.code,{children:`xf`}),`, `,(0,M.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,M.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,M.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Menu와 MenuItem·MenuSubmenu·MenuGroup·MenuDivider의 실제 원본 구현입니다. React와 Vue는 수직·수평 모드, 서브메뉴, 그룹, 비활성과 배지를 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`mode`}),`는 vertical·horizontal·inline 배치를 전환합니다.`]}),`
`,(0,M.jsxs)(t.li,{children:[`서브메뉴는 `,(0,M.jsx)(t.code,{children:`aria-expanded`}),`·`,(0,M.jsx)(t.code,{children:`aria-controls`}),`로 패널을 연결합니다.`]}),`
`,(0,M.jsxs)(t.li,{children:[`현재·비활성 항목은 `,(0,M.jsx)(t.code,{children:`is-active`}),`·`,(0,M.jsx)(t.code,{children:`is-disabled`}),`와 ARIA를 함께 사용합니다.`]}),`
`]}),`
`,(0,M.jsx)(x,{examples:w,showFullCode:!0}),`
`,(0,M.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`w2:group.menu`}),`에 `,(0,M.jsx)(t.code,{children:`role="menu"`}),`를 적용하고 항목을 배치합니다. 서브메뉴 토글은 `,(0,M.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,M.jsx)(t.code,{children:`ev:onclick`}),`에서 패널 표시와 `,(0,M.jsx)(t.code,{children:`aria-expanded`}),`를 동기화합니다.`]}),`
`,(0,M.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,M.jsx)(_,{of:c,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.basic}),`
`,(0,M.jsx)(t.h2,{id:`수평`,children:`수평`}),`
`,(0,M.jsx)(_,{of:n,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.horizontal}),`
`,(0,M.jsx)(t.h2,{id:`아이콘`,children:`아이콘`}),`
`,(0,M.jsx)(_,{of:d,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.icon}),`
`,(0,M.jsx)(t.h2,{id:`서브메뉴`,children:`서브메뉴`}),`
`,(0,M.jsx)(_,{of:p,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.submenu}),`
`,(0,M.jsx)(t.h2,{id:`구분선--그룹`,children:`구분선 · 그룹`}),`
`,(0,M.jsx)(_,{of:o,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.group}),`
`,(0,M.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,M.jsx)(_,{of:u,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.disabled}),`
`,(0,M.jsx)(t.h2,{id:`배지`,children:`배지`}),`
`,(0,M.jsx)(_,{of:f,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.badge}),`
`,(0,M.jsx)(t.h2,{id:`수평--서브메뉴`,children:`수평 · 서브메뉴`}),`
`,(0,M.jsx)(_,{of:l,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.horizontalSubmenu}),`
`,(0,M.jsx)(t.h2,{id:`사이드바-레이아웃`,children:`사이드바 레이아웃`}),`
`,(0,M.jsx)(_,{of:r,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.layout}),`
`,(0,M.jsx)(t.h2,{id:`변형`,children:`변형`}),`
`,(0,M.jsx)(_,{of:i,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:T.variant}),`
`,(0,M.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,M.jsxs)(t.p,{children:[`현재 항목은 `,(0,M.jsx)(t.code,{children:`aria-current="page"`}),`, 비활성 항목은 `,(0,M.jsx)(t.code,{children:`aria-disabled="true"`}),`를 사용합니다. 서브메뉴 버튼은 `,(0,M.jsx)(t.code,{children:`aria-expanded`}),`와 `,(0,M.jsx)(t.code,{children:`aria-controls`}),`를 상태에 맞춰 동기화합니다.`]}),`
`,(0,M.jsx)(S,{sections:O})]})}function j(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=t(),h(),v(),y(),b(),C(),k(),a()})))()}N();export{j as default};