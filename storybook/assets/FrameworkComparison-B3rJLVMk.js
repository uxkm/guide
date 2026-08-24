import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-DSvVgjCn.js";import{c as i,u as a}from"./blocks-CkHyEh4O.js";import{n as o,t as s}from"./DocsTable-CTByTzpS.js";function c(e){let t={h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Framework Comparison`}),`
`,(0,u.jsx)(t.h1,{id:`framework-comparison`,children:`Framework Comparison`}),`
`,(0,u.jsx)(t.p,{children:`UXKM은 구현 문법은 프레임워크에 맞게 제공하되 컴포넌트 이름, 상태, 접근성 결과와 공통 스타일은 일관되게 유지합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`구현-역할`,children:`구현 역할`}),`
`,(0,u.jsx)(s,{columns:[`대상`,`구현 방식`,`주요 역할`],rows:[[`HTML`,`시맨틱 HTML + 공통 동작 JS`,`마크업 기준과 직접 사용`],[`Gulp`,`Nunjucks 템플릿`,`정적 사이트 조립과 재사용`],[`Vue`,`Vue 3 SFC`,`반응형 상태와 Vue API`],[`React`,`React 컴포넌트`,`props 기반 합성과 상태`],[`Nuxt`,`Vue 구현 재사용`,`NuxtLink, NuxtImage, 앱 레이아웃 통합`],[`Next.js`,`React 구현 재사용`,`Link, Image, App Router 통합`]]}),`
`,(0,u.jsx)(t.h2,{id:`공통으로-유지하는-것`,children:`공통으로 유지하는 것`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`사용자에게 보이는 이름과 동작`}),`
`,(0,u.jsx)(t.li,{children:`CSS 클래스와 의미 토큰`}),`
`,(0,u.jsx)(t.li,{children:`disabled, loading, error 등 상태 의미`}),`
`,(0,u.jsx)(t.li,{children:`키보드 조작과 ARIA 결과`}),`
`,(0,u.jsx)(t.li,{children:`Storybook의 Preview와 API 설명`}),`
`]}),`
`,(0,u.jsx)(t.p,{children:`Nuxt와 Next.js는 52개 공통 컴포넌트를 복제하지 않고 각각 Vue와 React 원본을 재사용합니다. 프레임워크별 상세 문법은 Vue·React 가이드북에서 확인합니다.`})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};