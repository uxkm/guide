---
id: remix-pages-routing
group: 프레임워크
parent: framework-remix
path: guides/frameworks/remix/pages-routing/
label: 페이지와 라우팅
title: Remix 페이지 라우팅
eyebrow: Remix · Routing
lead: 기본 요소와 레이아웃 UI 페이지를 route module과 nested layout으로 구성합니다.
order: 103
---

## 만들 경로

```text
/components/basic   Button · Icon · Link · Typography
/components/layout  Container · Divider · Flex · Grid · Space
```

page는 `@uxkm/react/*` component를 import해 heading, navigation과 여러 상태를 조합하는 route 단위 UI입니다.

## Route 파일 구조

Remix는 `app/routes` 아래 파일 경로를 기준으로 URL을 생성합니다.

```text
apps/remix/app/routes/
├── _index.jsx
└── components/
    ├── _layout.jsx          공통 navigation layout
    ├── basic.jsx            → /components/basic
    └── layout.jsx           → /components/layout
```

```jsx
// app/routes/components/basic.jsx
import Button from '@uxkm/react/button';

export default function BasicPage() {
  return <Button variant="filled">저장</Button>;
}
```

## Nested Layout

```jsx
// app/routes/components/_layout.jsx
import { NavLink, Outlet } from '@remix-run/react';

export default function ComponentsLayout() {
  return (
    <>
      <nav aria-label="컴포넌트 분류">
        <NavLink to="/components/basic">기본 요소</NavLink>
        <NavLink to="/components/layout">레이아웃</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
```

`NavLink`는 현재 route에 `aria-current`를 자동으로 연결합니다.

## Next.js와의 차이

Next.js App Router는 Server Component를 기본으로 사용합니다. Remix route module은 React component와 loader·action을 한 module에서 관리하며, React component 재사용 방식은 동일합니다.

## 확인 순서

1. `/components/basic`과 `/components/layout`을 직접 열어 404가 아닌지 확인합니다.
2. `NavLink` 이동과 새로고침 결과가 같은지 확인합니다.
3. nested layout에 page별 `h1`이 중복되지 않는지 확인합니다.
4. error boundary와 404 route가 기대대로 동작하는지 확인합니다.

## 공식 문서

- [Remix Routing](https://remix.run/docs/en/main/discussion/routes)
- [Remix Layout Routes](https://remix.run/docs/en/main/file-conventions/routes#layout-routes)
