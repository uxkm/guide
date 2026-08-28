import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CbOw9eUO.js";import{c as i,u as a}from"./blocks-BToPoJhg.js";import{n as o,t as s}from"./DocsTable-CTByTzpS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Component Structure`}),`
`,(0,u.jsx)(t.h1,{id:`component-structure`,children:`Component Structure`}),`
`,(0,u.jsx)(t.p,{children:`UXKM 컴포넌트는 여섯 프레임워크에서 같은 이름, 의미, 상태와 시각 결과를 제공하도록 구성합니다. HTML 구현을 시맨틱 마크업 기준으로 삼고 공통 스타일은 한 곳에서 관리합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`소유-위치`,children:`소유 위치`}),`
`,(0,u.jsx)(s,{columns:[`영역`,`위치`],rows:[[`HTML 기준 구현`,`apps/html/src/components`],[`Nunjucks 구현`,`apps/gulp/src/components`],[`Vue 구현·테스트`,`apps/vue/src/components`],[`React 구현·테스트`,`apps/react/src/components`],[`Nuxt·Next 전용 통합`,`apps/nuxt, apps/next`],[`공통 스타일`,`packages/styles/components`],[`통합 문서와 예제`,`apps/storybook/src`]],codeColumns:[1]}),`
`,(0,u.jsx)(t.h2,{id:`기본-파일-구조`,children:`기본 파일 구조`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-text`,children:`Category/Component/
├── Component.jsx 또는 Component.vue
├── Component.test.jsx 또는 Component.spec.js
└── index.js
`})}),`
`,(0,u.jsx)(t.h2,{id:`추가-절차`,children:`추가 절차`}),`
`,(0,u.jsxs)(t.ol,{children:[`
`,(0,u.jsx)(t.li,{children:`공통 API와 시맨틱 마크업을 결정합니다.`}),`
`,(0,u.jsx)(t.li,{children:`HTML, Gulp, Vue, React 구현을 동기화합니다.`}),`
`,(0,u.jsx)(t.li,{children:`Nuxt와 Next.js에서 재사용 또는 전용 통합을 확인합니다.`}),`
`,(0,u.jsx)(t.li,{children:`공통 SCSS와 상태·접근성을 반영합니다.`}),`
`,(0,u.jsx)(t.li,{children:`Storybook Preview, 프레임워크 코드, API 문서를 추가합니다.`}),`
`,(0,u.jsx)(t.li,{children:`구조 검사, 테스트, 정적 빌드를 실행합니다.`}),`
`]}),`
`,(0,u.jsx)(t.p,{children:`생성된 CSS나 Nuxt·Next 앱에 공통 컴포넌트를 복제하지 않습니다.`})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};