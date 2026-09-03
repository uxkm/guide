import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./Snackbar.stories-GlEhXS21.js";import{i as p,r as m}from"./react-DPG3xyh1.js";import{c as h,r as g,u as _}from"./blocks-BXsfpknd.js";import{i as v,n as y,r as b,t as x}from"./ComponentApiDocs-BKc5okVC.js";import{_ as S,g as C,s as w}from"./feedbackDocumentationExamples-ZkYTdG9Z.js";var T,E,D;function O(){return(O=e((()=>{T=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],E=(e,t,n)=>({title:e,description:n,tables:[{columns:T,rows:t}]}),D=[E(`React · Next.js API`,[{name:`message · children`,type:`ReactNode`,default:`'Snackbar'`,description:`메시지입니다. children이 message보다 우선합니다.`},{name:`color`,type:`'info' | 'success' | 'warning' | 'danger'`,default:`'info'`,description:`의미 색상입니다.`},{name:`size · motion`,type:`'sm' | 'md' | 'lg' · 'fade' | 'slide' | 'none'`,default:`'md' · 'fade'`,description:`크기와 등장·퇴장 효과입니다.`},{name:`closable · showIcon · round`,type:`boolean`,default:`false · true · false`,description:`닫기, 아이콘, 캡슐형 옵션입니다.`},{name:`duration`,type:`number`,default:`0`,description:`자동 닫기 시간(ms)입니다. 호버·포커스 중에는 멈춥니다.`},{name:`placement`,type:`SnackbarPlacement`,default:`'bottom-center'`,description:`위치 및 Slide 방향입니다.`},{name:`icon · action`,type:`ReactNode | render function`,default:`—`,description:`커스텀 아이콘과 후속 액션입니다.`},{name:`onClose`,type:`(reason, event) => void`,default:`—`,description:`close · action · timeout 사유를 전달합니다.`}],`Next.js는 @uxkm/react/snackbar를 재사용합니다.`),E(`Vue · Nuxt API`,[{name:`message · color · size · motion · placement · role`,type:`string`,default:`'Snackbar' · 'info' · 'md' · 'fade' · 'bottom-center' · 'status'`,description:`콘텐츠와 표현 옵션입니다.`},{name:`closable · show-icon · round`,type:`boolean`,default:`false · true · false`,description:`표시 옵션입니다.`},{name:`duration`,type:`number`,default:`0`,description:`자동 닫기 시간(ms)입니다.`},{name:`default · icon · action`,type:`slot`,default:`—`,description:`메시지, 아이콘, 액션 슬롯입니다.`},{name:`@close`,type:`event`,default:`—`,description:`닫기 사유와 원본 이벤트를 전달합니다.`}],`Nuxt는 @uxkm/vue/snackbar를 재사용합니다.`),E(`HTML · Gulp`,[{name:`snackbar · snackbar_message`,type:`class`,default:`—`,description:`루트와 메시지 영역입니다.`},{name:`snackbar_sm · snackbar_lg · snackbar_round`,type:`class`,default:`—`,description:`크기와 형태입니다.`},{name:`snackbar_motion-* · snackbar_placement-*`,type:`class`,default:`—`,description:`모션과 위치입니다.`},{name:`data-snackbar-close · data-snackbar-duration`,type:`attribute`,default:`— · 0`,description:`닫기 트리거와 자동 닫기 시간입니다.`},{name:`snackbar_region-{placement}`,type:`class`,default:`—`,description:`뷰포트 기준 8개 위치 영역입니다.`}]),E(`디자인 토큰`,[{name:`--snackbar-min-width · --snackbar-max-width`,type:`length`,default:`18rem · 36rem`,description:`최소·최대 너비입니다.`},{name:`--snackbar-padding-* · --snackbar-gap`,type:`length`,default:`크기별 값`,description:`패딩과 내부 간격입니다.`},{name:`--snackbar-motion-duration · --snackbar-motion-distance`,type:`time · length`,default:`200ms · 1rem`,description:`모션 시간과 거리입니다.`},{name:`--snackbar-region-offset · --snackbar-region-gap · --snackbar-region-z-index`,type:`length · number`,default:`space-md · space-sm · 1200`,description:`화면 여백, 스택 간격, 레이어입니다.`}]),E(`WebSquare API · XML`,[{name:`w2:group.snackbar`,type:`XML element · class`,default:`role='status'`,description:`Snackbar 루트입니다. color_*와 snackbar_sm·snackbar_lg·snackbar_round를 조합합니다.`},{name:`w2:group.snackbar_region-*`,type:`XML element · class`,default:`—`,description:`뷰포트 기준 배치 영역입니다. 같은 위치의 Snackbar를 세로로 쌓습니다.`},{name:`snackbar_motion-* · data-snackbar-duration`,type:`class · attribute`,default:`fade · 0`,description:`등장·퇴장 모션과 자동 닫기 시간(ms)입니다.`},{name:`xf:trigger.snackbar_close · snackbar_action`,type:`XML element · class`,default:`—`,description:`닫기 버튼과 후속 액션을 구성합니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`닫기·액션 클릭 시 화면 스크립트를 실행합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function k(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...p(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h,{of:f}),`
`,(0,j.jsx)(t.h1,{id:`snackbar`,children:`Snackbar`}),`
`,(0,j.jsx)(t.p,{children:`작업 결과나 짧은 상태 메시지를 화면 흐름을 방해하지 않고 일시적으로 전달합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,j.jsxs)(t.p,{children:[`일반적인 작업 결과는 `,(0,j.jsx)(t.code,{children:`role="status"`}),`로 알리고 즉시 확인해야 하는 오류에만 `,(0,j.jsx)(t.code,{children:`role="alert"`}),`를 사용합니다. 같은 위치의 Snackbar는 `,(0,j.jsx)(t.code,{children:`SnackbarRegion`}),`에서 세로로 쌓입니다.`]}),`
`,(0,j.jsxs)(t.p,{children:[`WebSquare는 메시지를 `,(0,j.jsx)(t.code,{children:`w2:group.snackbar`}),`, 배치 영역을 `,(0,j.jsx)(t.code,{children:`w2:group.snackbar_region-*`}),`, 닫기·액션을 `,(0,j.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,j.jsx)(t.code,{children:`w2`}),`, `,(0,j.jsx)(t.code,{children:`xf`}),`, `,(0,j.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,j.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Snackbar와 SnackbarRegion의 실제 원본 구현입니다. React와 Vue는 색상, 크기, 모션, 배치, 자동 닫기와 접근성 역할을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`color`}),`의 `,(0,j.jsx)(t.code,{children:`danger`}),`는 공통 `,(0,j.jsx)(t.code,{children:`color_error`}),` 클래스로 변환합니다.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`duration`}),` 중 호버·내부 포커스가 있으면 남은 시간을 일시정지합니다.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`placement`}),`는 뷰포트 기준 8개 위치와 Slide 방향을 결정합니다.`]}),`
`,(0,j.jsx)(t.li,{children:`아이콘은 장식 요소로 숨기며 메시지 텍스트로 의미를 전달합니다.`}),`
`]}),`
`,(0,j.jsx)(b,{examples:C,showFullCode:!0}),`
`,(0,j.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`w2:group`}),`에 `,(0,j.jsx)(t.code,{children:`snackbar`}),`와 의미 색상 클래스를 적용하고 기본 `,(0,j.jsx)(t.code,{children:`role="status"`}),`로 전달합니다. 화면 배치는 `,(0,j.jsx)(t.code,{children:`snackbar_region-{placement}`}),` 영역 안에 쌓습니다.`]}),`
`,(0,j.jsxs)(t.p,{children:[`닫기와 액션은 `,(0,j.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,j.jsx)(t.code,{children:`ev:onclick`}),`에 연결하고, 자동 닫기는 `,(0,j.jsx)(t.code,{children:`data-snackbar-duration`}),`과 화면 스크립트 타이머로 처리합니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,j.jsx)(t.p,{children:`정보·성공·경고·오류 색상의 기본 Snackbar입니다.`}),`
`,(0,j.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:S.basic}),`
`,(0,j.jsx)(t.h2,{id:`간단한-메시지`,children:`간단한 메시지`}),`
`,(0,j.jsx)(t.p,{children:`아이콘 없이 메시지만 전달할 수 있습니다.`}),`
`,(0,j.jsx)(g,{of:r,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:S.simple}),`
`,(0,j.jsx)(t.h2,{id:`형태`,children:`형태`}),`
`,(0,j.jsxs)(t.p,{children:[`기본 모서리와 높이 비율에 맞춘 캡슐형 `,(0,j.jsx)(t.code,{children:`round`}),`를 제공합니다.`]}),`
`,(0,j.jsx)(g,{of:u,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:S.shape}),`
`,(0,j.jsx)(t.h2,{id:`호출--닫기-효과`,children:`호출 · 닫기 효과`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`fade`}),`, 배치 방향을 따르는 `,(0,j.jsx)(t.code,{children:`slide`}),`, 전환이 없는 `,(0,j.jsx)(t.code,{children:`none`}),` 모션을 제공합니다.`]}),`
`,(0,j.jsx)(g,{of:n,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:S.motion}),`
`,(0,j.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,j.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 제공합니다.`}),`
`,(0,j.jsx)(g,{of:o,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:S.size}),`
`,(0,j.jsx)(t.h2,{id:`액션`,children:`액션`}),`
`,(0,j.jsx)(t.p,{children:`메시지와 직접 관련된 하나의 짧고 명확한 후속 동작을 배치합니다.`}),`
`,(0,j.jsx)(g,{of:d,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:S.action}),`
`,(0,j.jsx)(t.h2,{id:`닫기-가능`,children:`닫기 가능`}),`
`,(0,j.jsx)(t.p,{children:`닫기 버튼과 내부 포커스 상태의 Esc 키로 닫을 수 있습니다.`}),`
`,(0,j.jsx)(g,{of:l,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:S.closable}),`
`,(0,j.jsx)(t.h2,{id:`자동-닫기`,children:`자동 닫기`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`duration`}),` 이후 닫히며, 호버하거나 내부 요소에 포커스하면 남은 시간이 일시정지됩니다.`]}),`
`,(0,j.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:S.duration}),`
`,(0,j.jsx)(t.h2,{id:`위치--여러-개-동작-테스트`,children:`위치 · 여러 개 동작 테스트`}),`
`,(0,j.jsx)(t.p,{children:`뷰포트 기준 8개 위치를 지원하며 같은 위치의 Snackbar는 세로로 쌓입니다.`}),`
`,(0,j.jsx)(g,{of:c,sourceState:`none`,story:{inline:!0}}),`
`,(0,j.jsx)(b,{examples:S.placement}),`
`,(0,j.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,j.jsxs)(t.p,{children:[`일반적인 작업 결과는 `,(0,j.jsx)(t.code,{children:`role="status"`}),`로 알리고 즉시 확인해야 하는 오류에만 `,(0,j.jsx)(t.code,{children:`role="alert"`}),`를 사용합니다. 아이콘은 장식 요소로 숨기며, 자동 닫기를 사용할 때는 내용을 읽고 액션을 수행할 충분한 시간을 제공해야 합니다.`]}),`
`,(0,j.jsx)(x,{sections:D})]})}function A(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),m(),_(),v(),y(),w(),O(),i()})))()}M();export{A as default};