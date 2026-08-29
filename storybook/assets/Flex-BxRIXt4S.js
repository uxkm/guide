import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,g as o,h as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,t as g,u as _}from"./Flex.stories-Be5ytX39.js";import{i as v,r as y}from"./react-CJGa1lBW.js";import{c as b,r as x,u as S}from"./blocks-SMgDWto2.js";import{i as C,n as w,r as T,t as E}from"./ComponentApiDocs-DtZNZjDp.js";import{f as D,i as O,l as k,n as A,s as j}from"./layoutApiSections-CeWkRf1r.js";function M(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...v(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(b,{of:f}),`
`,(0,P.jsx)(t.h1,{id:`flex`,children:`Flex`}),`
`,(0,P.jsx)(t.p,{children:`CSS Flexbox 기반으로 방향·간격·정렬·반응형 항목 크기를 제어하는 레이아웃 컴포넌트입니다. 혼합 배치는 FlexItem으로 개별 자식을 제어합니다.`}),`
`,(0,P.jsxs)(t.p,{children:[`Vue와 React의 공통 구현은 각각 `,(0,P.jsx)(t.code,{children:`@uxkm/vue/flex`}),`, `,(0,P.jsx)(t.code,{children:`@uxkm/react/flex`}),`로 제공합니다. Nuxt와 Next.js는 같은 구현을 재사용합니다.`]}),`
`,(0,P.jsxs)(t.p,{children:[`WebSquare는 별도 런타임 컴포넌트 없이 `,(0,P.jsx)(t.code,{children:`w2:group`}),`에 동일한 `,(0,P.jsx)(t.code,{children:`flex`}),` 클래스를 적용합니다. 아래 코드 탭에서 WebSquare XML을 함께 확인할 수 있습니다.`]}),`
`,(0,P.jsx)(t.h2,{id:`사용-기준`,children:`사용 기준`}),`
`,(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsx)(t.li,{children:`한 방향의 정렬·분배 또는 콘텐츠 크기 중심 배치에는 Flex를 사용합니다. 행과 열을 함께 제어하는 2차원 배치는 Grid, 단순한 항목 간격은 Space가 더 적합합니다.`}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`cols`}),`, `,(0,P.jsx)(t.code,{children:`ratio`}),`, `,(0,P.jsx)(t.code,{children:`itemSpan`}),`, `,(0,P.jsx)(t.code,{children:`equal`}),`, `,(0,P.jsx)(t.code,{children:`autoFit`}),`은 항목 너비를 정의하는 모드입니다. 한 Flex에서는 의도한 모드 하나를 우선 사용하고, 예외 항목만 FlexItem으로 조정합니다.`]}),`
`,(0,P.jsxs)(t.li,{children:[`FlexItem의 개별 `,(0,P.jsx)(t.code,{children:`span`}),`으로 여러 행을 구성할 때는 부모 Flex에 `,(0,P.jsx)(t.code,{children:`wrap`}),`을 지정합니다.`]}),`
`,(0,P.jsx)(t.li,{children:`반응형 값은 기본 → md → lg 순서의 mobile-first 방식으로 덮어씁니다.`}),`
`]}),`
`,(0,P.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,P.jsxs)(t.p,{children:[`아래 코드는 사용 예제가 아니라 `,(0,P.jsx)(t.code,{children:`Flex`}),`와 `,(0,P.jsx)(t.code,{children:`FlexItem`}),` 컴포넌트 자체의 구현입니다. React와 Vue는 전달받은 prop을 검증해 공통 CSS 클래스로 변환하고, HTML과 Gulp는 같은 클래스를 마크업에 직접 적용합니다. Next.js는 React 구현을, Nuxt는 Vue 구현을 그대로 재사용합니다.`]}),`
`,(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`range`}),`는 항목 수, span과 표시 순서를 1~12 범위로 제한합니다.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`direction`}),`·`,(0,P.jsx)(t.code,{children:`directionMd`}),`·`,(0,P.jsx)(t.code,{children:`directionLg`}),`는 구간별 배치 방향을, `,(0,P.jsx)(t.code,{children:`wrap`}),`은 여러 줄 배치를 제어합니다.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`cols`}),`·`,(0,P.jsx)(t.code,{children:`ratio`}),`·`,(0,P.jsx)(t.code,{children:`itemSpan`}),`은 부모에서 자식 너비를 일괄 제어하는 방식입니다.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`gap`}),`·`,(0,P.jsx)(t.code,{children:`align`}),`·`,(0,P.jsx)(t.code,{children:`justify`}),`는 허용된 문자열만 클래스에 반영합니다.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`equal`}),`·`,(0,P.jsx)(t.code,{children:`autoFit`}),`은 동일 너비 확장과 최소 너비 기반 자동 배치 클래스로 변환됩니다.`]}),`
`,(0,P.jsxs)(t.li,{children:[`FlexItem은 자식마다 다른 `,(0,P.jsx)(t.code,{children:`span`}),`, `,(0,P.jsx)(t.code,{children:`grow`}),`, `,(0,P.jsx)(t.code,{children:`fit`}),`, `,(0,P.jsx)(t.code,{children:`align`}),`, `,(0,P.jsx)(t.code,{children:`order`}),`가 필요한 경우에 사용합니다.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`as`}),`, 사용자 정의 클래스와 나머지 속성, React의 `,(0,P.jsx)(t.code,{children:`children`}),` 또는 Vue의 기본 slot은 루트 요소에 전달됩니다.`]}),`
`]}),`
`,(0,P.jsx)(T,{examples:j,showFullCode:!0}),`
`,(0,P.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,P.jsxs)(t.p,{children:[`공통 스타일을 로드한 뒤 Flex와 FlexItem을 각각 중첩된 `,(0,P.jsx)(t.code,{children:`w2:group`}),`으로 작성합니다. Flex에는 `,(0,P.jsx)(t.code,{children:`flex flex_row`}),`와 부모 변형 클래스를, FlexItem에는 `,(0,P.jsx)(t.code,{children:`flex_item-span-*`}),`, `,(0,P.jsx)(t.code,{children:`flex_grow`}),`, `,(0,P.jsx)(t.code,{children:`flex_fit`}),` 같은 자식 클래스를 지정합니다. 문서 구조는 `,(0,P.jsx)(t.code,{children:`tagname`}),`으로 유지하며, 레이아웃만 담당하므로 `,(0,P.jsx)(t.code,{children:`scwin`}),` 이벤트와 DataList 바인딩은 필요하지 않습니다.`]}),`
`,(0,P.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,P.jsx)(t.p,{children:`방향, 열 수, 간격, 정렬, 줄바꿈을 Controls에서 조정할 수 있습니다.`}),`
`,(0,P.jsx)(x,{of:a,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.playground}),`
`,(0,P.jsx)(t.h2,{id:`기본-페이지-레이아웃`,children:`기본 페이지 레이아웃`}),`
`,(0,P.jsx)(t.p,{children:`작은 화면에서는 한 열로 쌓고, md 이상에서 사이드바 3/12와 본문 9/12로 나눕니다.`}),`
`,(0,P.jsx)(x,{of:_,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.pageLayout}),`
`,(0,P.jsx)(t.h2,{id:`콘텐츠가-있는-페이지-레이아웃`,children:`콘텐츠가 있는 페이지 레이아웃`}),`
`,(0,P.jsx)(t.p,{children:`Main content 안에 제목·설명과 반응형 콘텐츠 섹션을 배치한 활용 예시입니다.`}),`
`,(0,P.jsx)(x,{of:c,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.contentLayout}),`
`,(0,P.jsx)(t.h2,{id:`부모-클래스로-제어`,children:`부모 클래스로 제어`}),`
`,(0,P.jsx)(t.p,{children:`균등 항목 수·비율·자식 일괄 span을 부모 Flex에 지정합니다.`}),`
`,(0,P.jsx)(x,{of:i,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.parent}),`
`,(0,P.jsx)(t.h2,{id:`12열-전체-활용`,children:`12열 전체 활용`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`itemSpan={1}`}),`로 12개 항목이 한 행을 채웁니다.`]}),`
`,(0,P.jsx)(x,{of:s,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.twelveColumns}),`
`,(0,P.jsx)(t.h2,{id:`균등-항목`,children:`균등 항목`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`cols`}),`로 한 행에 들어갈 동일 너비 항목 수를 지정합니다.`]}),`
`,(0,P.jsx)(x,{of:n,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.equal}),`
`,(0,P.jsx)(t.h2,{id:`비율-항목`,children:`비율 항목`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`ratio`}),`로 1-2, 1-2-1 등 자주 쓰는 항목 비율을 지정합니다.`]}),`
`,(0,P.jsx)(x,{of:p,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.ratio}),`
`,(0,P.jsx)(t.h2,{id:`자식-일괄-span`,children:`자식 일괄 span`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`itemSpan`}),`으로 모든 직계 자식의 12단위 너비를 한 번에 지정합니다.`]}),`
`,(0,P.jsx)(x,{of:l,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.itemSpan}),`
`,(0,P.jsx)(t.h2,{id:`자식별-span`,children:`자식별 span`}),`
`,(0,P.jsxs)(t.p,{children:[`혼합 레이아웃에서는 FlexItem의 `,(0,P.jsx)(t.code,{children:`span`}),`을 사용해 각 항목 너비를 지정합니다.`]}),`
`,(0,P.jsx)(x,{of:m,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.childSpan}),`
`,(0,P.jsx)(t.h2,{id:`항목-확장과-고정`,children:`항목 확장과 고정`}),`
`,(0,P.jsxs)(t.p,{children:[`FlexItem의 `,(0,P.jsx)(t.code,{children:`fit`}),`은 콘텐츠 너비를 유지하고, `,(0,P.jsx)(t.code,{children:`grow`}),`는 남는 공간을 채웁니다. `,(0,P.jsx)(t.code,{children:`growFactor={2}`}),`는 기본 grow 항목보다 두 배의 비율로 남는 공간을 분배받습니다.`]}),`
`,(0,P.jsx)(x,{of:r,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.itemSizing}),`
`,(0,P.jsx)(t.h2,{id:`간격`,children:`간격`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`gap`}),` 또는 `,(0,P.jsx)(t.code,{children:`flex_gap-sm`}),`·`,(0,P.jsx)(t.code,{children:`flex_gap-lg`}),`·`,(0,P.jsx)(t.code,{children:`flex_gap-none`}),`을 부모에 지정합니다.`]}),`
`,(0,P.jsx)(x,{of:h,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.gap}),`
`,(0,P.jsx)(t.h2,{id:`반응형`,children:`반응형`}),`
`,(0,P.jsx)(t.p,{children:`Flex와 FlexItem의 md·lg prop으로 반응형 배치를 제어합니다.`}),`
`,(0,P.jsx)(x,{of:u,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.responsive}),`
`,(0,P.jsx)(t.h2,{id:`자동-배치`,children:`자동 배치`}),`
`,(0,P.jsxs)(t.p,{children:[(0,P.jsx)(t.code,{children:`autoFit`}),`은 `,(0,P.jsx)(t.code,{children:`--flex-auto-min`}),`을 기준으로 줄바꿈하고 남는 공간을 채웁니다.`]}),`
`,(0,P.jsx)(x,{of:d,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.auto}),`
`,(0,P.jsx)(t.h2,{id:`정렬과-비율`,children:`정렬과 비율`}),`
`,(0,P.jsx)(t.p,{children:`주축 정렬과 항목 비율을 각각 또는 함께 조합할 수 있습니다.`}),`
`,(0,P.jsx)(x,{of:g,sourceState:`none`}),`
`,(0,P.jsx)(T,{examples:D.alignmentAndRatio}),`
`,(0,P.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsx)(t.li,{children:`시각적 배치와 관계없이 콘텐츠를 읽고 키보드로 조작해야 하는 순서대로 DOM에 작성합니다.`}),`
`,(0,P.jsxs)(t.li,{children:[`FlexItem의 `,(0,P.jsx)(t.code,{children:`order`}),` 또는 `,(0,P.jsx)(t.code,{children:`flex_order-*`}),`는 화면 표시 순서만 변경합니다. 의미 있는 콘텐츠나 포커스 가능한 요소의 순서를 바꾸는 용도로 사용하지 않습니다.`]}),`
`,(0,P.jsxs)(t.li,{children:[`페이지 랜드마크에는 의미에 맞는 `,(0,P.jsx)(t.code,{children:`as`}),` 또는 WebSquare `,(0,P.jsx)(t.code,{children:`tagname`}),`을 사용하고, 한 페이지의 `,(0,P.jsx)(t.code,{children:`main`}),`은 하나만 둡니다.`]}),`
`,(0,P.jsxs)(t.li,{children:[`작은 화면과 텍스트 확대 환경에서 항목이 겹치거나 잘리지 않는지 확인하고, 필요하면 `,(0,P.jsx)(t.code,{children:`wrap`}),` 또는 세로 방향으로 전환합니다.`]}),`
`,(0,P.jsx)(t.li,{children:`Flex와 FlexItem 자체에는 불필요한 ARIA role을 추가하지 않습니다. 목록·내비게이션 등의 의미는 내부 콘텐츠의 시맨틱 요소로 제공합니다.`}),`
`]}),`
`,(0,P.jsx)(E,{sections:A})]})}function N(e={}){let{wrapper:t}={...v(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=t(),y(),S(),C(),w(),k(),O(),o()})))()}F();export{N as default};