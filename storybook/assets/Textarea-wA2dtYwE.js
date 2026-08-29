import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./Textarea.stories-CkbRkgYp.js";import{i as p,r as m}from"./react-CJGa1lBW.js";import{c as h,r as g,u as _}from"./blocks-SMgDWto2.js";import{i as v,n as y,r as b,t as x}from"./ComponentApiDocs-DtZNZjDp.js";import{a as S,v as C,y as w}from"./formControlDocumentationExamples-BWmHyzfQ.js";var T,E,D;function O(){return(O=e((()=>{T=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],E=(e,t,n)=>({title:e,description:n,tables:[{columns:T,rows:t}]}),D=[E(`React · Next.js API · Props`,[{name:`value · defaultValue`,type:`string | number`,default:`— · ''`,description:`제어 값과 비제어 초기 값입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`패딩과 글자 크기입니다.`},{name:`resize`,type:`'none' | 'vertical' | 'horizontal' | 'both'`,default:`'none'`,description:`사용자가 조절할 수 있는 방향입니다.`},{name:`fit`,type:`boolean`,default:`false`,description:`최대 너비를 320px로 제한합니다.`},{name:`showCount`,type:`boolean`,default:`false`,description:`접근 가능한 실시간 글자 수를 표시합니다.`},{name:`maxLength`,type:`number`,default:`—`,description:`네이티브 최대 글자 수이며 카운터의 한도입니다.`},{name:`disabled · readOnly · error`,type:`boolean`,default:`false`,description:`비활성, 읽기 전용, 오류 상태입니다.`},{name:`className · wrapperClassName · ...props`,type:`string · textarea attributes`,default:`—`,description:`textarea와 카운터 래퍼에 적용할 값입니다.`}],`Next.js는 @uxkm/react/textarea를 재사용합니다.`),E(`React · Next.js API · Events`,[{name:`onChange`,type:`ChangeEvent handler`,default:`—`,description:`값이 바뀔 때 호출됩니다.`}]),E(`Vue · Nuxt API`,[{name:`v-model / model-value`,type:`string | number`,default:`''`,description:`입력 값과 update:modelValue 이벤트입니다.`},{name:`size · resize`,type:`string`,default:`'md' · 'none'`,description:`크기와 크기 조절 방향입니다.`},{name:`fit · show-count`,type:`boolean`,default:`false`,description:`제한 너비와 글자 수 표시입니다.`},{name:`max-length`,type:`string | number`,default:`—`,description:`최대 글자 수와 카운터 한도입니다.`},{name:`disabled · error`,type:`boolean`,default:`false`,description:`비활성 및 오류 상태입니다.`}],`Nuxt는 @uxkm/vue/textarea를 재사용합니다.`),E(`HTML · Gulp · 클래스`,[{name:`textarea · textarea_sm · textarea_lg`,type:`class`,default:`—`,description:`루트와 크기 변형입니다.`},{name:`display_contents · input_group-label_hidden`,type:`class`,default:`—`,description:`암묵적 label 래퍼와 화면에 숨긴 label 텍스트입니다.`},{name:`textarea_fit · textarea_wrap_fit`,type:`class`,default:`—`,description:`단독 textarea와 카운터 래퍼의 제한 너비입니다.`},{name:`textarea_resize_*`,type:`class`,default:`textarea_resize_none`,description:`none, vertical, horizontal, both 방향입니다.`},{name:`textarea_wrap · textarea_show-count`,type:`class`,default:`—`,description:`글자 수 표시 래퍼입니다.`},{name:`textarea_count · is-limit`,type:`class`,default:`—`,description:`카운터와 최대 글자 수 도달 상태입니다.`},{name:`is-error · is-success`,type:`class`,default:`—`,description:`검증 상태입니다.`}]),E(`디자인 토큰`,[{name:`--textarea-min-height`,type:`length`,default:`5rem`,description:`rows가 없을 때의 최소 높이입니다.`},{name:`--textarea-count-inset-x · --textarea-count-inset-y`,type:`length`,default:`.75rem · .5rem`,description:`카운터의 가로·세로 안쪽 여백입니다.`},{name:`--input-max-width`,type:`length`,default:`320px`,description:`fit 변형의 최대 너비입니다.`}]),E(`WebSquare API · XML`,[{name:`xf:textarea`,type:`XML element`,default:`—`,description:`여러 줄 입력 컴포넌트입니다. rows, maxlength, disabled, readonly 속성을 조합합니다.`},{name:`ref · data:*`,type:`DataCollection binding`,default:`—`,description:`입력 내용을 DataMap 또는 DataList 경로에 양방향 바인딩합니다.`},{name:`mandatory · maxlength`,type:`WebSquare property`,default:`—`,description:`필수 검증과 최대 글자 수를 설정합니다.`},{name:`w2:group.textarea_wrap`,type:`XML element · class`,default:`—`,description:`textarea와 실시간 글자 수 표시를 하나의 영역으로 묶습니다.`},{name:`w2:textbox.textarea_count`,type:`XML element · role=status`,default:`—`,description:`현재 글자 수와 한도를 표시하고 aria-live로 변경을 알립니다.`},{name:`ev:oninput · ev:onchange`,type:`WebSquare event`,default:`—`,description:`글자 수 갱신, 유효성 검사, 값 변경 처리를 연결합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function k(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...p(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h,{of:o}),`
`,(0,j.jsx)(t.h1,{id:`textarea`,children:`Textarea`}),`
`,(0,j.jsx)(t.p,{children:`여러 줄의 긴 텍스트를 입력하는 필드 컴포넌트입니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,j.jsxs)(t.p,{children:[`모든 textarea에는 접근 가능한 이름을 제공합니다. 일반 필드는 `,(0,j.jsx)(t.code,{children:`label[for]`}),`와 `,(0,j.jsx)(t.code,{children:`id`}),`를 연결하고, 보이는 label이 없는 단독 입력은 `,(0,j.jsx)(t.code,{children:`input_group-label_hidden`}),` 텍스트와 textarea를 하나의 `,(0,j.jsx)(t.code,{children:`display_contents`}),` label로 감싸 암묵적으로 연결합니다. 오류와 도움말은 `,(0,j.jsx)(t.code,{children:`aria-describedby`}),`로 연결하고, 글자 수 카운터는 시각 텍스트와 스크린 리더용 상태 문구를 함께 제공합니다.`]}),`
`,(0,j.jsxs)(t.p,{children:[`WebSquare는 여러 줄 입력을 `,(0,j.jsx)(t.code,{children:`xf:textarea`}),`, 레이블·상태·카운터 영역을 `,(0,j.jsx)(t.code,{children:`w2:group`}),`과 `,(0,j.jsx)(t.code,{children:`w2:textbox`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,j.jsx)(t.code,{children:`w2`}),`, `,(0,j.jsx)(t.code,{children:`xf`}),`, `,(0,j.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,j.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Textarea 자체의 실제 원본 구현입니다. React와 Vue는 제어·비제어 값, 크기 조절 방향, 오류 상태, 최대 글자 수와 접근 가능한 카운터를 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`size`}),`와 `,(0,j.jsx)(t.code,{children:`resize`}),` 값을 검증해 대응 `,(0,j.jsx)(t.code,{children:`textarea_*`}),` 클래스로 변환합니다.`]}),`
`,(0,j.jsxs)(t.li,{children:[`글자 수 표시는 고유 id를 만들고 기존 `,(0,j.jsx)(t.code,{children:`aria-describedby`}),`와 카운터 id를 함께 유지합니다.`]}),`
`,(0,j.jsxs)(t.li,{children:[`최대 길이에 도달하면 `,(0,j.jsx)(t.code,{children:`is-limit`}),` 상태를 적용하고 시각 텍스트와 스크린 리더 문구를 분리합니다.`]}),`
`,(0,j.jsx)(t.li,{children:`카운터를 사용하지 않을 때는 네이티브 textarea를 직접 반환해 불필요한 wrapper를 만들지 않습니다.`}),`
`]}),`
`,(0,j.jsx)(b,{examples:C,showFullCode:!0}),`
`,(0,j.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`xf:textarea`}),`의 `,(0,j.jsx)(t.code,{children:`ref`}),`를 데이터 경로에 연결하고 `,(0,j.jsx)(t.code,{children:`rows`}),`, `,(0,j.jsx)(t.code,{children:`maxlength`}),`, `,(0,j.jsx)(t.code,{children:`mandatory`}),`, `,(0,j.jsx)(t.code,{children:`disabled`}),`를 입력 요구사항에 맞게 설정합니다. 크기 조절과 너비는 `,(0,j.jsx)(t.code,{children:`textarea_resize_*`}),`, `,(0,j.jsx)(t.code,{children:`textarea_fit`}),` 클래스로 표현합니다.`]}),`
`,(0,j.jsxs)(t.p,{children:[`글자 수가 필요하면 `,(0,j.jsx)(t.code,{children:`textarea_wrap`}),` 안에 `,(0,j.jsx)(t.code,{children:`w2:textbox.textarea_count`}),`를 배치하고 입력 이벤트에서 현재 길이를 갱신합니다. 카운터에는 `,(0,j.jsx)(t.code,{children:`role="status"`}),`와 `,(0,j.jsx)(t.code,{children:`aria-live="polite"`}),`를 적용하고 오류·도움말 id는 입력의 설명 관계에 포함합니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,j.jsx)(t.p,{children:`레이블과 힌트가 포함된 기본 여러 줄 입력입니다. 기본 상태에서는 우측 하단 크기 조절 핸들을 표시하지 않습니다.`}),`
`,(0,j.jsx)(g,{of:d,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.basic}),`
`,(0,j.jsx)(t.h2,{id:`단독-사용`,children:`단독 사용`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`form_field`}),` 없이 사용할 때도 보이는 label 또는 숨김 텍스트를 포함한 암묵적 label을 제공합니다.`]}),`
`,(0,j.jsx)(g,{of:u,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.standalone}),`
`,(0,j.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,j.jsx)(t.p,{children:`small, medium, large 세 가지 크기를 제공합니다.`}),`
`,(0,j.jsx)(g,{of:c,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.size}),`
`,(0,j.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,j.jsxs)(t.p,{children:[`기본은 부모 너비 100%이며 `,(0,j.jsx)(t.code,{children:`form_field_fit`}),`, `,(0,j.jsx)(t.code,{children:`textarea_fit`}),`, `,(0,j.jsx)(t.code,{children:`textarea_wrap_fit`}),`으로 최대 320px까지 제한합니다.`]}),`
`,(0,j.jsx)(g,{of:f,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.width}),`
`,(0,j.jsx)(t.h2,{id:`크기-조절`,children:`크기 조절`}),`
`,(0,j.jsx)(t.p,{children:`사용자가 조절할 수 있는 방향을 none, vertical, horizontal, both 중에서 선택합니다. 긴 글 입력에는 보통 vertical을 권장합니다.`}),`
`,(0,j.jsx)(g,{of:n,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.resize}),`
`,(0,j.jsx)(t.h2,{id:`필수-필드`,children:`필수 필드`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`required`}),` 속성과 `,(0,j.jsx)(t.code,{children:`form_field-required`}),`로 필수 입력을 표시합니다.`]}),`
`,(0,j.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.required}),`
`,(0,j.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,j.jsx)(t.p,{children:`disabled, readonly, error, success 상태를 텍스트 메시지와 적절한 aria 속성으로 함께 전달합니다.`}),`
`,(0,j.jsx)(g,{of:r,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.state}),`
`,(0,j.jsx)(t.h2,{id:`글자-수`,children:`글자 수`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`showCount`}),`와 `,(0,j.jsx)(t.code,{children:`maxLength`}),`를 함께 사용하면 현재 글자 수와 한도를 표시합니다. 카운터는 `,(0,j.jsx)(t.code,{children:`role="status"`}),`, `,(0,j.jsx)(t.code,{children:`aria-live="polite"`}),`로 변경 내용을 알립니다.`]}),`
`,(0,j.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.count}),`
`,(0,j.jsx)(t.h2,{id:`조합-예시`,children:`조합 예시`}),`
`,(0,j.jsx)(t.p,{children:`필수 입력, 유효성 오류, 글자 수 카운터를 함께 구성한 예시입니다. 기본값과 동일하게 크기 조절 핸들은 표시하지 않습니다.`}),`
`,(0,j.jsx)(g,{of:l,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.example}),`
`,(0,j.jsx)(x,{sections:D})]})}function A(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),m(),_(),v(),y(),S(),O(),i()})))()}M();export{A as default};