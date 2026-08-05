# UXKM Framework Components

HTML, Gulp/Nunjucks, Vue, React, Nuxt, Next.js에서 동일한 UXKM UI 컴포넌트를 제공하고 Storybook으로 통합 문서화하는 `pnpm` 기반 모노레포입니다.

`dev` 브랜치에서 애플리케이션, 공통 패키지, 문서 및 빌드 스크립트를 관리합니다. 각 프레임워크의 정적 결과물은 `build/frameworks`에 모아 검증한 뒤 배포 전용 `main` 브랜치에 반영합니다.

> 현재 문서는 모노레포 구축을 위한 기준 구조입니다. 디렉터리와 설정은 구축 단계에 따라 순차적으로 생성합니다.

## 전체 구조

```text
uxkm-framework-components/
├── apps/
│   ├── html/
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   │   ├── layout/
│   │   │   │   ├── basic/
│   │   │   │   ├── data-display/
│   │   │   │   ├── form/
│   │   │   │   ├── feedback/
│   │   │   │   ├── navigation/
│   │   │   │   └── miscellaneous/
│   │   │   └── scripts/
│   │   ├── public/
│   │   ├── dist/
│   │   └── package.json
│   │
│   ├── gulp/
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   ├── templates/
│   │   │   │   ├── layouts/
│   │   │   │   └── partials/
│   │   │   ├── components/
│   │   │   │   ├── layout/
│   │   │   │   ├── basic/
│   │   │   │   ├── data-display/
│   │   │   │   ├── form/
│   │   │   │   ├── feedback/
│   │   │   │   ├── navigation/
│   │   │   │   └── miscellaneous/
│   │   │   └── scripts/
│   │   ├── gulpfile.js
│   │   ├── dist/
│   │   └── package.json
│   │
│   ├── vue/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── layout/
│   │   │   │   ├── basic/
│   │   │   │   ├── data-display/
│   │   │   │   ├── form/
│   │   │   │   ├── feedback/
│   │   │   │   ├── navigation/
│   │   │   │   └── miscellaneous/
│   │   │   ├── views/
│   │   │   ├── router/
│   │   │   ├── composables/
│   │   │   └── main.js
│   │   ├── public/
│   │   ├── vite.config.js
│   │   ├── dist/
│   │   └── package.json
│   │
│   ├── react/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── layout/
│   │   │   │   ├── basic/
│   │   │   │   ├── data-display/
│   │   │   │   ├── form/
│   │   │   │   ├── feedback/
│   │   │   │   ├── navigation/
│   │   │   │   └── miscellaneous/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   ├── router/
│   │   │   └── main.jsx
│   │   ├── public/
│   │   ├── vite.config.js
│   │   ├── dist/
│   │   └── package.json
│   │
│   ├── nuxt/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── layout/
│   │   │   │   ├── basic/
│   │   │   │   ├── data-display/
│   │   │   │   ├── form/
│   │   │   │   ├── feedback/
│   │   │   │   ├── navigation/
│   │   │   │   └── miscellaneous/
│   │   │   ├── pages/
│   │   │   ├── composables/
│   │   │   ├── layouts/
│   │   │   └── app.vue
│   │   ├── public/
│   │   ├── nuxt.config.ts
│   │   ├── .output/
│   │   └── package.json
│   │
│   ├── next/
│   │   ├── app/
│   │   │   ├── layout.jsx
│   │   │   ├── not-found.jsx
│   │   │   └── [[...slug]]/
│   │   │       └── page.jsx
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── layout/
│   │   │   │   ├── basic/
│   │   │   │   ├── data-display/
│   │   │   │   ├── form/
│   │   │   │   ├── feedback/
│   │   │   │   ├── navigation/
│   │   │   │   └── miscellaneous/
│   │   │   ├── doc/
│   │   │   ├── hooks/
│   │   │   ├── layouts/
│   │   │   └── utils/
│   │   ├── public/
│   │   ├── next.config.mjs
│   │   ├── out/
│   │   └── package.json
│   │
│   └── storybook/
│       ├── .storybook/
│       │   ├── main.ts
│       │   ├── preview.ts
│       │   ├── manager.ts
│       │   └── preview-head.html
│       ├── src/
│       │   ├── docs/
│       │   │   ├── introduction/
│       │   │   │   ├── Overview.mdx
│       │   │   │   ├── GettingStarted.mdx
│       │   │   │   └── DesignTokens.mdx
│       │   │   └── components/
│       │   │       ├── layout/
│       │   │       ├── basic/
│       │   │       ├── data-display/
│       │   │       ├── form/
│       │   │       ├── feedback/
│       │   │       ├── navigation/
│       │   │       └── miscellaneous/
│       │   ├── shared/
│       │   │   ├── DemoSection.tsx
│       │   │   ├── FrameworkCodeTabs.tsx
│       │   │   ├── FrameworkPreview.tsx
│       │   │   ├── GuideCodeBlock.tsx
│       │   │   ├── ApiSection.tsx
│       │   │   ├── ApiTable.tsx
│       │   │   ├── DesignTokenTable.tsx
│       │   │   ├── AccessibilitySection.tsx
│       │   │   └── RelatedComponents.tsx
│       │   ├── data/
│       │   │   ├── navigation.ts
│       │   │   ├── doc-registry.ts
│       │   │   └── component-registry.ts
│       │   └── utils/
│       │       ├── source-loader.ts
│       │       ├── format-source-code.ts
│       │       └── normalize-framework-code.ts
│       ├── storybook-static/
│       └── package.json
│
├── packages/
│   ├── styles/
│   │   ├── src/
│   │   │   ├── main.scss
│   │   │   ├── _tokens.scss
│   │   │   ├── _themes.scss
│   │   │   ├── _utilities.scss
│   │   │   ├── _layout.scss
│   │   │   ├── _sidebar.scss
│   │   │   └── components/
│   │   │       ├── _index.scss
│   │   │       ├── _container.scss
│   │   │       ├── _grid.scss
│   │   │       ├── _flex.scss
│   │   │       ├── _button.scss
│   │   │       ├── _input.scss
│   │   │       ├── _modal.scss
│   │   │       └── _tabs.scss
│   │   ├── dist/
│   │   │   ├── uxkm.css
│   │   │   └── uxkm.min.css
│   │   └── package.json
│   │
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   │   ├── common/
│   │   │   ├── components/
│   │   │   └── demo/
│   │   ├── icons/
│   │   └── package.json
│   │
│   ├── tokens/
│   │   ├── src/
│   │   │   ├── colors.json
│   │   │   ├── spacing.json
│   │   │   ├── typography.json
│   │   │   ├── radius.json
│   │   │   └── shadows.json
│   │   └── package.json
│   │
│   ├── content/
│   │   ├── introduction/
│   │   │   ├── overview.json
│   │   │   ├── getting-started.json
│   │   │   └── design-tokens.json
│   │   ├── components/
│   │   └── package.json
│   │
│   ├── component-specs/
│   │   ├── layout/
│   │   ├── basic/
│   │   ├── data-display/
│   │   ├── form/
│   │   ├── feedback/
│   │   ├── navigation/
│   │   ├── miscellaneous/
│   │   └── package.json
│   │
│   └── navigation/
│       ├── src/
│       │   ├── introduction.ts
│       │   ├── components.ts
│       │   └── index.ts
│       └── package.json
│
├── scripts/
│   ├── build-styles.mjs
│   ├── copy-assets.mjs
│   ├── collect-frameworks.mjs
│   ├── validate-components.mjs
│   └── deploy-main.mjs
│
├── build/
│   └── frameworks/
│       ├── html/
│       ├── gulp/
│       ├── vue/
│       ├── react/
│       ├── nuxt/
│       ├── next/
│       └── storybook/
│
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── .gitignore
└── README.md
```

