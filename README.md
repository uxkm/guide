# UXKM Monorepo

UXKM의 공통 UI 컴포넌트를 여러 프레임워크에서 일관된 구조와 사용 경험으로 제공하기 위한 `pnpm` 기반 모노레포입니다.

이 저장소는 HTML, Gulp/Nunjucks, Vue, React, Nuxt, Next.js 구현체를 한곳에서 관리하고, Storybook을 통해 컴포넌트 문서와 프레임워크별 예제를 제공하는 것을 목표로 합니다.

> 현재 문서는 모노레포 구성을 위한 초기 설계안입니다. 각 앱과 패키지는 이후 단계에서 순차적으로 생성합니다.

## 프로젝트 구조

```text
uxkm-monorepo/
├── apps/
│   ├── html/
│   │   └── src/
│   │       └── components/
│   │           ├── button.html
│   │           ├── input.html
│   │           └── modal.html
│   │
│   ├── gulp/
│   │   └── src/
│   │       └── components/
│   │           ├── button.html
│   │           ├── input.html
│   │           └── modal.html
│   │
│   ├── vue/
│   │   └── src/
│   │       └── components/
│   │           ├── Button.vue
│   │           ├── Input.vue
│   │           └── Modal.vue
│   │
│   ├── react/
│   │   └── src/
│   │       └── components/
│   │           ├── Button.jsx
│   │           ├── Input.jsx
│   │           └── Modal.jsx
│   │
│   ├── nuxt/
│   │   └── app/
│   │       └── components/
│   │           ├── Button.vue
│   │           ├── Input.vue
│   │           └── Modal.vue
│   │
│   ├── next/
│   │   └── src/
│   │       └── components/
│   │           ├── Button.tsx
│   │           ├── Input.tsx
│   │           └── Modal.tsx
│   │
│   └── storybook/
│       ├── .storybook/
│       │   ├── main.ts
│       │   └── preview.ts
│       └── src/
│           ├── docs/
│           │   └── components/
│           │       ├── Button.mdx
│           │       ├── Input.mdx
│           │       └── Modal.mdx
│           └── components/
│               ├── FrameworkCodeTabs.tsx
│               └── FrameworkPreview.tsx
│
├── packages/
│   ├── styles/
│   ├── assets/
│   ├── content/
│   ├── tokens/
│   └── component-specs/
│
├── build/
│   └── frameworks/
│
├── pnpm-workspace.yaml
└── package.json
```

## 디렉터리 역할

### `apps`

실제로 실행하거나 빌드할 수 있는 프레임워크별 애플리케이션을 관리합니다.

| 경로 | 역할 |
| --- | --- |
| `apps/html` | 별도의 프레임워크 없이 사용하는 순수 HTML 컴포넌트 예제 |
| `apps/gulp` | Gulp 빌드 환경에서 Nunjucks로 렌더링하는 `.html` 컴포넌트 예제 |
| `apps/vue` | Vue 기반 컴포넌트 구현 및 사용 예제 |
| `apps/react` | React 기반 컴포넌트 구현 및 사용 예제 |
| `apps/nuxt` | Nuxt의 자동 컴포넌트 등록 구조를 사용하는 구현 및 예제 |
| `apps/next` | Next.js와 TypeScript 기반 컴포넌트 구현 및 예제 |
| `apps/storybook` | 컴포넌트 문서, 인터랙션 예제, 프레임워크별 코드와 미리보기 제공 |

각 프레임워크 앱은 동일한 컴포넌트 이름과 기능을 유지하되, 해당 프레임워크의 권장 문법과 생태계에 맞게 구현합니다.

`apps/gulp`는 Nunjucks를 기본 템플릿 엔진으로 사용하지만, 템플릿 파일의 확장자는 `.njk`가 아닌 `.html`로 통일합니다.

### `packages`

여러 앱에서 함께 사용하는 소스와 규칙을 관리합니다.

