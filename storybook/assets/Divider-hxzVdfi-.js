import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u}from"./Divider.stories-CCRj1Gwo.js";import{i as d,r as f}from"./react-DL__92zz.js";import{c as p,r as m,u as h}from"./blocks-Cy0HofPr.js";import{i as g,n as _,r as v,t as y}from"./ComponentApiDocs-Ci2QMeRq.js";import{d as b,i as x,l as S,o as C,t as w}from"./layoutApiSections-MR7yGl7p.js";function T(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...d(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(p,{of:o}),`
`,(0,D.jsx)(t.h1,{id:`divider`,children:`Divider`}),`
`,(0,D.jsx)(t.p,{children:`콘텐츠를 시각적으로 구분하는 구분선입니다. 단순 선·점선·텍스트 레이블·세로 구분을 공통 클래스로 조합합니다.`}),`
`,(0,D.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,D.jsx)(t.code,{children:`@uxkm/vue/divider`}),`, `,(0,D.jsx)(t.code,{children:`@uxkm/react/divider`}),`로 제공합니다. Nuxt와 Next.js는 같은 구현을 재사용합니다.`]}),`
`,(0,D.jsxs)(t.p,{children:[`WebSquare는 Divider의 의미에 따라 XHTML `,(0,D.jsx)(t.code,{children:`hr`}),`·`,(0,D.jsx)(t.code,{children:`span`}),` 또는 `,(0,D.jsx)(t.code,{children:`w2:group`}),`을 사용합니다. 아래 코드 탭에서 각 유형에 맞는 WebSquare XML을 확인할 수 있습니다.`]}),`
`,(0,D.jsx)(t.h2,{id:`사용-기준`,children:`사용 기준`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[`콘텐츠 주제가 전환되는 의미 있는 수평 구분에는 레이블 없는 Divider를 사용합니다. React와 Vue에서는 자동으로 `,(0,D.jsx)(t.code,{children:`hr`}),`가 선택됩니다.`]}),`
`,(0,D.jsx)(t.li,{children:`단순한 여백 확보가 목적이면 Divider 대신 spacing token이나 Space를 사용합니다.`}),`
`,(0,D.jsxs)(t.li,{children:[`레이블형 Divider는 시각적인 구분과 짧은 보조 문구에 사용합니다. 실제 섹션 제목이라면 별도의 `,(0,D.jsx)(t.code,{children:`h2`}),`·`,(0,D.jsx)(t.code,{children:`h3`}),` 등 제목 요소를 함께 제공합니다.`]}),`
`,(0,D.jsx)(t.li,{children:`세로 Divider는 버튼이나 짧은 텍스트가 한 행에 배치된 경우에만 장식용으로 사용합니다.`}),`
`]}),`
`,(0,D.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,D.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,D.jsx)(t.code,{children:`Divider`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 전달받은 prop을 검증해 공통 CSS 클래스로 변환하고, HTML은 같은 클래스를 마크업에 직접 적용합니다. Gulp는 `,(0,D.jsx)(t.code,{children:`divider`}),` Nunjucks macro와 `,(0,D.jsx)(t.code,{children:`{{ divider(...) }}`}),` / `,(0,D.jsx)(t.code,{children:`{% call %}`}),`로 같은 계약을 재사용합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`tag`}),`가 `,(0,D.jsx)(t.code,{children:`auto`}),`이면 레이블 없는 선은 `,(0,D.jsx)(t.code,{children:`hr`}),`, 레이블형은 `,(0,D.jsx)(t.code,{children:`div`}),`, 세로선은 `,(0,D.jsx)(t.code,{children:`span`}),`으로 루트를 선택합니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`as`}),`는 `,(0,D.jsx)(t.code,{children:`tag`}),`보다 우선하며, 허용된 `,(0,D.jsx)(t.code,{children:`tag`}),` 값만 루트 요소 선택에 반영됩니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`vertical`}),`·`,(0,D.jsx)(t.code,{children:`dashed`}),`·`,(0,D.jsx)(t.code,{children:`plain`}),`·`,(0,D.jsx)(t.code,{children:`orient`}),`는 검증된 값만 `,(0,D.jsx)(t.code,{children:`divider_*`}),` 클래스로 변환됩니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`marginY`}),`는 가로에서 상·하, 세로에서 좌·우 간격으로 적용됩니다. 프리셋은 `,(0,D.jsx)(t.code,{children:`divider_margin-*`}),`, 숫자(rem)·CSS 길이는 방향에 맞는 `,(0,D.jsx)(t.code,{children:`--divider-current-margin-*`}),` 변수를 사용합니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`thickness`}),`는 선 두께입니다. 프리셋은 `,(0,D.jsx)(t.code,{children:`divider_thickness-*`}),`, 숫자(rem)·CSS 길이는 `,(0,D.jsx)(t.code,{children:`--divider-current-thickness`}),`로 적용합니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`height`}),`는 세로 구분선 길이입니다. 프리셋은 `,(0,D.jsx)(t.code,{children:`divider_height-*`}),`, 숫자(rem)·CSS 길이는 `,(0,D.jsx)(t.code,{children:`--divider-current-height`}),`로 적용합니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`label`}),`과 React `,(0,D.jsx)(t.code,{children:`children`}),`(또는 Vue 기본 slot)은 레이블 콘텐츠로 사용되며, `,(0,D.jsx)(t.code,{children:`hr`}),` 루트에는 자식을 두지 않습니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[`세로 Divider는 장식이므로 `,(0,D.jsx)(t.code,{children:`aria-hidden="true"`}),`를 적용합니다.`]}),`
`,(0,D.jsx)(t.li,{children:`사용자 정의 클래스와 나머지 속성은 루트 요소에 전달됩니다.`}),`
`]}),`
`,(0,D.jsx)(v,{examples:C,showFullCode:!0}),`
`,(0,D.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,D.jsxs)(t.p,{children:[`레이블 없는 수평선은 `,(0,D.jsx)(t.code,{children:`<hr class="divider" />`}),`로 의미를 유지합니다. 레이블형은 `,(0,D.jsx)(t.code,{children:`divider`}),` 클래스를 가진 `,(0,D.jsx)(t.code,{children:`w2:group`}),` 안에 `,(0,D.jsx)(t.code,{children:`w2:textbox`}),`를 배치하고, 세로선은 `,(0,D.jsx)(t.code,{children:`aria-hidden="true"`}),`인 XHTML `,(0,D.jsx)(t.code,{children:`span`}),`에 `,(0,D.jsx)(t.code,{children:`divider_vertical`}),` 클래스를 적용합니다. 상태가 없는 시각적 구분 요소이므로 `,(0,D.jsx)(t.code,{children:`scwin`}),` 이벤트와 DataList 바인딩은 필요하지 않습니다.`]}),`
`,(0,D.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.code,{children:`divider`}),` 클래스로 가로 구분선을 그립니다. 레이블이 없는 컴포넌트는 기본적으로 `,(0,D.jsx)(t.code,{children:`hr`}),`로 렌더링됩니다. 점선, 레이블, 세로 방향 등은 Controls에서 조정할 수 있습니다.`]}),`
`,(0,D.jsx)(m,{of:n,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:b.playground}),`
`,(0,D.jsx)(t.h2,{id:`점선`,children:`점선`}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.code,{children:`dashed`}),` 또는 `,(0,D.jsx)(t.code,{children:`divider_dashed`}),`로 점선 스타일을 적용합니다.`]}),`
`,(0,D.jsx)(m,{of:u,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:b.dashed}),`
`,(0,D.jsx)(t.h2,{id:`간격`,children:`간격`}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.code,{children:`marginY`}),` 또는 `,(0,D.jsx)(t.code,{children:`divider_margin-*`}),`로 간격을 조절합니다. `,(0,D.jsx)(t.strong,{children:`가로`}),`에서는 상·하, `,(0,D.jsx)(t.strong,{children:`세로`}),`에서는 좌·우에 적용됩니다. 프리셋은 `,(0,D.jsx)(t.code,{children:`xs`}),`·`,(0,D.jsx)(t.code,{children:`sm`}),`·`,(0,D.jsx)(t.code,{children:`md`}),`·`,(0,D.jsx)(t.code,{children:`lg`}),`·`,(0,D.jsx)(t.code,{children:`xl`}),`·`,(0,D.jsx)(t.code,{children:`none`}),`이고, 숫자(rem)·CSS 길이도 사용할 수 있습니다.`]}),`
`,(0,D.jsx)(m,{of:c,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:b.marginY}),`
`,(0,D.jsx)(t.h2,{id:`두께`,children:`두께`}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.code,{children:`thickness`}),` 또는 `,(0,D.jsx)(t.code,{children:`divider_thickness-*`}),`로 선 두께를 조절합니다. 프리셋은 `,(0,D.jsx)(t.code,{children:`xs`}),`(1px)·`,(0,D.jsx)(t.code,{children:`sm`}),`(2px)·`,(0,D.jsx)(t.code,{children:`lg`}),`(3px)·`,(0,D.jsx)(t.code,{children:`xl`}),`(4px)·`,(0,D.jsx)(t.code,{children:`none`}),`이고, 숫자(rem)·CSS 길이도 사용할 수 있습니다. 기본값은 1px입니다.`]}),`
`,(0,D.jsx)(m,{of:l,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:b.thickness}),`
`,(0,D.jsx)(t.h2,{id:`텍스트-레이블`,children:`텍스트 레이블`}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.code,{children:`label`}),`이나 기본 콘텐츠가 있으면 양쪽 선과 가운데 레이블로 전환됩니다. `,(0,D.jsx)(t.code,{children:`plain`}),`은 레이블 굵기를 낮춥니다.`]}),`
`,(0,D.jsx)(m,{of:s,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:b.text}),`
`,(0,D.jsx)(t.h2,{id:`레이블-정렬`,children:`레이블 정렬`}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.code,{children:`orient="left"`}),`·`,(0,D.jsx)(t.code,{children:`orient="right"`}),`로 레이블 위치를 조정합니다. 기본은 가운데입니다.`]}),`
`,(0,D.jsx)(m,{of:i,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:b.orient}),`
`,(0,D.jsx)(t.h2,{id:`세로`,children:`세로`}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.code,{children:`vertical`}),` 또는 `,(0,D.jsx)(t.code,{children:`divider_vertical`}),`은 인라인·flex 행 안에서 장식용 세로 구분선으로 사용합니다. `,(0,D.jsx)(t.code,{children:`height`}),` 또는 `,(0,D.jsx)(t.code,{children:`divider_height-*`}),`로 세로 길이를 지정할 수 있으며, 비우면 부모 stretch와 `,(0,D.jsx)(t.code,{children:`min-height: 1em`}),`을 유지합니다.`]}),`
`,(0,D.jsx)(m,{of:r,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:b.vertical}),`
`,(0,D.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[`의미 있는 수평 구분선은 `,(0,D.jsx)(t.code,{children:`hr`}),`를 유지합니다. 단순 장식선이라면 보조 기술에 중복 정보를 주지 않도록 사용 자체를 줄이거나 `,(0,D.jsx)(t.code,{children:`aria-hidden="true"`}),`를 적용합니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[`세로 Divider는 콘텐츠 의미를 전달하지 않으므로 항상 `,(0,D.jsx)(t.code,{children:`aria-hidden="true"`}),`로 접근성 트리에서 제외합니다.`]}),`
`,(0,D.jsx)(t.li,{children:`레이블형 Divider의 텍스트만으로 문서 제목 계층을 대신하지 않습니다. 섹션 구조가 필요하면 실제 제목 요소를 사용합니다.`}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`tag`}),` 또는 `,(0,D.jsx)(t.code,{children:`as`}),`로 루트 요소를 강제할 때는 수평 구분선의 의미가 사라지지 않는지 확인합니다.`]}),`
`]}),`
`,(0,D.jsx)(y,{sections:w})]})}function E(e={}){let{wrapper:t}={...d(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;function O(){return(O=e((()=>{D=t(),f(),h(),g(),_(),S(),x(),a()})))()}O();export{E as default};