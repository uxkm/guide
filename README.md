# UXKM Framework Components

UXKM UI 컴포넌트를 HTML, Gulp/Nunjucks, Vue, React, Nuxt, Next.js, WebSquare로 구현하고 Guidebook과 Storybook으로 문서화하는 `pnpm` 모노레포입니다.

현재 배포 대상은 Guidebook과 Storybook입니다. HTML부터 Next.js까지의 프레임워크 앱은 구현 확인과 비교를 위한 개별 개발 서버로 운영합니다.

## 시작하기

저장소에 선언된 패키지 매니저는 `pnpm@10.15.0`입니다.

```bash
pnpm install
pnpm dev
```

`pnpm dev`는 공통 스타일과 이미지를 먼저 갱신한 뒤 다음 문서 서버를 함께 실행합니다. 서버는 `0.0.0.0`에 열려 있으므로 같은 Wi‑Fi의 다른 기기에서도 접속할 수 있습니다. 터미널에는 localhost와 LAN IP가 함께 출력되며, 네트워크 주소는 실행할 때마다 달라집니다.

| 문서 | 이 기기 | 같은 네트워크의 다른 기기 |
| --- | --- | --- |
| Storybook | `http://localhost:6006` | `http://<LAN-IP>:6006` |
| Guidebook | `http://localhost:6107` | `http://<LAN-IP>:6107` |

모든 프레임워크 앱까지 함께 실행하려면 다음 명령을 사용합니다.

```bash
pnpm dev:all
```

## 현재 구조

