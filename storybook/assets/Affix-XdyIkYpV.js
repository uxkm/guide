import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./Affix.stories-DwjMDR1G.js";import{i as l,r as u}from"./react-CJGa1lBW.js";import{c as d,r as f,u as p}from"./blocks-SMgDWto2.js";import{i as m,n as h,r as g,t as _}from"./ComponentApiDocs-DtZNZjDp.js";import{d as v,i as y,r as b}from"./miscellaneousDocumentationExamples-BTYYNuoc.js";var x,S,C;function w(){return(w=e((()=>{x=[{key:`name`,label:`이름`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],S=(e,t,n)=>({title:e,description:n,tables:[{columns:x,rows:t}]}),C=[S(`Affix API`,[{name:`target`,type:`string`,default:`window`,description:`스크롤 컨테이너 CSS 선택자입니다.`},{name:`offsetTop`,type:`number | string`,default:`0`,description:`상단 고정 간격(px)입니다.`},{name:`offsetBottom`,type:`number | string`,default:`—`,description:`지정하면 하단 고정 모드로 동작합니다.`},{name:`skin`,type:`'' | 'bar' | 'anchor'`,default:`''`,description:`액션 바 또는 앵커 스킨입니다.`},{name:`interactive`,type:`boolean`,default:`true`,description:`Affix 런타임 활성 여부입니다.`}]),S(`HTML · 상태`,[{name:`data-affix`,type:`attribute`,default:`—`,description:`Affix를 초기화합니다.`},{name:`data-target`,type:`attribute`,default:`window`,description:`스크롤 컨테이너를 연결합니다.`},{name:`data-offset-top · data-offset-bottom`,type:`attribute`,default:`—`,description:`고정 방향과 간격을 설정합니다.`},{name:`is-affixed · is-fixed`,type:`class`,default:`—`,description:`런타임이 적용하는 고정 상태입니다.`}]),S(`WebSquare API · XML`,[{name:`w2:group.affix`,type:`XML element · class`,default:`—`,description:`Affix 루트입니다. data-target과 data-offset-top/bottom으로 고정 동작을 설정합니다.`},{name:`affix_target · affix_bar · affix_anchor`,type:`class`,default:`—`,description:`고정 대상과 액션 바·앵커 스킨입니다.`},{name:`is-affixed · is-fixed`,type:`class`,default:`—`,description:`런타임 고정 상태입니다.`},{name:`xf:trigger`,type:`XML element`,default:`—`,description:`고정 바 안의 액션 버튼을 구성합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function T(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(d,{of:c}),`
`,(0,D.jsx)(t.h1,{id:`affix`,children:`Affix`}),`
`,(0,D.jsx)(t.p,{children:`스크롤 시 지정한 위치에 요소를 고정하는 컴포넌트입니다. 툴바, 앵커 내비게이션, 하단 액션 바에 사용할 수 있습니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,D.jsxs)(t.p,{children:[`앵커 스킨에는 목적을 설명하는 `,(0,D.jsx)(t.code,{children:`aria-label`}),`이 있는 `,(0,D.jsx)(t.code,{children:`nav`}),`를 사용합니다. 고정 상태에서도 키보드 포커스 순서와 버튼의 이름은 변하지 않습니다.`]}),`
`,(0,D.jsxs)(t.p,{children:[`WebSquare는 루트를 `,(0,D.jsx)(t.code,{children:`w2:group.affix`}),`, 고정 대상을 `,(0,D.jsx)(t.code,{children:`w2:group.affix_target`}),`, 액션을 `,(0,D.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,D.jsx)(t.code,{children:`w2`}),`, `,(0,D.jsx)(t.code,{children:`xf`}),`, `,(0,D.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,D.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,D.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Affix의 실제 원본 구현입니다. React와 Vue는 상단·하단 오프셋, 스크롤 컨테이너, 액션 바·앵커 스킨을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`target`}),`으로 스크롤 컨테이너를 지정합니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`offsetTop`}),`·`,(0,D.jsx)(t.code,{children:`offsetBottom`}),`으로 고정 방향과 간격을 설정합니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`skin`}),`은 bar·anchor 외형을 전환합니다.`]}),`
`]}),`
`,(0,D.jsx)(g,{examples:b,showFullCode:!0}),`
`,(0,D.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.code,{children:`w2:group.affix`}),`에 `,(0,D.jsx)(t.code,{children:`data-target`}),`과 `,(0,D.jsx)(t.code,{children:`data-offset-top`}),`/`,(0,D.jsx)(t.code,{children:`data-offset-bottom`}),`을 적용합니다. 고정 대상은 `,(0,D.jsx)(t.code,{children:`affix_target`}),`이며 앵커는 `,(0,D.jsx)(t.code,{children:`tagname="nav"`}),`와 `,(0,D.jsx)(t.code,{children:`aria-label`}),`을 함께 사용합니다.`]}),`
`,(0,D.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,D.jsx)(f,{of:o,sourceState:`none`}),`
`,(0,D.jsx)(g,{examples:y.basic}),`
`,(0,D.jsx)(t.h2,{id:`상단-오프셋`,children:`상단 오프셋`}),`
`,(0,D.jsx)(f,{of:n,sourceState:`none`}),`
`,(0,D.jsx)(g,{examples:y.offset}),`
`,(0,D.jsx)(t.h2,{id:`앵커-내비게이션`,children:`앵커 내비게이션`}),`
`,(0,D.jsx)(f,{of:i,sourceState:`none`}),`
`,(0,D.jsx)(g,{examples:y.anchor}),`
`,(0,D.jsx)(t.h2,{id:`하단-고정`,children:`하단 고정`}),`
`,(0,D.jsx)(f,{of:r,sourceState:`none`}),`
`,(0,D.jsx)(g,{examples:y.bottom}),`
`,(0,D.jsx)(t.h2,{id:`페이지-스크롤`,children:`페이지 스크롤`}),`
`,(0,D.jsx)(f,{of:a,sourceState:`none`}),`
`,(0,D.jsx)(g,{examples:y.window}),`
`,(0,D.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,D.jsxs)(t.p,{children:[`앵커 스킨에는 목적을 설명하는 `,(0,D.jsx)(t.code,{children:`aria-label`}),`이 있는 `,(0,D.jsx)(t.code,{children:`nav`}),`를 사용합니다. 고정 상태에서도 키보드 포커스 순서와 버튼의 이름은 변하지 않습니다.`]}),`
`,(0,D.jsx)(_,{sections:C})]})}function E(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;function O(){return(O=e((()=>{D=t(),u(),p(),m(),h(),v(),w(),s()})))()}O();export{E as default};