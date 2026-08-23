# UXKM Framework Components

HTML, Gulp/Nunjucks, Vue, React, Nuxt, Next.js에서 동일한 UXKM UI 컴포넌트를 제공하고, Storybook과 Vue·React 가이드북으로 통합 문서화하는 `pnpm` 기반 모노레포입니다.

`dev` 브랜치에서 프레임워크 애플리케이션, 프레임워크별 소개 문서, 전체 UI 컴포넌트, 가이드북, 공통 패키지, Storybook 문서 및 빌드 스크립트를 관리합니다.

각 프레임워크와 가이드북의 정적 결과물은 `build` 디렉터리에 모아 검증한 뒤 배포 전용 `main` 브랜치에 반영합니다.

> 현재 문서는 모노레포 구축을 위한 기준 구조입니다. 디렉터리와 설정은 구축 단계에 따라 순차적으로 생성합니다.

---

## 핵심 구성

```text
dev 브랜치
├── Frameworks
│   ├── HTML
│   ├── Gulp/Nunjucks
│   ├── Vue
│   ├── React
│   ├── Nuxt
│   └── Next.js
├── Guidebook
│   ├── Vue + Nuxt 문법
│   └── React + Next.js 문법
├── Storybook
├── Packages
└── Scripts

main 브랜치
├── frameworks
├── guidebook
├── .nojekyll
└── CNAME
```

---

# 1. 프레임워크 공통 문서 구조

각 프레임워크 앱은 동일한 소개 문서와 동일한 컴포넌트 분류를 제공합니다.

```text
Framework
├── Introduction
│   ├── Overview
│   ├── Getting Started
│   └── Design Tokens
│
└── Components
    ├── Layout
    │   ├── Container
    │   ├── Grid
    │   ├── Flex
    │   ├── Divider
    │   └── Space
    │
    ├── Basic
    │   ├── Button
    │   ├── Typography
    │   ├── Icon
    │   └── Link
    │
    ├── Data Display
    │   ├── Avatar
    │   ├── Badge
    │   ├── Tag
    │   ├── Card
    │   ├── Table
    │   ├── List
    │   ├── Stat
    │   ├── Calendar
    │   ├── Timeline
    │   └── Tree
    │
    ├── Form
    │   ├── Form Layout
    │   ├── Input
    │   ├── Textarea
    │   ├── Select
    │   ├── Checkbox
    │   ├── Radio
    │   ├── Switch
    │   ├── Slider
    │   ├── Rate
    │   ├── Date Picker
    │   └── Upload
    │
    ├── Feedback
    │   ├── Alert
    │   ├── Snackbar
    │   ├── Modal
    │   ├── Drawer
    │   ├── Popover
    │   ├── Tooltip
    │   ├── Progress
    │   ├── Spin
    │   ├── Skeleton
    │   └── Empty
    │
    ├── Navigation
    │   ├── Navbar
    │   ├── Menu
    │   ├── Tabs
    │   ├── Breadcrumb
    │   ├── Pagination
    │   ├── Steps
    │   └── Dropdown
    │
    └── Miscellaneous
        ├── Accordion
        ├── Collapse
        ├── Carousel
        ├── Affix
        └── Back Top
```

컴포넌트는 전체 52개입니다.

| 분류 | 개수 |
| --- | ---: |
| Layout | 5 |
| Basic | 4 |
| Data Display | 10 |
| Form | 11 |
| Feedback | 10 |
| Navigation | 7 |
| Miscellaneous | 5 |
| 전체 | 52 |

---

# 2. 전체 모노레포 구조

