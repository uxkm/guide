import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./Modal.stories-1TILHPbX.js";import{i as m,r as h}from"./react-DPG3xyh1.js";import{c as g,r as _,u as v}from"./blocks-BXsfpknd.js";import{i as y,n as b,r as x,t as S}from"./ComponentApiDocs-BKc5okVC.js";import{c as C,l as w,s as T}from"./feedbackDocumentationExamples-ZkYTdG9Z.js";var E,D,O;function k(){return(k=e((()=>{E=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],D=(e,t,n)=>({title:e,description:n,tables:[{columns:E,rows:t}]}),O=[D(`React · Next.js API`,[{name:`open · defaultOpen`,type:`boolean`,default:`— · false`,description:`제어·비제어 열림 상태입니다.`},{name:`title · header · children · footer`,type:`ReactNode`,default:`—`,description:`헤더, 본문, 푸터 콘텐츠입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg' | 'fullscreen'`,default:`'md'`,description:`대화상자 크기입니다.`},{name:`scrollable · backdrop`,type:`boolean`,default:`false · true`,description:`본문 스크롤과 백드롭 표시입니다.`},{name:`footerAlign`,type:`'start' | 'center' | 'end' | 'between' | 'even'`,default:`'end'`,description:`푸터 액션 정렬입니다.`},{name:`footerRatio · footerNoPadBottom`,type:`string · boolean`,default:`'1-1' · false`,description:`균등 버튼 비율과 하단 패딩입니다.`},{name:`onClose`,type:`(reason, event) => void`,default:`—`,description:`close · backdrop · escape 사유를 전달합니다.`}],`Next.js는 @uxkm/react/modal을 재사용합니다.`),D(`Vue · Nuxt API`,[{name:`open · default-open · scrollable · backdrop`,type:`boolean`,default:`false · false · false · true`,description:`표시 및 동작 옵션입니다.`},{name:`title · size · footer-align · footer-ratio`,type:`string`,default:`— · 'md' · 'end' · '1-1'`,description:`콘텐츠와 레이아웃 옵션입니다.`},{name:`header · default · footer`,type:`slot`,default:`—`,description:`헤더, 본문, 푸터 슬롯입니다.`},{name:`@close`,type:`event`,default:`—`,description:`닫기 사유와 원본 이벤트입니다.`}],`Nuxt는 @uxkm/vue/modal을 재사용합니다.`),D(`HTML · Gulp`,[{name:`modal · modal_backdrop · modal_dialog`,type:`class`,default:`—`,description:`루트, 백드롭, 대화상자입니다.`},{name:`modal_header · modal_body · modal_footer`,type:`class`,default:`—`,description:`구조 영역입니다.`},{name:`modal_sm · modal_lg · modal_fullscreen · modal_scrollable`,type:`class`,default:`—`,description:`크기와 스크롤 변형입니다.`},{name:`data-modal-trigger · data-modal-close`,type:`attribute`,default:`—`,description:`열기와 닫기 트리거입니다.`},{name:`is-open · is-stack-covered`,type:`class`,default:`—`,description:`열림과 중첩 상태입니다.`}]),D(`디자인 토큰`,[{name:`--modal-z-index · --modal-margin`,type:`number · length`,default:`300 · space-md`,description:`레이어와 화면 여백입니다.`},{name:`--modal-width · --modal-width-sm · --modal-width-lg`,type:`length`,default:`32rem · 24rem · 48rem`,description:`대화상자 너비입니다.`},{name:`--modal-bg · --modal-radius · --modal-shadow`,type:`color · length · shadow`,default:`테마별 값`,description:`표면, 모서리, 그림자입니다.`}]),D(`WebSquare API · XML`,[{name:`w2:group.modal`,type:`XML element · class`,default:`role='dialog'`,description:`Modal 루트입니다. is-open과 aria-modal, aria-labelledby를 함께 사용합니다.`},{name:`modal_backdrop · modal_dialog · modal_header · modal_body · modal_footer`,type:`class`,default:`—`,description:`백드롭과 대화상자 구조 영역입니다.`},{name:`modal_sm · modal_lg · modal_fullscreen · modal_scrollable`,type:`class`,default:`—`,description:`크기와 본문 스크롤 변형입니다.`},{name:`xf:trigger.modal_close · modal_footer`,type:`XML element · class`,default:`—`,description:`닫기·확인·취소 액션을 구성합니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`열기·닫기·확인 동작을 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function A(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...m(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(g,{of:l}),`
`,(0,M.jsx)(t.h1,{id:`modal`,children:`Modal`}),`
`,(0,M.jsx)(t.p,{children:`중요한 정보 확인이나 사용자 입력이 필요한 작업을 전체 브라우저 계층의 대화상자로 제공합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,M.jsxs)(t.p,{children:[`백드롭, 닫기 버튼, Esc 키로 닫을 수 있으며 닫은 뒤 트리거로 포커스가 돌아갑니다. Modal은 `,(0,M.jsx)(t.code,{children:`role="dialog"`}),`, `,(0,M.jsx)(t.code,{children:`aria-modal="true"`}),`, 제목 연결을 제공합니다.`]}),`
`,(0,M.jsxs)(t.p,{children:[`WebSquare는 대화상자를 `,(0,M.jsx)(t.code,{children:`w2:group.modal`}),`, 백드롭·헤더·본문·푸터를 `,(0,M.jsx)(t.code,{children:`w2:group`}),`, 열기·닫기·확인을 `,(0,M.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,M.jsx)(t.code,{children:`w2`}),`, `,(0,M.jsx)(t.code,{children:`xf`}),`, `,(0,M.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,M.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,M.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Modal 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 열림 상태, 크기, 스크롤, 백드롭, 푸터 정렬과 포커스 트랩을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[`지원하지 않는 크기는 `,(0,M.jsx)(t.code,{children:`md`}),`로 정규화하고 `,(0,M.jsx)(t.code,{children:`modal_sm`}),`·`,(0,M.jsx)(t.code,{children:`modal_lg`}),`·`,(0,M.jsx)(t.code,{children:`modal_fullscreen`}),` 클래스로 변환합니다.`]}),`
`,(0,M.jsx)(t.li,{children:`열릴 때 내부로 포커스를 이동하고 Tab 키는 Modal 안에서 순환합니다.`}),`
`,(0,M.jsx)(t.li,{children:`중첩 시 최상위 대화상자만 조작하고 아래 Modal의 백드롭은 숨깁니다.`}),`
`,(0,M.jsxs)(t.li,{children:[`Esc·백드롭·닫기 버튼 닫기 사유를 `,(0,M.jsx)(t.code,{children:`onClose`}),`로 전달합니다.`]}),`
`]}),`
`,(0,M.jsx)(x,{examples:C,showFullCode:!0}),`
`,(0,M.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`w2:group`}),`에 `,(0,M.jsx)(t.code,{children:`modal`}),`과 `,(0,M.jsx)(t.code,{children:`is-open`}),`을 적용하고 `,(0,M.jsx)(t.code,{children:`role="dialog"`}),`·`,(0,M.jsx)(t.code,{children:`aria-modal="true"`}),`·`,(0,M.jsx)(t.code,{children:`aria-labelledby`}),`로 제목을 연결합니다. 백드롭 클릭과 닫기 버튼은 `,(0,M.jsx)(t.code,{children:`xf:trigger`}),`/`,(0,M.jsx)(t.code,{children:`ev:onclick`}),`에서 `,(0,M.jsx)(t.code,{children:`scwin.modal_close`}),`를 호출합니다.`]}),`
`,(0,M.jsxs)(t.p,{children:[`크기·스크롤은 `,(0,M.jsx)(t.code,{children:`modal_sm`}),`·`,(0,M.jsx)(t.code,{children:`modal_lg`}),`·`,(0,M.jsx)(t.code,{children:`modal_fullscreen`}),`·`,(0,M.jsx)(t.code,{children:`modal_scrollable`}),` 클래스로 표현하고, 푸터 정렬은 `,(0,M.jsx)(t.code,{children:`modal_footer-*`}),`로 맞춥니다.`]}),`
`,(0,M.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,M.jsx)(t.p,{children:`백드롭, 닫기 버튼, Esc 키로 닫을 수 있으며 닫은 뒤 트리거로 포커스가 돌아갑니다.`}),`
`,(0,M.jsx)(_,{of:f,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:w.basic}),`
`,(0,M.jsx)(t.h2,{id:`열린-상태`,children:`열린 상태`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`defaultOpen`}),` 또는 `,(0,M.jsx)(t.code,{children:`open`}),`으로 처음부터 열린 상태를 만들 수 있습니다.`]}),`
`,(0,M.jsx)(_,{of:s,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:w.open}),`
`,(0,M.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`sm`}),`, `,(0,M.jsx)(t.code,{children:`md`}),`, `,(0,M.jsx)(t.code,{children:`lg`}),`, `,(0,M.jsx)(t.code,{children:`fullscreen`}),` 크기를 제공합니다.`]}),`
`,(0,M.jsx)(_,{of:i,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:w.size}),`
`,(0,M.jsx)(t.h2,{id:`헤더푸터`,children:`헤더·푸터`}),`
`,(0,M.jsx)(t.p,{children:`제목과 닫기 버튼을 포함하는 헤더, 스크롤 가능한 본문, 액션 푸터로 구성합니다.`}),`
`,(0,M.jsx)(_,{of:u,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:w.footer}),`
`,(0,M.jsx)(t.h2,{id:`푸터-정렬`,children:`푸터 정렬`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`start`}),`, `,(0,M.jsx)(t.code,{children:`center`}),`, `,(0,M.jsx)(t.code,{children:`end`}),`, `,(0,M.jsx)(t.code,{children:`between`}),`, `,(0,M.jsx)(t.code,{children:`even`}),` 정렬을 제공합니다.`]}),`
`,(0,M.jsx)(_,{of:o,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:w.footerAlign}),`
`,(0,M.jsx)(t.h2,{id:`확인-대화상자`,children:`확인 대화상자`}),`
`,(0,M.jsx)(t.p,{children:`되돌릴 수 없는 작업 전에는 간결한 설명과 명확한 확인 액션을 제공합니다.`}),`
`,(0,M.jsx)(_,{of:c,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:w.confirm}),`
`,(0,M.jsx)(t.h2,{id:`폼`,children:`폼`}),`
`,(0,M.jsx)(t.p,{children:`입력 필드를 Modal 본문에 배치합니다.`}),`
`,(0,M.jsx)(_,{of:n,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:w.form}),`
`,(0,M.jsx)(t.h2,{id:`스크롤-본문`,children:`스크롤 본문`}),`
`,(0,M.jsxs)(t.p,{children:[`본문이 길면 헤더와 푸터는 유지하고 `,(0,M.jsx)(t.code,{children:`modal_body`}),` 안에서 스크롤합니다.`]}),`
`,(0,M.jsx)(_,{of:p,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:w.scroll}),`
`,(0,M.jsx)(t.h2,{id:`중첩-modal`,children:`중첩 Modal`}),`
`,(0,M.jsx)(t.p,{children:`중첩된 경우 최상위 대화상자만 조작하고 아래 Modal의 백드롭은 숨깁니다.`}),`
`,(0,M.jsx)(_,{of:d,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:w.nested}),`
`,(0,M.jsx)(t.h2,{id:`백드롭-없음`,children:`백드롭 없음`}),`
`,(0,M.jsx)(t.p,{children:`배경 맥락을 유지해야 하는 제한적인 상황에서만 사용합니다.`}),`
`,(0,M.jsx)(_,{of:r,sourceState:`none`}),`
`,(0,M.jsx)(x,{examples:w.noBackdrop}),`
`,(0,M.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,M.jsxs)(t.p,{children:[`Modal은 `,(0,M.jsx)(t.code,{children:`role="dialog"`}),`, `,(0,M.jsx)(t.code,{children:`aria-modal="true"`}),`, 제목 연결을 제공하고 열릴 때 내부로 포커스를 이동합니다. Tab 키는 Modal 안에서 순환하며 Esc로 닫은 뒤 기존 포커스를 복원합니다.`]}),`
`,(0,M.jsx)(S,{sections:O})]})}function j(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=t(),h(),v(),y(),b(),T(),k(),a()})))()}N();export{j as default};