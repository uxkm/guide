import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./Input.stories-C6Mtx9xy.js";import{i as h,r as g}from"./react-DPG3xyh1.js";import{c as _,r as v,u as y}from"./blocks-BXsfpknd.js";import{i as b,n as x,r as S,t as C}from"./ComponentApiDocs-BKc5okVC.js";import{a as w,o as T,s as E}from"./formControlDocumentationExamples-k4xWc8cj.js";var D,O,k,A;function j(){return(j=e((()=>{D=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],O=(e,t,n)=>({title:e,description:n,tables:[{columns:D,rows:t}]}),k=[{name:`value · defaultValue`,type:`string | number`,default:`— · ''`,description:`제어 값과 비제어 초기 값입니다.`},{name:`type`,type:`HTML input type`,default:`'text'`,description:`텍스트, 이메일, 비밀번호, 숫자, 검색 등의 입력 타입입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`입력 높이와 글자 크기입니다.`},{name:`placeholder`,type:`string`,default:`—`,description:`값이 없을 때 표시할 안내입니다.`},{name:`disabled · readOnly`,type:`boolean`,default:`false`,description:`비활성 및 읽기 전용 상태입니다.`},{name:`error`,type:`boolean`,default:`false`,description:`is-error와 aria-invalid를 적용합니다.`},{name:`block`,type:`boolean`,default:`false`,description:`input_block 클래스를 적용합니다.`},{name:`clearable`,type:`boolean`,default:`false`,description:`값이 있을 때 접근 가능한 지우기 버튼을 표시합니다.`},{name:`prefix · suffix`,type:`ReactNode`,default:`—`,description:`앞뒤 input_group-addon 콘텐츠입니다.`},{name:`className · ...props`,type:`string · input attributes`,default:`—`,description:`추가 클래스와 네이티브 input 속성입니다.`}],A=[O(`React · Next.js API · Props`,k,`Next.js는 @uxkm/react/input을 재사용합니다.`),O(`React · Next.js API · Events`,[{name:`onChange · onPaste · onClear`,type:`event handler`,default:`—`,description:`값 변경, 붙여넣기, 지우기 콜백입니다.`}]),O(`Vue · Nuxt API`,[{name:`v-model / model-value`,type:`string | number`,default:`''`,description:`입력 값과 update:modelValue 이벤트입니다.`},{name:`size · type · placeholder`,type:`string`,default:`'md' · 'text' · —`,description:`크기, 타입, 안내 문구입니다.`},{name:`disabled · error · block · clearable`,type:`boolean`,default:`false`,description:`상태와 표시 옵션입니다.`},{name:`#prefix · #suffix`,type:`slot`,default:`—`,description:`앞뒤 애드온 슬롯입니다.`},{name:`@clear`,type:`event`,default:`—`,description:`지우기 버튼을 누를 때 발생합니다.`}],`Nuxt는 @uxkm/vue/input을 재사용합니다.`),O(`HTML · Gulp · 클래스`,[{name:`input · input_sm · input_lg · input_fit`,type:`class`,default:`—`,description:`입력 루트, 크기, 최대 너비입니다.`},{name:`display_contents · input_group-label_hidden`,type:`class`,default:`—`,description:`암묵적 label 래퍼와 화면에 숨긴 label 텍스트입니다.`},{name:`input_group · input_group-addon`,type:`class`,default:`—`,description:`앞뒤 애드온 그룹입니다.`},{name:`input_clearable · input_clear`,type:`class`,default:`—`,description:`입력 지우기 래퍼와 버튼입니다.`},{name:`input_split · input_otp · input_row`,type:`class`,default:`—`,description:`분할 입력, OTP, 복합 행 패턴입니다.`},{name:`is-error · is-success · input_masked`,type:`class`,default:`—`,description:`검증 및 마스킹 상태입니다.`}]),O(`디자인 토큰`,[{name:`--input-max-width`,type:`length`,default:`320px`,description:`fit 변형의 최대 너비입니다.`},{name:`--input-clear-size · --input-clear-offset`,type:`length`,default:`1.25rem · .75rem`,description:`지우기 버튼 크기와 위치입니다.`},{name:`--input-font-masked · --input-masked-letter-spacing`,type:`font · length`,default:`'pass' · .08em`,description:`비밀번호 마스킹 표시입니다.`}]),O(`WebSquare API · XML`,[{name:`xf:input`,type:`XML element`,default:`type='text'`,description:`한 줄 입력 컴포넌트입니다. type, placeholder, disabled, readonly 속성을 조합합니다.`},{name:`ref · data:*`,type:`DataCollection binding`,default:`—`,description:`입력값을 DataMap 또는 DataList 경로에 양방향 바인딩합니다.`},{name:`mandatory · displayFormat · maxlength`,type:`WebSquare property`,default:`—`,description:`필수 검증, 표시 형식, 최대 입력 길이를 설정합니다.`},{name:`w2:group.input_group · input_clearable`,type:`XML element · class`,default:`—`,description:`접두·접미 애드온 또는 지우기 버튼이 있는 입력 구조를 만듭니다.`},{name:`xf:trigger.input_clear`,type:`XML element · event`,default:`—`,description:`입력값을 비우고 입력 컴포넌트로 포커스를 되돌리는 동작을 실행합니다.`},{name:`ev:onchange · ev:oninput`,type:`WebSquare event`,default:`—`,description:`값 변경과 실시간 입력 처리를 화면 스크립트에 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function M(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...h(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(_,{of:n}),`
`,(0,P.jsx)(t.h1,{id:`input`,children:`Input`}),`
`,(0,P.jsx)(t.p,{children:`텍스트·숫자·검색 등 한 줄 입력을 위한 필드 컴포넌트입니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,P.jsxs)(t.p,{children:[`모든 input에는 연결된 label을 제공합니다. 일반 필드는 `,(0,P.jsx)(t.code,{children:`label[for]`}),`와 `,(0,P.jsx)(t.code,{children:`id`}),`를 연결하고, 카드번호·OTP처럼 여러 input이 하나의 그룹을 이루는 경우에는 그룹명을 `,(0,P.jsx)(t.code,{children:`aria-labelledby`}),`로 연결한 뒤 각 input을 `,(0,P.jsx)(t.code,{children:`display_contents`}),` label로 감싸 암묵적으로 연결합니다. 화면에 레이블을 표시하지 않는 검색·애드온 입력은 `,(0,P.jsx)(t.code,{children:`input_group-label_hidden`}),` 레이블을 사용합니다. 클리어 버튼이 있는 입력은 label 안에 다른 버튼을 중첩하지 않도록 숨김 label과 input을 명시적으로 연결합니다.`]}),`
`,(0,P.jsxs)(t.p,{children:[`WebSquare는 한 줄 입력을 `,(0,P.jsx)(t.code,{children:`xf:input`}),`, 레이블·애드온·지우기 영역을 `,(0,P.jsx)(t.code,{children:`w2:group`}),`과 `,(0,P.jsx)(t.code,{children:`w2:textbox`}),`, 입력 삭제 동작을 `,(0,P.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,P.jsx)(t.code,{children:`w2`}),`, `,(0,P.jsx)(t.code,{children:`xf`}),`, `,(0,P.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,P.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,P.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Input 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 값, 숫자 입력 정제, 붙여넣기, 지우기, 애드온과 접근성 상태를 공통 Input API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[`지원하지 않는 크기는 `,(0,P.jsx)(t.code,{children:`md`}),`로 정규화하고 상태·크기 옵션을 `,(0,P.jsx)(t.code,{children:`input_*`}),` 클래스로 변환합니다.`]}),`
`,(0,P.jsx)(t.li,{children:`숫자 전용 입력과 최대 길이는 키 입력뿐 아니라 붙여넣기 값에도 적용합니다.`}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`clearable`}),`은 값이 있고 수정 가능한 경우에만 지우기 버튼을 노출하고 완료 후 포커스를 복원합니다.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`prefix`}),`·`,(0,P.jsx)(t.code,{children:`suffix`}),`는 `,(0,P.jsx)(t.code,{children:`input_group`}),` 애드온으로 구성하며 장식용 prefix는 보조기술에서 제외합니다.`]}),`
`]}),`
`,(0,P.jsx)(S,{examples:T,showFullCode:!0}),`
`,(0,P.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`xf:input`}),`의 `,(0,P.jsx)(t.code,{children:`ref`}),`를 DataMap·DataList 경로에 연결하고 `,(0,P.jsx)(t.code,{children:`type`}),`, `,(0,P.jsx)(t.code,{children:`placeholder`}),`, `,(0,P.jsx)(t.code,{children:`maxlength`}),`, `,(0,P.jsx)(t.code,{children:`mandatory`}),` 등의 속성으로 입력 계약을 정의합니다. 크기·너비·검증 상태는 공통 `,(0,P.jsx)(t.code,{children:`input_*`}),`, `,(0,P.jsx)(t.code,{children:`is-error`}),` 클래스로 표현합니다.`]}),`
`,(0,P.jsxs)(t.p,{children:[`접두·접미 콘텐츠는 `,(0,P.jsx)(t.code,{children:`input_group`}),` 안에 배치하고 지우기 기능은 `,(0,P.jsx)(t.code,{children:`xf:trigger`}),`의 `,(0,P.jsx)(t.code,{children:`ev:onclick`}),`에서 값을 비운 뒤 입력으로 포커스를 돌려줍니다. 숫자·OTP 입력은 `,(0,P.jsx)(t.code,{children:`displayFormat`}),`, `,(0,P.jsx)(t.code,{children:`maxlength`}),`와 입력 이벤트 검증을 함께 사용합니다.`]}),`
`,(0,P.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,P.jsx)(t.p,{children:`레이블과 힌트 텍스트가 포함된 기본 폼 필드입니다.`}),`
`,(0,P.jsx)(v,{of:p,sourceState:`none`}),`
`,(0,P.jsx)(S,{examples:E.basic}),`
`,(0,P.jsx)(t.h2,{id:`단독-사용`,children:`단독 사용`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`form_field`}),` 없이 `,(0,P.jsx)(t.code,{children:`input_field`}),`로 레이블과 input을 묶을 수 있습니다. 보이는 레이블 또는 `,(0,P.jsx)(t.code,{children:`aria-label`}),`로 접근 가능한 이름을 제공합니다.`]}),`
`,(0,P.jsx)(v,{of:s,sourceState:`none`}),`
`,(0,P.jsx)(S,{examples:E.standalone}),`
`,(0,P.jsx)(t.h2,{id:`입력-타입`,children:`입력 타입`}),`
`,(0,P.jsxs)(t.p,{children:[`HTML input type에 따라 브라우저 기본 UI가 적용되며 `,(0,P.jsx)(t.code,{children:`input`}),` 클래스는 모든 타입에 공통으로 사용합니다.`]}),`
`,(0,P.jsx)(v,{of:i,sourceState:`none`}),`
`,(0,P.jsx)(S,{examples:E.type}),`
`,(0,P.jsx)(t.h2,{id:`입력-종류`,children:`입력 종류`}),`
`,(0,P.jsxs)(t.p,{children:[`결제·본인인증 등 도메인 입력은 `,(0,P.jsx)(t.code,{children:`input_split`}),`, `,(0,P.jsx)(t.code,{children:`input_otp`}),`, `,(0,P.jsx)(t.code,{children:`input_group`}),`, `,(0,P.jsx)(t.code,{children:`input_row`}),`를 조합합니다. `,(0,P.jsx)(t.code,{children:`inputMode="numeric"`}),` 입력은 숫자만 허용합니다.`]}),`
`,(0,P.jsx)(v,{of:l,sourceState:`none`}),`
`,(0,P.jsx)(S,{examples:E.kind}),`
`,(0,P.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,P.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 제공합니다.`}),`
`,(0,P.jsx)(v,{of:r,sourceState:`none`}),`
`,(0,P.jsx)(S,{examples:E.size}),`
`,(0,P.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,P.jsxs)(t.p,{children:[`기본은 부모 너비 100%이며 `,(0,P.jsx)(t.code,{children:`input_fit`}),`, `,(0,P.jsx)(t.code,{children:`input_field_fit`}),`, `,(0,P.jsx)(t.code,{children:`form_field_fit`}),`, `,(0,P.jsx)(t.code,{children:`form_fit`}),`으로 최대 320px까지 제한합니다.`]}),`
`,(0,P.jsx)(v,{of:a,sourceState:`none`}),`
`,(0,P.jsx)(S,{examples:E.width}),`
`,(0,P.jsx)(t.h2,{id:`input-group`,children:`Input Group`}),`
`,(0,P.jsx)(t.p,{children:`앞뒤에 텍스트나 아이콘 애드온을 붙일 수 있습니다.`}),`
`,(0,P.jsx)(v,{of:o,sourceState:`none`}),`
`,(0,P.jsx)(S,{examples:E.group}),`
`,(0,P.jsx)(t.h2,{id:`필수-필드`,children:`필수 필드`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`required`}),` 속성과 `,(0,P.jsx)(t.code,{children:`form_field-required`}),`로 필수 입력을 표시합니다.`]}),`
`,(0,P.jsx)(v,{of:f,sourceState:`none`}),`
`,(0,P.jsx)(S,{examples:E.required}),`
`,(0,P.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,P.jsx)(t.p,{children:`disabled, readonly, error, success 상태를 텍스트 메시지와 적절한 aria 속성으로 함께 전달합니다.`}),`
`,(0,P.jsx)(v,{of:m,sourceState:`none`}),`
`,(0,P.jsx)(S,{examples:E.state}),`
`,(0,P.jsx)(t.h2,{id:`입력-삭제`,children:`입력 삭제`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`clearable`}),`은 값이 있을 때 지우기 버튼을 표시하고, readonly와 disabled에서는 숨깁니다. 지운 뒤 입력으로 포커스를 돌려줍니다.`]}),`
`,(0,P.jsx)(v,{of:c,sourceState:`none`}),`
`,(0,P.jsx)(S,{examples:E.clearable}),`
`,(0,P.jsx)(t.h2,{id:`조합-예시`,children:`조합 예시`}),`
`,(0,P.jsxs)(t.p,{children:[`유효성 검사 결과는 색상만으로 전달하지 않고 `,(0,P.jsx)(t.code,{children:`aria-invalid`}),`, `,(0,P.jsx)(t.code,{children:`aria-describedby`}),`, `,(0,P.jsx)(t.code,{children:`role="alert"`}),`, `,(0,P.jsx)(t.code,{children:`role="status"`}),`를 함께 사용합니다.`]}),`
`,(0,P.jsx)(v,{of:d,sourceState:`none`}),`
`,(0,P.jsx)(S,{examples:E.example}),`
`,(0,P.jsx)(C,{sections:A})]})}function N(e={}){let{wrapper:t}={...h(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=t(),g(),y(),b(),x(),w(),j(),u()})))()}F();export{N as default};