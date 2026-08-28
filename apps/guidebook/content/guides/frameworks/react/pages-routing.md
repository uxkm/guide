---
id: react-pages-routing
group: 프레임워크
parent: framework-react
path: guides/frameworks/react/pages-routing/
label: 페이지와 라우팅
title: React와 Next.js 페이지 라우팅
eyebrow: React · Next.js · Routing
lead: 기본 요소와 레이아웃 UI 페이지를 만들고 React Router에 연결하거나 Next.js App Router로 자동 생성합니다.
order: 55
---

## 만들 경로

```text
/components/basic   Button · Icon · Link · Typography
/components/layout  Container · Divider · Flex · Grid · Space
```

page는 component를 import해 업무 화면의 heading, navigation과 여러 상태를 조합하는 route 단위 UI입니다. 재사용 component source는 `src/components` 또는 `@uxkm/react/*`에 두고 page 안에 복제하지 않습니다.

## React Vite: 페이지 파일 생성

```text
apps/react/src/
├── pages/
│   ├── BasicPage.jsx
│   └── LayoutPage.jsx
├── router/index.jsx
├── App.jsx
└── main.jsx
```

```jsx
// src/pages/BasicPage.jsx
import Button from '@uxkm/react/button';
import { TypoTitle } from '@uxkm/react/typography';

export default function BasicPage() {
  return (
    <main className="guide_content">
      <TypoTitle level={1}>기본 요소</TypoTitle>
      <Button variant="filled">저장</Button>
    </main>
  );
}
```

## React Vite: Router 연결

React 자체는 route 설정을 제공하지 않습니다. SPA router를 사용하는 경우 URL과 page component를 route 설정에 직접 연결합니다. 아래는 React Router Declarative Mode 예시입니다.

```jsx
// src/router/index.jsx
import { Route, Routes } from 'react-router';
import BasicPage from '../pages/BasicPage.jsx';
import LayoutPage from '../pages/LayoutPage.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/components/basic" element={<BasicPage />} />
      <Route path="/components/layout" element={<LayoutPage />} />
    </Routes>
  );
}
```

root에서는 browser history를 관리하는 router로 app을 감쌉니다.

```jsx
// src/main.jsx
import { BrowserRouter } from 'react-router';
import App from './App.jsx';

createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

`App.jsx`가 공통 shell이라면 navigation과 `AppRoutes`를 렌더링합니다. 내부 이동에는 일반 `<a>`보다 router의 `<Link to="/components/basic">`를 사용합니다. History route를 직접 새로고침할 수 있도록 hosting server의 SPA fallback도 설정합니다.

## Next.js: App Router 자동 생성

Next.js App Router는 `app` directory의 folder를 URL segment로 보고 `page.jsx`를 해당 route의 UI로 사용합니다. 별도 `<Routes>`나 route 배열을 작성하지 않습니다.

```text
apps/next/app/
├── layout.jsx
└── components/
    ├── layout.jsx          공통 컴포넌트 분류 layout(선택)
    ├── basic/
    │   └── page.jsx       → /components/basic
    └── layout/
        └── page.jsx       → /components/layout
```

```jsx
// app/components/basic/page.jsx
import Button from '@uxkm/react/button';

export default function BasicPage() {
  return <Button variant="filled">저장</Button>;
}
```

page와 layout은 기본적으로 Server Component입니다. state, event handler, Effect나 browser API가 필요한 page 또는 하위 component에만 파일 첫 줄의 `'use client'`를 추가합니다. 다른 page로 이동할 때는 `next/link`의 `Link`를 사용합니다.

```jsx
import Link from 'next/link';

export default function ComponentsLayout({ children }) {
  return (
    <>
      <nav aria-label="컴포넌트 분류">
        <Link href="/components/basic">기본 요소</Link>
        <Link href="/components/layout">레이아웃</Link>
      </nav>
      {children}
    </>
  );
}
```

## 확인 순서

1. `/components/basic`과 `/components/layout`을 직접 열어 404가 아닌지 확인합니다.
2. client navigation과 새로고침 결과가 같은지 확인합니다.
3. 공통 layout에 page별 `h1`이 중복되지 않는지 확인합니다.
4. Next.js는 Server·Client Component 경계와 serialization 가능한 prop을 확인합니다.
5. navigation 현재 항목, document metadata와 route 이동 focus를 확인합니다.

## 공식 문서

- [React Router Routing](https://reactrouter.com/start/declarative/routing)
- [Next.js App Router: Layouts and Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages)

