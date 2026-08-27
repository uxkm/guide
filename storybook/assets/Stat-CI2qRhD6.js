import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./Stat.stories-Dampj0t9.js";import{i as f,r as p}from"./react-BBfuIdny.js";import{c as m,r as h,u as g}from"./blocks-DbhChoan.js";import{i as _,n as v,r as y,t as b}from"./ComponentApiDocs-arf-yre-.js";import{i as x,m as S,n as C,p as w,u as T}from"./dataDisplayDocumentationApiSections-CHd0j5Jy.js";function E(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...f(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(m,{of:l}),`
`,(0,O.jsx)(t.h1,{id:`stat`,children:`Stat`}),`
`,(0,O.jsx)(t.p,{children:`핵심 수치와 라벨, 설명, 추세를 강조해 표시합니다. 크기·접두·접미·아이콘·레이아웃·카드 스킨과 반응형 그룹을 제공합니다.`}),`
`,(0,O.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,O.jsx)(t.code,{children:`@uxkm/vue/stat`}),`, `,(0,O.jsx)(t.code,{children:`@uxkm/react/stat`}),`으로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,O.jsxs)(t.p,{children:[`WebSquare는 `,(0,O.jsx)(t.code,{children:`w2:group`}),` 안에 label·value·prefix·suffix·description `,(0,O.jsx)(t.code,{children:`w2:textbox`}),`를 배치하고 각 값을 화면 데이터에 연결합니다.`]}),`
`,(0,O.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,O.jsx)(t.p,{children:`아래 코드는 Stat의 실제 HTML·Gulp·Vue·React 원본 구현입니다. 값 구성, 크기·배치·카드 스킨, 추세 색상과 그룹 클래스가 적용되는 방식을 확인할 수 있습니다.`}),`
`,(0,O.jsx)(y,{examples:w,showFullCode:!0}),`
`,(0,O.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,O.jsxs)(t.p,{children:[`라벨·값·접두·접미·추세 설명은 독립된 `,(0,O.jsx)(t.code,{children:`w2:textbox`}),`로 구성해 데이터 바인딩과 갱신 범위를 분리합니다. 여러 지표는 `,(0,O.jsx)(t.code,{children:`w2:group.stat_group`}),`으로 묶고, 증감 의미는 텍스트와 `,(0,O.jsx)(t.code,{children:`color_*`}),`를 함께 갱신해 색상에만 의존하지 않습니다.`]}),`
`,(0,O.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,O.jsx)(h,{of:u,sourceState:`none`}),`
`,(0,O.jsx)(y,{examples:S.basic}),`
`,(0,O.jsx)(t.h2,{id:`접두접미`,children:`접두·접미`}),`
`,(0,O.jsx)(t.p,{children:`통화·백분율·단위 등을 값과 분리해 표현합니다.`}),`
`,(0,O.jsx)(h,{of:i,sourceState:`none`}),`
`,(0,O.jsx)(y,{examples:S.prefixSuffix}),`
`,(0,O.jsx)(t.h2,{id:`추세`,children:`추세`}),`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(t.code,{children:`trend`}),`, `,(0,O.jsx)(t.code,{children:`trendColor`}),`, `,(0,O.jsx)(t.code,{children:`trendIcon`}),`으로 증감 정보를 표시합니다.`]}),`
`,(0,O.jsx)(h,{of:r,sourceState:`none`}),`
`,(0,O.jsx)(y,{examples:S.trend}),`
`,(0,O.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,O.jsx)(t.p,{children:`small, medium, large 세 가지 수치 크기를 제공합니다.`}),`
`,(0,O.jsx)(h,{of:n,sourceState:`none`}),`
`,(0,O.jsx)(y,{examples:S.sizes}),`
`,(0,O.jsx)(t.h2,{id:`레이아웃`,children:`레이아웃`}),`
`,(0,O.jsx)(t.p,{children:`horizontal, inline, row 클래스로 콘텐츠 관계에 맞는 배치를 선택합니다.`}),`
`,(0,O.jsx)(h,{of:c,sourceState:`none`}),`
`,(0,O.jsx)(y,{examples:S.layouts}),`
`,(0,O.jsx)(t.h2,{id:`아이콘`,children:`아이콘`}),`
`,(0,O.jsx)(t.p,{children:`기본 슬롯·자식 콘텐츠로 아이콘과 커스텀 본문을 조합합니다.`}),`
`,(0,O.jsx)(h,{of:a,sourceState:`none`}),`
`,(0,O.jsx)(y,{examples:S.icon}),`
`,(0,O.jsx)(t.h2,{id:`카드-스킨`,children:`카드 스킨`}),`
`,(0,O.jsx)(t.p,{children:`기본, 그림자, 배경형, 좌측 강조 스킨을 조합합니다.`}),`
`,(0,O.jsx)(h,{of:s,sourceState:`none`}),`
`,(0,O.jsx)(y,{examples:S.skins}),`
`,(0,O.jsx)(t.h2,{id:`그룹`,children:`그룹`}),`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(t.code,{children:`stat_group-2`}),`부터 `,(0,O.jsx)(t.code,{children:`stat_group-4`}),`, `,(0,O.jsx)(t.code,{children:`stat_group-divider`}),`까지 반응형 지표 묶음을 제공합니다.`]}),`
`,(0,O.jsx)(h,{of:o,sourceState:`none`}),`
`,(0,O.jsx)(y,{examples:S.group}),`
`,(0,O.jsx)(b,{sections:x})]})}function D(e={}){let{wrapper:t}={...f(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;function k(){return(k=e((()=>{O=t(),p(),g(),_(),v(),T(),C(),d()})))()}k();export{D as default};