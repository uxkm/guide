---
id: qwik-pages-routing
group: 프레임워크
parent: framework-qwik
path: guides/frameworks/qwik/pages-routing/
label: 페이지와 라우팅
title: Qwik City 페이지 라우팅
eyebrow: Qwik · Qwik City · Routing
lead: 기본 요소와 레이아웃 UI 페이지를 만들고 Qwik City 파일 기반 라우팅으로 자동 생성합니다.
order: 94
---

## 만들 경로

| UI 페이지 | Qwik City 경로 | 포함할 내용 |
| --- | --- | --- |
| 기본 요소 | `/components/basic` | Button, Icon, Link, Typography의 실제 조합과 상태 |
| 레이아웃 | `/components/layout` | Container, Divider, Flex, Grid, Space의 반응형 조합 |

## 파일 기반 Route

Qwik City는 `src/routes` 아래 파일 경로를 기준으로 route를 생성합니다.

```text
apps/qwik/src/routes/
└── components/
    ├── layout.tsx
    ├── basic/
    │   └── index.tsx   → /components/basic
    └── layout/
        └── index.tsx   → /components/layout
```

```tsx
// src/routes/components/basic/index.tsx
import { component$ } from '@builder.io/qwik';
import Button from '@uxkm/qwik/button';

export default component$(() => {
  return <Button variant="filled">저장</Button>;
});
```

## Layout과 Navigation

```tsx
// src/routes/components/layout.tsx
import { component$, Slot } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const location = useLocation();

  return (
    <>
      <nav aria-label="컴포넌트 분류">
        <Link
          href="/components/basic"
          aria-current={location.url.pathname === '/components/basic' ? 'page' : undefined}
        >
          기본 요소
        </Link>
        <Link
          href="/components/layout"
          aria-current={location.url.pathname === '/components/layout' ? 'page' : undefined}
        >
          레이아웃
        </Link>
      </nav>
      <Slot />
    </>
  );
});
```

## Route Loader

서버에서 필요한 초기 data는 `routeLoader$`로 가져오고, component는 loader 결과를 props처럼 사용합니다. component 자체의 상호작용 state는 client signal로 유지합니다.

## 확인 순서

1. 두 URL을 주소창에서 직접 열어 정상 응답을 확인합니다.
2. `Link` 이동 시 전체 새로고침 없이 page가 바뀌는지 확인합니다.
3. resumability 이후 `@uxkm/interactions` 동작이 정상인지 확인합니다.
4. route 이동 뒤 document title과 focus 정책을 검토합니다.

## 공식 문서

- [Qwik City Routing](https://qwik.dev/docs/routing/)
- [Qwik Route Loader](https://qwik.dev/docs/route-loader/)