## 구조 설계 원칙

### 프레임워크별 독립 앱

`apps` 아래의 각 디렉터리는 독립적으로 개발하고 빌드할 수 있는 워크스페이스입니다. 모든 앱은 동일한 컴포넌트 분류와 공통 명세를 사용하지만 각 프레임워크의 권장 문법과 라우팅 방식을 따릅니다.

| 앱 | 구성 및 역할 | 빌드 결과 |
| --- | --- | --- |
| `apps/html` | 순수 HTML, CSS, JavaScript 기반 가이드 | `dist` |
| `apps/gulp` | Gulp와 Nunjucks 기반 정적 가이드 | `dist` |
| `apps/vue` | Vue와 Vite 기반 SPA | `dist` |
| `apps/react` | React와 Vite 기반 SPA | `dist` |
| `apps/nuxt` | Nuxt 기반 정적 가이드 | `.output` |
| `apps/next` | Next.js App Router 기반 정적 가이드 | `out` |
| `apps/storybook` | 컴포넌트 문서와 프레임워크별 예제 통합 | `storybook-static` |

`apps/gulp`는 Nunjucks를 기본 템플릿 엔진으로 사용합니다. Nunjucks 문법을 사용하되 페이지, 레이아웃, partial, 컴포넌트 파일 확장자는 `.njk`가 아닌 `.html`로 통일합니다.

