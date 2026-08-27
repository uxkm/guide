import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./Alert.stories-Cm-Vf9AC.js";import{i as f,r as p}from"./react-BBfuIdny.js";import{c as m,r as h,u as g}from"./blocks-DbhChoan.js";import{i as _,n as v,r as y,t as b}from"./ComponentApiDocs-arf-yre-.js";import{n as x,s as S,t as C}from"./feedbackDocumentationExamples-BjU6qeOK.js";var w,T,E;function D(){return(D=e((()=>{w=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],T=(e,t,n)=>({title:e,description:n,tables:[{columns:w,rows:t}]}),E=[T(`React · Next.js API`,[{name:`color`,type:`'info' | 'success' | 'warning' | 'danger'`,default:`'info'`,description:`의미 색상입니다. danger는 color_error를 사용합니다.`},{name:`title · description`,type:`ReactNode`,default:`—`,description:`제목과 본문입니다.`},{name:`closable · showIcon · banner`,type:`boolean`,default:`false · true · false`,description:`닫기, 아이콘, 배너 변형입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`알림 크기입니다.`},{name:`icon · actions · children`,type:`ReactNode`,default:`—`,description:`커스텀 아이콘, 액션, 본문입니다.`},{name:`onClose`,type:`event handler`,default:`—`,description:`닫기 버튼 클릭 시 호출됩니다.`}],`Next.js는 @uxkm/react/alert를 재사용합니다.`),T(`Vue · Nuxt API`,[{name:`color · size · role`,type:`string`,default:`'info' · 'md' · 'alert'`,description:`색상, 크기, 접근성 역할입니다.`},{name:`closable · show-icon · banner`,type:`boolean`,default:`false · true · false`,description:`표시 옵션입니다.`},{name:`icon · actions · default`,type:`slot`,default:`—`,description:`커스텀 콘텐츠 슬롯입니다.`},{name:`@close`,type:`event`,default:`—`,description:`닫기 이벤트입니다.`}],`Nuxt는 @uxkm/vue/alert를 재사용합니다.`),T(`HTML · Gulp`,[{name:`alert · alert_sm · alert_lg · alert_banner`,type:`class`,default:`—`,description:`루트, 크기, 배너 클래스입니다.`},{name:`color_info · color_success · color_warning · color_error`,type:`class`,default:`—`,description:`의미 색상입니다.`},{name:`alert_icon · alert_body · alert_title · alert_desc`,type:`class`,default:`—`,description:`구조 파트입니다.`},{name:`close`,type:`CustomEvent`,default:`—`,description:`닫힌 뒤 발생합니다.`}]),T(`디자인 토큰`,[{name:`--alert-padding-* · --alert-gap`,type:`length`,default:`크기별 값`,description:`패딩과 간격입니다.`},{name:`--alert-icon-size · --alert-close-size`,type:`length`,default:`1.25rem`,description:`아이콘과 닫기 버튼 크기입니다.`},{name:`--alert-title-weight · --alert-desc-opacity`,type:`number`,default:`600 · 0.85`,description:`제목과 설명 표현입니다.`}]),T(`WebSquare API · XML`,[{name:`w2:group.alert`,type:`XML element · class`,default:`role='alert'`,description:`알림 루트입니다. color_info·color_success·color_warning·color_error와 함께 사용합니다.`},{name:`w2:textbox.alert_title · alert_desc`,type:`XML element · class`,default:`—`,description:`제목과 본문 텍스트를 표시합니다.`},{name:`alert_sm · alert_lg · alert_banner`,type:`class`,default:`—`,description:`크기와 배너 변형입니다.`},{name:`xf:trigger.alert_close · alert_actions`,type:`XML element · class`,default:`—`,description:`닫기 버튼과 보조 액션 영역을 구성합니다.`},{name:`ev:onclick`,type:`WebSquare event`,default:`—`,description:`닫기 또는 액션 버튼 클릭 시 화면 스크립트를 실행합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function O(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...f(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m,{of:o}),`
`,(0,A.jsx)(t.h1,{id:`alert`,children:`Alert`}),`
`,(0,A.jsx)(t.p,{children:`정보·성공·경고·오류 메시지를 전달하는 알림 컴포넌트입니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,A.jsxs)(t.p,{children:[`의미 색상은 `,(0,A.jsx)(t.code,{children:`color_info`}),`·`,(0,A.jsx)(t.code,{children:`color_success`}),`·`,(0,A.jsx)(t.code,{children:`color_warning`}),`·`,(0,A.jsx)(t.code,{children:`color_error`}),`로 표현하고, 기본 접근성 역할은 `,(0,A.jsx)(t.code,{children:`role="alert"`}),`입니다. 닫기 가능한 알림은 닫은 뒤 DOM에서 제거되고 `,(0,A.jsx)(t.code,{children:`close`}),`/`,(0,A.jsx)(t.code,{children:`onClose`}),` 이벤트를 발생시킵니다.`]}),`
`,(0,A.jsxs)(t.p,{children:[`WebSquare는 알림 루트를 `,(0,A.jsx)(t.code,{children:`w2:group`}),`(role=`,(0,A.jsx)(t.code,{children:`alert`}),`), 제목·본문을 `,(0,A.jsx)(t.code,{children:`w2:textbox`}),`, 닫기·액션을 `,(0,A.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,A.jsx)(t.code,{children:`w2`}),`, `,(0,A.jsx)(t.code,{children:`xf`}),`, `,(0,A.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,A.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,A.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Alert 자체의 실제 원본 구현입니다. React와 Vue는 색상, 크기, 아이콘, 닫기, 배너 변형과 접근성 역할을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.code,{children:`color`}),`의 `,(0,A.jsx)(t.code,{children:`danger`}),`는 공통 `,(0,A.jsx)(t.code,{children:`color_error`}),` 클래스로 변환합니다.`]}),`
`,(0,A.jsxs)(t.li,{children:[`지원하지 않는 크기는 `,(0,A.jsx)(t.code,{children:`md`}),`로 정규화하고 `,(0,A.jsx)(t.code,{children:`alert_sm`}),`·`,(0,A.jsx)(t.code,{children:`alert_lg`}),` 클래스로 변환합니다.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.code,{children:`closable`}),`은 닫기 버튼을 표시하고 닫힌 뒤 컴포넌트를 언마운트합니다.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.code,{children:`banner`}),`는 전체 너비 배너 레이아웃을 적용합니다.`]}),`
`]}),`
`,(0,A.jsx)(y,{examples:C,showFullCode:!0}),`
`,(0,A.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`w2:group`}),`에 `,(0,A.jsx)(t.code,{children:`alert`}),`와 의미 색상 클래스를 적용하고 `,(0,A.jsx)(t.code,{children:`role="alert"`}),`로 즉시 알림을 전달합니다. 제목·설명은 `,(0,A.jsx)(t.code,{children:`w2:textbox`}),`의 `,(0,A.jsx)(t.code,{children:`alert_title`}),`·`,(0,A.jsx)(t.code,{children:`alert_desc`}),`로 구성합니다.`]}),`
`,(0,A.jsxs)(t.p,{children:[`닫기와 액션은 `,(0,A.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,A.jsx)(t.code,{children:`ev:onclick`}),`에서 알림을 숨기거나 후속 동작을 실행합니다. 배너는 `,(0,A.jsx)(t.code,{children:`alert_banner`}),` 클래스로 전체 너비 배치를 맞춥니다.`]}),`
`,(0,A.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,A.jsx)(t.p,{children:`정보·성공·경고·오류 색상의 기본 알림입니다.`}),`
`,(0,A.jsx)(h,{of:i,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:x.basic}),`
`,(0,A.jsx)(t.h2,{id:`설명만`,children:`설명만`}),`
`,(0,A.jsx)(t.p,{children:`제목 없이 본문만 전달하는 알림입니다.`}),`
`,(0,A.jsx)(h,{of:l,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:x.descriptionOnly}),`
`,(0,A.jsx)(t.h2,{id:`아이콘-없음`,children:`아이콘 없음`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`showIcon={false}`}),`로 상태 아이콘을 숨깁니다.`]}),`
`,(0,A.jsx)(h,{of:r,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:x.noIcon}),`
`,(0,A.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,A.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 제공합니다.`}),`
`,(0,A.jsx)(h,{of:a,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:x.size}),`
`,(0,A.jsx)(t.h2,{id:`닫기-가능`,children:`닫기 가능`}),`
`,(0,A.jsxs)(t.p,{children:[`닫기 버튼은 알림을 제거하고 `,(0,A.jsx)(t.code,{children:`close`}),`/`,(0,A.jsx)(t.code,{children:`onClose`}),` 이벤트를 발생시킵니다.`]}),`
`,(0,A.jsx)(h,{of:n,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:x.closable}),`
`,(0,A.jsx)(t.h2,{id:`액션`,children:`액션`}),`
`,(0,A.jsx)(t.p,{children:`본문 아래 보조 액션 버튼을 배치합니다.`}),`
`,(0,A.jsx)(h,{of:u,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:x.actions}),`
`,(0,A.jsx)(t.h2,{id:`배너`,children:`배너`}),`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`alert_banner`}),`로 전체 너비 배너 형태를 제공합니다.`]}),`
`,(0,A.jsx)(h,{of:c,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:x.banner}),`
`,(0,A.jsx)(t.h2,{id:`문맥-속-사용`,children:`문맥 속 사용`}),`
`,(0,A.jsx)(t.p,{children:`폼·페이지 문맥에서 검증·안내 메시지를 표시합니다.`}),`
`,(0,A.jsx)(h,{of:s,sourceState:`none`}),`
`,(0,A.jsx)(y,{examples:x.context}),`
`,(0,A.jsx)(b,{sections:E})]})}function k(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;function j(){return(j=e((()=>{A=t(),p(),g(),_(),v(),S(),D(),d()})))()}j();export{k as default};