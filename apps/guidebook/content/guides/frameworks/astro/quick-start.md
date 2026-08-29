---
id: astro-quick-start
group: 프레임워크
parent: framework-astro
path: guides/frameworks/astro/quick-start/
label: 빠른 시작
title: Astro 빠른 시작
eyebrow: Astro · Quick Start
lead: Astro application을 실행하고 React component를 island로 사용합니다.
order: 121
---

## 실행 환경

이 저장소의 Astro 앱은 Astro와 Vite를 사용합니다. workspace root에서 다음 명령을 실행하면 공통 style과 asset을 준비하고 개발 서버를 엽니다.

```bash
pnpm install
pnpm dev:astro
```

새 Astro project를 시작할 때는 `npm create astro@latest`로 template과 integration을 선택할 수 있습니다. workspace에서는 React 또는 Vue integration 중 하나를 선택해 `@uxkm/react` 또는 `@uxkm/vue`를 재사용합니다.

## Integration 추가

```bash
npx astro add react
# 또는
npx astro add vue
```

`astro.config.mjs`에 integration이 등록되면 package component를 `.astro` page에서 import할 수 있습니다.

## 첫 island

```astro
---
import SaveButton from '../components/SaveButton.jsx';
---

<SaveButton client:load />
```

```jsx
// src/components/SaveButton.jsx
import { useState } from 'react';
import Button from '@uxkm/react/button';

export default function SaveButton() {
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

상호작용이 있는 component는 반드시 `client:*` directive가 붙은 wrapper를 통해 렌더링합니다.

## 공통 자산 연결

```astro
---
// src/layouts/BaseLayout.astro
import '../styles/global.css';
---

<html lang="ko">
  <head>
    <link rel="stylesheet" href="/styles/uxkm.css" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

island wrapper의 `useEffect` 또는 framework 진입점에서 `@uxkm/interactions`의 `initInteractions()`를 호출합니다. `pnpm build:shared`로 생성된 `uxkm.css`와 `images`가 `public`에 반영되어 있는지 확인합니다.

## 공식 문서

- [Astro Install](https://docs.astro.build/en/install-and-setup/)
