---
id: solid-components
group: 프레임워크
parent: framework-solid
path: guides/frameworks/solid/components/
label: 컴포넌트 심화
title: SolidJS 컴포넌트 심화
eyebrow: SolidJS · Components
lead: props, children, 이벤트와 controlled 입력으로 component 계약을 구성합니다.
order: 84
---

## Props와 이벤트

```jsx
function ActionButton(props) {
  return (
    <button type="button" disabled={props.disabled} onClick={props.onActivate}>
      {props.label}
    </button>
  );
}
```

Props는 부모에서 자식으로 내려오는 읽기 전용 값입니다. 객체나 배열 prop도 자식에서 직접 변경하지 않고 callback을 보내 부모가 갱신하게 합니다.

## Controlled Input

```jsx
import { createSignal } from 'solid-js';
import Input from '@uxkm/solid/input';

export default function EmailField() {
  const [email, setEmail] = createSignal('');

  return (
    <>
      <label for="email">이메일</label>
      <Input
        id="email"
        type="email"
        value={email()}
        onInput={(event) => setEmail(event.currentTarget.value)}
        clearable
      />
    </>
  );
}
```

Input API가 `value`와 `onInput`을 제공하면 위처럼 연결합니다. `onChange`만 제공하는 component는 API 문서를 따릅니다.

## Children

```jsx
import Button from '@uxkm/solid/button';

export default function SaveAction() {
  return (
    <Button variant="filled">
      <span slot="icon-before">
        <SaveIcon />
      </span>
      저장
    </Button>
  );
}
```

named slot contract는 component 문서와 Storybook Solid 탭을 기준으로 맞춥니다.

## 공식 문서

- [Solid Components](https://docs.solidjs.com/concepts/components)
- [Solid Props](https://docs.solidjs.com/concepts/components/props)
