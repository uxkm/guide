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
│   ├── frameworks/
│   │   ├── html/
│   │   │   ├── src/
│   │   │   │   ├── introduction/
│   │   │   │   │   ├── overview.html
│   │   │   │   │   ├── getting-started.html
│   │   │   │   │   └── design-tokens.html
│   │   │   │   ├── pages/
│   │   │   │   ├── components/
│   │   │   │   │   ├── layout/
│   │   │   │   │   │   ├── Container.html
│   │   │   │   │   │   ├── Grid.html
│   │   │   │   │   │   ├── Flex.html
│   │   │   │   │   │   ├── Divider.html
│   │   │   │   │   │   └── Space.html
│   │   │   │   │   │
│   │   │   │   │   ├── basic/
│   │   │   │   │   │   ├── Button.html
│   │   │   │   │   │   ├── Typography.html
│   │   │   │   │   │   ├── Icon.html
│   │   │   │   │   │   └── Link.html
│   │   │   │   │   │
│   │   │   │   │   ├── data-display/
│   │   │   │   │   │   ├── Avatar.html
│   │   │   │   │   │   ├── Badge.html
│   │   │   │   │   │   ├── Tag.html
│   │   │   │   │   │   ├── Card.html
│   │   │   │   │   │   ├── Table.html
│   │   │   │   │   │   ├── List.html
│   │   │   │   │   │   ├── Stat.html
│   │   │   │   │   │   ├── Calendar.html
│   │   │   │   │   │   ├── Timeline.html
│   │   │   │   │   │   └── Tree.html
│   │   │   │   │   │
│   │   │   │   │   ├── form/
│   │   │   │   │   │   ├── FormLayout.html
│   │   │   │   │   │   ├── Input.html
│   │   │   │   │   │   ├── Textarea.html
│   │   │   │   │   │   ├── Select.html
│   │   │   │   │   │   ├── Checkbox.html
│   │   │   │   │   │   ├── Radio.html
│   │   │   │   │   │   ├── Switch.html
│   │   │   │   │   │   ├── Slider.html
│   │   │   │   │   │   ├── Rate.html
│   │   │   │   │   │   ├── DatePicker.html
│   │   │   │   │   │   └── Upload.html
│   │   │   │   │   │
│   │   │   │   │   ├── feedback/
│   │   │   │   │   │   ├── Alert.html
│   │   │   │   │   │   ├── Snackbar.html
│   │   │   │   │   │   ├── Modal.html
│   │   │   │   │   │   ├── Drawer.html
│   │   │   │   │   │   ├── Popover.html
│   │   │   │   │   │   ├── Tooltip.html
│   │   │   │   │   │   ├── Progress.html
│   │   │   │   │   │   ├── Spin.html
│   │   │   │   │   │   ├── Skeleton.html
│   │   │   │   │   │   └── Empty.html
│   │   │   │   │   │
│   │   │   │   │   ├── navigation/
│   │   │   │   │   │   ├── Navbar.html
│   │   │   │   │   │   ├── Menu.html
│   │   │   │   │   │   ├── Tabs.html
│   │   │   │   │   │   ├── Breadcrumb.html
│   │   │   │   │   │   ├── Pagination.html
│   │   │   │   │   │   ├── Steps.html
│   │   │   │   │   │   └── Dropdown.html
│   │   │   │   │   │
│   │   │   │   │   └── miscellaneous/
│   │   │   │   │       ├── Accordion.html
│   │   │   │   │       ├── Collapse.html
│   │   │   │   │       ├── Carousel.html
│   │   │   │   │       ├── Affix.html
│   │   │   │   │       └── BackTop.html
│   │   │   │   └── scripts/
│   │   │   ├── public/
│   │   │   ├── dist/
│   │   │   └── package.json
│   │
│   │   ├── gulp/
│   │   │   ├── src/
│   │   │   │   ├── introduction/
│   │   │   │   ├── pages/
│   │   │   │   ├── templates/
│   │   │   │   │   ├── layouts/
│   │   │   │   │   └── partials/
│   │   │   │   ├── components/
│   │   │   │   │   ├── layout/
│   │   │   │   │   │   ├── Container.html
│   │   │   │   │   │   ├── Grid.html
│   │   │   │   │   │   ├── Flex.html
│   │   │   │   │   │   ├── Divider.html
│   │   │   │   │   │   └── Space.html
│   │   │   │   │   ├── basic/
│   │   │   │   │   ├── data-display/
│   │   │   │   │   ├── form/
│   │   │   │   │   ├── feedback/
│   │   │   │   │   ├── navigation/
│   │   │   │   │   └── miscellaneous/
│   │   │   │   └── scripts/
│   │   │   ├── gulpfile.js
│   │   │   ├── dist/
│   │   │   └── package.json
│   │
│   │   ├── vue/
│   │   │   ├── src/
│   │   │   │   ├── introduction/
│   │   │   │   ├── components/
│   │   │   │   │   ├── layout/
│   │   │   │   │   │   ├── Container.vue
│   │   │   │   │   │   ├── Grid.vue
│   │   │   │   │   │   ├── Flex.vue
│   │   │   │   │   │   ├── Divider.vue
│   │   │   │   │   │   └── Space.vue
│   │   │   │   │   ├── basic/
│   │   │   │   │   ├── data-display/
│   │   │   │   │   ├── form/
│   │   │   │   │   ├── feedback/
│   │   │   │   │   ├── navigation/
│   │   │   │   │   └── miscellaneous/
│   │   │   │   ├── views/
│   │   │   │   ├── router/
│   │   │   │   ├── composables/
│   │   │   │   └── main.js
│   │   │   ├── public/
│   │   │   ├── vite.config.js
│   │   │   ├── dist/
│   │   │   └── package.json
│   │
│   │   ├── react/
│   │   │   ├── src/
│   │   │   │   ├── introduction/
│   │   │   │   ├── components/
│   │   │   │   │   ├── layout/
│   │   │   │   │   │   ├── Container.jsx
│   │   │   │   │   │   ├── Grid.jsx
│   │   │   │   │   │   ├── Flex.jsx
│   │   │   │   │   │   ├── Divider.jsx
│   │   │   │   │   │   └── Space.jsx
│   │   │   │   │   ├── basic/
│   │   │   │   │   ├── data-display/
│   │   │   │   │   ├── form/
│   │   │   │   │   ├── feedback/
│   │   │   │   │   ├── navigation/
│   │   │   │   │   └── miscellaneous/
│   │   │   │   ├── pages/
│   │   │   │   ├── hooks/
│   │   │   │   ├── router/
│   │   │   │   └── main.jsx
│   │   │   ├── public/
│   │   │   ├── vite.config.js
│   │   │   ├── dist/
│   │   │   └── package.json
│   │
│   │   ├── nuxt/
│   │   │   ├── app/
│   │   │   │   ├── introduction/
│   │   │   │   ├── components/
│   │   │   │   │   ├── layout/
│   │   │   │   │   ├── basic/
│   │   │   │   │   ├── data-display/
│   │   │   │   │   ├── form/
│   │   │   │   │   ├── feedback/
│   │   │   │   │   ├── navigation/
│   │   │   │   │   └── miscellaneous/
│   │   │   │   ├── pages/
│   │   │   │   ├── composables/
│   │   │   │   ├── layouts/
│   │   │   │   └── app.vue
│   │   │   ├── public/
│   │   │   ├── nuxt.config.ts
│   │   │   ├── .output/
│   │   │   └── package.json
│   │
│   │   └── next/
│   │       ├── app/
│   │       ├── src/
│   │       │   ├── introduction/
│   │       │   ├── components/
│   │       │   │   ├── layout/
│   │       │   │   ├── basic/
│   │       │   │   ├── data-display/
│   │       │   │   ├── form/
│   │       │   │   ├── feedback/
│   │       │   │   ├── navigation/
│   │       │   │   └── miscellaneous/
│   │       │   ├── doc/
│   │       │   ├── hooks/
│   │       │   ├── layouts/
│   │       │   └── utils/
│   │       ├── public/
│   │       ├── next.config.mjs
│   │       ├── out/
│   │       └── package.json
│   │
│   ├── guidebook/
│   │   ├── vue/
│   │   └── react/
│   │
│   └── storybook/
│       ├── .storybook/
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
│       │   ├── data/
│       │   └── utils/
│       ├── storybook-static/
│       └── package.json
│
├── packages/
│   ├── styles/
│   ├── assets/
│   ├── tokens/
│   ├── content/
│   ├── component-specs/
│   ├── navigation/
│   ├── guide-content/
│   ├── guide-navigation/
│   └── code-examples/
│
├── scripts/
│   ├── build-styles.mjs
│   ├── copy-assets.mjs
│   ├── collect-frameworks.mjs
│   ├── collect-guidebook.mjs
│   ├── validate-components.mjs
│   ├── validate-guidebook.mjs
│   └── deploy-main.mjs
│
├── build/
│   ├── frameworks/
│   │   ├── html/
│   │   ├── gulp/
│   │   ├── vue/
│   │   ├── react/
│   │   ├── nuxt/
│   │   ├── next/
│   │   └── storybook/
│   └── guidebook/
│       ├── vue/
│       └── react/
│
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── .gitignore
└── README.md
```

> Nuxt와 Next.js의 `components` 디렉터리도 HTML, Gulp, Vue, React와 동일하게 52개 컴포넌트를 포함합니다. 전체 트리의 중복이 과도하게 길어지는 것을 피하기 위해 상위 분류까지만 표시했지만 실제 생성 기준은 모든 프레임워크에서 동일합니다.

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
apps/frameworks/html/src/introduction/
├── overview.html
├── getting-started.html
└── design-tokens.html
```

