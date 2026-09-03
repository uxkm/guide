import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,n as a,o,r as s,s as c,t as l}from"./Divider.stories-BJpRJgfU.js";import{i as u,r as d}from"./react-DPG3xyh1.js";import{c as f,r as p,u as m}from"./blocks-BXsfpknd.js";import{i as h,n as g,r as _,t as v}from"./ComponentApiDocs-BKc5okVC.js";import{d as y,i as b,l as x,o as S,t as C}from"./layoutApiSections-BLoZItwP.js";function w(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...u(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{of:s}),`
`,(0,E.jsx)(t.h1,{id:`divider`,children:`Divider`}),`
`,(0,E.jsx)(t.p,{children:`콘텐츠를 시각적으로 구분하는 구분선입니다. 단순 선·점선·텍스트 레이블·세로 구분을 공통 클래스로 조합합니다.`}),`
`,(0,E.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,E.jsx)(t.code,{children:`@uxkm/vue/divider`}),`, `,(0,E.jsx)(t.code,{children:`@uxkm/react/divider`}),`로 제공합니다. Nuxt와 Next.js는 같은 구현을 재사용합니다.`]}),`
`,(0,E.jsxs)(t.p,{children:[`WebSquare는 Divider의 의미에 따라 XHTML `,(0,E.jsx)(t.code,{children:`hr`}),`·`,(0,E.jsx)(t.code,{children:`span`}),` 또는 `,(0,E.jsx)(t.code,{children:`w2:group`}),`을 사용합니다. 아래 코드 탭에서 각 유형에 맞는 WebSquare XML을 확인할 수 있습니다.`]}),`
`,(0,E.jsx)(t.h2,{id:`사용-기준`,children:`사용 기준`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[`콘텐츠 주제가 전환되는 의미 있는 수평 구분에는 레이블 없는 Divider를 사용합니다. React와 Vue에서는 자동으로 `,(0,E.jsx)(t.code,{children:`hr`}),`가 선택됩니다.`]}),`
`,(0,E.jsx)(t.li,{children:`단순한 여백 확보가 목적이면 Divider 대신 spacing token이나 Space를 사용합니다.`}),`
`,(0,E.jsxs)(t.li,{children:[`레이블형 Divider는 시각적인 구분과 짧은 보조 문구에 사용합니다. 실제 섹션 제목이라면 별도의 `,(0,E.jsx)(t.code,{children:`h2`}),`·`,(0,E.jsx)(t.code,{children:`h3`}),` 등 제목 요소를 함께 제공합니다.`]}),`
`,(0,E.jsx)(t.li,{children:`세로 Divider는 버튼이나 짧은 텍스트가 한 행에 배치된 경우에만 장식용으로 사용합니다.`}),`
`]}),`
`,(0,E.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,E.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,E.jsx)(t.code,{children:`Divider`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 전달받은 prop을 검증해 공통 CSS 클래스로 변환하고, HTML과 Gulp는 같은 클래스를 마크업에 직접 적용합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.code,{children:`tag`}),`가 `,(0,E.jsx)(t.code,{children:`auto`}),`이면 레이블 없는 선은 `,(0,E.jsx)(t.code,{children:`hr`}),`, 레이블형은 `,(0,E.jsx)(t.code,{children:`div`}),`, 세로선은 `,(0,E.jsx)(t.code,{children:`span`}),`으로 루트를 선택합니다.`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.code,{children:`as`}),`는 `,(0,E.jsx)(t.code,{children:`tag`}),`보다 우선하며, 허용된 `,(0,E.jsx)(t.code,{children:`tag`}),` 값만 루트 요소 선택에 반영됩니다.`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.code,{children:`vertical`}),`·`,(0,E.jsx)(t.code,{children:`dashed`}),`·`,(0,E.jsx)(t.code,{children:`plain`}),`·`,(0,E.jsx)(t.code,{children:`orient`}),`는 검증된 값만 `,(0,E.jsx)(t.code,{children:`divider_*`}),` 클래스로 변환됩니다.`]}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.code,{children:`label`}),`과 React `,(0,E.jsx)(t.code,{children:`children`}),`(또는 Vue 기본 slot)은 레이블 콘텐츠로 사용되며, `,(0,E.jsx)(t.code,{children:`hr`}),` 루트에는 자식을 두지 않습니다.`]}),`
`,(0,E.jsxs)(t.li,{children:[`세로 Divider는 장식이므로 `,(0,E.jsx)(t.code,{children:`aria-hidden="true"`}),`를 적용합니다.`]}),`
`,(0,E.jsx)(t.li,{children:`사용자 정의 클래스와 나머지 속성은 루트 요소에 전달됩니다.`}),`
`]}),`
`,(0,E.jsx)(_,{examples:S,showFullCode:!0}),`
`,(0,E.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,E.jsxs)(t.p,{children:[`레이블 없는 수평선은 `,(0,E.jsx)(t.code,{children:`<hr class="divider" />`}),`로 의미를 유지합니다. 레이블형은 `,(0,E.jsx)(t.code,{children:`divider`}),` 클래스를 가진 `,(0,E.jsx)(t.code,{children:`w2:group`}),` 안에 `,(0,E.jsx)(t.code,{children:`w2:textbox`}),`를 배치하고, 세로선은 `,(0,E.jsx)(t.code,{children:`aria-hidden="true"`}),`인 XHTML `,(0,E.jsx)(t.code,{children:`span`}),`에 `,(0,E.jsx)(t.code,{children:`divider_vertical`}),` 클래스를 적용합니다. 상태가 없는 시각적 구분 요소이므로 `,(0,E.jsx)(t.code,{children:`scwin`}),` 이벤트와 DataList 바인딩은 필요하지 않습니다.`]}),`
`,(0,E.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,E.jsx)(t.p,{children:`점선, 레이블 굵기, 세로 방향, 레이블 정렬과 루트 태그를 Controls에서 조정할 수 있습니다.`}),`
`,(0,E.jsx)(p,{of:n,sourceState:`none`}),`
`,(0,E.jsx)(_,{examples:y.playground}),`
`,(0,E.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,E.jsxs)(t.p,{children:[(0,E.jsx)(t.code,{children:`divider`}),` 클래스로 가로 구분선을 그립니다. 레이블이 없는 컴포넌트는 기본적으로 `,(0,E.jsx)(t.code,{children:`hr`}),`로 렌더링됩니다.`]}),`
`,(0,E.jsx)(p,{of:l,sourceState:`none`}),`
`,(0,E.jsx)(_,{examples:y.basic}),`
`,(0,E.jsx)(t.h2,{id:`점선`,children:`점선`}),`
`,(0,E.jsxs)(t.p,{children:[(0,E.jsx)(t.code,{children:`dashed`}),` 또는 `,(0,E.jsx)(t.code,{children:`divider_dashed`}),`로 점선 스타일을 적용합니다.`]}),`
`,(0,E.jsx)(p,{of:a,sourceState:`none`}),`
`,(0,E.jsx)(_,{examples:y.dashed}),`
`,(0,E.jsx)(t.h2,{id:`텍스트-레이블`,children:`텍스트 레이블`}),`
`,(0,E.jsxs)(t.p,{children:[(0,E.jsx)(t.code,{children:`label`}),`이나 기본 콘텐츠가 있으면 양쪽 선과 가운데 레이블로 전환됩니다. `,(0,E.jsx)(t.code,{children:`plain`}),`은 레이블 굵기를 낮춥니다.`]}),`
`,(0,E.jsx)(p,{of:o,sourceState:`none`}),`
`,(0,E.jsx)(_,{examples:y.text}),`
`,(0,E.jsx)(t.h2,{id:`레이블-정렬`,children:`레이블 정렬`}),`
`,(0,E.jsxs)(t.p,{children:[(0,E.jsx)(t.code,{children:`orient="left"`}),`·`,(0,E.jsx)(t.code,{children:`orient="right"`}),`로 레이블 위치를 조정합니다. 기본은 가운데입니다.`]}),`
`,(0,E.jsx)(p,{of:i,sourceState:`none`}),`
`,(0,E.jsx)(_,{examples:y.orient}),`
`,(0,E.jsx)(t.h2,{id:`세로`,children:`세로`}),`
`,(0,E.jsxs)(t.p,{children:[(0,E.jsx)(t.code,{children:`vertical`}),` 또는 `,(0,E.jsx)(t.code,{children:`divider_vertical`}),`은 인라인·flex 행 안에서 장식용 세로 구분선으로 사용합니다.`]}),`
`,(0,E.jsx)(p,{of:c,sourceState:`none`}),`
`,(0,E.jsx)(_,{examples:y.vertical}),`
`,(0,E.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,E.jsxs)(t.ul,{children:[`
`,(0,E.jsxs)(t.li,{children:[`의미 있는 수평 구분선은 `,(0,E.jsx)(t.code,{children:`hr`}),`를 유지합니다. 단순 장식선이라면 보조 기술에 중복 정보를 주지 않도록 사용 자체를 줄이거나 `,(0,E.jsx)(t.code,{children:`aria-hidden="true"`}),`를 적용합니다.`]}),`
`,(0,E.jsxs)(t.li,{children:[`세로 Divider는 콘텐츠 의미를 전달하지 않으므로 항상 `,(0,E.jsx)(t.code,{children:`aria-hidden="true"`}),`로 접근성 트리에서 제외합니다.`]}),`
`,(0,E.jsx)(t.li,{children:`레이블형 Divider의 텍스트만으로 문서 제목 계층을 대신하지 않습니다. 섹션 구조가 필요하면 실제 제목 요소를 사용합니다.`}),`
`,(0,E.jsxs)(t.li,{children:[(0,E.jsx)(t.code,{children:`tag`}),` 또는 `,(0,E.jsx)(t.code,{children:`as`}),`로 루트 요소를 강제할 때는 수평 구분선의 의미가 사라지지 않는지 확인합니다.`]}),`
`]}),`
`,(0,E.jsx)(v,{sections:C})]})}function T(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;function D(){return(D=e((()=>{E=t(),d(),m(),h(),g(),x(),b(),r()})))()}D();export{T as default};