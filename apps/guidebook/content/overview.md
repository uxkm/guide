---
id: overview
group: 가이드북
path: ""
label: 소개
title: Guidebook
titleLogo: true
eyebrow: UXKM Design System
lead: UXKM의 52개 UI 컴포넌트를 일관되게 선택하고 조합하며 구현하기 위한 실무 가이드입니다.
order: 1
---

<div class="callout"><span class="callout-icon">i</span><p>가이드북에서 사용 원칙을 이해하고, 스토리북에서 실제 동작과 프레임워크별 구현 코드를 확인합니다.</p></div>

UXKM Guidebook은 컴포넌트의 모양을 보여주는 목록이 아니라 어떤 문제에 어떤 컴포넌트를 선택하고, 여러 상태와 접근성을 어떻게 구현할지 설명하는 문서입니다. 처음 사용하는 사람은 기초부터 순서대로 읽고, 익숙한 사용자는 왼쪽 메뉴에서 필요한 컴포넌트 분류나 활용 가이드로 바로 이동할 수 있습니다.

## 문서의 역할

| 문서 | 주요 역할 | 확인하는 질문 |
| --- | --- | --- |
| Guidebook | 컴포넌트 선택 기준, 접근성, 조합 패턴과 구현 원칙 설명 | 왜 이 컴포넌트를 사용하며 어떤 상태와 예외를 고려해야 하는가? |
| Storybook | 컴포넌트 API, 상태, 실제 동작과 프레임워크별 코드 제공 | 실제로 어떻게 보이고 동작하며 코드에서 어떤 API를 사용하는가? |

가이드북과 스토리북은 같은 컴포넌트 분류를 사용합니다. 가이드북의 `컴포넌트` 메뉴에서 사용 시점과 주의사항을 확인한 뒤 각 컴포넌트 링크를 열어 Storybook의 상태, 조작 방법과 프레임워크별 구현 예제를 검증합니다. 디자인이나 개발 중 판단 기준이 바뀌면 코드만 수정하지 않고 두 문서의 설명과 예제를 함께 갱신합니다.

## 시작하기

```Terminal
pnpm dev
```

명령을 실행하면 두 문서 서버가 함께 시작됩니다.

| 문서 | 로컬 개발 주소 | 운영 주소 |
| --- | --- | --- |
| Guidebook | `http://localhost:6107/` | `https://guide.uxkm.io/` |
| Storybook | `http://localhost:6006/` | `https://guide.uxkm.io/storybook/` |

모든 프레임워크 앱까지 함께 실행하려면 `pnpm dev:all`을 사용합니다.

Guidebook의 Markdown 원본은 `apps/guidebook/content`에서 관리합니다. 개발과 빌드 명령을 실행하면 Markdown이 페이지별 HTML로 생성되며, 메뉴와 이전·다음 이동도 함께 구성됩니다.

## 빌드와 배포

```Terminal
pnpm build
```

명령을 실행하면 Guidebook과 Storybook을 정적 파일로 빌드하고 하나의 `build` 폴더에 배포 가능한 구조로 수집합니다.

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
5. **패턴 구성:** 활용 가이드에서 여러 컴포넌트의 상태 전이, 오류 복구와 프레임워크별 구현 차이를 확인합니다.
6. **완료 검수:** 정상 상태뿐 아니라 로딩, 빈 상태, 오류, 작은 화면과 키보드 사용까지 확인합니다.

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
  <a class="feature-card" href="guides/patterns/index.html" data-guide-path="guides/patterns/index.html"><strong>03 · 활용 가이드</strong><p>컴포넌트 조합, 작성 지침과 구현 비교</p></a>
</div>

## 문서 활용 기준

- 새 화면을 설계할 때는 개별 컴포넌트보다 사용자 흐름과 필요한 상태를 먼저 정의합니다.
- 컴포넌트를 구현할 때는 Guidebook의 선택·접근성 기준과 Storybook의 API·동작을 함께 확인합니다.
- 검수할 때는 예시 데이터만 보지 않고 긴 텍스트, 빈 값, 오류, 권한 제한과 작은 화면을 포함합니다.
- 새로운 패턴이나 API가 추가되면 구현 코드와 함께 Markdown 설명과 Storybook 예제를 갱신합니다.
