---
id: framework-react
group: 프레임워크
path: guides/frameworks/react/
label: React
title: React
eyebrow: Frameworks
lead: React 19 공식 학습 문서의 흐름에 따라 UXKM 컴포넌트 구현 문법을 확인합니다.
order: 50
---

이 저장소는 React 19와 함수 컴포넌트를 사용합니다. 루트에서 `pnpm dev:react`를 실행하면 6104 포트에 개발 서버를 엽니다.

## React란?

React는 component를 조합해 사용자 interface를 만드는 JavaScript library입니다. 각 component는 props와 state를 바탕으로 JSX를 반환하며, state가 변경되면 React가 다음 UI 결과를 계산해 화면을 갱신합니다. 작은 button부터 page 전체까지 같은 component model로 구성할 수 있습니다.

## 주요 특징

- markup과 rendering logic을 함께 표현하는 JSX
- props를 통한 단방향 data 전달과 component 합성
- `useState`를 비롯한 Hook 기반 상태와 lifecycle logic
- JavaScript 조건문과 배열 method를 그대로 사용하는 rendering 문법
- client application과 server framework에서 재사용할 수 있는 UI model

## UXKM에서의 역할

`@uxkm/react`는 UXKM component를 React props, callback event와 `children` API로 제공합니다. controlled·uncontrolled 입력 정책을 구분하면서 동일한 DOM과 접근성 결과를 유지합니다. Next.js에서는 표시 전용 component와 client 상호작용 경계를 나눠 같은 구현을 재사용합니다.

## 문서 구성

| 메뉴 | 내용 |
| --- | --- |
| [빠르게 시작하기](quick-start/index.html) | component, JSX, 조건·목록과 event의 전체 흐름 |
| [UI 표현](jsx-components/index.html) | JSX, component, props와 UI tree |
| [조건과 목록](rendering/index.html) | 조건부 렌더링, 배열 렌더링과 key |
| [상호작용](state-events/index.html) | 이벤트 처리, `useState`와 렌더링 과정 |
| [State 관리](managing-state/index.html) | state 구조, reducer, context와 보존 규칙 |
| [탈출구](escape-hatches/index.html) | ref, effect와 외부 시스템 동기화 |
| [React로 사고하기](thinking-in-react/index.html) | 화면 분해와 단방향 데이터 흐름 |

## UXKM 사용 시작

```jsx
import Button from '@uxkm/react/button';

export default function SaveButton() {
  return <Button variant="filled">저장</Button>;
}
```

Next.js에서도 `@uxkm/react/*` export를 재사용합니다. 상태, event handler, effect가 필요한 UI는 Client Component 경계 안에서 사용합니다.

## 공식 문서

- [React 한국어 빠른 시작](https://ko.react.dev/learn)
- [React 한국어 참고서](https://ko.react.dev/reference/react)
