---
id: remix-jsx-components
group: 프레임워크
parent: framework-remix
path: guides/frameworks/remix/jsx-components/
label: UI 표현
title: Remix UI 표현
eyebrow: Remix · JSX
lead: JSX, component, props와 React component로 UI tree를 구성합니다.
order: 102
---

Remix route는 React component를 렌더링하므로 UI 표현 규칙은 React 구현과 동일합니다. 차이는 data loading과 mutation을 route module의 `loader`·`action`으로 분리한다는 점입니다.

## Component

```jsx
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

## Props와 이벤트

```jsx
import { useState } from 'react';
import Input from '@uxkm/react/input';
import Button from '@uxkm/react/button';

export default function EmailForm() {
  const [email, setEmail] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="email">이메일</label>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        clearable
      />
      <Button type="submit">저장</Button>
    </form>
  );
}
```

## React 구현과의 관계

- component API, variant, 접근성 계약은 `@uxkm/react` 문서와 Storybook React 탭을 기준으로 합니다.
- Remix 전용 작업은 route layout, navigation link, loader·action 배치에 집중합니다.

## 공식 문서

- [React UI 표현](../../react/jsx-components/index.html)
- [Remix Route Module](https://remix.run/docs/en/main/discussion/routes)