| 경로 | 역할 |
| --- | --- |
| `packages/styles` | 공통 CSS, 컴포넌트 스타일, 유틸리티 및 테마 |
| `packages/assets` | 아이콘, 이미지, 폰트 등 공용 정적 리소스 |
| `packages/content` | 문서 설명, 예제 데이터 등 공유 콘텐츠 |
| `packages/tokens` | 색상, 타이포그래피, 간격, 크기 등의 디자인 토큰 |
| `packages/component-specs` | 컴포넌트 API, 상태, 접근성 및 동작에 대한 프레임워크 독립 명세 |

공통 패키지는 특정 프레임워크에 의존하지 않는 것을 기본 원칙으로 합니다. 프레임워크별 차이가 필요한 경우 각 `apps` 내부에서 변환하거나 확장합니다.

### `build/frameworks`

각 앱의 정적 빌드 결과물을 프레임워크별로 모으는 스테이징 디렉터리입니다. 검증이 완료된 결과물은 `main` 브랜치의 `frameworks` 디렉터리에 반영합니다.

### `apps/storybook`

Storybook은 전체 컴포넌트 카탈로그의 문서 허브 역할을 합니다.

- `src/docs/components`: 컴포넌트별 MDX 문서
- `FrameworkCodeTabs.tsx`: HTML, Gulp/Nunjucks, Vue, React 등 프레임워크별 코드를 탭으로 표시
- `FrameworkPreview.tsx`: 선택한 프레임워크의 렌더링 결과 또는 예제 화면을 표시
- `.storybook/main.ts`: 스토리 탐색 경로, 애드온 및 빌드 설정
- `.storybook/preview.ts`: 공통 스타일, 전역 파라미터 및 데코레이터 설정

## 컴포넌트 관리 원칙

하나의 컴포넌트는 모든 프레임워크에서 다음 기준을 공유합니다.

1. 컴포넌트 이름과 목적
2. 속성(Props 또는 Attributes)과 기본값
3. 상태 및 사용자 인터랙션
4. 마크업의 의미 구조
5. 키보드 조작과 WAI-ARIA를 포함한 접근성 요구사항
6. 디자인 토큰과 공통 스타일
7. Storybook 문서와 사용 예제

`packages/component-specs`를 기준 명세로 삼고, 각 프레임워크 구현체는 이 명세를 따릅니다. 프레임워크 특성으로 인해 API가 달라지는 경우 차이점을 해당 컴포넌트 문서에 명시합니다.

## Workspace 구성 방향

루트 `pnpm-workspace.yaml`에서 앱과 공통 패키지를 워크스페이스로 등록합니다.

```yaml
packages:
  - apps/*
  - packages/*
```

루트 `package.json`은 공통 개발 명령과 패키지 매니저 버전을 관리하고, 각 앱과 패키지는 자체 `package.json`에서 필요한 의존성과 스크립트를 선언합니다.

예정된 공통 명령은 다음과 같습니다.

```bash
pnpm install
pnpm dev
pnpm build
pnpm test
pnpm lint
pnpm storybook
```

실제 스크립트 이름과 실행 범위는 각 워크스페이스가 구성되는 단계에서 확정합니다.

## 빌드 및 배포 구조

`dev` 브랜치에서 각 앱을 빌드하면 결과물을 스테이징 영역에 모아 검증합니다. 검증을 통과한 정적 결과물은 다음 구조로 `main` 브랜치에 반영합니다.

