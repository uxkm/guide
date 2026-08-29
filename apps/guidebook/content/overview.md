---
id: overview
group: 가이드북
path: ""
label: 소개
title: Guidebook
titleLogo: true
eyebrow: UXKM Components
lead: UXKM의 52개 UI 컴포넌트를 일관되게 선택하고 조합하며 구현하기 위한 실무 가이드입니다.
order: 1
---

<div class="callout"><span class="callout-icon">i</span><p>가이드북에서 사용 원칙을 이해하고, 스토리북에서 실제 동작과 프레임워크별 구현 코드를 확인합니다.</p></div>

UXKM Guidebook은 컴포넌트의 모양을 보여주는 목록이 아니라 어떤 문제에 어떤 컴포넌트를 선택하고, 여러 상태와 접근성을 어떻게 구현할지 설명하는 문서입니다. 처음 사용하는 사람은 기초부터 순서대로 읽고, 익숙한 사용자는 왼쪽 메뉴에서 필요한 컴포넌트 분류, 활용 가이드, 프레임워크 문법으로 바로 이동할 수 있습니다.

## 문서의 역할

| 문서 | 주요 역할 | 확인하는 질문 |
| --- | --- | --- |
| Guidebook | 컴포넌트 선택 기준, 접근성, 조합 패턴과 구현 원칙 설명 | 왜 이 컴포넌트를 사용하며 어떤 상태와 예외를 고려해야 하는가? |
| Storybook | 컴포넌트 API, 상태, 실제 동작과 프레임워크별 코드 제공 | 실제로 어떻게 보이고 동작하며 코드에서 어떤 API를 사용하는가? |

가이드북과 스토리북은 같은 컴포넌트 분류를 사용합니다. 가이드북의 `컴포넌트` 메뉴에서 사용 시점과 주의사항을 확인한 뒤 각 컴포넌트 링크를 열어 Storybook의 상태, 조작 방법과 프레임워크별 구현 예제를 검증합니다. 디자인이나 개발 중 판단 기준이 바뀌면 코드만 수정하지 않고 두 문서의 설명과 예제를 함께 갱신합니다.

## Storybook 프레임워크 지원

Storybook의 각 컴포넌트 문서는 Preview와 함께 **HTML, Gulp, Vue, Nuxt, React, Next.js, WebSquare** 코드 탭을 제공합니다. 문법은 달라도 최종 DOM 구조, CSS 클래스, 상태 이름과 접근성 속성은 같은 계약을 따릅니다. 프레임워크를 고를 때는 프로젝트 기술 스택에 맞는 탭을 열고, 다른 탭과 결과를 비교해 구현 차이를 확인합니다.

| 프레임워크 | 앱 · 제공 방식 | 구현 기준 | Storybook에서 확인하는 내용 |
| --- | --- | --- | --- |
| HTML | `@uxkm/html` | HTML · CSS · JavaScript | 프레임워크 없는 기준 마크업과 동작 |
| Gulp / Nunjucks | `@uxkm/gulp` | Nunjucks · Gulp | 같은 구조를 정적 템플릿으로 조립하는 방식 |
| Vue | `@uxkm/vue` | Vue 3 · Vite | Vue 컴포넌트 원본의 props·슬롯·이벤트 |
| Nuxt | `@uxkm/nuxt` | Vue · Nuxt | Vue 컴포넌트를 Nuxt 앱에 통합하는 방식 |
| React | `@uxkm/react` | React · Vite | React 컴포넌트 원본의 props·children·이벤트 |
| Next.js | `@uxkm/next` | React · App Router | React 컴포넌트를 Next.js 앱에 통합하는 방식 |
| WebSquare | Code → WebSquare 탭 | WebSquare XML · XHTML | 공통 HTML·CSS를 화면 XML에서 재사용하는 fragment |

환경 간 관계는 대체보다 **재사용**에 가깝습니다.

- **HTML과 Gulp:** `.html`은 브라우저가 읽는 기준 마크업이고, `.njk`는 같은 구조를 Nunjucks로 조립한 뒤 Gulp가 HTML로 변환합니다.
- **Vue와 Nuxt:** Nuxt는 Vue UI를 다시 만들지 않고 `@uxkm/vue`를 재사용하며, 라우팅·렌더링·메타데이터 같은 Nuxt 전용 통합만 둡니다.
- **React와 Next.js:** Next.js는 `@uxkm/react`를 재사용하며, App Router와 프레임워크 전용 링크·이미지·렌더링만 확장합니다.
- **WebSquare:** 별도 실행 앱이 아니라 HTML 기준 마크업을 XML 호환 fragment로 제공합니다. 데이터 바인딩과 이벤트는 프로젝트의 `scwin`·화면 규칙에 맞게 연결합니다. 용어와 연결 방식은 아래 **WebSquare 화면과 scwin**에서 확인합니다.

