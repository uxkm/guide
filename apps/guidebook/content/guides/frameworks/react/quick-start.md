---
id: react-quick-start
group: 프레임워크
parent: framework-react
path: guides/frameworks/react/quick-start/
label: 빠르게 시작하기
title: React 빠르게 시작하기
eyebrow: React · Quick Start
lead: component, JSX, 조건·목록 rendering, event와 state의 전체 흐름을 빠르게 익힙니다.
order: 51
---

## React 실행

이 저장소는 React 19와 Vite를 사용합니다. root에서 다음 명령을 실행하면 6104 port에 개발 서버를 엽니다.

```bash
pnpm install
pnpm dev:react
```

## 첫 component

React component는 대문자로 시작하는 JavaScript 함수이며 JSX를 반환합니다. component는 package subpath에서 가져옵니다.

```jsx
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

## 핵심 규칙

- component는 JSX tag 하나 또는 Fragment로 감싼 결과를 반환합니다.
- 동적인 값은 `{}` 안에 JavaScript expression으로 작성합니다.
- 목록은 안정적인 `key`를 사용합니다.
- event handler는 호출 결과가 아니라 함수를 전달합니다.
- 화면에 기억할 값은 local variable이 아니라 state로 둡니다.

## 공식 문서

- [React 빠르게 시작하기](https://ko.react.dev/learn)

