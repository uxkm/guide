import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./Grid.stories-FD6K6xXD.js";import{i as g,r as _}from"./react-CJGa1lBW.js";import{c as v,r as y,u as b}from"./blocks-SMgDWto2.js";import{i as x,n as S,r as C,t as w}from"./ComponentApiDocs-DtZNZjDp.js";import{c as T,i as E,l as D,p as O,r as k}from"./layoutApiSections-CeWkRf1r.js";function A(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...g(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(v,{of:p}),`
`,(0,M.jsx)(t.h1,{id:`grid`,children:`Grid`}),`
`,(0,M.jsx)(t.p,{children:`12열 CSS Grid 기반 레이아웃 시스템입니다. 대부분의 배치는 부모 Grid에서 제어하고, 혼합 레이아웃만 GridCol로 개별 span을 지정합니다.`}),`
`,(0,M.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,M.jsx)(t.code,{children:`@uxkm/vue/grid`}),`, `,(0,M.jsx)(t.code,{children:`@uxkm/react/grid`}),`로 제공합니다. Nuxt와 Next.js는 같은 구현을 재사용합니다.`]}),`
`,(0,M.jsxs)(t.p,{children:[`WebSquare는 별도 런타임 컴포넌트 없이 `,(0,M.jsx)(t.code,{children:`w2:group`}),`에 동일한 `,(0,M.jsx)(t.code,{children:`grid`}),` 클래스를 적용합니다. 아래 코드 탭에서 WebSquare XML을 함께 확인할 수 있습니다.`]}),`
`,(0,M.jsx)(t.h2,{id:`사용-기준`,children:`사용 기준`}),`
`,(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsx)(t.li,{children:`행과 열을 함께 제어하는 2차원 배치에는 Grid를 사용합니다. 한 방향 정렬이나 콘텐츠 크기 중심 배치는 Flex, 단순한 항목 간격은 Space가 더 적합합니다.`}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`cols`}),`, `,(0,M.jsx)(t.code,{children:`ratio`}),`, `,(0,M.jsx)(t.code,{children:`autoFit`}),`, `,(0,M.jsx)(t.code,{children:`autoFill`}),`, `,(0,M.jsx)(t.code,{children:`equalColumns`}),`는 모두 열 트랙을 정의하는 모드입니다. 한 Grid에서는 의도한 모드 하나만 선택합니다.`]}),`
`,(0,M.jsxs)(t.li,{children:[`모든 자식의 폭이 같으면 `,(0,M.jsx)(t.code,{children:`itemSpan`}),`, 자식마다 폭이 다르면 GridCol의 `,(0,M.jsx)(t.code,{children:`span`}),`을 사용합니다.`]}),`
`,(0,M.jsx)(t.li,{children:`반응형 값은 기본 → md → lg 순서의 mobile-first 방식으로 덮어씁니다.`}),`
`]}),`
`,(0,M.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,M.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,M.jsx)(t.code,{children:`Grid`}),`와 `,(0,M.jsx)(t.code,{children:`GridCol`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 전달받은 prop을 검증해 공통 CSS 클래스로 변환하고, HTML과 Gulp는 같은 클래스를 마크업에 직접 적용합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`range`}),`는 열 수와 span을 1~12 범위로 제한합니다.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`cols`}),`·`,(0,M.jsx)(t.code,{children:`colsMd`}),`·`,(0,M.jsx)(t.code,{children:`colsLg`}),`는 구간별 열 트랙 수를, `,(0,M.jsx)(t.code,{children:`itemSpan`}),`은 모든 직계 자식의 span을 제어합니다.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`gap`}),`·`,(0,M.jsx)(t.code,{children:`ratio`}),`·`,(0,M.jsx)(t.code,{children:`align`}),`은 허용된 문자열만 클래스에 반영합니다.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`autoFit`}),`·`,(0,M.jsx)(t.code,{children:`autoFill`}),`·`,(0,M.jsx)(t.code,{children:`equalColumns`}),`는 콘텐츠 기반 자동 열 배치 클래스로 변환됩니다.`]}),`
`,(0,M.jsxs)(t.li,{children:[`GridCol은 자식마다 다른 `,(0,M.jsx)(t.code,{children:`span`}),`·`,(0,M.jsx)(t.code,{children:`spanMd`}),`·`,(0,M.jsx)(t.code,{children:`spanLg`}),`가 필요한 혼합 레이아웃에서만 사용합니다.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`as`}),`, 사용자 정의 클래스와 나머지 속성, React의 `,(0,M.jsx)(t.code,{children:`children`}),` 또는 Vue의 기본 slot은 루트 요소에 전달됩니다.`]}),`
`]}),`
`,(0,M.jsx)(C,{examples:T,showFullCode:!0}),`
`,(0,M.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,M.jsxs)(t.p,{children:[`공통 스타일을 로드한 뒤 Grid와 GridCol을 각각 중첩된 `,(0,M.jsx)(t.code,{children:`w2:group`}),`으로 작성합니다. Grid에는 `,(0,M.jsx)(t.code,{children:`grid`}),`와 부모 변형 클래스를, GridCol에는 `,(0,M.jsx)(t.code,{children:`grid_col-span-*`}),` 클래스를 지정합니다. `,(0,M.jsx)(t.code,{children:`header`}),`, `,(0,M.jsx)(t.code,{children:`aside`}),`, `,(0,M.jsx)(t.code,{children:`main`}),`, `,(0,M.jsx)(t.code,{children:`footer`}),` 같은 문서 구조는 `,(0,M.jsx)(t.code,{children:`tagname`}),`으로 유지합니다. 레이아웃만 담당하므로 `,(0,M.jsx)(t.code,{children:`scwin`}),` 이벤트와 DataList 바인딩은 필요하지 않습니다.`]}),`
`,(0,M.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,M.jsx)(t.p,{children:`열 수, 간격, 자동 배치 prop을 Controls에서 조정할 수 있습니다.`}),`
`,(0,M.jsx)(y,{of:h,sourceState:`none`}),`
`,(0,M.jsx)(C,{examples:O.playground}),`
`,(0,M.jsx)(t.h2,{id:`기본-페이지-레이아웃`,children:`기본 페이지 레이아웃`}),`
`,(0,M.jsx)(t.p,{children:`헤더와 푸터는 12열을 사용하고, md 이상에서 사이드바 3열과 콘텐츠 9열로 나눕니다.`}),`
`,(0,M.jsx)(y,{of:l,sourceState:`none`}),`
`,(0,M.jsx)(C,{examples:O.basicLayout}),`
`,(0,M.jsx)(t.h2,{id:`콘텐츠가-있는-페이지-레이아웃`,children:`콘텐츠가 있는 페이지 레이아웃`}),`
`,(0,M.jsx)(t.p,{children:`Main content 안에 반응형 콘텐츠 섹션을 중첩한 활용 예시입니다.`}),`
`,(0,M.jsx)(y,{of:o,sourceState:`none`}),`
`,(0,M.jsx)(C,{examples:O.contentLayout}),`
`,(0,M.jsx)(t.h2,{id:`12열-전체-활용`,children:`12열 전체 활용`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`itemSpan={1}`}),`을 부모에 지정하여 12개 항목이 한 행을 채웁니다.`]}),`
`,(0,M.jsx)(y,{of:d,sourceState:`none`}),`
`,(0,M.jsx)(C,{examples:O.twelveColumns}),`
`,(0,M.jsx)(t.h2,{id:`부모-클래스로-제어`,children:`부모 클래스로 제어`}),`
`,(0,M.jsx)(t.p,{children:`열 수·간격·비율·자식 일괄 span은 부모에만 지정합니다. 자식에 Grid 클래스가 필요 없습니다.`}),`
`,(0,M.jsx)(y,{of:s,sourceState:`none`}),`
`,(0,M.jsx)(C,{examples:O.parent}),`
`,(0,M.jsx)(t.h2,{id:`균등-열`,children:`균등 열`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`cols`}),` 또는 `,(0,M.jsx)(t.code,{children:`grid_cols-*`}),`로 동일 너비 열을 지정합니다. 12열 span과 무관하게 fr 단위로 분할됩니다.`]}),`
`,(0,M.jsx)(y,{of:n,sourceState:`none`}),`
`,(0,M.jsx)(C,{examples:O.equal}),`
`,(0,M.jsx)(t.h2,{id:`비율-열`,children:`비율 열`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`ratio`}),` 또는 `,(0,M.jsx)(t.code,{children:`grid_ratio-*`}),`로 2~3열 비율 레이아웃을 부모에서 지정합니다.`]}),`
`,(0,M.jsx)(y,{of:i,sourceState:`none`}),`
`,(0,M.jsx)(C,{examples:O.ratio}),`
`,(0,M.jsx)(t.h2,{id:`자식-일괄-span`,children:`자식 일괄 span`}),`
`,(0,M.jsxs)(t.p,{children:[`모든 자식이 같은 12열 비율일 때 `,(0,M.jsx)(t.code,{children:`itemSpan`}),`을 사용합니다. 6이면 한 행에 2개, 3이면 4개씩 배치됩니다.`]}),`
`,(0,M.jsx)(y,{of:r,sourceState:`none`}),`
`,(0,M.jsx)(C,{examples:O.itemSpan}),`
`,(0,M.jsx)(t.h2,{id:`자식별-span`,children:`자식별 span`}),`
`,(0,M.jsxs)(t.p,{children:[`8+4, 4+4+4처럼 행마다 열 비율이 다를 때 GridCol의 `,(0,M.jsx)(t.code,{children:`span`}),`을 사용합니다.`]}),`
`,(0,M.jsx)(y,{of:f,sourceState:`none`}),`
`,(0,M.jsx)(C,{examples:O.child}),`
`,(0,M.jsx)(t.h2,{id:`간격`,children:`간격`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`gap`}),` 또는 `,(0,M.jsx)(t.code,{children:`grid_gap-sm`}),`·`,(0,M.jsx)(t.code,{children:`grid_gap-lg`}),`·`,(0,M.jsx)(t.code,{children:`grid_gap-none`}),`을 부모에 지정합니다.`]}),`
`,(0,M.jsx)(y,{of:u,sourceState:`none`}),`
`,(0,M.jsx)(C,{examples:O.gap}),`
`,(0,M.jsx)(t.h2,{id:`반응형`,children:`반응형`}),`
`,(0,M.jsx)(t.p,{children:`Grid와 GridCol의 md·lg prop으로 균등 열, 자식 일괄 span, 자식별 span을 반응형으로 제어합니다.`}),`
`,(0,M.jsx)(y,{of:a,sourceState:`none`}),`
`,(0,M.jsx)(C,{examples:O.responsive}),`
`,(0,M.jsx)(t.h2,{id:`자동-배치`,children:`자동 배치`}),`
`,(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`autoFit`}),`과 `,(0,M.jsx)(t.code,{children:`autoFill`}),`은 `,(0,M.jsx)(t.code,{children:`--grid-auto-min`}),`을 최소 너비로 사용해 가능한 공간에 열을 자동 배치합니다. `,(0,M.jsx)(t.code,{children:`equalColumns`}),`는 자식 수만큼 같은 너비의 열을 만듭니다.`]}),`
`,(0,M.jsx)(y,{of:m,sourceState:`none`}),`
`,(0,M.jsx)(C,{examples:O.auto}),`
`,(0,M.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsx)(t.li,{children:`CSS Grid가 시각적 배치만 바꾸도록 콘텐츠를 읽고 조작해야 하는 순서대로 DOM에 작성합니다.`}),`
`,(0,M.jsxs)(t.li,{children:[`페이지 랜드마크에는 의미에 맞는 `,(0,M.jsx)(t.code,{children:`as`}),` 또는 WebSquare `,(0,M.jsx)(t.code,{children:`tagname`}),`을 사용하고, 한 페이지의 `,(0,M.jsx)(t.code,{children:`main`}),`은 하나만 둡니다.`]}),`
`,(0,M.jsx)(t.li,{children:`작은 화면에서도 콘텐츠가 잘리거나 가로 스크롤을 강제하지 않는지 확인합니다. 긴 텍스트와 폼 컨트롤을 포함한 실제 콘텐츠로 반응형 구간을 검증합니다.`}),`
`,(0,M.jsx)(t.li,{children:`Grid와 GridCol 자체에는 불필요한 ARIA role을 추가하지 않습니다. 제목, 목록, 내비게이션 같은 의미는 내부 콘텐츠의 시맨틱 요소로 제공합니다.`}),`
`]}),`
`,(0,M.jsx)(w,{sections:k})]})}function j(e={}){let{wrapper:t}={...g(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=t(),_(),b(),x(),S(),D(),E(),c()})))()}N();export{j as default};