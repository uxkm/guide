---
id: qwik-reactivity
group: 프레임워크
parent: framework-qwik
path: guides/frameworks/qwik/reactivity/
label: 상태와 반응성
title: Qwik 반응형 상태
eyebrow: Qwik · Reactivity
lead: useSignal과 useStore를 중심으로 화면 state를 선언하고 task로 외부 동작을 연결합니다.
order: 93
---

## useSignal

```tsx
import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const count = useSignal(0);

  return (
    <button type="button" onClick$={() => count.value++}>
      {count.value}회
    </button>
  );
});
```

signal 값은 `.value`로 읽고 씁니다. primitive state에는 `useSignal`이 적합합니다.

## useStore

객체 형태의 state는 `useStore`로 관리합니다.

```tsx
import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const form = useStore({ email: '', error: '' });

  return (
    <input
      value={form.email}
      onInput$={(event, element) => {
        form.email = element.value;
      }}
      aria-invalid={Boolean(form.error)}
    />
  );
});
```

중첩 객체를 자주 갱신할 때는 store가 더 적합합니다.

## useTask$와 useVisibleTask$

서버에서 실행할 수 없는 DOM 조작이나 `@uxkm/interactions` 초기화는 `useVisibleTask$`에서 수행합니다.

```tsx
import { useVisibleTask$ } from '@builder.io/qwik';
import { initInteractions } from '@uxkm/interactions';

useVisibleTask$(() => {
  initInteractions();
});
```

데이터 fetch는 route loader를 우선 검토하고, component task는 보조적으로 사용합니다.

## Input 연결

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import Input from '@uxkm/qwik/input';

export default component$(() => {
  const email = useSignal('');

  return (
    <Input
      value={email.value}
      onInput$={(_, el) => (email.value = el.value)}
      type="email"
      clearable
    />
  );
});
```

## 공식 문서

- [Qwik State](https://qwik.dev/docs/components/state/)
- [Qwik Tasks](https://qwik.dev/docs/components/tasks/)
