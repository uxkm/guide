import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-DSvVgjCn.js";import{c as i,u as a}from"./blocks-CkHyEh4O.js";import{n as o,t as s}from"./DocsTable-CTByTzpS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Framework Support`}),`
`,(0,u.jsx)(t.h1,{id:`framework-support`,children:`Framework Support`}),`
`,(0,u.jsx)(t.p,{children:`프레임워크별 지원은 같은 코드를 복제하는 방식이 아니라 공통 원본을 재사용하는 구조입니다. 아래 표의 “공통”은 52개 컴포넌트 구현을, “전용”은 프레임워크 통합 컴포넌트를 의미합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`지원-범위`,children:`지원 범위`}),`
`,(0,u.jsx)(s,{label:`프레임워크 지원 범위`,columns:[`대상`,`공통 52개`,`전용 통합`,`문서 형태`],rows:[[`HTML`,`직접 구현`,`공통 DOM 동작`,`정적 컴포넌트 가이드`],[`Gulp / Nunjucks`,`직접 구현`,`Nunjucks 템플릿`,`정적 컴포넌트 가이드`],[`Vue 3 / Vite`,`직접 구현`,`—`,`Vue Preview와 API`],[`React / Vite`,`직접 구현`,`—`,`React Preview와 API`],[`Nuxt`,`Vue 구현 재사용`,`AppLayout, NuxtLinkButton, NuxtImage`,`Nuxt 정적 가이드`],[`Next.js`,`React 구현 재사용`,`AppLayout, NextLinkButton, NextImage`,`App Router 정적 가이드`],[`Storybook`,`React Preview 사용`,`6개 구현 코드 비교`,`통합 문서`]]}),`
`,(0,u.jsx)(t.h2,{id:`호환-원칙`,children:`호환 원칙`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`공통 CSS는 `,(0,u.jsx)(t.code,{children:`packages/styles`}),`의 단일 원본에서 생성합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`Nuxt와 Next.js는 각각 Vue와 React 컴포넌트를 재사용합니다.`}),`
`,(0,u.jsx)(t.li,{children:`프레임워크별 문법이 달라도 API 의미와 사용자 동작은 일치시킵니다.`}),`
`,(0,u.jsx)(t.li,{children:`라우팅과 이미지 최적화처럼 프레임워크가 소유해야 하는 기능만 전용 컴포넌트로 제공합니다.`}),`
`,(0,u.jsx)(t.li,{children:`변경 시 여섯 구현 코드와 Storybook 문서를 같은 작업 범위에서 확인합니다.`}),`
`]}),`
`,(0,u.jsx)(t.p,{children:`이 표는 저장소 구조 기준의 지원 범위입니다. 특정 컴포넌트의 사용법과 제한은 각 컴포넌트 문서를 참고합니다.`})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};