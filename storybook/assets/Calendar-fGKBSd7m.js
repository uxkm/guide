import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,f as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g}from"./Calendar.stories-WXYbF3K4.js";import{i as _,r as v}from"./react-CJGa1lBW.js";import{c as y,r as b,u as x}from"./blocks-SMgDWto2.js";import{i as S,n as C,r as w,t as T}from"./ComponentApiDocs-DtZNZjDp.js";import{c as E,l as D,n as O,t as k,u as A}from"./dataDisplayDocumentationApiSections-CHd0j5Jy.js";function j(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,..._(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(y,{of:p}),`
`,(0,N.jsx)(t.h1,{id:`calendar`,children:`Calendar`}),`
`,(0,N.jsx)(t.p,{children:`날짜를 월·주 단위 그리드, 세로 일정 목록, iOS 스타일 휠로 표시하는 캘린더 컴포넌트입니다.`}),`
`,(0,N.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,N.jsx)(t.code,{children:`@uxkm/vue/calendar`}),`, `,(0,N.jsx)(t.code,{children:`@uxkm/react/calendar`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,N.jsxs)(t.p,{children:[`WebSquare는 월·주·일 데이터를 DataList와 `,(0,N.jsx)(t.code,{children:`w2:generator`}),`로 렌더링하고 탐색·날짜 선택은 `,(0,N.jsx)(t.code,{children:`xf:trigger`}),`와 `,(0,N.jsx)(t.code,{children:`scwin`}),` 이벤트로 연결합니다.`]}),`
`,(0,N.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,N.jsx)(t.p,{children:`아래 코드는 Calendar의 실제 HTML·Gulp·Vue·React 원본 구현입니다. 헤더·요일·날짜 그리드, 월·주·휠·일정 변형과 선택 상태가 구성되는 방식을 확인할 수 있습니다.`}),`
`,(0,N.jsx)(w,{examples:E,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,N.jsxs)(t.p,{children:[`날짜 셀은 generator 안의 `,(0,N.jsx)(t.code,{children:`xf:trigger.calendar_day`}),`로 만들고 날짜 값, 비활성 여부, `,(0,N.jsx)(t.code,{children:`aria-selected`}),`, 범위·오늘 상태 클래스를 같은 DataList 행에 연결합니다. 이전·다음 탐색은 별도 Trigger로 구성하며 읽기 전용·비활성 상태에서는 선택 이벤트를 연결하지 않습니다.`]}),`
`,(0,N.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,N.jsx)(t.p,{children:`헤더·요일·날짜 그리드로 월간 뷰를 구성하고 날짜 상태를 표현합니다.`}),`
`,(0,N.jsx)(b,{of:u,sourceState:`none`}),`
`,(0,N.jsx)(w,{examples:D.basic,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`헤더-없음`,children:`헤더 없음`}),`
`,(0,N.jsx)(t.p,{children:`상위 UI에서 제목을 제공할 때 요일과 날짜 그리드만 표시합니다.`}),`
`,(0,N.jsx)(b,{of:r,sourceState:`none`}),`
`,(0,N.jsx)(w,{examples:D.noHeader,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`날짜만`,children:`날짜만`}),`
`,(0,N.jsx)(t.p,{children:`헤더와 요일 없이 날짜만 표시해 인라인 선택이나 좁은 공간에 사용합니다.`}),`
`,(0,N.jsx)(b,{of:m,sourceState:`none`}),`
`,(0,N.jsx)(w,{examples:D.minimal,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`주간`,children:`주간`}),`
`,(0,N.jsx)(t.p,{children:`한 주만 표시하고 이전·다음 주 탐색을 제공합니다.`}),`
`,(0,N.jsx)(b,{of:f,sourceState:`none`}),`
`,(0,N.jsx)(w,{examples:D.week,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`휠-ios-스타일`,children:`휠 (iOS 스타일)`}),`
`,(0,N.jsx)(t.p,{children:`년·월·일 열과 이전·다음 단계 버튼으로 휠 선택기를 구성합니다.`}),`
`,(0,N.jsx)(b,{of:l,sourceState:`none`}),`
`,(0,N.jsx)(w,{examples:D.wheel,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`범위-선택`,children:`범위 선택`}),`
`,(0,N.jsx)(t.p,{children:`시작일·선택 구간·종료일 상태로 기간 선택을 표현합니다.`}),`
`,(0,N.jsx)(b,{of:c,sourceState:`none`}),`
`,(0,N.jsx)(w,{examples:D.range,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`이벤트-마커`,children:`이벤트 마커`}),`
`,(0,N.jsx)(t.p,{children:`일정이 있는 날짜에 점 표시를 추가합니다.`}),`
`,(0,N.jsx)(b,{of:n,sourceState:`none`}),`
`,(0,N.jsx)(w,{examples:D.event,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`스킨`,children:`스킨`}),`
`,(0,N.jsx)(t.p,{children:`borderless·ghost·shadow로 외형을 조절합니다.`}),`
`,(0,N.jsx)(b,{of:i,sourceState:`none`}),`
`,(0,N.jsx)(w,{examples:D.skin,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`크기`,children:`크기`}),`
`,(0,N.jsx)(t.p,{children:`small·compact·large로 셀 크기와 패딩을 조절합니다.`}),`
`,(0,N.jsx)(b,{of:g,sourceState:`none`}),`
`,(0,N.jsx)(w,{examples:D.size,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`푸터`,children:`푸터`}),`
`,(0,N.jsx)(t.p,{children:`오늘 이동·초기화·확인 같은 하단 액션을 배치합니다.`}),`
`,(0,N.jsx)(b,{of:d,sourceState:`none`}),`
`,(0,N.jsx)(w,{examples:D.footer,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`이중-패널`,children:`이중 패널`}),`
`,(0,N.jsx)(t.p,{children:`두 달을 나란히 배치해 기간 선택·예약 UI를 구성합니다.`}),`
`,(0,N.jsx)(b,{of:s,sourceState:`none`}),`
`,(0,N.jsx)(w,{examples:D.dual,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`세로-일정`,children:`세로 일정`}),`
`,(0,N.jsx)(t.p,{children:`날짜별 시간·제목·설명을 세로 일정 목록으로 표시합니다.`}),`
`,(0,N.jsx)(b,{of:h,sourceState:`none`}),`
`,(0,N.jsx)(w,{examples:D.agenda,showFullCode:!0}),`
`,(0,N.jsx)(t.h2,{id:`상태`,children:`상태`}),`
`,(0,N.jsx)(t.p,{children:`읽기 전용과 전체 비활성 상태를 제공합니다.`}),`
`,(0,N.jsx)(b,{of:a,sourceState:`none`}),`
`,(0,N.jsx)(w,{examples:D.state,showFullCode:!0}),`
`,(0,N.jsx)(T,{sections:k})]})}function M(e={}){let{wrapper:t}={..._(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;function P(){return(P=e((()=>{N=t(),v(),x(),S(),C(),A(),O(),o()})))()}P();export{M as default};