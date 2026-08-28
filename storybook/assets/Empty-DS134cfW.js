import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,n as a,o,r as s,s as c,t as l}from"./Empty.stories-7_E5zJTg.js";import{i as u,r as d}from"./react-CbOw9eUO.js";import{c as f,r as p,u as m}from"./blocks-BToPoJhg.js";import{i as h,n as g,r as _,t as v}from"./ComponentApiDocs-DfTaPA3Z.js";import{a as y,o as b,s as x}from"./feedbackDocumentationExamples-BjU6qeOK.js";var S,C,w;function T(){return(T=e((()=>{S=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],C=(e,t,n)=>({title:e,description:n,tables:[{columns:S,rows:t}]}),w=[C(`Empty API`,[{name:`description`,type:`string`,default:`—`,description:`간단한 빈 상태 안내 문구입니다.`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`'md'`,description:`아이콘과 여백 크기입니다.`},{name:`simple · block`,type:`boolean`,default:`false`,description:`아이콘 없는 간단형과 전체 너비 배치입니다.`},{name:`icon · #icon`,type:`ReactNode · slot`,default:`<Icon name='inbox' />`,description:`사용자가 교체할 수 있는 아이콘 영역입니다. 기존 image API도 호환됩니다.`},{name:`children · #description`,type:`ReactNode · slot`,default:`—`,description:`제목과 보조 문구 등 여러 텍스트 노드를 구성하는 설명 슬롯입니다.`},{name:`footer · #footer`,type:`ReactNode · slot`,default:`—`,description:`후속 액션 영역입니다.`}]),C(`HTML · Gulp`,[{name:`empty · empty_image · empty_desc`,type:`class`,default:`—`,description:`루트, 이미지, 설명 구조입니다.`},{name:`empty_footer`,type:`class`,default:`—`,description:`버튼이나 링크를 배치하는 영역입니다.`},{name:`empty_sm · empty_lg`,type:`class`,default:`—`,description:`크기 변형입니다.`},{name:`empty_simple · empty_block`,type:`class`,default:`—`,description:`설명 전용과 전체 너비 변형입니다.`}]),C(`디자인 토큰`,[{name:`--empty-image-size · --empty-gap`,type:`length`,default:`4rem · space-sm`,description:`이미지 크기와 요소 간격입니다.`},{name:`--empty-desc-color · --empty-desc-max-width`,type:`color · length`,default:`text-muted · 20rem`,description:`설명 색상과 최대 너비입니다.`},{name:`--empty-padding-y · --empty-padding-x`,type:`length`,default:`space-xl · space-md`,description:`컴포넌트 안쪽 여백입니다.`}]),C(`WebSquare API · XML`,[{name:`w2:group.empty`,type:`XML element · class`,default:`role='status'`,description:`Empty 루트입니다. empty_image와 empty_desc를 포함합니다.`},{name:`empty_desc · empty_footer`,type:`class`,default:`—`,description:`안내 문구와 후속 액션 영역입니다.`},{name:`empty_sm · empty_lg · empty_simple · empty_block`,type:`class`,default:`—`,description:`크기, 설명 전용, 전체 너비 변형입니다.`},{name:`xf:trigger`,type:`XML element`,default:`—`,description:`empty_footer 안의 후속 액션 버튼을 구성합니다.`}],`화면 XML 루트에 w2, xf, ev 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`)]})))()}function E(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...u(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(f,{of:i}),`
`,(0,O.jsx)(t.h1,{id:`empty`,children:`Empty`}),`
`,(0,O.jsx)(t.p,{children:`데이터나 검색 결과가 없을 때 현재 상태와 다음 행동을 안내합니다. React와 Vue 공통 패키지를 Next.js와 Nuxt에서도 재사용합니다.`}),`
`,(0,O.jsxs)(t.p,{children:[`Empty 루트는 `,(0,O.jsx)(t.code,{children:`role="status"`}),`로 상태를 전달하고 장식용 이미지는 `,(0,O.jsx)(t.code,{children:`aria-hidden="true"`}),`로 보조 기술에서 제외합니다. 액션 버튼의 목적은 구체적인 문구로 제공합니다.`]}),`
`,(0,O.jsxs)(t.p,{children:[`WebSquare는 빈 상태를 `,(0,O.jsx)(t.code,{children:`w2:group.empty`}),`, 설명·이미지를 `,(0,O.jsx)(t.code,{children:`w2:textbox`}),`, 후속 액션을 `,(0,O.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다. 각 WebSquare 탭은 화면 XML 루트에 `,(0,O.jsx)(t.code,{children:`w2`}),`, `,(0,O.jsx)(t.code,{children:`xf`}),`, `,(0,O.jsx)(t.code,{children:`ev`}),` 네임스페이스가 선언되어 있다는 전제의 fragment입니다.`]}),`
`,(0,O.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,O.jsx)(t.p,{children:`아래 코드는 사용 예제가 아니라 Empty 자체의 실제 원본 구현입니다. React와 Vue는 설명, 아이콘, 액션 푸터, 크기와 간단형·블록 변형을 공통 API로 제공합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 재사용합니다.`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`simple`}),`은 아이콘 없이 설명만 표시합니다.`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`block`}),`은 컨테이너 전체 너비에 맞춥니다.`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`icon`}),`/`,(0,O.jsx)(t.code,{children:`#icon`}),`과 `,(0,O.jsx)(t.code,{children:`footer`}),`/`,(0,O.jsx)(t.code,{children:`#footer`}),`로 커스텀 슬롯을 제공합니다.`]}),`
`,(0,O.jsxs)(t.li,{children:[`지원하지 않는 크기는 `,(0,O.jsx)(t.code,{children:`md`}),`로 정규화합니다.`]}),`
`]}),`
`,(0,O.jsx)(_,{examples:y,showFullCode:!0}),`
`,(0,O.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(t.code,{children:`w2:group.empty`}),`에 `,(0,O.jsx)(t.code,{children:`role="status"`}),`를 적용하고 `,(0,O.jsx)(t.code,{children:`empty_desc`}),`로 안내 문구를 전달합니다. 후속 액션은 `,(0,O.jsx)(t.code,{children:`empty_footer`}),` 안의 `,(0,O.jsx)(t.code,{children:`xf:trigger`}),`로 구성합니다.`]}),`
`,(0,O.jsxs)(t.p,{children:[`크기·간단형·블록은 `,(0,O.jsx)(t.code,{children:`empty_sm`}),`·`,(0,O.jsx)(t.code,{children:`empty_lg`}),`·`,(0,O.jsx)(t.code,{children:`empty_simple`}),`·`,(0,O.jsx)(t.code,{children:`empty_block`}),` 클래스로 표현합니다.`]}),`
`,(0,O.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,O.jsx)(p,{of:l,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.basic}),`
`,(0,O.jsx)(t.h2,{id:`액션`,children:`액션`}),`
`,(0,O.jsx)(p,{of:n,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.footer}),`
`,(0,O.jsx)(t.h2,{id:`커스텀-슬롯`,children:`커스텀 슬롯`}),`
`,(0,O.jsx)(p,{of:s,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.custom}),`
`,(0,O.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,O.jsx)(p,{of:c,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.size}),`
`,(0,O.jsx)(t.h2,{id:`설명만`,children:`설명만`}),`
`,(0,O.jsx)(p,{of:o,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.simple}),`
`,(0,O.jsx)(t.h2,{id:`블록--컨테이너`,children:`블록 · 컨테이너`}),`
`,(0,O.jsx)(p,{of:a,sourceState:`none`}),`
`,(0,O.jsx)(_,{examples:b.block}),`
`,(0,O.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,O.jsxs)(t.p,{children:[`Empty 루트는 `,(0,O.jsx)(t.code,{children:`role="status"`}),`로 상태를 전달하고 장식용 이미지는 `,(0,O.jsx)(t.code,{children:`aria-hidden="true"`}),`로 보조 기술에서 제외합니다. 액션 버튼의 목적은 구체적인 문구로 제공합니다.`]}),`
`,(0,O.jsx)(v,{sections:w})]})}function D(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;function k(){return(k=e((()=>{O=t(),d(),m(),h(),g(),x(),T(),r()})))()}k();export{D as default};