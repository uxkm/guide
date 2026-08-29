import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./Select.stories-DmPd_rV7.js";import{i as p,r as m}from"./react-CJGa1lBW.js";import{c as h,r as g,u as _}from"./blocks-SMgDWto2.js";import{i as v,n as y,r as b,t as x}from"./ComponentApiDocs-DtZNZjDp.js";import{a as S,f as C,p as w}from"./formControlDocumentationExamples-BWmHyzfQ.js";var T,E,D;function O(){return(O=e((()=>{T=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],E=(e,t,n)=>({title:e,description:n,tables:[{columns:T,rows:t}]}),D=[E(`React · Next.js API · Props`,[{name:`value · defaultValue`,type:`string | number | string[]`,default:`—`,description:`제어 값과 비제어 초기 값입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`선택 필드의 높이와 글자 크기입니다.`},{name:`placeholder`,type:`string`,default:`—`,description:`빈 값의 비활성 안내 option을 만듭니다.`},{name:`nativeSize`,type:`number`,default:`—`,description:`한 번에 보이는 네이티브 option 개수입니다.`},{name:`fit`,type:`boolean`,default:`false`,description:`최대 너비를 320px로 제한합니다.`},{name:`disabled · error`,type:`boolean`,default:`false`,description:`비활성 및 오류 상태입니다.`},{name:`multiple · required · ...props`,type:`select attributes`,default:`—`,description:`네이티브 select 속성을 전달합니다.`},{name:`children`,type:`ReactNode`,default:`—`,description:`option 또는 optgroup 요소입니다.`}],`Next.js는 @uxkm/react/select를 재사용합니다.`),E(`React · Next.js API · Events`,[{name:`onChange`,type:`ChangeEvent handler`,default:`—`,description:`선택 값이 바뀔 때 호출됩니다.`}]),E(`Vue · Nuxt API`,[{name:`v-model / model-value`,type:`string | number | array`,default:`—`,description:`선택 값과 update:modelValue 이벤트입니다.`},{name:`size · placeholder · native-size`,type:`string | number`,default:`'md' · — · —`,description:`시각적 크기, 빈 값 안내, 표시 option 개수입니다.`},{name:`fit · disabled · error · multiple`,type:`boolean`,default:`false`,description:`너비, 상태, 다중 선택 옵션입니다.`},{name:`default slot`,type:`slot`,default:`—`,description:`option 또는 optgroup 요소입니다.`},{name:`@change`,type:`event`,default:`—`,description:`네이티브 change 이벤트입니다.`}],`Nuxt는 @uxkm/vue/select를 재사용합니다.`),E(`HTML · Gulp · 클래스`,[{name:`input · input_sm · input_lg · input_fit`,type:`class`,default:`—`,description:`네이티브 select의 루트, 크기, 제한 너비입니다.`},{name:`display_contents · input_group-label_hidden`,type:`class`,default:`—`,description:`암묵적 label 래퍼와 화면에 숨긴 label 텍스트입니다.`},{name:`is-error · is-success`,type:`class`,default:`—`,description:`검증 상태입니다.`}]),E(`디자인 토큰`,[{name:`--select-bg · --select-option-bg`,type:`color`,default:`surface`,description:`선택 필드와 option 목록의 테마별 배경입니다.`},{name:`--select-text · --select-placeholder`,type:`color`,default:`text · text-muted`,description:`선택 값과 placeholder의 대비 보장 색상입니다.`},{name:`--select-padding-right-*`,type:`length`,default:`크기별 값`,description:`선택 화살표를 위한 우측 여백입니다.`},{name:`--select-caret-offset-*`,type:`length`,default:`크기별 값`,description:`선택 화살표의 우측 위치입니다.`},{name:`--select-caret-size-*`,type:`length`,default:`크기별 값`,description:`선택 화살표 크기입니다.`},{name:`--input-max-width`,type:`length`,default:`320px`,description:`fit 변형의 최대 너비입니다.`}]),E(`WebSquare API · XML`,[{name:`xf:select1`,type:`XML element`,default:`—`,description:`단일 선택 컴포넌트입니다. 다중 선택이 필요한 경우 프로젝트 WebSquare 버전의 지원 컴포넌트를 사용합니다.`},{name:`w2:itemset · w2:label · w2:value`,type:`XML element`,default:`—`,description:`DataList의 표시 레이블과 실제 값을 선택 항목에 연결합니다.`},{name:`ref · nodeset · data:*`,type:`DataCollection binding`,default:`—`,description:`선택값과 선택지 목록을 DataMap·DataList 경로에 바인딩합니다.`},{name:`chooseOption · mandatory`,type:`WebSquare property`,default:`false`,description:`빈 선택 안내와 필수 선택 검증을 설정합니다.`},{name:`disabled · appearance`,type:`WebSquare property`,default:`—`,description:`비활성 상태와 선택 UI 표현 방식을 설정합니다.`},{name:`ev:onchange`,type:`WebSquare event`,default:`—`,description:`선택값 변경 후 연관 데이터 갱신이나 검증 함수를 실행합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function k(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...p(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h,{of:c}),`
`,(0,j.jsx)(t.h1,{id:`select`,children:`Select`}),`
`,(0,j.jsx)(t.p,{children:`정해진 선택지 중 하나 또는 여러 항목을 고르는 네이티브 select 컴포넌트입니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,j.jsxs)(t.p,{children:[`일반 필드는 `,(0,j.jsx)(t.code,{children:`label[for]`}),`와 `,(0,j.jsx)(t.code,{children:`id`}),`를 연결합니다. 보이는 label이 없는 단독 선택은 `,(0,j.jsx)(t.code,{children:`input_group-label_hidden`}),` 텍스트와 select를 하나의 `,(0,j.jsx)(t.code,{children:`display_contents`}),` label로 감싸 암묵적으로 연결합니다. placeholder는 선택할 수 없는 빈 option으로 제공하며 필수 선택과 함께 사용할 수 있습니다.`]}),`
`,(0,j.jsx)(t.p,{children:`다크 모드에서는 Select와 option 목록에 surface 배경과 고대비 텍스트 토큰을 사용합니다. 오류·성공 테두리는 어두운 surface에서 3:1 이상의 UI 대비를 확보하는 semantic text 색상을 적용합니다.`}),`
`,(0,j.jsxs)(t.p,{children:[`WebSquare는 선택 입력을 `,(0,j.jsx)(t.code,{children:`xf:select1`}),`, 선택지 데이터 연결을 `,(0,j.jsx)(t.code,{children:`w2:itemset`}),`, `,(0,j.jsx)(t.code,{children:`w2:label`}),`, `,(0,j.jsx)(t.code,{children:`w2:value`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,j.jsx)(t.code,{children:`w2`}),`, `,(0,j.jsx)(t.code,{children:`xf`}),`, `,(0,j.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,j.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Select 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 선택값, 크기, placeholder, 다중 선택, 오류 상태와 네이티브 이벤트를 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[`지원하지 않는 크기는 `,(0,j.jsx)(t.code,{children:`md`}),`로 정규화하고 크기·너비·오류 옵션을 공통 클래스로 변환합니다.`]}),`
`,(0,j.jsx)(t.li,{children:`placeholder는 빈 값을 가진 비활성 선택지로 렌더링합니다.`}),`
`,(0,j.jsx)(t.li,{children:`제어 값이 없을 때는 placeholder 유무를 반영해 안전한 초기 선택값을 결정합니다.`}),`
`,(0,j.jsxs)(t.li,{children:[`Vue는 computed setter로 `,(0,j.jsx)(t.code,{children:`v-model`}),`을 연결하고 네이티브 change 이벤트도 별도로 전달합니다.`]}),`
`]}),`
`,(0,j.jsx)(b,{examples:C,showFullCode:!0}),`
`,(0,j.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`xf:select1`}),`의 `,(0,j.jsx)(t.code,{children:`ref`}),`는 선택값 경로에, `,(0,j.jsx)(t.code,{children:`w2:itemset`}),`의 `,(0,j.jsx)(t.code,{children:`nodeset`}),`은 선택지 DataList에 연결합니다. `,(0,j.jsx)(t.code,{children:`w2:label`}),`과 `,(0,j.jsx)(t.code,{children:`w2:value`}),`로 사용자에게 보이는 텍스트와 저장되는 값을 분리합니다.`]}),`
`,(0,j.jsxs)(t.p,{children:[`빈 선택 안내와 필수 선택은 `,(0,j.jsx)(t.code,{children:`chooseOption`}),`, `,(0,j.jsx)(t.code,{children:`mandatory`}),`로 구성하고 비활성·검증 상태는 속성과 공통 상태 클래스를 함께 적용합니다. 선택값 변경 후 연관 필드를 갱신할 때는 `,(0,j.jsx)(t.code,{children:`ev:onchange`}),`를 화면 스크립트에 연결합니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,j.jsx)(t.p,{children:`레이블, placeholder, 힌트가 포함된 기본 선택 필드입니다.`}),`
`,(0,j.jsx)(g,{of:d,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.basic}),`
`,(0,j.jsx)(t.h2,{id:`단독-사용`,children:`단독 사용`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`form_field`}),` 없이 사용할 때도 보이는 label 또는 숨김 텍스트를 포함한 암묵적 label을 제공합니다.`]}),`
`,(0,j.jsx)(g,{of:r,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.standalone}),`
`,(0,j.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,j.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 제공합니다.`}),`
`,(0,j.jsx)(g,{of:u,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.size}),`
`,(0,j.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,j.jsxs)(t.p,{children:[`기본은 부모 너비 100%이며 `,(0,j.jsx)(t.code,{children:`form_field_fit`}),` 또는 `,(0,j.jsx)(t.code,{children:`input_fit`}),`으로 최대 320px까지 제한합니다.`]}),`
`,(0,j.jsx)(g,{of:f,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.width}),`
`,(0,j.jsx)(t.h2,{id:`옵션-그룹`,children:`옵션 그룹`}),`
`,(0,j.jsxs)(t.p,{children:[`연관된 option은 네이티브 `,(0,j.jsx)(t.code,{children:`optgroup`}),`과 `,(0,j.jsx)(t.code,{children:`label`}),`로 묶습니다.`]}),`
`,(0,j.jsx)(g,{of:l,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.group}),`
`,(0,j.jsx)(t.h2,{id:`다중-선택`,children:`다중 선택`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`multiple`}),`과 표시할 option 개수를 함께 지정해 여러 항목을 선택할 수 있습니다.`]}),`
`,(0,j.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.multiple}),`
`,(0,j.jsx)(t.h2,{id:`필수-필드`,children:`필수 필드`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`required`}),` 속성과 `,(0,j.jsx)(t.code,{children:`form_field-required`}),`로 필수 선택을 표시합니다.`]}),`
`,(0,j.jsx)(g,{of:n,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.required}),`
`,(0,j.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,j.jsx)(t.p,{children:`disabled, error, success 상태를 텍스트 메시지와 적절한 aria 속성으로 함께 전달합니다.`}),`
`,(0,j.jsx)(g,{of:o,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.state}),`
`,(0,j.jsx)(t.h2,{id:`조합-예시`,children:`조합 예시`}),`
`,(0,j.jsx)(t.p,{children:`제어 값, 필수 선택, 유효성 오류 메시지를 조합한 예시입니다.`}),`
`,(0,j.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.example}),`
`,(0,j.jsx)(x,{sections:D})]})}function A(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),m(),_(),v(),y(),S(),O(),i()})))()}M();export{A as default};