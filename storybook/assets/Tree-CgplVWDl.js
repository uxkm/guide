import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./Tree.stories-BrC-mKcJ.js";import{i as p,r as m}from"./react-BBfuIdny.js";import{c as h,r as g,u as _}from"./blocks-DbhChoan.js";import{i as v,n as y,r as b,t as x}from"./ComponentApiDocs-arf-yre-.js";import{b as S,n as C,s as w,u as T,y as E}from"./dataDisplayDocumentationApiSections-CHd0j5Jy.js";function D(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...p(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(h,{of:f}),`
`,(0,k.jsx)(t.h1,{id:`tree`,children:`Tree`}),`
`,(0,k.jsxs)(t.p,{children:[`파일·조직·메뉴처럼 계층이 있는 데이터를 탐색하고 선택합니다. `,(0,k.jsx)(t.code,{children:`TreeNode`}),`는 확장·선택·비활성·메타 상태를 제공합니다.`]}),`
`,(0,k.jsxs)(t.p,{children:[`Vue와 React 구현은 각각 `,(0,k.jsx)(t.code,{children:`@uxkm/vue/tree`}),`, `,(0,k.jsx)(t.code,{children:`@uxkm/react/tree`}),`로 제공하며 Nuxt와 Next.js에서도 같은 구현을 재사용합니다.`]}),`
`,(0,k.jsxs)(t.p,{children:[`WebSquare는 `,(0,k.jsx)(t.code,{children:`tree`}),`·`,(0,k.jsx)(t.code,{children:`treeitem`}),`·`,(0,k.jsx)(t.code,{children:`group`}),` 역할을 갖는 중첩 `,(0,k.jsx)(t.code,{children:`w2:group`}),`과 확장 Trigger, 선택 Checkbox를 계층 데이터에 연결합니다.`]}),`
`,(0,k.jsx)(t.h2,{id:`컴포넌트-구현-코드`,children:`컴포넌트 구현 코드`}),`
`,(0,k.jsx)(t.p,{children:`아래 코드는 Tree와 TreeNode의 실제 HTML·Gulp·Vue·React 원본 구현입니다. 계층 구조, 확장·선택·비활성 상태, 토글·체크박스·메타 영역의 구성을 확인할 수 있습니다.`}),`
`,(0,k.jsx)(b,{examples:E,showFullCode:!0}),`
`,(0,k.jsx)(t.h2,{id:`websquare-사용`,children:`WebSquare 사용`}),`
`,(0,k.jsxs)(t.p,{children:[`루트에는 `,(0,k.jsx)(t.code,{children:`role="tree"`}),`, 노드에는 `,(0,k.jsx)(t.code,{children:`role="treeitem"`}),`, 자식 컨테이너에는 `,(0,k.jsx)(t.code,{children:`role="group"`}),`을 지정합니다. 노드 데이터의 expanded·selected·disabled 값을 `,(0,k.jsx)(t.code,{children:`aria-expanded`}),`·`,(0,k.jsx)(t.code,{children:`aria-selected`}),`와 상태 클래스에 함께 연결하고, 토글 Trigger의 레이블도 펼침 상태에 맞춰 갱신합니다.`]}),`
`,(0,k.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,k.jsx)(g,{of:d,sourceState:`none`}),`
`,(0,k.jsx)(b,{examples:S.basic}),`
`,(0,k.jsx)(t.h2,{id:`간단`,children:`간단`}),`
`,(0,k.jsx)(t.p,{children:`아이콘 없이 텍스트만 표시합니다.`}),`
`,(0,k.jsx)(g,{of:o,sourceState:`none`}),`
`,(0,k.jsx)(b,{examples:S.simple}),`
`,(0,k.jsx)(t.h2,{id:`연결선`,children:`연결선`}),`
`,(0,k.jsx)(t.p,{children:`조직도·파일 탐색기에서 노드 간 계층 가이드라인을 표시합니다.`}),`
`,(0,k.jsx)(g,{of:n,sourceState:`none`}),`
`,(0,k.jsx)(b,{examples:S.lines}),`
`,(0,k.jsx)(t.h2,{id:`컴팩트`,children:`컴팩트`}),`
`,(0,k.jsx)(t.p,{children:`행 높이와 간격을 줄여 밀도 높은 목록을 표시합니다.`}),`
`,(0,k.jsx)(g,{of:l,sourceState:`none`}),`
`,(0,k.jsx)(b,{examples:S.compact}),`
`,(0,k.jsx)(t.h2,{id:`-토글`,children:`+/− 토글`}),`
`,(0,k.jsx)(t.p,{children:`화살표 대신 +/− 아이콘으로 노드를 펼치고 접습니다.`}),`
`,(0,k.jsx)(g,{of:u,sourceState:`none`}),`
`,(0,k.jsx)(b,{examples:S.plusToggle}),`
`,(0,k.jsx)(t.h2,{id:`체크박스`,children:`체크박스`}),`
`,(0,k.jsx)(t.p,{children:`부모·자식 노드에 체크박스를 배치해 다중 선택 트리를 구성합니다.`}),`
`,(0,k.jsx)(g,{of:s,sourceState:`none`}),`
`,(0,k.jsx)(b,{examples:S.checkbox}),`
`,(0,k.jsx)(t.h2,{id:`메타--배지`,children:`메타 · 배지`}),`
`,(0,k.jsx)(t.p,{children:`파일 크기·항목 수·상태 같은 보조 정보를 표시합니다.`}),`
`,(0,k.jsx)(g,{of:c,sourceState:`none`}),`
`,(0,k.jsx)(b,{examples:S.meta}),`
`,(0,k.jsx)(t.h2,{id:`비활성`,children:`비활성`}),`
`,(0,k.jsx)(t.p,{children:`선택하거나 확장할 수 없는 노드를 표현합니다.`}),`
`,(0,k.jsx)(g,{of:a,sourceState:`none`}),`
`,(0,k.jsx)(b,{examples:S.disabled}),`
`,(0,k.jsx)(t.h2,{id:`선택-가능`,children:`선택 가능`}),`
`,(0,k.jsx)(t.p,{children:`행 전체를 클릭 가능하게 만들고 현재 선택 항목을 강조합니다.`}),`
`,(0,k.jsx)(g,{of:r,sourceState:`none`}),`
`,(0,k.jsx)(b,{examples:S.selectable}),`
`,(0,k.jsx)(x,{sections:w})]})}function O(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;function A(){return(A=e((()=>{k=t(),m(),_(),v(),y(),T(),C(),i()})))()}A();export{O as default};