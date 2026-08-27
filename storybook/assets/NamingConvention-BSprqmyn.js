import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BBfuIdny.js";import{c as i,u as a}from"./blocks-DbhChoan.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Naming Convention`}),`
`,(0,c.jsx)(t.h1,{id:`naming-convention`,children:`Naming Convention`}),`
`,(0,c.jsx)(t.p,{children:`이름은 프레임워크가 달라도 같은 개념을 빠르게 찾고 비교할 수 있도록 일관되게 작성합니다.`}),`
`,(0,c.jsx)(t.h2,{id:`파일과-컴포넌트`,children:`파일과 컴포넌트`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`컴포넌트와 디렉터리는 `,(0,c.jsx)(t.code,{children:`PascalCase`}),`를 사용합니다: `,(0,c.jsx)(t.code,{children:`DatePicker`}),`, `,(0,c.jsx)(t.code,{children:`BackTop`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`React 파일은 `,(0,c.jsx)(t.code,{children:`.jsx`}),`, Vue 파일은 `,(0,c.jsx)(t.code,{children:`.vue`}),`, Nunjucks 파일은 `,(0,c.jsx)(t.code,{children:`kebab-case.njk`}),`를 사용합니다.`]}),`
`,(0,c.jsxs)(t.li,{children:[`공개 진입점은 각 컴포넌트 디렉터리의 `,(0,c.jsx)(t.code,{children:`index.js`}),`로 제공합니다.`]}),`
`,(0,c.jsx)(t.li,{children:`테스트 파일은 구현 파일과 같은 디렉터리에 둡니다.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`prop은 역할을 설명하는 `,(0,c.jsx)(t.code,{children:`camelCase`}),` 이름을 사용합니다: `,(0,c.jsx)(t.code,{children:`ariaLabel`}),`, `,(0,c.jsx)(t.code,{children:`showInfo`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`boolean은 긍정형 상태를 기본으로 작성합니다: `,(0,c.jsx)(t.code,{children:`disabled`}),`, `,(0,c.jsx)(t.code,{children:`loading`}),`, `,(0,c.jsx)(t.code,{children:`block`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`이벤트는 React의 `,(0,c.jsx)(t.code,{children:`onChange`}),`, Vue의 `,(0,c.jsx)(t.code,{children:`change`}),`처럼 프레임워크 관례를 따르되 의미는 동일하게 유지합니다.`]}),`
`,(0,c.jsx)(t.li,{children:`축약어보다 검색 가능한 전체 단어를 우선합니다.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`css`,children:`CSS`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-text`,children:`.component
.component_element
.component_variant
.is-state
.color-semantic
.size-scale
`})}),`
`,(0,c.jsx)(t.p,{children:`시각적 결과가 아닌 의미를 이름에 담습니다. 기존 이름과 같은 의미의 별칭을 새로 추가하지 않습니다.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};