구현 절차와 완료 기준은 [프레임워크 구현](guides/frameworks/index.html)에서, Storybook 소개·비교 설명은 Storybook의 **소개** 문서에서 이어서 확인합니다.

## WebSquare 화면과 scwin

WebSquare 예제의 **화면**은 Vue·React 컴포넌트가 아니라 페이지 단위 XML 문서입니다. **scwin**은 UXKM이 정한 이름이 아니라 WebSquare가 화면마다 만들어 주는 **기본 스크립트 객체명**입니다. 클릭·변경 같은 이벤트는 이 객체에 연결합니다. 이름은 `config.xml`의 SPA `variable`에서 바꿀 수 있으므로, 프로젝트가 다른 이름을 쓰면 예제의 `scwin`을 그 이름으로 치환합니다. UXKM은 WebSquare 엔진이나 공통 화면 스크립트를 제공하지 않으며, Storybook의 WebSquare 탭은 기존 화면 XML 안에 붙여 넣을 fragment만 제공합니다.

| 구분 | 의미 | UXKM이 제공하는 것 | 프로젝트에서 연결하는 것 |
| --- | --- | --- | --- |
| 화면 | WebSquare 화면 XML 한 장 | XML fragment와 공통 CSS | 루트 네임스페이스와 화면 파일 구조 |
| `scwin` | WebSquare 기본 화면 스크립트 객체 | `ev:onclick="scwin...."` 예시 | 프로젝트 객체명·핸들러·화면 이동·submission |
| 데이터 바인딩 | DataMap·DataList | `ref="data:..."` 예시 | 화면 데이터 객체 이름과 경로 |

`xmlns:w2`, `xmlns:xf`, `xmlns:ev`는 컴포넌트마다 쓰지 않고 화면 XML 루트에서 한 번 선언합니다. Container·Grid·Flex처럼 구조만 담당하는 컴포넌트는 `scwin`이나 DataList가 필요하지 않습니다. Button·Input·Modal처럼 동작이 있는 컴포넌트만 화면 스크립트와 데이터 객체에 연결합니다.

```xml
<xf:trigger
  id="btnSave"
  type="button"
  class="btn btn_filled color_primary"
  ev:onclick="scwin.btnSave_onclick">
  <xf:label><![CDATA[저장]]></xf:label>
</xf:trigger>
```

```javascript
scwin.btnSave_onclick = function () {
  // 프로젝트의 submission 또는 저장 로직을 호출합니다.
};
```

`scwin.btnSave_onclick`은 Studio가 `{컴포넌트ID}_{이벤트명}`으로 만드는 관례 예시입니다. 입력값은 `ref="data:user.name"`처럼 DataMap·DataList 경로에 바인딩합니다. 화면 XML에 배치하는 절차는 Storybook의 **시작하기**에서, 구현 시 확인할 항목은 [프레임워크 구현](guides/frameworks/index.html)에서 이어서 확인합니다.

## 시작하기

```Terminal
pnpm dev
```

명령을 실행하면 두 문서 서버가 함께 시작됩니다. 서버는 `0.0.0.0`에 열려 있으므로 이 기기뿐 아니라 같은 Wi‑Fi의 다른 기기에서도 접속할 수 있습니다.

| 문서 | 이 기기 | 같은 네트워크의 다른 기기 | 운영 주소 |
| --- | --- | --- | --- |
| Guidebook | `http://localhost:6107/` | `http://<LAN-IP>:6107/` | `https://guide.uxkm.io/` |
| Storybook | `http://localhost:6006/` | `http://<LAN-IP>:6006/` | `https://guide.uxkm.io/storybook/` |

`pnpm dev`와 `pnpm dev:all`은 시작 시 localhost와 이 기기의 LAN IP를 함께 출력합니다. 네트워크 주소는 실행할 때마다 달라지므로, 아래는 형식 예시입니다.

```Terminal 예시
Storybook  http://localhost:6006  ·  http://<LAN-IP>:6006
Guidebook  http://localhost:6107  ·  http://<LAN-IP>:6107
```

같은 Wi‑Fi에 연결된 휴대폰이나 다른 PC에서는 터미널에 출력된 네트워크 주소로 엽니다. 네트워크 주소를 찾지 못하면 localhost로만 접속할 수 있습니다.

모든 프레임워크 앱까지 함께 실행하려면 `pnpm dev:all`을 사용합니다. HTML(`6101`)부터 Astro(`6113`)까지 각 앱의 localhost와 네트워크 주소가 함께 출력됩니다.