### 공통 컴포넌트 분류

모든 프레임워크 구현체, Storybook 문서, 컴포넌트 명세는 동일한 분류 체계를 사용합니다.

| 분류 | 용도 |
| --- | --- |
| `layout` | Container, Grid, Flex 등 화면 구조 |
| `basic` | Button, Icon, Typography 등 기본 요소 |
| `data-display` | Table, Badge, Card 등 데이터 표시 |
| `form` | Input, Select, Checkbox 등 입력 요소 |
| `feedback` | Modal, Alert, Toast 등 상태와 피드백 |
| `navigation` | Tabs, Breadcrumb, Pagination 등 탐색 요소 |
| `miscellaneous` | 다른 분류에 속하지 않는 보조 컴포넌트 |

컴포넌트를 추가하거나 이동할 때는 모든 앱과 `packages/component-specs`, Storybook 문서에서 동일한 분류를 유지합니다.

## 앱별 상세 역할

### HTML과 Gulp

`apps/html`은 프레임워크에 의존하지 않는 기준 마크업과 기본 동작을 검증하는 앱입니다. `pages`는 가이드 페이지, `components`는 분류별 UI 구현체, `scripts`는 컴포넌트 동작을 관리합니다.

`apps/gulp`는 HTML 기준 구현을 Nunjucks 템플릿으로 확장합니다. 공통 화면 골격은 `templates/layouts`, 반복되는 조각은 `templates/partials`, UI 구현은 `components`에 둡니다. `gulpfile.js`가 템플릿 렌더링, 스타일 처리, 정적 자산 복사 및 `dist` 생성을 담당합니다.

### Vue와 React

Vue와 React 앱은 Vite를 공통 빌드 도구로 사용합니다. Vue는 `views`, `router`, `composables`로 구성하고 React는 `pages`, `router`, `hooks`로 구성합니다. 프레임워크별 재사용 로직은 각각 `composables`와 `hooks`에 두며 UI 컴포넌트와 분리합니다.

### Nuxt와 Next.js

Nuxt는 `app/pages`, `app/layouts`, `app/composables`와 자동 컴포넌트 등록 구조를 사용합니다. Next.js는 App Router를 사용하며 `[[...slug]]/page.jsx`에서 가이드 경로를 처리합니다. 두 앱은 정적 호스팅이 가능하도록 빌드하며 `/frameworks/nuxt/`, `/frameworks/next/` 하위 경로를 기준으로 자산과 라우팅을 설정합니다.

### Storybook

Storybook은 전체 컴포넌트 시스템의 문서 허브입니다.

