import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./Switch.stories-CMNZqcK0.js";import{i as m,r as h}from"./react-BBfuIdny.js";import{c as g,r as _,u as v}from"./blocks-DbhChoan.js";import{i as y,n as b,r as x,t as S}from"./ComponentApiDocs-arf-yre-.js";import{_ as C,a as w,g as T}from"./formControlDocumentationExamples-BWmHyzfQ.js";var E,D,O,k;function A(){return(A=e((()=>{E=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],D=(e,t,n)=>({title:e,description:n,tables:[{columns:E,rows:t}]}),O=[{name:`label · children`,type:`string · ReactNode`,default:`—`,description:`레이블 텍스트 또는 사용자 정의 레이블 콘텐츠입니다.`},{name:`checked · defaultChecked`,type:`boolean`,default:`false`,description:`제어 및 비제어 켜짐 상태입니다.`},{name:`disabled · labelEnd`,type:`boolean`,default:`false`,description:`비활성 상태와 레이블 우선 배치입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`트랙과 레이블 크기입니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`전체 Switch 영역을 기준으로 클릭 파장 효과를 표시합니다.`},{name:`ariaLabel`,type:`string`,default:`—`,description:`보이는 레이블이 없는 스위치의 접근 가능한 이름입니다.`},{name:`name · value · className · ...props`,type:`input attributes`,default:`—`,description:`폼 값, 루트 클래스, 네이티브 checkbox 속성입니다.`}],k=[D(`React · Next.js API · Props`,O,`Next.js는 @uxkm/react/switch를 재사용합니다.`),D(`React · Next.js API · Events`,[{name:`onChange`,type:`(event) => void`,default:`—`,description:`켜짐 상태 변경 콜백입니다.`}]),D(`Vue · Nuxt API`,[{name:`label · #default`,type:`string · slot`,default:`—`,description:`레이블 콘텐츠입니다.`},...O.slice(1,5)],`Nuxt는 @uxkm/vue/switch를 재사용합니다.`),D(`HTML · Gulp · 클래스`,[{name:`switch · switch_control · switch_input`,type:`class`,default:`—`,description:`스위치 루트와 checkbox 입력입니다.`},{name:`switch_track · switch_thumb`,type:`class`,default:`—`,description:`트랙과 이동 손잡이입니다.`},{name:`switch_sm · switch_lg · switch_label-end · switch_block`,type:`class`,default:`—`,description:`크기·레이아웃·너비 변형입니다.`},{name:`switch_group · switch_group_compact · switch_group_block`,type:`class`,default:`—`,description:`그룹 간격과 너비입니다.`}]),D(`디자인 토큰`,[{name:`--switch-width · --switch-height`,type:`length`,default:`2.75rem · 1.5rem`,description:`기본 트랙 크기입니다.`},{name:`--switch-width-sm · --switch-width-lg`,type:`length`,default:`2.25rem · 3.25rem`,description:`크기 변형의 트랙 너비입니다.`},{name:`--switch-gap · --switch-radius`,type:`length`,default:`—`,description:`레이블 간격과 트랙 모서리입니다.`}]),D(`WebSquare API · XML`,[{name:`xf:checkbox`,type:`XML element`,default:`—`,description:`스위치 입력으로 사용하는 체크 컴포넌트입니다. role="switch"와 함께 사용합니다.`},{name:`ref · data:*`,type:`DataCollection binding`,default:`—`,description:`켜짐 상태를 DataMap 경로에 양방향 바인딩합니다.`},{name:`trueValue · falseValue · role`,type:`WebSquare property`,default:`Y · N · 'switch'`,description:`저장값과 스위치 역할을 정의합니다.`},{name:`w2:group.switch · switch_track · switch_thumb`,type:`XML element · class`,default:`—`,description:`스위치 루트와 트랙·손잡이 시각 구조를 만듭니다.`},{name:`ev:onchange`,type:`WebSquare event`,default:`—`,description:`켜짐 상태 변경 후 연관 설정 갱신이나 검증 함수를 실행합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function j(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...m(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(g,{of:s}),`
`,(0,N.jsx)(t.h1,{id:`switch`,children:`Switch`}),`
`,(0,N.jsx)(t.p,{children:`설정을 즉시 켜거나 끄는 Switch 컴포넌트입니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`type="checkbox"`}),`와 `,(0,N.jsx)(t.code,{children:`role="switch"`}),`를 함께 사용하며 현재 상태를 `,(0,N.jsx)(t.code,{children:`checked`}),`로 전달합니다. 보이는 레이블이 없는 단독 사용은 `,(0,N.jsx)(t.code,{children:`aria-label`}),`로 접근 가능한 이름을 제공합니다.`]}),`
`,(0,N.jsxs)(t.p,{children:[`WebSquare는 스위치 입력을 `,(0,N.jsx)(t.code,{children:`xf:checkbox`}),`(`,(0,N.jsx)(t.code,{children:`role="switch"`}),`), 트랙·손잡이·레이블 영역을 `,(0,N.jsx)(t.code,{children:`w2:group`}),`과 `,(0,N.jsx)(t.code,{children:`w2:textbox`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,N.jsx)(t.code,{children:`w2`}),`, `,(0,N.jsx)(t.code,{children:`xf`}),`, `,(0,N.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,N.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,N.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Switch 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 켜짐 상태, 크기, 레이블 배치와 접근성 속성을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[`지원하지 않는 크기는 `,(0,N.jsx)(t.code,{children:`md`}),`로 정규화하고 `,(0,N.jsx)(t.code,{children:`switch_sm`}),`·`,(0,N.jsx)(t.code,{children:`switch_lg`}),` 클래스로 변환합니다.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`labelEnd`}),`는 레이블 → 스위치 순서로 배치하며 설정 목록에서 자주 사용합니다.`]}),`
`,(0,N.jsxs)(t.li,{children:[`레이블이 없으면 루트 `,(0,N.jsx)(t.code,{children:`label`}),`에 `,(0,N.jsx)(t.code,{children:`aria-label`}),`을 적용합니다.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.code,{children:`ripple`}),`은 전체 Switch 영역을 기준으로 클릭 파장 효과를 표시합니다.`]}),`
`]}),`
`,(0,N.jsx)(x,{examples:T,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`xf:checkbox`}),`의 `,(0,N.jsx)(t.code,{children:`ref`}),`를 DataMap 경로에 연결하고 `,(0,N.jsx)(t.code,{children:`trueValue`}),`·`,(0,N.jsx)(t.code,{children:`falseValue`}),`로 저장값을 정의합니다. 스위치 역할은 `,(0,N.jsx)(t.code,{children:`role="switch"`}),`로 전달하고 트랙·손잡이는 `,(0,N.jsx)(t.code,{children:`switch_track`}),`·`,(0,N.jsx)(t.code,{children:`switch_thumb`}),` 구조로 맞춥니다.`]}),`
`,(0,N.jsxs)(t.p,{children:[`크기·색상·너비는 공통 `,(0,N.jsx)(t.code,{children:`switch_*`}),`, `,(0,N.jsx)(t.code,{children:`color_*`}),` 클래스로 표현합니다. 상태 변경 후 연관 설정을 갱신할 때는 `,(0,N.jsx)(t.code,{children:`ev:onchange`}),`를 화면 스크립트에 연결합니다.`]}),`
`,(0,N.jsx)(t.h2,{id:`유형`,children:`유형`}),`
`,(0,N.jsx)(t.p,{children:`기본과 레이블 뒤 배치를 한눈에 비교합니다.`}),`
`,(0,N.jsx)(_,{of:p,sourceState:`none`}),`
`,(0,N.jsx)(x,{examples:C.type}),`
`,(0,N.jsx)(t.h2,{id:`레이블-뒤`,children:`레이블 뒤`}),`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`switch_label-end`}),`는 레이블 → 스위치 순서로 배치하며 설정 화면에서 자주 사용합니다.`]}),`
`,(0,N.jsx)(_,{of:n,sourceState:`none`}),`
`,(0,N.jsx)(x,{examples:C.labelEnd}),`
`,(0,N.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,N.jsx)(t.p,{children:`레이블이 포함된 기본 스위치입니다.`}),`
`,(0,N.jsx)(_,{of:f,sourceState:`none`}),`
`,(0,N.jsx)(x,{examples:C.basic}),`
`,(0,N.jsx)(t.h2,{id:`단독-사용`,children:`단독 사용`}),`
`,(0,N.jsxs)(t.p,{children:[`보이는 레이블 없이 `,(0,N.jsx)(t.code,{children:`aria-label`}),`로 접근 가능한 이름을 제공합니다.`]}),`
`,(0,N.jsx)(_,{of:d,sourceState:`none`}),`
`,(0,N.jsx)(x,{examples:C.standalone}),`
`,(0,N.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,N.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 제공합니다.`}),`
`,(0,N.jsx)(_,{of:l,sourceState:`none`}),`
`,(0,N.jsx)(x,{examples:C.size}),`
`,(0,N.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,N.jsxs)(t.p,{children:[`기본은 인라인 너비이며 `,(0,N.jsx)(t.code,{children:`switch_block`}),`·`,(0,N.jsx)(t.code,{children:`switch_group_block`}),`으로 전체 너비를 사용합니다.`]}),`
`,(0,N.jsx)(_,{of:i,sourceState:`none`}),`
`,(0,N.jsx)(x,{examples:C.width}),`
`,(0,N.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,N.jsxs)(t.p,{children:[`semantic `,(0,N.jsx)(t.code,{children:`color_*`}),` 클래스로 켜짐 강조 색을 바꿉니다.`]}),`
`,(0,N.jsx)(_,{of:c,sourceState:`none`}),`
`,(0,N.jsx)(x,{examples:C.color}),`
`,(0,N.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,N.jsx)(t.p,{children:`꺼짐, 켜짐, 비활성 상태를 함께 제공합니다.`}),`
`,(0,N.jsx)(_,{of:r,sourceState:`none`}),`
`,(0,N.jsx)(x,{examples:C.state}),`
`,(0,N.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,N.jsx)(t.p,{children:`설정 목록형 그룹과 컴팩트 간격을 제공합니다.`}),`
`,(0,N.jsx)(_,{of:o,sourceState:`none`}),`
`,(0,N.jsx)(x,{examples:C.group}),`
`,(0,N.jsx)(t.h2,{id:`폼-레이아웃`,children:`폼 레이아웃`}),`
`,(0,N.jsx)(t.p,{children:`FormLayout의 세로·가로 레이아웃 안에서 스위치를 배치합니다.`}),`
`,(0,N.jsx)(_,{of:u,sourceState:`none`}),`
`,(0,N.jsx)(x,{examples:C.form}),`
`,(0,N.jsx)(S,{sections:k})]})}function M(e={}){let{wrapper:t}={...m(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;function P(){return(P=e((()=>{N=t(),h(),v(),y(),b(),w(),A(),a()})))()}P();export{M as default};