Guidebook의 Markdown 원본은 `apps/guidebook/content`에서 관리합니다. 개발과 빌드 명령을 실행하면 Markdown이 페이지별 HTML로 생성되며, 메뉴와 이전·다음 이동도 함께 구성됩니다.

## 개발 환경

이 저장소는 아래 버전을 기준으로 개발합니다. 선언은 각 앱 `package.json`, 실제 해석 버전은 `pnpm-lock.yaml`을 따릅니다.

### 문서와 도구

| 구분 | 패키지 | 버전 |
| --- | --- | --- |
| 패키지 매니저 | pnpm | 10.15.0 |
| Storybook | `storybook`, `@storybook/react-vite` | 10.5.6 |
| Storybook 애드온 | `@storybook/addon-docs`, `@storybook/addon-a11y`, `@storybook/addon-vitest` | 10.5.6 |
| Guidebook | Vite, markdown-it, gray-matter | 8.2.0, 15.0.0, 4.0.3 |
| 번들러 | Vite | 8.2.0 |
| 스타일 | Sass | 1.102.0 |
| 테스트 | Vitest, Playwright | 4.1.11, 1.62.1 |
| 형식 | Prettier, TypeScript | 3.6.2, 6.0.3 |

Storybook Preview는 React 구현을 렌더링하므로 React 19.2.8을 함께 사용합니다.

### 프레임워크 구현

| 환경 | 주요 패키지 | 버전 |
| --- | --- | --- |
| HTML | Vite | 8.2.0 |
| Gulp / Nunjucks | gulp, nunjucks, gulp-nunjucks-render | 5.0.1, 3.2.4, 2.2.3 |
| Vue | vue | 3.5.41 |
| Nuxt | nuxt, vue | 4.5.2, 3.5.41 |
| React | react, react-dom | 19.2.8 |
| Next.js | next, react | 16.3.2, 19.2.8 |
| WebSquare | — | 코드 예제만 제공하며 엔진 버전은 프로젝트에 따릅니다 |

### 컴포넌트 라이브러리

컴포넌트 UI에 직접 연결한 외부 라이브러리는 다음과 같습니다.

| 라이브러리 | 사용처 | 버전 |
| --- | --- | --- |
| Swiper | Carousel (HTML, Gulp, Vue, React) | 12.0.3 |

버전을 바꿀 때는 구현 코드와 함께 이 표와 `pnpm-lock.yaml`을 같이 갱신합니다.

## 빌드와 배포

### Guidebook 단독

```Terminal
pnpm deploy:guidebook
```

Guidebook을 빌드한 뒤 결과물을 `main` 브랜치의 웹 루트에 반영하고 원격 저장소에 푸시합니다.

### Storybook 단독

```Terminal
pnpm deploy:storybook
```

Storybook을 빌드한 뒤 결과물을 `main` 브랜치의 `storybook` 디렉터리에 반영하고 원격 저장소에 푸시합니다.

### 전체 문서

```Terminal
pnpm deploy
```

Guidebook과 Storybook을 함께 빌드한 뒤 전체 결과물을 `main` 브랜치에 반영하고 원격 저장소에 푸시합니다.

배포 명령을 실행하기 전에 현재 `dev` 브랜치의 변경 사항을 먼저 커밋해야 합니다. 빌드만 필요할 때는 각각 `pnpm build:guidebook`, `pnpm build:storybook`, 전체는 `pnpm build`를 사용합니다.

Guidebook의 사이트, Storybook과 이미지 주소는 `apps/guidebook/.env`에서 설정합니다. Storybook은 같은 변수를 `apps/guidebook/.env`와 `apps/storybook/.env`에서 읽습니다. 새 환경을 구성할 때는 `.env.example`을 복사해 사용하며, 환경파일이 없으면 운영 URL을 기본값으로 사용합니다.

로컬 개발에서는 이미지·favicon이 `/images/...`로 열리고, 배포 빌드에서는 `VITE_ASSET_BASE` 또는 `VITE_SITE_URL`이 앞에 붙습니다.

```Environment
VITE_SITE_URL=https://guide.uxkm.io/
VITE_STORYBOOK_URL=https://guide.uxkm.io/storybook/
VITE_ASSET_BASE=https://guide.uxkm.io/
VITE_SOCIAL_IMAGE_URL=https://uxkm.io/_assets/images/_common/og_image.png
```

```Text
build/
├── index.html              # Guidebook
├── components/             # Guidebook 컴포넌트 문서
├── foundations/            # Guidebook 기초 문서
├── guides/                 # Guidebook 활용 가이드
├── assets/                 # Guidebook 빌드 자산
├── images/                 # 공통 이미지
└── storybook/
    ├── index.html          # Storybook
    ├── iframe.html
    └── assets/
```

