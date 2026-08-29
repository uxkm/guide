---
id: solid-signals-effects
group: 프레임워크
parent: framework-solid
path: guides/frameworks/solid/signals-effects/
label: Signals와 Effects
title: SolidJS Signals와 Effects
eyebrow: SolidJS · Reactivity
lead: createSignal과 createMemo를 중심으로 화면 state를 선언하고 createEffect로 외부 동작을 연결합니다.
order: 83
---

## createSignal

```jsx
import { createSignal } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button type="button" onClick={() => setCount((value) => value + 1)}>
      {count()}회
    </button>
  );
}
```

signal은 getter `count()`와 setter `setCount` 쌍으로 동작합니다. template과 JSX expression 안에서 getter를 호출해야 반응성이 연결됩니다.

## createMemo

파생 값은 별도 signal로 중복 저장하지 않고 `createMemo`로 계산합니다.

```jsx
import { createMemo, createSignal } from 'solid-js';

const [keyword, setKeyword] = createSignal('');
const [items, setItems] = createSignal([{ id: 1, label: 'Solid' }]);
const filteredItems = createMemo(() =>
  items().filter((item) => item.label.includes(keyword())),
);
```

memo getter는 side effect 없이 값을 반환해야 합니다.

## createEffect

`createEffect`는 signal 변경에 따라 logging, 저장, 비동기 요청처럼 Solid 바깥의 side effect를 실행할 때 사용합니다.

```jsx
import { createEffect, createSignal, onCleanup } from 'solid-js';

const [keyword, setKeyword] = createSignal('');

createEffect(() => {
  const controller = new AbortController();
  search(keyword(), { signal: controller.signal });
  onCleanup(() => controller.abort());
});
```

template에 표시할 파생 값을 만들기 위해 effect를 사용하지 않습니다. 그 경우에는 memo가 적합합니다.

## 폼 state

Input은 controlled value prop과 `onInput` 또는 `onChange` callback을 제공합니다. signal setter와 연결해 단방향 data flow를 유지합니다.

## 공식 문서

- [Solid Signals](https://docs.solidjs.com/concepts/signals)
- [Solid Effects](https://docs.solidjs.com/concepts/effects)
