import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-DPG3xyh1.js";import{c as i,u as a}from"./blocks-BXsfpknd.js";import{n as o,t as s}from"./IntroductionCards-DatdkIgS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`아키텍처`}),`
`,(0,u.jsx)(t.h1,{id:`아키텍처`,children:`아키텍처`}),`
`,(0,u.jsxs)(t.p,{children:[`UXKM은 일곱 프레임워크 앱, 두 문서 앱, 세 공통 패키지를 하나의 `,(0,u.jsx)(t.code,{children:`pnpm`}),` 모노레포에서 관리합니다. HTML·Gulp·Vue·React·WebSquare는 공통 컴포넌트의 구현 원본이고, Nuxt·Next.js는 각각 Vue·React 구현을 재사용합니다. WebSquare 앱은 엔진을 포함하지 않는 XML 원본과 검증·동기화 도구입니다. 프레임워크 선택 기준은 `,(0,u.jsx)(t.strong,{children:`소개`}),`, 설치·사용법은 `,(0,u.jsx)(t.strong,{children:`설치 및 사용`}),`을 참고합니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`전체-구조`,children:`전체 구조`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-text`,children:`apps/
├── html/                 # 52개 순수 HTML 컴포넌트와 개발 앱
├── gulp/                 # 52개 Nunjucks 컴포넌트와 Gulp 개발 앱
├── vue/                  # 52개 Vue 3 컴포넌트와 @uxkm/vue exports
├── react/                # 52개 React 컴포넌트와 @uxkm/react exports
├── nuxt/                 # @uxkm/vue를 사용하는 Nuxt 통합 앱
├── next/                 # @uxkm/react를 사용하는 Next.js 통합 앱
├── websquare/            # 52개 WebSquare XML 원본과 프로젝트 동기화 도구
├── storybook/            # React Preview · API · 7개 구현 코드 예제
└── guidebook/            # Markdown 원문을 정적 HTML로 생성하는 가이드북

packages/
├── assets/               # 이미지와 favicon 원본
├── interactions/         # ripple · clickable card · slide region DOM 동작
└── styles/               # 토큰 · 테마 · 공통 컴포넌트 SCSS 원본

scripts/                  # 공통 빌드 · 검증 · 문서 수집 · 배포 스크립트
build/                    # Guidebook과 Storybook을 합친 문서 배포 결과
`})}),`
`,(0,u.jsxs)(t.p,{children:[`워크스페이스 범위는 `,(0,u.jsx)(t.code,{children:`apps/*`}),`와 `,(0,u.jsx)(t.code,{children:`packages/*`}),`입니다. 여섯 브라우저 앱은 구현 확인용 개발 서버이고 WebSquare는 엔진 비포함 소스 앱이며, 루트 정적 배포 결과에는 Guidebook과 Storybook만 포함됩니다.`]}),`
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

apps/websquare XML ── raw import ──▶ WebSquare XML fragment 탭
React 컴포넌트 ── 실제 렌더링 ──▶ Storybook Preview
`})}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`packages/styles`}),`의 SCSS는 빌드 후 여섯 브라우저 앱과 Storybook의 `,(0,u.jsx)(t.code,{children:`public/styles/uxkm.css`}),`, WebSquare의 `,(0,u.jsx)(t.code,{children:`WebContent/cm/css/uxkm.css`}),`로 배포됩니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`packages/assets`}),`의 이미지는 브라우저 앱과 Storybook의 `,(0,u.jsx)(t.code,{children:`public/images`}),`, WebSquare의 `,(0,u.jsx)(t.code,{children:`WebContent/images`}),`에 복사되고, Guidebook은 해당 공통 자산 디렉터리를 직접 사용합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`@uxkm/interactions`}),`는 프레임워크에 종속되지 않은 DOM 동작을 HTML·Gulp·Vue·React·Storybook에서 재사용합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[`Nuxt와 Next.js는 52개 컴포넌트를 복제하지 않고 `,(0,u.jsx)(t.code,{children:`@uxkm/vue`}),`, `,(0,u.jsx)(t.code,{children:`@uxkm/react`}),`를 의존성으로 사용합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`Storybook Preview는 React 구현을 직접 렌더링하고, 코드 영역은 프레임워크별 소스를 비교합니다.`}),`
`,(0,u.jsxs)(t.li,{children:[`WebSquare 컴포넌트 탭은 `,(0,u.jsx)(t.code,{children:`apps/websquare/src/components`}),`의 XML 원본을 직접 읽습니다. 상태별 전용 예제가 없는 이전 코드에만 HTML의 XML 호환 변환을 fallback으로 사용합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`WebSquare Engine·Studio·라이선스는 저장소에 포함하지 않으며, 실제 실행은 동기화 대상 프로젝트에서 수행합니다.`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`websquare-문서-경계`,children:`WebSquare 문서 경계`}),`
`,(0,u.jsxs)(t.p,{children:[`WebSquare 코드 예제에서 컴포넌트 fragment와 화면 XML 문서는 서로 다른 범위입니다. 화면에 붙이는 절차·예제 코드는 `,(0,u.jsx)(t.strong,{children:`설치 및 사용 › WebSquare`}),`를 참고합니다.`]}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`화면 XML 최상위 루트는 필요한 XHTML, WebSquare, XML Events, XForms 네임스페이스를 한 번 소유합니다.`}),`
`,(0,u.jsx)(t.li,{children:`같은 문서 안의 모든 컴포넌트 fragment는 루트의 네임스페이스를 상속하므로 선언을 반복하지 않습니다.`}),`
`,(0,u.jsxs)(t.li,{children:[`별도 화면 XML과 WFrame의 `,(0,u.jsx)(t.code,{children:`src`}),` 대상은 독립 문서이므로 각 파일 루트에서 네임스페이스를 다시 선언합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[`Container, Grid, Flex 같은 구조 컴포넌트는 별도 XML 호출 단위가 아니라 현재 화면의 `,(0,u.jsx)(t.code,{children:`w2:group`}),`과 공통 CSS 클래스 조합입니다.`]}),`
`,(0,u.jsx)(t.li,{children:`WFrame은 임의 자식을 받는 UI 래퍼가 아니라 완성된 별도 WebSquare 화면 XML을 포함할 때 사용합니다.`}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`컴포넌트-소유권과-소스-위치`,children:`컴포넌트 소유권과 소스 위치`}),`
`,(0,u.jsxs)(t.p,{children:[`관심사별 단일 원본과 프레임워크별 경로는 아래를 따릅니다. 파일·API 네이밍 규칙은 `,(0,u.jsx)(t.strong,{children:`가이드라인 › Naming Convention`}),`을 참고합니다.`]}),`
`,(0,u.jsx)(s,{columns:[{label:`관심사`},{label:`단일 원본`},{label:`동기화 대상`}],rows:[[`토큰·테마·시각 스타일`,`packages/styles`,`브라우저 앱·Storybook·WebSquare의 생성 CSS`],[`이미지·favicon`,`packages/assets`,`모든 문서와 프레임워크 앱`],[`공통 DOM 동작`,`packages/interactions`,`HTML, Gulp, Vue, React, Storybook`],[`기본 시맨틱 마크업`,`apps/html/src/components`,`Gulp, Vue, React 구현`],[`Nunjucks 템플릿`,`apps/gulp/src/components`,`Gulp 정적 결과`],[`Vue API와 동작`,`apps/vue/src/components`,`Nuxt 사용처`],[`React API와 동작`,`apps/react/src/components`,`Next.js와 Storybook Preview`],[`Story·API·코드 비교`,`apps/storybook/src`,`Storybook 정적 문서`],[`WebSquare XML fragment`,`apps/websquare/src/components`,`Storybook 코드 탭과 로컬 WebSquare 프로젝트`],[`WebSquare 원본 선택·fallback`,`apps/storybook/src/shared/webSquareExample.ts`,`각 컴포넌트의 WebSquare 코드 탭`],[`가이드북 원문`,`apps/guidebook/content`,`생성된 Guidebook 정적 페이지`]],codeColumns:[1]}),`
`,(0,u.jsx)(s,{columns:[{label:`프레임워크`},{label:`소개 문서`},{label:`컴포넌트`},{label:`빌드 결과 기준`}],rows:[[`HTML`,`apps/html/src/introduction`,`apps/html/src/components`,`apps/html/dist`],[`Gulp / Nunjucks`,`apps/gulp/src/introduction`,`apps/gulp/src/components`,`apps/gulp/dist`],[`Vue`,`apps/vue/src/introduction`,`apps/vue/src/components`,`apps/vue/dist`],[`React`,`apps/react/src/introduction`,`apps/react/src/components`,`apps/react/dist`],[`Nuxt`,`apps/nuxt/app/introduction`,`Vue 공통 + Nuxt 전용`,`apps/nuxt/.output/public`],[`Next.js`,`apps/next/src/introduction`,`React 공통 + Next 전용`,`apps/next/out`],[`WebSquare`,`Storybook 소개와 컴포넌트 코드 탭`,`XML 호환 XHTML 예제`,`WebSquare 프로젝트에서 별도 실행`]],codeColumns:[1,3]}),`
`,(0,u.jsxs)(t.p,{children:[`기본 디렉터리 골격은 `,(0,u.jsx)(t.code,{children:`Category/Component/`}),` 아래 구현 파일·테스트·`,(0,u.jsx)(t.code,{children:`index.js`}),`입니다.`]}),`
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
`,(0,u.jsx)(t.p,{children:`새 컴포넌트나 공통 변경은 아래 순서를 따릅니다.`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-text`,children:`요구사항 정의
  → 공통 API·시맨틱 마크업 결정
  → HTML·Gulp·Vue·React 구현
  → Nuxt·Next.js 통합 확인
  → 공통 스타일·자산·DOM 동작 반영
  → Storybook Preview·API·코드 예제 갱신
  → apps/websquare XML 및 실제 Engine 결과 확인
  → 필요한 경우 Guidebook 원문 갱신
  → 구조 검사·타입 검사·정적 빌드
`})}),`
`,(0,u.jsxs)(t.ol,{children:[`
`,(0,u.jsx)(t.li,{children:`HTML 마크업과 접근성 의미를 먼저 정의합니다.`}),`
`,(0,u.jsx)(t.li,{children:`Gulp/Nunjucks, Vue, React 구현의 API와 상태 이름을 맞춥니다.`}),`
`,(0,u.jsx)(t.li,{children:`Nuxt와 Next.js에서 프레임워크 전용 처리가 필요한지 확인합니다.`}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`packages/styles/components`}),`의 공통 스타일을 갱신합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`apps/websquare/src/components`}),`의 WebSquare XML과 실제 Engine 결과를 확인합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`Storybook 문서에 일곱 구현 예시와 API를 추가합니다.`}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.code,{children:`pnpm validate:structure`}),`, 타입 검사, Storybook 빌드로 검증합니다.`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`동기화-원칙`,children:`동기화 원칙`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`프레임워크마다 같은 의미의 prop, attribute, 상태 클래스 이름을 사용합니다.`}),`
`,(0,u.jsx)(t.li,{children:`인터랙션 구현은 달라도 키보드, 포커스, ARIA 결과는 같아야 합니다.`}),`
`,(0,u.jsx)(t.li,{children:`공통 Vue·React 컴포넌트를 Nuxt·Next.js에 복제하지 않습니다.`}),`
`,(0,u.jsxs)(t.li,{children:[`생성된 CSS와 Guidebook HTML을 직접 고치지 않고 각각 `,(0,u.jsx)(t.code,{children:`packages/styles`}),`, `,(0,u.jsx)(t.code,{children:`apps/guidebook/content`}),`의 원본을 수정합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[`WebSquare 공통 원본은 `,(0,u.jsx)(t.code,{children:`apps/websquare/src/components`}),`에서 수정하고, 상태별 데이터 바인딩이나 이벤트 계약은 Story에 `,(0,u.jsx)(t.code,{children:`id: 'websquare'`}),` 전용 예제로 선언합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`한 구현을 확장할 때 공통 자산, 관련 프레임워크, WebSquare 코드 예제와 문서를 같은 작업 범위에서 확인합니다.`}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};