## Gulp/Nunjucks

```text
apps/frameworks/gulp/src/introduction/
├── overview.html
├── getting-started.html
└── design-tokens.html
```

Nunjucks 문법을 사용하더라도 확장자는 `.html`로 유지할 수 있습니다.

## Vue

```text
apps/frameworks/vue/src/introduction/
├── Overview.vue
├── GettingStarted.vue
└── DesignTokens.vue
```

## React

```text
apps/frameworks/react/src/introduction/
├── Overview.jsx
├── GettingStarted.jsx
└── DesignTokens.jsx
```

## Nuxt

```text
apps/frameworks/nuxt/app/introduction/
├── Overview.vue
├── GettingStarted.vue
└── DesignTokens.vue
```

## Next.js

```text
apps/frameworks/next/src/introduction/
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
├── frameworks/
│   ├── html
│   ├── gulp
│   ├── vue
│   ├── react
│   ├── nuxt
│   └── next
├── guidebook/
│   ├── vue
│   └── react
└── storybook
```

`apps/frameworks`는 소개 문서와 전체 52개 컴포넌트의 실제 구현을 제공합니다.

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
| `apps/frameworks/html` | 소개 문서, 순수 HTML 컴포넌트 및 JavaScript 동작 | `dist` |
| `apps/frameworks/gulp` | 소개 문서, Gulp/Nunjucks 기반 컴포넌트 | `dist` |
| `apps/frameworks/vue` | 소개 문서와 Vue/Vite 컴포넌트 앱 | `dist` |
| `apps/frameworks/react` | 소개 문서와 React/Vite 컴포넌트 앱 | `dist` |
| `apps/frameworks/nuxt` | 소개 문서와 Nuxt 컴포넌트 앱 | `.output/public` |
| `apps/frameworks/next` | 소개 문서와 Next.js App Router 컴포넌트 앱 | `out` |
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