웹 서버에는 `build` 폴더의 **내용 전체**를 `guide.uxkm.io`의 웹 루트로 배포합니다. `https://guide.uxkm.io/`에서는 Guidebook이 열리고 Storybook은 `https://guide.uxkm.io/storybook/`에서 열립니다. Guidebook 상단과 컴포넌트 표의 Storybook 링크도 배포 환경에서는 이 주소를 사용합니다. 정적 호스팅은 하위 폴더와 쿼리 문자열을 그대로 제공할 수 있어야 합니다.

## 권장 사용 흐름

1. **문제 정의:** 사용자가 완료하려는 작업, 표시할 데이터와 발생 가능한 오류를 먼저 정리합니다.
2. **기초 확인:** 디자인 토큰과 접근성 원칙에서 모든 구현에 공통으로 적용할 기준을 확인합니다.
3. **컴포넌트 선택:** 각 분류의 사용 시점과 주의사항을 비교해 문제에 맞는 컴포넌트를 선택합니다.
4. **동작 검증:** 컴포넌트 링크로 Storybook을 열어 상태, 크기, 변형과 실제 키보드 인터랙션을 검증합니다.
5. **패턴 구성:** 활용 가이드에서 여러 컴포넌트의 상태 전이와 오류 복구를 확인합니다.
6. **프레임워크 구현:** 공통 계약을 확인한 뒤 프로젝트 스택에 맞는 Gulp, Vue, React, Svelte, SolidJS, Qwik, Remix, Angular, Astro, WebSquare 문법을 확인합니다.
7. **완료 검수:** 정상 상태뿐 아니라 로딩, 빈 상태, 오류, 작은 화면과 키보드 사용까지 확인합니다.

## 컴포넌트 구성

| 분류 | 수 | 주요 범위 |
| --- | ---: | --- |
| 기본 요소 | 4 | Button, Icon, Link, Typography |
| 레이아웃 | 5 | Container, Flex, Grid, Space, Divider |
| 폼 | 11 | Form Layout, Input, Textarea, Select, Checkbox, Radio, Switch, Slider, DatePicker, Rate, Upload |
| 네비게이션 | 7 | Navbar, Menu, Breadcrumb, Tabs, Pagination, Steps, Dropdown |
| 데이터 표시 | 10 | Avatar, Badge, Tag, Card, List, Table, Stat, Timeline, Tree, Calendar |
| 피드백 | 10 | Alert, Snackbar, Modal, Drawer, Popover, Tooltip, Progress, Spin, Skeleton, Empty |
| 기타 | 5 | Accordion, Collapse, Carousel, Affix, BackTop |

표의 컴포넌트명을 클릭하면 해당 Storybook 문서가 새 창에서 열립니다. 어떤 항목을 선택해야 할지 모호하면 먼저 데이터의 구조와 사용자의 행동을 기준으로 분류를 선택합니다. 예를 들어 값을 받는 기능은 **폼**, 현재 위치나 목적지 이동은 **네비게이션**, 처리 결과와 로딩은 **피드백**에서 확인합니다.

## 문서 구성

<div class="feature-grid">
  <a class="feature-card" href="foundations/design-tokens/index.html" data-guide-path="foundations/design-tokens/index.html"><strong>01 · 기초</strong><p>일관된 UI를 위한 공통 토큰과 접근성 기준</p></a>
  <a class="feature-card" href="components/basic/index.html" data-guide-path="components/basic/index.html"><strong>02 · 컴포넌트</strong><p>52개 컴포넌트의 역할과 선택 기준</p></a>
  <a class="feature-card" href="guides/patterns/index.html" data-guide-path="guides/patterns/index.html"><strong>03 · 활용 가이드</strong><p>컴포넌트 조합과 작성 지침</p></a>
  <a class="feature-card" href="guides/frameworks/index.html" data-guide-path="guides/frameworks/index.html"><strong>04 · 프레임워크</strong><p>Gulp, Vue, React, Svelte, SolidJS, Qwik, Remix, Angular, Astro, WebSquare 문법</p></a>
</div>

## 문서 활용 기준

- 새 화면을 설계할 때는 개별 컴포넌트보다 사용자 흐름과 필요한 상태를 먼저 정의합니다.
- 컴포넌트를 구현할 때는 Guidebook의 선택·접근성 기준과 Storybook의 API·동작을 함께 확인합니다.
- 검수할 때는 예시 데이터만 보지 않고 긴 텍스트, 빈 값, 오류, 권한 제한과 작은 화면을 포함합니다.
- 새로운 패턴이나 API가 추가되면 구현 코드와 함께 Markdown 설명과 Storybook 예제를 갱신합니다.
