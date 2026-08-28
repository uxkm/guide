import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./Radio.stories-VpoFxsZZ.js";import{i as g,r as _}from"./react-CbOw9eUO.js";import{c as v,r as y,u as b}from"./blocks-BToPoJhg.js";import{i as x,n as S,r as C,t as w}from"./ComponentApiDocs-DfTaPA3Z.js";import{a as T,c as E,l as D}from"./formControlDocumentationExamples-BWmHyzfQ.js";var O,k,A,j;function M(){return(M=e((()=>{O=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],k=(e,t,n)=>({title:e,description:n,tables:[{columns:O,rows:t}]}),A=[{name:`label · children`,type:`string · ReactNode`,default:`—`,description:`레이블 텍스트 또는 사용자 정의 레이블 콘텐츠입니다.`},{name:`name · value`,type:`string`,default:`—`,description:`라디오 그룹 이름과 제출 값입니다.`},{name:`checked · defaultChecked`,type:`boolean`,default:`false`,description:`제어 및 비제어 선택 상태입니다.`},{name:`disabled · labelEnd · button`,type:`boolean`,default:`false`,description:`비활성, 레이블 배치, 버튼형 변형입니다.`},{name:`ripple`,type:`boolean`,default:`true`,description:`전체 Radio 영역을 기준으로 클릭 파장 효과를 표시합니다.`},{name:`ariaLabel`,type:`string`,default:`—`,description:`보이는 레이블이 없는 단독 라디오의 접근 가능한 이름입니다.`},{name:`className · ...props`,type:`string · input attributes`,default:`—`,description:`루트 클래스와 네이티브 radio 속성입니다.`}],j=[k(`React · Next.js API · Props`,A,`Next.js는 @uxkm/react/radio를 재사용합니다.`),k(`React · Next.js API · Events`,[{name:`onChange`,type:`(event) => void`,default:`—`,description:`선택 상태 변경 콜백입니다.`}]),k(`Vue · Nuxt API`,[{name:`label · #default`,type:`string · slot`,default:`—`,description:`레이블 콘텐츠입니다.`},...A.slice(1,5)],`Nuxt는 @uxkm/vue/radio를 재사용합니다.`),k(`HTML · Gulp · 클래스`,[{name:`radio · radio_control · radio_input · radio_box`,type:`class`,default:`—`,description:`라디오 루트와 입력·커스텀 원입니다.`},{name:`radio_label · radio_content · radio_hint`,type:`class`,default:`—`,description:`레이블과 보조 설명입니다.`},{name:`radio_label-end · radio_button · radio_block`,type:`class`,default:`—`,description:`레이아웃·버튼·너비 변형입니다.`},{name:`radio_group · radio_card · radio_card-clickable`,type:`class`,default:`—`,description:`그룹과 카드형 조합입니다.`}]),k(`디자인 토큰`,[{name:`--radio-size · --radio-size-sm · --radio-size-lg`,type:`length`,default:`var(--checkbox-size) · … · …`,description:`라디오 원 크기입니다.`},{name:`--radio-gap · --radio-radius`,type:`length`,default:`var(--checkbox-gap) · 50%`,description:`레이블 간격과 원형 모서리입니다.`},{name:`--radio-button-padding-y · --radio-button-padding-x`,type:`length`,default:`var(--checkbox-button-padding-y) · var(--checkbox-button-padding-x)`,description:`버튼형 패딩입니다.`}]),k(`WebSquare API · XML`,[{name:`xf:input[type=radio]`,type:`XML element`,default:`type='radio'`,description:`디자인 시스템 마크업을 유지한 개별 라디오 입력입니다. 같은 name으로 그룹을 만듭니다.`},{name:`xf:select1`,type:`XML element`,default:`—`,description:`선택지 DataList를 바인딩하는 단일 선택 컴포넌트입니다. 라디오 UI가 필요하면 appearance를 조합합니다.`},{name:`ref · name · value · data:*`,type:`DataCollection binding`,default:`—`,description:`선택값과 그룹 이름을 DataMap 경로에 바인딩합니다.`},{name:`w2:group.radio · radio_group · radio_card`,type:`XML element · class`,default:`—`,description:`단일 라디오, 그룹, 카드형 조합 구조를 만듭니다.`},{name:`ev:onchange`,type:`WebSquare event`,default:`—`,description:`선택값 변경 후 연관 데이터 갱신이나 검증 함수를 실행합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function N(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...g(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(v,{of:r}),`
`,(0,F.jsx)(t.h1,{id:`radio`,children:`Radio`}),`
`,(0,F.jsx)(t.p,{children:`같은 그룹에서 하나의 항목만 선택하는 라디오 컴포넌트입니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,F.jsxs)(t.p,{children:[`관련 항목은 같은 `,(0,F.jsx)(t.code,{children:`name`}),`을 사용하고 `,(0,F.jsx)(t.code,{children:`fieldset`}),`과 `,(0,F.jsx)(t.code,{children:`legend`}),`(또는 `,(0,F.jsx)(t.code,{children:`aria-labelledby`}),`)로 그룹의 목적을 제공합니다. 보이는 레이블이 없는 단독 사용은 `,(0,F.jsx)(t.code,{children:`aria-label`}),`로 접근 가능한 이름을 제공합니다.`]}),`
`,(0,F.jsxs)(t.p,{children:[`WebSquare는 라디오 입력을 `,(0,F.jsx)(t.code,{children:`xf:input`}),`(type=`,(0,F.jsx)(t.code,{children:`radio`}),`) 또는 그룹 선택에 `,(0,F.jsx)(t.code,{children:`xf:select1`}),`, 레이블·그룹·카드 영역을 `,(0,F.jsx)(t.code,{children:`w2:group`}),`과 `,(0,F.jsx)(t.code,{children:`w2:textbox`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,F.jsx)(t.code,{children:`w2`}),`, `,(0,F.jsx)(t.code,{children:`xf`}),`, `,(0,F.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,F.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,F.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 Radio 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 선택 상태, `,(0,F.jsx)(t.code,{children:`name`}),`·`,(0,F.jsx)(t.code,{children:`value`}),`, 레이블 배치, 버튼형 변형과 접근성 속성을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`]}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsxs)(t.li,{children:[`같은 `,(0,F.jsx)(t.code,{children:`name`}),`을 공유하는 항목만 서로 배타적으로 선택됩니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[`레이블이 없으면 `,(0,F.jsx)(t.code,{children:`radio_control`}),` 단독 마크업과 `,(0,F.jsx)(t.code,{children:`aria-label`}),`을 사용합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`labelEnd`}),`·`,(0,F.jsx)(t.code,{children:`button`}),`은 루트 클래스로 레이아웃·버튼형 변형을 적용합니다.`]}),`
`,(0,F.jsxs)(t.li,{children:[(0,F.jsx)(t.code,{children:`ripple`}),`은 전체 Radio 영역을 기준으로 클릭 파장 효과를 표시합니다.`]}),`
`]}),`
`,(0,F.jsx)(C,{examples:E,showFullCode:!0}),`
`,(0,F.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,F.jsxs)(t.p,{children:[`디자인 시스템 마크업을 유지할 때는 `,(0,F.jsx)(t.code,{children:`xf:input`}),`의 `,(0,F.jsx)(t.code,{children:`type="radio"`}),`와 동일한 `,(0,F.jsx)(t.code,{children:`name`}),`·`,(0,F.jsx)(t.code,{children:`ref`}),`로 그룹을 구성합니다. 선택지 목록을 DataList로 관리할 때는 `,(0,F.jsx)(t.code,{children:`xf:select1`}),`과 `,(0,F.jsx)(t.code,{children:`w2:itemset`}),`을 사용할 수 있습니다.`]}),`
`,(0,F.jsxs)(t.p,{children:[`크기·색상·너비는 공통 `,(0,F.jsx)(t.code,{children:`radio_*`}),`, `,(0,F.jsx)(t.code,{children:`color_*`}),` 클래스로 표현하고, 상태 변경 후 연관 필드를 갱신할 때는 `,(0,F.jsx)(t.code,{children:`ev:onchange`}),`를 화면 스크립트에 연결합니다.`]}),`
`,(0,F.jsx)(t.h2,{id:`유형`,children:`유형`}),`
`,(0,F.jsx)(t.p,{children:`기본, 레이블 뒤, 버튼형 변형을 한눈에 비교합니다.`}),`
`,(0,F.jsx)(y,{of:a,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:D.type}),`
`,(0,F.jsx)(t.h2,{id:`레이블-뒤`,children:`레이블 뒤`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`radio_label-end`}),`는 레이블 → 컨트롤 순서로 배치하며 결제·배송 선택에서 자주 사용합니다.`]}),`
`,(0,F.jsx)(y,{of:p,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:D.labelEnd}),`
`,(0,F.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,F.jsx)(t.p,{children:`폼 필드 레이블과 힌트가 포함된 기본 라디오 그룹입니다.`}),`
`,(0,F.jsx)(y,{of:m,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:D.basic}),`
`,(0,F.jsx)(t.h2,{id:`단독-사용`,children:`단독 사용`}),`
`,(0,F.jsxs)(t.p,{children:[`보이는 레이블 없이 `,(0,F.jsx)(t.code,{children:`aria-label`}),`로 접근 가능한 이름을 제공합니다.`]}),`
`,(0,F.jsx)(y,{of:h,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:D.standalone}),`
`,(0,F.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,F.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 제공합니다.`}),`
`,(0,F.jsx)(y,{of:s,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:D.size}),`
`,(0,F.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,F.jsxs)(t.p,{children:[`기본은 인라인 너비이며 `,(0,F.jsx)(t.code,{children:`radio_block`}),`·`,(0,F.jsx)(t.code,{children:`radio_group_block`}),`으로 전체 너비를 사용합니다.`]}),`
`,(0,F.jsx)(y,{of:d,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:D.width}),`
`,(0,F.jsx)(t.h2,{id:`색상`,children:`색상`}),`
`,(0,F.jsxs)(t.p,{children:[`semantic `,(0,F.jsx)(t.code,{children:`color_*`}),` 클래스로 선택 강조 색을 바꿉니다.`]}),`
`,(0,F.jsx)(y,{of:o,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:D.color}),`
`,(0,F.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,F.jsx)(t.p,{children:`미선택, 선택, 비활성 상태를 함께 제공합니다.`}),`
`,(0,F.jsx)(y,{of:i,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:D.state}),`
`,(0,F.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,F.jsx)(t.p,{children:`세로·가로 그룹과 범례로 관련 항목을 묶습니다.`}),`
`,(0,F.jsx)(y,{of:u,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:D.group}),`
`,(0,F.jsx)(t.h2,{id:`버튼형`,children:`버튼형`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.code,{children:`radio_button`}),`으로 필터·세그먼트형 단일 선택을 구성합니다.`]}),`
`,(0,F.jsx)(y,{of:l,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:D.buttonType}),`
`,(0,F.jsx)(t.h2,{id:`카드형`,children:`카드형`}),`
`,(0,F.jsx)(t.p,{children:`card 컴포넌트와 조합해 제목·설명을 포함한 선택 카드를 만듭니다.`}),`
`,(0,F.jsx)(y,{of:f,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:D.cardType}),`
`,(0,F.jsx)(t.h2,{id:`폼-레이아웃`,children:`폼 레이아웃`}),`
`,(0,F.jsx)(t.p,{children:`FormLayout의 세로·가로 레이아웃 안에서 라디오 그룹을 배치합니다.`}),`
`,(0,F.jsx)(y,{of:n,sourceState:`none`}),`
`,(0,F.jsx)(C,{examples:D.form}),`
`,(0,F.jsx)(w,{sections:j})]})}function P(e={}){let{wrapper:t}={...g(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=t(),_(),b(),x(),S(),T(),M(),c()})))()}I();export{P as default};