# 8. 공통 패키지

| 패키지 | 역할 |
| --- | --- |
| `packages/styles` | 공통 SCSS, 프레임워크 스타일, 가이드북 스타일, Storybook 스타일 |
| `packages/assets` | 공용 폰트, 이미지, 아이콘, 컴포넌트 및 가이드북 자산 |
| `packages/tokens` | 색상, 간격, 타이포그래피, 모서리, 그림자 디자인 토큰 |
| `packages/content` | 프레임워크 소개와 컴포넌트 설명의 공통 콘텐츠 |
| `packages/component-specs` | 컴포넌트 API, 상태, 의미 구조, 접근성 기준 |
| `packages/navigation` | 프레임워크와 Storybook의 소개·컴포넌트 메뉴 구조 |
| `packages/guide-content` | Vue·React 가이드북의 공통 설명 |
| `packages/guide-navigation` | Vue·React 가이드북 목차와 노출 순서 |
| `packages/code-examples` | Vue·Nuxt·React·Next.js 학습 코드 예제 |

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

`packages/component-specs`를 기준 명세로 사용합니다.

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
  - 'apps/frameworks/*'
  - 'apps/guidebook/*'
  - 'apps/storybook'
  - 'packages/*'
```

예정된 기본 명령:

```bash
pnpm install

pnpm dev
pnpm dev:frameworks
pnpm dev:guidebook
pnpm dev:storybook

pnpm build
pnpm build:frameworks
pnpm build:guidebook
pnpm build:storybook

pnpm lint
pnpm test
pnpm validate
pnpm deploy
```

---

# 12. 자동화 스크립트

| 스크립트 | 역할 |
| --- | --- |
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
| `apps/frameworks/html/dist` | `build/frameworks/html` |
| `apps/frameworks/gulp/dist` | `build/frameworks/gulp` |
| `apps/frameworks/vue/dist` | `build/frameworks/vue` |
| `apps/frameworks/react/dist` | `build/frameworks/react` |
| `apps/frameworks/nuxt/.output/public` | `build/frameworks/nuxt` |
| `apps/frameworks/next/out` | `build/frameworks/next` |
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

1. `packages/component-specs`에 명세를 작성합니다.
2. `packages/tokens`, `packages/styles`, `packages/assets`에 공통 자원을 추가합니다.
3. `packages/content`에 공통 설명을 작성합니다.
4. `packages/navigation`에 메뉴 순서를 등록합니다.
5. HTML 기준 구현을 작성합니다.
6. Gulp/Nunjucks 구현을 작성합니다.
7. Vue와 React 구현을 작성합니다.
8. Nuxt와 Next.js 구현을 작성합니다.
9. Storybook에 프레임워크별 코드를 연결합니다.
10. 52개 구성과 문서 누락 여부를 검사합니다.
11. 전체 앱을 빌드하고 배포 결과를 검증합니다.

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
