import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./Upload.stories-DGlOd-oX.js";import{i as p,r as m}from"./react-BBfuIdny.js";import{c as h,r as g,u as _}from"./blocks-DbhChoan.js";import{i as v,n as y,r as b,t as x}from"./ComponentApiDocs-arf-yre-.js";import{a as S,b as C,x as w}from"./formControlDocumentationExamples-BWmHyzfQ.js";var T,E,D;function O(){return(O=e((()=>{T=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],E=(e,t,n)=>({title:e,description:n,tables:[{columns:T,rows:t}]}),D=[E(`React · Next.js API`,[{name:`variant`,type:`'button' | 'drag' | 'list' | 'picture-card' | 'avatar'`,default:`'button'`,description:`다른 프레임워크 브랜치와 동일한 업로드 UI 유형입니다.`},{name:`files · defaultFiles`,type:`UploadFile[]`,default:`[]`,description:`제어 파일 목록과 초기 목록입니다.`},{name:`multiple · accept`,type:`boolean · string`,default:`false · —`,description:`다중 선택과 허용 파일 형식입니다.`},{name:`maxSize · maxFiles`,type:`number`,default:`—`,description:`바이트 단위 파일 크기와 개수 제한입니다.`},{name:`size · fit · disabled · error · dragover`,type:`string · boolean`,default:`'md' · false`,description:`크기, 너비, 상태 옵션입니다.`},{name:`inputId · trigger · cards`,type:`string · ReactNode`,default:`—`,description:`파일 input ID와 사용자 정의 트리거·카드 콘텐츠입니다.`},{name:`onChange`,type:`(files: File[]) => void`,default:`—`,description:`선택 또는 삭제 후 호출됩니다.`},{name:`onError`,type:`(message: string) => void`,default:`—`,description:`파일 검증 실패 시 호출됩니다.`}],`Next.js는 @uxkm/react/upload를 재사용합니다.`),E(`Vue · Nuxt API`,[{name:`v-model`,type:`UploadFile[]`,default:`[]`,description:`파일 목록과 update:modelValue 이벤트입니다.`},{name:`variant · size`,type:`string`,default:`'button' · 'md'`,description:`button, drag, list, picture-card, avatar 유형과 크기입니다.`},{name:`trigger · cards · default slot`,type:`slot`,default:`—`,description:`트리거, 사진 카드, 파일 목록 콘텐츠입니다.`},{name:`multiple · accept · max-size · max-files`,type:`boolean · string · number`,default:`false · —`,description:`파일 선택 및 검증 조건입니다.`},{name:`@change · @error`,type:`event`,default:`—`,description:`파일 변경과 검증 오류 이벤트입니다.`}],`Nuxt는 @uxkm/vue/upload를 재사용합니다.`),E(`HTML · Gulp`,[{name:`upload_trigger · upload_dropzone · upload_cards`,type:`class`,default:`—`,description:`업로드 UI 구조입니다.`},{name:`data-max-size · data-max-files`,type:`number`,default:`—`,description:`파일 크기와 개수 제한입니다.`},{name:`change`,type:`CustomEvent`,default:`—`,description:`detail.files로 선택 파일 목록을 제공합니다.`},{name:`uploaderror`,type:`CustomEvent`,default:`—`,description:`detail.message로 검증 오류를 제공합니다.`},{name:`is-dragover · is-error · is-disabled`,type:`class`,default:`—`,description:`드래그와 상태 클래스입니다.`}]),E(`디자인 토큰`,[{name:`--upload-max-width · --upload-gap`,type:`length`,default:`입력 너비 · space-sm`,description:`컨테이너 너비와 간격입니다.`},{name:`--upload-dropzone-padding · --upload-dropzone-icon-size`,type:`length`,default:`크기별 값`,description:`드롭존의 여백과 아이콘 크기입니다.`},{name:`--upload-card-size`,type:`length`,default:`6.5rem`,description:`사진 카드 크기입니다.`},{name:`--upload-progress-height`,type:`length`,default:`4px`,description:`진행률 표시 높이입니다.`}]),E(`WebSquare API · XML`,[{name:`xf:input[type=file]`,type:`XML element`,default:`type='file'`,description:`파일 선택 입력입니다. accept, multiple, disabled 속성을 조합합니다.`},{name:`ref · data:*`,type:`DataCollection binding`,default:`—`,description:`선택 파일 정보를 DataCollection 경로에 연결합니다.`},{name:`w2:group.upload · upload_dropzone · upload_cards · upload_avatar`,type:`XML element · class`,default:`—`,description:`버튼, 드롭존, 사진 카드, 아바타 업로드 구조를 만듭니다.`},{name:`upload_list · upload_item`,type:`class`,default:`—`,description:`업로드 목록과 진행·완료·오류 항목을 표시합니다.`},{name:`ev:onchange`,type:`WebSquare event`,default:`—`,description:`파일 선택 후 검증, 목록 갱신, 업로드 처리를 실행합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function k(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...p(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h,{of:o}),`
`,(0,j.jsx)(t.h1,{id:`upload`,children:`Upload`}),`
`,(0,j.jsx)(t.p,{children:`파일 선택, 드래그앤드롭, 사진 카드 업로드를 제공하는 폼 컴포넌트입니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,j.jsxs)(t.p,{children:[`파일 형식·크기·개수를 클라이언트에서 검증하고 선택 목록을 개별 삭제할 수 있습니다. 숨김 파일 input은 트리거·드롭존·카드 레이블과 `,(0,j.jsx)(t.code,{children:`for`}),`/`,(0,j.jsx)(t.code,{children:`id`}),`로 연결합니다.`]}),`
`,(0,j.jsxs)(t.p,{children:[`WebSquare는 파일 입력을 `,(0,j.jsx)(t.code,{children:`xf:input`}),`(type=`,(0,j.jsx)(t.code,{children:`file`}),`), 선택 트리거를 `,(0,j.jsx)(t.code,{children:`xf:trigger`}),`/`,(0,j.jsx)(t.code,{children:`w2:group`}),`, 목록·카드 영역을 `,(0,j.jsx)(t.code,{children:`w2:group`}),`과 `,(0,j.jsx)(t.code,{children:`w2:textbox`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,j.jsx)(t.code,{children:`w2`}),`, `,(0,j.jsx)(t.code,{children:`xf`}),`, `,(0,j.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,j.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Upload 자체의 실제 원본 구현입니다. React와 Vue는 버튼·드래그·목록·사진 카드·아바타 변형, 파일 검증과 목록 갱신을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`variant`}),`로 button, drag, list, picture-card, avatar UI를 전환합니다.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`accept`}),`·`,(0,j.jsx)(t.code,{children:`maxSize`}),`·`,(0,j.jsx)(t.code,{children:`maxFiles`}),`로 클라이언트 검증을 적용하고 실패 시 `,(0,j.jsx)(t.code,{children:`onError`}),`를 호출합니다.`]}),`
`,(0,j.jsxs)(t.li,{children:[`선택·삭제 후 `,(0,j.jsx)(t.code,{children:`onChange`}),`로 파일 목록을 전달합니다.`]}),`
`,(0,j.jsx)(t.li,{children:`서버에서는 파일 내용과 형식을 다시 검증해야 합니다.`}),`
`]}),`
`,(0,j.jsx)(b,{examples:C,showFullCode:!0}),`
`,(0,j.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`xf:input`}),`의 `,(0,j.jsx)(t.code,{children:`type="file"`}),`과 `,(0,j.jsx)(t.code,{children:`ref`}),`를 업로드 데이터 경로에 연결하고 `,(0,j.jsx)(t.code,{children:`accept`}),`·`,(0,j.jsx)(t.code,{children:`multiple`}),`로 선택 계약을 정의합니다. 크기·너비·오류 상태는 공통 `,(0,j.jsx)(t.code,{children:`upload_*`}),`, `,(0,j.jsx)(t.code,{children:`is-error`}),` 클래스로 표현합니다.`]}),`
`,(0,j.jsxs)(t.p,{children:[`드롭존·카드·아바타는 `,(0,j.jsx)(t.code,{children:`w2:group`}),` 레이블 구조로 파일 input과 연결합니다. 선택 후 목록 갱신과 업로드 처리는 `,(0,j.jsx)(t.code,{children:`ev:onchange`}),`를 화면 스크립트에 연결합니다.`]}),`
`,(0,j.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,j.jsx)(t.p,{children:`버튼으로 파일 선택기를 열고 선택된 파일명, 크기와 상태를 목록으로 표시합니다.`}),`
`,(0,j.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.basic}),`
`,(0,j.jsx)(t.h2,{id:`드래그-앤-드롭`,children:`드래그 앤 드롭`}),`
`,(0,j.jsx)(t.p,{children:`드롭존 전체를 파일 선택 레이블로 사용하며 드래그 상태와 검증 오류를 시각적으로 전달합니다.`}),`
`,(0,j.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.dropzone}),`
`,(0,j.jsx)(t.h2,{id:`파일-목록`,children:`파일 목록`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`upload_list`}),`와 `,(0,j.jsx)(t.code,{children:`upload_item`}),`으로 업로드 중, 완료, 오류 상태와 진행률을 표시합니다.`]}),`
`,(0,j.jsx)(g,{of:c,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.list}),`
`,(0,j.jsx)(t.h2,{id:`사진-카드`,children:`사진 카드`}),`
`,(0,j.jsx)(t.p,{children:`이미지 파일은 미리보기 카드로 표시하고 카드별 삭제 동작을 제공합니다.`}),`
`,(0,j.jsx)(g,{of:l,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.cards}),`
`,(0,j.jsx)(t.h2,{id:`아바타-업로드`,children:`아바타 업로드`}),`
`,(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`upload_avatar`}),`를 Avatar 컴포넌트와 조합해 프로필 이미지 변경 UI를 제공합니다.`]}),`
`,(0,j.jsx)(g,{of:d,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.avatar}),`
`,(0,j.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,j.jsx)(t.p,{children:`드롭존의 여백과 아이콘 크기를 small, medium, large로 조정합니다.`}),`
`,(0,j.jsx)(g,{of:u,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.size}),`
`,(0,j.jsx)(t.h2,{id:`너비`,children:`너비`}),`
`,(0,j.jsxs)(t.p,{children:[`기본은 부모 너비를 사용하고 `,(0,j.jsx)(t.code,{children:`upload_fit`}),`은 입력 필드 최대 너비로 제한합니다.`]}),`
`,(0,j.jsx)(g,{of:f,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.width}),`
`,(0,j.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,j.jsx)(t.p,{children:`disabled와 error 상태는 컨트롤과 오류 설명을 함께 제공합니다.`}),`
`,(0,j.jsx)(g,{of:r,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.state}),`
`,(0,j.jsx)(t.h2,{id:`조합-예시`,children:`조합 예시`}),`
`,(0,j.jsx)(t.p,{children:`필수 첨부, 파일 형식, 크기와 개수 제한을 제출 폼에 조합합니다. 서버에서는 파일 내용과 형식을 다시 검증해야 합니다.`}),`
`,(0,j.jsx)(g,{of:n,sourceState:`none`}),`
`,(0,j.jsx)(b,{examples:w.example}),`
`,(0,j.jsx)(x,{sections:D})]})}function A(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),m(),_(),v(),y(),S(),O(),i()})))()}M();export{A as default};