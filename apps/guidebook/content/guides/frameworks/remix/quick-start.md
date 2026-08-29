---
id: remix-quick-start
group: 프레임워크
parent: framework-remix
path: guides/frameworks/remix/quick-start/
label: 빠른 시작
title: Remix 빠른 시작
eyebrow: Remix · Quick Start
lead: Remix application을 실행하고 route module에서 React component를 사용합니다.
order: 101
---

## 실행 환경

이 저장소의 Remix 앱은 React 19와 Remix를 사용합니다. workspace root에서 다음 명령을 실행하면 공통 style과 asset을 준비하고 개발 서버를 엽니다.

```bash
pnpm install
pnpm dev:remix
```

새 Remix project를 시작할 때는 `npx create-remix@latest`로 template을 선택할 수 있습니다. 기존 workspace에서는 `@uxkm/react` 재사용 구성을 유지합니다.

## 첫 route module

```jsx
import { useState } from 'react';
import Button from '@uxkm/react/button';

export default function SaveRoute() {
  const [saved, setSaved] = useState(false);

  return (
    <>
      <Button variant="filled" onClick={() => setSaved(true)}>
        저장
      </Button>
      {saved && <p role="status">저장했습니다.</p>}
    </>
  );
}
```

Remix route default export는 React component입니다. component import 경로는 React 앱과 동일합니다.

## 공통 자산 연결

```jsx
// app/root.jsx
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { initInteractions } from '@uxkm/interactions';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    initInteractions();
  }, []);

  return (
    <html lang="ko">
      <head>
        <Meta />
        <Links />
        <link rel="stylesheet" href="/styles/uxkm.css" />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
```

`pnpm build:shared`로 생성된 `uxkm.css`와 `images`가 `public`에 반영되어 있는지 확인합니다.

## 공식 문서

- [Remix Quick Start](https://remix.run/docs/en/main/start/quickstart)
