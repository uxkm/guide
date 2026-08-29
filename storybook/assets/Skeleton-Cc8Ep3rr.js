import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./Skeleton.stories-ChgAJ5T0.js";import{i as c,r as l}from"./react-CJGa1lBW.js";import{c as u,r as d,u as f}from"./blocks-SMgDWto2.js";import{i as p,n as m,r as h,t as g}from"./ComponentApiDocs-DtZNZjDp.js";import{h as _,m as v,s as y}from"./feedbackDocumentationExamples-BjU6qeOK.js";var b,x,S;function C(){return(C=e((()=>{b=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],x=(e,t,n)=>({title:e,description:n,tables:[{columns:b,rows:t}]}),S=[x(`Skeleton API`,[{name:`active`,type:`boolean`,default:`true`,description:`쉬머 애니메이션 활성 여부입니다.`},{name:`avatar · round`,type:`boolean`,default:`false`,description:`아바타 행 또는 원형 플레이스홀더를 표시합니다.`},{name:`paragraph`,type:`boolean | number`,default:`false`,description:`본문 줄 수입니다. 기본 형태에서는 3줄을 표시합니다.`},{name:`ariaLabel`,type:`string`,default:`'콘텐츠 로딩 중'`,description:`로딩 영역의 접근성 이름입니다.`},{name:`children · default slot`,type:`ReactNode`,default:`—`,description:`카드처럼 직접 구성하는 추가 플레이스홀더입니다.`}]),x(`HTML · Gulp`,[{name:`skeleton_group · skeleton_row`,type:`class`,default:`—`,description:`세로 그룹과 아바타 행 레이아웃입니다.`},{name:`skeleton_text · skeleton_title · skeleton_circle`,type:`class`,default:`—`,description:`텍스트, 제목, 원형 형태입니다.`},{name:`skeleton_image · skeleton_button · skeleton_block`,type:`class`,default:`—`,description:`이미지, 버튼, 블록 형태입니다.`},{name:`skeleton_w-sm · skeleton_w-md · skeleton_w-lg`,type:`class`,default:`—`,description:`플레이스홀더 너비를 조절합니다.`},{name:`skeleton_static`,type:`class`,default:`—`,description:`쉬머 애니메이션을 끕니다.`}]),x(`디자인 토큰`,[{name:`--skeleton-bg · --skeleton-shine`,type:`color`,default:`surface tokens`,description:`기본 면과 쉬머 색상입니다.`},{name:`--skeleton-gap · --skeleton-duration`,type:`length · time`,default:`space-sm · 1.4s`,description:`항목 간격과 애니메이션 시간입니다.`},{name:`--skeleton-title-width · --skeleton-avatar-size`,type:`length`,default:`40% · avatar-size`,description:`제목 너비와 원형 크기입니다.`}]),x(`WebSquare API · XML`,[{name:`w2:group.skeleton_group`,type:`XML element · class`,default:`role='status'`,description:`Skeleton 그룹 루트입니다. aria-busy와 aria-live를 함께 사용합니다.`},{name:`skeleton_text · skeleton_title · skeleton_circle · skeleton_image`,type:`class`,default:`—`,description:`텍스트, 제목, 원형, 이미지 플레이스홀더입니다.`},{name:`skeleton_row · skeleton_static`,type:`class`,default:`—`,description:`아바타 행 레이아웃과 쉬머 비활성 상태입니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function w(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...c(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u,{of:r}),`
`,(0,E.jsx)(t.h1,{id:`skeleton`,children:`Skeleton`}),`
`,(0,E.jsx)(t.p,{children:`콘텐츠를 불러오는 동안 실제 레이아웃과 유사한 플레이스홀더를 표시합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,E.jsxs)(t.p,{children:[`로딩 영역은 `,(0,E.jsx)(t.code,{children:`role="status"`}),`, `,(0,E.jsx)(t.code,{children:`aria-live="polite"`}),`, `,(0,E.jsx)(t.code,{children:`aria-busy="true"`}),`를 제공하고 장식용 플레이스홀더는 보조 기술에서 제외합니다. `,(0,E.jsx)(t.code,{children:`prefers-reduced-motion`}),` 환경에서는 쉬머 애니메이션이 자동으로 비활성화됩니다.`]}),`
`,(0,E.jsxs)(t.p,{children:[`WebSquare는 플레이스홀더 그룹을 `,(0,E.jsx)(t.code,{children:`w2:group.skeleton_group`}),`, 개별 형태를 `,(0,E.jsx)(t.code,{children:`w2:textbox.skeleton_*`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,E.jsx)(t.code,{children:`w2`}),`, `,(0,E.jsx)(t.code,{children:`xf`}),`, `,(0,E.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,E.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,E.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Skeleton 자체의 실제 원본 구현입니다. React와 Vue는 아바타·문단·원형·카드형 플레이스홀더와 쉬머 활성 여부를 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.code,{children:`paragraph`}),`로 본문 줄 수를 지정합니다.`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.code,{children:`avatar`}),`·`,(0,E.jsx)(t.code,{children:`round`}),`로 원형 플레이스홀더를 조합합니다.`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.code,{children:`active={false}`}),` 또는 `,(0,E.jsx)(t.code,{children:`skeleton_static`}),`으로 쉬머를 끕니다.`]}),`
`,(0,E.jsx)(t.li,{children:`children/슬롯으로 카드형 커스텀 구성을 지원합니다.`}),`
`]}),`
`,(0,E.jsx)(h,{examples:v,showFullCode:!0}),`
`,(0,E.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,E.jsxs)(t.p,{children:[(0,E.jsx)(t.code,{children:`w2:group.skeleton_group`}),`에 `,(0,E.jsx)(t.code,{children:`role="status"`}),`와 `,(0,E.jsx)(t.code,{children:`aria-busy="true"`}),`를 적용하고 `,(0,E.jsx)(t.code,{children:`skeleton_text`}),`·`,(0,E.jsx)(t.code,{children:`skeleton_title`}),`·`,(0,E.jsx)(t.code,{children:`skeleton_circle`}),`로 형태를 조합합니다. 정적 표시는 `,(0,E.jsx)(t.code,{children:`skeleton_static`}),` 클래스를 사용합니다.`]}),`
`,(0,E.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,E.jsx)(d,{of:s,sourceState:`none`}),`
`,(0,E.jsx)(h,{examples:_.basic}),`
`,(0,E.jsx)(t.h2,{id:`형태`,children:`형태`}),`
`,(0,E.jsx)(d,{of:o,sourceState:`none`}),`
`,(0,E.jsx)(h,{examples:_.shape}),`
`,(0,E.jsx)(t.h2,{id:`카드`,children:`카드`}),`
`,(0,E.jsx)(d,{of:i,sourceState:`none`}),`
`,(0,E.jsx)(h,{examples:_.card}),`
`,(0,E.jsx)(t.h2,{id:`정적`,children:`정적`}),`
`,(0,E.jsx)(d,{of:n,sourceState:`none`}),`
`,(0,E.jsx)(h,{examples:_.static}),`
`,(0,E.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,E.jsxs)(t.p,{children:[`로딩 영역은 `,(0,E.jsx)(t.code,{children:`role="status"`}),`, `,(0,E.jsx)(t.code,{children:`aria-live="polite"`}),`, `,(0,E.jsx)(t.code,{children:`aria-busy="true"`}),`를 제공하고 장식용 플레이스홀더는 보조 기술에서 제외합니다. `,(0,E.jsx)(t.code,{children:`prefers-reduced-motion`}),` 환경에서는 쉬머 애니메이션이 자동으로 비활성화됩니다.`]}),`
`,(0,E.jsx)(g,{sections:S})]})}function T(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;function D(){return(D=e((()=>{E=t(),l(),f(),p(),m(),y(),C(),a()})))()}D();export{T as default};