- `docs/introduction`: 개요, 시작 방법, 디자인 토큰 문서
- `docs/components`: 공통 분류에 따른 컴포넌트 MDX 문서
- `shared`: 데모, 코드 탭, API 표, 접근성 및 연관 컴포넌트 UI
- `data`: 문서 탐색과 컴포넌트 등록 정보
- `utils`: 프레임워크 소스 로드, 포맷 및 코드 정규화
- `.storybook`: Storybook 빌드, 프리뷰, 매니저 및 `<head>` 설정

`FrameworkCodeTabs`와 `FrameworkPreview`는 하나의 문서 안에서 프레임워크별 구현 코드와 렌더링 결과를 비교할 수 있도록 구성합니다.

## 공통 패키지

| 패키지 | 역할 |
| --- | --- |
| `packages/styles` | 공통 SCSS, 레이아웃, 테마, 유틸리티, 컴포넌트 스타일 및 CSS 배포 파일 |
| `packages/assets` | 공용 폰트, 아이콘, 이미지 및 데모용 정적 자산 |
| `packages/tokens` | 색상, 간격, 타이포그래피, 모서리, 그림자 디자인 토큰의 원본 JSON |
| `packages/content` | 소개 문서와 컴포넌트 설명에 사용하는 프레임워크 독립 콘텐츠 |
| `packages/component-specs` | 컴포넌트 API, 상태, 동작, 마크업 및 접근성 기준 명세 |
| `packages/navigation` | 소개 및 컴포넌트 문서의 공통 탐색 구조와 노출 순서 |

공통 패키지는 특정 UI 프레임워크에 의존하지 않는 것을 원칙으로 합니다. 프레임워크별 변환이 필요하면 각 앱의 구현 계층에서 처리합니다.

## 컴포넌트 동기화 기준

`packages/component-specs`를 기준 명세로 사용하고 모든 프레임워크 구현체는 다음 항목을 공유합니다.

1. 컴포넌트 이름과 목적
2. Props 또는 HTML Attributes와 기본값
3. 상태와 사용자 인터랙션
4. 의미에 맞는 HTML 구조
5. 키보드 조작과 WAI-ARIA를 포함한 접근성 요구사항
6. 디자인 토큰과 공통 스타일
7. 문서 탐색 순서와 Storybook 사용 예제

프레임워크의 특성 때문에 API 또는 동작이 달라지는 경우 `component-specs`와 Storybook 문서에 차이점을 명시합니다.

## 루트 자동화 스크립트

| 스크립트 | 역할 |
| --- | --- |
| `scripts/build-styles.mjs` | 디자인 토큰과 SCSS를 빌드해 `uxkm.css`, `uxkm.min.css` 생성 |
| `scripts/copy-assets.mjs` | 공통 폰트, 이미지, 아이콘을 각 앱 또는 스테이징 경로로 복사 |
| `scripts/collect-frameworks.mjs` | 각 앱의 빌드 결과를 `build/frameworks/<framework>`에 수집 |
| `scripts/validate-components.mjs` | 프레임워크별 컴포넌트와 명세의 누락 또는 분류 불일치 검사 |
| `scripts/deploy-main.mjs` | 검증한 정적 결과물을 배포용 `main` 브랜치 구조로 반영 |

## pnpm Workspace

루트 `pnpm-workspace.yaml`에서 앱과 공통 패키지를 워크스페이스로 등록합니다.

```yaml
packages:
  - apps/*
  - packages/*
```

루트 `package.json`은 패키지 매니저 버전과 공통 명령을 관리하고, 각 앱과 패키지는 자체 `package.json`에서 필요한 의존성과 스크립트를 선언합니다. `pnpm-lock.yaml`은 전체 워크스페이스의 의존성 버전을 고정합니다.

예정된 기본 명령은 다음과 같습니다.

```bash
pnpm install
pnpm dev
pnpm build
pnpm test
pnpm lint
pnpm validate
pnpm storybook
pnpm deploy
```

