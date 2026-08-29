---
id: astro-pages-routing
group: 프레임워크
parent: framework-astro
path: guides/frameworks/astro/pages-routing/
label: 페이지와 라우팅
title: Astro 페이지 라우팅
eyebrow: Astro · Routing
lead: 기본 요소와 레이아웃 UI 페이지를 파일 기반 routing과 layout으로 구성합니다.
order: 122
---

## 만들 경로

| UI 페이지 | Astro 경로 | 포함할 내용 |
| --- | --- | --- |
| 기본 요소 | `/components/basic` | Button, Icon, Link, Typography의 실제 조합과 상태 |
| 레이아웃 | `/components/layout` | Container, Divider, Flex, Grid, Space의 반응형 조합 |

## 파일 기반 Route

Astro는 `src/pages` 아래 파일 경로를 기준으로 route를 생성합니다.

```text
apps/astro/src/pages/
└── components/
    ├── basic.astro    → /components/basic
    └── layout.astro   → /components/layout
```

```astro
---
// src/pages/components/basic.astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import BasicDemo from '../../components/BasicDemo.jsx';
---

<BaseLayout title="기본 요소">
  <main class="guide_content">
    <h1>기본 요소</h1>
    <BasicDemo client:load />
  </main>
</BaseLayout>
```

정적 heading과 navigation은 `.astro` markup으로 작성하고, component demo는 island wrapper에 위임합니다.

## Layout

```astro
---
// src/layouts/ComponentsLayout.astro
import BaseLayout from './BaseLayout.astro';

const { title } = Astro.props;
const pathname = Astro.url.pathname;
---

<BaseLayout title={title}>
  <nav aria-label="컴포넌트 분류">
    <a href="/components/basic" aria-current={pathname === '/components/basic' ? 'page' : undefined}>
      기본 요소
    </a>
    <a href="/components/layout" aria-current={pathname === '/components/layout' ? 'page' : undefined}>
      레이아웃
    </a>
  </nav>
  <slot />
</BaseLayout>
```

## 확인 순서

1. 두 URL을 주소창에서 직접 열어 정상 응답을 확인합니다.
2. navigation link 이동이 기대대로 동작하는지 확인합니다.
3. island가 없는 정적 영역은 JavaScript 없이도 읽을 수 있는지 확인합니다.
4. island hydration 이후 상호작용이 정상인지 확인합니다.

## 공식 문서

- [Astro Pages](https://docs.astro.build/en/basics/astro-pages/)
- [Astro Layouts](https://docs.astro.build/en/basics/layouts/)