```text
uxkm-framework-components/
├── apps/
│   ├── html/                 # HTML 컴포넌트 52개
│   ├── gulp/                 # Nunjucks 컴포넌트 52개
│   ├── vue/                  # Vue 컴포넌트 52개
│   ├── react/                # React 컴포넌트 52개
│   ├── nuxt/                 # Nuxt 전용 컴포넌트
│   ├── next/                 # Next.js 전용 컴포넌트
│   ├── storybook/            # 공통 문서와 프레임워크 Storybook 연결
│   └── guidebook/
│       ├── vue/
│       └── react/
│
├── packages/
│   └── styles/               # 공통 스타일의 단일 원본과 빌드 결과
│
├── scripts/                  # 빌드·검증·수집 스크립트
├── build/                    # 자동 생성되는 배포 수집 결과
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── .gitignore
└── README.md
```

HTML, Gulp, Vue, React는 동일한 카테고리와 52개 컴포넌트 이름을 사용합니다. 각 컴포넌트는 하나의 디렉터리에서 프레임워크별 구현과 테스트 또는 예제를 관리하고, Story는 `apps/storybook`에서 한 번만 제공합니다.

```text
components/
├── layout/
├── basic/
├── data-display/
├── form/
├── feedback/
├── navigation/
└── miscellaneous/
```

Nuxt와 Next.js에는 일반 Vue·React 컴포넌트를 다시 복제하지 않고 `AppLayout`, 링크, 이미지처럼 프레임워크에 종속된 구현만 둡니다.


---

# 3. 프레임워크별 소개 구조

각 프레임워크는 자체 소개 문서를 포함합니다.

```text
Introduction
├── Overview
├── Getting Started
└── Design Tokens
```

## HTML

```text
apps/html/src/introduction/
├── overview.html
├── getting-started.html
└── design-tokens.html
```

## Gulp/Nunjucks

```text
apps/gulp/src/introduction/
├── overview.njk
├── getting-started.njk
└── design-tokens.njk
```

Gulp 앱의 소개와 템플릿은 Nunjucks 확장자 `.njk`를 사용합니다.

## Vue

```text
apps/vue/src/introduction/
├── Overview.vue
├── GettingStarted.vue
└── DesignTokens.vue
```

## React

```text
apps/react/src/introduction/
├── Overview.jsx
├── GettingStarted.jsx
└── DesignTokens.jsx
```

## Nuxt

```text
apps/nuxt/app/introduction/
├── Overview.vue
├── GettingStarted.vue
└── DesignTokens.vue
```

## Next.js

```text
apps/next/src/introduction/
├── Overview.jsx
├── GettingStarted.jsx
└── DesignTokens.jsx
```

---

# 4. 컴포넌트 문서 구조

각 컴포넌트 페이지는 동일한 문서 구조를 사용합니다.

```text
Component
├── Overview
├── Preview
├── Examples
├── API
├── States
├── Accessibility
├── Design Tokens
└── Related Components
```

프레임워크별 컴포넌트 앱에서는 해당 기술의 실제 구현 코드와 실행 결과를 제공합니다.

Storybook에서는 하나의 컴포넌트 문서에서 다음 코드를 비교합니다.

```text
[ HTML ] [ Gulp/Nunjucks ] [ Vue ] [ React ] [ Nuxt ] [ Next.js ]
```

---

# 5. 프레임워크 구현과 가이드북 분리

```text
apps/
├── html
├── gulp
├── vue
├── react
├── nuxt
├── next
├── guidebook/
│   ├── vue
│   └── react
└── storybook
```

`apps/html`, `apps/gulp`, `apps/vue`, `apps/react`는 소개 문서와 공통 52개 컴포넌트 구현을 제공합니다. Nuxt와 Next.js는 프레임워크 전용 구현만 제공합니다.

`apps/guidebook`은 프레임워크 학습 문서를 제공합니다.

```text
Vue Guidebook
└── Vue + Nuxt 문법 비교

React Guidebook
└── React + Next.js 문법 비교
```

---

# 6. 프레임워크별 독립 앱