```text
.
├── apps/
│   ├── html/          # 순수 HTML 컴포넌트 앱
│   ├── gulp/          # Gulp/Nunjucks 컴포넌트 앱
│   ├── vue/           # Vue/Vite 컴포넌트 앱과 워크스페이스 exports
│   ├── react/         # React/Vite 컴포넌트 앱과 워크스페이스 exports
│   ├── nuxt/          # Vue 컴포넌트를 사용하는 Nuxt 앱
│   ├── next/          # React 컴포넌트를 사용하는 Next.js 앱
│   ├── websquare/     # WebSquare XML 원본과 로컬 프로젝트 동기화 도구
│   ├── storybook/     # 컴포넌트 Story, API, 프레임워크 코드 비교 문서
│   └── guidebook/     # Markdown 기반 정적 가이드북
├── packages/
│   ├── assets/        # 이미지, favicon, web manifest 원본
│   ├── interactions/  # 프레임워크 비종속 DOM 인터랙션
│   └── styles/        # 디자인 토큰과 공통 SCSS 원본
├── scripts/           # 개발, 빌드, 검증, 수집, 배포 스크립트
├── build/             # pnpm build로 생성되는 문서 배포 결과
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

워크스페이스 범위는 `apps/*`와 `packages/*`입니다.

## 컴포넌트 구성

HTML, Gulp/Nunjucks, Vue, React, WebSquare에는 같은 분류의 공통 컴포넌트 52개가 구현되어 있습니다.

| 분류 | 개수 |
| --- | ---: |
| Layout | 5 |
| Basic | 4 |
| Data Display | 10 |
| Form | 11 |
| Feedback | 10 |
| Navigation | 7 |
| Miscellaneous | 5 |
| 합계 | 52 |

각 앱의 기본 컴포넌트 경로는 다음과 같습니다.

```text
apps/{html,gulp,vue,react,websquare}/src/components/
├── layout/
├── basic/
├── data-display/
├── form/
├── feedback/
├── navigation/
└── miscellaneous/
```

Vue와 React 구현은 각각 `@uxkm/vue`, `@uxkm/react`의 subpath export로도 제공합니다. Nuxt와 Next.js는 이를 재사용하며 `AppLayout`, 링크, 이미지처럼 프레임워크에 종속된 컴포넌트만 별도로 관리합니다.

Story는 프레임워크 앱 안에 중복해서 두지 않고 `apps/storybook/src`에서 중앙 관리합니다.

## 공통 패키지

### Styles

스타일의 단일 진입점은 `packages/styles/index.scss`입니다.

```bash
pnpm build:styles
```

빌드 결과인 `uxkm.css`는 HTML, Gulp, Vue, React, Nuxt, Next.js, Storybook의 `public/styles`와 WebSquare의 `WebContent/cm/css`에 생성됩니다. 생성 CSS를 직접 수정하지 말고 `packages/styles`의 SCSS를 수정합니다.

### Assets

이미지 원본은 `packages/assets/public/images`에서 관리합니다.

```bash
pnpm build:assets
```

이 명령은 이미지를 여섯 브라우저 앱과 Storybook의 `public/images`, WebSquare의 `WebContent/images`로 복사합니다. Guidebook은 Vite의 `publicDir` 설정을 통해 공통 자산 원본을 직접 사용합니다. 문서와 예제의 이미지 주소는 `VITE_ASSET_BASE`(없으면 `VITE_SITE_URL`)로 개발·배포 경로를 맞춥니다.

스타일과 이미지를 한 번에 갱신하려면 다음 명령을 실행합니다.

```bash
pnpm build:shared
```

### Interactions

`@uxkm/interactions`는 다음 DOM 기반 공통 동작을 제공합니다.

- ripple
- clickable card
- slide region

각 프레임워크 앱은 필요한 동작을 이 워크스페이스 패키지에서 가져옵니다.

## Guidebook

Guidebook 원문은 `apps/guidebook/content`의 Markdown 파일입니다. frontmatter의 `path`, `group`, `title`, `order` 등을 기준으로 `apps/guidebook/scripts/generate-pages.mjs`가 정적 페이지와 탐색 정보를 생성합니다.

```bash
pnpm dev:guidebook
pnpm build:guidebook
```

`dev`와 `build`는 페이지 생성 단계를 자동으로 실행합니다. 생성된 Guidebook 빌드는 `apps/guidebook/dist`에 저장됩니다.

현재 문서 목차는 다음 영역으로 구성됩니다.

```text
소개
기초
├── 디자인 토큰
└── 접근성
컴포넌트
├── 기본 요소
├── 레이아웃
├── 폼
├── 네비게이션
├── 데이터 표시
├── 피드백
└── 기타
활용 가이드
├── UI 패턴
└── 작성 지침
프레임워크
├── 프레임워크 구현
├── Gulp
│   ├── 소개
│   ├── Gulp 시작
│   ├── Gulp 기본 설정
│   ├── Gulp 기본 API
│   ├── HTML 편집 (Gulp NJK)
│   ├── Web Server & Watching Files
│   ├── Assets 세팅
│   └── 배포 (Deploying)
├── Vue
│   ├── 소개
│   ├── 빠른 시작
│   ├── 핵심 기초
│   ├── 상태와 반응성
│   ├── 컴포넌트 심화
│   ├── 페이지와 라우팅
│   ├── 재사용성
│   ├── 내장 컴포넌트
│   ├── 확장하기
│   ├── 베스트 프랙티스
│   ├── TypeScript
│   └── 추가 주제
├── React
│   ├── 소개
│   ├── 빠르게 시작하기
│   ├── UI 표현
│   ├── 조건과 목록
│   ├── 상호작용
│   ├── 페이지와 라우팅
│   ├── State 관리
│   ├── 탈출구
│   └── React로 사고하기
└── WebSquare
    ├── 소개
    ├── 스튜디오
    ├── 화면과 이벤트
    ├── 컴포넌트
    ├── DataCollection
    ├── Submission
    ├── 사용하기
    ├── SP5 설정
    └── 심화 가이드
```

## Storybook

Storybook은 52개 컴포넌트의 예제, API, 접근성 정보와 HTML, Gulp/Nunjucks, Vue, Nuxt, React, Next.js, WebSquare 코드 비교를 제공합니다. 컴포넌트 원본 탭은 `apps/websquare/src/components`의 XML을 직접 읽고, 상태별 예제는 필요한 Story에서 `id: 'websquare'` 전용 예제로 제공합니다. 원본이 없는 이전 예제에만 HTML의 XML 호환 변환을 fallback으로 사용합니다.

```bash
pnpm dev:storybook
pnpm build:storybook
pnpm --filter @uxkm/storybook typecheck
```

정적 빌드는 `apps/storybook/storybook-static`에 생성됩니다.

## WebSquare

WebSquare 원본은 `apps/websquare/src/components`에 있으며, 각 파일은 실제 화면 XML의 `<body>`에 붙이는 fragment입니다. Engine, Studio, 라이선스와 `_wpack_` 생성물은 저장소에 포함하지 않습니다.

```bash
pnpm dev:websquare
pnpm build:websquare
pnpm sync:websquare -- --project /absolute/path/to/project
```

`dev:websquare`와 `build:websquare`는 엔진 없이 52개 XML 구조를 검증합니다. `sync:websquare`는 공통 CSS·이미지를 만든 후 지정한 로컬 WebSquare 프로젝트의 UXKM 전용 경로에 소스와 자산을 복사합니다. 실제 실행과 W-Pack 변환은 해당 프로젝트의 라이선스가 있는 Studio 또는 WAS에서 수행합니다.

## 개발 명령

| 명령 | 주소 | 역할 |
| --- | --- | --- |
| `pnpm dev` | 6006, 6107 | Storybook과 Guidebook 실행 |
| `pnpm dev:dashboard` | 3000 | 워크스페이스 개발 대시보드 실행 |
| `pnpm dev:html` | 6101 | HTML 앱 실행 |
| `pnpm dev:gulp` | 6102 | Gulp/Nunjucks 앱 실행 |
| `pnpm dev:vue` | 6103 | Vue 앱 실행 |
| `pnpm dev:react` | 6104 | React 앱 실행 |
| `pnpm dev:nuxt` | 6105 | Nuxt 앱 실행 |
| `pnpm dev:next` | 6106 | Next.js 앱 실행 |
| `pnpm dev:websquare` | — | WebSquare XML 및 화면 구조 검증 |
| `pnpm dev:storybook` | 6006 | Storybook 실행 |
| `pnpm dev:guidebook` | 6107 | Guidebook 실행 |
| `pnpm dev:all` | 6006, 6101~6107 | 브라우저 앱과 문서 서버 실행 |

프레임워크·Storybook·Guidebook의 개별 `dev:*` 명령과 `dev:all`은 서버 시작 전에 공통 스타일과 자산을 갱신합니다.

## 빌드와 검증

```bash
pnpm build
pnpm validate:structure
pnpm check:workspace
```

- `pnpm build`: Guidebook과 Storybook을 빌드한 뒤 하나의 `build` 디렉터리로 수집합니다.
- `pnpm validate:structure`: 5개 공통 구현의 52개 컴포넌트 파일, 공통 패키지, Nuxt/Next 전용 컴포넌트, Story 위치를 검사합니다.
- `pnpm check:workspace`: 등록된 워크스페이스 패키지를 확인합니다.

현재 `pnpm build`의 결과 구조는 다음과 같습니다.

```text
build/
├── index.html       # Guidebook 진입점
├── assets/
├── components/
├── foundations/
├── guides/
├── images/
└── storybook/       # Storybook 정적 빌드
```

프레임워크 앱은 현재 개발 서버용이며 루트 `build` 명령의 정적 배포 대상에는 포함되지 않습니다.

## 배포

```bash
pnpm deploy
pnpm deploy:guidebook
pnpm deploy:storybook
```

배포 스크립트는 해당 문서를 빌드하고 임시 Git worktree에서 `main` 브랜치에 반영한 뒤 `origin/main`으로 push합니다.

배포 전 조건:

- 현재 작업 트리에 미커밋 변경이 없어야 합니다.
- 로컬 `main`에 `origin/main`에 없는 커밋이 없어야 합니다.
- `origin` 원격 저장소에 접근하고 push할 권한이 있어야 합니다.

`dev` 브랜치는 소스와 설정을 관리하고, `main` 브랜치는 Guidebook과 `/storybook` 정적 결과를 관리합니다.

## 컴포넌트 변경 순서

1. HTML과 Gulp/Nunjucks 구현을 갱신합니다.
2. Vue와 React 구현 및 export를 갱신합니다.
3. 필요할 때 Nuxt와 Next.js 전용 구현을 갱신합니다.
4. `apps/websquare/src/components`의 XML과 실제 Engine 결과를 갱신합니다.
5. 공통 스타일은 `packages/styles`, 공통 동작은 `packages/interactions`, 이미지는 `packages/assets`에서 수정합니다.
6. `apps/storybook/src`의 Story, API, 프레임워크 예제를 갱신합니다.
7. Guidebook 문서에 영향을 주면 `apps/guidebook/content`를 갱신합니다.
8. `pnpm validate:structure`와 관련 빌드를 실행합니다.
