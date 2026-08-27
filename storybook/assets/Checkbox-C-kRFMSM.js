import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./Checkbox.stories-BUd2dIjE.js";import{i as g,r as _}from"./react-BBfuIdny.js";import{c as v,r as y,u as b}from"./blocks-DbhChoan.js";import{i as x,n as S,r as C,t as w}from"./ComponentApiDocs-arf-yre-.js";import{a as T,n as E,t as D}from"./formControlDocumentationExamples-BWmHyzfQ.js";var O,k,A,j;function M(){return(M=e((()=>{O=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],k=(e,t,n)=>({title:e,description:n,tables:[{columns:O,rows:t}]}),A=[{name:`label · children`,type:`string · ReactNode`,default:`—`,description:`레이블 텍스트 또는 사용자 정의 레이블 콘텐츠입니다.`},{name:`checked · defaultChecked`,type:`boolean`,default:`false`,description:`제어 및 비제어 체크 상태입니다.`},{name:`disabled · indeterminate`,type:`boolean`,default:`false`,description:`비활성 및 부분 선택 상태입니다.`},{name:`labelEnd · button`,type:`boolean`,default:`false`,description:`레이블 우선 배치 및 버튼형 변형입니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`전체 Checkbox 영역을 기준으로 클릭 파장 효과를 표시합니다.`},{name:`ariaLabel`,type:`string`,default:`—`,description:`보이는 레이블이 없는 단독 체크박스의 접근 가능한 이름입니다.`},{name:`className · ...props`,type:`string · input attributes`,default:`—`,description:`루트 클래스와 네이티브 checkbox 속성입니다.`}],j=[k(`React · Next.js API · Props`,A,`Next.js는 @uxkm/react/checkbox를 재사용합니다.`),k(`React · Next.js API · Events`,[{name:`onChange`,type:`(event) => void`,default:`—`,description:`체크 상태 변경 콜백입니다.`}]),k(`Vue · Nuxt API`,[{name:`label · #default`,type:`string · slot`,default:`—`,description:`레이블 콘텐츠입니다.`},...A.slice(1,5)],`Nuxt는 @uxkm/vue/checkbox를 재사용합니다.`),k(`HTML · Gulp · 클래스`,[{name:`checkbox · checkbox_control · checkbox_input · checkbox_box`,type:`class`,default:`—`,description:`체크박스 루트와 입력·커스텀 박스입니다.`},{name:`checkbox_label · checkbox_content · checkbox_hint`,type:`class`,default:`—`,description:`레이블과 보조 설명입니다.`},{name:`checkbox_label-end · checkbox_button · checkbox_block`,type:`class`,default:`—`,description:`레이아웃·버튼·너비 변형입니다.`},{name:`checkbox_group · checkbox_card · checkbox_card-clickable`,type:`class`,default:`—`,description:`그룹과 카드형 조합입니다.`}]),k(`디자인 토큰`,[{name:`--checkbox-size · --checkbox-size-sm · --checkbox-size-lg`,type:`length`,default:`1rem · 0.875rem · 1.125rem`,description:`체크박스 박스 크기입니다.`},{name:`--checkbox-gap · --checkbox-radius`,type:`length`,default:`var(--space-sm) · 4px`,description:`레이블 간격과 모서리입니다.`},{name:`--checkbox-button-padding-y · --checkbox-button-padding-x`,type:`length`,default:`0.35rem · 0.75rem`,description:`버튼형 패딩입니다.`}]),k(`WebSquare API · XML`,[{name:`xf:checkbox`,type:`XML element`,default:`—`,description:`체크 입력 컴포넌트입니다. trueValue·falseValue·disabled·checked 속성을 조합합니다.`},{name:`ref · data:*`,type:`DataCollection binding`,default:`—`,description:`체크 상태를 DataMap 경로에 양방향 바인딩합니다.`},{name:`trueValue · falseValue`,type:`WebSquare property`,default:`Y · N`,description:`선택·미선택 시 저장할 값을 정의합니다.`},{name:`w2:group.checkbox · checkbox_group · checkbox_card`,type:`XML element · class`,default:`—`,description:`단일 체크박스, 그룹, 카드형 조합 구조를 만듭니다.`},{name:`ev:onchange`,type:`WebSquare event`,default:`—`,description:`체크 상태 변경 후 연관 데이터 갱신이나 검증 함수를 실행합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function N(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...g(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(v,{of:o}),`
`,(0,F.jsx)(t.h1,{id:`checkbox`,children:`Checkbox`}),`
`,(0,F.jsx)(t.p,{children:`여러 항목을 독립적으로 선택하거나 해제하는 체크박스 컴포넌트입니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,F.jsxs)(t.p,{children:[`보이는 레이블은 input과 명시적 또는 암묵적으로 연결하고, 단독 사용 시 `,(0,F.jsx)(t.code,{children:`aria-label`}),`로 접근 가능한 이름을 제공합니다. 관련 항목은 `,(0,F.jsx)(t.code,{children:`fieldset`}),`과 `,(0,F.jsx)(t.code,{children:`legend`}),`(또는 `,(0,F.jsx)(t.code,{children:`aria-labelledby`}),`)로 그룹의 목적을 전달합니다.`]}),`
`,(0,F.jsxs)(t.p,{children:[`WebSquare는 체크 입력을 `,(0,F.jsx)(t.code,{children:`xf:checkbox`}),`, 레이블·그룹·카드 영역을 `,(0,F.jsx)(t.code,{children:`w2:group`}),`과 `,(0,F.jsx)(t.code,{children:`w2:textbox`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,F.jsx)(t.code,{children:`w2`}),`, `,(0,F.jsx)(t.code,{children:`xf`}),`, `,(0,F.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,F.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,F.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Checkbox 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 체크 상태, 불확정(indeterminate), 레이블 배치, 버튼형 변형과 접근성 속성을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`레이블이 없으면 `,(0,F.jsx)(t.code,{children:`checkbox_control`}),` 단독 마크업과 `,(0,F.jsx)(t.code,{children:`aria-label`}),`을 사용합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`indeterminate`}),`는 DOM `,(0,F.jsx)(t.code,{children:`indeterminate`}),` 속성을 동기화해 부분 선택 상태를 표현합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`labelEnd`}),`·`,(0,F.jsx)(t.code,{children:`button`}),`은 루트 클래스로 레이아웃·버튼형 변형을 적용합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`ripple`}),`은 전체 Checkbox 영역을 기준으로 클릭 파장 효과를 표시합니다.`]}),`
`]}),`
`,(0,F.jsx)(C,{examples:D,showFullCode:!0}),`
`,(0,F.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`xf:checkbox`}),`의 `,(0,F.jsx)(t.code,{children:`ref`}),`를 DataMap 경로에 연결하고 `,(0,F.jsx)(t.code,{children:`trueValue`}),`·`,(0,F.jsx)(t.code,{children:`falseValue`}),`로 저장값을 정의합니다. 크기·색상·너비는 공통 `,(0,F.jsx)(t.code,{children:`checkbox_*`}),`, `,(0,F.jsx)(t.code,{children:`color_*`}),` 클래스로 표현합니다.`]}),`
`,(0,F.jsxs)(t.p,{children:[`그룹은 `,(0,F.jsx)(t.code,{children:`w2:group`}),`에 `,(0,F.jsx)(t.code,{children:`checkbox_group`}),`을 적용하고 `,(0,F.jsx)(t.code,{children:`fieldset`}),`/`,(0,F.jsx)(t.code,{children:`legend`}),` 역할을 `,(0,F.jsx)(t.code,{children:`tagname`}),`으로 맞춥니다. 상태 변경 후 연관 필드를 갱신할 때는 `,(0,F.jsx)(t.code,{children:`ev:onchange`}),`를 화면 스크립트에 연결합니다.`]}),`
`,(0,F.jsx)(t.h2,{id:`유형`,children:`유형`}),`
`,(0,F.jsx)(t.p,{children:`기본, 레이블 뒤, 버튼형, 카드형 변형을 한눈에 비교합니다.`}),`
`,(0,F.jsx)(y,{of:a,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:E.type}),`
`,(0,F.jsx)(t.h2,{id:`레이블-뒤`,children:`레이블 뒤`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`checkbox_label-end`}),`는 레이블 → 컨트롤 순서로 배치하며 설정 화면에서 자주 사용합니다.`]}),`
`,(0,F.jsx)(y,{of:r,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:E.labelEnd}),`
`,(0,F.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,F.jsx)(t.p,{children:`폼 필드 레이블과 힌트가 포함된 기본 체크박스 그룹입니다.`}),`
`,(0,F.jsx)(y,{of:m,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:E.basic}),`
`,(0,F.jsx)(t.h2,{id:`단독-사용`,children:`단독 사용`}),`
`,(0,F.jsxs)(t.p,{children:[`보이는 레이블 없이 `,(0,F.jsx)(t.code,{children:`aria-label`}),`로 접근 가능한 이름을 제공합니다.`]}),`
`,(0,F.jsx)(y,{of:h,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:E.standalone}),`
`,(0,F.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,F.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 제공합니다.`}),`
`,(0,F.jsx)(y,{of:s,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:E.size}),`
`,(0,F.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,F.jsxs)(t.p,{children:[`기본은 인라인 너비이며 `,(0,F.jsx)(t.code,{children:`checkbox_block`}),`·`,(0,F.jsx)(t.code,{children:`checkbox_group_block`}),`으로 전체 너비를 사용합니다.`]}),`
`,(0,F.jsx)(y,{of:d,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:E.width}),`
`,(0,F.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,F.jsxs)(t.p,{children:[`semantic `,(0,F.jsx)(t.code,{children:`color_*`}),` 클래스로 선택 강조 색을 바꿉니다.`]}),`
`,(0,F.jsx)(y,{of:n,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:E.color}),`
`,(0,F.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,F.jsx)(t.p,{children:`미선택, 선택, 불확정, 비활성 상태를 함께 제공합니다.`}),`
`,(0,F.jsx)(y,{of:i,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:E.state}),`
`,(0,F.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,F.jsx)(t.p,{children:`세로·가로 그룹과 범례로 관련 항목을 묶습니다.`}),`
`,(0,F.jsx)(y,{of:p,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:E.group}),`
`,(0,F.jsx)(t.h2,{id:`버튼형`,children:`버튼형`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`checkbox_button`}),`으로 필터·태그형 다중 선택을 구성합니다.`]}),`
`,(0,F.jsx)(y,{of:l,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:E.buttonType}),`
`,(0,F.jsx)(t.h2,{id:`카드형`,children:`카드형`}),`
`,(0,F.jsx)(t.p,{children:`card 컴포넌트와 조합해 제목·설명을 포함한 선택 카드를 만듭니다.`}),`
`,(0,F.jsx)(y,{of:f,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:E.cardType}),`
`,(0,F.jsx)(t.h2,{id:`폼-레이아웃`,children:`폼 레이아웃`}),`
`,(0,F.jsx)(t.p,{children:`FormLayout의 세로·가로 레이아웃 안에서 체크박스 그룹을 배치합니다.`}),`
`,(0,F.jsx)(y,{of:u,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:E.form}),`
`,(0,F.jsx)(w,{sections:j})]})}function P(e={}){let{wrapper:t}={...g(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),_(),b(),x(),S(),T(),M(),c()})))()}I();export{P as default};