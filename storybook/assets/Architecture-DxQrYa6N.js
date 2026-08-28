import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CbOw9eUO.js";import{c as i,u as a}from"./blocks-BToPoJhg.js";import{n as o,t as s}from"./IntroductionCards-DatdkIgS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`아키텍처`}),`
`,(0,u.jsx)(t.h1,{id:`아키텍처`,children:`아키텍처`}),`
`,(0,u.jsxs)(t.p,{children:[`UXKM은 여섯 프레임워크 앱, 두 문서 앱, 세 공통 패키지를 하나의 `,(0,u.jsx)(t.code,{children:`pnpm`}),` 모노레포에서 관리합니다. HTML·Gulp·Vue·React는 공통 컴포넌트의 구현 원본이고, Nuxt·Next.js는 각각 Vue·React 구현을 재사용합니다. WebSquare는 독립 앱이 아니라 Storybook에서 생성되는 XML 코드 예제입니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`전체-구조`,children:`전체 구조`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-text`,children:`apps/
├── html/                 # 52개 순수 HTML 컴포넌트와 개발 앱
├── gulp/                 # 52개 Nunjucks 컴포넌트와 Gulp 개발 앱
├── vue/                  # 52개 Vue 3 컴포넌트와 @uxkm/vue exports
├── react/                # 52개 React 컴포넌트와 @uxkm/react exports
├── nuxt/                 # @uxkm/vue를 사용하는 Nuxt 통합 앱
├── next/                 # @uxkm/react를 사용하는 Next.js 통합 앱
├── storybook/            # React Preview · API · 6개 구현과 WebSquare XML 예제
└── guidebook/            # Markdown 원문을 정적 HTML로 생성하는 가이드북

packages/
├── assets/               # 이미지와 favicon 원본
├── interactions/         # ripple · clickable card · slide region DOM 동작
└── styles/               # 토큰 · 테마 · 공통 컴포넌트 SCSS 원본

scripts/                  # 공통 빌드 · 검증 · 문서 수집 · 배포 스크립트
build/                    # Guidebook과 Storybook을 합친 문서 배포 결과
`})}),`
`,(0,u.jsxs)(t.p,{children:[`워크스페이스 범위는 `,(0,u.jsx)(t.code,{children:`apps/*`}),`와 `,(0,u.jsx)(t.code,{children:`packages/*`}),`입니다. 여섯 프레임워크 앱은 구현 확인용 개발 서버이며, 루트 정적 배포 결과에는 Guidebook과 Storybook만 포함됩니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`구현-의존-관계`,children:`구현 의존 관계`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-text`,children:`                         packages/styles
                         packages/assets
                    packages/interactions
                                │
              ┌────────┬────────┼────────┬────────┐
              ▼        ▼        ▼        ▼        ▼
            HTML      Gulp      Vue     React   Storybook
                                │        │
                                ▼        ▼
                              Nuxt     Next.js

HTML 코드 예제 ── XML 정규화 ──▶ WebSquare XML fragment 탭
React 컴포넌트 ── 실제 렌더링 ──▶ Storybook Preview
`})}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`packages/styles`}),`의 SCSS는 빌드 후 여섯 프레임워크 앱과 Storybook의 `,(0,u.jsx)(t.code,{children:`public/styles/uxkm.css`}),`로 배포됩니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`packages/assets`}),`의 이미지는 같은 일곱 대상에 복사되고, Guidebook은 해당 공통 자산 디렉터리를 직접 사용합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`@uxkm/interactions`}),`는 프레임워크에 종속되지 않은 DOM 동작을 HTML·Gulp·Vue·React·Storybook에서 재사용합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[`Nuxt와 Next.js는 52개 컴포넌트를 복제하지 않고 `,(0,u.jsx)(t.code,{children:`@uxkm/vue`}),`, `,(0,u.jsx)(t.code,{children:`@uxkm/react`}),`를 의존성으로 사용합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`Storybook Preview는 React 구현을 직접 렌더링하고, 코드 영역은 프레임워크별 소스를 비교합니다.`}),`
`,(0,u.jsx)(t.li,{children:`WebSquare 탭은 HTML 코드를 기존 화면 XML 루트 안에 배치할 XML 호환 XHTML fragment로 정규화합니다. WebSquare 런타임이나 별도 워크스페이스 앱에는 의존하지 않습니다.`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`websquare-문서-경계`,children:`WebSquare 문서 경계`}),`
`,(0,u.jsx)(t.p,{children:`WebSquare 코드 예제에서 컴포넌트 fragment와 화면 XML 문서는 서로 다른 범위입니다.`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`화면 XML 최상위 루트는 필요한 XHTML, WebSquare, XML Events, XForms 네임스페이스를 한 번 소유합니다.`}),`
`,(0,u.jsx)(t.li,{children:`같은 문서 안의 모든 컴포넌트 fragment는 루트의 네임스페이스를 상속하므로 선언을 반복하지 않습니다.`}),`
`,(0,u.jsxs)(t.li,{children:[`별도 화면 XML과 WFrame의 `,(0,u.jsx)(t.code,{children:`src`}),` 대상은 독립 문서이므로 각 파일 루트에서 네임스페이스를 다시 선언합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[`Container, Grid, Flex 같은 구조 컴포넌트는 별도 XML 호출 단위가 아니라 현재 화면의 `,(0,u.jsx)(t.code,{children:`w2:group`}),`과 공통 CSS 클래스 조합입니다.`]}),`
`,(0,u.jsx)(t.li,{children:`WFrame은 임의 자식을 받는 UI 래퍼가 아니라 완성된 별도 WebSquare 화면 XML을 포함할 때 사용합니다.`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`컴포넌트-소유권`,children:`컴포넌트 소유권`}),`
`,(0,u.jsx)(s,{columns:[{label:`관심사`},{label:`단일 원본`},{label:`동기화 대상`}],rows:[[`토큰·테마·시각 스타일`,`packages/styles`,`여섯 프레임워크 앱과 Storybook의 생성 CSS`],[`이미지·favicon`,`packages/assets`,`모든 문서와 프레임워크 앱`],[`공통 DOM 동작`,`packages/interactions`,`HTML, Gulp, Vue, React, Storybook`],[`기본 시맨틱 마크업`,`apps/html/src/components`,`Gulp, Vue, React 구현`],[`Nunjucks 템플릿`,`apps/gulp/src/components`,`Gulp 정적 결과`],[`Vue API와 동작`,`apps/vue/src/components`,`Nuxt 사용처`],[`React API와 동작`,`apps/react/src/components`,`Next.js와 Storybook Preview`],[`Story·API·코드 비교`,`apps/storybook/src`,`Storybook 정적 문서`],[`WebSquare XML 변환`,`apps/storybook/src/shared/webSquareExample.ts`,`각 컴포넌트의 WebSquare 코드 탭`],[`가이드북 원문`,`apps/guidebook/content`,`생성된 Guidebook 정적 페이지`]],codeColumns:[1]}),`
`,(0,u.jsx)(t.h2,{id:`문서-빌드와-배포`,children:`문서 빌드와 배포`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-text`,children:`apps/guidebook/content
  → generate-pages.mjs
  → apps/guidebook/dist
                           ┐
                           ├─ collect-docs.mjs ─▶ build/
apps/storybook/src         │                      └─ storybook/
  → storybook build        │
  → storybook-static       ┘
`})}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`pnpm build:guidebook`}),`은 Markdown 원문으로 정적 Guidebook을 생성합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`pnpm build:storybook`}),`은 공통 스타일·자산을 갱신한 뒤 Storybook 정적 파일을 생성합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`pnpm build`}),`은 Guidebook 결과를 `,(0,u.jsx)(t.code,{children:`build/`}),` 루트에 놓고 Storybook 결과를 `,(0,u.jsx)(t.code,{children:`build/storybook/`}),`에 수집합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`HTML·Gulp·Vue·React·Nuxt·Next.js 앱은 이 문서 배포 빌드에 포함되지 않습니다.`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`컴포넌트-문서-구조`,children:`컴포넌트 문서 구조`}),`
`,(0,u.jsx)(t.p,{children:`각 컴포넌트 문서는 다음 순서를 기본으로 합니다.`}),`
`,(0,u.jsxs)(t.ol,{children:[`
`,(0,u.jsx)(t.li,{children:`개요와 사용 시점`}),`
`,(0,u.jsx)(t.li,{children:`실제 React Preview`}),`
`,(0,u.jsx)(t.li,{children:`HTML → Gulp/Nunjucks → Vue → Nuxt → React → Next.js 구현 코드와 WebSquare 화면 XML 예제`}),`
`,(0,u.jsx)(t.li,{children:`Props, Attributes, Events 등 API`}),`
`,(0,u.jsx)(t.li,{children:`상태와 접근성`}),`
`,(0,u.jsx)(t.li,{children:`디자인 토큰과 관련 컴포넌트`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`변경-흐름`,children:`변경 흐름`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-text`,children:`요구사항 정의
  → 공통 API·시맨틱 마크업 결정
  → HTML·Gulp·Vue·React 구현
  → Nuxt·Next.js 통합 확인
  → 공통 스타일·자산·DOM 동작 반영
  → Storybook Preview·API·코드 예제 갱신
  → WebSquare XML 변환 결과 확인
  → 필요한 경우 Guidebook 원문 갱신
  → 구조 검사·타입 검사·정적 빌드
`})}),`
`,(0,u.jsx)(t.h2,{id:`동기화-원칙`,children:`동기화 원칙`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`프레임워크마다 같은 의미의 prop, attribute, 상태 클래스 이름을 사용합니다.`}),`
`,(0,u.jsx)(t.li,{children:`인터랙션 구현은 달라도 키보드, 포커스, ARIA 결과는 같아야 합니다.`}),`
`,(0,u.jsx)(t.li,{children:`공통 Vue·React 컴포넌트를 Nuxt·Next.js에 복제하지 않습니다.`}),`
`,(0,u.jsxs)(t.li,{children:[`생성된 CSS와 Guidebook HTML을 직접 고치지 않고 각각 `,(0,u.jsx)(t.code,{children:`packages/styles`}),`, `,(0,u.jsx)(t.code,{children:`apps/guidebook/content`}),`의 원본을 수정합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[`WebSquare 자동 변환이 실제 데이터 바인딩이나 이벤트 계약을 표현하지 못하면 `,(0,u.jsx)(t.code,{children:`id: 'websquare'`}),` 전용 예제를 선언합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`한 구현을 확장할 때 공통 자산, 관련 프레임워크, WebSquare 코드 예제와 문서를 같은 작업 범위에서 확인합니다.`}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};