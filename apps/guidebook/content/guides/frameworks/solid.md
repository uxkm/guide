---
id: framework-solid
group: 프레임워크
path: guides/frameworks/solid/
label: SolidJS
title: SolidJS
eyebrow: Frameworks
lead: Solid 공식 학습 흐름에 따라 컴포넌트 구현 문법을 확인합니다.
order: 80
---

SolidJS는 fine-grained reactivity로 DOM을 갱신하는 UI library입니다. Vite와 함께 사용하며, workspace root에서 `pnpm dev:solid`를 실행하면 공통 style과 asset을 준비한 뒤 개발 서버를 엽니다.

## SolidJS란?

SolidJS는 JSX로 UI를 표현하고 signal 기반 reactivity로 필요한 부분만 갱신합니다. React와 비슷한 문법을 쓰지만 virtual DOM diff 없이 subscription model로 동작합니다. SolidStart는 routing, SSR, server function을 제공하는 meta framework입니다.

## 주요 특징

- JSX와 함수 component
- `createSignal`, `createMemo`, `createEffect` 기반 reactivity
- props는 getter로 전달되어 반응성을 유지
- `children`과 render prop을 이용한 합성
- SolidStart의 파일 기반 routing과 server load

## 역할

`@uxkm/solid`는 component를 Solid props, callback event와 `children` API로 제공합니다. controlled·uncontrolled 입력 정책을 구분하면서 동일한 DOM과 접근성 결과를 유지합니다. SolidStart에서는 표시 전용 component와 client 상호작용 경계를 나눠 같은 구현을 재사용합니다.

## 문서 구성

| 메뉴 | 내용 |
| --- | --- |
| [빠른 시작](quick-start/index.html) | 프로젝트 실행과 component 연결 |
| [UI 표현](jsx-components/index.html) | JSX, component, props와 UI tree |
| [Signals와 Effects](signals-effects/index.html) | signal, memo, effect와 폼 state |
| [컴포넌트 심화](components/index.html) | props, children, 이벤트와 사용법 |
| [페이지와 라우팅](pages-routing/index.html) | Solid Router와 SolidStart 파일 기반 route |
| [베스트 프랙티스](best-practices/index.html) | 배포, 성능, 접근성과 보안 |

## 사용 시작

```jsx
import Button from '@uxkm/solid/button';

export default function SaveButton() {
  return <Button variant="filled">저장</Button>;
}
```

SolidStart에서도 `@uxkm/solid/*` export를 재사용합니다. 상호작용이 필요한 UI는 client boundary 안에서 사용합니다.

## 공식 문서

- [Solid 튜토리얼](https://docs.solidjs.com/quick-start)
- [SolidStart 문서](https://docs.solidjs.com/solid-start)
