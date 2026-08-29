---
id: framework-remix
group: 프레임워크
path: guides/frameworks/remix/
label: Remix
title: Remix
eyebrow: Frameworks
lead: Remix 공식 학습 흐름에 따라 React 컴포넌트를 route와 data API에 연결합니다.
order: 100
---

Remix는 web standard를 중심으로 route, loader, action을 제공하는 full-stack React framework입니다. workspace root에서 `pnpm dev:remix`를 실행하면 공통 style과 asset을 준비한 뒤 개발 서버를 엽니다.

## Remix란?

Remix는 URL 기반 routing과 server·client data flow를 일관되게 다룹니다. 각 route는 UI component와 함께 loader로 data를 읽고 action으로 mutation을 처리합니다. React Router v7과 통합되어 있으며, form과 HTTP semantics를 우선합니다.

## 주요 특징

- 파일 기반 route module
- `loader`와 `action`을 통한 server data API
- `<Form>`, `useFetcher` 기반 mutation
- nested route와 error boundary
- progressive enhancement를 전제로 한 form 처리

## 역할

Remix는 `@uxkm/react`를 재사용합니다. UI component는 React 구현과 동일하고, route module에서 layout, navigation, loader·action만 Remix 방식으로 구성합니다. Server Component 경계 대신 loader·action과 client hydration 시점을 기준으로 상호작용을 검증합니다.

## 문서 구성

| 메뉴 | 내용 |
| --- | --- |
| [빠른 시작](quick-start/index.html) | 프로젝트 실행과 React component 연결 |
| [UI 표현](jsx-components/index.html) | JSX, component, props와 사용법 |
| [페이지와 라우팅](pages-routing/index.html) | route module과 nested layout |
| [Loader와 Action](loaders-actions/index.html) | data loading, form action과 오류 처리 |
| [베스트 프랙티스](best-practices/index.html) | 배포, 성능, 접근성과 보안 |

## 사용 시작

```jsx
import Button from '@uxkm/react/button';

export default function SaveButton() {
  return <Button variant="filled">저장</Button>;
}
```

Remix route는 React component를 그대로 렌더링합니다. 상태, event handler, browser API가 필요한 UI는 client에서 hydration된 뒤 동작하는지 확인합니다.

## 공식 문서

- [Remix Docs](https://remix.run/docs)
- [React Router Framework](https://reactrouter.com/start/framework)
