---
id: svelte-reactivity
group: 프레임워크
parent: framework-svelte
path: guides/frameworks/svelte/reactivity/
label: 상태와 반응성
title: Svelte 반응형 상태
eyebrow: Svelte · Essentials
lead: runes를 중심으로 화면 state를 선언하고 필요한 경우 $effect로 외부 동작을 연결합니다.
order: 73
---

## $state

`$state()`는 template과 함께 갱신되는 값을 만듭니다.

```svelte
<script>
  let count = $state(0);

  function increment() {
    count += 1;
  }
</script>

<button type="button" onclick={increment}>{count}회</button>
```

Svelte 5에서는 component 내부 state에 runes를 사용합니다. 객체와 배열도 반응형으로 추적됩니다.

## $derived

기존 state에서 파생되는 값은 별도 state로 중복 저장하지 않고 `$derived`로 계산합니다.

```svelte
<script>
  let keyword = $state('');
  let items = $state([{ id: 1, label: 'Svelte' }]);
  let filteredItems = $derived(
    items.filter((item) => item.label.includes(keyword)),
  );
</script>
```

derived expression은 side effect 없이 값을 반환해야 합니다.

## $effect

`$effect`는 특정 state가 바뀔 때 logging, 저장, 비동기 요청처럼 Svelte 바깥의 side effect를 실행할 때 사용합니다.

```svelte
<script>
  let keyword = $state('');

  $effect(() => {
    const controller = new AbortController();
    search(keyword, { signal: controller.signal });
    return () => controller.abort();
  });
</script>
```

template에 표시할 파생 값을 만들기 위해 `$effect`를 사용하지 않습니다. 그 경우에는 `$derived`가 적합합니다.

## 상태 변경 원칙

- component prop은 읽기 전용으로 취급하고 부모 state에서 갱신합니다.
- 폼 입력은 `bind:value` 또는 명시적 event handler로 부모 state와 연결합니다.
- 비동기 결과는 loading·error state를 분리해 접근성 메시지와 함께 표시합니다.

## 공식 문서

- [Svelte $state](https://svelte.dev/docs/svelte/$state)
- [Svelte $derived](https://svelte.dev/docs/svelte/$derived)
- [Svelte $effect](https://svelte.dev/docs/svelte/$effect)