```text
main/
├── index.html
├── frameworks/
│   ├── index.html
│   │
│   ├── html/
│   │   ├── index.html
│   │   └── assets/
│   │       ├── css/
│   │       ├── js/
│   │       ├── images/
│   │       └── icons/
│   │
│   ├── gulp/
│   │   ├── index.html
│   │   └── assets/
│   │       ├── css/
│   │       ├── js/
│   │       ├── images/
│   │       └── icons/
│   │
│   ├── vue/
│   │   ├── index.html
│   │   └── assets/
│   │       ├── index-[hash].css
│   │       ├── index-[hash].js
│   │       └── images/
│   │
│   ├── react/
│   │   ├── index.html
│   │   └── assets/
│   │       ├── index-[hash].css
│   │       ├── index-[hash].js
│   │       └── images/
│   │
│   ├── nuxt/
│   │   ├── index.html
│   │   ├── _nuxt/
│   │   └── assets/
│   │
│   ├── next/
│   │   ├── index.html
│   │   ├── _next/
│   │   └── assets/
│   │
│   └── storybook/
│       ├── index.html
│       ├── iframe.html
│       └── assets/
│
├── .nojekyll
└── CNAME
```

### 경로별 역할

| 경로 | 역할 |
| --- | --- |
| `/index.html` | 전체 UXKM 서비스의 진입 페이지 |
| `/frameworks/index.html` | 프레임워크별 결과물로 이동하는 인덱스 페이지 |
| `/frameworks/html` | 순수 HTML 정적 빌드 결과물 |
| `/frameworks/gulp` | Gulp와 Nunjucks로 생성한 정적 HTML 결과물 |
| `/frameworks/vue` | Vue 프로덕션 빌드 결과물 |
| `/frameworks/react` | React 프로덕션 빌드 결과물 |
| `/frameworks/nuxt` | Nuxt 정적 생성 결과물 |
| `/frameworks/next` | Next.js 정적 내보내기 결과물 |
| `/frameworks/storybook` | Storybook 정적 빌드 결과물 |
| `/.nojekyll` | GitHub Pages에서 밑줄로 시작하는 빌드 디렉터리가 제외되지 않도록 설정 |
| `/CNAME` | GitHub Pages 사용자 지정 도메인 설정 |

### 배포 원칙

- `dev` 브랜치는 모노레포 소스와 개발 설정을 관리합니다.
- 각 앱은 `/frameworks/<framework>/`를 기준 경로로 사용해 빌드합니다.
- 빌드 결과는 먼저 `build/frameworks` 스테이징 영역에 모아 링크와 정적 자산 경로를 검증합니다.
- Nuxt와 Next.js는 서버 런타임 없이 제공할 수 있는 정적 결과물로 생성합니다.
- 검증된 결과물만 `main` 브랜치에 반영하며, `main` 브랜치는 배포 파일만 관리합니다.
- 빌드 시 생성되는 해시 파일명은 각 프레임워크 빌드 도구의 결과를 유지합니다.

## 컴포넌트 추가 흐름

새 컴포넌트를 추가할 때는 다음 순서를 권장합니다.

1. `packages/component-specs`에 API, 상태, 동작 및 접근성 명세를 작성합니다.
2. `packages/tokens`, `packages/styles`, `packages/assets`에 필요한 공통 리소스를 추가합니다.
3. `apps/html`에서 의미 구조와 기본 동작을 검증합니다.
4. Gulp/Nunjucks, Vue, React, Nuxt, Next.js 구현체를 추가합니다.
5. Storybook MDX 문서에 프레임워크별 코드와 미리보기를 연결합니다.
6. 린트, 테스트, 빌드 및 접근성 검사를 수행합니다.

## 초기 구축 순서

- 루트 `package.json` 및 `pnpm-workspace.yaml` 구성
- `packages` 공통 모듈의 패키지 경계와 export 정의
- 프레임워크별 앱 초기화
- Button, Input, Modal 공통 명세 작성
- 각 프레임워크용 컴포넌트 구현
- Storybook 문서 및 프레임워크 전환 UI 구성
- 공통 린트, 타입 검사, 테스트 및 빌드 파이프라인 연결

## 브랜치

초기 모노레포 구성과 소스 개발은 `dev` 브랜치에서 진행합니다. 기능 단위 작업은 별도 브랜치에서 수행한 뒤 검토를 거쳐 `dev`에 통합합니다. `main` 브랜치는 `dev`에서 생성하고 검증한 정적 빌드 결과물을 배포하는 용도로 사용합니다.