| 앱 | 역할 | 빌드 결과 |
| --- | --- | --- |
| `apps/html` | 소개 문서, 순수 HTML 컴포넌트 및 JavaScript 동작 | `dist` |
| `apps/gulp` | 소개 문서, Gulp/Nunjucks 기반 컴포넌트 | `dist` |
| `apps/vue` | 소개 문서와 Vue/Vite 컴포넌트 앱 | `dist` |
| `apps/react` | 소개 문서와 React/Vite 컴포넌트 앱 | `dist` |
| `apps/nuxt` | 소개 문서와 Nuxt 컴포넌트 앱 | `.output/public` |
| `apps/next` | 소개 문서와 Next.js App Router 컴포넌트 앱 | `out` |
| `apps/storybook` | 전체 컴포넌트 통합 문서와 코드 비교 | `storybook-static` |

---

# 7. 가이드북 구조

## Vue 가이드북

```text
Vue Guidebook
├── Introduction
├── Start
├── Template
├── Reactivity
├── Components
├── Forms
├── Routing
├── Data Fetching
├── Composition API
├── Accessibility
└── Deployment
```

각 문서에서 다음 탭을 제공합니다.

```text
[ Vue ] [ Nuxt ]
```

## React 가이드북

```text
React Guidebook
├── Introduction
├── Start
├── JSX
├── Components
├── State
├── Events
├── Forms
├── Hooks
├── Routing
├── Data Fetching
├── Rendering
├── Accessibility
└── Deployment
```

각 문서에서 다음 탭을 제공합니다.

```text
[ React ] [ Next.js ]
```

---

# 8. 공통 원본과 패키지

프레임워크와 관계없이 재사용하는 코드는 책임별 공통 디렉터리에서 관리합니다. 실제 모듈 import가 필요한 JavaScript만 워크스페이스 패키지로 제공합니다.

```text
packages/
├── styles/        # SCSS와 생성 CSS (공통 원본)
├── interactions/  # DOM 기반 공통 동작 JS (워크스페이스 패키지)
└── assets/        # 공통 정적 이미지 원본
```

`styles` 안에는 JavaScript나 이미지 파일을 두지 않습니다. Ripple과 클릭 가능한 선택 카드는 앱 시작점에서 `@uxkm/interactions`의 `initInteractions()`로 함께 등록하고, 공통 이미지는 `packages/assets/public/images`에서 관리합니다.

## 컴포넌트 스타일 빌드

스타일의 단일 빌드 진입점은 `packages/styles/index.scss`입니다. 토큰·테마·레이아웃·유틸리티와 전체 컴포넌트 SCSS는 `packages/styles`에서 유지하며, Storybook을 포함한 모든 앱은 빌드된 `uxkm.css`를 사용합니다.

```bash
pnpm build:styles
```

이 명령을 실행할 때만 공통 SCSS를 컴파일하여 다음 위치에 동일한 `uxkm.css`를 생성합니다.

```text
apps/html/public/styles/uxkm.css
apps/gulp/public/styles/uxkm.css
apps/vue/public/styles/uxkm.css
apps/react/public/styles/uxkm.css
apps/nuxt/public/styles/uxkm.css
apps/next/public/styles/uxkm.css
apps/storybook/public/styles/uxkm.css
```

생성된 CSS는 직접 수정하거나 Git으로 관리하지 않습니다. 스타일 변경은 공통 SCSS에서만 수행한 뒤 `pnpm build:styles`로 각 프레임워크에 반영합니다.

공통 이미지는 `pnpm build:assets`로 각 앱의 `public/images`에 배포합니다. 스타일과 이미지를 한 번에 반영하려면 `pnpm build:shared`를 사용합니다.

favicon과 웹 앱 manifest는 `packages/assets/public/images/meta/favicon`에서 공통 관리하며, 각 앱과 Storybook은 `/images/meta/favicon` 경로로 사용합니다.

---

# 9. 프레임워크 내 공통 탐색 구조

각 프레임워크의 좌측 메뉴는 동일하게 구성합니다.

