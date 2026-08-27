import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u}from"./Spin.stories-DUDlifBU.js";import{i as d,r as f}from"./react-BBfuIdny.js";import{c as p,r as m,u as h}from"./blocks-DbhChoan.js";import{i as g,n as _,r as v,t as y}from"./ComponentApiDocs-arf-yre-.js";import{s as b,v as x,y as S}from"./feedbackDocumentationExamples-BjU6qeOK.js";var C,w,T;function E(){return(E=e((()=>{C=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],w=(e,t,n)=>({title:e,description:n,tables:[{columns:C,rows:t}]}),T=[w(`Spin API`,[{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`스피너 크기입니다.`},{name:`tip · color`,type:`string`,default:`— · 'primary'`,description:`설명 문구와 의미 색상입니다.`},{name:`inline · block · overlay`,type:`boolean`,default:`false`,description:`인라인, 전체 너비, 오버레이 배치입니다.`},{name:`ariaLabel`,type:`string`,default:`'로딩 중'`,description:`상태 접근성 이름입니다.`}]),w(`SpinWrap API`,[{name:`loading · block · blur`,type:`boolean`,default:`false`,description:`로딩 표시, 최소 높이, 블러 효과입니다.`},{name:`tip · ariaLabel · children`,type:`string · ReactNode`,default:`—`,description:`오버레이 문구와 대상 콘텐츠입니다.`}]),w(`HTML · Gulp`,[{name:`spin · spin_indicator · spin_tip`,type:`class`,default:`—`,description:`스피너 루트, 표시기, 문구입니다.`},{name:`spin_wrap · spin_wrap-body · is-loading`,type:`class`,default:`—`,description:`컨테이너 오버레이 구조와 상태입니다.`}]),w(`디자인 토큰`,[{name:`--spin-size · --spin-duration`,type:`length · time`,default:`2rem · 0.8s`,description:`표시기 크기와 회전 시간입니다.`},{name:`--spin-overlay-bg · --spin-wrap-content-opacity`,type:`color · number`,default:`rgba(15,20,25,.72) · .45`,description:`오버레이 배경과 콘텐츠 투명도입니다.`}]),w(`WebSquare API · XML`,[{name:`w2:group.spin`,type:`XML element · class`,default:`role='status'`,description:`스피너 루트입니다. aria-busy와 aria-live를 함께 사용합니다.`},{name:`spin_indicator · spin_tip`,type:`class`,default:`—`,description:`회전 표시기와 설명 문구입니다.`},{name:`w2:group.spin_wrap · spin_overlay · is-loading`,type:`XML element · class`,default:`—`,description:`콘텐츠 위 오버레이 래퍼와 로딩 상태입니다.`},{name:`spin_sm · spin_lg · spin_inline · spin_block`,type:`class`,default:`—`,description:`크기와 배치 변형입니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function D(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...d(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p,{of:l}),`
`,(0,k.jsx)(t.h1,{id:`spin`,children:`Spin`}),`
`,(0,k.jsx)(t.p,{children:`작업이 진행 중임을 회전 표시기 또는 콘텐츠 오버레이로 안내합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,k.jsxs)(t.p,{children:[`Spin은 `,(0,k.jsx)(t.code,{children:`role="status"`}),`, `,(0,k.jsx)(t.code,{children:`aria-live="polite"`}),`, `,(0,k.jsx)(t.code,{children:`aria-busy="true"`}),`를 제공하며 장식용 표시기는 보조 기술에서 제외합니다. 콘텐츠 위 오버레이는 `,(0,k.jsx)(t.code,{children:`SpinWrap`}),`으로 제공합니다.`]}),`
`,(0,k.jsxs)(t.p,{children:[`WebSquare는 표시기를 `,(0,k.jsx)(t.code,{children:`w2:group.spin`}),`, 오버레이 래퍼를 `,(0,k.jsx)(t.code,{children:`w2:group.spin_wrap`}),`으로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,k.jsx)(t.code,{children:`w2`}),`, `,(0,k.jsx)(t.code,{children:`xf`}),`, `,(0,k.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,k.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,k.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Spin과 SpinWrap의 실제 원본 구현입니다. React와 Vue는 크기, 색상, 설명 문구, 인라인·블록·오버레이 배치를 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.code,{children:`tip`}),`은 표시기 아래 설명 문구를 제공합니다.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.code,{children:`inline`}),`·`,(0,k.jsx)(t.code,{children:`block`}),`·`,(0,k.jsx)(t.code,{children:`overlay`}),`로 배치 방식을 전환합니다.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.code,{children:`SpinWrap`}),`은 대상 콘텐츠 위에 로딩 오버레이를 올립니다.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.code,{children:`blur`}),`는 오버레이 아래 콘텐츠에 블러를 적용합니다.`]}),`
`]}),`
`,(0,k.jsx)(v,{examples:x,showFullCode:!0}),`
`,(0,k.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,k.jsxs)(t.p,{children:[(0,k.jsx)(t.code,{children:`w2:group.spin`}),`에 `,(0,k.jsx)(t.code,{children:`role="status"`}),`와 `,(0,k.jsx)(t.code,{children:`aria-busy="true"`}),`를 적용하고 표시기는 `,(0,k.jsx)(t.code,{children:`spin_indicator`}),`로 구성합니다. 컨테이너 오버레이는 `,(0,k.jsx)(t.code,{children:`spin_wrap is-loading`}),` 안에 콘텐츠와 `,(0,k.jsx)(t.code,{children:`spin_overlay`}),`를 함께 둡니다.`]}),`
`,(0,k.jsxs)(t.p,{children:[`크기·색상은 `,(0,k.jsx)(t.code,{children:`spin_sm`}),`·`,(0,k.jsx)(t.code,{children:`spin_lg`}),`와 `,(0,k.jsx)(t.code,{children:`color_*`}),` 클래스로 표현합니다.`]}),`
`,(0,k.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,k.jsx)(m,{of:u,sourceState:`none`}),`
`,(0,k.jsx)(v,{examples:S.basic}),`
`,(0,k.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,k.jsx)(m,{of:s,sourceState:`none`}),`
`,(0,k.jsx)(v,{examples:S.size}),`
`,(0,k.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,k.jsx)(m,{of:c,sourceState:`none`}),`
`,(0,k.jsx)(v,{examples:S.color}),`
`,(0,k.jsx)(t.h2,{id:`설명-텍스트`,children:`설명 텍스트`}),`
`,(0,k.jsx)(m,{of:r,sourceState:`none`}),`
`,(0,k.jsx)(v,{examples:S.tip}),`
`,(0,k.jsx)(t.h2,{id:`인라인`,children:`인라인`}),`
`,(0,k.jsx)(m,{of:i,sourceState:`none`}),`
`,(0,k.jsx)(v,{examples:S.inline}),`
`,(0,k.jsx)(t.h2,{id:`블록-정렬`,children:`블록 정렬`}),`
`,(0,k.jsx)(m,{of:o,sourceState:`none`}),`
`,(0,k.jsx)(v,{examples:S.block}),`
`,(0,k.jsx)(t.h2,{id:`컨테이너-오버레이`,children:`컨테이너 오버레이`}),`
`,(0,k.jsx)(m,{of:n,sourceState:`none`}),`
`,(0,k.jsx)(v,{examples:S.overlay}),`
`,(0,k.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,k.jsxs)(t.p,{children:[`Spin은 `,(0,k.jsx)(t.code,{children:`role="status"`}),`, `,(0,k.jsx)(t.code,{children:`aria-live="polite"`}),`, `,(0,k.jsx)(t.code,{children:`aria-busy="true"`}),`를 제공하며 장식용 표시기는 보조 기술에서 제외합니다.`]}),`
`,(0,k.jsx)(y,{sections:T})]})}function O(e={}){let{wrapper:t}={...d(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;function A(){return(A=e((()=>{k=t(),f(),h(),g(),_(),b(),E(),a()})))()}A();export{O as default};