실제 명령 이름과 필터 범위는 각 워크스페이스를 구성할 때 확정합니다.

## 빌드 흐름

```text
packages의 공통 소스 빌드
        ↓
apps의 프레임워크별 정적 빌드
        ↓
build/frameworks에 결과물 수집
        ↓
컴포넌트·링크·정적 자산 경로 검증
        ↓
main 브랜치에 배포 결과 반영
```

빌드 결과는 다음 경로에서 수집합니다.

| 원본 | 스테이징 경로 |
| --- | --- |
| `apps/html/dist` | `build/frameworks/html` |
| `apps/gulp/dist` | `build/frameworks/gulp` |
| `apps/vue/dist` | `build/frameworks/vue` |
| `apps/react/dist` | `build/frameworks/react` |
| `apps/nuxt/.output` | `build/frameworks/nuxt` |
| `apps/next/out` | `build/frameworks/next` |
| `apps/storybook/storybook-static` | `build/frameworks/storybook` |

## `main` 브랜치 배포 구조

`main` 브랜치는 소스 코드가 아닌 검증 완료된 정적 배포 파일을 관리합니다.

```text
main/
├── index.html
├── frameworks/
│   ├── index.html
│   ├── html/
│   │   ├── index.html
│   │   └── assets/
│   │       ├── css/
│   │       ├── js/
│   │       ├── images/
│   │       └── icons/
│   ├── gulp/
│   │   ├── index.html
│   │   └── assets/
│   │       ├── css/
│   │       ├── js/
│   │       ├── images/
│   │       └── icons/
│   ├── vue/
│   │   ├── index.html
│   │   └── assets/
│   │       ├── index-[hash].css
│   │       ├── index-[hash].js
│   │       └── images/
│   ├── react/
│   │   ├── index.html
│   │   └── assets/
│   │       ├── index-[hash].css
│   │       ├── index-[hash].js
│   │       └── images/
│   ├── nuxt/
│   │   ├── index.html
│   │   ├── _nuxt/
│   │   └── assets/
│   ├── next/
│   │   ├── index.html
│   │   ├── _next/
│   │   └── assets/
│   └── storybook/
│       ├── index.html
│       ├── iframe.html
│       └── assets/
├── .nojekyll
└── CNAME
```

모든 앱은 `/frameworks/<framework>/`를 배포 기준 경로로 사용합니다. `.nojekyll`은 GitHub Pages가 `_nuxt`, `_next`처럼 밑줄로 시작하는 디렉터리를 제외하지 않도록 하며, `CNAME`은 사용자 지정 도메인을 설정합니다.

## 컴포넌트 추가 절차

1. `packages/component-specs`의 해당 분류에 API, 상태, 동작 및 접근성 명세를 작성합니다.
2. 필요한 디자인 값과 리소스를 `tokens`, `styles`, `assets`에 추가합니다.
3. `packages/content`에 공통 설명을 작성하고 `packages/navigation`에 노출 순서를 등록합니다.
4. `apps/html`에서 의미 구조와 기본 동작을 먼저 검증합니다.
5. Gulp/Nunjucks, Vue, React, Nuxt, Next.js 구현체를 같은 분류에 추가합니다.
6. Storybook MDX 문서에 데모, API, 접근성, 토큰 및 프레임워크별 코드를 연결합니다.
7. 컴포넌트 일치 여부를 검사한 뒤 전체 앱을 빌드하고 스테이징 결과를 검증합니다.

## 브랜치 운영

- 기능 단위 작업은 별도 브랜치에서 수행하고 검토 후 `dev`에 통합합니다.
- `dev`는 모노레포의 소스, 문서, 공통 패키지 및 자동화 스크립트를 관리합니다.
- `main`은 `dev`에서 빌드하고 검증한 정적 배포 결과물만 관리합니다.
- `main`에 직접 소스 기능을 개발하거나 프레임워크 의존성을 설치하지 않습니다.