```text
Introduction
├── Overview
├── Getting Started
└── Design Tokens

Components
├── Layout
├── Basic
├── Data Display
├── Form
├── Feedback
├── Navigation
└── Miscellaneous
```

예시 URL:

```text
/frameworks/html/introduction/overview/
/frameworks/html/components/basic/button/

/frameworks/vue/introduction/overview/
/frameworks/vue/components/basic/button/

/frameworks/react/introduction/overview/
/frameworks/react/components/basic/button/
```

---

# 10. 컴포넌트 동기화 기준

컴포넌트 구현과 Storybook 문서를 함께 기준으로 관리합니다.

모든 프레임워크 구현체는 다음 항목을 공유합니다.

1. 컴포넌트 이름과 목적
2. Props 또는 HTML Attributes
3. 기본값
4. 상태와 사용자 인터랙션
5. 의미에 맞는 HTML 구조
6. 키보드 조작
7. WAI-ARIA 요구사항
8. 디자인 토큰
9. Storybook 예제
10. 프레임워크별 차이점

---

# 11. pnpm Workspace

```yaml
packages:
  - 'apps/*'
  - 'apps/guidebook/*'
  - 'apps/storybook'
  - 'packages/*'
```

개발 서버 명령:

```bash
pnpm install

pnpm dev              # Workspace 대시보드 (3000)
pnpm dev:html         # HTML (6101)
pnpm dev:gulp         # Gulp / Nunjucks (6102)
pnpm dev:vue          # Vue (6103)
pnpm dev:react        # React (6104)
pnpm dev:nuxt         # Nuxt (6105)
pnpm dev:next         # Next.js (6106)
pnpm dev:storybook    # Storybook (6006)
pnpm dev:all          # 위의 프레임워크 앱과 Storybook을 모두 실행
```

빌드 및 검증 명령:

```bash

pnpm build
pnpm build:frameworks
pnpm build:guidebook
pnpm build:storybook

pnpm lint
pnpm test
pnpm validate
pnpm deploy
```

`pnpm dev:all`은 공통 스타일과 이미지를 한 번 빌드한 뒤 프레임워크 앱과 Storybook 개발 서버를 병렬로 실행합니다. 실행 전과 서버 시작 후 터미널에 전체 접속 주소를 표시합니다. 개별 `dev:*` 명령도 실행 전에 공통 자산을 갱신합니다.

---

# 12. 자동화 스크립트

| 스크립트 | 역할 |
| --- | --- |
| `dev.mjs` | 초기 Workspace 구성을 확인하는 로컬 개발 대시보드 실행 |
| `build-styles.mjs` | 디자인 토큰과 SCSS 빌드 |
| `copy-assets.mjs` | 공통 자산을 각 앱과 빌드 경로에 복사 |
| `collect-frameworks.mjs` | 각 프레임워크와 Storybook 결과 수집 |
| `collect-guidebook.mjs` | Vue·React 가이드북 결과 수집 |
| `validate-components.mjs` | 52개 컴포넌트와 소개 문서 누락 검사 |
| `validate-guidebook.mjs` | 가이드 문서와 코드 예제 연결 검사 |
| `deploy-main.mjs` | 검증된 결과를 `main` 브랜치에 반영 |

---

# 13. 빌드 흐름

```text
packages 공통 소스 빌드
        ↓
HTML·Gulp·Vue·React·Nuxt·Next.js 빌드
        ↓
Vue·React 가이드북 빌드
        ↓
Storybook 빌드
        ↓
build/frameworks 및 build/guidebook 수집
        ↓
소개·컴포넌트·링크·자산 검증
        ↓
main 브랜치 반영
```

---

# 14. 빌드 결과 수집

## Frameworks

| 원본 | 수집 경로 |
| --- | --- |
| `apps/html/dist` | `build/frameworks/html` |
| `apps/gulp/dist` | `build/frameworks/gulp` |
| `apps/vue/dist` | `build/frameworks/vue` |
| `apps/react/dist` | `build/frameworks/react` |
| `apps/nuxt/.output/public` | `build/frameworks/nuxt` |
| `apps/next/out` | `build/frameworks/next` |
| `apps/storybook/storybook-static` | `build/frameworks/storybook` |

