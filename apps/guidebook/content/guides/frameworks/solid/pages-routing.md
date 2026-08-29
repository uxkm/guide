---
id: solid-pages-routing
group: 프레임워크
parent: framework-solid
path: guides/frameworks/solid/pages-routing/
label: 페이지와 라우팅
title: SolidJS와 SolidStart 페이지 라우팅
eyebrow: SolidJS · SolidStart · Routing
lead: 기본 요소와 레이아웃 UI 페이지를 만들고 Solid Router 또는 SolidStart 파일 기반 라우팅으로 연결합니다.
order: 85
---

## 만들 경로

```text
/components/basic   Button · Icon · Link · Typography
/components/layout  Container · Divider · Flex · Grid · Space
```

page는 component를 import해 업무 화면의 heading, navigation과 여러 상태를 조합하는 route 단위 UI입니다. 재사용 component source는 `src/components` 또는 `@uxkm/solid/*`에 두고 page 안에 복제하지 않습니다.

## Solid Vite: Router 연결

Solid 자체는 route 설정을 제공하지 않습니다. `@solidjs/router`를 사용하는 경우 URL과 page component를 route 설정에 직접 연결합니다.

```text
apps/solid/src/
├── pages/
│   ├── BasicPage.jsx
│   └── LayoutPage.jsx
├── App.jsx
└── index.jsx
```

```jsx
import { Route, Router } from '@solidjs/router';
import BasicPage from './pages/BasicPage';
import LayoutPage from './pages/LayoutPage';

export default function App() {
  return (
    <Router>
      <Route path="/components/basic" component={BasicPage} />
      <Route path="/components/layout" component={LayoutPage} />
    </Router>
  );
}
```

내부 이동에는 `<A href="/components/basic">`를 사용하고 hosting server의 SPA fallback을 설정합니다.

## SolidStart: 파일 기반 Route

SolidStart는 `src/routes` 아래 파일 경로를 기준으로 route를 생성합니다.

```text
apps/solidstart/src/routes/
└── components/
    ├── basic.tsx    → /components/basic
    └── layout.tsx   → /components/layout
```

```tsx
// src/routes/components/basic.tsx
import Button from '@uxkm/solid/button';

export default function BasicPage() {
  return <Button variant="filled">저장</Button>;
}
```

SSR 환경에서는 server render 결과와 hydration 뒤 DOM이 같은지 확인합니다.

## 확인 순서

1. `/components/basic`과 `/components/layout`을 직접 열어 404가 아닌지 확인합니다.
2. client navigation과 새로고침 결과가 같은지 확인합니다.
3. navigation 현재 항목, document title과 route 이동 focus를 확인합니다.
4. loading·error state가 route 전환 후에도 올바르게 정리되는지 확인합니다.

## 공식 문서

- [Solid Router](https://docs.solidjs.com/solid-router)
- [SolidStart Routing](https://docs.solidjs.com/solid-start/building-your-application/routing)
