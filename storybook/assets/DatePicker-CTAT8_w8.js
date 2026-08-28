import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,n as a,o,r as s,s as c,t as l}from"./DatePicker.stories-CSCS4w_d.js";import{i as u,r as d}from"./react-CbOw9eUO.js";import{c as f,r as p,u as m}from"./blocks-BToPoJhg.js";import{i as h,n as g,r as _,t as v}from"./ComponentApiDocs-DfTaPA3Z.js";import{a as y,i as b,r as x}from"./formControlDocumentationExamples-BWmHyzfQ.js";var S,C,w;function T(){return(T=e((()=>{S=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],C=(e,t,n)=>({title:e,description:n,tables:[{columns:S,rows:t}]}),w=[C(`React · Next.js API · Props`,[{name:`value · defaultValue`,type:`YYYY-MM-DD string`,default:`''`,description:`제어 값과 비제어 초기 값입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`트리거 높이와 글자 크기입니다.`},{name:`min · max`,type:`YYYY-MM-DD string`,default:`—`,description:`선택할 수 있는 날짜 범위입니다.`},{name:`fit · block`,type:`boolean`,default:`false`,description:`제한 너비와 전체 너비 변형입니다.`},{name:`disabled · error · success`,type:`boolean`,default:`false`,description:`비활성 및 검증 상태입니다.`},{name:`clearable`,type:`boolean`,default:`true`,description:`선택한 날짜를 지우는 동작을 표시합니다.`},{name:`panelAlign`,type:`'start' | 'end'`,default:`'start'`,description:`달력 패널의 정렬 방향입니다.`},{name:`onChange`,type:`(value: string) => void`,default:`—`,description:`YYYY-MM-DD 값이 바뀔 때 호출됩니다.`}],`Next.js는 @uxkm/react/date-picker를 재사용합니다.`),C(`Vue · Nuxt API`,[{name:`v-model / model-value`,type:`YYYY-MM-DD string`,default:`''`,description:`선택 값과 update:modelValue 이벤트입니다.`},{name:`size · min · max`,type:`string`,default:`'md' · — · —`,description:`크기와 선택 가능 범위입니다.`},{name:`fit · block · disabled · error · success`,type:`boolean`,default:`false`,description:`너비 및 상태입니다.`},{name:`clearable`,type:`boolean`,default:`true`,description:`초기화 버튼 표시 여부입니다.`},{name:`@change`,type:`(value: string) => void`,default:`—`,description:`날짜 변경 이벤트입니다.`}],`Nuxt는 @uxkm/vue/date-picker를 재사용합니다.`),C(`HTML · Gulp`,[{name:`data-value · data-min · data-max`,type:`YYYY-MM-DD`,default:`—`,description:`초기 값과 선택 범위입니다.`},{name:`change`,type:`CustomEvent`,default:`—`,description:`detail.value로 선택 값을 제공합니다.`},{name:`date_picker_sm · date_picker_lg`,type:`class`,default:`—`,description:`크기 변형입니다.`},{name:`date_picker_fit · date_picker_block`,type:`class`,default:`—`,description:`제한 너비와 전체 너비입니다.`},{name:`is-error · is-success · is-disabled`,type:`class`,default:`—`,description:`상태 클래스입니다.`}]),C(`디자인 토큰`,[{name:`--date-picker-input-padding-*`,type:`length`,default:`크기별 값`,description:`트리거 입력 영역의 안쪽 여백입니다.`},{name:`--date-picker-btn-size`,type:`length`,default:`2.25rem`,description:`달력 버튼 크기입니다.`},{name:`--date-picker-icon-size`,type:`length`,default:`1rem`,description:`달력 아이콘 크기입니다.`}]),C(`WebSquare API · XML`,[{name:`w2:inputCalendar`,type:`XML element`,default:`—`,description:`날짜 입력·달력 컴포넌트입니다. placeholder, disabled, calendarValueType 속성을 조합합니다.`},{name:`ref · data:*`,type:`DataCollection binding`,default:`—`,description:`선택 날짜를 DataMap 경로에 양방향 바인딩합니다.`},{name:`calendarValueType · minYear · maxYear`,type:`WebSquare property`,default:`yearMonthDate`,description:`값 형식과 선택 가능 연도 범위를 설정합니다.`},{name:`w2:group.date_picker · date_picker_trigger`,type:`XML element · class`,default:`—`,description:`날짜 선택 트리거와 패널 래퍼 구조를 만듭니다.`},{name:`ev:onchange`,type:`WebSquare event`,default:`—`,description:`날짜 변경 후 연관 데이터 갱신이나 검증 함수를 실행합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function E(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...u(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f,{of:a}),`
`,(0,O.jsx)(t.h1,{id:`datepicker`,children:`DatePicker`}),`
`,(0,O.jsx)(t.p,{children:`날짜 입력 트리거와 달력 패널을 결합한 폼 컴포넌트입니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,O.jsxs)(t.p,{children:[`값은 모든 프레임워크에서 `,(0,O.jsx)(t.code,{children:`YYYY-MM-DD`}),`로 주고받고 화면에는 locale 형식으로 표시합니다. 트리거 입력은 읽기 전용으로 두고 달력 버튼·패널로 선택을 완료합니다.`]}),`
`,(0,O.jsxs)(t.p,{children:[`WebSquare는 날짜 입력을 `,(0,O.jsx)(t.code,{children:`w2:inputCalendar`}),`, 달력 열기 동작을 `,(0,O.jsx)(t.code,{children:`xf:trigger`}),`, 필드 레이블·메시지를 `,(0,O.jsx)(t.code,{children:`w2:textbox`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,O.jsx)(t.code,{children:`w2`}),`, `,(0,O.jsx)(t.code,{children:`xf`}),`, `,(0,O.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,O.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,O.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 DatePicker 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 날짜, 선택 범위, 크기·너비, 지우기와 패널 동작을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`지원하지 않는 크기는 `,(0,O.jsx)(t.code,{children:`md`}),`로 정규화하고 `,(0,O.jsx)(t.code,{children:`date_picker_sm`}),`·`,(0,O.jsx)(t.code,{children:`date_picker_lg`}),` 클래스로 변환합니다.`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`min`}),`·`,(0,O.jsx)(t.code,{children:`max`}),` 범위 밖의 날짜는 비활성화합니다.`]}),`
`,(0,O.jsx)(t.li,{children:`Escape와 바깥 영역 클릭으로 패널을 닫습니다.`}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`clearable`}),`은 선택한 날짜를 지우고 트리거로 포커스를 복원합니다.`]}),`
`]}),`
`,(0,O.jsx)(_,{examples:x,showFullCode:!0}),`
`,(0,O.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(t.code,{children:`w2:inputCalendar`}),`의 `,(0,O.jsx)(t.code,{children:`ref`}),`를 DataMap 경로에 연결하고 `,(0,O.jsx)(t.code,{children:`calendarValueType`}),`, `,(0,O.jsx)(t.code,{children:`placeholder`}),`, `,(0,O.jsx)(t.code,{children:`disabled`}),` 등으로 입력 계약을 정의합니다. 크기·너비·검증 상태는 공통 `,(0,O.jsx)(t.code,{children:`date_picker_*`}),`, `,(0,O.jsx)(t.code,{children:`is-error`}),` 클래스로 표현합니다.`]}),`
`,(0,O.jsxs)(t.p,{children:[`선택 가능 연도·월 범위는 WebSquare 캘린더 속성으로 제한하고, 값 변경 후 연관 필드를 갱신할 때는 `,(0,O.jsx)(t.code,{children:`ev:onchange`}),`를 화면 스크립트에 연결합니다.`]}),`
`,(0,O.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,O.jsx)(t.p,{children:`입력 또는 달력 버튼으로 패널을 열고 날짜를 선택합니다. Escape와 바깥 영역 클릭으로 패널을 닫을 수 있습니다.`}),`
`,(0,O.jsx)(p,{of:l,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.basic}),`
`,(0,O.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,O.jsx)(t.p,{children:`small, medium, large 세 가지 트리거 크기를 제공합니다.`}),`
`,(0,O.jsx)(p,{of:n,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.size}),`
`,(0,O.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(t.code,{children:`date_picker_fit`}),`은 최대 너비를 제한하고 `,(0,O.jsx)(t.code,{children:`date_picker_block`}),`은 부모 너비를 채웁니다.`]}),`
`,(0,O.jsx)(p,{of:c,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.width}),`
`,(0,O.jsx)(t.h2,{id:`선택-범위`,children:`선택 범위`}),`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(t.code,{children:`min`}),`, `,(0,O.jsx)(t.code,{children:`max`}),` 범위 밖의 날짜는 비활성화합니다.`]}),`
`,(0,O.jsx)(p,{of:i,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.limits}),`
`,(0,O.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,O.jsx)(t.p,{children:`disabled, error, success 상태를 메시지와 적절한 aria 속성으로 함께 전달합니다.`}),`
`,(0,O.jsx)(p,{of:o,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.state}),`
`,(0,O.jsx)(t.h2,{id:`조합-예시`,children:`조합 예시`}),`
`,(0,O.jsx)(t.p,{children:`제어 값, 필수 표시, 유효성 메시지를 예약 폼에 조합한 예시입니다.`}),`
`,(0,O.jsx)(p,{of:s,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.example}),`
`,(0,O.jsx)(v,{sections:w})]})}function D(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;function k(){return(k=e((()=>{O=t(),d(),m(),h(),g(),y(),T(),r()})))()}k();export{D as default};