## Guidebook

| 원본 | 수집 경로 |
| --- | --- |
| `apps/guidebook/vue/dist` | `build/guidebook/vue` |
| `apps/guidebook/react/out` | `build/guidebook/react` |

---

# 15. main 브랜치 배포 구조

```text
main/
├── index.html
├── frameworks/
│   ├── index.html
│   ├── html/
│   │   ├── index.html
│   │   ├── introduction/
│   │   ├── components/
│   │   └── assets/
│   ├── gulp/
│   │   ├── index.html
│   │   ├── introduction/
│   │   ├── components/
│   │   └── assets/
│   ├── vue/
│   │   ├── index.html
│   │   └── assets/
│   ├── react/
│   │   ├── index.html
│   │   └── assets/
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
├── guidebook/
│   ├── index.html
│   ├── vue/
│   │   ├── index.html
│   │   └── assets/
│   └── react/
│       ├── index.html
│       ├── _next/
│       └── assets/
├── .nojekyll
└── CNAME
```

Vue·React·Nuxt·Next.js는 라우터 또는 정적 export 방식에 따라 실제 하위 문서 디렉터리가 빌드 결과에 생성됩니다.

---

# 16. 배포 URL

```text
/frameworks/

/frameworks/html/
/frameworks/gulp/
/frameworks/vue/
/frameworks/react/
/frameworks/nuxt/
/frameworks/next/
/frameworks/storybook/
```

프레임워크 소개와 컴포넌트 문서 예:

```text
/frameworks/html/introduction/overview/
/frameworks/html/components/basic/button/

/frameworks/vue/introduction/overview/
/frameworks/vue/components/basic/button/

/frameworks/next/introduction/overview/
/frameworks/next/components/basic/button/
```

가이드북:

```text
/guidebook/
/guidebook/vue/
/guidebook/react/
```

가이드북 문서 예:

```text
/guidebook/vue/components/props/
/guidebook/react/components/props/
```

---

# 17. 컴포넌트 추가 절차

1. HTML 기준 구현을 작성합니다.
2. Gulp/Nunjucks 구현을 작성합니다.
3. Vue와 React 구현을 작성합니다.
4. Nuxt와 Next.js 구현을 작성합니다.
5. 공통 스타일은 `packages/styles`의 역할별 폴더에 추가합니다.
6. Storybook에 API와 프레임워크별 예제를 연결합니다.
7. 52개 구성과 문서 누락 여부를 검사합니다.
8. 전체 앱을 빌드하고 배포 결과를 검증합니다.

---

# 18. 브랜치 운영

- 기능 단위 작업은 별도 브랜치에서 수행합니다.
- 검토가 끝난 기능은 `dev` 브랜치에 통합합니다.
- `dev`는 전체 모노레포 소스를 관리합니다.
- `main`은 정적 배포 결과만 관리합니다.
- `main`에서 프레임워크 개발이나 패키지 설치를 하지 않습니다.
- 배포 시 `frameworks`와 `guidebook` 디렉터리를 검증된 빌드 결과로 교체합니다.

---

# 19. 최종 역할 구분

```text
Frameworks
= 각 프레임워크의 소개 문서와 전체 52개 UXKM 컴포넌트 구현

Storybook
= 하나의 컴포넌트에서 HTML·Gulp·Vue·React·Nuxt·Next.js 코드 비교

Guidebook/Vue
= Vue 학습 문서와 Nuxt 문법 비교

Guidebook/React
= React 학습 문서와 Next.js 문법 비교

Packages
= 스타일, 자산, 토큰, 콘텐츠, 명세, 탐색 구조, 코드 예제

dev
= 전체 소스와 설정 관리

main
= 정적 빌드 결과 전용 배포
```
