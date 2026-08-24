import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-DSvVgjCn.js";import{c as i,u as a}from"./blocks-CkHyEh4O.js";import{n as o,t as s}from"./IntroductionCards-DatdkIgS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`아키텍처`}),`
`,(0,u.jsx)(t.h1,{id:`아키텍처`,children:`아키텍처`}),`
`,(0,u.jsxs)(t.p,{children:[`UXKM은 프레임워크별 앱, 공통 스타일 패키지, 통합 Storybook을 하나의 `,(0,u.jsx)(t.code,{children:`pnpm`}),` 모노레포에서 관리합니다. 구현은 프레임워크에 맞게 분리하되 이름, 상태, 접근성, 시각 결과는 공유 규칙으로 맞춥니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`전체-구조`,children:`전체 구조`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-text`,children:`apps/
├── html/                 # 순수 HTML · JavaScript
├── gulp/                 # Nunjucks · Gulp
├── vue/                  # Vue 3 컴포넌트 원본
├── react/                # React 컴포넌트 원본
├── nuxt/                 # Vue 컴포넌트 + Nuxt 전용 통합
├── next/                 # React 컴포넌트 + Next.js 전용 통합
├── storybook/            # 통합 문서 · Preview · 프레임워크 코드 비교
└── guidebook/
    ├── vue/              # Vue와 Nuxt 문법 비교
    └── react/            # React와 Next.js 문법 비교

packages/
└── styles/               # 토큰 · 테마 · 공통 컴포넌트 SCSS의 단일 원본

scripts/                  # 스타일 빌드 · 구조 검증 · 결과물 수집
build/                    # 배포 전 정적 결과물 수집 위치
`})}),`
`,(0,u.jsx)(t.h2,{id:`의존-관계`,children:`의존 관계`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-text`,children:`                         packages/styles
                    (tokens · themes · SCSS)
                               │
           ┌───────────┬───────┼───────┬───────────┐
           ▼           ▼       ▼       ▼           ▼
         HTML        Gulp     Vue    React      Storybook
                              │        │
                              ▼        ▼
                            Nuxt     Next.js

각 구현 ── 프레임워크별 예제/API ──▶ 통합 Storybook
`})}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`HTML은 모든 구현의 시맨틱 마크업 기준입니다.`}),`
`,(0,u.jsx)(t.li,{children:`Gulp는 같은 마크업을 Nunjucks 템플릿으로 제공합니다.`}),`
`,(0,u.jsx)(t.li,{children:`Vue와 React는 각 생태계의 재사용 컴포넌트를 제공합니다.`}),`
`,(0,u.jsx)(t.li,{children:`Nuxt와 Next.js는 Vue·React 컴포넌트를 재사용하고 라우팅, 링크, 이미지 등 전용 기능만 확장합니다.`}),`
`,(0,u.jsx)(t.li,{children:`Storybook은 실제 Preview와 여섯 구현의 코드를 한 문서에서 비교합니다.`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`컴포넌트-소유권`,children:`컴포넌트 소유권`}),`
`,(0,u.jsx)(s,{columns:[{label:`관심사`},{label:`단일 원본`},{label:`동기화 대상`}],rows:[[`토큰·테마·시각 스타일`,`packages/styles`,`모든 앱과 Storybook의 생성 CSS`],[`기본 시맨틱 마크업`,`apps/html/src/components`,`Gulp, Vue, React 구현`],[`Nunjucks 템플릿`,`apps/gulp/src/components`,`Gulp 정적 결과`],[`Vue API와 동작`,`apps/vue/src/components`,`Nuxt 사용처`],[`React API와 동작`,`apps/react/src/components`,`Next.js 사용처`],[`문서·비교 예시`,`apps/storybook/src`,`Storybook 정적 문서`]],codeColumns:[1]}),`
`,(0,u.jsx)(t.h2,{id:`문서-구조`,children:`문서 구조`}),`
`,(0,u.jsx)(t.p,{children:`각 컴포넌트 문서는 다음 순서를 기본으로 합니다.`}),`
`,(0,u.jsxs)(t.ol,{children:[`
`,(0,u.jsx)(t.li,{children:`개요와 사용 시점`}),`
`,(0,u.jsx)(t.li,{children:`실제 Preview`}),`
`,(0,u.jsx)(t.li,{children:`HTML → Gulp/Nunjucks → Vue → React → Nuxt → Next.js 구현 코드`}),`
`,(0,u.jsx)(t.li,{children:`Props, Attributes, Events 등 API`}),`
`,(0,u.jsx)(t.li,{children:`상태와 접근성`}),`
`,(0,u.jsx)(t.li,{children:`디자인 토큰과 관련 컴포넌트`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`변경-흐름`,children:`변경 흐름`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-text`,children:`요구사항 정의
  → 공통 API·시맨틱 마크업 결정
  → HTML·Gulp·Vue·React 구현
  → Nuxt·Next.js 통합 확인
  → 공통 스타일/토큰 반영
  → Storybook 예제와 API 갱신
  → 구조 검사·타입 검사·정적 빌드
`})}),`
`,(0,u.jsx)(t.h2,{id:`동기화-원칙`,children:`동기화 원칙`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`프레임워크마다 같은 의미의 prop, attribute, 상태 클래스 이름을 사용합니다.`}),`
`,(0,u.jsx)(t.li,{children:`인터랙션 구현은 달라도 키보드, 포커스, ARIA 결과는 같아야 합니다.`}),`
`,(0,u.jsx)(t.li,{children:`공통 Vue·React 컴포넌트를 Nuxt·Next.js에 복제하지 않습니다.`}),`
`,(0,u.jsxs)(t.li,{children:[`생성 CSS를 직접 고치지 않고 `,(0,u.jsx)(t.code,{children:`packages/styles`}),`에서 수정합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`한 구현을 확장할 때 나머지 다섯 구현과 Storybook 문서를 같은 작업 범위에서 확인합니다.`}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};