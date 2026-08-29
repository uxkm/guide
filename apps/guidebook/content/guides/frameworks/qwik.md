---
id: framework-qwik
group: 프레임워크
path: guides/frameworks/qwik/
label: Qwik
title: Qwik
eyebrow: Frameworks
lead: Qwik 공식 학습 흐름에 따라 컴포넌트 구현 문법을 확인합니다.
order: 90
---

Qwik는 resumability로 초기 로딩을 줄이는 UI framework입니다. Qwik City와 Vite를 함께 사용하며, workspace root에서 `pnpm dev:qwik`을 실행하면 공통 style과 asset을 준비한 뒤 개발 서버를 엽니다.

## Qwik란?

Qwik는 component를 lazy hydration하는 방식으로 동작합니다. 서버에서 HTML을 먼저 보내고, 사용자 상호작용이 필요한 시점에만 해당 component의 JavaScript를 로드합니다. Qwik City는 routing, SSR, endpoint를 제공하는 application framework입니다.

## 주요 특징

- `$` 접두사가 붙은 Qwik component
- `useSignal`, `useStore` 기반 reactivity
- 이벤트 handler의 직렬화 가능한 경계
- Qwik City의 파일 기반 routing과 loader
- resumability를 위한 optimizer와 code splitting

## 역할

`@uxkm/qwik`는 component를 Qwik props와 callback event API로 제공합니다. DOM 직접 조작이 필요한 `@uxkm/interactions` 동작은 client에서 초기화 시점을 맞춰 검증합니다. Qwik City는 동일한 component를 재사용하되 SSR과 resumability 결과도 함께 확인합니다.

## 문서 구성

| 메뉴 | 내용 |
| --- | --- |
| [빠른 시작](quick-start/index.html) | 프로젝트 실행과 component 연결 |
| [컴포넌트](components/index.html) | `$` component, props, 이벤트와 slot |
| [상태와 반응성](reactivity/index.html) | `useSignal`, `useStore`와 폼 state |
| [페이지와 라우팅](pages-routing/index.html) | Qwik City 파일 기반 route와 loader |
| [베스트 프랙티스](best-practices/index.html) | hydration, 성능, 접근성과 보안 |

## 사용 시작

```tsx
import { component$ } from '@builder.io/qwik';
import Button from '@uxkm/qwik/button';

export default component$(() => {
  return <Button variant="filled">저장</Button>;
});
```

Qwik City에서도 `@uxkm/qwik/*` export를 재사용합니다. 상호작용이 필요한 UI는 `useVisibleTask$` 또는 적절한 client hook 경계에서 초기화합니다.

## 공식 문서

- [Qwik 시작하기](https://qwik.dev/docs/getting-started/)
- [Qwik City Routing](https://qwik.dev/docs/routing/)
