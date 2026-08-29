import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g}from"./Popover.stories-L5Wi3Lzl.js";import{i as _,r as v}from"./react-CJGa1lBW.js";import{c as y,r as b,u as x}from"./blocks-SMgDWto2.js";import{i as S,n as C,r as w,t as T}from"./ComponentApiDocs-DtZNZjDp.js";import{d as E,s as D,u as O}from"./feedbackDocumentationExamples-BjU6qeOK.js";var k,A,j;function M(){return(M=e((()=>{k=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],A=(e,t,n)=>({title:e,description:n,tables:[{columns:k,rows:t}]}),j=[A(`React · Next.js API`,[{name:`open · defaultOpen · onOpenChange`,type:`boolean · function`,default:`— · false · —`,description:`제어·비제어 열림 상태와 변경 이벤트입니다.`},{name:`triggerContent · trigger`,type:`ReactNode · 'click' | 'hover'`,default:`— · 'click'`,description:`트리거 콘텐츠와 작동 방식입니다.`},{name:`placement`,type:`'top' | 'top-center' | 'bottom' | 'bottom-center' | 'left' | 'right' | 'end'`,default:`'bottom'`,description:`트리거 기준 배치입니다.`},{name:`size · offset`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`패널 크기와 간격입니다.`},{name:`offsetTop · offsetRight · offsetBottom · offsetLeft`,type:`'none' | 'sm' | 'md' | 'lg'`,default:`'md'`,description:`방향별 간격을 개별 지정합니다.`},{name:`arrowAnchor · panelAlign · arrowTargetAlign`,type:`string`,default:`'content' · 'start' · 'center'`,description:`패널과 화살표의 정렬 기준입니다.`},{name:`title · panelLabel · children · footer`,type:`ReactNode`,default:`—`,description:`제목, 접근성 라벨, 본문, 푸터입니다.`},{name:`noArrow · closable · disabled`,type:`boolean`,default:`false · 자동 · false`,description:`화살표, 닫기 버튼, 비활성 옵션입니다.`}],`Next.js는 @uxkm/react/popover를 재사용합니다.`),A(`Vue · Nuxt API`,[{name:`open · default-open · trigger`,type:`boolean · string`,default:`false · 'click'`,description:`열림 상태와 트리거 방식입니다.`},{name:`offset-top · offset-right · offset-bottom · offset-left`,type:`string`,default:`'md'`,description:`방향별 간격을 개별 지정합니다.`},{name:`arrow-anchor · panel-align · arrow-target-align`,type:`string`,default:`'content' · 'start' · 'center'`,description:`패널과 화살표의 정렬 기준입니다.`},{name:`trigger · default · footer`,type:`slot`,default:`—`,description:`트리거, 본문, 푸터 슬롯입니다.`}],`Nuxt는 @uxkm/vue/popover를 재사용합니다.`),A(`HTML · Gulp`,[{name:`popover · popover_trigger · popover_panel`,type:`class`,default:`—`,description:`루트, 트리거, 패널입니다.`},{name:`data-popover · data-popover-close`,type:`attribute`,default:`—`,description:`열기와 닫기 동작입니다.`}]),A(`디자인 토큰`,[{name:`--popover-min-width · --popover-max-width`,type:`length`,default:`10rem · 20rem`,description:`패널 너비입니다.`},{name:`--popover-offset · --z-popover`,type:`length · number`,default:`space-sm · 110`,description:`간격과 레이어입니다.`}]),A(`WebSquare API · XML`,[{name:`w2:group.popover`,type:`XML element · class`,default:`—`,description:`Popover 루트입니다. popover_trigger와 popover_panel을 포함합니다.`},{name:`popover_panel · popover_title · popover_body · popover_footer`,type:`class`,default:`—`,description:`패널 구조와 제목·본문·푸터 영역입니다.`},{name:`xf:trigger.popover_trigger · data-popover-close`,type:`XML element · attribute`,default:`—`,description:`열기 트리거와 닫기 동작을 구성합니다.`},{name:`aria-haspopup · aria-expanded · aria-controls`,type:`ARIA attribute`,default:`—`,description:`트리거와 패널의 접근성 연결입니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`열기·닫기·확인 동작을 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function N(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,..._(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(y,{of:i}),`
`,(0,F.jsx)(t.h1,{id:`popover`,children:`Popover`}),`
`,(0,F.jsx)(t.p,{children:`트리거 주변에 보조 정보나 짧은 작업 패널을 표시합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,F.jsxs)(t.p,{children:[`패널은 전체 브라우저 DOM에 렌더링되며 트리거 좌표를 유지합니다. 트리거는 `,(0,F.jsx)(t.code,{children:`aria-haspopup`}),`, `,(0,F.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,F.jsx)(t.code,{children:`aria-controls`}),`를 제공하며 Esc와 외부 클릭으로 닫을 수 있습니다.`]}),`
`,(0,F.jsxs)(t.p,{children:[`WebSquare는 루트를 `,(0,F.jsx)(t.code,{children:`w2:group.popover`}),`, 트리거·닫기를 `,(0,F.jsx)(t.code,{children:`xf:trigger`}),`, 패널·제목·본문을 `,(0,F.jsx)(t.code,{children:`w2:group`}),`/`,(0,F.jsx)(t.code,{children:`w2:textbox`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,F.jsx)(t.code,{children:`w2`}),`, `,(0,F.jsx)(t.code,{children:`xf`}),`, `,(0,F.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,F.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,F.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Popover 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 열림 상태, 배치, 크기, 화살표, 푸터와 트리거 방식을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`trigger`}),`는 click·hover 방식을 지원합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`placement`}),`와 `,(0,F.jsx)(t.code,{children:`offset*`}),`로 패널 위치·간격을 조절합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`noArrow`}),`는 화살표를 숨기고 `,(0,F.jsx)(t.code,{children:`arrowAnchor`}),`는 화살표 기준을 지정합니다.`]}),`
`,(0,F.jsx)(t.li,{children:`Esc와 외부 클릭으로 닫힌 뒤 트리거 포커스를 복원합니다.`}),`
`]}),`
`,(0,F.jsx)(w,{examples:O,showFullCode:!0}),`
`,(0,F.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`w2:group.popover`}),` 안에 트리거와 `,(0,F.jsx)(t.code,{children:`popover_panel`}),`을 배치하고 `,(0,F.jsx)(t.code,{children:`aria-expanded`}),`·`,(0,F.jsx)(t.code,{children:`aria-controls`}),`로 연결합니다. 열기·닫기는 `,(0,F.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,F.jsx)(t.code,{children:`ev:onclick`}),`에서 화면 스크립트로 처리합니다.`]}),`
`,(0,F.jsxs)(t.p,{children:[`배치·크기는 `,(0,F.jsx)(t.code,{children:`data-popover-placement`}),`과 `,(0,F.jsx)(t.code,{children:`popover_sm`}),`·`,(0,F.jsx)(t.code,{children:`popover_lg`}),` 클래스로 표현합니다.`]}),`
`,(0,F.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,F.jsx)(b,{of:u,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:E.basic}),`
`,(0,F.jsx)(t.h2,{id:`라벨-없음`,children:`라벨 없음`}),`
`,(0,F.jsx)(b,{of:m,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:E.noLabel}),`
`,(0,F.jsx)(t.h2,{id:`열린-상태`,children:`열린 상태`}),`
`,(0,F.jsx)(b,{of:c,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:E.open}),`
`,(0,F.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,F.jsx)(b,{of:a,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:E.size}),`
`,(0,F.jsx)(t.h2,{id:`간격`,children:`간격`}),`
`,(0,F.jsx)(b,{of:r,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:E.offset}),`
`,(0,F.jsx)(t.h2,{id:`제목`,children:`제목`}),`
`,(0,F.jsx)(b,{of:f,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:E.title}),`
`,(0,F.jsx)(t.h2,{id:`푸터`,children:`푸터`}),`
`,(0,F.jsx)(b,{of:p,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:E.footer}),`
`,(0,F.jsx)(t.h2,{id:`호버-트리거`,children:`호버 트리거`}),`
`,(0,F.jsx)(b,{of:n,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:E.hover}),`
`,(0,F.jsx)(t.h2,{id:`트리거-유형`,children:`트리거 유형`}),`
`,(0,F.jsx)(b,{of:l,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:E.trigger}),`
`,(0,F.jsx)(t.h2,{id:`배치`,children:`배치`}),`
`,(0,F.jsx)(b,{of:g,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:E.placement}),`
`,(0,F.jsx)(t.h2,{id:`폼`,children:`폼`}),`
`,(0,F.jsx)(b,{of:s,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:E.form}),`
`,(0,F.jsx)(t.h2,{id:`화살표-기준`,children:`화살표 기준`}),`
`,(0,F.jsx)(b,{of:h,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:E.arrowAnchor}),`
`,(0,F.jsx)(t.h2,{id:`화살표-없음`,children:`화살표 없음`}),`
`,(0,F.jsx)(b,{of:d,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:E.noArrow}),`
`,(0,F.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,F.jsxs)(t.p,{children:[`트리거는 `,(0,F.jsx)(t.code,{children:`aria-haspopup`}),`, `,(0,F.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,F.jsx)(t.code,{children:`aria-controls`}),`를 제공하며 Esc와 외부 클릭으로 닫을 수 있습니다.`]}),`
`,(0,F.jsx)(T,{sections:j})]})}function P(e={}){let{wrapper:t}={..._(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),v(),x(),S(),C(),D(),M(),o()})))()}I();export{P as default};