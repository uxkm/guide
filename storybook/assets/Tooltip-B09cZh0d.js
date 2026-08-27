import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g}from"./Tooltip.stories-DdNeJ2As.js";import{i as _,r as v}from"./react-BBfuIdny.js";import{c as y,r as b,u as x}from"./blocks-DbhChoan.js";import{i as S,n as C,r as w,t as T}from"./ComponentApiDocs-arf-yre-.js";import{b as E,s as D,x as O}from"./feedbackDocumentationExamples-BjU6qeOK.js";var k,A,j;function M(){return(M=e((()=>{k=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],A=(e,t,n)=>({title:e,description:n,tables:[{columns:k,rows:t}]}),j=[A(`React · Next.js API`,[{name:`content · children`,type:`ReactNode`,default:`—`,description:`말풍선 내용입니다.`},{name:`open · defaultOpen · onOpenChange`,type:`boolean · function`,default:`— · false · —`,description:`제어·비제어 열림 상태입니다.`},{name:`triggerContent · trigger`,type:`ReactNode · 'hover' | 'click'`,default:`— · 'hover'`,description:`트리거 콘텐츠와 작동 방식입니다.`},{name:`placement`,type:`'top' | 'top-start' | 'top-end' | 'left' | 'right' | 'start' | 'end'`,default:`아래 가운데`,description:`브라우저 뷰포트 기준 배치입니다.`},{name:`size · offset · offsetTop/Right/Bottom/Left`,type:`string`,default:`'md'`,description:`크기와 전체·방향별 간격입니다.`},{name:`arrowAnchor · panelAlign · arrowTargetAlign`,type:`string`,default:`'content' · 'center' · 'center'`,description:`말풍선과 화살표 정렬 기준입니다.`},{name:`inverse · noArrow · disabled · closable`,type:`boolean`,default:`false · false · false · 자동`,description:`역색, 화살표, 비활성, 닫기 버튼 옵션입니다.`}],`Next.js는 @uxkm/react/tooltip을 재사용합니다.`),A(`Vue · Nuxt API`,[{name:`content · open · default-open · trigger`,type:`string · boolean · string`,default:`— · — · false · 'hover'`,description:`내용, 열림 상태, 트리거 방식입니다.`},{name:`trigger · default`,type:`slot`,default:`—`,description:`트리거와 말풍선 슬롯입니다.`}],`Nuxt는 @uxkm/vue/tooltip을 재사용합니다.`),A(`HTML · Gulp`,[{name:`tooltip · tooltip_trigger · tooltip_bubble`,type:`class`,default:`—`,description:`루트, 트리거, 말풍선입니다.`},{name:`data-tooltip · data-tooltip-trigger · data-tooltip-close`,type:`attribute`,default:`—`,description:`호버·클릭·닫기 동작입니다.`}]),A(`디자인 토큰`,[{name:`--tooltip-max-width · --tooltip-offset`,type:`length`,default:`16rem · space-xs`,description:`말풍선 최대 너비와 간격입니다.`},{name:`--z-tooltip`,type:`number`,default:`120`,description:`레이어 순서입니다.`}]),A(`WebSquare API · XML`,[{name:`w2:group.tooltip`,type:`XML element · class`,default:`—`,description:`Tooltip 루트입니다. tooltip_trigger와 tooltip_bubble을 포함합니다.`},{name:`tooltip_bubble · tooltip_content · tooltip_inverse`,type:`class`,default:`—`,description:`말풍선 본문과 역색 변형입니다.`},{name:`xf:trigger.tooltip_trigger · aria-describedby`,type:`XML element · ARIA`,default:`—`,description:`트리거와 말풍선의 접근성 연결입니다.`},{name:`role="tooltip"`,type:`ARIA attribute`,default:`—`,description:`말풍선의 역할입니다.`},{name:`ev:onmouseover · ev:onmouseout · ev:onclick`,type:`WebSquare event`,default:`—`,description:`호버·클릭 열기/닫기 동작을 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function N(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,..._(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(y,{of:f}),`
`,(0,F.jsx)(t.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,F.jsx)(t.p,{children:`호버·포커스 또는 클릭으로 짧은 도움말을 표시합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,F.jsxs)(t.p,{children:[`말풍선은 전체 브라우저 DOM에 렌더링되며 트리거 좌표를 유지합니다. 트리거와 `,(0,F.jsx)(t.code,{children:`role="tooltip"`}),` 말풍선을 `,(0,F.jsx)(t.code,{children:`aria-describedby`}),`로 연결합니다.`]}),`
`,(0,F.jsxs)(t.p,{children:[`WebSquare는 루트를 `,(0,F.jsx)(t.code,{children:`w2:group.tooltip`}),`, 트리거를 `,(0,F.jsx)(t.code,{children:`xf:trigger`}),`, 말풍선을 `,(0,F.jsx)(t.code,{children:`w2:group.tooltip_bubble`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,F.jsx)(t.code,{children:`w2`}),`, `,(0,F.jsx)(t.code,{children:`xf`}),`, `,(0,F.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,F.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,F.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Tooltip 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 열림 상태, 배치, 크기, 역색, 화살표와 트리거 방식을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`기본 `,(0,F.jsx)(t.code,{children:`trigger`}),`는 hover이며 click으로 전환할 수 있습니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`inverse`}),`는 어두운 배경 말풍선을 적용합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`noArrow`}),`와 `,(0,F.jsx)(t.code,{children:`arrowAnchor`}),`로 화살표 표시·기준을 조절합니다.`]}),`
`,(0,F.jsx)(t.li,{children:`포커스로 열 수 있고 Esc와 외부 클릭으로 닫을 수 있습니다.`}),`
`]}),`
`,(0,F.jsx)(w,{examples:E,showFullCode:!0}),`
`,(0,F.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`w2:group.tooltip`}),` 안에 트리거와 `,(0,F.jsx)(t.code,{children:`tooltip_bubble`}),`을 배치하고 `,(0,F.jsx)(t.code,{children:`aria-describedby`}),`로 연결합니다. 호버·클릭 열기는 `,(0,F.jsx)(t.code,{children:`xf:trigger`}),` 이벤트에서 화면 스크립트로 처리합니다.`]}),`
`,(0,F.jsxs)(t.p,{children:[`배치·역색·크기는 `,(0,F.jsx)(t.code,{children:`data-tooltip-placement`}),`과 `,(0,F.jsx)(t.code,{children:`tooltip_inverse`}),`·`,(0,F.jsx)(t.code,{children:`tooltip_sm`}),` 클래스로 표현합니다.`]}),`
`,(0,F.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,F.jsx)(b,{of:u,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:O.basic}),`
`,(0,F.jsx)(t.h2,{id:`슬롯`,children:`슬롯`}),`
`,(0,F.jsx)(b,{of:a,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:O.slot}),`
`,(0,F.jsx)(t.h2,{id:`열린-상태`,children:`열린 상태`}),`
`,(0,F.jsx)(b,{of:c,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:O.open}),`
`,(0,F.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,F.jsx)(b,{of:i,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:O.size}),`
`,(0,F.jsx)(t.h2,{id:`간격`,children:`간격`}),`
`,(0,F.jsx)(b,{of:r,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:O.offset}),`
`,(0,F.jsx)(t.h2,{id:`인라인`,children:`인라인`}),`
`,(0,F.jsx)(b,{of:n,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:O.inline}),`
`,(0,F.jsx)(t.h2,{id:`트리거-유형`,children:`트리거 유형`}),`
`,(0,F.jsx)(b,{of:l,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:O.trigger}),`
`,(0,F.jsx)(t.h2,{id:`클릭-트리거`,children:`클릭 트리거`}),`
`,(0,F.jsx)(b,{of:p,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:O.click}),`
`,(0,F.jsx)(t.h2,{id:`배치`,children:`배치`}),`
`,(0,F.jsx)(b,{of:g,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:O.placement}),`
`,(0,F.jsx)(t.h2,{id:`역색`,children:`역색`}),`
`,(0,F.jsx)(b,{of:d,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:O.inverse}),`
`,(0,F.jsx)(t.h2,{id:`비활성-트리거`,children:`비활성 트리거`}),`
`,(0,F.jsx)(b,{of:s,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:O.disabled}),`
`,(0,F.jsx)(t.h2,{id:`화살표-기준`,children:`화살표 기준`}),`
`,(0,F.jsx)(b,{of:h,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:O.arrowAnchor}),`
`,(0,F.jsx)(t.h2,{id:`화살표-없음`,children:`화살표 없음`}),`
`,(0,F.jsx)(b,{of:m,sourceState:`none`}),`
`,(0,F.jsx)(w,{examples:O.noArrow}),`
`,(0,F.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,F.jsxs)(t.p,{children:[`트리거와 `,(0,F.jsx)(t.code,{children:`role="tooltip"`}),` 말풍선을 `,(0,F.jsx)(t.code,{children:`aria-describedby`}),`로 연결합니다. 포커스로 열 수 있고 Esc와 외부 클릭으로 닫을 수 있습니다.`]}),`
`,(0,F.jsx)(T,{sections:j})]})}function P(e={}){let{wrapper:t}={..._(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),v(),x(),S(),C(),D(),M(),o()})))()}I();export{P as default};