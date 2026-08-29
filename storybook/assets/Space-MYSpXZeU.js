import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u}from"./Space.stories-BlslGdjM.js";import{i as d,r as f}from"./react-CJGa1lBW.js";import{c as p,r as m,u as h}from"./blocks-SMgDWto2.js";import{i as g,n as _,r as v,t as y}from"./ComponentApiDocs-DtZNZjDp.js";import{a as b,h as x,i as S,l as C,u as w}from"./layoutApiSections-CeWkRf1r.js";function T(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...d(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(p,{of:s}),`
`,(0,D.jsx)(t.h1,{id:`space`,children:`Space`}),`
`,(0,D.jsx)(t.p,{children:`자식 요소 사이 간격을 일관되게 맞추는 flex 기반 레이아웃 컴포넌트입니다. 간격·방향·정렬·줄바꿈을 조합합니다.`}),`
`,(0,D.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,D.jsx)(t.code,{children:`@uxkm/vue/space`}),`, `,(0,D.jsx)(t.code,{children:`@uxkm/react/space`}),`로 제공합니다. Nuxt와 Next.js는 같은 구현을 재사용합니다.`]}),`
`,(0,D.jsxs)(t.p,{children:[`WebSquare는 별도 런타임 컴포넌트 없이 `,(0,D.jsx)(t.code,{children:`w2:group`}),`에 동일한 `,(0,D.jsx)(t.code,{children:`space`}),` 클래스를 적용합니다. 아래 코드 탭에서 WebSquare XML을 함께 확인할 수 있습니다.`]}),`
`,(0,D.jsx)(t.h2,{id:`사용-기준`,children:`사용 기준`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsx)(t.li,{children:`버튼 묶음, 태그, 아이콘과 텍스트처럼 형제 항목 사이의 일관된 간격에는 Space를 사용합니다.`}),`
`,(0,D.jsx)(t.li,{children:`페이지의 행·열 구조는 Grid, 한 방향의 크기 분배와 복잡한 정렬은 Flex를 사용합니다. Space를 큰 화면 레이아웃 대신 사용하지 않습니다.`}),`
`,(0,D.jsxs)(t.li,{children:[`부모 너비 전체에서 `,(0,D.jsx)(t.code,{children:`justify`}),`로 공간을 분배하거나 줄바꿈하려면 `,(0,D.jsx)(t.code,{children:`block`}),`을 함께 사용합니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[`세로 배치에서 자식 너비를 동일하게 늘리려면 `,(0,D.jsx)(t.code,{children:`vertical`}),`과 `,(0,D.jsx)(t.code,{children:`align="stretch"`}),`를 조합합니다.`]}),`
`]}),`
`,(0,D.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,D.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,D.jsx)(t.code,{children:`Space`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 전달받은 prop을 검증해 공통 CSS 클래스로 변환하고, HTML과 Gulp는 같은 클래스를 마크업에 직접 적용합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`gap`}),`과 `,(0,D.jsx)(t.code,{children:`size`}),` 별칭으로 간격을 지정하며, 값이 없으면 기본 `,(0,D.jsx)(t.code,{children:`md`}),`를 사용합니다. `,(0,D.jsx)(t.code,{children:`md`}),`일 때는 별도 `,(0,D.jsx)(t.code,{children:`space_gap-*`}),` 클래스를 붙이지 않습니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`vertical`}),`·`,(0,D.jsx)(t.code,{children:`wrap`}),`·`,(0,D.jsx)(t.code,{children:`block`}),`은 각각 세로 배치, 줄바꿈, 전체 너비 block flex 클래스로 변환됩니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`align`}),`·`,(0,D.jsx)(t.code,{children:`justify`}),`는 허용된 문자열만 `,(0,D.jsx)(t.code,{children:`space_align-*`}),`·`,(0,D.jsx)(t.code,{children:`space_justify-*`}),` 클래스에 반영합니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.code,{children:`as`}),`, 사용자 정의 클래스와 나머지 속성, React의 `,(0,D.jsx)(t.code,{children:`children`}),` 또는 Vue의 기본 slot은 루트 요소에 전달됩니다.`]}),`
`]}),`
`,(0,D.jsx)(v,{examples:w,showFullCode:!0}),`
`,(0,D.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,D.jsxs)(t.p,{children:[`공통 스타일을 로드한 뒤 `,(0,D.jsx)(t.code,{children:`w2:group`}),`에 `,(0,D.jsx)(t.code,{children:`space`}),`와 필요한 변형 클래스를 조합합니다. `,(0,D.jsx)(t.code,{children:`space`}),`는 기본적으로 inline-flex이므로 전체 너비가 필요하면 `,(0,D.jsx)(t.code,{children:`space_block`}),`을 추가합니다. 단순 배치 컴포넌트이므로 `,(0,D.jsx)(t.code,{children:`scwin`}),` 이벤트와 DataList 바인딩은 필요하지 않습니다.`]}),`
`,(0,D.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,D.jsx)(t.p,{children:`방향, 줄바꿈, block 너비, 간격과 정렬을 Controls에서 조정할 수 있습니다.`}),`
`,(0,D.jsx)(m,{of:n,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:x.playground}),`
`,(0,D.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,D.jsxs)(t.p,{children:[`Space는 가로 inline-flex이며 기본 간격은 `,(0,D.jsx)(t.code,{children:`--space-gap`}),`에 정의된 md입니다.`]}),`
`,(0,D.jsx)(m,{of:o,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:x.basic}),`
`,(0,D.jsx)(t.h2,{id:`세로`,children:`세로`}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.code,{children:`vertical`}),` 또는 `,(0,D.jsx)(t.code,{children:`space_vertical`}),`로 자식을 위에서 아래로 배치합니다.`]}),`
`,(0,D.jsx)(m,{of:l,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:x.vertical}),`
`,(0,D.jsx)(t.h2,{id:`간격`,children:`간격`}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.code,{children:`gap`}),` 또는 `,(0,D.jsx)(t.code,{children:`space_gap-xs`}),`·`,(0,D.jsx)(t.code,{children:`space_gap-sm`}),`·`,(0,D.jsx)(t.code,{children:`space_gap-lg`}),`·`,(0,D.jsx)(t.code,{children:`space_gap-xl`}),`로 간격 크기를 변경합니다.`]}),`
`,(0,D.jsx)(m,{of:i,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:x.gap}),`
`,(0,D.jsx)(t.h2,{id:`줄바꿈`,children:`줄바꿈`}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.code,{children:`wrap`}),`과 `,(0,D.jsx)(t.code,{children:`block`}),`을 함께 사용하면 너비가 부족할 때 자식이 다음 줄로 넘어갑니다.`]}),`
`,(0,D.jsx)(m,{of:r,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:x.wrap}),`
`,(0,D.jsx)(t.h2,{id:`정렬`,children:`정렬`}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.code,{children:`align`}),`과 `,(0,D.jsx)(t.code,{children:`justify`}),`로 교차축·주축 정렬을 지정합니다.`]}),`
`,(0,D.jsx)(m,{of:u,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:x.align}),`
`,(0,D.jsx)(t.h2,{id:`조합-예시`,children:`조합 예시`}),`
`,(0,D.jsx)(t.p,{children:`버튼과 세로 Divider 등 실제 컴포넌트와 함께 사용하는 패턴입니다.`}),`
`,(0,D.jsx)(m,{of:c,sourceState:`none`}),`
`,(0,D.jsx)(v,{examples:x.combo}),`
`,(0,D.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsx)(t.li,{children:`Space는 시각적 배치만 담당하므로 자식을 읽고 키보드로 조작해야 하는 순서대로 작성합니다.`}),`
`,(0,D.jsxs)(t.li,{children:[`관련 버튼 묶음에 별도의 이름이 필요하면 Space 자체에 임의의 role을 추가하기보다 의미 있는 컨테이너와 `,(0,D.jsx)(t.code,{children:`aria-label`}),` 또는 `,(0,D.jsx)(t.code,{children:`aria-labelledby`}),`를 사용합니다.`]}),`
`,(0,D.jsxs)(t.li,{children:[`목록 콘텐츠에는 `,(0,D.jsx)(t.code,{children:`as="ul"`}),`과 `,(0,D.jsx)(t.code,{children:`li`}),`처럼 올바른 시맨틱 구조를 사용하고, WebSquare에서도 필요한 경우 `,(0,D.jsx)(t.code,{children:`tagname`}),`으로 구조를 유지합니다.`]}),`
`,(0,D.jsx)(t.li,{children:`줄바꿈이나 세로 전환 후에도 포커스 순서가 시각적 순서와 일치하는지 확인합니다.`}),`
`]}),`
`,(0,D.jsx)(y,{sections:b})]})}function E(e={}){let{wrapper:t}={...d(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;function O(){return(O=e((()=>{D=t(),f(),h(),g(),_(),C(),S(),a()})))()}O();export{E as default};