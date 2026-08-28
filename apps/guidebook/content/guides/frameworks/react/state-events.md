---
id: react-state-events
group: 프레임워크
parent: framework-react
path: guides/frameworks/react/state-events/
label: 상호작용
title: React 상호작용
eyebrow: React · Adding Interactivity
lead: 이벤트 handler와 useState를 연결하고 UXKM 입력을 controlled 방식으로 관리합니다.
order: 54
---

## 이벤트 처리

```jsx
function SaveButton() {
  function handleClick(event) {
    event.preventDefault();
    save();
  }

  return <button type="button" onClick={handleClick}>저장</button>;
}
```

`onClick={handleClick}`처럼 함수를 전달합니다. `onClick={handleClick()}`은 렌더링 중 즉시 함수를 호출하므로 event handler가 아닙니다.

## useState

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      {count}회
    </button>
  );
}
```

이전 state를 기준으로 갱신하면 updater 함수를 사용합니다. 객체와 배열 state는 직접 바꾸지 않고 새 값을 만들어 setter에 전달합니다.

## Controlled 폼

```jsx
import { useState } from 'react';
import Button from '@uxkm/react/button';
import Input from '@uxkm/react/input';

export default function EmailForm() {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // email을 검증한 뒤 저장합니다.
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">이메일</label>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        clearable
        required
      />
      <Button type="submit">저장</Button>
    </form>
  );
}
```

UXKM Input은 `value`와 `onChange`를 쓰는 controlled 방식과 `defaultValue`를 쓰는 uncontrolled 방식을 지원합니다. 한 instance의 생명주기 중 두 방식을 전환하지 않습니다.

## 공식 문서

- [이벤트에 응답하기](https://ko.react.dev/learn/responding-to-events)
- [State: 컴포넌트의 기억 저장소](https://ko.react.dev/learn/state-a-components-memory)
- [State를 사용해 입력에 반응하기](https://ko.react.dev/learn/reacting-to-input-with-state)
