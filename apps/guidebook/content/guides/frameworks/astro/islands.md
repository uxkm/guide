---
id: astro-islands
group: 프레임워크
parent: framework-astro
path: guides/frameworks/astro/islands/
label: Islands
title: Astro Islands
eyebrow: Astro · Islands
lead: client directive로 component의 hydration 시점을 제어합니다.
order: 123
---

## Island란?

Astro page의 대부분은 정적 HTML로 전송되고, 상호작용이 필요한 component만 client JavaScript로 hydration됩니다. Button, Input, Modal처럼 event와 state가 있는 UI는 island로 분리합니다.

## client directive

```astro
---
import Button from '@uxkm/react/button';
import ModalDemo from '../components/ModalDemo.jsx';
---

<!-- 페이지 로드 직후 hydration -->
<Button client:load variant="filled">저장</Button>

<!-- 뷰포트에 보일 때 hydration -->
<ModalDemo client:visible />

<!-- idle 시점에 hydration -->
<HeavyTable client:idle />
```

| Directive | 사용 시점 |
| --- | --- |
| `client:load` | 즉시 상호작용이 필요한 primary action |
| `client:visible` | 스크롤 후 보일 때 로드해도 되는 무거운 UI |
| `client:idle` | 초기 로딩 이후 여유가 있을 때 로드 |
| `client:media` | 특정 media query일 때만 로드 |

## 정적 vs Island 경계

- heading, navigation link, 설명 문단은 `.astro` markup에 둡니다.
- form, modal, dropdown, snackbar는 island wrapper 안에 둡니다.
- 같은 page에 여러 island가 있어도 각각 독립적으로 hydration됩니다.

## Interactions 초기화

```jsx
import { useEffect } from 'react';
import { initInteractions } from '@uxkm/interactions';

export function InteractionRoot({ children }) {
  useEffect(() => {
    initInteractions();
  }, []);

  return children;
}
```

각 island root 또는 page 공통 wrapper에서 `initInteractions()`를 한 번 호출합니다.

## 공식 문서

- [Astro Client directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)
- [Astro Framework components](https://docs.astro.build/en/guides/framework-components/)
